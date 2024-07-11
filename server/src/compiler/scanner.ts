import { CharacterCodes } from "../backend/types";
import { binarySearch, compareValues, identity, MapLike } from "./core";
import { Debug } from "./debug";
import { DiagnosticMessage, KeywordSyntaxKind, LineAndCharacter, PunctuationOrKeywordSyntaxKind, SourceFileLike, SyntaxKind, TokenFlags } from "./types";
import { isLineBreak, positionIsSynthesized } from "./utilities";

export type ErrorCallback = (message: DiagnosticMessage, length: number, arg0?: any) => void;

function makeReverseMap(source: Map<string, number>): string[] {
    const result: string[] = [];
    source.forEach((value, name) => {
        result[value] = name;
    });
    return result;
}



/** @internal */
export const textToKeywordObj: MapLike<KeywordSyntaxKind> = {
    // abstract: SyntaxKind.AbstractKeyword,
    // accessor: SyntaxKind.AccessorKeyword,
    // any: SyntaxKind.AnyKeyword,
    // as: SyntaxKind.AsKeyword,
    // asserts: SyntaxKind.AssertsKeyword,
    // assert: SyntaxKind.AssertKeyword,
    // bigint: SyntaxKind.BigIntKeyword,
    // boolean: SyntaxKind.BooleanKeyword,
    // break: SyntaxKind.BreakKeyword,
    // case: SyntaxKind.CaseKeyword,
    // catch: SyntaxKind.CatchKeyword,
    // class: SyntaxKind.ClassKeyword,
    // continue: SyntaxKind.ContinueKeyword,
    // const: SyntaxKind.ConstKeyword,
    // ["" + "constructor"]: SyntaxKind.ConstructorKeyword,
    // debugger: SyntaxKind.DebuggerKeyword,
    // declare: SyntaxKind.DeclareKeyword,
    // default: SyntaxKind.DefaultKeyword,
    // delete: SyntaxKind.DeleteKeyword,
    // do: SyntaxKind.DoKeyword,
    // else: SyntaxKind.ElseKeyword,
    // enum: SyntaxKind.EnumKeyword,
    // export: SyntaxKind.ExportKeyword,
    // extends: SyntaxKind.ExtendsKeyword,
    // false: SyntaxKind.FalseKeyword,
    // finally: SyntaxKind.FinallyKeyword,
    // for: SyntaxKind.ForKeyword,
    // from: SyntaxKind.FromKeyword,
    // function: SyntaxKind.FunctionKeyword,
    // get: SyntaxKind.GetKeyword,
    // if: SyntaxKind.IfKeyword,
    // implements: SyntaxKind.ImplementsKeyword,
    // import: SyntaxKind.ImportKeyword,
    // in: SyntaxKind.InKeyword,
    // infer: SyntaxKind.InferKeyword,
    // instanceof: SyntaxKind.InstanceOfKeyword,
    // interface: SyntaxKind.InterfaceKeyword,
    // intrinsic: SyntaxKind.IntrinsicKeyword,
    // is: SyntaxKind.IsKeyword,
    // keyof: SyntaxKind.KeyOfKeyword,
    // let: SyntaxKind.LetKeyword,
    // module: SyntaxKind.ModuleKeyword,
    // namespace: SyntaxKind.NamespaceKeyword,
    // never: SyntaxKind.NeverKeyword,
    // new: SyntaxKind.NewKeyword,
    // null: SyntaxKind.NullKeyword,
    // number: SyntaxKind.NumberKeyword,
    // object: SyntaxKind.ObjectKeyword,
    // package: SyntaxKind.PackageKeyword,
    private: SyntaxKind.PrivateKeyword,
    protected: SyntaxKind.ProtectedKeyword,
    public: SyntaxKind.PublicKeyword,
    // override: SyntaxKind.OverrideKeyword,
    // out: SyntaxKind.OutKeyword,
    // readonly: SyntaxKind.ReadonlyKeyword,
    // require: SyntaxKind.RequireKeyword,
    // global: SyntaxKind.GlobalKeyword,
    // return: SyntaxKind.ReturnKeyword,
    // satisfies: SyntaxKind.SatisfiesKeyword,
    // set: SyntaxKind.SetKeyword,
    // static: SyntaxKind.StaticKeyword,
    // string: SyntaxKind.StringKeyword,
    // super: SyntaxKind.SuperKeyword,
    // switch: SyntaxKind.SwitchKeyword,
    // symbol: SyntaxKind.SymbolKeyword,
    // this: SyntaxKind.ThisKeyword,
    // throw: SyntaxKind.ThrowKeyword,
    // true: SyntaxKind.TrueKeyword,
    // try: SyntaxKind.TryKeyword,
    // type: SyntaxKind.TypeKeyword,
    // typeof: SyntaxKind.TypeOfKeyword,
    // undefined: SyntaxKind.UndefinedKeyword,
    // unique: SyntaxKind.UniqueKeyword,
    // unknown: SyntaxKind.UnknownKeyword,
    // using: SyntaxKind.UsingKeyword,
    // var: SyntaxKind.VarKeyword,
    // void: SyntaxKind.VoidKeyword,
    // while: SyntaxKind.WhileKeyword,
    // with: SyntaxKind.WithKeyword,
    // yield: SyntaxKind.YieldKeyword,
    // async: SyntaxKind.AsyncKeyword,
    // await: SyntaxKind.AwaitKeyword,
    // of: SyntaxKind.OfKeyword,
};

const textToToken = new Map(Object.entries({
    ...textToKeywordObj,
    "{": SyntaxKind.OpenBraceToken,
    "}": SyntaxKind.CloseBraceToken,
    "(": SyntaxKind.OpenParenToken,
    ")": SyntaxKind.CloseParenToken,
    "[": SyntaxKind.OpenBracketToken,
    "]": SyntaxKind.CloseBracketToken,
    ".": SyntaxKind.DotToken,
    "...": SyntaxKind.DotDotDotToken,
    ";": SyntaxKind.SemicolonToken,
    ",": SyntaxKind.CommaToken,
    "<": SyntaxKind.LessThanToken,
    ">": SyntaxKind.GreaterThanToken,
    "<=": SyntaxKind.LessThanEqualsToken,
    ">=": SyntaxKind.GreaterThanEqualsToken,
    "==": SyntaxKind.EqualsEqualsToken,
    "!=": SyntaxKind.ExclamationEqualsToken,
    "===": SyntaxKind.EqualsEqualsEqualsToken,
    "!==": SyntaxKind.ExclamationEqualsEqualsToken,
    "=>": SyntaxKind.EqualsGreaterThanToken,
    "+": SyntaxKind.PlusToken,
    "-": SyntaxKind.MinusToken,
    "**": SyntaxKind.AsteriskAsteriskToken,
    "*": SyntaxKind.AsteriskToken,
    "/": SyntaxKind.SlashToken,
    "%": SyntaxKind.PercentToken,
    "++": SyntaxKind.PlusPlusToken,
    "--": SyntaxKind.MinusMinusToken,
    "<<": SyntaxKind.LessThanLessThanToken,
    "</": SyntaxKind.LessThanSlashToken,
    ">>": SyntaxKind.GreaterThanGreaterThanToken,
    ">>>": SyntaxKind.GreaterThanGreaterThanGreaterThanToken,
    "&": SyntaxKind.AmpersandToken,
    "|": SyntaxKind.BarToken,
    "^": SyntaxKind.CaretToken,
    "!": SyntaxKind.ExclamationToken,
    "~": SyntaxKind.TildeToken,
    "&&": SyntaxKind.AmpersandAmpersandToken,
    "||": SyntaxKind.BarBarToken,
    "?": SyntaxKind.QuestionToken,
    //"??": SyntaxKind.QuestionQuestionToken,
    "?.": SyntaxKind.QuestionDotToken,
    ":": SyntaxKind.ColonToken,
    "=": SyntaxKind.EqualsToken,
    "+=": SyntaxKind.PlusEqualsToken,
    "-=": SyntaxKind.MinusEqualsToken,
    "*=": SyntaxKind.AsteriskEqualsToken,
    "**=": SyntaxKind.AsteriskAsteriskEqualsToken,
    "/=": SyntaxKind.SlashEqualsToken,
    "%=": SyntaxKind.PercentEqualsToken,
    "<<=": SyntaxKind.LessThanLessThanEqualsToken,
    ">>=": SyntaxKind.GreaterThanGreaterThanEqualsToken,
    ">>>=": SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken,
    "&=": SyntaxKind.AmpersandEqualsToken,
    "|=": SyntaxKind.BarEqualsToken,
    "^=": SyntaxKind.CaretEqualsToken,
    "||=": SyntaxKind.BarBarEqualsToken,
    "&&=": SyntaxKind.AmpersandAmpersandEqualsToken,
    "??=": SyntaxKind.QuestionQuestionEqualsToken,
    "@": SyntaxKind.AtToken,
    "#": SyntaxKind.HashToken,
    //"`": SyntaxKind.BacktickToken,
}));

const tokenStrings = makeReverseMap(textToToken);

/** @internal */
export function tokenToString(t: PunctuationOrKeywordSyntaxKind): string;
export function tokenToString(t: SyntaxKind): string | undefined;
export function tokenToString(t: SyntaxKind): string | undefined {
    return tokenStrings[t];
}

/** @internal */
export function skipTrivia(text: string, pos: number, stopAfterLineBreak?: boolean, stopAtComments?: boolean, inJSDoc?: boolean): number {
    if (positionIsSynthesized(pos)) {
        return pos;
    }

    let canConsumeStar = false;
    // Keep in sync with couldStartTrivia
    // while (true) {
    //     const ch = text.charCodeAt(pos);
    //     switch (ch) {
    //         case CharacterCodes.carriageReturn:
    //             if (text.charCodeAt(pos + 1) === CharacterCodes.lineFeed) {
    //                 pos++;
    //             }
    //         // falls through
    //         case CharacterCodes.lineFeed:
    //             pos++;
    //             if (stopAfterLineBreak) {
    //                 return pos;
    //             }
    //             canConsumeStar = !!inJSDoc;
    //             continue;
    //         case CharacterCodes.tab:
    //         case CharacterCodes.verticalTab:
    //         case CharacterCodes.formFeed:
    //         case CharacterCodes.space:
    //             pos++;
    //             continue;
    //         case CharacterCodes.slash:
    //             if (stopAtComments) {
    //                 break;
    //             }
    //             if (text.charCodeAt(pos + 1) === CharacterCodes.slash) {
    //                 pos += 2;
    //                 while (pos < text.length) {
    //                     if (isLineBreak(text.charCodeAt(pos))) {
    //                         break;
    //                     }
    //                     pos++;
    //                 }
    //                 canConsumeStar = false;
    //                 continue;
    //             }
    //             if (text.charCodeAt(pos + 1) === CharacterCodes.asterisk) {
    //                 pos += 2;
    //                 while (pos < text.length) {
    //                     if (text.charCodeAt(pos) === CharacterCodes.asterisk && text.charCodeAt(pos + 1) === CharacterCodes.slash) {
    //                         pos += 2;
    //                         break;
    //                     }
    //                     pos++;
    //                 }
    //                 canConsumeStar = false;
    //                 continue;
    //             }
    //             break;

    //         case CharacterCodes.lessThan:
    //         case CharacterCodes.bar:
    //         case CharacterCodes.equals:
    //         case CharacterCodes.greaterThan:
    //             if (isConflictMarkerTrivia(text, pos)) {
    //                 pos = scanConflictMarkerTrivia(text, pos);
    //                 canConsumeStar = false;
    //                 continue;
    //             }
    //             break;

    //         case CharacterCodes.hash:
    //             if (pos === 0 && isShebangTrivia(text, pos)) {
    //                 pos = scanShebangTrivia(text, pos);
    //                 canConsumeStar = false;
    //                 continue;
    //             }
    //             break;

    //         case CharacterCodes.asterisk:
    //             if (canConsumeStar) {
    //                 pos++;
    //                 canConsumeStar = false;
    //                 continue;
    //             }
    //             break;

    //         default:
    //             if (ch > CharacterCodes.maxAsciiCharacter && (isWhiteSpaceLike(ch))) {
    //                 pos++;
    //                 continue;
    //             }
    //             break;
    //     }
    //     return pos;
    // }

    return pos;
}

export interface Scanner {
    /** @deprecated use {@link getTokenFullStart} */
    getStartPos(): number;
    getToken(): SyntaxKind;
    getTokenFullStart(): number;
    getTokenStart(): number;
    getTokenEnd(): number;
    /** @deprecated use {@link getTokenEnd} */
    getTextPos(): number;
    /** @deprecated use {@link getTokenStart} */
    getTokenPos(): number;
    getTokenText(): string;
    getTokenValue(): string;
    hasUnicodeEscape(): boolean;
    hasExtendedUnicodeEscape(): boolean;
    hasPrecedingLineBreak(): boolean;
    /** @internal */
    hasPrecedingJSDocComment(): boolean;
    isIdentifier(): boolean;
    isReservedWord(): boolean;
    isUnterminated(): boolean;
    /** @internal */
    getNumericLiteralFlags(): TokenFlags;
    /** @internal */
    //getCommentDirectives(): CommentDirective[] | undefined;
    /** @internal */
    getTokenFlags(): TokenFlags;
    reScanGreaterToken(): SyntaxKind;
    reScanSlashToken(): SyntaxKind;
    /** @internal */
    reScanSlashToken(reportErrors?: boolean): SyntaxKind; // eslint-disable-line @typescript-eslint/unified-signatures
    reScanAsteriskEqualsToken(): SyntaxKind;
    reScanTemplateToken(isTaggedTemplate: boolean): SyntaxKind;
    /** @deprecated use {@link reScanTemplateToken}(false) */
    reScanTemplateHeadOrNoSubstitutionTemplate(): SyntaxKind;
    scanJsxIdentifier(): SyntaxKind;
    scanJsxAttributeValue(): SyntaxKind;
    reScanJsxAttributeValue(): SyntaxKind;
    
    reScanLessThanToken(): SyntaxKind;
    reScanHashToken(): SyntaxKind;
    reScanQuestionToken(): SyntaxKind;
    reScanInvalidIdentifier(): SyntaxKind;
    
    //scanJsDocToken(): JSDocSyntaxKind;
    /** @internal */
    //scanJSDocCommentTextToken(inBackticks: boolean): JSDocSyntaxKind | SyntaxKind.JSDocCommentTextToken;
    scan(): SyntaxKind;

    getText(): string;
    /** @internal */
    clearCommentDirectives(): void;
    // Sets the text for the scanner to scan.  An optional subrange starting point and length
    // can be provided to have the scanner only scan a portion of the text.
    setText(text: string | undefined, start?: number, length?: number): void;
    setOnError(onError: ErrorCallback | undefined): void;
    setScriptTarget(scriptTarget: ScriptTarget): void;
    setLanguageVariant(variant: LanguageVariant): void;
    setScriptKind(scriptKind: ScriptKind): void;
    //setJSDocParsingMode(kind: JSDocParsingMode): void;
    /** @deprecated use {@link resetTokenState} */
    setTextPos(textPos: number): void;
    resetTokenState(pos: number): void;
    /** @internal */
    setSkipJsDocLeadingAsterisks(skip: boolean): void;
    // Invokes the provided callback then unconditionally restores the scanner to the state it
    // was in immediately prior to invoking the callback.  The result of invoking the callback
    // is returned from this function.
    lookAhead<T>(callback: () => T): T;

    // Invokes the callback with the scanner set to scan the specified range. When the callback
    // returns, the scanner is restored to the state it was in before scanRange was called.
    scanRange<T>(start: number, length: number, callback: () => T): T;

    // Invokes the provided callback.  If the callback returns something falsy, then it restores
    // the scanner to the state it was in immediately prior to invoking the callback.  If the
    // callback returns something truthy, then the scanner state is not rolled back.  The result
    // of invoking the callback is returned from this function.
    tryScan<T>(callback: () => T): T;
}

type ScriptKind=any;
type LanguageVariant=any;
type ScriptTarget=any;

/** @internal */
export function getLineStarts(sourceFile: SourceFileLike): readonly number[] {
    return sourceFile.lineMap || (sourceFile.lineMap = computeLineStarts(sourceFile.text));
}

/** @internal */
export function computeLineStarts(text: string): number[] {
    const result: number[] = [];
    let pos = 0;
    let lineStart = 0;
    while (pos < text.length) {
        const ch = text.charCodeAt(pos);
        pos++;
        switch (ch) {
            case CharacterCodes.carriageReturn:
                if (text.charCodeAt(pos) === CharacterCodes.lineFeed) {
                    pos++;
                }
            // falls through
            case CharacterCodes.lineFeed:
                result.push(lineStart);
                lineStart = pos;
                break;
            default:
                if (ch > CharacterCodes.maxAsciiCharacter && isLineBreak(ch)) {
                    result.push(lineStart);
                    lineStart = pos;
                }
                break;
        }
    }
    result.push(lineStart);
    return result;
}



/**
 * @internal
 * We assume the first line starts at position 0 and 'position' is non-negative.
 */
export function computeLineOfPosition(lineStarts: readonly number[], position: number, lowerBound?: number) {
    let lineNumber = binarySearch(lineStarts, position, identity, compareValues, lowerBound);
    if (lineNumber < 0) {
        // If the actual position was not found,
        // the binary search returns the 2's-complement of the next line start
        // e.g. if the line starts at [5, 10, 23, 80] and the position requested was 20
        // then the search will return -2.
        //
        // We want the index of the previous line start, so we subtract 1.
        // Review 2's-complement if this is confusing.
        lineNumber = ~lineNumber - 1;
        Debug.assert(lineNumber !== -1, "position cannot precede the beginning of the file");
    }
    return lineNumber;
}

/** @internal */
export function computeLineAndCharacterOfPosition(lineStarts: readonly number[], position: number): LineAndCharacter {
    const lineNumber = computeLineOfPosition(lineStarts, position);
    return {
        line: lineNumber,
        character: position - lineStarts[lineNumber],
    };
}

export function getLineAndCharacterOfPosition(sourceFile: SourceFileLike, position: number): LineAndCharacter {
    return computeLineAndCharacterOfPosition(getLineStarts(sourceFile), position);
}

/** @internal */
export function stringToToken(s: string): SyntaxKind | undefined {
    return textToToken.get(s);
}

function codePointAt(s: string, i: number): number {
    return s.codePointAt(i) ?? 0;
}

function isDigit(ch: number): boolean {
    return ch >= CharacterCodes._0 && ch <= CharacterCodes._9;
}

function isHexDigit(ch: number): boolean {
    return isDigit(ch) || ch >= CharacterCodes.A && ch <= CharacterCodes.F || ch >= CharacterCodes.a && ch <= CharacterCodes.f;
}

function lookupInUnicodeMap(code: number, map: readonly number[]): boolean {
    // Bail out quickly if it couldn't possibly be in the map.
    if (code < map[0]) {
        return false;
    }

    // Perform binary search in one of the Unicode range maps
    let lo = 0;
    let hi: number = map.length;
    let mid: number;

    while (lo + 1 < hi) {
        mid = lo + (hi - lo) / 2;
        // mid has to be even to catch a range's beginning
        mid -= mid % 2;
        if (map[mid] <= code && code <= map[mid + 1]) {
            return true;
        }

        if (code < map[mid]) {
            hi = mid;
        }
        else {
            lo = mid + 2;
        }
    }

    return false;
}

function isASCIILetter(ch: number): boolean {
    return ch >= CharacterCodes.A && ch <= CharacterCodes.Z || ch >= CharacterCodes.a && ch <= CharacterCodes.z;
}

// Section 6.1.4
function isWordCharacter(ch: number): boolean {
    return isASCIILetter(ch) || isDigit(ch) || ch === CharacterCodes._;
}


export function isIdentifierStart(ch: number, languageVersion: ScriptTarget | undefined): boolean {
    return isASCIILetter(ch) || ch === CharacterCodes.$ || ch === CharacterCodes._ /*||
        ch > CharacterCodes.maxAsciiCharacter && isUnicodeIdentifierStart(ch, languageVersion)*/;
}

export function isIdentifierPart(ch: number, languageVersion: ScriptTarget | undefined, identifierVariant?: LanguageVariant): boolean {
    return isWordCharacter(ch) || ch === CharacterCodes.$ /*||
        // "-" and ":" are valid in JSX Identifiers
        (identifierVariant === LanguageVariant.JSX ? (ch === CharacterCodes.minus || ch === CharacterCodes.colon) : false) ||
        ch > CharacterCodes.maxAsciiCharacter && isUnicodeIdentifierPart(ch, languageVersion)*/;
}

function charSize(ch: number) {
    if (ch >= 0x10000) {
        return 2;
    }
    if (ch === CharacterCodes.EOF) {
        return 0;
    }
    return 1;
}


/** @internal */
export function isIdentifierText(name: string, languageVersion?: ScriptTarget | undefined, identifierVariant?: LanguageVariant): boolean {
    let ch = codePointAt(name, 0);
    if (!isIdentifierStart(ch, languageVersion)) {
        return false;
    }

    for (let i = charSize(ch); i < name.length; i += charSize(ch)) {
        if (!isIdentifierPart(ch = codePointAt(name, i), languageVersion, identifierVariant)) {
            return false;
        }
    }

    return true;
}