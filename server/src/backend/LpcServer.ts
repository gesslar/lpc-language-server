import { LpcFacade } from "./facade";
import {
    CompletionItem,
    CompletionList,
    Connection,
    Diagnostic,
    DiagnosticRelatedInformation,
    DiagnosticSeverity,
    DidChangeConfigurationNotification,
    Disposable,
    InitializeParams,
    InitializeResult,
    InitializedParams,
    Location,
    MarkupContent,
    NotificationType,
    NotificationType0,
    OptionalVersionedTextDocumentIdentifier,
    Position,
    Range,
    TextDocumentEdit,
    TextDocumentSyncKind,
    TextDocuments,
    TextEdit,
    WorkspaceEdit,
} from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import * as path from "path";
import { URI } from "vscode-uri";
import { LpcSymbolProvider } from "./SymbolProvider";
import { LpcDefinitionProvider } from "./DefinitionProvider";
import { IDiagnosticEntry, ILexicalRange, ISymbolInfo } from "../types";
import { CodeLensProvider } from "./CodeLensProvider";
import {
    completionDetails,
    completionSortKeys,
    generateSymbolDoc,
    translateCompletionKind,
} from "../symbols/Symbol";
import { HoverProvider } from "./HoverProvider";
import { lexRangeToLspRange } from "../utils";
import { DiagnosticProvider } from "./DiagnosticProvider";
import { MethodSymbol } from "../symbols/methodSymbol";
import { SourceContext } from "./SourceContext";
import { EfunSymbols } from "./EfunsLDMud";
import { CompletionProvider } from "./CompletionProvider";
import { SignatureHelpProvider } from "./SignatureHelpProvider";
import {
    IRenameableSymbol,
    isInstanceOfIRenameableSymbol,
} from "../symbols/base";
import { RenameProvider } from "./RenameProvider";

const CHANGE_DEBOUNCE_MS = 500;

export class LpcServer {
    private importDir: string[] | undefined;
    private facade: LpcFacade;

    /** timers used to debounce change events */
    private changeTimers = new Map<string, ReturnType<typeof setTimeout>>(); // Keyed by file name.

    private hasConfigurationCapability = false;
    private hasWorkspaceFolderCapability = false;
    private hasDiagnosticRelatedInformationCapability = false;
    private foldingRangeLimit = Number.MAX_VALUE;

    // providers
    private symbolProvider: LpcSymbolProvider;
    private definitionProvider: LpcDefinitionProvider;
    private codeLenseProvider: CodeLensProvider;
    private hoverProvider: HoverProvider;
    private diagnosticProvider: DiagnosticProvider;
    private completionProvider: CompletionProvider;
    private signatureHelpProvider: SignatureHelpProvider;
    private renameProvider: RenameProvider;

    /** document listener */
    private readonly documents: TextDocuments<TextDocument> = new TextDocuments(
        TextDocument
    );

    constructor(private connection: Connection) {
        this.connection.onInitialize((params) => {
            return this.onIntialize(params);
        });
        this.connection.onInitialized(() => {
            if (this.hasConfigurationCapability) {
                // Register for all configuration changes.
                connection.client.register(
                    DidChangeConfigurationNotification.type,
                    undefined
                );
            }
            if (this.hasWorkspaceFolderCapability) {
                connection.workspace.onDidChangeWorkspaceFolders((_event) => {
                    connection.console.log(
                        "Workspace folder change event received."
                    );
                });
            }
        });

        // Symbol Provider
        this.connection.onDocumentSymbol((params) => {
            const doc = this.documents.get(params.textDocument.uri);
            const result = this.symbolProvider.getSymbols(doc);
            return result;
        });

        // Definition Provider
        this.connection.onDefinition((params) => {
            const doc = this.documents.get(params.textDocument.uri);
            try {
                const result = this.definitionProvider.getDefinition(
                    doc,
                    params.position
                );
                return result;
            } catch (e) {
                console.error(e);
                return null;
            }
        });

        this.connection.onImplementation((params) => {
            const doc = this.documents.get(params.textDocument.uri);
            const result = this.definitionProvider.getDefinition(
                doc,
                params.position,
                true
            );
            return result;
        });

        // Codelense Provider
        // this.registerCodelensProvider();
        // this.connection.onCodeLensResolve((params) => {
        //     const result = this.codeLenseProvider.resolveCodeLens(params);
        //     return result;
        // });

        // Completion Provider
        this.connection.onCompletion(async (params) => {
            const doc = this.documents.get(params.textDocument.uri);

            // force doc to update so that code completion can use the latest token positions
            // this is needed for situations where code completion is triggered automatically
            // (like a call_other arrow `->`)
            this.flushChangeTimer(doc);

            return this.completionProvider.provideCompletionItems(
                doc,
                params.position
            );
        });
        this.connection.onCompletionResolve((item) => {
            return this.completionProvider.resolveCompletionItem(item);
        });

        // Hover Provider
        this.connection.onHover((params) => {
            const doc = this.documents.get(params.textDocument.uri);
            try {
                const result = this.hoverProvider.getHover(
                    doc.uri,
                    params.position
                );
                return result;
            } catch (e) {
                console.error(e);
                return null;
            }
        });

        this.connection.onSignatureHelp((params) => {
            const doc = this.documents.get(params.textDocument.uri);
            try {
                this.flushChangeTimer(doc);
                return this.signatureHelpProvider.getSignatureHelp(
                    doc,
                    params.position
                );
            } catch (e) {
                console.error(e);
                return null;
            }
        });

        // Folding Provider
        this.connection.onFoldingRanges((params) => {
            const doc = this.documents.get(params.textDocument.uri);
            const result = this.facade.getFoldingRanges(doc.uri);
            return result;
        });

        // Rename Provider
        this.connection.onRenameRequest((params) => {
            const doc = this.documents.get(params.textDocument.uri);
            const { position, newName } = params;
            return this.renameProvider.handleRenameRequest(
                doc,
                position,
                newName
            );
        });

        // send document open/close/changes to facade
        this.documents.onDidOpen((e) => {
            this.facade.loadLpc(e.document.uri, e.document.getText());

            this.processDiagnostic(e.document);
        });
        this.documents.onDidClose((e) => {
            this.facade.releaseLpc(e.document.uri);
        });

        this.documents.onDidChangeContent((e) => {
            const filename = e.document.uri;

            // always update text, but debounce reparse and other updates
            this.facade.setText(e.document);

            const timer = this.changeTimers.get(filename);
            if (timer) {
                clearTimeout(timer);
            }

            this.changeTimers.set(
                filename,
                setTimeout(() => {
                    this.processDocChange(e.document);
                }, CHANGE_DEBOUNCE_MS)
            );
        });
    }

    /**
     * Checks if a file has a pending doc change and if so, forces the reparse ahead of schedule.
     * @param filename
     */
    private flushChangeTimer(document: TextDocument) {
        const filename = document.uri;
        const timer = this.changeTimers.get(filename);
        if (timer) {
            clearTimeout(timer);
            this.processDocChange(document);
        }
    }

    private processDocChange(document: TextDocument) {
        const filename = document.uri;
        this.changeTimers.delete(filename);
        this.codeLenseProvider.resolveCodeLens;
        this.facade.reparse(filename);

        this.processDiagnostic(document);

        //force refresh codelense
        //this.registerCodelensProvider();
    }

    public start() {
        this.documents.listen(this.connection);
        this.connection.listen();
    }

    private onIntialize(params: InitializeParams) {
        const capabilities = params.capabilities;

        // Does the client support the `workspace/configuration` request?
        // If not, we fall back using global settings.
        this.hasConfigurationCapability = !!(
            capabilities.workspace && !!capabilities.workspace.configuration
        );
        this.hasWorkspaceFolderCapability = !!(
            capabilities.workspace && !!capabilities.workspace.workspaceFolders
        );
        this.hasDiagnosticRelatedInformationCapability = !!(
            capabilities.textDocument &&
            capabilities.textDocument.publishDiagnostics &&
            capabilities.textDocument.publishDiagnostics.relatedInformation
        );

        const result: InitializeResult = {
            capabilities: {
                textDocumentSync: TextDocumentSyncKind.Incremental,
                // Tell the client that this server supports code completion.
                completionProvider: {
                    resolveProvider: true,
                    triggerCharacters: [">"],
                },
                renameProvider: true,
                documentSymbolProvider: true,
                // codeLensProvider: {
                //     resolveProvider: true,
                //     workDoneProgress: false,
                // },
                hoverProvider: true,
                definitionProvider: true,
                implementationProvider: true,
                foldingRangeProvider: true, // change to true to enable server-based folding
                signatureHelpProvider: {
                    triggerCharacters: ["(", ","],
                },
            },
        };

        if (this.hasWorkspaceFolderCapability) {
            result.capabilities.workspace = {
                workspaceFolders: {
                    supported: true,
                },
            };
        }

        const folders = params.workspaceFolders;
        const rootFolder = folders && folders.length > 0 ? folders[0].uri : "";
        const rootFolderUri = URI.parse(rootFolder);
        const rootFolderPath = rootFolderUri.fsPath;

        this.importDir = [
            path.join(rootFolderPath, "sys"),
            path.join(rootFolderPath, "obj"),
        ];
        this.facade = new LpcFacade(this.importDir, rootFolderPath);

        // hook up the run diagnostic event emitter
        this.facade.onRunDiagnostics = (filename) => {
            const uri = URI.file(filename).toString();
            const doc = this.documents.get(uri);
            if (!!doc) {
                this.flushChangeTimer(doc);
                this.processDiagnostic(doc);
            }
        };

        // init providers
        this.symbolProvider = new LpcSymbolProvider(this.facade);
        this.definitionProvider = new LpcDefinitionProvider(this.facade);
        this.codeLenseProvider = new CodeLensProvider(this.facade);
        this.hoverProvider = new HoverProvider(this.facade);
        this.diagnosticProvider = new DiagnosticProvider(this.facade);
        this.completionProvider = new CompletionProvider(this.facade);
        this.signatureHelpProvider = new SignatureHelpProvider(this.facade);
        this.renameProvider = new RenameProvider(this.facade);

        return result;
    }

    // private clDisp: Disposable;
    // private registerCodelensProvider() {
    //     if (!!this.clDisp) {
    //         this.clDisp.dispose();
    //     }
    //     this.clDisp = this.connection.onCodeLens((params) => {
    //         const doc = this.documents.get(params.textDocument.uri);
    //         const result = this.codeLenseProvider.provideCodeLenses(doc);
    //         return result;
    //     });
    // }

    public processDiagnostic(document: TextDocument) {
        const result = this.diagnosticProvider.processDiagnostic(document);

        // send grouped results
        for (const diagResult of result) {
            console.debug(`Sending diagnostics for ${diagResult.uri}`);

            const { uri, diagnostics, version } = diagResult;

            this.connection.sendDiagnostics({
                uri,
                diagnostics,
                version,
            });
        }
        // this.connection.sendDiagnostics({
        //     uri: document.uri,
        //     diagnostics: results,
        //     version: document.version,
        // });
        //return results;
    }
}
