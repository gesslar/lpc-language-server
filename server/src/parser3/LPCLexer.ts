// Generated from grammar/LPCLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class LPCLexer extends antlr.Lexer {
    public static readonly BREAK = 1;
    public static readonly CASE = 2;
    public static readonly CATCH = 3;
    public static readonly CHAR = 4;
    public static readonly CLOSURE = 5;
    public static readonly CONST = 6;
    public static readonly CONTINUE = 7;
    public static readonly DEFAULT = 8;
    public static readonly DO = 9;
    public static readonly ECHO = 10;
    public static readonly ELSE = 11;
    public static readonly ELIF = 12;
    public static readonly ENDIF = 13;
    public static readonly ENUM = 14;
    public static readonly EXTERN = 15;
    public static readonly FLOAT = 16;
    public static readonly FOR = 17;
    public static readonly FOREACH = 18;
    public static readonly GOTO = 19;
    public static readonly HASH = 20;
    public static readonly IF = 21;
    public static readonly IFDEF = 22;
    public static readonly IFNDEF = 23;
    public static readonly IN = 24;
    public static readonly INCLUDE = 25;
    public static readonly INHERIT = 26;
    public static readonly INT = 27;
    public static readonly LINE = 28;
    public static readonly MAPPING = 29;
    public static readonly MIXED = 30;
    public static readonly OBJECT = 31;
    public static readonly PRAGMA = 32;
    public static readonly RETURN = 33;
    public static readonly STATUS = 34;
    public static readonly STRUCT = 35;
    public static readonly STRING = 36;
    public static readonly SYMBOL = 37;
    public static readonly SWITCH = 38;
    public static readonly TYPEDEF = 39;
    public static readonly UNDEF = 40;
    public static readonly VIRTUAL = 41;
    public static readonly VOID = 42;
    public static readonly VOLATILE = 43;
    public static readonly WHILE = 44;
    public static readonly DEPRECATED = 45;
    public static readonly PRIVATE = 46;
    public static readonly PROTECTED = 47;
    public static readonly PUBLIC = 48;
    public static readonly STATIC = 49;
    public static readonly VISIBLE = 50;
    public static readonly NOSHADOW = 51;
    public static readonly NOSAVE = 52;
    public static readonly NOMASK = 53;
    public static readonly VARARGS = 54;
    public static readonly SUPER_ACCESSOR = 55;
    public static readonly PLUS = 56;
    public static readonly MINUS = 57;
    public static readonly STAR = 58;
    public static readonly DIV = 59;
    public static readonly MOD = 60;
    public static readonly INC = 61;
    public static readonly DEC = 62;
    public static readonly SHL = 63;
    public static readonly SHR = 64;
    public static readonly LT = 65;
    public static readonly GT = 66;
    public static readonly LE = 67;
    public static readonly GE = 68;
    public static readonly EQ = 69;
    public static readonly NE = 70;
    public static readonly AND = 71;
    public static readonly OR = 72;
    public static readonly XOR = 73;
    public static readonly NOT = 74;
    public static readonly BNOT = 75;
    public static readonly AND_AND = 76;
    public static readonly OR_OR = 77;
    public static readonly QUESTION = 78;
    public static readonly COLON = 79;
    public static readonly SEMI = 80;
    public static readonly COMMA = 81;
    public static readonly TRIPPLEDOT = 82;
    public static readonly DOUBLEDOT = 83;
    public static readonly DOT = 84;
    public static readonly ASSIGN = 85;
    public static readonly ADD_ASSIGN = 86;
    public static readonly SUB_ASSIGN = 87;
    public static readonly MUL_ASSIGN = 88;
    public static readonly DIV_ASSIGN = 89;
    public static readonly MOD_ASSIGN = 90;
    public static readonly OR_ASSIGN = 91;
    public static readonly AND_ASSIGN = 92;
    public static readonly BITAND_ASSIGN = 93;
    public static readonly BITOR_ASSIGN = 94;
    public static readonly XOR_ASSIGN = 95;
    public static readonly SHL_ASSIGN = 96;
    public static readonly MAPPING_OPEN = 97;
    public static readonly ARROW = 98;
    public static readonly PAREN_OPEN = 99;
    public static readonly PAREN_CLOSE = 100;
    public static readonly CURLY_OPEN = 101;
    public static readonly CURLY_CLOSE = 102;
    public static readonly SQUARE_OPEN = 103;
    public static readonly SQUARE_CLOSE = 104;
    public static readonly BACKSLASH = 105;
    public static readonly IntegerConstant = 106;
    public static readonly FloatingConstant = 107;
    public static readonly HexIntConstant = 108;
    public static readonly STRING_START = 109;
    public static readonly StringLiteral = 110;
    public static readonly CharacterConstant = 111;
    public static readonly CloneObject = 112;
    public static readonly LoadObject = 113;
    public static readonly Identifier = 114;
    public static readonly COMMENT = 115;
    public static readonly LINE_COMMENT = 116;
    public static readonly SOURCEMAP = 117;
    public static readonly DEFINE = 118;
    public static readonly WS = 119;
    public static readonly SINGLEQUOT = 120;
    public static readonly END_DEFINE = 121;
    public static readonly STRING_END = 122;
    public static readonly NEWLINE = 123;
    public static readonly DEFINE_MODE = 1;
    public static readonly STRING_MODE = 2;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS_CHANNEL", "SOURCEMAP_CHANNEL"
    ];

    public static readonly literalNames = [
        null, "'break'", "'case'", "'catch'", "'char'", "'closure'", "'const'", 
        "'continue'", "'default'", "'do'", "'#echo'", "'else'", "'elif'", 
        "'endif'", "'enum'", "'extern'", "'float'", "'for'", "'foreach'", 
        "'goto'", "'#'", "'if'", "'ifdef'", "'ifndef'", "'in'", "'include'", 
        "'inherit'", "'int'", "'#line'", "'mapping'", "'mixed'", "'object'", 
        "'pragma'", "'return'", "'status'", "'struct'", "'string'", "'symbol'", 
        "'switch'", "'typedef'", "'#undef'", "'virtual'", "'void'", "'volatile'", 
        "'while'", "'deprecated'", "'private'", "'protected'", "'public'", 
        "'static'", "'visible'", "'noshadow'", "'nosave'", "'nomask'", "'varargs'", 
        "'::'", "'+'", "'-'", "'*'", "'/'", "'%'", "'++'", "'--'", "'<<'", 
        "'>>'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&'", "'|'", 
        "'^'", "'!'", "'~'", "'&&'", "'||'", "'?'", "':'", "';'", "','", 
        "'...'", "'..'", "'.'", "'='", "'+='", "'-='", "'*='", "'/='", "'%='", 
        "'||='", "'&&='", "'&='", "'|='", "'^='", "'<<='", "'(['", "'->'", 
        "'('", "')'", "'{'", "'}'", "'['", "']'", "'\\'", null, null, null, 
        null, null, null, "'clone_object'", "'load_object'", null, null, 
        null, null, null, null, "'''", "'\\n'", null, "'\\\\n'"
    ];

    public static readonly symbolicNames = [
        null, "BREAK", "CASE", "CATCH", "CHAR", "CLOSURE", "CONST", "CONTINUE", 
        "DEFAULT", "DO", "ECHO", "ELSE", "ELIF", "ENDIF", "ENUM", "EXTERN", 
        "FLOAT", "FOR", "FOREACH", "GOTO", "HASH", "IF", "IFDEF", "IFNDEF", 
        "IN", "INCLUDE", "INHERIT", "INT", "LINE", "MAPPING", "MIXED", "OBJECT", 
        "PRAGMA", "RETURN", "STATUS", "STRUCT", "STRING", "SYMBOL", "SWITCH", 
        "TYPEDEF", "UNDEF", "VIRTUAL", "VOID", "VOLATILE", "WHILE", "DEPRECATED", 
        "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", "VISIBLE", "NOSHADOW", 
        "NOSAVE", "NOMASK", "VARARGS", "SUPER_ACCESSOR", "PLUS", "MINUS", 
        "STAR", "DIV", "MOD", "INC", "DEC", "SHL", "SHR", "LT", "GT", "LE", 
        "GE", "EQ", "NE", "AND", "OR", "XOR", "NOT", "BNOT", "AND_AND", 
        "OR_OR", "QUESTION", "COLON", "SEMI", "COMMA", "TRIPPLEDOT", "DOUBLEDOT", 
        "DOT", "ASSIGN", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
        "MOD_ASSIGN", "OR_ASSIGN", "AND_ASSIGN", "BITAND_ASSIGN", "BITOR_ASSIGN", 
        "XOR_ASSIGN", "SHL_ASSIGN", "MAPPING_OPEN", "ARROW", "PAREN_OPEN", 
        "PAREN_CLOSE", "CURLY_OPEN", "CURLY_CLOSE", "SQUARE_OPEN", "SQUARE_CLOSE", 
        "BACKSLASH", "IntegerConstant", "FloatingConstant", "HexIntConstant", 
        "STRING_START", "StringLiteral", "CharacterConstant", "CloneObject", 
        "LoadObject", "Identifier", "COMMENT", "LINE_COMMENT", "SOURCEMAP", 
        "DEFINE", "WS", "SINGLEQUOT", "END_DEFINE", "STRING_END", "NEWLINE"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE", "DEFINE_MODE", "STRING_MODE",
    ];

    public static readonly ruleNames = [
        "BREAK", "CASE", "CATCH", "CHAR", "CLOSURE", "CONST", "CONTINUE", 
        "DEFAULT", "DO", "ECHO", "ELSE", "ELIF", "ENDIF", "ENUM", "EXTERN", 
        "FLOAT", "FOR", "FOREACH", "GOTO", "HASH", "IF", "IFDEF", "IFNDEF", 
        "IN", "INCLUDE", "INHERIT", "INT", "LINE", "MAPPING", "MIXED", "OBJECT", 
        "PRAGMA", "RETURN", "STATUS", "STRUCT", "STRING", "SYMBOL", "SWITCH", 
        "TYPEDEF", "UNDEF", "VIRTUAL", "VOID", "VOLATILE", "WHILE", "DEPRECATED", 
        "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", "VISIBLE", "NOSHADOW", 
        "NOSAVE", "NOMASK", "VARARGS", "SUPER_ACCESSOR", "PLUS", "MINUS", 
        "STAR", "DIV", "MOD", "INC", "DEC", "SHL", "SHR", "LT", "GT", "LE", 
        "GE", "EQ", "NE", "AND", "OR", "XOR", "NOT", "BNOT", "AND_AND", 
        "OR_OR", "QUESTION", "COLON", "SEMI", "COMMA", "TRIPPLEDOT", "DOUBLEDOT", 
        "DOT", "ASSIGN", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
        "MOD_ASSIGN", "OR_ASSIGN", "AND_ASSIGN", "BITAND_ASSIGN", "BITOR_ASSIGN", 
        "XOR_ASSIGN", "SHL_ASSIGN", "MAPPING_OPEN", "ARROW", "PAREN_OPEN", 
        "PAREN_CLOSE", "CURLY_OPEN", "CURLY_CLOSE", "SQUARE_OPEN", "SQUARE_CLOSE", 
        "BACKSLASH", "HexDigit", "IntegerConstant", "FloatingConstant", 
        "HexIntConstant", "STRING_START", "StringLiteral", "CharacterConstant", 
        "CloneObject", "LoadObject", "Identifier", "COMMENT", "LINE_COMMENT", 
        "SOURCEMAP", "DEFINE", "WS", "SINGLEQUOT", "DEFINE_CONTENT", "NEWLINE", 
        "END_DEFINE", "STRING_CONTENT", "STRING_END",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, LPCLexer._ATN, LPCLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "LPCLexer.g4"; }

    public get literalNames(): (string | null)[] { return LPCLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return LPCLexer.symbolicNames; }
    public get ruleNames(): string[] { return LPCLexer.ruleNames; }

    public get serializedATN(): number[] { return LPCLexer._serializedATN; }

    public get channelNames(): string[] { return LPCLexer.channelNames; }

    public get modeNames(): string[] { return LPCLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,123,937,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
        4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,
        12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,
        18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,
        25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
        31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
        38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,
        44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,
        51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,
        57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,
        64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,
        70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,
        77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,
        83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,
        90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,
        96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,
        102,2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,
        2,108,7,108,2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,
        7,113,2,114,7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,
        2,119,7,119,2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,
        7,124,2,125,7,125,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
        2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
        6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,
        9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,
        1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,
        1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,
        1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,
        1,18,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,
        1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,24,
        1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,
        1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,
        1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,
        1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,
        1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,
        1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
        1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,
        1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,
        1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,
        1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,
        1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
        1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,
        1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,
        1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,
        1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,
        1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,
        1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,55,
        1,55,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,60,1,60,1,60,1,61,
        1,61,1,61,1,62,1,62,1,62,1,63,1,63,1,63,1,64,1,64,1,65,1,65,1,66,
        1,66,1,66,1,67,1,67,1,67,1,68,1,68,1,68,1,69,1,69,1,69,1,70,1,70,
        1,71,1,71,1,72,1,72,1,73,1,73,1,74,1,74,1,75,1,75,1,75,1,76,1,76,
        1,76,1,77,1,77,1,78,1,78,1,79,1,79,1,80,1,80,1,81,1,81,1,81,1,81,
        1,82,1,82,1,82,1,83,1,83,1,84,1,84,1,85,1,85,1,85,1,86,1,86,1,86,
        1,87,1,87,1,87,1,88,1,88,1,88,1,89,1,89,1,89,1,90,1,90,1,90,1,90,
        1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,93,1,93,1,93,1,94,1,94,1,94,
        1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,97,1,97,1,97,1,98,1,98,1,99,
        1,99,1,100,1,100,1,101,1,101,1,102,1,102,1,103,1,103,1,104,1,104,
        1,105,3,105,744,8,105,1,106,4,106,747,8,106,11,106,12,106,748,1,
        107,5,107,752,8,107,10,107,12,107,755,9,107,1,107,1,107,4,107,759,
        8,107,11,107,12,107,760,1,107,1,107,3,107,765,8,107,1,107,4,107,
        768,8,107,11,107,12,107,769,3,107,772,8,107,1,108,1,108,1,108,4,
        108,777,8,108,11,108,12,108,778,1,109,1,109,1,109,1,109,1,110,1,
        110,5,110,787,8,110,10,110,12,110,790,9,110,1,110,1,110,1,111,1,
        111,1,111,1,111,3,111,798,8,111,1,111,1,111,1,112,1,112,1,112,1,
        112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,113,
        1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,113,
        1,114,1,114,5,114,829,8,114,10,114,12,114,832,9,114,1,115,1,115,
        1,115,1,115,5,115,838,8,115,10,115,12,115,841,9,115,1,115,1,115,
        1,115,1,115,1,115,1,116,1,116,1,116,1,116,5,116,852,8,116,10,116,
        12,116,855,9,116,1,116,3,116,858,8,116,1,116,1,116,1,117,1,117,1,
        117,1,117,1,117,5,117,867,8,117,10,117,12,117,870,9,117,1,117,1,
        117,1,117,1,117,1,117,1,118,1,118,5,118,879,8,118,10,118,12,118,
        882,9,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,
        1,119,4,119,894,8,119,11,119,12,119,895,1,119,1,119,1,120,1,120,
        1,121,4,121,903,8,121,11,121,12,121,904,1,121,1,121,3,121,909,8,
        121,1,121,1,121,3,121,913,8,121,1,121,1,121,1,122,1,122,1,122,1,
        122,1,122,1,123,1,123,1,123,1,123,1,124,1,124,1,124,1,124,3,124,
        930,8,124,1,124,1,124,1,125,1,125,1,125,1,125,3,839,853,868,0,126,
        3,1,5,2,7,3,9,4,11,5,13,6,15,7,17,8,19,9,21,10,23,11,25,12,27,13,
        29,14,31,15,33,16,35,17,37,18,39,19,41,20,43,21,45,22,47,23,49,24,
        51,25,53,26,55,27,57,28,59,29,61,30,63,31,65,32,67,33,69,34,71,35,
        73,36,75,37,77,38,79,39,81,40,83,41,85,42,87,43,89,44,91,45,93,46,
        95,47,97,48,99,49,101,50,103,51,105,52,107,53,109,54,111,55,113,
        56,115,57,117,58,119,59,121,60,123,61,125,62,127,63,129,64,131,65,
        133,66,135,67,137,68,139,69,141,70,143,71,145,72,147,73,149,74,151,
        75,153,76,155,77,157,78,159,79,161,80,163,81,165,82,167,83,169,84,
        171,85,173,86,175,87,177,88,179,89,181,90,183,91,185,92,187,93,189,
        94,191,95,193,96,195,97,197,98,199,99,201,100,203,101,205,102,207,
        103,209,104,211,105,213,0,215,106,217,107,219,108,221,109,223,110,
        225,111,227,112,229,113,231,114,233,115,235,116,237,117,239,118,
        241,119,243,120,245,0,247,123,249,121,251,0,253,122,3,0,1,2,14,3,
        0,48,57,65,70,97,102,1,0,48,57,2,0,69,69,101,101,2,0,43,43,45,45,
        2,0,88,88,120,120,4,0,10,10,13,13,39,39,92,92,4,0,36,36,65,90,95,
        95,97,122,4,0,48,57,65,90,95,95,97,122,1,1,10,10,2,0,9,9,32,32,3,
        0,9,10,13,13,32,32,2,0,10,10,92,92,1,0,10,10,3,0,10,10,34,34,92,
        92,953,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
        0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,
        0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,
        0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,
        0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,
        0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,
        0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,
        0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,
        0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,
        0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,
        0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,
        111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,
        0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,
        1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,
        0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,
        0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,
        157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,
        0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,
        1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,
        0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,
        0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,
        203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,
        0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,
        1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,
        0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,
        0,0,0,0,243,1,0,0,0,1,245,1,0,0,0,1,247,1,0,0,0,1,249,1,0,0,0,2,
        251,1,0,0,0,2,253,1,0,0,0,3,255,1,0,0,0,5,261,1,0,0,0,7,266,1,0,
        0,0,9,272,1,0,0,0,11,277,1,0,0,0,13,285,1,0,0,0,15,291,1,0,0,0,17,
        300,1,0,0,0,19,308,1,0,0,0,21,311,1,0,0,0,23,317,1,0,0,0,25,322,
        1,0,0,0,27,327,1,0,0,0,29,333,1,0,0,0,31,338,1,0,0,0,33,345,1,0,
        0,0,35,351,1,0,0,0,37,355,1,0,0,0,39,363,1,0,0,0,41,368,1,0,0,0,
        43,370,1,0,0,0,45,373,1,0,0,0,47,379,1,0,0,0,49,386,1,0,0,0,51,389,
        1,0,0,0,53,397,1,0,0,0,55,405,1,0,0,0,57,409,1,0,0,0,59,415,1,0,
        0,0,61,423,1,0,0,0,63,429,1,0,0,0,65,436,1,0,0,0,67,443,1,0,0,0,
        69,450,1,0,0,0,71,457,1,0,0,0,73,464,1,0,0,0,75,471,1,0,0,0,77,478,
        1,0,0,0,79,485,1,0,0,0,81,493,1,0,0,0,83,500,1,0,0,0,85,508,1,0,
        0,0,87,513,1,0,0,0,89,522,1,0,0,0,91,528,1,0,0,0,93,539,1,0,0,0,
        95,547,1,0,0,0,97,557,1,0,0,0,99,564,1,0,0,0,101,571,1,0,0,0,103,
        579,1,0,0,0,105,588,1,0,0,0,107,595,1,0,0,0,109,602,1,0,0,0,111,
        610,1,0,0,0,113,613,1,0,0,0,115,615,1,0,0,0,117,617,1,0,0,0,119,
        619,1,0,0,0,121,621,1,0,0,0,123,623,1,0,0,0,125,626,1,0,0,0,127,
        629,1,0,0,0,129,632,1,0,0,0,131,635,1,0,0,0,133,637,1,0,0,0,135,
        639,1,0,0,0,137,642,1,0,0,0,139,645,1,0,0,0,141,648,1,0,0,0,143,
        651,1,0,0,0,145,653,1,0,0,0,147,655,1,0,0,0,149,657,1,0,0,0,151,
        659,1,0,0,0,153,661,1,0,0,0,155,664,1,0,0,0,157,667,1,0,0,0,159,
        669,1,0,0,0,161,671,1,0,0,0,163,673,1,0,0,0,165,675,1,0,0,0,167,
        679,1,0,0,0,169,682,1,0,0,0,171,684,1,0,0,0,173,686,1,0,0,0,175,
        689,1,0,0,0,177,692,1,0,0,0,179,695,1,0,0,0,181,698,1,0,0,0,183,
        701,1,0,0,0,185,705,1,0,0,0,187,709,1,0,0,0,189,712,1,0,0,0,191,
        715,1,0,0,0,193,718,1,0,0,0,195,722,1,0,0,0,197,725,1,0,0,0,199,
        728,1,0,0,0,201,730,1,0,0,0,203,732,1,0,0,0,205,734,1,0,0,0,207,
        736,1,0,0,0,209,738,1,0,0,0,211,740,1,0,0,0,213,743,1,0,0,0,215,
        746,1,0,0,0,217,753,1,0,0,0,219,773,1,0,0,0,221,780,1,0,0,0,223,
        784,1,0,0,0,225,793,1,0,0,0,227,801,1,0,0,0,229,814,1,0,0,0,231,
        826,1,0,0,0,233,833,1,0,0,0,235,847,1,0,0,0,237,861,1,0,0,0,239,
        876,1,0,0,0,241,893,1,0,0,0,243,899,1,0,0,0,245,908,1,0,0,0,247,
        916,1,0,0,0,249,921,1,0,0,0,251,929,1,0,0,0,253,933,1,0,0,0,255,
        256,5,98,0,0,256,257,5,114,0,0,257,258,5,101,0,0,258,259,5,97,0,
        0,259,260,5,107,0,0,260,4,1,0,0,0,261,262,5,99,0,0,262,263,5,97,
        0,0,263,264,5,115,0,0,264,265,5,101,0,0,265,6,1,0,0,0,266,267,5,
        99,0,0,267,268,5,97,0,0,268,269,5,116,0,0,269,270,5,99,0,0,270,271,
        5,104,0,0,271,8,1,0,0,0,272,273,5,99,0,0,273,274,5,104,0,0,274,275,
        5,97,0,0,275,276,5,114,0,0,276,10,1,0,0,0,277,278,5,99,0,0,278,279,
        5,108,0,0,279,280,5,111,0,0,280,281,5,115,0,0,281,282,5,117,0,0,
        282,283,5,114,0,0,283,284,5,101,0,0,284,12,1,0,0,0,285,286,5,99,
        0,0,286,287,5,111,0,0,287,288,5,110,0,0,288,289,5,115,0,0,289,290,
        5,116,0,0,290,14,1,0,0,0,291,292,5,99,0,0,292,293,5,111,0,0,293,
        294,5,110,0,0,294,295,5,116,0,0,295,296,5,105,0,0,296,297,5,110,
        0,0,297,298,5,117,0,0,298,299,5,101,0,0,299,16,1,0,0,0,300,301,5,
        100,0,0,301,302,5,101,0,0,302,303,5,102,0,0,303,304,5,97,0,0,304,
        305,5,117,0,0,305,306,5,108,0,0,306,307,5,116,0,0,307,18,1,0,0,0,
        308,309,5,100,0,0,309,310,5,111,0,0,310,20,1,0,0,0,311,312,5,35,
        0,0,312,313,5,101,0,0,313,314,5,99,0,0,314,315,5,104,0,0,315,316,
        5,111,0,0,316,22,1,0,0,0,317,318,5,101,0,0,318,319,5,108,0,0,319,
        320,5,115,0,0,320,321,5,101,0,0,321,24,1,0,0,0,322,323,5,101,0,0,
        323,324,5,108,0,0,324,325,5,105,0,0,325,326,5,102,0,0,326,26,1,0,
        0,0,327,328,5,101,0,0,328,329,5,110,0,0,329,330,5,100,0,0,330,331,
        5,105,0,0,331,332,5,102,0,0,332,28,1,0,0,0,333,334,5,101,0,0,334,
        335,5,110,0,0,335,336,5,117,0,0,336,337,5,109,0,0,337,30,1,0,0,0,
        338,339,5,101,0,0,339,340,5,120,0,0,340,341,5,116,0,0,341,342,5,
        101,0,0,342,343,5,114,0,0,343,344,5,110,0,0,344,32,1,0,0,0,345,346,
        5,102,0,0,346,347,5,108,0,0,347,348,5,111,0,0,348,349,5,97,0,0,349,
        350,5,116,0,0,350,34,1,0,0,0,351,352,5,102,0,0,352,353,5,111,0,0,
        353,354,5,114,0,0,354,36,1,0,0,0,355,356,5,102,0,0,356,357,5,111,
        0,0,357,358,5,114,0,0,358,359,5,101,0,0,359,360,5,97,0,0,360,361,
        5,99,0,0,361,362,5,104,0,0,362,38,1,0,0,0,363,364,5,103,0,0,364,
        365,5,111,0,0,365,366,5,116,0,0,366,367,5,111,0,0,367,40,1,0,0,0,
        368,369,5,35,0,0,369,42,1,0,0,0,370,371,5,105,0,0,371,372,5,102,
        0,0,372,44,1,0,0,0,373,374,5,105,0,0,374,375,5,102,0,0,375,376,5,
        100,0,0,376,377,5,101,0,0,377,378,5,102,0,0,378,46,1,0,0,0,379,380,
        5,105,0,0,380,381,5,102,0,0,381,382,5,110,0,0,382,383,5,100,0,0,
        383,384,5,101,0,0,384,385,5,102,0,0,385,48,1,0,0,0,386,387,5,105,
        0,0,387,388,5,110,0,0,388,50,1,0,0,0,389,390,5,105,0,0,390,391,5,
        110,0,0,391,392,5,99,0,0,392,393,5,108,0,0,393,394,5,117,0,0,394,
        395,5,100,0,0,395,396,5,101,0,0,396,52,1,0,0,0,397,398,5,105,0,0,
        398,399,5,110,0,0,399,400,5,104,0,0,400,401,5,101,0,0,401,402,5,
        114,0,0,402,403,5,105,0,0,403,404,5,116,0,0,404,54,1,0,0,0,405,406,
        5,105,0,0,406,407,5,110,0,0,407,408,5,116,0,0,408,56,1,0,0,0,409,
        410,5,35,0,0,410,411,5,108,0,0,411,412,5,105,0,0,412,413,5,110,0,
        0,413,414,5,101,0,0,414,58,1,0,0,0,415,416,5,109,0,0,416,417,5,97,
        0,0,417,418,5,112,0,0,418,419,5,112,0,0,419,420,5,105,0,0,420,421,
        5,110,0,0,421,422,5,103,0,0,422,60,1,0,0,0,423,424,5,109,0,0,424,
        425,5,105,0,0,425,426,5,120,0,0,426,427,5,101,0,0,427,428,5,100,
        0,0,428,62,1,0,0,0,429,430,5,111,0,0,430,431,5,98,0,0,431,432,5,
        106,0,0,432,433,5,101,0,0,433,434,5,99,0,0,434,435,5,116,0,0,435,
        64,1,0,0,0,436,437,5,112,0,0,437,438,5,114,0,0,438,439,5,97,0,0,
        439,440,5,103,0,0,440,441,5,109,0,0,441,442,5,97,0,0,442,66,1,0,
        0,0,443,444,5,114,0,0,444,445,5,101,0,0,445,446,5,116,0,0,446,447,
        5,117,0,0,447,448,5,114,0,0,448,449,5,110,0,0,449,68,1,0,0,0,450,
        451,5,115,0,0,451,452,5,116,0,0,452,453,5,97,0,0,453,454,5,116,0,
        0,454,455,5,117,0,0,455,456,5,115,0,0,456,70,1,0,0,0,457,458,5,115,
        0,0,458,459,5,116,0,0,459,460,5,114,0,0,460,461,5,117,0,0,461,462,
        5,99,0,0,462,463,5,116,0,0,463,72,1,0,0,0,464,465,5,115,0,0,465,
        466,5,116,0,0,466,467,5,114,0,0,467,468,5,105,0,0,468,469,5,110,
        0,0,469,470,5,103,0,0,470,74,1,0,0,0,471,472,5,115,0,0,472,473,5,
        121,0,0,473,474,5,109,0,0,474,475,5,98,0,0,475,476,5,111,0,0,476,
        477,5,108,0,0,477,76,1,0,0,0,478,479,5,115,0,0,479,480,5,119,0,0,
        480,481,5,105,0,0,481,482,5,116,0,0,482,483,5,99,0,0,483,484,5,104,
        0,0,484,78,1,0,0,0,485,486,5,116,0,0,486,487,5,121,0,0,487,488,5,
        112,0,0,488,489,5,101,0,0,489,490,5,100,0,0,490,491,5,101,0,0,491,
        492,5,102,0,0,492,80,1,0,0,0,493,494,5,35,0,0,494,495,5,117,0,0,
        495,496,5,110,0,0,496,497,5,100,0,0,497,498,5,101,0,0,498,499,5,
        102,0,0,499,82,1,0,0,0,500,501,5,118,0,0,501,502,5,105,0,0,502,503,
        5,114,0,0,503,504,5,116,0,0,504,505,5,117,0,0,505,506,5,97,0,0,506,
        507,5,108,0,0,507,84,1,0,0,0,508,509,5,118,0,0,509,510,5,111,0,0,
        510,511,5,105,0,0,511,512,5,100,0,0,512,86,1,0,0,0,513,514,5,118,
        0,0,514,515,5,111,0,0,515,516,5,108,0,0,516,517,5,97,0,0,517,518,
        5,116,0,0,518,519,5,105,0,0,519,520,5,108,0,0,520,521,5,101,0,0,
        521,88,1,0,0,0,522,523,5,119,0,0,523,524,5,104,0,0,524,525,5,105,
        0,0,525,526,5,108,0,0,526,527,5,101,0,0,527,90,1,0,0,0,528,529,5,
        100,0,0,529,530,5,101,0,0,530,531,5,112,0,0,531,532,5,114,0,0,532,
        533,5,101,0,0,533,534,5,99,0,0,534,535,5,97,0,0,535,536,5,116,0,
        0,536,537,5,101,0,0,537,538,5,100,0,0,538,92,1,0,0,0,539,540,5,112,
        0,0,540,541,5,114,0,0,541,542,5,105,0,0,542,543,5,118,0,0,543,544,
        5,97,0,0,544,545,5,116,0,0,545,546,5,101,0,0,546,94,1,0,0,0,547,
        548,5,112,0,0,548,549,5,114,0,0,549,550,5,111,0,0,550,551,5,116,
        0,0,551,552,5,101,0,0,552,553,5,99,0,0,553,554,5,116,0,0,554,555,
        5,101,0,0,555,556,5,100,0,0,556,96,1,0,0,0,557,558,5,112,0,0,558,
        559,5,117,0,0,559,560,5,98,0,0,560,561,5,108,0,0,561,562,5,105,0,
        0,562,563,5,99,0,0,563,98,1,0,0,0,564,565,5,115,0,0,565,566,5,116,
        0,0,566,567,5,97,0,0,567,568,5,116,0,0,568,569,5,105,0,0,569,570,
        5,99,0,0,570,100,1,0,0,0,571,572,5,118,0,0,572,573,5,105,0,0,573,
        574,5,115,0,0,574,575,5,105,0,0,575,576,5,98,0,0,576,577,5,108,0,
        0,577,578,5,101,0,0,578,102,1,0,0,0,579,580,5,110,0,0,580,581,5,
        111,0,0,581,582,5,115,0,0,582,583,5,104,0,0,583,584,5,97,0,0,584,
        585,5,100,0,0,585,586,5,111,0,0,586,587,5,119,0,0,587,104,1,0,0,
        0,588,589,5,110,0,0,589,590,5,111,0,0,590,591,5,115,0,0,591,592,
        5,97,0,0,592,593,5,118,0,0,593,594,5,101,0,0,594,106,1,0,0,0,595,
        596,5,110,0,0,596,597,5,111,0,0,597,598,5,109,0,0,598,599,5,97,0,
        0,599,600,5,115,0,0,600,601,5,107,0,0,601,108,1,0,0,0,602,603,5,
        118,0,0,603,604,5,97,0,0,604,605,5,114,0,0,605,606,5,97,0,0,606,
        607,5,114,0,0,607,608,5,103,0,0,608,609,5,115,0,0,609,110,1,0,0,
        0,610,611,5,58,0,0,611,612,5,58,0,0,612,112,1,0,0,0,613,614,5,43,
        0,0,614,114,1,0,0,0,615,616,5,45,0,0,616,116,1,0,0,0,617,618,5,42,
        0,0,618,118,1,0,0,0,619,620,5,47,0,0,620,120,1,0,0,0,621,622,5,37,
        0,0,622,122,1,0,0,0,623,624,5,43,0,0,624,625,5,43,0,0,625,124,1,
        0,0,0,626,627,5,45,0,0,627,628,5,45,0,0,628,126,1,0,0,0,629,630,
        5,60,0,0,630,631,5,60,0,0,631,128,1,0,0,0,632,633,5,62,0,0,633,634,
        5,62,0,0,634,130,1,0,0,0,635,636,5,60,0,0,636,132,1,0,0,0,637,638,
        5,62,0,0,638,134,1,0,0,0,639,640,5,60,0,0,640,641,5,61,0,0,641,136,
        1,0,0,0,642,643,5,62,0,0,643,644,5,61,0,0,644,138,1,0,0,0,645,646,
        5,61,0,0,646,647,5,61,0,0,647,140,1,0,0,0,648,649,5,33,0,0,649,650,
        5,61,0,0,650,142,1,0,0,0,651,652,5,38,0,0,652,144,1,0,0,0,653,654,
        5,124,0,0,654,146,1,0,0,0,655,656,5,94,0,0,656,148,1,0,0,0,657,658,
        5,33,0,0,658,150,1,0,0,0,659,660,5,126,0,0,660,152,1,0,0,0,661,662,
        5,38,0,0,662,663,5,38,0,0,663,154,1,0,0,0,664,665,5,124,0,0,665,
        666,5,124,0,0,666,156,1,0,0,0,667,668,5,63,0,0,668,158,1,0,0,0,669,
        670,5,58,0,0,670,160,1,0,0,0,671,672,5,59,0,0,672,162,1,0,0,0,673,
        674,5,44,0,0,674,164,1,0,0,0,675,676,5,46,0,0,676,677,5,46,0,0,677,
        678,5,46,0,0,678,166,1,0,0,0,679,680,5,46,0,0,680,681,5,46,0,0,681,
        168,1,0,0,0,682,683,5,46,0,0,683,170,1,0,0,0,684,685,5,61,0,0,685,
        172,1,0,0,0,686,687,5,43,0,0,687,688,5,61,0,0,688,174,1,0,0,0,689,
        690,5,45,0,0,690,691,5,61,0,0,691,176,1,0,0,0,692,693,5,42,0,0,693,
        694,5,61,0,0,694,178,1,0,0,0,695,696,5,47,0,0,696,697,5,61,0,0,697,
        180,1,0,0,0,698,699,5,37,0,0,699,700,5,61,0,0,700,182,1,0,0,0,701,
        702,5,124,0,0,702,703,5,124,0,0,703,704,5,61,0,0,704,184,1,0,0,0,
        705,706,5,38,0,0,706,707,5,38,0,0,707,708,5,61,0,0,708,186,1,0,0,
        0,709,710,5,38,0,0,710,711,5,61,0,0,711,188,1,0,0,0,712,713,5,124,
        0,0,713,714,5,61,0,0,714,190,1,0,0,0,715,716,5,94,0,0,716,717,5,
        61,0,0,717,192,1,0,0,0,718,719,5,60,0,0,719,720,5,60,0,0,720,721,
        5,61,0,0,721,194,1,0,0,0,722,723,5,40,0,0,723,724,5,91,0,0,724,196,
        1,0,0,0,725,726,5,45,0,0,726,727,5,62,0,0,727,198,1,0,0,0,728,729,
        5,40,0,0,729,200,1,0,0,0,730,731,5,41,0,0,731,202,1,0,0,0,732,733,
        5,123,0,0,733,204,1,0,0,0,734,735,5,125,0,0,735,206,1,0,0,0,736,
        737,5,91,0,0,737,208,1,0,0,0,738,739,5,93,0,0,739,210,1,0,0,0,740,
        741,5,92,0,0,741,212,1,0,0,0,742,744,7,0,0,0,743,742,1,0,0,0,744,
        214,1,0,0,0,745,747,7,1,0,0,746,745,1,0,0,0,747,748,1,0,0,0,748,
        746,1,0,0,0,748,749,1,0,0,0,749,216,1,0,0,0,750,752,7,1,0,0,751,
        750,1,0,0,0,752,755,1,0,0,0,753,751,1,0,0,0,753,754,1,0,0,0,754,
        756,1,0,0,0,755,753,1,0,0,0,756,758,5,46,0,0,757,759,7,1,0,0,758,
        757,1,0,0,0,759,760,1,0,0,0,760,758,1,0,0,0,760,761,1,0,0,0,761,
        771,1,0,0,0,762,764,7,2,0,0,763,765,7,3,0,0,764,763,1,0,0,0,764,
        765,1,0,0,0,765,767,1,0,0,0,766,768,7,1,0,0,767,766,1,0,0,0,768,
        769,1,0,0,0,769,767,1,0,0,0,769,770,1,0,0,0,770,772,1,0,0,0,771,
        762,1,0,0,0,771,772,1,0,0,0,772,218,1,0,0,0,773,774,5,48,0,0,774,
        776,7,4,0,0,775,777,3,213,105,0,776,775,1,0,0,0,777,778,1,0,0,0,
        778,776,1,0,0,0,778,779,1,0,0,0,779,220,1,0,0,0,780,781,5,34,0,0,
        781,782,1,0,0,0,782,783,6,109,0,0,783,222,1,0,0,0,784,788,3,221,
        109,0,785,787,3,251,124,0,786,785,1,0,0,0,787,790,1,0,0,0,788,786,
        1,0,0,0,788,789,1,0,0,0,789,791,1,0,0,0,790,788,1,0,0,0,791,792,
        3,253,125,0,792,224,1,0,0,0,793,797,5,39,0,0,794,798,8,5,0,0,795,
        796,5,92,0,0,796,798,9,0,0,0,797,794,1,0,0,0,797,795,1,0,0,0,798,
        799,1,0,0,0,799,800,5,39,0,0,800,226,1,0,0,0,801,802,5,99,0,0,802,
        803,5,108,0,0,803,804,5,111,0,0,804,805,5,110,0,0,805,806,5,101,
        0,0,806,807,5,95,0,0,807,808,5,111,0,0,808,809,5,98,0,0,809,810,
        5,106,0,0,810,811,5,101,0,0,811,812,5,99,0,0,812,813,5,116,0,0,813,
        228,1,0,0,0,814,815,5,108,0,0,815,816,5,111,0,0,816,817,5,97,0,0,
        817,818,5,100,0,0,818,819,5,95,0,0,819,820,5,111,0,0,820,821,5,98,
        0,0,821,822,5,106,0,0,822,823,5,101,0,0,823,824,5,99,0,0,824,825,
        5,116,0,0,825,230,1,0,0,0,826,830,7,6,0,0,827,829,7,7,0,0,828,827,
        1,0,0,0,829,832,1,0,0,0,830,828,1,0,0,0,830,831,1,0,0,0,831,232,
        1,0,0,0,832,830,1,0,0,0,833,834,5,47,0,0,834,835,5,42,0,0,835,839,
        1,0,0,0,836,838,9,0,0,0,837,836,1,0,0,0,838,841,1,0,0,0,839,840,
        1,0,0,0,839,837,1,0,0,0,840,842,1,0,0,0,841,839,1,0,0,0,842,843,
        5,42,0,0,843,844,5,47,0,0,844,845,1,0,0,0,845,846,6,115,1,0,846,
        234,1,0,0,0,847,848,5,47,0,0,848,849,5,47,0,0,849,853,1,0,0,0,850,
        852,9,0,0,0,851,850,1,0,0,0,852,855,1,0,0,0,853,854,1,0,0,0,853,
        851,1,0,0,0,854,857,1,0,0,0,855,853,1,0,0,0,856,858,7,8,0,0,857,
        856,1,0,0,0,858,859,1,0,0,0,859,860,6,116,1,0,860,236,1,0,0,0,861,
        862,5,91,0,0,862,863,5,91,0,0,863,864,5,64,0,0,864,868,1,0,0,0,865,
        867,9,0,0,0,866,865,1,0,0,0,867,870,1,0,0,0,868,869,1,0,0,0,868,
        866,1,0,0,0,869,871,1,0,0,0,870,868,1,0,0,0,871,872,5,93,0,0,872,
        873,5,93,0,0,873,874,1,0,0,0,874,875,6,117,2,0,875,238,1,0,0,0,876,
        880,3,41,19,0,877,879,7,9,0,0,878,877,1,0,0,0,879,882,1,0,0,0,880,
        878,1,0,0,0,880,881,1,0,0,0,881,883,1,0,0,0,882,880,1,0,0,0,883,
        884,5,100,0,0,884,885,5,101,0,0,885,886,5,102,0,0,886,887,5,105,
        0,0,887,888,5,110,0,0,888,889,5,101,0,0,889,890,1,0,0,0,890,891,
        6,118,3,0,891,240,1,0,0,0,892,894,7,10,0,0,893,892,1,0,0,0,894,895,
        1,0,0,0,895,893,1,0,0,0,895,896,1,0,0,0,896,897,1,0,0,0,897,898,
        6,119,4,0,898,242,1,0,0,0,899,900,5,39,0,0,900,244,1,0,0,0,901,903,
        8,11,0,0,902,901,1,0,0,0,903,904,1,0,0,0,904,902,1,0,0,0,904,905,
        1,0,0,0,905,909,1,0,0,0,906,907,5,92,0,0,907,909,8,12,0,0,908,902,
        1,0,0,0,908,906,1,0,0,0,909,912,1,0,0,0,910,911,5,92,0,0,911,913,
        5,10,0,0,912,910,1,0,0,0,912,913,1,0,0,0,913,914,1,0,0,0,914,915,
        6,121,5,0,915,246,1,0,0,0,916,917,5,92,0,0,917,918,5,10,0,0,918,
        919,1,0,0,0,919,920,6,122,5,0,920,248,1,0,0,0,921,922,5,10,0,0,922,
        923,1,0,0,0,923,924,6,123,6,0,924,250,1,0,0,0,925,930,8,13,0,0,926,
        930,5,10,0,0,927,928,5,92,0,0,928,930,9,0,0,0,929,925,1,0,0,0,929,
        926,1,0,0,0,929,927,1,0,0,0,930,931,1,0,0,0,931,932,6,124,5,0,932,
        252,1,0,0,0,933,934,5,34,0,0,934,935,1,0,0,0,935,936,6,125,7,0,936,
        254,1,0,0,0,24,0,1,2,743,748,753,760,764,769,771,778,788,797,830,
        839,853,857,868,880,895,904,908,912,929,8,2,2,0,0,2,0,0,3,0,5,1,
        0,0,1,0,3,0,0,4,0,0,2,0,0
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