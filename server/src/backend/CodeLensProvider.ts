import { TextDocument } from "vscode-languageserver-textdocument";
import { LpcFacade } from "./facade";
import { ISymbolInfo, SymbolKind } from "../types";
import { CodeLens, Range } from "vscode-languageserver";
import * as EventEmitter from "events";

export class CodeLensProvider {
    private documentName: string;

    constructor(private backend: LpcFacade) {}

    public provideCodeLenses(document: TextDocument) {
        const filename = (this.documentName = document.uri);
        const symbols = this.backend.listTopLevelSymbols(filename, false);
        const lenses: CodeLens[] = [];
        for (const symbol of symbols) {
            if (!symbol.definition) {
                continue;
            }

            switch (symbol.kind) {
                case SymbolKind.Method:
                case SymbolKind.Variable:
                case SymbolKind.Define:
                    const range = Range.create(
                        symbol.definition.range.start.row - 1,
                        symbol.definition.range.start.column,
                        symbol.definition.range.end.row - 1,
                        symbol.definition.range.end.column
                    );

                    const lens = CodeLens.create(range, symbol);
                    lenses.push(lens);

                    break;
            }
        }

        return lenses;
    }

    public resolveCodeLens(codeLens: CodeLens): CodeLens {
        const symbol = codeLens.data as ISymbolInfo;
        const refs = this.backend.countReferences(
            this.documentName,
            symbol.name
        );
        codeLens.command = {
            title: refs === 1 ? "1 reference" : `${refs} references`,
            command: "",
            arguments: undefined,
            
        };

        return codeLens;
    }

   
}
