// Generated from grammar/LPCPreprocessorLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class LPCPreprocessorLexer extends antlr.Lexer {
    public static readonly SHARP = 1;
    public static readonly CODE = 2;
    public static readonly INCLUDE = 3;
    public static readonly PRAGMA = 4;
    public static readonly DEFINE = 5;
    public static readonly DEFINED = 6;
    public static readonly IF = 7;
    public static readonly ELIF = 8;
    public static readonly ELSE = 9;
    public static readonly UNDEF = 10;
    public static readonly IFDEF = 11;
    public static readonly IFNDEF = 12;
    public static readonly ENDIF = 13;
    public static readonly BANG = 14;
    public static readonly LPAREN = 15;
    public static readonly RPAREN = 16;
    public static readonly EQUAL = 17;
    public static readonly NOTEQUAL = 18;
    public static readonly AND = 19;
    public static readonly OR = 20;
    public static readonly LT = 21;
    public static readonly GT = 22;
    public static readonly LE = 23;
    public static readonly GE = 24;
    public static readonly DIRECTIVE_WHITESPACES = 25;
    public static readonly DIRECTIVE_STRING = 26;
    public static readonly CONDITIONAL_SYMBOL = 27;
    public static readonly DECIMAL_LITERAL = 28;
    public static readonly FLOAT = 29;
    public static readonly NEW_LINE = 30;
    public static readonly DIRECITVE_COMMENT = 31;
    public static readonly DIRECITVE_LINE_COMMENT = 32;
    public static readonly DIRECITVE_NEW_LINE = 33;
    public static readonly DIRECITVE_TEXT_NEW_LINE = 34;
    public static readonly TEXT = 35;
    public static readonly SLASH = 36;
    public static readonly DIRECTIVE_MODE = 1;
    public static readonly DIRECTIVE_DEFINE = 2;
    public static readonly DIRECTIVE_TEXT = 3;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS_CHANNEL"
    ];

    public static readonly literalNames = [
        null, "'#'", null, null, "'pragma'", null, "'defined'", "'if'", 
        "'elif'", "'else'", "'undef'", "'ifdef'", "'ifndef'", "'endif'", 
        "'!'", "'('", "')'", "'=='", "'!='", "'&&'", "'||'", "'<'", "'>'", 
        "'<='", "'>='"
    ];

    public static readonly symbolicNames = [
        null, "SHARP", "CODE", "INCLUDE", "PRAGMA", "DEFINE", "DEFINED", 
        "IF", "ELIF", "ELSE", "UNDEF", "IFDEF", "IFNDEF", "ENDIF", "BANG", 
        "LPAREN", "RPAREN", "EQUAL", "NOTEQUAL", "AND", "OR", "LT", "GT", 
        "LE", "GE", "DIRECTIVE_WHITESPACES", "DIRECTIVE_STRING", "CONDITIONAL_SYMBOL", 
        "DECIMAL_LITERAL", "FLOAT", "NEW_LINE", "DIRECITVE_COMMENT", "DIRECITVE_LINE_COMMENT", 
        "DIRECITVE_NEW_LINE", "DIRECITVE_TEXT_NEW_LINE", "TEXT", "SLASH"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE", "DIRECTIVE_MODE", "DIRECTIVE_DEFINE", "DIRECTIVE_TEXT",
    ];

    public static readonly ruleNames = [
        "SHARP", "COMMENT", "LINE_COMMENT", "SLASH", "CHARACTER_LITERAL", 
        "STRING", "CODE", "INCLUDE", "PRAGMA", "DEFINE", "DEFINED", "IF", 
        "ELIF", "ELSE", "UNDEF", "IFDEF", "IFNDEF", "ENDIF", "BANG", "LPAREN", 
        "RPAREN", "EQUAL", "NOTEQUAL", "AND", "OR", "LT", "GT", "LE", "GE", 
        "DIRECTIVE_WHITESPACES", "DIRECTIVE_STRING", "CONDITIONAL_SYMBOL", 
        "DECIMAL_LITERAL", "FLOAT", "NEW_LINE", "DIRECITVE_COMMENT", "DIRECITVE_LINE_COMMENT", 
        "DIRECITVE_NEW_LINE", "DIRECTIVE_DEFINE_CONDITIONAL_SYMBOL", "DIRECITVE_TEXT_NEW_LINE", 
        "BACK_SLASH_ESCAPE", "TEXT_NEW_LINE", "DIRECTIVE_COMMENT", "DIRECTIVE_LINE_COMMENT", 
        "DIRECTIVE_SLASH", "TEXT", "EscapeSequence", "OctalEscape", "UnicodeEscape", 
        "HexDigit", "StringFragment", "LETTER", "A", "B", "C", "D", "E", 
        "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
        "S", "T", "U", "V", "W", "X", "Y", "Z",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, LPCPreprocessorLexer._ATN, LPCPreprocessorLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "LPCPreprocessorLexer.g4"; }

    public get literalNames(): (string | null)[] { return LPCPreprocessorLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return LPCPreprocessorLexer.symbolicNames; }
    public get ruleNames(): string[] { return LPCPreprocessorLexer.ruleNames; }

    public get serializedATN(): number[] { return LPCPreprocessorLexer._serializedATN; }

    public get channelNames(): string[] { return LPCPreprocessorLexer.channelNames; }

    public get modeNames(): string[] { return LPCPreprocessorLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,36,582,6,-1,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
        4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,
        2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,
        7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,
        2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,
        7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,
        2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,
        7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,
        2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,
        7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,
        2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,
        7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,
        2,77,7,77,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,169,8,1,10,1,12,1,
        172,9,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,183,8,2,10,2,12,
        2,186,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,3,4,197,8,4,1,4,1,
        4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,4,6,210,8,6,11,6,12,6,211,
        1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,4,7,223,8,7,11,7,12,7,224,1,
        7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,
        9,1,9,1,9,4,9,246,8,9,11,9,12,9,247,1,9,1,9,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,
        1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,
        1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,
        1,17,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,22,
        1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,26,1,26,1,27,
        1,27,1,27,1,28,1,28,1,28,1,29,4,29,327,8,29,11,29,12,29,328,1,29,
        1,29,1,30,1,30,1,31,1,31,1,31,5,31,338,8,31,10,31,12,31,341,9,31,
        1,32,4,32,344,8,32,11,32,12,32,345,1,33,4,33,349,8,33,11,33,12,33,
        350,1,33,1,33,5,33,355,8,33,10,33,12,33,358,9,33,1,33,1,33,4,33,
        362,8,33,11,33,12,33,363,3,33,366,8,33,1,34,3,34,369,8,34,1,34,1,
        34,1,34,1,34,1,35,1,35,1,35,1,35,5,35,379,8,35,10,35,12,35,382,9,
        35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,5,36,393,8,36,10,
        36,12,36,396,9,36,1,36,1,36,1,37,1,37,3,37,402,8,37,1,37,1,37,1,
        37,1,37,1,38,1,38,1,38,5,38,411,8,38,10,38,12,38,414,9,38,1,38,1,
        38,1,38,5,38,419,8,38,10,38,12,38,422,9,38,1,38,3,38,425,8,38,1,
        38,1,38,1,38,1,39,1,39,3,39,432,8,39,1,39,1,39,1,39,1,39,1,40,1,
        40,1,40,1,40,1,40,1,41,3,41,444,8,41,1,41,1,41,1,41,1,41,1,41,1,
        42,1,42,1,42,1,42,5,42,455,8,42,10,42,12,42,458,9,42,1,42,1,42,1,
        42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,5,43,470,8,43,10,43,12,43,
        473,9,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,45,4,45,483,8,45,11,
        45,12,45,484,1,46,1,46,1,46,1,46,3,46,491,8,46,1,47,1,47,1,47,1,
        47,1,47,1,47,1,47,1,47,1,47,3,47,502,8,47,1,48,1,48,1,48,1,48,1,
        48,1,48,1,48,1,49,1,49,1,50,1,50,1,50,1,50,5,50,517,8,50,10,50,12,
        50,520,9,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,3,51,529,8,51,1,52,
        1,52,1,53,1,53,1,54,1,54,1,55,1,55,1,56,1,56,1,57,1,57,1,58,1,58,
        1,59,1,59,1,60,1,60,1,61,1,61,1,62,1,62,1,63,1,63,1,64,1,64,1,65,
        1,65,1,66,1,66,1,67,1,67,1,68,1,68,1,69,1,69,1,70,1,70,1,71,1,71,
        1,72,1,72,1,73,1,73,1,74,1,74,1,75,1,75,1,76,1,76,1,77,1,77,3,170,
        380,456,0,78,4,1,6,0,8,0,10,36,12,0,14,0,16,2,18,3,20,4,22,5,24,
        6,26,7,28,8,30,9,32,10,34,11,36,12,38,13,40,14,42,15,44,16,46,17,
        48,18,50,19,52,20,54,21,56,22,58,23,60,24,62,25,64,26,66,27,68,28,
        70,29,72,30,74,31,76,32,78,33,80,0,82,34,84,0,86,0,88,0,90,0,92,
        0,94,35,96,0,98,0,100,0,102,0,104,0,106,0,108,0,110,0,112,0,114,
        0,116,0,118,0,120,0,122,0,124,0,126,0,128,0,130,0,132,0,134,0,136,
        0,138,0,140,0,142,0,144,0,146,0,148,0,150,0,152,0,154,0,156,0,158,
        0,4,0,1,2,3,44,2,0,10,10,13,13,2,0,39,39,92,92,1,0,35,35,3,0,34,
        35,39,39,47,47,2,0,9,9,32,32,1,0,48,57,5,0,9,9,32,32,44,44,46,46,
        48,57,4,0,10,10,13,13,47,47,92,92,8,0,34,34,39,39,92,92,98,98,102,
        102,110,110,114,114,116,116,1,0,48,51,1,0,48,55,3,0,48,57,65,70,
        97,102,2,0,34,34,92,92,4,0,36,36,65,90,95,95,97,122,2,0,0,255,55296,
        56319,1,0,55296,56319,1,0,56320,57343,1,0,233,233,2,0,65,65,97,97,
        2,0,66,66,98,98,2,0,67,67,99,99,2,0,68,68,100,100,2,0,69,69,101,
        101,2,0,70,70,102,102,2,0,71,71,103,103,2,0,72,72,104,104,2,0,73,
        73,105,105,2,0,74,74,106,106,2,0,75,75,107,107,2,0,76,76,108,108,
        2,0,77,77,109,109,2,0,78,78,110,110,2,0,79,79,111,111,2,0,80,80,
        112,112,2,0,81,81,113,113,2,0,82,82,114,114,2,0,83,83,115,115,2,
        0,84,84,116,116,2,0,85,85,117,117,2,0,86,86,118,118,2,0,87,87,119,
        119,2,0,88,88,120,120,2,0,89,89,121,121,2,0,90,90,122,122,584,0,
        4,1,0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,0,10,1,0,0,0,0,12,1,0,0,0,0,14,
        1,0,0,0,0,16,1,0,0,0,1,18,1,0,0,0,1,20,1,0,0,0,1,22,1,0,0,0,1,24,
        1,0,0,0,1,26,1,0,0,0,1,28,1,0,0,0,1,30,1,0,0,0,1,32,1,0,0,0,1,34,
        1,0,0,0,1,36,1,0,0,0,1,38,1,0,0,0,1,40,1,0,0,0,1,42,1,0,0,0,1,44,
        1,0,0,0,1,46,1,0,0,0,1,48,1,0,0,0,1,50,1,0,0,0,1,52,1,0,0,0,1,54,
        1,0,0,0,1,56,1,0,0,0,1,58,1,0,0,0,1,60,1,0,0,0,1,62,1,0,0,0,1,64,
        1,0,0,0,1,66,1,0,0,0,1,68,1,0,0,0,1,70,1,0,0,0,1,72,1,0,0,0,1,74,
        1,0,0,0,1,76,1,0,0,0,1,78,1,0,0,0,2,80,1,0,0,0,3,82,1,0,0,0,3,84,
        1,0,0,0,3,86,1,0,0,0,3,88,1,0,0,0,3,90,1,0,0,0,3,92,1,0,0,0,3,94,
        1,0,0,0,4,160,1,0,0,0,6,164,1,0,0,0,8,178,1,0,0,0,10,189,1,0,0,0,
        12,193,1,0,0,0,14,202,1,0,0,0,16,209,1,0,0,0,18,213,1,0,0,0,20,228,
        1,0,0,0,22,237,1,0,0,0,24,251,1,0,0,0,26,259,1,0,0,0,28,262,1,0,
        0,0,30,267,1,0,0,0,32,272,1,0,0,0,34,278,1,0,0,0,36,284,1,0,0,0,
        38,291,1,0,0,0,40,297,1,0,0,0,42,299,1,0,0,0,44,301,1,0,0,0,46,303,
        1,0,0,0,48,306,1,0,0,0,50,309,1,0,0,0,52,312,1,0,0,0,54,315,1,0,
        0,0,56,317,1,0,0,0,58,319,1,0,0,0,60,322,1,0,0,0,62,326,1,0,0,0,
        64,332,1,0,0,0,66,334,1,0,0,0,68,343,1,0,0,0,70,365,1,0,0,0,72,368,
        1,0,0,0,74,374,1,0,0,0,76,388,1,0,0,0,78,399,1,0,0,0,80,407,1,0,
        0,0,82,429,1,0,0,0,84,437,1,0,0,0,86,443,1,0,0,0,88,450,1,0,0,0,
        90,465,1,0,0,0,92,477,1,0,0,0,94,482,1,0,0,0,96,490,1,0,0,0,98,501,
        1,0,0,0,100,503,1,0,0,0,102,510,1,0,0,0,104,512,1,0,0,0,106,528,
        1,0,0,0,108,530,1,0,0,0,110,532,1,0,0,0,112,534,1,0,0,0,114,536,
        1,0,0,0,116,538,1,0,0,0,118,540,1,0,0,0,120,542,1,0,0,0,122,544,
        1,0,0,0,124,546,1,0,0,0,126,548,1,0,0,0,128,550,1,0,0,0,130,552,
        1,0,0,0,132,554,1,0,0,0,134,556,1,0,0,0,136,558,1,0,0,0,138,560,
        1,0,0,0,140,562,1,0,0,0,142,564,1,0,0,0,144,566,1,0,0,0,146,568,
        1,0,0,0,148,570,1,0,0,0,150,572,1,0,0,0,152,574,1,0,0,0,154,576,
        1,0,0,0,156,578,1,0,0,0,158,580,1,0,0,0,160,161,5,35,0,0,161,162,
        1,0,0,0,162,163,6,0,0,0,163,5,1,0,0,0,164,165,5,47,0,0,165,166,5,
        42,0,0,166,170,1,0,0,0,167,169,9,0,0,0,168,167,1,0,0,0,169,172,1,
        0,0,0,170,171,1,0,0,0,170,168,1,0,0,0,171,173,1,0,0,0,172,170,1,
        0,0,0,173,174,5,42,0,0,174,175,5,47,0,0,175,176,1,0,0,0,176,177,
        6,1,1,0,177,7,1,0,0,0,178,179,5,47,0,0,179,180,5,47,0,0,180,184,
        1,0,0,0,181,183,8,0,0,0,182,181,1,0,0,0,183,186,1,0,0,0,184,182,
        1,0,0,0,184,185,1,0,0,0,185,187,1,0,0,0,186,184,1,0,0,0,187,188,
        6,2,1,0,188,9,1,0,0,0,189,190,5,47,0,0,190,191,1,0,0,0,191,192,6,
        3,1,0,192,11,1,0,0,0,193,196,5,39,0,0,194,197,3,96,46,0,195,197,
        8,1,0,0,196,194,1,0,0,0,196,195,1,0,0,0,197,198,1,0,0,0,198,199,
        8,2,0,0,199,200,1,0,0,0,200,201,6,4,1,0,201,13,1,0,0,0,202,203,3,
        104,50,0,203,204,1,0,0,0,204,205,6,5,1,0,205,15,1,0,0,0,206,210,
        8,3,0,0,207,208,5,35,0,0,208,210,5,39,0,0,209,206,1,0,0,0,209,207,
        1,0,0,0,210,211,1,0,0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,17,1,
        0,0,0,213,214,5,105,0,0,214,215,5,110,0,0,215,216,5,99,0,0,216,217,
        5,108,0,0,217,218,5,117,0,0,218,219,5,100,0,0,219,220,5,101,0,0,
        220,222,1,0,0,0,221,223,7,4,0,0,222,221,1,0,0,0,223,224,1,0,0,0,
        224,222,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,227,6,7,2,0,
        227,19,1,0,0,0,228,229,5,112,0,0,229,230,5,114,0,0,230,231,5,97,
        0,0,231,232,5,103,0,0,232,233,5,109,0,0,233,234,5,97,0,0,234,235,
        1,0,0,0,235,236,6,8,2,0,236,21,1,0,0,0,237,238,5,100,0,0,238,239,
        5,101,0,0,239,240,5,102,0,0,240,241,5,105,0,0,241,242,5,110,0,0,
        242,243,5,101,0,0,243,245,1,0,0,0,244,246,7,4,0,0,245,244,1,0,0,
        0,246,247,1,0,0,0,247,245,1,0,0,0,247,248,1,0,0,0,248,249,1,0,0,
        0,249,250,6,9,3,0,250,23,1,0,0,0,251,252,5,100,0,0,252,253,5,101,
        0,0,253,254,5,102,0,0,254,255,5,105,0,0,255,256,5,110,0,0,256,257,
        5,101,0,0,257,258,5,100,0,0,258,25,1,0,0,0,259,260,5,105,0,0,260,
        261,5,102,0,0,261,27,1,0,0,0,262,263,5,101,0,0,263,264,5,108,0,0,
        264,265,5,105,0,0,265,266,5,102,0,0,266,29,1,0,0,0,267,268,5,101,
        0,0,268,269,5,108,0,0,269,270,5,115,0,0,270,271,5,101,0,0,271,31,
        1,0,0,0,272,273,5,117,0,0,273,274,5,110,0,0,274,275,5,100,0,0,275,
        276,5,101,0,0,276,277,5,102,0,0,277,33,1,0,0,0,278,279,5,105,0,0,
        279,280,5,102,0,0,280,281,5,100,0,0,281,282,5,101,0,0,282,283,5,
        102,0,0,283,35,1,0,0,0,284,285,5,105,0,0,285,286,5,102,0,0,286,287,
        5,110,0,0,287,288,5,100,0,0,288,289,5,101,0,0,289,290,5,102,0,0,
        290,37,1,0,0,0,291,292,5,101,0,0,292,293,5,110,0,0,293,294,5,100,
        0,0,294,295,5,105,0,0,295,296,5,102,0,0,296,39,1,0,0,0,297,298,5,
        33,0,0,298,41,1,0,0,0,299,300,5,40,0,0,300,43,1,0,0,0,301,302,5,
        41,0,0,302,45,1,0,0,0,303,304,5,61,0,0,304,305,5,61,0,0,305,47,1,
        0,0,0,306,307,5,33,0,0,307,308,5,61,0,0,308,49,1,0,0,0,309,310,5,
        38,0,0,310,311,5,38,0,0,311,51,1,0,0,0,312,313,5,124,0,0,313,314,
        5,124,0,0,314,53,1,0,0,0,315,316,5,60,0,0,316,55,1,0,0,0,317,318,
        5,62,0,0,318,57,1,0,0,0,319,320,5,60,0,0,320,321,5,61,0,0,321,59,
        1,0,0,0,322,323,5,62,0,0,323,324,5,61,0,0,324,61,1,0,0,0,325,327,
        7,4,0,0,326,325,1,0,0,0,327,328,1,0,0,0,328,326,1,0,0,0,328,329,
        1,0,0,0,329,330,1,0,0,0,330,331,6,29,4,0,331,63,1,0,0,0,332,333,
        3,104,50,0,333,65,1,0,0,0,334,339,3,106,51,0,335,338,3,106,51,0,
        336,338,7,5,0,0,337,335,1,0,0,0,337,336,1,0,0,0,338,341,1,0,0,0,
        339,337,1,0,0,0,339,340,1,0,0,0,340,67,1,0,0,0,341,339,1,0,0,0,342,
        344,7,5,0,0,343,342,1,0,0,0,344,345,1,0,0,0,345,343,1,0,0,0,345,
        346,1,0,0,0,346,69,1,0,0,0,347,349,7,5,0,0,348,347,1,0,0,0,349,350,
        1,0,0,0,350,348,1,0,0,0,350,351,1,0,0,0,351,352,1,0,0,0,352,356,
        5,46,0,0,353,355,7,5,0,0,354,353,1,0,0,0,355,358,1,0,0,0,356,354,
        1,0,0,0,356,357,1,0,0,0,357,366,1,0,0,0,358,356,1,0,0,0,359,361,
        5,46,0,0,360,362,7,5,0,0,361,360,1,0,0,0,362,363,1,0,0,0,363,361,
        1,0,0,0,363,364,1,0,0,0,364,366,1,0,0,0,365,348,1,0,0,0,365,359,
        1,0,0,0,366,71,1,0,0,0,367,369,5,13,0,0,368,367,1,0,0,0,368,369,
        1,0,0,0,369,370,1,0,0,0,370,371,5,10,0,0,371,372,1,0,0,0,372,373,
        6,34,5,0,373,73,1,0,0,0,374,375,5,47,0,0,375,376,5,42,0,0,376,380,
        1,0,0,0,377,379,9,0,0,0,378,377,1,0,0,0,379,382,1,0,0,0,380,381,
        1,0,0,0,380,378,1,0,0,0,381,383,1,0,0,0,382,380,1,0,0,0,383,384,
        5,42,0,0,384,385,5,47,0,0,385,386,1,0,0,0,386,387,6,35,6,0,387,75,
        1,0,0,0,388,389,5,47,0,0,389,390,5,47,0,0,390,394,1,0,0,0,391,393,
        8,0,0,0,392,391,1,0,0,0,393,396,1,0,0,0,394,392,1,0,0,0,394,395,
        1,0,0,0,395,397,1,0,0,0,396,394,1,0,0,0,397,398,6,36,6,0,398,77,
        1,0,0,0,399,401,5,92,0,0,400,402,5,13,0,0,401,400,1,0,0,0,401,402,
        1,0,0,0,402,403,1,0,0,0,403,404,5,10,0,0,404,405,1,0,0,0,405,406,
        6,37,4,0,406,79,1,0,0,0,407,412,3,106,51,0,408,411,3,106,51,0,409,
        411,7,5,0,0,410,408,1,0,0,0,410,409,1,0,0,0,411,414,1,0,0,0,412,
        410,1,0,0,0,412,413,1,0,0,0,413,424,1,0,0,0,414,412,1,0,0,0,415,
        420,5,40,0,0,416,419,3,106,51,0,417,419,7,6,0,0,418,416,1,0,0,0,
        418,417,1,0,0,0,419,422,1,0,0,0,420,418,1,0,0,0,420,421,1,0,0,0,
        421,423,1,0,0,0,422,420,1,0,0,0,423,425,5,41,0,0,424,415,1,0,0,0,
        424,425,1,0,0,0,425,426,1,0,0,0,426,427,6,38,7,0,427,428,6,38,2,
        0,428,81,1,0,0,0,429,431,5,92,0,0,430,432,5,13,0,0,431,430,1,0,0,
        0,431,432,1,0,0,0,432,433,1,0,0,0,433,434,5,10,0,0,434,435,1,0,0,
        0,435,436,6,39,4,0,436,83,1,0,0,0,437,438,5,92,0,0,438,439,9,0,0,
        0,439,440,1,0,0,0,440,441,6,40,8,0,441,85,1,0,0,0,442,444,5,13,0,
        0,443,442,1,0,0,0,443,444,1,0,0,0,444,445,1,0,0,0,445,446,5,10,0,
        0,446,447,1,0,0,0,447,448,6,41,9,0,448,449,6,41,5,0,449,87,1,0,0,
        0,450,451,5,47,0,0,451,452,5,42,0,0,452,456,1,0,0,0,453,455,9,0,
        0,0,454,453,1,0,0,0,455,458,1,0,0,0,456,457,1,0,0,0,456,454,1,0,
        0,0,457,459,1,0,0,0,458,456,1,0,0,0,459,460,5,42,0,0,460,461,5,47,
        0,0,461,462,1,0,0,0,462,463,6,42,6,0,463,464,6,42,10,0,464,89,1,
        0,0,0,465,466,5,47,0,0,466,467,5,47,0,0,467,471,1,0,0,0,468,470,
        8,0,0,0,469,468,1,0,0,0,470,473,1,0,0,0,471,469,1,0,0,0,471,472,
        1,0,0,0,472,474,1,0,0,0,473,471,1,0,0,0,474,475,6,43,6,0,475,476,
        6,43,11,0,476,91,1,0,0,0,477,478,5,47,0,0,478,479,1,0,0,0,479,480,
        6,44,8,0,480,93,1,0,0,0,481,483,8,7,0,0,482,481,1,0,0,0,483,484,
        1,0,0,0,484,482,1,0,0,0,484,485,1,0,0,0,485,95,1,0,0,0,486,487,5,
        92,0,0,487,491,7,8,0,0,488,491,3,98,47,0,489,491,3,100,48,0,490,
        486,1,0,0,0,490,488,1,0,0,0,490,489,1,0,0,0,491,97,1,0,0,0,492,493,
        5,92,0,0,493,494,7,9,0,0,494,495,7,10,0,0,495,502,7,10,0,0,496,497,
        5,92,0,0,497,498,7,10,0,0,498,502,7,10,0,0,499,500,5,92,0,0,500,
        502,7,10,0,0,501,492,1,0,0,0,501,496,1,0,0,0,501,499,1,0,0,0,502,
        99,1,0,0,0,503,504,5,92,0,0,504,505,5,117,0,0,505,506,3,102,49,0,
        506,507,3,102,49,0,507,508,3,102,49,0,508,509,3,102,49,0,509,101,
        1,0,0,0,510,511,7,11,0,0,511,103,1,0,0,0,512,518,5,34,0,0,513,517,
        8,12,0,0,514,515,5,92,0,0,515,517,9,0,0,0,516,513,1,0,0,0,516,514,
        1,0,0,0,517,520,1,0,0,0,518,516,1,0,0,0,518,519,1,0,0,0,519,521,
        1,0,0,0,520,518,1,0,0,0,521,522,5,34,0,0,522,105,1,0,0,0,523,529,
        7,13,0,0,524,529,8,14,0,0,525,526,7,15,0,0,526,529,7,16,0,0,527,
        529,7,17,0,0,528,523,1,0,0,0,528,524,1,0,0,0,528,525,1,0,0,0,528,
        527,1,0,0,0,529,107,1,0,0,0,530,531,7,18,0,0,531,109,1,0,0,0,532,
        533,7,19,0,0,533,111,1,0,0,0,534,535,7,20,0,0,535,113,1,0,0,0,536,
        537,7,21,0,0,537,115,1,0,0,0,538,539,7,22,0,0,539,117,1,0,0,0,540,
        541,7,23,0,0,541,119,1,0,0,0,542,543,7,24,0,0,543,121,1,0,0,0,544,
        545,7,25,0,0,545,123,1,0,0,0,546,547,7,26,0,0,547,125,1,0,0,0,548,
        549,7,27,0,0,549,127,1,0,0,0,550,551,7,28,0,0,551,129,1,0,0,0,552,
        553,7,29,0,0,553,131,1,0,0,0,554,555,7,30,0,0,555,133,1,0,0,0,556,
        557,7,31,0,0,557,135,1,0,0,0,558,559,7,32,0,0,559,137,1,0,0,0,560,
        561,7,33,0,0,561,139,1,0,0,0,562,563,7,34,0,0,563,141,1,0,0,0,564,
        565,7,35,0,0,565,143,1,0,0,0,566,567,7,36,0,0,567,145,1,0,0,0,568,
        569,7,37,0,0,569,147,1,0,0,0,570,571,7,38,0,0,571,149,1,0,0,0,572,
        573,7,39,0,0,573,151,1,0,0,0,574,575,7,40,0,0,575,153,1,0,0,0,576,
        577,7,41,0,0,577,155,1,0,0,0,578,579,7,42,0,0,579,157,1,0,0,0,580,
        581,7,43,0,0,581,159,1,0,0,0,38,0,1,2,3,170,184,196,209,211,224,
        247,328,337,339,345,350,356,363,365,368,380,394,401,410,412,418,
        420,424,431,443,456,471,484,490,501,516,518,528,12,2,1,0,7,2,0,2,
        3,0,2,2,0,0,1,0,2,0,0,0,2,0,7,27,0,7,35,0,7,30,0,7,31,0,7,32,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!LPCPreprocessorLexer.__ATN) {
            LPCPreprocessorLexer.__ATN = new antlr.ATNDeserializer().deserialize(LPCPreprocessorLexer._serializedATN);
        }

        return LPCPreprocessorLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(LPCPreprocessorLexer.literalNames, LPCPreprocessorLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return LPCPreprocessorLexer.vocabulary;
    }

    private static readonly decisionsToDFA = LPCPreprocessorLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}