import { CharacterCodes } from "../backend/types";
import {Type,Symbol, SymbolLinks, CancellationToken, createSymbolTable, Declaration, EmitTextWriter, ModifierFlags, Node, NodeFlags, objectAllocator, Scanner, Signature, SignatureKind, SymbolFlags, TypeChecker, TypeCheckerHost, TypeFormatFlags, TypeParameter, CheckFlags, TransientSymbol, TransientSymbolLinks, reduceLeft, bindSourceFile, SourceFile, Diagnostic, createDiagnosticCollection, concatenate, forEach, tracing, performance, NodeLinks, NodeCheckFlags, FlowNode, FlowType, clear, SyntaxKind, TracingNode, CallLikeExpression, CallExpression, isCallOrNewExpression, isBinaryExpression, Expression, SignatureDeclaration, SignatureFlags, emptyArray, TypeFlags, IntrinsicType, ObjectFlags, Debug, BinaryExpression, ObjectType, StructuredType, ResolvedType, SymbolTable, IndexInfo, Identifier, nodeIsMissing, createNameResolver, InternalSymbolName, SymbolId, some, DiagnosticMessage, DiagnosticArguments, createDiagnosticForNode, createCompilerDiagnostic, FunctionLikeDeclaration, PropertyDeclaration, isString, isIdentifier, Diagnostics, findLast, SymbolFormatFlags, isAccessExpression, isFunctionExpression, isAliasableExpression, PropertyAssignment, isVariableDeclarationInitializedToBareOrAccessedRequire, mapDefined, arrayFrom, getSpellingSuggestion, symbolName, startsWith, nodeIsSynthesized, declarationNameToString, getCanonicalDiagnostic, DiagnosticCategory, addRelatedInfo, ParameterDeclaration, BindingElement, isSourceFile, isExternalOrCommonJsModule, isBlockOrCatchScoped, length, every, isValidTypeOnlyAliasUseSite, isWriteOnlyAccess, getCombinedNodeFlags, DiagnosticWithLocation, getJSDocDeprecatedTag, findAncestor, isCallLikeExpression, isFunctionLike, ParenthesizedExpression, isAssignmentExpression, isVariableDeclaration, isBindingElement, PropertyAccessExpression, getEnclosingBlockScopeContainer, isPropertyDeclaration, nodeStartsNewLexicalEnvironment, isIterationStatement, isForStatement, getAncestor, ForStatement, pushIfUnique, isAssignmentTarget, PrefixUnaryExpression, PostfixUnaryExpression, isBlock, isExpressionNode, isPropertyAccessExpression, getAssignmentTargetKind, AssignmentKind, isInCompoundLikeAssignment, UnionType, TypeId, UnionReduction, getRootDeclaration, getImmediatelyInvokedFunctionExpression, isSpreadAssignment, isParameter, VariableDeclaration, isFunctionLikeDeclaration, isTypeNode, forEachChild, tryCast, canHaveFlowNode, ElementAccessExpression, RelationComparisonResult, LiteralType, FreshableType, getObjectFlags, DiagnosticMessageChain, setNodeFlags, isCallExpression, LazyNodeCheckFlags, getSourceFileOfNode, canIncludeBindAndCheckDiagnostics, forEachChildRecursively, isDeclarationName, EntityName, JSDocMemberName, canHaveSymbol, isLiteralTypeNode, isElementAccessExpression, isIndexedAccessTypeNode, TypeNode, canHaveJSDoc, FlowFlags, FlowArrayMutation, FlowAssignment, FlowCall, FlowCondition, FlowLabel, FlowReduceLabel, FlowSwitchClause, SwitchStatement, createFileDiagnostic, createDiagnosticForFileFromMessageChain, createDiagnosticForNodeFromMessageChain, VariableStatement, HasModifiers, VariableDeclarationList, Block, isFunctionOrModuleBlock, CaseBlock, ForEachStatement, IndexSignatureDeclaration, Path, HasLocals, BindingPattern, idText, isForEachStatement, getNameOfDeclaration, isArrayBindingPattern, first, BindingName, cast, containsParseError, FunctionDeclaration, getFunctionFlags, getEffectiveReturnTypeNode, FunctionFlags, nodeIsPresent, JSDocSignature, isJSDocSignature, getJSDocRoot, LiteralTypeNode, TypeNodeSyntaxKind, isStatement, UnionOrIntersectionType, getContainingFunction, hasSyntacticModifier, isBindingPattern, sameMap, flatMap, getCheckFlags, singleElementArray, getDeclarationModifierFlagsFromSymbol, Ternary, append, find, isNumericLiteralName, StringLiteralType, contains, isTransientSymbol, addRange, filter, IndexType, getParseTreeNode, isRightSideOfQualifiedNameOrPropertyAccess, isWriteAccess, isRightSideOfAccessExpression, hasEffectiveModifier, getCombinedModifierFlags, isEntityName, PropertyAccessEntityNameExpression, isRightSideOfQualifiedNameOrPropertyAccessOrJSDocMemberName, QualifiedName, getHostSignatureFromJSDoc, or, EntityNameOrEntityNameExpression, isInJSFile, getFirstIdentifier, isQualifiedName, entityNameToString, isCallChain, isEntityNameExpression, isLineBreak, skipTrivia, DiagnosticRelatedInformation, IntLiteralType, FloatLiteralType, createTextWriter, chainDiagnosticMessages, getErrorSpanForNode, ShorthandPropertyAssignment, NodeBuilderFlags, SymbolTracker, TrackedSymbol, ReverseMappedSymbol, TypeMapper, ModuleSpecifierResolutionHost, Program, maybeBind, setEmitFlags, createNodeFactory, NodeFactoryFlags, BaseNodeFactory, Mutable, createBaseNodeFactory, firstDefined, isComputedPropertyName, isIdentifierText, escapeString, getEmitScriptTarget, factory, EmitFlags, isSingleOrDoubleQuote, canUsePropertyAccess, stripQuotes, DoWhileStatement, BinaryOperatorToken, isLogicalOrCoalescingBinaryOperator, isLogicalOrCoalescingBinaryExpression, isIfStatement, skipParentheses, Statement, PunctuationSyntaxKind, tokenToString, FreshableIntrinsicType, isLiteralExpressionOfObject, getAssignmentDeclarationKind, AssignmentDeclarationKind, ConditionalExpression, isAssignmentOperator, isJSDocTypedefTag, isIntLiteral, skipOuterExpressions, OuterExpressionKinds, isExpression, ObjectLiteralExpression, ArrayLiteralExpression, FunctionExpression, InlineClosureExpression, ObjectLiteralElementLike, hasContextSensitiveParameters, forEachReturnStatement, compareDiagnostics, Comparison, createBinaryExpressionTrampoline, IntLiteral, FloatLiteral, isShorthandPropertyAssignment, isPropertyAccessOrQualifiedName, isPrivateIdentifier, WideningContext, StringLiteral, ReturnStatement, ExpressionStatement, IfStatement, NewExpression, getMembersOfDeclaration, AccessExpression, isThisInitializedDeclaration, setValueDeclaration, comparePaths, getOrUpdate, usingSingleLineStringWriter, createPrinterWithRemoveCommentsNeverAsciiEscape, createPrinterWithRemoveComments, EmitHint, getEffectiveModifierFlags, getEffectiveTypeAnnotationNode, getAssignmentDeclarationPropertyAccessKind, isNamedDeclaration, map, PropertyName, isFloatLiteral, getPropertyNameForPropertyNameNode, isPartOfParameterDeclaration, hasOnlyExpressionInitializer, not, getEffectiveInitializer, isObjectLiteralExpression, isVariableLike, getSelectedEffectiveModifierFlags, AliasDeclarationNode, isBindingElementOfBareOrAccessedRequire, TypeReference, isFunctionExpressionOrInlineClosure, ContextFlags, indexOfNode, InferenceContext, isNodeDescendantOf, ObjectFlagsType, GenericType, ReverseMappedType, AnonymousType, DeferredTypeReference, InstantiationExpressionType, SingleSignatureType, MappedTypeNode, TypeParameterDeclaration, appendIfUnique, TypeMapKind, isPartOfTypeNode, TypeReferenceNode, MappedType, ArrayTypeNode, isParenthesizedTypeNode, isTypeAlias, IndexFlags, InferenceInfo, binarySearch, compareValues, hasInitializer, lastOrUndefined, HasExpressionInitializer, getContainingFunctionOrClassStaticBlock, getSpanOfTokenAtPosition, isJSDocParameterTag, hasRestParameter, isStringLiteral, walkUpBindingElementsAndPatterns, BindableObjectDefinePropertyCall, copyEntries, InterfaceType, isPropertyAssignment, DiagnosticAndArguments, FreshObjectLiteralType, BaseType, firstOrUndefined, SubstitutionType } from "./_namespaces/lpc";

let nextSymbolId = 1;
let nextNodeId = 1;
let nextMergeId = 1;
let nextFlowId = 1;

const enum ReferenceHint {
    Unspecified,
    Identifier,
    Property,
    ExportAssignment,
    Jsx,
    AsyncFunction,
    ExportImportEquals,
    ExportSpecifier,
    Decorator,
}

type TypeSystemEntity = Node | Symbol | Type | Signature;

const enum TypeSystemPropertyName {
    Type,
    ResolvedBaseConstructorType,
    DeclaredType,
    ResolvedReturnType,
    ImmediateBaseConstraint,
    ResolvedTypeArguments,
    ResolvedBaseTypes,
    WriteType,
    ParameterInitializerContainsUndefined,
}

const enum IterationUse {
    AllowsSyncIterablesFlag = 1 << 0,
    AllowsAsyncIterablesFlag = 1 << 1,
    AllowsStringInputFlag = 1 << 2,
    ForOfFlag = 1 << 3,
    YieldStarFlag = 1 << 4,
    SpreadFlag = 1 << 5,
    DestructuringFlag = 1 << 6,
    PossiblyOutOfBounds = 1 << 7,

    // Spread, Destructuring, Array element assignment
    Element = AllowsSyncIterablesFlag,
    Spread = AllowsSyncIterablesFlag | SpreadFlag,
    Destructuring = AllowsSyncIterablesFlag | DestructuringFlag,

    ForOf = AllowsSyncIterablesFlag | AllowsStringInputFlag | ForOfFlag,
    ForAwaitOf = AllowsSyncIterablesFlag | AllowsAsyncIterablesFlag | AllowsStringInputFlag | ForOfFlag,

    YieldStar = AllowsSyncIterablesFlag | YieldStarFlag,
    AsyncYieldStar = AllowsSyncIterablesFlag | AllowsAsyncIterablesFlag | YieldStarFlag,

    GeneratorReturnType = AllowsSyncIterablesFlag,
    AsyncGeneratorReturnType = AllowsAsyncIterablesFlag,
}

/** @internal */
export function createTypeChecker(host: TypeCheckerHost): TypeChecker {
    // Why var? It avoids TDZ checks in the runtime which can be costly.
    // See: https://github.com/microsoft/TypeScript/issues/52924
    /* eslint-disable no-var */
    var deferredDiagnosticsCallbacks: (() => void)[] = [];

    var addLazyDiagnostic = (arg: () => void) => {
        deferredDiagnosticsCallbacks.push(arg);
    };

    // Cancellation that controls whether or not we can cancel in the middle of type checking.
    // In general cancelling is *not* safe for the type checker.  We might be in the middle of
    // computing something, and we will leave our internals in an inconsistent state.  Callers
    // who set the cancellation token should catch if a cancellation exception occurs, and
    // should throw away and create a new TypeChecker.
    //
    // Currently we only support setting the cancellation token when getting diagnostics.  This
    // is because diagnostics can be quite expensive, and we want to allow hosts to bail out if
    // they no longer need the information (for example, if the user started editing again).
    var cancellationToken: CancellationToken | undefined;

    var scanner: Scanner | undefined;

    var Symbol = objectAllocator.getSymbolConstructor();
    var Type = objectAllocator.getTypeConstructor();
    var Signature = objectAllocator.getSignatureConstructor();

    var typeCount = 0;
    var symbolCount = 0;
    var totalInstantiationCount = 0;
    var instantiationCount = 0;
    var instantiationDepth = 0;
    var inlineLevel = 0;
    var currentNode: Node | undefined;
    var varianceTypeParameter: TypeParameter | undefined;
    var isInferencePartiallyBlocked = false;
    var strictNullChecks = false; 
    var strictPropertyInitialization  = false;
    var outofbandVarianceMarkerHandler: ((onlyUnreliable: boolean) => void) | undefined;

    var emptySymbols = createSymbolTable();
    
    
    var resolutionTargets: TypeSystemEntity[] = [];
    var resolutionResults: boolean[] = [];
    var resolutionPropertyNames: TypeSystemPropertyName[] = [];
    var resolutionStart = 0;

    var compilerOptions = host.getCompilerOptions();        
    var languageVersion = getEmitScriptTarget(compilerOptions);
    
    var checkBinaryExpression = createCheckBinaryExpression();
    var nodeBuilder = createNodeBuilder();
    var noImplicitAny = false;

    interface DuplicateInfoForSymbol {
        readonly firstFileLocations: Declaration[];
        readonly secondFileLocations: Declaration[];
        readonly isBlockScoped: boolean;
    }
    interface DuplicateInfoForFiles {
        readonly firstFile: SourceFile;
        readonly secondFile: SourceFile;
        /** Key is symbol name. */
        readonly conflictingSymbols: Map<string, DuplicateInfoForSymbol>;
    }
    /** Key is "/path/to/a.ts|/path/to/b.ts". */
    var amalgamatedDuplicates: Map<string, DuplicateInfoForFiles> | undefined;
    var reverseMappedCache = new Map<string, Type | undefined>();
    var ambientModulesCache: Symbol[] | undefined;
    
    var globals = createSymbolTable();
    var undefinedSymbol = createSymbol(SymbolFlags.Property, "undefined" as string);
    undefinedSymbol.declarations = [];

    var globalThisSymbol = createSymbol(SymbolFlags.Module, "globalThis" as string, CheckFlags.Readonly);
    globalThisSymbol.exports = globals;
    globalThisSymbol.declarations = [];
    globals.set(globalThisSymbol.name, globalThisSymbol);

    var argumentsSymbol = createSymbol(SymbolFlags.Property, "arguments" as string);
    var requireSymbol = createSymbol(SymbolFlags.Property, "require" as string);    

    /** This will be set during calls to `getResolvedSignature` where services determines an apparent number of arguments greater than what is actually provided. */
    var apparentArgumentCount: number | undefined;

    var lastGetCombinedNodeFlagsNode: Node | undefined;
    var lastGetCombinedNodeFlagsResult = NodeFlags.None;
    var lastGetCombinedModifierFlagsNode: Declaration | undefined;
    var lastGetCombinedModifierFlagsResult = ModifierFlags.None;

    var diagnostics = createDiagnosticCollection();
    var suggestionDiagnostics = createDiagnosticCollection();

    var allPotentiallyUnusedIdentifiers = new Map<Path, PotentiallyUnusedIdentifier[]>(); // key is file name
    
    var suggestionCount = 0;
    var maximumSuggestionCount = 10;
    var mergedSymbols: Symbol[] = [];
    var symbolLinks: SymbolLinks[] = [];
    var nodeLinks: NodeLinks[] = [];
    var flowLoopCaches: Map<string, Type>[] = [];
    var flowLoopNodes: FlowNode[] = [];
    var flowLoopKeys: string[] = [];
    var flowLoopTypes: Type[][] = [];
    var sharedFlowNodes: FlowNode[] = [];
    var sharedFlowTypes: FlowType[] = [];
    var flowNodeReachable: (boolean | undefined)[] = [];
    var flowNodePostSuper: (boolean | undefined)[] = [];
    var potentialThisCollisions: Node[] = [];
    var potentialNewTargetCollisions: Node[] = [];
    var potentialWeakMapSetCollisions: Node[] = [];
    var potentialReflectCollisions: Node[] = [];
    //var potentialUnusedRenamedBindingElementsInTypes: BindingElement[] = [];
    var awaitedTypeStack: number[] = [];
    var reverseMappedSourceStack: Type[] = [];
    var reverseMappedTargetStack: Type[] = [];
    //var reverseExpandingFlags = ExpandingFlags.None;
    var cachedTypes = new Map<string, Type>();
    var undefinedProperties: SymbolTable = new Map();
    
    var flowLoopStart = 0;
    var flowLoopCount = 0;
    var sharedFlowCount = 0;
    var flowAnalysisDisabled = false;
    var flowInvocationCount = 0;
    var lastFlowNode: FlowNode | undefined;
    var lastFlowNodeReachable: boolean;
    var flowTypeCache: Type[] | undefined;
    
    var contextualTypeNodes: Node[] = [];
    var contextualTypes: (Type | undefined)[] = [];
    var contextualIsCache: boolean[] = [];
    var contextualTypeCount = 0;
    var contextualBindingPatterns: BindingPattern[] = [];

    var inferenceContextNodes: Node[] = [];
    var inferenceContexts: (InferenceContext | undefined)[] = [];
    var inferenceContextCount = 0;

    var seenIntrinsicNames = new Set<string>();
   
    var unionOfUnionTypes = new Map<string, Type>();

    var resolveName = createNameResolver({
        compilerOptions,
        requireSymbol,
        argumentsSymbol,
        globals,
        getSymbolOfDeclaration,
        error,
        getRequiresScopeChangeCache,
        setRequiresScopeChangeCache,
        lookup: getSymbol,
        onPropertyWithInvalidInitializer: checkAndReportErrorForInvalidInitializer,
        onFailedToResolveSymbol,
        onSuccessfullyResolvedSymbol,
    });

    var resolveNameForSymbolSuggestion = createNameResolver({
        compilerOptions,
        requireSymbol,
        argumentsSymbol,
        globals,
        getSymbolOfDeclaration,
        error,
        getRequiresScopeChangeCache,
        setRequiresScopeChangeCache,
        lookup: getSuggestionForSymbolNameLookup,
    });
    
    const checker: TypeChecker = {
        getNodeCount: () => reduceLeft(host.getSourceFiles(), (n, s) => n + s.nodeCount, 0),
        getIdentifierCount: () => reduceLeft(host.getSourceFiles(), (n, s) => n + s.identifierCount, 0),
        getSymbolCount: () => reduceLeft(host.getSourceFiles(), (n, s) => n + s.symbolCount, symbolCount),
        getTypeCount: () => typeCount,
        getInstantiationCount: () => totalInstantiationCount,
        signatureToString,
        getDiagnostics,
        getAliasedSymbol: resolveAlias,
        getSymbolAtLocation,
        symbolToString,
        getRootSymbols,
        getTypeOfSymbolAtLocation: (symbol, locationIn) => {
            const location = getParseTreeNode(locationIn);
            return location ? getTypeOfSymbolAtLocation(symbol, location) : errorType;
        },
        isDeclarationVisible,
        getResolvedSignature: (node, candidatesOutArray, argumentCount) => getResolvedSignatureWorker(node, candidatesOutArray, argumentCount, CheckMode.Normal),
        getShorthandAssignmentValueSymbol: nodeIn => {
            const node = getParseTreeNode(nodeIn);
            return node ? getShorthandAssignmentValueSymbol(node) : undefined;
        },
    };

    var anyType = createIntrinsicType(TypeFlags.Any, "any");
    var autoType = createIntrinsicType(TypeFlags.Any, "any", ObjectFlags.NonInferrableType, "auto");
    var wildcardType = createIntrinsicType(TypeFlags.Any, "any", /*objectFlags*/ undefined, "wildcard");
    var errorType = createIntrinsicType(TypeFlags.Any, "error");
    var silentNeverType = createIntrinsicType(TypeFlags.Never, "never", ObjectFlags.NonInferrableType, "silent");
    var stringType = createIntrinsicType(TypeFlags.String, "string");
    var intType = createIntrinsicType(TypeFlags.Number, "int");
    var floatType = createIntrinsicType(TypeFlags.Number, "float");
    var neverType = createIntrinsicType(TypeFlags.Never, "never");
    var unknownType = createIntrinsicType(TypeFlags.Unknown, "unknown");
    var implicitNeverType = createIntrinsicType(TypeFlags.Never, "never", /*objectFlags*/ undefined, "implicit");
    var undefinedType = createIntrinsicType(TypeFlags.Undefined, "undefined");
    var undefinedWideningType = strictNullChecks ? undefinedType : createIntrinsicType(TypeFlags.Undefined, "undefined", ObjectFlags.ContainsWideningType, "widening");
    var nonPrimitiveType = createIntrinsicType(TypeFlags.NonPrimitive, "object");
    var voidType = createIntrinsicType(TypeFlags.Void, "void");
    var stringNumberSymbolType = getUnionType([stringType, intType, floatType]); // esSymbolType
    var numberType = getUnionType([intType, floatType]);
    var numberLiteralTypes = new Map<number, IntLiteralType>();
    var stringLiteralTypes = new Map<string, StringLiteralType>();
    var undefinedOrMissingType = /*exactOptionalPropertyTypes ? missingType :*/ undefinedType;

    var falseType = createIntrinsicType(TypeFlags.BooleanLiteral, "false", /*objectFlags*/ undefined, "fresh") as FreshableIntrinsicType;
    var regularFalseType = createIntrinsicType(TypeFlags.BooleanLiteral, "false") as FreshableIntrinsicType;
    var trueType = createIntrinsicType(TypeFlags.BooleanLiteral, "true", /*objectFlags*/ undefined, "fresh") as FreshableIntrinsicType;
    var regularTrueType = createIntrinsicType(TypeFlags.BooleanLiteral, "true") as FreshableIntrinsicType;
    trueType.regularType = regularTrueType;
    trueType.freshType = trueType;
    regularTrueType.regularType = regularTrueType;
    regularTrueType.freshType = trueType;
    falseType.regularType = regularFalseType;
    falseType.freshType = falseType;
    regularFalseType.regularType = regularFalseType;
    regularFalseType.freshType = falseType;
    var booleanType = getUnionType([regularFalseType, regularTrueType]);

    var emptyStringType = getStringLiteralType("");
    var zeroType = getNumberLiteralType(0);

    var uniqueLiteralType = createIntrinsicType(TypeFlags.Never, "never", /*objectFlags*/ undefined, "unique literal"); // `uniqueLiteralType` is a special `never` flagged by union reduction to behave as a literal
    var unionTypes = new Map<string, UnionType>();

    var globalObjectType: ObjectType;
    var globalFunctionType: ObjectType;
    var globalArrayType: GenericType;
    var globalReadonlyArrayType: GenericType;
    var globalCallableFunctionType: ObjectType;
    var globalNewableFunctionType: ObjectType;
    var globalStringType: ObjectType;
    var globalIntType: ObjectType;
    var globalFloatType: ObjectType;
    var autoArrayType: Type;
    var anyArrayType: Type;
    var anyReadonlyArrayType: Type;

    var emptyObjectType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);

    var anySignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, anyType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);
    var unknownSignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, errorType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);
    var resolvingSignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, anyType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);
    var silentNeverSignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, silentNeverType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);
    
    var unknownSymbol = createSymbol(SymbolFlags.Property, "unknown" as string);
    var resolvingSymbol = createSymbol(0, InternalSymbolName.Resolving);
    var anyFunctionType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);


    var subtypeRelation = new Map<string, RelationComparisonResult>();
    var strictSubtypeRelation = new Map<string, RelationComparisonResult>();
    var assignableRelation = new Map<string, RelationComparisonResult>();
    var comparableRelation = new Map<string, RelationComparisonResult>();
    var identityRelation = new Map<string, RelationComparisonResult>();

    initializeTypeChecker();

    return checker;

    function initializeTypeChecker() {
        // Bind all source files and propagate errors
        for (const file of host.getSourceFiles()) {
            bindSourceFile(file, compilerOptions);
        }

        for (const file of host.getSourceFiles()) {
            mergeSymbolTable(globals, file.locals!);
        }

        // TODO
        
        // addUndefinedToGlobalsOrErrorOnRedeclaration();

        // getSymbolLinks(undefinedSymbol).type = undefinedWideningType;
        // getSymbolLinks(argumentsSymbol).type = getGlobalType("IArguments" as string, /*arity*/ 0, /*reportErrors*/ true);
        getSymbolLinks(unknownSymbol).type = errorType;
        getSymbolLinks(globalThisSymbol).type = createObjectType(ObjectFlags.Anonymous, globalThisSymbol);

        // // Initialize special types
        // globalArrayType = getGlobalType("Array" as string, /*arity*/ 1, /*reportErrors*/ true);
        // globalObjectType = getGlobalType("Object" as string, /*arity*/ 0, /*reportErrors*/ true);
        // globalFunctionType = getGlobalType("Function" as string, /*arity*/ 0, /*reportErrors*/ true);
        // globalCallableFunctionType = strictBindCallApply && getGlobalType("CallableFunction" as string, /*arity*/ 0, /*reportErrors*/ true) || globalFunctionType;
        // globalNewableFunctionType = strictBindCallApply && getGlobalType("NewableFunction" as string, /*arity*/ 0, /*reportErrors*/ true) || globalFunctionType;
        // globalStringType = getGlobalType("String" as string, /*arity*/ 0, /*reportErrors*/ true);
        // globalNumberType = getGlobalType("Number" as string, /*arity*/ 0, /*reportErrors*/ true);
        // globalBooleanType = getGlobalType("Boolean" as string, /*arity*/ 0, /*reportErrors*/ true);
        // globalRegExpType = getGlobalType("RegExp" as string, /*arity*/ 0, /*reportErrors*/ true);
        // anyArrayType = createArrayType(anyType);

        // autoArrayType = createArrayType(autoType);
        // if (autoArrayType === emptyObjectType) {
        //     // autoArrayType is used as a marker, so even if global Array type is not defined, it needs to be a unique type
        //     autoArrayType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
        // }

        // globalReadonlyArrayType = getGlobalTypeOrUndefined("ReadonlyArray" as string, /*arity*/ 1) as GenericType || globalArrayType;
        // anyReadonlyArrayType = globalReadonlyArrayType ? createTypeFromGenericGlobalType(globalReadonlyArrayType, [anyType]) : anyArrayType;
        // globalThisType = getGlobalTypeOrUndefined("ThisType" as string, /*arity*/ 1) as GenericType;
    }

    function mergeSymbolTable(target: SymbolTable, source: SymbolTable, unidirectional = false) {
        source.forEach((sourceSymbol, id) => {
            const targetSymbol = target.get(id);
            target.set(id, targetSymbol ? mergeSymbol(targetSymbol, sourceSymbol, unidirectional) : getMergedSymbol(sourceSymbol));
        });
    }

    function getExcludedSymbolFlags(flags: SymbolFlags): SymbolFlags {
        let result: SymbolFlags = 0;
        if (flags & SymbolFlags.BlockScopedVariable) result |= SymbolFlags.BlockScopedVariableExcludes;
        if (flags & SymbolFlags.FunctionScopedVariable) result |= SymbolFlags.FunctionScopedVariableExcludes;
        if (flags & SymbolFlags.Property) result |= SymbolFlags.PropertyExcludes;
        if (flags & SymbolFlags.EnumMember) result |= SymbolFlags.EnumMemberExcludes;
        if (flags & SymbolFlags.Function) result |= SymbolFlags.FunctionExcludes;
        if (flags & SymbolFlags.Class) result |= SymbolFlags.ClassExcludes;
        if (flags & SymbolFlags.Interface) result |= SymbolFlags.InterfaceExcludes;
        if (flags & SymbolFlags.RegularEnum) result |= SymbolFlags.RegularEnumExcludes;
        if (flags & SymbolFlags.ConstEnum) result |= SymbolFlags.ConstEnumExcludes;
        if (flags & SymbolFlags.ValueModule) result |= SymbolFlags.ValueModuleExcludes;
        if (flags & SymbolFlags.Method) result |= SymbolFlags.MethodExcludes;
        if (flags & SymbolFlags.GetAccessor) result |= SymbolFlags.GetAccessorExcludes;
        if (flags & SymbolFlags.SetAccessor) result |= SymbolFlags.SetAccessorExcludes;
        if (flags & SymbolFlags.TypeParameter) result |= SymbolFlags.TypeParameterExcludes;
        if (flags & SymbolFlags.TypeAlias) result |= SymbolFlags.TypeAliasExcludes;
        if (flags & SymbolFlags.Alias) result |= SymbolFlags.AliasExcludes;
        return result;
    }

    function recordMergedSymbol(target: Symbol, source: Symbol) {
        if (!source.mergeId) {
            source.mergeId = nextMergeId;
            nextMergeId++;
        }
        mergedSymbols[source.mergeId] = target;
    }
    
    function cloneSymbol(symbol: Symbol): TransientSymbol {
        const result = createSymbol(symbol.flags, symbol.name);
        result.declarations = symbol.declarations ? symbol.declarations.slice() : [];
        result.parent = symbol.parent;
        if (symbol.valueDeclaration) result.valueDeclaration = symbol.valueDeclaration;
        if (symbol.constEnumOnlyModule) result.constEnumOnlyModule = true;
        if (symbol.members) result.members = new Map(symbol.members);
        if (symbol.exports) result.exports = new Map(symbol.exports);
        recordMergedSymbol(result, symbol);
        return result;
    }

    /**
     * Note: if target is transient, then it is mutable, and mergeSymbol with both mutate and return it.
     * If target is not transient, mergeSymbol will produce a transient clone, mutate that and return it.
     */
    function mergeSymbol(target: Symbol, source: Symbol, unidirectional = false): Symbol {
        if (
            !(target.flags & getExcludedSymbolFlags(source.flags)) ||
            (source.flags | target.flags) & SymbolFlags.Assignment
        ) {
            if (source === target) {
                // This can happen when an export assigned namespace exports something also erroneously exported at the top level
                // See `declarationFileNoCrashOnExtraExportModifier` for an example
                return target;
            }
            if (!(target.flags & SymbolFlags.Transient)) {
                const resolvedTarget = resolveSymbol(target);
                if (resolvedTarget === unknownSymbol) {
                    return source;
                }
                if (
                    !(resolvedTarget.flags & getExcludedSymbolFlags(source.flags)) ||
                    (source.flags | resolvedTarget.flags) & SymbolFlags.Assignment
                ) {
                    target = cloneSymbol(resolvedTarget);
                }
                else {
                    reportMergeSymbolError(target, source);
                    return source;
                }
            }
            // Javascript static-property-assignment declarations always merge, even though they are also values
            if (source.flags & SymbolFlags.ValueModule && target.flags & SymbolFlags.ValueModule && target.constEnumOnlyModule && !source.constEnumOnlyModule) {
                // reset flag when merging instantiated module into value module that has only const enums
                target.constEnumOnlyModule = false;
            }
            target.flags |= source.flags;
            if (source.valueDeclaration) {
                setValueDeclaration(target, source.valueDeclaration);
            }
            addRange(target.declarations, source.declarations);
            if (source.members) {
                if (!target.members) target.members = createSymbolTable();
                mergeSymbolTable(target.members, source.members, unidirectional);
            }
            if (source.exports) {
                if (!target.exports) target.exports = createSymbolTable();
                mergeSymbolTable(target.exports, source.exports, unidirectional);
            }
            if (!unidirectional) {
                recordMergedSymbol(target, source);
            }
        }
        // else if (target.flags & SymbolFlags.NamespaceModule) {
        //     // Do not report an error when merging `var globalThis` with the built-in `globalThis`,
        //     // as we will already report a "Declaration name conflicts..." error, and this error
        //     // won't make much sense.
        //     if (target !== globalThisSymbol) {
        //         error(
        //             source.declarations && getNameOfDeclaration(source.declarations[0]),
        //             Diagnostics.Cannot_augment_module_0_with_value_exports_because_it_resolves_to_a_non_module_entity,
        //             symbolToString(target),
        //         );
        //     }
        // }
        else {
            reportMergeSymbolError(target, source);
        }
        return target;

        function reportMergeSymbolError(target: Symbol, source: Symbol) {
            const isEitherEnum = !!(target.flags & SymbolFlags.Enum || source.flags & SymbolFlags.Enum);
            const isEitherBlockScoped = !!(target.flags & SymbolFlags.BlockScopedVariable || source.flags & SymbolFlags.BlockScopedVariable);
            const message = //isEitherEnum ? Diagnostics.Enum_declarations_can_only_merge_with_namespace_or_other_enum_declarations
                isEitherBlockScoped ? Diagnostics.Cannot_redeclare_block_scoped_variable_0 : Diagnostics.Duplicate_identifier_0;
            const sourceSymbolFile = source.declarations && getSourceFileOfNode(source.declarations[0]);
            const targetSymbolFile = target.declarations && getSourceFileOfNode(target.declarations[0]);

            const isSourcePlainJs = false;//isPlainJsFile(sourceSymbolFile, compilerOptions.checkJs);
            const isTargetPlainJs = false;//isPlainJsFile(targetSymbolFile, compilerOptions.checkJs);
            const symbolName = symbolToString(source);

            // Collect top-level duplicate identifier errors into one mapping, so we can then merge their diagnostics if there are a bunch
            if (sourceSymbolFile && targetSymbolFile && amalgamatedDuplicates && !isEitherEnum && sourceSymbolFile !== targetSymbolFile) {
                const firstFile = comparePaths(sourceSymbolFile.path, targetSymbolFile.path) === Comparison.LessThan ? sourceSymbolFile : targetSymbolFile;
                const secondFile = firstFile === sourceSymbolFile ? targetSymbolFile : sourceSymbolFile;
                const filesDuplicates = getOrUpdate(amalgamatedDuplicates, `${firstFile.path}|${secondFile.path}`, (): DuplicateInfoForFiles => ({ firstFile, secondFile, conflictingSymbols: new Map() }));
                const conflictingSymbolInfo = getOrUpdate(filesDuplicates.conflictingSymbols, symbolName, (): DuplicateInfoForSymbol => ({ isBlockScoped: isEitherBlockScoped, firstFileLocations: [], secondFileLocations: [] }));
                if (!isSourcePlainJs) addDuplicateLocations(conflictingSymbolInfo.firstFileLocations, source);
                if (!isTargetPlainJs) addDuplicateLocations(conflictingSymbolInfo.secondFileLocations, target);
            }
            else {
                if (!isSourcePlainJs) addDuplicateDeclarationErrorsForSymbols(source, message, symbolName, target);
                if (!isTargetPlainJs) addDuplicateDeclarationErrorsForSymbols(target, message, symbolName, source);
            }
        }

        function addDuplicateLocations(locs: Declaration[], symbol: Symbol): void {
            if (symbol.declarations) {
                for (const decl of symbol.declarations) {
                    pushIfUnique(locs, decl);
                }
            }
        }
    }

    function createIntrinsicType(kind: TypeFlags, intrinsicName: string, objectFlags = ObjectFlags.None, debugIntrinsicName?: string): IntrinsicType {
        checkIntrinsicName(intrinsicName, debugIntrinsicName);
        const type = createType(kind) as IntrinsicType;
        type.intrinsicName = intrinsicName;
        type.debugIntrinsicName = debugIntrinsicName;
        type.objectFlags = objectFlags | ObjectFlags.CouldContainTypeVariablesComputed | ObjectFlags.IsGenericTypeComputed | ObjectFlags.IsUnknownLikeUnionComputed | ObjectFlags.IsNeverIntersectionComputed;
        return type;
    }

    function createType(flags: TypeFlags): Type {
        const result = new Type(checker, flags);
        typeCount++;
        result.id = typeCount;
        tracing?.recordType(result);
        return result;
    }
       

    function checkIntrinsicName(name: string, debug: string | undefined) {
        const key = `${name},${debug ?? ""}`;
        if (seenIntrinsicNames.has(key)) {
            Debug.fail(`Duplicate intrinsic type name ${name}${debug ? ` (${debug})` : ""}; you may need to pass a name to createIntrinsicType.`);
        }
        seenIntrinsicNames.add(key);
    }

     
    function getMergedSymbol(symbol: Symbol): Symbol;
    function getMergedSymbol(symbol: Symbol | undefined): Symbol | undefined;
    function getMergedSymbol(symbol: Symbol | undefined): Symbol | undefined {
        let merged: Symbol;
        return symbol && symbol.mergeId && (merged = mergedSymbols[symbol.mergeId]) ? merged : symbol;
    }

    function getSymbolOfDeclaration(node: Declaration): Symbol {
        return getMergedSymbol(node.symbol && getLateBoundSymbol(node.symbol));
    }

    /**
     * If a symbol is the dynamic name of the member of an object type, get the late-bound
     * symbol of the member.
     *
     * For a description of late-binding, see `lateBindMember`.
     */
    function getLateBoundSymbol(symbol: Symbol): Symbol {
        // TODO: no late binding in LPC
        // if (symbol.flags & SymbolFlags.ClassMember && symbol.name === InternalSymbolName.Computed) {
        //     const links = getSymbolLinks(symbol);
        //     if (!links.lateSymbol && some(symbol.declarations, hasLateBindableName)) {
        //         // force late binding of members/exports. This will set the late-bound symbol
        //         const parent = getMergedSymbol(symbol.parent)!;
        //         if (some(symbol.declarations, hasStaticModifier)) {
        //             getExportsOfSymbol(parent);
        //         }
        //         else {
        //             getMembersOfSymbol(parent);
        //         }
        //     }
        //     return links.lateSymbol || (links.lateSymbol = symbol);
        // }
        return symbol;
    }

    function getSymbolLinks(symbol: Symbol): SymbolLinks {
        if (symbol.flags & SymbolFlags.Transient) return (symbol as TransientSymbol).links;
        const id = getSymbolId(symbol);
        return symbolLinks[id] ??= new SymbolLinks();
    }
    
    function createError(location: Node | undefined, message: DiagnosticMessage, ...args: DiagnosticArguments): Diagnostic {
        return location
            ? createDiagnosticForNode(location, message, ...args)
            : createCompilerDiagnostic(message, ...args);
    }
    
    function error(location: Node | undefined, message: DiagnosticMessage, ...args: DiagnosticArguments): Diagnostic {
        const diagnostic = createError(location, message, ...args);
        diagnostics.add(diagnostic);
        return diagnostic;
    }

    function getRootSymbols(symbol: Symbol): readonly Symbol[] {
        const roots = getImmediateRootSymbols(symbol);
        return roots ? flatMap(roots, getRootSymbols) : [symbol];
    }

    function compareTypesAssignable(source: Type, target: Type): Ternary {
        return isTypeRelatedTo(source, target, assignableRelation) ? Ternary.True : Ternary.False;
    }

    function getBestMatchingType(source: Type, target: UnionOrIntersectionType, isRelatedTo = compareTypesAssignable) {
        console.warn("TODO - getBestMatchingType");
        return anyType;
        // return findMatchingDiscriminantType(source, target, isRelatedTo) ||
        //     findMatchingTypeReferenceOrTypeAliasReference(source, target) ||
        //     findBestTypeForObjectLiteral(source, target) ||
        //     findBestTypeForInvokable(source, target) ||
        //     findMostOverlappyType(source, target);
    }

    function getImmediateRootSymbols(symbol: Symbol): readonly Symbol[] | undefined {
        if (getCheckFlags(symbol) & CheckFlags.Synthetic) {
            return mapDefined(getSymbolLinks(symbol).containingType!.types, type => getPropertyOfType(type, symbol.name));
        }
        else if (symbol.flags & SymbolFlags.Transient) {
            const { links: { leftSpread, rightSpread, syntheticOrigin } } = symbol as TransientSymbol;
            return leftSpread ? [leftSpread, rightSpread!]
                : syntheticOrigin ? [syntheticOrigin]
                : singleElementArray(tryGetTarget(symbol));
        }
        return undefined;
    }

    function tryGetTarget(symbol: Symbol): Symbol | undefined {
        let target: Symbol | undefined;
        let next: Symbol | undefined = symbol;
        while (next = getSymbolLinks(next).target) {
            target = next;
        }
        return target;
    }

    /**
     * Return the symbol for the property with the given name in the given type. Creates synthetic union properties when
     * necessary, maps primitive types and type parameters are to their apparent types, and augments with properties from
     * Object and Function as appropriate.
     *
     * @param type a type to look up property from
     * @param name a name of property to look up in a given type
     */
    function getPropertyOfType(type: Type, name: string, skipObjectFunctionPropertyAugment?: boolean, includeTypeOnlyMembers?: boolean): Symbol | undefined {
        type = getReducedApparentType(type);
        if (type.flags & TypeFlags.Object) {
            const resolved = resolveStructuredTypeMembers(type as ObjectType);
            const symbol = resolved.members.get(name);
            // if (symbol && !includeTypeOnlyMembers && type.symbol?.flags & SymbolFlags.ValueModule && getSymbolLinks(type.symbol).typeOnlyExportStarMap?.has(name)) {
            //     // If this is the type of a module, `resolved.members.get(name)` might have effectively skipped over
            //     // an `export type * from './foo'`, leaving `symbolIsValue` unable to see that the symbol is being
            //     // viewed through a type-only export.
            //     return undefined;
            // }
            if (symbol && symbolIsValue(symbol, includeTypeOnlyMembers)) {
                return symbol;
            }
            if (skipObjectFunctionPropertyAugment) return undefined;
            const functionType = resolved === anyFunctionType ? globalFunctionType :
                resolved.callSignatures.length ? globalCallableFunctionType :
                resolved.constructSignatures.length ? globalNewableFunctionType :
                undefined;
            if (functionType) {
                const symbol = getPropertyOfObjectType(functionType, name);
                if (symbol) {
                    return symbol;
                }
            }
            return getPropertyOfObjectType(globalObjectType, name);
        }
        if (type.flags & TypeFlags.Intersection) {
            const prop = getPropertyOfUnionOrIntersectionType(type as UnionOrIntersectionType, name, /*skipObjectFunctionPropertyAugment*/ true);
            if (prop) {
                return prop;
            }
            if (!skipObjectFunctionPropertyAugment) {
                return getPropertyOfUnionOrIntersectionType(type as UnionOrIntersectionType, name, skipObjectFunctionPropertyAugment);
            }
            return undefined;
        }
        if (type.flags & TypeFlags.Union) {
            return getPropertyOfUnionOrIntersectionType(type as UnionOrIntersectionType, name, skipObjectFunctionPropertyAugment);
        }
        return undefined;
    }

    function getPropertyOfUnionOrIntersectionType(type: UnionOrIntersectionType, name: string, skipObjectFunctionPropertyAugment?: boolean): Symbol | undefined {
        const property = getUnionOrIntersectionProperty(type, name, skipObjectFunctionPropertyAugment);
        // We need to filter out partial properties in union types
        return property && !(getCheckFlags(property) & CheckFlags.ReadPartial) ? property : undefined;
    }

    // Return the symbol for a given property in a union or intersection type, or undefined if the property
    // does not exist in any constituent type. Note that the returned property may only be present in some
    // constituents, in which case the isPartial flag is set when the containing type is union type. We need
    // these partial properties when identifying discriminant properties, but otherwise they are filtered out
    // and do not appear to be present in the union type.
    function getUnionOrIntersectionProperty(type: UnionOrIntersectionType, name: string, skipObjectFunctionPropertyAugment?: boolean): Symbol | undefined {
        let property = skipObjectFunctionPropertyAugment ?
            type.propertyCacheWithoutObjectFunctionPropertyAugment?.get(name) :
            type.propertyCache?.get(name);
        if (!property) {
            property = createUnionOrIntersectionProperty(type, name, skipObjectFunctionPropertyAugment);
            if (property) {
                const properties = skipObjectFunctionPropertyAugment ?
                    type.propertyCacheWithoutObjectFunctionPropertyAugment ||= createSymbolTable() :
                    type.propertyCache ||= createSymbolTable();
                properties.set(name, property);
                // Propagate an entry from the non-augmented cache to the augmented cache unless the property is partial.
                if (skipObjectFunctionPropertyAugment && !(getCheckFlags(property) & CheckFlags.Partial) && !type.propertyCache?.get(name)) {
                    const properties = type.propertyCache ||= createSymbolTable();
                    properties.set(name, property);
                }
            }
        }
        return property;
    }

    function getBaseConstraintOfType(type: Type): Type | undefined {
        if (type.flags & (TypeFlags.InstantiableNonPrimitive | TypeFlags.UnionOrIntersection | TypeFlags.TemplateLiteral | TypeFlags.StringMapping)) {
            //const constraint = getResolvedBaseConstraint(type as InstantiableType | UnionOrIntersectionType);
            //return constraint !== noConstraintType && constraint !== circularConstraintType ? constraint : undefined;
            return undefined;
        }
        return type.flags & TypeFlags.Index ? stringNumberSymbolType : undefined;
    }

    /**
     * For a type parameter, return the base constraint of the type parameter. For the string, number,
     * boolean, and symbol primitive types, return the corresponding object types. Otherwise return the
     * type itself.
     */
    function getApparentType(type: Type): Type {
        const t = type.flags & TypeFlags.Instantiable ? getBaseConstraintOfType(type) || unknownType : type;
        const objectFlags = getObjectFlags(t);
        //return objectFlags & ObjectFlags.Mapped ? getApparentTypeOfMappedType(t as MappedType) :
            // objectFlags & ObjectFlags.Reference && t !== type ? getTypeWithThisArgument(t, type) :
            // t.flags & TypeFlags.Intersection ? getApparentTypeOfIntersectionType(t as IntersectionType, type) :
        return    t.flags & TypeFlags.StringLike ? globalStringType :
            t.flags & TypeFlags.IntLiteral ? globalIntType :
            t.flags & TypeFlags.FloatLiteral ? globalFloatType :
            // t.flags & TypeFlags.BooleanLike ? globalBooleanType :
            // t.flags & TypeFlags.ESSymbolLike ? getGlobalESSymbolType() :
            t.flags & TypeFlags.NonPrimitive ? emptyObjectType :
            t.flags & TypeFlags.Index ? stringNumberSymbolType :
            t.flags & TypeFlags.Unknown && !strictNullChecks ? emptyObjectType :
            t;
    }
    
    function getBaseTypes(type: InterfaceType): BaseType[] {
        if (!type.baseTypesResolved) {
            if (pushTypeResolution(type, TypeSystemPropertyName.ResolvedBaseTypes)) {
                // if (type.objectFlags & ObjectFlags.Tuple) {
                //     type.resolvedBaseTypes = [getTupleBaseType(type as TupleType)];
                // } else
                // if (type.symbol.flags & (SymbolFlags.Class | SymbolFlags.Interface)) {
                //     if (type.symbol.flags & SymbolFlags.Class) {
                //         resolveBaseTypesOfClass(type);
                //     }
                //     if (type.symbol.flags & SymbolFlags.Interface) {
                //         resolveBaseTypesOfInterface(type);
                //     }
                // }
                // else {
                //     Debug.fail("type must be class or interface");
                // }
                if (!popTypeResolution() && type.symbol.declarations) {
                    for (const declaration of type.symbol.declarations) {
                        // if (declaration.kind === SyntaxKind.ClassDeclaration || declaration.kind === SyntaxKind.InterfaceDeclaration) {
                        //     reportCircularBaseType(declaration, type);
                        // }
                    }
                }
            }
            type.baseTypesResolved = true;
        }
        return type.resolvedBaseTypes;
    }


    function createUnionOrIntersectionProperty(containingType: UnionOrIntersectionType, name: string, skipObjectFunctionPropertyAugment?: boolean): Symbol | undefined {
        let singleProp: Symbol | undefined;
        let propSet: Map<SymbolId, Symbol> | undefined;
        let indexTypes: Type[] | undefined;
        const isUnion = containingType.flags & TypeFlags.Union;
        // Flags we want to propagate to the result if they exist in all source symbols
        let optionalFlag: SymbolFlags | undefined;
        let syntheticFlag = CheckFlags.SyntheticMethod;
        let checkFlags = isUnion ? 0 : CheckFlags.Readonly;
        let mergedInstantiations = false;
        for (const current of containingType.types) {
            const type = getApparentType(current);
            if (!(isErrorType(type) || type.flags & TypeFlags.Never)) {
                const prop = getPropertyOfType(type, name, skipObjectFunctionPropertyAugment);
                const modifiers = prop ? getDeclarationModifierFlagsFromSymbol(prop) : 0;
                if (prop) {
                    if (prop.flags & SymbolFlags.ClassMember) {
                        optionalFlag ??= isUnion ? SymbolFlags.None : SymbolFlags.Optional;
                        if (isUnion) {
                            optionalFlag |= prop.flags & SymbolFlags.Optional;
                        }
                        else {
                            optionalFlag &= prop.flags;
                        }
                    }
                    if (!singleProp) {
                        singleProp = prop;
                    }
                    else if (prop !== singleProp) {
                        const isInstantiation = (getTargetSymbol(prop) || prop) === (getTargetSymbol(singleProp) || singleProp);
                        // If the symbols are instances of one another with identical types - consider the symbols
                        // equivalent and just use the first one, which thus allows us to avoid eliding private
                        // members when intersecting a (this-)instantiations of a class with its raw base or another instance
                        if (isInstantiation && compareProperties(singleProp, prop, (a, b) => a === b ? Ternary.True : Ternary.False) === Ternary.True) {
                            // If we merged instantiations of a generic type, we replicate the symbol parent resetting behavior we used
                            // to do when we recorded multiple distinct symbols so that we still get, eg, `Array<T>.length` printed
                            // back and not `Array<string>.length` when we're looking at a `.length` access on a `string[] | number[]`
                            mergedInstantiations = !!singleProp.parent && !!length(getLocalTypeParametersOfClassOrInterfaceOrTypeAlias(singleProp.parent));
                        }
                        else {
                            if (!propSet) {
                                propSet = new Map<SymbolId, Symbol>();
                                propSet.set(getSymbolId(singleProp), singleProp);
                            }
                            const id = getSymbolId(prop);
                            if (!propSet.has(id)) {
                                propSet.set(id, prop);
                            }
                        }
                    }
                    if (isUnion && isReadonlySymbol(prop)) {
                        checkFlags |= CheckFlags.Readonly;
                    }
                    else if (!isUnion && !isReadonlySymbol(prop)) {
                        checkFlags &= ~CheckFlags.Readonly;
                    }
                    checkFlags |= (!(modifiers & ModifierFlags.NonPublicAccessibilityModifier) ? CheckFlags.ContainsPublic : 0) |
                        (modifiers & ModifierFlags.Protected ? CheckFlags.ContainsProtected : 0) |
                        (modifiers & ModifierFlags.Private ? CheckFlags.ContainsPrivate : 0) |
                        (modifiers & ModifierFlags.Static ? CheckFlags.ContainsStatic : 0);
                    
                    syntheticFlag = CheckFlags.SyntheticProperty;                    
                }
                else if (isUnion) {
                    const indexInfo = !isLateBoundName(name) && getApplicableIndexInfoForName(type, name);
                    if (indexInfo) {
                        checkFlags |= CheckFlags.WritePartial | (indexInfo.isReadonly ? CheckFlags.Readonly : 0);
                        indexTypes = append(indexTypes, indexInfo.type);
                    }
                    else if (isObjectLiteralType(type) && !(getObjectFlags(type) & ObjectFlags.ContainsSpread)) {
                        checkFlags |= CheckFlags.WritePartial;
                        indexTypes = append(indexTypes, undefinedType);
                    }
                    else {
                        checkFlags |= CheckFlags.ReadPartial;
                    }
                }
            }
        }
        if (
            !singleProp ||
            isUnion &&
                (propSet || checkFlags & CheckFlags.Partial) &&
                checkFlags & (CheckFlags.ContainsPrivate | CheckFlags.ContainsProtected) &&
                !(propSet && getCommonDeclarationsOfSymbols(propSet.values()))
        ) {
            // No property was found, or, in a union, a property has a private or protected declaration in one
            // constituent, but is missing or has a different declaration in another constituent.
            return undefined;
        }
        if (!propSet && !(checkFlags & CheckFlags.ReadPartial) && !indexTypes) {
            if (mergedInstantiations) {
                // No symbol from a union/intersection should have a `.parent` set (since unions/intersections don't act as symbol parents)
                // Unless that parent is "reconstituted" from the "first value declaration" on the symbol (which is likely different than its instantiated parent!)
                // They also have a `.containingType` set, which affects some services endpoints behavior, like `getRootSymbol`
                const links = tryCast(singleProp, isTransientSymbol)?.links;
                const clone = createSymbolWithType(singleProp, links?.type);
                clone.parent = singleProp.valueDeclaration?.symbol?.parent;
                clone.links.containingType = containingType;
                clone.links.mapper = links?.mapper;
                clone.links.writeType = getWriteTypeOfSymbol(singleProp);
                return clone;
            }
            else {
                return singleProp;
            }
        }
        const props = propSet ? arrayFrom(propSet.values()) : [singleProp];
        let declarations: Declaration[] | undefined;
        let firstType: Type | undefined;
        let nameType: Type | undefined;
        const propTypes: Type[] = [];
        let writeTypes: Type[] | undefined;
        let firstValueDeclaration: Declaration | undefined;
        let hasNonUniformValueDeclaration = false;
        for (const prop of props) {
            if (!firstValueDeclaration) {
                firstValueDeclaration = prop.valueDeclaration;
            }
            else if (prop.valueDeclaration && prop.valueDeclaration !== firstValueDeclaration) {
                hasNonUniformValueDeclaration = true;
            }
            declarations = addRange(declarations, prop.declarations);
            const type = getTypeOfSymbol(prop);
            if (!firstType) {
                firstType = type;
                nameType = getSymbolLinks(prop).nameType;
            }
            const writeType = getWriteTypeOfSymbol(prop);
            if (writeTypes || writeType !== type) {
                writeTypes = append(!writeTypes ? propTypes.slice() : writeTypes, writeType);
            }
            if (type !== firstType) {
                checkFlags |= CheckFlags.HasNonUniformType;
            }
            if (isLiteralType(type) /*|| isPatternLiteralType(type)*/) {
                checkFlags |= CheckFlags.HasLiteralType;
            }
            if (type.flags & TypeFlags.Never && type !== uniqueLiteralType) {
                checkFlags |= CheckFlags.HasNeverType;
            }
            propTypes.push(type);
        }
        addRange(propTypes, indexTypes);
        const result = createSymbol(SymbolFlags.Property | (optionalFlag ?? 0), name, syntheticFlag | checkFlags);
        result.links.containingType = containingType;
        if (!hasNonUniformValueDeclaration && firstValueDeclaration) {
            result.valueDeclaration = firstValueDeclaration;

            // Inherit information about parent type.
            if (firstValueDeclaration.symbol.parent) {
                result.parent = firstValueDeclaration.symbol.parent;
            }
        }

        result.declarations = declarations;
        result.links.nameType = nameType;
        if (propTypes.length > 2) {
            // When `propTypes` has the potential to explode in size when normalized, defer normalization until absolutely needed
            result.links.checkFlags |= CheckFlags.DeferredType;
            result.links.deferralParent = containingType;
            result.links.deferralConstituents = propTypes;
            result.links.deferralWriteConstituents = writeTypes;
        }
        else {
            result.links.type = isUnion ? getUnionType(propTypes) : undefined;//getIntersectionType(propTypes);
            if (writeTypes) {
                result.links.writeType = isUnion ? getUnionType(writeTypes) : undefined;// getIntersectionType(writeTypes);
            }
        }
        return result;
    }

    /** If the given type is an object type and that type has a property by the given name,
     * return the symbol for that property. Otherwise return undefined.
     */
    function getPropertyOfObjectType(type: Type, name: string): Symbol | undefined {
        if (type.flags & TypeFlags.Object) {
            const resolved = resolveStructuredTypeMembers(type as ObjectType);
            const symbol = resolved.members.get(name);
            if (symbol && symbolIsValue(symbol)) {
                return symbol;
            }
        }
    }


    function getReducedApparentType(type: Type): Type {
        // Since getApparentType may return a non-reduced union or intersection type, we need to perform
        // type reduction both before and after obtaining the apparent type. For example, given a type parameter
        // 'T extends A | B', the type 'T & X' becomes 'A & X | B & X' after obtaining the apparent type, and
        // that type may need further reduction to remove empty intersections.
        return getReducedType(getApparentType(getReducedType(type)));
    }
    
    function getDiagnostics(sourceFile: SourceFile, ct: CancellationToken, nodesToCheck?: Node[]): Diagnostic[] {
        try {
            // Record the cancellation token so it can be checked later on during checkSourceElement.
            // Do this in a finally block so we can ensure that it gets reset back to nothing after
            // this call is done.
            cancellationToken = ct;
            return getDiagnosticsWorker(sourceFile, nodesToCheck);
        }
        finally {
            cancellationToken = undefined;
        }
    }

    function getDiagnosticsWorker(sourceFile: SourceFile, nodesToCheck: Node[] | undefined): Diagnostic[] {
        if (sourceFile) {
            ensurePendingDiagnosticWorkComplete();
            // Some global diagnostics are deferred until they are needed and
            // may not be reported in the first call to getGlobalDiagnostics.
            // We should catch these changes and report them.
            const previousGlobalDiagnostics = diagnostics.getGlobalDiagnostics();
            const previousGlobalDiagnosticsSize = previousGlobalDiagnostics.length;

            checkSourceFileWithEagerDiagnostics(sourceFile, nodesToCheck);
            const semanticDiagnostics = diagnostics.getDiagnostics(sourceFile.fileName);
            if (nodesToCheck) {
                // No need to get global diagnostics.
                return semanticDiagnostics;
            }
            const currentGlobalDiagnostics = diagnostics.getGlobalDiagnostics();
            if (currentGlobalDiagnostics !== previousGlobalDiagnostics) {
                // If the arrays are not the same reference, new diagnostics were added.
                // TODO:
                // const deferredGlobalDiagnostics = relativeComplement(previousGlobalDiagnostics, currentGlobalDiagnostics, compareDiagnostics);
                // return concatenate(deferredGlobalDiagnostics, semanticDiagnostics);
            }
            else if (previousGlobalDiagnosticsSize === 0 && currentGlobalDiagnostics.length > 0) {
                // If the arrays are the same reference, but the length has changed, a single
                // new diagnostic was added as DiagnosticCollection attempts to reuse the
                // same array.
                return concatenate(currentGlobalDiagnostics, semanticDiagnostics);
            }

            return semanticDiagnostics;
        }

        // Global diagnostics are always added when a file is not provided to
        // getDiagnostics
        forEach(host.getSourceFiles(), file => checkSourceFileWithEagerDiagnostics(file));
        return diagnostics.getDiagnostics();
    }

    function checkSourceFile(node: SourceFile, nodesToCheck: Node[] | undefined) {
        tracing?.push(tracing.Phase.Check, nodesToCheck ? "checkSourceFileNodes" : "checkSourceFile", { path: node.path }, /*separateBeginAndEnd*/ true);
        const beforeMark = nodesToCheck ? "beforeCheckNodes" : "beforeCheck";
        const afterMark = nodesToCheck ? "afterCheckNodes" : "afterCheck";
        performance.mark(beforeMark);
        nodesToCheck ? checkSourceFileNodesWorker(node, nodesToCheck) : checkSourceFileWorker(node);
        performance.mark(afterMark);
        performance.measure("Check", beforeMark, afterMark);
        tracing?.pop();
    }

    function getNodeLinks(node: Node): NodeLinks {
        const nodeId = getNodeId(node);
        return nodeLinks[nodeId] || (nodeLinks[nodeId] = new (NodeLinks as any)());
    }

    function getSymbol(symbols: SymbolTable, name: string, meaning: SymbolFlags): Symbol | undefined {
        if (meaning) {
            const symbol = getMergedSymbol(symbols.get(name));
            if (symbol) {
                if (symbol.flags & meaning) {
                    return symbol;
                }
                if (symbol.flags & SymbolFlags.Alias) {
                    const targetFlags = getSymbolFlags(symbol);
                    // `targetFlags` will be `SymbolFlags.All` if an error occurred in alias resolution; this avoids cascading errors
                    if (targetFlags & meaning) {
                        return symbol;
                    }
                }
            }
        }
        // return undefined if we can't find a symbol.
    }

    function getRequiresScopeChangeCache(node: FunctionLikeDeclaration) {
        return getNodeLinks(node).declarationRequiresScopeChange;
    }

    function setRequiresScopeChangeCache(node: FunctionLikeDeclaration, value: boolean) {
        getNodeLinks(node).declarationRequiresScopeChange = value;
    }
    
    function checkGrammarSourceFile(node: SourceFile): boolean {
        return !!(node.flags & NodeFlags.Ambient) && checkGrammarTopLevelElementsForRequiredDeclareModifier(node);
    }

    function isErrorType(type: Type) {
        // The only 'any' types that have alias symbols are those manufactured by getTypeFromTypeAliasReference for
        // a reference to an unresolved symbol. We want those to behave like the errorType.
        return type === errorType || !!(type.flags & TypeFlags.Any && type.aliasSymbol);
    }

    function compareProperties(sourceProp: Symbol, targetProp: Symbol, compareTypes: (source: Type, target: Type) => Ternary): Ternary {
        // Two members are considered identical when
        // - they are public properties with identical names, optionality, and types,
        // - they are private or protected properties originating in the same declaration and having identical types
        if (sourceProp === targetProp) {
            return Ternary.True;
        }
        const sourcePropAccessibility = getDeclarationModifierFlagsFromSymbol(sourceProp) & ModifierFlags.NonPublicAccessibilityModifier;
        const targetPropAccessibility = getDeclarationModifierFlagsFromSymbol(targetProp) & ModifierFlags.NonPublicAccessibilityModifier;
        if (sourcePropAccessibility !== targetPropAccessibility) {
            return Ternary.False;
        }
        if (sourcePropAccessibility) {
            if (getTargetSymbol(sourceProp) !== getTargetSymbol(targetProp)) {
                return Ternary.False;
            }
        }
        else {
            if ((sourceProp.flags & SymbolFlags.Optional) !== (targetProp.flags & SymbolFlags.Optional)) {
                return Ternary.False;
            }
        }
        if (isReadonlySymbol(sourceProp) !== isReadonlySymbol(targetProp)) {
            return Ternary.False;
        }
        return compareTypes(getTypeOfSymbol(sourceProp), getTypeOfSymbol(targetProp));
    }

    function findIndexInfo(indexInfos: readonly IndexInfo[], keyType: Type) {
        return find(indexInfos, info => info.keyType === keyType);
    }

    function getIndexInfosOfStructuredType(type: Type): readonly IndexInfo[] {
        if (type.flags & TypeFlags.StructuredType) {
            const resolved = resolveStructuredTypeMembers(type as ObjectType);
            return resolved.indexInfos;
        }
        return emptyArray;
    }

    function getIndexInfosOfType(type: Type): readonly IndexInfo[] {
        return getIndexInfosOfStructuredType(getReducedApparentType(type));
    }
    
    // Return the indexing info of the given kind in the given type. Creates synthetic union index types when necessary and
    // maps primitive types and type parameters are to their apparent types.
    function getIndexInfoOfType(type: Type, keyType: Type): IndexInfo | undefined {
        return findIndexInfo(getIndexInfosOfType(type), keyType);
    }
    
    function isObjectLiteralType(type: Type) {
        return !!(getObjectFlags(type) & ObjectFlags.ObjectLiteral);
    }

    // Return the index type of the given kind in the given type. Creates synthetic union index types when necessary and
    // maps primitive types and type parameters are to their apparent types.
    function getIndexTypeOfType(type: Type, keyType: Type): Type | undefined {
        return getIndexInfoOfType(type, keyType)?.type;
    }

    function isApplicableIndexType(source: Type, target: Type): boolean {
        // A 'string' index signature applies to types assignable to 'string' or 'number', and a 'number' index
        // signature applies to types assignable to 'number', `${number}` and numeric string literal types.
        return isTypeAssignableTo(source, target) ||
            target === stringType && isTypeAssignableTo(source, numberType) ||
            target === numberType && (!!(source.flags & TypeFlags.StringLiteral) && isNumericLiteralName((source as StringLiteralType).value));
    }

    function getApplicableIndexInfos(type: Type, keyType: Type): IndexInfo[] {
        return getIndexInfosOfType(type).filter(info => isApplicableIndexType(keyType, info.keyType));
    }

    function findApplicableIndexInfo(indexInfos: readonly IndexInfo[], keyType: Type) {
        // Index signatures for type 'string' are considered only when no other index signatures apply.
        let stringIndexInfo: IndexInfo | undefined;
        let applicableInfo: IndexInfo | undefined;
        let applicableInfos: IndexInfo[] | undefined;
        for (const info of indexInfos) {
            if (info.keyType === stringType) {
                stringIndexInfo = info;
            }
            else if (isApplicableIndexType(keyType, info.keyType)) {
                if (!applicableInfo) {
                    applicableInfo = info;
                }
                else {
                    (applicableInfos || (applicableInfos = [applicableInfo])).push(info);
                }
            }
        }
        // When more than one index signature is applicable we create a synthetic IndexInfo. Instead of computing
        // the intersected key type, we just use unknownType for the key type as nothing actually depends on the
        // keyType property of the returned IndexInfo.
        return applicableInfo ? applicableInfo :
            stringIndexInfo && isApplicableIndexType(keyType, stringType) ? stringIndexInfo :
            undefined;
    }

    function getApplicableIndexInfo(type: Type, keyType: Type): IndexInfo | undefined {
        return findApplicableIndexInfo(getIndexInfosOfType(type), keyType);
    }

    function createLiteralType(flags: TypeFlags, value: string | number, symbol?: Symbol, regularType?: LiteralType) {
        const type = createTypeWithSymbol(flags, symbol!) as LiteralType;
        type.value = value;
        type.regularType = regularType || type;
        return type;
    }

    /**
     * @deprecated is this needed?
     * @param value 
     * @returns 
     */
    function getNumberLiteralType(value: number): IntLiteralType {
        let type;
        return numberLiteralTypes.get(value) ||
            (numberLiteralTypes.set(value, type = createLiteralType(TypeFlags.IntLiteral, value) as IntLiteralType), type);
    }

    /** @deprecated not needed in LPC? */
    function getStringLiteralType(value: string): StringLiteralType {
        let type;
        return stringLiteralTypes.get(value) ||
            (stringLiteralTypes.set(value, type = createLiteralType(TypeFlags.StringLiteral, value) as StringLiteralType), type);
    }
    
    function getApplicableIndexInfoForName(type: Type, name: string): IndexInfo | undefined {
        return getApplicableIndexInfo(type, /*isLateBoundName(name) ? esSymbolType :*/ getStringLiteralType(name));
    }
    
    function getCommonDeclarationsOfSymbols(symbols: Iterable<Symbol>) {
        let commonDeclarations: Set<Node> | undefined;
        for (const symbol of symbols) {
            if (!symbol.declarations) {
                return undefined;
            }
            if (!commonDeclarations) {
                commonDeclarations = new Set(symbol.declarations);
                continue;
            }
            commonDeclarations.forEach(declaration => {
                if (!contains(symbol.declarations, declaration)) {
                    commonDeclarations!.delete(declaration);
                }
            });
            if (commonDeclarations.size === 0) {
                return undefined;
            }
        }
        return commonDeclarations;
    }

    
    function filterType(type: Type, f: (t: Type) => boolean): Type {
        if (type.flags & TypeFlags.Union) {
            const types = (type as UnionType).types;
            const filtered = filter(types, f);
            if (filtered === types) {
                return type;
            }
            const origin = (type as UnionType).origin;
            let newOrigin: Type | undefined;
            if (origin && origin.flags & TypeFlags.Union) {
                // If the origin type is a (denormalized) union type, filter its non-union constituents. If that ends
                // up removing a smaller number of types than in the normalized constituent set (meaning some of the
                // filtered types are within nested unions in the origin), then we can't construct a new origin type.
                // Otherwise, if we have exactly one type left in the origin set, return that as the filtered type.
                // Otherwise, construct a new filtered origin type.
                const originTypes = (origin as UnionType).types;
                const originFiltered = filter(originTypes, t => !!(t.flags & TypeFlags.Union) || f(t));
                if (originTypes.length - originFiltered.length === types.length - filtered.length) {
                    if (originFiltered.length === 1) {
                        return originFiltered[0];
                    }
                    newOrigin = createOriginUnionOrIntersectionType(TypeFlags.Union, originFiltered);
                }
            }
            // filtering could remove intersections so `ContainsIntersections` might be forwarded "incorrectly"
            // it is purely an optimization hint so there is no harm in accidentally forwarding it
            return getUnionTypeFromSortedList(filtered, (type as UnionType).objectFlags & (ObjectFlags.PrimitiveUnion | ObjectFlags.ContainsIntersections), /*aliasSymbol*/ undefined, /*aliasTypeArguments*/ undefined, newOrigin);
        }
        return type.flags & TypeFlags.Never || f(type) ? type : neverType;
    }

    function removeType(type: Type, targetType: Type) {
        return filterType(type, t => t !== targetType);
    }

    function removeMissingType(type: Type, isOptional: boolean) {
        return type;// TODO exactOptionalPropertyTypes && isOptional ? removeType(type, missingType) : type;
    }
    
    /**
     * Distinct write types come only from set accessors, but synthetic union and intersection
     * properties deriving from set accessors will either pre-compute or defer the union or
     * intersection of the writeTypes of their constituents.
     */
    function getWriteTypeOfSymbol(symbol: Symbol): Type {
        const checkFlags = getCheckFlags(symbol);
        if (symbol.flags & SymbolFlags.Property) {
            // TODO: review this
            // return checkFlags & CheckFlags.SyntheticProperty ?
            //     checkFlags & CheckFlags.DeferredType ?
            //         getWriteTypeOfSymbolWithDeferredType(symbol) || getTypeOfSymbolWithDeferredType(symbol) :
            //         // NOTE: cast to TransientSymbol should be safe because only TransientSymbols can have CheckFlags.SyntheticProperty
            //         (symbol as TransientSymbol).links.writeType || (symbol as TransientSymbol).links.type! :
            return removeMissingType(getTypeOfSymbol(symbol), !!(symbol.flags & SymbolFlags.Optional));
        }
        // if (symbol.flags & SymbolFlags.Accessor) {
        //     return checkFlags & CheckFlags.Instantiated ?
        //         getWriteTypeOfInstantiatedSymbol(symbol) :
        //         getWriteTypeOfAccessors(symbol);
        // }
        return getTypeOfSymbol(symbol);
    }


    function createSymbolWithType(source: Symbol, type: Type | undefined) {
        const symbol = createSymbol(source.flags, source.name, getCheckFlags(source) & CheckFlags.Readonly);
        symbol.declarations = source.declarations;
        symbol.parent = source.parent;
        symbol.links.type = type;
        symbol.links.target = source;
        if (source.valueDeclaration) {
            symbol.valueDeclaration = source.valueDeclaration;
        }
        const nameType = getSymbolLinks(source).nameType;
        if (nameType) {
            symbol.links.nameType = nameType;
        }
        return symbol;
    }
    
    function isReadonlySymbol(symbol: Symbol): boolean {
        // The following symbols are considered read-only:
        // Properties with a 'readonly' modifier
        // Variables declared with 'const'
        // Get accessors without matching set accessors
        // Enum members
        // Object.defineProperty assignments with writable false or no setter
        // Unions and intersections of the above (unions and intersections eagerly set isReadonly on creation)
        return !!(getCheckFlags(symbol) & CheckFlags.Readonly ||
            //symbol.flags & SymbolFlags.Property && getDeclarationModifierFlagsFromSymbol(symbol) & ModifierFlags.Readonly ||
            //symbol.flags & SymbolFlags.Variable && getDeclarationNodeFlagsFromSymbol(symbol) & NodeFlags.Constant ||
            symbol.flags & SymbolFlags.Accessor && !(symbol.flags & SymbolFlags.SetAccessor) ||
            symbol.flags & SymbolFlags.EnumMember ||
            some(symbol.declarations, isReadonlyAssignmentDeclaration));
    }

    function isLiteralType(type: Type): boolean {
        return type.flags & TypeFlags.Boolean ? true :
            type.flags & TypeFlags.Union ? type.flags & TypeFlags.EnumLiteral ? true : every((type as UnionType).types, isUnitType) :
            isUnitType(type);
    }

    function isLateBoundName(name: string): boolean {
        return (name as string).charCodeAt(0) === CharacterCodes._ &&
            (name as string).charCodeAt(1) === CharacterCodes._ &&
            (name as string).charCodeAt(2) === CharacterCodes.at;
    }

    // The local type parameters are the combined set of type parameters from all declarations of the class,
    // interface, or type alias.
    function getLocalTypeParametersOfClassOrInterfaceOrTypeAlias(symbol: Symbol): TypeParameter[] | undefined {
        if (!symbol.declarations) {
            return;
        }
        return; // TODO
        // let result: TypeParameter[] | undefined;
        // for (const node of symbol.declarations) {
        //     if (
        //         node.kind === SyntaxKind.InterfaceDeclaration ||
        //         node.kind === SyntaxKind.ClassDeclaration ||
        //         node.kind === SyntaxKind.ClassExpression ||
        //         isJSConstructor(node) ||
        //         isTypeAlias(node)
        //     ) {
        //         const declaration = node as InterfaceDeclaration | TypeAliasDeclaration | JSDocTypedefTag | JSDocCallbackTag;
        //         result = appendTypeParameters(result, getEffectiveTypeParameterDeclarations(declaration));
        //     }
        // }
        // return result;
    }

    function getTargetSymbol(s: Symbol) {
        // if symbol is instantiated its flags are not copied from the 'target'
        // so we'll need to get back original 'target' symbol to work with correct set of flags
        // NOTE: cast to TransientSymbol should be safe because only TransientSymbols have CheckFlags.Instantiated
        return getCheckFlags(s) & CheckFlags.Instantiated ? (s as TransientSymbol).links.target! : s;
    }
    
    function checkGrammarTopLevelElementsForRequiredDeclareModifier(file: SourceFile): boolean {
        for (const decl of file.statements) {
            // TODO
            console.warn("Implement me - grammar check");
            // if (isDeclaration(decl) || decl.kind === SyntaxKind.VariableStatement) {
            //     if (checkGrammarTopLevelElementForRequiredDeclareModifier(decl)) {
            //         return true;
            //     }
            // }
        }
        return false;
    }

    // This function assumes the constituent type list is sorted and deduplicated.
    function getUnionTypeFromSortedList(types: Type[], precomputedObjectFlags: ObjectFlags, aliasSymbol?: Symbol, aliasTypeArguments?: readonly Type[], origin?: Type): Type {
        if (types.length === 0) {
            return neverType;
        }
        if (types.length === 1) {
            return types[0];
        }
        const typeKey = !origin ? getTypeListId(types) :
            origin.flags & TypeFlags.Union ? `|${getTypeListId((origin as UnionType).types)}` :
            //origin.flags & TypeFlags.Intersection ? `&${getTypeListId((origin as IntersectionType).types)}` :
            `#${(origin as IndexType).type.id}|${getTypeListId(types)}`; // origin type id alone is insufficient, as `keyof x` may resolve to multiple WIP values while `x` is still resolving
        const id = typeKey + getAliasId(aliasSymbol, aliasTypeArguments);
        let type = unionTypes.get(id);
        if (!type) {
            type = createType(TypeFlags.Union) as UnionType;
            type.objectFlags = precomputedObjectFlags | getPropagatingFlagsOfTypes(types, /*excludeKinds*/ TypeFlags.Nullable);
            type.types = types;
            type.origin = origin;
            type.aliasSymbol = aliasSymbol;
            type.aliasTypeArguments = aliasTypeArguments;
            if (types.length === 2 && types[0].flags & TypeFlags.BooleanLiteral && types[1].flags & TypeFlags.BooleanLiteral) {
                type.flags |= TypeFlags.Boolean;
                (type as UnionType & IntrinsicType).intrinsicName = "boolean";
            }
            unionTypes.set(id, type);
        }
        return type;
    }

    /** @deprecated no optional types in LPC */
    function removeOptionalTypeMarker(type: Type): Type {
        return type;//return strictNullChecks ? removeType(type, optionalType) : type;
    }

    function checkPropertyAccessExpression(node: PropertyAccessExpression, checkMode: CheckMode | undefined, writeOnly?: boolean) {
        console.warn("implement me - checkPropertyAccessExpression");        
        //return checkPropertyAccessExpressionOrQualifiedName(node, node.expression, checkNonNullExpression(node.expression), node.name, checkMode, writeOnly);
    }

    /** @deprecated no null in LPC */
    function getNonNullableType(type: Type): Type {
        return type;// strictNullChecks ? getAdjustedTypeWithFacts(type, TypeFacts.NEUndefinedOrNull) : type;
    }

    function getDeclarationContainer(node: Node): Node {
        return findAncestor(getRootDeclaration(node), node => {
            switch (node.kind) {
                case SyntaxKind.VariableDeclaration:
                case SyntaxKind.VariableDeclarationList:
                // case SyntaxKind.ImportSpecifier:
                // case SyntaxKind.NamedImports:
                // case SyntaxKind.NamespaceImport:
                // case SyntaxKind.ImportClause:
                    return false;
                default:
                    return true;
            }
        })!.parent;
    }

    function getCombinedModifierFlagsCached(node: Declaration) {
        // we hold onto the last node and result to speed up repeated lookups against the same node.
        if (lastGetCombinedModifierFlagsNode === node) {
            return lastGetCombinedModifierFlagsResult;
        }

        lastGetCombinedModifierFlagsNode = node;
        lastGetCombinedModifierFlagsResult = getCombinedModifierFlags(node);
        return lastGetCombinedModifierFlagsResult;
    }
    
    function isDeclarationVisible(node: Node): boolean {
        if (node) {
            const links = getNodeLinks(node);
            if (links.isVisible === undefined) {
                links.isVisible = !!determineIfDeclarationIsVisible();
            }
            return links.isVisible;
        }

        return false;

        function determineIfDeclarationIsVisible() {
            switch (node.kind) {
                case SyntaxKind.JSDocCallbackTag:
                case SyntaxKind.JSDocTypedefTag:
                case SyntaxKind.JSDocEnumTag:
                    // Top-level jsdoc type aliases are considered exported
                    // First parent is comment node, second is hosting declaration or token; we only care about those tokens or declarations whose parent is a source file
                    return !!(node.parent && node.parent.parent && node.parent.parent.parent && isSourceFile(node.parent.parent.parent));
                case SyntaxKind.BindingElement:
                    return isDeclarationVisible(node.parent.parent);
                case SyntaxKind.VariableDeclaration:
                    if (
                        isBindingPattern((node as VariableDeclaration).name) &&
                        !((node as VariableDeclaration).name as BindingPattern).elements.length
                    ) {
                        // If the binding pattern is empty, this variable declaration is not visible
                        return false;
                    }
                    // falls through
                // case SyntaxKind.ModuleDeclaration:
                // case SyntaxKind.ClassDeclaration:
                // case SyntaxKind.InterfaceDeclaration:
                // case SyntaxKind.TypeAliasDeclaration:
                case SyntaxKind.FunctionDeclaration:
                // case SyntaxKind.EnumDeclaration:
                // case SyntaxKind.ImportEqualsDeclaration:
                    // external module augmentation is always visible
                    // if (isExternalModuleAugmentation(node)) {
                    //     return true;
                    // }
                    const parent = getDeclarationContainer(node);
                    // If the node is not exported or it is not ambient module element (except import declaration)
                    if (
                        !(getCombinedModifierFlagsCached(node as Declaration) & ModifierFlags.Export) &&
                        !(/*node.kind !== SyntaxKind.ImportEqualsDeclaration &&*/ parent.kind !== SyntaxKind.SourceFile && parent.flags & NodeFlags.Ambient)
                    ) {
                        return true;// isGlobalSourceFile(parent);
                    }
                    // Exported members/ambient module elements (exception import declaration) are visible if parent is visible
                    return isDeclarationVisible(parent);

                case SyntaxKind.PropertyDeclaration:
                // case SyntaxKind.PropertySignature:
                // case SyntaxKind.GetAccessor:
                // case SyntaxKind.SetAccessor:
                // case SyntaxKind.MethodDeclaration:
                // case SyntaxKind.MethodSignature:
                    if (hasEffectiveModifier(node, ModifierFlags.Private | ModifierFlags.Protected)) {
                        // Private/protected properties/methods are not visible
                        return false;
                    }
                    // Public properties/methods are visible if its parents are visible, so:
                    // falls through

                // case SyntaxKind.Constructor:
                // case SyntaxKind.ConstructSignature:
                // case SyntaxKind.CallSignature:
                case SyntaxKind.IndexSignature:
                case SyntaxKind.Parameter:
                // case SyntaxKind.ModuleBlock:
                // case SyntaxKind.FunctionType:
                // case SyntaxKind.ConstructorType:
                case SyntaxKind.TypeLiteral:
                // case SyntaxKind.TypeReference:
                case SyntaxKind.ArrayType:
                // case SyntaxKind.TupleType:
                case SyntaxKind.UnionType:
                // case SyntaxKind.IntersectionType:
                // case SyntaxKind.ParenthesizedType:
                // case SyntaxKind.NamedTupleMember:
                    return isDeclarationVisible(node.parent);

                // Default binding, import specifier and namespace import is visible
                // only on demand so by default it is not visible
                // case SyntaxKind.ImportClause:
                // case SyntaxKind.NamespaceImport:
                // case SyntaxKind.ImportSpecifier:
                //     return false;

                // Type parameters are always visible
                case SyntaxKind.TypeParameter:

                // Source file and namespace export are always visible
                // falls through
                case SyntaxKind.SourceFile:
                // case SyntaxKind.NamespaceExportDeclaration:
                    return true;

                // Export assignments do not create name bindings outside the module
                // case SyntaxKind.ExportAssignment:
                //     return false;

                default:
                    return false;
            }
        }
    }

    function getTypeOfSymbolAtLocation(symbol: Symbol, location: Node) {
        symbol = getExportSymbolOfValueSymbolIfExported(symbol);

        // If we have an identifier or a property access at the given location, if the location is
        // an dotted name expression, and if the location is not an assignment target, obtain the type
        // of the expression (which will reflect control flow analysis). If the expression indeed
        // resolved to the given symbol, return the narrowed type.
        if (location.kind === SyntaxKind.Identifier /*|| location.kind === SyntaxKind.PrivateIdentifier*/) {
            if (isRightSideOfQualifiedNameOrPropertyAccess(location)) {
                location = location.parent;
            }
            if (isExpressionNode(location) && (!isAssignmentTarget(location) || isWriteAccess(location))) {
                const type = removeOptionalTypeMarker(
                    // isWriteAccess(location) && location.kind === SyntaxKind.PropertyAccessExpression ?
                    //     checkPropertyAccessExpression(location as PropertyAccessExpression, /*checkMode*/ undefined, /*writeOnly*/ true) :
                        getTypeOfExpression(location as Expression),
                );
                if (getExportSymbolOfValueSymbolIfExported(getNodeLinks(location).resolvedSymbol) === symbol) {
                    return type;
                }
            }
        }
        
        // The location isn't a reference to the given symbol, meaning we're being asked
        // a hypothetical question of what type the symbol would have if there was a reference
        // to it at the given location. Since we have no control flow information for the
        // hypothetical reference (control flow information is created and attached by the
        // binder), we simply return the declared type of the symbol.
        return isRightSideOfAccessExpression(location) && isWriteAccess(location.parent) ? getWriteTypeOfSymbol(symbol) : getNonMissingTypeOfSymbol(symbol);
    }

    function getNonMissingTypeOfSymbol(symbol: Symbol) {
        return removeMissingType(getTypeOfSymbol(symbol), !!(symbol.flags & SymbolFlags.Optional));
    }

    function isUnitType(type: Type): boolean {
        return !!(type.flags & TypeFlags.Unit);
    }
       
    function isReadonlyAssignmentDeclaration(d: Declaration) {
        if (!isCallExpression(d)) {
            return false;
        }
        console.warn("Implement me - isReadonlyAssignmentDeclaration");
        return false;
        // if (!isBindableObjectDefinePropertyCall(d)) {
        //     return false;
        // }        
        // const objectLitType = checkExpressionCached(d.arguments[2]);
        // const valueType = getTypeOfPropertyOfType(objectLitType, "value" as string);
        // if (valueType) {
        //     const writableProp = getPropertyOfType(objectLitType, "writable" as string);
        //     const writableType = writableProp && getTypeOfSymbol(writableProp);
        //     if (!writableType || writableType === falseType || writableType === regularFalseType) {
        //         return true;
        //     }
        //     // We include this definition whereupon we walk back and check the type at the declaration because
        //     // The usual definition of `Object.defineProperty` will _not_ cause literal types to be preserved in the
        //     // argument types, should the type be contextualized by the call itself.
        //     if (writableProp && writableProp.valueDeclaration && isPropertyAssignment(writableProp.valueDeclaration)) {
        //         const initializer = writableProp.valueDeclaration.initializer;
        //         const rawOriginalType = checkExpression(initializer);
        //         if (rawOriginalType === falseType || rawOriginalType === regularFalseType) {
        //             return true;
        //         }
        //     }
        //     return false;
        // }
        // const setProp = getPropertyOfType(objectLitType, "set" as string);
        // return !setProp;
    }

    function getDeclarationNodeFlagsFromSymbol(s: Symbol): NodeFlags {
        return s.valueDeclaration ? getCombinedNodeFlagsCached(s.valueDeclaration) : 0;
    }
    
    // This function is used to propagate certain flags when creating new object type references and union types.
    // It is only necessary to do so if a constituent type might be the undefined type, the null type, the type
    // of an object literal or a non-inferrable type. This is because there are operations in the type checker
    // that care about the presence of such types at arbitrary depth in a containing type.
    function getPropagatingFlagsOfTypes(types: readonly Type[], excludeKinds?: TypeFlags): ObjectFlags {
        let result: ObjectFlags = 0;
        for (const type of types) {
            if (excludeKinds === undefined || !(type.flags & excludeKinds)) {
                result |= getObjectFlags(type);
            }
        }
        return result & ObjectFlags.PropagatingFlags;
    }

    function createOriginType(flags: TypeFlags): Type {
        return new Type(checker, flags);
    }

    function createOriginUnionOrIntersectionType(flags: TypeFlags, types: Type[]) {
        const result = createOriginType(flags) as UnionOrIntersectionType;
        result.types = types;
        return result;
    }

    function checkSourceElement(node: Node | undefined): void {
        if (node) {
            const saveCurrentNode = currentNode;
            currentNode = node;
            instantiationCount = 0;
            checkSourceElementWorker(node);
            currentNode = saveCurrentNode;
        }
    }

    function checkSourceElementWorker(node: Node): void {
        if (getNodeCheckFlags(node) & NodeCheckFlags.PartiallyTypeChecked) {
            return;
        }

        if (canHaveJSDoc(node)) {
            // TODO
            console.warn("Implement me - checkJSDocElement");
            // forEach(node.jsDoc, ({ comment, tags }) => {
            //     checkJSDocCommentWorker(comment);
            //     forEach(tags, tag => {
            //         checkJSDocCommentWorker(tag.comment);
            //         if (isInJSFile(node)) {
            //             checkSourceElement(tag);
            //         }
            //     });
            // });
        }
        
        const kind = node.kind;
        if (cancellationToken) {
            // Only bother checking on a few construct kinds.  We don't want to be excessively
            // hitting the cancellation token on every node we check.
            switch (kind) {
                // case SyntaxKind.ModuleDeclaration:
                // case SyntaxKind.ClassDeclaration:
                // case SyntaxKind.InterfaceDeclaration:
                case SyntaxKind.FunctionDeclaration:
                    cancellationToken.throwIfCancellationRequested();
            }
        }
        if (kind >= SyntaxKind.FirstStatement && kind <= SyntaxKind.LastStatement && canHaveFlowNode(node) && node.flowNode && !isReachableFlowNode(node.flowNode)) {
            errorOrSuggestion(compilerOptions.allowUnreachableCode === false, node, Diagnostics.Unreachable_code_detected);
        }

        // If editing this, keep `isSourceElement` in utilities up to date.
        switch (kind) {
            // case SyntaxKind.TypeParameter:
            //     return checkTypeParameter(node as TypeParameterDeclaration);
            // case SyntaxKind.Parameter:
            //     return checkParameter(node as ParameterDeclaration);
            // case SyntaxKind.PropertyDeclaration:
            //     return checkPropertyDeclaration(node as PropertyDeclaration);
            // case SyntaxKind.PropertySignature:
            //     return checkPropertySignature(node as PropertySignature);
            // case SyntaxKind.ConstructorType:
            // case SyntaxKind.FunctionType:
            // case SyntaxKind.CallSignature:
            // case SyntaxKind.ConstructSignature:
            // case SyntaxKind.IndexSignature:
            //     return checkSignatureDeclaration(node as SignatureDeclaration);
            // case SyntaxKind.MethodDeclaration:
            // case SyntaxKind.MethodSignature:
            //     return checkMethodDeclaration(node as MethodDeclaration | MethodSignature);
            // case SyntaxKind.ClassStaticBlockDeclaration:
            //     return checkClassStaticBlockDeclaration(node as ClassStaticBlockDeclaration);                        
            case SyntaxKind.TypeLiteral:
                Debug.fail("check type literal");
            //     return checkTypeLiteral(node as TypeLiteralNode);
            // case SyntaxKind.ArrayType:
            //     return checkArrayType(node as ArrayTypeNode);            
            // case SyntaxKind.UnionType:            
            //     return checkUnionOrIntersectionType(node as UnionOrIntersectionTypeNode);
            // case SyntaxKind.ParenthesizedType:
            // case SyntaxKind.OptionalType:
            // case SyntaxKind.RestType:
            //     return checkSourceElement((node as ParenthesizedTypeNode | OptionalTypeNode | RestTypeNode).type);
            // case SyntaxKind.ThisType:
            //     return checkThisType(node as ThisTypeNode);
            // case SyntaxKind.TypeOperator:
            //     return checkTypeOperator(node as TypeOperatorNode);            
            // case SyntaxKind.ImportType:
            //     return checkImportType(node as ImportTypeNode);
            // case SyntaxKind.NamedTupleMember:
            //     return checkNamedTupleMember(node as NamedTupleMember);
            // case SyntaxKind.JSDocAugmentsTag:
            //     return checkJSDocAugmentsTag(node as JSDocAugmentsTag);
            // case SyntaxKind.JSDocImplementsTag:
            //     return checkJSDocImplementsTag(node as JSDocImplementsTag);
            // case SyntaxKind.JSDocTypedefTag:
            // case SyntaxKind.JSDocCallbackTag:
            // case SyntaxKind.JSDocEnumTag:
            //     return checkJSDocTypeAliasTag(node as JSDocTypedefTag);
            // case SyntaxKind.JSDocTemplateTag:
            //     return checkJSDocTemplateTag(node as JSDocTemplateTag);
            // case SyntaxKind.JSDocTypeTag:
            //     return checkJSDocTypeTag(node as JSDocTypeTag);
            // case SyntaxKind.JSDocLink:
            // case SyntaxKind.JSDocLinkCode:
            // case SyntaxKind.JSDocLinkPlain:
            //     return checkJSDocLinkLikeTag(node as JSDocLink | JSDocLinkCode | JSDocLinkPlain);
            // case SyntaxKind.JSDocParameterTag:
            //     return checkJSDocParameterTag(node as JSDocParameterTag);
            // case SyntaxKind.JSDocPropertyTag:
            //     return checkJSDocPropertyTag(node as JSDocPropertyTag);
            // case SyntaxKind.JSDocFunctionType:
            //     checkJSDocFunctionType(node as JSDocFunctionType);
            //     // falls through
            // case SyntaxKind.JSDocNonNullableType:
            // case SyntaxKind.JSDocNullableType:
            // case SyntaxKind.JSDocAllType:
            // case SyntaxKind.JSDocUnknownType:
            // case SyntaxKind.JSDocTypeLiteral:
            //     checkJSDocTypeIsInJsFile(node);
            //     forEachChild(node, checkSourceElement);
            //     return;
            // case SyntaxKind.JSDocVariadicType:
            //     checkJSDocVariadicType(node as JSDocVariadicType);
            //     return;
            // case SyntaxKind.JSDocTypeExpression:
            //     return checkSourceElement((node as JSDocTypeExpression).type);
            // case SyntaxKind.JSDocPublicTag:
            // case SyntaxKind.JSDocProtectedTag:
            // case SyntaxKind.JSDocPrivateTag:
            //     return checkJSDocAccessibilityModifiers(node as JSDocPublicTag | JSDocProtectedTag | JSDocPrivateTag);
            // case SyntaxKind.JSDocSatisfiesTag:
            //     return checkJSDocSatisfiesTag(node as JSDocSatisfiesTag);
            // case SyntaxKind.JSDocThisTag:
            //     return checkJSDocThisTag(node as JSDocThisTag);
            // case SyntaxKind.JSDocImportTag:
            //     return checkJSDocImportTag(node as JSDocImportTag);
            // case SyntaxKind.IndexedAccessType:
            //     return checkIndexedAccessType(node as IndexedAccessTypeNode);
            // case SyntaxKind.MappedType:
            //     return checkMappedType(node as MappedTypeNode);
            case SyntaxKind.FunctionDeclaration:
                return checkFunctionDeclaration(node as FunctionDeclaration);
            case SyntaxKind.Block:
            // case SyntaxKind.ModuleBlock:
                return checkBlock(node as Block);
            case SyntaxKind.VariableStatement:
                return checkVariableStatement(node as VariableStatement);
            case SyntaxKind.ExpressionStatement:
                return checkExpressionStatement(node as ExpressionStatement);
            case SyntaxKind.IfStatement:
                return checkIfStatement(node as IfStatement);
            case SyntaxKind.DoWhileStatement:
                return checkDoWhileStatement(node as DoWhileStatement);
            // case SyntaxKind.WhileStatement:
            //     return checkWhileStatement(node as WhileStatement);
            // case SyntaxKind.ForStatement:
            //     return checkForStatement(node as ForStatement);
            // case SyntaxKind.ForInStatement:
            //     return checkForInStatement(node as ForInStatement);
            // case SyntaxKind.ForOfStatement:
            //     return checkForOfStatement(node as ForOfStatement);
            // case SyntaxKind.ContinueStatement:
            // case SyntaxKind.BreakStatement:
            //     return checkBreakOrContinueStatement(node as BreakOrContinueStatement);
            case SyntaxKind.ReturnStatement:
                return checkReturnStatement(node as ReturnStatement);
            // case SyntaxKind.WithStatement:
            //     return checkWithStatement(node as WithStatement);
            // case SyntaxKind.SwitchStatement:
            //     return checkSwitchStatement(node as SwitchStatement);
            // case SyntaxKind.LabeledStatement:
            //     return checkLabeledStatement(node as LabeledStatement);
            // case SyntaxKind.ThrowStatement:
            //     return checkThrowStatement(node as ThrowStatement);
            // case SyntaxKind.TryStatement:
            //     return checkTryStatement(node as TryStatement);
            case SyntaxKind.VariableDeclaration:
                return checkVariableDeclaration(node as VariableDeclaration);
            case SyntaxKind.BindingElement:
                return checkBindingElement(node as BindingElement);
            // case SyntaxKind.ClassDeclaration:
            //     return checkClassDeclaration(node as ClassDeclaration);
            // case SyntaxKind.InterfaceDeclaration:
            //     return checkInterfaceDeclaration(node as InterfaceDeclaration);
            // case SyntaxKind.TypeAliasDeclaration:
            //     return checkTypeAliasDeclaration(node as TypeAliasDeclaration);
            // case SyntaxKind.EnumDeclaration:
            //     return checkEnumDeclaration(node as EnumDeclaration);
            // case SyntaxKind.ModuleDeclaration:
            //     return checkModuleDeclaration(node as ModuleDeclaration);
            // case SyntaxKind.ImportDeclaration:
            //     return checkImportDeclaration(node as ImportDeclaration);
            // case SyntaxKind.ImportEqualsDeclaration:
            //     return checkImportEqualsDeclaration(node as ImportEqualsDeclaration);
            // case SyntaxKind.ExportDeclaration:
            //     return checkExportDeclaration(node as ExportDeclaration);
            // case SyntaxKind.ExportAssignment:
            //     return checkExportAssignment(node as ExportAssignment);
            // case SyntaxKind.EmptyStatement:
            // case SyntaxKind.DebuggerStatement:
            //     checkGrammarStatementInAmbientContext(node);
            //     return;
            // case SyntaxKind.MissingDeclaration:
            //     return checkMissingDeclaration(node);
        }

        // TODO
        console.warn("Implement me - checkSourceElementWorker");
    }

    function checkExpressionStatement(node: ExpressionStatement) {
        // Grammar checking
        //checkGrammarStatementInAmbientContext(node);

        checkExpression(node.expression);
    }

    function checkIfStatement(node: IfStatement) {
        // Grammar checking
        //checkGrammarStatementInAmbientContext(node);
        const type = checkTruthinessExpression(node.expression);
        checkTestingKnownTruthyCallableOrAwaitableOrEnumMemberType(node.expression, type, node.thenStatement);
        checkSourceElement(node.thenStatement);

        if (node.thenStatement.kind === SyntaxKind.EmptyStatement) {
            error(node.thenStatement, Diagnostics.The_body_of_an_if_statement_cannot_be_the_empty_statement);
        }

        checkSourceElement(node.elseStatement);
    }

    function grammarErrorOnFirstToken(node: Node, message: DiagnosticMessage, ...args: DiagnosticArguments): boolean {
        const sourceFile = getSourceFileOfNode(node);
        if (!hasParseDiagnostics(sourceFile)) {
            const span = getSpanOfTokenAtPosition(sourceFile, node.pos);
            diagnostics.add(createFileDiagnostic(sourceFile, span.start, span.length, message, ...args));
            return true;
        }
        return false;
    }
    
    function checkReturnStatement(node: ReturnStatement) {
        console.warn("Implement me - checkReturnStatement");
        // Grammar checking
        // if (checkGrammarStatementInAmbientContext(node)) {
        //     return;
        // }

        const container = getContainingFunctionOrClassStaticBlock(node);
        // if (container && isClassStaticBlockDeclaration(container)) {
        //     grammarErrorOnFirstToken(node, Diagnostics.A_return_statement_cannot_be_used_inside_a_class_static_block);
        //     return;
        // }

        if (!container) {
            grammarErrorOnFirstToken(node, Diagnostics.A_return_statement_can_only_be_used_within_a_function_body);
            return;
        }

        const signature = getSignatureFromDeclaration(container);
        Debug.assertIsDefined(signature, "Container should have a signature");
        const returnType = getReturnTypeOfSignature(signature);
        const functionFlags = getFunctionFlags(container);
        if (strictNullChecks || node.expression || returnType.flags & TypeFlags.Never) {
            const exprType = node.expression ? checkExpressionCached(node.expression) : undefinedType;            
            if (getReturnTypeFromAnnotation(container)) {
                const unwrappedReturnType = unwrapReturnType(returnType, functionFlags) ?? returnType;
                // const unwrappedExprType = functionFlags & FunctionFlags.Async
                //     ? checkAwaitedType(exprType, /*withAlias*/ false, node, Diagnostics.The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member)
                //     : exprType;
                const unwrappedExprType = exprType;
                if (unwrappedReturnType) {
                    // If the function has a return type, but promisedType is
                    // undefined, an error will be reported in checkAsyncFunctionReturnType
                    // so we don't need to report one here.
                    checkTypeAssignableToAndOptionallyElaborate(unwrappedExprType, unwrappedReturnType, node, node.expression);
                }
            }
        }
        else if (compilerOptions.noImplicitReturns && !isUnwrappedReturnTypeUndefinedVoidOrAny(container, returnType)) {
            // The function has a return type, but the return statement doesn't have an expression.
            error(node, Diagnostics.Not_all_code_paths_return_a_value);
        }
    }
    
    function checkVariableDeclaration(node: VariableDeclaration) {
        tracing?.push(tracing.Phase.Check, "checkVariableDeclaration", { kind: node.kind, pos: node.pos, end: node.end, path: (node as TracingNode).tracingPath });
        //checkGrammarVariableDeclaration(node);
        checkVariableLikeDeclaration(node);
        tracing?.pop();
    }

    function checkBindingElement(node: BindingElement) {
        // checkGrammarBindingElement(node);
        return checkVariableLikeDeclaration(node);
    }

    function checkDoWhileStatement(node: DoWhileStatement) {
        // Grammar checking
        //checkGrammarStatementInAmbientContext(node);

        checkSourceElement(node.statement);
        checkTruthinessExpression(node.expression);
    }

    
    function checkTruthinessOfType(type: Type, node: Node) {
        if (type.flags & TypeFlags.Void) {
            error(node, Diagnostics.An_expression_of_type_void_cannot_be_tested_for_truthiness);
        }
        return type;
    }

    function checkTruthinessExpression(node: Expression, checkMode?: CheckMode) {
        return checkTruthinessOfType(checkExpression(node, checkMode), node);
    }

    function checkVariableDeclarationList(node: VariableDeclarationList) {
        const blockScopeKind = getCombinedNodeFlags(node) & NodeFlags.BlockScoped;
        
        forEach(node.declarations, checkSourceElement);
    }

    function checkFunctionDeclaration(node: FunctionDeclaration): void {
        addLazyDiagnostic(checkFunctionDeclarationDiagnostics);

        function checkFunctionDeclarationDiagnostics() {
            checkFunctionOrMethodDeclaration(node);            
            checkCollisionsForDeclarationName(node, node.name);
        }
    }

    /**
     * Indicates whether a declaration has an early-bound name or a dynamic name that can be late-bound.
     */
    function hasBindableName(node: Declaration) {
        return true;// !hasDynamicName(node) || hasLateBindableName(node);
    }
    
    function checkFunctionOrConstructorSymbol(symbol: Symbol): void {
        addLazyDiagnostic(() => checkFunctionOrConstructorSymbolWorker(symbol));
    }

    function checkFunctionOrMethodDeclaration(node: FunctionDeclaration /*| MethodDeclaration | MethodSignature*/): void {        
        checkSignatureDeclaration(node);
        const functionFlags = getFunctionFlags(node);

        // Do not use hasDynamicName here, because that returns false for well known symbols.
        // We want to perform checkComputedPropertyName for all computed properties, including
        // well known symbols.
        // if (node.name && node.name.kind === SyntaxKind.ComputedPropertyName) {
        //     // This check will account for methods in class/interface declarations,
        //     // as well as accessors in classes/object literals
        //     checkComputedPropertyName(node.name);
        // }

        if (hasBindableName(node)) {
            // first we want to check the local symbol that contain this declaration
            // - if node.localSymbol !== undefined - this is current declaration is exported and localSymbol points to the local symbol
            // - if node.localSymbol === undefined - this node is non-exported so we can just pick the result of getSymbolOfNode
            const symbol = getSymbolOfDeclaration(node);
            const localSymbol = node.localSymbol || symbol;

            // Since the javascript won't do semantic analysis like typescript,
            // if the javascript file comes before the typescript file and both contain same name functions,
            // checkFunctionOrConstructorSymbol wouldn't be called if we didnt ignore javascript function.
            const firstDeclaration = localSymbol.declarations?.find(
                // Get first non javascript function declaration
                declaration => declaration.kind === node.kind,// && !(declaration.flags & NodeFlags.JavaScriptFile),
            );

            // Only type check the symbol once
            if (node === firstDeclaration) {
                checkFunctionOrConstructorSymbol(localSymbol);
            }

            if (symbol.parent) {
                // run check on export symbol to check that modifiers agree across all exported declarations
                checkFunctionOrConstructorSymbol(symbol);
            }
        }

        const body = node.body;// TODO: node.kind === SyntaxKind.MethodSignature ? undefined : node.body;
        checkSourceElement(body);
        checkAllCodePathsInNonVoidFunctionReturnOrThrow(node, getReturnTypeFromAnnotation(node));

        addLazyDiagnostic(checkFunctionOrMethodDeclarationDiagnostics);

        // A js function declaration can have a @type tag instead of a return type node, but that type must have a call signature
        // if (isInJSFile(node)) {
        //     const typeTag = getJSDocTypeTag(node);
        //     if (typeTag && typeTag.typeExpression && !getContextualCallSignature(getTypeFromTypeNode(typeTag.typeExpression), node)) {
        //         error(typeTag.typeExpression.type, Diagnostics.The_type_of_a_function_declaration_must_match_the_function_s_signature);
        //     }
        // }

        function checkFunctionOrMethodDeclarationDiagnostics() {
            if (!getEffectiveReturnTypeNode(node)) {
                // Report an implicit any error if there is no body, no explicit return type, and node is not a private method
                // in an ambient context
                if (nodeIsMissing(body)) {// && !isPrivateWithinAmbient(node)) {
                    reportImplicitAny(node, anyType);
                }

                if (functionFlags & FunctionFlags.Generator && nodeIsPresent(body)) {
                    // A generator with a body and no type annotation can still cause errors. It can error if the
                    // yielded values have no common supertype, or it can give an implicit any error if it has no
                    // yielded values. The only way to trigger these errors is to try checking its return type.
                    getReturnTypeOfSignature(getSignatureFromDeclaration(node));
                }
            }
        }
    }

    function getSignatureFromDeclaration(declaration: SignatureDeclaration | JSDocSignature): Signature {
        const links = getNodeLinks(declaration);
        if (!links.resolvedSignature) {
            //console.warn("Implement me - getSignatureFromDeclaration");
            const parameters: Symbol[] = [];
            let flags = SignatureFlags.None;
            let minArgumentCount = 0;
            let thisParameter: Symbol | undefined;
            let thisTag: undefined;//TODO JSDocThisTag | undefined = isInJSFile(declaration) ? getJSDocThisTag(declaration) : undefined;
            let hasThisParameter = false;
            const iife = getImmediatelyInvokedFunctionExpression(declaration);
            const isJSConstructSignature = false;//isJSDocConstructSignature(declaration);
            const isUntypedSignatureInJSFile = false;//!iife &&
                // isInJSFile(declaration) &&
                // isValueSignatureDeclaration(declaration) &&
                // !hasJSDocParameterTags(declaration) &&
                // !getJSDocType(declaration);
            if (isUntypedSignatureInJSFile) {
                flags |= SignatureFlags.IsUntypedSignatureInJSFile;
            }

            // If this is a JSDoc construct signature, then skip the first parameter in the
            // parameter list.  The first parameter represents the return type of the construct
            // signature.
            for (let i = isJSConstructSignature ? 1 : 0; i < declaration.parameters.length; i++) {
                const param = declaration.parameters[i];
                // if (isInJSFile(param) && isJSDocThisTag(param)) {
                //     thisTag = param;
                //     continue;
                // }

                let paramSymbol = param.symbol;
                const type = isJSDocParameterTag(param) ? (param.typeExpression && param.typeExpression.type) : param.type;
                // Include parameter symbol instead of property symbol in the signature
                if (paramSymbol && !!(paramSymbol.flags & SymbolFlags.Property) && !isBindingPattern(param.name)) {
                    const resolvedSymbol = resolveName(param, paramSymbol.name, SymbolFlags.Value, /*nameNotFoundMessage*/ undefined, /*isUse*/ false);
                    paramSymbol = resolvedSymbol!;
                }
                if (i === 0 && paramSymbol.name === InternalSymbolName.This) {
                    hasThisParameter = true;
                    thisParameter = param.symbol;
                }
                else {
                    parameters.push(paramSymbol);
                }

                if (type && type.kind === SyntaxKind.LiteralType) {
                    flags |= SignatureFlags.HasLiteralTypes;
                }

                // Record a new minimum argument count if this is not an optional parameter                
                minArgumentCount = parameters.length;                
            }

            // if (thisTag && thisTag.typeExpression) {
            //     thisParameter = createSymbolWithType(createSymbol(SymbolFlags.FunctionScopedVariable, InternalSymbolName.This), getTypeFromTypeNode(thisTag.typeExpression));
            // }

            const hostDeclaration = declaration;// isJSDocSignature(declaration) ? getEffectiveJSDocHost(declaration) : declaration;
            const classType = undefined;
            // const classType = hostDeclaration && isConstructorDeclaration(hostDeclaration) ?
            //     getDeclaredTypeOfClassOrInterface(getMergedSymbol((hostDeclaration.parent as ClassDeclaration).symbol))
            //     : undefined;
            const typeParameters = classType ? classType.localTypeParameters : undefined;//getTypeParametersFromDeclaration(declaration);
            if (hasRestParameter(declaration) || isInJSFile(declaration) && maybeAddJsSyntheticRestParameter(declaration, parameters)) {
                flags |= SignatureFlags.HasRestParameter;
            }
            // if (
            //     isConstructorTypeNode(declaration) && hasSyntacticModifier(declaration, ModifierFlags.Abstract) ||
            //     isConstructorDeclaration(declaration) && hasSyntacticModifier(declaration.parent, ModifierFlags.Abstract)
            // ) {
            //     flags |= SignatureFlags.Abstract;
            // }
            links.resolvedSignature = createSignature(declaration, typeParameters, thisParameter, parameters, /*resolvedReturnType*/ undefined, /*resolvedTypePredicate*/ undefined, minArgumentCount, flags);
        }
        return links.resolvedSignature;
    }

    /**
     * A JS function gets a synthetic rest parameter if it references `arguments` AND:
     * 1. It has no parameters but at least one `@param` with a type that starts with `...`
     * OR
     * 2. It has at least one parameter, and the last parameter has a matching `@param` with a type that starts with `...`
     */
    function maybeAddJsSyntheticRestParameter(declaration: SignatureDeclaration | JSDocSignature, parameters: Symbol[]): boolean {
        return false;
        console.warn("Implement me - maybeAddJsSyntheticRestParameter");
        // if (isJSDocSignature(declaration) || !containsArgumentsReference(declaration)) {
        //     return false;
        // }
        // const lastParam = lastOrUndefined(declaration.parameters);
        // const lastParamTags = lastParam ? getJSDocParameterTags(lastParam) : getJSDocTags(declaration).filter(isJSDocParameterTag);
        // const lastParamVariadicType = firstDefined(lastParamTags, p => p.typeExpression && isJSDocVariadicType(p.typeExpression.type) ? p.typeExpression.type : undefined);

        // const syntheticArgsSymbol = createSymbol(SymbolFlags.Variable, "args" as string, CheckFlags.RestParameter);
        // if (lastParamVariadicType) {
        //     // Parameter has effective annotation, lock in type
        //     syntheticArgsSymbol.links.type = createArrayType(getTypeFromTypeNode(lastParamVariadicType.type));
        // }
        // else {
        //     // Parameter has no annotation
        //     // By using a `DeferredType` symbol, we allow the type of this rest arg to be overriden by contextual type assignment so long as its type hasn't been
        //     // cached by `getTypeOfSymbol` yet.
        //     syntheticArgsSymbol.links.checkFlags |= CheckFlags.DeferredType;
        //     syntheticArgsSymbol.links.deferralParent = neverType;
        //     syntheticArgsSymbol.links.deferralConstituents = [anyArrayType];
        //     syntheticArgsSymbol.links.deferralWriteConstituents = [anyArrayType];
        // }
        // if (lastParamVariadicType) {
        //     // Replace the last parameter with a rest parameter.
        //     parameters.pop();
        // }
        // parameters.push(syntheticArgsSymbol);
        // return true;
    }
    
    function reportImplicitAny(declaration: Declaration, type: Type, wideningKind?: WideningKind) {
        console.warn("Implement me - reportImplicitAny");
    }

    function getReturnTypeFromAnnotation(declaration: SignatureDeclaration | JSDocSignature) {        
        const typeNode = getEffectiveReturnTypeNode(declaration);
        if (isJSDocSignature(declaration)) {
            const root = getJSDocRoot(declaration);            
        }        
        if (typeNode) {
            return getTypeFromTypeNode(typeNode);
        }        
        return getReturnTypeOfTypeTag(declaration);
    }

    function getReturnTypeOfTypeTag(node: SignatureDeclaration | JSDocSignature) {
        const signature = getSignatureOfTypeTag(node);
        return signature && getReturnTypeOfSignature(signature);
    }

    function getSignatureOfTypeTag(node: SignatureDeclaration | JSDocSignature) {
        // should be attached to a function declaration or expression
        if (!isFunctionLikeDeclaration(node)) return undefined;
        console.warn("Implement me - getSignatureOfTypeTag");
        // const typeTag = getJSDocTypeTag(node);
        // return typeTag?.typeExpression && getSingleCallSignature(getTypeFromTypeNode(typeTag.typeExpression));
    }

    function getTypeFromTypeNode(node: TypeNode): Type {
        return getConditionalFlowTypeOfType(getTypeFromTypeNodeWorker(node), node);
    }

    function getRegularTypeOfLiteralType(type: Type): Type {
        return type.flags & TypeFlags.Freshable ? (type as FreshableType).regularType :
            type.flags & TypeFlags.Union ? ((type as UnionType).regularType || ((type as UnionType).regularType = mapType(type, getRegularTypeOfLiteralType) as UnionType)) :
            type;
    }

    function getTypeFromLiteralTypeNode(node: LiteralTypeNode): Type {
        // if (node.literal.kind === SyntaxKind.NullKeyword) {
        //     return nullType;
        // }
        const links = getNodeLinks(node);
        if (!links.resolvedType) {
            links.resolvedType = getRegularTypeOfLiteralType(checkExpression(node.literal));
        }
        return links.resolvedType;
    }

    function getTypeFromTypeNodeWorker(node: TypeNode): Type {
        switch (node.kind) {
            //case SyntaxKind.AnyKeyword:
            case SyntaxKind.JSDocAllType:
            case SyntaxKind.JSDocUnknownType:
                return anyType;
            // case SyntaxKind.UnknownKeyword:
            //     return unknownType;
            case SyntaxKind.StringKeyword:
                return stringType;
            case SyntaxKind.IntKeyword:
                return intType;
            case SyntaxKind.FloatKeyword:
                return floatType;
            // case SyntaxKind.BooleanKeyword:
            //     return booleanType;
            // case SyntaxKind.SymbolKeyword:
            //     return esSymbolType;
            // case SyntaxKind.VoidKeyword:
            //     return voidType;
            // case SyntaxKind.UndefinedKeyword:
            //     return undefinedType;
            // case SyntaxKind.NullKeyword as TypeNodeSyntaxKind:
            //     // TODO(rbuckton): `NullKeyword` is no longer a `TypeNode`, but we defensively allow it here because of incorrect casts in the Language Service.
            //     return nullType;
            // case SyntaxKind.NeverKeyword:
            //     return neverType;
            // case SyntaxKind.ObjectKeyword:
            //     return node.flags & NodeFlags.JavaScriptFile && !noImplicitAny ? anyType : nonPrimitiveType;
            // case SyntaxKind.IntrinsicKeyword:
            //     return intrinsicMarkerType;
            // case SyntaxKind.ThisType:
            // case SyntaxKind.ThisKeyword as TypeNodeSyntaxKind:
            //     // TODO(rbuckton): `ThisKeyword` is no longer a `TypeNode`, but we defensively allow it here because of incorrect casts in the Language Service and because of `isPartOfTypeNode`.
            //     return getTypeFromThisTypeNode(node as ThisExpression | ThisTypeNode);
            case SyntaxKind.LiteralType:
                return getTypeFromLiteralTypeNode(node as LiteralTypeNode);
            // case SyntaxKind.ArrayType:            
            //     return getTypeFromArrayOrTupleTypeNode(node as ArrayTypeNode | TupleTypeNode);            
            // case SyntaxKind.UnionType:
            //     return getTypeFromUnionTypeNode(node as UnionTypeNode);            
            // case SyntaxKind.JSDocNullableType:
            //     return getTypeFromJSDocNullableTypeNode(node as JSDocNullableType);
            // case SyntaxKind.JSDocOptionalType:
            //     return addOptionality(getTypeFromTypeNode((node as JSDocOptionalType).type));            
            // case SyntaxKind.ParenthesizedType:
            // case SyntaxKind.JSDocNonNullableType:
            // case SyntaxKind.JSDocTypeExpression:
            //     return getTypeFromTypeNode((node as ParenthesizedTypeNode | JSDocTypeReferencingNode | JSDocTypeExpression | NamedTupleMember).type);            
            // case SyntaxKind.JSDocVariadicType:
            //     return getTypeFromJSDocVariadicType(node as JSDocVariadicType);
            // case SyntaxKind.FunctionType:            
            // case SyntaxKind.TypeLiteral:
            // case SyntaxKind.JSDocTypeLiteral:
            // case SyntaxKind.JSDocFunctionType:
            // case SyntaxKind.JSDocSignature:
            //     return getTypeFromTypeLiteralOrFunctionOrConstructorTypeNode(node as TypeLiteralNode | FunctionOrConstructorTypeNode | JSDocTypeLiteral | JSDocFunctionType | JSDocSignature);
            // case SyntaxKind.TypeOperator:
            //     return getTypeFromTypeOperatorNode(node as TypeOperatorNode);
            // case SyntaxKind.IndexedAccessType:
            //     return getTypeFromIndexedAccessTypeNode(node as IndexedAccessTypeNode);
            // case SyntaxKind.MappedType:
            //     return getTypeFromMappedTypeNode(node as MappedTypeNode);
            // case SyntaxKind.ConditionalType:
            //     return getTypeFromConditionalTypeNode(node as ConditionalTypeNode);
            // case SyntaxKind.InferType:
            //     return getTypeFromInferTypeNode(node as InferTypeNode);            
            // case SyntaxKind.ImportType:
            //     return getTypeFromImportTypeNode(node as ImportTypeNode);
            // This function assumes that an identifier, qualified name, or property access expression is a type expression
            // Callers should first ensure this by calling `isPartOfTypeNode`
            // TODO(rbuckton): These aren't valid TypeNodes, but we treat them as such because of `isPartOfTypeNode`, which returns `true` for things that aren't `TypeNode`s.
            case SyntaxKind.Identifier as TypeNodeSyntaxKind:
            //case SyntaxKind.QualifiedName as TypeNodeSyntaxKind:
            case SyntaxKind.PropertyAccessExpression as TypeNodeSyntaxKind:
                const symbol = getSymbolAtLocation(node);
                return symbol ? getDeclaredTypeOfSymbol(symbol) : errorType;
            default:
                console.warn("Implement me - getTypeFromTypeNodeWorker " + Debug.formatSyntaxKind(node.kind));
                return errorType;
        }
    }

    function getDeclaredTypeOfSymbol(symbol: Symbol): Type {
        return tryGetDeclaredTypeOfSymbol(symbol) || errorType;
    }

    function tryGetDeclaredTypeOfSymbol(symbol: Symbol): Type | undefined {
        // if (symbol.flags & (SymbolFlags.Class | SymbolFlags.Interface)) {
        //     return getDeclaredTypeOfClassOrInterface(symbol);
        // }
        // if (symbol.flags & SymbolFlags.TypeAlias) {
        //     return getDeclaredTypeOfTypeAlias(symbol);
        // }
        // if (symbol.flags & SymbolFlags.TypeParameter) {
        //     return getDeclaredTypeOfTypeParameter(symbol);
        // }
        // if (symbol.flags & SymbolFlags.Enum) {
        //     return getDeclaredTypeOfEnum(symbol);
        // }
        // if (symbol.flags & SymbolFlags.EnumMember) {
        //     return getDeclaredTypeOfEnumMember(symbol);
        // }
        if (symbol.flags & SymbolFlags.Alias) {
            return getDeclaredTypeOfAlias(symbol);
        }
        console.warn("Implement me - tryGetDeclaredTypeOfSymbol " + Debug.formatSymbolFlags(symbol.flags));
        return undefined;
    }

    function getDeclaredTypeOfAlias(symbol: Symbol): Type {
        const links = getSymbolLinks(symbol);
        return links.declaredType || (links.declaredType = getDeclaredTypeOfSymbol(resolveAlias(symbol)));
    }

    function getConditionalFlowTypeOfType(type: Type, node: Node) {
        // not needed in LPC?

        // let constraints: Type[] | undefined;
        // let covariant = true;
        // while (node && !isStatement(node) && node.kind !== SyntaxKind.JSDoc) {
        //     const parent = node.parent;
        //     // only consider variance flipped by parameter locations - `keyof` types would usually be considered variance inverting, but
        //     // often get used in indexed accesses where they behave sortof invariantly, but our checking is lax
        //     if (parent.kind === SyntaxKind.Parameter) {
        //         covariant = !covariant;
        //     }
        //     // Always substitute on type parameters, regardless of variance, since even
        //     // in contravariant positions, they may rely on substituted constraints to be valid
        //     // if ((covariant || type.flags & TypeFlags.TypeVariable) && parent.kind === SyntaxKind.ConditionalType && node === (parent as ConditionalTypeNode).trueType) {
        //     //     const constraint = getImpliedConstraint(type, (parent as ConditionalTypeNode).checkType, (parent as ConditionalTypeNode).extendsType);
        //     //     if (constraint) {
        //     //         constraints = append(constraints, constraint);
        //     //     }
        //     // }
        //     // Given a homomorphic mapped type { [K in keyof T]: XXX }, where T is constrained to an array or tuple type, in the
        //     // template type XXX, K has an added constraint of number | `${number}`.
        //     // else if (type.flags & TypeFlags.TypeParameter && parent.kind === SyntaxKind.MappedType && !(parent as MappedTypeNode).nameType && node === (parent as MappedTypeNode).type) {
        //     //     const mappedType = getTypeFromTypeNode(parent as TypeNode) as MappedType;
        //     //     if (getTypeParameterFromMappedType(mappedType) === getActualTypeVariable(type)) {
        //     //         const typeParameter = getHomomorphicTypeVariable(mappedType);
        //     //         if (typeParameter) {
        //     //             const constraint = getConstraintOfTypeParameter(typeParameter);
        //     //             if (constraint && everyType(constraint, isArrayOrTupleType)) {
        //     //                 constraints = append(constraints, getUnionType([numberType, numericStringType]));
        //     //             }
        //     //         }
        //     //     }
        //     // }
        //     node = parent;
        // }
        return type;
    }

    function unwrapReturnType(returnType: Type, functionFlags: FunctionFlags) {        
        const isAsync = !!(functionFlags & FunctionFlags.Async);        
        return isAsync ? getAwaitedTypeNoAlias(returnType) || errorType : returnType;
    }

    function getAwaitedTypeNoAlias(type: Type, errorNode?: Node, diagnosticMessage?: DiagnosticMessage, ...args: DiagnosticArguments): Type | undefined {
        console.warn("Implement me - getAwaitedTypeNoAlias");
        return type;
    }
    
    // Return true if type might be of the given kind. A union or intersection type might be of a given
    // kind if at least one constituent type is of the given kind.
    function maybeTypeOfKind(type: Type, kind: TypeFlags): boolean {
        if (type.flags & kind) {
            return true;
        }
        if (type.flags & TypeFlags.UnionOrIntersection) {
            const types = (type as UnionOrIntersectionType).types;
            for (const t of types) {
                if (maybeTypeOfKind(t, kind)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    function functionHasImplicitReturn(func: FunctionLikeDeclaration) {
        return func.endFlowNode && isReachableFlowNode(func.endFlowNode);
    }

    /**
     * TypeScript Specification 1.0 (6.3) - July 2014
     *   An explicitly typed function whose return type isn't the Void type,
     *   the Any type, or a union type containing the Void or Any type as a constituent
     *   must have at least one return statement somewhere in its body.
     *   An exception to this rule is if the function implementation consists of a single 'throw' statement.
     *
     * @param returnType - return type of the function, can be undefined if return type is not explicitly specified
     */
    function checkAllCodePathsInNonVoidFunctionReturnOrThrow(func: FunctionLikeDeclaration /*| MethodSignature*/, returnType: Type | undefined) {
        addLazyDiagnostic(checkAllCodePathsInNonVoidFunctionReturnOrThrowDiagnostics);
        return;

        function checkAllCodePathsInNonVoidFunctionReturnOrThrowDiagnostics(): void {
            const functionFlags = getFunctionFlags(func);
            const type = returnType && unwrapReturnType(returnType, functionFlags);

            // Functions with an explicitly specified return type that includes `void` or is exactly `any` or `undefined` don't
            // need any return statements.
            if (type && (maybeTypeOfKind(type, TypeFlags.Void) || type.flags & (TypeFlags.Any | TypeFlags.Undefined))) {
                return;
            }

            // If all we have is a function signature, or an arrow function with an expression body, then there is nothing to check.
            // also if HasImplicitReturn flag is not set this means that all codepaths in function body end with return or throw
            if (/*func.kind === SyntaxKind.MethodSignature ||*/ nodeIsMissing(func.body) || func.body!.kind !== SyntaxKind.Block || !functionHasImplicitReturn(func)) {
                return;
            }

            const hasExplicitReturn = func.flags & NodeFlags.HasExplicitReturn;
            const errorNode = getEffectiveReturnTypeNode(func) || func;

            if (type && type.flags & TypeFlags.Never) {
                error(errorNode, Diagnostics.A_function_returning_never_cannot_have_a_reachable_end_point);
            }
            else if (type && !hasExplicitReturn) {
                // minimal check: function has syntactic return type annotation and no explicit return statements in the body
                // this function does not conform to the specification.
                error(errorNode, Diagnostics.A_function_whose_declared_type_is_neither_undefined_void_nor_any_must_return_a_value);
            }
            else if (type && strictNullChecks && !isTypeAssignableTo(undefinedType, type)) {
                error(errorNode, Diagnostics.Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined);
            }
            else if (compilerOptions.noImplicitReturns) {
                if (!type) {
                    // If return type annotation is omitted check if function has any explicit return statements.
                    // If it does not have any - its inferred return type is void - don't do any checks.
                    // Otherwise get inferred return type from function body and report error only if it is not void / anytype
                    if (!hasExplicitReturn) {
                        return;
                    }
                    const inferredReturnType = getReturnTypeOfSignature(getSignatureFromDeclaration(func));
                    if (isUnwrappedReturnTypeUndefinedVoidOrAny(func, inferredReturnType)) {
                        return;
                    }
                }
                error(errorNode, Diagnostics.Not_all_code_paths_return_a_value);
            }
        }
    }

    function isUnwrappedReturnTypeUndefinedVoidOrAny(func: SignatureDeclaration, returnType: Type): boolean {
        const type = unwrapReturnType(returnType, getFunctionFlags(func));
        return !!(type && (maybeTypeOfKind(type, TypeFlags.Void) || type.flags & (TypeFlags.Any | TypeFlags.Undefined)));
    }
    
    function hasParseDiagnostics(sourceFile: SourceFile): boolean {
        return sourceFile.parseDiagnostics.length > 0;
    }

    function grammarErrorOnNode(node: Node, message: DiagnosticMessage, ...args: DiagnosticArguments): boolean {
        const sourceFile = getSourceFileOfNode(node);
        if (!hasParseDiagnostics(sourceFile)) {
            diagnostics.add(createDiagnosticForNode(node, message, ...args));
            return true;
        }
        return false;
    }

    function checkGrammarIndexSignatureParameters(node: SignatureDeclaration): boolean {
        console.warn("Implement me - checkGrammarIndexSignatureParameters");
        // const parameter = node.parameters[0];
        // if (node.parameters.length !== 1) {
        //     if (parameter) {
        //         return grammarErrorOnNode(parameter.name, Diagnostics.An_index_signature_must_have_exactly_one_parameter);
        //     }
        //     else {
        //         return grammarErrorOnNode(node, Diagnostics.An_index_signature_must_have_exactly_one_parameter);
        //     }
        // }
        // //checkGrammarForDisallowedTrailingComma(node.parameters, Diagnostics.An_index_signature_cannot_have_a_trailing_comma);
        // if (parameter.dotDotDotToken) {
        //     return grammarErrorOnNode(parameter.dotDotDotToken, Diagnostics.An_index_signature_cannot_have_a_rest_parameter);
        // }
        // if (hasEffectiveModifiers(parameter)) {
        //     return grammarErrorOnNode(parameter.name, Diagnostics.An_index_signature_parameter_cannot_have_an_accessibility_modifier);
        // }
        // if (parameter.questionToken) {
        //     return grammarErrorOnNode(parameter.questionToken, Diagnostics.An_index_signature_parameter_cannot_have_a_question_mark);
        // }
        // if (parameter.initializer) {
        //     return grammarErrorOnNode(parameter.name, Diagnostics.An_index_signature_parameter_cannot_have_an_initializer);
        // }
        // if (!parameter.type) {
        //     return grammarErrorOnNode(parameter.name, Diagnostics.An_index_signature_parameter_must_have_a_type_annotation);
        // }
        // const type = getTypeFromTypeNode(parameter.type);
        // if (someType(type, t => !!(t.flags & TypeFlags.StringOrNumberLiteralOrUnique)) || isGenericType(type)) {
        //     return grammarErrorOnNode(parameter.name, Diagnostics.An_index_signature_parameter_type_cannot_be_a_literal_type_or_generic_type_Consider_using_a_mapped_object_type_instead);
        // }
        // if (!everyType(type, isValidIndexKeyType)) {
        //     return grammarErrorOnNode(parameter.name, Diagnostics.An_index_signature_parameter_type_must_be_string_number_symbol_or_a_template_literal_type);
        // }
        // if (!node.type) {
        //     return grammarErrorOnNode(node, Diagnostics.An_index_signature_must_have_a_type_annotation);
        // }
        return false;
    }

    function checkGrammarIndexSignature(node: IndexSignatureDeclaration) {
        // Prevent cascading error by short-circuit
        return checkGrammarModifiers(node) || checkGrammarIndexSignatureParameters(node);
    }

    function checkGrammarFunctionLikeDeclaration(node: FunctionLikeDeclaration /*| MethodSignature*/): boolean {
        // Prevent cascading error by short-circuit
        const file = getSourceFileOfNode(node);
        console.warn("Implement me - checkGrammarFunctionLikeDeclaration");
        return false;
        // return checkGrammarModifiers(node) ||
        //     checkGrammarTypeParameterList(node.typeParameters, file) ||
        //     checkGrammarParameterList(node.parameters) ||
        //     checkGrammarArrowFunction(node, file) ||
        //     (isFunctionLikeDeclaration(node) && checkGrammarForUseStrictSimpleParameterList(node));
    }

    function checkSignatureDeclaration(node: SignatureDeclaration) {
        // Grammar checking
        if (node.kind === SyntaxKind.IndexSignature) {
            checkGrammarIndexSignature(node);
        }
        // TODO (yuisu): Remove this check in else-if when SyntaxKind.Construct is moved and ambient context is handled
        else if (
            node.kind === SyntaxKind.FunctionDeclaration
            // node.kind === SyntaxKind.FunctionType || node.kind === SyntaxKind.FunctionDeclaration || node.kind === SyntaxKind.ConstructorType ||
            // node.kind === SyntaxKind.CallSignature || node.kind === SyntaxKind.Constructor ||
            // node.kind === SyntaxKind.ConstructSignature
        ) {
            checkGrammarFunctionLikeDeclaration(node as FunctionLikeDeclaration);
        }

        const functionFlags = getFunctionFlags(node as FunctionLikeDeclaration);
                
        checkUnmatchedJSDocParameters(node);

        forEach(node.parameters, checkParameter);

        // TODO(rbuckton): Should we start checking JSDoc types?
        if (node.type) {
            checkSourceElement(node.type);
        }

        addLazyDiagnostic(checkSignatureDeclarationDiagnostics);

        function checkSignatureDeclarationDiagnostics() {
            //checkCollisionWithArgumentsInGeneratedCode(node);

            let returnTypeNode = getEffectiveReturnTypeNode(node);
            let returnTypeErrorLocation = returnTypeNode;

            // TODO
            // if (isInJSFile(node)) {
            //     const typeTag = getJSDocTypeTag(node);
            //     if (typeTag && typeTag.typeExpression && isTypeReferenceNode(typeTag.typeExpression.type)) {
            //         const signature = getSingleCallSignature(getTypeFromTypeNode(typeTag.typeExpression));
            //         if (signature && signature.declaration) {
            //             returnTypeNode = getEffectiveReturnTypeNode(signature.declaration);
            //             returnTypeErrorLocation = typeTag.typeExpression.type;
            //         }
            //     }
            // }

            if (returnTypeNode && returnTypeErrorLocation) {
                const functionFlags = getFunctionFlags(node as FunctionDeclaration);
                // if ((functionFlags & FunctionFlags.AsyncGenerator) === FunctionFlags.Async) {
                //     checkAsyncFunctionReturnType(node as FunctionLikeDeclaration, returnTypeNode, returnTypeErrorLocation);
                // }
            }
            if (node.kind !== SyntaxKind.IndexSignature && (node as Node).kind !== SyntaxKind.JSDocFunctionType) {
                registerForUnusedIdentifiersCheck(node);
            }
        }
    }

    // Check variable, parameter, or property declaration
    function checkVariableLikeDeclaration(node: ParameterDeclaration | PropertyDeclaration | /*PropertySignature |*/ VariableDeclaration | BindingElement) {        
        if (!isBindingElement(node)) {
            checkSourceElement(node.type);
        }

        // JSDoc `function(string, string): string` syntax results in parameters with no name
        if (!node.name) {
            return;
        }

        // For a computed property, just check the initializer and exit
        // Do not use hasDynamicName here, because that returns false for well known symbols.
        // We want to perform checkComputedPropertyName for all computed properties, including
        // well known symbols.
        // if (node.name.kind === SyntaxKind.ComputedPropertyName) {
        //     checkComputedPropertyName(node.name);
        //     if (hasOnlyExpressionInitializer(node) && node.initializer) {
        //         checkExpressionCached(node.initializer);
        //     }
        // }

        // if (isBindingElement(node)) {
        //     if (
        //         node.propertyName &&
        //         isIdentifier(node.name) &&
        //         isPartOfParameterDeclaration(node) &&
        //         nodeIsMissing((getContainingFunction(node) as FunctionLikeDeclaration).body)
        //     ) {
        //         // type F = ({a: string}) => void;
        //         //               ^^^^^^
        //         // variable renaming in function type notation is confusing,
        //         // so we forbid it even if noUnusedLocals is not enabled
        //         //potentialUnusedRenamedBindingElementsInTypes.push(node);
        //         return;
        //     }

        //     // if (isObjectBindingPattern(node.parent) && node.dotDotDotToken && languageVersion < LanguageFeatureMinimumTarget.ObjectSpreadRest) {
        //     //     checkExternalEmitHelpers(node, ExternalEmitHelpers.Rest);
        //     // }
        //     // check computed properties inside property names of binding elements
        //     // if (node.propertyName && node.propertyName.kind === SyntaxKind.ComputedPropertyName) {
        //     //     checkComputedPropertyName(node.propertyName);
        //     // }

        //     // check private/protected variable access
        //     const parent = node.parent.parent;
        //     const parentCheckMode = node.dotDotDotToken ? CheckMode.RestBindingElement : CheckMode.Normal;
        //     const parentType = getTypeForBindingElementParent(parent, parentCheckMode);
        //     const name = node.propertyName || node.name;
        //     if (parentType && !isBindingPattern(name)) {
        //         const exprType = getLiteralTypeFromPropertyName(name);
        //         if (isTypeUsableAsPropertyName(exprType)) {
        //             const nameText = getPropertyNameFromType(exprType);
        //             const property = getPropertyOfType(parentType, nameText);
        //             if (property) {
        //                 markPropertyAsReferenced(property, /*nodeForCheckWriteOnly*/ undefined, /*isSelfTypeAccess*/ false); // A destructuring is never a write-only reference.
        //                 checkPropertyAccessibility(node, !!parent.initializer && parent.initializer.kind === SyntaxKind.SuperKeyword, /*writing*/ false, parentType, property);
        //             }
        //         }
        //     }
        // }

        // For a binding pattern, check contained binding elements
        // if (isBindingPattern(node.name)) {
        //     if (node.name.kind === SyntaxKind.ArrayBindingPattern && languageVersion < LanguageFeatureMinimumTarget.BindingPatterns && compilerOptions.downlevelIteration) {
        //         checkExternalEmitHelpers(node, ExternalEmitHelpers.Read);
        //     }

        //     forEach(node.name.elements, checkSourceElement);
        // }
        // For a parameter declaration with an initializer, error and exit if the containing function doesn't have a body
        // if (node.initializer && isPartOfParameterDeclaration(node) && nodeIsMissing((getContainingFunction(node) as FunctionLikeDeclaration).body)) {
        //     error(node, Diagnostics.A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation);
        //     return;
        // }
        // For a binding pattern, validate the initializer and exit
        if (isBindingPattern(node.name)) {
            if (isInAmbientOrTypeNode(node)) {
                return;
            }
            const needCheckInitializer = hasOnlyExpressionInitializer(node) && node.initializer && node.parent.parent.kind !== SyntaxKind.ForEachStatement;
            // const needCheckWidenedType = false;//!some(node.name.elements, not(isOmittedExpression));
            // if (needCheckInitializer || needCheckWidenedType) {
            //     // Don't validate for-in initializer as it is already an error
            //     const widenedType = getWidenedTypeForVariableLikeDeclaration(node);
            //     if (needCheckInitializer) {
            //         const initializerType = checkExpressionCached(node.initializer);
            //         if (strictNullChecks && needCheckWidenedType) {
            //             checkNonNullNonVoidType(initializerType, node);
            //         }
            //         else {
            //             checkTypeAssignableToAndOptionallyElaborate(initializerType, getWidenedTypeForVariableLikeDeclaration(node), node, node.initializer);
            //         }
            //     }
            //     // check the binding pattern with empty elements
            //     if (needCheckWidenedType) {
            //         if (isArrayBindingPattern(node.name)) {
            //             checkIteratedTypeOrElementType(IterationUse.Destructuring, widenedType, undefinedType, node);
            //         }
            //         else if (strictNullChecks) {
            //             checkNonNullNonVoidType(widenedType, node);
            //         }
            //     }
            // }
            return;
        }
        // For a commonjs `const x = require`, validate the alias and exit
        const symbol = getSymbolOfDeclaration(node);
        if (symbol.flags & SymbolFlags.Alias && (isVariableDeclarationInitializedToBareOrAccessedRequire(node) || isBindingElementOfBareOrAccessedRequire(node))) {
            checkAliasSymbol(node);
            return;
        }

        const type = convertAutoToAny(getTypeOfSymbol(symbol));
        if (node === symbol.valueDeclaration) {
            // Node is the primary declaration of the symbol, just validate the initializer
            // Don't validate for-in initializer as it is already an error
            const initializer = hasOnlyExpressionInitializer(node) && getEffectiveInitializer(node);
            if (initializer) {
                const isJSObjectLiteralInitializer = isInJSFile(node) &&
                    isObjectLiteralExpression(initializer) &&
                    (initializer.properties.length === 0) &&
                    !!symbol.exports?.size;
                if (!isJSObjectLiteralInitializer && node.parent.parent.kind !== SyntaxKind.ForEachStatement) {
                    const initializerType = checkExpressionCached(initializer);
                    checkTypeAssignableToAndOptionallyElaborate(initializerType, type, node, initializer, /*headMessage*/ undefined);
                    const blockScopeKind = getCombinedNodeFlagsCached(node) & NodeFlags.BlockScoped;
                    // if (blockScopeKind === NodeFlags.AwaitUsing) {
                    //     const globalAsyncDisposableType = getGlobalAsyncDisposableType(/*reportErrors*/ true);
                    //     const globalDisposableType = getGlobalDisposableType(/*reportErrors*/ true);
                    //     if (globalAsyncDisposableType !== emptyObjectType && globalDisposableType !== emptyObjectType) {
                    //         const optionalDisposableType = getUnionType([globalAsyncDisposableType, globalDisposableType, nullType, undefinedType]);
                    //         checkTypeAssignableTo(initializerType, optionalDisposableType, initializer, Diagnostics.The_initializer_of_an_await_using_declaration_must_be_either_an_object_with_a_Symbol_asyncDispose_or_Symbol_dispose_method_or_be_null_or_undefined);
                    //     }
                    // }                    
                }
            }
            if (symbol.declarations && symbol.declarations.length > 1) {
                if (some(symbol.declarations, d => d !== node && isVariableLike(d) && !areDeclarationFlagsIdentical(d, node))) {
                    error(node.name, Diagnostics.All_declarations_of_0_must_have_identical_modifiers, declarationNameToString(node.name));
                }
            }
        }
        else {
            // Node is a secondary declaration, check that type is identical to primary declaration and check that
            // initializer is consistent with type associated with the node
            const declarationType = convertAutoToAny(getWidenedTypeForVariableLikeDeclaration(node));

            if (
                !isErrorType(type) && !isErrorType(declarationType) &&
                !isTypeIdenticalTo(type, declarationType) &&
                !(symbol.flags & SymbolFlags.Assignment)
            ) {
                errorNextVariableOrPropertyDeclarationMustHaveSameType(symbol.valueDeclaration, type, node, declarationType);
            }
            if (hasOnlyExpressionInitializer(node) && node.initializer) {
                checkTypeAssignableToAndOptionallyElaborate(checkExpressionCached(node.initializer), declarationType, node, node.initializer, /*headMessage*/ undefined);
            }
            if (symbol.valueDeclaration && !areDeclarationFlagsIdentical(node, symbol.valueDeclaration)) {
                error(node.name, Diagnostics.All_declarations_of_0_must_have_identical_modifiers, declarationNameToString(node.name));
            }
        }
        if (node.kind !== SyntaxKind.PropertyDeclaration) {
            // We know we don't have a binding pattern or computed name here
            checkExportsOnMergedDeclarations(node);
            if (node.kind === SyntaxKind.VariableDeclaration || node.kind === SyntaxKind.BindingElement) {
                checkVarDeclaredNamesNotShadowed(node);
            }
            checkCollisionsForDeclarationName(node, node.name);
        }
    }
    
    function areDeclarationFlagsIdentical(left: Declaration, right: Declaration) {
        if (
            (left.kind === SyntaxKind.Parameter && right.kind === SyntaxKind.VariableDeclaration) ||
            (left.kind === SyntaxKind.VariableDeclaration && right.kind === SyntaxKind.Parameter)
        ) {
            // Differences in optionality between parameters and variables are allowed.
            return true;
        }

        // if (hasQuestionToken(left) !== hasQuestionToken(right)) {
        //     return false;
        // }

        const interestingFlags = ModifierFlags.Private |
            ModifierFlags.Protected |
            // ModifierFlags.Async |
            // ModifierFlags.Abstract |
            // ModifierFlags.Readonly |
            ModifierFlags.Static;

        return getSelectedEffectiveModifierFlags(left, interestingFlags) === getSelectedEffectiveModifierFlags(right, interestingFlags);
    }

    function checkAliasSymbol(node: AliasDeclarationNode) {
        let symbol = getSymbolOfDeclaration(node);
        const target = resolveAlias(symbol);

        if (target !== unknownSymbol) {
            // For external modules, `symbol` represents the local symbol for an alias.
            // This local symbol will merge any other local declarations (excluding other aliases)
            // and symbol.flags will contains combined representation for all merged declaration.
            // Based on symbol.flags we can compute a set of excluded meanings (meaning that resolved alias should not have,
            // otherwise it will conflict with some local declaration). Note that in addition to normal flags we include matching SymbolFlags.Export*
            // in order to prevent collisions with declarations that were exported from the current module (they still contribute to local names).
            symbol = getMergedSymbol(symbol.exportSymbol || symbol);

            // A type-only import/export will already have a grammar error in a JS file, so no need to issue more errors within
            // if (isInJSFile(node) && !(target.flags & SymbolFlags.Value) && !isTypeOnlyImportOrExportDeclaration(node)) {
            //     const errorNode = isImportOrExportSpecifier(node) ? node.propertyName || node.name :
            //         isNamedDeclaration(node) ? node.name :
            //         node;

            //     Debug.assert(node.kind !== SyntaxKind.NamespaceExport);
            //     if (node.kind === SyntaxKind.ExportSpecifier) {
            //         const diag = error(errorNode, Diagnostics.Types_cannot_appear_in_export_declarations_in_JavaScript_files);
            //         const alreadyExportedSymbol = getSourceFileOfNode(node).symbol?.exports?.get(moduleExportNameTextEscaped(node.propertyName || node.name));
            //         if (alreadyExportedSymbol === target) {
            //             const exportingDeclaration = alreadyExportedSymbol.declarations?.find(isJSDocNode);
            //             if (exportingDeclaration) {
            //                 addRelatedInfo(
            //                     diag,
            //                     createDiagnosticForNode(
            //                         exportingDeclaration,
            //                         Diagnostics._0_is_automatically_exported_here,
            //                         unescapeLeadingUnderscores(alreadyExportedSymbol.name),
            //                     ),
            //                 );
            //             }
            //         }
            //     }
            //     else {
            //         Debug.assert(node.kind !== SyntaxKind.VariableDeclaration);
            //         const importDeclaration = findAncestor(node, or(isImportDeclaration, isImportEqualsDeclaration));
            //         const moduleSpecifier = (importDeclaration && tryGetModuleSpecifierFromDeclaration(importDeclaration)?.text) ?? "...";
            //         const importedIdentifier = unescapeLeadingUnderscores(isIdentifier(errorNode) ? errorNode.text : symbol.name);
            //         error(
            //             errorNode,
            //             Diagnostics._0_is_a_type_and_cannot_be_imported_in_JavaScript_files_Use_1_in_a_JSDoc_type_annotation,
            //             importedIdentifier,
            //             `import("${moduleSpecifier}").${importedIdentifier}`,
            //         );
            //     }
            //     return;
            // }

            const targetFlags = getSymbolFlags(target);
            const excludedMeanings = (symbol.flags & (SymbolFlags.Value | SymbolFlags.ExportValue) ? SymbolFlags.Value : 0) |
                (symbol.flags & SymbolFlags.Type ? SymbolFlags.Type : 0) |
                (symbol.flags & SymbolFlags.Namespace ? SymbolFlags.Namespace : 0);
            if (targetFlags & excludedMeanings) {
                Debug.fail("Shouldn't have a symbol conflict here.");
                // const message = node.kind === SyntaxKind.ExportSpecifier ?
                //     Diagnostics.Export_declaration_conflicts_with_exported_declaration_of_0 :
                //     Diagnostics.Import_declaration_conflicts_with_local_declaration_of_0;
                // error(node, message, symbolToString(symbol));
            }
            // else if (node.kind !== SyntaxKind.ExportSpecifier) {
            //     // Look at 'compilerOptions.isolatedModules' and not 'getIsolatedModules(...)' (which considers 'verbatimModuleSyntax')
            //     // here because 'verbatimModuleSyntax' will already have an error for importing a type without 'import type'.
            //     const appearsValueyToTranspiler = compilerOptions.isolatedModules && !findAncestor(node, isTypeOnlyImportOrExportDeclaration);
            //     if (appearsValueyToTranspiler && symbol.flags & (SymbolFlags.Value | SymbolFlags.ExportValue)) {
            //         error(
            //             node,
            //             Diagnostics.Import_0_conflicts_with_local_value_so_must_be_declared_with_a_type_only_import_when_isolatedModules_is_enabled,
            //             symbolToString(symbol),
            //             isolatedModulesLikeFlagName,
            //         );
            //     }
            // }

            // if (
            //     getIsolatedModules(compilerOptions)
            //     && !isTypeOnlyImportOrExportDeclaration(node)
            //     && !(node.flags & NodeFlags.Ambient)
            // ) {
            //     const typeOnlyAlias = getTypeOnlyAliasDeclaration(symbol);
            //     const isType = !(targetFlags & SymbolFlags.Value);
            //     if (isType || typeOnlyAlias) {
            //         switch (node.kind) {
            //             case SyntaxKind.ImportClause:
            //             case SyntaxKind.ImportSpecifier:
            //             case SyntaxKind.ImportEqualsDeclaration: {
            //                 if (compilerOptions.verbatimModuleSyntax) {
            //                     Debug.assertIsDefined(node.name, "An ImportClause with a symbol should have a name");
            //                     const message = compilerOptions.verbatimModuleSyntax && isInternalModuleImportEqualsDeclaration(node)
            //                         ? Diagnostics.An_import_alias_cannot_resolve_to_a_type_or_type_only_declaration_when_verbatimModuleSyntax_is_enabled
            //                         : isType
            //                         ? Diagnostics._0_is_a_type_and_must_be_imported_using_a_type_only_import_when_verbatimModuleSyntax_is_enabled
            //                         : Diagnostics._0_resolves_to_a_type_only_declaration_and_must_be_imported_using_a_type_only_import_when_verbatimModuleSyntax_is_enabled;
            //                     const name = moduleExportNameTextUnescaped(node.kind === SyntaxKind.ImportSpecifier ? node.propertyName || node.name : node.name);
            //                     addTypeOnlyDeclarationRelatedInfo(
            //                         error(node, message, name),
            //                         isType ? undefined : typeOnlyAlias,
            //                         name,
            //                     );
            //                 }
            //                 if (isType && node.kind === SyntaxKind.ImportEqualsDeclaration && hasEffectiveModifier(node, ModifierFlags.Export)) {
            //                     error(node, Diagnostics.Cannot_use_export_import_on_a_type_or_type_only_namespace_when_0_is_enabled, isolatedModulesLikeFlagName);
            //                 }
            //                 break;
            //             }
            //             case SyntaxKind.ExportSpecifier: {
            //                 // Don't allow re-exporting an export that will be elided when `--isolatedModules` is set.
            //                 // The exception is that `import type { A } from './a'; export { A }` is allowed
            //                 // because single-file analysis can determine that the export should be dropped.
            //                 if (compilerOptions.verbatimModuleSyntax || getSourceFileOfNode(typeOnlyAlias) !== getSourceFileOfNode(node)) {
            //                     const name = moduleExportNameTextUnescaped(node.propertyName || node.name);
            //                     const diagnostic = isType
            //                         ? error(node, Diagnostics.Re_exporting_a_type_when_0_is_enabled_requires_using_export_type, isolatedModulesLikeFlagName)
            //                         : error(node, Diagnostics._0_resolves_to_a_type_only_declaration_and_must_be_re_exported_using_a_type_only_re_export_when_1_is_enabled, name, isolatedModulesLikeFlagName);
            //                     addTypeOnlyDeclarationRelatedInfo(diagnostic, isType ? undefined : typeOnlyAlias, name);
            //                     break;
            //                 }
            //             }
            //         }
            //     }

            //     if (
            //         compilerOptions.verbatimModuleSyntax &&
            //         node.kind !== SyntaxKind.ImportEqualsDeclaration &&
            //         !isInJSFile(node) &&
            //         host.getEmitModuleFormatOfFile(getSourceFileOfNode(node)) === ModuleKind.CommonJS
            //     ) {
            //         error(node, Diagnostics.ESM_syntax_is_not_allowed_in_a_CommonJS_module_when_verbatimModuleSyntax_is_enabled);
            //     }
            //     else if (
            //         moduleKind === ModuleKind.Preserve &&
            //         node.kind !== SyntaxKind.ImportEqualsDeclaration &&
            //         node.kind !== SyntaxKind.VariableDeclaration &&
            //         host.getEmitModuleFormatOfFile(getSourceFileOfNode(node)) === ModuleKind.CommonJS
            //     ) {
            //         // In `--module preserve`, ESM input syntax emits ESM output syntax, but there will be times
            //         // when we look at the `impliedNodeFormat` of this file and decide it's CommonJS (i.e., currently,
            //         // only if the file extension is .cjs/.cts). To avoid that inconsistency, we disallow ESM syntax
            //         // in files that are unambiguously CommonJS in this mode.
            //         error(node, Diagnostics.ESM_syntax_is_not_allowed_in_a_CommonJS_module_when_module_is_set_to_preserve);
            //     }
            // }

            // if (isImportSpecifier(node)) {
            //     const targetSymbol = resolveAliasWithDeprecationCheck(symbol, node);
            //     if (isDeprecatedSymbol(targetSymbol) && targetSymbol.declarations) {
            //         addDeprecatedSuggestion(node, targetSymbol.declarations, targetSymbol.name as string);
            //     }
            // }
        }
    }

    function checkParameter(node: ParameterDeclaration) {
        // Grammar checking
        // It is a SyntaxError if the Identifier "eval" or the Identifier "arguments" occurs as the
        // Identifier in a PropertySetParameterList of a PropertyAssignment that is contained in strict code
        // or if its FunctionBody is strict code(11.1.5).
        checkGrammarModifiers(node);

        checkVariableLikeDeclaration(node);
        const func = getContainingFunction(node)!;
        if (hasSyntacticModifier(node, ModifierFlags.ParameterPropertyModifier)) {            
        }        
        if (node.name && isIdentifier(node.name) && (node.name.text === "this" || node.name.text === "new")) {
            if (func.parameters.indexOf(node) !== 0) {
                error(node, Diagnostics.A_0_parameter_must_be_the_first_parameter, node.name.text as string);
            }                        
        }

        // Only check rest parameter type if it's not a binding pattern. Since binding patterns are
        // not allowed in a rest parameter, we already have an error from checkGrammarParameterList.
        if (node.dotDotDotToken && !isBindingPattern(node.name) && !isTypeAssignableTo(getReducedType(getTypeOfSymbol(node.symbol)), anyReadonlyArrayType)) {
            error(node, Diagnostics.A_rest_parameter_must_be_of_an_array_type);
        }
    }

    
    /**
     * Return the reduced form of the given type. For a union type, it is a union of the normalized constituent types.
     * For an intersection of types containing one or more mututally exclusive discriminant properties, it is 'never'.
     * For all other types, it is simply the type itself. Discriminant properties are considered mutually exclusive when
     * no constituent property has type 'never', but the intersection of the constituent property types is 'never'.
     */
    function getReducedType(type: Type): Type {
        if (type.flags & TypeFlags.Union && (type as UnionType).objectFlags & ObjectFlags.ContainsIntersections) {
            return (type as UnionType).resolvedReducedType || ((type as UnionType).resolvedReducedType = getReducedUnionType(type as UnionType));
        }        
        return type;
    }
    
    function getReducedUnionType(unionType: UnionType) {
        const reducedTypes = sameMap(unionType.types, getReducedType);
        if (reducedTypes === unionType.types) {
            return unionType;
        }
        const reduced = getUnionType(reducedTypes);
        if (reduced.flags & TypeFlags.Union) {
            (reduced as UnionType).resolvedReducedType = reduced;
        }
        return reduced;
    }

    function isTypeIdenticalTo(source: Type, target: Type): boolean {
        return isTypeRelatedTo(source, target, identityRelation);
    }

    function isInAmbientOrTypeNode(node: Node): boolean {
        return !!(node.flags & NodeFlags.Ambient);
    }

    function checkExportsOnMergedDeclarations(node: Declaration): void {
        //addLazyDiagnostic(() => checkExportsOnMergedDeclarationsWorker(node));
    }

    function checkVarDeclaredNamesNotShadowed(node: VariableDeclaration | BindingElement) {
        // - ScriptBody : StatementList
        // It is a Syntax Error if any element of the LexicallyDeclaredNames of StatementList
        // also occurs in the VarDeclaredNames of StatementList.

        // - Block : { StatementList }
        // It is a Syntax Error if any element of the LexicallyDeclaredNames of StatementList
        // also occurs in the VarDeclaredNames of StatementList.

        // Variable declarations are hoisted to the top of their function scope. They can shadow
        // block scoped declarations, which bind tighter. this will not be flagged as duplicate definition
        // by the binder as the declaration scope is different.
        // A non-initialized declaration is a no-op as the block declaration will resolve before the var
        // declaration. the problem is if the declaration has an initializer. this will act as a write to the
        // block declared value. this is fine for let, but not const.
        // Only consider declarations with initializers, uninitialized const declarations will not
        // step on a let/const variable.
        // Do not consider const and const declarations, as duplicate block-scoped declarations
        // are handled by the binder.
        // We are only looking for const declarations that step on let\const declarations from a
        // different scope. e.g.:
        //      {
        //          const x = 0; // localDeclarationSymbol obtained after name resolution will correspond to this declaration
        //          const x = 0; // symbol for this declaration will be 'symbol'
        //      }

        // skip block-scoped variables and parameters
        if ((getCombinedNodeFlagsCached(node) & NodeFlags.BlockScoped) !== 0 || isPartOfParameterDeclaration(node)) {
            return;
        }

        // NOTE: in ES6 spec initializer is required in variable declarations where name is binding pattern
        // so we'll always treat binding elements as initialized

        const symbol = getSymbolOfDeclaration(node);
        if (symbol.flags & SymbolFlags.FunctionScopedVariable) {
            if (!isIdentifier(node.name)) return Debug.fail();
            const localDeclarationSymbol = resolveName(node, node.name.text, SymbolFlags.Variable, /*nameNotFoundMessage*/ undefined, /*isUse*/ false);
            if (
                localDeclarationSymbol &&
                localDeclarationSymbol !== symbol &&
                localDeclarationSymbol.flags & SymbolFlags.BlockScopedVariable
            ) {
                if (getDeclarationNodeFlagsFromSymbol(localDeclarationSymbol) & NodeFlags.BlockScoped) {
                    const varDeclList = getAncestor(localDeclarationSymbol.valueDeclaration, SyntaxKind.VariableDeclarationList)!;
                    const container = varDeclList.parent.kind === SyntaxKind.VariableStatement && varDeclList.parent.parent
                        ? varDeclList.parent.parent
                        : undefined;

                    // names of block-scoped and function scoped variables can collide only
                    // if block scoped variable is defined in the function\module\source file scope (because of variable hoisting)
                    const namesShareScope = container &&
                        (container.kind === SyntaxKind.Block && isFunctionLike(container.parent) ||
                            // container.kind === SyntaxKind.ModuleBlock ||
                            // container.kind === SyntaxKind.ModuleDeclaration ||
                            container.kind === SyntaxKind.SourceFile);

                    // here we know that function scoped variable is "shadowed" by block scoped one
                    // a var declatation can't hoist past a lexical declaration and it results in a SyntaxError at runtime
                    if (!namesShareScope) {
                        const name = symbolToString(localDeclarationSymbol);
                        error(node, Diagnostics.Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1, name, name);
                    }
                }
            }
        }
    }

    function errorNextVariableOrPropertyDeclarationMustHaveSameType(firstDeclaration: Declaration | undefined, firstType: Type, nextDeclaration: Declaration, nextType: Type): void {
        const nextDeclarationName = getNameOfDeclaration(nextDeclaration);
        const message = nextDeclaration.kind === SyntaxKind.PropertyDeclaration /*|| nextDeclaration.kind === SyntaxKind.PropertySignature*/
            ? Diagnostics.Subsequent_property_declarations_must_have_the_same_type_Property_0_must_be_of_type_1_but_here_has_type_2
            : Diagnostics.Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2;
        const declName = declarationNameToString(nextDeclarationName);
        const err = error(
            nextDeclarationName,
            message,
            declName,
            typeToString(firstType),
            typeToString(nextType),
        );
        if (firstDeclaration) {
            addRelatedInfo(err, createDiagnosticForNode(firstDeclaration, Diagnostics._0_was_also_declared_here, declName));
        }
    }

    function reportErrorsFromWidening(declaration: Declaration, type: Type, wideningKind?: WideningKind) {
        addLazyDiagnostic(() => {
            if (noImplicitAny && getObjectFlags(type) & ObjectFlags.ContainsWideningType && (!wideningKind || !getContextualSignatureForFunctionLikeDeclaration(declaration as FunctionLikeDeclaration))) {
                // Report implicit any error within type if possible, otherwise report error on declaration
                if (!reportWideningErrorsInType(type)) {
                    reportImplicitAny(declaration, type, wideningKind);
                }
            }
        });
    }

    function getContextualSignatureForFunctionLikeDeclaration(node: FunctionLikeDeclaration): Signature | undefined {
        // Only function expressions, arrow functions, and object literal methods are contextually typed.
        return isFunctionExpressionOrInlineClosure(node)// TODO || isObjectLiteralMethod(node)
            ? getContextualSignature(node as FunctionExpression)
            : undefined;
    }

    function findContextualNode(node: Node, includeCaches: boolean) {
        for (let i = contextualTypeCount - 1; i >= 0; i--) {
            if (node === contextualTypeNodes[i] && (includeCaches || !contextualIsCache[i])) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Whoa! Do you really want to use this function?
     *
     * Unless you're trying to get the *non-apparent* type for a
     * value-literal type or you're authoring relevant portions of this algorithm,
     * you probably meant to use 'getApparentTypeOfContextualType'.
     * Otherwise this may not be very useful.
     *
     * In cases where you *are* working on this function, you should understand
     * when it is appropriate to use 'getContextualType' and 'getApparentTypeOfContextualType'.
     *
     *   - Use 'getContextualType' when you are simply going to propagate the result to the expression.
     *   - Use 'getApparentTypeOfContextualType' when you're going to need the members of the type.
     *
     * @param node the expression whose contextual type will be returned.
     * @returns the contextual type of an expression.
     */
    function getContextualType(node: Expression, contextFlags: ContextFlags | undefined): Type | undefined {        
        // Cached contextual types are obtained with no ContextFlags, so we can only consult them for
        // requests with no ContextFlags.
        const index = findContextualNode(node, /*includeCaches*/ !contextFlags);
        if (index >= 0) {
            return contextualTypes[index];
        }
        const { parent } = node;
        switch (parent.kind) {
            case SyntaxKind.VariableDeclaration:
            case SyntaxKind.Parameter:
            case SyntaxKind.PropertyDeclaration:
            //case SyntaxKind.PropertySignature:
            case SyntaxKind.BindingElement:
                console.warn("todo getContextualType - getContextualTypeForInitializerExpression");
                //return getContextualTypeForInitializerExpression(node, contextFlags);
            case SyntaxKind.InlineClosureExpression:
            case SyntaxKind.ReturnStatement:
                console.warn("todo getContextualType - getContextualTypeForReturnExpression");
                //return getContextualTypeForReturnExpression(node, contextFlags);            
            // case SyntaxKind.AwaitExpression:
            //     return getContextualTypeForAwaitOperand(parent as AwaitExpression, contextFlags);
            case SyntaxKind.CallExpression:
            case SyntaxKind.NewExpression:
                console.warn("todo getContextualType - getContextualTypeForArgument");
                //return getContextualTypeForArgument(parent as CallExpression | NewExpression | Decorator, node);            
            case SyntaxKind.BinaryExpression:
                console.warn("todo getContextualType - getContextualTypeForBinaryOperand");
                //return getContextualTypeForBinaryOperand(node, contextFlags);
            case SyntaxKind.PropertyAssignment:
            case SyntaxKind.ShorthandPropertyAssignment:
                console.warn("todo getContextualType - getContextualTypeForObjectLiteralElement");
                //return getContextualTypeForObjectLiteralElement(parent as PropertyAssignment | ShorthandPropertyAssignment, contextFlags);
            // case SyntaxKind.SpreadAssignment:
            //     return getContextualType(parent.parent as ObjectLiteralExpression, contextFlags);
            case SyntaxKind.ArrayLiteralExpression: {
                const arrayLiteral = parent as ArrayLiteralExpression;
                const type = getApparentTypeOfContextualType(arrayLiteral, contextFlags);
                const elementIndex = indexOfNode(arrayLiteral.elements, node);
                const spreadIndices = getNodeLinks(arrayLiteral).spreadIndices ??= getSpreadIndices(arrayLiteral.elements);
                console.warn("todo getContextualType - getContextualTypeForElementExpression");
                //return getContextualTypeForElementExpression(type, elementIndex, arrayLiteral.elements.length, spreadIndices.first, spreadIndices.last);
            }
            case SyntaxKind.ConditionalExpression:
                console.warn("todo getContextualType - getContextualTypeForConditionalOperand");
                //return getContextualTypeForConditionalOperand(node, contextFlags);            
            case SyntaxKind.ParenthesizedExpression: {
                // if (isInJSFile(parent)) {
                //     if (isJSDocSatisfiesExpression(parent)) {
                //         return getTypeFromTypeNode(getJSDocSatisfiesExpressionType(parent));
                //     }
                //     // Like in `checkParenthesizedExpression`, an `/** @type {xyz} */` comment before a parenthesized expression acts as a type cast.
                //     const typeTag = getJSDocTypeTag(parent);
                //     if (typeTag && !isConstTypeReference(typeTag.typeExpression.type)) {
                //         return getTypeFromTypeNode(typeTag.typeExpression.type);
                //     }
                // }
                return getContextualType(parent as ParenthesizedExpression, contextFlags);
            }            
            // case SyntaxKind.ExportAssignment:
            //     return tryGetTypeFromEffectiveTypeNode(parent as ExportAssignment);            
            // case SyntaxKind.ImportAttribute:
            //     return getContextualImportAttributeType(parent as ImportAttribute);
        }
        return undefined;
    }

    function getSpreadIndices(elements: readonly Node[]) {
        let first, last;
        console.warn("todo - getSpreadIndices");
        // for (let i = 0; i < elements.length; i++) {
        //     if (isSpreadElement(elements[i])) {
        //         first ??= i;
        //         last = i;
        //     }
        // }
        return { first, last };
    }

    function getInferenceContext(node: Node) {
        for (let i = inferenceContextCount - 1; i >= 0; i--) {
            if (isNodeDescendantOf(node, inferenceContextNodes[i])) {
                return inferenceContexts[i];
            }
        }
    }

    function instantiateType(type: Type, mapper: TypeMapper | undefined): Type;
    function instantiateType(type: Type | undefined, mapper: TypeMapper | undefined): Type | undefined;
    function instantiateType(type: Type | undefined, mapper: TypeMapper | undefined): Type | undefined {
        return type && mapper ? instantiateTypeWithAlias(type, mapper, /*aliasSymbol*/ undefined, /*aliasTypeArguments*/ undefined) : type;
    }

    // Return true if the given type could possibly reference a type parameter for which
    // we perform type inference (i.e. a type parameter of a generic function). We cache
    // results for union and intersection types for performance reasons.
    function couldContainTypeVariables(type: Type): boolean {
        const objectFlags = getObjectFlags(type);
        if (objectFlags & ObjectFlags.CouldContainTypeVariablesComputed) {
            return !!(objectFlags & ObjectFlags.CouldContainTypeVariables);
        }
        const result = !!(type.flags & TypeFlags.Instantiable // ||
            // type.flags & TypeFlags.Object && !isNonGenericTopLevelType(type) && (
            //         objectFlags & ObjectFlags.Reference && ((type as TypeReference).node || some(getTypeArguments(type as TypeReference), couldContainTypeVariables)) ||
            //         objectFlags & ObjectFlags.SingleSignatureType && !!length((type as SingleSignatureType).outerTypeParameters) ||
            //         objectFlags & ObjectFlags.Anonymous && type.symbol && type.symbol.flags & (SymbolFlags.Function | SymbolFlags.Method | SymbolFlags.Class | SymbolFlags.TypeLiteral | SymbolFlags.ObjectLiteral) && type.symbol.declarations ||
            //         objectFlags & (ObjectFlags.Mapped | ObjectFlags.ReverseMapped | ObjectFlags.ObjectRestType | ObjectFlags.InstantiationExpressionType)
            //     ) ||
            //type.flags & TypeFlags.UnionOrIntersection && !(type.flags & TypeFlags.EnumLiteral) && !isNonGenericTopLevelType(type) && some((type as UnionOrIntersectionType).types, couldContainTypeVariables));
        );
        if (type.flags & TypeFlags.ObjectFlagsType) {
            (type as ObjectFlagsType).objectFlags |= ObjectFlags.CouldContainTypeVariablesComputed | (result ? ObjectFlags.CouldContainTypeVariables : 0);
        }
        return result;
    }

    function instantiateTypeWithAlias(type: Type, mapper: TypeMapper, aliasSymbol: Symbol | undefined, aliasTypeArguments: readonly Type[] | undefined): Type {
        if (!couldContainTypeVariables(type)) {
            return type;
        }
        if (instantiationDepth === 100 || instantiationCount >= 5000000) {
            // We have reached 100 recursive type instantiations, or 5M type instantiations caused by the same statement
            // or expression. There is a very high likelyhood we're dealing with a combination of infinite generic types
            // that perpetually generate new type identities, so we stop the recursion here by yielding the error type.
            tracing?.instant(tracing.Phase.CheckTypes, "instantiateType_DepthLimit", { typeId: type.id, instantiationDepth, instantiationCount });
            error(currentNode, Diagnostics.Type_instantiation_is_excessively_deep_and_possibly_infinite);
            return errorType;
        }
        totalInstantiationCount++;
        instantiationCount++;
        instantiationDepth++;
        const result = instantiateTypeWorker(type, mapper, aliasSymbol, aliasTypeArguments);
        instantiationDepth--;
        return result;
    }

    function instantiateTypes(types: readonly Type[], mapper: TypeMapper): readonly Type[];
    function instantiateTypes(types: readonly Type[] | undefined, mapper: TypeMapper): readonly Type[] | undefined;
    function instantiateTypes(types: readonly Type[] | undefined, mapper: TypeMapper): readonly Type[] | undefined {
        return instantiateList<Type>(types, mapper, instantiateType);
    }

    function instantiateList<T>(items: readonly T[], mapper: TypeMapper, instantiator: (item: T, mapper: TypeMapper) => T): readonly T[];
    function instantiateList<T>(items: readonly T[] | undefined, mapper: TypeMapper, instantiator: (item: T, mapper: TypeMapper) => T): readonly T[] | undefined;
    function instantiateList<T>(items: readonly T[] | undefined, mapper: TypeMapper, instantiator: (item: T, mapper: TypeMapper) => T): readonly T[] | undefined {
        if (items && items.length) {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const mapped = instantiator(item, mapper);
                if (item !== mapped) {
                    const result = i === 0 ? [] : items.slice(0, i);
                    result.push(mapped);
                    for (i++; i < items.length; i++) {
                        result.push(instantiator(items[i], mapper));
                    }
                    return result;
                }
            }
        }
        return items;
    }

    function createNormalizedTypeReference(target: GenericType, typeArguments: readonly Type[] | undefined) {
        //return /*target.objectFlags & ObjectFlags.Tuple ? createNormalizedTupleType(target as TupleType, typeArguments!) : */ 
        return createTypeReference(target, typeArguments);
    }

    function createTypeReference(target: GenericType, typeArguments: readonly Type[] | undefined): TypeReference {
        const id = getTypeListId(typeArguments);
        let type = target.instantiations.get(id);
        if (!type) {
            type = createObjectType(ObjectFlags.Reference, target.symbol) as TypeReference;
            target.instantiations.set(id, type);
            type.objectFlags |= typeArguments ? getPropagatingFlagsOfTypes(typeArguments) : 0;
            type.target = target;
            type.resolvedTypeArguments = typeArguments;
        }
        return type;
    }

    function instantiateReverseMappedType(type: ReverseMappedType, mapper: TypeMapper) {
        const innerMappedType = instantiateType(type.mappedType, mapper);
        if (!(getObjectFlags(innerMappedType) & ObjectFlags.Mapped)) {
            return type;
        }
        const innerIndexType = instantiateType(type.constraintType, mapper);
        if (!(innerIndexType.flags & TypeFlags.Index)) {
            return type;
        }
        // const instantiated = inferTypeForHomomorphicMappedType(
        //     instantiateType(type.source, mapper),
        //     innerMappedType as MappedType,
        //     innerIndexType as IndexType,
        // );
        // if (instantiated) {
        //     return instantiated;
        // }
        return type; // Nested invocation of `inferTypeForHomomorphicMappedType` or the `source` instantiated into something unmappable
    }

    // Return the outer type parameters of a node or undefined if the node has no outer type parameters.
    function getOuterTypeParameters(node: Node, includeThisTypes?: boolean): TypeParameter[] | undefined {
        while (true) {
            node = node.parent; // TODO: GH#18217 Use SourceFile kind check instead
            if (node && isBinaryExpression(node)) {
                // prototype assignments get the outer type parameters of their constructor function
                const assignmentKind = getAssignmentDeclarationKind(node);
                // if (assignmentKind === AssignmentDeclarationKind.Prototype || assignmentKind === AssignmentDeclarationKind.PrototypeProperty) {
                //     const symbol = getSymbolOfDeclaration(node.left as BindableStaticNameExpression | PropertyAssignment);
                //     if (symbol && symbol.parent && !findAncestor(symbol.parent.valueDeclaration, d => node === d)) {
                //         node = symbol.parent.valueDeclaration!;
                //     }
                // }
            }
            if (!node) {
                return undefined;
            }
            switch (node.kind) {
                case SyntaxKind.ClassExpression:
                // case SyntaxKind.ClassDeclaration:
                // case SyntaxKind.InterfaceDeclaration:
                // case SyntaxKind.CallSignature:
                // case SyntaxKind.ConstructSignature:
                // case SyntaxKind.MethodSignature:
                // case SyntaxKind.FunctionType:
                // case SyntaxKind.ConstructorType:
                case SyntaxKind.JSDocFunctionType:
                case SyntaxKind.FunctionDeclaration:
                // case SyntaxKind.MethodDeclaration:
                case SyntaxKind.FunctionExpression:
                case SyntaxKind.InlineClosureExpression:
                // case SyntaxKind.TypeAliasDeclaration:
                case SyntaxKind.JSDocTemplateTag:
                case SyntaxKind.JSDocTypedefTag:
                case SyntaxKind.JSDocEnumTag:
                case SyntaxKind.JSDocCallbackTag:
                case SyntaxKind.MappedType:
                case SyntaxKind.ConditionalType: {
                    const outerTypeParameters = getOuterTypeParameters(node, includeThisTypes);
                    if (node.kind === SyntaxKind.MappedType) {
                        return append(outerTypeParameters, getDeclaredTypeOfTypeParameter(getSymbolOfDeclaration((node as MappedTypeNode).typeParameter)));
                    }
                    // else if (node.kind === SyntaxKind.ConditionalType) {
                    //     return concatenate(outerTypeParameters, getInferTypeParameters(node as ConditionalTypeNode));
                    // }
                    const outerAndOwnTypeParameters = outerTypeParameters;//appendTypeParameters(outerTypeParameters, getEffectiveTypeParameterDeclarations(node as DeclarationWithTypeParameters));
                    const thisType = undefined;// includeThisTypes &&
                        //(/*node.kind === SyntaxKind.ClassDeclaration ||*/ node.kind === SyntaxKind.ClassExpression || /* node.kind === SyntaxKind.InterfaceDeclaration ||  isJSConstructor(node)*/) &&
                        //getDeclaredTypeOfClassOrInterface(getSymbolOfDeclaration(node as ClassLikeDeclaration | InterfaceDeclaration)).thisType;
                    return thisType ? append(outerAndOwnTypeParameters, thisType) : outerAndOwnTypeParameters;
                }
                case SyntaxKind.JSDocParameterTag:
                    const paramSymbol = undefined;// getParameterSymbolFromJSDoc(node as JSDocParameterTag);
                    if (paramSymbol) {
                        node = paramSymbol.valueDeclaration!;
                    }
                    break;
                case SyntaxKind.JSDoc: {
                    const outerTypeParameters = getOuterTypeParameters(node, includeThisTypes);
                    // return (node as JSDoc).tags
                    //     ? appendTypeParameters(outerTypeParameters, flatMap((node as JSDoc).tags, t => isJSDocTemplateTag(t) ? t.typeParameters : undefined))
                    return outerTypeParameters;
                }
            }
        }
    }

    // Appends the type parameters given by a list of declarations to a set of type parameters and returns the resulting set.
    // The function allocates a new array if the input type parameter set is undefined, but otherwise it modifies the set
    // in-place and returns the same array.
    function appendTypeParameters(typeParameters: TypeParameter[] | undefined, declarations: readonly TypeParameterDeclaration[]): TypeParameter[] | undefined {
        for (const declaration of declarations) {
            typeParameters = appendIfUnique(typeParameters, getDeclaredTypeOfTypeParameter(getSymbolOfDeclaration(declaration)));
        }
        return typeParameters;
    }
    
    function getDeclaredTypeOfTypeParameter(symbol: Symbol): TypeParameter {
        const links = getSymbolLinks(symbol);
        return links.declaredType || (links.declaredType = createTypeParameter(symbol));
    }

    function createTypeParameter(symbol?: Symbol) {
        return createTypeWithSymbol(TypeFlags.TypeParameter, symbol!) as TypeParameter;
    }

    function getMappedType(type: Type, mapper: TypeMapper): Type {
        switch (mapper.kind) {
            case TypeMapKind.Simple:
                return type === mapper.source ? mapper.target : type;
            case TypeMapKind.Array: {
                const sources = mapper.sources;
                const targets = mapper.targets;
                for (let i = 0; i < sources.length; i++) {
                    if (type === sources[i]) {
                        return targets ? targets[i] : anyType;
                    }
                }
                return type;
            }
            case TypeMapKind.Deferred: {
                const sources = mapper.sources;
                const targets = mapper.targets;
                for (let i = 0; i < sources.length; i++) {
                    if (type === sources[i]) {
                        return targets[i]();
                    }
                }
                return type;
            }
            case TypeMapKind.Function:
                return mapper.func(type);
            case TypeMapKind.Composite:
            case TypeMapKind.Merged:
                const t1 = getMappedType(type, mapper.mapper1);
                return t1 !== type && mapper.kind === TypeMapKind.Composite ? instantiateType(t1, mapper.mapper2) : getMappedType(t1, mapper.mapper2);
        }
    }

    function cloneTypeParameter(typeParameter: TypeParameter): TypeParameter {
        const result = createTypeParameter(typeParameter.symbol);
        result.target = typeParameter;
        return result;
    }

    function makeUnaryTypeMapper(source: Type, target: Type): TypeMapper {
        return Debug.attachDebugPrototypeIfDebug({ kind: TypeMapKind.Simple, source, target });
    }

    function getTypeParameterFromMappedType(type: MappedType) {
        return type.typeParameter ||
            (type.typeParameter = getDeclaredTypeOfTypeParameter(getSymbolOfDeclaration(type.declaration.typeParameter)));
    }

    function instantiateAnonymousType(type: AnonymousType, mapper: TypeMapper, aliasSymbol?: Symbol, aliasTypeArguments?: readonly Type[]): AnonymousType {
        Debug.assert(type.symbol, "anonymous type must have symbol to be instantiated");
        const result = createObjectType(type.objectFlags & ~(ObjectFlags.CouldContainTypeVariablesComputed | ObjectFlags.CouldContainTypeVariables) | ObjectFlags.Instantiated, type.symbol) as AnonymousType;
        if (type.objectFlags & ObjectFlags.Mapped) {
            (result as MappedType).declaration = (type as MappedType).declaration;
            // C.f. instantiateSignature
            const origTypeParameter = getTypeParameterFromMappedType(type as MappedType);
            const freshTypeParameter = cloneTypeParameter(origTypeParameter);
            (result as MappedType).typeParameter = freshTypeParameter;
            mapper = combineTypeMappers(makeUnaryTypeMapper(origTypeParameter, freshTypeParameter), mapper);
            freshTypeParameter.mapper = mapper;
        }
        if (type.objectFlags & ObjectFlags.InstantiationExpressionType) {
            (result as InstantiationExpressionType).node = (type as InstantiationExpressionType).node;
        }
        if (type.objectFlags & ObjectFlags.SingleSignatureType) {
            (result as SingleSignatureType).outerTypeParameters = (type as SingleSignatureType).outerTypeParameters;
        }
        result.target = type;
        result.mapper = mapper;
        result.aliasSymbol = aliasSymbol || type.aliasSymbol;
        result.aliasTypeArguments = aliasSymbol ? aliasTypeArguments : instantiateTypes(type.aliasTypeArguments, mapper);
        result.objectFlags |= result.aliasTypeArguments ? getPropagatingFlagsOfTypes(result.aliasTypeArguments) : 0;
        return result;
    }
    
    function makeArrayTypeMapper(sources: readonly TypeParameter[], targets: readonly Type[] | undefined): TypeMapper {
        return Debug.attachDebugPrototypeIfDebug({ kind: TypeMapKind.Array, sources, targets });
    }

    function createTypeMapper(sources: readonly TypeParameter[], targets: readonly Type[] | undefined): TypeMapper {
        return sources.length === 1 ? makeUnaryTypeMapper(sources[0], targets ? targets[0] : anyType) : makeArrayTypeMapper(sources, targets);
    }

    function getAliasSymbolForTypeNode(node: Node) {
        let host = node.parent;
        while (isParenthesizedTypeNode(host)/* || isJSDocTypeExpression(host) || isTypeOperatorNode(host) && host.operator === SyntaxKind.ReadonlyKeyword*/) {
            host = host.parent;
        }
        return isTypeAlias(host) ? getSymbolOfDeclaration(host) : undefined;
    }

    function getTypeArgumentsForAliasSymbol(symbol: Symbol | undefined) {
        return symbol ? getLocalTypeParametersOfClassOrInterfaceOrTypeAlias(symbol) : undefined;
    }

    function createDeferredTypeReference(target: GenericType, node: TypeReferenceNode | ArrayTypeNode , mapper?: TypeMapper, aliasSymbol?: Symbol, aliasTypeArguments?: readonly Type[]): DeferredTypeReference {
        if (!aliasSymbol) {
            aliasSymbol = getAliasSymbolForTypeNode(node);
            const localAliasTypeArguments = getTypeArgumentsForAliasSymbol(aliasSymbol);
            aliasTypeArguments = mapper ? instantiateTypes(localAliasTypeArguments, mapper) : localAliasTypeArguments;
        }
        const type = createObjectType(ObjectFlags.Reference, target.symbol) as DeferredTypeReference;
        type.target = target;
        type.node = node;
        type.mapper = mapper;
        type.aliasSymbol = aliasSymbol;
        type.aliasTypeArguments = aliasTypeArguments;
        return type;
    }

    
    function getObjectTypeInstantiation(type: AnonymousType | DeferredTypeReference, mapper: TypeMapper, aliasSymbol?: Symbol, aliasTypeArguments?: readonly Type[]) {
        const declaration = type.objectFlags & ObjectFlags.Reference ? (type as TypeReference).node! :
            type.objectFlags & ObjectFlags.InstantiationExpressionType ? (type as InstantiationExpressionType).node :
            type.symbol.declarations![0];
        const links = getNodeLinks(declaration);
        const target = type.objectFlags & ObjectFlags.Reference ? links.resolvedType! as DeferredTypeReference :
            type.objectFlags & ObjectFlags.Instantiated ? type.target! : type;
        let typeParameters = type.objectFlags & ObjectFlags.SingleSignatureType ? (type as SingleSignatureType).outerTypeParameters : links.outerTypeParameters;
        if (!typeParameters) {
            // The first time an anonymous type is instantiated we compute and store a list of the type
            // parameters that are in scope (and therefore potentially referenced). For type literals that
            // aren't the right hand side of a generic type alias declaration we optimize by reducing the
            // set of type parameters to those that are possibly referenced in the literal.
            let outerTypeParameters = getOuterTypeParameters(declaration, /*includeThisTypes*/ true);
            // if (isJSConstructor(declaration)) {
            //     const templateTagParameters = getTypeParametersFromDeclaration(declaration as DeclarationWithTypeParameters);
            //     outerTypeParameters = addRange(outerTypeParameters, templateTagParameters);
            // }
            typeParameters = outerTypeParameters || emptyArray;
            const allDeclarations = type.objectFlags & (ObjectFlags.Reference | ObjectFlags.InstantiationExpressionType) ? [declaration] : type.symbol.declarations!;
            typeParameters = (target.objectFlags & (ObjectFlags.Reference | ObjectFlags.InstantiationExpressionType) || target.symbol.flags & SymbolFlags.Method || target.symbol.flags & SymbolFlags.TypeLiteral) && !target.aliasTypeArguments ?
                filter(typeParameters, tp => some(allDeclarations, d => isTypeParameterPossiblyReferenced(tp, d))) :
                typeParameters;
            links.outerTypeParameters = typeParameters;
        }
        if (typeParameters.length) {
            // We are instantiating an anonymous type that has one or more type parameters in scope. Apply the
            // mapper to the type parameters to produce the effective list of type arguments, and compute the
            // instantiation cache key from the type IDs of the type arguments.
            const combinedMapper = combineTypeMappers(type.mapper, mapper);
            const typeArguments = map(typeParameters, t => getMappedType(t, combinedMapper));
            const newAliasSymbol = aliasSymbol || type.aliasSymbol;
            const newAliasTypeArguments = aliasSymbol ? aliasTypeArguments : instantiateTypes(type.aliasTypeArguments, mapper);
            const id = (type.objectFlags & ObjectFlags.SingleSignatureType ? "S" : "") + getTypeListId(typeArguments) + getAliasId(newAliasSymbol, newAliasTypeArguments);
            if (!target.instantiations) {
                target.instantiations = new Map<string, Type>();
                target.instantiations.set(getTypeListId(typeParameters) + getAliasId(target.aliasSymbol, target.aliasTypeArguments), target);
            }
            let result = target.instantiations.get(id);
            if (!result) {
                if (type.objectFlags & ObjectFlags.SingleSignatureType) {
                    result = instantiateAnonymousType(type, mapper);
                    target.instantiations.set(id, result);
                    return result;
                }
                const newMapper = createTypeMapper(typeParameters, typeArguments);
                result = target.objectFlags & ObjectFlags.Reference ? createDeferredTypeReference((type as DeferredTypeReference).target, (type as DeferredTypeReference).node, newMapper, newAliasSymbol, newAliasTypeArguments) :
                    //target.objectFlags & ObjectFlags.Mapped ? instantiateMappedType(target as MappedType, newMapper, newAliasSymbol, newAliasTypeArguments) :
                    instantiateAnonymousType(target, newMapper, newAliasSymbol, newAliasTypeArguments);
                target.instantiations.set(id, result); // Set cached result early in case we recursively invoke instantiation while eagerly computing type variable visibility below
                const resultObjectFlags = getObjectFlags(result);
                if (result.flags & TypeFlags.ObjectFlagsType && !(resultObjectFlags & ObjectFlags.CouldContainTypeVariablesComputed)) {
                    const resultCouldContainTypeVariables = some(typeArguments, couldContainTypeVariables); // one of the input type arguments might be or contain the result
                    if (!(getObjectFlags(result) & ObjectFlags.CouldContainTypeVariablesComputed)) {
                        // if `result` is one of the object types we tried to make (it may not be, due to how `instantiateMappedType` works), we can carry forward the type variable containment check from the input type arguments
                        if (resultObjectFlags & (ObjectFlags.Mapped | ObjectFlags.Anonymous | ObjectFlags.Reference)) {
                            (result as ObjectFlagsType).objectFlags |= ObjectFlags.CouldContainTypeVariablesComputed | (resultCouldContainTypeVariables ? ObjectFlags.CouldContainTypeVariables : 0);
                        }
                        // If none of the type arguments for the outer type parameters contain type variables, it follows
                        // that the instantiated type doesn't reference type variables.
                        // Intrinsics have `CouldContainTypeVariablesComputed` pre-set, so this should only cover unions and intersections resulting from `instantiateMappedType`
                        else {
                            (result as ObjectFlagsType).objectFlags |= !resultCouldContainTypeVariables ? ObjectFlags.CouldContainTypeVariablesComputed : 0;
                        }
                    }
                }
            }
            return result;
        }
        return type;
    }

    function combineTypeMappers(mapper1: TypeMapper | undefined, mapper2: TypeMapper): TypeMapper {
        return mapper1 ? makeCompositeTypeMapper(TypeMapKind.Composite, mapper1, mapper2) : mapper2;
    }

    function makeCompositeTypeMapper(kind: TypeMapKind.Composite | TypeMapKind.Merged, mapper1: TypeMapper, mapper2: TypeMapper): TypeMapper {
        return Debug.attachDebugPrototypeIfDebug({ kind, mapper1, mapper2 });
    }


    function maybeTypeParameterReference(node: Node) {
        return !(node.parent.kind === SyntaxKind.TypeReference && (node.parent as TypeReferenceNode).typeArguments && node === (node.parent as TypeReferenceNode).typeName);
            //node.parent.kind === SyntaxKind.ImportType && (node.parent as ImportTypeNode).typeArguments && node === (node.parent as ImportTypeNode).qualifier);
    }
    
    function isTypeParameterPossiblyReferenced(tp: TypeParameter, node: Node) {
        // If the type parameter doesn't have exactly one declaration, if there are intervening statement blocks
        // between the node and the type parameter declaration, if the node contains actual references to the
        // type parameter, or if the node contains type queries that we can't prove couldn't contain references to the type parameter,
        // we consider the type parameter possibly referenced.
        if (tp.symbol && tp.symbol.declarations && tp.symbol.declarations.length === 1) {
            const container = tp.symbol.declarations[0].parent;
            for (let n = node; n !== container; n = n.parent) {
                if (!n || n.kind === SyntaxKind.Block) {// || n.kind === SyntaxKind.ConditionalType && forEachChild((n as ConditionalTypeNode).extendsType, containsReference)) {
                    return true;
                }
            }
            return containsReference(node);
        }
        return true;
        function containsReference(node: Node): boolean {
            switch (node.kind) {
                // case SyntaxKind.ThisType:
                //     return !!tp.isThisType;
                case SyntaxKind.Identifier:
                    return !tp.isThisType && isPartOfTypeNode(node) && maybeTypeParameterReference(node) &&
                        getTypeFromTypeNodeWorker(node as TypeNode) === tp; // use worker because we're looking for === equality
                // case SyntaxKind.TypeQuery:
                //     const entityName = (node as TypeQueryNode).exprName;
                //     const firstIdentifier = getFirstIdentifier(entityName);
                //     if (!isThisIdentifier(firstIdentifier)) { // Don't attempt to analyze typeof this.xxx
                //         const firstIdentifierSymbol = getResolvedSymbol(firstIdentifier);
                //         const tpDeclaration = tp.symbol.declarations![0]; // There is exactly one declaration, otherwise `containsReference` is not called
                //         const tpScope = tpDeclaration.kind === SyntaxKind.TypeParameter ? tpDeclaration.parent : // Type parameter is a regular type parameter, e.g. foo<T>
                //             tp.isThisType ? tpDeclaration : // Type parameter is the this type, and its declaration is the class declaration.
                //             undefined; // Type parameter's declaration was unrecognized, e.g. comes from JSDoc annotation.
                //         if (firstIdentifierSymbol.declarations && tpScope) {
                //             return some(firstIdentifierSymbol.declarations, idDecl => isNodeDescendantOf(idDecl, tpScope)) ||
                //                 some((node as TypeQueryNode).typeArguments, containsReference);
                //         }
                //     }
                //     return true;
                // case SyntaxKind.MethodDeclaration:
                // case SyntaxKind.MethodSignature:
                //     return !(node as FunctionLikeDeclaration).type && !!(node as FunctionLikeDeclaration).body ||
                //         some((node as FunctionLikeDeclaration).typeParameters, containsReference) ||
                //         some((node as FunctionLikeDeclaration).parameters, containsReference) ||
                //         !!(node as FunctionLikeDeclaration).type && containsReference((node as FunctionLikeDeclaration).type!);
            }
            return !!forEachChild(node, containsReference);
        }
    }


    function instantiateTypeWorker(type: Type, mapper: TypeMapper, aliasSymbol: Symbol | undefined, aliasTypeArguments: readonly Type[] | undefined): Type {
        const flags = type.flags;
        // if (flags & TypeFlags.TypeParameter) {
        //     return getMappedType(type, mapper);
        // }
        if (flags & TypeFlags.Object) {
            const objectFlags = (type as ObjectType).objectFlags;
            if (objectFlags & (ObjectFlags.Reference | ObjectFlags.Anonymous | ObjectFlags.Mapped)) {
                if (objectFlags & ObjectFlags.Reference && !(type as TypeReference).node) {
                    const resolvedTypeArguments = (type as TypeReference).resolvedTypeArguments;
                    const newTypeArguments = instantiateTypes(resolvedTypeArguments, mapper);
                    return newTypeArguments !== resolvedTypeArguments ? createNormalizedTypeReference((type as TypeReference).target, newTypeArguments) : type;
                }
                if (objectFlags & ObjectFlags.ReverseMapped) {
                    return instantiateReverseMappedType(type as ReverseMappedType, mapper);
                }
                return getObjectTypeInstantiation(type as TypeReference | AnonymousType | MappedType, mapper, aliasSymbol, aliasTypeArguments);
            }
            return type;
        }
        if (flags & TypeFlags.UnionOrIntersection) {
            const origin = type.flags & TypeFlags.Union ? (type as UnionType).origin : undefined;
            const types = origin && origin.flags & TypeFlags.UnionOrIntersection ? (origin as UnionOrIntersectionType).types : (type as UnionOrIntersectionType).types;
            const newTypes = instantiateTypes(types, mapper);
            if (newTypes === types && aliasSymbol === type.aliasSymbol) {
                return type;
            }
            const newAliasSymbol = aliasSymbol || type.aliasSymbol;
            const newAliasTypeArguments = aliasSymbol ? aliasTypeArguments : instantiateTypes(type.aliasTypeArguments, mapper);
            // return flags & TypeFlags.Intersection || origin && origin.flags & TypeFlags.Intersection ?
            //     getIntersectionType(newTypes, IntersectionFlags.None, newAliasSymbol, newAliasTypeArguments) :
            return    getUnionType(newTypes, UnionReduction.Literal, newAliasSymbol, newAliasTypeArguments);
        }
        if (flags & TypeFlags.Index) {
            return getIndexType(instantiateType((type as IndexType).type, mapper));
        }
        // if (flags & TypeFlags.TemplateLiteral) {
        //     return getTemplateLiteralType((type as TemplateLiteralType).texts, instantiateTypes((type as TemplateLiteralType).types, mapper));
        // }
        // if (flags & TypeFlags.StringMapping) {
        //     return getStringMappingType((type as StringMappingType).symbol, instantiateType((type as StringMappingType).type, mapper));
        // }
        // if (flags & TypeFlags.IndexedAccess) {
        //     const newAliasSymbol = aliasSymbol || type.aliasSymbol;
        //     const newAliasTypeArguments = aliasSymbol ? aliasTypeArguments : instantiateTypes(type.aliasTypeArguments, mapper);
        //     return getIndexedAccessType(instantiateType((type as IndexedAccessType).objectType, mapper), instantiateType((type as IndexedAccessType).indexType, mapper), (type as IndexedAccessType).accessFlags, /*accessNode*/ undefined, newAliasSymbol, newAliasTypeArguments);
        // }
        // if (flags & TypeFlags.Conditional) {
        //     return getConditionalTypeInstantiation(type as ConditionalType, combineTypeMappers((type as ConditionalType).mapper, mapper), /*forConstraint*/ false, aliasSymbol, aliasTypeArguments);
        // }
        // if (flags & TypeFlags.Substitution) {
        //     const newBaseType = instantiateType((type as SubstitutionType).baseType, mapper);
        //     if (isNoInferType(type)) {
        //         return getNoInferType(newBaseType);
        //     }
        //     const newConstraint = instantiateType((type as SubstitutionType).constraint, mapper);
        //     // A substitution type originates in the true branch of a conditional type and can be resolved
        //     // to just the base type in the same cases as the conditional type resolves to its true branch
        //     // (because the base type is then known to satisfy the constraint).
        //     if (newBaseType.flags & TypeFlags.TypeVariable && isGenericType(newConstraint)) {
        //         return getSubstitutionType(newBaseType, newConstraint);
        //     }
        //     if (newConstraint.flags & TypeFlags.AnyOrUnknown || isTypeAssignableTo(getRestrictiveInstantiation(newBaseType), getRestrictiveInstantiation(newConstraint))) {
        //         return newBaseType;
        //     }
        //     return newBaseType.flags & TypeFlags.TypeVariable ? getSubstitutionType(newBaseType, newConstraint) : getIntersectionType([newConstraint, newBaseType]);
        // }
        return type;
    }

    function getIndexType(type: Type, indexFlags = IndexFlags.None): Type {
        type = getReducedType(type);
        // TODO 
        return wildcardType;
        // return isNoInferType(type) ? getNoInferType(getIndexType((type as SubstitutionType).baseType, indexFlags)) :
        //     shouldDeferIndexType(type, indexFlags) ? getIndexTypeForGenericType(type as InstantiableType | UnionOrIntersectionType, indexFlags) :
        //     type.flags & TypeFlags.Union ? getIntersectionType(map((type as UnionType).types, t => getIndexType(t, indexFlags))) :
        //     type.flags & TypeFlags.Intersection ? getUnionType(map((type as IntersectionType).types, t => getIndexType(t, indexFlags))) :
        //     getObjectFlags(type) & ObjectFlags.Mapped ? getIndexTypeForMappedType(type as MappedType, indexFlags) :
        //     type === wildcardType ? wildcardType :
        //     type.flags & TypeFlags.Unknown ? neverType :
        //     type.flags & (TypeFlags.Any | TypeFlags.Never) ? stringNumberSymbolType :
        //     getLiteralTypeFromProperties(type, (indexFlags & IndexFlags.NoIndexSignatures ? TypeFlags.StringLiteral : TypeFlags.StringLike) | (indexFlags & IndexFlags.StringsOnly ? 0 : TypeFlags.NumberLike | TypeFlags.ESSymbolLike), indexFlags === IndexFlags.None);
    }


    // This function is similar to instantiateType, except that (a) it only instantiates types that
    // are classified as instantiable (i.e. it doesn't instantiate object types), and (b) it performs
    // no reductions on instantiated union types.
    function instantiateInstantiableTypes(type: Type, mapper: TypeMapper): Type {
        if (type.flags & TypeFlags.Instantiable) {
            return instantiateType(type, mapper);
        }
        if (type.flags & TypeFlags.Union) {
            return getUnionType(map((type as UnionType).types, t => instantiateInstantiableTypes(t, mapper)), UnionReduction.None);
        }
        // if (type.flags & TypeFlags.Intersection) {
        //     return getIntersectionType(map((type as IntersectionType).types, t => instantiateInstantiableTypes(t, mapper)));
        // }
        return type;
    }

    function hasInferenceCandidatesOrDefault(info: InferenceInfo) {
        return !!(info.candidates || info.contraCandidates);// || hasTypeParameterDefault(info.typeParameter));
    }

    function containsType(types: readonly Type[], type: Type): boolean {
        return binarySearch(types, type, getTypeId, compareValues) >= 0;
    }
    
    // If the given contextual type contains instantiable types and if a mapper representing
    // return type inferences is available, instantiate those types using that mapper.
    function instantiateContextualType(contextualType: Type | undefined, node: Node, contextFlags: ContextFlags | undefined): Type | undefined {
        if (contextualType && maybeTypeOfKind(contextualType, TypeFlags.Instantiable)) {
            const inferenceContext = getInferenceContext(node);
            // If no inferences have been made, and none of the type parameters for which we are inferring
            // specify default types, nothing is gained from instantiating as type parameters would just be
            // replaced with their constraints similar to the apparent type.
            if (inferenceContext && contextFlags! & ContextFlags.Signature && some(inferenceContext.inferences, hasInferenceCandidatesOrDefault)) {
                // For contextual signatures we incorporate all inferences made so far, e.g. from return
                // types as well as arguments to the left in a function call.
                return instantiateInstantiableTypes(contextualType, inferenceContext.nonFixingMapper);
            }
            if (inferenceContext?.returnMapper) {
                // For other purposes (e.g. determining whether to produce literal types) we only
                // incorporate inferences made from the return type in a function call. We remove
                // the 'boolean' type from the contextual type such that contextually typed boolean
                // literals actually end up widening to 'boolean' (see #48363).
                const type = instantiateInstantiableTypes(contextualType, inferenceContext.returnMapper);
                return type.flags & TypeFlags.Union && containsType((type as UnionType).types, regularFalseType) && containsType((type as UnionType).types, regularTrueType) ?
                    filterType(type, t => t !== regularFalseType && t !== regularTrueType) :
                    type;
            }
        }
        return contextualType;
    }

    // Return the contextual type for a given expression node. During overload resolution, a contextual type may temporarily
    // be "pushed" onto a node using the contextualType property.
    function getApparentTypeOfContextualType(node: Expression, contextFlags: ContextFlags | undefined): Type | undefined {
        const contextualType = /*isObjectLiteralMethod(node) ?
            getContextualTypeForObjectLiteralMethod(node, contextFlags) :*/
            getContextualType(node, contextFlags);
        const instantiatedType = instantiateContextualType(contextualType, node, contextFlags);
        if (instantiatedType && !(contextFlags && contextFlags & ContextFlags.NoConstraints && instantiatedType.flags & TypeFlags.TypeVariable)) {
            const apparentType = mapType(
                instantiatedType,
                // When obtaining apparent type of *contextual* type we don't want to get apparent type of mapped types.
                // That would evaluate mapped types with array or tuple type constraints too eagerly
                // and thus it would prevent `getTypeOfPropertyOfContextualType` from obtaining per-position contextual type for elements of array literal expressions.
                // Apparent type of other mapped types is already the mapped type itself so we can just avoid calling `getApparentType` here for all mapped types.
                t => getObjectFlags(t) & ObjectFlags.Mapped ? t : getApparentType(t),
                /*noReductions*/ true,
            );
            // return apparentType.flags & TypeFlags.Union && isObjectLiteralExpression(node) ? discriminateContextualTypeByObjectMembers(node, apparentType as UnionType) :
            //     apparentType.flags & TypeFlags.Union && isJsxAttributes(node) ? discriminateContextualTypeByJSXAttributes(node, apparentType as UnionType) :
            //     apparentType;
            return apparentType;
        }
    }

    // If the given type is an object or union type with a single signature, and if that signature has at
    // least as many parameters as the given function, return the signature. Otherwise return undefined.
    function getContextualCallSignature(type: Type, node: SignatureDeclaration): Signature | undefined {
        const signatures = getSignaturesOfType(type, SignatureKind.Call);
        const applicableByArity = filter(signatures, s => !isAritySmaller(s, node));
        return applicableByArity.length === 1 ? applicableByArity[0] : getIntersectedSignatures(applicableByArity);
    }

    function getIntersectedSignatures(signatures: readonly Signature[]) {
        // return getStrictOptionValue(compilerOptions, "noImplicitAny")
        //     ? reduceLeft(
        //         signatures,
        //         (left: Signature | undefined, right) =>
        //             left === right || !left ? left
        //                 : compareTypeParametersIdentical(left.typeParameters, right!.typeParameters) ? combineSignaturesOfIntersectionMembers(left, right!)
        //                 : undefined,
        //     )
        //     : undefined;
        // TODO
        return undefined;
    }

    function isParamVarArgs(param: ParameterDeclaration) {
        return getCombinedModifierFlagsCached(param) & ModifierFlags.VarArgs;
    }

    function isSignatureVarArgs(signature: SignatureDeclaration) {
        return getCombinedModifierFlagsCached(signature) & ModifierFlags.VarArgs;
    }

    function hasEffectiveRestParameter(signature: Signature) {
        return isSignatureVarArgs(signature.declaration as SignatureDeclaration);
    }

    
    // Return the number of parameters in a signature. The rest parameter, if present, counts as one
    // parameter. For example, the parameter count of (x: number, y: number, ...z: string[]) is 3 and
    // the parameter count of (x: number, ...args: [number, ...string[], boolean])) is also 3. In the
    // latter example, the effective rest type is [...string[], boolean].
    function getParameterCount(signature: Signature) {
        const length = signature.parameters.length;
        if (signatureHasRestParameter(signature)) {
            const restType = getTypeOfSymbol(signature.parameters[length - 1]);            
        }
        return length;
    }


    /** If the contextual signature has fewer parameters than the function expression, do not use it */
    function isAritySmaller(signature: Signature, target: SignatureDeclaration) {
        let targetParameterCount = 0;
        for (; targetParameterCount < target.parameters.length; targetParameterCount++) {
            const param = target.parameters[targetParameterCount];                        
            if (param.initializer || param.dotDotDotToken /*|| isJSDocOptionalParameter(param)*/) {
                break;
            }
        }
        // if (target.parameters.length && parameterIsThisKeyword(target.parameters[0])) {
        //     targetParameterCount--;
        // }
        return !hasEffectiveRestParameter(signature) && getParameterCount(signature) < targetParameterCount;
    }


    // Return the contextual signature for a given expression node. A contextual type provides a
    // contextual signature if it has a single call signature and if that call signature is non-generic.
    // If the contextual type is a union type, get the signature from each type possible and if they are
    // all identical ignoring their return type, the result is same signature but with return type as
    // union type of return types from these signatures
    function getContextualSignature(node: FunctionExpression | InlineClosureExpression | SignatureDeclaration/* | MethodDeclaration*/): Signature | undefined {
        //Debug.assert(node.kind !== SyntaxKind.MethodDeclaration || isObjectLiteralMethod(node));
        const typeTagSignature = getSignatureOfTypeTag(node);
        if (typeTagSignature) {
            return typeTagSignature;
        }
        const type = getApparentTypeOfContextualType(node as Expression, ContextFlags.Signature);
        if (!type) {
            return undefined;
        }
        if (!(type.flags & TypeFlags.Union)) {
            return getContextualCallSignature(type, node);
        }
        let signatureList: Signature[] | undefined;
        const types = (type as UnionType).types;
        for (const current of types) {
            const signature = getContextualCallSignature(current, node);
            if (signature) {
                if (!signatureList) {
                    // This signature will contribute to contextual union signature
                    signatureList = [signature];
                }
                else if (!compareSignaturesIdentical(signatureList[0], signature, /*partialMatch*/ false, /*ignoreThisTypes*/ true, /*ignoreReturnTypes*/ true, compareTypesIdentical)) {
                    // Signatures aren't identical, do not use
                    return undefined;
                }
                else {
                    // Use this signature for contextual union signature
                    signatureList.push(signature);
                }
            }
        }
        // Result is union of signatures collected (return type is union of return types of this signature set)
        if (signatureList) {
            return signatureList.length === 1 ? signatureList[0] : createUnionSignature(signatureList[0], signatureList);
        }
    }

    function compareTypesIdentical(source: Type, target: Type): Ternary {
        return isTypeRelatedTo(source, target, identityRelation) ? Ternary.True : Ternary.False;
    }
    
    function cloneSignature(sig: Signature): Signature {
        const result = createSignature(sig.declaration, sig.typeParameters, sig.thisParameter, sig.parameters, /*resolvedReturnType*/ undefined, /*resolvedTypePredicate*/ undefined, sig.minArgumentCount, sig.flags & SignatureFlags.PropagatingFlags);
        result.target = sig.target;
        result.mapper = sig.mapper;
        result.compositeSignatures = sig.compositeSignatures;
        result.compositeKind = sig.compositeKind;
        return result;
    }

    function createUnionSignature(signature: Signature, unionSignatures: Signature[]) {
        const result = cloneSignature(signature);
        result.compositeSignatures = unionSignatures;
        result.compositeKind = TypeFlags.Union;
        result.target = undefined;
        result.mapper = undefined;
        return result;
    }

    function getMinArgumentCount(signature: Signature, flags?: MinArgumentCountFlags) {
        const strongArityForUntypedJS = flags! & MinArgumentCountFlags.StrongArityForUntypedJS;
        const voidIsNonOptional = flags! & MinArgumentCountFlags.VoidIsNonOptional;
        if (voidIsNonOptional || signature.resolvedMinArgumentCount === undefined) {
            let minArgumentCount: number | undefined;
            if (signatureHasRestParameter(signature)) {
                const restType = getTypeOfSymbol(signature.parameters[signature.parameters.length - 1]);
                // if (isTupleType(restType)) {
                //     const firstOptionalIndex = findIndex(restType.target.elementFlags, f => !(f & ElementFlags.Required));
                //     const requiredCount = firstOptionalIndex < 0 ? restType.target.fixedLength : firstOptionalIndex;
                //     if (requiredCount > 0) {
                //         minArgumentCount = signature.parameters.length - 1 + requiredCount;
                //     }
                // }
            }
            if (minArgumentCount === undefined) {
                if (!strongArityForUntypedJS && signature.flags & SignatureFlags.IsUntypedSignatureInJSFile) {
                    return 0;
                }
                minArgumentCount = signature.minArgumentCount;
            }
            if (voidIsNonOptional) {
                return minArgumentCount;
            }
            for (let i = minArgumentCount - 1; i >= 0; i--) {
                const type = getTypeAtPosition(signature, i);
                if (filterType(type, acceptsVoid).flags & TypeFlags.Never) {
                    break;
                }
                minArgumentCount = i;
            }
            signature.resolvedMinArgumentCount = minArgumentCount;
        }
        return signature.resolvedMinArgumentCount;
    }

    function acceptsVoid(t: Type): boolean {
        return !!(t.flags & TypeFlags.Void);
    }

    function getTypeAtPosition(signature: Signature, pos: number): Type {
        return tryGetTypeAtPosition(signature, pos) || anyType;
    }

    function tryGetTypeAtPosition(signature: Signature, pos: number): Type | undefined {
        const paramCount = signature.parameters.length - (signatureHasRestParameter(signature) ? 1 : 0);
        if (pos < paramCount) {
            return getTypeOfParameter(signature.parameters[pos]);
        }
        if (signatureHasRestParameter(signature)) {
            // We want to return the value undefined for an out of bounds parameter position,
            // so we need to check bounds here before calling getIndexedAccessType (which
            // otherwise would return the type 'undefined').
            const restType = getTypeOfSymbol(signature.parameters[paramCount]);
            const index = pos - paramCount;
            // if (!isTupleType(restType) || restType.target.combinedFlags & ElementFlags.Variable || index < restType.target.fixedLength) {
                //return getIndexedAccessType(restType, getNumberLiteralType(index));
                return undefined;// TODO
            // }
        }
        return undefined;
    }
    
    function addOptionality(type: Type, isProperty = false, isOptional = true): Type {
        return strictNullChecks && isOptional ? getOptionalType(type, isProperty) : type;
    }
    
    function getTypeOfParameter(symbol: Symbol) {
        const declaration = symbol.valueDeclaration;
        return addOptionality(
            getTypeOfSymbol(symbol),
            /*isProperty*/ false,
            /*isOptional*/ !!declaration && (hasInitializer(declaration)),
        );
    }



    function isMatchingSignature(source: Signature, target: Signature, partialMatch: boolean) {
        const sourceParameterCount = getParameterCount(source);
        const targetParameterCount = getParameterCount(target);
        const sourceMinArgumentCount = getMinArgumentCount(source);
        const targetMinArgumentCount = getMinArgumentCount(target);
        const sourceHasRestParameter = hasEffectiveRestParameter(source);
        const targetHasRestParameter = hasEffectiveRestParameter(target);
        // A source signature matches a target signature if the two signatures have the same number of required,
        // optional, and rest parameters.
        if (
            sourceParameterCount === targetParameterCount &&
            sourceMinArgumentCount === targetMinArgumentCount &&
            sourceHasRestParameter === targetHasRestParameter
        ) {
            return true;
        }
        // A source signature partially matches a target signature if the target signature has no fewer required
        // parameters
        if (partialMatch && sourceMinArgumentCount <= targetMinArgumentCount) {
            return true;
        }
        return false;
    }

    /**
     * See signatureRelatedTo, compareSignaturesIdentical
     */
    function compareSignaturesIdentical(source: Signature, target: Signature, partialMatch: boolean, ignoreThisTypes: boolean, ignoreReturnTypes: boolean, compareTypes: (s: Type, t: Type) => Ternary): Ternary {
        // TODO (drosen): De-duplicate code between related functions.
        if (source === target) {
            return Ternary.True;
        }
        if (!(isMatchingSignature(source, target, partialMatch))) {
            return Ternary.False;
        }
        // Check that the two signatures have the same number of type parameters.
        if (length(source.typeParameters) !== length(target.typeParameters)) {
            return Ternary.False;
        }
        // Check that type parameter constraints and defaults match. If they do, instantiate the source
        // signature with the type parameters of the target signature and continue the comparison.
        // if (target.typeParameters) {
        //     const mapper = createTypeMapper(source.typeParameters!, target.typeParameters);
        //     for (let i = 0; i < target.typeParameters.length; i++) {
        //         const s = source.typeParameters![i];
        //         const t = target.typeParameters[i];
        //         if (
        //             !(s === t || compareTypes(instantiateType(getConstraintFromTypeParameter(s), mapper) || unknownType, getConstraintFromTypeParameter(t) || unknownType) &&
        //                     compareTypes(instantiateType(getDefaultFromTypeParameter(s), mapper) || unknownType, getDefaultFromTypeParameter(t) || unknownType))
        //         ) {
        //             return Ternary.False;
        //         }
        //     }
        //     source = instantiateSignature(source, mapper, /*eraseTypeParameters*/ true);
        // }
        let result = Ternary.True;
        // if (!ignoreThisTypes) {
        //     const sourceThisType = getThisTypeOfSignature(source);
        //     if (sourceThisType) {
        //         const targetThisType = getThisTypeOfSignature(target);
        //         if (targetThisType) {
        //             const related = compareTypes(sourceThisType, targetThisType);
        //             if (!related) {
        //                 return Ternary.False;
        //             }
        //             result &= related;
        //         }
        //     }
        // }
        const targetLen = getParameterCount(target);
        for (let i = 0; i < targetLen; i++) {
            const s = getTypeAtPosition(source, i);
            const t = getTypeAtPosition(target, i);
            const related = compareTypes(t, s);
            if (!related) {
                return Ternary.False;
            }
            result &= related;
        }
        if (!ignoreReturnTypes) {
            // const sourceTypePredicate = getTypePredicateOfSignature(source);
            // const targetTypePredicate = getTypePredicateOfSignature(target);
            result &= /*sourceTypePredicate || targetTypePredicate ?
                compareTypePredicatesIdentical(sourceTypePredicate, targetTypePredicate, compareTypes) :*/
                compareTypes(getReturnTypeOfSignature(source), getReturnTypeOfSignature(target));
        }
        return result;
    }    
    
    function isArrayOrTupleType(type: Type): type is TypeReference {
        return isArrayType(type);// || isTupleType(type);
    }

    function isArrayType(type: Type): type is TypeReference {
        return !!(getObjectFlags(type) & ObjectFlags.Reference) && ((type as TypeReference).target === globalArrayType || (type as TypeReference).target === globalReadonlyArrayType);
    }
    
    /**
     * Reports implicit any errors that occur as a result of widening 'null' and 'undefined'
     * to 'any'. A call to reportWideningErrorsInType is normally accompanied by a call to
     * getWidenedType. But in some cases getWidenedType is called without reporting errors
     * (type argument inference is an example).
     *
     * The return value indicates whether an error was in fact reported. The particular circumstances
     * are on a best effort basis. Currently, if the null or undefined that causes widening is inside
     * an object literal property (arbitrarily deeply), this function reports an error. If no error is
     * reported, reportImplicitAnyError is a suitable fallback to report a general error.
     */
    function reportWideningErrorsInType(type: Type): boolean {
        let errorReported = false;
        if (getObjectFlags(type) & ObjectFlags.ContainsWideningType) {
            if (type.flags & TypeFlags.Union) {
                if (some((type as UnionType).types, isEmptyObjectType)) {
                    errorReported = true;
                }
                else {
                    for (const t of (type as UnionType).types) {
                        errorReported ||= reportWideningErrorsInType(t);
                    }
                }
            }
            else if (isArrayOrTupleType(type)) {
                // for (const t of getTypeArguments(type)) {
                //     errorReported ||= reportWideningErrorsInType(t);
                // }
            }
            else if (isObjectLiteralType(type)) {
                for (const p of getPropertiesOfObjectType(type)) {
                    const t = getTypeOfSymbol(p);
                    if (getObjectFlags(t) & ObjectFlags.ContainsWideningType) {
                        errorReported = reportWideningErrorsInType(t);
                        if (!errorReported) {
                            // we need to account for property types coming from object literal type normalization in unions
                            const valueDeclaration = p.declarations?.find(d => d.symbol.valueDeclaration?.parent === type.symbol.valueDeclaration);
                            if (valueDeclaration) {
                                error(valueDeclaration, Diagnostics.Object_literal_s_property_0_implicitly_has_an_1_type, symbolToString(p), typeToString(getWidenedType(t)));
                                errorReported = true;
                            }
                        }
                    }
                }
            }
        }
        return errorReported;
    }

    function getExtractStringType(type: Type) {
        return stringType;
        // const extractTypeAlias = getGlobalExtractSymbol();
        // return extractTypeAlias ? getTypeAliasInstantiation(extractTypeAlias, [type, stringType]) : stringType;
    }
    
    function getNonNullableTypeIfNeeded(type: Type) {
        return type;
    }

    function tryGetTypeFromEffectiveTypeNode(node: Node) {
        const typeNode = getEffectiveTypeAnnotationNode(node);
        if (typeNode) {
            return getTypeFromTypeNode(typeNode);
        }
    }

    function isEmptyArrayLiteral(node: Expression) {
        const expr = skipParentheses(node, /*excludeJSDocTypeAssertions*/ true);
        return expr.kind === SyntaxKind.ArrayLiteralExpression && (expr as ArrayLiteralExpression).elements.length === 0;
    }

    
    function getParameterTypeOfTypeTag(func: FunctionLikeDeclaration, parameter: ParameterDeclaration) {
        const signature = getSignatureOfTypeTag(func);
        if (!signature) return undefined;
        const pos = func.parameters.indexOf(parameter);
        return getTypeAtPosition(signature, pos); // TODO parameter.dotDotDotToken ? getRestTypeAtPosition(signature, pos) : getTypeAtPosition(signature, pos);
    }

    // Return the inferred type for a variable, parameter, or property declaration
    function getTypeForVariableLikeDeclaration(
        declaration: ParameterDeclaration | PropertyDeclaration |  VariableDeclaration | BindingElement,// | JSDocPropertyLikeTag,
        includeOptionality: boolean,
        checkMode: CheckMode,
    ): Type | undefined {
        // A variable declared in a for..in statement is of type string, or of type keyof T when the
        // right hand expression is of a type parameter type.
        if (isVariableDeclaration(declaration) && declaration.parent.parent.kind === SyntaxKind.ForEachStatement) {
            const indexType = getIndexType(getNonNullableTypeIfNeeded(checkExpression((declaration.parent.parent as ForEachStatement).expression, /*checkMode*/ checkMode)));
            return indexType.flags & (TypeFlags.TypeParameter | TypeFlags.Index) ? getExtractStringType(indexType) : stringType;
        }

        // if (isVariableDeclaration(declaration) && declaration.parent.parent.kind === SyntaxKind.ForOfStatement) {
        //     // checkRightHandSideOfForOf will return undefined if the for-of expression type was
        //     // missing properties/signatures required to get its iteratedType (like
        //     // [Symbol.iterator] or next). This may be because we accessed properties from anyType,
        //     // or it may have led to an error inside getElementTypeOfIterable.
        //     const forOfStatement = declaration.parent.parent;
        //     return checkRightHandSideOfForOf(forOfStatement) || anyType;
        // }

        if (isBindingPattern(declaration.parent)) {
            Debug.fail("implement me - getTypeForVariableLikeDeclaration");
            // return getTypeForBindingElement(declaration as BindingElement);
        }

        const isProperty = (isPropertyDeclaration(declaration));// && !hasAccessorModifier(declaration)) || isPropertySignature(declaration) || isJSDocPropertyTag(declaration);
        const isOptional = false;//includeOptionality && isOptionalDeclaration(declaration);

        // Use type from type annotation if one is present
        const declaredType = tryGetTypeFromEffectiveTypeNode(declaration);
        // if (isCatchClauseVariableDeclarationOrBindingElement(declaration)) {
        //     if (declaredType) {
        //         // If the catch clause is explicitly annotated with any or unknown, accept it, otherwise error.
        //         return isTypeAny(declaredType) || declaredType === unknownType ? declaredType : errorType;
        //     }
        //     // If the catch clause is not explicitly annotated, treat it as though it were explicitly
        //     // annotated with unknown or any, depending on useUnknownInCatchVariables.
        //     return useUnknownInCatchVariables ? unknownType : anyType;
        // }
        if (declaredType) {
            return addOptionality(declaredType, isProperty, isOptional);
        }

        if (
            (noImplicitAny || isInJSFile(declaration)) &&
            isVariableDeclaration(declaration) && !isBindingPattern(declaration.name) &&
            !(getCombinedModifierFlagsCached(declaration) & ModifierFlags.Export) && !(declaration.flags & NodeFlags.Ambient)
        ) {
            // If --noImplicitAny is on or the declaration is in a Javascript file,
            // use control flow tracked 'any' type for non-ambient, non-exported var or let variables with no
            // initializer or a 'null' or 'undefined' initializer.
            // if (!(getCombinedNodeFlagsCached(declaration) & NodeFlags.Constant) && (!declaration.initializer || isNullOrUndefined(declaration.initializer))) {
            //     return autoType;
            // }
            // Use control flow tracked 'any[]' type for non-ambient, non-exported variables with an empty array
            // literal initializer.
            if (declaration.initializer && isEmptyArrayLiteral(declaration.initializer)) {
                return autoArrayType;
            }
        }

        if (isParameter(declaration)) {
            if (!declaration.symbol) {
                // parameters of function types defined in JSDoc in TS files don't have symbols
                return;
            }
            const func = declaration.parent as FunctionLikeDeclaration;
            // For a parameter of a set accessor, use the type of the get accessor if one is present
            // if (func.kind === SyntaxKind.SetAccessor && hasBindableName(func)) {
            //     const getter = getDeclarationOfKind<AccessorDeclaration>(getSymbolOfDeclaration(declaration.parent), SyntaxKind.GetAccessor);
            //     if (getter) {
            //         const getterSignature = getSignatureFromDeclaration(getter);
            //         const thisParameter = getAccessorThisParameter(func as AccessorDeclaration);
            //         if (thisParameter && declaration === thisParameter) {
            //             // Use the type from the *getter*
            //             Debug.assert(!thisParameter.type);
            //             return getTypeOfSymbol(getterSignature.thisParameter!);
            //         }
            //         return getReturnTypeOfSignature(getterSignature);
            //     }
            // }
            const parameterTypeOfTypeTag = getParameterTypeOfTypeTag(func, declaration);
            if (parameterTypeOfTypeTag) return parameterTypeOfTypeTag;
            // Use contextual parameter type if one is available
            const type = getContextuallyTypedParameterType(declaration);//declaration.symbol.name === InternalSymbolName.This ? getContextualThisParameterType(func) : getContextuallyTypedParameterType(declaration);
            if (type) {
                return addOptionality(type, /*isProperty*/ false, isOptional);
            }
        }

        // Use the type of the initializer expression if one is present and the declaration is
        // not a parameter of a contextually typed function
        if (hasOnlyExpressionInitializer(declaration) && !!declaration.initializer) {
            // if (isInJSFile(declaration) && !isParameter(declaration)) {
            //     const containerObjectType = getJSContainerObjectType(declaration, getSymbolOfDeclaration(declaration), getDeclaredExpandoInitializer(declaration));
            //     if (containerObjectType) {
            //         return containerObjectType;
            //     }
            // }
            const type = widenTypeInferredFromInitializer(declaration, checkDeclarationInitializer(declaration, checkMode));
            return addOptionality(type, isProperty, isOptional);
        }

        // if (isPropertyDeclaration(declaration) && (noImplicitAny || isInJSFile(declaration))) {
        //     // We have a property declaration with no type annotation or initializer, in noImplicitAny mode or a .js file.
        //     // Use control flow analysis of this.xxx assignments in the constructor or static block to determine the type of the property.
        //     // if (!hasStaticModifier(declaration)) {
        //         const constructor = findConstructorDeclaration(declaration.parent);
        //         const type = constructor ? getFlowTypeInConstructor(declaration.symbol, constructor) :
        //             getEffectiveModifierFlags(declaration) & ModifierFlags.Ambient ? getTypeOfPropertyInBaseClass(declaration.symbol) :
        //             undefined;
        //         return type && addOptionality(type, /*isProperty*/ true, isOptional);
        //     // }
        //     // else {
        //     //     const staticBlocks = filter(declaration.parent.members, isClassStaticBlockDeclaration);
        //     //     const type = staticBlocks.length ? getFlowTypeInStaticBlocks(declaration.symbol, staticBlocks) :
        //     //         getEffectiveModifierFlags(declaration) & ModifierFlags.Ambient ? getTypeOfPropertyInBaseClass(declaration.symbol) :
        //     //         undefined;
        //     //     return type && addOptionality(type, /*isProperty*/ true, isOptional);
        //     // }
        // }

        // if (isJsxAttribute(declaration)) {
        //     // if JSX attribute doesn't have initializer, by default the attribute will have boolean value of true.
        //     // I.e <Elem attr /> is sugar for <Elem attr={true} />
        //     return trueType;
        // }

        // If the declaration specifies a binding pattern and is not a parameter of a contextually
        // typed function, use the type implied by the binding pattern
        // if (isBindingPattern(declaration.name)) {
        //     return getTypeFromBindingPattern(declaration.name, /*includePatternInType*/ false, /*reportErrors*/ true);
        // }

        // No type specified and nothing can be inferred
        return undefined;
    }

    function widenTypeInferredFromInitializer(declaration: HasExpressionInitializer, type: Type) {
        const widened = getWidenedLiteralType(type);
        if (isInJSFile(declaration)) {
            if (isEmptyLiteralType(widened)) {
                reportImplicitAny(declaration, anyType);
                return anyType;
            }
            else if (isEmptyArrayLiteralType(widened)) {
                reportImplicitAny(declaration, anyArrayType);
                return anyArrayType;
            }
        }
        return widened;
    }

    function checkDeclarationInitializer(
        declaration: HasExpressionInitializer,
        checkMode: CheckMode,
        contextualType?: Type | undefined,
    ) {
        const initializer = getEffectiveInitializer(declaration)!;
        // if (isInJSFile(declaration)) {
        //     const typeNode = tryGetJSDocSatisfiesTypeNode(declaration);
        //     if (typeNode) {
        //         return checkSatisfiesExpressionWorker(initializer, typeNode, checkMode);
        //     }
        // }
        const type = getQuickTypeOfExpression(initializer) || (contextualType ?
            checkExpressionWithContextualType(initializer, contextualType, /*inferenceContext*/ undefined, checkMode || CheckMode.Normal) :
            checkExpressionCached(initializer, checkMode));
        // TODO
        // if (isParameter(isBindingElement(declaration) ? walkUpBindingElementsAndPatterns(declaration) : declaration)) {
        //     if (declaration.name.kind === SyntaxKind.ObjectBindingPattern && isObjectLiteralType(type)) {
        //         return padObjectLiteralType(type as ObjectType, declaration.name);
        //     }
        //     if (declaration.name.kind === SyntaxKind.ArrayBindingPattern && isTupleType(type)) {
        //         return padTupleType(type, declaration.name);
        //     }
        // }
        return type;
    }

    function checkExpressionWithContextualType(node: Expression, contextualType: Type, inferenceContext: InferenceContext | undefined, checkMode: CheckMode): Type {
        const contextNode = getContextNode(node);
        pushContextualType(contextNode, contextualType, /*isCache*/ false);
        pushInferenceContext(contextNode, inferenceContext);
        const type = checkExpression(node, checkMode | CheckMode.Contextual | (inferenceContext ? CheckMode.Inferential : 0));
        // In CheckMode.Inferential we collect intra-expression inference sites to process before fixing any type
        // parameters. This information is no longer needed after the call to checkExpression.
        if (inferenceContext && inferenceContext.intraExpressionInferenceSites) {
            inferenceContext.intraExpressionInferenceSites = undefined;
        }
        // We strip literal freshness when an appropriate contextual type is present such that contextually typed
        // literals always preserve their literal types (otherwise they might widen during type inference). An alternative
        // here would be to not mark contextually typed literals as fresh in the first place.
        const result = maybeTypeOfKind(type, TypeFlags.Literal) && isLiteralOfContextualType(type, instantiateContextualType(contextualType, node, /*contextFlags*/ undefined)) ?
            getRegularTypeOfLiteralType(type) : type;
        popInferenceContext();
        popContextualType();
        return result;
    }

    function isLiteralOfContextualType(candidateType: Type, contextualType: Type | undefined): boolean {
        if (contextualType) {
            if (contextualType.flags & TypeFlags.UnionOrIntersection) {
                const types = (contextualType as UnionType).types;
                return some(types, t => isLiteralOfContextualType(candidateType, t));
            }
            if (contextualType.flags & TypeFlags.InstantiableNonPrimitive) {
                // If the contextual type is a type variable constrained to a primitive type, consider
                // this a literal context for literals of that primitive type. For example, given a
                // type parameter 'T extends string', infer string literal types for T.
                const constraint = getBaseConstraintOfType(contextualType) || unknownType;
                return maybeTypeOfKind(constraint, TypeFlags.String) && maybeTypeOfKind(candidateType, TypeFlags.StringLiteral) ||
                    maybeTypeOfKind(constraint, TypeFlags.Number) && maybeTypeOfKind(candidateType, TypeFlags.IntLiteral) ||
                    maybeTypeOfKind(constraint, TypeFlags.Float) && maybeTypeOfKind(candidateType, TypeFlags.FloatLiteral) ||
                    maybeTypeOfKind(constraint, TypeFlags.ESSymbol) && maybeTypeOfKind(candidateType, TypeFlags.UniqueESSymbol) ||
                    isLiteralOfContextualType(candidateType, constraint);
            }
            // If the contextual type is a literal of a particular primitive type, we consider this a
            // literal context for all literals of that primitive type.
            return !!(contextualType.flags & (TypeFlags.StringLiteral | TypeFlags.Index | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) && maybeTypeOfKind(candidateType, TypeFlags.StringLiteral) ||
                contextualType.flags & TypeFlags.IntLiteral && maybeTypeOfKind(candidateType, TypeFlags.IntLiteral) ||
                contextualType.flags & TypeFlags.FloatLiteral && maybeTypeOfKind(candidateType, TypeFlags.FloatLiteral) ||
                contextualType.flags & TypeFlags.BooleanLiteral && maybeTypeOfKind(candidateType, TypeFlags.BooleanLiteral) ||
                contextualType.flags & TypeFlags.UniqueESSymbol && maybeTypeOfKind(candidateType, TypeFlags.UniqueESSymbol));
        }
        return false;
    }

    function pushInferenceContext(node: Node, inferenceContext: InferenceContext | undefined) {
        inferenceContextNodes[inferenceContextCount] = node;
        inferenceContexts[inferenceContextCount] = inferenceContext;
        inferenceContextCount++;
    }

    function popInferenceContext() {
        inferenceContextCount--;
    }

    function pushCachedContextualType(node: Expression) {
        pushContextualType(node, getContextualType(node, /*contextFlags*/ undefined), /*isCache*/ true);
    }

    function pushContextualType(node: Expression, type: Type | undefined, isCache: boolean) {
        contextualTypeNodes[contextualTypeCount] = node;
        contextualTypes[contextualTypeCount] = type;
        contextualIsCache[contextualTypeCount] = isCache;
        contextualTypeCount++;
    }

    function popContextualType() {
        contextualTypeCount--;
    }

    function getContextNode(node: Expression): Expression {
        return node;
    }

    function isEmptyLiteralType(type: Type): boolean {
        return strictNullChecks ? type === implicitNeverType : type === undefinedWideningType;
    }

    function isEmptyArrayLiteralType(type: Type): boolean {
        const elementType = getElementTypeOfArrayType(type);
        return !!elementType && isEmptyLiteralType(elementType);
    }

    function getElementTypeOfArrayType(type: Type): Type | undefined {
        return isArrayType(type) ? getTypeArguments(type)[0] : undefined;
    }
    
    /**
     * Pop an entry from the type resolution stack and return its associated result value. The result value will
     * be true if no circularities were detected, or false if a circularity was found.
     */
    function popTypeResolution(): boolean {
        resolutionTargets.pop();
        resolutionPropertyNames.pop();
        return resolutionResults.pop()!;
    }

    function getDefaultTypeArgumentType(isInJavaScriptFile: boolean): Type {
        return isInJavaScriptFile ? anyType : unknownType;
    }


    /**
     * Fill in default types for unsupplied type arguments. If `typeArguments` is undefined
     * when a default type is supplied, a new array will be created and returned.
     *
     * @param typeArguments The supplied type arguments.
     * @param typeParameters The requested type parameters.
     * @param minTypeArgumentCount The minimum number of required type arguments.
     */
    function fillMissingTypeArguments(typeArguments: readonly Type[], typeParameters: readonly TypeParameter[] | undefined, minTypeArgumentCount: number, isJavaScriptImplicitAny: boolean): Type[];
    function fillMissingTypeArguments(typeArguments: readonly Type[] | undefined, typeParameters: readonly TypeParameter[] | undefined, minTypeArgumentCount: number, isJavaScriptImplicitAny: boolean): Type[] | undefined;
    function fillMissingTypeArguments(typeArguments: readonly Type[] | undefined, typeParameters: readonly TypeParameter[] | undefined, minTypeArgumentCount: number, isJavaScriptImplicitAny: boolean) {
        // const numTypeParameters = length(typeParameters);
        // if (!numTypeParameters) {
        //     return [];
        // }
        // const numTypeArguments = length(typeArguments);
        // if (isJavaScriptImplicitAny || (numTypeArguments >= minTypeArgumentCount && numTypeArguments <= numTypeParameters)) {
        //     const result = typeArguments ? typeArguments.slice() : [];
        //     // Map invalid forward references in default types to the error type
        //     for (let i = numTypeArguments; i < numTypeParameters; i++) {
        //         result[i] = errorType;
        //     }
        //     const baseDefaultType = getDefaultTypeArgumentType(isJavaScriptImplicitAny);
        //     for (let i = numTypeArguments; i < numTypeParameters; i++) {
        //         let defaultType = getDefaultFromTypeParameter(typeParameters![i]);
        //         if (isJavaScriptImplicitAny && defaultType && (isTypeIdenticalTo(defaultType, unknownType) || isTypeIdenticalTo(defaultType, emptyObjectType))) {
        //             defaultType = anyType;
        //         }
        //         result[i] = defaultType ? instantiateType(defaultType, createTypeMapper(typeParameters!, result)) : baseDefaultType;
        //     }
        //     result.length = typeParameters!.length;
        //     return result;
        // }
        // return typeArguments && typeArguments.slice();
        return typeArguments;
    }

    
    /**
     * Gets the minimum number of type arguments needed to satisfy all non-optional type
     * parameters.
     */
    function getMinTypeArgumentCount(typeParameters: readonly TypeParameter[] | undefined): number {
        let minTypeArgumentCount = 0;
        // TODO
        // if (typeParameters) {
        //     for (let i = 0; i < typeParameters.length; i++) {
        //         if (!hasTypeParameterDefault(typeParameters[i])) {
        //             minTypeArgumentCount = i + 1;
        //         }
        //     }
        // }
        return minTypeArgumentCount;
    }

    function getEffectiveTypeArguments(node: TypeReferenceNode , typeParameters: readonly TypeParameter[]): Type[] {
        return fillMissingTypeArguments(map(node.typeArguments!, getTypeFromTypeNode), typeParameters, getMinTypeArgumentCount(typeParameters), isInJSFile(node));
    }

    function getTypeArguments(type: TypeReference): readonly Type[] {
        if (!type.resolvedTypeArguments) {
            if (!pushTypeResolution(type, TypeSystemPropertyName.ResolvedTypeArguments)) {
                return concatenate(type.target.outerTypeParameters, type.target.localTypeParameters?.map(() => errorType)) || emptyArray;
            }
            const node = type.node;
            const typeArguments = !node ? emptyArray :
                node.kind === SyntaxKind.TypeReference ? concatenate(type.target.outerTypeParameters, getEffectiveTypeArguments(node, type.target.localTypeParameters!)) :
                node.kind === SyntaxKind.ArrayType ? [getTypeFromTypeNode(node.elementType)] :
                map((node as any).elements, getTypeFromTypeNode);
            if (popTypeResolution()) {
                type.resolvedTypeArguments ??= type.mapper ? instantiateTypes(typeArguments, type.mapper) : typeArguments;
            }
            else {
                type.resolvedTypeArguments ??= concatenate(type.target.outerTypeParameters, type.target.localTypeParameters?.map(() => errorType) || emptyArray);
                error(
                    type.node || currentNode,
                    type.target.symbol ? Diagnostics.Type_arguments_for_0_circularly_reference_themselves : Diagnostics.Tuple_type_arguments_circularly_reference_themselves,
                    type.target.symbol && symbolToString(type.target.symbol),
                );
            }
        }
        return type.resolvedTypeArguments;
    }

    function findResolutionCycleStartIndex(target: TypeSystemEntity, propertyName: TypeSystemPropertyName): number {
        for (let i = resolutionTargets.length - 1; i >= resolutionStart; i--) {
            if (resolutionTargetHasProperty(resolutionTargets[i], resolutionPropertyNames[i])) {
                return -1;
            }
            if (resolutionTargets[i] === target && resolutionPropertyNames[i] === propertyName) {
                return i;
            }
        }
        return -1;
    }

    function resolutionTargetHasProperty(target: TypeSystemEntity, propertyName: TypeSystemPropertyName): boolean {
        switch (propertyName) {
            case TypeSystemPropertyName.Type:
                return !!getSymbolLinks(target as Symbol).type;
            case TypeSystemPropertyName.DeclaredType:
                return !!getSymbolLinks(target as Symbol).declaredType;
            // case TypeSystemPropertyName.ResolvedBaseConstructorType:
            //     return !!(target as InterfaceType).resolvedBaseConstructorType;
            case TypeSystemPropertyName.ResolvedReturnType:
                return !!(target as Signature).resolvedReturnType;
            case TypeSystemPropertyName.ImmediateBaseConstraint:
                return !!(target as Type).immediateBaseConstraint;
            case TypeSystemPropertyName.ResolvedTypeArguments:
                return !!(target as TypeReference).resolvedTypeArguments;
            // case TypeSystemPropertyName.ResolvedBaseTypes:
            //     return !!(target as InterfaceType).baseTypesResolved;
            case TypeSystemPropertyName.WriteType:
                return !!getSymbolLinks(target as Symbol).writeType;
            case TypeSystemPropertyName.ParameterInitializerContainsUndefined:
                return getNodeLinks(target as ParameterDeclaration).parameterInitializerContainsUndefined !== undefined;
        }
        // @ts-ignore
        return Debug.assertNever(propertyName);
    }
    /**
     * Push an entry on the type resolution stack. If an entry with the given target and the given property name
     * is already on the stack, and no entries in between already have a type, then a circularity has occurred.
     * In this case, the result values of the existing entry and all entries pushed after it are changed to false,
     * and the value false is returned. Otherwise, the new entry is just pushed onto the stack, and true is returned.
     * In order to see if the same query has already been done before, the target object and the propertyName both
     * must match the one passed in.
     *
     * @param target The symbol, type, or signature whose type is being queried
     * @param propertyName The property name that should be used to query the target for its type
     */
    function pushTypeResolution(target: TypeSystemEntity, propertyName: TypeSystemPropertyName): boolean {
        const resolutionCycleStartIndex = findResolutionCycleStartIndex(target, propertyName);
        if (resolutionCycleStartIndex >= 0) {
            // A cycle was found
            const { length } = resolutionTargets;
            for (let i = resolutionCycleStartIndex; i < length; i++) {
                resolutionResults[i] = false;
            }
            return false;
        }
        resolutionTargets.push(target);
        resolutionResults.push(/*items*/ true);
        resolutionPropertyNames.push(propertyName);
        return true;
    }

    function widenTypeForVariableLikeDeclaration(type: Type | undefined, declaration: any, reportErrors?: boolean) {
        if (type) {
            // TODO: If back compat with pre-3.0/4.0 libs isn't required, remove the following SymbolConstructor special case transforming `symbol` into `unique symbol`
            // if (type.flags & TypeFlags.ESSymbol && isGlobalSymbolConstructor(declaration.parent)) {
            //     type = getESSymbolLikeTypeForNode(declaration);
            // }
            if (reportErrors) {
                reportErrorsFromWidening(declaration, type);
            }

            // always widen a 'unique symbol' type if the type was created for a different declaration.
            // if (type.flags & TypeFlags.UniqueESSymbol && (isBindingElement(declaration) || !declaration.type) && type.symbol !== getSymbolOfDeclaration(declaration)) {
            //     type = esSymbolType;
            // }

            return getWidenedType(type);
        }

        // Rest parameters default to type any[], other parameters default to type any
        type = isParameter(declaration) && declaration.dotDotDotToken ? anyArrayType : anyType;

        // Report implicit any errors unless this is a private property within an ambient declaration
        if (reportErrors) {
            // if (!declarationBelongsToPrivateAmbientMember(declaration)) {
            //     reportImplicitAny(declaration, type);
            // }
        }
        return type;
    }

    
    // Return the type associated with a variable, parameter, or property declaration. In the simple case this is the type
    // specified in a type annotation or inferred from an initializer. However, in the case of a destructuring declaration it
    // is a bit more involved. For example:
    //
    //   var [x, s = ""] = [1, "one"];
    //
    // Here, the array literal [1, "one"] is contextually typed by the type [any, string], which is the implied type of the
    // binding pattern [x, s = ""]. Because the contextual type is a tuple type, the resulting type of [1, "one"] is the
    // tuple type [number, string]. Thus, the type inferred for 'x' is number and the type inferred for 's' is string.
    function getWidenedTypeForVariableLikeDeclaration(declaration: ParameterDeclaration | PropertyDeclaration |  VariableDeclaration | BindingElement /*| JSDocPropertyLikeTag*/, reportErrors?: boolean): Type {
        return widenTypeForVariableLikeDeclaration(getTypeForVariableLikeDeclaration(declaration, /*includeOptionality*/ true, CheckMode.Normal), declaration, reportErrors);
    }
    
    function checkUnmatchedJSDocParameters(node: SignatureDeclaration) {
        console.warn("Implement me - checkUnmatchedJSDocParameters");
        // const jsdocParameters = filter(getJSDocTags(node), isJSDocParameterTag);
        // if (!length(jsdocParameters)) return;

        // const isJs = isInJSFile(node);
        // const parameters = new Set<string>();
        // const excludedParameters = new Set<number>();
        // forEach(node.parameters, ({ name }, index) => {
        //     if (isIdentifier(name)) {
        //         parameters.add(name.text);
        //     }
        //     if (isBindingPattern(name)) {
        //         excludedParameters.add(index);
        //     }
        // });

        // const containsArguments = containsArgumentsReference(node);
        // if (containsArguments) {
        //     const lastJSDocParamIndex = jsdocParameters.length - 1;
        //     const lastJSDocParam = jsdocParameters[lastJSDocParamIndex];
        //     if (
        //         isJs && lastJSDocParam && isIdentifier(lastJSDocParam.name) && lastJSDocParam.typeExpression &&
        //         lastJSDocParam.typeExpression.type && !parameters.has(lastJSDocParam.name.text) && !excludedParameters.has(lastJSDocParamIndex) && !isArrayType(getTypeFromTypeNode(lastJSDocParam.typeExpression.type))
        //     ) {
        //         error(lastJSDocParam.name, Diagnostics.JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name_It_would_match_arguments_if_it_had_an_array_type, idText(lastJSDocParam.name));
        //     }
        // }
        // else {
        //     forEach(jsdocParameters, ({ name, isNameFirst }, index) => {
        //         if (excludedParameters.has(index) || isIdentifier(name) && parameters.has(name.text)) {
        //             return;
        //         }
        //         if (isQualifiedName(name)) {
        //             if (isJs) {
        //                 error(name, Diagnostics.Qualified_name_0_is_not_allowed_without_a_leading_param_object_1, entityNameToString(name), entityNameToString(name.left));
        //             }
        //         }
        //         else {
        //             if (!isNameFirst) {
        //                 errorOrSuggestion(isJs, name, Diagnostics.JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name, idText(name));
        //             }
        //         }
        //     });
        // }
    }

    function isContextSensitiveFunctionOrObjectLiteralMethod(func: Node): func is FunctionExpression | InlineClosureExpression  {
        return (isFunctionExpressionOrInlineClosure(func)) &&// || isObjectLiteralMethod(func)) &&
            isContextSensitiveFunctionLikeDeclaration(func);
    }

    /**
     * Returns the effective arguments for an expression that works like a function invocation.
     */
    function getEffectiveCallArguments(node: CallLikeExpression): readonly Expression[] {
        // if (node.kind === SyntaxKind.BinaryExpression) {
        //     return [node.left];
        // }
        const args = node.arguments || emptyArray;
        // TODO
        // const spreadIndex = getSpreadArgumentIndex(args);
        // if (spreadIndex >= 0) {
        //     // Create synthetic arguments from spreads of tuple types.
        //     const effectiveArgs = args.slice(0, spreadIndex);
        //     for (let i = spreadIndex; i < args.length; i++) {
        //         const arg = args[i];
        //         // We can call checkExpressionCached because spread expressions never have a contextual type.
        //         const spreadType = arg.kind === SyntaxKind.SpreadElement && (flowLoopCount ? checkExpression((arg as SpreadElement).expression) : checkExpressionCached((arg as SpreadElement).expression));
        //         if (spreadType && isTupleType(spreadType)) {
        //             forEach(getElementTypes(spreadType), (t, i) => {
        //                 const flags = spreadType.target.elementFlags[i];
        //                 const syntheticArg = createSyntheticExpression(arg, flags & ElementFlags.Rest ? createArrayType(t) : t, !!(flags & ElementFlags.Variable), spreadType.target.labeledElementDeclarations?.[i]);
        //                 effectiveArgs.push(syntheticArg);
        //             });
        //         }
        //         else {
        //             effectiveArgs.push(arg);
        //         }
        //     }
        //     return effectiveArgs;
        // }
        return args;
    }

    function getWidenedLiteralType(type: Type): Type {
        return type.flags & TypeFlags.StringLiteral && isFreshLiteralType(type) ? stringType :
            type.flags & TypeFlags.IntLiteral && isFreshLiteralType(type) ? intType :
            type.flags & TypeFlags.FloatLiteral && isFreshLiteralType(type) ? floatType :
            type.flags & TypeFlags.BooleanLiteral && isFreshLiteralType(type) ? booleanType :
            type.flags & TypeFlags.Union ? mapType(type as UnionType, getWidenedLiteralType) :
            type;
    }

    function getRestTypeAtPosition(source: Signature, pos: number, readonly?: boolean): Type {
        console.warn("todo - getRestTypeAtPosition");
        return anyType;
    }

    // Return contextual type of parameter or undefined if no contextual type is available
    function getContextuallyTypedParameterType(parameter: ParameterDeclaration): Type | undefined {
        const func = parameter.parent;
        if (!isContextSensitiveFunctionOrObjectLiteralMethod(func)) {
            return undefined;
        }
        const iife = getImmediatelyInvokedFunctionExpression(func);
        if (iife && iife.arguments) {
            const args = getEffectiveCallArguments(iife);
            const indexOfParameter = func.parameters.indexOf(parameter);
            if (parameter.dotDotDotToken) {
                Debug.fail("Todo - getContextuallyTypedParameterType");
                //return getSpreadArgumentType(args, indexOfParameter, args.length, anyType, /*context*/ undefined, CheckMode.Normal);
            }
            const links = getNodeLinks(iife);
            const cached = links.resolvedSignature;
            links.resolvedSignature = anySignature;
            const type = indexOfParameter < args.length ?
                getWidenedLiteralType(checkExpression(args[indexOfParameter])) :
                parameter.initializer ? undefined : undefinedWideningType;
            links.resolvedSignature = cached;
            return type;
        }
        const contextualSignature = getContextualSignature(func);
        if (contextualSignature) {
            const index = func.parameters.indexOf(parameter);
            return parameter.dotDotDotToken && lastOrUndefined(func.parameters) === parameter ?
                getRestTypeAtPosition(contextualSignature, index) :
                tryGetTypeAtPosition(contextualSignature, index);
        }
    }


    function checkFunctionOrConstructorSymbolWorker(symbol: Symbol): void {
        console.warn("Implement me - checkFunctionOrConstructorSymbolWorker");
        // function getCanonicalOverload(overloads: Declaration[], implementation: FunctionLikeDeclaration | undefined): Declaration {
        //     // Consider the canonical set of flags to be the flags of the bodyDeclaration or the first declaration
        //     // Error on all deviations from this canonical set of flags
        //     // The caveat is that if some overloads are defined in lib.d.ts, we don't want to
        //     // report the errors on those. To achieve this, we will say that the implementation is
        //     // the canonical signature only if it is in the same container as the first overload
        //     const implementationSharesContainerWithFirstOverload = implementation !== undefined && implementation.parent === overloads[0].parent;
        //     return implementationSharesContainerWithFirstOverload ? implementation : overloads[0];
        // }

        // function checkFlagAgreementBetweenOverloads(overloads: Declaration[], implementation: FunctionLikeDeclaration | undefined, flagsToCheck: ModifierFlags, someOverloadFlags: ModifierFlags, allOverloadFlags: ModifierFlags): void {
        //     // Error if some overloads have a flag that is not shared by all overloads. To find the
        //     // deviations, we XOR someOverloadFlags with allOverloadFlags
        //     const someButNotAllOverloadFlags = someOverloadFlags ^ allOverloadFlags;
        //     if (someButNotAllOverloadFlags !== 0) {
        //         const canonicalFlags = getEffectiveDeclarationFlags(getCanonicalOverload(overloads, implementation), flagsToCheck);
        //         forEach(overloads, o => {
        //             const deviation = getEffectiveDeclarationFlags(o, flagsToCheck) ^ canonicalFlags;
        //             if (deviation & ModifierFlags.Export) {
        //                 error(getNameOfDeclaration(o), Diagnostics.Overload_signatures_must_all_be_exported_or_non_exported);
        //             }
        //             else if (deviation & ModifierFlags.Ambient) {
        //                 error(getNameOfDeclaration(o), Diagnostics.Overload_signatures_must_all_be_ambient_or_non_ambient);
        //             }
        //             else if (deviation & (ModifierFlags.Private | ModifierFlags.Protected)) {
        //                 error(getNameOfDeclaration(o) || o, Diagnostics.Overload_signatures_must_all_be_public_private_or_protected);
        //             }
        //             else if (deviation & ModifierFlags.Abstract) {
        //                 error(getNameOfDeclaration(o), Diagnostics.Overload_signatures_must_all_be_abstract_or_non_abstract);
        //             }
        //         });
        //     }
        // }

        // function checkQuestionTokenAgreementBetweenOverloads(overloads: Declaration[], implementation: FunctionLikeDeclaration | undefined, someHaveQuestionToken: boolean, allHaveQuestionToken: boolean): void {
        //     if (someHaveQuestionToken !== allHaveQuestionToken) {
        //         const canonicalHasQuestionToken = hasQuestionToken(getCanonicalOverload(overloads, implementation));
        //         forEach(overloads, o => {
        //             const deviation = hasQuestionToken(o) !== canonicalHasQuestionToken;
        //             if (deviation) {
        //                 error(getNameOfDeclaration(o), Diagnostics.Overload_signatures_must_all_be_optional_or_required);
        //             }
        //         });
        //     }
        // }

        // const flagsToCheck: ModifierFlags = ModifierFlags.Export | ModifierFlags.Ambient | ModifierFlags.Private | ModifierFlags.Protected | ModifierFlags.Abstract;
        // let someNodeFlags: ModifierFlags = ModifierFlags.None;
        // let allNodeFlags = flagsToCheck;
        // let someHaveQuestionToken = false;
        // let allHaveQuestionToken = true;
        // let hasOverloads = false;
        // let bodyDeclaration: FunctionLikeDeclaration | undefined;
        // let lastSeenNonAmbientDeclaration: FunctionLikeDeclaration | undefined;
        // let previousDeclaration: SignatureDeclaration | undefined;

        // const declarations = symbol.declarations;
        // const isConstructor = (symbol.flags & SymbolFlags.Constructor) !== 0;

        // function reportImplementationExpectedError(node: SignatureDeclaration): void {
        //     if (node.name && nodeIsMissing(node.name)) {
        //         return;
        //     }

        //     let seen = false;
        //     const subsequentNode = forEachChild(node.parent, c => {
        //         if (seen) {
        //             return c;
        //         }
        //         else {
        //             seen = c === node;
        //         }
        //     });
        //     // We may be here because of some extra nodes between overloads that could not be parsed into a valid node.
        //     // In this case the subsequent node is not really consecutive (.pos !== node.end), and we must ignore it here.
        //     if (subsequentNode && subsequentNode.pos === node.end) {
        //         if (subsequentNode.kind === node.kind) {
        //             const errorNode: Node = (subsequentNode as FunctionLikeDeclaration).name || subsequentNode;
        //             const subsequentName = (subsequentNode as FunctionLikeDeclaration).name;
        //             if (
        //                 node.name && subsequentName && (
        //                     // both are private identifiers
        //                     isPrivateIdentifier(node.name) && isPrivateIdentifier(subsequentName) && node.name.text === subsequentName.text ||
        //                     // Both are computed property names
        //                     isComputedPropertyName(node.name) && isComputedPropertyName(subsequentName) && isTypeIdenticalTo(checkComputedPropertyName(node.name), checkComputedPropertyName(subsequentName)) ||
        //                     // Both are literal property names that are the same.
        //                     isPropertyNameLiteral(node.name) && isPropertyNameLiteral(subsequentName) &&
        //                         getEscapedTextOfIdentifierOrLiteral(node.name) === getEscapedTextOfIdentifierOrLiteral(subsequentName)
        //                 )
        //             ) {
        //                 const reportError = (node.kind === SyntaxKind.MethodDeclaration || node.kind === SyntaxKind.MethodSignature) &&
        //                     isStatic(node) !== isStatic(subsequentNode);
        //                 // we can get here in two cases
        //                 // 1. mixed static and instance class members
        //                 // 2. something with the same name was defined before the set of overloads that prevents them from merging
        //                 // here we'll report error only for the first case since for second we should already report error in binder
        //                 if (reportError) {
        //                     const diagnostic = isStatic(node) ? Diagnostics.Function_overload_must_be_static : Diagnostics.Function_overload_must_not_be_static;
        //                     error(errorNode, diagnostic);
        //                 }
        //                 return;
        //             }
        //             if (nodeIsPresent((subsequentNode as FunctionLikeDeclaration).body)) {
        //                 error(errorNode, Diagnostics.Function_implementation_name_must_be_0, declarationNameToString(node.name));
        //                 return;
        //             }
        //         }
        //     }
        //     const errorNode: Node = node.name || node;
        //     if (isConstructor) {
        //         error(errorNode, Diagnostics.Constructor_implementation_is_missing);
        //     }
        //     else {
        //         // Report different errors regarding non-consecutive blocks of declarations depending on whether
        //         // the node in question is abstract.
        //         if (hasSyntacticModifier(node, ModifierFlags.Abstract)) {
        //             error(errorNode, Diagnostics.All_declarations_of_an_abstract_method_must_be_consecutive);
        //         }
        //         else {
        //             error(errorNode, Diagnostics.Function_implementation_is_missing_or_not_immediately_following_the_declaration);
        //         }
        //     }
        // }

        // let duplicateFunctionDeclaration = false;
        // let multipleConstructorImplementation = false;
        // let hasNonAmbientClass = false;
        // const functionDeclarations = [] as Declaration[];
        // if (declarations) {
        //     for (const current of declarations) {
        //         const node = current as SignatureDeclaration | ClassDeclaration | ClassExpression;
        //         const inAmbientContext = node.flags & NodeFlags.Ambient;
        //         const inAmbientContextOrInterface = node.parent && (node.parent.kind === SyntaxKind.InterfaceDeclaration || node.parent.kind === SyntaxKind.TypeLiteral) || inAmbientContext;
        //         if (inAmbientContextOrInterface) {
        //             // check if declarations are consecutive only if they are non-ambient
        //             // 1. ambient declarations can be interleaved
        //             // i.e. this is legal
        //             //     declare function foo();
        //             //     declare function bar();
        //             //     declare function foo();
        //             // 2. mixing ambient and non-ambient declarations is a separate error that will be reported - do not want to report an extra one
        //             previousDeclaration = undefined;
        //         }

        //         if ((node.kind === SyntaxKind.ClassDeclaration || node.kind === SyntaxKind.ClassExpression) && !inAmbientContext) {
        //             hasNonAmbientClass = true;
        //         }

        //         if (node.kind === SyntaxKind.FunctionDeclaration || node.kind === SyntaxKind.MethodDeclaration || node.kind === SyntaxKind.MethodSignature || node.kind === SyntaxKind.Constructor) {
        //             functionDeclarations.push(node);
        //             const currentNodeFlags = getEffectiveDeclarationFlags(node, flagsToCheck);
        //             someNodeFlags |= currentNodeFlags;
        //             allNodeFlags &= currentNodeFlags;
        //             someHaveQuestionToken = someHaveQuestionToken || hasQuestionToken(node);
        //             allHaveQuestionToken = allHaveQuestionToken && hasQuestionToken(node);
        //             const bodyIsPresent = nodeIsPresent((node as FunctionLikeDeclaration).body);

        //             if (bodyIsPresent && bodyDeclaration) {
        //                 if (isConstructor) {
        //                     multipleConstructorImplementation = true;
        //                 }
        //                 else {
        //                     duplicateFunctionDeclaration = true;
        //                 }
        //             }
        //             else if (previousDeclaration?.parent === node.parent && previousDeclaration.end !== node.pos) {
        //                 reportImplementationExpectedError(previousDeclaration);
        //             }

        //             if (bodyIsPresent) {
        //                 if (!bodyDeclaration) {
        //                     bodyDeclaration = node as FunctionLikeDeclaration;
        //                 }
        //             }
        //             else {
        //                 hasOverloads = true;
        //             }

        //             previousDeclaration = node;

        //             if (!inAmbientContextOrInterface) {
        //                 lastSeenNonAmbientDeclaration = node as FunctionLikeDeclaration;
        //             }
        //         }
        //         if (isInJSFile(current) && isFunctionLike(current) && current.jsDoc) {
        //             hasOverloads = length(getJSDocOverloadTags(current)) > 0;
        //         }
        //     }
        // }

        // if (multipleConstructorImplementation) {
        //     forEach(functionDeclarations, declaration => {
        //         error(declaration, Diagnostics.Multiple_constructor_implementations_are_not_allowed);
        //     });
        // }

        // if (duplicateFunctionDeclaration) {
        //     forEach(functionDeclarations, declaration => {
        //         error(getNameOfDeclaration(declaration) || declaration, Diagnostics.Duplicate_function_implementation);
        //     });
        // }

        // if (hasNonAmbientClass && !isConstructor && symbol.flags & SymbolFlags.Function && declarations) {
        //     const relatedDiagnostics = filter(declarations, d => d.kind === SyntaxKind.ClassDeclaration)
        //         .map(d => createDiagnosticForNode(d, Diagnostics.Consider_adding_a_declare_modifier_to_this_class));

        //     forEach(declarations, declaration => {
        //         const diagnostic = declaration.kind === SyntaxKind.ClassDeclaration
        //             ? Diagnostics.Class_declaration_cannot_implement_overload_list_for_0
        //             : declaration.kind === SyntaxKind.FunctionDeclaration
        //             ? Diagnostics.Function_with_bodies_can_only_merge_with_classes_that_are_ambient
        //             : undefined;
        //         if (diagnostic) {
        //             addRelatedInfo(
        //                 error(getNameOfDeclaration(declaration) || declaration, diagnostic, symbolName(symbol)),
        //                 ...relatedDiagnostics,
        //             );
        //         }
        //     });
        // }

        // // Abstract methods can't have an implementation -- in particular, they don't need one.
        // if (
        //     lastSeenNonAmbientDeclaration && !lastSeenNonAmbientDeclaration.body &&
        //     !hasSyntacticModifier(lastSeenNonAmbientDeclaration, ModifierFlags.Abstract) && !lastSeenNonAmbientDeclaration.questionToken
        // ) {
        //     reportImplementationExpectedError(lastSeenNonAmbientDeclaration);
        // }

        // if (hasOverloads) {
        //     if (declarations) {
        //         checkFlagAgreementBetweenOverloads(declarations, bodyDeclaration, flagsToCheck, someNodeFlags, allNodeFlags);
        //         checkQuestionTokenAgreementBetweenOverloads(declarations, bodyDeclaration, someHaveQuestionToken, allHaveQuestionToken);
        //     }

        //     if (bodyDeclaration) {
        //         const signatures = getSignaturesOfSymbol(symbol);
        //         const bodySignature = getSignatureFromDeclaration(bodyDeclaration);
        //         for (const signature of signatures) {
        //             if (!isImplementationCompatibleWithOverload(bodySignature, signature)) {
        //                 const errorNode = signature.declaration && isJSDocSignature(signature.declaration)
        //                     ? (signature.declaration.parent as JSDocOverloadTag | JSDocCallbackTag).tagName
        //                     : signature.declaration;
        //                 addRelatedInfo(
        //                     error(errorNode, Diagnostics.This_overload_signature_is_not_compatible_with_its_implementation_signature),
        //                     createDiagnosticForNode(bodyDeclaration, Diagnostics.The_implementation_signature_is_declared_here),
        //                 );
        //                 break;
        //             }
        //         }
        //     }
        // }
    }


    function checkCollisionsForDeclarationName(node: Node, name: Identifier | undefined) {
        if (!name) return;
        // TODO: needed?
        //checkCollisionWithRequireExportsInGeneratedCode(node, name);        
        // recordPotentialCollisionWithWeakMapSetInGeneratedCode(node, name);
        // recordPotentialCollisionWithReflectInGeneratedCode(node, name);        
    }

    function checkVariableStatement(node: VariableStatement) {
        // Grammar checking
        if (!checkGrammarModifiers(node) && !checkGrammarVariableDeclarationList(node.declarationList)) checkGrammarForDisallowedBlockScopedVariableStatement(node);
        checkVariableDeclarationList(node.declarationList);
    }

    function checkBlock(node: Block) {
        // Grammar checking for SyntaxKind.Block
        if (node.kind === SyntaxKind.Block) {
            //checkGrammarStatementInAmbientContext(node);
        }
        if (isFunctionOrModuleBlock(node)) {
            const saveFlowAnalysisDisabled = flowAnalysisDisabled;
            forEach(node.statements, checkSourceElement);
            flowAnalysisDisabled = saveFlowAnalysisDisabled;
        }
        else {
            forEach(node.statements, checkSourceElement);
        }
        if (node.locals) {
            registerForUnusedIdentifiersCheck(node);
        }
    }

    type PotentiallyUnusedIdentifier = SourceFile | /*ClassLikeDeclaration |*/ Block | CaseBlock | ForStatement | ForEachStatement | Exclude<SignatureDeclaration, IndexSignatureDeclaration /*| JSDocFunctionType*/>;

    function registerForUnusedIdentifiersCheck(node: PotentiallyUnusedIdentifier): void {
        addLazyDiagnostic(registerForUnusedIdentifiersCheckDiagnostics);

        function registerForUnusedIdentifiersCheckDiagnostics() {
            // May be in a call such as getTypeOfNode that happened to call this. But potentiallyUnusedIdentifiers is only defined in the scope of `checkSourceFile`.
            const sourceFile = getSourceFileOfNode(node);
            let potentiallyUnusedIdentifiers = allPotentiallyUnusedIdentifiers.get(sourceFile.path);
            if (!potentiallyUnusedIdentifiers) {
                potentiallyUnusedIdentifiers = [];
                allPotentiallyUnusedIdentifiers.set(sourceFile.path, potentiallyUnusedIdentifiers);
            }
            // TODO: GH#22580
            // Debug.assert(addToSeen(seenPotentiallyUnusedIdentifiers, getNodeId(node)), "Adding potentially-unused identifier twice");
            potentiallyUnusedIdentifiers.push(node);
        }
    }

    function errorOrSuggestion(isError: boolean, location: Node, message: DiagnosticMessage | DiagnosticMessageChain, ...args: DiagnosticArguments): void {
        // Pseudo-synthesized input node
        if (location.pos < 0 || location.end < 0) {
            if (!isError) {
                return; // Drop suggestions (we have no span to suggest on)
            }
            // Issue errors globally
            const file = getSourceFileOfNode(location);
            addErrorOrSuggestion(isError, "message" in message ? createFileDiagnostic(file, 0, 0, message, ...args) : createDiagnosticForFileFromMessageChain(file, message)); // eslint-disable-line local/no-in-operator
            return;
        }
        addErrorOrSuggestion(isError, "message" in message ? createDiagnosticForNode(location, message, ...args) : createDiagnosticForNodeFromMessageChain(getSourceFileOfNode(location), location, message)); // eslint-disable-line local/no-in-operator
    }

    function isReachableFlowNode(flow: FlowNode) {
        const result = isReachableFlowNodeWorker(flow, /*noCacheCheck*/ false);
        lastFlowNode = flow;
        lastFlowNodeReachable = result;
        return result;
    }

    function getFlowNodeId(flow: FlowNode): number {
        if (flow.id <= 0) {
            flow.id = nextFlowId;
            nextFlowId++;
        }
        return flow.id;
    }

    function checkGrammarModifiers(node: HasModifiers): boolean {         
        console.warn("Implement me - checkGrammarModifiers");
        return false;
    }
        
    function checkGrammarForDisallowedBlockScopedVariableStatement(node: VariableStatement) {
        return false;
        // if (!allowLetAndConstDeclarations(node.parent)) {
        //     const blockScopeKind = getCombinedNodeFlagsCached(node.declarationList) & NodeFlags.BlockScoped;
        //     if (blockScopeKind) {
        //         const keyword = blockScopeKind === NodeFlags.Let ? "let" :
        //             blockScopeKind === NodeFlags.Const ? "const" :
        //             blockScopeKind === NodeFlags.Using ? "using" :
        //             blockScopeKind === NodeFlags.AwaitUsing ? "await using" :
        //             Debug.fail("Unknown BlockScope flag");
        //         return grammarErrorOnNode(node, Diagnostics._0_declarations_can_only_be_declared_inside_a_block, keyword);
        //     }
        // }
    }

    function checkGrammarVariableDeclarationList(declarationList: VariableDeclarationList): boolean {
        const declarations = declarationList.declarations;
       
        // TODO


        // if (!declarationList.declarations.length) {
        //     return grammarErrorAtPos(declarationList, declarations.pos, declarations.end - declarations.pos, Diagnostics.Variable_declaration_list_cannot_be_empty);
        // }

        // const blockScopeFlags = declarationList.flags & NodeFlags.BlockScoped;
        // if ((blockScopeFlags === NodeFlags.Using || blockScopeFlags === NodeFlags.AwaitUsing) && isForInStatement(declarationList.parent)) {
        //     return grammarErrorOnNode(
        //         declarationList,
        //         blockScopeFlags === NodeFlags.Using ?
        //             Diagnostics.The_left_hand_side_of_a_for_in_statement_cannot_be_a_using_declaration :
        //             Diagnostics.The_left_hand_side_of_a_for_in_statement_cannot_be_an_await_using_declaration,
        //     );
        // }

        // if (blockScopeFlags === NodeFlags.AwaitUsing) {
        //     return checkAwaitGrammar(declarationList);
        // }

        return false;
    }

    function getEffectsSignature(node: CallExpression) {
        const links = getNodeLinks(node);
        let signature = links.effectsSignature;
        console.warn("todo - implement me - getEffectsSignature");
        // if (signature === undefined) {
        //     // A call expression parented by an expression statement is a potential assertion. Other call
        //     // expressions are potential type predicate function calls. In order to avoid triggering
        //     // circularities in control flow analysis, we use getTypeOfDottedName when resolving the call
        //     // target expression of an assertion.
        //     let funcType: Type | undefined;
        //     if (isBinaryExpression(node)) {
        //         const rightType = checkNonNullExpression(node.right);
        //         funcType = getSymbolHasInstanceMethodOfObjectType(rightType);
        //     }
        //     else if (node.parent.kind === SyntaxKind.ExpressionStatement) {
        //         funcType = getTypeOfDottedName(node.expression, /*diagnostic*/ undefined);
        //     }
        //     else if (node.expression.kind !== SyntaxKind.SuperKeyword) {
        //         if (isOptionalChain(node)) {
        //             funcType = checkNonNullType(
        //                 getOptionalExpressionType(checkExpression(node.expression), node.expression),
        //                 node.expression,
        //             );
        //         }
        //         else {
        //             funcType = checkNonNullExpression(node.expression);
        //         }
        //     }
        //     const signatures = getSignaturesOfType(funcType && getApparentType(funcType) || unknownType, SignatureKind.Call);
        //     const candidate = signatures.length === 1 && !signatures[0].typeParameters ? signatures[0] :
        //         some(signatures, hasTypePredicateOrNeverReturnType) ? getResolvedSignature(node) :
        //         undefined;
        //     signature = links.effectsSignature = candidate && hasTypePredicateOrNeverReturnType(candidate) ? candidate : unknownSignature;
        // }
        return signature === unknownSignature ? undefined : signature;
    }

    function getUnionOrIntersectionType(types: Type[], kind: TypeFlags | undefined, unionReduction?: UnionReduction) {
        return getUnionType(types, unionReduction);
    }

    /** NOTE: Return value of `[]` means a different thing than `undefined`. `[]` means func returns `void`, `undefined` means it returns `never`. */
    function checkAndAggregateReturnExpressionTypes(func: FunctionLikeDeclaration, checkMode: CheckMode | undefined): Type[] | undefined {
        const functionFlags = getFunctionFlags(func);
        const aggregatedTypes: Type[] = [];
        let hasReturnWithNoExpression = functionHasImplicitReturn(func);
        let hasReturnOfTypeNever = false;
        forEachReturnStatement(func.body as Block, returnStatement => {
            let expr = returnStatement.expression;
            if (expr) {
                expr = skipParentheses(expr, /*excludeJSDocTypeAssertions*/ true);
                // Bare calls to this same function don't contribute to inference
                // and `return await` is also safe to unwrap here
                // if (functionFlags & FunctionFlags.Async && expr.kind === SyntaxKind.AwaitExpression) {
                //     expr = skipParentheses((expr as AwaitExpression).expression, /*excludeJSDocTypeAssertions*/ true);
                // }
                if (
                    expr.kind === SyntaxKind.CallExpression &&
                    (expr as CallExpression).expression.kind === SyntaxKind.Identifier &&
                    checkExpressionCached((expr as CallExpression).expression).symbol === getMergedSymbol(func.symbol) &&
                    (!isFunctionExpressionOrInlineClosure(func.symbol.valueDeclaration!))// || isConstantReference((expr as CallExpression).expression))
                ) {
                    hasReturnOfTypeNever = true;
                    return;
                }

                let type = checkExpressionCached(expr, checkMode && checkMode & ~CheckMode.SkipGenericFunctions);
                // if (functionFlags & FunctionFlags.Async) {
                //     // From within an async function you can return either a non-promise value or a promise. Any
                //     // Promise/A+ compatible implementation will always assimilate any foreign promise, so the
                //     // return type of the body should be unwrapped to its awaited type, which should be wrapped in
                //     // the native Promise<T> type by the caller.
                //     type = unwrapAwaitedType(checkAwaitedType(type, /*withAlias*/ false, func, Diagnostics.The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member));
                // }
                if (type.flags & TypeFlags.Never) {
                    hasReturnOfTypeNever = true;
                }
                pushIfUnique(aggregatedTypes, type);
            }
            else {
                hasReturnWithNoExpression = true;
            }
        });
        if (aggregatedTypes.length === 0 && !hasReturnWithNoExpression && (hasReturnOfTypeNever || mayReturnNever(func))) {
            return undefined;
        }
        if (
            strictNullChecks && aggregatedTypes.length && hasReturnWithNoExpression &&
            !(false/*isJSConstructor(func)*/ && aggregatedTypes.some(t => t.symbol === func.symbol))
        ) {
            // Javascript "callable constructors", containing eg `if (!(this instanceof A)) return new A()` should not add undefined
            pushIfUnique(aggregatedTypes, undefinedType);
        }
        return aggregatedTypes;
    }

    function mayReturnNever(func: FunctionLikeDeclaration): boolean {
        switch (func.kind) {
            case SyntaxKind.FunctionExpression:
            case SyntaxKind.InlineClosureExpression:
                return true;
            // case SyntaxKind.MethodDeclaration:
            //     return func.parent.kind === SyntaxKind.ObjectLiteralExpression;
            default:
                return false;
        }
    }

    function isResolvingReturnTypeOfSignature(signature: Signature): boolean {
        return signature.compositeSignatures && some(signature.compositeSignatures, isResolvingReturnTypeOfSignature) ||
            !signature.resolvedReturnType && findResolutionCycleStartIndex(signature, TypeSystemPropertyName.ResolvedReturnType) >= 0;
    }

    function getContextualReturnType(functionDecl: SignatureDeclaration, contextFlags: ContextFlags | undefined): Type | undefined {
        // If the containing function has a return type annotation, is a constructor, or is a get accessor whose
        // corresponding set accessor has a type annotation, return statements in the function are contextually typed
        const returnType = getReturnTypeFromAnnotation(functionDecl);
        if (returnType) {
            return returnType;
        }
        // Otherwise, if the containing function is contextually typed by a function type with exactly one call signature
        // and that call signature is non-generic, return statements are contextually typed by the return type of the signature
        const signature = getContextualSignatureForFunctionLikeDeclaration(functionDecl as FunctionExpression);
        if (signature && !isResolvingReturnTypeOfSignature(signature)) {
            const returnType = getReturnTypeOfSignature(signature);
            const functionFlags = getFunctionFlags(functionDecl);
            if (functionFlags & FunctionFlags.Generator) {
                return filterType(returnType, t => {
                    return !!(t.flags & (TypeFlags.AnyOrUnknown | TypeFlags.Void | TypeFlags.InstantiableNonPrimitive));// || checkGeneratorInstantiationAssignabilityToReturnType(t, functionFlags, /*errorNode*/ undefined);
                });
            }
            if (functionFlags & FunctionFlags.Async) {
                return filterType(returnType, t => {
                    return !!(t.flags & (TypeFlags.AnyOrUnknown | TypeFlags.Void | TypeFlags.InstantiableNonPrimitive));// || !!getAwaitedTypeOfPromise(t);
                });
            }
            return returnType;
        }
        const iife = getImmediatelyInvokedFunctionExpression(functionDecl);
        if (iife) {
            return getContextualType(iife, contextFlags);
        }
        return undefined;
    }

    function getReturnTypeFromBody(func: FunctionLikeDeclaration, checkMode?: CheckMode): Type {
        if (!func.body) {
            return errorType;
        }

        const functionFlags = getFunctionFlags(func);
        const isAsync = (functionFlags & FunctionFlags.Async) !== 0;
        const isGenerator = (functionFlags & FunctionFlags.Generator) !== 0;

        let returnType: Type | undefined;
        let yieldType: Type | undefined;
        let nextType: Type | undefined;
        let fallbackReturnType: Type = voidType;
        if (func.body.kind !== SyntaxKind.Block) { // Async or normal arrow function
            returnType = checkExpressionCached(func.body, checkMode && checkMode & ~CheckMode.SkipGenericFunctions);
            // if (isAsync) {
            //     // From within an async function you can return either a non-promise value or a promise. Any
            //     // Promise/A+ compatible implementation will always assimilate any foreign promise, so the
            //     // return type of the body should be unwrapped to its awaited type, which we will wrap in
            //     // the native Promise<T> type later in this function.
            //     returnType = unwrapAwaitedType(checkAwaitedType(returnType, /*withAlias*/ false, /*errorNode*/ func, Diagnostics.The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member));
            // }
        }
        // else if (isGenerator) { // Generator or AsyncGenerator function
        //     const returnTypes = checkAndAggregateReturnExpressionTypes(func, checkMode);
        //     if (!returnTypes) {
        //         fallbackReturnType = neverType;
        //     }
        //     else if (returnTypes.length > 0) {
        //         returnType = getUnionType(returnTypes, UnionReduction.Subtype);
        //     }
        //     const { yieldTypes, nextTypes } = checkAndAggregateYieldOperandTypes(func, checkMode);
        //     yieldType = some(yieldTypes) ? getUnionType(yieldTypes, UnionReduction.Subtype) : undefined;
        //     nextType = some(nextTypes) ? getIntersectionType(nextTypes) : undefined;
        // }
        else { // Async or normal function
            const types = checkAndAggregateReturnExpressionTypes(func, checkMode);
            if (!types) {
                // For an async function, the return type will not be never, but rather a Promise for never.
                // return functionFlags & FunctionFlags.Async
                //     ? createPromiseReturnType(func, neverType) // Async function
                //     : neverType; // Normal function
                return neverType;
            }
            if (types.length === 0) {
                // For an async function, the return type will not be void/undefined, but rather a Promise for void/undefined.
                const contextualReturnType = getContextualReturnType(func, /*contextFlags*/ undefined);
                const returnType = contextualReturnType && (unwrapReturnType(contextualReturnType, functionFlags) || voidType).flags & TypeFlags.Undefined ? undefinedType : voidType;
                // return functionFlags & FunctionFlags.Async ? createPromiseReturnType(func, returnType) : // Async function
                //     returnType; // Normal function
                return returnType;
            }

            // Return a union of the return expression types.
            returnType = getUnionType(types, UnionReduction.Subtype);
        }

        if (returnType || yieldType || nextType) {
            if (yieldType) reportErrorsFromWidening(func, yieldType, WideningKind.GeneratorYield);
            if (returnType) reportErrorsFromWidening(func, returnType, WideningKind.FunctionReturn);
            if (nextType) reportErrorsFromWidening(func, nextType, WideningKind.GeneratorNext);
            if (
                returnType && isUnitType(returnType) ||
                yieldType && isUnitType(yieldType) ||
                nextType && isUnitType(nextType)
            ) {
                const contextualSignature = getContextualSignatureForFunctionLikeDeclaration(func);
                const contextualType = !contextualSignature ? undefined :
                    contextualSignature === getSignatureFromDeclaration(func) ? isGenerator ? undefined : returnType :
                    instantiateContextualType(getReturnTypeOfSignature(contextualSignature), func, /*contextFlags*/ undefined);
                // if (isGenerator) {
                //     yieldType = getWidenedLiteralLikeTypeForContextualIterationTypeIfNeeded(yieldType, contextualType, IterationTypeKind.Yield, isAsync);
                //     returnType = getWidenedLiteralLikeTypeForContextualIterationTypeIfNeeded(returnType, contextualType, IterationTypeKind.Return, isAsync);
                //     nextType = getWidenedLiteralLikeTypeForContextualIterationTypeIfNeeded(nextType, contextualType, IterationTypeKind.Next, isAsync);
                // }
                // else {
                    returnType = getWidenedLiteralLikeTypeForContextualReturnTypeIfNeeded(returnType, contextualType, isAsync);
                //}
            }

            if (yieldType) yieldType = getWidenedType(yieldType);
            if (returnType) returnType = getWidenedType(returnType);
            if (nextType) nextType = getWidenedType(nextType);
        }

        // if (isGenerator) {
        //     return createGeneratorType(
        //         yieldType || neverType,
        //         returnType || fallbackReturnType,
        //         nextType || getContextualIterationType(IterationTypeKind.Next, func) || unknownType,
        //         isAsync,
        //     );
        // }
        else {
            Debug.fail("todo implement me - getReturnTypeFromBody - async");
            // From within an async function you can return either a non-promise value or a promise. Any
            // Promise/A+ compatible implementation will always assimilate any foreign promise, so the
            // return type of the body is awaited type of the body, wrapped in a native Promise<T> type.
            // return isAsync
            //     ? createPromiseType(returnType || fallbackReturnType)
            //     : returnType || fallbackReturnType;
        }
    }

    function getWidenedLiteralLikeTypeForContextualType(type: Type, contextualType: Type | undefined) {
        if (!isLiteralOfContextualType(type, contextualType)) {
            Debug.fail("not available in LPC");
            type = errorType;// getWidenedUniqueESSymbolType(getWidenedLiteralType(type));
        }
        return getRegularTypeOfLiteralType(type);
    }

    function getWidenedLiteralLikeTypeForContextualReturnTypeIfNeeded(type: Type | undefined, contextualSignatureReturnType: Type | undefined, isAsync: boolean) {
        if (type && isUnitType(type)) {
            // const contextualType = !contextualSignatureReturnType ? undefined :
            //     isAsync ? getPromisedTypeOfPromise(contextualSignatureReturnType) :
            //     contextualSignatureReturnType;
            const contextualType = contextualSignatureReturnType;
            type = getWidenedLiteralLikeTypeForContextualType(type, contextualType);
        }
        return type;
    }

    function getReturnTypeOfSignature(signature: Signature): Type {        
        if (!signature.resolvedReturnType) {
            if (!pushTypeResolution(signature, TypeSystemPropertyName.ResolvedReturnType)) {
                return errorType;
            }
            let type = signature.target ? instantiateType(getReturnTypeOfSignature(signature.target), signature.mapper) :
                signature.compositeSignatures ? instantiateType(getUnionOrIntersectionType(map(signature.compositeSignatures, getReturnTypeOfSignature), signature.compositeKind, UnionReduction.Subtype), signature.mapper) :
                getReturnTypeFromAnnotation(signature.declaration!) ||
                (nodeIsMissing((signature.declaration as FunctionLikeDeclaration).body) ? anyType : getReturnTypeFromBody(signature.declaration as FunctionLikeDeclaration));
            // if (signature.flags & SignatureFlags.IsInnerCallChain) {
            //     type = addOptionalTypeMarker(type);
            // }
            if (signature.flags & SignatureFlags.IsOuterCallChain) {
                type = getOptionalType(type);
            }
            if (!popTypeResolution()) {
                if (signature.declaration) {
                    const typeNode = getEffectiveReturnTypeNode(signature.declaration);
                    if (typeNode) {
                        error(typeNode, Diagnostics.Return_type_annotation_circularly_references_itself);
                    }
                    else if (noImplicitAny) {
                        const declaration = signature.declaration as Declaration;
                        const name = getNameOfDeclaration(declaration);
                        if (name) {
                            error(name, Diagnostics._0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions, declarationNameToString(name));
                        }
                        else {
                            error(declaration, Diagnostics.Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions);
                        }
                    }
                }
                type = anyType;
            }
            signature.resolvedReturnType ??= type;
        }
        return signature.resolvedReturnType;
    }

    function isExhaustiveSwitchStatement(node: SwitchStatement): boolean {
        const links = getNodeLinks(node);
        if (links.isExhaustive === undefined) {
            links.isExhaustive = 0; // Indicate resolution is in process
            const exhaustive = computeExhaustiveSwitchStatement(node);
            if (links.isExhaustive === 0) {
                links.isExhaustive = exhaustive;
            }
        }
        else if (links.isExhaustive === 0) {
            links.isExhaustive = false; // Resolve circularity to false
        }
        return links.isExhaustive;
    }

    function computeExhaustiveSwitchStatement(node: SwitchStatement): boolean {        
        console.warn("todo implement me - computeExhaustiveSwitchStatement");
        return false;
        // const type = checkExpressionCached(node.expression);
        // if (!isLiteralType(type)) {
        //     return false;
        // }
        // const switchTypes = getSwitchClauseTypes(node);
        // if (!switchTypes.length || some(switchTypes, isNeitherUnitTypeNorNever)) {
        //     return false;
        // }
        // return eachTypeContainedIn(mapType(type, getRegularTypeOfLiteralType), switchTypes);
    }

    
    function isReachableFlowNodeWorker(flow: FlowNode, noCacheCheck: boolean): boolean {
        while (true) {
            if (flow === lastFlowNode) {
                return lastFlowNodeReachable;
            }
            const flags = flow.flags;
            if (flags & FlowFlags.Shared) {
                if (!noCacheCheck) {
                    const id = getFlowNodeId(flow);
                    const reachable = flowNodeReachable[id];
                    return reachable !== undefined ? reachable : (flowNodeReachable[id] = isReachableFlowNodeWorker(flow, /*noCacheCheck*/ true));
                }
                noCacheCheck = false;
            }
            if (flags & (FlowFlags.Assignment | FlowFlags.Condition | FlowFlags.ArrayMutation)) {
                flow = (flow as FlowAssignment | FlowCondition | FlowArrayMutation).antecedent;
            }
            else if (flags & FlowFlags.Call) {
                const signature = getEffectsSignature((flow as FlowCall).node);
                if (signature) {                    
                    if (getReturnTypeOfSignature(signature).flags & TypeFlags.Never) {
                        return false;
                    }
                }
                flow = (flow as FlowCall).antecedent;
            }
            else if (flags & FlowFlags.BranchLabel) {
                // A branching point is reachable if any branch is reachable.
                return some((flow as FlowLabel).antecedent, f => isReachableFlowNodeWorker(f, /*noCacheCheck*/ false));
            }
            else if (flags & FlowFlags.LoopLabel) {
                const antecedents = (flow as FlowLabel).antecedent;
                if (antecedents === undefined || antecedents.length === 0) {
                    return false;
                }
                // A loop is reachable if the control flow path that leads to the top is reachable.
                flow = antecedents[0];
            }
            else if (flags & FlowFlags.SwitchClause) {
                // The control flow path representing an unmatched value in a switch statement with
                // no default clause is unreachable if the switch statement is exhaustive.
                const data = (flow as FlowSwitchClause).node;
                if (data.clauseStart === data.clauseEnd && isExhaustiveSwitchStatement(data.switchStatement)) {
                    return false;
                }
                flow = (flow as FlowSwitchClause).antecedent;
            }
            else if (flags & FlowFlags.ReduceLabel) {
                // Cache is unreliable once we start adjusting labels
                lastFlowNode = undefined;
                const target = (flow as FlowReduceLabel).node.target;
                const saveAntecedents = target.antecedent;
                target.antecedent = (flow as FlowReduceLabel).node.antecedents;
                const result = isReachableFlowNodeWorker((flow as FlowReduceLabel).antecedent, /*noCacheCheck*/ false);
                target.antecedent = saveAntecedents;
                return result;
            }
            else {
                return !(flags & FlowFlags.Unreachable);
            }
        }
    }

    function getNodeCheckFlags(node: Node): NodeCheckFlags {
        const nodeId = node.id || 0;
        if (nodeId < 0 || nodeId >= nodeLinks.length) return 0;
        return nodeLinks[nodeId]?.flags || 0;
    }

    function hasNodeCheckFlag(node: Node, flag: LazyNodeCheckFlags) {
        calculateNodeCheckFlagWorker(node, flag);
        return !!(getNodeCheckFlags(node) & flag);
    }

    function calculateNodeCheckFlagWorker(node: Node, flag: LazyNodeCheckFlags) {
        if (!compilerOptions.noCheck && canIncludeBindAndCheckDiagnostics(getSourceFileOfNode(node), compilerOptions)) {
            // Unless noCheck is passed, assume calculation of node check flags has been done eagerly.
            // This saves needing to mark up where in the eager traversal certain results are "done",
            // just to reconcile the eager and lazy results. This wouldn't be hard if an eager typecheck
            // was actually an in-order traversal, but it isn't - some nodes are deferred, and so don't
            // have these node check flags calculated until that deferral is completed. As an example,
            // in concept, we could consider a class that we've called `checkSourceElement` on as having had
            // these flags calculated, but since the method bodies are deferred, we actually can't set the
            // flags as having been calculated until that deferral is completed.
            // The downside to this either/or approach to eager or lazy calculation is that we can't combine
            // a partial eager traversal and lazy calculation for the missing bits, and there's a bit of
            // overlap in functionality. This isn't a huge loss for any usecases today, but would be nice
            // alongside language service partial file checking and editor-triggered emit.
            return;
        }
        const links = getNodeLinks(node);
        if (links.calculatedFlags & flag) {
            return;
        }
        // This is only the set of `NodeCheckFlags` our emitter actually looks for, not all of them
        switch (flag) {
            case NodeCheckFlags.SuperInstance:
            case NodeCheckFlags.SuperStatic:
                return checkSingleSuperExpression(node);
            case NodeCheckFlags.MethodWithSuperPropertyAccessInAsync:
            case NodeCheckFlags.MethodWithSuperPropertyAssignmentInAsync:
            case NodeCheckFlags.ContainsSuperPropertyInStaticInitializer:
                return checkChildSuperExpressions(node);
            case NodeCheckFlags.CaptureArguments:
            case NodeCheckFlags.ContainsCapturedBlockScopeBinding:
            case NodeCheckFlags.NeedsLoopOutParameter:
            case NodeCheckFlags.ContainsConstructorReference:
                return checkChildIdentifiers(node);
            case NodeCheckFlags.ConstructorReference:
                return checkSingleIdentifier(node);
            case NodeCheckFlags.LoopWithCapturedBlockScopedBinding:
            case NodeCheckFlags.BlockScopedBindingInLoop:
            case NodeCheckFlags.CapturedBlockScopedBinding:
                return checkContainingBlockScopeBindingUses(node);
            default:
                return Debug.assertNever(flag, `Unhandled node check flag calculation: ${Debug.formatNodeCheckFlags(flag)}`);
        }

        function forEachNodeRecursively<T>(root: Node, cb: (node: Node, parent: Node) => T | "skip" | undefined): T | undefined {
            const rootResult = cb(root, root.parent);
            if (rootResult === "skip") return undefined;
            if (rootResult) return rootResult;
            return forEachChildRecursively(root, cb);
        }

        function checkSuperExpressions(node: Node) {
            const links = getNodeLinks(node);
            if (links.calculatedFlags & flag) return "skip";
            links.calculatedFlags |= NodeCheckFlags.MethodWithSuperPropertyAccessInAsync | NodeCheckFlags.MethodWithSuperPropertyAssignmentInAsync | NodeCheckFlags.ContainsSuperPropertyInStaticInitializer;
            checkSingleSuperExpression(node);
            return undefined;
        }

        function checkChildSuperExpressions(node: Node) {
            forEachNodeRecursively(node, checkSuperExpressions);
        }

        function checkSingleSuperExpression(node: Node) {
            const nodeLinks = getNodeLinks(node); // This is called on sub-nodes of the original input, make sure we set `calculatedFlags` on the correct node
            nodeLinks.calculatedFlags |= NodeCheckFlags.SuperInstance | NodeCheckFlags.SuperStatic; // Yes, we set this on non-applicable nodes, so we can entirely skip the traversal on future calls
            if (node.kind === SyntaxKind.SuperKeyword) {
                checkSuperExpression(node);
            }
        }
                
        function checkIdentifiers(node: Node) {
            const links = getNodeLinks(node);
            if (links.calculatedFlags & flag) return "skip";
            links.calculatedFlags |= NodeCheckFlags.CaptureArguments | NodeCheckFlags.ContainsCapturedBlockScopeBinding | NodeCheckFlags.NeedsLoopOutParameter | NodeCheckFlags.ContainsConstructorReference;
            checkSingleIdentifier(node);
            return undefined;
        }

        function checkChildIdentifiers(node: Node) {
            forEachNodeRecursively(node, checkIdentifiers);
        }

        function checkSingleIdentifier(node: Node) {
            const nodeLinks = getNodeLinks(node);
            nodeLinks.calculatedFlags |= NodeCheckFlags.ConstructorReference | NodeCheckFlags.CapturedBlockScopedBinding | NodeCheckFlags.BlockScopedBindingInLoop;
            if (isIdentifier(node) && isExpressionNode(node) && !(isPropertyAccessExpression(node.parent) && node.parent.name === node)) {
                const s = getSymbolAtLocation(node, /*ignoreErrors*/ true);
                if (s && s !== unknownSymbol) {
                    checkIdentifierCalculateNodeCheckFlags(node, s);
                }
            }
        }

        function checkBlockScopeBindings(node: Node) {
            const links = getNodeLinks(node);
            if (links.calculatedFlags & flag) return "skip";
            links.calculatedFlags |= NodeCheckFlags.LoopWithCapturedBlockScopedBinding | NodeCheckFlags.BlockScopedBindingInLoop | NodeCheckFlags.CapturedBlockScopedBinding;
            checkSingleBlockScopeBinding(node);
            return undefined;
        }

        function checkContainingBlockScopeBindingUses(node: Node) {
            const scope = getEnclosingBlockScopeContainer(isDeclarationName(node) ? node.parent : node);
            forEachNodeRecursively(scope, checkBlockScopeBindings);
        }

        function checkSingleBlockScopeBinding(node: Node) {
            checkSingleIdentifier(node);
            // if (isComputedPropertyName(node)) {
            //     checkComputedPropertyName(node);
            // }
            // if (isPrivateIdentifier(node) && isClassElement(node.parent)) {
            //     setNodeLinksForPrivateIdentifierScope(node.parent as PropertyDeclaration | PropertySignature | MethodDeclaration | MethodSignature | AccessorDeclaration);
            // }
        }
    }

    function isAutoTypedProperty(symbol: Symbol) {
        // A property is auto-typed when its declaration has no type annotation or initializer and we're in
        // noImplicitAny mode or a .js file.
        const declaration = symbol.valueDeclaration;
        return declaration && isPropertyDeclaration(declaration) && !getEffectiveTypeAnnotationNode(declaration) &&
            !declaration.initializer && (noImplicitAny || isInJSFile(declaration));
    }
    
    function getFlowTypeOfProperty(reference: Node, prop: Symbol | undefined) {
        const initialType = undefinedType;
        console.warn("todo implement me - getFlowTypeOfProperty");
        // const initialType = prop?.valueDeclaration
        //         && (!isAutoTypedProperty(prop) || getEffectiveModifierFlags(prop.valueDeclaration) & ModifierFlags.Ambient)
        //         && getTypeOfPropertyInBaseClass(prop)
        //     || undefinedType;
        return getFlowTypeOfReference(reference, autoType, initialType);
    }

    function getFlowTypeOfAccessExpression(node: ElementAccessExpression | PropertyAccessExpression | QualifiedName, prop: Symbol | undefined, propType: Type, errorNode: Node, checkMode: CheckMode | undefined) {
        // Only compute control flow type if this is a property access expression that isn't an
        // assignment target, and the referenced property was declared as a variable, property,
        // accessor, or optional method.
        const assignmentKind = getAssignmentTargetKind(node);
        if (assignmentKind === AssignmentKind.Definite) {
            return removeMissingType(propType, !!(prop && prop.flags & SymbolFlags.Optional));
        }
        if (
            prop &&
            !(prop.flags & (SymbolFlags.Variable | SymbolFlags.Property | SymbolFlags.Accessor))
            && !(prop.flags & SymbolFlags.Method && propType.flags & TypeFlags.Union)
            //&& !isDuplicatedCommonJSExport(prop.declarations)
        ) {
            return propType;
        }
        if (propType === autoType) {
            return getFlowTypeOfProperty(node, prop);
        }
        propType = getNarrowableTypeForReference(propType, node, checkMode);
        // If strict null checks and strict property initialization checks are enabled, if we have
        // a this.xxx property access, if the property is an instance property without an initializer,
        // and if we are in a constructor of the same class as the property declaration, assume that
        // the property is uninitialized at the top of the control flow.
        let assumeUninitialized = false;
        // if (strictNullChecks && strictPropertyInitialization && isAccessExpression(node) && node.expression.kind === SyntaxKind.ThisKeyword) {
        //     const declaration = prop && prop.valueDeclaration;
        //     if (declaration && isPropertyWithoutInitializer(declaration)) {
        //         if (!isStatic(declaration)) {
        //             const flowContainer = getControlFlowContainer(node);
        //             if (flowContainer.kind === SyntaxKind.Constructor && flowContainer.parent === declaration.parent && !(declaration.flags & NodeFlags.Ambient)) {
        //                 assumeUninitialized = true;
        //             }
        //         }
        //     }
        // } else 
        if (
            strictNullChecks && prop && prop.valueDeclaration &&
            isPropertyAccessExpression(prop.valueDeclaration) &&
            getAssignmentDeclarationPropertyAccessKind(prop.valueDeclaration) &&
            getControlFlowContainer(node) === getControlFlowContainer(prop.valueDeclaration)
        ) {
            assumeUninitialized = true;
        }
        const flowType = getFlowTypeOfReference(node, propType, assumeUninitialized ? getOptionalType(propType) : propType);
        if (assumeUninitialized && !containsUndefinedType(propType) && containsUndefinedType(flowType)) {
            error(errorNode, Diagnostics.Property_0_is_used_before_being_assigned, symbolToString(prop!)); // TODO: GH#18217
            // Return the declared type to reduce follow-on errors
            return propType;
        }
        return assignmentKind ? getBaseTypeOfLiteralType(flowType) : flowType;
    }

    function getOptionalType(type: Type, isProperty = false): Type {
        Debug.assert(strictNullChecks);
        const missingOrUndefined = isProperty ? undefinedOrMissingType : undefinedType;
        return type === missingOrUndefined || type.flags & TypeFlags.Union && (type as UnionType).types[0] === missingOrUndefined ? type : getUnionType([type, missingOrUndefined]);
    }

    
    /**
     * Check whether the requested property access is valid.
     * Returns true if node is a valid property access, and false otherwise.
     * @param node The node to be checked.
     * @param isSuper True if the access is from `super.`.
     * @param type The type of the object whose property is being accessed. (Not the type of the property.)
     * @param prop The symbol for the property being accessed.
     */
    function checkPropertyAccessibility(
        node: PropertyAccessExpression | QualifiedName | PropertyAccessExpression | VariableDeclaration | ParameterDeclaration | /*ImportTypeNode |*/ PropertyAssignment | ShorthandPropertyAssignment | BindingElement,
        isSuper: boolean,
        writing: boolean,
        type: Type,
        prop: Symbol,
        reportError = true,
    ): boolean {
        const errorNode = !reportError ? undefined :
            node.kind === SyntaxKind.QualifiedName ? node.right :
            //node.kind === SyntaxKind.ImportType ? node :
            node.kind === SyntaxKind.BindingElement && node.propertyName ? node.propertyName : node.name;

        return checkPropertyAccessibilityAtLocation(node, isSuper, writing, type, prop, errorNode);
    }

    /**
     * Check whether the requested property can be accessed at the requested location.
     * Returns true if node is a valid property access, and false otherwise.
     * @param location The location node where we want to check if the property is accessible.
     * @param isSuper True if the access is from `super.`.
     * @param writing True if this is a write property access, false if it is a read property access.
     * @param containingType The type of the object whose property is being accessed. (Not the type of the property.)
     * @param prop The symbol for the property being accessed.
     * @param errorNode The node where we should report an invalid property access error, or undefined if we should not report errors.
     */
    function checkPropertyAccessibilityAtLocation(location: Node, isSuper: boolean, writing: boolean, containingType: Type, prop: Symbol, errorNode?: Node): boolean {
        const flags = getDeclarationModifierFlagsFromSymbol(prop, writing);

        if (isSuper) {
            // TS 1.0 spec (April 2014): 4.8.2
            // - In a constructor, instance member function, instance member accessor, or
            //   instance member variable initializer where this references a derived class instance,
            //   a super property access is permitted and must specify a public instance member function of the base class.
            // - In a static member function or static member accessor
            //   where this references the constructor function object of a derived class,
            //   a super property access is permitted and must specify a public static member function of the base class.
            // if (languageVersion < ScriptTarget.ES2015) {
            //     if (symbolHasNonMethodDeclaration(prop)) {
            //         if (errorNode) {
            //             error(errorNode, Diagnostics.Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword);
            //         }
            //         return false;
            //     }
            // }
            // if (flags & ModifierFlags.Abstract) {
            //     // A method cannot be accessed in a super property access if the method is abstract.
            //     // This error could mask a private property access error. But, a member
            //     // cannot simultaneously be private and abstract, so this will trigger an
            //     // additional error elsewhere.
            //     if (errorNode) {
            //         error(errorNode, Diagnostics.Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression, symbolToString(prop), typeToString(getDeclaringClass(prop)!));
            //     }
            //     return false;
            // }
            // A class field cannot be accessed via super.* from a derived class.
            // This is true for both [[Set]] (old) and [[Define]] (ES spec) semantics.
            // if (!(flags & ModifierFlags.Static) && prop.declarations?.some(isClassInstanceProperty)) {
            //     if (errorNode) {
            //         error(errorNode, Diagnostics.Class_field_0_defined_by_the_parent_class_is_not_accessible_in_the_child_class_via_super, symbolToString(prop));
            //     }
            //     return false;
            // }
        }

        // Referencing abstract properties within their own constructors is not allowed
        // if (
        //     (flags & ModifierFlags.Abstract) && symbolHasNonMethodDeclaration(prop) &&
        //     (isThisProperty(location) || isThisInitializedObjectBindingExpression(location) || isObjectBindingPattern(location.parent) && isThisInitializedDeclaration(location.parent.parent))
        // ) {
        //     const declaringClassDeclaration = getClassLikeDeclarationOfSymbol(getParentOfSymbol(prop)!);
        //     if (declaringClassDeclaration && isNodeUsedDuringClassInitialization(location)) {
        //         if (errorNode) {
        //             error(errorNode, Diagnostics.Abstract_property_0_in_class_1_cannot_be_accessed_in_the_constructor, symbolToString(prop), getTextOfIdentifierOrLiteral(declaringClassDeclaration.name!));
        //         }
        //         return false;
        //     }
        // }

        // Public properties are otherwise accessible.
        if (!(flags & ModifierFlags.NonPublicAccessibilityModifier)) {
            return true;
        }

        // Property is known to be private or protected at this point

        // Private property is accessible if the property is within the declaring class
        // if (flags & ModifierFlags.Private) {
        //     const declaringClassDeclaration = getClassLikeDeclarationOfSymbol(getParentOfSymbol(prop)!)!;
        //     if (!isNodeWithinClass(location, declaringClassDeclaration)) {
        //         if (errorNode) {
        //             error(errorNode, Diagnostics.Property_0_is_private_and_only_accessible_within_class_1, symbolToString(prop), typeToString(getDeclaringClass(prop)!));
        //         }
        //         return false;
        //     }
        //     return true;
        // }

        // Property is known to be protected at this point

        // All protected properties of a supertype are accessible in a super access
        if (isSuper) {
            return true;
        }

        // Find the first enclosing class that has the declaring classes of the protected constituents
        // of the property as base classes
        // let enclosingClass = forEachEnclosingClass(location, enclosingDeclaration => {
        //     const enclosingClass = getDeclaredTypeOfSymbol(getSymbolOfDeclaration(enclosingDeclaration)) as InterfaceType;
        //     return isClassDerivedFromDeclaringClasses(enclosingClass, prop, writing);
        // });
        // // A protected property is accessible if the property is within the declaring class or classes derived from it
        // if (!enclosingClass) {
        //     // allow PropertyAccessibility if context is in function with this parameter
        //     // static member access is disallowed
        //     enclosingClass = getEnclosingClassFromThisParameter(location);
        //     enclosingClass = enclosingClass && isClassDerivedFromDeclaringClasses(enclosingClass, prop, writing);
        //     if (flags & ModifierFlags.Static || !enclosingClass) {
        //         if (errorNode) {
        //             error(errorNode, Diagnostics.Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses, symbolToString(prop), typeToString(getDeclaringClass(prop) || containingType));
        //         }
        //         return false;
        //     }
        // }
        // No further restrictions for static properties
        // if (flags & ModifierFlags.Static) {
        //     return true;
        // }
        // if (containingType.flags & TypeFlags.TypeParameter) {
        //     // get the original type -- represented as the type constraint of the 'this' type
        //     containingType = (containingType as TypeParameter).isThisType ? getConstraintOfTypeParameter(containingType as TypeParameter)! : getBaseConstraintOfType(containingType as TypeParameter)!; // TODO: GH#18217 Use a different variable that's allowed to be undefined
        // }
        // if (!containingType || !hasBaseType(containingType, enclosingClass)) {
        //     if (errorNode) {
        //         error(errorNode, Diagnostics.Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1_This_is_an_instance_of_class_2, symbolToString(prop), typeToString(enclosingClass), typeToString(containingType));
        //     }
        //     return false;
        // }
        return true;
    }


    function markPropertyAsReferenced(prop: Symbol, nodeForCheckWriteOnly: Node | undefined, isSelfTypeAccess: boolean) {
        const valueDeclaration = prop && (prop.flags & SymbolFlags.ClassMember) && prop.valueDeclaration;
        if (!valueDeclaration) {
            return;
        }
        const hasPrivateModifier = hasEffectiveModifier(valueDeclaration, ModifierFlags.Private);
        const hasPrivateIdentifier = prop.valueDeclaration && isNamedDeclaration(prop.valueDeclaration) && isPrivateIdentifier(prop.valueDeclaration.name);
        if (!hasPrivateModifier && !hasPrivateIdentifier) {
            return;
        }
        if (nodeForCheckWriteOnly && isWriteOnlyAccess(nodeForCheckWriteOnly) && !(prop.flags & SymbolFlags.SetAccessor)) {
            return;
        }
        if (isSelfTypeAccess) {
            // Find any FunctionLikeDeclaration because those create a new 'this' binding. But this should only matter for methods (or getters/setters).
            const containingMethod = findAncestor(nodeForCheckWriteOnly, isFunctionLikeDeclaration);
            if (containingMethod && containingMethod.symbol === prop) {
                return;
            }
        }

        (getCheckFlags(prop) & CheckFlags.Instantiated ? getSymbolLinks(prop).target : prop)!.isReferenced = SymbolFlags.All;
    }

    function isSelfTypeAccess(name: Expression | QualifiedName, parent: Symbol | undefined) {
        return !!parent && isEntityNameExpression(name) && parent === getResolvedSymbol(getFirstIdentifier(name));
    }
       
    // The invalid initializer error is needed in two situation:
    // 1. When result is undefined, after checking for a missing "this."
    // 2. When result is defined
    function checkAndReportErrorForInvalidInitializer(errorLocation: Node | undefined, name: string, propertyWithInvalidInitializer: PropertyDeclaration, result: Symbol | undefined) {
        // TODO
        // if (!emitStandardClassFields) {
        //     if (errorLocation && !result && checkAndReportErrorForMissingPrefix(errorLocation, name, name)) {
        //         return true;
        //     }
        //     // We have a match, but the reference occurred within a property initializer and the identifier also binds
        //     // to a local variable in the constructor where the code will be emitted. Note that this is actually allowed
        //     // with emitStandardClassFields because the scope semantics are different.
        //     error(
        //         errorLocation,
        //         errorLocation && propertyWithInvalidInitializer.type && textRangeContainsPositionInclusive(propertyWithInvalidInitializer.type, errorLocation.pos)
        //             ? Diagnostics.Type_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor
        //             : Diagnostics.Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor,
        //         declarationNameToString(propertyWithInvalidInitializer.name),
        //         diagnosticName(name),
        //     );
        //     return true;
        // }
        return false;
    }

    // Fully type check a source file and collect the relevant diagnostics.
    function checkSourceFileWorker(node: SourceFile) {
        const links = getNodeLinks(node);
        if (!(links.flags & NodeCheckFlags.TypeChecked)) {
            // if (skipTypeChecking(node, compilerOptions, host)) {
            //     return;
            // }

            // Grammar checking
            checkGrammarSourceFile(node);

            clear(potentialThisCollisions);
            clear(potentialNewTargetCollisions);
            clear(potentialWeakMapSetCollisions);
            clear(potentialReflectCollisions);
            //clear(potentialUnusedRenamedBindingElementsInTypes);

            if (links.flags & NodeCheckFlags.PartiallyTypeChecked) {
                potentialThisCollisions = links.potentialThisCollisions!;
                potentialNewTargetCollisions = links.potentialNewTargetCollisions!;
                potentialWeakMapSetCollisions = links.potentialWeakMapSetCollisions!;
                potentialReflectCollisions = links.potentialReflectCollisions!;
                //potentialUnusedRenamedBindingElementsInTypes = links.potentialUnusedRenamedBindingElementsInTypes!;
            }

            forEach(node.statements, checkSourceElement);
            checkSourceElement(node.endOfFileToken);

            checkDeferredNodes(node);
            
            registerForUnusedIdentifiersCheck(node);

            addLazyDiagnostic(() => {
                // This relies on the results of other lazy diagnostics, so must be computed after them
                if (!node.isDeclarationFile && (compilerOptions.noUnusedLocals || compilerOptions.noUnusedParameters)) {
                    checkUnusedIdentifiers(getPotentiallyUnusedIdentifiers(node), (containingNode, kind, diag) => {
                        if (!containsParseError(containingNode) && unusedIsError(kind, !!(containingNode.flags & NodeFlags.Ambient))) {
                            diagnostics.add(diag);
                        }
                    });
                }
                // if (!node.isDeclarationFile) {
                //     checkPotentialUncheckedRenamedBindingElementsInTypes();
                // }
            });

            // TODO: do we need this?
            // if (isExternalOrCommonJsModule(node)) {
            //     checkExternalModuleExports(node);
            // }
            
            // if (potentialNewTargetCollisions.length) {
            //     forEach(potentialNewTargetCollisions, checkIfNewTargetIsCapturedInEnclosingScope);
            //     clear(potentialNewTargetCollisions);
            // }

            // if (potentialWeakMapSetCollisions.length) {
            //     forEach(potentialWeakMapSetCollisions, checkWeakMapSetCollision);
            //     clear(potentialWeakMapSetCollisions);
            // }

            // if (potentialReflectCollisions.length) {
            //     forEach(potentialReflectCollisions, checkReflectCollision);
            //     clear(potentialReflectCollisions);
            // }

            links.flags |= NodeCheckFlags.TypeChecked;            
        }
    }
    
    function unusedIsError(kind: UnusedKind, isAmbient: boolean): boolean {
        if (isAmbient) {
            return false;
        }
        switch (kind) {
            case UnusedKind.Local:
                return !!compilerOptions.noUnusedLocals;
            case UnusedKind.Parameter:
                return !!compilerOptions.noUnusedParameters;
            default:
                return Debug.assertNever(kind);
        }
    }

    function getPotentiallyUnusedIdentifiers(sourceFile: SourceFile): readonly PotentiallyUnusedIdentifier[] {
        return allPotentiallyUnusedIdentifiers.get(sourceFile.path) || emptyArray;
    }

    function checkSourceFileNodesWorker(file: SourceFile, nodes: readonly Node[]) {
        // TODO
        console.warn("Implement me - checkSourceFileNodesWorker");
    }

    function checkDeferredNodes(context: SourceFile) {
        const links = getNodeLinks(context);
        if (links.deferredNodes) {
            links.deferredNodes.forEach(checkDeferredNode);
        }
        links.deferredNodes = undefined;
    }

    function getSymbolAtLocation(node: Node, ignoreErrors?: boolean): Symbol | undefined {
        if (isSourceFile(node)) {
            return getMergedSymbol(node.symbol);
        }
        const { parent } = node;
        const grandParent = parent.parent;

        if (isDeclarationNameOrImportPropertyName(node)) {
            // This is a declaration, call getSymbolOfNode
            const parentSymbol = getSymbolOfDeclaration(parent as Declaration);
            return parentSymbol; // TODO:
            // return isImportOrExportSpecifier(node.parent) && node.parent.propertyName === node
            //     ? getImmediateAliasedSymbol(parentSymbol)
            //     : parentSymbol;
        }
        // else if (isLiteralComputedPropertyDeclarationName(node)) {
        //     return getSymbolOfDeclaration(parent.parent as Declaration);
        // }

        if (node.kind === SyntaxKind.Identifier) {
            // if (isInRightSideOfImportOrExportAssignment(node as Identifier)) {
            //     return getSymbolOfNameOrPropertyAccessExpression(node as Identifier);
            // } else if (
            //     parent.kind === SyntaxKind.BindingElement &&
            //     grandParent.kind === SyntaxKind.ObjectBindingPattern &&
            //     node === (parent as BindingElement).propertyName
            // ) {
            //     const typeOfPattern = getTypeOfNode(grandParent);
            //     const propertyDeclaration = getPropertyOfType(typeOfPattern, (node as Identifier).text);

            //     if (propertyDeclaration) {
            //         return propertyDeclaration;
            //     }
            // }
            // else if (isMetaProperty(parent) && parent.name === node) {
            //     if (parent.keywordToken === SyntaxKind.NewKeyword && idText(node as Identifier) === "target") {
            //         // `target` in `new.target`
            //         return checkNewTargetMetaProperty(parent).symbol;
            //     }
            //     // The `meta` in `import.meta` could be given `getTypeOfNode(parent).symbol` (the `ImportMeta` interface symbol), but
            //     // we have a fake expression type made for other reasons already, whose transient `meta`
            //     // member should more exactly be the kind of (declarationless) symbol we want.
            //     // (See #44364 and #45031 for relevant implementation PRs)
            //     if (parent.keywordToken === SyntaxKind.ImportKeyword && idText(node as Identifier) === "meta") {
            //         return getGlobalImportMetaExpressionType().members!.get("meta" as string);
            //     }
            //     // no other meta properties are valid syntax, thus no others should have symbols
            //     return undefined;
            // }
        }

        switch (node.kind) {
            case SyntaxKind.Identifier:
            //case SyntaxKind.PrivateIdentifier:
            case SyntaxKind.PropertyAccessExpression:
            case SyntaxKind.QualifiedName:              
                return getSymbolOfNameOrPropertyAccessExpression(node as EntityName | PropertyAccessExpression);              
                // falls through            
            case SyntaxKind.SuperKeyword:
                return checkExpression(node as Expression).symbol;

            case SyntaxKind.StringLiteral:
            //case SyntaxKind.NoSubstitutionTemplateLiteral:
                // 1). import x = require("./mo/*gotToDefinitionHere*/d")
                // 2). External module name in an import declaration
                // 3). Dynamic import call or require in javascript
                // 4). type A = import("./f/*gotToDefinitionHere*/oo")
                // if (
                //     //(isExternalModuleImportEqualsDeclaration(node.parent.parent) && getExternalModuleImportEqualsDeclarationExpression(node.parent.parent) === node) ||
                //     //((node.parent.kind === SyntaxKind.ImportDeclaration || node.parent.kind === SyntaxKind.ExportDeclaration) && (node.parent as ImportDeclaration).moduleSpecifier === node) ||
                //     //(isInJSFile(node) && isJSDocImportTag(node.parent) && node.parent.moduleSpecifier === node) ||
                //     //((isInJSFile(node) && isRequireCall(node.parent, /*requireStringLiteralLikeArgument*/ false)) || isImportCall(node.parent)) ||
                //     (isLiteralTypeNode(node.parent) && isLiteralImportTypeNode(node.parent.parent) && node.parent.parent.argument === node.parent)
                // ) {
                //     return resolveExternalModuleName(node, node as LiteralExpression, ignoreErrors);
                // }
                // if (isCallExpression(parent) && isBindableObjectDefinePropertyCall(parent) && parent.arguments[1] === node) {
                //     return getSymbolOfDeclaration(parent);
                // }
                // falls through

            // case SyntaxKind.IntLiteral:            
            //     // index access
            //     const objectType = isElementAccessExpression(parent)
            //         ? parent.argumentExpression === node ? getTypeOfExpression(parent.expression) : undefined
            //         : isLiteralTypeNode(parent) && isIndexedAccessTypeNode(grandParent)
            //         ? getTypeFromTypeNode(grandParent.objectType)
            //         : undefined;
            //     return objectType && getPropertyOfType(objectType, escapeLeadingUnderscores((node as StringLiteral | NumericLiteral).text));
            
            //case SyntaxKind.FunctionKeyword:
            case SyntaxKind.EqualsGreaterThanToken:
            //case SyntaxKind.ClassKeyword:
                return getSymbolOfNode(node.parent);
            // case SyntaxKind.ImportType:
            //     return isLiteralImportTypeNode(node) ? getSymbolAtLocation(node.argument.literal, ignoreErrors) : undefined;

            // case SyntaxKind.ImportKeyword:
            // case SyntaxKind.NewKeyword:
            //     return isMetaProperty(node.parent) ? checkMetaPropertyKeyword(node.parent).symbol : undefined;            
            default:
                return undefined;
        }
    }
        
    function checkDeferredNode(node: Node) {
        tracing?.push(tracing.Phase.Check, "checkDeferredNode", { kind: node.kind, pos: node.pos, end: node.end, path: (node as TracingNode).tracingPath });
        const saveCurrentNode = currentNode;
        currentNode = node;
        instantiationCount = 0;
        switch (node.kind) {
            // TODO - lots to implement here
            case SyntaxKind.CallExpression:
            case SyntaxKind.NewExpression:
            // case SyntaxKind.TaggedTemplateExpression:            
                // These node kinds are deferred checked when overload resolution fails
                // To save on work, we ensure the arguments are checked just once, in
                // a deferred way
                resolveUntypedCall(node as CallLikeExpression);
                break;
            case SyntaxKind.FunctionExpression:
            case SyntaxKind.InlineClosureExpression:
            // case SyntaxKind.MethodDeclaration:
            // case SyntaxKind.MethodSignature:
                //checkFunctionExpressionOrObjectLiteralMethodDeferred(node as FunctionExpression);
                break;            
            case SyntaxKind.ClassExpression:
                //checkClassExpressionDeferred(node as ClassExpression);
                break;
            case SyntaxKind.TypeParameter:
                //checkTypeParameterDeferred(node as TypeParameterDeclaration);
                break;            
            // case SyntaxKind.TypeAssertionExpression:
            // case SyntaxKind.AsExpression:
            case SyntaxKind.ParenthesizedExpression:
                //checkAssertionDeferred(node as AssertionExpression | JSDocTypeAssertion);
                break;            
            case SyntaxKind.BinaryExpression:
                // if (isInstanceOfExpression(node)) {
                //     resolveUntypedCall(node);
                // }
                break;
        }
        currentNode = saveCurrentNode;
        tracing?.pop();
    }    

    function resolveUntypedCall(node: CallLikeExpression): Signature {                
        if (isBinaryExpression(node)) {
            checkExpression((node as BinaryExpression).left);
        }
        else if (isCallOrNewExpression(node)) {
            forEach(node.arguments, argument => {
                checkExpression(argument);
            });
        }
        return anySignature;
    }

    function callLikeExpressionMayHaveTypeArguments(node: CallLikeExpression): node is CallExpression /*| NewExpression*/ {
        return isCallOrNewExpression(node);
    }
    
    function checkExpression(node: Expression|QualifiedName, checkMode?: CheckMode, forceTuple?: boolean): Type {
        tracing?.push(tracing.Phase.Check, "checkExpression", { kind: node.kind, pos: node.pos, end: node.end, path: (node as TracingNode).tracingPath });
        const saveCurrentNode = currentNode;
        currentNode = node;
        instantiationCount = 0;
        const uninstantiatedType = checkExpressionWorker(node, checkMode, forceTuple);
        const type = instantiateTypeWithSingleGenericCallSignature(node, uninstantiatedType, checkMode);        
        currentNode = saveCurrentNode;
        tracing?.pop();
        return type;
    }

    function resolveStructuredTypeMembers(type: StructuredType): ResolvedType {
        // TODO 
        console.warn("Implement me - resolveStructuredTypeMembers");
        // if (!(type as ResolvedType).members) {
        //     if (type.flags & TypeFlags.Object) {
        //         if ((type as ObjectType).objectFlags & ObjectFlags.Reference) {
        //             resolveTypeReferenceMembers(type as TypeReference);
        //         }
        //         else if ((type as ObjectType).objectFlags & ObjectFlags.ClassOrInterface) {
        //             resolveClassOrInterfaceMembers(type as InterfaceType);
        //         }
        //         else if ((type as ReverseMappedType).objectFlags & ObjectFlags.ReverseMapped) {
        //             resolveReverseMappedTypeMembers(type as ReverseMappedType);
        //         }
        //         else if ((type as ObjectType).objectFlags & ObjectFlags.Anonymous) {
        //             resolveAnonymousTypeMembers(type as AnonymousType);
        //         }
        //         else if ((type as MappedType).objectFlags & ObjectFlags.Mapped) {
        //             resolveMappedTypeMembers(type as MappedType);
        //         }
        //         else {
        //             Debug.fail("Unhandled object type " + Debug.formatObjectFlags(type.objectFlags));
        //         }
        //     }
        //     else if (type.flags & TypeFlags.Union) {
        //         resolveUnionTypeMembers(type as UnionType);
        //     }
        //     else if (type.flags & TypeFlags.Intersection) {
        //         resolveIntersectionTypeMembers(type as IntersectionType);
        //     }
        //     else {
        //         Debug.fail("Unhandled type " + Debug.formatTypeFlags(type.flags));
        //     }
        // }
        return type as ResolvedType;
    }
    
    function getSingleSignature(type: Type, kind: SignatureKind, allowMembers: boolean): Signature | undefined {
        if (type.flags & TypeFlags.Object) {
            const resolved = resolveStructuredTypeMembers(type as ObjectType);
            if (allowMembers || resolved.properties.length === 0 && resolved.indexInfos.length === 0) {
                if (kind === SignatureKind.Call && resolved.callSignatures.length === 1 && resolved.constructSignatures.length === 0) {
                    return resolved.callSignatures[0];
                }
                if (kind === SignatureKind.Construct && resolved.constructSignatures.length === 1 && resolved.callSignatures.length === 0) {
                    return resolved.constructSignatures[0];
                }
            }
        }
        return undefined;
    }

    function checkSuperExpression(node: Node): Type {
        console.debug("TODO Implement me    checkSuperExpression");
        return anyType;
    }

    function instantiateTypeWithSingleGenericCallSignature(node: Expression|QualifiedName, type: Type, checkMode?: CheckMode) {
        return anyFunctionType;
        // not needed for LPC?
        // if (checkMode && checkMode & (CheckMode.Inferential | CheckMode.SkipGenericFunctions)) {
        //     const callSignature = getSingleSignature(type, SignatureKind.Call, /*allowMembers*/ true);
        //     const constructSignature = getSingleSignature(type, SignatureKind.Construct, /*allowMembers*/ true);
        //     const signature = callSignature || constructSignature;
        //     if (signature && signature.typeParameters) {
        //         const contextualType = getApparentTypeOfContextualType(node as Expression, ContextFlags.NoConstraints);
        //         if (contextualType) {
        //             const contextualSignature = getSingleSignature(getNonNullableType(contextualType), callSignature ? SignatureKind.Call : SignatureKind.Construct, /*allowMembers*/ false);
        //             if (contextualSignature && !contextualSignature.typeParameters) {
        //                 if (checkMode & CheckMode.SkipGenericFunctions) {
        //                     skippedGenericFunction(node, checkMode);
        //                     return anyFunctionType;
        //                 }
        //                 const context = getInferenceContext(node)!;
        //                 // We have an expression that is an argument of a generic function for which we are performing
        //                 // type argument inference. The expression is of a function type with a single generic call
        //                 // signature and a contextual function type with a single non-generic call signature. Now check
        //                 // if the outer function returns a function type with a single non-generic call signature and
        //                 // if some of the outer function type parameters have no inferences so far. If so, we can
        //                 // potentially add inferred type parameters to the outer function return type.
        //                 const returnType = context.signature && getReturnTypeOfSignature(context.signature);
        //                 const returnSignature = returnType && getSingleCallOrConstructSignature(returnType);
        //                 if (returnSignature && !returnSignature.typeParameters && !every(context.inferences, hasInferenceCandidates)) {
        //                     // Instantiate the signature with its own type parameters as type arguments, possibly
        //                     // renaming the type parameters to ensure they have unique names.
        //                     const uniqueTypeParameters = getUniqueTypeParameters(context, signature.typeParameters);
        //                     const instantiatedSignature = getSignatureInstantiationWithoutFillingInTypeArguments(signature, uniqueTypeParameters);
        //                     // Infer from the parameters of the instantiated signature to the parameters of the
        //                     // contextual signature starting with an empty set of inference candidates.
        //                     const inferences = map(context.inferences, info => createInferenceInfo(info.typeParameter));
        //                     applyToParameterTypes(instantiatedSignature, contextualSignature, (source, target) => {
        //                         inferTypes(inferences, source, target, /*priority*/ 0, /*contravariant*/ true);
        //                     });
        //                     if (some(inferences, hasInferenceCandidates)) {
        //                         // We have inference candidates, indicating that one or more type parameters are referenced
        //                         // in the parameter types of the contextual signature. Now also infer from the return type.
        //                         applyToReturnTypes(instantiatedSignature, contextualSignature, (source, target) => {
        //                             inferTypes(inferences, source, target);
        //                         });
        //                         // If the type parameters for which we produced candidates do not have any inferences yet,
        //                         // we adopt the new inference candidates and add the type parameters of the expression type
        //                         // to the set of inferred type parameters for the outer function return type.
        //                         if (!hasOverlappingInferences(context.inferences, inferences)) {
        //                             mergeInferences(context.inferences, inferences);
        //                             context.inferredTypeParameters = concatenate(context.inferredTypeParameters, uniqueTypeParameters);
        //                             return getOrCreateTypeFromSignature(instantiatedSignature);
        //                         }
        //                     }
        //                 }
        //                 // TODO: The signature may reference any outer inference contexts, but we map pop off and then apply new inference contexts, and thus get different inferred types.
        //                 // That this is cached on the *first* such attempt is not currently an issue, since expression types *also* get cached on the first pass. If we ever properly speculate, though,
        //                 // the cached "isolatedSignatureType" signature field absolutely needs to be included in the list of speculative caches.
        //                 return getOrCreateTypeFromSignature(instantiateSignatureInContextOf(signature, contextualSignature, context), flatMap(inferenceContexts, c => c && map(c.inferences, i => i.typeParameter)).slice());
        //             }
        //         }
        //     }
        // }
        // return type;
    }

    function checkExpressionWorker(node: Expression | QualifiedName, checkMode: CheckMode | undefined, forceTuple?: boolean): Type {
        const kind = node.kind;
        if (cancellationToken) {
            // Only bother checking on a few construct kinds.  We don't want to be excessively
            // hitting the cancellation token on every node we check.
            switch (kind) {
                case SyntaxKind.ClassExpression:
                case SyntaxKind.FunctionExpression:
                case SyntaxKind.InlineClosureExpression:
                    cancellationToken.throwIfCancellationRequested();
            }
        }
        switch (kind) {
            case SyntaxKind.Identifier:
                return checkIdentifier(node as Identifier, checkMode);
            // case SyntaxKind.PrivateIdentifier:
            //     return checkPrivateIdentifierExpression(node as PrivateIdentifier);
            // case SyntaxKind.ThisKeyword:
            //     return checkThisExpression(node);
            // case SyntaxKind.SuperKeyword:
            //     return checkSuperExpression(node);
            // case SyntaxKind.NullKeyword:
            //     return nullWideningType;
            // case SyntaxKind.NoSubstitutionTemplateLiteral:
            case SyntaxKind.StringLiteral:
            //     return hasSkipDirectInferenceFlag(node) ?
            //         blockedStringType :
                     getFreshTypeOfLiteralType(getStringLiteralType((node as StringLiteral).text));            
            case SyntaxKind.IntLiteral:
                //checkGrammarNumericLiteral(node as NumericLiteral);
                return getFreshTypeOfLiteralType(getNumberLiteralType(+(node as IntLiteral).text));
            case SyntaxKind.FloatLiteral:
                return getFreshTypeOfLiteralType(getNumberLiteralType(parseFloat((node as FloatLiteral).text)));
            // case SyntaxKind.BigIntLiteral:
            //     checkGrammarBigIntLiteral(node as BigIntLiteral);
            //     return getFreshTypeOfLiteralType(getBigIntLiteralType({
            //         negative: false,
            //         base10Value: parsePseudoBigInt((node as BigIntLiteral).text),
            //     }));
            // case SyntaxKind.TrueKeyword:
            //     return trueType;
            // case SyntaxKind.FalseKeyword:
            //     return falseType;
            // case SyntaxKind.TemplateExpression:
            //     return checkTemplateExpression(node as TemplateExpression);
            // case SyntaxKind.RegularExpressionLiteral:
            //     return checkRegularExpressionLiteral(node as RegularExpressionLiteral);
            // case SyntaxKind.ArrayLiteralExpression:
            //     return checkArrayLiteral(node as ArrayLiteralExpression, checkMode, forceTuple);
            // case SyntaxKind.ObjectLiteralExpression:
            //     return checkObjectLiteral(node as ObjectLiteralExpression, checkMode);
            // case SyntaxKind.PropertyAccessExpression:
            //     return checkPropertyAccessExpression(node as PropertyAccessExpression, checkMode);
            case SyntaxKind.QualifiedName:
                return checkQualifiedName(node as QualifiedName, checkMode);
            // case SyntaxKind.ElementAccessExpression:
            //     return checkIndexedAccess(node as ElementAccessExpression, checkMode);
            case SyntaxKind.CallExpression:
                // TODO - handle efuns here                
                // if ((node as CallExpression).expression.kind === SyntaxKind.ImportKeyword) {
                //     return checkImportCallExpression(node as ImportCall);
                // }
                // falls through
            case SyntaxKind.NewExpression:
                return checkCallExpression(node as CallExpression, checkMode);
            // case SyntaxKind.TaggedTemplateExpression:
            //     return checkTaggedTemplateExpression(node as TaggedTemplateExpression);
            // case SyntaxKind.ParenthesizedExpression:
            //     return checkParenthesizedExpression(node as ParenthesizedExpression, checkMode);
            // case SyntaxKind.ClassExpression:
            //     return checkClassExpression(node as ClassExpression);
            // case SyntaxKind.FunctionExpression:
            // case SyntaxKind.ArrowFunction:
            //     return checkFunctionExpressionOrObjectLiteralMethod(node as FunctionExpression | ArrowFunction, checkMode);
            // case SyntaxKind.TypeOfExpression:
            //     return checkTypeOfExpression(node as TypeOfExpression);
            // case SyntaxKind.TypeAssertionExpression:
            // case SyntaxKind.AsExpression:
            //     return checkAssertion(node as AssertionExpression, checkMode);
            // case SyntaxKind.NonNullExpression:
            //     return checkNonNullAssertion(node as NonNullExpression);
            // case SyntaxKind.ExpressionWithTypeArguments:
            //     return checkExpressionWithTypeArguments(node as ExpressionWithTypeArguments);
            // case SyntaxKind.SatisfiesExpression:
            //     return checkSatisfiesExpression(node as SatisfiesExpression);
            // case SyntaxKind.MetaProperty:
            //     return checkMetaProperty(node as MetaProperty);
            // case SyntaxKind.DeleteExpression:
            //     return checkDeleteExpression(node as DeleteExpression);
            // case SyntaxKind.VoidExpression:
            //     return checkVoidExpression(node as VoidExpression);
            // case SyntaxKind.AwaitExpression:
            //     return checkAwaitExpression(node as AwaitExpression);
            case SyntaxKind.PrefixUnaryExpression:
                return checkPrefixUnaryExpression(node as PrefixUnaryExpression);
            case SyntaxKind.PostfixUnaryExpression:
                return checkPostfixUnaryExpression(node as PostfixUnaryExpression);
            case SyntaxKind.BinaryExpression:
                return checkBinaryExpression(node as BinaryExpression, checkMode);
            case SyntaxKind.ConditionalExpression:
                return checkConditionalExpression(node as ConditionalExpression, checkMode);
            // case SyntaxKind.SpreadElement:
            //     return checkSpreadExpression(node as SpreadElement, checkMode);            
            // case SyntaxKind.SyntheticExpression:
            //     return checkSyntheticExpression(node as SyntheticExpression);
        }
        console.warn("Implement me - checkExpressionWorker - " + Debug.formatSyntaxKind(node.kind));
        return errorType;
    }

    function checkConditionalExpression(node: ConditionalExpression, checkMode?: CheckMode): Type {
        const type = checkTruthinessExpression(node.condition, checkMode);
        checkTestingKnownTruthyCallableOrAwaitableOrEnumMemberType(node.condition, type, node.whenTrue);
        const type1 = checkExpression(node.whenTrue, checkMode);
        const type2 = checkExpression(node.whenFalse, checkMode);
        return getUnionType([type1, type2], UnionReduction.Subtype);
    }

    function checkDeprecatedSignature(signature: Signature, node: CallLikeExpression) {
        if (signature.flags & SignatureFlags.IsSignatureCandidateForOverloadFailure) return;
        if (signature.declaration && signature.declaration.flags & NodeFlags.Deprecated) {
            console.warn("Implement me - checkDeprecatedSignature");
            // const suggestionNode = getDeprecatedSuggestionNode(node);
            // const name = tryGetPropertyAccessOrIdentifierToString(getInvokedExpression(node));
            // addDeprecatedSuggestionWithSignature(suggestionNode, signature.declaration, name, signatureToString(signature));
        }
    }

    /**
     * Syntactically and semantically checks a call or new expression.
     * @param node The call/new expression to be checked.
     * @returns On success, the expression's signature's return type. On failure, anyType.
     */
    function checkCallExpression(node: CallExpression | NewExpression, checkMode?: CheckMode): Type {
        //checkGrammarTypeArguments(node, node.typeArguments);

        const signature = getResolvedSignature(node, /*candidatesOutArray*/ undefined, checkMode);
        if (signature === resolvingSignature) {
            // CheckMode.SkipGenericFunctions is enabled and this is a call to a generic function that
            // returns a function type. We defer checking and return silentNeverType.
            return silentNeverType;
        }

        checkDeprecatedSignature(signature, node);

        if (node.expression.kind === SyntaxKind.SuperKeyword) {
            return voidType;
        }

        if (node.kind === SyntaxKind.NewExpression) {
            const declaration = signature.declaration;

            if (
                declaration
                // declaration.kind !== SyntaxKind.Constructor &&
                // declaration.kind !== SyntaxKind.ConstructSignature &&
                // declaration.kind !== SyntaxKind.ConstructorType &&
                // !(isJSDocSignature(declaration) && getJSDocRoot(declaration)?.parent?.kind === SyntaxKind.Constructor) &&
                // !isJSDocConstructSignature(declaration) &&
                // !isJSConstructor(declaration)
            ) {
                // When resolved signature is a call signature (and not a construct signature) the result type is any
                // if (noImplicitAny) {
                //     error(node, Diagnostics.new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type);
                // }
                return anyType;
            }
        }

        // In JavaScript files, calls to any identifier 'require' are treated as external module imports
        // if (isInJSFile(node) && isCommonJsRequire(node)) {
        //     return resolveExternalModuleTypeByLiteral(node.arguments![0] as StringLiteral);
        // }

        const returnType = getReturnTypeOfSignature(signature);
        // Treat any call to the global 'Symbol' function that is part of a const variable or readonly property
        // as a fresh unique symbol literal type.
        // if (returnType.flags & TypeFlags.ESSymbolLike && isSymbolOrSymbolForCall(node)) {
        //     return getESSymbolLikeTypeForNode(walkUpParenthesizedExpressions(node.parent));
        // }
        // if (
        //     node.kind === SyntaxKind.CallExpression && node.parent.kind === SyntaxKind.ExpressionStatement &&
        //     returnType.flags & TypeFlags.Void && getTypePredicateOfSignature(signature)
        // ) {
        //     if (!isDottedName(node.expression)) {
        //         error(node.expression, Diagnostics.Assertions_require_the_call_target_to_be_an_identifier_or_qualified_name);
        //     }
        //     else if (!getEffectsSignature(node)) {
        //         const diagnostic = error(node.expression, Diagnostics.Assertions_require_every_name_in_the_call_target_to_be_declared_with_an_explicit_type_annotation);
        //         getTypeOfDottedName(node.expression, diagnostic);
        //     }
        // }

        // if (isInJSFile(node)) {
        //     const jsSymbol = getSymbolOfExpando(node, /*allowDeclaration*/ false);
        //     if (jsSymbol?.exports?.size) {
        //         const jsAssignmentType = createAnonymousType(jsSymbol, jsSymbol.exports, emptyArray, emptyArray, emptyArray);
        //         jsAssignmentType.objectFlags |= ObjectFlags.JSLiteral;
        //         return getIntersectionType([returnType, jsAssignmentType]);
        //     }
        // }

        return returnType;
    }
    
    function checkPostfixUnaryExpression(node: PostfixUnaryExpression): Type {
        const operandType = checkExpression(node.operand);
        if (operandType === silentNeverType) {
            return silentNeverType;
        }
        const ok = checkArithmeticOperandType(
            node.operand,
            checkNonNullType(operandType, node.operand),
            Diagnostics.An_arithmetic_operand_must_be_of_type_any_number_bigint_or_an_enum_type,
        );
        if (ok) {
            // run check only if former checks succeeded to avoid reporting cascading errors
            checkReferenceExpression(
                node.operand,
                Diagnostics.The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access,
                Diagnostics.The_operand_of_an_increment_or_decrement_operator_may_not_be_an_optional_property_access,
            );
        }
        return getUnaryResultType(operandType);
    }

    function getFreshTypeOfLiteralType(type: Type): Type {
        if (type.flags & TypeFlags.Freshable) {
            if (!(type as FreshableType).freshType) {
                const freshType = createLiteralType(type.flags, (type as LiteralType).value, (type as LiteralType).symbol, type as LiteralType);
                freshType.freshType = freshType;
                (type as FreshableType).freshType = freshType;
            }
            return (type as FreshableType).freshType;
        }
        return type;
    }
    
    function maybeTypeOfKindConsideringBaseConstraint(type: Type, kind: TypeFlags): boolean {
        if (maybeTypeOfKind(type, kind)) {
            return true;
        }

        const baseConstraint = getBaseConstraintOrType(type);
        return !!baseConstraint && maybeTypeOfKind(baseConstraint, kind);
    }
    
    /**
     * This is similar to `getBaseConstraintOfType` except it returns the input type if there's no base constraint, instead of `undefined`
     * It also doesn't map indexes to `string`, as where this is used this would be unneeded (and likely undesirable)
     */
    function getBaseConstraintOrType(type: Type) {
        return getBaseConstraintOfType(type) || type;
    }


    function checkPrefixUnaryExpression(node: PrefixUnaryExpression): Type {
        const operandType = checkExpression(node.operand);
        if (operandType === silentNeverType) {
            return silentNeverType;
        }
        switch (node.operand.kind) {
            case SyntaxKind.IntLiteral:
                switch (node.operator) {
                    case SyntaxKind.MinusToken:
                        return getFreshTypeOfLiteralType(getNumberLiteralType(-(node.operand as IntLiteral).text));
                    case SyntaxKind.PlusToken:
                        return getFreshTypeOfLiteralType(getNumberLiteralType(+(node.operand as IntLiteral).text));
                }
                break;
            case SyntaxKind.FloatLiteral:
                switch (node.operator) {
                    case SyntaxKind.MinusToken:
                        return getFreshTypeOfLiteralType(getNumberLiteralType(-(node.operand as FloatLiteral).text));
                    case SyntaxKind.PlusToken:
                        return getFreshTypeOfLiteralType(getNumberLiteralType(+(node.operand as FloatLiteral).text));
                }
        }
        switch (node.operator) {
            case SyntaxKind.PlusToken:
            case SyntaxKind.MinusToken:
            case SyntaxKind.TildeToken:
                checkNonNullType(operandType, node.operand);
                // if (maybeTypeOfKindConsideringBaseConstraint(operandType, TypeFlags.ESSymbolLike)) {
                //     error(node.operand, Diagnostics.The_0_operator_cannot_be_applied_to_type_symbol, tokenToString(node.operator));
                // }
                if (node.operator === SyntaxKind.PlusToken) {
                    if (maybeTypeOfKindConsideringBaseConstraint(operandType, TypeFlags.FloatLiteral)) {
                        error(node.operand, Diagnostics.Operator_0_cannot_be_applied_to_type_1, tokenToString(node.operator), typeToString(getBaseTypeOfLiteralType(operandType)));
                    }
                    return numberType;
                }
                return getUnaryResultType(operandType);
            case SyntaxKind.ExclamationToken:
                checkTruthinessOfType(operandType, node.operand);
                const facts = getTypeFacts(operandType, TypeFacts.Truthy | TypeFacts.Falsy);
                return facts === TypeFacts.Truthy ? falseType :
                    facts === TypeFacts.Falsy ? trueType :
                    booleanType;
            case SyntaxKind.PlusPlusToken:
            case SyntaxKind.MinusMinusToken:
                const ok = checkArithmeticOperandType(node.operand, checkNonNullType(operandType, node.operand), Diagnostics.An_arithmetic_operand_must_be_of_type_any_number_bigint_or_an_enum_type);
                if (ok) {
                    // run check only if former checks succeeded to avoid reporting cascading errors
                    checkReferenceExpression(
                        node.operand,
                        Diagnostics.The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access,
                        Diagnostics.The_operand_of_an_increment_or_decrement_operator_may_not_be_an_optional_property_access,
                    );
                }
                return getUnaryResultType(operandType);
        }
        return errorType;
    }

    function getUnaryResultType(operandType: Type): Type {
        if (maybeTypeOfKind(operandType, TypeFlags.FloatLiteral)) {
            return isTypeAssignableToKind(operandType, TypeFlags.AnyOrUnknown) || maybeTypeOfKind(operandType, TypeFlags.NumberLike)
                ? intType
                : floatType;
        }
        // If it's not a bigint type, implicit coercion will result in a number
        return numberType;
    }

    function checkDestructuringAssignment(exprOrAssignment: Expression | ShorthandPropertyAssignment, sourceType: Type, checkMode?: CheckMode, rightIsThis?: boolean): Type {
        console.debug("TODO - Implement me - checkDestructuringAssignment");
        return anyType;
        // let target: Expression;
        // if (exprOrAssignment.kind === SyntaxKind.ShorthandPropertyAssignment) {
        //     const prop = exprOrAssignment as ShorthandPropertyAssignment;
        //     if (prop.objectAssignmentInitializer) {
        //         // In strict null checking mode, if a default value of a non-undefined type is specified, remove
        //         // undefined from the final type.
        //         if (
        //             strictNullChecks &&
        //             !(hasTypeFacts(checkExpression(prop.objectAssignmentInitializer), TypeFacts.IsUndefined))
        //         ) {
        //             sourceType = getTypeWithFacts(sourceType, TypeFacts.NEUndefined);
        //         }
        //         checkBinaryLikeExpression(prop.name, prop.equalsToken!, prop.objectAssignmentInitializer, checkMode);
        //     }
        //     target = (exprOrAssignment as ShorthandPropertyAssignment).name;
        // }
        // else {
        //     target = exprOrAssignment;
        // }

        // if (target.kind === SyntaxKind.BinaryExpression && (target as BinaryExpression).operatorToken.kind === SyntaxKind.EqualsToken) {
        //     checkBinaryExpression(target as BinaryExpression, checkMode);
        //     target = (target as BinaryExpression).left;
        //     // A default value is specified, so remove undefined from the final type.
        //     if (strictNullChecks) {
        //         sourceType = getTypeWithFacts(sourceType, TypeFacts.NEUndefined);
        //     }
        // }
        // if (target.kind === SyntaxKind.ObjectLiteralExpression) {
        //     return checkObjectLiteralAssignment(target as ObjectLiteralExpression, sourceType, rightIsThis);
        // }
        // if (target.kind === SyntaxKind.ArrayLiteralExpression) {
        //     return checkArrayLiteralAssignment(target as ArrayLiteralExpression, sourceType, checkMode);
        // }
        // return checkReferenceAssignment(target, sourceType, checkMode);
    }

    function isTypeEqualityComparableTo(source: Type, target: Type) {
        return (target.flags & TypeFlags.Nullable) !== 0 || isTypeComparableTo(source, target);
    }

    function extractDefinitelyFalsyTypes(type: Type): Type {
        return mapType(type, getDefinitelyFalsyPartOfType);
    }

    function getDefinitelyFalsyPartOfType(type: Type): Type {
        return type.flags & TypeFlags.String ? emptyStringType :
            type.flags & TypeFlags.Number ? zeroType :
            //type.flags & TypeFlags.BigInt ? zeroBigIntType :
            type === regularFalseType ||
                type === falseType ||
                type.flags & (TypeFlags.Void | TypeFlags.Undefined | TypeFlags.Null | TypeFlags.AnyOrUnknown) ||
                type.flags & TypeFlags.StringLiteral && (type as StringLiteralType).value === "" ||
                type.flags & TypeFlags.IntLiteral && (type as IntLiteralType).value === 0 ||
                type.flags & TypeFlags.FloatLiteral && (type as FloatLiteralType).value===0 ? type :
            neverType;
    }


    function createCheckBinaryExpression() {
        interface WorkArea {
            readonly checkMode: CheckMode | undefined;
            skip: boolean;
            stackIndex: number;
            /**
             * Holds the types from the left-side of an expression from [0..stackIndex].
             * Holds the type of the result at stackIndex+1. This allows us to reuse existing stack entries
             * and avoid storing an extra property on the object (i.e., `lastResult`).
             */
            typeStack: (Type | undefined)[];
        }

        const trampoline = createBinaryExpressionTrampoline(onEnter, onLeft, onOperator, onRight, onExit, foldState);

        return (node: BinaryExpression, checkMode: CheckMode | undefined) => {
            const result = trampoline(node, checkMode);
            Debug.assertIsDefined(result);
            return result;
        };

        function onEnter(node: BinaryExpression, state: WorkArea | undefined, checkMode: CheckMode | undefined) {
            if (state) {
                state.stackIndex++;
                state.skip = false;
                setLeftType(state, /*type*/ undefined);
                setLastResult(state, /*type*/ undefined);
            }
            else {
                state = {
                    checkMode,
                    skip: false,
                    stackIndex: 0,
                    typeStack: [undefined, undefined],
                };
            }

            // if (isInJSFile(node) && getAssignedExpandoInitializer(node)) {
            //     state.skip = true;
            //     setLastResult(state, checkExpression(node.right, checkMode));
            //     return state;
            // }

            // TODO
            //checkGrammarNullishCoalesceWithLogicalExpression(node);

            const operator = node.operatorToken.kind;
            if (operator === SyntaxKind.EqualsToken && (node.left.kind === SyntaxKind.ObjectLiteralExpression || node.left.kind === SyntaxKind.ArrayLiteralExpression)) {
                state.skip = true;
                setLastResult(state, checkDestructuringAssignment(node.left, checkExpression(node.right, checkMode), checkMode, /*node.right.kind === SyntaxKind.ThisKeyword*/ false));
                return state;
            }

            return state;
        }

        function onLeft(left: Expression, state: WorkArea, _node: BinaryExpression) {
            if (!state.skip) {
                return maybeCheckExpression(state, left);
            }
        }

        function onOperator(operatorToken: BinaryOperatorToken, state: WorkArea, node: BinaryExpression) {
            if (!state.skip) {
                const leftType = getLastResult(state);
                Debug.assertIsDefined(leftType);
                setLeftType(state, leftType);
                setLastResult(state, /*type*/ undefined);
                const operator = operatorToken.kind;
                if (isLogicalOrCoalescingBinaryOperator(operator)) {
                    let parent = node.parent;
                    while (parent.kind === SyntaxKind.ParenthesizedExpression || isLogicalOrCoalescingBinaryExpression(parent)) {
                        parent = parent.parent;
                    }
                    if (operator === SyntaxKind.AmpersandAmpersandToken || isIfStatement(parent)) {
                        checkTestingKnownTruthyCallableOrAwaitableOrEnumMemberType(node.left, leftType, isIfStatement(parent) ? parent.thenStatement : undefined);
                    }
                    checkTruthinessOfType(leftType, node.left);
                }
            }
        }

        function onRight(right: Expression, state: WorkArea, _node: BinaryExpression) {
            if (!state.skip) {
                return maybeCheckExpression(state, right);
            }
        }

        function onExit(node: BinaryExpression, state: WorkArea): Type | undefined {
            let result: Type | undefined;
            if (state.skip) {
                result = getLastResult(state);
            }
            else {
                const leftType = getLeftType(state);
                Debug.assertIsDefined(leftType);

                const rightType = getLastResult(state);
                Debug.assertIsDefined(rightType);

                result = checkBinaryLikeExpressionWorker(node.left, node.operatorToken, node.right, leftType, rightType, state.checkMode, node);
            }

            state.skip = false;
            setLeftType(state, /*type*/ undefined);
            setLastResult(state, /*type*/ undefined);
            state.stackIndex--;
            return result;
        }

        function foldState(state: WorkArea, result: Type | undefined, _side: "left" | "right") {
            setLastResult(state, result);
            return state;
        }

        function maybeCheckExpression(state: WorkArea, node: Expression): BinaryExpression | undefined {
            if (isBinaryExpression(node)) {
                return node;
            }
            setLastResult(state, checkExpression(node, state.checkMode));
        }

        function getLeftType(state: WorkArea) {
            return state.typeStack[state.stackIndex];
        }

        function setLeftType(state: WorkArea, type: Type | undefined) {
            state.typeStack[state.stackIndex] = type;
        }

        function getLastResult(state: WorkArea) {
            return state.typeStack[state.stackIndex + 1];
        }

        function setLastResult(state: WorkArea, type: Type | undefined) {
            // To reduce overhead, reuse the next stack entry to store the
            // last result. This avoids the overhead of an additional property
            // on `WorkArea` and reuses empty stack entries as we walk back up
            // the stack.
            state.typeStack[state.stackIndex + 1] = type;
        }
    }

    
    // This like getBaseTypeOfLiteralType, but instead treats enum literals as strings/numbers instead
    // of returning their enum base type (which depends on the types of other literals in the enum).
    function getBaseTypeOfLiteralTypeForComparison(type: Type): Type {
        return type.flags & (TypeFlags.StringLiteral | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) ? stringType :
            type.flags & (TypeFlags.IntLiteral) ? intType :
            type.flags & TypeFlags.FloatLiteral ? floatType :
            //type.flags & TypeFlags.BooleanLiteral ? booleanType :
            type.flags & TypeFlags.Union ? mapType(type, getBaseTypeOfLiteralTypeForComparison) :
            type;
    }

    function removeDefinitelyFalsyTypes(type: Type): Type {
        return filterType(type, t => hasTypeFacts(t, TypeFacts.Truthy));
    }

    /**
     * This is a *shallow* check: An expression is side-effect-free if the
     * evaluation of the expression *itself* cannot produce side effects.
     * For example, x++ / 3 is side-effect free because the / operator
     * does not have side effects.
     * The intent is to "smell test" an expression for correctness in positions where
     * its value is discarded (e.g. the left side of the comma operator).
     */
    function isSideEffectFree(node: Node): boolean {
        node = skipParentheses(node);
        switch (node.kind) {
            case SyntaxKind.Identifier:
            case SyntaxKind.StringLiteral:
            // case SyntaxKind.RegularExpressionLiteral:
            // case SyntaxKind.TaggedTemplateExpression:
            // case SyntaxKind.TemplateExpression:
            // case SyntaxKind.NoSubstitutionTemplateLiteral:
            case SyntaxKind.IntLiteral:
            case SyntaxKind.FloatLiteral:
            // case SyntaxKind.TrueKeyword:
            // case SyntaxKind.FalseKeyword:
            case SyntaxKind.NullKeyword:
            // case SyntaxKind.UndefinedKeyword:
            case SyntaxKind.FunctionExpression:
            case SyntaxKind.ClassExpression:
            case SyntaxKind.InlineClosureExpression:
            case SyntaxKind.ArrayLiteralExpression:
            case SyntaxKind.ObjectLiteralExpression:            
                return true;

            case SyntaxKind.ConditionalExpression:
                return isSideEffectFree((node as ConditionalExpression).whenTrue) &&
                    isSideEffectFree((node as ConditionalExpression).whenFalse);

            case SyntaxKind.BinaryExpression:
                if (isAssignmentOperator((node as BinaryExpression).operatorToken.kind)) {
                    return false;
                }
                return isSideEffectFree((node as BinaryExpression).left) &&
                    isSideEffectFree((node as BinaryExpression).right);

            case SyntaxKind.PrefixUnaryExpression:
            case SyntaxKind.PostfixUnaryExpression:
                // Unary operators ~, !, +, and - have no side effects.
                // The rest do.
                switch ((node as PrefixUnaryExpression).operator) {
                    case SyntaxKind.ExclamationToken:
                    case SyntaxKind.PlusToken:
                    case SyntaxKind.MinusToken:
                    case SyntaxKind.TildeToken:
                        return true;
                }
                return false;

            // Some forms listed here for clarity
            // case SyntaxKind.VoidExpression: // Explicit opt-out
            // case SyntaxKind.TypeAssertionExpression: // Not SEF, but can produce useful type warnings
            // case SyntaxKind.AsExpression: // Not SEF, but can produce useful type warnings
            default:
                return false;
        }
    }

    function addDuplicateDeclarationErrorsForSymbols(target: Symbol, message: DiagnosticMessage, symbolName: string, source: Symbol) {
        forEach(target.declarations, node => {
            addDuplicateDeclarationError(node, message, symbolName, source.declarations);
        });
    }

    function lookupOrIssueError(location: Node | undefined, message: DiagnosticMessage, ...args: DiagnosticArguments): Diagnostic {
        const diagnostic = location
            ? createDiagnosticForNode(location, message, ...args)
            : createCompilerDiagnostic(message, ...args);
        const existing = diagnostics.lookup(diagnostic);
        if (existing) {
            return existing;
        }
        else {
            diagnostics.add(diagnostic);
            return diagnostic;
        }
    }

    /**
     * Like `checkTypeAssignableTo`, but if it would issue an error, instead performs structural comparisons of the types using the given expression node to
     * attempt to issue more specific errors on, for example, specific object literal properties or tuple members.
     */
    function checkTypeAssignableToAndOptionallyElaborate(source: Type, target: Type, errorNode: Node | undefined, expr: Expression | undefined, headMessage?: DiagnosticMessage, containingMessageChain?: () => DiagnosticMessageChain | undefined): boolean {
        return checkTypeRelatedToAndOptionallyElaborate(source, target, assignableRelation, errorNode, expr, headMessage, containingMessageChain, /*errorOutputContainer*/ undefined);
    }

    function checkTypeRelatedToAndOptionallyElaborate(
        source: Type,
        target: Type,
        relation: Map<string, RelationComparisonResult>,
        errorNode: Node | undefined,
        expr: Expression | undefined,
        headMessage: DiagnosticMessage | undefined,
        containingMessageChain: (() => DiagnosticMessageChain | undefined) | undefined,
        errorOutputContainer: { errors?: Diagnostic[]; skipLogging?: boolean; } | undefined,
    ): boolean {
        if (isTypeRelatedTo(source, target, relation)) return true;
        if (!errorNode || !elaborateError(expr, source, target, relation, headMessage, containingMessageChain, errorOutputContainer)) {
            return checkTypeRelatedTo(source, target, relation, errorNode, headMessage, containingMessageChain, errorOutputContainer);
        }
        return false;
    }

    function isOrHasGenericConditional(type: Type): boolean {
        return false;//return !!(type.flags & TypeFlags.Conditional || (type.flags & TypeFlags.Intersection && some((type as IntersectionType).types, isOrHasGenericConditional)));
    }

    function checkTypeAssignableTo(source: Type, target: Type, errorNode: Node | undefined, headMessage?: DiagnosticMessage, containingMessageChain?: () => DiagnosticMessageChain | undefined, errorOutputObject?: { errors?: Diagnostic[]; }): boolean {
        return checkTypeRelatedTo(source, target, assignableRelation, errorNode, headMessage, containingMessageChain, errorOutputObject);
    }

    function elaborateDidYouMeanToCallOrConstruct(
        node: Expression,
        source: Type,
        target: Type,
        relation: Map<string, RelationComparisonResult>,
        headMessage: DiagnosticMessage | undefined,
        containingMessageChain: (() => DiagnosticMessageChain | undefined) | undefined,
        errorOutputContainer: { errors?: Diagnostic[]; skipLogging?: boolean; } | undefined,
    ): boolean {
        const callSignatures = getSignaturesOfType(source, SignatureKind.Call);
        const constructSignatures = getSignaturesOfType(source, SignatureKind.Construct);
        for (const signatures of [constructSignatures, callSignatures]) {
            if (
                some(signatures, s => {
                    const returnType = getReturnTypeOfSignature(s);
                    return !(returnType.flags & (TypeFlags.Any | TypeFlags.Never)) && checkTypeRelatedTo(returnType, target, relation, /*errorNode*/ undefined);
                })
            ) {
                const resultObj: { errors?: Diagnostic[]; } = errorOutputContainer || {};
                checkTypeAssignableTo(source, target, node, headMessage, containingMessageChain, resultObj);
                const diagnostic = resultObj.errors![resultObj.errors!.length - 1];
                addRelatedInfo(
                    diagnostic,
                    createDiagnosticForNode(
                        node,
                        signatures === constructSignatures ? Diagnostics.Did_you_mean_to_use_new_with_this_expression : Diagnostics.Did_you_mean_to_call_this_expression,
                    ),
                );
                return true;
            }
        }
        return false;
    }

    function hasContextSensitiveReturnExpression(node: FunctionLikeDeclaration) {
        if (/*node.typeParameters ||*/ getEffectiveReturnTypeNode(node) || !node.body) {
            return false;
        }
        if (node.body.kind !== SyntaxKind.Block) {
            return isContextSensitive(node.body);
        }
        return !!forEachReturnStatement(node.body as Block, statement => !!statement.expression && isContextSensitive(statement.expression));
    }

    function isContextSensitiveFunctionLikeDeclaration(node: FunctionLikeDeclaration): boolean {
        return hasContextSensitiveParameters(node) || hasContextSensitiveReturnExpression(node);
    }
    
    // Returns true if the given expression contains (at any level of nesting) a function or arrow expression
    // that is subject to contextual typing.
    function isContextSensitive(node: Expression/* | MethodDeclaration */| ObjectLiteralElementLike ): boolean {
        //Debug.assert(node.kind !== SyntaxKind.MethodDeclaration || isObjectLiteralMethod(node));
        switch (node.kind) {
            case SyntaxKind.FunctionExpression:
            case SyntaxKind.InlineClosureExpression:
            //case SyntaxKind.MethodDeclaration:
            case SyntaxKind.FunctionDeclaration: // Function declarations can have context when annotated with a jsdoc @type
                return isContextSensitiveFunctionLikeDeclaration(node as FunctionExpression | InlineClosureExpression /*| MethodDeclaration*/);
            case SyntaxKind.ObjectLiteralExpression:
                return some((node as ObjectLiteralExpression).properties, isContextSensitive);
            case SyntaxKind.ArrayLiteralExpression:
                return some((node as ArrayLiteralExpression).elements, isContextSensitive);
            case SyntaxKind.ConditionalExpression:
                return isContextSensitive((node as ConditionalExpression).whenTrue) ||
                    isContextSensitive((node as ConditionalExpression).whenFalse);
            case SyntaxKind.BinaryExpression:
                return ((node as BinaryExpression).operatorToken.kind === SyntaxKind.BarBarToken) &&
                    (isContextSensitive((node as BinaryExpression).left) || isContextSensitive((node as BinaryExpression).right));
            case SyntaxKind.PropertyAssignment:
                return isContextSensitive((node as PropertyAssignment).initializer);
            case SyntaxKind.ParenthesizedExpression:
                return isContextSensitive((node as ParenthesizedExpression).expression);            
        }

        return false;
    }

    function symbolValueDeclarationIsContextSensitive(symbol: Symbol): boolean {
        return symbol && !!symbol.valueDeclaration && isExpression(symbol.valueDeclaration) && !isContextSensitive(symbol.valueDeclaration);
    }

    function getTypeNameForErrorDisplay(type: Type) {
        return typeToString(type, /*enclosingDeclaration*/ undefined, TypeFormatFlags.UseFullyQualifiedType);
    }

    function getTypeNamesForErrorDisplay(left: Type, right: Type): [string, string] {
        let leftStr = symbolValueDeclarationIsContextSensitive(left.symbol) ? typeToString(left, left.symbol.valueDeclaration) : typeToString(left);
        let rightStr = symbolValueDeclarationIsContextSensitive(right.symbol) ? typeToString(right, right.symbol.valueDeclaration) : typeToString(right);
        if (leftStr === rightStr) {
            leftStr = getTypeNameForErrorDisplay(left);
            rightStr = getTypeNameForErrorDisplay(right);
        }
        return [leftStr, rightStr];
    }

    function getBaseTypesIfUnrelated(leftType: Type, rightType: Type, isRelated: (left: Type, right: Type) => boolean): [Type, Type] {
        let effectiveLeft = leftType;
        let effectiveRight = rightType;
        const leftBase = getBaseTypeOfLiteralType(leftType);
        const rightBase = getBaseTypeOfLiteralType(rightType);
        if (!isRelated(leftBase, rightBase)) {
            effectiveLeft = leftBase;
            effectiveRight = rightBase;
        }
        return [effectiveLeft, effectiveRight];
    }

    function elaborateError(
        node: Expression | undefined,
        source: Type,
        target: Type,
        relation: Map<string, RelationComparisonResult>,
        headMessage: DiagnosticMessage | undefined,
        containingMessageChain: (() => DiagnosticMessageChain | undefined) | undefined,
        errorOutputContainer: { errors?: Diagnostic[]; skipLogging?: boolean; } | undefined,
    ): boolean {
        if (!node || isOrHasGenericConditional(target)) return false;
        if (
            !checkTypeRelatedTo(source, target, relation, /*errorNode*/ undefined)
            && elaborateDidYouMeanToCallOrConstruct(node, source, target, relation, headMessage, containingMessageChain, errorOutputContainer)
        ) {
            return true;
        }
        switch (node.kind) {
            case SyntaxKind.ParenthesizedExpression:
                return elaborateError((node as  ParenthesizedExpression ).expression, source, target, relation, headMessage, containingMessageChain, errorOutputContainer);
            case SyntaxKind.BinaryExpression:
                switch ((node as BinaryExpression).operatorToken.kind) {
                    case SyntaxKind.EqualsToken:
                    case SyntaxKind.CommaToken:
                        return elaborateError((node as BinaryExpression).right, source, target, relation, headMessage, containingMessageChain, errorOutputContainer);
                }
                break;
            case SyntaxKind.ObjectLiteralExpression:
                console.warn("todo - elaborateError - ObjectLiteralExpression");
                //return elaborateObjectLiteral(node as ObjectLiteralExpression, source, target, relation, containingMessageChain, errorOutputContainer);
            case SyntaxKind.ArrayLiteralExpression:
                console.warn("todo - elaborateError - ArrayLiteralExpression");
                //return elaborateArrayLiteral(node as ArrayLiteralExpression, source, target, relation, containingMessageChain, errorOutputContainer);            
            case SyntaxKind.InlineClosureExpression:
                console.warn("todo - elaborateError - InlineClosureExpression");
                //return elaborateArrowFunction(node as ArrowFunction, source, target, relation, containingMessageChain, errorOutputContainer);
        }
        return false;
    }



    function checkReferenceExpression(expr: Expression, invalidReferenceMessage: DiagnosticMessage, invalidOptionalChainMessage: DiagnosticMessage): boolean {
        // References are combinations of identifiers, parentheses, and property accesses.
        const node = skipOuterExpressions(expr, OuterExpressionKinds.Assertions | OuterExpressionKinds.Parentheses);
        if (node.kind !== SyntaxKind.Identifier && !isAccessExpression(node)) {
            error(expr, invalidReferenceMessage);
            return false;
        }
        if (node.flags & NodeFlags.OptionalChain) {
            error(expr, invalidOptionalChainMessage);
            return false;
        }
        return true;
    }
    
    function addDuplicateDeclarationError(node: Declaration, message: DiagnosticMessage, symbolName: string, relatedNodes: readonly Declaration[] | undefined) {
        const errorNode = getNameOfDeclaration(node) || node;//(getExpandoInitializer(node, /*isPrototypeAssignment*/ false) ? getNameOfExpando(node) : getNameOfDeclaration(node)) || node;
        const err = lookupOrIssueError(errorNode, message, symbolName);
        for (const relatedNode of relatedNodes || emptyArray) {
            const adjustedNode = getNameOfDeclaration(relatedNode) || relatedNode;
            if (adjustedNode === errorNode) continue;
            err.relatedInformation = err.relatedInformation || [];
            const leadingMessage = createDiagnosticForNode(adjustedNode, Diagnostics._0_was_also_declared_here, symbolName);
            const followOnMessage = createDiagnosticForNode(adjustedNode, Diagnostics.and_here);
            if (length(err.relatedInformation) >= 5 || some(err.relatedInformation, r => compareDiagnostics(r, followOnMessage) === Comparison.EqualTo || compareDiagnostics(r, leadingMessage) === Comparison.EqualTo)) continue;
            addRelatedInfo(err, !length(err.relatedInformation) ? leadingMessage : followOnMessage);
        }
    }

    /** Return properties of an object type or an empty array for other types */
    function getPropertiesOfObjectType(type: Type): Symbol[] {
        if (type.flags & TypeFlags.Object) {
            return resolveStructuredTypeMembers(type as ObjectType).properties;
        }
        return emptyArray;
    }
    
    function reportObjectPossiblyNullOrUndefinedError(node: Node, facts: TypeFacts) {
        const nodeText = isEntityNameExpression(node) ? entityNameToString(node) : undefined;
        // TODO
        // if (node.kind === SyntaxKind.NullKeyword) {
        //     error(node, Diagnostics.The_value_0_cannot_be_used_here, "null");
        //     return;
        // }
        // if (nodeText !== undefined && nodeText.length < 100) {
        //     if (isIdentifier(node) && nodeText === "undefined") {
        //         error(node, Diagnostics.The_value_0_cannot_be_used_here, "undefined");
        //         return;
        //     }
        //     error(
        //         node,
        //         facts & TypeFacts.IsUndefined ? facts & TypeFacts.IsNull ?
        //             Diagnostics._0_is_possibly_null_or_undefined :
        //             Diagnostics._0_is_possibly_undefined :
        //             Diagnostics._0_is_possibly_null,
        //         nodeText,
        //     );
        // }
        // else {
        //     error(
        //         node,
        //         facts & TypeFacts.IsUndefined ? facts & TypeFacts.IsNull ?
        //             Diagnostics.Object_is_possibly_null_or_undefined :
        //             Diagnostics.Object_is_possibly_undefined :
        //             Diagnostics.Object_is_possibly_null,
        //     );
        // }
    }


    function checkNonNullType(type: Type, node: Node) {
        return checkNonNullTypeWithReporter(type, node, reportObjectPossiblyNullOrUndefinedError);
    }

    function errorAndMaybeSuggestAwait(
        location: Node,
        maybeMissingAwait: boolean,
        message: DiagnosticMessage,
        ...args: DiagnosticArguments
    ): Diagnostic {
        const diagnostic = error(location, message, ...args);
        // if (maybeMissingAwait) {
        //     const related = createDiagnosticForNode(location, Diagnostics.Did_you_forget_to_use_await);
        //     addRelatedInfo(diagnostic, related);
        // }
        return diagnostic;
    }

    /**
     * This is *not* a bi-directional relationship.
     * If one needs to check both directions for comparability, use a second call to this function or 'checkTypeComparableTo'.
     *
     * A type S is comparable to a type T if some (but not necessarily all) of the possible values of S are also possible values of T.
     * It is used to check following cases:
     *   - the types of the left and right sides of equality/inequality operators (`===`, `!==`, `==`, `!=`).
     *   - the types of `case` clause expressions and their respective `switch` expressions.
     *   - the type of an expression in a type assertion with the type being asserted.
     */
    function isTypeComparableTo(source: Type, target: Type): boolean {
        return isTypeRelatedTo(source, target, comparableRelation);
    }

    function areTypesComparable(type1: Type, type2: Type): boolean {
        return isTypeComparableTo(type1, type2) || isTypeComparableTo(type2, type1);
    }

    function checkArithmeticOperandType(operand: Node, type: Type, diagnostic: DiagnosticMessage, isAwaitValid = false): boolean {
        if (!isTypeAssignableTo(type, numberType)) {            
            errorAndMaybeSuggestAwait(
                operand,
                false,
                diagnostic,
            );
            return false;
        }
        return true;
    }
    
    function checkBinaryLikeExpressionWorker(
        left: Expression,
        operatorToken: BinaryOperatorToken,
        right: Expression,
        leftType: Type,
        rightType: Type,
        checkMode?: CheckMode,
        errorNode?: Node,
    ): Type {
        const operator = operatorToken.kind;
        switch (operator) {
            case SyntaxKind.AsteriskToken:
            case SyntaxKind.AsteriskAsteriskToken:
            case SyntaxKind.AsteriskEqualsToken:
            case SyntaxKind.AsteriskAsteriskEqualsToken:
            case SyntaxKind.SlashToken:
            case SyntaxKind.SlashEqualsToken:
            case SyntaxKind.PercentToken:
            case SyntaxKind.PercentEqualsToken:
            case SyntaxKind.MinusToken:
            case SyntaxKind.MinusEqualsToken:
            case SyntaxKind.LessThanLessThanToken:
            case SyntaxKind.LessThanLessThanEqualsToken:
            case SyntaxKind.GreaterThanGreaterThanToken:
            case SyntaxKind.GreaterThanGreaterThanEqualsToken:
            case SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
            case SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken:
            case SyntaxKind.BarToken:
            case SyntaxKind.BarEqualsToken:
            case SyntaxKind.CaretToken:
            case SyntaxKind.CaretEqualsToken:
            case SyntaxKind.AmpersandToken:
            case SyntaxKind.AmpersandEqualsToken:
                if (leftType === silentNeverType || rightType === silentNeverType) {
                    return silentNeverType;
                }

                leftType = checkNonNullType(leftType, left);
                rightType = checkNonNullType(rightType, right);

                let suggestedOperator: PunctuationSyntaxKind | undefined;
                // if a user tries to apply a bitwise operator to 2 boolean operands
                // try and return them a helpful suggestion
                if (
                    (leftType.flags & TypeFlags.BooleanLike) &&
                    (rightType.flags & TypeFlags.BooleanLike) &&
                    (suggestedOperator = getSuggestedBooleanOperator(operatorToken.kind)) !== undefined
                ) {
                    error(errorNode || operatorToken, Diagnostics.The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead, tokenToString(operatorToken.kind), tokenToString(suggestedOperator));
                    return numberType;
                }
                else {
                    // otherwise just check each operand separately and report errors as normal
                    const leftOk = checkArithmeticOperandType(left, leftType, Diagnostics.The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type, /*isAwaitValid*/ true);
                    const rightOk = checkArithmeticOperandType(right, rightType, Diagnostics.The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type, /*isAwaitValid*/ true);
                    let resultType: Type;
                    // If both are any or unknown, allow operation; assume it will resolve to number
                    if (
                        (isTypeAssignableToKind(leftType, TypeFlags.AnyOrUnknown) && isTypeAssignableToKind(rightType, TypeFlags.AnyOrUnknown)) ||
                        // Or, if neither could be bigint, implicit coercion results in a number result
                        !(maybeTypeOfKind(leftType, TypeFlags.FloatLiteral) || maybeTypeOfKind(rightType, TypeFlags.FloatLiteral))
                    ) {
                        resultType = numberType;
                    }
                    // At least one is assignable to bigint, so check that both are
                    // else if (bothAreBigIntLike(leftType, rightType)) {
                    //     switch (operator) {
                    //         case SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
                    //         case SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken:
                    //             reportOperatorError();
                    //             break;
                    //         case SyntaxKind.AsteriskAsteriskToken:
                    //         case SyntaxKind.AsteriskAsteriskEqualsToken:
                    //             // if (languageVersion < ScriptTarget.ES2016) {
                    //             //     error(errorNode, Diagnostics.Exponentiation_cannot_be_performed_on_bigint_values_unless_the_target_option_is_set_to_es2016_or_later);
                    //             // }
                    //     }
                    //     resultType = bigintType;
                    // }
                    // Exactly one of leftType/rightType is assignable to bigint
                    else {
                        reportOperatorError(bothAreFloat);
                        resultType = errorType;
                    }
                    if (leftOk && rightOk) {
                        checkAssignmentOperator(resultType);
                    }
                    return resultType;
                }
            case SyntaxKind.PlusToken:
            case SyntaxKind.PlusEqualsToken:
                if (leftType === silentNeverType || rightType === silentNeverType) {
                    return silentNeverType;
                }

                if (!isTypeAssignableToKind(leftType, TypeFlags.StringLike) && !isTypeAssignableToKind(rightType, TypeFlags.StringLike)) {
                    leftType = checkNonNullType(leftType, left);
                    rightType = checkNonNullType(rightType, right);
                }

                let resultType: Type | undefined;
                if (isTypeAssignableToKind(leftType, TypeFlags.NumberLike, /*strict*/ true) && isTypeAssignableToKind(rightType, TypeFlags.NumberLike, /*strict*/ true)) {
                    // Operands of an enum type are treated as having the primitive type Number.
                    // If both operands are of the Number primitive type, the result is of the Number primitive type.
                    resultType = numberType;
                }
                // else if (isTypeAssignableToKind(leftType, TypeFlags.BigIntLike, /*strict*/ true) && isTypeAssignableToKind(rightType, TypeFlags.BigIntLike, /*strict*/ true)) {
                //     // If both operands are of the BigInt primitive type, the result is of the BigInt primitive type.
                //     resultType = bigintType;
                // }
                else if (isTypeAssignableToKind(leftType, TypeFlags.StringLike, /*strict*/ true) || isTypeAssignableToKind(rightType, TypeFlags.StringLike, /*strict*/ true)) {
                    // If one or both operands are of the String primitive type, the result is of the String primitive type.
                    resultType = stringType;
                }
                else if (isTypeAny(leftType) || isTypeAny(rightType)) {
                    // Otherwise, the result is of type Any.
                    // NOTE: unknown type here denotes error type. Old compiler treated this case as any type so do we.
                    resultType = isErrorType(leftType) || isErrorType(rightType) ? errorType : anyType;
                }

                // Symbols are not allowed at all in arithmetic expressions
                if (resultType) {// && !checkForDisallowedESSymbolOperand(operator)) {
                    return resultType;
                }

                if (!resultType) {
                    // Types that have a reasonably good chance of being a valid operand type.
                    // If both types have an awaited type of one of these, we'll assume the user
                    // might be missing an await without doing an exhaustive check that inserting
                    // await(s) will actually be a completely valid binary expression.
                    const closeEnoughKind = TypeFlags.NumberLike | TypeFlags.StringLike | TypeFlags.AnyOrUnknown;
                    reportOperatorError((left, right) =>
                        isTypeAssignableToKind(left, closeEnoughKind) &&
                        isTypeAssignableToKind(right, closeEnoughKind)
                    );
                    return anyType;
                }

                if (operator === SyntaxKind.PlusEqualsToken) {
                    checkAssignmentOperator(resultType);
                }
                return resultType;
            case SyntaxKind.LessThanToken:
            case SyntaxKind.GreaterThanToken:
            case SyntaxKind.LessThanEqualsToken:
            case SyntaxKind.GreaterThanEqualsToken:
                // if (checkForDisallowedESSymbolOperand(operator)) {
                //     leftType = getBaseTypeOfLiteralTypeForComparison(checkNonNullType(leftType, left));
                //     rightType = getBaseTypeOfLiteralTypeForComparison(checkNonNullType(rightType, right));
                //     reportOperatorErrorUnless((left, right) => {
                //         if (isTypeAny(left) || isTypeAny(right)) {
                //             return true;
                //         }
                //         const leftAssignableToNumber = isTypeAssignableTo(left, numberType);
                //         const rightAssignableToNumber = isTypeAssignableTo(right, numberType);
                //         return leftAssignableToNumber && rightAssignableToNumber ||
                //             !leftAssignableToNumber && !rightAssignableToNumber && areTypesComparable(left, right);
                //     });
                // }
                return booleanType;
            case SyntaxKind.EqualsEqualsToken:
            case SyntaxKind.ExclamationEqualsToken:
            case SyntaxKind.EqualsEqualsEqualsToken:
            case SyntaxKind.ExclamationEqualsEqualsToken:
                // We suppress errors in CheckMode.TypeOnly (meaning the invocation came from getTypeOfExpression). During
                // control flow analysis it is possible for operands to temporarily have narrower types, and those narrower
                // types may cause the operands to not be comparable. We don't want such errors reported (see #46475).
                if (!(checkMode && checkMode & CheckMode.TypeOnly)) {
                    if (
                        (isLiteralExpressionOfObject(left) || isLiteralExpressionOfObject(right)) &&
                        // only report for === and !== in JS, not == or !=
                        (!isInJSFile(left) || (operator === SyntaxKind.EqualsEqualsEqualsToken || operator === SyntaxKind.ExclamationEqualsEqualsToken))
                    ) {
                        const eqType = operator === SyntaxKind.EqualsEqualsToken || operator === SyntaxKind.EqualsEqualsEqualsToken;
                        error(errorNode, Diagnostics.This_condition_will_always_return_0_since_JavaScript_compares_objects_by_reference_not_value, eqType ? "false" : "true");
                    }
                    checkNaNEquality(errorNode, operator, left, right);
                    reportOperatorErrorUnless((left, right) => isTypeEqualityComparableTo(left, right) || isTypeEqualityComparableTo(right, left));
                }
                return booleanType;            
            case SyntaxKind.InKeyword:
                Debug.fail("TODO - Implement me - checkBinaryLikeExpressionWorker - SyntaxKind.InKeyword");
                //return checkInExpression(left, right, leftType, rightType);
            case SyntaxKind.AmpersandAmpersandToken: {
                const resultType = hasTypeFacts(leftType, TypeFacts.Truthy) ?
                    getUnionType([extractDefinitelyFalsyTypes(strictNullChecks ? leftType : getBaseTypeOfLiteralType(rightType)), rightType]) :
                    leftType;
                // if (operator === SyntaxKind.AmpersandAmpersandEqualsToken) {
                //     checkAssignmentOperator(rightType);
                // }
                return resultType;
            }
            case SyntaxKind.BarBarToken:
            case SyntaxKind.BarBarEqualsToken: {
                const resultType = hasTypeFacts(leftType, TypeFacts.Falsy) ?
                    getUnionType([getNonNullableType(removeDefinitelyFalsyTypes(leftType)), rightType], UnionReduction.Subtype) :
                    leftType;
                if (operator === SyntaxKind.BarBarEqualsToken) {
                    checkAssignmentOperator(rightType);
                }
                return resultType;
            }
            // case SyntaxKind.QuestionQuestionToken:
            // case SyntaxKind.QuestionQuestionEqualsToken: {
            //     const resultType = hasTypeFacts(leftType, TypeFacts.EQUndefinedOrNull) ?
            //         getUnionType([getNonNullableType(leftType), rightType], UnionReduction.Subtype) :
            //         leftType;
            //     if (operator === SyntaxKind.QuestionQuestionEqualsToken) {
            //         checkAssignmentOperator(rightType);
            //     }
            //     return resultType;
            // }
            case SyntaxKind.EqualsToken:
                const declKind = isBinaryExpression(left.parent) ? getAssignmentDeclarationKind(left.parent) : AssignmentDeclarationKind.None;
                checkAssignmentDeclaration(declKind, rightType);
                if (isAssignmentDeclaration(declKind)) {
                    if (
                        !(rightType.flags & TypeFlags.Object) ||
                        declKind !== AssignmentDeclarationKind.ModuleExports &&
                            declKind !== AssignmentDeclarationKind.Prototype &&
                            !isEmptyObjectType(rightType) &&
                            //!isFunctionObjectType(rightType as ObjectType) &&
                            !(getObjectFlags(rightType) & ObjectFlags.Class)
                    ) {
                        // don't check assignability of module.exports=, C.prototype=, or expando types because they will necessarily be incomplete
                        checkAssignmentOperator(rightType);
                    }
                    return leftType;
                }
                else {
                    checkAssignmentOperator(rightType);
                    return rightType;
                }
            case SyntaxKind.CommaToken:
                if (!compilerOptions.allowUnreachableCode && isSideEffectFree(left) && !isIndirectCall(left.parent as BinaryExpression)) {
                    const sf = getSourceFileOfNode(left);
                    const sourceText = sf.text;
                    const start = skipTrivia(sourceText, left.pos);
                    error(left, Diagnostics.Left_side_of_comma_operator_is_unused_and_has_no_side_effects);
                }
                return rightType;

            default:
                return Debug.fail();
        }

        function bothAreFloat(left: Type, right: Type): boolean {
            return isTypeAssignableToKind(left, TypeFlags.FloatLiteral) && isTypeAssignableToKind(right, TypeFlags.FloatLiteral);
        }

        function checkAssignmentDeclaration(kind: AssignmentDeclarationKind, rightType: Type) {
            if (kind === AssignmentDeclarationKind.ModuleExports) {
                for (const prop of getPropertiesOfObjectType(rightType)) {
                    const propType = getTypeOfSymbol(prop);
                    if (propType.symbol && propType.symbol.flags & SymbolFlags.Class) {
                        const name = prop.name;
                        const symbol = resolveName(prop.valueDeclaration, name, SymbolFlags.Type, /*nameNotFoundMessage*/ undefined, /*isUse*/ false);
                        if (symbol?.declarations && symbol.declarations.some(isJSDocTypedefTag)) {
                            addDuplicateDeclarationErrorsForSymbols(symbol, Diagnostics.Duplicate_identifier_0, (name), prop);
                            addDuplicateDeclarationErrorsForSymbols(prop, Diagnostics.Duplicate_identifier_0, (name), symbol);
                        }
                    }
                }
            }
        }

        // Return true for "indirect calls", (i.e. `(0, x.f)(...)` or `(0, eval)(...)`), which prevents passing `this`.
        function isIndirectCall(node: BinaryExpression): boolean {
            return node.parent.kind === SyntaxKind.ParenthesizedExpression &&
                isIntLiteral(node.left) &&
                node.left.text === "0" &&
                (isCallExpression(node.parent.parent) && node.parent.parent.expression === node.parent ) &&
                // special-case for "eval" because it's the only non-access case where an indirect call actually affects behavior.
                (isAccessExpression(node.right) || isIdentifier(node.right) && node.right.text === "eval");
        }

        function getSuggestedBooleanOperator(operator: SyntaxKind): PunctuationSyntaxKind | undefined {
            switch (operator) {
                case SyntaxKind.BarToken:
                case SyntaxKind.BarEqualsToken:
                    return SyntaxKind.BarBarToken;
                case SyntaxKind.CaretToken:
                case SyntaxKind.CaretEqualsToken:
                    return SyntaxKind.ExclamationEqualsEqualsToken;
                case SyntaxKind.AmpersandToken:
                case SyntaxKind.AmpersandEqualsToken:
                    return SyntaxKind.AmpersandAmpersandToken;
                default:
                    return undefined;
            }
        }

        function checkAssignmentOperator(valueType: Type): void {
            if (isAssignmentOperator(operator)) {
                addLazyDiagnostic(checkAssignmentOperatorWorker);
            }

            function checkAssignmentOperatorWorker() {
                let assigneeType = leftType;

                // getters can be a subtype of setters, so to check for assignability we use the setter's type instead
                // if (isCompoundAssignment(operatorToken.kind) && left.kind === SyntaxKind.PropertyAccessExpression) {
                //     assigneeType = checkPropertyAccessExpression(left as PropertyAccessExpression, /*checkMode*/ undefined, /*writeOnly*/ true);
                // }

                // TypeScript 1.0 spec (April 2014): 4.17
                // An assignment of the form
                //    VarExpr = ValueExpr
                // requires VarExpr to be classified as a reference
                // A compound assignment furthermore requires VarExpr to be classified as a reference (section 4.1)
                // and the type of the non-compound operation to be assignable to the type of VarExpr.

                if (checkReferenceExpression(left, Diagnostics.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access, Diagnostics.The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access)) {
                    let headMessage: DiagnosticMessage | undefined;
                    // if (exactOptionalPropertyTypes && isPropertyAccessExpression(left) && maybeTypeOfKind(valueType, TypeFlags.Undefined)) {
                    //     const target = getTypeOfPropertyOfType(getTypeOfExpression(left.expression), left.name.text);
                    //     if (isExactOptionalPropertyMismatch(valueType, target)) {
                    //         headMessage = Diagnostics.Type_0_is_not_assignable_to_type_1_with_exactOptionalPropertyTypes_Colon_true_Consider_adding_undefined_to_the_type_of_the_target;
                    //     }
                    // }
                    // to avoid cascading errors check assignability only if 'isReference' check succeeded and no errors were reported
                    checkTypeAssignableToAndOptionallyElaborate(valueType, assigneeType, left, right, headMessage);
                }
            }
        }

        function isAssignmentDeclaration(kind: AssignmentDeclarationKind) {
            switch (kind) {
                case AssignmentDeclarationKind.ModuleExports:
                    return true;
                case AssignmentDeclarationKind.ExportsProperty:
                case AssignmentDeclarationKind.Property:
                case AssignmentDeclarationKind.Prototype:
                case AssignmentDeclarationKind.PrototypeProperty:
                case AssignmentDeclarationKind.ThisProperty:
                    const symbol = getSymbolOfNode(left);
                    //const init = getAssignedExpandoInitializer(right);
                    return false;
                    // return !!init && isObjectLiteralExpression(init) &&
                    //     !!symbol?.exports?.size;
                default:
                    return false;
            }
        }

        /**
         * Returns true if an error is reported
         */
        function reportOperatorErrorUnless(typesAreCompatible: (left: Type, right: Type) => boolean): boolean {
            if (!typesAreCompatible(leftType, rightType)) {
                reportOperatorError(typesAreCompatible);
                return true;
            }
            return false;
        }

        function reportOperatorError(isRelated?: (left: Type, right: Type) => boolean) {
            let wouldWorkWithAwait = false;
            const errNode = errorNode || operatorToken;
            if (isRelated) {
                const awaitedLeftType = getAwaitedTypeNoAlias(leftType);
                const awaitedRightType = getAwaitedTypeNoAlias(rightType);
                wouldWorkWithAwait = !(awaitedLeftType === leftType && awaitedRightType === rightType)
                    && !!(awaitedLeftType && awaitedRightType)
                    && isRelated(awaitedLeftType, awaitedRightType);
            }

            let effectiveLeft = leftType;
            let effectiveRight = rightType;
            if (!wouldWorkWithAwait && isRelated) {
                [effectiveLeft, effectiveRight] = getBaseTypesIfUnrelated(leftType, rightType, isRelated);
            }
            const [leftStr, rightStr] = getTypeNamesForErrorDisplay(effectiveLeft, effectiveRight);
            if (!tryGiveBetterPrimaryError(errNode, wouldWorkWithAwait, leftStr, rightStr)) {
                errorAndMaybeSuggestAwait(
                    errNode,
                    wouldWorkWithAwait,
                    Diagnostics.Operator_0_cannot_be_applied_to_types_1_and_2,
                    tokenToString(operatorToken.kind),
                    leftStr,
                    rightStr,
                );
            }
        }

        function tryGiveBetterPrimaryError(errNode: Node, maybeMissingAwait: boolean, leftStr: string, rightStr: string) {
            switch (operatorToken.kind) {
                case SyntaxKind.EqualsEqualsEqualsToken:
                case SyntaxKind.EqualsEqualsToken:
                case SyntaxKind.ExclamationEqualsEqualsToken:
                case SyntaxKind.ExclamationEqualsToken:
                    return errorAndMaybeSuggestAwait(
                        errNode,
                        maybeMissingAwait,
                        Diagnostics.This_comparison_appears_to_be_unintentional_because_the_types_0_and_1_have_no_overlap,
                        leftStr,
                        rightStr,
                    );
                default:
                    return undefined;
            }
        }

        function checkNaNEquality(errorNode: Node | undefined, operator: SyntaxKind, left: Expression, right: Expression) {
            const isLeftNaN = isGlobalNaN(skipParentheses(left));
            const isRightNaN = isGlobalNaN(skipParentheses(right));
            if (isLeftNaN || isRightNaN) {
                const err = error(errorNode, Diagnostics.This_condition_will_always_return_0, tokenToString(operator === SyntaxKind.EqualsEqualsEqualsToken || operator === SyntaxKind.EqualsEqualsToken ? SyntaxKind.FalseKeyword : SyntaxKind.TrueKeyword));
                if (isLeftNaN && isRightNaN) return;
                const operatorString = operator === SyntaxKind.ExclamationEqualsEqualsToken || operator === SyntaxKind.ExclamationEqualsToken ? tokenToString(SyntaxKind.ExclamationToken) : "";
                const location = isLeftNaN ? right : left;
                const expression = skipParentheses(location);
                addRelatedInfo(err, createDiagnosticForNode(location, Diagnostics.Did_you_mean_0, `${operatorString}Number.isNaN(${isEntityNameExpression(expression) ? entityNameToString(expression) : "..."})`));
            }
        }

        function isGlobalNaN(expr: Expression): boolean {
            // if (isIdentifier(expr) && expr.text === "NaN") {
            //     const globalNaNSymbol = getGlobalNaNSymbol();
            //     return !!globalNaNSymbol && globalNaNSymbol === getResolvedSymbol(expr);
            // }
            return false;
        }
    }

    function checkTestingKnownTruthyCallableOrAwaitableOrEnumMemberType(condExpr: Expression, condType: Type, body?: Statement | Expression) {
        if (!strictNullChecks) return;
        bothHelper(condExpr, body);

        function bothHelper(condExpr: Expression, body: Expression | Statement | undefined) {
            condExpr = skipParentheses(condExpr);

            helper(condExpr, body);

            while (isBinaryExpression(condExpr) && (condExpr.operatorToken.kind === SyntaxKind.BarBarToken)) {
                condExpr = skipParentheses(condExpr.left);
                helper(condExpr, body);
            }
        }

        function helper(condExpr: Expression, body: Expression | Statement | undefined) {
            const location = isLogicalOrCoalescingBinaryExpression(condExpr) ? skipParentheses(condExpr.right) : condExpr;
            // if (isModuleExportsAccessExpression(location)) {
            //     return;
            // }
            if (isLogicalOrCoalescingBinaryExpression(location)) {
                bothHelper(location, body);
                return;
            }
            const type = location === condExpr ? condType : checkTruthinessExpression(location);
            if (type.flags & TypeFlags.EnumLiteral && isPropertyAccessExpression(location) && (getNodeLinks(location.expression).resolvedSymbol ?? unknownSymbol).flags & SymbolFlags.Enum) {
                // EnumLiteral type at condition with known value is always truthy or always falsy, likely an error
                error(location, Diagnostics.This_condition_will_always_return_0, !!(type as LiteralType).value ? "true" : "false");
                return;
            }
            //const isPropertyExpressionCast = isPropertyAccessExpression(location) && isTypeAssertion(location.expression);
            if (!hasTypeFacts(type, TypeFacts.Truthy)) return;

            // While it technically should be invalid for any known-truthy value
            // to be tested, we de-scope to functions and Promises unreferenced in
            // the block as a heuristic to identify the most common bugs. There
            // are too many false positives for values sourced from type
            // definitions without strictNullChecks otherwise.
            const callSignatures = getSignaturesOfType(type, SignatureKind.Call);
            // const isPromise = !!getAwaitedTypeOfPromise(type);
            // if (callSignatures.length === 0 && !isPromise) {
            //     return;
            // }

            const testedNode = isIdentifier(location) ? location
                : isPropertyAccessExpression(location) ? location.name
                : undefined;
            const testedSymbol = testedNode && getSymbolAtLocation(testedNode);
            if (!testedSymbol) {
                return;
            }

            const isUsed = testedSymbol && isBinaryExpression(condExpr.parent) && isSymbolUsedInBinaryExpressionChain(condExpr.parent, testedSymbol)
                || testedSymbol && body && isSymbolUsedInConditionBody(condExpr, body, testedNode, testedSymbol);
            if (!isUsed) {
                // if (isPromise) {
                //     errorAndMaybeSuggestAwait(
                //         location,
                //         /*maybeMissingAwait*/ true,
                //         Diagnostics.This_condition_will_always_return_true_since_this_0_is_always_defined,
                //         getTypeNameForErrorDisplay(type),
                //     );
                // }
                // else {
                    error(location, Diagnostics.This_condition_will_always_return_true_since_this_function_is_always_defined_Did_you_mean_to_call_it_instead);
                //}
            }
        }
    }

    function isSymbolUsedInConditionBody(expr: Expression, body: Statement | Expression, testedNode: Node, testedSymbol: Symbol): boolean {
        return !!forEachChild(body, function check(childNode): boolean | undefined {
            if (isIdentifier(childNode)) {
                const childSymbol = getSymbolAtLocation(childNode);
                if (childSymbol && childSymbol === testedSymbol) {
                    // If the test was a simple identifier, the above check is sufficient
                    if (isIdentifier(expr) || isIdentifier(testedNode) && isBinaryExpression(testedNode.parent)) {
                        return true;
                    }
                    // Otherwise we need to ensure the symbol is called on the same target
                    let testedExpression = testedNode.parent;
                    let childExpression = childNode.parent;
                    while (testedExpression && childExpression) {
                        if (
                            isIdentifier(testedExpression) && isIdentifier(childExpression)
                        ) {
                            return getSymbolAtLocation(testedExpression) === getSymbolAtLocation(childExpression);
                        }
                        else if (isPropertyAccessExpression(testedExpression) && isPropertyAccessExpression(childExpression)) {
                            if (getSymbolAtLocation(testedExpression.name) !== getSymbolAtLocation(childExpression.name)) {
                                return false;
                            }
                            childExpression = childExpression.expression;
                            testedExpression = testedExpression.expression;
                        }
                        else if (isCallExpression(testedExpression) && isCallExpression(childExpression)) {
                            childExpression = childExpression.expression;
                            testedExpression = testedExpression.expression;
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
            return forEachChild(childNode, check);
        });
    }

    function isSymbolUsedInBinaryExpressionChain(node: Node, testedSymbol: Symbol): boolean {
        while (isBinaryExpression(node) && node.operatorToken.kind === SyntaxKind.AmpersandAmpersandToken) {
            const isUsed = forEachChild(node.right, function visit(child): boolean | undefined {
                if (isIdentifier(child)) {
                    const symbol = getSymbolAtLocation(child);
                    if (symbol && symbol === testedSymbol) {
                        return true;
                    }
                }
                return forEachChild(child, visit);
            });
            if (isUsed) {
                return true;
            }
            node = node.parent;
        }
        return false;
    }

    function hasTypeFacts(type: Type, mask: TypeFacts): boolean {
        return getTypeFacts(type, mask) !== 0;
    }

    function checkSourceFileWithEagerDiagnostics(sourceFile: SourceFile, nodesToCheck?: Node[]) {
        ensurePendingDiagnosticWorkComplete();
        // then setup diagnostics for immediate invocation (as we are about to collect them, and
        // this avoids the overhead of longer-lived callbacks we don't need to allocate)
        // This also serves to make the shift to possibly lazy diagnostics transparent to serial command-line scenarios
        // (as in those cases, all the diagnostics will still be computed as the appropriate place in the tree,
        // thus much more likely retaining the same union ordering as before we had lazy diagnostics)
        const oldAddLazyDiagnostics = addLazyDiagnostic;
        addLazyDiagnostic = cb => cb();
        checkSourceFile(sourceFile, nodesToCheck);
        addLazyDiagnostic = oldAddLazyDiagnostics;
    }
    
    function ensurePendingDiagnosticWorkComplete() {
        // Invoke any existing lazy diagnostics to add them, clear the backlog of diagnostics
        for (const cb of deferredDiagnosticsCallbacks) {
            cb();
        }
        deferredDiagnosticsCallbacks = [];
    }

    function createSymbol(flags: SymbolFlags, name: string, checkFlags?: CheckFlags) {
        symbolCount++;
        const symbol = new Symbol(flags | SymbolFlags.Transient, name) as TransientSymbol;
        symbol.links = new SymbolLinks() as TransientSymbolLinks;
        symbol.links.checkFlags = checkFlags || CheckFlags.None;
        return symbol;
    }

    function signatureToString(signature: Signature, enclosingDeclaration?: Node, flags = TypeFormatFlags.None, kind?: SignatureKind, writer?: EmitTextWriter): string {
        return "n/a"; // TODO
    }

    function createSignature(
        declaration: SignatureDeclaration | JSDocSignature | undefined,
        typeParameters: readonly TypeParameter[] | undefined,
        thisParameter: Symbol | undefined,
        parameters: readonly Symbol[],
        resolvedReturnType: Type | undefined,
        /** @deprecated not used in LPC */
        resolvedTypePredicate: undefined,//TypePredicate | undefined,
        minArgumentCount: number,
        flags: SignatureFlags,
    ): Signature {
        const sig = new Signature(checker, flags);
        sig.declaration = declaration;
        sig.typeParameters = typeParameters;
        sig.parameters = parameters;
        sig.thisParameter = thisParameter;
        sig.resolvedReturnType = resolvedReturnType;
        //sig.resolvedTypePredicate = resolvedTypePredicate;
        sig.minArgumentCount = minArgumentCount;
        sig.resolvedMinArgumentCount = undefined;
        sig.target = undefined;
        sig.mapper = undefined;
        sig.compositeSignatures = undefined;
        sig.compositeKind = undefined;
        return sig;
    }

    function createAnonymousType(symbol: Symbol | undefined, members: SymbolTable, callSignatures: readonly Signature[], constructSignatures: readonly Signature[], indexInfos: readonly IndexInfo[]): ResolvedType {
        return setStructuredTypeMembers(createObjectType(ObjectFlags.Anonymous, symbol), members, callSignatures, constructSignatures, indexInfos);
    }

    function setStructuredTypeMembers(type: StructuredType, members: SymbolTable, callSignatures: readonly Signature[], constructSignatures: readonly Signature[], indexInfos: readonly IndexInfo[]): ResolvedType {
        const resolved = type as ResolvedType;
        resolved.members = members;
        resolved.properties = emptyArray;
        resolved.callSignatures = callSignatures;
        resolved.constructSignatures = constructSignatures;
        resolved.indexInfos = indexInfos;
        // This can loop back to getPropertyOfType() which would crash if `callSignatures` & `constructSignatures` are not initialized.
        if (members !== emptySymbols) resolved.properties = getNamedMembers(members);
        return resolved;
    }

    function createObjectType(objectFlags: ObjectFlags, symbol?: Symbol): ObjectType {
        const type = createTypeWithSymbol(TypeFlags.Object, symbol!) as ObjectType;
        type.objectFlags = objectFlags;
        type.members = undefined;
        type.properties = undefined;
        type.callSignatures = undefined;
        type.constructSignatures = undefined;
        type.indexInfos = undefined;
        return type;
    }

    function getNamedMembers(members: SymbolTable): Symbol[] {
        let result: Symbol[] | undefined;
        members.forEach((symbol, id) => {
            if (isNamedMember(symbol, id)) {
                (result || (result = [])).push(symbol);
            }
        });
        return result || emptyArray;
    }

    function createTypeWithSymbol(flags: TypeFlags, symbol: Symbol): Type {
        const result = createType(flags);
        result.symbol = symbol;
        return result;
    }

    function isNamedMember(member: Symbol, escapedName: string) {
        return symbolIsValue(member);
    }

    function symbolIsValue(symbol: Symbol, includeTypeOnlyMembers?: boolean): boolean {
        return !!(
            symbol.flags & SymbolFlags.Value ||
            symbol.flags & SymbolFlags.Alias && getSymbolFlags(symbol, !includeTypeOnlyMembers) & SymbolFlags.Value
        );
    }

    /**
     * Gets combined flags of a `symbol` and all alias targets it resolves to. `resolveAlias`
     * is typically recursive over chains of aliases, but stops mid-chain if an alias is merged
     * with another exported symbol, e.g.
     * ```ts
     * // a.ts
     * export const a = 0;
     * // b.ts
     * export { a } from "./a";
     * export type a = number;
     * // c.ts
     * import { a } from "./b";
     * ```
     * Calling `resolveAlias` on the `a` in c.ts would stop at the merged symbol exported
     * from b.ts, even though there is still more alias to resolve. Consequently, if we were
     * trying to determine if the `a` in c.ts has a value meaning, looking at the flags on
     * the local symbol and on the symbol returned by `resolveAlias` is not enough.
     * @returns SymbolFlags.All if `symbol` is an alias that ultimately resolves to `unknown`;
     * combined flags of all alias targets otherwise.
     */
    function getSymbolFlags(symbol: Symbol, excludeTypeOnlyMeanings?: boolean, excludeLocalMeanings?: boolean): SymbolFlags {
        // LPC does not have aliases
        return symbol.flags;
        // const typeOnlyDeclaration = excludeTypeOnlyMeanings && getTypeOnlyAliasDeclaration(symbol);
        // const typeOnlyDeclarationIsExportStar = typeOnlyDeclaration && isExportDeclaration(typeOnlyDeclaration);
        // const typeOnlyResolution = typeOnlyDeclaration && (
        //     typeOnlyDeclarationIsExportStar
        //         ? resolveExternalModuleName(typeOnlyDeclaration.moduleSpecifier, typeOnlyDeclaration.moduleSpecifier, /*ignoreErrors*/ true)
        //         : resolveAlias(typeOnlyDeclaration.symbol)
        // );
        // const typeOnlyExportStarTargets = typeOnlyDeclarationIsExportStar && typeOnlyResolution ? getExportsOfModule(typeOnlyResolution) : undefined;
        // let flags = excludeLocalMeanings ? SymbolFlags.None : symbol.flags;
        // let seenSymbols;
        // while (symbol.flags & SymbolFlags.Alias) {
        //     const target = getExportSymbolOfValueSymbolIfExported(resolveAlias(symbol));
        //     if (
        //         !typeOnlyDeclarationIsExportStar && target === typeOnlyResolution ||
        //         typeOnlyExportStarTargets?.get(target.name) === target
        //     ) {
        //         break;
        //     }
        //     if (target === unknownSymbol) {
        //         return SymbolFlags.All;
        //     }

        //     // Optimizations - try to avoid creating or adding to
        //     // `seenSymbols` if possible
        //     if (target === symbol || seenSymbols?.has(target)) {
        //         break;
        //     }
        //     if (target.flags & SymbolFlags.Alias) {
        //         if (seenSymbols) {
        //             seenSymbols.add(target);
        //         }
        //         else {
        //             seenSymbols = new Set([symbol, target]);
        //         }
        //     }
        //     flags |= target.flags;
        //     symbol = target;
        // }
        // return flags;
    }

    function checkAndReportErrorForMissingPrefix(errorLocation: Node, name: string, nameArg: string | Identifier): boolean {
        if (!isIdentifier(errorLocation) || errorLocation.text !== name /*|| isTypeReferenceIdentifier(errorLocation) || isInTypeQuery(errorLocation)*/) {
            return false;
        }

        // TODO: no this in LPC, not needed?
        // const container = getThisContainer(errorLocation, /*includeArrowFunctions*/ false, /*includeClassComputedPropertyName*/ false);
        // let location: Node = container;
        // while (location) {
        //     if (isClassLike(location.parent)) {
        //         const classSymbol = getSymbolOfDeclaration(location.parent);
        //         if (!classSymbol) {
        //             break;
        //         }

        //         // Check to see if a static member exists.
        //         const constructorType = getTypeOfSymbol(classSymbol);
        //         if (getPropertyOfType(constructorType, name)) {
        //             error(errorLocation, Diagnostics.Cannot_find_name_0_Did_you_mean_the_static_member_1_0, diagnosticName(nameArg), symbolToString(classSymbol));
        //             return true;
        //         }

        //         // No static member is present.
        //         // Check if we're in an instance method and look for a relevant instance member.
        //         if (location === container && !isStatic(location)) {
        //             const instanceType = (getDeclaredTypeOfSymbol(classSymbol) as InterfaceType).thisType!; // TODO: GH#18217
        //             if (getPropertyOfType(instanceType, name)) {
        //                 error(errorLocation, Diagnostics.Cannot_find_name_0_Did_you_mean_the_instance_member_this_0, diagnosticName(nameArg));
        //                 return true;
        //             }
        //         }
        //     }

        //     location = location.parent;
        // }
        return false;
    }
    
    function isPrimitiveTypeName(name: string) {
        return name === "string" || name === "int" || name === "object" || name === "float" || name === "mixed" || name === "mapping" || name === "unknown";
    }

    /**
     * Indicates that a symbol is an alias that does not merge with a local declaration.
     * OR Is a JSContainer which may merge an alias with a local declaration
     */
    function isNonLocalAlias(symbol: Symbol | undefined, excludes = SymbolFlags.Value | SymbolFlags.Type | SymbolFlags.Namespace): symbol is Symbol {
        if (!symbol) return false;
        return (symbol.flags & (SymbolFlags.Alias | excludes)) === SymbolFlags.Alias || !!(symbol.flags & SymbolFlags.Alias && symbol.flags & SymbolFlags.Assignment);
    }

    function resolveSymbol(symbol: Symbol, dontResolveAlias?: boolean): Symbol;
    function resolveSymbol(symbol: Symbol | undefined, dontResolveAlias?: boolean): Symbol | undefined;
    function resolveSymbol(symbol: Symbol | undefined, dontResolveAlias?: boolean): Symbol | undefined {
        return !dontResolveAlias && isNonLocalAlias(symbol) ? resolveAlias(symbol) : symbol;
    }

    function resolveAlias(symbol: Symbol): Symbol {
        Debug.assert((symbol.flags & SymbolFlags.Alias) !== 0, "Should only get Alias here.");
        const links = getSymbolLinks(symbol);
        if (!links.aliasTarget) {
            links.aliasTarget = resolvingSymbol;
            const node = getDeclarationOfAliasSymbol(symbol);
            if (!node) return Debug.fail();
            const target = getTargetOfAliasDeclaration(node);
            if (links.aliasTarget === resolvingSymbol) {
                links.aliasTarget = target || unknownSymbol;
            }
            else {
                error(node, Diagnostics.Circular_definition_of_import_alias_0, symbolToString(symbol));
            }
        }
        else if (links.aliasTarget === resolvingSymbol) {
            links.aliasTarget = unknownSymbol;
        }
        return links.aliasTarget;
    }

    function tryResolveAlias(symbol: Symbol): Symbol | undefined {
        const links = getSymbolLinks(symbol);
        if (links.aliasTarget !== resolvingSymbol) {
            return resolveAlias(symbol);
        }

        return undefined;
    }

    function symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags: SymbolFormatFlags = SymbolFormatFlags.AllowAnyNodeKind, writer?: EmitTextWriter): string {
        //Debug.fail("Implement me - symbolToString");
        let nodeFlags = NodeBuilderFlags.IgnoreErrors;
        if (flags & SymbolFormatFlags.UseOnlyExternalAliasing) {
            nodeFlags |= NodeBuilderFlags.UseOnlyExternalAliasing;
        }
        if (flags & SymbolFormatFlags.WriteTypeParametersOrArguments) {
            nodeFlags |= NodeBuilderFlags.WriteTypeParametersInQualifiedName;
        }
        if (flags & SymbolFormatFlags.UseAliasDefinedOutsideCurrentScope) {
            nodeFlags |= NodeBuilderFlags.UseAliasDefinedOutsideCurrentScope;
        }
        if (flags & SymbolFormatFlags.DoNotIncludeSymbolChain) {
            nodeFlags |= NodeBuilderFlags.DoNotIncludeSymbolChain;
        }
        if (flags & SymbolFormatFlags.WriteComputedProps) {
            nodeFlags |= NodeBuilderFlags.WriteComputedProps;
        }
        
        const builder = flags & SymbolFormatFlags.AllowAnyNodeKind ? nodeBuilder.symbolToNode : nodeBuilder.symbolToEntityName;
        return writer ? symbolToStringWorker(writer).getText() : usingSingleLineStringWriter(symbolToStringWorker);

        function symbolToStringWorker(writer: EmitTextWriter) {
            const entity = builder(symbol, meaning!, enclosingDeclaration, nodeFlags)!; // TODO: GH#18217
            // add neverAsciiEscape for GH#39027
            const printer = enclosingDeclaration?.kind === SyntaxKind.SourceFile
                ? createPrinterWithRemoveCommentsNeverAsciiEscape()
                : createPrinterWithRemoveComments();
            const sourceFile = enclosingDeclaration && getSourceFileOfNode(enclosingDeclaration);
            printer.writeNode(EmitHint.Unspecified, entity, /*sourceFile*/ sourceFile, writer);
            return writer;
        }
    }
    
    

    function lookupSymbolChain(symbol: Symbol, context: NodeBuilderContext, meaning: SymbolFlags, yieldModuleSymbol?: boolean) {
        context.tracker.trackSymbol(symbol, context.enclosingDeclaration, meaning);
        return lookupSymbolChainWorker(symbol, context, meaning, yieldModuleSymbol);
    }

    function lookupSymbolChainWorker(symbol: Symbol, context: NodeBuilderContext, meaning: SymbolFlags, yieldModuleSymbol?: boolean) {
        // Try to get qualified name if the symbol is not a type parameter and there is an enclosing declaration.
        let chain: Symbol[];
        const isTypeParameter = symbol.flags & SymbolFlags.TypeParameter;
        if (!isTypeParameter && (context.enclosingDeclaration || context.flags & NodeBuilderFlags.UseFullyQualifiedType) && !(context.flags & NodeBuilderFlags.DoNotIncludeSymbolChain)) {
            chain = Debug.checkDefined(getSymbolChain(symbol, meaning, /*endOfChain*/ true));
            Debug.assert(chain && chain.length > 0);
        }
        else {
            chain = [symbol];
        }
        return chain;

        /** @param endOfChain Set to false for recursive calls; non-recursive calls should always output something. */
        function getSymbolChain(symbol: Symbol, meaning: SymbolFlags, endOfChain: boolean): Symbol[] | undefined {
            console.warn("TODO - implement me - getSymbolChain");
            return [];
        //     let accessibleSymbolChain = getAccessibleSymbolChain(symbol, context.enclosingDeclaration, meaning, !!(context.flags & NodeBuilderFlags.UseOnlyExternalAliasing));
        //     let parentSpecifiers: (string | undefined)[];
        //     if (
        //         !accessibleSymbolChain ||
        //         needsQualification(accessibleSymbolChain[0], context.enclosingDeclaration, accessibleSymbolChain.length === 1 ? meaning : getQualifiedLeftMeaning(meaning))
        //     ) {
        //         // Go up and add our parent.
        //         const parents = getContainersOfSymbol(accessibleSymbolChain ? accessibleSymbolChain[0] : symbol, context.enclosingDeclaration, meaning);
        //         if (length(parents)) {
        //             parentSpecifiers = parents!.map(symbol =>
        //                 some(symbol.declarations, hasNonGlobalAugmentationExternalModuleSymbol)
        //                     ? getSpecifierForModuleSymbol(symbol, context)
        //                     : undefined
        //             );
        //             const indices = parents!.map((_, i) => i);
        //             indices.sort(sortByBestName);
        //             const sortedParents = indices.map(i => parents![i]);
        //             for (const parent of sortedParents) {
        //                 const parentChain = getSymbolChain(parent, getQualifiedLeftMeaning(meaning), /*endOfChain*/ false);
        //                 if (parentChain) {
        //                     if (
        //                         parent.exports && parent.exports.get(InternalSymbolName.ExportEquals) &&
        //                         getSymbolIfSameReference(parent.exports.get(InternalSymbolName.ExportEquals)!, symbol)
        //                     ) {
        //                         // parentChain root _is_ symbol - symbol is a module export=, so it kinda looks like it's own parent
        //                         // No need to lookup an alias for the symbol in itself
        //                         accessibleSymbolChain = parentChain;
        //                         break;
        //                     }
        //                     accessibleSymbolChain = parentChain.concat(accessibleSymbolChain || [getAliasForSymbolInContainer(parent, symbol) || symbol]);
        //                     break;
        //                 }
        //             }
        //         }
        //     }

        //     if (accessibleSymbolChain) {
        //         return accessibleSymbolChain;
        //     }
        //     if (
        //         // If this is the last part of outputting the symbol, always output. The cases apply only to parent symbols.
        //         endOfChain ||
        //         // If a parent symbol is an anonymous type, don't write it.
        //         !(symbol.flags & (SymbolFlags.TypeLiteral | SymbolFlags.ObjectLiteral))
        //     ) {
        //         // If a parent symbol is an external module, don't write it. (We prefer just `x` vs `"foo/bar".x`.)
        //         if (!endOfChain && !yieldModuleSymbol && !!forEach(symbol.declarations, hasNonGlobalAugmentationExternalModuleSymbol)) {
        //             return;
        //         }
        //         return [symbol];
        //     }

        //     function sortByBestName(a: number, b: number) {
        //         const specifierA = parentSpecifiers[a];
        //         const specifierB = parentSpecifiers[b];
        //         if (specifierA && specifierB) {
        //             const isBRelative = pathIsRelative(specifierB);
        //             if (pathIsRelative(specifierA) === isBRelative) {
        //                 // Both relative or both non-relative, sort by number of parts
        //                 return moduleSpecifiers.countPathComponents(specifierA) - moduleSpecifiers.countPathComponents(specifierB);
        //             }
        //             if (isBRelative) {
        //                 // A is non-relative, B is relative: prefer A
        //                 return -1;
        //             }
        //             // A is relative, B is non-relative: prefer B
        //             return 1;
        //         }
        //         return 0;
        //     }
        }
    }


    
    function getNameOfSymbolFromNameType(symbol: Symbol, context?: NodeBuilderContext) {
        const nameType = getSymbolLinks(symbol).nameType;
        if (nameType) {
            if (nameType.flags & TypeFlags.StringOrNumberLiteral) {
                const name = "" + (nameType as StringLiteralType | IntLiteralType).value;
                if (!isIdentifierText(name, getEmitScriptTarget(compilerOptions)) && !isNumericLiteralName(name)) {
                    return `"${escapeString(name, CharacterCodes.doubleQuote)}"`;
                }
                if (isNumericLiteralName(name) && startsWith(name, "-")) {
                    return `[${name}]`;
                }
                return name;
            }
            // if (nameType.flags & TypeFlags.UniqueESSymbol) {
            //     return `[${getNameOfSymbolAsWritten((nameType as UniqueESSymbolType).symbol, context)}]`;
            // }
        }
    }

    /**
     * Gets a human-readable name for a symbol.
     * Should *not* be used for the right-hand side of a `.` -- use `symbolName(symbol)` for that instead.
     *
     * Unlike `symbolName(symbol)`, this will include quotes if the name is from a string literal.
     * It will also use a representation of a number as written instead of a decimal form, e.g. `0o11` instead of `9`.
     */
    function getNameOfSymbolAsWritten(symbol: Symbol, context?: NodeBuilderContext): string {
        if (context?.remappedSymbolReferences?.has(getSymbolId(symbol))) {
            symbol = context.remappedSymbolReferences.get(getSymbolId(symbol))!;
        }
        if (
            context && symbol.name === InternalSymbolName.Default && !(context.flags & NodeBuilderFlags.UseAliasDefinedOutsideCurrentScope) &&
            // If it's not the first part of an entity name, it must print as `default`
            (!(context.flags & NodeBuilderFlags.InInitialEntityName) ||
                // if the symbol is synthesized, it will only be referenced externally it must print as `default`
                !symbol.declarations
                // if not in the same binding context (source file, module declaration), it must print as `default`
                // || (context.enclosingDeclaration && findAncestor(symbol.declarations[0], isDefaultBindingContext) !== findAncestor(context.enclosingDeclaration, isDefaultBindingContext))
                )
        ) {
            return "default";
        }
        if (symbol.declarations && symbol.declarations.length) {
            let declaration = firstDefined(symbol.declarations, d => getNameOfDeclaration(d) ? d : undefined); // Try using a declaration with a name, first
            const name = declaration && getNameOfDeclaration(declaration);
            if (declaration && name) {
                // if (isCallExpression(declaration) && isBindableObjectDefinePropertyCall(declaration)) {
                //     return symbolName(symbol);
                // }
                if (isComputedPropertyName(name) && !(getCheckFlags(symbol) & CheckFlags.Late)) {
                    const nameType = getSymbolLinks(symbol).nameType;
                    if (nameType && nameType.flags & TypeFlags.StringOrNumberLiteral) {
                        // Computed property name isn't late bound, but has a well-known name type - use name type to generate a symbol name
                        const result = getNameOfSymbolFromNameType(symbol, context);
                        if (result !== undefined) {
                            return result;
                        }
                    }
                }
                return declarationNameToString(name);
            }
            if (!declaration) {
                declaration = symbol.declarations[0]; // Declaration may be nameless, but we'll try anyway
            }
            if (declaration.parent && declaration.parent.kind === SyntaxKind.VariableDeclaration) {
                return declarationNameToString((declaration.parent as VariableDeclaration).name);
            }
            switch (declaration.kind) {
                case SyntaxKind.ClassExpression:
                case SyntaxKind.FunctionExpression:
                case SyntaxKind.InlineClosureExpression:
                    if (context && !context.encounteredError && !(context.flags & NodeBuilderFlags.AllowAnonymousIdentifier)) {
                        context.encounteredError = true;
                    }
                    return declaration.kind === SyntaxKind.ClassExpression ? "(Anonymous class)" : "(Anonymous function)";
            }
        }
        const name = getNameOfSymbolFromNameType(symbol, context);
        return name !== undefined ? name : symbolName(symbol);
    }

    
    function createNodeBuilder() {
        return {            
            symbolToExpression: (symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration?: Node, flags?: NodeBuilderFlags, tracker?: SymbolTracker) => withContext(enclosingDeclaration, flags, tracker, context => symbolToExpression(symbol, context, meaning)),
            symbolToEntityName: (symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration?: Node, flags?: NodeBuilderFlags, tracker?: SymbolTracker) => withContext(enclosingDeclaration, flags, tracker, context => symbolToName(symbol, context, meaning, /*expectsIdentifier*/ false)),            
            symbolToNode: (symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration?: Node, flags?: NodeBuilderFlags, tracker?: SymbolTracker) => withContext(enclosingDeclaration, flags, tracker, context => symbolToNode(symbol, context, meaning)),
            //typeToTypeNode: (type: Type, enclosingDeclaration?: Node, flags?: NodeBuilderFlags, tracker?: SymbolTracker) => withContext(enclosingDeclaration, flags, tracker, context => typeToTypeNodeHelper(type, context)),
        };

        function symbolToExpression(symbol: Symbol, context: NodeBuilderContext, meaning: SymbolFlags) {
            const chain = lookupSymbolChain(symbol, context, meaning);

            return createExpressionFromSymbolChain(chain, chain.length - 1);

            function createExpressionFromSymbolChain(chain: Symbol[], index: number): Expression {
                //const typeParameterNodes = lookupTypeParameterNodes(chain, index, context);
                const symbol = chain[index];

                if (index === 0) {
                    context.flags |= NodeBuilderFlags.InInitialEntityName;
                }
                let symbolName = getNameOfSymbolAsWritten(symbol, context);
                if (index === 0) {
                    context.flags ^= NodeBuilderFlags.InInitialEntityName;
                }
                let firstChar = symbolName.charCodeAt(0);

                // if (isSingleOrDoubleQuote(firstChar) && some(symbol.declarations, hasNonGlobalAugmentationExternalModuleSymbol)) {
                //     return factory.createStringLiteral(getSpecifierForModuleSymbol(symbol, context));
                // }
                if (index === 0 || canUsePropertyAccess(symbolName, languageVersion)) {
                    const identifier = setEmitFlags(factory.createIdentifier(symbolName), EmitFlags.NoAsciiEscaping);
                    //if (typeParameterNodes) setIdentifierTypeArguments(identifier, factory.createNodeArray<TypeNode | TypeParameterDeclaration>(typeParameterNodes));
                    identifier.symbol = symbol;

                    return index > 0 ? factory.createPropertyAccessExpression(createExpressionFromSymbolChain(chain, index - 1), identifier) : identifier;
                }
                else {
                    if (firstChar === CharacterCodes.openBracket) {
                        symbolName = symbolName.substring(1, symbolName.length - 1);
                        firstChar = symbolName.charCodeAt(0);
                    }
                    let expression: Expression | undefined;
                    if (isSingleOrDoubleQuote(firstChar) && !(symbol.flags & SymbolFlags.EnumMember)) {
                        expression = factory.createStringLiteral(stripQuotes(symbolName).replace(/\\./g, s => s.substring(1)), firstChar === CharacterCodes.singleQuote);
                    }
                    else if (("" + +symbolName) === symbolName) {
                        expression = factory.createIntLiteral(+symbolName);
                    }
                    if (!expression) {
                        const identifier = setEmitFlags(factory.createIdentifier(symbolName), EmitFlags.NoAsciiEscaping);
                        //if (typeParameterNodes) setIdentifierTypeArguments(identifier, factory.createNodeArray<TypeNode | TypeParameterDeclaration>(typeParameterNodes));
                        identifier.symbol = symbol;
                        expression = identifier;
                    }
                    return factory.createElementAccessExpression(createExpressionFromSymbolChain(chain, index - 1), expression);
                }
            }
        }

        function symbolToNode(symbol: Symbol, context: NodeBuilderContext, meaning: SymbolFlags) {
            if (context.flags & NodeBuilderFlags.WriteComputedProps) {
                if (symbol.valueDeclaration) {
                    const name = getNameOfDeclaration(symbol.valueDeclaration);
                    if (name && isComputedPropertyName(name)) return name;
                }
                const nameType = getSymbolLinks(symbol).nameType;
                if (nameType && nameType.flags & (TypeFlags.EnumLiteral | TypeFlags.UniqueESSymbol)) {
                    context.enclosingDeclaration = nameType.symbol.valueDeclaration;
                    return factory.createComputedPropertyName(symbolToExpression(nameType.symbol, context, meaning));
                }
            }
            return symbolToExpression(symbol, context, meaning);
        }

        function symbolToName(symbol: Symbol, context: NodeBuilderContext, meaning: SymbolFlags, expectsIdentifier: true): Identifier;
        function symbolToName(symbol: Symbol, context: NodeBuilderContext, meaning: SymbolFlags, expectsIdentifier: false): EntityName;
        function symbolToName(symbol: Symbol, context: NodeBuilderContext, meaning: SymbolFlags, expectsIdentifier: boolean): EntityName {
            const chain = lookupSymbolChain(symbol, context, meaning);

            if (
                expectsIdentifier && chain.length !== 1
                && !context.encounteredError
                && !(context.flags & NodeBuilderFlags.AllowQualifiedNameInPlaceOfIdentifier)
            ) {
                context.encounteredError = true;
            }
            return createEntityNameFromSymbolChain(chain, chain.length - 1);

            function createEntityNameFromSymbolChain(chain: Symbol[], index: number): EntityName {
                //const typeParameterNodes = lookupTypeParameterNodes(chain, index, context);
                const symbol = chain[index];

                if (index === 0) {
                    context.flags |= NodeBuilderFlags.InInitialEntityName;
                }
                const symbolName = getNameOfSymbolAsWritten(symbol, context);
                if (index === 0) {
                    context.flags ^= NodeBuilderFlags.InInitialEntityName;
                }

                const identifier = setEmitFlags(factory.createIdentifier(symbolName), EmitFlags.NoAsciiEscaping);
                //if (typeParameterNodes) setIdentifierTypeArguments(identifier, factory.createNodeArray<TypeNode | TypeParameterDeclaration>(typeParameterNodes));
                identifier.symbol = symbol;

                return index > 0 ? factory.createQualifiedName(createEntityNameFromSymbolChain(chain, index - 1), identifier) : identifier;
            }
        }

    
        function withContext<T>(enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined, tracker: SymbolTracker | undefined, cb: (context: NodeBuilderContext) => T): T | undefined {
            const moduleResolverHost = tracker?.trackSymbol ? tracker.moduleResolverHost :
                flags! & NodeBuilderFlags.DoNotIncludeSymbolChain ? createBasicNodeBuilderModuleSpecifierResolutionHost(host) :
                undefined;
            const context: NodeBuilderContext = {
                enclosingDeclaration,
                enclosingFile: enclosingDeclaration && getSourceFileOfNode(enclosingDeclaration),
                flags: flags || NodeBuilderFlags.None,
                tracker: undefined!,
                encounteredError: false,
                reportedDiagnostic: false,
                visitedTypes: undefined,
                symbolDepth: undefined,
                inferTypeParameters: undefined,
                approximateLength: 0,
                trackedSymbols: undefined,
                bundled: false,
                truncating: false,
                usedSymbolNames: undefined,
                remappedSymbolNames: undefined,
                remappedSymbolReferences: undefined,
                reverseMappedStack: undefined,
                mustCreateTypeParameterSymbolList: true,
                typeParameterSymbolList: undefined,
                mustCreateTypeParametersNamesLookups: true,
                typeParameterNames: undefined,
                typeParameterNamesByText: undefined,
                typeParameterNamesByTextNextNameCount: undefined,
                mapper: undefined,
            };
            context.tracker = new SymbolTrackerImpl(context, tracker, moduleResolverHost);
            const resultingNode = cb(context);
            if (context.truncating && context.flags & NodeBuilderFlags.NoTruncation) {
                context.tracker.reportTruncationError();
            }
            return context.encounteredError ? undefined : resultingNode;
        }
    }

    function getTargetOfAliasDeclaration(node: Declaration, dontRecursivelyResolve = false): Symbol | undefined {
        // TODO
        Debug.fail("Implement me - getTargetOfAliasDeclaration");
        // switch (node.kind) {
        //     //case SyntaxKind.ImportEqualsDeclaration:
        //     case SyntaxKind.VariableDeclaration:
        //         return getTargetOfImportEqualsDeclaration(node as ImportEqualsDeclaration | VariableDeclaration, dontRecursivelyResolve);
        //     case SyntaxKind.ImportClause:
        //         return getTargetOfImportClause(node as ImportClause, dontRecursivelyResolve);
        //     case SyntaxKind.NamespaceImport:
        //         return getTargetOfNamespaceImport(node as NamespaceImport, dontRecursivelyResolve);
        //     case SyntaxKind.NamespaceExport:
        //         return getTargetOfNamespaceExport(node as NamespaceExport, dontRecursivelyResolve);
        //     case SyntaxKind.ImportSpecifier:
        //     case SyntaxKind.BindingElement:
        //         return getTargetOfImportSpecifier(node as ImportSpecifier | BindingElement, dontRecursivelyResolve);
        //     case SyntaxKind.ExportSpecifier:
        //         return getTargetOfExportSpecifier(node as ExportSpecifier, SymbolFlags.Value | SymbolFlags.Type | SymbolFlags.Namespace, dontRecursivelyResolve);
        //     case SyntaxKind.ExportAssignment:
        //     case SyntaxKind.BinaryExpression:
        //         return getTargetOfExportAssignment(node as ExportAssignment | BinaryExpression, dontRecursivelyResolve);
        //     case SyntaxKind.NamespaceExportDeclaration:
        //         return getTargetOfNamespaceExportDeclaration(node as NamespaceExportDeclaration, dontRecursivelyResolve);
        //     case SyntaxKind.ShorthandPropertyAssignment:
        //         return resolveEntityName((node as ShorthandPropertyAssignment).name, SymbolFlags.Value | SymbolFlags.Type | SymbolFlags.Namespace, /*ignoreErrors*/ true, dontRecursivelyResolve);
        //     case SyntaxKind.PropertyAssignment:
        //         return getTargetOfAliasLikeExpression((node as PropertyAssignment).initializer, dontRecursivelyResolve);
        //     case SyntaxKind.ElementAccessExpression:
        //     case SyntaxKind.PropertyAccessExpression:
        //         return getTargetOfAccessExpression(node as AccessExpression, dontRecursivelyResolve);
        //     default:
        //         return Debug.fail();
        // }
    }

    function getDeclarationOfAliasSymbol(symbol: Symbol): Declaration | undefined {
        return symbol.declarations && findLast<Declaration>(symbol.declarations, isAliasSymbolDeclaration);
    }

    /**
     * An alias symbol is created by one of the following declarations:
     * import <symbol> = ...
     * import <symbol> from ...
     * import * as <symbol> from ...
     * import { x as <symbol> } from ...
     * export { x as <symbol> } from ...
     * export * as ns <symbol> from ...
     * export = <EntityNameExpression>
     * export default <EntityNameExpression>
     * module.exports = <EntityNameExpression>
     * {<Identifier>}
     * {name: <EntityNameExpression>}
     * const { x } = require ...
     */
    function isAliasSymbolDeclaration(node: Node): boolean {
        // return node.kind === SyntaxKind.ImportEqualsDeclaration
        //     || node.kind === SyntaxKind.NamespaceExportDeclaration
        //     || node.kind === SyntaxKind.ImportClause && !!(node as ImportClause).name
        //     || node.kind === SyntaxKind.NamespaceImport
        //     || node.kind === SyntaxKind.NamespaceExport
        //     || node.kind === SyntaxKind.ImportSpecifier
        //     || node.kind === SyntaxKind.ExportSpecifier
        //     || node.kind === SyntaxKind.ExportAssignment && exportAssignmentIsAlias(node as ExportAssignment)
        //     || isBinaryExpression(node) && getAssignmentDeclarationKind(node) === AssignmentDeclarationKind.ModuleExports && exportAssignmentIsAlias(node)
        return isAccessExpression(node)
                && isBinaryExpression(node.parent)
                && node.parent.left === node
                && node.parent.operatorToken.kind === SyntaxKind.EqualsToken
                && isAliasableOrJsExpression(node.parent.right)
            || node.kind === SyntaxKind.ShorthandPropertyAssignment
            || node.kind === SyntaxKind.PropertyAssignment && isAliasableOrJsExpression((node as PropertyAssignment).initializer)
            || node.kind === SyntaxKind.VariableDeclaration && isVariableDeclarationInitializedToBareOrAccessedRequire(node)
            //|| node.kind === SyntaxKind.BindingElement && isVariableDeclarationInitializedToBareOrAccessedRequire(node.parent.parent);
            ;
    }

    function isAliasableOrJsExpression(e: Expression) {
        return isAliasableExpression(e);// || isFunctionExpression(e) && isJSConstructor(e);
    }

    function checkAndReportErrorForUsingTypeAsValue(errorLocation: Node, name: string, meaning: SymbolFlags): boolean {
        if (meaning & SymbolFlags.Value) {
            if (isPrimitiveTypeName(name)) {
                const grandparent = errorLocation.parent.parent;
                // if (grandparent && grandparent.parent && isHeritageClause(grandparent)) {
                //     const heritageKind = grandparent.token;
                //     const containerKind = grandparent.parent.kind;
                //     if (containerKind === SyntaxKind.InterfaceDeclaration && heritageKind === SyntaxKind.ExtendsKeyword) {
                //         error(errorLocation, Diagnostics.An_interface_cannot_extend_a_primitive_type_like_0_It_can_only_extend_other_named_object_types, unescapeLeadingUnderscores(name));
                //     }
                //     else if (containerKind === SyntaxKind.ClassDeclaration && heritageKind === SyntaxKind.ExtendsKeyword) {
                //         error(errorLocation, Diagnostics.A_class_cannot_extend_a_primitive_type_like_0_Classes_can_only_extend_constructable_values, unescapeLeadingUnderscores(name));
                //     }
                //     else if (containerKind === SyntaxKind.ClassDeclaration && heritageKind === SyntaxKind.ImplementsKeyword) {
                //         error(errorLocation, Diagnostics.A_class_cannot_implement_a_primitive_type_like_0_It_can_only_implement_other_named_object_types, unescapeLeadingUnderscores(name));
                //     }
                // }
                // else {
                    error(errorLocation, Diagnostics._0_only_refers_to_a_type_but_is_being_used_as_a_value_here, (name));
                //}
                return true;
            }
            const symbol = resolveSymbol(resolveName(errorLocation, name, SymbolFlags.Type & ~SymbolFlags.Value, /*nameNotFoundMessage*/ undefined, /*isUse*/ false));
            const allFlags = symbol && getSymbolFlags(symbol);
            if (symbol && allFlags !== undefined && !(allFlags & SymbolFlags.Value)) {
                const rawName = (name);
                // if (maybeMappedType(errorLocation, symbol)) {
                //     error(errorLocation, Diagnostics._0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Did_you_mean_to_use_1_in_0, rawName, rawName === "K" ? "P" : "K");
                // }
                // else {
                    error(errorLocation, Diagnostics._0_only_refers_to_a_type_but_is_being_used_as_a_value_here, rawName);
                //}
                return true;
            }
        }
        return false;
    }

    function checkAndReportErrorForUsingValueAsType(errorLocation: Node, name: string, meaning: SymbolFlags): boolean {
        if (meaning & (SymbolFlags.Type & ~SymbolFlags.Namespace)) {
            const symbol = resolveSymbol(resolveName(errorLocation, name, ~SymbolFlags.Type & SymbolFlags.Value, /*nameNotFoundMessage*/ undefined, /*isUse*/ false));
            if (symbol && !(symbol.flags & SymbolFlags.Namespace)) {
                error(errorLocation, Diagnostics._0_refers_to_a_value_but_is_being_used_as_a_type_here_Did_you_mean_typeof_0, (name));
                return true;
            }
        }
        return false;
    }

    function getSuggestedSymbolForNonexistentSymbol(location: Node | undefined, outerName: string, meaning: SymbolFlags): Symbol | undefined {
        Debug.assert(outerName !== undefined, "outername should always be defined");
        const result = resolveNameForSymbolSuggestion(location, outerName, meaning, /*nameNotFoundMessage*/ undefined, /*isUse*/ false, /*excludeGlobals*/ false);
        return result;
    }

    function getSuggestionForSymbolNameLookup(symbols: SymbolTable, name: string, meaning: SymbolFlags) {
        const symbol = getSymbol(symbols, name, meaning);
        // Sometimes the symbol is found when location is a return type of a function: `typeof x` and `x` is declared in the body of the function
        // So the table *contains* `x` but `x` isn't actually in scope.
        // However, resolveNameHelper will continue and call this callback again, so we'll eventually get a correct suggestion.
        if (symbol) return symbol;
        let candidates: Symbol[];
        if (symbols === globals) {
            const primitives = mapDefined(
                ["string", "number", "boolean", "object", "bigint", "symbol"],
                s => symbols.has((s.charAt(0).toUpperCase() + s.slice(1)) as string)
                    ? createSymbol(SymbolFlags.TypeAlias, s as string) as Symbol
                    : undefined,
            );
            candidates = primitives.concat(arrayFrom(symbols.values()));
        }
        else {
            candidates = arrayFrom(symbols.values());
        }
        return getSpellingSuggestionForName((name), candidates, meaning);
    }

    /**
     * Given a name and a list of symbols whose names are *not* equal to the name, return a spelling suggestion if there is one that is close enough.
     * Names less than length 3 only check for case-insensitive equality, not levenshtein distance.
     *
     * If there is a candidate that's the same except for case, return that.
     * If there is a candidate that's within one edit of the name, return that.
     * Otherwise, return the candidate with the smallest Levenshtein distance,
     *    except for candidates:
     *      * With no name
     *      * Whose meaning doesn't match the `meaning` parameter.
     *      * Whose length differs from the target name by more than 0.34 of the length of the name.
     *      * Whose levenshtein distance is more than 0.4 of the length of the name
     *        (0.4 allows 1 substitution/transposition for every 5 characters,
     *         and 1 insertion/deletion at 3 characters)
     */
    function getSpellingSuggestionForName(name: string, symbols: Symbol[], meaning: SymbolFlags): Symbol | undefined {
        return getSpellingSuggestion(name, symbols, getCandidateName);

        function getCandidateName(candidate: Symbol) {
            const candidateName = symbolName(candidate);
            if (startsWith(candidateName, '"')) {
                return undefined;
            }

            if (candidate.flags & meaning) {
                return candidateName;
            }

            if (candidate.flags & SymbolFlags.Alias) {
                const alias = tryResolveAlias(candidate);
                if (alias && alias.flags & meaning) {
                    return candidateName;
                }
            }

            return undefined;
        }
    }

    function onFailedToResolveSymbol(
        errorLocation: Node | undefined,
        nameArg: string | Identifier,
        meaning: SymbolFlags,
        nameNotFoundMessage: DiagnosticMessage,
    ) {
        const name = isString(nameArg) ? nameArg : (nameArg as Identifier).text;
        addLazyDiagnostic(() => {
            if (
                !errorLocation ||
                errorLocation.parent.kind !== SyntaxKind.JSDocLink &&
                    !checkAndReportErrorForMissingPrefix(errorLocation, name, nameArg) &&
                    !checkAndReportErrorForUsingTypeAsValue(errorLocation, name, meaning) &&
                    !checkAndReportErrorForUsingValueAsType(errorLocation, name, meaning)
            ) {
                let suggestion: Symbol | undefined;
                let suggestedLib: string | undefined;
                // Report missing lib first
                if (nameArg) {
                    // TODO
                    // suggestedLib = getSuggestedLibForNonExistentName(nameArg);
                    // if (suggestedLib) {
                    //     error(errorLocation, nameNotFoundMessage, diagnosticName(nameArg), suggestedLib);
                    // }
                }
                // then spelling suggestions
                if (!suggestedLib && suggestionCount < maximumSuggestionCount) {
                    suggestion = getSuggestedSymbolForNonexistentSymbol(errorLocation, name, meaning);
                    // const isGlobalScopeAugmentationDeclaration = suggestion?.valueDeclaration && isAmbientModule(suggestion.valueDeclaration) && isGlobalScopeAugmentation(suggestion.valueDeclaration);
                    // if (isGlobalScopeAugmentationDeclaration) {
                    //     suggestion = undefined;
                    // }
                    if (suggestion) {
                        const suggestionName = symbolToString(suggestion);
                        //const isUncheckedJS = isUncheckedJSSuggestion(errorLocation, suggestion, /*excludeClasses*/ false);
                        const message = Diagnostics.Cannot_find_name_0_Did_you_mean_1;
                        const diagnostic = createError(errorLocation, message, diagnosticName(nameArg), suggestionName);
                        diagnostic.canonicalHead = getCanonicalDiagnostic(nameNotFoundMessage, diagnosticName(nameArg));
                        addErrorOrSuggestion(true, diagnostic);
                        if (suggestion.valueDeclaration) {
                            addRelatedInfo(
                                diagnostic,
                                createDiagnosticForNode(suggestion.valueDeclaration, Diagnostics._0_is_declared_here, suggestionName),
                            );
                        }
                    }
                }
                // And then fall back to unspecified "not found"
                if (!suggestion && !suggestedLib && nameArg) {
                    error(errorLocation, nameNotFoundMessage, diagnosticName(nameArg));
                }
                suggestionCount++;
            }
        });
    }

    function addErrorOrSuggestion(isError: boolean, diagnostic: Diagnostic) {
        if (isError) {
            diagnostics.add(diagnostic);
        }
        else {
            suggestionDiagnostics.add({ ...diagnostic, category: DiagnosticCategory.Suggestion });
        }
    }
    
    function diagnosticName(nameArg: string | Identifier /*| PrivateIdentifier*/) {
        return isString(nameArg) ? (nameArg as string) : declarationNameToString(nameArg as Identifier);
    }

    function getExportSymbolOfValueSymbolIfExported(symbol: Symbol): Symbol;
    function getExportSymbolOfValueSymbolIfExported(symbol: Symbol | undefined): Symbol | undefined;
    function getExportSymbolOfValueSymbolIfExported(symbol: Symbol | undefined): Symbol | undefined {
        return getMergedSymbol(symbol && (symbol.flags & SymbolFlags.ExportValue) !== 0 && symbol.exportSymbol || symbol);
    }

    function checkResolvedBlockScopedVariable(result: Symbol, errorLocation: Node): void {
        Debug.assert(!!(result.flags & SymbolFlags.BlockScopedVariable || result.flags & SymbolFlags.Class || result.flags & SymbolFlags.Enum));
        if (result.flags & (SymbolFlags.Function | SymbolFlags.FunctionScopedVariable | SymbolFlags.Assignment) && result.flags & SymbolFlags.Class) {
            // constructor functions aren't block scoped
            return;
        }
        // Block-scoped variables cannot be used before their definition
        const declaration = result.declarations?.find(
            d => isBlockOrCatchScoped(d),//TODO || isClassLike(d),
        );

        if (declaration === undefined) return Debug.fail("checkResolvedBlockScopedVariable could not find block-scoped declaration");

        console.warn("Implement me - checkResolvedBlockScopedVariable");
        // if (!(declaration.flags & NodeFlags.Ambient) && !isBlockScopedNameDeclaredBeforeUse(declaration, errorLocation)) {
        //     let diagnosticMessage;
        //     const declarationName = declarationNameToString(getNameOfDeclaration(declaration));
        //     if (result.flags & SymbolFlags.BlockScopedVariable) {
        //         diagnosticMessage = error(errorLocation, Diagnostics.Block_scoped_variable_0_used_before_its_declaration, declarationName);
        //     }
        //     else if (result.flags & SymbolFlags.Class) {
        //         diagnosticMessage = error(errorLocation, Diagnostics.Class_0_used_before_its_declaration, declarationName);
        //     }
        //     else if (result.flags & SymbolFlags.RegularEnum) {
        //         diagnosticMessage = error(errorLocation, Diagnostics.Enum_0_used_before_its_declaration, declarationName);
        //     }
        //     else {
        //         Debug.assert(!!(result.flags & SymbolFlags.ConstEnum));
        //         if (getIsolatedModules(compilerOptions)) {
        //             diagnosticMessage = error(errorLocation, Diagnostics.Enum_0_used_before_its_declaration, declarationName);
        //         }
        //     }

        //     if (diagnosticMessage) {
        //         addRelatedInfo(diagnosticMessage, createDiagnosticForNode(declaration, Diagnostics._0_is_declared_here, declarationName));
        //     }
        // }
    }
    
    function onSuccessfullyResolvedSymbol(
        errorLocation: Node | undefined,
        result: Symbol,
        meaning: SymbolFlags,
        lastLocation: Node | undefined,
        associatedDeclarationForContainingInitializerOrBindingName: ParameterDeclaration | BindingElement | undefined,
        withinDeferredContext: boolean,
    ) {
        addLazyDiagnostic(() => {
            const name = result.name;
            const isInExternalModule = lastLocation && isSourceFile(lastLocation) && isExternalOrCommonJsModule(lastLocation);
            // Only check for block-scoped variable if we have an error location and are looking for the
            // name with variable meaning
            //      For example,
            //          declare module foo {
            //              interface bar {}
            //          }
            //      const foo/*1*/: foo/*2*/.bar;
            // The foo at /*1*/ and /*2*/ will share same symbol with two meanings:
            // block-scoped variable and namespace module. However, only when we
            // try to resolve name in /*1*/ which is used in variable position,
            // we want to check for block-scoped
            if (
                errorLocation &&
                (meaning & SymbolFlags.BlockScopedVariable ||
                    ((meaning & SymbolFlags.Class || meaning & SymbolFlags.Enum) && (meaning & SymbolFlags.Value) === SymbolFlags.Value))
            ) {
                const exportOrLocalSymbol = getExportSymbolOfValueSymbolIfExported(result);
                if (exportOrLocalSymbol.flags & SymbolFlags.BlockScopedVariable || exportOrLocalSymbol.flags & SymbolFlags.Class || exportOrLocalSymbol.flags & SymbolFlags.Enum) {
                    checkResolvedBlockScopedVariable(exportOrLocalSymbol, errorLocation);
                }
            }

            // // If we're in a parameter initializer or binding name, we can't reference the values of the parameter whose initializer we're within or parameters to the right
            // if (associatedDeclarationForContainingInitializerOrBindingName && !withinDeferredContext && (meaning & SymbolFlags.Value) === SymbolFlags.Value) {
            //     const candidate = getMergedSymbol(getLateBoundSymbol(result));
            //     const root = getRootDeclaration(associatedDeclarationForContainingInitializerOrBindingName) as ParameterDeclaration;
            //     // A parameter initializer or binding pattern initializer within a parameter cannot refer to itself
            //     if (candidate === getSymbolOfDeclaration(associatedDeclarationForContainingInitializerOrBindingName)) {
            //         error(errorLocation, Diagnostics.Parameter_0_cannot_reference_itself, declarationNameToString(associatedDeclarationForContainingInitializerOrBindingName.name));
            //     }
            //     // And it cannot refer to any declarations which come after it
            //     else if (candidate.valueDeclaration && candidate.valueDeclaration.pos > associatedDeclarationForContainingInitializerOrBindingName.pos && root.parent.locals && getSymbol(root.parent.locals, candidate.name, meaning) === candidate) {
            //         error(errorLocation, Diagnostics.Parameter_0_cannot_reference_identifier_1_declared_after_it, declarationNameToString(associatedDeclarationForContainingInitializerOrBindingName.name), declarationNameToString(errorLocation as Identifier));
            //     }
            // }
            
            // No type-only imports in LPC
            // if (errorLocation && meaning & SymbolFlags.Value && result.flags & SymbolFlags.Alias && !(result.flags & SymbolFlags.Value) && !isValidTypeOnlyAliasUseSite(errorLocation)) {
            //     const typeOnlyDeclaration = getTypeOnlyAliasDeclaration(result, SymbolFlags.Value);
            //     if (typeOnlyDeclaration) {
            //         const message = typeOnlyDeclaration.kind === SyntaxKind.ExportSpecifier || typeOnlyDeclaration.kind === SyntaxKind.ExportDeclaration || typeOnlyDeclaration.kind === SyntaxKind.NamespaceExport
            //             ? Diagnostics._0_cannot_be_used_as_a_value_because_it_was_exported_using_export_type
            //             : Diagnostics._0_cannot_be_used_as_a_value_because_it_was_imported_using_import_type;
            //         const unescapedName = unescapeLeadingUnderscores(name);
            //         addTypeOnlyDeclarationRelatedInfo(
            //             error(errorLocation, message, unescapedName),
            //             typeOnlyDeclaration,
            //             unescapedName,
            //         );
            //     }
            // }

            // Not used in LPC
            // // Look at 'compilerOptions.isolatedModules' and not 'getIsolatedModules(...)' (which considers 'verbatimModuleSyntax')
            // // here because 'verbatimModuleSyntax' will already have an error for importing a type without 'import type'.
            // if (compilerOptions.isolatedModules && result && isInExternalModule && (meaning & SymbolFlags.Value) === SymbolFlags.Value) {
            //     const isGlobal = getSymbol(globals, name, meaning) === result;
            //     const nonValueSymbol = isGlobal && isSourceFile(lastLocation) && lastLocation.locals && getSymbol(lastLocation.locals, name, ~SymbolFlags.Value);
            //     if (nonValueSymbol) {
            //         // TODO : do we need this?
            //         // const importDecl = nonValueSymbol.declarations?.find(d => d.kind === SyntaxKind.ImportSpecifier || d.kind === SyntaxKind.ImportClause || d.kind === SyntaxKind.NamespaceImport || d.kind === SyntaxKind.ImportEqualsDeclaration);
            //         // if (importDecl && !isTypeOnlyImportDeclaration(importDecl)) {
            //         //     error(importDecl, Diagnostics.Import_0_conflicts_with_global_value_used_in_this_file_so_must_be_declared_with_a_type_only_import_when_isolatedModules_is_enabled, unescapeLeadingUnderscores(name));
            //         // }
            //     }
            // }
        });
    }

    function getCannotFindNameDiagnosticForName(node: Identifier): DiagnosticMessage {
        // TODO
        switch (node.text) {
            // case "document":
            // case "console":
            //     return Diagnostics.Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_include_dom;
            // case "$":
            //     return compilerOptions.types
            //         ? Diagnostics.Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_save_dev_types_Slashjquery_and_then_add_jquery_to_the_types_field_in_your_tsconfig
            //         : Diagnostics.Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_save_dev_types_Slashjquery;
            // case "describe":
            // case "suite":
            // case "it":
            // case "test":
            //     return compilerOptions.types
            //         ? Diagnostics.Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_save_dev_types_Slashjest_or_npm_i_save_dev_types_Slashmocha_and_then_add_jest_or_mocha_to_the_types_field_in_your_tsconfig
            //         : Diagnostics.Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_save_dev_types_Slashjest_or_npm_i_save_dev_types_Slashmocha;
            // case "process":
            // case "require":
            // case "Buffer":
            // case "module":
            //     return compilerOptions.types
            //         ? Diagnostics.Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_save_dev_types_Slashnode_and_then_add_node_to_the_types_field_in_your_tsconfig
            //         : Diagnostics.Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_save_dev_types_Slashnode;
            // case "Bun":
            //     return compilerOptions.types
            //         ? Diagnostics.Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_Bun_Try_npm_i_save_dev_types_Slashbun_and_then_add_bun_to_the_types_field_in_your_tsconfig
            //         : Diagnostics.Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_Bun_Try_npm_i_save_dev_types_Slashbun;
            // case "Map":
            // case "Set":
            // case "Promise":
            // case "Symbol":
            // case "WeakMap":
            // case "WeakSet":
            // case "Iterator":
            // case "AsyncIterator":
            // case "SharedArrayBuffer":
            // case "Atomics":
            // case "AsyncIterable":
            // case "AsyncIterableIterator":
            // case "AsyncGenerator":
            // case "AsyncGeneratorFunction":
            // case "BigInt":
            // case "Reflect":
            // case "BigInt64Array":
            // case "BigUint64Array":
            //     return Diagnostics.Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_1_or_later;
            // case "await":
            //     if (isCallExpression(node.parent)) {
            //         return Diagnostics.Cannot_find_name_0_Did_you_mean_to_write_this_in_an_async_function;
            //     }
            //     // falls through
            default:
                if (node.parent.kind === SyntaxKind.ShorthandPropertyAssignment) {
                    return Diagnostics.No_value_exists_in_scope_for_the_shorthand_property_0_Either_declare_one_or_provide_an_initializer;
                }
                else {
                    return Diagnostics.Cannot_find_name_0;
                }
        }
    }
    
    function getResolvedSymbol(node: Identifier): Symbol {
        const links = getNodeLinks(node);
        if (!links.resolvedSymbol) {
            links.resolvedSymbol = !nodeIsMissing(node) &&
                    resolveName(
                        node,
                        node,
                        SymbolFlags.Value | SymbolFlags.ExportValue,
                        getCannotFindNameDiagnosticForName(node),
                        !isWriteOnlyAccess(node),
                        /*excludeGlobals*/ false,
                    ) || unknownSymbol;
        }
        return links.resolvedSymbol;
    }
    
    function getParentOfSymbol(symbol: Symbol): Symbol | undefined {
        return getMergedSymbol(symbol.parent && getLateBoundSymbol(symbol.parent));
    }

    function getCombinedNodeFlagsCached(node: Node) {
        // we hold onto the last node and result to speed up repeated lookups against the same node.
        if (lastGetCombinedNodeFlagsNode === node) {
            return lastGetCombinedNodeFlagsResult;
        }
        lastGetCombinedNodeFlagsNode = node;
        lastGetCombinedNodeFlagsResult = getCombinedNodeFlags(node);
        return lastGetCombinedNodeFlagsResult;
    }
    
    function isDeprecatedDeclaration(declaration: Declaration) {
        return !!(getCombinedNodeFlagsCached(declaration) & NodeFlags.Deprecated);
    }

    function isDeprecatedSymbol(symbol: Symbol) {
        const parentSymbol = getParentOfSymbol(symbol);
        if (parentSymbol && length(symbol.declarations) > 1) {
            return parentSymbol.flags & SymbolFlags.Interface ? some(symbol.declarations, isDeprecatedDeclaration) : every(symbol.declarations, isDeprecatedDeclaration);
        }
        return !!symbol.valueDeclaration && isDeprecatedDeclaration(symbol.valueDeclaration)
            || length(symbol.declarations) && every(symbol.declarations, isDeprecatedDeclaration);
    }

    function getImmediateAliasedSymbol(symbol: Symbol): Symbol | undefined {
        Debug.assert((symbol.flags & SymbolFlags.Alias) !== 0, "Should only get Alias here.");
        const links = getSymbolLinks(symbol);
        if (!links.immediateTarget) {
            const node = getDeclarationOfAliasSymbol(symbol);
            if (!node) return Debug.fail();
            links.immediateTarget = getTargetOfAliasDeclaration(node, /*dontRecursivelyResolve*/ true);
        }

        return links.immediateTarget;
    }

    function addDeprecatedSuggestion(location: Node, declarations: Node[], deprecatedEntity: string) {
        const diagnostic = createDiagnosticForNode(location, Diagnostics._0_is_deprecated, deprecatedEntity);
        return addDeprecatedSuggestionWorker(declarations, diagnostic);
    }

    function addDeprecatedSuggestionWorker(declarations: Node | Node[], diagnostic: DiagnosticWithLocation) {
        const deprecatedTag = Array.isArray(declarations) ? forEach(declarations, getJSDocDeprecatedTag) : getJSDocDeprecatedTag(declarations);
        if (deprecatedTag) {
            addRelatedInfo(
                diagnostic,
                createDiagnosticForNode(deprecatedTag, Diagnostics.The_declaration_was_marked_as_deprecated_here),
            );
        }
        // We call `addRelatedInfo()` before adding the diagnostic to prevent duplicates.
        suggestionDiagnostics.add(diagnostic);
        return diagnostic;
    }

    function resolveAliasWithDeprecationCheck(symbol: Symbol, location: Node) {
        if (!(symbol.flags & SymbolFlags.Alias) || isDeprecatedSymbol(symbol) || !getDeclarationOfAliasSymbol(symbol)) {
            return symbol;
        }

        const targetSymbol = resolveAlias(symbol);
        if (targetSymbol === unknownSymbol) return targetSymbol;

        while (symbol.flags & SymbolFlags.Alias) {
            const target = getImmediateAliasedSymbol(symbol);
            if (target) {
                if (target === targetSymbol) break;
                if (target.declarations && length(target.declarations)) {
                    if (isDeprecatedSymbol(target)) {
                        addDeprecatedSuggestion(location, target.declarations, target.name as string);
                        break;
                    }
                    else {
                        if (symbol === targetSymbol) break;
                        symbol = target;
                    }
                }
            }
            else {
                break;
            }
        }
        return targetSymbol;
    }

    function isMatchingReference(source: Node, target: Node): boolean {
        switch (target.kind) {
            case SyntaxKind.ParenthesizedExpression:            
                return isMatchingReference(source, (target as ParenthesizedExpression).expression);
            case SyntaxKind.BinaryExpression:
                return (isAssignmentExpression(target) && isMatchingReference(source, target.left)) ||
                    (isBinaryExpression(target) && target.operatorToken.kind === SyntaxKind.CommaToken && isMatchingReference(source, target.right));
        }
        switch (source.kind) {            
            case SyntaxKind.Identifier:
            //case SyntaxKind.PrivateIdentifier:
                return target.kind === SyntaxKind.Identifier && getResolvedSymbol(source as Identifier) === getResolvedSymbol(target as Identifier) ||
                    (isVariableDeclaration(target) || isBindingElement(target)) &&
                        getExportSymbolOfValueSymbolIfExported(getResolvedSymbol(source as Identifier)) === getSymbolOfDeclaration(target as Declaration);
            // case SyntaxKind.ThisKeyword:
            //     return target.kind === SyntaxKind.ThisKeyword;
            case SyntaxKind.SuperKeyword:
                return target.kind === SyntaxKind.SuperKeyword;            
            case SyntaxKind.ParenthesizedExpression:
                return isMatchingReference((source as ParenthesizedExpression).expression, target);
            case SyntaxKind.PropertyAccessExpression:
            case SyntaxKind.ElementAccessExpression:
                Debug.fail("TODO - isMatchingReference");
                // const sourcePropertyName = getAccessedPropertyName(source as AccessExpression);
                // if (sourcePropertyName !== undefined) {
                //     const targetPropertyName = isAccessExpression(target) ? getAccessedPropertyName(target) : undefined;
                //     if (targetPropertyName !== undefined) {
                //         return targetPropertyName === sourcePropertyName && isMatchingReference((source as AccessExpression).expression, (target as AccessExpression).expression);
                //     }
                // }
                // if (isElementAccessExpression(source) && isElementAccessExpression(target) && isIdentifier(source.argumentExpression) && isIdentifier(target.argumentExpression)) {
                //     const symbol = getResolvedSymbol(source.argumentExpression);
                //     if (symbol === getResolvedSymbol(target.argumentExpression) && (isConstantVariable(symbol) || isParameterOrMutableLocalVariable(symbol) && !isSymbolAssigned(symbol))) {
                //         return isMatchingReference(source.expression, target.expression);
                //     }
                // }
                break;
            // case SyntaxKind.QualifiedName:
            //     return isAccessExpression(target) &&
            //         (source as QualifiedName).right.text === getAccessedPropertyName(target) &&
            //         isMatchingReference((source as QualifiedName).left, target.expression);
            case SyntaxKind.BinaryExpression:
                return (isBinaryExpression(source) && source.operatorToken.kind === SyntaxKind.CommaToken && isMatchingReference(source.right, target));
        }
        return false;
    }

    function containsMatchingReference(source: Node, target: Node) {
        while (isAccessExpression(source)) {
            source = source.expression;
            if (isMatchingReference(source, target)) {
                return true;
            }
        }
        return false;
    }
    
    function isOrContainsMatchingReference(source: Node, target: Node) {
        return isMatchingReference(source, target) || containsMatchingReference(source, target);
    }

    function hasMatchingArgument(expression: CallExpression /*| NewExpression*/, reference: Node) {
        if (expression.arguments) {
            for (const argument of expression.arguments) {
                if (isOrContainsMatchingReference(reference, argument)) {
                    return true;
                }
            }
        }
        if (
            expression.expression.kind === SyntaxKind.PropertyAccessExpression &&
            isOrContainsMatchingReference(reference, (expression.expression as PropertyAccessExpression).expression)
        ) {
            return true;
        }
        return false;
    }

    function isUncalledFunctionReference(node: Node, symbol: Symbol) {
        if (symbol.flags & (SymbolFlags.Function | SymbolFlags.Method)) {
            const parent = findAncestor(node.parent, n => !isAccessExpression(n)) || node.parent;
            if (isCallLikeExpression(parent)) {
                return isCallOrNewExpression(parent) && isIdentifier(node) && hasMatchingArgument(parent, node);
            }
            return every(symbol.declarations, d => !isFunctionLike(d) || isDeprecatedDeclaration(d));
        }
        return true;
    }
    
    /**
     * This part of `checkIdentifier` is kept seperate from the rest, so `NodeCheckFlags` (and related diagnostics) can be lazily calculated
     * without calculating the flow type of the identifier.
     */
    function checkIdentifierCalculateNodeCheckFlags(node: Identifier, symbol: Symbol) {       
        const localOrExportSymbol = getExportSymbolOfValueSymbolIfExported(symbol);
        const targetSymbol = resolveAliasWithDeprecationCheck(localOrExportSymbol, node);
        if (isDeprecatedSymbol(targetSymbol) && isUncalledFunctionReference(node, targetSymbol) && targetSymbol.declarations) {
            addDeprecatedSuggestion(node, targetSymbol.declarations, node.text as string);
        }

        const declaration = localOrExportSymbol.valueDeclaration;
        if (declaration && localOrExportSymbol.flags & SymbolFlags.Class) {
            // When we downlevel classes we may emit some code outside of the class body. Due to the fact the
            // class name is double-bound, we must ensure we mark references to the class name so that we can
            // emit an alias to the class later.
            Debug.fail("TODO - checkIdentifierCalculateNodeCheckFlags");
            // if (isClassLike(declaration) && declaration.name !== node) {
            //     let container = getThisContainer(node, /*includeArrowFunctions*/ false, /*includeClassComputedPropertyName*/ false);
            //     while (container.kind !== SyntaxKind.SourceFile && container.parent !== declaration) {
            //         container = getThisContainer(container, /*includeArrowFunctions*/ false, /*includeClassComputedPropertyName*/ false);
            //     }

            //     if (container.kind !== SyntaxKind.SourceFile) {
            //         getNodeLinks(declaration).flags |= NodeCheckFlags.ContainsConstructorReference;
            //         getNodeLinks(container).flags |= NodeCheckFlags.ContainsConstructorReference;
            //         getNodeLinks(node).flags |= NodeCheckFlags.ConstructorReference;
            //     }
            // }
        }

        checkNestedBlockScopedBinding(node, symbol);
    }

    function isInsideFunctionOrInstancePropertyInitializer(node: Node, threshold: Node): boolean {
        return !!findAncestor(node, n =>
            n === threshold ? "quit" : isFunctionLike(n) || (
                n.parent && isPropertyDeclaration(n.parent) && n.parent.initializer === n
            ));
    }
    
    function getEnclosingIterationStatement(node: Node): Node | undefined {
        return findAncestor(node, n => (!n || nodeStartsNewLexicalEnvironment(n)) ? "quit" : isIterationStatement(n, /*lookInLabeledStatements*/ false));
    }
    
    function getPartOfForStatementContainingNode(node: Node, container: ForStatement) {
        return findAncestor(node, n => n === container ? "quit" : n === container.initializer || n === container.condition || n === container.incrementor || n === container.statement);
    }
    
    function checkNestedBlockScopedBinding(node: Identifier, symbol: Symbol): void {
        if (            
            (symbol.flags & (SymbolFlags.BlockScopedVariable | SymbolFlags.Class)) === 0 ||
            !symbol.valueDeclaration ||
            isSourceFile(symbol.valueDeclaration) ||
            symbol.valueDeclaration.parent.kind === SyntaxKind.CatchClause
        ) {
            return;
        }

        // 1. walk from the use site up to the declaration and check
        // if there is anything function like between declaration and use-site (is binding/class is captured in function).
        // 2. walk from the declaration up to the boundary of lexical environment and check
        // if there is an iteration statement in between declaration and boundary (is binding/class declared inside iteration statement)

        const container = getEnclosingBlockScopeContainer(symbol.valueDeclaration);
        const isCaptured = isInsideFunctionOrInstancePropertyInitializer(node, container);

        const enclosingIterationStatement = getEnclosingIterationStatement(container);
        if (enclosingIterationStatement) {
            if (isCaptured) {
                // mark iteration statement as containing block-scoped binding captured in some function
                let capturesBlockScopeBindingInLoopBody = true;
                if (isForStatement(container)) {
                    const varDeclList = getAncestor(symbol.valueDeclaration, SyntaxKind.VariableDeclarationList);
                    if (varDeclList && varDeclList.parent === container) {
                        const part = getPartOfForStatementContainingNode(node.parent, container);
                        if (part) {
                            const links = getNodeLinks(part);
                            links.flags |= NodeCheckFlags.ContainsCapturedBlockScopeBinding;

                            const capturedBindings = links.capturedBlockScopeBindings || (links.capturedBlockScopeBindings = []);
                            pushIfUnique(capturedBindings, symbol);

                            if (part === container.initializer) {
                                capturesBlockScopeBindingInLoopBody = false; // Initializer is outside of loop body
                            }
                        }
                    }
                }
                if (capturesBlockScopeBindingInLoopBody) {
                    getNodeLinks(enclosingIterationStatement).flags |= NodeCheckFlags.LoopWithCapturedBlockScopedBinding;
                }
            }

            // mark variables that are declared in loop initializer and reassigned inside the body of ForStatement.
            // if body of ForStatement will be converted to function then we'll need a extra machinery to propagate reassigned values back.
            if (isForStatement(container)) {
                const varDeclList = getAncestor(symbol.valueDeclaration, SyntaxKind.VariableDeclarationList);
                if (varDeclList && varDeclList.parent === container && isAssignedInBodyOfForStatement(node, container)) {
                    getNodeLinks(symbol.valueDeclaration).flags |= NodeCheckFlags.NeedsLoopOutParameter;
                }
            }

            // set 'declared inside loop' bit on the block-scoped binding
            getNodeLinks(symbol.valueDeclaration).flags |= NodeCheckFlags.BlockScopedBindingInLoop;
        }

        if (isCaptured) {
            getNodeLinks(symbol.valueDeclaration).flags |= NodeCheckFlags.CapturedBlockScopedBinding;
        }
    }

    function isAssignedInBodyOfForStatement(node: Identifier, container: ForStatement): boolean {
        // skip parenthesized nodes
        let current: Node = node;
        while (current.parent.kind === SyntaxKind.ParenthesizedExpression) {
            current = current.parent;
        }

        // check if node is used as LHS in some assignment expression
        let isAssigned = false;
        if (isAssignmentTarget(current)) {
            isAssigned = true;
        }
        else if ((current.parent.kind === SyntaxKind.PrefixUnaryExpression || current.parent.kind === SyntaxKind.PostfixUnaryExpression)) {
            const expr = current.parent as PrefixUnaryExpression | PostfixUnaryExpression;
            isAssigned = expr.operator === SyntaxKind.PlusPlusToken || expr.operator === SyntaxKind.MinusMinusToken;
        }

        if (!isAssigned) {
            return false;
        }

        // at this point we know that node is the target of assignment
        // now check that modification happens inside the statement part of the ForStatement
        return !!findAncestor(current, n => n === container ? "quit" : n === container.statement);
    }
    
    
    function isInPropertyInitializerOrClassStaticBlock(node: Node): boolean {
        return !!findAncestor(node, node => {
            switch (node.kind) {
                case SyntaxKind.PropertyDeclaration:
                    return true;
                case SyntaxKind.PropertyAssignment:
                //case SyntaxKind.MethodDeclaration:                
                //case SyntaxKind.SpreadAssignment:                
                    return false;
                case SyntaxKind.InlineClosureExpression:
                case SyntaxKind.ExpressionStatement:
                    return "quit";
                default:
                    return isExpressionNode(node) ? false : "quit";
            }
        });
    }

    function isParameterOfContextSensitiveSignature(symbol: Symbol) {
        let decl = symbol.valueDeclaration;
        if (!decl) {
            return false;
        }
        if (isBindingElement(decl)) {
            decl = walkUpBindingElementsAndPatterns(decl);
        }
        if (isParameter(decl)) {
            return isContextSensitiveFunctionOrObjectLiteralMethod(decl.parent);
        }
        return false;
    }


    function getTypeOfVariableOrParameterOrProperty(symbol: Symbol): Type {
        const links = getSymbolLinks(symbol);
        if (!links.type) {
            const type = getTypeOfVariableOrParameterOrPropertyWorker(symbol);
            // For a contextually typed parameter it is possible that a type has already
            // been assigned (in assignTypeToParameterAndFixTypeParameters), and we want
            // to preserve this type. In fact, we need to _prefer_ that type, but it won't
            // be assigned until contextual typing is complete, so we need to defer in
            // cases where contextual typing may take place.
            if (!links.type && !isParameterOfContextSensitiveSignature(symbol)) {
                links.type = type;
            }
            return type;
        }
        return links.type;
    }

    function getWidenedTypeForAssignmentDeclaration(symbol: Symbol, resolvedSymbol?: Symbol) {
        // function/class/{} initializers are themselves containers, so they won't merge in the same way as other initializers
        // const container = getAssignedExpandoInitializer(symbol.valueDeclaration);
        // if (container) {
        //     const tag = isInJSFile(container) ? getJSDocTypeTag(container) : undefined;
        //     if (tag && tag.typeExpression) {
        //         return getTypeFromTypeNode(tag.typeExpression);
        //     }
        //     const containerObjectType = symbol.valueDeclaration && getJSContainerObjectType(symbol.valueDeclaration, symbol, container);
        //     return containerObjectType || getWidenedLiteralType(checkExpressionCached(container));
        // }
        let type;
        let definedInConstructor = false;
        let definedInMethod = false;
        // We use control flow analysis to determine the type of the property if the property qualifies as a constructor
        // declared property and the resulting control flow type isn't just undefined or null.
        // if (isConstructorDeclaredProperty(symbol)) {
        //     type = getFlowTypeInConstructor(symbol, getDeclaringConstructor(symbol)!);
        // }
        if (!type) {
            let types: Type[] | undefined;
            if (symbol.declarations) {
                let jsdocType: Type | undefined;
                for (const declaration of symbol.declarations) {
                    const expression = (isBinaryExpression(declaration) || isCallExpression(declaration)) ? declaration :
                        isAccessExpression(declaration) ? isBinaryExpression(declaration.parent) ? declaration.parent : declaration :
                        undefined;
                    if (!expression) {
                        continue; // Non-assignment declaration merged in (eg, an Identifier to mark the thing as a namespace) - skip over it and pull type info from elsewhere
                    }

                    const kind = isAccessExpression(expression)
                        ? getAssignmentDeclarationPropertyAccessKind(expression)
                        : getAssignmentDeclarationKind(expression);
                    if (kind === AssignmentDeclarationKind.ThisProperty || isBinaryExpression(expression) && isPossiblyAliasedThisProperty(expression, kind)) {
                        // if (isDeclarationInConstructor(expression)) {
                        //     definedInConstructor = true;
                        // }
                        // else {
                            definedInMethod = true;
                        // }
                    }
                    if (!isCallExpression(expression)) {
                        jsdocType = getAnnotatedTypeForAssignmentDeclaration(jsdocType, expression, symbol, declaration);
                    }
                    if (!jsdocType) {
                        (types || (types = [])).push((isBinaryExpression(expression) || isCallExpression(expression)) ? getInitializerTypeFromAssignmentDeclaration(symbol, resolvedSymbol, expression, kind) : neverType);
                    }
                }
                type = jsdocType;
            }
            if (!type) {
                if (!length(types)) {
                    return errorType; // No types from any declarations :(
                }
                //let constructorTypes = definedInConstructor && symbol.declarations ? getConstructorDefinedThisAssignmentTypes(types!, symbol.declarations) : undefined;
                // use only the constructor types unless they were only assigned null | undefined (including widening variants)
                // if (definedInMethod) {
                //     const propType = getTypeOfPropertyInBaseClass(symbol);
                //     if (propType) {
                //         (constructorTypes || (constructorTypes = [])).push(propType);
                //         definedInConstructor = true;
                //     }
                // }
                //const sourceTypes = some(constructorTypes, t => !!(t.flags & ~TypeFlags.Nullable)) ? constructorTypes : types; // TODO: GH#18217
                //type = getUnionType(sourceTypes!);
            }
        }
        const widened = getWidenedType(addOptionality(type, /*isProperty*/ false, definedInMethod && !definedInConstructor));
        if (symbol.valueDeclaration && isInJSFile(symbol.valueDeclaration) && filterType(widened, t => !!(t.flags & ~TypeFlags.Nullable)) === neverType) {
            reportImplicitAny(symbol.valueDeclaration, anyType);
            return anyType;
        }
        return widened;
    }

    // Return the type of the given property in the given type, or undefined if no such property exists
    function getTypeOfPropertyOfType(type: Type, name: string): Type | undefined {
        const prop = getPropertyOfType(type, name);
        return prop ? getTypeOfSymbol(prop) : undefined;
    }

    // If type has a single call signature and no other members, return that signature. Otherwise, return undefined.
    function getSingleCallSignature(type: Type): Signature | undefined {
        return getSingleSignature(type, SignatureKind.Call, /*allowMembers*/ false);
    }

    function getTypeOfFirstParameterOfSignature(signature: Signature) {
        return getTypeOfFirstParameterOfSignatureWithFallback(signature, neverType);
    }

    function getTypeOfFirstParameterOfSignatureWithFallback(signature: Signature, fallbackType: Type) {
        return signature.parameters.length > 0 ? getTypeAtPosition(signature, 0) : fallbackType;
    }

    function containsSameNamedThisProperty(thisProperty: Expression, expression: Expression) {
        return false;
        // return isPropertyAccessExpression(thisProperty)
        //     && thisProperty.expression.kind === SyntaxKind.ThisKeyword
        //     && forEachChildRecursively(expression, n => isMatchingReference(thisProperty, n));
    }

    /** If we don't have an explicit JSDoc type, get the type from the initializer. */
    function getInitializerTypeFromAssignmentDeclaration(symbol: Symbol, resolvedSymbol: Symbol | undefined, expression: BinaryExpression | CallExpression, kind: AssignmentDeclarationKind) {
        if (isCallExpression(expression)) {
            if (resolvedSymbol) {
                return getTypeOfSymbol(resolvedSymbol); // This shouldn't happen except under some hopefully forbidden merges of export assignments and object define assignments
            }
            const objectLitType = checkExpressionCached((expression as BindableObjectDefinePropertyCall).arguments[2]);
            const valueType = getTypeOfPropertyOfType(objectLitType, "value" as string);
            if (valueType) {
                return valueType;
            }
            const getFunc = getTypeOfPropertyOfType(objectLitType, "get" as string);
            if (getFunc) {
                const getSig = getSingleCallSignature(getFunc);
                if (getSig) {
                    return getReturnTypeOfSignature(getSig);
                }
            }
            const setFunc = getTypeOfPropertyOfType(objectLitType, "set" as string);
            if (setFunc) {
                const setSig = getSingleCallSignature(setFunc);
                if (setSig) {
                    return getTypeOfFirstParameterOfSignature(setSig);
                }
            }
            return anyType;
        }
        if (containsSameNamedThisProperty(expression.left, expression.right)) {
            return anyType;
        }
        //const isDirectExport = kind === AssignmentDeclarationKind.ExportsProperty && (isPropertyAccessExpression(expression.left) || isElementAccessExpression(expression.left)) && (isModuleExportsAccessExpression(expression.left.expression) || (isIdentifier(expression.left.expression) && isExportsIdentifier(expression.left.expression)));
        const type = resolvedSymbol ? getTypeOfSymbol(resolvedSymbol)
            //: isDirectExport ? getRegularTypeOfLiteralType(checkExpressionCached(expression.right))
            : getWidenedLiteralType(checkExpressionCached(expression.right));
        if (
            type.flags & TypeFlags.Object &&
            kind === AssignmentDeclarationKind.ModuleExports &&
            symbol.name === InternalSymbolName.ExportEquals
        ) {
            const exportedType = resolveStructuredTypeMembers(type as ObjectType);
            const members = createSymbolTable();
            copyEntries(exportedType.members, members);
            const initialSize = members.size;
            if (resolvedSymbol && !resolvedSymbol.exports) {
                resolvedSymbol.exports = createSymbolTable();
            }
            (resolvedSymbol || symbol).exports!.forEach((s, name) => {
                const exportedMember = members.get(name)!;
                if (exportedMember && exportedMember !== s && !(s.flags & SymbolFlags.Alias)) {
                    if (s.flags & SymbolFlags.Value && exportedMember.flags & SymbolFlags.Value) {
                        // If the member has an additional value-like declaration, union the types from the two declarations,
                        // but issue an error if they occurred in two different files. The purpose is to support a JS file with
                        // a pattern like:
                        //
                        // module.exports = { a: true };
                        // module.exports.a = 3;
                        //
                        // but we may have a JS file with `module.exports = { a: true }` along with a TypeScript module augmentation
                        // declaring an `export const a: number`. In that case, we issue a duplicate identifier error, because
                        // it's unclear what that's supposed to mean, so it's probably a mistake.
                        if (s.valueDeclaration && exportedMember.valueDeclaration && getSourceFileOfNode(s.valueDeclaration) !== getSourceFileOfNode(exportedMember.valueDeclaration)) {
                            const unescapedName = (s.name);
                            const exportedMemberName = tryCast(exportedMember.valueDeclaration, isNamedDeclaration)?.name || exportedMember.valueDeclaration;
                            addRelatedInfo(
                                error(s.valueDeclaration, Diagnostics.Duplicate_identifier_0, unescapedName),
                                createDiagnosticForNode(exportedMemberName, Diagnostics._0_was_also_declared_here, unescapedName),
                            );
                            addRelatedInfo(
                                error(exportedMemberName, Diagnostics.Duplicate_identifier_0, unescapedName),
                                createDiagnosticForNode(s.valueDeclaration, Diagnostics._0_was_also_declared_here, unescapedName),
                            );
                        }
                        const union = createSymbol(s.flags | exportedMember.flags, name);
                        union.links.type = getUnionType([getTypeOfSymbol(s), getTypeOfSymbol(exportedMember)]);
                        union.valueDeclaration = exportedMember.valueDeclaration;
                        union.declarations = concatenate(exportedMember.declarations, s.declarations);
                        members.set(name, union);
                    }
                    else {
                        members.set(name, mergeSymbol(s, exportedMember));
                    }
                }
                else {
                    members.set(name, s);
                }
            });
            const result = createAnonymousType(
                initialSize !== members.size ? undefined : exportedType.symbol, // Only set the type's symbol if it looks to be the same as the original type
                members,
                exportedType.callSignatures,
                exportedType.constructSignatures,
                exportedType.indexInfos,
            );
            if (initialSize === members.size) {
                if (type.aliasSymbol) {
                    result.aliasSymbol = type.aliasSymbol;
                    result.aliasTypeArguments = type.aliasTypeArguments;
                }
                if (getObjectFlags(type) & ObjectFlags.Reference) {
                    result.aliasSymbol = (type as TypeReference).symbol;
                    const args = getTypeArguments(type as TypeReference);
                    result.aliasTypeArguments = length(args) ? args : undefined;
                }
            }
            result.objectFlags |= getPropagatingFlagsOfTypes([type]) | getObjectFlags(type) & (ObjectFlags.JSLiteral | ObjectFlags.ArrayLiteral | ObjectFlags.ObjectLiteral);
            if (result.symbol && result.symbol.flags & SymbolFlags.Class && type === getDeclaredTypeOfClassOrInterface(result.symbol)) {
                result.objectFlags |= ObjectFlags.IsClassInstanceClone; // Propagate the knowledge that this type is equivalent to the symbol's class instance type
            }
            return result;
        }
        if (isEmptyArrayLiteralType(type)) {
            reportImplicitAny(expression, anyArrayType);
            return anyArrayType;
        }        
        return type;
    }

    function getDeclaredTypeOfClassOrInterface(symbol: Symbol): InterfaceType {
        let links = getSymbolLinks(symbol);
        const originalLinks = links;
        if (!links.declaredType) {
            console.warn("TODO - getDeclaredTypeOfClassOrInterface");
            // const kind = symbol.flags & SymbolFlags.Class ? ObjectFlags.Class : ObjectFlags.Interface;
            // const merged = mergeJSSymbols(symbol, symbol.valueDeclaration && getAssignedClassSymbol(symbol.valueDeclaration));
            // if (merged) {
            //     // note:we overwrite links because we just cloned the symbol
            //     symbol = merged;
            //     links = merged.links;
            // }

            // const type = originalLinks.declaredType = links.declaredType = createObjectType(kind, symbol) as InterfaceType;
            // const outerTypeParameters = getOuterTypeParametersOfClassOrInterface(symbol);
            // const localTypeParameters = getLocalTypeParametersOfClassOrInterfaceOrTypeAlias(symbol);
            // // A class or interface is generic if it has type parameters or a "this" type. We always give classes a "this" type
            // // because it is not feasible to analyze all members to determine if the "this" type escapes the class (in particular,
            // // property types inferred from initializers and method return types inferred from return statements are very hard
            // // to exhaustively analyze). We give interfaces a "this" type if we can't definitely determine that they are free of
            // // "this" references.
            // if (outerTypeParameters || localTypeParameters || kind === ObjectFlags.Class || !isThislessInterface(symbol)) {
            //     type.objectFlags |= ObjectFlags.Reference;
            //     type.typeParameters = concatenate(outerTypeParameters, localTypeParameters);
            //     type.outerTypeParameters = outerTypeParameters;
            //     type.localTypeParameters = localTypeParameters;
            //     (type as GenericType).instantiations = new Map<string, TypeReference>();
            //     (type as GenericType).instantiations.set(getTypeListId(type.typeParameters), type as GenericType);
            //     (type as GenericType).target = type as GenericType;
            //     (type as GenericType).resolvedTypeArguments = type.typeParameters;
            //     type.thisType = createTypeParameter(symbol);
            //     type.thisType.isThisType = true;
            //     type.thisType.constraint = type;
            // }
        }
        return links.declaredType as InterfaceType;
    }

    
    function getAnnotatedTypeForAssignmentDeclaration(declaredType: Type | undefined, expression: Expression, symbol: Symbol, declaration: Declaration) {
        const typeNode = getEffectiveTypeAnnotationNode(expression.parent);
        if (typeNode) {
            const type = getWidenedType(getTypeFromTypeNode(typeNode));
            if (!declaredType) {
                return type;
            }
            else if (!isErrorType(declaredType) && !isErrorType(type) && !isTypeIdenticalTo(declaredType, type)) {
                errorNextVariableOrPropertyDeclarationMustHaveSameType(/*firstDeclaration*/ undefined, declaredType, declaration, type);
            }
        }
        if (symbol.parent?.valueDeclaration) {
            const possiblyAnnotatedSymbol = getFunctionExpressionParentSymbolOrSymbol(symbol.parent);
            if (possiblyAnnotatedSymbol.valueDeclaration) {
                const typeNode = getEffectiveTypeAnnotationNode(possiblyAnnotatedSymbol.valueDeclaration);
                if (typeNode) {
                    const annotationSymbol = getPropertyOfType(getTypeFromTypeNode(typeNode), symbol.name);
                    if (annotationSymbol) {
                        return getNonMissingTypeOfSymbol(annotationSymbol);
                    }
                }
            }
        }

        return declaredType;
    }


    function getTypeOfVariableOrParameterOrPropertyWorker(symbol: Symbol): Type {
        // Handle prototype property
        // if (symbol.flags & SymbolFlags.Prototype) {
        //     return getTypeOfPrototypeProperty(symbol);
        // }
        // CommonsJS require and module both have type any.
        if (symbol === requireSymbol) {
            return anyType;
        }
        if (symbol.flags & SymbolFlags.ModuleExports && symbol.valueDeclaration) {
            const fileSymbol = getSymbolOfDeclaration(getSourceFileOfNode(symbol.valueDeclaration));
            const result = createSymbol(fileSymbol.flags, "exports" as string);
            result.declarations = fileSymbol.declarations ? fileSymbol.declarations.slice() : [];
            result.parent = symbol;
            result.links.target = fileSymbol;
            if (fileSymbol.valueDeclaration) result.valueDeclaration = fileSymbol.valueDeclaration;
            if (fileSymbol.members) result.members = new Map(fileSymbol.members);
            if (fileSymbol.exports) result.exports = new Map(fileSymbol.exports);
            const members = createSymbolTable();
            members.set("exports" as string, result);
            return createAnonymousType(symbol, members, emptyArray, emptyArray, emptyArray);
        }
        Debug.assertIsDefined(symbol.valueDeclaration);
        const declaration = symbol.valueDeclaration;
        // Handle export default expressions
        // if (isSourceFile(declaration) && isJsonSourceFile(declaration)) {
        //     if (!declaration.statements.length) {
        //         return emptyObjectType;
        //     }
        //     return getWidenedType(getWidenedLiteralType(checkExpression(declaration.statements[0].expression)));
        // }
        // if (isAccessor(declaration)) {
        //     // Binding of certain patterns in JS code will occasionally mark symbols as both properties
        //     // and accessors. Here we dispatch to accessor resolution if needed.
        //     return getTypeOfAccessors(symbol);
        // }

        // Handle variable, parameter or property
        if (!pushTypeResolution(symbol, TypeSystemPropertyName.Type)) {
            // Symbol is property of some kind that is merged with something - should use `getTypeOfFuncClassEnumModule` and not `getTypeOfVariableOrParameterOrProperty`
            // if (symbol.flags & SymbolFlags.ValueModule && !(symbol.flags & SymbolFlags.Assignment)) {
            //     return getTypeOfFuncClassEnumModule(symbol);
            // }
            //return reportCircularityError(symbol);
            Debug.fail("circularity error");
        }
        let type: Type;
        // if (declaration.kind === SyntaxKind.ExportAssignment) {
        //     type = widenTypeForVariableLikeDeclaration(tryGetTypeFromEffectiveTypeNode(declaration) || checkExpressionCached((declaration as ExportAssignment).expression), declaration);
        // } else
        if (
            isBinaryExpression(declaration) ||
            (isInJSFile(declaration) &&
                (isCallExpression(declaration) || (isPropertyAccessExpression(declaration) /*|| isBindableStaticElementAccessExpression(declaration)*/) && isBinaryExpression(declaration.parent)))
        ) {
            type = getWidenedTypeForAssignmentDeclaration(symbol);
        }
        else if (
            isPropertyAccessExpression(declaration)
            || isElementAccessExpression(declaration)
            || isIdentifier(declaration)
            || isStringLiteral(declaration)
            || isIntLiteral(declaration)
            || isFloatLiteral(declaration)
            // || isClassDeclaration(declaration)
            // || isFunctionDeclaration(declaration)
            // || (isMethodDeclaration(declaration) && !isObjectLiteralMethod(declaration))
            // || isMethodSignature(declaration)
            || isSourceFile(declaration)
        ) {
            // Symbol is property of some kind that is merged with something - should use `getTypeOfFuncClassEnumModule` and not `getTypeOfVariableOrParameterOrProperty`
            // if (symbol.flags & (SymbolFlags.Function | SymbolFlags.Method | SymbolFlags.Class | SymbolFlags.Enum | SymbolFlags.ValueModule)) {
            //     return getTypeOfFuncClassEnumModule(symbol);
            // }
            type = isBinaryExpression(declaration.parent) ?
                getWidenedTypeForAssignmentDeclaration(symbol) :
                tryGetTypeFromEffectiveTypeNode(declaration) || anyType;
        }
        else if (isPropertyAssignment(declaration)) {
            type = tryGetTypeFromEffectiveTypeNode(declaration) || checkPropertyAssignment(declaration);
        }
        // else if (isJsxAttribute(declaration)) {
        //     type = tryGetTypeFromEffectiveTypeNode(declaration) || checkJsxAttribute(declaration);
        // }
        else if (isShorthandPropertyAssignment(declaration)) {
            type = tryGetTypeFromEffectiveTypeNode(declaration) || checkExpressionForMutableLocation(declaration.name, CheckMode.Normal);
        }
        // else if (isObjectLiteralMethod(declaration)) {
        //     type = tryGetTypeFromEffectiveTypeNode(declaration) || checkObjectLiteralMethod(declaration, CheckMode.Normal);
        // }
        else if (
            isParameter(declaration)
            || isPropertyDeclaration(declaration)
            // || isPropertySignature(declaration)
            || isVariableDeclaration(declaration)
            || isBindingElement(declaration)
            // || isJSDocPropertyLikeTag(declaration)
        ) {
            type = getWidenedTypeForVariableLikeDeclaration(declaration, /*reportErrors*/ true);
        }
        // getTypeOfSymbol dispatches some JS merges incorrectly because their symbol flags are not mutually exclusive.
        // Re-dispatch based on valueDeclaration.kind instead.
        // else if (isEnumDeclaration(declaration)) {
        //     type = getTypeOfFuncClassEnumModule(symbol);
        // }
        // else if (isEnumMember(declaration)) {
        //     type = getTypeOfEnumMember(symbol);
        // }
        else {
            return Debug.fail("Unhandled declaration kind! " + Debug.formatSyntaxKind(declaration.kind) + " for " + Debug.formatSymbol(symbol));
        }

        if (!popTypeResolution()) {
            // Symbol is property of some kind that is merged with something - should use `getTypeOfFuncClassEnumModule` and not `getTypeOfVariableOrParameterOrProperty`
            // if (symbol.flags & SymbolFlags.ValueModule && !(symbol.flags & SymbolFlags.Assignment)) {
            //     return getTypeOfFuncClassEnumModule(symbol);
            // }
            //return reportCircularityError(symbol);
            Debug.fail("circularity error 2");
        }
        return type;
    }

    function checkPropertyAssignment(node: PropertyAssignment, checkMode?: CheckMode): Type {
        // Do not use hasDynamicName here, because that returns false for well known symbols.
        // We want to perform checkComputedPropertyName for all computed properties, including
        // well known symbols.
        // if (node.name.kind === SyntaxKind.ComputedPropertyName) {
        //     checkComputedPropertyName(node.name);
        // }

        return checkExpressionForMutableLocation(node.initializer, checkMode);
    }

    function checkExpressionForMutableLocation(node: Expression, checkMode: CheckMode | undefined, forceTuple?: boolean): Type {
        const type = checkExpression(node, checkMode, forceTuple);
        // return isCommonJsExportedExpression(node) ? getRegularTypeOfLiteralType(type) :
        //isTypeAssertion(node) ? type :
        return  getWidenedLiteralLikeTypeForContextualType(type, instantiateContextualType(getContextualType(node, /*contextFlags*/ undefined), node, /*contextFlags*/ undefined));
    }

    function getTypeOfSymbol(symbol: Symbol, checkMode?: CheckMode): Type {        
        const checkFlags = getCheckFlags(symbol);
        // if (checkFlags & CheckFlags.DeferredType) {
        //     return getTypeOfSymbolWithDeferredType(symbol);
        // }
        // if (checkFlags & CheckFlags.Instantiated) {
        //     return getTypeOfInstantiatedSymbol(symbol);
        // }
        // if (checkFlags & CheckFlags.Mapped) {
        //     return getTypeOfMappedSymbol(symbol as MappedSymbol);
        // }
        // if (checkFlags & CheckFlags.ReverseMapped) {
        //     return getTypeOfReverseMappedSymbol(symbol as ReverseMappedSymbol);
        // }
        if (symbol.flags & (SymbolFlags.Variable | SymbolFlags.Property)) {
            return getTypeOfVariableOrParameterOrProperty(symbol);
        }
        // if (symbol.flags & (SymbolFlags.Function | SymbolFlags.Method | SymbolFlags.Class | SymbolFlags.Enum | SymbolFlags.ValueModule)) {
        //     return getTypeOfFuncClassEnumModule(symbol);
        // }
        // if (symbol.flags & SymbolFlags.EnumMember) {
        //     return getTypeOfEnumMember(symbol);
        // }
        // if (symbol.flags & SymbolFlags.Accessor) {
        //     return getTypeOfAccessors(symbol);
        // }
        // if (symbol.flags & SymbolFlags.Alias) {
        //     return getTypeOfAlias(symbol);
        // }
        return errorType;
    }

    function shouldMarkIdentifierAliasReferenced(node: Identifier): boolean {
        const parent = node.parent;
        if (parent) {
            // A property access expression LHS? checkPropertyAccessExpression will handle that.
            if (isPropertyAccessExpression(parent) && parent.expression === node) {
                return false;
            }
            // Next two check for an identifier inside a type only export.
            // if (isExportSpecifier(parent) && parent.isTypeOnly) {
            //     return false;
            // }
            const greatGrandparent = parent.parent?.parent;
            // if (greatGrandparent && isExportDeclaration(greatGrandparent) && greatGrandparent.isTypeOnly) {
            //     return false;
            // }
        }
        return true;
    }

    function markAliasReferenced(symbol: Symbol, location: Node) {
        // if (!canCollectSymbolAliasAccessabilityData) {
        //     return;
        // }
        if (isNonLocalAlias(symbol, /*excludes*/ SymbolFlags.Value)) {
            const target = resolveAlias(symbol);
            if (getSymbolFlags(symbol, /*excludeTypeOnlyMeanings*/ true) & (SymbolFlags.Value | SymbolFlags.ExportValue)) {
                // An alias resolving to a const enum cannot be elided if (1) 'isolatedModules' is enabled
                // (because the const enum value will not be inlined), or if (2) the alias is an export
                // of a const enum declaration that will be preserved.
                // if (
                //     getIsolatedModules(compilerOptions) ||
                //     shouldPreserveConstEnums(compilerOptions) && isExportOrExportExpression(location) ||
                //     !isConstEnumOrConstEnumOnlyModule(getExportSymbolOfValueSymbolIfExported(target))
                // ) {
                    markAliasSymbolAsReferenced(symbol);
                //}
            }
        }
    }


    // When an alias symbol is referenced, we need to mark the entity it references as referenced and in turn repeat that until
    // we reach a non-alias or an exported entity (which is always considered referenced). We do this by checking the target of
    // the alias as an expression (which recursively takes us back here if the target references another alias).
    function markAliasSymbolAsReferenced(symbol: Symbol) {
        //Debug.assert(canCollectSymbolAliasAccessabilityData);
        const links = getSymbolLinks(symbol);
        if (!links.referenced) {
            links.referenced = true;
            const node = getDeclarationOfAliasSymbol(symbol);
            if (!node) return Debug.fail();
            // We defer checking of the reference of an `import =` until the import itself is referenced,
            // This way a chain of imports can be elided if ultimately the final input is only used in a type
            // position.

            //TODO
            // if (isInternalModuleImportEqualsDeclaration(node)) {
            //     if (getSymbolFlags(resolveSymbol(symbol)) & SymbolFlags.Value) {
            //         // import foo = <symbol>
            //         const left = getFirstIdentifier(node.moduleReference as EntityNameExpression);
            //         markIdentifierAliasReferenced(left);
            //     }
            // }
        }
    }


    function markIdentifierAliasReferenced(location: Identifier) {
        const symbol = getResolvedSymbol(location);
        if (symbol && symbol !== argumentsSymbol && symbol !== unknownSymbol) {
            markAliasReferenced(symbol, location);
        }
    }

    /**
     * This function marks all the imports the given location refers to as `.referenced` in `NodeLinks` (transitively through local import aliases).
     * (This corresponds to not getting elided in JS emit.)
     * It can be called on *most* nodes in the AST with `ReferenceHint.Unspecified` and will filter its inputs, but care should be taken to avoid calling it on the RHS of an `import =` or specifiers in a `import {} from "..."`,
     * unless you *really* want to *definitely* mark those as referenced.
     * These shouldn't be directly marked, and should only get marked transitively by the internals of this function.
     *
     * @param location The location to mark js import refernces for
     * @param hint The kind of reference `location` has already been checked to be
     * @param propSymbol The optional symbol of the property we're looking up - this is used for property accesses when `const enum`s do not count as references (no `isolatedModules`, no `preserveConstEnums` + export). It will be calculated if not provided.
     * @param parentType The optional type of the parent of the LHS of the property access - this will be recalculated if not provided (but is costly).
     */
    function markLinkedReferences(location: PropertyAccessExpression | QualifiedName, hint: ReferenceHint.Property, propSymbol: Symbol | undefined, parentType: Type): void;
    function markLinkedReferences(location: Identifier, hint: ReferenceHint.Identifier): void;
    //function markLinkedReferences(location: ExportAssignment, hint: ReferenceHint.ExportAssignment): void;    
    function markLinkedReferences(location: FunctionLikeDeclaration /*| MethodSignature*/, hint: ReferenceHint.AsyncFunction): void;
    // function markLinkedReferences(location: ImportEqualsDeclaration, hint: ReferenceHint.ExportImportEquals): void;        
    function markLinkedReferences(location: Node, hint: ReferenceHint.Unspecified, propSymbol?: Symbol, parentType?: Type): void;
    function markLinkedReferences(location: Node, hint: ReferenceHint, propSymbol?: Symbol, parentType?: Type) {        
        if (location.flags & NodeFlags.Ambient) {
            return; // References within types and declaration files are never going to contribute to retaining a JS import
        }
        //Debug.fail("Implement me - markLinkedReferences");
        switch (hint) {
            case ReferenceHint.Identifier:
                return markIdentifierAliasReferenced(location as Identifier);
        //     case ReferenceHint.Property:
        //         return markPropertyAliasReferenced(location as PropertyAccessExpression | QualifiedName, propSymbol, parentType);
        //     case ReferenceHint.ExportAssignment:
        //         return markExportAssignmentAliasReferenced(location as ExportAssignment);        
        //     case ReferenceHint.AsyncFunction:
        //         return markAsyncFunctionAliasReferenced(location as FunctionLikeDeclaration | MethodSignature);
        //     case ReferenceHint.ExportImportEquals:
        //         return markImportEqualsAliasReferenced(location as ImportEqualsDeclaration);
        //     case ReferenceHint.ExportSpecifier:
        //         return markExportSpecifierAliasReferenced(location as ExportSpecifier);        
            case ReferenceHint.Unspecified: {
                // Identifiers in expression contexts are emitted, so we need to follow their referenced aliases and mark them as used
                // Some non-expression identifiers are also treated as expression identifiers for this purpose, eg, `a` in `b = {a}` or `q` in `import r = q`
                // This is the exception, rather than the rule - most non-expression identifiers are declaration names.
                if (isIdentifier(location) && (isExpressionNode(location) || isShorthandPropertyAssignment(location.parent) /*|| (isImportEqualsDeclaration(location.parent) && location.parent.moduleReference === location)*/) && shouldMarkIdentifierAliasReferenced(location)) {
                    if (isPropertyAccessOrQualifiedName(location.parent)) {
                        const left = isPropertyAccessExpression(location.parent) ? location.parent.expression : location.parent.left;
                        if (left !== location) return; // Only mark the LHS (the RHS is a property lookup)
                    }
                    markIdentifierAliasReferenced(location);
                    return;
                }
                if (isPropertyAccessOrQualifiedName(location)) {
                    let topProp: Node | undefined = location;
                    while (isPropertyAccessOrQualifiedName(topProp)) {
                        // if (isPartOfTypeNode(topProp)) return;
                        topProp = topProp.parent;
                    }
                    return markPropertyAliasReferenced(location);
                }
                // if (isExportAssignment(location)) {
                //     return markExportAssignmentAliasReferenced(location);
                // }                
                // if (isImportEqualsDeclaration(location)) {
                //     if (isInternalModuleImportEqualsDeclaration(location) || checkExternalImportOrExportDeclaration(location)) {
                //         return markImportEqualsAliasReferenced(location);
                //     }
                //     return;
                // }
                // if (isExportSpecifier(location)) {
                //     return markExportSpecifierAliasReferenced(location);
                // }
                if (isFunctionLikeDeclaration(location)/* || isMethodSignature(location)*/) {
                    //markAsyncFunctionAliasReferenced(location);
                    // Might be decorated, fall through to decorator final case
                }
                return;
            }
            default:
                Debug.assertNever(hint as never, `Unhandled reference hint: ${hint}`);
        }
    }
    
    function markPropertyAliasReferenced(location: PropertyAccessExpression | QualifiedName, propSymbol?: Symbol, parentType?: Type) {
        const left = isPropertyAccessExpression(location) ? location.expression : location.left;
        if (!isIdentifier(left)) {
            return;
        }
        const parentSymbol = getResolvedSymbol(left);
        if (!parentSymbol || parentSymbol === unknownSymbol) {
            return;
        }
        // In `Foo.Bar.Baz`, 'Foo' is not referenced if 'Bar' is a const enum or a module containing only const enums.
        // `Foo` is also not referenced in `enum FooCopy { Bar = Foo.Bar }`, because the enum member value gets inlined
        // here even if `Foo` is not a const enum.
        //
        // The exceptions are:
        //   1. if 'isolatedModules' is enabled, because the const enum value will not be inlined, and
        //   2. if 'preserveConstEnums' is enabled and the expression is itself an export, e.g. `export = Foo.Bar.Baz`.
        //
        // The property lookup is deferred as much as possible, in as many situations as possible, to avoid alias marking
        // pulling on types/symbols it doesn't strictly need to.
        // if (getIsolatedModules(compilerOptions) || (shouldPreserveConstEnums(compilerOptions) && isExportOrExportExpression(location))) {
        //     markAliasReferenced(parentSymbol, location);
        //     return;
        // }
        // Hereafter, this relies on type checking - but every check prior to this only used symbol information
        const leftType = parentType || checkExpressionCached(left);
        if (isTypeAny(leftType) || leftType === silentNeverType) {
            markAliasReferenced(parentSymbol, location);
            return;
        }
        let prop = propSymbol;
        if (!prop && !parentType) {
            const right = isPropertyAccessExpression(location) ? location.name : location.right;
            const lexicallyScopedSymbol = false;// isPrivateIdentifier(right) && lookupSymbolForPrivateIdentifierDeclaration(right.text, right);
            const assignmentKind = getAssignmentTargetKind(location);
            const apparentType = getApparentType(assignmentKind !== AssignmentKind.None /*|| isMethodAccessForCall(location)*/ ? getWidenedType(leftType) : leftType);
            prop = /*isPrivateIdentifier(right) ? lexicallyScopedSymbol && getPrivateIdentifierPropertyOfType(apparentType, lexicallyScopedSymbol) || undefined :*/ getPropertyOfType(apparentType, (right as Identifier).text);
        }
        // if (
        //     !(prop && (isConstEnumOrConstEnumOnlyModule(prop) || prop.flags & SymbolFlags.EnumMember && location.parent.kind === SyntaxKind.EnumMember))
        // ) {
        //     markAliasReferenced(parentSymbol, location);
        // }
        return;
    }

    function getWidenedType(type: Type) {
        return getWidenedTypeWithContext(type, /*context*/ undefined);
    }

    function createWideningContext(parent: WideningContext | undefined, propertyName: string | undefined, siblings: Type[] | undefined): WideningContext {
        return { parent, propertyName, siblings, resolvedProperties: undefined };
    }

    function getSiblingsOfContext(context: WideningContext): Type[] {
        if (!context.siblings) {
            const siblings: Type[] = [];
            for (const type of getSiblingsOfContext(context.parent!)) {
                if (isObjectLiteralType(type)) {
                    const prop = getPropertyOfObjectType(type, context.propertyName!);
                    if (prop) {
                        forEachType(getTypeOfSymbol(prop), t => {
                            siblings.push(t);
                        });
                    }
                }
            }
            context.siblings = siblings;
        }
        return context.siblings;
    }

    function getPropertiesOfUnionOrIntersectionType(type: UnionOrIntersectionType): Symbol[] {
        if (!type.resolvedProperties) {
            const members = createSymbolTable();
            for (const current of type.types) {
                for (const prop of getPropertiesOfType(current)) {
                    if (!members.has(prop.name)) {
                        const combinedProp = getPropertyOfUnionOrIntersectionType(type, prop.name, /*skipObjectFunctionPropertyAugment*/ !!(type.flags & TypeFlags.Intersection));
                        if (combinedProp) {
                            members.set(prop.name, combinedProp);
                        }
                    }
                }
                // The properties of a union type are those that are present in all constituent types, so
                // we only need to check the properties of the first type without index signature
                if (type.flags & TypeFlags.Union && getIndexInfosOfType(current).length === 0) {
                    break;
                }
            }
            type.resolvedProperties = getNamedMembers(members);
        }
        return type.resolvedProperties;
    }

    function getPropertiesOfType(type: Type): Symbol[] {
        type = getReducedApparentType(type);
        return type.flags & TypeFlags.UnionOrIntersection ?
            getPropertiesOfUnionOrIntersectionType(type as UnionType) :
            getPropertiesOfObjectType(type);
    }

    function getPropertiesOfContext(context: WideningContext): Symbol[] {
        if (!context.resolvedProperties) {
            const names = new Map<string, Symbol>();
            for (const t of getSiblingsOfContext(context)) {
                if (isObjectLiteralType(t) && !(getObjectFlags(t) & ObjectFlags.ContainsSpread)) {
                    for (const prop of getPropertiesOfType(t)) {
                        names.set(prop.name, prop);
                    }
                }
            }
            context.resolvedProperties = arrayFrom(names.values());
        }
        return context.resolvedProperties;
    }

    function getWidenedProperty(prop: Symbol, context: WideningContext | undefined): Symbol {
        if (!(prop.flags & SymbolFlags.Property)) {
            // Since get accessors already widen their return value there is no need to
            // widen accessor based properties here.
            return prop;
        }
        const original = getTypeOfSymbol(prop);
        const propContext = context && createWideningContext(context, prop.name, /*siblings*/ undefined);
        const widened = getWidenedTypeWithContext(original, propContext);
        return widened === original ? prop : createSymbolWithType(prop, widened);
    }

    function getUndefinedProperty(prop: Symbol) {
        const cached = undefinedProperties.get(prop.name);
        if (cached) {
            return cached;
        }
        const result = createSymbolWithType(prop, undefinedOrMissingType);
        result.flags |= SymbolFlags.Optional;
        undefinedProperties.set(prop.name, result);
        return result;
    }


    function getWidenedTypeOfObjectLiteral(type: Type, context: WideningContext | undefined): Type {
        const members = createSymbolTable();
        for (const prop of getPropertiesOfObjectType(type)) {
            members.set(prop.name, getWidenedProperty(prop, context));
        }
        if (context) {
            for (const prop of getPropertiesOfContext(context)) {
                if (!members.has(prop.name)) {
                    members.set(prop.name, getUndefinedProperty(prop));
                }
            }
        }
        const result = createAnonymousType(type.symbol, members, emptyArray, emptyArray, sameMap(getIndexInfosOfType(type), info => createIndexInfo(info.keyType, getWidenedType(info.type), info.isReadonly)));
        result.objectFlags |= getObjectFlags(type) & (ObjectFlags.JSLiteral | ObjectFlags.NonInferrableType); // Retain js literal flag through widening
        return result;
    }

    function createIndexInfo(keyType: Type, type: Type, isReadonly: boolean, declaration?: IndexSignatureDeclaration): IndexInfo {
        return { keyType, type, isReadonly, declaration };
    }

    function getWidenedTypeWithContext(type: Type, context: WideningContext | undefined): Type {
        if (getObjectFlags(type) & ObjectFlags.RequiresWidening) {
            if (context === undefined && type.widened) {
                return type.widened;
            }
            let result: Type | undefined;
            if (type.flags & (TypeFlags.Any | TypeFlags.Nullable)) {
                result = anyType;
            }
            else if (isObjectLiteralType(type)) {
                result = getWidenedTypeOfObjectLiteral(type, context);
            }
            else if (type.flags & TypeFlags.Union) {
                const unionContext = context || createWideningContext(/*parent*/ undefined, /*propertyName*/ undefined, (type as UnionType).types);
                const widenedTypes = sameMap((type as UnionType).types, t => t.flags & TypeFlags.Nullable ? t : getWidenedTypeWithContext(t, unionContext));
                // Widening an empty object literal transitions from a highly restrictive type to
                // a highly inclusive one. For that reason we perform subtype reduction here if the
                // union includes empty object types (e.g. reducing {} | string to just {}).
                result = getUnionType(widenedTypes, some(widenedTypes, isEmptyObjectType) ? UnionReduction.Subtype : UnionReduction.Literal);
            }
            // else if (type.flags & TypeFlags.Intersection) {
            //     result = getIntersectionType(sameMap((type as IntersectionType).types, getWidenedType));
            // }
            // else if (isArrayOrTupleType(type)) {
            //     result = createTypeReference(type.target, sameMap(getTypeArguments(type), getWidenedType));
            // }
            if (result && context === undefined) {
                type.widened = result;
            }
            return result || type;
        }
        return type;
    }

    
    
    function checkExpressionCached(node: Expression | QualifiedName, checkMode?: CheckMode): Type {
        if (checkMode) {
            return checkExpression(node, checkMode);
        }
        const links = getNodeLinks(node);
        if (!links.resolvedType) {
            // When computing a type that we're going to cache, we need to ignore any ongoing control flow
            // analysis because variables may have transient types in indeterminable states. Moving flowLoopStart
            // to the top of the stack ensures all transient types are computed from a known point.
            const saveFlowLoopStart = flowLoopStart;
            const saveFlowTypeCache = flowTypeCache;
            flowLoopStart = flowLoopCount;
            flowTypeCache = undefined;
            links.resolvedType = checkExpression(node, checkMode);
            flowTypeCache = saveFlowTypeCache;
            flowLoopStart = saveFlowLoopStart;
        }
        return links.resolvedType;
    }
    
    function getNarrowedTypeOfSymbol(symbol: Symbol, location: Identifier, checkMode?: CheckMode) {
        const type = getTypeOfSymbol(symbol, checkMode);
        const declaration = symbol.valueDeclaration;
        console.warn("TODO - Implement me - getNarrowedTypeOfSymbol");
        // if (declaration) {
        //     // If we have a non-rest binding element with no initializer declared as a const variable or a const-like
        //     // parameter (a parameter for which there are no assignments in the function body), and if the parent type
        //     // for the destructuring is a union type, one or more of the binding elements may represent discriminant
        //     // properties, and we want the effects of conditional checks on such discriminants to affect the types of
        //     // other binding elements from the same destructuring. Consider:
        //     //
        //     //   type Action =
        //     //       | { kind: 'A', payload: number }
        //     //       | { kind: 'B', payload: string };
        //     //
        //     //   function f({ kind, payload }: Action) {
        //     //       if (kind === 'A') {
        //     //           payload.toFixed();
        //     //       }
        //     //       if (kind === 'B') {
        //     //           payload.toUpperCase();
        //     //       }
        //     //   }
        //     //
        //     // Above, we want the conditional checks on 'kind' to affect the type of 'payload'. To facilitate this, we use
        //     // the binding pattern AST instance for '{ kind, payload }' as a pseudo-reference and narrow this reference
        //     // as if it occurred in the specified location. We then recompute the narrowed binding element type by
        //     // destructuring from the narrowed parent type.
        //     if (isBindingElement(declaration) && !declaration.initializer && !declaration.dotDotDotToken && declaration.parent.elements.length >= 2) {
        //         const parent = declaration.parent.parent;
        //         const rootDeclaration = getRootDeclaration(parent);
        //         if (rootDeclaration.kind === SyntaxKind.VariableDeclaration && getCombinedNodeFlagsCached(rootDeclaration) & NodeFlags.Constant || rootDeclaration.kind === SyntaxKind.Parameter) {
        //             const links = getNodeLinks(parent);
        //             if (!(links.flags & NodeCheckFlags.InCheckIdentifier)) {
        //                 links.flags |= NodeCheckFlags.InCheckIdentifier;
        //                 const parentType = getTypeForBindingElementParent(parent, CheckMode.Normal);
        //                 const parentTypeConstraint = parentType && mapType(parentType, getBaseConstraintOrType);
        //                 links.flags &= ~NodeCheckFlags.InCheckIdentifier;
        //                 if (parentTypeConstraint && parentTypeConstraint.flags & TypeFlags.Union && !(rootDeclaration.kind === SyntaxKind.Parameter && isSomeSymbolAssigned(rootDeclaration))) {
        //                     const pattern = declaration.parent;
        //                     const narrowedType = getFlowTypeOfReference(pattern, parentTypeConstraint, parentTypeConstraint, /*flowContainer*/ undefined, location.flowNode);
        //                     if (narrowedType.flags & TypeFlags.Never) {
        //                         return neverType;
        //                     }
        //                     // Destructurings are validated against the parent type elsewhere. Here we disable tuple bounds
        //                     // checks because the narrowed type may have lower arity than the full parent type. For example,
        //                     // for the declaration [x, y]: [1, 2] | [3], we may have narrowed the parent type to just [3].
        //                     return getBindingElementTypeFromParentType(declaration, narrowedType, /*noTupleBoundsCheck*/ true);
        //                 }
        //             }
        //         }
        //     }
        //     // If we have a const-like parameter with no type annotation or initializer, and if the parameter is contextually
        //     // typed by a signature with a single rest parameter of a union of tuple types, one or more of the parameters may
        //     // represent discriminant tuple elements, and we want the effects of conditional checks on such discriminants to
        //     // affect the types of other parameters in the same parameter list. Consider:
        //     //
        //     //   type Action = [kind: 'A', payload: number] | [kind: 'B', payload: string];
        //     //
        //     //   const f: (...args: Action) => void = (kind, payload) => {
        //     //       if (kind === 'A') {
        //     //           payload.toFixed();
        //     //       }
        //     //       if (kind === 'B') {
        //     //           payload.toUpperCase();
        //     //       }
        //     //   }
        //     //
        //     // Above, we want the conditional checks on 'kind' to affect the type of 'payload'. To facilitate this, we use
        //     // the arrow function AST node for '(kind, payload) => ...' as a pseudo-reference and narrow this reference as
        //     // if it occurred in the specified location. We then recompute the narrowed parameter type by indexing into the
        //     // narrowed tuple type.
        //     if (isParameter(declaration) && !declaration.type && !declaration.initializer && !declaration.dotDotDotToken) {
        //         const func = declaration.parent;
        //         if (func.parameters.length >= 2 && isContextSensitiveFunctionOrObjectLiteralMethod(func)) {
        //             const contextualSignature = getContextualSignature(func);
        //             if (contextualSignature && contextualSignature.parameters.length === 1 && signatureHasRestParameter(contextualSignature)) {
        //                 const restType = getReducedApparentType(instantiateType(getTypeOfSymbol(contextualSignature.parameters[0]), getInferenceContext(func)?.nonFixingMapper));
        //                 if (restType.flags & TypeFlags.Union && everyType(restType, isTupleType) && !some(func.parameters, isSomeSymbolAssigned)) {
        //                     const narrowedType = getFlowTypeOfReference(func, restType, restType, /*flowContainer*/ undefined, location.flowNode);
        //                     const index = func.parameters.indexOf(declaration) - (getThisParameter(func) ? 1 : 0);
        //                     return getIndexedAccessType(narrowedType, getNumberLiteralType(index));
        //                 }
        //             }
        //         }
        //     }
        // }
        return type;
    }

    function getBaseTypeOfLiteralType(type: Type): Type {
        return type.flags & (TypeFlags.StringLiteral) ? stringType :
            type.flags & TypeFlags.IntLiteral ? intType :
            type.flags & TypeFlags.FloatLiteral ? floatType :
            //type.flags & TypeFlags.BooleanLiteral ? booleanType :
            type.flags & TypeFlags.Union ? getBaseTypeOfLiteralTypeUnion(type as UnionType) :
            type;
    }

    function getTypeId(type: Type): TypeId {
        return type.id;
    }

    function getCachedType(key: string | undefined) {
        return key ? cachedTypes.get(key) : undefined;
    }

    function setCachedType(key: string | undefined, type: Type) {
        if (key) cachedTypes.set(key, type);
        return type;
    }
    
    function getTypeListId(types: readonly Type[] | undefined) {
        let result = "";
        if (types) {
            const length = types.length;
            let i = 0;
            while (i < length) {
                const startId = types[i].id;
                let count = 1;
                while (i + count < length && types[i + count].id === startId + count) {
                    count++;
                }
                if (result.length) {
                    result += ",";
                }
                result += startId;
                if (count > 1) {
                    result += ":" + count;
                }
                i += count;
            }
        }
        return result;
    }

    function getAliasId(aliasSymbol: Symbol | undefined, aliasTypeArguments: readonly Type[] | undefined) {
        return aliasSymbol ? `@${getSymbolId(aliasSymbol)}` + (aliasTypeArguments ? `:${getTypeListId(aliasTypeArguments)}` : "") : "";
    }

    // We sort and deduplicate the constituent types based on object identity. If the subtypeReduction
    // flag is specified we also reduce the constituent type set to only include types that aren't subtypes
    // of other types. Subtype reduction is expensive for large union types and is possible only when union
    // types are known not to circularly reference themselves (as is the case with union types created by
    // expression constructs such as array literals and the || and ?: operators). Named types can
    // circularly reference themselves and therefore cannot be subtype reduced during their declaration.
    // For example, "type Item = string | (() => Item" is a named type that circularly references itself.
    function getUnionType(types: readonly Type[], unionReduction: UnionReduction = UnionReduction.Literal, aliasSymbol?: Symbol, aliasTypeArguments?: readonly Type[], origin?: Type): Type {
        if (types.length === 0) {
            return neverType;
        }
        if (types.length === 1) {
            return types[0];
        }
        // We optimize for the common case of unioning a union type with some other type (such as `undefined`).
        if (types.length === 2 && !origin && (types[0].flags & TypeFlags.Union || types[1].flags & TypeFlags.Union)) {
            const infix = unionReduction === UnionReduction.None ? "N" : unionReduction === UnionReduction.Subtype ? "S" : "L";
            const index = types[0].id < types[1].id ? 0 : 1;
            const id = types[index].id + infix + types[1 - index].id + getAliasId(aliasSymbol, aliasTypeArguments);
            let type = unionOfUnionTypes.get(id);
            if (!type) {
                type = getUnionTypeWorker(types, unionReduction, aliasSymbol, aliasTypeArguments, /*origin*/ undefined);
                unionOfUnionTypes.set(id, type);
            }
            return type;
        }
        return getUnionTypeWorker(types, unionReduction, aliasSymbol, aliasTypeArguments, origin);
    }
    
    function getUnionTypeWorker(types: readonly Type[], unionReduction: UnionReduction, aliasSymbol: Symbol | undefined, aliasTypeArguments: readonly Type[] | undefined, origin: Type | undefined): Type {
        console.warn("Implement me - getUnionTypeWorker");
        return errorType;
        // let typeSet: Type[] | undefined = [];
        // const includes = addTypesToUnion(typeSet, 0 as TypeFlags, types);
        // if (unionReduction !== UnionReduction.None) {
        //     if (includes & TypeFlags.AnyOrUnknown) {
        //         return includes & TypeFlags.Any ?
        //             includes & TypeFlags.IncludesWildcard ? wildcardType :
        //                 includes & TypeFlags.IncludesError ? errorType : anyType :
        //             unknownType;
        //     }
        //     if (includes & TypeFlags.Undefined) {
        //         // If type set contains both undefinedType and missingType, remove missingType
        //         if (typeSet.length >= 2 && typeSet[0] === undefinedType && typeSet[1] === missingType) {
        //             orderedRemoveItemAt(typeSet, 1);
        //         }
        //     }
        //     if (includes & (TypeFlags.Enum | TypeFlags.Literal | TypeFlags.UniqueESSymbol | TypeFlags.TemplateLiteral | TypeFlags.StringMapping) || includes & TypeFlags.Void && includes & TypeFlags.Undefined) {
        //         removeRedundantLiteralTypes(typeSet, includes, !!(unionReduction & UnionReduction.Subtype));
        //     }
        //     if (includes & TypeFlags.StringLiteral && includes & (TypeFlags.TemplateLiteral | TypeFlags.StringMapping)) {
        //         removeStringLiteralsMatchedByTemplateLiterals(typeSet);
        //     }
        //     if (includes & TypeFlags.IncludesConstrainedTypeVariable) {
        //         removeConstrainedTypeVariables(typeSet);
        //     }
        //     if (unionReduction === UnionReduction.Subtype) {
        //         typeSet = removeSubtypes(typeSet, !!(includes & TypeFlags.Object));
        //         if (!typeSet) {
        //             return errorType;
        //         }
        //     }
        //     if (typeSet.length === 0) {
        //         return includes & TypeFlags.Null ? includes & TypeFlags.IncludesNonWideningType ? nullType : nullWideningType :
        //             includes & TypeFlags.Undefined ? includes & TypeFlags.IncludesNonWideningType ? undefinedType : undefinedWideningType :
        //             neverType;
        //     }
        // }
        // if (!origin && includes & TypeFlags.Union) {
        //     const namedUnions: Type[] = [];
        //     addNamedUnions(namedUnions, types);
        //     const reducedTypes: Type[] = [];
        //     for (const t of typeSet) {
        //         if (!some(namedUnions, union => containsType((union as UnionType).types, t))) {
        //             reducedTypes.push(t);
        //         }
        //     }
        //     if (!aliasSymbol && namedUnions.length === 1 && reducedTypes.length === 0) {
        //         return namedUnions[0];
        //     }
        //     // We create a denormalized origin type only when the union was created from one or more named unions
        //     // (unions with alias symbols or origins) and when there is no overlap between those named unions.
        //     const namedTypesCount = reduceLeft(namedUnions, (sum, union) => sum + (union as UnionType).types.length, 0);
        //     if (namedTypesCount + reducedTypes.length === typeSet.length) {
        //         for (const t of namedUnions) {
        //             insertType(reducedTypes, t);
        //         }
        //         origin = createOriginUnionOrIntersectionType(TypeFlags.Union, reducedTypes);
        //     }
        // }
        // const objectFlags = (includes & TypeFlags.NotPrimitiveUnion ? 0 : ObjectFlags.PrimitiveUnion) |
        //     (includes & TypeFlags.Intersection ? ObjectFlags.ContainsIntersections : 0);
        // return getUnionTypeFromSortedList(typeSet, objectFlags, aliasSymbol, aliasTypeArguments, origin);
    }

    // Apply a mapping function to a type and return the resulting type. If the source type
    // is a union type, the mapping function is applied to each constituent type and a union
    // of the resulting types is returned.
    function mapType(type: Type, mapper: (t: Type) => Type, noReductions?: boolean): Type;
    function mapType(type: Type, mapper: (t: Type) => Type | undefined, noReductions?: boolean): Type | undefined;
    function mapType(type: Type, mapper: (t: Type) => Type | undefined, noReductions?: boolean): Type | undefined {
        if (type.flags & TypeFlags.Never) {
            return type;
        }
        if (!(type.flags & TypeFlags.Union)) {
            return mapper(type);
        }
        const origin = (type as UnionType).origin;
        const types = origin && origin.flags & TypeFlags.Union ? (origin as UnionType).types : (type as UnionType).types;
        let mappedTypes: Type[] | undefined;
        let changed = false;
        for (const t of types) {
            const mapped = t.flags & TypeFlags.Union ? mapType(t, mapper, noReductions) : mapper(t);
            changed ||= t !== mapped;
            if (mapped) {
                if (!mappedTypes) {
                    mappedTypes = [mapped];
                }
                else {
                    mappedTypes.push(mapped);
                }
            }
        }
        return changed ? mappedTypes && getUnionType(mappedTypes, noReductions ? UnionReduction.None : UnionReduction.Literal) : type;
    }

    function getBaseTypeOfLiteralTypeUnion(type: UnionType) {
        const key = `B${getTypeId(type)}`;
        return getCachedType(key) ?? setCachedType(key, mapType(type, getBaseTypeOfLiteralType));
    }

    function getNarrowableTypeForReference(type: Type, reference: Node, checkMode?: CheckMode) {        
        // not used in lpc
        return type;
    }

    function getControlFlowContainer(node: Node): Node {
        return findAncestor(node.parent, node =>
            isFunctionLike(node) && !getImmediatelyInvokedFunctionExpression(node) ||            
            node.kind === SyntaxKind.SourceFile ||
            node.kind === SyntaxKind.PropertyDeclaration)!;
    }

    function checkNonNullExpression(node: Expression | QualifiedName) {
        return checkNonNullType(checkExpression(node), node);
    }
            
    function isMethodAccessForCall(node: Node) {
        while (node.parent.kind === SyntaxKind.ParenthesizedExpression) {
            node = node.parent;
        }
        return isCallOrNewExpression(node.parent) && node.parent.expression === node;
    }

    function checkQualifiedName(node: QualifiedName, checkMode: CheckMode | undefined) {
        const leftType = checkNonNullExpression(node.left);
        return checkPropertyAccessExpressionOrQualifiedName(node, node.left, leftType, node.right, checkMode);
    }
    
    function checkPropertyAccessExpressionOrQualifiedName(node: PropertyAccessExpression | QualifiedName, left: Expression | QualifiedName, leftType: Type, right: Identifier, checkMode: CheckMode | undefined, writeOnly?: boolean) {
        const parentSymbol = getNodeLinks(left).resolvedSymbol;
        const assignmentKind = getAssignmentTargetKind(node);
        const apparentType = getApparentType(assignmentKind !== AssignmentKind.None || isMethodAccessForCall(node) ? getWidenedType(leftType) : leftType);
        const isAnyLike = isTypeAny(apparentType) || apparentType === silentNeverType;
        let prop: Symbol | undefined;
        // if (isPrivateIdentifier(right)) {
        //     if (
        //         languageVersion < LanguageFeatureMinimumTarget.PrivateNamesAndClassStaticBlocks ||
        //         languageVersion < LanguageFeatureMinimumTarget.ClassAndClassElementDecorators ||
        //         !useDefineForClassFields
        //     ) {
        //         if (assignmentKind !== AssignmentKind.None) {
        //             checkExternalEmitHelpers(node, ExternalEmitHelpers.ClassPrivateFieldSet);
        //         }
        //         if (assignmentKind !== AssignmentKind.Definite) {
        //             checkExternalEmitHelpers(node, ExternalEmitHelpers.ClassPrivateFieldGet);
        //         }
        //     }

        //     const lexicallyScopedSymbol = lookupSymbolForPrivateIdentifierDeclaration(right.text, right);
        //     if (assignmentKind && lexicallyScopedSymbol && lexicallyScopedSymbol.valueDeclaration && isMethodDeclaration(lexicallyScopedSymbol.valueDeclaration)) {
        //         grammarErrorOnNode(right, Diagnostics.Cannot_assign_to_private_method_0_Private_methods_are_not_writable, idText(right));
        //     }
        //     if (isAnyLike) {
        //         if (lexicallyScopedSymbol) {
        //             return isErrorType(apparentType) ? errorType : apparentType;
        //         }
        //         if (getContainingClassExcludingClassDecorators(right) === undefined) {
        //             grammarErrorOnNode(right, Diagnostics.Private_identifiers_are_not_allowed_outside_class_bodies);
        //             return anyType;
        //         }
        //     }

        //     prop = lexicallyScopedSymbol && getPrivateIdentifierPropertyOfType(leftType, lexicallyScopedSymbol);
        //     if (prop === undefined) {
        //         // Check for private-identifier-specific shadowing and lexical-scoping errors.
        //         if (checkPrivateIdentifierPropertyAccess(leftType, right, lexicallyScopedSymbol)) {
        //             return errorType;
        //         }
        //         const containingClass = getContainingClassExcludingClassDecorators(right);
        //         if (containingClass && isPlainJsFile(getSourceFileOfNode(containingClass), compilerOptions.checkJs)) {
        //             grammarErrorOnNode(right, Diagnostics.Private_field_0_must_be_declared_in_an_enclosing_class, idText(right));
        //         }
        //     }
        //     else {
        //         const isSetonlyAccessor = prop.flags & SymbolFlags.SetAccessor && !(prop.flags & SymbolFlags.GetAccessor);
        //         if (isSetonlyAccessor && assignmentKind !== AssignmentKind.Definite) {
        //             error(node, Diagnostics.Private_accessor_was_defined_without_a_getter);
        //         }
        //     }
        // } else
        {
            if (isAnyLike) {
                if (isIdentifier(left) && parentSymbol) {
                    markLinkedReferences(node, ReferenceHint.Property, /*propSymbol*/ undefined, leftType);
                }
                return isErrorType(apparentType) ? errorType : apparentType;
            }
            prop = getPropertyOfType(apparentType, right.text, /*skipObjectFunctionPropertyAugment*/ false, /*includeTypeOnlyMembers*/ node.kind === SyntaxKind.QualifiedName);
        }
        markLinkedReferences(node, ReferenceHint.Property, prop, leftType);

        let propType: Type;
        if (!prop) {
            const indexInfo = !isPrivateIdentifier(right) && (assignmentKind === AssignmentKind.None) ? getApplicableIndexInfoForName(apparentType, right.text) : undefined;
            if (!(indexInfo && indexInfo.type)) {
                const isUncheckedJS = false;// TODO: isUncheckedJSSuggestion(node, leftType.symbol, /*excludeClasses*/ true);
                // if (!isUncheckedJS && isJSLiteralType(leftType)) {
                //     return anyType;
                // }
                // if (leftType.symbol === globalThisSymbol) {
                //     if (globalThisSymbol.exports!.has(right.text) && (globalThisSymbol.exports!.get(right.text)!.flags & SymbolFlags.BlockScoped)) {
                //         error(right, Diagnostics.Property_0_does_not_exist_on_type_1, unescapeLeadingUnderscores(right.text), typeToString(leftType));
                //     }
                //     else if (noImplicitAny) {
                //         error(right, Diagnostics.Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature, typeToString(leftType));
                //     }
                //     return anyType;
                // }
                // if (right.text && !checkAndReportErrorForExtendingInterface(node)) {
                //     reportNonexistentProperty(right, isThisTypeParameter(leftType) ? apparentType : leftType, isUncheckedJS);
                // }
                return errorType;
            }
            if (indexInfo.isReadonly && (isAssignmentTarget(node))) {
                error(node, Diagnostics.Index_signature_in_type_0_only_permits_reading, typeToString(apparentType));
            }

            propType = indexInfo.type;
            // if (compilerOptions.noUncheckedIndexedAccess && getAssignmentTargetKind(node) !== AssignmentKind.Definite) {
            //     propType = getUnionType([propType, missingType]);
            // }
            // if (compilerOptions.noPropertyAccessFromIndexSignature && isPropertyAccessExpression(node)) {
            //     error(right, Diagnostics.Property_0_comes_from_an_index_signature_so_it_must_be_accessed_with_0, unescapeLeadingUnderscores(right.text));
            // }
            if (indexInfo.declaration && isDeprecatedDeclaration(indexInfo.declaration)) {
                addDeprecatedSuggestion(right, [indexInfo.declaration], right.text as string);
            }
        }
        else {
            const targetPropSymbol = resolveAliasWithDeprecationCheck(prop, right);
            if (isDeprecatedSymbol(targetPropSymbol) && isUncalledFunctionReference(node, targetPropSymbol) && targetPropSymbol.declarations) {
                addDeprecatedSuggestion(right, targetPropSymbol.declarations, right.text as string);
            }
            //checkPropertyNotUsedBeforeDeclaration(prop, node, right);
            markPropertyAsReferenced(prop, node, isSelfTypeAccess(left, parentSymbol));
            getNodeLinks(node).resolvedSymbol = prop;
            checkPropertyAccessibility(node, left.kind === SyntaxKind.SuperKeyword, isWriteAccess(node), apparentType, prop);
            // TODO
            // if (isAssignmentToReadonlyEntity(node as Expression, prop, assignmentKind)) {
            //     error(right, Diagnostics.Cannot_assign_to_0_because_it_is_a_read_only_property, idText(right));
            //     return errorType;
            // }

            propType = /*isThisPropertyAccessInConstructor(node, prop) ? autoType : */ writeOnly || isWriteOnlyAccess(node) ? getWriteTypeOfSymbol(prop) : getTypeOfSymbol(prop);
        }

        return getFlowTypeOfAccessExpression(node, prop, propType, right, checkMode);
    }

    function checkIdentifier(node: Identifier, checkMode: CheckMode | undefined): Type {
        // if (isThisInTypeQuery(node)) {
        //     return checkThisExpression(node);
        // }

        const symbol = getResolvedSymbol(node);
        if (symbol === unknownSymbol) {
            return errorType;
        }

        checkIdentifierCalculateNodeCheckFlags(node, symbol);

        if (symbol === argumentsSymbol) {
            if (isInPropertyInitializerOrClassStaticBlock(node)) {
                return errorType;
            }
            return getTypeOfSymbol(symbol);
        }

        if (shouldMarkIdentifierAliasReferenced(node)) {
            markLinkedReferences(node, ReferenceHint.Identifier);
        }

        const localOrExportSymbol = getExportSymbolOfValueSymbolIfExported(symbol);
        let declaration = localOrExportSymbol.valueDeclaration;

        let type = getNarrowedTypeOfSymbol(localOrExportSymbol, node, checkMode);
        const assignmentKind = getAssignmentTargetKind(node);

        if (assignmentKind) {
            if (
                !(localOrExportSymbol.flags & SymbolFlags.Variable)                
            ) {
                const assignmentError = localOrExportSymbol.flags & SymbolFlags.Function ? Diagnostics.Cannot_assign_to_0_because_it_is_a_function
                    //: localOrExportSymbol.flags & SymbolFlags.Alias ? Diagnostics.Cannot_assign_to_0_because_it_is_an_import
                    : Diagnostics.Cannot_assign_to_0_because_it_is_not_a_variable;

                error(node, assignmentError, symbolToString(symbol));
                return errorType;
            }
            // no readonly symbols in LPC
            // if (isReadonlySymbol(localOrExportSymbol)) {
            //     if (localOrExportSymbol.flags & SymbolFlags.Variable) {
            //         error(node, Diagnostics.Cannot_assign_to_0_because_it_is_a_constant, symbolToString(symbol));
            //     }
            //     else {
            //         error(node, Diagnostics.Cannot_assign_to_0_because_it_is_a_read_only_property, symbolToString(symbol));
            //     }
            //     return errorType;
            // }
        }

        const isAlias = localOrExportSymbol.flags & SymbolFlags.Alias;

        // We only narrow variables and parameters occurring in a non-assignment position. For all other
        // entities we simply return the declared type.
        if (localOrExportSymbol.flags & SymbolFlags.Variable) {
            if (assignmentKind === AssignmentKind.Definite) {
                return isInCompoundLikeAssignment(node) ? getBaseTypeOfLiteralType(type) : type;
            }
        }
        else if (isAlias) {
            declaration = getDeclarationOfAliasSymbol(symbol);
        }
        else {
            return type;
        }

        if (!declaration) {
            return type;
        }

        type = getNarrowableTypeForReference(type, node, checkMode);

        // The declaration container is the innermost function that encloses the declaration of the variable
        // or parameter. The flow container is the innermost function starting with which we analyze the control
        // flow graph to determine the control flow based type.
        const isParameter = getRootDeclaration(declaration).kind === SyntaxKind.Parameter;
        const declarationContainer = getControlFlowContainer(declaration);
        let flowContainer = getControlFlowContainer(node);
        const isOuterVariable = flowContainer !== declarationContainer;        
        const isModuleExports = symbol.flags & SymbolFlags.ModuleExports;
        const typeIsAutomatic = type === autoType || type === autoArrayType;        
        // When the control flow originates in a function expression, arrow function, method, or accessor, and
        // we are referencing a closed-over const variable or parameter or mutable local variable past its last
        // assignment, we extend the origin of the control flow analysis to include the immediately enclosing
        // control flow container.
        while (
            flowContainer !== declarationContainer && (
                flowContainer.kind === SyntaxKind.FunctionExpression ||
                flowContainer.kind === SyntaxKind.InlineClosureExpression 
                //|| isObjectLiteralOrClassExpressionMethodOrAccessor(flowContainer)
            ) && (                
                isParameterOrMutableLocalVariable(localOrExportSymbol) && isPastLastAssignment(localOrExportSymbol, node)
            )
        ) {
            flowContainer = getControlFlowContainer(flowContainer);
        }
        // We only look for uninitialized variables in strict null checking mode, and only when we can analyze
        // the entire control flow graph from the variable's declaration (i.e. when the flow container and
        // declaration container are the same).
        const assumeInitialized = isParameter || isAlias || isOuterVariable || isModuleExports || isSameScopedBindingElement(node, declaration) ||
            type !== autoType && type !== autoArrayType && (!strictNullChecks || (type.flags & (TypeFlags.AnyOrUnknown | TypeFlags.Void)) !== 0) ||                        
            declaration.flags & NodeFlags.Ambient;
        const initialType = undefinedType;
            // isAutomaticTypeInNonNull ? undefinedType :
            // assumeInitialized ? (isParameter ? removeOptionalityFromDeclaredType(type, declaration as VariableLikeDeclaration) : type) :
            // typeIsAutomatic ? undefinedType : getOptionalType(type);
        const flowType = getFlowTypeOfReference(node, type, initialType, flowContainer);
        // A variable is considered uninitialized when it is possible to analyze the entire control flow graph
        // from declaration to use, and when the variable's declared type doesn't include undefined but the
        // control flow based type does include undefined.
        if (!isEvolvingArrayOperationTarget(node) && (type === autoType || type === autoArrayType)) {
            if (flowType === autoType || flowType === autoArrayType) {                
                return convertAutoToAny(flowType);
            }
        }
        else if (!assumeInitialized && !containsUndefinedType(type) && containsUndefinedType(flowType)) {
            error(node, Diagnostics.Variable_0_is_used_before_being_assigned, symbolToString(symbol));
            // Return the declared type to reduce follow-on errors
            return type;
        }
        return assignmentKind ? getBaseTypeOfLiteralType(flowType) : flowType;
    }

    function containsUndefinedType(type: Type) {
        return !!((type.flags & TypeFlags.Union ? (type as UnionType).types[0] : type).flags & TypeFlags.Undefined);
    }

    function convertAutoToAny(type: Type) {
        return type === autoType ? anyType : type === autoArrayType ? anyArrayType : type;
    }

    function isSameScopedBindingElement(node: Identifier, declaration: Declaration) {
        if (isBindingElement(declaration)) {
            const bindingElement = findAncestor(node, isBindingElement);
            return bindingElement && getRootDeclaration(bindingElement) === getRootDeclaration(declaration);
        }
    }

    function getReferenceRoot(node: Node): Node {
        const { parent } = node;
        return parent.kind === SyntaxKind.ParenthesizedExpression ||
                parent.kind === SyntaxKind.BinaryExpression && (parent as BinaryExpression).operatorToken.kind === SyntaxKind.EqualsToken && (parent as BinaryExpression).left === node ||
                parent.kind === SyntaxKind.BinaryExpression && (parent as BinaryExpression).operatorToken.kind === SyntaxKind.CommaToken && (parent as BinaryExpression).right === node ?
            getReferenceRoot(parent) : node;
    }

    function isFreshLiteralType(type: Type) {
        return !!(type.flags & TypeFlags.Freshable) && (type as LiteralType).freshType === type;
    }
    
    type ErrorReporter = (message: DiagnosticMessage, ...args: DiagnosticArguments) => void;

    function isSimpleTypeRelatedTo(source: Type, target: Type, relation: Map<string, RelationComparisonResult>, errorReporter?: ErrorReporter) {
        const s = source.flags;
        const t = target.flags;
        if (t & TypeFlags.Any || s & TypeFlags.Never) return true;
        if (t & TypeFlags.Unknown && !(relation === strictSubtypeRelation && s & TypeFlags.Any)) return true;
        if (t & TypeFlags.Never) return false;
        if (s & TypeFlags.StringLike && t & TypeFlags.String) return true;
        // if (
        //     s & TypeFlags.StringLiteral && s & TypeFlags.EnumLiteral &&
        //     t & TypeFlags.StringLiteral && !(t & TypeFlags.EnumLiteral) &&
        //     (source as StringLiteralType).value === (target as StringLiteralType).value
        // ) return true;
        if (s & TypeFlags.NumberLike && t & TypeFlags.Number) return true;                
        if (s & TypeFlags.BooleanLike && t & TypeFlags.Boolean) return true;
        if (s & TypeFlags.ESSymbolLike && t & TypeFlags.ESSymbol) return true;                
        // In non-strictNullChecks mode, `undefined` and `null` are assignable to anything except `never`.
        // Since unions and intersections may reduce to `never`, we exclude them here.
        if (s & TypeFlags.Undefined && (!strictNullChecks && !(t & TypeFlags.UnionOrIntersection) || t & (TypeFlags.Undefined | TypeFlags.Void))) return true;
        if (s & TypeFlags.Null && (!strictNullChecks && !(t & TypeFlags.UnionOrIntersection) || t & TypeFlags.Null)) return true;
        if (s & TypeFlags.Object && t & TypeFlags.NonPrimitive && !(relation === strictSubtypeRelation && isEmptyAnonymousObjectType(source) && !(getObjectFlags(source) & ObjectFlags.FreshLiteral))) return true;
        if (relation === assignableRelation || relation === comparableRelation) {
            if (s & TypeFlags.Any) return true;
            // Type number is assignable to any computed numeric enum type or any numeric enum literal type, and
            // a numeric literal type is assignable any computed numeric enum type or any numeric enum literal type
            // with a matching value. These rules exist such that enums can be used for bit-flag purposes.            
            // Anything is assignable to a union containing undefined, null, and {}
            if (isUnknownLikeUnionType(target)) return true;
        }
        return false;
    }

    /**
     * Gets a SymbolTable containing both the early- and late-bound members of a symbol.
     *
     * For a description of late-binding, see `lateBindMember`.
     */
    function getMembersOfSymbol(symbol: Symbol) {
        return symbol.flags & SymbolFlags.LateBindingContainer
            ? getResolvedMembersOrExportsOfSymbol(symbol, MembersOrExportsResolutionKind.resolvedMembers)
            : symbol.members || emptySymbols;
    }

    function getExportsOfModuleWorker(moduleSymbol: Symbol) {
        console.warn("TODO - Implement me - getExportsOfModuleWorker");
        return { exports: createSymbolTable(), exportEquals: undefined };
    }    

    function getFunctionExpressionParentSymbolOrSymbol(symbol: Symbol) {
        return symbol.valueDeclaration?.kind === SyntaxKind.InlineClosureExpression || symbol.valueDeclaration?.kind === SyntaxKind.FunctionExpression
            ? getSymbolOfNode(symbol.valueDeclaration.parent) || symbol
            : symbol;
    }

    function isPossiblyAliasedThisProperty(declaration: BinaryExpression, kind = getAssignmentDeclarationKind(declaration)) {
        if (kind === AssignmentDeclarationKind.ThisProperty) {
            return true;
        }
        if (!isInJSFile(declaration) || kind !== AssignmentDeclarationKind.Property || !isIdentifier((declaration.left as AccessExpression).expression)) {
            return false;
        }
        const name = ((declaration.left as AccessExpression).expression as Identifier).text;
        const symbol = resolveName(declaration.left, name, SymbolFlags.Value, /*nameNotFoundMessage*/ undefined, /*isUse*/ true, /*excludeGlobals*/ true);
        return isThisInitializedDeclaration(symbol?.valueDeclaration);
    }

    /**
     * Indicates whether a declaration has a late-bindable dynamic name.
     */
    function hasLateBindableName(node: Declaration) {//: node is LateBoundDeclaration | LateBoundBinaryExpressionDeclaration {
        return false;
        // const name = getNameOfDeclaration(node);
        // return !!name && isLateBindableName(name);
    }
    
    function getResolvedMembersOrExportsOfSymbol(symbol: Symbol, resolutionKind: MembersOrExportsResolutionKind): Map<string, Symbol> {
        const links = getSymbolLinks(symbol);
        console.warn("TODO - Implement me - getResolvedMembersOrExportsOfSymbol");
        //return links.resolvedMembers;

        if (!links[resolutionKind]) {
            const isStatic = resolutionKind === MembersOrExportsResolutionKind.resolvedExports;
            const earlySymbols = !isStatic ? symbol.members :
                symbol.flags & SymbolFlags.Module ? getExportsOfModuleWorker(symbol).exports :
                symbol.exports;

            // In the event we recursively resolve the members/exports of the symbol, we
            // set the initial value of resolvedMembers/resolvedExports to the early-bound
            // members/exports of the symbol.
            links[resolutionKind] = earlySymbols || emptySymbols;

            // fill in any as-yet-unresolved late-bound members.
            const lateSymbols = createSymbolTable() as Map<string, TransientSymbol>;
            for (const decl of symbol.declarations || emptyArray) {
                const members = getMembersOfDeclaration(decl);
                if (members) {
                    // for (const member of members) {
                    //     if (isStatic === hasStaticModifier(member)) {
                    //         if (hasLateBindableName(member)) {
                    //             lateBindMember(symbol, earlySymbols, lateSymbols, member);
                    //         }
                    //     }
                    // }
                }
            }
            const assignments = getFunctionExpressionParentSymbolOrSymbol(symbol).assignmentDeclarationMembers;

            if (assignments) {
                const decls = arrayFrom(assignments.values());
                for (const member of decls) {
                    const assignmentKind = getAssignmentDeclarationKind(member as BinaryExpression | CallExpression);
                    const isInstanceMember = assignmentKind === AssignmentDeclarationKind.PrototypeProperty
                        || isBinaryExpression(member) && isPossiblyAliasedThisProperty(member, assignmentKind)
                        || assignmentKind === AssignmentDeclarationKind.ObjectDefinePrototypeProperty
                        || assignmentKind === AssignmentDeclarationKind.Prototype; // A straight `Prototype` assignment probably can never have a computed name
                    if (isStatic === !isInstanceMember) {
                        // if (hasLateBindableName(member)) {
                        //     lateBindMember(symbol, earlySymbols, lateSymbols, member);
                        // }
                    }
                }
            }

            let resolved = combineSymbolTables(earlySymbols, lateSymbols);
            if (symbol.flags & SymbolFlags.Transient && links.cjsExportMerged && symbol.declarations) {
                for (const decl of symbol.declarations) {
                    const original = getSymbolLinks(decl.symbol)[resolutionKind];
                    if (!resolved) {
                        resolved = original;
                        continue;
                    }
                    if (!original) continue;
                    original.forEach((s, name) => {
                        const existing = resolved!.get(name);
                        if (!existing) resolved!.set(name, s);
                        else if (existing === s) return;
                        else resolved!.set(name, mergeSymbol(existing, s));
                    });
                }
            }
            links[resolutionKind] = resolved || emptySymbols;
        }

        return links[resolutionKind];
    }

    function combineSymbolTables(first: SymbolTable | undefined, second: SymbolTable | undefined): SymbolTable | undefined {
        if (!first?.size) return second;
        if (!second?.size) return first;
        const combined = createSymbolTable();
        mergeSymbolTable(combined, first);
        mergeSymbolTable(combined, second);
        return combined;
    }

    function isEmptyAnonymousObjectType(type: Type) {
        return !!(getObjectFlags(type) & ObjectFlags.Anonymous && (
            (type as ResolvedType).members && isEmptyResolvedType(type as ResolvedType) ||
            type.symbol && type.symbol.flags & SymbolFlags.TypeLiteral && getMembersOfSymbol(type.symbol).size === 0
        ));
    }
    
    function isEmptyResolvedType(t: ResolvedType) {
        return t !== anyFunctionType &&
            t.properties.length === 0 &&
            t.callSignatures.length === 0 &&
            t.constructSignatures.length === 0 &&
            t.indexInfos.length === 0;
    }

    function isUnknownLikeUnionType(type: Type) {
        if (strictNullChecks && type.flags & TypeFlags.Union) {
            if (!((type as UnionType).objectFlags & ObjectFlags.IsUnknownLikeUnionComputed)) {
                const types = (type as UnionType).types;
                (type as UnionType).objectFlags |= ObjectFlags.IsUnknownLikeUnionComputed | (types.length >= 3 && types[0].flags & TypeFlags.Undefined &&
                        types[1].flags & TypeFlags.Null && some(types, isEmptyAnonymousObjectType) ? ObjectFlags.IsUnknownLikeUnion : 0);
            }
            return !!((type as UnionType).objectFlags & ObjectFlags.IsUnknownLikeUnion);
        }
        return false;
    }

    function isTypeRelatedTo(source: Type, target: Type, relation: Map<string, RelationComparisonResult>) {
        if (isFreshLiteralType(source)) {
            source = (source as FreshableType).regularType;
        }
        if (isFreshLiteralType(target)) {
            target = (target as FreshableType).regularType;
        }
        if (source === target) {
            return true;
        }
        if (relation !== identityRelation) {
            if (relation === comparableRelation && !(target.flags & TypeFlags.Never) && isSimpleTypeRelatedTo(target, source, relation) || isSimpleTypeRelatedTo(source, target, relation)) {
                return true;
            }
        }
        else if (!((source.flags | target.flags) & (TypeFlags.UnionOrIntersection | TypeFlags.IndexedAccess | TypeFlags.Conditional | TypeFlags.Substitution))) {
            // We have excluded types that may simplify to other forms, so types must have identical flags
            if (source.flags !== target.flags) return false;
            if (source.flags & TypeFlags.Singleton) return true;
        }
        if (source.flags & TypeFlags.Object && target.flags & TypeFlags.Object) {
            const related = relation.get(getRelationKey(source, target, IntersectionState.None, relation, /*ignoreConstraints*/ false));
            if (related !== undefined) {
                return !!(related & RelationComparisonResult.Succeeded);
            }
        }
        if (source.flags & TypeFlags.StructuredOrInstantiable || target.flags & TypeFlags.StructuredOrInstantiable) {
            return checkTypeRelatedTo(source, target, relation, /*errorNode*/ undefined);
        }
        return false;
    }

    function typeCouldHaveTopLevelSingletonTypes(type: Type): boolean {
        // Okay, yes, 'boolean' is a union of 'true | false', but that's not useful
        // in error reporting scenarios. If you need to use this function but that detail matters,
        // feel free to add a flag.
        if (type.flags & TypeFlags.Boolean) {
            return false;
        }

        // if (type.flags & TypeFlags.UnionOrIntersection) {
        //     return !!forEach((type as IntersectionType).types, typeCouldHaveTopLevelSingletonTypes);
        // }

        // if (type.flags & TypeFlags.Instantiable) {
        //     const constraint = getConstraintOfType(type);
        //     if (constraint && constraint !== type) {
        //         return typeCouldHaveTopLevelSingletonTypes(constraint);
        //     }
        // }

        return isUnitType(type) || !!(type.flags & TypeFlags.TemplateLiteral) || !!(type.flags & TypeFlags.StringMapping);
    }

    function getSuggestedTypeForNonexistentStringLiteralType(source: StringLiteralType, target: UnionType): StringLiteralType | undefined {
        const candidates = target.types.filter((type): type is StringLiteralType => !!(type.flags & TypeFlags.StringLiteral));
        return getSpellingSuggestion(source.value, candidates, type => type.value);
    }

    function getSingleBaseForNonAugmentingSubtype(type: Type) {
        if (!(getObjectFlags(type) & ObjectFlags.Reference) || !(getObjectFlags((type as TypeReference).target) & ObjectFlags.ClassOrInterface)) {
            return undefined;
        }
        if (getObjectFlags(type) & ObjectFlags.IdenticalBaseTypeCalculated) {
            return getObjectFlags(type) & ObjectFlags.IdenticalBaseTypeExists ? (type as TypeReference).cachedEquivalentBaseType : undefined;
        }
        (type as TypeReference).objectFlags |= ObjectFlags.IdenticalBaseTypeCalculated;
        const target = (type as TypeReference).target as InterfaceType;
        // if (getObjectFlags(target) & ObjectFlags.Class) {
        //     const baseTypeNode = getBaseTypeNodeOfClass(target);
        //     // A base type expression may circularly reference the class itself (e.g. as an argument to function call), so we only
        //     // check for base types specified as simple qualified names.
        //     if (baseTypeNode && baseTypeNode.expression.kind !== SyntaxKind.Identifier && baseTypeNode.expression.kind !== SyntaxKind.PropertyAccessExpression) {
        //         return undefined;
        //     }
        // }
        const bases = getBaseTypes(target);
        if (bases.length !== 1) {
            return undefined;
        }
        if (getMembersOfSymbol(type.symbol).size) {
            return undefined; // If the interface has any members, they may subtype members in the base, so we should do a full structural comparison
        }
        let instantiatedBase = !length(target.typeParameters) ? bases[0] : instantiateType(bases[0], createTypeMapper(target.typeParameters!, getTypeArguments(type as TypeReference).slice(0, target.typeParameters!.length)));
        // if (length(getTypeArguments(type as TypeReference)) > length(target.typeParameters)) {
        //     instantiatedBase = getTypeWithThisArgument(instantiatedBase, last(getTypeArguments(type as TypeReference)));
        // }
        (type as TypeReference).objectFlags |= ObjectFlags.IdenticalBaseTypeExists;
        return (type as TypeReference).cachedEquivalentBaseType = instantiatedBase;
    }

    /**
     * A type is 'weak' if it is an object type with at least one optional property
     * and no required properties, call/construct signatures or index signatures
     */
    function isWeakType(type: Type): boolean {return false;}

    function typeHasCallOrConstructSignatures(type: Type): boolean {
        return getSignaturesOfType(type, SignatureKind.Call).length !== 0 || getSignaturesOfType(type, SignatureKind.Construct).length !== 0;
    }

    function hasCommonProperties(source: Type, target: Type, isComparingJsxAttributes: boolean) {
        for (const prop of getPropertiesOfType(source)) {
            if (isKnownProperty(target, prop.name, isComparingJsxAttributes)) {
                return true;
            }
        }
        return false;
    }

    
    /**
     * Check if a property with the given name is known anywhere in the given type. In an object type, a property
     * is considered known if
     * 1. the object type is empty and the check is for assignability, or
     * 2. if the object type has index signatures, or
     * 3. if the property is actually declared in the object type
     *    (this means that 'toString', for example, is not usually a known property).
     * 4. In a union or intersection type,
     *    a property is considered known if it is known in any constituent type.
     * @param targetType a type to search a given name in
     * @param name a property name to search
     * @param isComparingJsxAttributes a boolean flag indicating whether we are searching in JsxAttributesType
     */
    function isKnownProperty(targetType: Type, name: string, isComparingJsxAttributes: boolean): boolean {
        if (targetType.flags & TypeFlags.Object) {
            // For backwards compatibility a symbol-named property is satisfied by a string index signature. This
            // is incorrect and inconsistent with element access expressions, where it is an error, so eventually
            // we should remove this exception.
            if (
                getPropertyOfObjectType(targetType, name) ||
                getApplicableIndexInfoForName(targetType, name) ||
                isLateBoundName(name) && getIndexInfoOfType(targetType, stringType) 
                //isComparingJsxAttributes && isHyphenatedJsxName(name)
            ) {
                // For JSXAttributes, if the attribute has a hyphenated name, consider that the attribute to be known.
                return true;
            }
        }
        // if (targetType.flags & TypeFlags.Substitution) {
        //     return isKnownProperty((targetType as SubstitutionType).baseType, name, isComparingJsxAttributes);
        // }
        if (targetType.flags & TypeFlags.UnionOrIntersection && isExcessPropertyCheckTarget(targetType)) {
            for (const t of (targetType as UnionOrIntersectionType).types) {
                if (isKnownProperty(t, name, isComparingJsxAttributes)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    function isExcessPropertyCheckTarget(type: Type): boolean {
        return !!(type.flags & TypeFlags.Object && !(getObjectFlags(type) & ObjectFlags.ObjectLiteralPatternWithComputedProperties) ||
            type.flags & TypeFlags.NonPrimitive ||
            //type.flags & TypeFlags.Substitution && isExcessPropertyCheckTarget((type as SubstitutionTy pe).baseType) ||
            type.flags & TypeFlags.Union && some((type as UnionType).types, isExcessPropertyCheckTarget));
            //type.flags & TypeFlags.Intersection && every((type as IntersectionType).types, isExcessPropertyCheckTarget));
    }

    function extractTypesOfKind(type: Type, kind: TypeFlags) {
        return filterType(type, t => (t.flags & kind) !== 0);
    }

    
    function getMatchingUnionConstituentForType(unionType: UnionType, type: Type) {
        console.warn("TODO - Implement me - getMatchingUnionConstituentForType");
        return type;
        // const keyPropertyName = getKeyPropertyName(unionType);
        // const propType = keyPropertyName && getTypeOfPropertyOfType(type, keyPropertyName);
        // return propType && getConstituentTypeForKeyType(unionType, propType);
    }

    function transformTypeOfMembers(type: Type, f: (propertyType: Type) => Type) {
        const members = createSymbolTable();
        for (const property of getPropertiesOfObjectType(type)) {
            const original = getTypeOfSymbol(property);
            const updated = f(original);
            members.set(property.name, updated === original ? property : createSymbolWithType(property, updated));
        }
        return members;
    }

    /**
     * If the the provided object literal is subject to the excess properties check,
     * create a new that is exempt. Recursively mark object literal members as exempt.
     * Leave signatures alone since they are not subject to the check.
     */
    function getRegularTypeOfObjectLiteral(type: Type): Type {
        if (!(isObjectLiteralType(type) && getObjectFlags(type) & ObjectFlags.FreshLiteral)) {
            return type;
        }
        const regularType = (type as FreshObjectLiteralType).regularType;
        if (regularType) {
            return regularType;
        }

        const resolved = type as ResolvedType;
        const members = transformTypeOfMembers(type, getRegularTypeOfObjectLiteral);
        const regularNew = createAnonymousType(resolved.symbol, members, resolved.callSignatures, resolved.constructSignatures, resolved.indexInfos);
        regularNew.flags = resolved.flags;
        regularNew.objectFlags |= resolved.objectFlags & ~ObjectFlags.FreshLiteral;
        (type as FreshObjectLiteralType).regularType = regularNew;
        return regularNew;
    }

    function isTypeSubsetOfUnion(source: Type, target: UnionType) {
        if (source.flags & TypeFlags.Union) {
            for (const t of (source as UnionType).types) {
                if (!containsType(target.types, t)) {
                    return false;
                }
            }
            return true;
        }
        // if (source.flags & TypeFlags.EnumLike && getBaseTypeOfEnumLikeType(source as LiteralType) === target) {
        //     return true;
        // }
        return containsType(target.types, source);
    }


    function isTypeSubsetOf(source: Type, target: Type) {
        return !!(source === target || source.flags & TypeFlags.Never || target.flags & TypeFlags.Union && isTypeSubsetOfUnion(source, target as UnionType));
    }

    function isDiscriminantProperty(type: Type | undefined, name: string) {
        if (type && type.flags & TypeFlags.Union) {
            const prop = getUnionOrIntersectionProperty(type as UnionType, name);
            if (prop && getCheckFlags(prop) & CheckFlags.SyntheticProperty) {
                // NOTE: cast to TransientSymbol should be safe because only TransientSymbols can have CheckFlags.SyntheticProperty
                if ((prop as TransientSymbol).links.isDiscriminantProperty === undefined) {
                    (prop as TransientSymbol).links.isDiscriminantProperty = ((prop as TransientSymbol).links.checkFlags & CheckFlags.Discriminant) === CheckFlags.Discriminant 
                    ;//!isGenericType(getTypeOfSymbol(prop));
                }
                return !!(prop as TransientSymbol).links.isDiscriminantProperty;
            }
        }
        return false;
    }

    function findDiscriminantProperties(sourceProperties: Symbol[], target: Type): Symbol[] | undefined {
        let result: Symbol[] | undefined;
        for (const sourceProperty of sourceProperties) {
            if (isDiscriminantProperty(target, sourceProperty.name)) {
                if (result) {
                    result.push(sourceProperty);
                    continue;
                }
                result = [sourceProperty];
            }
        }
        return result;
    }

    /**
     * Return the type of the matching property or index signature in the given type, or undefined
     * if no matching property or index signature exists. Add optionality to index signature types.
     */
    function getTypeOfPropertyOrIndexSignatureOfType(type: Type, name: string): Type | undefined {
        let propType;
        return getTypeOfPropertyOfType(type, name) ||
            (propType = getApplicableIndexInfoForName(type, name)?.type) &&
                addOptionality(propType, /*isProperty*/ true, /*isOptional*/ true);
    }


    function discriminateTypeByDiscriminableItems(target: UnionType, discriminators: (readonly [() => Type, string])[], related: (source: Type, target: Type) => boolean | Ternary) {
        const types = target.types;
        const include: Ternary[] = types.map(t => t.flags & TypeFlags.Primitive ? Ternary.False : Ternary.True);
        for (const [getDiscriminatingType, propertyName] of discriminators) {
            // If the remaining target types include at least one with a matching discriminant, eliminate those that
            // have non-matching discriminants. This ensures that we ignore erroneous discriminators and gradually
            // refine the target set without eliminating every constituent (which would lead to `never`).
            let matched = false;
            for (let i = 0; i < types.length; i++) {
                if (include[i]) {
                    const targetType = getTypeOfPropertyOrIndexSignatureOfType(types[i], propertyName);
                    if (targetType && someType(getDiscriminatingType(), t => !!related(t, targetType))) {
                        matched = true;
                    }
                    else {
                        include[i] = Ternary.Maybe;
                    }
                }
            }
            // Turn each Ternary.Maybe into Ternary.False if there was a match. Otherwise, revert to Ternary.True.
            for (let i = 0; i < types.length; i++) {
                if (include[i] === Ternary.Maybe) {
                    include[i] = matched ? Ternary.False : Ternary.True;
                }
            }
        }
        const filtered = contains(include, Ternary.False) ? getUnionType(types.filter((_, i) => include[i]), UnionReduction.None) : target;
        return filtered.flags & TypeFlags.Never ? target : filtered;
    }

    // Keep this up-to-date with the same logic within `getApparentTypeOfContextualType`, since they should behave similarly
    function findMatchingDiscriminantType(source: Type, target: Type, isRelatedTo: (source: Type, target: Type) => Ternary) {
        if (target.flags & TypeFlags.Union && source.flags & (TypeFlags.Intersection | TypeFlags.Object)) {
            const match = getMatchingUnionConstituentForType(target as UnionType, source);
            if (match) {
                return match;
            }
            const sourceProperties = getPropertiesOfType(source);
            if (sourceProperties) {
                const sourcePropertiesFiltered = findDiscriminantProperties(sourceProperties, target);
                if (sourcePropertiesFiltered) {
                    const discriminated = discriminateTypeByDiscriminableItems(target as UnionType, map(sourcePropertiesFiltered, p => ([() => getTypeOfSymbol(p), p.name] as [() => Type, string])), isRelatedTo);
                    if (discriminated !== target) {
                        return discriminated;
                    }
                }
            }
        }
        return undefined;
    }

    function filterPrimitivesIfContainsNonPrimitive(type: UnionType) {
        if (maybeTypeOfKind(type, TypeFlags.NonPrimitive)) {
            const result = filterType(type, t => !(t.flags & TypeFlags.Primitive));
            if (!(result.flags & TypeFlags.Never)) {
                return result;
            }
        }
        return type;
    }

    
    /**
     * Checks if a property can be accessed in a location.
     * The location is given by the `node` parameter.
     * The node does not need to be a property access.
     * @param node location where to check property accessibility
     * @param isSuper whether to consider this a `super` property access, e.g. `super.foo`.
     * @param isWrite whether this is a write access, e.g. `++foo.x`.
     * @param containingType type where the property comes from.
     * @param property property symbol.
     */
    function isPropertyAccessible(
        node: Node,
        isSuper: boolean,
        isWrite: boolean,
        containingType: Type,
        property: Symbol,
    ): boolean {
        // Short-circuiting for improved performance.
        if (isTypeAny(containingType)) {
            return true;
        }

        // A #private property access in an optional chain is an error dealt with by the parser.
        // The checker does not check for it, so we need to do our own check here.
        // if (property.valueDeclaration && isPrivateIdentifierClassElementDeclaration(property.valueDeclaration)) {
        //     const declClass = getContainingClass(property.valueDeclaration);
        //     return !isOptionalChain(node) && !!findAncestor(node, parent => parent === declClass);
        // }

        return checkPropertyAccessibilityAtLocation(node, isSuper, isWrite, containingType, property);
    }
    
    /**
     * Checks if an existing property access is valid for completions purposes.
     * @param node a property access-like node where we want to check if we can access a property.
     * This node does not need to be an access of the property we are checking.
     * e.g. in completions, this node will often be an incomplete property access node, as in `foo.`.
     * Besides providing a location (i.e. scope) used to check property accessibility, we use this node for
     * computing whether this is a `super` property access.
     * @param type the type whose property we are checking.
     * @param property the accessed property's symbol.
     */
    function isValidPropertyAccessForCompletions(node: PropertyAccessExpression | QualifiedName, type: Type, property: Symbol): boolean {
        return isPropertyAccessible(node, node.kind === SyntaxKind.PropertyAccessExpression && node.expression.kind === SyntaxKind.SuperKeyword, /*isWrite*/ false, type, property);
        // Previously we validated the 'this' type of methods but this adversely affected performance. See #31377 for more context.
    }


    function getSuggestedSymbolForNonexistentProperty(name: Identifier | string, containingType: Type): Symbol | undefined {
        let props = getPropertiesOfType(containingType);
        if (typeof name !== "string") {
            const parent = name.parent;
            if (isPropertyAccessExpression(parent)) {
                props = filter(props, prop => isValidPropertyAccessForCompletions(parent, containingType, prop));
            }
            name = idText(name);
        }
        return getSpellingSuggestionForName(name, props, SymbolFlags.Value);
    }

    function getSuggestionForNonexistentProperty(name: Identifier |  string, containingType: Type): string | undefined {
        const suggestion = getSuggestedSymbolForNonexistentProperty(name, containingType);
        return suggestion && symbolName(suggestion);
    }

    
    // Return true if the given type is deeply nested. We consider this to be the case when the given stack contains
    // maxDepth or more occurrences of types with the same recursion identity as the given type. The recursion identity
    // provides a shared identity for type instantiations that repeat in some (possibly infinite) pattern. For example,
    // in `type Deep<T> = { next: Deep<Deep<T>> }`, repeatedly referencing the `next` property leads to an infinite
    // sequence of ever deeper instantiations with the same recursion identity (in this case the symbol associated with
    // the object type literal).
    // A homomorphic mapped type is considered deeply nested if its target type is deeply nested, and an intersection is
    // considered deeply nested if any constituent of the intersection is deeply nested.
    // It is possible, though highly unlikely, for the deeply nested check to be true in a situation where a chain of
    // instantiations is not infinitely expanding. Effectively, we will generate a false positive when two types are
    // structurally equal to at least maxDepth levels, but unequal at some level beyond that.
    function isDeeplyNestedType(type: Type, stack: Type[], depth: number, maxDepth = 3): boolean {
        if (depth >= maxDepth) {
            console.warn("TODO - Implement me - isDeeplyNestedType");
            return true;
            // if ((getObjectFlags(type) & ObjectFlags.InstantiatedMapped) === ObjectFlags.InstantiatedMapped) {
            //     type = getMappedTargetWithSymbol(type);
            // }
            // if (type.flags & TypeFlags.Intersection) {
            //     return some((type as IntersectionType).types, t => isDeeplyNestedType(t, stack, depth, maxDepth));
            // }
            // const identity = getRecursionIdentity(type);
            // let count = 0;
            // let lastTypeId = 0;
            // for (let i = 0; i < depth; i++) {
            //     const t = stack[i];
            //     if (hasMatchingRecursionIdentity(t, identity)) {
            //         // We only count occurrences with a higher type id than the previous occurrence, since higher
            //         // type ids are an indicator of newer instantiations caused by recursion.
            //         if (t.id >= lastTypeId) {
            //             count++;
            //             if (count >= maxDepth) {
            //                 return true;
            //             }
            //         }
            //         lastTypeId = t.id;
            //     }
            // }
        }
        return false;
    }


    function getNormalizedUnionOrIntersectionType(type: UnionOrIntersectionType, writing: boolean) {
        const reduced = getReducedType(type);
        if (reduced !== type) {
            return reduced;
        }
        // if (type.flags & TypeFlags.Intersection && shouldNormalizeIntersection(type as IntersectionType)) {
        //     // Normalization handles cases like
        //     // Partial<T>[K] & ({} | null) ==>
        //     // Partial<T>[K] & {} | Partial<T>[K} & null ==>
        //     // (T[K] | undefined) & {} | (T[K] | undefined) & null ==>
        //     // T[K] & {} | undefined & {} | T[K] & null | undefined & null ==>
        //     // T[K] & {} | T[K] & null
        //     const normalizedTypes = sameMap(type.types, t => getNormalizedType(t, writing));
        //     if (normalizedTypes !== type.types) {
        //         return getIntersectionType(normalizedTypes);
        //     }
        // }
        return type;
    }
    
    /**
     * Checks if 'source' is related to 'target' (e.g.: is a assignable to).
     * @param source The left-hand-side of the relation.
     * @param target The right-hand-side of the relation.
     * @param relation The relation considered. One of 'identityRelation', 'subtypeRelation', 'assignableRelation', or 'comparableRelation'.
     * Used as both to determine which checks are performed and as a cache of previously computed results.
     * @param errorNode The suggested node upon which all errors will be reported, if defined. This may or may not be the actual node used.
     * @param headMessage If the error chain should be prepended by a head message, then headMessage will be used.
     * @param containingMessageChain A chain of errors to prepend any new errors found.
     * @param errorOutputContainer Return the diagnostic. Do not log if 'skipLogging' is truthy.
     */
    function checkTypeRelatedTo(
        source: Type,
        target: Type,
        relation: Map<string, RelationComparisonResult>,
        errorNode: Node | undefined,
        headMessage?: DiagnosticMessage,
        containingMessageChain?: () => DiagnosticMessageChain | undefined,
        errorOutputContainer?: { errors?: Diagnostic[]; skipLogging?: boolean; },
    ): boolean {
        console.warn("TODO - Implement me - checkTypeRelatedTo");
        
        let errorInfo: DiagnosticMessageChain | undefined;
        let relatedInfo: [DiagnosticRelatedInformation, ...DiagnosticRelatedInformation[]] | undefined;
        let maybeKeys: string[];
        let maybeKeysSet: Set<string>;
        let sourceStack: Type[];
        let targetStack: Type[];
        let maybeCount = 0;
        let sourceDepth = 0;
        let targetDepth = 0;
        let expandingFlags = ExpandingFlags.None;
        let overflow = false;
        let overrideNextErrorInfo = 0; // How many `reportRelationError` calls should be skipped in the elaboration pyramid
        let skipParentCounter = 0; // How many errors should be skipped 'above' in the elaboration pyramid
        let lastSkippedInfo: [Type, Type] | undefined;
        let incompatibleStack: DiagnosticAndArguments[] | undefined;
        // In Node.js, the maximum number of elements in a map is 2^24. We limit the number of entries an invocation
        // of checkTypeRelatedTo can add to a relation to 1/8th of its remaining capacity.
        let relationCount = (16_000_000 - relation.size) >> 3;

        Debug.assert(relation !== identityRelation || !errorNode, "no error reporting in identity checking");

        const result = isRelatedTo(source, target, RecursionFlags.Both, /*reportErrors*/ !!errorNode, headMessage);
        if (incompatibleStack) {
            reportIncompatibleStack();
        }

        return result !== Ternary.False;

        function resetErrorInfo(saved: ReturnType<typeof captureErrorCalculationState>) {
            errorInfo = saved.errorInfo;
            lastSkippedInfo = saved.lastSkippedInfo;
            incompatibleStack = saved.incompatibleStack;
            overrideNextErrorInfo = saved.overrideNextErrorInfo;
            skipParentCounter = saved.skipParentCounter;
            relatedInfo = saved.relatedInfo;
        }

        function captureErrorCalculationState() {
            return {
                errorInfo,
                lastSkippedInfo,
                incompatibleStack: incompatibleStack?.slice(),
                overrideNextErrorInfo,
                skipParentCounter,
                relatedInfo: relatedInfo?.slice() as [DiagnosticRelatedInformation, ...DiagnosticRelatedInformation[]] | undefined,
            };
        }


        function traceUnionsOrIntersectionsTooLarge(source: Type, target: Type): void {
            if (!tracing) {
                return;
            }

            if ((source.flags & TypeFlags.UnionOrIntersection) && (target.flags & TypeFlags.UnionOrIntersection)) {
                const sourceUnionOrIntersection = source as UnionOrIntersectionType;
                const targetUnionOrIntersection = target as UnionOrIntersectionType;

                if (sourceUnionOrIntersection.objectFlags & targetUnionOrIntersection.objectFlags & ObjectFlags.PrimitiveUnion) {
                    // There's a fast path for comparing primitive unions
                    return;
                }

                const sourceSize = sourceUnionOrIntersection.types.length;
                const targetSize = targetUnionOrIntersection.types.length;
                if (sourceSize * targetSize > 1E6) {
                    tracing.instant(tracing.Phase.CheckTypes, "traceUnionsOrIntersectionsTooLarge_DepthLimit", {
                        sourceId: source.id,
                        sourceSize,
                        targetId: target.id,
                        targetSize,
                        pos: errorNode?.pos,
                        end: errorNode?.end,
                    });
                }
            }
        }


        function reportIncompatibleStack() {
            const stack = incompatibleStack || [];
            incompatibleStack = undefined;
            const info = lastSkippedInfo;
            lastSkippedInfo = undefined;
            if (stack.length === 1) {
                reportError(...stack[0]);
                if (info) {
                    // Actually do the last relation error
                    reportRelationError(/*message*/ undefined, ...info);
                }
                return;
            }
            // The first error will be the innermost, while the last will be the outermost - so by popping off the end,
            // we can build from left to right
            let path = "";
            const secondaryRootErrors: DiagnosticAndArguments[] = [];
            while (stack.length) {
                const [msg, ...args] = stack.pop()!;
                switch (msg.code) {
                    case Diagnostics.Types_of_property_0_are_incompatible.code: {
                        // Parenthesize a `new` if there is one
                        if (path.indexOf("new ") === 0) {
                            path = `(${path})`;
                        }
                        const str = "" + args[0];
                        // If leading, just print back the arg (irrespective of if it's a valid identifier)
                        if (path.length === 0) {
                            path = `${str}`;
                        }
                        // Otherwise write a dotted name if possible
                        else if (isIdentifierText(str, getEmitScriptTarget(compilerOptions))) {
                            path = `${path}.${str}`;
                        }
                        // Failing that, check if the name is already a computed name
                        else if (str[0] === "[" && str[str.length - 1] === "]") {
                            path = `${path}${str}`;
                        }
                        // And finally write out a computed name as a last resort
                        else {
                            path = `${path}[${str}]`;
                        }
                        break;
                    }
                    case Diagnostics.Call_signature_return_types_0_and_1_are_incompatible.code:
                    //case Diagnostics.Construct_signature_return_types_0_and_1_are_incompatible.code:
                    case Diagnostics.Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1.code: {
                    //case Diagnostics.Construct_signatures_with_no_arguments_have_incompatible_return_types_0_and_1.code: {
                        if (path.length === 0) {
                            // Don't flatten signature compatability errors at the start of a chain - instead prefer
                            // to unify (the with no arguments bit is excessive for printback) and print them back
                            let mappedMsg = msg;
                            if (msg.code === Diagnostics.Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1.code) {
                                mappedMsg = Diagnostics.Call_signature_return_types_0_and_1_are_incompatible;
                            }
                            // else if (msg.code === Diagnostics.Construct_signatures_with_no_arguments_have_incompatible_return_types_0_and_1.code) {
                            //     mappedMsg = Diagnostics.Construct_signature_return_types_0_and_1_are_incompatible;
                            // }
                            secondaryRootErrors.unshift([mappedMsg, args[0], args[1]]);
                        }
                        else {
                            // const prefix = (msg.code === Diagnostics.Construct_signature_return_types_0_and_1_are_incompatible.code ||
                            //         msg.code === Diagnostics.Construct_signatures_with_no_arguments_have_incompatible_return_types_0_and_1.code)
                            //     ? "new "
                            //     : "";
                            const prefix="";
                            // const params = (msg.code === Diagnostics.Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1.code ||
                            //         msg.code === Diagnostics.Construct_signatures_with_no_arguments_have_incompatible_return_types_0_and_1.code)
                            //     ? ""
                            //     : "...";
                            const params = "";
                            path = `${prefix}${path}(${params})`;
                        }
                        break;
                    }
                    case Diagnostics.Type_at_position_0_in_source_is_not_compatible_with_type_at_position_1_in_target.code: {
                        secondaryRootErrors.unshift([Diagnostics.Type_at_position_0_in_source_is_not_compatible_with_type_at_position_1_in_target, args[0], args[1]]);
                        break;
                    }
                    case Diagnostics.Type_at_positions_0_through_1_in_source_is_not_compatible_with_type_at_position_2_in_target.code: {
                        secondaryRootErrors.unshift([Diagnostics.Type_at_positions_0_through_1_in_source_is_not_compatible_with_type_at_position_2_in_target, args[0], args[1], args[2]]);
                        break;
                    }
                    default:
                        return Debug.fail(`Unhandled Diagnostic: ${msg.code}`);
                }
            }
            if (path) {
                reportError(
                    path[path.length - 1] === ")"
                        ? Diagnostics.The_types_returned_by_0_are_incompatible_between_these_types
                        : Diagnostics.The_types_of_0_are_incompatible_between_these_types,
                    path,
                );
            }
            else {
                // Remove the innermost secondary error as it will duplicate the error already reported by `reportRelationError` on entry
                secondaryRootErrors.shift();
            }
            for (const [msg, ...args] of secondaryRootErrors) {
                const originalValue = msg.elidedInCompatabilityPyramid;
                msg.elidedInCompatabilityPyramid = false; // Temporarily override elision to ensure error is reported
                reportError(msg, ...args);
                msg.elidedInCompatabilityPyramid = originalValue;
            }
            if (info) {
                // Actually do the last relation error
                reportRelationError(/*message*/ undefined, ...info);
            }
        }

        function reportRelationError(message: DiagnosticMessage | undefined, source: Type, target: Type) {
            if (incompatibleStack) reportIncompatibleStack();
            const [sourceType, targetType] = getTypeNamesForErrorDisplay(source, target);
            let generalizedSource = source;
            let generalizedSourceType = sourceType;

            if (isLiteralType(source) && !typeCouldHaveTopLevelSingletonTypes(target)) {
                generalizedSource = getBaseTypeOfLiteralType(source);
                Debug.assert(!isTypeAssignableTo(generalizedSource, target), "generalized source shouldn't be assignable");
                generalizedSourceType = getTypeNameForErrorDisplay(generalizedSource);
            }

            // If `target` is of indexed access type (And `source` it is not), we use the object type of `target` for better error reporting
            // const targetFlags = target.flags & TypeFlags.IndexedAccess && !(source.flags & TypeFlags.IndexedAccess) ?
            //     (target as IndexedAccessType).objectType.flags :
            //     target.flags;            
            // if (targetFlags & TypeFlags.TypeParameter && target !== markerSuperTypeForCheck && target !== markerSubTypeForCheck) {
            //     const constraint = getBaseConstraintOfType(target);
            //     let needsOriginalSource;
            //     if (constraint && (isTypeAssignableTo(generalizedSource, constraint) || (needsOriginalSource = isTypeAssignableTo(source, constraint)))) {
            //         reportError(
            //             Diagnostics._0_is_assignable_to_the_constraint_of_type_1_but_1_could_be_instantiated_with_a_different_subtype_of_constraint_2,
            //             needsOriginalSource ? sourceType : generalizedSourceType,
            //             targetType,
            //             typeToString(constraint),
            //         );
            //     }
            //     else {
            //         errorInfo = undefined;
            //         reportError(
            //             Diagnostics._0_could_be_instantiated_with_an_arbitrary_type_which_could_be_unrelated_to_1,
            //             targetType,
            //             generalizedSourceType,
            //         );
            //     }
            // }

            if (!message) {
                if (relation === comparableRelation) {
                    message = Diagnostics.Type_0_is_not_comparable_to_type_1;
                }
                else if (sourceType === targetType) {
                    message = Diagnostics.Type_0_is_not_assignable_to_type_1_Two_different_types_with_this_name_exist_but_they_are_unrelated;
                }
                // else if (exactOptionalPropertyTypes && getExactOptionalUnassignableProperties(source, target).length) {
                //     message = Diagnostics.Type_0_is_not_assignable_to_type_1_with_exactOptionalPropertyTypes_Colon_true_Consider_adding_undefined_to_the_types_of_the_target_s_properties;
                // }
                else {
                    if (source.flags & TypeFlags.StringLiteral && target.flags & TypeFlags.Union) {
                        const suggestedType = getSuggestedTypeForNonexistentStringLiteralType(source as StringLiteralType, target as UnionType);
                        if (suggestedType) {
                            reportError(Diagnostics.Type_0_is_not_assignable_to_type_1_Did_you_mean_2, generalizedSourceType, targetType, typeToString(suggestedType));
                            return;
                        }
                    }
                    message = Diagnostics.Type_0_is_not_assignable_to_type_1;
                }
            }
            // else if (
            //     message === Diagnostics.Argument_of_type_0_is_not_assignable_to_parameter_of_type_1
            //     && exactOptionalPropertyTypes
            //     && getExactOptionalUnassignableProperties(source, target).length
            // ) {
            //     message = Diagnostics.Argument_of_type_0_is_not_assignable_to_parameter_of_type_1_with_exactOptionalPropertyTypes_Colon_true_Consider_adding_undefined_to_the_types_of_the_target_s_properties;
            // }

            reportError(message, generalizedSourceType, targetType);
        }

        function reportError(message: DiagnosticMessage, ...args: DiagnosticArguments): void {
            Debug.assert(!!errorNode);
            if (incompatibleStack) reportIncompatibleStack();
            if (message.elidedInCompatabilityPyramid) return;
            if (skipParentCounter === 0) {
                errorInfo = chainDiagnosticMessages(errorInfo, message, ...args);
            }
            else {
                skipParentCounter--;
            }
        }

        /**
         * Try and elaborate array and tuple errors. Returns false
         * if we have found an elaboration, or we should ignore
         * any other elaborations when relating the `source` and
         * `target` types.
         */
        function tryElaborateArrayLikeErrors(source: Type, target: Type, reportErrors: boolean): boolean {
            /**
             * The spec for elaboration is:
             * - If the source is a readonly tuple and the target is a mutable array or tuple, elaborate on mutability and skip property elaborations.
             * - If the source is a tuple then skip property elaborations if the target is an array or tuple.
             * - If the source is a readonly array and the target is a mutable array or tuple, elaborate on mutability and skip property elaborations.
             * - If the source an array then skip property elaborations if the target is a tuple.
             */
            // if (isTupleType(source)) {
            //     if (source.target.readonly && isMutableArrayOrTuple(target)) {
            //         if (reportErrors) {
            //             reportError(Diagnostics.The_type_0_is_readonly_and_cannot_be_assigned_to_the_mutable_type_1, typeToString(source), typeToString(target));
            //         }
            //         return false;
            //     }
            //     return isArrayOrTupleType(target);
            // }
            // if (isReadonlyArrayType(source) && isMutableArrayOrTuple(target)) {
            //     if (reportErrors) {
            //         reportError(Diagnostics.The_type_0_is_readonly_and_cannot_be_assigned_to_the_mutable_type_1, typeToString(source), typeToString(target));
            //     }
            //     return false;
            // }
            // if (isTupleType(target)) {
            //     return isArrayType(source);
            // }
            return true;
        }

        function tryElaborateErrorsForPrimitivesAndObjects(source: Type, target: Type) {
            const sourceType = symbolValueDeclarationIsContextSensitive(source.symbol) ? typeToString(source, source.symbol.valueDeclaration) : typeToString(source);
            const targetType = symbolValueDeclarationIsContextSensitive(target.symbol) ? typeToString(target, target.symbol.valueDeclaration) : typeToString(target);

            if (
                (globalStringType === source && stringType === target) ||
                (globalIntType === source && intType === target) ||
                (globalFloatType === source && floatType === target) 
                //(globalBooleanType === source && booleanType === target) ||
                //(getGlobalESSymbolType() === source && esSymbolType === target)
            ) {
                reportError(Diagnostics._0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible, targetType, sourceType);
            }
        }


        function reportErrorResults(originalSource: Type, originalTarget: Type, source: Type, target: Type, headMessage: DiagnosticMessage | undefined) {
            const sourceHasBase = !!getSingleBaseForNonAugmentingSubtype(originalSource);
            const targetHasBase = !!getSingleBaseForNonAugmentingSubtype(originalTarget);
            source = (originalSource.aliasSymbol || sourceHasBase) ? originalSource : source;
            target = (originalTarget.aliasSymbol || targetHasBase) ? originalTarget : target;
            let maybeSuppress = overrideNextErrorInfo > 0;
            if (maybeSuppress) {
                overrideNextErrorInfo--;
            }
            if (source.flags & TypeFlags.Object && target.flags & TypeFlags.Object) {
                const currentError = errorInfo;
                tryElaborateArrayLikeErrors(source, target, /*reportErrors*/ true);
                if (errorInfo !== currentError) {
                    maybeSuppress = !!errorInfo;
                }
            }
            if (source.flags & TypeFlags.Object && target.flags & TypeFlags.Primitive) {
                tryElaborateErrorsForPrimitivesAndObjects(source, target);
            }
            else if (source.symbol && source.flags & TypeFlags.Object && globalObjectType === source) {
                reportError(Diagnostics.The_Object_type_is_assignable_to_very_few_other_types_Did_you_mean_to_use_the_any_type_instead);
            }            
            // else {
            //     errorInfo = elaborateNeverIntersection(errorInfo, originalTarget);
            // }
            // Used by, eg, missing property checking to replace the top-level message with a more informative one.
            if (!headMessage && maybeSuppress) {
                // We suppress a call to `reportRelationError` or not depending on the state of the type checker, so
                // we call `reportRelationError` here and then undo its effects to figure out what would be the diagnostic
                // if we hadn't supress it, and save that as a canonical diagnostic for deduplication purposes.
                const savedErrorState = captureErrorCalculationState();
                reportRelationError(headMessage, source, target);
                let canonical;
                if (errorInfo && errorInfo !== savedErrorState.errorInfo) {
                    canonical = { code: errorInfo.code, messageText: errorInfo.messageText };
                }
                resetErrorInfo(savedErrorState);
                if (canonical && errorInfo) {
                    errorInfo.canonicalHead = canonical;
                }

                lastSkippedInfo = [source, target];
                return;
            }
            reportRelationError(headMessage, source, target);
            // if (source.flags & TypeFlags.TypeParameter && source.symbol?.declarations?.[0] && !getConstraintOfType(source as TypeVariable)) {
            //     const syntheticParam = cloneTypeParameter(source as TypeParameter);
            //     syntheticParam.constraint = instantiateType(target, makeUnaryTypeMapper(source, syntheticParam));
            //     if (hasNonCircularBaseConstraint(syntheticParam)) {
            //         const targetConstraintString = typeToString(target, source.symbol.declarations[0]);
            //         associateRelatedInfo(createDiagnosticForNode(source.symbol.declarations[0], Diagnostics.This_type_parameter_might_need_an_extends_0_constraint, targetConstraintString));
            //     }
            // }
        }

        /**
         * Compare two types and return
         * * Ternary.True if they are related with no assumptions,
         * * Ternary.Maybe if they are related with assumptions of other relationships, or
         * * Ternary.False if they are not related.
         */
        function isRelatedTo(originalSource: Type, originalTarget: Type, recursionFlags: RecursionFlags = RecursionFlags.Both, reportErrors = false, headMessage?: DiagnosticMessage, intersectionState = IntersectionState.None): Ternary {
            if (originalSource === originalTarget) return Ternary.True;

            // Before normalization: if `source` is type an object type, and `target` is primitive,
            // skip all the checks we don't need and just return `isSimpleTypeRelatedTo` result
            if (originalSource.flags & TypeFlags.Object && originalTarget.flags & TypeFlags.Primitive) {
                if (
                    relation === comparableRelation && !(originalTarget.flags & TypeFlags.Never) && isSimpleTypeRelatedTo(originalTarget, originalSource, relation) ||
                    isSimpleTypeRelatedTo(originalSource, originalTarget, relation, reportErrors ? reportError : undefined)
                ) {
                    return Ternary.True;
                }
                if (reportErrors) {
                    reportErrorResults(originalSource, originalTarget, originalSource, originalTarget, headMessage);
                }
                return Ternary.False;
            }

            // Normalize the source and target types: Turn fresh literal types into regular literal types,
            // turn deferred type references into regular type references, simplify indexed access and
            // conditional types, and resolve substitution types to either the substitution (on the source
            // side) or the type variable (on the target side).
            const source = getNormalizedType(originalSource, /*writing*/ false);
            let target = getNormalizedType(originalTarget, /*writing*/ true);

            if (source === target) return Ternary.True;

            if (relation === identityRelation) {
                if (source.flags !== target.flags) return Ternary.False;
                if (source.flags & TypeFlags.Singleton) return Ternary.True;
                traceUnionsOrIntersectionsTooLarge(source, target);
                return recursiveTypeRelatedTo(source, target, /*reportErrors*/ false, IntersectionState.None, recursionFlags);
            }

            // We fastpath comparing a type parameter to exactly its constraint, as this is _super_ common,
            // and otherwise, for type parameters in large unions, causes us to need to compare the union to itself,
            // as we break down the _target_ union first, _then_ get the source constraint - so for every
            // member of the target, we attempt to find a match in the source. This avoids that in cases where
            // the target is exactly the constraint.
            // if (source.flags & TypeFlags.TypeParameter && getConstraintOfType(source) === target) {
            //     return Ternary.True;
            // }

            // See if we're relating a definitely non-nullable type to a union that includes null and/or undefined
            // plus a single non-nullable type. If so, remove null and/or undefined from the target type.
            if (source.flags & TypeFlags.DefinitelyNonNullable && target.flags & TypeFlags.Union) {
                const types = (target as UnionType).types;
                const candidate = types.length === 2 && types[0].flags & TypeFlags.Nullable ? types[1] :
                    types.length === 3 && types[0].flags & TypeFlags.Nullable && types[1].flags & TypeFlags.Nullable ? types[2] :
                    undefined;
                if (candidate && !(candidate.flags & TypeFlags.Nullable)) {
                    target = getNormalizedType(candidate, /*writing*/ true);
                    if (source === target) return Ternary.True;
                }
            }

            if (
                relation === comparableRelation && !(target.flags & TypeFlags.Never) && isSimpleTypeRelatedTo(target, source, relation) ||
                isSimpleTypeRelatedTo(source, target, relation, reportErrors ? reportError : undefined)
            ) return Ternary.True;

            if (source.flags & TypeFlags.StructuredOrInstantiable || target.flags & TypeFlags.StructuredOrInstantiable) {
                const isPerformingExcessPropertyChecks = !(intersectionState & IntersectionState.Target) && (isObjectLiteralType(source) && getObjectFlags(source) & ObjectFlags.FreshLiteral);
                if (isPerformingExcessPropertyChecks) {
                    if (hasExcessProperties(source as FreshObjectLiteralType, target, reportErrors)) {
                        if (reportErrors) {
                            reportRelationError(headMessage, source, originalTarget.aliasSymbol ? originalTarget : target);
                        }
                        return Ternary.False;
                    }
                }

                const isPerformingCommonPropertyChecks = (relation !== comparableRelation || isUnitType(source)) &&
                    !(intersectionState & IntersectionState.Target) &&
                    source.flags & (TypeFlags.Primitive | TypeFlags.Object | TypeFlags.Intersection) && source !== globalObjectType &&
                    target.flags & (TypeFlags.Object | TypeFlags.Intersection) && isWeakType(target) &&
                    (getPropertiesOfType(source).length > 0 || typeHasCallOrConstructSignatures(source));
                const isComparingJsxAttributes = !!(getObjectFlags(source) & ObjectFlags.JsxAttributes);
                if (isPerformingCommonPropertyChecks && !hasCommonProperties(source, target, isComparingJsxAttributes)) {
                    if (reportErrors) {
                        const sourceString = typeToString(originalSource.aliasSymbol ? originalSource : source);
                        const targetString = typeToString(originalTarget.aliasSymbol ? originalTarget : target);
                        const calls = getSignaturesOfType(source, SignatureKind.Call);
                        const constructs = getSignaturesOfType(source, SignatureKind.Construct);
                        if (
                            calls.length > 0 && isRelatedTo(getReturnTypeOfSignature(calls[0]), target, RecursionFlags.Source, /*reportErrors*/ false) ||
                            constructs.length > 0 && isRelatedTo(getReturnTypeOfSignature(constructs[0]), target, RecursionFlags.Source, /*reportErrors*/ false)
                        ) {
                            reportError(Diagnostics.Value_of_type_0_has_no_properties_in_common_with_type_1_Did_you_mean_to_call_it, sourceString, targetString);
                        }
                        else {
                            reportError(Diagnostics.Type_0_has_no_properties_in_common_with_type_1, sourceString, targetString);
                        }
                    }
                    return Ternary.False;
                }

                traceUnionsOrIntersectionsTooLarge(source, target);

                const skipCaching = source.flags & TypeFlags.Union && (source as UnionType).types.length < 4 && !(target.flags & TypeFlags.Union) ||
                    target.flags & TypeFlags.Union && (target as UnionType).types.length < 4 && !(source.flags & TypeFlags.StructuredOrInstantiable);
                const result = skipCaching ?
                    unionOrIntersectionRelatedTo(source, target, reportErrors, intersectionState) :
                    recursiveTypeRelatedTo(source, target, reportErrors, intersectionState, recursionFlags);
                if (result) {
                    return result;
                }
            }

            if (reportErrors) {
                reportErrorResults(originalSource, originalTarget, source, target, headMessage);
            }
            return Ternary.False;
        }

        function someTypeRelatedToType(source: UnionOrIntersectionType, target: Type, reportErrors: boolean, intersectionState: IntersectionState): Ternary {
            const sourceTypes = source.types;
            if (source.flags & TypeFlags.Union && containsType(sourceTypes, target)) {
                return Ternary.True;
            }
            const len = sourceTypes.length;
            for (let i = 0; i < len; i++) {
                const related = isRelatedTo(sourceTypes[i], target, RecursionFlags.Source, reportErrors && i === len - 1, /*headMessage*/ undefined, intersectionState);
                if (related) {
                    return related;
                }
            }
            return Ternary.False;
        }

        function getUndefinedStrippedTargetIfNeeded(source: Type, target: Type) {
            if (
                source.flags & TypeFlags.Union && target.flags & TypeFlags.Union &&
                !((source as UnionType).types[0].flags & TypeFlags.Undefined) && (target as UnionType).types[0].flags & TypeFlags.Undefined
            ) {
                return extractTypesOfKind(target, ~TypeFlags.Undefined);
            }
            return target;
        }

        function eachTypeRelatedToType(source: UnionOrIntersectionType, target: Type, reportErrors: boolean, intersectionState: IntersectionState): Ternary {
            let result = Ternary.True;
            const sourceTypes = source.types;
            // We strip `undefined` from the target if the `source` trivially doesn't contain it for our correspondence-checking fastpath
            // since `undefined` is frequently added by optionality and would otherwise spoil a potentially useful correspondence
            const undefinedStrippedTarget = getUndefinedStrippedTargetIfNeeded(source, target as UnionType);
            for (let i = 0; i < sourceTypes.length; i++) {
                const sourceType = sourceTypes[i];
                if (undefinedStrippedTarget.flags & TypeFlags.Union && sourceTypes.length >= (undefinedStrippedTarget as UnionType).types.length && sourceTypes.length % (undefinedStrippedTarget as UnionType).types.length === 0) {
                    // many unions are mappings of one another; in such cases, simply comparing members at the same index can shortcut the comparison
                    // such unions will have identical lengths, and their corresponding elements will match up. Another common scenario is where a large
                    // union has a union of objects intersected with it. In such cases, if the input was, eg `("a" | "b" | "c") & (string | boolean | {} | {whatever})`,
                    // the result will have the structure `"a" | "b" | "c" | "a" & {} | "b" & {} | "c" & {} | "a" & {whatever} | "b" & {whatever} | "c" & {whatever}`
                    // - the resulting union has a length which is a multiple of the original union, and the elements correspond modulo the length of the original union
                    const related = isRelatedTo(sourceType, (undefinedStrippedTarget as UnionType).types[i % (undefinedStrippedTarget as UnionType).types.length], RecursionFlags.Both, /*reportErrors*/ false, /*headMessage*/ undefined, intersectionState);
                    if (related) {
                        result &= related;
                        continue;
                    }
                }
                const related = isRelatedTo(sourceType, target, RecursionFlags.Source, reportErrors, /*headMessage*/ undefined, intersectionState);
                if (!related) {
                    return Ternary.False;
                }
                result &= related;
            }
            return result;
        }

        function typeRelatedToSomeType(source: Type, target: UnionOrIntersectionType, reportErrors: boolean, intersectionState: IntersectionState): Ternary {
            const targetTypes = target.types;
            if (target.flags & TypeFlags.Union) {
                if (containsType(targetTypes, source)) {
                    return Ternary.True;
                }
                if (
                    relation !== comparableRelation && getObjectFlags(target) & ObjectFlags.PrimitiveUnion && !(source.flags & TypeFlags.EnumLiteral) && (
                        source.flags & (TypeFlags.StringLiteral | TypeFlags.IntLiteral | TypeFlags.FloatLiteral) ||
                        (relation === subtypeRelation || relation === strictSubtypeRelation) && source.flags & TypeFlags.IntLiteral
                    )
                ) {
                    // When relating a literal type to a union of primitive types, we know the relation is false unless
                    // the union contains the base primitive type or the literal type in one of its fresh/regular forms.
                    // We exclude numeric literals for non-subtype relations because numeric literals are assignable to
                    // numeric enum literals with the same value. Similarly, we exclude enum literal types because
                    // identically named enum types are related (see isEnumTypeRelatedTo). We exclude the comparable
                    // relation in entirety because it needs to be checked in both directions.
                    const alternateForm = source === (source as StringLiteralType).regularType ? (source as StringLiteralType).freshType : (source as StringLiteralType).regularType;
                    const primitive = source.flags & TypeFlags.StringLiteral ? stringType :
                        source.flags & TypeFlags.IntLiteral ? intType :
                        source.flags & TypeFlags.FloatLiteral ? floatType :
                        undefined;
                    return primitive && containsType(targetTypes, primitive) || alternateForm && containsType(targetTypes, alternateForm) ? Ternary.True : Ternary.False;
                }
                const match = getMatchingUnionConstituentForType(target as UnionType, source);
                if (match) {
                    const related = isRelatedTo(source, match, RecursionFlags.Target, /*reportErrors*/ false, /*headMessage*/ undefined, intersectionState);
                    if (related) {
                        return related;
                    }
                }
            }
            for (const type of targetTypes) {
                const related = isRelatedTo(source, type, RecursionFlags.Target, /*reportErrors*/ false, /*headMessage*/ undefined, intersectionState);
                if (related) {
                    return related;
                }
            }
            if (reportErrors) {
                // Elaborate only if we can find a best matching type in the target union
                const bestMatchingType = getBestMatchingType(source, target, isRelatedTo);
                if (bestMatchingType) {
                    isRelatedTo(source, bestMatchingType, RecursionFlags.Target, /*reportErrors*/ true, /*headMessage*/ undefined, intersectionState);
                }
            }
            return Ternary.False;
        }

        function unionOrIntersectionRelatedTo(source: Type, target: Type, reportErrors: boolean, intersectionState: IntersectionState): Ternary {
            // Note that these checks are specifically ordered to produce correct results. In particular,
            // we need to deconstruct unions before intersections (because unions are always at the top),
            // and we need to handle "each" relations before "some" relations for the same kind of type.
            if (source.flags & TypeFlags.Union) {
                if (target.flags & TypeFlags.Union) {
                    // Intersections of union types are normalized into unions of intersection types, and such normalized
                    // unions can get very large and expensive to relate. The following fast path checks if the source union
                    // originated in an intersection. If so, and if that intersection contains the target type, then we know
                    // the result to be true (for any two types A and B, A & B is related to both A and B).
                    const sourceOrigin = (source as UnionType).origin;
                    // if (sourceOrigin && sourceOrigin.flags & TypeFlags.Intersection && target.aliasSymbol && contains((sourceOrigin as IntersectionType).types, target)) {
                    //     return Ternary.True;
                    // }
                    // Similarly, in unions of unions the we preserve the original list of unions. This original list is often
                    // much shorter than the normalized result, so we scan it in the following fast path.
                    const targetOrigin = (target as UnionType).origin;
                    if (targetOrigin && targetOrigin.flags & TypeFlags.Union && source.aliasSymbol && contains((targetOrigin as UnionType).types, source)) {
                        return Ternary.True;
                    }
                }
                return relation === comparableRelation ?
                    someTypeRelatedToType(source as UnionType, target, reportErrors && !(source.flags & TypeFlags.Primitive), intersectionState) :
                    eachTypeRelatedToType(source as UnionType, target, reportErrors && !(source.flags & TypeFlags.Primitive), intersectionState);
            }
            if (target.flags & TypeFlags.Union) {
                return typeRelatedToSomeType(getRegularTypeOfObjectLiteral(source), target as UnionType, reportErrors && !(source.flags & TypeFlags.Primitive) && !(target.flags & TypeFlags.Primitive), intersectionState);
            }
            // if (target.flags & TypeFlags.Intersection) {
            //     return typeRelatedToEachType(source, target as IntersectionType, reportErrors, IntersectionState.Target);
            // }
            // Source is an intersection. For the comparable relation, if the target is a primitive type we hoist the
            // constraints of all non-primitive types in the source into a new intersection. We do this because the
            // intersection may further constrain the constraints of the non-primitive types. For example, given a type
            // parameter 'T extends 1 | 2', the intersection 'T & 1' should be reduced to '1' such that it doesn't
            // appear to be comparable to '2'.
            if (relation === comparableRelation && target.flags & TypeFlags.Primitive) {
                // const constraints = sameMap((source as IntersectionType).types, t => t.flags & TypeFlags.Instantiable ? getBaseConstraintOfType(t) || unknownType : t);
                // if (constraints !== (source as IntersectionType).types) {
                //     source = getIntersectionType(constraints);
                //     if (source.flags & TypeFlags.Never) {
                //         return Ternary.False;
                //     }
                //     if (!(source.flags & TypeFlags.Intersection)) {
                //         return isRelatedTo(source, target, RecursionFlags.Source, /*reportErrors*/ false) ||
                //             isRelatedTo(target, source, RecursionFlags.Source, /*reportErrors*/ false);
                //     }
                // }
            }
            // Check to see if any constituents of the intersection are immediately related to the target.
            // Don't report errors though. Elaborating on whether a source constituent is related to the target is
            // not actually useful and leads to some confusing error messages. Instead, we rely on the caller
            // checking whether the full intersection viewed as an object is related to the target.
            //return someTypeRelatedToType(source as IntersectionType, target, /*reportErrors*/ false, IntersectionState.Source);
            Debug.fail("no interesctions - shouldn't be here");
        }

        function shouldCheckAsExcessProperty(prop: Symbol, container: Symbol) {
            return prop.valueDeclaration && container.valueDeclaration && prop.valueDeclaration.parent === container.valueDeclaration;
        }

        function reportParentSkippedError(message: DiagnosticMessage, ...args: DiagnosticArguments): void {
            reportError(message, ...args);
            skipParentCounter++;
        }

        function hasExcessProperties(source: FreshObjectLiteralType, target: Type, reportErrors: boolean): boolean {
            if (!isExcessPropertyCheckTarget(target) || !noImplicitAny && getObjectFlags(target) & ObjectFlags.JSLiteral) {
                return false; // Disable excess property checks on JS literals to simulate having an implicit "index signature" - but only outside of noImplicitAny
            }
            const isComparingJsxAttributes = !!(getObjectFlags(source) & ObjectFlags.JsxAttributes);
            if (
                (relation === assignableRelation || relation === comparableRelation) &&
                (isTypeSubsetOf(globalObjectType, target) || (!isComparingJsxAttributes && isEmptyObjectType(target)))
            ) {
                return false;
            }
            let reducedTarget = target;
            let checkTypes: Type[] | undefined;
            if (target.flags & TypeFlags.Union) {
                reducedTarget = findMatchingDiscriminantType(source, target as UnionType, isRelatedTo) || filterPrimitivesIfContainsNonPrimitive(target as UnionType);
                checkTypes = reducedTarget.flags & TypeFlags.Union ? (reducedTarget as UnionType).types : [reducedTarget];
            }
            for (const prop of getPropertiesOfType(source)) {
                if (shouldCheckAsExcessProperty(prop, source.symbol)) {
                    if (!isKnownProperty(reducedTarget, prop.name, isComparingJsxAttributes)) {
                        if (reportErrors) {
                            // Report error in terms of object types in the target as those are the only ones
                            // we check in isKnownProperty.
                            const errorTarget = filterType(reducedTarget, isExcessPropertyCheckTarget);
                            // We know *exactly* where things went wrong when comparing the types.
                            // Use this property as the error node as this will be more helpful in
                            // reasoning about what went wrong.
                            if (!errorNode) return Debug.fail();
                            // if (isJsxAttributes(errorNode) || isJsxOpeningLikeElement(errorNode) || isJsxOpeningLikeElement(errorNode.parent)) {
                            //     // JsxAttributes has an object-literal flag and undergo same type-assignablity check as normal object-literal.
                            //     // However, using an object-literal error message will be very confusing to the users so we give different a message.
                            //     if (prop.valueDeclaration && isJsxAttribute(prop.valueDeclaration) && getSourceFileOfNode(errorNode) === getSourceFileOfNode(prop.valueDeclaration.name)) {
                            //         // Note that extraneous children (as in `<NoChild>extra</NoChild>`) don't pass this check,
                            //         // since `children` is a SyntaxKind.PropertySignature instead of a SyntaxKind.JsxAttribute.
                            //         errorNode = prop.valueDeclaration.name;
                            //     }
                            //     const propName = symbolToString(prop);
                            //     const suggestionSymbol = getSuggestedSymbolForNonexistentJSXAttribute(propName, errorTarget);
                            //     const suggestion = suggestionSymbol ? symbolToString(suggestionSymbol) : undefined;
                            //     if (suggestion) {
                            //         reportError(Diagnostics.Property_0_does_not_exist_on_type_1_Did_you_mean_2, propName, typeToString(errorTarget), suggestion);
                            //     }
                            //     else {
                            //         reportError(Diagnostics.Property_0_does_not_exist_on_type_1, propName, typeToString(errorTarget));
                            //     }
                            // } else
                            {
                                // use the property's value declaration if the property is assigned inside the literal itself
                                const objectLiteralDeclaration = source.symbol?.declarations && firstOrUndefined(source.symbol.declarations);
                                let suggestion: string | undefined;
                                if (prop.valueDeclaration && findAncestor(prop.valueDeclaration, d => d === objectLiteralDeclaration) && getSourceFileOfNode(objectLiteralDeclaration) === getSourceFileOfNode(errorNode)) {
                                    const propDeclaration = prop.valueDeclaration as ObjectLiteralElementLike;
                                    //Debug.assertNode(propDeclaration, isObjectLiteralElementLike);

                                    const name = propDeclaration.name!;
                                    errorNode = name;

                                    if (isIdentifier(name)) {
                                        suggestion = getSuggestionForNonexistentProperty(name, errorTarget);
                                    }
                                }
                                if (suggestion !== undefined) {
                                    reportParentSkippedError(Diagnostics.Object_literal_may_only_specify_known_properties_but_0_does_not_exist_in_type_1_Did_you_mean_to_write_2, symbolToString(prop), typeToString(errorTarget), suggestion);
                                }
                                else {
                                    reportParentSkippedError(Diagnostics.Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1, symbolToString(prop), typeToString(errorTarget));
                                }
                            }
                        }
                        return true;
                    }
                    // if (checkTypes && !isRelatedTo(getTypeOfSymbol(prop), getTypeOfPropertyInTypes(checkTypes, prop.name), RecursionFlags.Both, reportErrors)) {
                    //     if (reportErrors) {
                    //         reportIncompatibleError(Diagnostics.Types_of_property_0_are_incompatible, symbolToString(prop));
                    //     }
                    //     return true;
                    // }
                }
            }
            return false;
        }

        function structuredTypeRelatedTo(source: Type, target: Type, reportErrors: boolean, intersectionState: IntersectionState): Ternary {
            return Ternary.True;
        }

        // Determine if possibly recursive types are related. First, check if the result is already available in the global cache.
        // Second, check if we have already started a comparison of the given two types in which case we assume the result to be true.
        // Third, check if both types are part of deeply nested chains of generic type instantiations and if so assume the types are
        // equal and infinitely expanding. Fourth, if we have reached a depth of 100 nested comparisons, assume we have runaway recursion
        // and issue an error. Otherwise, actually compare the structure of the two types.
        function recursiveTypeRelatedTo(source: Type, target: Type, reportErrors: boolean, intersectionState: IntersectionState, recursionFlags: RecursionFlags): Ternary {
            if (overflow) {
                return Ternary.False;
            }
            const id = getRelationKey(source, target, intersectionState, relation, /*ignoreConstraints*/ false);
            const entry = relation.get(id);
            if (entry !== undefined) {
                if (reportErrors && entry & RelationComparisonResult.Failed && !(entry & RelationComparisonResult.Overflow)) {
                    // We are elaborating errors and the cached result is a failure not due to a comparison overflow,
                    // so we will do the comparison again to generate an error message.
                }
                else {
                    console.warn("implement me - additional checks");
                    // if (outofbandVarianceMarkerHandler) {
                    //     // We're in the middle of variance checking - integrate any unmeasurable/unreliable flags from this cached component
                    //     const saved = entry & RelationComparisonResult.ReportsMask;
                    //     if (saved & RelationComparisonResult.ReportsUnmeasurable) {
                    //         instantiateType(source, reportUnmeasurableMapper);
                    //     }
                    //     if (saved & RelationComparisonResult.ReportsUnreliable) {
                    //         instantiateType(source, reportUnreliableMapper);
                    //     }
                    // }
                    // if (reportErrors && entry & RelationComparisonResult.Overflow) {
                    //     const message = entry & RelationComparisonResult.ComplexityOverflow ?
                    //         Diagnostics.Excessive_complexity_comparing_types_0_and_1 :
                    //         Diagnostics.Excessive_stack_depth_comparing_types_0_and_1;
                    //     reportError(message, typeToString(source), typeToString(target));
                    //     overrideNextErrorInfo++;
                    // }
                    return entry & RelationComparisonResult.Succeeded ? Ternary.True : Ternary.False;
                }
            }
            if (relationCount <= 0) {
                overflow = true;
                return Ternary.False;
            }
            if (!maybeKeys) {
                maybeKeys = [];
                maybeKeysSet = new Set();
                sourceStack = [];
                targetStack = [];
            }
            else {
                // If source and target are already being compared, consider them related with assumptions
                if (maybeKeysSet.has(id)) {
                    return Ternary.Maybe;
                }

                // A key that starts with "*" is an indication that we have type references that reference constrained
                // type parameters. For such keys we also check against the key we would have gotten if all type parameters
                // were unconstrained.
                const broadestEquivalentId = id.startsWith("*") ? getRelationKey(source, target, intersectionState, relation, /*ignoreConstraints*/ true) : undefined;
                if (broadestEquivalentId && maybeKeysSet.has(broadestEquivalentId)) {
                    return Ternary.Maybe;
                }

                if (sourceDepth === 100 || targetDepth === 100) {
                    overflow = true;
                    return Ternary.False;
                }
            }
            const maybeStart = maybeCount;
            maybeKeys[maybeCount] = id;
            maybeKeysSet.add(id);
            maybeCount++;
            const saveExpandingFlags = expandingFlags;
            if (recursionFlags & RecursionFlags.Source) {
                sourceStack[sourceDepth] = source;
                sourceDepth++;
                if (!(expandingFlags & ExpandingFlags.Source) && isDeeplyNestedType(source, sourceStack, sourceDepth)) expandingFlags |= ExpandingFlags.Source;
            }
            if (recursionFlags & RecursionFlags.Target) {
                targetStack[targetDepth] = target;
                targetDepth++;
                if (!(expandingFlags & ExpandingFlags.Target) && isDeeplyNestedType(target, targetStack, targetDepth)) expandingFlags |= ExpandingFlags.Target;
            }
            let originalHandler: typeof outofbandVarianceMarkerHandler;
            let propagatingVarianceFlags = 0 as RelationComparisonResult;
            if (outofbandVarianceMarkerHandler) {
                originalHandler = outofbandVarianceMarkerHandler;
                outofbandVarianceMarkerHandler = onlyUnreliable => {
                    propagatingVarianceFlags |= onlyUnreliable ? RelationComparisonResult.ReportsUnreliable : RelationComparisonResult.ReportsUnmeasurable;
                    return originalHandler!(onlyUnreliable);
                };
            }

            let result: Ternary;
            if (expandingFlags === ExpandingFlags.Both) {
                tracing?.instant(tracing.Phase.CheckTypes, "recursiveTypeRelatedTo_DepthLimit", {
                    sourceId: source.id,
                    sourceIdStack: sourceStack.map(t => t.id),
                    targetId: target.id,
                    targetIdStack: targetStack.map(t => t.id),
                    depth: sourceDepth,
                    targetDepth,
                });
                result = Ternary.Maybe;
            }
            else {
                tracing?.push(tracing.Phase.CheckTypes, "structuredTypeRelatedTo", { sourceId: source.id, targetId: target.id });
                result = structuredTypeRelatedTo(source, target, reportErrors, intersectionState);
                tracing?.pop();
            }

            if (outofbandVarianceMarkerHandler) {
                outofbandVarianceMarkerHandler = originalHandler;
            }
            if (recursionFlags & RecursionFlags.Source) {
                sourceDepth--;
            }
            if (recursionFlags & RecursionFlags.Target) {
                targetDepth--;
            }
            expandingFlags = saveExpandingFlags;
            if (result) {
                if (result === Ternary.True || (sourceDepth === 0 && targetDepth === 0)) {
                    if (result === Ternary.True || result === Ternary.Maybe) {
                        // If result is definitely true, record all maybe keys as having succeeded. Also, record Ternary.Maybe
                        // results as having succeeded once we reach depth 0, but never record Ternary.Unknown results.
                        resetMaybeStack(/*markAllAsSucceeded*/ true);
                    }
                    else {
                        resetMaybeStack(/*markAllAsSucceeded*/ false);
                    }
                }
                // Note: it's intentional that we don't reset in the else case;
                // we leave them on the stack such that when we hit depth zero
                // above, we can report all of them as successful.
            }
            else {
                // A false result goes straight into global cache (when something is false under
                // assumptions it will also be false without assumptions)
                relation.set(id, RelationComparisonResult.Failed | propagatingVarianceFlags);
                relationCount--;
                resetMaybeStack(/*markAllAsSucceeded*/ false);
            }
            return result;

            function resetMaybeStack(markAllAsSucceeded: boolean) {
                for (let i = maybeStart; i < maybeCount; i++) {
                    maybeKeysSet.delete(maybeKeys[i]);
                    if (markAllAsSucceeded) {
                        relation.set(maybeKeys[i], RelationComparisonResult.Succeeded | propagatingVarianceFlags);
                        relationCount--;
                    }
                }
                maybeCount = maybeStart;
            }
        }
    }
    
    function getNormalizedType(type: Type, writing: boolean): Type {
        while (true) {
            const t = isFreshLiteralType(type) ? (type as FreshableType).regularType :
                //isGenericTupleType(type) ? getNormalizedTupleType(type, writing) :
                getObjectFlags(type) & ObjectFlags.Reference ? (type as TypeReference).node ? createTypeReference((type as TypeReference).target, getTypeArguments(type as TypeReference)) : getSingleBaseForNonAugmentingSubtype(type) || type :
                type.flags & TypeFlags.UnionOrIntersection ? getNormalizedUnionOrIntersectionType(type as UnionOrIntersectionType, writing) :
                type.flags & TypeFlags.Substitution ? writing ? (type as SubstitutionType).baseType : getSubstitutionIntersection(type as SubstitutionType) :
                type.flags & TypeFlags.Simplifiable ? getSimplifiedType(type, writing) :
                type;
            if (t === type) return t;
            type = t;
        }
    }

    

    function getSimplifiedType(type: Type, writing: boolean): Type {
        // return type.flags & TypeFlags.IndexedAccess ? getSimplifiedIndexedAccessType(type as IndexedAccessType, writing) :
        //     type.flags & TypeFlags.Conditional ? getSimplifiedConditionalType(type as ConditionalType, writing) :
        return type;
    }

    function getSubstitutionIntersection(substitutionType: SubstitutionType) {
        // TODO
        return substitutionType.baseType;//return isNoInferType(substitutionType) ? substitutionType.baseType : getIntersectionType([substitutionType.constraint, substitutionType.baseType]);
    }

    /**
     * To improve caching, the relation key for two generic types uses the target's id plus ids of the type parameters.
     * For other cases, the types ids are used.
     */
    function getRelationKey(source: Type, target: Type, intersectionState: IntersectionState, relation: Map<string, RelationComparisonResult>, ignoreConstraints: boolean) {
        if (relation === identityRelation && source.id > target.id) {
            const temp = source;
            source = target;
            target = temp;
        }
        const postFix = intersectionState ? ":" + intersectionState : "";
        return `${source.id},${target.id}${postFix}`;
    }

    function isTypeAssignableTo(source: Type, target: Type): boolean {
        return isTypeRelatedTo(source, target, assignableRelation);
    }

    function isTypeAssignableToKind(source: Type, kind: TypeFlags, strict?: boolean): boolean {
        if (source.flags & kind) {
            return true;
        }
        if (strict && source.flags & (TypeFlags.AnyOrUnknown | TypeFlags.Void | TypeFlags.Undefined | TypeFlags.Null)) {
            return false;
        }
        return !!(kind & TypeFlags.NumberLike) && isTypeAssignableTo(source, intType) ||            
            !!(kind & TypeFlags.NumberLike) && isTypeAssignableTo(source, floatType) ||
            !!(kind & TypeFlags.StringLike) && isTypeAssignableTo(source, stringType) ||
            //!!(kind & TypeFlags.BooleanLike) && isTypeAssignableTo(source, booleanType) ||
            //!!(kind & TypeFlags.Void) && isTypeAssignableTo(source, voidType) ||
            !!(kind & TypeFlags.Never) && isTypeAssignableTo(source, neverType) ||            
            !!(kind & TypeFlags.Undefined) && isTypeAssignableTo(source, undefinedType) ||
            //!!(kind & TypeFlags.ESSymbol) && isTypeAssignableTo(source, esSymbolType) ||
            !!(kind & TypeFlags.NonPrimitive) && isTypeAssignableTo(source, nonPrimitiveType);
    }


    // Return true if the given node is 'x' in an 'x.length', x.push(value)', 'x.unshift(value)' or
    // 'x[n] = value' operation, where 'n' is an expression of type any, undefined, or a number-like type.
    function isEvolvingArrayOperationTarget(node: Node) {
        const root = getReferenceRoot(node);
        const parent = root.parent;        
        const isElementAssignment = parent.kind === SyntaxKind.ElementAccessExpression &&
            (parent as ElementAccessExpression).expression === root &&
            parent.parent.kind === SyntaxKind.BinaryExpression &&
            (parent.parent as BinaryExpression).operatorToken.kind === SyntaxKind.EqualsToken &&
            (parent.parent as BinaryExpression).left === parent &&
            !isAssignmentTarget(parent.parent) &&
            isTypeAssignableToKind(getTypeOfExpression((parent as ElementAccessExpression).argumentExpression), TypeFlags.NumberLike);
        return isElementAssignment;
    }

    /**
     * Returns the type of an expression. Unlike checkExpression, this function is simply concerned
     * with computing the type and may not fully check all contained sub-expressions for errors.
     */
    function getTypeOfExpression(node: Expression) {
        // Don't bother caching types that require no flow analysis and are quick to compute.
        const quickType = getQuickTypeOfExpression(node);
        if (quickType) {
            return quickType;
        }
        // If a type has been cached for the node, return it.
        if (node.flags & NodeFlags.TypeCached && flowTypeCache) {
            const cachedType = flowTypeCache[getNodeId(node)];
            if (cachedType) {
                return cachedType;
            }
        }
        const startInvocationCount = flowInvocationCount;
        const type = checkExpression(node, CheckMode.TypeOnly);
        // If control flow analysis was required to determine the type, it is worth caching.
        if (flowInvocationCount !== startInvocationCount) {
            const cache = flowTypeCache || (flowTypeCache = []);
            cache[getNodeId(node)] = type;
            setNodeFlags(node, node.flags | NodeFlags.TypeCached);
        }
        return type;
    }

    function getQuickTypeOfExpression(node: Expression): Type | undefined {
        console.warn("TODO - Implement me - getQuickTypeOfExpression");
        // let expr = skipParentheses(node, /*excludeJSDocTypeAssertions*/ true);
        // if (isJSDocTypeAssertion(expr)) {
        //     const type = getJSDocTypeAssertionType(expr);
        //     if (!isConstTypeReference(type)) {
        //         return getTypeFromTypeNode(type);
        //     }
        // }
        // expr = skipParentheses(node);
        // // if (isAwaitExpression(expr)) {
        // //     const type = getQuickTypeOfExpression(expr.expression);
        // //     return type ? getAwaitedType(type) : undefined;
        // // }
        // // Optimize for the common case of a call to a function with a single non-generic call
        // // signature where we can just fetch the return type without checking the arguments.
        // if (isCallExpression(expr) && expr.expression.kind !== SyntaxKind.SuperKeyword && !isRequireCall(expr, /*requireStringLiteralLikeArgument*/ true) && !isSymbolOrSymbolForCall(expr)) {
        //     return isCallChain(expr) ? getReturnTypeOfSingleNonGenericSignatureOfCallChain(expr) :
        //         getReturnTypeOfSingleNonGenericCallSignature(checkNonNullExpression(expr.expression));
        // }
        // else if (isAssertionExpression(expr) && !isConstTypeReference(expr.type)) {
        //     return getTypeFromTypeNode((expr as TypeAssertion).type);
        // }
        // else if (isLiteralExpression(node) || isBooleanLiteral(node)) {
        //     return checkExpression(node);
        // }
        return undefined;
    }

    function getFlowTypeOfReference(reference: Node, declaredType: Type, initialType = declaredType, flowContainer?: Node, flowNode = tryCast(reference, canHaveFlowNode)?.flowNode) {
        console.warn("TODO - Implement me - getFlowTypeOfReference");
        return anyType;
    }

    function isFunctionOrSourceFile(node: Node) {
        return isFunctionLikeDeclaration(node) || isSourceFile(node);
    }

    function hasParentWithAssignmentsMarked(node: Node) {
        return !!findAncestor(node.parent, node => isFunctionOrSourceFile(node) && !!(getNodeLinks(node).flags & NodeCheckFlags.AssignmentsMarked));
    }
    
    // For all assignments within the given root node, record the last assignment source position for all
    // referenced parameters and mutable local variables. When assignments occur in nested functions  or
    // references occur in export specifiers, record Number.MAX_VALUE as the assignment position. When
    // assignments occur in compound statements, record the ending source position of the compound statement
    // as the assignment position (this is more conservative than full control flow analysis, but requires
    // only a single walk over the AST).
    function markNodeAssignments(node: Node) {
        switch (node.kind) {
            case SyntaxKind.Identifier:
                if (isAssignmentTarget(node)) {
                    const symbol = getResolvedSymbol(node as Identifier);
                    if (isParameterOrMutableLocalVariable(symbol) && symbol.lastAssignmentPos !== Number.MAX_VALUE) {
                        const referencingFunction = findAncestor(node, isFunctionOrSourceFile);
                        const declaringFunction = findAncestor(symbol.valueDeclaration, isFunctionOrSourceFile);
                        symbol.lastAssignmentPos = referencingFunction === declaringFunction ? extendAssignmentPosition(node, symbol.valueDeclaration!) : Number.MAX_VALUE;
                    }
                }
                return;
            // case SyntaxKind.ExportSpecifier:
            //     const exportDeclaration = (node as ExportSpecifier).parent.parent;
            //     const name = (node as ExportSpecifier).propertyName || (node as ExportSpecifier).name;
            //     if (!(node as ExportSpecifier).isTypeOnly && !exportDeclaration.isTypeOnly && !exportDeclaration.moduleSpecifier && name.kind !== SyntaxKind.StringLiteral) {
            //         const symbol = resolveEntityName(name, SymbolFlags.Value, /*ignoreErrors*/ true, /*dontResolveAlias*/ true);
            //         if (symbol && isParameterOrMutableLocalVariable(symbol)) {
            //             symbol.lastAssignmentPos = Number.MAX_VALUE;
            //         }
            //     }
            //     return;            
        }
        if (isTypeNode(node)) {
            return;
        }
        forEachChild(node, markNodeAssignments);
    }

    // Extend the position of the given assignment target node to the end of any intervening variable statement,
    // expression statement, compound statement, or class declaration occurring between the node and the given
    // declaration node.
    function extendAssignmentPosition(node: Node, declaration: Declaration) {
        let pos = node.pos;
        while (node && node.pos > declaration.pos) {
            switch (node.kind) {
                case SyntaxKind.VariableStatement:
                case SyntaxKind.ExpressionStatement:
                case SyntaxKind.IfStatement:
                case SyntaxKind.DoWhileStatement:
                case SyntaxKind.WhileStatement:
                case SyntaxKind.ForStatement:
                case SyntaxKind.ForEachStatement:                
                case SyntaxKind.SwitchStatement:                
                    pos = node.end;
            }
            node = node.parent;
        }
        return pos;
    }
    
    // Return true if there are no assignments to the given symbol or if the given location
    // is past the last assignment to the symbol.
    function isPastLastAssignment(symbol: Symbol, location: Node | undefined) {
        const parent = findAncestor(symbol.valueDeclaration, isFunctionOrSourceFile);
        if (!parent) {
            return false;
        }
        const links = getNodeLinks(parent);
        if (!(links.flags & NodeCheckFlags.AssignmentsMarked)) {
            links.flags |= NodeCheckFlags.AssignmentsMarked;
            if (!hasParentWithAssignmentsMarked(parent)) {
                markNodeAssignments(parent);
            }
        }
        return !symbol.lastAssignmentPos || location && symbol.lastAssignmentPos < location.pos;
    }

    function isMutableLocalVariableDeclaration(declaration: VariableDeclaration) {
        // Return true if symbol is a non-exported and non-global `let` variable
        return !(
            //getCombinedModifierFlags(declaration) & ModifierFlags.Export ||
            declaration.parent.parent.kind === SyntaxKind.VariableStatement
        );
    }

    function isParameterOrMutableLocalVariable(symbol: Symbol) {
        // Return true if symbol is a parameter, a catch clause variable, or a mutable local variable
        const declaration = symbol.valueDeclaration && getRootDeclaration(symbol.valueDeclaration);
        return !!declaration && (
            isParameter(declaration) ||
            isVariableDeclaration(declaration) && (/*isCatchClause(declaration.parent) || */isMutableLocalVariableDeclaration(declaration))
        );
    }

    /**
     * Get the merged symbol for a node. If you know the node is a `Declaration`, it is faster and more type safe to
     * use use `getSymbolOfDeclaration` instead.
     */
    function getSymbolOfNode(node: Node): Symbol | undefined {
        return canHaveSymbol(node) ? getSymbolOfDeclaration(node) : undefined;
    }

    function getSymbolOfNameOrPropertyAccessExpression(name: EntityName | PropertyAccessExpression | JSDocMemberName): Symbol | undefined {
        if (isDeclarationName(name)) {
            return getSymbolOfNode(name.parent);
        }
        
        console.warn("TODO - Implement me - getSymbolOfNameOrPropertyAccessExpression");

        // if (name.parent.kind === SyntaxKind.ExportAssignment && isEntityNameExpression(name)) {
        //     // Even an entity name expression that doesn't resolve as an entityname may still typecheck as a property access expression
        //     const success = resolveEntityName(name, /*all meanings*/ SymbolFlags.Value | SymbolFlags.Type | SymbolFlags.Namespace | SymbolFlags.Alias, /*ignoreErrors*/ true);
        //     if (success && success !== unknownSymbol) {
        //         return success;
        //     }
        // }
        // else if (isEntityName(name) && isInRightSideOfImportOrExportAssignment(name)) {
        //     // Since we already checked for ExportAssignment, this really could only be an Import
        //     const importEqualsDeclaration = getAncestor(name, SyntaxKind.ImportEqualsDeclaration);
        //     Debug.assert(importEqualsDeclaration !== undefined);
        //     return getSymbolOfPartOfRightHandSideOfImportEquals(name, /*dontResolveAlias*/ true);
        // }

        if (isEntityName(name)) {
            // const possibleImportNode = isImportTypeQualifierPart(name);
            // if (possibleImportNode) {
            //     getTypeFromTypeNode(possibleImportNode);
            //     const sym = getNodeLinks(name).resolvedSymbol;
            //     return sym === unknownSymbol ? undefined : sym;
            // }
        }

        while (isRightSideOfQualifiedNameOrPropertyAccessOrJSDocMemberName(name)) {
            name = name.parent as QualifiedName | PropertyAccessEntityNameExpression | JSDocMemberName;
        }

        // if (isInNameOfExpressionWithTypeArguments(name)) {
        //     let meaning = SymbolFlags.None;
        //     if (name.parent.kind === SyntaxKind.ExpressionWithTypeArguments) {
        //         // An 'ExpressionWithTypeArguments' may appear in type space (interface Foo extends Bar<T>),
        //         // value space (return foo<T>), or both(class Foo extends Bar<T>); ensure the meaning matches.
        //         meaning = isPartOfTypeNode(name) ? SymbolFlags.Type : SymbolFlags.Value;

        //         // In a class 'extends' clause we are also looking for a value.
        //         if (isExpressionWithTypeArgumentsInClassExtendsClause(name.parent)) {
        //             meaning |= SymbolFlags.Value;
        //         }
        //     }
        //     else {
        //         meaning = SymbolFlags.Namespace;
        //     }

        //     meaning |= SymbolFlags.Alias;
        //     const entityNameSymbol = isEntityNameExpression(name) ? resolveEntityName(name, meaning, /*ignoreErrors*/ true) : undefined;
        //     if (entityNameSymbol) {
        //         return entityNameSymbol;
        //     }
        // }

        // if (name.parent.kind === SyntaxKind.JSDocParameterTag) {
        //     return getParameterSymbolFromJSDoc(name.parent as JSDocParameterTag);
        // }

        // if (name.parent.kind === SyntaxKind.TypeParameter && name.parent.parent.kind === SyntaxKind.JSDocTemplateTag) {
        //     Debug.assert(!isInJSFile(name)); // Otherwise `isDeclarationName` would have been true.
        //     const typeParameter = getTypeParameterFromJsDoc(name.parent as TypeParameterDeclaration & { parent: JSDocTemplateTag; });
        //     return typeParameter && typeParameter.symbol;
        // }

        if (isExpressionNode(name)) {
            if (nodeIsMissing(name)) {
                // Missing entity name.
                return undefined;
            }
            
            const isJSDoc = false;// TODO findAncestor(name, or(isJSDocLinkLike, isJSDocNameReference, isJSDocMemberName));
            // const meaning = isJSDoc ? SymbolFlags.Type | SymbolFlags.Namespace | SymbolFlags.Value : SymbolFlags.Value;
            const meaning = SymbolFlags.Value;
            if (name.kind === SyntaxKind.Identifier) {
                const result = resolveEntityName(name, meaning, /*ignoreErrors*/ true, /*dontResolveAlias*/ true, getHostSignatureFromJSDoc(name));
                if (!result && isJSDoc) {
                    debugger;
                    // const container = findAncestor(name, or(isClassLike, isInterfaceDeclaration));
                    // if (container) {
                    //     return resolveJSDocMemberName(name, /*ignoreErrors*/ true, getSymbolOfDeclaration(container));
                    // }
                }
                // if (result && isJSDoc) {
                //     const container = getJSDocHost(name);
                //     if (container && isEnumMember(container) && container === result.valueDeclaration) {
                //         return resolveEntityName(name, meaning, /*ignoreErrors*/ true, /*dontResolveAlias*/ true, getSourceFileOfNode(container)) || result;
                //     }
                // }
                return result;
            }
            // else if (isPrivateIdentifier(name)) {
            //     return getSymbolForPrivateIdentifierExpression(name);
            // }
            else if (name.kind === SyntaxKind.PropertyAccessExpression || name.kind === SyntaxKind.QualifiedName) {
                const links = getNodeLinks(name);
                if (links.resolvedSymbol) {
                    return links.resolvedSymbol;
                }

                if (name.kind === SyntaxKind.PropertyAccessExpression) {
                    checkPropertyAccessExpression(name, CheckMode.Normal);
                    if (!links.resolvedSymbol) {
                        links.resolvedSymbol = getApplicableIndexSymbol(checkExpressionCached(name.expression), getLiteralTypeFromPropertyName(name.name));
                    }
                }
                else {
                    checkQualifiedName(name, CheckMode.Normal);
                }
                if (!links.resolvedSymbol && isJSDoc && isQualifiedName(name)) {
                    Debug.fail("TODO - Implement me - getSymbolOfNameOrPropertyAccessExpression");
                    //return resolveJSDocMemberName(name);
                }
                return links.resolvedSymbol;
            }
            // else if (isJSDocMemberName(name)) {
            //     return resolveJSDocMemberName(name);
            // }
            debugger;
        }
        // else if (isTypeReferenceIdentifier(name as EntityName)) {
        //     const meaning = name.parent.kind === SyntaxKind.TypeReference ? SymbolFlags.Type : SymbolFlags.Namespace;
        //     const symbol = resolveEntityName(name as EntityName, meaning, /*ignoreErrors*/ false, /*dontResolveAlias*/ true);
        //     return symbol && symbol !== unknownSymbol ? symbol : getUnresolvedSymbolForEntityName(name as EntityName);
        // }
        // if (name.parent.kind === SyntaxKind.TypePredicate) {
        //     return resolveEntityName(name as Identifier, /*meaning*/ SymbolFlags.FunctionScopedVariable);
        // }

        return undefined;
    }

    function getLiteralTypeFromPropertyName(name: PropertyName ) {
        if (isPrivateIdentifier(name)) {
            return neverType;
        }
        if (isIntLiteral(name)) {
            return getRegularTypeOfLiteralType(checkExpression(name));
        }
        if (isFloatLiteral(name)) {
            return getRegularTypeOfLiteralType(checkExpression(name));
        }
        if (isComputedPropertyName(name)) {            
            Debug.fail("TODO - Implement me - getLiteralTypeFromPropertyName");
            //return getRegularTypeOfLiteralType(checkComputedPropertyName(name));
        }
        const propertyName = getPropertyNameForPropertyNameNode(name);
        if (propertyName !== undefined) {
            return getStringLiteralType((propertyName));
        }
        if (isExpression(name)) {
            return getRegularTypeOfLiteralType(checkExpression(name));
        }
        return neverType;
    }
    
    function getApplicableIndexSymbol(type: Type, keyType: Type) {
        const infos = getApplicableIndexInfos(type, keyType);
        if (infos.length && (type as ObjectType).members) {
            const symbol = getIndexSymbolFromSymbolTable(resolveStructuredTypeMembers(type as ObjectType).members);
            if (infos === getIndexInfosOfType(type)) {
                return symbol;
            }
            else if (symbol) {
                const symbolLinks = getSymbolLinks(symbol);
                const declarationList = mapDefined(infos, i => i.declaration);
                const nodeListId = map(declarationList, getNodeId).join(",");
                if (!symbolLinks.filteredIndexSymbolCache) {
                    symbolLinks.filteredIndexSymbolCache = new Map();
                }
                if (symbolLinks.filteredIndexSymbolCache.has(nodeListId)) {
                    return symbolLinks.filteredIndexSymbolCache.get(nodeListId)!;
                }
                else {
                    const copy = createSymbol(SymbolFlags.Signature, InternalSymbolName.Index);
                    copy.declarations = mapDefined(infos, i => i.declaration);
                    copy.parent = type.aliasSymbol ? type.aliasSymbol : type.symbol ? type.symbol : getSymbolAtLocation(copy.declarations[0].parent);
                    symbolLinks.filteredIndexSymbolCache.set(nodeListId, copy);
                    return copy;
                }
            }
        }
    }
    
    function getIndexSymbolFromSymbolTable(symbolTable: SymbolTable): Symbol | undefined {
        return symbolTable.get(InternalSymbolName.Index);
    }
    
    /**
     * 1. For prototype-property methods like `A.prototype.m = function () ...`, try to resolve names in the scope of `A` too.
     * Note that prototype-property assignment to locations outside the current file (eg globals) doesn't work, so
     * name resolution won't work either.
     * 2. For property assignments like `{ x: function f () { } }`, try to resolve names in the scope of `f` too.
     */
    function resolveEntityNameFromAssignmentDeclaration(name: Identifier, meaning: SymbolFlags): Symbol | undefined {
        return undefined;
        // if (isJSDocTypeReference(name.parent)) {
        //     const secondaryLocation = getAssignmentDeclarationLocation(name.parent);
        //     if (secondaryLocation) {
        //         return resolveName(secondaryLocation, name, meaning, /*nameNotFoundMessage*/ undefined, /*isUse*/ true);
        //     }
        // }
    }

    /**
     * Resolves a qualified name and any involved aliases.
     */
    function resolveEntityName(name: EntityNameOrEntityNameExpression, meaning: SymbolFlags, ignoreErrors?: boolean, dontResolveAlias?: boolean, location?: Node): Symbol | undefined {
        if (nodeIsMissing(name)) {
            return undefined;
        }

        const namespaceMeaning = SymbolFlags.Namespace | (isInJSFile(name) ? meaning & SymbolFlags.Value : 0);
        let symbol: Symbol | undefined;
        if (name.kind === SyntaxKind.Identifier) {
            const message = /*meaning === namespaceMeaning || nodeIsSynthesized(name) ? Diagnostics.Cannot_find_namespace_0 :*/ getCannotFindNameDiagnosticForName(getFirstIdentifier(name));
            const symbolFromJSPrototype = isInJSFile(name) && !nodeIsSynthesized(name) ? resolveEntityNameFromAssignmentDeclaration(name, meaning) : undefined;
            symbol = getMergedSymbol(resolveName(location || name, name, meaning, ignoreErrors || symbolFromJSPrototype ? undefined : message, /*isUse*/ true, /*excludeGlobals*/ false));
            if (!symbol) {
                return getMergedSymbol(symbolFromJSPrototype);
            }
        }
        else if (name.kind === SyntaxKind.QualifiedName || name.kind === SyntaxKind.PropertyAccessExpression) {
            const left = name.kind === SyntaxKind.QualifiedName ? name.left : name.expression;
            const right = name.kind === SyntaxKind.QualifiedName ? name.right : name.name;
            let namespace = resolveEntityName(left, namespaceMeaning, ignoreErrors, /*dontResolveAlias*/ false, location);
            if (!namespace || nodeIsMissing(right)) {
                return undefined;
            }
            else if (namespace === unknownSymbol) {
                return namespace;
            }
            if (
                namespace.valueDeclaration &&
                isInJSFile(namespace.valueDeclaration) &&
                //getEmitModuleResolutionKind(compilerOptions) !== ModuleResolutionKind.Bundler &&
                isVariableDeclaration(namespace.valueDeclaration) &&
                namespace.valueDeclaration.initializer &&
                false//isCommonJsRequire(namespace.valueDeclaration.initializer)
            ) {
                // const moduleName = (namespace.valueDeclaration.initializer as CallExpression).arguments[0] as StringLiteral;
                // const moduleSym = resolveExternalModuleName(moduleName, moduleName);
                // if (moduleSym) {
                //     const resolvedModuleSymbol = resolveExternalModuleSymbol(moduleSym);
                //     if (resolvedModuleSymbol) {
                //         namespace = resolvedModuleSymbol;
                //     }
                // }
            }
            // TODO - Implement me - resolveEntityName
            // symbol = getMergedSymbol(getSymbol(getExportsOfSymbol(namespace), right.text, meaning));
            // if (!symbol && (namespace.flags & SymbolFlags.Alias)) {
            //     // `namespace` can be resolved further if there was a symbol merge with a re-export
            //     symbol = getMergedSymbol(getSymbol(getExportsOfSymbol(resolveAlias(namespace)), right.text, meaning));
            // }
            if (!symbol) {
                if (!ignoreErrors) {
                    const namespaceName = getFullyQualifiedName(namespace);
                    const declarationName = declarationNameToString(right);
                    // const suggestionForNonexistentModule = getSuggestedSymbolForNonexistentModule(right, namespace);
                    // if (suggestionForNonexistentModule) {
                    //     error(right, Diagnostics._0_has_no_exported_member_named_1_Did_you_mean_2, namespaceName, declarationName, symbolToString(suggestionForNonexistentModule));
                    //     return undefined;
                    // }

                    const containingQualifiedName = isQualifiedName(name) && getContainingQualifiedNameNode(name);
                    const canSuggestTypeof = globalObjectType // <-- can't pull on types if global types aren't initialized yet
                        && (meaning & SymbolFlags.Type)
                        && containingQualifiedName
                        //&& !isTypeOfExpression(containingQualifiedName.parent)
                        && tryGetQualifiedNameAsValue(containingQualifiedName);
                    if (canSuggestTypeof) {
                        error(
                            containingQualifiedName,
                            Diagnostics._0_refers_to_a_value_but_is_being_used_as_a_type_here_Did_you_mean_typeof_0,
                            entityNameToString(containingQualifiedName),
                        );
                        return undefined;
                    }

                    // if (meaning & SymbolFlags.Namespace && isQualifiedName(name.parent)) {
                    //     const exportedTypeSymbol = getMergedSymbol(getSymbol(getExportsOfSymbol(namespace), right.text, SymbolFlags.Type));
                    //     if (exportedTypeSymbol) {
                    //         error(
                    //             name.parent.right,
                    //             Diagnostics.Cannot_access_0_1_because_0_is_a_type_but_not_a_namespace_Did_you_mean_to_retrieve_the_type_of_the_property_1_in_0_with_0_1,
                    //             symbolToString(exportedTypeSymbol),
                    //             unescapeLeadingUnderscores(name.parent.right.text),
                    //         );
                    //         return undefined;
                    //     }
                    // }

                    debugger;
                    //error(right, Diagnostics.Namespace_0_has_no_exported_member_1, namespaceName, declarationName);
                }
                return undefined;
            }
        }
        else {
            Debug.assertNever(name, "Unknown entity name kind.");
        }
        // if (!nodeIsSynthesized(name) && isEntityName(name) && (symbol.flags & SymbolFlags.Alias || name.parent.kind === SyntaxKind.ExportAssignment)) {
        //     markSymbolOfAliasDeclarationIfTypeOnly(getAliasDeclarationFromName(name), symbol, /*finalTarget*/ undefined, /*overwriteEmpty*/ true);
        // }
        return (symbol.flags & meaning) || dontResolveAlias ? symbol : resolveAlias(symbol);
    }

    function getFullyQualifiedName(symbol: Symbol, containingLocation?: Node): string {
        return symbol.parent ? getFullyQualifiedName(symbol.parent, containingLocation) + "." + symbolToString(symbol) : symbolToString(symbol, containingLocation, /*meaning*/ undefined, SymbolFormatFlags.DoNotIncludeSymbolChain | SymbolFormatFlags.AllowAnyNodeKind);
    }

    function getContainingQualifiedNameNode(node: QualifiedName) {
        while (isQualifiedName(node.parent)) {
            node = node.parent;
        }
        return node;
    }

    function tryGetQualifiedNameAsValue(node: QualifiedName) {
        let left: Identifier | QualifiedName = getFirstIdentifier(node);
        let symbol = resolveName(left, left, SymbolFlags.Value, /*nameNotFoundMessage*/ undefined, /*isUse*/ true);
        if (!symbol) {
            return undefined;
        }
        while (isQualifiedName(left.parent)) {
            const type = getTypeOfSymbol(symbol);
            symbol = getPropertyOfType(type, left.parent.right.text);
            if (!symbol) {
                return undefined;
            }
            left = left.parent;
        }
        return symbol;
    }

    
    function checkUnusedIdentifiers(potentiallyUnusedIdentifiers: readonly PotentiallyUnusedIdentifier[], addDiagnostic: AddUnusedDiagnostic) {
        for (const node of potentiallyUnusedIdentifiers) {
            switch (node.kind) {
                // case SyntaxKind.ClassDeclaration:
                // case SyntaxKind.ClassExpression:
                //     checkUnusedClassMembers(node, addDiagnostic);
                //     checkUnusedTypeParameters(node, addDiagnostic);
                //     break;
                case SyntaxKind.SourceFile:                
                case SyntaxKind.Block:
                case SyntaxKind.CaseBlock:
                case SyntaxKind.ForStatement:
                case SyntaxKind.ForEachStatement:                
                    checkUnusedLocalsAndParameters(node, addDiagnostic);
                    break;                
                case SyntaxKind.FunctionExpression:
                case SyntaxKind.FunctionDeclaration:
                case SyntaxKind.InlineClosureExpression:
                // case SyntaxKind.MethodDeclaration:                
                    if (node.body) { // Don't report unused parameters in overloads
                        checkUnusedLocalsAndParameters(node, addDiagnostic);
                    }                    
                    break;
                // case SyntaxKind.MethodSignature:
                // case SyntaxKind.CallSignature:                
                // case SyntaxKind.FunctionType:                
                //     checkUnusedTypeParameters(node, addDiagnostic);
                //     break;                
                default:
                    Debug.assertNever(node, "Node should not have been registered for unused identifiers check");
            }
        }
    }

    function isIdentifierThatStartsWithUnderscore(node: Node) {
        return isIdentifier(node) && idText(node).charCodeAt(0) === CharacterCodes._;
    }
    
    function isValidUnusedLocalDeclaration(declaration: Declaration): boolean {
        if (isBindingElement(declaration)) {
            // if (isObjectBindingPattern(declaration.parent)) {
            //     /**
            //      * ignore starts with underscore names _
            //      * const { a: _a } = { a: 1 }
            //      */
            //     return !!(declaration.propertyName && isIdentifierThatStartsWithUnderscore(declaration.name));
            // }
            return isIdentifierThatStartsWithUnderscore(declaration.name);
        }
        return (isVariableDeclaration(declaration) && isForEachStatement(declaration.parent.parent)) && isIdentifierThatStartsWithUnderscore(declaration.name!);
    }

    function addToGroup<K, V>(map: Map<string, [K, V[]]>, key: K, value: V, getKey: (key: K) => number | string): void {
        const keyString = String(getKey(key));
        const group = map.get(keyString);
        if (group) {
            group[1].push(value);
        }
        else {
            map.set(keyString, [key, [value]]);
        }
    }

    function tryGetRootParameterDeclaration(node: Node): ParameterDeclaration | undefined {
        return tryCast(getRootDeclaration(node), isParameter);
    }

    function errorUnusedLocal(declaration: Declaration, name: string, addDiagnostic: AddUnusedDiagnostic) {
        const node = getNameOfDeclaration(declaration) || declaration;
        const message = Diagnostics._0_is_declared_but_its_value_is_never_read;
        addDiagnostic(declaration, UnusedKind.Local, createDiagnosticForNode(node, message, name));
    }

    function checkUnusedLocalsAndParameters(nodeWithLocals: HasLocals, addDiagnostic: AddUnusedDiagnostic): void {
        // Ideally we could use the ImportClause directly as a key, but must wait until we have full ES6 maps. So must store key along with value.
        //const unusedImports = new Map<string, [ImportClause, ImportedDeclaration[]]>();
        const unusedDestructures = new Map<string, [BindingPattern, BindingElement[]]>();
        const unusedVariables = new Map<string, [VariableDeclarationList, VariableDeclaration[]]>();
        nodeWithLocals.locals!.forEach(local => {
            // If it's purely a type parameter, ignore, will be checked in `checkUnusedTypeParameters`.
            // If it's a type parameter merged with a parameter, check if the parameter-side is used.
            if (local.flags & SymbolFlags.TypeParameter ? !(local.flags & SymbolFlags.Variable && !(local.isReferenced! & SymbolFlags.Variable)) : local.isReferenced || local.exportSymbol) {
                return;
            }

            if (local.declarations) {
                for (const declaration of local.declarations) {
                    if (isValidUnusedLocalDeclaration(declaration)) {
                        continue;
                    }

                    // if (isImportedDeclaration(declaration)) {
                    //     addToGroup(unusedImports, importClauseFromImported(declaration), declaration, getNodeId);
                    // }
                    // else if (isBindingElement(declaration) && isObjectBindingPattern(declaration.parent)) {
                    //     // In `{ a, ...b }, `a` is considered used since it removes a property from `b`. `b` may still be unused though.
                    //     const lastElement = last(declaration.parent.elements);
                    //     if (declaration === lastElement || !last(declaration.parent.elements).dotDotDotToken) {
                    //         addToGroup(unusedDestructures, declaration.parent, declaration, getNodeId);
                    //     }
                    // }
                    else if (isVariableDeclaration(declaration)) {
                        const blockScopeKind = getCombinedNodeFlagsCached(declaration) & NodeFlags.BlockScoped;
                        const name = getNameOfDeclaration(declaration);
                        if (!name || !isIdentifierThatStartsWithUnderscore(name)) {
                            addToGroup(unusedVariables, declaration.parent, declaration, getNodeId);
                        }
                    }
                    else {
                        const parameter = local.valueDeclaration && tryGetRootParameterDeclaration(local.valueDeclaration);
                        const name = local.valueDeclaration && getNameOfDeclaration(local.valueDeclaration);
                        if (parameter && name) {
                            if (!isIdentifierThatStartsWithUnderscore(name)) {
                                if (isBindingElement(declaration) && isArrayBindingPattern(declaration.parent)) {
                                    addToGroup(unusedDestructures, declaration.parent, declaration, getNodeId);
                                }
                                else {
                                    addDiagnostic(parameter, UnusedKind.Parameter, createDiagnosticForNode(name, Diagnostics._0_is_declared_but_its_value_is_never_read, symbolName(local)));
                                }
                            }
                        }
                        else {
                            errorUnusedLocal(declaration, symbolName(local), addDiagnostic);
                        }
                    }
                }
            }
        });

        // unusedImports.forEach(([importClause, unuseds]) => {
        //     const importDecl = importClause.parent;
        //     const nDeclarations = (importClause.name ? 1 : 0) +
        //         (importClause.namedBindings ?
        //             (importClause.namedBindings.kind === SyntaxKind.NamespaceImport ? 1 : importClause.namedBindings.elements.length)
        //             : 0);
        //     if (nDeclarations === unuseds.length) {
        //         addDiagnostic(
        //             importDecl,
        //             UnusedKind.Local,
        //             unuseds.length === 1
        //                 ? createDiagnosticForNode(importDecl, Diagnostics._0_is_declared_but_its_value_is_never_read, idText(first(unuseds).name!))
        //                 : createDiagnosticForNode(importDecl, Diagnostics.All_imports_in_import_declaration_are_unused),
        //         );
        //     }
        //     else {
        //         for (const unused of unuseds) errorUnusedLocal(unused, idText(unused.name!), addDiagnostic);
        //     }
        // });
       
        unusedVariables.forEach(([declarationList, declarations]) => {
            if (declarationList.declarations.length === declarations.length) {
                addDiagnostic(
                    declarationList,
                    UnusedKind.Local,
                    declarations.length === 1
                        ? createDiagnosticForNode(first(declarations).name, Diagnostics._0_is_declared_but_its_value_is_never_read, bindingNameText(first(declarations).name))
                        : createDiagnosticForNode(declarationList.parent.kind === SyntaxKind.VariableStatement ? declarationList.parent : declarationList, Diagnostics.All_variables_are_unused),
                );
            }
            else {
                for (const decl of declarations) {
                    addDiagnostic(decl, UnusedKind.Local, createDiagnosticForNode(decl, Diagnostics._0_is_declared_but_its_value_is_never_read, bindingNameText(decl.name)));
                }
            }
        });
    }

    function bindingNameText(name: BindingName): string {
        switch (name.kind) {
            case SyntaxKind.Identifier:
                return idText(name);
            case SyntaxKind.ArrayBindingPattern:
            //case SyntaxKind.ObjectBindingPattern:
                return bindingNameText(cast(first(name.elements), isBindingElement).name);
            default:
                return Debug.assertNever(name);
        }
    }    

    /**
     * Resolve a signature of a given call-like expression.
     * @param node a call-like expression to try resolve a signature for
     * @param candidatesOutArray an array of signature to be filled in by the function. It is passed by signature help in the language service;
     *                           the function will fill it up with appropriate candidate signatures
     * @return a signature of the call-like expression or undefined if one can't be found
     */
    function getResolvedSignature(node: CallLikeExpression, candidatesOutArray?: Signature[] | undefined, checkMode?: CheckMode): Signature {
        const links = getNodeLinks(node);
        // If getResolvedSignature has already been called, we will have cached the resolvedSignature.
        // However, it is possible that either candidatesOutArray was not passed in the first time,
        // or that a different candidatesOutArray was passed in. Therefore, we need to redo the work
        // to correctly fill the candidatesOutArray.
        const cached = links.resolvedSignature;
        if (cached && cached !== resolvingSignature && !candidatesOutArray) {
            return cached;
        }
        const saveResolutionStart = resolutionStart;
        if (!cached) {
            // If we haven't already done so, temporarily reset the resolution stack. This allows us to
            // handle "inverted" situations where, for example, an API client asks for the type of a symbol
            // containined in a function call argument whose contextual type depends on the symbol itself
            // through resolution of the containing function call. By resetting the resolution stack we'll
            // retry the symbol type resolution with the resolvingSignature marker in place to suppress
            // the contextual type circularity.
            resolutionStart = resolutionTargets.length;
        }
        links.resolvedSignature = resolvingSignature;
        let result = resolveSignature(node, candidatesOutArray, checkMode || CheckMode.Normal);
        resolutionStart = saveResolutionStart;
        // When CheckMode.SkipGenericFunctions is set we use resolvingSignature to indicate that call
        // resolution should be deferred.
        if (result !== resolvingSignature) {
            // if the signature resolution originated on a node that itself depends on the contextual type
            // then it's possible that the resolved signature might not be the same as the one that would be computed in source order
            // since resolving such signature leads to resolving the potential outer signature, its arguments and thus the very same signature
            // it's possible that this inner resolution sets the resolvedSignature first.
            // In such a case we ignore the local result and reuse the correct one that was cached.
            if (links.resolvedSignature !== resolvingSignature) {
                result = links.resolvedSignature;
            }
            // If signature resolution originated in control flow type analysis (for example to compute the
            // assigned type in a flow assignment) we don't cache the result as it may be based on temporary
            // types from the control flow analysis.
            links.resolvedSignature = flowLoopStart === flowLoopCount ? result : cached;
        }
        return result;
    }

    function getResolvedSignatureWorker(nodeIn: CallLikeExpression, candidatesOutArray: Signature[] | undefined, argumentCount: number | undefined, checkMode: CheckMode): Signature | undefined {
        const node = getParseTreeNode(nodeIn, isCallLikeExpression);
        apparentArgumentCount = argumentCount;
        const res = !node ? undefined : getResolvedSignature(node, candidatesOutArray, checkMode);
        apparentArgumentCount = undefined;
        return res;
    }

    function isTypeAny(type: Type | undefined) {
        return type && (type.flags & TypeFlags.Any) !== 0;
    }

    function getTypeFacts(type: Type, mask: TypeFacts): TypeFacts {
        return getTypeFactsWorker(type, mask) & mask;
    }

    function isEmptyObjectType(type: Type): boolean {
        return type.flags & TypeFlags.Object ? /*!isGenericMappedType(type) &&*/ isEmptyResolvedType(resolveStructuredTypeMembers(type as ObjectType)) :
            type.flags & TypeFlags.NonPrimitive ? true :
            type.flags & TypeFlags.Union ? some((type as UnionType).types, isEmptyObjectType) :
            type.flags & TypeFlags.Intersection ? every((type as UnionType).types, isEmptyObjectType) :
            false;
    }

    function getTypeFactsWorker(type: Type, callerOnlyNeeds: TypeFacts): TypeFacts {
        if (type.flags & (TypeFlags.Intersection | TypeFlags.Instantiable)) {
            type = getBaseConstraintOfType(type) || unknownType;
        }
        const flags = type.flags;
        if (flags & (TypeFlags.String | TypeFlags.StringMapping)) {
            return strictNullChecks ? TypeFacts.StringStrictFacts : TypeFacts.StringFacts;
        }
        if (flags & (TypeFlags.StringLiteral | TypeFlags.TemplateLiteral)) {
            const isEmpty = flags & TypeFlags.StringLiteral && (type as StringLiteralType).value === "";
            return strictNullChecks ?
                isEmpty ? TypeFacts.EmptyStringStrictFacts : TypeFacts.NonEmptyStringStrictFacts :
                isEmpty ? TypeFacts.EmptyStringFacts : TypeFacts.NonEmptyStringFacts;
        }
        if (flags & (TypeFlags.Number | TypeFlags.Enum)) {
            return strictNullChecks ? TypeFacts.NumberStrictFacts : TypeFacts.NumberFacts;
        }
        if (flags & TypeFlags.IntLiteral) {
            const isZero = (type as IntLiteralType).value === 0;
            return strictNullChecks ?
                isZero ? TypeFacts.ZeroNumberStrictFacts : TypeFacts.NonZeroNumberStrictFacts :
                isZero ? TypeFacts.ZeroNumberFacts : TypeFacts.NonZeroNumberFacts;
        }
        // if (flags & TypeFlags.BigInt) {
        //     return strictNullChecks ? TypeFacts.BigIntStrictFacts : TypeFacts.BigIntFacts;
        // }
        if (flags & TypeFlags.FloatLiteral) {
            const isZero = (type as FloatLiteralType).value === 0;
            return strictNullChecks ?
                isZero ? TypeFacts.ZeroBigIntStrictFacts : TypeFacts.NonZeroBigIntStrictFacts :
                isZero ? TypeFacts.ZeroBigIntFacts : TypeFacts.NonZeroBigIntFacts;
        }
        if (flags & TypeFlags.Boolean) {
            return strictNullChecks ? TypeFacts.BooleanStrictFacts : TypeFacts.BooleanFacts;
        }
        // if (flags & TypeFlags.BooleanLike) {
        //     return strictNullChecks ?
        //         (type === falseType || type === regularFalseType) ? TypeFacts.FalseStrictFacts : TypeFacts.TrueStrictFacts :
        //         (type === falseType || type === regularFalseType) ? TypeFacts.FalseFacts : TypeFacts.TrueFacts;
        // }
        if (flags & TypeFlags.Object) {
            const possibleFacts = strictNullChecks
                ? TypeFacts.EmptyObjectStrictFacts | TypeFacts.FunctionStrictFacts | TypeFacts.ObjectStrictFacts
                : TypeFacts.EmptyObjectFacts | TypeFacts.FunctionFacts | TypeFacts.ObjectFacts;

            if ((callerOnlyNeeds & possibleFacts) === 0) {
                // If the caller doesn't care about any of the facts that we could possibly produce,
                // return zero so we can skip resolving members.
                return 0;
            }

            return getObjectFlags(type) & ObjectFlags.Anonymous && isEmptyObjectType(type as ObjectType) ?
                strictNullChecks ? TypeFacts.EmptyObjectStrictFacts : TypeFacts.EmptyObjectFacts :
                //isFunctionObjectType(type as ObjectType) ? strictNullChecks ? TypeFacts.FunctionStrictFacts : TypeFacts.FunctionFacts :
                strictNullChecks ? TypeFacts.ObjectStrictFacts : TypeFacts.ObjectFacts;
        }
        if (flags & TypeFlags.Void) {
            return TypeFacts.VoidFacts;
        }
        if (flags & TypeFlags.Undefined) {
            return TypeFacts.UndefinedFacts;
        }
        if (flags & TypeFlags.Null) {
            return TypeFacts.NullFacts;
        }
        if (flags & TypeFlags.ESSymbolLike) {
            return strictNullChecks ? TypeFacts.SymbolStrictFacts : TypeFacts.SymbolFacts;
        }
        if (flags & TypeFlags.NonPrimitive) {
            return strictNullChecks ? TypeFacts.ObjectStrictFacts : TypeFacts.ObjectFacts;
        }
        if (flags & TypeFlags.Never) {
            return TypeFacts.None;
        }
        if (flags & TypeFlags.Union) {
            return reduceLeft((type as UnionType).types, (facts, t) => facts | getTypeFactsWorker(t, callerOnlyNeeds), TypeFacts.None);
        }
        // if (flags & TypeFlags.Intersection) {
        //     return getIntersectionTypeFacts(type as IntersectionType, callerOnlyNeeds);
        // }
        return TypeFacts.UnknownFacts;
    }

    function checkNonNullTypeWithReporter(
        type: Type,
        node: Node,
        reportError: (node: Node, facts: TypeFacts) => void,
    ): Type {
        if (strictNullChecks && type.flags & TypeFlags.Unknown) {
            if (isEntityNameExpression(node)) {
                const nodeText = entityNameToString(node);
                if (nodeText.length < 100) {
                    error(node, Diagnostics._0_is_of_type_unknown, nodeText);
                    return errorType;
                }
            }
            error(node, Diagnostics.Object_is_of_type_unknown);
            return errorType;
        }
        const facts = getTypeFacts(type, TypeFacts.IsUndefinedOrNull);
        if (facts & TypeFacts.IsUndefinedOrNull) {
            reportError(node, facts);
            const t = getNonNullableType(type);
            return t.flags & (TypeFlags.Nullable | TypeFlags.Never) ? errorType : t;
        }
        return type;
    }

    function reportCannotInvokePossiblyNullOrUndefinedError(node: Node, facts: TypeFacts) {
        error(
            node,
            facts & TypeFacts.IsUndefined ? facts & TypeFacts.IsNull ?
                Diagnostics.Cannot_invoke_an_object_which_is_possibly_null_or_undefined :
                Diagnostics.Cannot_invoke_an_object_which_is_possibly_undefined :
                Diagnostics.Cannot_invoke_an_object_which_is_possibly_null,
        );
    }

    function resolveCallExpression(node: CallExpression, candidatesOutArray: Signature[] | undefined, checkMode: CheckMode): Signature {
        if (node.expression.kind === SyntaxKind.SuperKeyword) {
            const superType = checkSuperExpression(node.expression);
            if (isTypeAny(superType)) {
                for (const arg of node.arguments) {
                    checkExpression(arg); // Still visit arguments so they get marked for visibility, etc
                }
                return anySignature;
            }
            if (!isErrorType(superType)) {
                // In super call, the candidate signatures are the matching arity signatures of the base constructor function instantiated
                // with the type arguments specified in the extends clause.
                // const baseTypeNode = getEffectiveBaseTypeNode(getContainingClass(node)!);
                // if (baseTypeNode) {
                //     const baseConstructors = getInstantiatedConstructorsForTypeArguments(superType, baseTypeNode.typeArguments, baseTypeNode);
                //     return resolveCall(node, baseConstructors, candidatesOutArray, checkMode, SignatureFlags.None);
                // }
            }
            return resolveUntypedCall(node);
        }

        let callChainFlags: SignatureFlags;
        let funcType = checkExpression(node.expression);
        if (isCallChain(node)) {
            // const nonOptionalType = getOptionalExpressionType(funcType, node.expression);
            // callChainFlags = nonOptionalType === funcType ? SignatureFlags.None :
            //     isOutermostOptionalChain(node) ? SignatureFlags.IsOuterCallChain :
            //     SignatureFlags.IsInnerCallChain;
            // funcType = nonOptionalType;
        }
        else {
            callChainFlags = SignatureFlags.None;
        }

        funcType = checkNonNullTypeWithReporter(
            funcType,
            node.expression,
            reportCannotInvokePossiblyNullOrUndefinedError,
        );

        if (funcType === silentNeverType) {
            return silentNeverSignature;
        }

        const apparentType = getApparentType(funcType);
        if (isErrorType(apparentType)) {
            // Another error has already been reported
            return resolveErrorCall(node);
        }

        // Technically, this signatures list may be incomplete. We are taking the apparent type,
        // but we are not including call signatures that may have been added to the Object or
        // Function interface, since they have none by default. This is a bit of a leap of faith
        // that the user will not add any.
        const callSignatures = getSignaturesOfType(apparentType, SignatureKind.Call);
        const numConstructSignatures = getSignaturesOfType(apparentType, SignatureKind.Construct).length;

        // In an untyped function call no TypeArgs are permitted, Args can be any argument list, no contextual
        // types are provided for the argument expressions, and the result is always of type Any.
        // if (isUntypedFunctionCall(funcType, apparentType, callSignatures.length, numConstructSignatures)) {
        //     // The unknownType indicates that an error already occurred (and was reported).  No
        //     // need to report another error in this case.
        //     if (!isErrorType(funcType) && node.typeArguments) {
        //         error(node, Diagnostics.Untyped_function_calls_may_not_accept_type_arguments);
        //     }
        //     return resolveUntypedCall(node);
        // }
        // If FuncExpr's apparent type(section 3.8.1) is a function type, the call is a typed function call.
        // TypeScript employs overload resolution in typed function calls in order to support functions
        // with multiple call signatures.
        if (!callSignatures.length) {
            if (numConstructSignatures) {
                error(node, Diagnostics.Value_of_type_0_is_not_callable_Did_you_mean_to_include_new, typeToString(funcType));
            }
            else {
                let relatedInformation: DiagnosticRelatedInformation | undefined;
                if (node.arguments.length === 1) {
                    const text = getSourceFileOfNode(node).text;
                    if (isLineBreak(text.charCodeAt(skipTrivia(text, node.expression.end, /*stopAfterLineBreak*/ true) - 1))) {
                        relatedInformation = createDiagnosticForNode(node.expression, Diagnostics.Are_you_missing_a_semicolon);
                    }
                }
                invocationError(node.expression, apparentType, SignatureKind.Call, relatedInformation);
            }
            return resolveErrorCall(node);
        }
        // When a call to a generic function is an argument to an outer call to a generic function for which
        // inference is in process, we have a choice to make. If the inner call relies on inferences made from
        // its contextual type to its return type, deferring the inner call processing allows the best possible
        // contextual type to accumulate. But if the outer call relies on inferences made from the return type of
        // the inner call, the inner call should be processed early. There's no sure way to know which choice is
        // right (only a full unification algorithm can determine that), so we resort to the following heuristic:
        // If no type arguments are specified in the inner call and at least one call signature is generic and
        // returns a function type, we choose to defer processing. This narrowly permits function composition
        // operators to flow inferences through return types, but otherwise processes calls right away. We
        // use the resolvingSignature singleton to indicate that we deferred processing. This result will be
        // propagated out and eventually turned into silentNeverType (a type that is assignable to anything and
        // from which we never make inferences).
        // if (checkMode & CheckMode.SkipGenericFunctions && !node.typeArguments && callSignatures.some(isGenericFunctionReturningFunction)) {
        //     skippedGenericFunction(node, checkMode);
        //     return resolvingSignature;
        // }
        // If the function is explicitly marked with `@class`, then it must be constructed.
        // if (callSignatures.some(sig => isInJSFile(sig.declaration) && !!getJSDocClassTag(sig.declaration!))) {
        //     error(node, Diagnostics.Value_of_type_0_is_not_callable_Did_you_mean_to_include_new, typeToString(funcType));
        //     return resolveErrorCall(node);
        // }

        return resolveCall(node, callSignatures, candidatesOutArray, checkMode, callChainFlags);
    }

    function typeToString(type: Type, enclosingDeclaration?: Node, flags: TypeFormatFlags = TypeFormatFlags.AllowUniqueESSymbolType | TypeFormatFlags.UseAliasDefinedOutsideCurrentScope, writer: EmitTextWriter = createTextWriter("")): string {
        return "ntbla";
        // const noTruncation = false;//compilerOptions.noErrorTruncation || flags & TypeFormatFlags.NoTruncation;
        // const typeNode = nodeBuilder.typeToTypeNode(type, enclosingDeclaration, toNodeBuilderFlags(flags) | NodeBuilderFlags.IgnoreErrors | (noTruncation ? NodeBuilderFlags.NoTruncation : 0));
        // if (typeNode === undefined) return Debug.fail("should always get typenode");
        // // The unresolved type gets a synthesized comment on `any` to hint to users that it's not a plain `any`.
        // // Otherwise, we always strip comments out.
        // const printer = type !== unresolvedType ? createPrinterWithRemoveComments() : createPrinterWithDefaults();
        // const sourceFile = enclosingDeclaration && getSourceFileOfNode(enclosingDeclaration);
        // printer.writeNode(EmitHint.Unspecified, typeNode, /*sourceFile*/ sourceFile, writer);
        // const result = writer.getText();

        // const maxLength = noTruncation ? noTruncationMaximumTruncationLength * 2 : defaultMaximumTruncationLength * 2;
        // if (maxLength && result && result.length >= maxLength) {
        //     return result.substr(0, maxLength - "...".length) + "...";
        // }
        // return result;
    }

    function resolveCall(node: CallLikeExpression, signatures: readonly Signature[], candidatesOutArray: Signature[] | undefined, checkMode: CheckMode, callChainFlags: SignatureFlags, headMessage?: DiagnosticMessage): Signature {
        const isTaggedTemplate = false;
        const isDecorator = false;
        const isJsxOpeningOrSelfClosingElement = false;
        const isInstanceof = false;// node.kind === SyntaxKind.BinaryExpression;
        const reportErrors = !isInferencePartiallyBlocked && !candidatesOutArray;

        console.warn("TODO - implement me - resolveCall");
        return undefined;
        // let typeArguments: NodeArray<TypeNode> | undefined;

        // if (!isDecorator && !isInstanceof && !isSuperCall(node)) {
        //     typeArguments = (node as CallExpression).typeArguments;

        //     // We already perform checking on the type arguments on the class declaration itself.
        //     if (isTaggedTemplate || isJsxOpeningOrSelfClosingElement || (node as CallExpression).expression.kind !== SyntaxKind.SuperKeyword) {
        //         forEach(typeArguments, checkSourceElement);
        //     }
        // }

        // const candidates = candidatesOutArray || [];
        // // reorderCandidates fills up the candidates array directly
        // reorderCandidates(signatures, candidates, callChainFlags);
        // Debug.assert(candidates.length, "Revert #54442 and add a testcase with whatever triggered this");

        // const args = getEffectiveCallArguments(node);

        // // The excludeArgument array contains true for each context sensitive argument (an argument
        // // is context sensitive it is susceptible to a one-time permanent contextual typing).
        // //
        // // The idea is that we will perform type argument inference & assignability checking once
        // // without using the susceptible parameters that are functions, and once more for those
        // // parameters, contextually typing each as we go along.
        // //
        // // For a tagged template, then the first argument be 'undefined' if necessary because it
        // // represents a TemplateStringsArray.
        // //
        // // For a decorator, no arguments are susceptible to contextual typing due to the fact
        // // decorators are applied to a declaration by the emitter, and not to an expression.
        // const isSingleNonGenericCandidate = candidates.length === 1 && !candidates[0].typeParameters;
        // let argCheckMode = !isDecorator && !isSingleNonGenericCandidate && some(args, isContextSensitive) ? CheckMode.SkipContextSensitive : CheckMode.Normal;

        // // The following variables are captured and modified by calls to chooseOverload.
        // // If overload resolution or type argument inference fails, we want to report the
        // // best error possible. The best error is one which says that an argument was not
        // // assignable to a parameter. This implies that everything else about the overload
        // // was fine. So if there is any overload that is only incorrect because of an
        // // argument, we will report an error on that one.
        // //
        // //     function foo(s: string): void;
        // //     function foo(n: number): void; // Report argument error on this overload
        // //     function foo(): void;
        // //     foo(true);
        // //
        // // If none of the overloads even made it that far, there are two possibilities.
        // // There was a problem with type arguments for some overload, in which case
        // // report an error on that. Or none of the overloads even had correct arity,
        // // in which case give an arity error.
        // //
        // //     function foo<T extends string>(x: T): void; // Report type argument error
        // //     function foo(): void;
        // //     foo<number>(0);
        // //
        // let candidatesForArgumentError: Signature[] | undefined;
        // let candidateForArgumentArityError: Signature | undefined;
        // let candidateForTypeArgumentError: Signature | undefined;
        // let result: Signature | undefined;

        // // If we are in signature help, a trailing comma indicates that we intend to provide another argument,
        // // so we will only accept overloads with arity at least 1 higher than the current number of provided arguments.
        // const signatureHelpTrailingComma = !!(checkMode & CheckMode.IsForSignatureHelp) && node.kind === SyntaxKind.CallExpression && node.arguments.hasTrailingComma;

        // // Section 4.12.1:
        // // if the candidate list contains one or more signatures for which the type of each argument
        // // expression is a subtype of each corresponding parameter type, the return type of the first
        // // of those signatures becomes the return type of the function call.
        // // Otherwise, the return type of the first signature in the candidate list becomes the return
        // // type of the function call.
        // //
        // // Whether the call is an error is determined by assignability of the arguments. The subtype pass
        // // is just important for choosing the best signature. So in the case where there is only one
        // // signature, the subtype pass is useless. So skipping it is an optimization.
        // if (candidates.length > 1) {
        //     result = chooseOverload(candidates, subtypeRelation, isSingleNonGenericCandidate, signatureHelpTrailingComma);
        // }
        // if (!result) {
        //     result = chooseOverload(candidates, assignableRelation, isSingleNonGenericCandidate, signatureHelpTrailingComma);
        // }
        // if (result) {
        //     return result;
        // }

        // result = getCandidateForOverloadFailure(node, candidates, args, !!candidatesOutArray, checkMode);
        // // Preemptively cache the result; getResolvedSignature will do this after we return, but
        // // we need to ensure that the result is present for the error checks below so that if
        // // this signature is encountered again, we handle the circularity (rather than producing a
        // // different result which may produce no errors and assert). Callers of getResolvedSignature
        // // don't hit this issue because they only observe this result after it's had a chance to
        // // be cached, but the error reporting code below executes before getResolvedSignature sets
        // // resolvedSignature.
        // getNodeLinks(node).resolvedSignature = result;

        // // No signatures were applicable. Now report errors based on the last applicable signature with
        // // no arguments excluded from assignability checks.
        // // If candidate is undefined, it means that no candidates had a suitable arity. In that case,
        // // skip the checkApplicableSignature check.
        // if (reportErrors) {
        //     // If the call expression is a synthetic call to a `[Symbol.hasInstance]` method then we will produce a head
        //     // message when reporting diagnostics that explains how we got to `right[Symbol.hasInstance](left)` from
        //     // `left instanceof right`, as it pertains to "Argument" related messages reported for the call.
        //     if (!headMessage && isInstanceof) {
        //         headMessage = Diagnostics.The_left_hand_side_of_an_instanceof_expression_must_be_assignable_to_the_first_argument_of_the_right_hand_side_s_Symbol_hasInstance_method;
        //     }
        //     if (candidatesForArgumentError) {
        //         if (candidatesForArgumentError.length === 1 || candidatesForArgumentError.length > 3) {
        //             const last = candidatesForArgumentError[candidatesForArgumentError.length - 1];
        //             let chain: DiagnosticMessageChain | undefined;
        //             if (candidatesForArgumentError.length > 3) {
        //                 chain = chainDiagnosticMessages(chain, Diagnostics.The_last_overload_gave_the_following_error);
        //                 chain = chainDiagnosticMessages(chain, Diagnostics.No_overload_matches_this_call);
        //             }
        //             if (headMessage) {
        //                 chain = chainDiagnosticMessages(chain, headMessage);
        //             }
        //             const diags = getSignatureApplicabilityError(node, args, last, assignableRelation, CheckMode.Normal, /*reportErrors*/ true, () => chain, /*inferenceContext*/ undefined);
        //             if (diags) {
        //                 for (const d of diags) {
        //                     if (last.declaration && candidatesForArgumentError.length > 3) {
        //                         addRelatedInfo(d, createDiagnosticForNode(last.declaration, Diagnostics.The_last_overload_is_declared_here));
        //                     }
        //                     addImplementationSuccessElaboration(last, d);
        //                     diagnostics.add(d);
        //                 }
        //             }
        //             else {
        //                 Debug.fail("No error for last overload signature");
        //             }
        //         }
        //         else {
        //             const allDiagnostics: (readonly DiagnosticRelatedInformation[])[] = [];
        //             let max = 0;
        //             let min = Number.MAX_VALUE;
        //             let minIndex = 0;
        //             let i = 0;
        //             for (const c of candidatesForArgumentError) {
        //                 const chain = () => chainDiagnosticMessages(/*details*/ undefined, Diagnostics.Overload_0_of_1_2_gave_the_following_error, i + 1, candidates.length, signatureToString(c));
        //                 const diags = getSignatureApplicabilityError(node, args, c, assignableRelation, CheckMode.Normal, /*reportErrors*/ true, chain, /*inferenceContext*/ undefined);
        //                 if (diags) {
        //                     if (diags.length <= min) {
        //                         min = diags.length;
        //                         minIndex = i;
        //                     }
        //                     max = Math.max(max, diags.length);
        //                     allDiagnostics.push(diags);
        //                 }
        //                 else {
        //                     Debug.fail("No error for 3 or fewer overload signatures");
        //                 }
        //                 i++;
        //             }

        //             const diags = max > 1 ? allDiagnostics[minIndex] : flatten(allDiagnostics);
        //             Debug.assert(diags.length > 0, "No errors reported for 3 or fewer overload signatures");
        //             let chain = chainDiagnosticMessages(
        //                 map(diags, createDiagnosticMessageChainFromDiagnostic),
        //                 Diagnostics.No_overload_matches_this_call,
        //             );
        //             if (headMessage) {
        //                 chain = chainDiagnosticMessages(chain, headMessage);
        //             }
        //             // The below is a spread to guarantee we get a new (mutable) array - our `flatMap` helper tries to do "smart" optimizations where it reuses input
        //             // arrays and the emptyArray singleton where possible, which is decidedly not what we want while we're still constructing this diagnostic
        //             const related = [...flatMap(diags, d => (d as Diagnostic).relatedInformation) as DiagnosticRelatedInformation[]];
        //             let diag: Diagnostic;
        //             if (every(diags, d => d.start === diags[0].start && d.length === diags[0].length && d.file === diags[0].file)) {
        //                 const { file, start, length } = diags[0];
        //                 diag = { file, start, length, code: chain.code, category: chain.category, messageText: chain, relatedInformation: related };
        //             }
        //             else {
        //                 diag = createDiagnosticForNodeFromMessageChain(getSourceFileOfNode(node), getErrorNodeForCallNode(node), chain, related);
        //             }
        //             addImplementationSuccessElaboration(candidatesForArgumentError[0], diag);
        //             diagnostics.add(diag);
        //         }
        //     }
        //     else if (candidateForArgumentArityError) {
        //         diagnostics.add(getArgumentArityError(node, [candidateForArgumentArityError], args, headMessage));
        //     }
        //     else if (candidateForTypeArgumentError) {
        //         checkTypeArguments(candidateForTypeArgumentError, (node as CallExpression | TaggedTemplateExpression | JsxOpeningLikeElement).typeArguments!, /*reportErrors*/ true, headMessage);
        //     }
        //     else {
        //         const signaturesWithCorrectTypeArgumentArity = filter(signatures, s => hasCorrectTypeArgumentArity(s, typeArguments));
        //         if (signaturesWithCorrectTypeArgumentArity.length === 0) {
        //             diagnostics.add(getTypeArgumentArityError(node, signatures, typeArguments!, headMessage));
        //         }
        //         else {
        //             diagnostics.add(getArgumentArityError(node, signaturesWithCorrectTypeArgumentArity, args, headMessage));
        //         }
        //     }
        // }

        // return result;

        // function addImplementationSuccessElaboration(failed: Signature, diagnostic: Diagnostic) {
        //     const oldCandidatesForArgumentError = candidatesForArgumentError;
        //     const oldCandidateForArgumentArityError = candidateForArgumentArityError;
        //     const oldCandidateForTypeArgumentError = candidateForTypeArgumentError;

        //     const failedSignatureDeclarations = failed.declaration?.symbol?.declarations || emptyArray;
        //     const isOverload = failedSignatureDeclarations.length > 1;
        //     const implDecl = isOverload ? find(failedSignatureDeclarations, d => isFunctionLikeDeclaration(d) && nodeIsPresent(d.body)) : undefined;
        //     if (implDecl) {
        //         const candidate = getSignatureFromDeclaration(implDecl as FunctionLikeDeclaration);
        //         const isSingleNonGenericCandidate = !candidate.typeParameters;
        //         if (chooseOverload([candidate], assignableRelation, isSingleNonGenericCandidate)) {
        //             addRelatedInfo(diagnostic, createDiagnosticForNode(implDecl, Diagnostics.The_call_would_have_succeeded_against_this_implementation_but_implementation_signatures_of_overloads_are_not_externally_visible));
        //         }
        //     }

        //     candidatesForArgumentError = oldCandidatesForArgumentError;
        //     candidateForArgumentArityError = oldCandidateForArgumentArityError;
        //     candidateForTypeArgumentError = oldCandidateForTypeArgumentError;
        // }

        // function chooseOverload(candidates: Signature[], relation: Map<string, RelationComparisonResult>, isSingleNonGenericCandidate: boolean, signatureHelpTrailingComma = false) {
        //     candidatesForArgumentError = undefined;
        //     candidateForArgumentArityError = undefined;
        //     candidateForTypeArgumentError = undefined;

        //     if (isSingleNonGenericCandidate) {
        //         const candidate = candidates[0];
        //         if (some(typeArguments) || !hasCorrectArity(node, args, candidate, signatureHelpTrailingComma)) {
        //             return undefined;
        //         }
        //         if (getSignatureApplicabilityError(node, args, candidate, relation, CheckMode.Normal, /*reportErrors*/ false, /*containingMessageChain*/ undefined, /*inferenceContext*/ undefined)) {
        //             candidatesForArgumentError = [candidate];
        //             return undefined;
        //         }
        //         return candidate;
        //     }

        //     for (let candidateIndex = 0; candidateIndex < candidates.length; candidateIndex++) {
        //         let candidate = candidates[candidateIndex];
        //         if (!hasCorrectTypeArgumentArity(candidate, typeArguments) || !hasCorrectArity(node, args, candidate, signatureHelpTrailingComma)) {
        //             continue;
        //         }

        //         let checkCandidate: Signature;
        //         let inferenceContext: InferenceContext | undefined;

        //         if (candidate.typeParameters) {
        //             // If we are *inside the body of candidate*, we need to create a clone of `candidate` with differing type parameter identities,
        //             // so our inference results for this call doesn't pollute expression types referencing the outer type parameter!
        //             const paramLocation = candidate.typeParameters[0].symbol.declarations?.[0]?.parent;
        //             const candidateParameterContext = paramLocation || (candidate.declaration && isConstructorDeclaration(candidate.declaration) ? candidate.declaration.parent : candidate.declaration);
        //             if (candidateParameterContext && findAncestor(node, a => a === candidateParameterContext)) {
        //                 candidate = getImplementationSignature(candidate);
        //             }
        //             let typeArgumentTypes: readonly Type[] | undefined;
        //             if (some(typeArguments)) {
        //                 typeArgumentTypes = checkTypeArguments(candidate, typeArguments, /*reportErrors*/ false);
        //                 if (!typeArgumentTypes) {
        //                     candidateForTypeArgumentError = candidate;
        //                     continue;
        //                 }
        //             }
        //             else {
        //                 inferenceContext = createInferenceContext(candidate.typeParameters!, candidate, /*flags*/ isInJSFile(node) ? InferenceFlags.AnyDefault : InferenceFlags.None);
        //                 // The resulting type arguments are instantiated with the inference context mapper, as the inferred types may still contain references to the inference context's
        //                 //  type variables via contextual projection. These are kept generic until all inferences are locked in, so the dependencies expressed can pass constraint checks.
        //                 typeArgumentTypes = instantiateTypes(inferTypeArguments(node, candidate, args, argCheckMode | CheckMode.SkipGenericFunctions, inferenceContext), inferenceContext.nonFixingMapper);
        //                 argCheckMode |= inferenceContext.flags & InferenceFlags.SkippedGenericFunction ? CheckMode.SkipGenericFunctions : CheckMode.Normal;
        //             }
        //             checkCandidate = getSignatureInstantiation(candidate, typeArgumentTypes, isInJSFile(candidate.declaration), inferenceContext && inferenceContext.inferredTypeParameters);
        //             // If the original signature has a generic rest type, instantiation may produce a
        //             // signature with different arity and we need to perform another arity check.
        //             if (getNonArrayRestType(candidate) && !hasCorrectArity(node, args, checkCandidate, signatureHelpTrailingComma)) {
        //                 candidateForArgumentArityError = checkCandidate;
        //                 continue;
        //             }
        //         }
        //         else {
        //             checkCandidate = candidate;
        //         }
        //         if (getSignatureApplicabilityError(node, args, checkCandidate, relation, argCheckMode, /*reportErrors*/ false, /*containingMessageChain*/ undefined, inferenceContext)) {
        //             // Give preference to error candidates that have no rest parameters (as they are more specific)
        //             (candidatesForArgumentError || (candidatesForArgumentError = [])).push(checkCandidate);
        //             continue;
        //         }
        //         if (argCheckMode) {
        //             // If one or more context sensitive arguments were excluded, we start including
        //             // them now (and keeping do so for any subsequent candidates) and perform a second
        //             // round of type inference and applicability checking for this particular candidate.
        //             argCheckMode = CheckMode.Normal;
        //             if (inferenceContext) {
        //                 const typeArgumentTypes = instantiateTypes(inferTypeArguments(node, candidate, args, argCheckMode, inferenceContext), inferenceContext.mapper);
        //                 checkCandidate = getSignatureInstantiation(candidate, typeArgumentTypes, isInJSFile(candidate.declaration), inferenceContext.inferredTypeParameters);
        //                 // If the original signature has a generic rest type, instantiation may produce a
        //                 // signature with different arity and we need to perform another arity check.
        //                 if (getNonArrayRestType(candidate) && !hasCorrectArity(node, args, checkCandidate, signatureHelpTrailingComma)) {
        //                     candidateForArgumentArityError = checkCandidate;
        //                     continue;
        //                 }
        //             }
        //             if (getSignatureApplicabilityError(node, args, checkCandidate, relation, argCheckMode, /*reportErrors*/ false, /*containingMessageChain*/ undefined, inferenceContext)) {
        //                 // Give preference to error candidates that have no rest parameters (as they are more specific)
        //                 (candidatesForArgumentError || (candidatesForArgumentError = [])).push(checkCandidate);
        //                 continue;
        //             }
        //         }
        //         candidates[candidateIndex] = checkCandidate;
        //         return checkCandidate;
        //     }

        //     return undefined;
        // }
    }

    function invocationErrorDetails(errorTarget: Node, apparentType: Type, kind: SignatureKind): { messageChain: DiagnosticMessageChain; relatedMessage: DiagnosticMessage | undefined; } {
        let errorInfo: DiagnosticMessageChain | undefined;
        const isCall = kind === SignatureKind.Call;                
        if (apparentType.flags & TypeFlags.Union) {
            const types = (apparentType as UnionType).types;
            let hasSignatures = false;
            for (const constituent of types) {
                const signatures = getSignaturesOfType(constituent, kind);
                if (signatures.length !== 0) {
                    hasSignatures = true;
                    if (errorInfo) {
                        // Bail early if we already have an error, no chance of "No constituent of type is callable"
                        break;
                    }
                }
                else {
                    // Error on the first non callable constituent only
                    if (!errorInfo) {
                        errorInfo = chainDiagnosticMessages(
                            errorInfo,
                            isCall ?
                                Diagnostics.Type_0_has_no_call_signatures :
                                Diagnostics.Type_0_has_no_construct_signatures,
                            typeToString(constituent),
                        );
                        errorInfo = chainDiagnosticMessages(
                            errorInfo,
                            isCall ?
                                Diagnostics.Not_all_constituents_of_type_0_are_callable :
                                Diagnostics.Not_all_constituents_of_type_0_are_constructable,
                            typeToString(apparentType),
                        );
                    }
                    if (hasSignatures) {
                        // Bail early if we already found a siganture, no chance of "No constituent of type is callable"
                        break;
                    }
                }
            }
            if (!hasSignatures) {
                errorInfo = chainDiagnosticMessages(
                    /*details*/ undefined,
                    isCall ?
                        Diagnostics.No_constituent_of_type_0_is_callable :
                        Diagnostics.No_constituent_of_type_0_is_constructable,
                    typeToString(apparentType),
                );
            }
            if (!errorInfo) {
                errorInfo = chainDiagnosticMessages(
                    errorInfo,
                    isCall ?
                        Diagnostics.Each_member_of_the_union_type_0_has_signatures_but_none_of_those_signatures_are_compatible_with_each_other :
                        Diagnostics.Each_member_of_the_union_type_0_has_construct_signatures_but_none_of_those_signatures_are_compatible_with_each_other,
                    typeToString(apparentType),
                );
            }
        }
        else {
            errorInfo = chainDiagnosticMessages(
                errorInfo,
                isCall ?
                    Diagnostics.Type_0_has_no_call_signatures :
                    Diagnostics.Type_0_has_no_construct_signatures,
                typeToString(apparentType),
            );
        }

        let headMessage = isCall ? Diagnostics.This_expression_is_not_callable : Diagnostics.This_expression_is_not_constructable;
        
        return {
            messageChain: chainDiagnosticMessages(errorInfo, headMessage),
            relatedMessage: undefined,
        };
    }

    function getDiagnosticSpanForCallNode(node: CallExpression) {
        const sourceFile = getSourceFileOfNode(node);
        const { start, length } = getErrorSpanForNode(sourceFile, isPropertyAccessExpression(node.expression) ? node.expression.name : node.expression);
        return { start, length, sourceFile };
    }

    function invocationErrorRecovery(apparentType: Type, kind: SignatureKind, diagnostic: Diagnostic) {
        if (!apparentType.symbol) {
            return;
        }
        // TODO
        // const importNode = getSymbolLinks(apparentType.symbol).originatingImport;
        // // Create a diagnostic on the originating import if possible onto which we can attach a quickfix
        // //  An import call expression cannot be rewritten into another form to correct the error - the only solution is to use `.default` at the use-site
        // if (importNode && !isImportCall(importNode)) {
        //     const sigs = getSignaturesOfType(getTypeOfSymbol(getSymbolLinks(apparentType.symbol).target!), kind);
        //     if (!sigs || !sigs.length) return;

        //     addRelatedInfo(diagnostic, createDiagnosticForNode(importNode, Diagnostics.Type_originates_at_this_import_A_namespace_style_import_cannot_be_called_or_constructed_and_will_cause_a_failure_at_runtime_Consider_using_a_default_import_or_import_require_here_instead));
        // }
    }

    function invocationError(errorTarget: Node, apparentType: Type, kind: SignatureKind, relatedInformation?: DiagnosticRelatedInformation) {
        const { messageChain, relatedMessage: relatedInfo } = invocationErrorDetails(errorTarget, apparentType, kind);
        const diagnostic = createDiagnosticForNodeFromMessageChain(getSourceFileOfNode(errorTarget), errorTarget, messageChain);
        if (relatedInfo) {
            addRelatedInfo(diagnostic, createDiagnosticForNode(errorTarget, relatedInfo));
        }
        if (isCallExpression(errorTarget.parent)) {
            const { start, length } = getDiagnosticSpanForCallNode(errorTarget.parent);
            diagnostic.start = start;
            diagnostic.length = length;
        }
        diagnostics.add(diagnostic);
        invocationErrorRecovery(apparentType, kind, relatedInformation ? addRelatedInfo(diagnostic, relatedInformation) : diagnostic);
    }

    function getSignaturesOfStructuredType(type: Type, kind: SignatureKind): readonly Signature[] {
        if (type.flags & TypeFlags.StructuredType) {
            const resolved = resolveStructuredTypeMembers(type as ObjectType);
            return kind === SignatureKind.Call ? resolved.callSignatures : resolved.constructSignatures;
        }
        return emptyArray;
    }

    
    function forEachType<T>(type: Type, f: (t: Type) => T | undefined): T | undefined {
        return type.flags & TypeFlags.Union ? forEach((type as UnionType).types, f) : f(type);
    }

    function someType(type: Type, f: (t: Type) => boolean): boolean {
        return type.flags & TypeFlags.Union ? some((type as UnionType).types, f) : f(type);
    }

    function everyType(type: Type, f: (t: Type) => boolean): boolean {
        return type.flags & TypeFlags.Union ? every((type as UnionType).types, f) : f(type);
    }

    function everyContainedType(type: Type, f: (t: Type) => boolean): boolean {
        return type.flags & TypeFlags.UnionOrIntersection ? every((type as UnionOrIntersectionType).types, f) : f(type);
    }

    function isArrayOrTupleSymbol(symbol: Symbol | undefined) {
        console.info("TODO - implement me - isArrayOrTupleSymbol");
        return false;
        // if (!symbol || !globalArrayType.symbol || !globalReadonlyArrayType.symbol) {
        //     return false;
        // }
        // return !!getSymbolIfSameReference(symbol, globalArrayType.symbol) || !!getSymbolIfSameReference(symbol, globalReadonlyArrayType.symbol);
    }

    /**
     * Return the signatures of the given kind in the given type. Creates synthetic union signatures when necessary and
     * maps primitive types and type parameters are to their apparent types.
     */
    function getSignaturesOfType(type: Type, kind: SignatureKind): readonly Signature[] {
        const result = getSignaturesOfStructuredType(getReducedApparentType(type), kind);
        if (kind === SignatureKind.Call && !length(result) && type.flags & TypeFlags.Union) {
            if ((type as UnionType).arrayFallbackSignatures) {
                return (type as UnionType).arrayFallbackSignatures!;
            }
            // If the union is all different instantiations of a member of the global array type...
            let memberName: string;
            // TODO not sure we need this
            if (everyType(type, t => !!t.symbol?.parent && isArrayOrTupleSymbol(t.symbol.parent) && (!memberName ? (memberName = t.symbol.name, true) : memberName === t.symbol.name))) {
                // TODO - 
                // Transform the type from `(A[] | B[])["member"]` to `(A | B)[]["member"]` (since we pretend array is covariant anyway)
                // const arrayArg = mapType(type, t => getMappedType((isReadonlyArraySymbol(t.symbol.parent) ? globalReadonlyArrayType : globalArrayType).typeParameters![0], (t as AnonymousType).mapper!));
                // const arrayType = createArrayType(arrayArg, someType(type, t => isReadonlyArraySymbol(t.symbol.parent)));
                // return (type as UnionType).arrayFallbackSignatures = getSignaturesOfType(getTypeOfPropertyOfType(arrayType, memberName!)!, kind);
            }
            (type as UnionType).arrayFallbackSignatures = result;
        }
        return result;
    }

    function resolveErrorCall(node: CallLikeExpression): Signature {
        resolveUntypedCall(node);
        return unknownSignature;
    }

    function resolveSignature(node: CallLikeExpression, candidatesOutArray: Signature[] | undefined, checkMode: CheckMode): Signature {
        switch (node.kind) {
            case SyntaxKind.CallExpression:
                return resolveCallExpression(node, candidatesOutArray, checkMode);
            case SyntaxKind.NewExpression:
                throw "not implemented";
                //return resolveNewExpression(node, candidatesOutArray, checkMode);            
            // case SyntaxKind.BinaryExpression:
            //     return resolveInstanceofExpression(node, candidatesOutArray, checkMode);
        }
        Debug.assertNever(node, "Branch in 'resolveSignature' should be unreachable.");
    }

    function getShorthandAssignmentValueSymbol(location: Node | undefined): Symbol | undefined {
        if (location && location.kind === SyntaxKind.ShorthandPropertyAssignment) {
            return resolveEntityName((location as ShorthandPropertyAssignment).name, SymbolFlags.Value | SymbolFlags.Alias);
        }
        return undefined;
    }

}

const SymbolLinks = class implements SymbolLinks {
    declare _symbolLinksBrand: any;
};

/** @internal */
export function getNodeId(node: Node): number {
    if (!node.id) {
        node.id = nextNodeId;
        nextNodeId++;
    }
    return node.id;
}

function NodeLinks(this: NodeLinks) {
    this.flags = NodeCheckFlags.None;
}

/** @internal */
export const enum CheckMode {
    Normal = 0,                                     // Normal type checking
    Contextual = 1 << 0,                            // Explicitly assigned contextual type, therefore not cacheable
    Inferential = 1 << 1,                           // Inferential typing
    SkipContextSensitive = 1 << 2,                  // Skip context sensitive function expressions
    SkipGenericFunctions = 1 << 3,                  // Skip single signature generic functions
    IsForSignatureHelp = 1 << 4,                    // Call resolution for purposes of signature help
    RestBindingElement = 1 << 5,                    // Checking a type that is going to be used to determine the type of a rest binding element
                                                    //   e.g. in `const { a, ...rest } = foo`, when checking the type of `foo` to determine the type of `rest`,
                                                    //   we need to preserve generic types instead of substituting them for constraints
    TypeOnly = 1 << 6,                              // Called from getTypeOfExpression, diagnostics may be omitted
}

/** @internal */
export function getSymbolId(symbol: Symbol): SymbolId {
    if (!symbol.id) {
        symbol.id = nextSymbolId;
        nextSymbolId++;
    }

    return symbol.id;
}

const enum IntersectionState {
    None = 0,
    Source = 1 << 0, // Source type is a constituent of an outer intersection
    Target = 1 << 1, // Target type is a constituent of an outer intersection
}

/** Like 'isDeclarationName', but returns true for LHS of `import { x as y }` or `export { x as y }`. */
function isDeclarationNameOrImportPropertyName(name: Node): boolean {
    switch (name.parent.kind) {
        // case SyntaxKind.ImportSpecifier:
        // case SyntaxKind.ExportSpecifier:
        //     return isIdentifier(name) || name.kind === SyntaxKind.StringLiteral;
        default:
            return isDeclarationName(name);
    }
}

/** @param containingNode Node to check for parse error */
type AddUnusedDiagnostic = (containingNode: Node, type: UnusedKind, diagnostic: DiagnosticWithLocation) => void;

const enum UnusedKind {
    Local,
    Parameter,
}

const enum WideningKind {
    Normal,
    FunctionReturn,
    GeneratorNext,
    GeneratorYield,
}

/** @internal */
export const enum TypeFacts {
    None = 0,
    TypeofEQString = 1 << 0,      // typeof x === "string"
    TypeofEQNumber = 1 << 1,      // typeof x === "number"
    TypeofEQBigInt = 1 << 2,      // typeof x === "bigint"
    TypeofEQBoolean = 1 << 3,     // typeof x === "boolean"
    TypeofEQSymbol = 1 << 4,      // typeof x === "symbol"
    TypeofEQObject = 1 << 5,      // typeof x === "object"
    TypeofEQFunction = 1 << 6,    // typeof x === "function"
    TypeofEQHostObject = 1 << 7,  // typeof x === "xxx"
    TypeofNEString = 1 << 8,      // typeof x !== "string"
    TypeofNENumber = 1 << 9,      // typeof x !== "number"
    TypeofNEBigInt = 1 << 10,     // typeof x !== "bigint"
    TypeofNEBoolean = 1 << 11,    // typeof x !== "boolean"
    TypeofNESymbol = 1 << 12,     // typeof x !== "symbol"
    TypeofNEObject = 1 << 13,     // typeof x !== "object"
    TypeofNEFunction = 1 << 14,   // typeof x !== "function"
    TypeofNEHostObject = 1 << 15, // typeof x !== "xxx"
    EQUndefined = 1 << 16,        // x === undefined
    EQNull = 1 << 17,             // x === null
    EQUndefinedOrNull = 1 << 18,  // x === undefined / x === null
    NEUndefined = 1 << 19,        // x !== undefined
    NENull = 1 << 20,             // x !== null
    NEUndefinedOrNull = 1 << 21,  // x != undefined / x != null
    Truthy = 1 << 22,             // x
    Falsy = 1 << 23,              // !x
    IsUndefined = 1 << 24,        // Contains undefined or intersection with undefined
    IsNull = 1 << 25,             // Contains null or intersection with null
    IsUndefinedOrNull = IsUndefined | IsNull,
    All = (1 << 27) - 1,
    // The following members encode facts about particular kinds of types for use in the getTypeFacts function.
    // The presence of a particular fact means that the given test is true for some (and possibly all) values
    // of that kind of type.
    BaseStringStrictFacts = TypeofEQString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | NEUndefined | NENull | NEUndefinedOrNull,
    BaseStringFacts = BaseStringStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    StringStrictFacts = BaseStringStrictFacts | Truthy | Falsy,
    StringFacts = BaseStringFacts | Truthy,
    EmptyStringStrictFacts = BaseStringStrictFacts | Falsy,
    EmptyStringFacts = BaseStringFacts,
    NonEmptyStringStrictFacts = BaseStringStrictFacts | Truthy,
    NonEmptyStringFacts = BaseStringFacts | Truthy,
    BaseNumberStrictFacts = TypeofEQNumber | TypeofNEString | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | NEUndefined | NENull | NEUndefinedOrNull,
    BaseNumberFacts = BaseNumberStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    NumberStrictFacts = BaseNumberStrictFacts | Truthy | Falsy,
    NumberFacts = BaseNumberFacts | Truthy,
    ZeroNumberStrictFacts = BaseNumberStrictFacts | Falsy,
    ZeroNumberFacts = BaseNumberFacts,
    NonZeroNumberStrictFacts = BaseNumberStrictFacts | Truthy,
    NonZeroNumberFacts = BaseNumberFacts | Truthy,
    BaseBigIntStrictFacts = TypeofEQBigInt | TypeofNEString | TypeofNENumber | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | NEUndefined | NENull | NEUndefinedOrNull,
    BaseBigIntFacts = BaseBigIntStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    BigIntStrictFacts = BaseBigIntStrictFacts | Truthy | Falsy,
    BigIntFacts = BaseBigIntFacts | Truthy,
    ZeroBigIntStrictFacts = BaseBigIntStrictFacts | Falsy,
    ZeroBigIntFacts = BaseBigIntFacts,
    NonZeroBigIntStrictFacts = BaseBigIntStrictFacts | Truthy,
    NonZeroBigIntFacts = BaseBigIntFacts | Truthy,
    BaseBooleanStrictFacts = TypeofEQBoolean | TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | NEUndefined | NENull | NEUndefinedOrNull,
    BaseBooleanFacts = BaseBooleanStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    BooleanStrictFacts = BaseBooleanStrictFacts | Truthy | Falsy,
    BooleanFacts = BaseBooleanFacts | Truthy,
    FalseStrictFacts = BaseBooleanStrictFacts | Falsy,
    FalseFacts = BaseBooleanFacts,
    TrueStrictFacts = BaseBooleanStrictFacts | Truthy,
    TrueFacts = BaseBooleanFacts | Truthy,
    SymbolStrictFacts = TypeofEQSymbol | TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | NEUndefined | NENull | NEUndefinedOrNull | Truthy,
    SymbolFacts = SymbolStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    ObjectStrictFacts = TypeofEQObject | TypeofEQHostObject | TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEFunction | NEUndefined | NENull | NEUndefinedOrNull | Truthy,
    ObjectFacts = ObjectStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    FunctionStrictFacts = TypeofEQFunction | TypeofEQHostObject | TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | NEUndefined | NENull | NEUndefinedOrNull | Truthy,
    FunctionFacts = FunctionStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    VoidFacts = TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | EQUndefined | EQUndefinedOrNull | NENull | Falsy,
    UndefinedFacts = TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | EQUndefined | EQUndefinedOrNull | NENull | Falsy | IsUndefined,
    NullFacts = TypeofEQObject | TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEFunction | TypeofNEHostObject | EQNull | EQUndefinedOrNull | NEUndefined | Falsy | IsNull,
    EmptyObjectStrictFacts = All & ~(EQUndefined | EQNull | EQUndefinedOrNull | IsUndefinedOrNull),
    EmptyObjectFacts = All & ~IsUndefinedOrNull,
    UnknownFacts = All & ~IsUndefinedOrNull,
    AllTypeofNE = TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | NEUndefined,
    // Masks
    OrFactsMask = TypeofEQFunction | TypeofNEObject,
    AndFactsMask = All & ~OrFactsMask,
}

interface NodeBuilderContext {
    enclosingDeclaration: Node | undefined;
    /**
     * `enclosingFile` is generated from the initial `enclosingDeclaration` and
     * is used to ensure text ranges for generated nodes are not set based on nodes from outside
     * the original input's containing file. Checking the `enclosingDeclaration` at the time of
     * `setTextRange` is not sufficient, as the `enclosingDeclaration` is modified by the node builder
     * as it decends into some types as a shortcut to making certain scopes visible, and may be modified
     * into a declaration in a different file from the original input `enclosingDeclaration`!
     */
    enclosingFile: SourceFile | undefined;
    flags: NodeBuilderFlags;
    tracker: SymbolTrackerImpl;

    // State
    encounteredError: boolean;
    reportedDiagnostic: boolean;
    trackedSymbols: TrackedSymbol[] | undefined;
    visitedTypes: Set<number> | undefined;
    symbolDepth: Map<string, number> | undefined;
    inferTypeParameters: TypeParameter[] | undefined;
    approximateLength: number;
    truncating: boolean;
    mustCreateTypeParameterSymbolList: boolean;
    typeParameterSymbolList: Set<number> | undefined;
    mustCreateTypeParametersNamesLookups: boolean;
    typeParameterNames: Map<TypeId, Identifier> | undefined;
    typeParameterNamesByText: Set<string> | undefined;
    typeParameterNamesByTextNextNameCount: Map<string, number> | undefined;
    usedSymbolNames: Set<string> | undefined;
    remappedSymbolNames: Map<SymbolId, string> | undefined;
    remappedSymbolReferences: Map<SymbolId, Symbol> | undefined;
    reverseMappedStack: ReverseMappedSymbol[] | undefined;
    bundled: boolean;
    mapper: TypeMapper | undefined;
}

class SymbolTrackerImpl implements SymbolTracker {
    moduleResolverHost: ModuleSpecifierResolutionHost & { getCommonSourceDirectory(): string; } | undefined = undefined;
    context: NodeBuilderContext;

    readonly inner: SymbolTracker | undefined = undefined;
    readonly canTrackSymbol: boolean;
    disableTrackSymbol = false;

    constructor(context: NodeBuilderContext, tracker: SymbolTracker | undefined, moduleResolverHost: ModuleSpecifierResolutionHost & { getCommonSourceDirectory(): string; } | undefined) {
        while (tracker instanceof SymbolTrackerImpl) {
            tracker = tracker.inner;
        }

        this.inner = tracker;
        this.moduleResolverHost = moduleResolverHost;
        this.context = context;
        this.canTrackSymbol = !!this.inner?.trackSymbol;
    }

    trackSymbol(symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags): boolean {
        if (this.inner?.trackSymbol && !this.disableTrackSymbol) {
            if (this.inner.trackSymbol(symbol, enclosingDeclaration, meaning)) {
                this.onDiagnosticReported();
                return true;
            }
            // Skip recording type parameters as they dont contribute to late painted statements
            if (!(symbol.flags & SymbolFlags.TypeParameter)) (this.context.trackedSymbols ??= []).push([symbol, enclosingDeclaration, meaning]);
        }
        return false;
    }

    reportInaccessibleThisError(): void {
        if (this.inner?.reportInaccessibleThisError) {
            this.onDiagnosticReported();
            this.inner.reportInaccessibleThisError();
        }
    }

    reportPrivateInBaseOfClassExpression(propertyName: string): void {
        if (this.inner?.reportPrivateInBaseOfClassExpression) {
            this.onDiagnosticReported();
            this.inner.reportPrivateInBaseOfClassExpression(propertyName);
        }
    }

    reportInaccessibleUniqueSymbolError(): void {
        if (this.inner?.reportInaccessibleUniqueSymbolError) {
            this.onDiagnosticReported();
            this.inner.reportInaccessibleUniqueSymbolError();
        }
    }

    reportCyclicStructureError(): void {
        if (this.inner?.reportCyclicStructureError) {
            this.onDiagnosticReported();
            this.inner.reportCyclicStructureError();
        }
    }

    reportLikelyUnsafeImportRequiredError(specifier: string): void {
        if (this.inner?.reportLikelyUnsafeImportRequiredError) {
            this.onDiagnosticReported();
            this.inner.reportLikelyUnsafeImportRequiredError(specifier);
        }
    }

    reportTruncationError(): void {
        if (this.inner?.reportTruncationError) {
            this.onDiagnosticReported();
            this.inner.reportTruncationError();
        }
    }

    reportNonlocalAugmentation(containingFile: SourceFile, parentSymbol: Symbol, augmentingSymbol: Symbol): void {
        if (this.inner?.reportNonlocalAugmentation) {
            this.onDiagnosticReported();
            this.inner.reportNonlocalAugmentation(containingFile, parentSymbol, augmentingSymbol);
        }
    }

    reportNonSerializableProperty(propertyName: string): void {
        if (this.inner?.reportNonSerializableProperty) {
            this.onDiagnosticReported();
            this.inner.reportNonSerializableProperty(propertyName);
        }
    }

    private onDiagnosticReported() {
        this.context.reportedDiagnostic = true;
    }

    reportInferenceFallback(node: Node): void {
        if (this.inner?.reportInferenceFallback) {
            this.inner.reportInferenceFallback(node);
        }
    }
}

function createBasicNodeBuilderModuleSpecifierResolutionHost(host: TypeCheckerHost): ModuleSpecifierResolutionHost {
    return {
        getCommonSourceDirectory: !!(host as Program).getCommonSourceDirectory ? () => (host as Program).getCommonSourceDirectory() : () => "",
        getCurrentDirectory: () => host.getCurrentDirectory(),
        //getSymlinkCache: maybeBind(host, host.getSymlinkCache),
        //getPackageJsonInfoCache: () => host.getPackageJsonInfoCache?.(),
        useCaseSensitiveFileNames: maybeBind(host, host.useCaseSensitiveFileNames),
        //redirectTargetsMap: host.redirectTargetsMap,
        //getProjectReferenceRedirect: fileName => host.getProjectReferenceRedirect(fileName),
        //isSourceOfProjectReferenceRedirect: fileName => host.isSourceOfProjectReferenceRedirect(fileName),
        //fileExists: fileName => host.fileExists(fileName),
        getFileIncludeReasons: () => host.getFileIncludeReasons(),
        readFile: host.readFile ? (fileName => host.readFile!(fileName)) : undefined,
    };
}

const enum MembersOrExportsResolutionKind {
    resolvedExports = "resolvedExports",
    resolvedMembers = "resolvedMembers",
}

/** @internal */
export function signatureHasRestParameter(s: Signature) {
    return !!(s.flags & SignatureFlags.HasRestParameter);
}

const enum MinArgumentCountFlags {
    None = 0,
    StrongArityForUntypedJS = 1 << 0,
    VoidIsNonOptional = 1 << 1,
}

const enum ExpandingFlags {
    None = 0,
    Source = 1,
    Target = 1 << 1,
    Both = Source | Target,
}

const enum RecursionFlags {
    None = 0,
    Source = 1 << 0,
    Target = 1 << 1,
    Both = Source | Target,
}
