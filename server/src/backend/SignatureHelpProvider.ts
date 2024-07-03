import { TextDocument } from "vscode-languageserver-textdocument";
import { LpcFacade } from "./facade";
import {
    ParameterInformation,
    Position,
    SignatureHelp,
    SignatureInformation,
} from "vscode-languageserver";

import { ContextSymbolTable } from "./ContextSymbolTable";
import { firstEntry, trimStart } from "../utils";
import { ParserRuleContext } from "antlr4ng";

import { ArrowSymbol } from "../symbols/arrowSymbol";
import { MethodInvocationSymbol } from "../symbols/methodInvocationSymbol";

export class SignatureHelpProvider {
    constructor(private backend: LpcFacade) {}

    public getSignatureHelp(
        doc: TextDocument,
        position: Position
    ): SignatureHelp {
        const filename = doc.uri;
        const info = firstEntry(
            this.backend.symbolInfoAtPosition(
                filename,
                position.character,
                position.line + 1,
                true
            )
        );
        if (!info) return undefined;

        let methodInvoc: MethodInvocationSymbol;
        if (info.symbol instanceof ArrowSymbol) {
            methodInvoc = (info.symbol as ArrowSymbol).methodInvocation;
        } else if (!(info.symbol instanceof MethodInvocationSymbol)) {
            console.warn(
                "expected method invocation symbol but got something else",
                info.symbol
            );
            return;
        } else {
            methodInvoc = info.symbol as MethodInvocationSymbol;
        }

        const method = methodInvoc?.getMethodSymbol();

        if (!method) return { signatures: [] };

        // use method's table, because it might not be from the same file as the method invoc
        const methodInfo = (
            method.symbolTable as ContextSymbolTable
        ).getSymbolInfo(method);

        const params = method.getParametersSync();
        const paramInfo = params.map((p, idx) => {
            // see if there is jsdoc for this param
            const tag = method.doc?.tags.find((tag) => tag.name == p.name);

            // assembly the documentation
            const docs: string[] = [];
            docs.push(trimStart(tag?.description, "- "));

            return ParameterInformation.create(
                ((p.type?.name ?? "") + " " + p.name).trim(), // include type name if one was provided
                docs.filter((x) => x?.length > 0).join(" ")
            );
        });

        // figure out the active param index
        let currentParamIndex = 0;
        const args = methodInvoc.getArguments() ?? [];
        args.forEach((arg, idx) => {
            if (
                (arg.context as ParserRuleContext).stop.column <
                position.character
            ) {
                currentParamIndex = idx + 1;
            }
        });

        return {
            signatures: [
                SignatureInformation.create(
                    methodInfo.definition.text,
                    method.doc?.description,
                    ...paramInfo
                ),
            ],
            activeParameter: currentParamIndex,
            activeSignature: 0,
        };
    }
}
