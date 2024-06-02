#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
import { BailErrorStrategy, CharStream, CommonTokenStream } from "antlr4ng";
import { LPCLexer } from "./parser3/LPCLexer";
import { LPCParser } from "./parser3/LPCParser";
import { TextDocument } from "vscode-languageserver-textdocument";
import { LPCTokenFactor } from "./parser3/LPCTokenFactory";
import { LPCPreprocessingLexer } from "./parser3/LPCPreprocessingLexer";
import { LPCToken } from "./parser3/LPCToken";
import { IFileHandler } from "./backend/types";
import { ConsoleErrorListener } from "./ConsoleErrorListener";

class MockFileHandler implements IFileHandler {
    constructor() {}

    public loadImport(
        refFilename: string,
        filename: string
    ): { uri: string; source: string } {
        filename = filename.slice(1, -1);
        if (fs.existsSync(filename)) {
            const source = fs.readFileSync(filename, "utf-8");
            return { uri: filename, source };
        } else {
            return { uri: filename, source: "" };
        }
    }
}

//import { LpcFacade } from "./backend/facade";
const filename = process.argv[2];
const code = fs.existsSync(filename)
    ? fs.readFileSync(filename, "utf-8")
    : process.argv.slice(2).join(" ").replace(/\\n/g, "\n");

// const codeStream = new ReadableString(code);
// const unbuf = new UnbufferedCharStream(codeStream, 256);
// for (let i = 0; i < 10; i++) {
//     console.log(`${i}: ${String.fromCharCode(unbuf.LA(0))}`);
//     unbuf.consume();
// }

const doc = TextDocument.create("uri", "lpc", 0, code);
const stream = CharStream.fromString(code);
const lexer = new LPCPreprocessingLexer(stream, filename);
lexer.fileHandler = new MockFileHandler();
lexer.tokenFactory = new LPCTokenFactor(filename);

const tStream = new CommonTokenStream(lexer, 0);
const parser = new LPCParser(tStream);
parser.errorHandler = new BailErrorStrategy();
parser.addErrorListener(new ConsoleErrorListener());
parser.setTokenFactory(lexer.tokenFactory);

tStream.fill();
const finalTokens = tStream.getTokens();
finalTokens.forEach((t) => {
    console.log((t as LPCToken).toString());
});

const newSource = finalTokens
    .filter((t) => t.channel == 0 || t.type == LPCLexer.WS)
    .map((t) => t.text)
    .join("");

//lexer.reset();
// lexer.inputStream = CharStream.fromString(code);
// tStream.setTokenSource(lexer);
// parser.reset();

tStream.reset();
tStream.fill();

//parser.interpreter.predictionMode = PredictionMode.SLL;
const tree = parser.program();
console.log("tree", tree.children);

//const filename = process.argv[2];
//const dir = path.dirname(filename);

// const backend = new LpcFacade(dir);
// //main file
// const ctxFile = backend.loadLpc(filename, code);

// const tree = ctxFile.symbolTable;

// const m = tree.getAllSymbolsSync(MethodSymbol, false);
// const v = tree.getAllNestedSymbolsSync("subFn");

// // trigger semantic analysis
// backend.getDiagnostics(filename);

// const tbl = backend.getContext(filename).symbolTable;

// const varI = tbl.resolveSync("i") as VariableSymbol;
// const varS = m[0].resolveSync("s") as VariableSymbol;
// const finalValue = varI?.value;
// const finalTValue = varS?.value;

// console.log("i", finalValue);
// console.log("t", finalTValue);

const i = 0;
