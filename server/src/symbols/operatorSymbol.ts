import { ScopedSymbol } from "antlr4-c3";
import { IEvaluatableSymbol } from "./base";
import { SymbolKind } from "../types";

export class OperatorSymbol extends ScopedSymbol implements IEvaluatableSymbol {
    constructor(
        public operator: string,
        public lhs: IEvaluatableSymbol,
        public rhs: IEvaluatableSymbol
    ) {
        super(operator);
    }

    eval(scope?: any) {
        const lhs = this.children[0] as IEvaluatableSymbol;
        const rhs = this.children[1] as IEvaluatableSymbol;

        const lhsValue = lhs?.eval();
        const rhsValue = rhs?.eval();

        switch (this.name) {
            case "+":
                return lhsValue + rhsValue;
            case "-":
                return lhsValue - rhsValue;
            case "*":
                return lhsValue * rhsValue;
            case "/":
                return lhsValue / rhsValue;
            case "%":
                return lhsValue % rhsValue;
        }

        throw "operator not implements " + this.name;
    }

    public get kind() {
        return SymbolKind.Operator;
    }
}
