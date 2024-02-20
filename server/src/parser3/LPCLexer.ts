// Generated from grammar/LPC.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class LPCLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly AUTO = 6;
    public static readonly BREAK = 7;
    public static readonly CASE = 8;
    public static readonly CHAR = 9;
    public static readonly CONST = 10;
    public static readonly CONTINUE = 11;
    public static readonly DEFAULT = 12;
    public static readonly DO = 13;
    public static readonly ELSE = 14;
    public static readonly ENUM = 15;
    public static readonly EXTERN = 16;
    public static readonly FOR = 17;
    public static readonly GOTO = 18;
    public static readonly IF = 19;
    public static readonly INT = 20;
    public static readonly LONG = 21;
    public static readonly REGISTER = 22;
    public static readonly RETURN = 23;
    public static readonly SHORT = 24;
    public static readonly SIGNED = 25;
    public static readonly SIZEOF = 26;
    public static readonly STATIC = 27;
    public static readonly STRUCT = 28;
    public static readonly SWITCH = 29;
    public static readonly TYPEDEF = 30;
    public static readonly UNION = 31;
    public static readonly UNSIGNED = 32;
    public static readonly VOID = 33;
    public static readonly VOLATILE = 34;
    public static readonly WHILE = 35;
    public static readonly PLUS = 36;
    public static readonly MINUS = 37;
    public static readonly STAR = 38;
    public static readonly DIV = 39;
    public static readonly MOD = 40;
    public static readonly INC = 41;
    public static readonly DEC = 42;
    public static readonly SHL = 43;
    public static readonly SHR = 44;
    public static readonly LT = 45;
    public static readonly GT = 46;
    public static readonly LE = 47;
    public static readonly GE = 48;
    public static readonly EQ = 49;
    public static readonly NE = 50;
    public static readonly AND = 51;
    public static readonly OR = 52;
    public static readonly XOR = 53;
    public static readonly NOT = 54;
    public static readonly AND_AND = 55;
    public static readonly OR_OR = 56;
    public static readonly QUESTION = 57;
    public static readonly COLON = 58;
    public static readonly SEMI = 59;
    public static readonly COMMA = 60;
    public static readonly IntegerConstant = 61;
    public static readonly FloatingConstant = 62;
    public static readonly StringLiteral = 63;
    public static readonly CharacterConstant = 64;
    public static readonly Identifier = 65;
    public static readonly WS = 66;
    public static readonly COMMENT = 67;
    public static readonly LINE_COMMENT = 68;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'('", "')'", "'='", "'{'", "'}'", "'auto'", "'break'", "'case'", 
        "'char'", "'const'", "'continue'", "'default'", "'do'", "'else'", 
        "'enum'", "'extern'", "'for'", "'goto'", "'if'", "'int'", "'long'", 
        "'register'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
        "'struct'", "'switch'", "'typedef'", "'union'", "'unsigned'", "'void'", 
        "'volatile'", "'while'", "'+'", "'-'", "'*'", "'/'", "'%'", "'++'", 
        "'--'", "'<<'", "'>>'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
        "'&'", "'|'", "'^'", "'!'", "'&&'", "'||'", "'?'", "':'", "';'", 
        "','"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, "AUTO", "BREAK", "CASE", "CHAR", 
        "CONST", "CONTINUE", "DEFAULT", "DO", "ELSE", "ENUM", "EXTERN", 
        "FOR", "GOTO", "IF", "INT", "LONG", "REGISTER", "RETURN", "SHORT", 
        "SIGNED", "SIZEOF", "STATIC", "STRUCT", "SWITCH", "TYPEDEF", "UNION", 
        "UNSIGNED", "VOID", "VOLATILE", "WHILE", "PLUS", "MINUS", "STAR", 
        "DIV", "MOD", "INC", "DEC", "SHL", "SHR", "LT", "GT", "LE", "GE", 
        "EQ", "NE", "AND", "OR", "XOR", "NOT", "AND_AND", "OR_OR", "QUESTION", 
        "COLON", "SEMI", "COMMA", "IntegerConstant", "FloatingConstant", 
        "StringLiteral", "CharacterConstant", "Identifier", "WS", "COMMENT", 
        "LINE_COMMENT"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "AUTO", "BREAK", "CASE", 
        "CHAR", "CONST", "CONTINUE", "DEFAULT", "DO", "ELSE", "ENUM", "EXTERN", 
        "FOR", "GOTO", "IF", "INT", "LONG", "REGISTER", "RETURN", "SHORT", 
        "SIGNED", "SIZEOF", "STATIC", "STRUCT", "SWITCH", "TYPEDEF", "UNION", 
        "UNSIGNED", "VOID", "VOLATILE", "WHILE", "PLUS", "MINUS", "STAR", 
        "DIV", "MOD", "INC", "DEC", "SHL", "SHR", "LT", "GT", "LE", "GE", 
        "EQ", "NE", "AND", "OR", "XOR", "NOT", "AND_AND", "OR_OR", "QUESTION", 
        "COLON", "SEMI", "COMMA", "IntegerConstant", "FloatingConstant", 
        "StringLiteral", "CharacterConstant", "Identifier", "WS", "COMMENT", 
        "LINE_COMMENT",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, LPCLexer._ATN, LPCLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "LPC.g4"; }

    public get literalNames(): (string | null)[] { return LPCLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return LPCLexer.symbolicNames; }
    public get ruleNames(): string[] { return LPCLexer.ruleNames; }

    public get serializedATN(): number[] { return LPCLexer._serializedATN; }

    public get channelNames(): string[] { return LPCLexer.channelNames; }

    public get modeNames(): string[] { return LPCLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,68,480,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
        39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,
        45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,
        52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,
        58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,
        65,7,65,2,66,7,66,2,67,7,67,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,
        1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,
        1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,
        10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
        11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,
        14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,
        17,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,
        20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,
        22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,
        24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
        26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,
        27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,
        29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,
        31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,
        33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,
        35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,1,40,1,41,1,
        41,1,41,1,42,1,42,1,42,1,43,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,
        46,1,46,1,47,1,47,1,47,1,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,
        51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,1,54,1,55,1,55,1,55,1,56,1,
        56,1,57,1,57,1,58,1,58,1,59,1,59,1,60,4,60,394,8,60,11,60,12,60,
        395,1,61,5,61,399,8,61,10,61,12,61,402,9,61,1,61,1,61,4,61,406,8,
        61,11,61,12,61,407,1,61,1,61,3,61,412,8,61,1,61,4,61,415,8,61,11,
        61,12,61,416,3,61,419,8,61,1,62,1,62,1,62,1,62,5,62,425,8,62,10,
        62,12,62,428,9,62,1,62,1,62,1,63,1,63,1,63,1,63,3,63,436,8,63,1,
        63,1,63,1,64,1,64,5,64,442,8,64,10,64,12,64,445,9,64,1,65,4,65,448,
        8,65,11,65,12,65,449,1,65,1,65,1,66,1,66,1,66,1,66,5,66,458,8,66,
        10,66,12,66,461,9,66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,
        5,67,472,8,67,10,67,12,67,475,9,67,1,67,1,67,1,67,1,67,2,459,473,
        0,68,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,
        13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,
        24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,
        35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,45,91,
        46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,107,54,109,55,111,
        56,113,57,115,58,117,59,119,60,121,61,123,62,125,63,127,64,129,65,
        131,66,133,67,135,68,1,0,8,1,0,48,57,2,0,69,69,101,101,2,0,43,43,
        45,45,4,0,10,10,13,13,34,34,92,92,4,0,10,10,13,13,39,39,92,92,3,
        0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,
        32,32,492,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,
        0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,
        0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,
        0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,
        0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,
        0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,
        0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,
        0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,
        0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,
        0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,
        0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,
        109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,
        0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,
        1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,
        1,137,1,0,0,0,3,139,1,0,0,0,5,141,1,0,0,0,7,143,1,0,0,0,9,145,1,
        0,0,0,11,147,1,0,0,0,13,152,1,0,0,0,15,158,1,0,0,0,17,163,1,0,0,
        0,19,168,1,0,0,0,21,174,1,0,0,0,23,183,1,0,0,0,25,191,1,0,0,0,27,
        194,1,0,0,0,29,199,1,0,0,0,31,204,1,0,0,0,33,211,1,0,0,0,35,215,
        1,0,0,0,37,220,1,0,0,0,39,223,1,0,0,0,41,227,1,0,0,0,43,232,1,0,
        0,0,45,241,1,0,0,0,47,248,1,0,0,0,49,254,1,0,0,0,51,261,1,0,0,0,
        53,268,1,0,0,0,55,275,1,0,0,0,57,282,1,0,0,0,59,289,1,0,0,0,61,297,
        1,0,0,0,63,303,1,0,0,0,65,312,1,0,0,0,67,317,1,0,0,0,69,326,1,0,
        0,0,71,332,1,0,0,0,73,334,1,0,0,0,75,336,1,0,0,0,77,338,1,0,0,0,
        79,340,1,0,0,0,81,342,1,0,0,0,83,345,1,0,0,0,85,348,1,0,0,0,87,351,
        1,0,0,0,89,354,1,0,0,0,91,356,1,0,0,0,93,358,1,0,0,0,95,361,1,0,
        0,0,97,364,1,0,0,0,99,367,1,0,0,0,101,370,1,0,0,0,103,372,1,0,0,
        0,105,374,1,0,0,0,107,376,1,0,0,0,109,378,1,0,0,0,111,381,1,0,0,
        0,113,384,1,0,0,0,115,386,1,0,0,0,117,388,1,0,0,0,119,390,1,0,0,
        0,121,393,1,0,0,0,123,400,1,0,0,0,125,420,1,0,0,0,127,431,1,0,0,
        0,129,439,1,0,0,0,131,447,1,0,0,0,133,453,1,0,0,0,135,467,1,0,0,
        0,137,138,5,40,0,0,138,2,1,0,0,0,139,140,5,41,0,0,140,4,1,0,0,0,
        141,142,5,61,0,0,142,6,1,0,0,0,143,144,5,123,0,0,144,8,1,0,0,0,145,
        146,5,125,0,0,146,10,1,0,0,0,147,148,5,97,0,0,148,149,5,117,0,0,
        149,150,5,116,0,0,150,151,5,111,0,0,151,12,1,0,0,0,152,153,5,98,
        0,0,153,154,5,114,0,0,154,155,5,101,0,0,155,156,5,97,0,0,156,157,
        5,107,0,0,157,14,1,0,0,0,158,159,5,99,0,0,159,160,5,97,0,0,160,161,
        5,115,0,0,161,162,5,101,0,0,162,16,1,0,0,0,163,164,5,99,0,0,164,
        165,5,104,0,0,165,166,5,97,0,0,166,167,5,114,0,0,167,18,1,0,0,0,
        168,169,5,99,0,0,169,170,5,111,0,0,170,171,5,110,0,0,171,172,5,115,
        0,0,172,173,5,116,0,0,173,20,1,0,0,0,174,175,5,99,0,0,175,176,5,
        111,0,0,176,177,5,110,0,0,177,178,5,116,0,0,178,179,5,105,0,0,179,
        180,5,110,0,0,180,181,5,117,0,0,181,182,5,101,0,0,182,22,1,0,0,0,
        183,184,5,100,0,0,184,185,5,101,0,0,185,186,5,102,0,0,186,187,5,
        97,0,0,187,188,5,117,0,0,188,189,5,108,0,0,189,190,5,116,0,0,190,
        24,1,0,0,0,191,192,5,100,0,0,192,193,5,111,0,0,193,26,1,0,0,0,194,
        195,5,101,0,0,195,196,5,108,0,0,196,197,5,115,0,0,197,198,5,101,
        0,0,198,28,1,0,0,0,199,200,5,101,0,0,200,201,5,110,0,0,201,202,5,
        117,0,0,202,203,5,109,0,0,203,30,1,0,0,0,204,205,5,101,0,0,205,206,
        5,120,0,0,206,207,5,116,0,0,207,208,5,101,0,0,208,209,5,114,0,0,
        209,210,5,110,0,0,210,32,1,0,0,0,211,212,5,102,0,0,212,213,5,111,
        0,0,213,214,5,114,0,0,214,34,1,0,0,0,215,216,5,103,0,0,216,217,5,
        111,0,0,217,218,5,116,0,0,218,219,5,111,0,0,219,36,1,0,0,0,220,221,
        5,105,0,0,221,222,5,102,0,0,222,38,1,0,0,0,223,224,5,105,0,0,224,
        225,5,110,0,0,225,226,5,116,0,0,226,40,1,0,0,0,227,228,5,108,0,0,
        228,229,5,111,0,0,229,230,5,110,0,0,230,231,5,103,0,0,231,42,1,0,
        0,0,232,233,5,114,0,0,233,234,5,101,0,0,234,235,5,103,0,0,235,236,
        5,105,0,0,236,237,5,115,0,0,237,238,5,116,0,0,238,239,5,101,0,0,
        239,240,5,114,0,0,240,44,1,0,0,0,241,242,5,114,0,0,242,243,5,101,
        0,0,243,244,5,116,0,0,244,245,5,117,0,0,245,246,5,114,0,0,246,247,
        5,110,0,0,247,46,1,0,0,0,248,249,5,115,0,0,249,250,5,104,0,0,250,
        251,5,111,0,0,251,252,5,114,0,0,252,253,5,116,0,0,253,48,1,0,0,0,
        254,255,5,115,0,0,255,256,5,105,0,0,256,257,5,103,0,0,257,258,5,
        110,0,0,258,259,5,101,0,0,259,260,5,100,0,0,260,50,1,0,0,0,261,262,
        5,115,0,0,262,263,5,105,0,0,263,264,5,122,0,0,264,265,5,101,0,0,
        265,266,5,111,0,0,266,267,5,102,0,0,267,52,1,0,0,0,268,269,5,115,
        0,0,269,270,5,116,0,0,270,271,5,97,0,0,271,272,5,116,0,0,272,273,
        5,105,0,0,273,274,5,99,0,0,274,54,1,0,0,0,275,276,5,115,0,0,276,
        277,5,116,0,0,277,278,5,114,0,0,278,279,5,117,0,0,279,280,5,99,0,
        0,280,281,5,116,0,0,281,56,1,0,0,0,282,283,5,115,0,0,283,284,5,119,
        0,0,284,285,5,105,0,0,285,286,5,116,0,0,286,287,5,99,0,0,287,288,
        5,104,0,0,288,58,1,0,0,0,289,290,5,116,0,0,290,291,5,121,0,0,291,
        292,5,112,0,0,292,293,5,101,0,0,293,294,5,100,0,0,294,295,5,101,
        0,0,295,296,5,102,0,0,296,60,1,0,0,0,297,298,5,117,0,0,298,299,5,
        110,0,0,299,300,5,105,0,0,300,301,5,111,0,0,301,302,5,110,0,0,302,
        62,1,0,0,0,303,304,5,117,0,0,304,305,5,110,0,0,305,306,5,115,0,0,
        306,307,5,105,0,0,307,308,5,103,0,0,308,309,5,110,0,0,309,310,5,
        101,0,0,310,311,5,100,0,0,311,64,1,0,0,0,312,313,5,118,0,0,313,314,
        5,111,0,0,314,315,5,105,0,0,315,316,5,100,0,0,316,66,1,0,0,0,317,
        318,5,118,0,0,318,319,5,111,0,0,319,320,5,108,0,0,320,321,5,97,0,
        0,321,322,5,116,0,0,322,323,5,105,0,0,323,324,5,108,0,0,324,325,
        5,101,0,0,325,68,1,0,0,0,326,327,5,119,0,0,327,328,5,104,0,0,328,
        329,5,105,0,0,329,330,5,108,0,0,330,331,5,101,0,0,331,70,1,0,0,0,
        332,333,5,43,0,0,333,72,1,0,0,0,334,335,5,45,0,0,335,74,1,0,0,0,
        336,337,5,42,0,0,337,76,1,0,0,0,338,339,5,47,0,0,339,78,1,0,0,0,
        340,341,5,37,0,0,341,80,1,0,0,0,342,343,5,43,0,0,343,344,5,43,0,
        0,344,82,1,0,0,0,345,346,5,45,0,0,346,347,5,45,0,0,347,84,1,0,0,
        0,348,349,5,60,0,0,349,350,5,60,0,0,350,86,1,0,0,0,351,352,5,62,
        0,0,352,353,5,62,0,0,353,88,1,0,0,0,354,355,5,60,0,0,355,90,1,0,
        0,0,356,357,5,62,0,0,357,92,1,0,0,0,358,359,5,60,0,0,359,360,5,61,
        0,0,360,94,1,0,0,0,361,362,5,62,0,0,362,363,5,61,0,0,363,96,1,0,
        0,0,364,365,5,61,0,0,365,366,5,61,0,0,366,98,1,0,0,0,367,368,5,33,
        0,0,368,369,5,61,0,0,369,100,1,0,0,0,370,371,5,38,0,0,371,102,1,
        0,0,0,372,373,5,124,0,0,373,104,1,0,0,0,374,375,5,94,0,0,375,106,
        1,0,0,0,376,377,5,33,0,0,377,108,1,0,0,0,378,379,5,38,0,0,379,380,
        5,38,0,0,380,110,1,0,0,0,381,382,5,124,0,0,382,383,5,124,0,0,383,
        112,1,0,0,0,384,385,5,63,0,0,385,114,1,0,0,0,386,387,5,58,0,0,387,
        116,1,0,0,0,388,389,5,59,0,0,389,118,1,0,0,0,390,391,5,44,0,0,391,
        120,1,0,0,0,392,394,7,0,0,0,393,392,1,0,0,0,394,395,1,0,0,0,395,
        393,1,0,0,0,395,396,1,0,0,0,396,122,1,0,0,0,397,399,7,0,0,0,398,
        397,1,0,0,0,399,402,1,0,0,0,400,398,1,0,0,0,400,401,1,0,0,0,401,
        403,1,0,0,0,402,400,1,0,0,0,403,405,5,46,0,0,404,406,7,0,0,0,405,
        404,1,0,0,0,406,407,1,0,0,0,407,405,1,0,0,0,407,408,1,0,0,0,408,
        418,1,0,0,0,409,411,7,1,0,0,410,412,7,2,0,0,411,410,1,0,0,0,411,
        412,1,0,0,0,412,414,1,0,0,0,413,415,7,0,0,0,414,413,1,0,0,0,415,
        416,1,0,0,0,416,414,1,0,0,0,416,417,1,0,0,0,417,419,1,0,0,0,418,
        409,1,0,0,0,418,419,1,0,0,0,419,124,1,0,0,0,420,426,5,34,0,0,421,
        425,8,3,0,0,422,423,5,92,0,0,423,425,9,0,0,0,424,421,1,0,0,0,424,
        422,1,0,0,0,425,428,1,0,0,0,426,424,1,0,0,0,426,427,1,0,0,0,427,
        429,1,0,0,0,428,426,1,0,0,0,429,430,5,34,0,0,430,126,1,0,0,0,431,
        435,5,39,0,0,432,436,8,4,0,0,433,434,5,92,0,0,434,436,9,0,0,0,435,
        432,1,0,0,0,435,433,1,0,0,0,436,437,1,0,0,0,437,438,5,39,0,0,438,
        128,1,0,0,0,439,443,7,5,0,0,440,442,7,6,0,0,441,440,1,0,0,0,442,
        445,1,0,0,0,443,441,1,0,0,0,443,444,1,0,0,0,444,130,1,0,0,0,445,
        443,1,0,0,0,446,448,7,7,0,0,447,446,1,0,0,0,448,449,1,0,0,0,449,
        447,1,0,0,0,449,450,1,0,0,0,450,451,1,0,0,0,451,452,6,65,0,0,452,
        132,1,0,0,0,453,454,5,47,0,0,454,455,5,42,0,0,455,459,1,0,0,0,456,
        458,9,0,0,0,457,456,1,0,0,0,458,461,1,0,0,0,459,460,1,0,0,0,459,
        457,1,0,0,0,460,462,1,0,0,0,461,459,1,0,0,0,462,463,5,42,0,0,463,
        464,5,47,0,0,464,465,1,0,0,0,465,466,6,66,0,0,466,134,1,0,0,0,467,
        468,5,47,0,0,468,469,5,47,0,0,469,473,1,0,0,0,470,472,9,0,0,0,471,
        470,1,0,0,0,472,475,1,0,0,0,473,474,1,0,0,0,473,471,1,0,0,0,474,
        476,1,0,0,0,475,473,1,0,0,0,476,477,5,10,0,0,477,478,1,0,0,0,478,
        479,6,67,0,0,479,136,1,0,0,0,14,0,395,400,407,411,416,418,424,426,
        435,443,449,459,473,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!LPCLexer.__ATN) {
            LPCLexer.__ATN = new antlr.ATNDeserializer().deserialize(LPCLexer._serializedATN);
        }

        return LPCLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(LPCLexer.literalNames, LPCLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return LPCLexer.vocabulary;
    }

    private static readonly decisionsToDFA = LPCLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}