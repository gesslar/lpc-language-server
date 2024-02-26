import {
  BailErrorStrategy,
  CharStreams,
  CommonTokenStream,
  DefaultErrorStrategy,
  IInterpreterData,
  ParseCancellationException,
  ParseTreeWalker,
  PredictionMode,
} from "antlr4ng";
import { LPCLexer } from "../parser3/LPCLexer";
import { LPCParser, ProgramContext } from "../parser3/LPCParser";
import * as path from "path";
import { IContextDetails, IDiagnosticEntry, DiagnosticType } from "../types";
import { ContextErrorListener } from "./ContextErrorListener";
import { ContextLexerErrorListener } from "./ContextLexerErrorListener";
import { ContextSymbolTable } from "./ContextSymbolTable";
import { SemanticListener } from "./SemanticListener";

/**
 * Source context for a single LPC file.
 */
export class SourceContext {
  public symbolTable: ContextSymbolTable;
  public sourceId: string;
  public info: IContextDetails = {
    unreferencedMethods: [],
    imports: [],
  };

  /* @internal */
  public diagnostics: IDiagnosticEntry[] = [];

  // eslint-disable-next-line no-use-before-define
  private references: SourceContext[] = []; // Contexts referencing us.

  // Result related fields.
  private semanticAnalysisDone = false; // Includes determining reference counts.

  // grammar parsing stuff
  private lexer: LPCLexer;
  private tokenStream: CommonTokenStream;
  private parser: LPCParser;
  private errorListener: ContextErrorListener = new ContextErrorListener(
    this.diagnostics
  );
  private lexerErrorListener: ContextLexerErrorListener =
    new ContextLexerErrorListener(this.diagnostics);

  // Grammar data.
  private grammarLexerData: IInterpreterData | undefined;
  private grammarLexerRuleMap = new Map<string, number>(); // A mapping from lexer rule names to their index.
  private grammarParserData: IInterpreterData | undefined;
  private grammarParserRuleMap = new Map<string, number>(); // A mapping from parser rule names to their index.

  private tree: ProgramContext | undefined; // The root context from the last parse run.

  public constructor(public fileName: string, private extensionDir: string) {
    this.sourceId = path.basename(fileName, path.extname(fileName));
    this.symbolTable = new ContextSymbolTable(
      this.sourceId,
      { allowDuplicateSymbols: true },
      this
    );

    // // Initialize static global symbol table, if not yet done.
    // const eof = SourceContext.globalSymbols.resolveSync("EOF");
    // if (!eof) {
    //     SourceContext.globalSymbols.addNewSymbolOfType(BuiltInChannelSymbol, undefined,
    //         "DEFAULT_TOKEN_CHANNEL");
    //     SourceContext.globalSymbols.addNewSymbolOfType(BuiltInChannelSymbol, undefined, "HIDDEN");
    //     SourceContext.globalSymbols.addNewSymbolOfType(BuiltInTokenSymbol, undefined, "EOF");
    //     SourceContext.globalSymbols.addNewSymbolOfType(BuiltInModeSymbol, undefined, "DEFAULT_MODE");
    // }

    this.lexer = new LPCLexer(CharStreams.fromString(""));

    // There won't be lexer errors actually. They are silently bubbled up and will cause parser errors.
    this.lexer.removeErrorListeners();
    this.lexer.addErrorListener(this.lexerErrorListener);

    this.tokenStream = new CommonTokenStream(this.lexer);

    this.parser = new LPCParser(this.tokenStream);
    this.parser.buildParseTrees = true;
    this.parser.removeErrorListeners();
    this.parser.addErrorListener(this.errorListener);
  }

  public get hasErrors(): boolean {
    for (const diagnostic of this.diagnostics) {
      if (diagnostic.type === DiagnosticType.Error) {
        return true;
      }
    }

    return false;
  }

  /**
   * Should be called on every change to keep the input stream up to date, particularly for code completion.
   * This call doesn't do any expensive processing (parse() does).
   *
   * @param source The new content of the editor.
   */
  public setText(source: string): void {
    this.lexer.inputStream = CharStreams.fromString(source);
  }

  public parse(): string[] {
    // Rewind the input stream for a new parse run.
    this.lexer.reset();
    this.tokenStream.setTokenSource(this.lexer);

    this.parser.reset();
    this.parser.errorHandler = new BailErrorStrategy();
    this.parser.interpreter.predictionMode = PredictionMode.SLL;

    this.tree = undefined;

    this.info.imports.length = 0;

    this.grammarLexerData = undefined;
    this.grammarLexerRuleMap.clear();
    this.grammarParserData = undefined;
    this.grammarLexerRuleMap.clear();

    this.semanticAnalysisDone = false;
    this.diagnostics.length = 0;

    // this.symbolTable.clear();
    // this.symbolTable.addDependencies(SourceContext.globalSymbols);

    try {
      this.tree = this.parser.program();
    } catch (e) {
      if (e instanceof ParseCancellationException) {
        this.lexer.reset();
        this.tokenStream.setTokenSource(this.lexer);
        this.parser.reset();
        this.parser.errorHandler = new DefaultErrorStrategy();
        this.parser.interpreter.predictionMode = PredictionMode.LL;
        this.tree = this.parser.program();
      } else {
        throw e;
      }
    }

    if (this.tree && this.tree.getChildCount() > 0) {
      try {
        // get into about the lpc program here, if needed
      } catch (e) {
        // ignored
      }
    }

    // this.symbolTable.tree = this.tree;
    // const listener = new DetailsListener(this.symbolTable, this.info.imports);
    // ParseTreeWalker.DEFAULT.walk(listener, this.tree);

    //this.info.unreferencedRules = this.symbolTable.getUnreferencedSymbols();

    return this.info.imports;
  }

  /**
   * Add this context to the list of referencing contexts in the given context.
   *
   * @param context The context to add.
   */
  public addAsReferenceTo(context: SourceContext): void {
    // Check for mutual inclusion. References are organized like a mesh.
    const pipeline: SourceContext[] = [context];
    while (pipeline.length > 0) {
      const current = pipeline.shift();
      if (!current) {
        continue;
      }

      if (current.references.indexOf(this) > -1) {
        return; // Already in the list.
      }

      pipeline.push(...current.references);
    }
    context.references.push(this);

    this.symbolTable.addDependencies(context.symbolTable);
  }

  /**
   * Remove the given context from our list of dependencies.
   *
   * @param context The context to remove.
   */
  public removeDependency(context: SourceContext): void {
    const index = context.references.indexOf(this);
    if (index > -1) {
      context.references.splice(index, 1);
    }

    this.symbolTable.removeDependency(context.symbolTable);
  }

  private runSemanticAnalysisIfNeeded() {
    if (!this.semanticAnalysisDone && this.tree) {
      this.semanticAnalysisDone = true;

      const semanticListener = new SemanticListener(
        this.diagnostics,
        this.symbolTable
      );
      ParseTreeWalker.DEFAULT.walk(semanticListener, this.tree);
    }
  }

  public getDiagnostics(): IDiagnosticEntry[] {
    this.runSemanticAnalysisIfNeeded();

    return this.diagnostics;
  }
}