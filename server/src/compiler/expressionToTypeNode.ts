import {    
    ArrayLiteralExpression,
    ArrowFunction,    
    BinaryExpression,
    BindingElement,
    ClassExpression,
    CompilerOptions,
    Debug,
    ElementAccessExpression,    
    Expression,
    forEachReturnStatement,
    FunctionExpression,
    FunctionFlags,
    FunctionLikeDeclaration,    
    getEffectiveReturnTypeNode,
    getEffectiveTypeAnnotationNode,
    getFunctionFlags,
    getJSDocTypeAssertionType,    
    HasInferredType,
    Identifier,    
    isBlock,    
    isIdentifier,
    isJSDocTypeAssertion,
    isKeyword,    
    isPrimitiveLiteralValue,    
    isShorthandPropertyAssignment,
    isSpreadAssignment,        
    isValueSignatureDeclaration,        
    JSDocSignature,
    MethodDeclaration,
    Node,
    NodeArray,
    NodeFlags,
    nodeIsMissing,
    ObjectLiteralExpression,
    ParameterDeclaration,
    ParenthesizedExpression,
    ParenthesizedTypeNode,
    PrefixUnaryExpression,
    PropertyAccessExpression,
    PropertyAssignment,
    PropertyDeclaration,
    PropertyName,
    PropertySignature,    
    SignatureDeclaration,
    SyntacticTypeNodeBuilderContext,
    SyntacticTypeNodeBuilderResolver,
    SyntaxKind,
    TypeAssertion,
    TypeNode,
    TypeParameterDeclaration,
    UnionTypeNode,
    VariableDeclaration,
} from "./_namespaces/lpc.js";

/** @internal */
export function createSyntacticTypeNodeBuilder(options: CompilerOptions, resolver: SyntacticTypeNodeBuilderResolver) {
    const strictNullChecks = false;// getStrictOptionValue(options, "strictNullChecks");

    return {
        typeFromExpression,
        serializeTypeOfDeclaration,
        serializeReturnTypeForSignature,
        serializeTypeOfExpression,
    };
    function serializeExistingTypeAnnotation(type: TypeNode | undefined, addUndefined?: boolean) {
        return type !== undefined && (!addUndefined || (type && canAddUndefined(type))) ? true : undefined;
    }
    function serializeTypeOfExpression(expr: Expression, context: SyntacticTypeNodeBuilderContext, addUndefined?: boolean, preserveLiterals?: boolean) {
        return typeFromExpression(expr, context, /*isConstContext*/ false, addUndefined, preserveLiterals) ?? inferExpressionType(expr, context);
    }
    function serializeTypeOfDeclaration(node: HasInferredType, context: SyntacticTypeNodeBuilderContext) {
        switch (node.kind) {
            case SyntaxKind.PropertySignature:
                return serializeExistingTypeAnnotation(getEffectiveTypeAnnotationNode(node));
            case SyntaxKind.Parameter:
                return typeFromParameter(node, context);
            case SyntaxKind.VariableDeclaration:
                return typeFromVariable(node, context);
            case SyntaxKind.PropertyDeclaration:
                return typeFromProperty(node, context);
            case SyntaxKind.BindingElement:
                return inferTypeOfDeclaration(node, context);            
            case SyntaxKind.PropertyAccessExpression:
            case SyntaxKind.ElementAccessExpression:
            case SyntaxKind.BinaryExpression:
                return serializeExistingTypeAnnotation(getEffectiveTypeAnnotationNode(node)) || inferTypeOfDeclaration(node, context);
            case SyntaxKind.PropertyAssignment:
                return typeFromExpression(node.initializer, context) || inferTypeOfDeclaration(node, context);
            default:
                Debug.assertNever(node, `Node needs to be an inferrable node, found ${Debug.formatSyntaxKind((node as Node).kind)}`);
        }
    }
    function serializeReturnTypeForSignature(node: SignatureDeclaration | JSDocSignature, context: SyntacticTypeNodeBuilderContext): boolean | undefined {
        switch (node.kind) {            
            case SyntaxKind.MethodDeclaration:
            case SyntaxKind.FunctionDeclaration:
            case SyntaxKind.MethodSignature:
            // case SyntaxKind.ConstructSignature:
            // case SyntaxKind.CallSignature:
            // case SyntaxKind.Constructor:
            // case SyntaxKind.SetAccessor:
            case SyntaxKind.IndexSignature:
            case SyntaxKind.FunctionType:            
            case SyntaxKind.FunctionExpression:
            case SyntaxKind.ArrowFunction:
            // case SyntaxKind.JSDocFunctionType:
            case SyntaxKind.JSDocSignature:
                return createReturnFromSignature(node, context);
            default:
                Debug.assertNever(node as never, `Node needs to be an inferrable node, found ${Debug.formatSyntaxKind((node as Node).kind)}`);
        }
    }
    
    function typeFromVariable(node: VariableDeclaration, context: SyntacticTypeNodeBuilderContext) {
        const declaredType = getEffectiveTypeAnnotationNode(node);
        if (declaredType) {
            return serializeExistingTypeAnnotation(declaredType);
        }
        let resultType;
        if (node.initializer) {
            if (!resolver.isExpandoFunctionDeclaration(node)) {
                resultType = typeFromExpression(node.initializer, context, /*isConstContext*/ undefined, /*requiresAddingUndefined*/ undefined, false);
            }
        }
        return resultType ?? inferTypeOfDeclaration(node, context);
    }
    function typeFromParameter(node: ParameterDeclaration, context: SyntacticTypeNodeBuilderContext) {
        const parent = node.parent;
        
        const declaredType = getEffectiveTypeAnnotationNode(node);
        const addUndefined = resolver.requiresAddingImplicitUndefined(node);
        let resultType;
        if (declaredType) {
            resultType = serializeExistingTypeAnnotation(declaredType, addUndefined);
        }
        else {
            if (node.initializer && isIdentifier(node.name)) {
                resultType = typeFromExpression(node.initializer, context, /*isConstContext*/ undefined, addUndefined);
            }
        }
        return resultType ?? inferTypeOfDeclaration(node, context);
    }
    function typeFromProperty(node: PropertyDeclaration, context: SyntacticTypeNodeBuilderContext) {
        const declaredType = getEffectiveTypeAnnotationNode(node);
        if (declaredType) {
            return serializeExistingTypeAnnotation(declaredType);
        }
        let resultType;
        if (node.initializer) {
            const isReadonly = false;//isDeclarationReadonly(node);
            resultType = typeFromExpression(node.initializer, context, /*isConstContext*/ undefined, /*requiresAddingUndefined*/ undefined, isReadonly);
        }
        return resultType ?? inferTypeOfDeclaration(node, context);
    }

    function inferTypeOfDeclaration(
        node: PropertyAssignment | PropertyAccessExpression | BinaryExpression | ElementAccessExpression | VariableDeclaration | ParameterDeclaration | BindingElement | PropertyDeclaration | PropertySignature ,
        context: SyntacticTypeNodeBuilderContext,
    ) {
        context.tracker.reportInferenceFallback(node);
        return false;
    }

    function inferExpressionType(node: Expression, context: SyntacticTypeNodeBuilderContext) {
        context.tracker.reportInferenceFallback(node);
        return false;
    }

    function inferReturnTypeOfSignatureSignature(node: SignatureDeclaration | JSDocSignature, context: SyntacticTypeNodeBuilderContext) {
        context.tracker.reportInferenceFallback(node);
        return false;
    }

    
    function typeFromTypeAssertion(expression: Expression, type: TypeNode, context: SyntacticTypeNodeBuilderContext, requiresAddingUndefined: boolean) {
        
        if (requiresAddingUndefined && !canAddUndefined(type)) {
            context.tracker.reportInferenceFallback(type);
        }
        return serializeExistingTypeAnnotation(type);
    }
    function typeFromExpression(node: Expression, context: SyntacticTypeNodeBuilderContext, isConstContext = false, requiresAddingUndefined = false, preserveLiterals = false): boolean | undefined {
        switch (node.kind) {
            case SyntaxKind.ParenthesizedExpression:
                if (isJSDocTypeAssertion(node)) {
                    return typeFromTypeAssertion(node.expression, getJSDocTypeAssertionType(node), context, requiresAddingUndefined);
                }
                return typeFromExpression((node as ParenthesizedExpression).expression, context, isConstContext, requiresAddingUndefined);
            case SyntaxKind.Identifier:
                if (resolver.isUndefinedIdentifierExpression(node as Identifier)) {
                    return true;
                }
                break;
            case SyntaxKind.NullKeyword:
                return true;
            case SyntaxKind.ArrowFunction:
            case SyntaxKind.FunctionExpression:
                return typeFromFunctionLikeExpression(node as ArrowFunction | FunctionExpression, context);
            case SyntaxKind.TypeAssertionExpression:
            // case SyntaxKind.AsExpression:
                const asExpression = node as TypeAssertion;
                return typeFromTypeAssertion(asExpression.expression, asExpression.type, context, requiresAddingUndefined);
            case SyntaxKind.PrefixUnaryExpression:
                const unaryExpression = node as PrefixUnaryExpression;
                if (isPrimitiveLiteralValue(unaryExpression)) {
                    if (unaryExpression.operand.kind === SyntaxKind.FloatLiteral) {
                        return typeFromPrimitiveLiteral();
                    }
                    if (unaryExpression.operand.kind === SyntaxKind.IntLiteral) {
                        return typeFromPrimitiveLiteral();
                    }
                }
                break;
            case SyntaxKind.IntLiteral:
                return typeFromPrimitiveLiteral();
            // case SyntaxKind.TemplateExpression:
            //     if (!isConstContext && !preserveLiterals) {
            //         return true;
            //     }
            //     break;
            // case SyntaxKind.NoSubstitutionTemplateLiteral:
            case SyntaxKind.StringLiteral:
                return typeFromPrimitiveLiteral();
            case SyntaxKind.FloatLiteral:
                return typeFromPrimitiveLiteral();
            case SyntaxKind.TrueKeyword:
            case SyntaxKind.FalseKeyword:
                return typeFromPrimitiveLiteral();
            case SyntaxKind.ArrayLiteralExpression:
                return typeFromArrayLiteral(node as ArrayLiteralExpression, context, isConstContext);
            case SyntaxKind.MappingLiteralExpression:
                Debug.fail("todo - mapping literal");
            case SyntaxKind.ObjectLiteralExpression:
                return typeFromObjectLiteral(node as ObjectLiteralExpression, context, isConstContext);
            case SyntaxKind.ClassExpression:
                return inferExpressionType(node as ClassExpression, context);
        }
        return undefined;
    }
    function typeFromFunctionLikeExpression(fnNode: FunctionExpression | ArrowFunction, context: SyntacticTypeNodeBuilderContext) {
        const returnType = serializeExistingTypeAnnotation(fnNode.type) ?? createReturnFromSignature(fnNode, context);
        const typeParameters = undefined;//reuseTypeParameters(fnNode.typeParameters);
        const parameters = fnNode.parameters.every(p => ensureParameter(p, context));
        return returnType && typeParameters && parameters;
    }
    function canGetTypeFromArrayLiteral(arrayLiteral: ArrayLiteralExpression, context: SyntacticTypeNodeBuilderContext, isConstContext: boolean) {
        if (!isConstContext) {
            context.tracker.reportInferenceFallback(arrayLiteral);
            return false;
        }
        for (const element of arrayLiteral.elements) {
            if (element.kind === SyntaxKind.SpreadElement) {
                context.tracker.reportInferenceFallback(element);
                return false;
            }
        }
        return true;
    }
    function typeFromArrayLiteral(arrayLiteral: ArrayLiteralExpression, context: SyntacticTypeNodeBuilderContext, isConstContext: boolean) {
        if (!canGetTypeFromArrayLiteral(arrayLiteral, context, isConstContext)) {
            return false;
        }

        let canInferArray = true;
        for (const element of arrayLiteral.elements) {
            Debug.assert(element.kind !== SyntaxKind.SpreadElement);
            if (element.kind !== SyntaxKind.OmittedExpression) {
                canInferArray = (typeFromExpression(element, context, isConstContext) ?? inferExpressionType(element, context)) && canInferArray;
            }
        }
        return true;
    }
    function canGetTypeFromObjectLiteral(objectLiteral: ObjectLiteralExpression, context: SyntacticTypeNodeBuilderContext) {
        let result = true;
        for (const prop of objectLiteral.properties) {
            if (prop.flags & NodeFlags.ThisNodeHasError) {
                result = false;
                break; // Bail if parse errors
            }
            // if (prop.kind === SyntaxKind.ShorthandPropertyAssignment || prop.kind === SyntaxKind.SpreadAssignment) {
            //     context.tracker.reportInferenceFallback(prop);
            //     result = false;
            // }
            else if (prop.name.flags & NodeFlags.ThisNodeHasError) {
                result = false;
                break; // Bail if parse errors
            }            
            else if (prop.name.kind === SyntaxKind.ComputedPropertyName) {
                const expression = prop.name.expression;
                if (!isPrimitiveLiteralValue(expression, /*includeBigInt*/ false) && !resolver.isDefinitelyReferenceToGlobalSymbolObject(expression)) {
                    context.tracker.reportInferenceFallback(prop.name);
                    result = false;
                }
            }
        }
        return result;
    }
    function typeFromObjectLiteral(objectLiteral: ObjectLiteralExpression, context: SyntacticTypeNodeBuilderContext, isConstContext: boolean): boolean {
        if (!canGetTypeFromObjectLiteral(objectLiteral, context)) return false;

        let canInferObjectLiteral = true;
        for (const prop of objectLiteral.properties) {
            Debug.assert(!isShorthandPropertyAssignment(prop) && !isSpreadAssignment(prop));

            const name = prop.name;
            switch (prop.kind) {
                // case SyntaxKind.MethodDeclaration:
                //     canInferObjectLiteral = !!typeFromObjectLiteralMethod(prop, name, context) && canInferObjectLiteral;
                //     break;
                case SyntaxKind.PropertyAssignment:
                    canInferObjectLiteral = !!typeFromObjectLiteralPropertyAssignment(prop, name, context, isConstContext) && canInferObjectLiteral;
                    break;                
            }
        }

        return canInferObjectLiteral;
    }

    function typeFromObjectLiteralPropertyAssignment(prop: PropertyAssignment, name: PropertyName, context: SyntacticTypeNodeBuilderContext, isConstContext: boolean) {
        return typeFromExpression(prop.initializer, context, isConstContext) ?? inferTypeOfDeclaration(prop, context);
    }

    function ensureParameter(p: ParameterDeclaration, context: SyntacticTypeNodeBuilderContext) {
        return typeFromParameter(p, context);
    }
    function reuseTypeParameters(typeParameters: NodeArray<TypeParameterDeclaration> | undefined) {
        // TODO: We will probably need to add a fake scopes for the signature (to hold the type parameters and the parameter)
        // For now this is good enough since the new serialization is used for Nodes in the same context.
        return typeParameters?.every(tp =>
            serializeExistingTypeAnnotation(tp.constraint) &&
            serializeExistingTypeAnnotation(tp.default)
        ) ?? true;
    }
    function typeFromObjectLiteralMethod(method: MethodDeclaration, name: PropertyName, context: SyntacticTypeNodeBuilderContext): boolean {
        const returnType = createReturnFromSignature(method, context);
        const typeParameters = true;//reuseTypeParameters(method.typeParameters);
        const parameters = method.parameters.every(p => ensureParameter(p, context));
        return returnType && typeParameters && parameters;
    }
    
    function typeFromPrimitiveLiteral() {
        return true;
    }

    function canAddUndefined(node: TypeNode): boolean {
        if (!strictNullChecks) return true;
        if (
            isKeyword(node.kind)
            || node.kind === SyntaxKind.LiteralType
            || node.kind === SyntaxKind.FunctionType
            // || node.kind === SyntaxKind.ConstructorType
            || node.kind === SyntaxKind.ArrayType
            // || node.kind === SyntaxKind.TupleType
            || node.kind === SyntaxKind.TypeLiteral
            // || node.kind === SyntaxKind.TemplateLiteralType
            // || node.kind === SyntaxKind.ThisType
        ) {
            return true;
        }
        if (node.kind === SyntaxKind.ParenthesizedType) {
            return canAddUndefined((node as ParenthesizedTypeNode).type);
        }
        if (node.kind === SyntaxKind.UnionType) {// || node.kind === SyntaxKind.IntersectionType) {
            return (node as UnionTypeNode ).types.every(canAddUndefined);
        }
        return false;
    }

    function createReturnFromSignature(fn: SignatureDeclaration | JSDocSignature, context: SyntacticTypeNodeBuilderContext) {
        let returnType;
        const returnTypeNode = getEffectiveReturnTypeNode(fn);
        if (returnTypeNode) {
            returnType = serializeExistingTypeAnnotation(returnTypeNode);
        }
        if (!returnType && isValueSignatureDeclaration(fn)) {
            returnType = typeFromSingleReturnExpression(fn, context);
        }
        return returnType ?? inferReturnTypeOfSignatureSignature(fn, context);
    }

    function typeFromSingleReturnExpression(declaration: FunctionLikeDeclaration | undefined, context: SyntacticTypeNodeBuilderContext): boolean | undefined {
        let candidateExpr: Expression | undefined;
        if (declaration && !nodeIsMissing(declaration.body)) {
            if (getFunctionFlags(declaration) & FunctionFlags.AsyncGenerator) return undefined;

            const body = declaration.body;
            if (body && isBlock(body)) {
                forEachReturnStatement(body, s => {
                    if (!candidateExpr) {
                        candidateExpr = s.expression;
                    }
                    else {
                        candidateExpr = undefined;
                        return true;
                    }
                });
            }
            else {
                candidateExpr = body as Expression;
            }
        }
        if (candidateExpr) {
            return typeFromExpression(candidateExpr, context);
        }
        return undefined;
    }
}
