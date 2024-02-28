import {
    BaseSymbol,
    ScopedSymbol,
    MethodSymbol as BaseMethodSymbol,
    ParameterSymbol,
    TypedSymbol,
    IType,
    TypeKind,
    ReferenceKind,
} from "antlr4-c3";
import { SymbolKind } from "../types";
import * as vscodelang from "vscode-languageserver";

export class IdentifierSymbol extends BaseSymbol {}
export class IncludeSymbol extends BaseSymbol {}
export class InheritSymbol extends BaseSymbol {}
export class MethodSymbol extends ScopedSymbol {
    getParameters() {
        return this.getAllSymbolsSync(ParameterSymbol, true);
    }
}
export class ArgumentSymbol extends TypedSymbol {}
export class FunctionCallSymbol extends TypedSymbol {
    public arguments: ArgumentSymbol[] = [];
}
export class ObjectSymbol extends ScopedSymbol {
    public isLoaded: boolean = false;

    constructor(
        name: string,
        public filename: string,
        public type: ObjectType
    ) {
        super(name);
    }
}
interface IEvalSymbol {
    eval(): any;
}
export class DefineSymbol extends BaseSymbol {}
export class VariableSymbol extends TypedSymbol {}
export class OperatorSymbol extends BaseSymbol {}
export class AssignmentSymbol extends BaseSymbol {
    constructor(name: string, public lhs: BaseSymbol, public rhs?: BaseSymbol) {
        super(name);
    }
}
export class BlockSymbol extends ScopedSymbol {}
export class LiteralSymbol extends TypedSymbol implements IEvalSymbol {
    constructor(name: string, type: IType, public value: any) {
        super(name, type);
    }
    eval() {
        return this.value;
    }
}

export class EfunSymbol extends BaseMethodSymbol {
    public constructor(name: string, public returnType?: IType) {
        super(name);
    }
}

export class PreprocessorSymbol extends ScopedSymbol {
    constructor(name: string, public label: string) {
        super(name);
    }
}

/** if, switch, etc */
export class SelectionSymbol extends ScopedSymbol {
    constructor(name: string, public label: string) {
        super(name);
    }
}

export class IfSymbol extends ScopedSymbol {
    public if: SelectionSymbol;
    public elseIf: SelectionSymbol[];
    public else: SelectionSymbol;

    constructor(name: string) {
        super(name);
    }
}

const symbolDescriptionMap = new Map<SymbolKind, string>([
    [SymbolKind.Terminal, "Terminal"],
    [SymbolKind.Keyword, "Keyword"],
    [SymbolKind.Include, "Include"],
    [SymbolKind.Method, "Method"],
    [SymbolKind.Variable, "Variable"],
    [SymbolKind.Define, "Define"],
    [SymbolKind.Inherit, "Inherit"],
]);

const symbolCodeTypeMap = new Map<SymbolKind, vscodelang.SymbolKind>([
    [SymbolKind.Terminal, vscodelang.SymbolKind.EnumMember],
    [SymbolKind.Keyword, vscodelang.SymbolKind.Key],
    [SymbolKind.Include, vscodelang.SymbolKind.Module],
    [SymbolKind.Inherit, vscodelang.SymbolKind.Module],
    [SymbolKind.Method, vscodelang.SymbolKind.Method],
    [SymbolKind.Variable, vscodelang.SymbolKind.Variable],
    [SymbolKind.Define, vscodelang.SymbolKind.Constant],
]);

/**
 * Provides a textual expression for a native symbol kind.
 *
 * @param kind The kind of symbol for which a description is needed.
 *
 * @returns The description.
 */
export const symbolDescriptionFromEnum = (kind: SymbolKind): string => {
    return symbolDescriptionMap.get(kind) || "Unknown";
};

/**
 * Converts the native symbol kind to a vscode symbol kind.
 *
 * @param kind The kind of symbol for which the vscode kind is needed.
 *
 * @returns The vscode symbol kind for the given ANTLR4 kind.
 */
export const translateSymbolKind = (
    kind: SymbolKind
): vscodelang.SymbolKind => {
    return symbolCodeTypeMap.get(kind) || vscodelang.SymbolKind.Null;
};

const symbolCompletionTypeMap = new Map<
    SymbolKind,
    vscodelang.CompletionItemKind
>([
    [SymbolKind.Terminal, vscodelang.CompletionItemKind.EnumMember],
    [SymbolKind.Keyword, vscodelang.CompletionItemKind.Keyword],
    [SymbolKind.Block, vscodelang.CompletionItemKind.Function],
    [SymbolKind.Define, vscodelang.CompletionItemKind.Variable],
    [SymbolKind.Inherit, vscodelang.CompletionItemKind.Function],
    [SymbolKind.Method, vscodelang.CompletionItemKind.Function],
    [SymbolKind.Variable, vscodelang.CompletionItemKind.Variable],
    [SymbolKind.Operator, vscodelang.CompletionItemKind.Operator],
    [SymbolKind.Efun, vscodelang.CompletionItemKind.Function],
]);

/**
 * Converts the native symbol kind to a vscode completion item kind.
 *
 * @param kind The kind of symbol for which return the completion item kind.
 *
 * @returns The vscode completion item kind.
 */
export const translateCompletionKind = (
    kind: SymbolKind
): vscodelang.CompletionItemKind => {
    return (
        symbolCompletionTypeMap.get(kind) || vscodelang.CompletionItemKind.Text
    );
};

/** Determines the sort order in the completion list. One value for each SymbolKind. */

export const completionSortKeys = new Map<SymbolKind, string>([
    [SymbolKind.Keyword, "01"],
    [SymbolKind.Method, "08"],
    [SymbolKind.Variable, "05"],
    [SymbolKind.Efun, "02"],
    [SymbolKind.Operator, "00"],
]);

// Descriptions for each symbol kind.

export const completionDetails = new Map<SymbolKind, string>([
    [SymbolKind.Keyword, "Keyword"],
    [SymbolKind.Operator, "Operator"],
    [SymbolKind.Efun, "Driver efun"],
    [SymbolKind.Variable, "Variable"],
    [SymbolKind.Method, "Method"],
]);

export class ITypedSymbol {
    type: IType;
}

export class ObjectType extends BaseSymbol implements IType {
    public constructor(public name: string) {
        super(name);
    }

    baseTypes: IType[] = [];

    public get kind(): TypeKind {
        return TypeKind.Class;
    }

    public get reference(): ReferenceKind {
        return ReferenceKind.Instance;
    }
}
