// Generated from grammar/LPCLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class LPCLexer extends antlr.Lexer {
    public static readonly Identifier = 1;
    public static readonly AUTO = 2;
    public static readonly BREAK = 3;
    public static readonly CASE = 4;
    public static readonly CHAR = 5;
    public static readonly CLOSURE = 6;
    public static readonly CONST = 7;
    public static readonly CONTINUE = 8;
    public static readonly DEFAULT = 9;
    public static readonly DO = 10;
    public static readonly ECHO = 11;
    public static readonly ELSE = 12;
    public static readonly ELIF = 13;
    public static readonly ENDIF = 14;
    public static readonly ENUM = 15;
    public static readonly EXTERN = 16;
    public static readonly FLOAT = 17;
    public static readonly FOR = 18;
    public static readonly FOREACH = 19;
    public static readonly GOTO = 20;
    public static readonly HASH = 21;
    public static readonly IF = 22;
    public static readonly IFDEF = 23;
    public static readonly IFNDEF = 24;
    public static readonly IN = 25;
    public static readonly INCLUDE = 26;
    public static readonly INHERIT = 27;
    public static readonly INT = 28;
    public static readonly LINE = 29;
    public static readonly MAPPING = 30;
    public static readonly OBJECT = 31;
    public static readonly PRAGMA = 32;
    public static readonly REGISTER = 33;
    public static readonly RETURN = 34;
    public static readonly SIZEOF = 35;
    public static readonly STATUS = 36;
    public static readonly STRUCT = 37;
    public static readonly STRING = 38;
    public static readonly SYMBOL = 39;
    public static readonly SWITCH = 40;
    public static readonly TYPEDEF = 41;
    public static readonly UNION = 42;
    public static readonly UNKNOWN = 43;
    public static readonly UNDEF = 44;
    public static readonly VOID = 45;
    public static readonly VOLATILE = 46;
    public static readonly WHILE = 47;
    public static readonly PRIVATE = 48;
    public static readonly PROTECTED = 49;
    public static readonly PUBLIC = 50;
    public static readonly STATIC = 51;
    public static readonly PLUS = 52;
    public static readonly MINUS = 53;
    public static readonly STAR = 54;
    public static readonly DIV = 55;
    public static readonly MOD = 56;
    public static readonly INC = 57;
    public static readonly DEC = 58;
    public static readonly SHL = 59;
    public static readonly SHR = 60;
    public static readonly LT = 61;
    public static readonly GT = 62;
    public static readonly LE = 63;
    public static readonly GE = 64;
    public static readonly EQ = 65;
    public static readonly NE = 66;
    public static readonly AND = 67;
    public static readonly OR = 68;
    public static readonly XOR = 69;
    public static readonly NOT = 70;
    public static readonly AND_AND = 71;
    public static readonly OR_OR = 72;
    public static readonly QUESTION = 73;
    public static readonly COLON = 74;
    public static readonly SEMI = 75;
    public static readonly COMMA = 76;
    public static readonly DOUBLEDOT = 77;
    public static readonly DOT = 78;
    public static readonly SUPER_ACCESSOR = 79;
    public static readonly ADD_ASSIGN = 80;
    public static readonly SUB_ASSIGN = 81;
    public static readonly MUL_ASSIGN = 82;
    public static readonly DIV_ASSIGN = 83;
    public static readonly MOD_ASSIGN = 84;
    public static readonly AND_ASSIGN = 85;
    public static readonly OR_ASSIGN = 86;
    public static readonly XOR_ASSIGN = 87;
    public static readonly ARRAY_OPEN = 88;
    public static readonly ARRAY_CLOSE = 89;
    public static readonly MAPPING_OPEN = 90;
    public static readonly MAPPING_CLOSE = 91;
    public static readonly ARROW = 92;
    public static readonly CLOSURE_OPEN = 93;
    public static readonly CLOSURE_CLOSE = 94;
    public static readonly PAREN_OPEN = 95;
    public static readonly PAREN_CLOSE = 96;
    public static readonly CURLY_OPEN = 97;
    public static readonly CURLY_CLOSE = 98;
    public static readonly SQUARE_OPEN = 99;
    public static readonly SQUARE_CLOSE = 100;
    public static readonly BACKSLASH = 101;
    public static readonly IntegerConstant = 102;
    public static readonly FloatingConstant = 103;
    public static readonly StringLiteral = 104;
    public static readonly CharacterConstant = 105;
    public static readonly COMMENT = 106;
    public static readonly LINE_COMMENT = 107;
    public static readonly DEFINE = 108;
    public static readonly WS = 109;
    public static readonly END_DEFINE = 110;
    public static readonly NEWLINE = 111;
    public static readonly DEFINE_MODE = 1;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, "'auto'", "'break'", "'case'", "'char'", "'closure'", 
        "'const'", "'continue'", "'default'", "'do'", "'echo'", "'else'", 
        "'elif'", "'endif'", "'enum'", "'extern'", "'float'", "'for'", "'foreach'", 
        "'goto'", "'#'", "'if'", "'ifdef'", "'ifndef'", "'in'", "'include'", 
        "'inherit'", "'int'", "'line'", "'mapping'", "'object'", "'pragma'", 
        "'register'", "'return'", "'sizeof'", "'status'", "'struct'", "'string'", 
        "'symbol'", "'switch'", "'typedef'", "'union'", "'unknown'", "'undef'", 
        "'void'", "'volatile'", "'while'", "'private'", "'protected'", "'public'", 
        "'static'", "'+'", "'-'", "'*'", "'/'", "'%'", "'++'", "'--'", "'<<'", 
        "'>>'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&'", "'|'", 
        "'^'", "'!'", "'&&'", "'||'", "'?'", "':'", "';'", "','", "'..'", 
        "'.'", "'::'", "'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'|='", 
        "'^='", "'({'", "'})'", "'(['", "'])'", "'->'", "'(:'", "':)'", 
        "'('", "')'", "'{'", "'}'", "'['", "']'", "'\\'", null, null, null, 
        null, null, null, null, null, "'\\n'", "'\\\\n'"
    ];

    public static readonly symbolicNames = [
        null, "Identifier", "AUTO", "BREAK", "CASE", "CHAR", "CLOSURE", 
        "CONST", "CONTINUE", "DEFAULT", "DO", "ECHO", "ELSE", "ELIF", "ENDIF", 
        "ENUM", "EXTERN", "FLOAT", "FOR", "FOREACH", "GOTO", "HASH", "IF", 
        "IFDEF", "IFNDEF", "IN", "INCLUDE", "INHERIT", "INT", "LINE", "MAPPING", 
        "OBJECT", "PRAGMA", "REGISTER", "RETURN", "SIZEOF", "STATUS", "STRUCT", 
        "STRING", "SYMBOL", "SWITCH", "TYPEDEF", "UNION", "UNKNOWN", "UNDEF", 
        "VOID", "VOLATILE", "WHILE", "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", 
        "PLUS", "MINUS", "STAR", "DIV", "MOD", "INC", "DEC", "SHL", "SHR", 
        "LT", "GT", "LE", "GE", "EQ", "NE", "AND", "OR", "XOR", "NOT", "AND_AND", 
        "OR_OR", "QUESTION", "COLON", "SEMI", "COMMA", "DOUBLEDOT", "DOT", 
        "SUPER_ACCESSOR", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
        "MOD_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "ARRAY_OPEN", 
        "ARRAY_CLOSE", "MAPPING_OPEN", "MAPPING_CLOSE", "ARROW", "CLOSURE_OPEN", 
        "CLOSURE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE", "CURLY_OPEN", "CURLY_CLOSE", 
        "SQUARE_OPEN", "SQUARE_CLOSE", "BACKSLASH", "IntegerConstant", "FloatingConstant", 
        "StringLiteral", "CharacterConstant", "COMMENT", "LINE_COMMENT", 
        "DEFINE", "WS", "END_DEFINE", "NEWLINE"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE", "DEFINE_MODE",
    ];

    public static readonly ruleNames = [
        "AUTO", "BREAK", "CASE", "CHAR", "CLOSURE", "CONST", "CONTINUE", 
        "DEFAULT", "DO", "ECHO", "ELSE", "ELIF", "ENDIF", "ENUM", "EXTERN", 
        "FLOAT", "FOR", "FOREACH", "GOTO", "HASH", "IF", "IFDEF", "IFNDEF", 
        "IN", "INCLUDE", "INHERIT", "INT", "LINE", "MAPPING", "OBJECT", 
        "PRAGMA", "REGISTER", "RETURN", "SIZEOF", "STATUS", "STRUCT", "STRING", 
        "SYMBOL", "SWITCH", "TYPEDEF", "UNION", "UNKNOWN", "UNDEF", "VOID", 
        "VOLATILE", "WHILE", "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", 
        "PLUS", "MINUS", "STAR", "DIV", "MOD", "INC", "DEC", "SHL", "SHR", 
        "LT", "GT", "LE", "GE", "EQ", "NE", "AND", "OR", "XOR", "NOT", "AND_AND", 
        "OR_OR", "QUESTION", "COLON", "SEMI", "COMMA", "DOUBLEDOT", "DOT", 
        "SUPER_ACCESSOR", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
        "MOD_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "ARRAY_OPEN", 
        "ARRAY_CLOSE", "MAPPING_OPEN", "MAPPING_CLOSE", "ARROW", "CLOSURE_OPEN", 
        "CLOSURE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE", "CURLY_OPEN", "CURLY_CLOSE", 
        "SQUARE_OPEN", "SQUARE_CLOSE", "BACKSLASH", "IntegerConstant", "FloatingConstant", 
        "StringLiteral", "CharacterConstant", "Identifier", "COMMENT", "LINE_COMMENT", 
        "DEFINE", "WS", "DEFINE_CONTENT", "NEWLINE", "END_DEFINE",
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
        4,0,111,790,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,
        5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
        12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,
        19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,
        25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,
        32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,
        38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,
        45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,
        51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,
        58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,
        64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,
        71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,
        77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,
        84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,
        90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,
        97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,
        2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,
        7,108,2,109,7,109,2,110,7,110,2,111,7,111,1,0,1,0,1,0,1,0,1,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,
        4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,
        6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,
        8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
        1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,
        1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,
        1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,
        1,18,1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,21,
        1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,24,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,
        1,25,1,25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,
        1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
        1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,
        1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,
        1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,
        1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,
        1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,
        1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,
        1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,
        1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,
        1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,
        1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,
        1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,1,55,
        1,55,1,55,1,56,1,56,1,56,1,57,1,57,1,57,1,58,1,58,1,58,1,59,1,59,
        1,60,1,60,1,61,1,61,1,61,1,62,1,62,1,62,1,63,1,63,1,63,1,64,1,64,
        1,64,1,65,1,65,1,66,1,66,1,67,1,67,1,68,1,68,1,69,1,69,1,69,1,70,
        1,70,1,70,1,71,1,71,1,72,1,72,1,73,1,73,1,74,1,74,1,75,1,75,1,75,
        1,76,1,76,1,77,1,77,1,77,1,78,1,78,1,78,1,79,1,79,1,79,1,80,1,80,
        1,80,1,81,1,81,1,81,1,82,1,82,1,82,1,83,1,83,1,83,1,84,1,84,1,84,
        1,85,1,85,1,85,1,86,1,86,1,86,1,87,1,87,1,87,1,88,1,88,1,88,1,89,
        1,89,1,89,1,90,1,90,1,90,1,91,1,91,1,91,1,92,1,92,1,92,1,93,1,93,
        1,94,1,94,1,95,1,95,1,96,1,96,1,97,1,97,1,98,1,98,1,99,1,99,1,100,
        4,100,672,8,100,11,100,12,100,673,1,101,5,101,677,8,101,10,101,12,
        101,680,9,101,1,101,1,101,4,101,684,8,101,11,101,12,101,685,1,101,
        1,101,3,101,690,8,101,1,101,4,101,693,8,101,11,101,12,101,694,3,
        101,697,8,101,1,102,1,102,1,102,1,102,5,102,703,8,102,10,102,12,
        102,706,9,102,1,102,1,102,1,103,1,103,1,103,1,103,3,103,714,8,103,
        1,103,1,103,1,104,1,104,5,104,720,8,104,10,104,12,104,723,9,104,
        1,104,1,104,1,105,1,105,1,105,1,105,5,105,731,8,105,10,105,12,105,
        734,9,105,1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,1,106,
        5,106,745,8,106,10,106,12,106,748,9,106,1,106,1,106,1,106,1,106,
        1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,108,
        4,108,765,8,108,11,108,12,108,766,1,108,1,108,1,109,4,109,772,8,
        109,11,109,12,109,773,1,109,1,109,3,109,778,8,109,1,109,1,109,1,
        110,1,110,1,110,1,110,1,110,1,111,1,111,1,111,1,111,2,732,746,0,
        112,2,2,4,3,6,4,8,5,10,6,12,7,14,8,16,9,18,10,20,11,22,12,24,13,
        26,14,28,15,30,16,32,17,34,18,36,19,38,20,40,21,42,22,44,23,46,24,
        48,25,50,26,52,27,54,28,56,29,58,30,60,31,62,32,64,33,66,34,68,35,
        70,36,72,37,74,38,76,39,78,40,80,41,82,42,84,43,86,44,88,45,90,46,
        92,47,94,48,96,49,98,50,100,51,102,52,104,53,106,54,108,55,110,56,
        112,57,114,58,116,59,118,60,120,61,122,62,124,63,126,64,128,65,130,
        66,132,67,134,68,136,69,138,70,140,71,142,72,144,73,146,74,148,75,
        150,76,152,77,154,78,156,79,158,80,160,81,162,82,164,83,166,84,168,
        85,170,86,172,87,174,88,176,89,178,90,180,91,182,92,184,93,186,94,
        188,95,190,96,192,97,194,98,196,99,198,100,200,101,202,102,204,103,
        206,104,208,105,210,1,212,106,214,107,216,108,218,109,220,0,222,
        111,224,110,2,0,1,9,1,0,48,57,2,0,69,69,101,101,2,0,43,43,45,45,
        4,0,10,10,13,13,34,34,92,92,4,0,10,10,13,13,39,39,92,92,4,0,36,36,
        65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,
        32,2,0,10,10,92,92,803,0,2,1,0,0,0,0,4,1,0,0,0,0,6,1,0,0,0,0,8,1,
        0,0,0,0,10,1,0,0,0,0,12,1,0,0,0,0,14,1,0,0,0,0,16,1,0,0,0,0,18,1,
        0,0,0,0,20,1,0,0,0,0,22,1,0,0,0,0,24,1,0,0,0,0,26,1,0,0,0,0,28,1,
        0,0,0,0,30,1,0,0,0,0,32,1,0,0,0,0,34,1,0,0,0,0,36,1,0,0,0,0,38,1,
        0,0,0,0,40,1,0,0,0,0,42,1,0,0,0,0,44,1,0,0,0,0,46,1,0,0,0,0,48,1,
        0,0,0,0,50,1,0,0,0,0,52,1,0,0,0,0,54,1,0,0,0,0,56,1,0,0,0,0,58,1,
        0,0,0,0,60,1,0,0,0,0,62,1,0,0,0,0,64,1,0,0,0,0,66,1,0,0,0,0,68,1,
        0,0,0,0,70,1,0,0,0,0,72,1,0,0,0,0,74,1,0,0,0,0,76,1,0,0,0,0,78,1,
        0,0,0,0,80,1,0,0,0,0,82,1,0,0,0,0,84,1,0,0,0,0,86,1,0,0,0,0,88,1,
        0,0,0,0,90,1,0,0,0,0,92,1,0,0,0,0,94,1,0,0,0,0,96,1,0,0,0,0,98,1,
        0,0,0,0,100,1,0,0,0,0,102,1,0,0,0,0,104,1,0,0,0,0,106,1,0,0,0,0,
        108,1,0,0,0,0,110,1,0,0,0,0,112,1,0,0,0,0,114,1,0,0,0,0,116,1,0,
        0,0,0,118,1,0,0,0,0,120,1,0,0,0,0,122,1,0,0,0,0,124,1,0,0,0,0,126,
        1,0,0,0,0,128,1,0,0,0,0,130,1,0,0,0,0,132,1,0,0,0,0,134,1,0,0,0,
        0,136,1,0,0,0,0,138,1,0,0,0,0,140,1,0,0,0,0,142,1,0,0,0,0,144,1,
        0,0,0,0,146,1,0,0,0,0,148,1,0,0,0,0,150,1,0,0,0,0,152,1,0,0,0,0,
        154,1,0,0,0,0,156,1,0,0,0,0,158,1,0,0,0,0,160,1,0,0,0,0,162,1,0,
        0,0,0,164,1,0,0,0,0,166,1,0,0,0,0,168,1,0,0,0,0,170,1,0,0,0,0,172,
        1,0,0,0,0,174,1,0,0,0,0,176,1,0,0,0,0,178,1,0,0,0,0,180,1,0,0,0,
        0,182,1,0,0,0,0,184,1,0,0,0,0,186,1,0,0,0,0,188,1,0,0,0,0,190,1,
        0,0,0,0,192,1,0,0,0,0,194,1,0,0,0,0,196,1,0,0,0,0,198,1,0,0,0,0,
        200,1,0,0,0,0,202,1,0,0,0,0,204,1,0,0,0,0,206,1,0,0,0,0,208,1,0,
        0,0,0,210,1,0,0,0,0,212,1,0,0,0,0,214,1,0,0,0,0,216,1,0,0,0,0,218,
        1,0,0,0,1,220,1,0,0,0,1,222,1,0,0,0,1,224,1,0,0,0,2,226,1,0,0,0,
        4,231,1,0,0,0,6,237,1,0,0,0,8,242,1,0,0,0,10,247,1,0,0,0,12,255,
        1,0,0,0,14,261,1,0,0,0,16,270,1,0,0,0,18,278,1,0,0,0,20,281,1,0,
        0,0,22,286,1,0,0,0,24,291,1,0,0,0,26,296,1,0,0,0,28,302,1,0,0,0,
        30,307,1,0,0,0,32,314,1,0,0,0,34,320,1,0,0,0,36,324,1,0,0,0,38,332,
        1,0,0,0,40,337,1,0,0,0,42,339,1,0,0,0,44,342,1,0,0,0,46,348,1,0,
        0,0,48,355,1,0,0,0,50,358,1,0,0,0,52,366,1,0,0,0,54,374,1,0,0,0,
        56,378,1,0,0,0,58,383,1,0,0,0,60,391,1,0,0,0,62,398,1,0,0,0,64,405,
        1,0,0,0,66,414,1,0,0,0,68,421,1,0,0,0,70,428,1,0,0,0,72,435,1,0,
        0,0,74,442,1,0,0,0,76,449,1,0,0,0,78,456,1,0,0,0,80,463,1,0,0,0,
        82,471,1,0,0,0,84,477,1,0,0,0,86,485,1,0,0,0,88,491,1,0,0,0,90,496,
        1,0,0,0,92,505,1,0,0,0,94,511,1,0,0,0,96,519,1,0,0,0,98,529,1,0,
        0,0,100,536,1,0,0,0,102,543,1,0,0,0,104,545,1,0,0,0,106,547,1,0,
        0,0,108,549,1,0,0,0,110,551,1,0,0,0,112,553,1,0,0,0,114,556,1,0,
        0,0,116,559,1,0,0,0,118,562,1,0,0,0,120,565,1,0,0,0,122,567,1,0,
        0,0,124,569,1,0,0,0,126,572,1,0,0,0,128,575,1,0,0,0,130,578,1,0,
        0,0,132,581,1,0,0,0,134,583,1,0,0,0,136,585,1,0,0,0,138,587,1,0,
        0,0,140,589,1,0,0,0,142,592,1,0,0,0,144,595,1,0,0,0,146,597,1,0,
        0,0,148,599,1,0,0,0,150,601,1,0,0,0,152,603,1,0,0,0,154,606,1,0,
        0,0,156,608,1,0,0,0,158,611,1,0,0,0,160,614,1,0,0,0,162,617,1,0,
        0,0,164,620,1,0,0,0,166,623,1,0,0,0,168,626,1,0,0,0,170,629,1,0,
        0,0,172,632,1,0,0,0,174,635,1,0,0,0,176,638,1,0,0,0,178,641,1,0,
        0,0,180,644,1,0,0,0,182,647,1,0,0,0,184,650,1,0,0,0,186,653,1,0,
        0,0,188,656,1,0,0,0,190,658,1,0,0,0,192,660,1,0,0,0,194,662,1,0,
        0,0,196,664,1,0,0,0,198,666,1,0,0,0,200,668,1,0,0,0,202,671,1,0,
        0,0,204,678,1,0,0,0,206,698,1,0,0,0,208,709,1,0,0,0,210,717,1,0,
        0,0,212,726,1,0,0,0,214,740,1,0,0,0,216,753,1,0,0,0,218,764,1,0,
        0,0,220,771,1,0,0,0,222,781,1,0,0,0,224,786,1,0,0,0,226,227,5,97,
        0,0,227,228,5,117,0,0,228,229,5,116,0,0,229,230,5,111,0,0,230,3,
        1,0,0,0,231,232,5,98,0,0,232,233,5,114,0,0,233,234,5,101,0,0,234,
        235,5,97,0,0,235,236,5,107,0,0,236,5,1,0,0,0,237,238,5,99,0,0,238,
        239,5,97,0,0,239,240,5,115,0,0,240,241,5,101,0,0,241,7,1,0,0,0,242,
        243,5,99,0,0,243,244,5,104,0,0,244,245,5,97,0,0,245,246,5,114,0,
        0,246,9,1,0,0,0,247,248,5,99,0,0,248,249,5,108,0,0,249,250,5,111,
        0,0,250,251,5,115,0,0,251,252,5,117,0,0,252,253,5,114,0,0,253,254,
        5,101,0,0,254,11,1,0,0,0,255,256,5,99,0,0,256,257,5,111,0,0,257,
        258,5,110,0,0,258,259,5,115,0,0,259,260,5,116,0,0,260,13,1,0,0,0,
        261,262,5,99,0,0,262,263,5,111,0,0,263,264,5,110,0,0,264,265,5,116,
        0,0,265,266,5,105,0,0,266,267,5,110,0,0,267,268,5,117,0,0,268,269,
        5,101,0,0,269,15,1,0,0,0,270,271,5,100,0,0,271,272,5,101,0,0,272,
        273,5,102,0,0,273,274,5,97,0,0,274,275,5,117,0,0,275,276,5,108,0,
        0,276,277,5,116,0,0,277,17,1,0,0,0,278,279,5,100,0,0,279,280,5,111,
        0,0,280,19,1,0,0,0,281,282,5,101,0,0,282,283,5,99,0,0,283,284,5,
        104,0,0,284,285,5,111,0,0,285,21,1,0,0,0,286,287,5,101,0,0,287,288,
        5,108,0,0,288,289,5,115,0,0,289,290,5,101,0,0,290,23,1,0,0,0,291,
        292,5,101,0,0,292,293,5,108,0,0,293,294,5,105,0,0,294,295,5,102,
        0,0,295,25,1,0,0,0,296,297,5,101,0,0,297,298,5,110,0,0,298,299,5,
        100,0,0,299,300,5,105,0,0,300,301,5,102,0,0,301,27,1,0,0,0,302,303,
        5,101,0,0,303,304,5,110,0,0,304,305,5,117,0,0,305,306,5,109,0,0,
        306,29,1,0,0,0,307,308,5,101,0,0,308,309,5,120,0,0,309,310,5,116,
        0,0,310,311,5,101,0,0,311,312,5,114,0,0,312,313,5,110,0,0,313,31,
        1,0,0,0,314,315,5,102,0,0,315,316,5,108,0,0,316,317,5,111,0,0,317,
        318,5,97,0,0,318,319,5,116,0,0,319,33,1,0,0,0,320,321,5,102,0,0,
        321,322,5,111,0,0,322,323,5,114,0,0,323,35,1,0,0,0,324,325,5,102,
        0,0,325,326,5,111,0,0,326,327,5,114,0,0,327,328,5,101,0,0,328,329,
        5,97,0,0,329,330,5,99,0,0,330,331,5,104,0,0,331,37,1,0,0,0,332,333,
        5,103,0,0,333,334,5,111,0,0,334,335,5,116,0,0,335,336,5,111,0,0,
        336,39,1,0,0,0,337,338,5,35,0,0,338,41,1,0,0,0,339,340,5,105,0,0,
        340,341,5,102,0,0,341,43,1,0,0,0,342,343,5,105,0,0,343,344,5,102,
        0,0,344,345,5,100,0,0,345,346,5,101,0,0,346,347,5,102,0,0,347,45,
        1,0,0,0,348,349,5,105,0,0,349,350,5,102,0,0,350,351,5,110,0,0,351,
        352,5,100,0,0,352,353,5,101,0,0,353,354,5,102,0,0,354,47,1,0,0,0,
        355,356,5,105,0,0,356,357,5,110,0,0,357,49,1,0,0,0,358,359,5,105,
        0,0,359,360,5,110,0,0,360,361,5,99,0,0,361,362,5,108,0,0,362,363,
        5,117,0,0,363,364,5,100,0,0,364,365,5,101,0,0,365,51,1,0,0,0,366,
        367,5,105,0,0,367,368,5,110,0,0,368,369,5,104,0,0,369,370,5,101,
        0,0,370,371,5,114,0,0,371,372,5,105,0,0,372,373,5,116,0,0,373,53,
        1,0,0,0,374,375,5,105,0,0,375,376,5,110,0,0,376,377,5,116,0,0,377,
        55,1,0,0,0,378,379,5,108,0,0,379,380,5,105,0,0,380,381,5,110,0,0,
        381,382,5,101,0,0,382,57,1,0,0,0,383,384,5,109,0,0,384,385,5,97,
        0,0,385,386,5,112,0,0,386,387,5,112,0,0,387,388,5,105,0,0,388,389,
        5,110,0,0,389,390,5,103,0,0,390,59,1,0,0,0,391,392,5,111,0,0,392,
        393,5,98,0,0,393,394,5,106,0,0,394,395,5,101,0,0,395,396,5,99,0,
        0,396,397,5,116,0,0,397,61,1,0,0,0,398,399,5,112,0,0,399,400,5,114,
        0,0,400,401,5,97,0,0,401,402,5,103,0,0,402,403,5,109,0,0,403,404,
        5,97,0,0,404,63,1,0,0,0,405,406,5,114,0,0,406,407,5,101,0,0,407,
        408,5,103,0,0,408,409,5,105,0,0,409,410,5,115,0,0,410,411,5,116,
        0,0,411,412,5,101,0,0,412,413,5,114,0,0,413,65,1,0,0,0,414,415,5,
        114,0,0,415,416,5,101,0,0,416,417,5,116,0,0,417,418,5,117,0,0,418,
        419,5,114,0,0,419,420,5,110,0,0,420,67,1,0,0,0,421,422,5,115,0,0,
        422,423,5,105,0,0,423,424,5,122,0,0,424,425,5,101,0,0,425,426,5,
        111,0,0,426,427,5,102,0,0,427,69,1,0,0,0,428,429,5,115,0,0,429,430,
        5,116,0,0,430,431,5,97,0,0,431,432,5,116,0,0,432,433,5,117,0,0,433,
        434,5,115,0,0,434,71,1,0,0,0,435,436,5,115,0,0,436,437,5,116,0,0,
        437,438,5,114,0,0,438,439,5,117,0,0,439,440,5,99,0,0,440,441,5,116,
        0,0,441,73,1,0,0,0,442,443,5,115,0,0,443,444,5,116,0,0,444,445,5,
        114,0,0,445,446,5,105,0,0,446,447,5,110,0,0,447,448,5,103,0,0,448,
        75,1,0,0,0,449,450,5,115,0,0,450,451,5,121,0,0,451,452,5,109,0,0,
        452,453,5,98,0,0,453,454,5,111,0,0,454,455,5,108,0,0,455,77,1,0,
        0,0,456,457,5,115,0,0,457,458,5,119,0,0,458,459,5,105,0,0,459,460,
        5,116,0,0,460,461,5,99,0,0,461,462,5,104,0,0,462,79,1,0,0,0,463,
        464,5,116,0,0,464,465,5,121,0,0,465,466,5,112,0,0,466,467,5,101,
        0,0,467,468,5,100,0,0,468,469,5,101,0,0,469,470,5,102,0,0,470,81,
        1,0,0,0,471,472,5,117,0,0,472,473,5,110,0,0,473,474,5,105,0,0,474,
        475,5,111,0,0,475,476,5,110,0,0,476,83,1,0,0,0,477,478,5,117,0,0,
        478,479,5,110,0,0,479,480,5,107,0,0,480,481,5,110,0,0,481,482,5,
        111,0,0,482,483,5,119,0,0,483,484,5,110,0,0,484,85,1,0,0,0,485,486,
        5,117,0,0,486,487,5,110,0,0,487,488,5,100,0,0,488,489,5,101,0,0,
        489,490,5,102,0,0,490,87,1,0,0,0,491,492,5,118,0,0,492,493,5,111,
        0,0,493,494,5,105,0,0,494,495,5,100,0,0,495,89,1,0,0,0,496,497,5,
        118,0,0,497,498,5,111,0,0,498,499,5,108,0,0,499,500,5,97,0,0,500,
        501,5,116,0,0,501,502,5,105,0,0,502,503,5,108,0,0,503,504,5,101,
        0,0,504,91,1,0,0,0,505,506,5,119,0,0,506,507,5,104,0,0,507,508,5,
        105,0,0,508,509,5,108,0,0,509,510,5,101,0,0,510,93,1,0,0,0,511,512,
        5,112,0,0,512,513,5,114,0,0,513,514,5,105,0,0,514,515,5,118,0,0,
        515,516,5,97,0,0,516,517,5,116,0,0,517,518,5,101,0,0,518,95,1,0,
        0,0,519,520,5,112,0,0,520,521,5,114,0,0,521,522,5,111,0,0,522,523,
        5,116,0,0,523,524,5,101,0,0,524,525,5,99,0,0,525,526,5,116,0,0,526,
        527,5,101,0,0,527,528,5,100,0,0,528,97,1,0,0,0,529,530,5,112,0,0,
        530,531,5,117,0,0,531,532,5,98,0,0,532,533,5,108,0,0,533,534,5,105,
        0,0,534,535,5,99,0,0,535,99,1,0,0,0,536,537,5,115,0,0,537,538,5,
        116,0,0,538,539,5,97,0,0,539,540,5,116,0,0,540,541,5,105,0,0,541,
        542,5,99,0,0,542,101,1,0,0,0,543,544,5,43,0,0,544,103,1,0,0,0,545,
        546,5,45,0,0,546,105,1,0,0,0,547,548,5,42,0,0,548,107,1,0,0,0,549,
        550,5,47,0,0,550,109,1,0,0,0,551,552,5,37,0,0,552,111,1,0,0,0,553,
        554,5,43,0,0,554,555,5,43,0,0,555,113,1,0,0,0,556,557,5,45,0,0,557,
        558,5,45,0,0,558,115,1,0,0,0,559,560,5,60,0,0,560,561,5,60,0,0,561,
        117,1,0,0,0,562,563,5,62,0,0,563,564,5,62,0,0,564,119,1,0,0,0,565,
        566,5,60,0,0,566,121,1,0,0,0,567,568,5,62,0,0,568,123,1,0,0,0,569,
        570,5,60,0,0,570,571,5,61,0,0,571,125,1,0,0,0,572,573,5,62,0,0,573,
        574,5,61,0,0,574,127,1,0,0,0,575,576,5,61,0,0,576,577,5,61,0,0,577,
        129,1,0,0,0,578,579,5,33,0,0,579,580,5,61,0,0,580,131,1,0,0,0,581,
        582,5,38,0,0,582,133,1,0,0,0,583,584,5,124,0,0,584,135,1,0,0,0,585,
        586,5,94,0,0,586,137,1,0,0,0,587,588,5,33,0,0,588,139,1,0,0,0,589,
        590,5,38,0,0,590,591,5,38,0,0,591,141,1,0,0,0,592,593,5,124,0,0,
        593,594,5,124,0,0,594,143,1,0,0,0,595,596,5,63,0,0,596,145,1,0,0,
        0,597,598,5,58,0,0,598,147,1,0,0,0,599,600,5,59,0,0,600,149,1,0,
        0,0,601,602,5,44,0,0,602,151,1,0,0,0,603,604,5,46,0,0,604,605,5,
        46,0,0,605,153,1,0,0,0,606,607,5,46,0,0,607,155,1,0,0,0,608,609,
        5,58,0,0,609,610,5,58,0,0,610,157,1,0,0,0,611,612,5,43,0,0,612,613,
        5,61,0,0,613,159,1,0,0,0,614,615,5,45,0,0,615,616,5,61,0,0,616,161,
        1,0,0,0,617,618,5,42,0,0,618,619,5,61,0,0,619,163,1,0,0,0,620,621,
        5,47,0,0,621,622,5,61,0,0,622,165,1,0,0,0,623,624,5,37,0,0,624,625,
        5,61,0,0,625,167,1,0,0,0,626,627,5,38,0,0,627,628,5,61,0,0,628,169,
        1,0,0,0,629,630,5,124,0,0,630,631,5,61,0,0,631,171,1,0,0,0,632,633,
        5,94,0,0,633,634,5,61,0,0,634,173,1,0,0,0,635,636,5,40,0,0,636,637,
        5,123,0,0,637,175,1,0,0,0,638,639,5,125,0,0,639,640,5,41,0,0,640,
        177,1,0,0,0,641,642,5,40,0,0,642,643,5,91,0,0,643,179,1,0,0,0,644,
        645,5,93,0,0,645,646,5,41,0,0,646,181,1,0,0,0,647,648,5,45,0,0,648,
        649,5,62,0,0,649,183,1,0,0,0,650,651,5,40,0,0,651,652,5,58,0,0,652,
        185,1,0,0,0,653,654,5,58,0,0,654,655,5,41,0,0,655,187,1,0,0,0,656,
        657,5,40,0,0,657,189,1,0,0,0,658,659,5,41,0,0,659,191,1,0,0,0,660,
        661,5,123,0,0,661,193,1,0,0,0,662,663,5,125,0,0,663,195,1,0,0,0,
        664,665,5,91,0,0,665,197,1,0,0,0,666,667,5,93,0,0,667,199,1,0,0,
        0,668,669,5,92,0,0,669,201,1,0,0,0,670,672,7,0,0,0,671,670,1,0,0,
        0,672,673,1,0,0,0,673,671,1,0,0,0,673,674,1,0,0,0,674,203,1,0,0,
        0,675,677,7,0,0,0,676,675,1,0,0,0,677,680,1,0,0,0,678,676,1,0,0,
        0,678,679,1,0,0,0,679,681,1,0,0,0,680,678,1,0,0,0,681,683,5,46,0,
        0,682,684,7,0,0,0,683,682,1,0,0,0,684,685,1,0,0,0,685,683,1,0,0,
        0,685,686,1,0,0,0,686,696,1,0,0,0,687,689,7,1,0,0,688,690,7,2,0,
        0,689,688,1,0,0,0,689,690,1,0,0,0,690,692,1,0,0,0,691,693,7,0,0,
        0,692,691,1,0,0,0,693,694,1,0,0,0,694,692,1,0,0,0,694,695,1,0,0,
        0,695,697,1,0,0,0,696,687,1,0,0,0,696,697,1,0,0,0,697,205,1,0,0,
        0,698,704,5,34,0,0,699,703,8,3,0,0,700,701,5,92,0,0,701,703,9,0,
        0,0,702,699,1,0,0,0,702,700,1,0,0,0,703,706,1,0,0,0,704,702,1,0,
        0,0,704,705,1,0,0,0,705,707,1,0,0,0,706,704,1,0,0,0,707,708,5,34,
        0,0,708,207,1,0,0,0,709,713,5,39,0,0,710,714,8,4,0,0,711,712,5,92,
        0,0,712,714,9,0,0,0,713,710,1,0,0,0,713,711,1,0,0,0,714,715,1,0,
        0,0,715,716,5,39,0,0,716,209,1,0,0,0,717,721,7,5,0,0,718,720,7,6,
        0,0,719,718,1,0,0,0,720,723,1,0,0,0,721,719,1,0,0,0,721,722,1,0,
        0,0,722,724,1,0,0,0,723,721,1,0,0,0,724,725,6,104,0,0,725,211,1,
        0,0,0,726,727,5,47,0,0,727,728,5,42,0,0,728,732,1,0,0,0,729,731,
        9,0,0,0,730,729,1,0,0,0,731,734,1,0,0,0,732,733,1,0,0,0,732,730,
        1,0,0,0,733,735,1,0,0,0,734,732,1,0,0,0,735,736,5,42,0,0,736,737,
        5,47,0,0,737,738,1,0,0,0,738,739,6,105,1,0,739,213,1,0,0,0,740,741,
        5,47,0,0,741,742,5,47,0,0,742,746,1,0,0,0,743,745,9,0,0,0,744,743,
        1,0,0,0,745,748,1,0,0,0,746,747,1,0,0,0,746,744,1,0,0,0,747,749,
        1,0,0,0,748,746,1,0,0,0,749,750,5,10,0,0,750,751,1,0,0,0,751,752,
        6,106,1,0,752,215,1,0,0,0,753,754,3,40,19,0,754,755,5,100,0,0,755,
        756,5,101,0,0,756,757,5,102,0,0,757,758,5,105,0,0,758,759,5,110,
        0,0,759,760,5,101,0,0,760,761,1,0,0,0,761,762,6,107,2,0,762,217,
        1,0,0,0,763,765,7,7,0,0,764,763,1,0,0,0,765,766,1,0,0,0,766,764,
        1,0,0,0,766,767,1,0,0,0,767,768,1,0,0,0,768,769,6,108,1,0,769,219,
        1,0,0,0,770,772,8,8,0,0,771,770,1,0,0,0,772,773,1,0,0,0,773,771,
        1,0,0,0,773,774,1,0,0,0,774,777,1,0,0,0,775,776,5,92,0,0,776,778,
        5,10,0,0,777,775,1,0,0,0,777,778,1,0,0,0,778,779,1,0,0,0,779,780,
        6,109,3,0,780,221,1,0,0,0,781,782,5,92,0,0,782,783,5,10,0,0,783,
        784,1,0,0,0,784,785,6,110,3,0,785,223,1,0,0,0,786,787,5,10,0,0,787,
        788,1,0,0,0,788,789,6,111,4,0,789,225,1,0,0,0,17,0,1,673,678,685,
        689,694,696,702,704,713,721,732,746,766,773,777,5,7,1,0,6,0,0,5,
        1,0,3,0,0,4,0,0
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