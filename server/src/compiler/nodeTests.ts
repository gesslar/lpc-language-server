import { ArrayBindingPattern, ArrayTypeNode, ArrowFunction, BinaryExpression, BindingElement, Block, CallExpression, CaseBlock, CaseClause, CaseKeyword, CloneObjectExpression, ComputedPropertyName, DefaultClause, ElementAccessExpression, ExpressionStatement, FloatLiteral, ForStatement, FunctionDeclaration, FunctionExpression, Identifier, IfStatement, IndexedAccessTypeNode, InheritDeclaration, InlineClosureExpression, IntLiteral, JSDoc, JSDocDeprecatedTag, JSDocLink, JSDocLinkCode, JSDocLinkPlain, JSDocOverloadTag, JSDocParameterTag, JSDocSignature, JSDocTemplateTag, JSDocText, JSDocTypedefTag, JSDocTypeExpression, JSDocTypeLiteral, LabeledStatement, LiteralTypeNode, NewExpression, Node, NodeFlags, ObjectLiteralExpression, ParameterDeclaration, ParenthesizedExpression, ParenthesizedTypeNode, PrefixUnaryExpression, PropertyAccessExpression, PropertyAssignment, PropertyDeclaration, PropertySignature, QualifiedName, ShorthandPropertyAssignment, SourceFile, SpreadElement, StringLiteral, StructDeclaration, SwitchStatement, SyntaxKind, SyntaxList, TypeLiteralNode, TypeParameterDeclaration, TypeReferenceNode, UnionTypeNode, VariableDeclaration, VariableDeclarationList, VariableStatement } from "./_namespaces/lpc";

export function isBinaryExpression(node: Node): node is BinaryExpression {
    return node.kind === SyntaxKind.BinaryExpression;
}

// export function isParenthesizedExpression(
//     node: Node
// ): node is ParenthesizedExpression {
//     return node.kind === SyntaxKind.ParenthesizedExpression;
// }

// export function isPrefixUnaryExpression(
//     node: Node
// ): node is PrefixUnaryExpression {
//     return node.kind === SyntaxKind.PrefixUnaryExpression;
// }

export function isPropertyAccessExpression(
    node: Node
): node is PropertyAccessExpression {
    return node.kind === SyntaxKind.PropertyAccessExpression;
}

export function isIdentifier(node: Node): node is Identifier {
    return node.kind === SyntaxKind.Identifier;
}

export function isVariableStatement(node: Node): node is VariableStatement {
    return node.kind === SyntaxKind.VariableStatement;
}

export function isFunctionDeclaration(node: Node): node is FunctionDeclaration {
    return node.kind === SyntaxKind.FunctionDeclaration;
}

export function isBlock(node: Node): node is Block {
    return node.kind === SyntaxKind.Block;
}

export function isCallExpression(node: Node): node is CallExpression {
    return node.kind === SyntaxKind.CallExpression;
}

export function isInheritDeclaration(node: Node): node is InheritDeclaration {
    return node.kind === SyntaxKind.InheritDeclaration;
}

export function isCloneObjectExpression(node: Node): node is CloneObjectExpression {
    return node.kind === SyntaxKind.CloneObjectExpression;
}

export function isVariableDeclaration(node: Node): node is VariableDeclaration {
    return node.kind === SyntaxKind.VariableDeclaration;
}

export function isVariableDeclarationList(node: Node): node is VariableDeclarationList {
    return node.kind === SyntaxKind.VariableDeclarationList;
}

// JSDoc Elements

export function isJSDocTypeExpression(node: Node): node is JSDocTypeExpression {
    return node.kind === SyntaxKind.JSDocTypeExpression;
}



export function isFunctionExpression(node: Node): node is FunctionExpression {
    return node.kind === SyntaxKind.FunctionExpression;
}

export function isIntLiteral(node: Node): node is IntLiteral {
    return node.kind === SyntaxKind.IntLiteral;
}

export function isFloatLiteral(node:Node): node is FloatLiteral {
    return node.kind === SyntaxKind.FloatLiteral;
}

export function isStringLiteral(node: Node): node is StringLiteral {
    return node.kind === SyntaxKind.StringLiteral;
}

export function isTypeParameterDeclaration(node: Node): node is TypeParameterDeclaration {
    return node.kind === SyntaxKind.TypeParameter;
}

// TODO(rbuckton): Rename to 'isParameterDeclaration'
export function isParameter(node: Node): node is ParameterDeclaration {
    return node.kind === SyntaxKind.Parameter;
}

export function isArrayTypeNode(node: Node): node is ArrayTypeNode {
    return node.kind === SyntaxKind.ArrayType;
}

export function isUnionTypeNode(node: Node): node is UnionTypeNode {
    return node.kind === SyntaxKind.UnionType;
}

// Top-level nodes
export function isSourceFile(node: Node): node is SourceFile {
    return node.kind === SyntaxKind.SourceFile;
}

export function isJSDocSignature(node: Node): node is JSDocSignature {
    return node.kind === SyntaxKind.JSDocSignature;
}

export function isJSDoc(node: Node): node is JSDoc {
    return node.kind === SyntaxKind.JSDoc;
}

export function isExpressionStatement(node: Node): node is ExpressionStatement {
    return node.kind === SyntaxKind.ExpressionStatement;
}

export function isDecorator(node: Node) {
    return false;
}

export function isIfStatement(node: Node): node is IfStatement {
    return node.kind === SyntaxKind.IfStatement;
}

export function isDefaultClause(node: Node): node is DefaultClause {
    return node.kind === SyntaxKind.DefaultClause;
}

export function isInlineClosureExpression(node: Node): node is InlineClosureExpression {
    return node.kind === SyntaxKind.InlineClosureExpression;
}

export function isParenthesizedExpression(node: Node): node is ParenthesizedExpression {
    return node.kind === SyntaxKind.ParenthesizedExpression;
}

export function isPrefixUnaryExpression(node: Node): node is PrefixUnaryExpression {
    return node.kind === SyntaxKind.PrefixUnaryExpression;
}

export function isJSDocTemplateTag(node: Node): node is JSDocTemplateTag {
    return node.kind === SyntaxKind.JSDocTemplateTag;
}

export function isStructDeclaration(node:Node): node is StructDeclaration {
    return node.kind === SyntaxKind.StructDeclaration;
}

export function isShorthandPropertyAssignment(node: Node): node is ShorthandPropertyAssignment {
    return node.kind === SyntaxKind.ShorthandPropertyAssignment;
}

export function isJSDocDeprecatedTag(node: Node): node is JSDocDeprecatedTag {
    return node.kind === SyntaxKind.JSDocDeprecatedTag;
}

export function isBindingElement(node: Node): node is BindingElement {
    return node.kind === SyntaxKind.BindingElement;
}

export function isPropertyDeclaration(node: Node): node is PropertyDeclaration {
    return node.kind === SyntaxKind.PropertyDeclaration;
}

export function isForStatement(node: Node): node is ForStatement {
    return node.kind === SyntaxKind.ForStatement;
}

export function isSpreadAssignment(node: Node) {//: node is SpreadAssignment {
    // TODO
    return false;//return node.kind === SyntaxKind.SpreadAssignment;
}

export function isLiteralTypeNode(node: Node): node is LiteralTypeNode {
    return node.kind === SyntaxKind.LiteralType;
}

export function isElementAccessExpression(node: Node): node is ElementAccessExpression {
    return node.kind === SyntaxKind.ElementAccessExpression;
}

export function isIndexedAccessTypeNode(node: Node): node is IndexedAccessTypeNode {
    return node.kind === SyntaxKind.IndexedAccessType;
}

export function isArrayBindingPattern(node: Node): node is ArrayBindingPattern {
    return node.kind === SyntaxKind.ArrayBindingPattern;
}

export function isSwitchStatement(node: Node): node is SwitchStatement {
    return node.kind === SyntaxKind.SwitchStatement;
}

export function isComputedPropertyName(node: Node): node is ComputedPropertyName {
    return node.kind === SyntaxKind.ComputedPropertyName;
}

export function isQualifiedName(node: Node): node is QualifiedName {
    return node.kind === SyntaxKind.QualifiedName;
}

export function isNewExpression(node: Node): node is NewExpression {
    return node.kind === SyntaxKind.NewExpression;
}

export function isJSDocTypedefTag(node: Node): node is JSDocTypedefTag {
    return node.kind === SyntaxKind.JSDocTypedefTag;
}

export function isPrivateIdentifier(node: Node){//: node is PrivateIdentifier {
    return false;//return node.kind === SyntaxKind.PrivateIdentifier;
}

export function isObjectLiteralExpression(node: Node): node is ObjectLiteralExpression {
    return node.kind === SyntaxKind.ObjectLiteralExpression;
}

export function isParenthesizedTypeNode(node: Node): node is ParenthesizedTypeNode {
    return node.kind === SyntaxKind.ParenthesizedType;
}

export function isJSDocParameterTag(node: Node): node is JSDocParameterTag {
    return node.kind === SyntaxKind.JSDocParameterTag;
}

export function isPropertyAssignment(node: Node): node is PropertyAssignment {
    return node.kind === SyntaxKind.PropertyAssignment;
}

export function isTypeReferenceNode(node: Node): node is TypeReferenceNode {
    return node.kind === SyntaxKind.TypeReference;
}

export function isTypeLiteralNode(node: Node): node is TypeLiteralNode {
    return node.kind === SyntaxKind.TypeLiteral;
}

export function isConstructorDeclaration(node: Node) {//: node is ConstructorDeclaration {
    return false;//return node.kind === SyntaxKind.Constructor;
}

export function isClassDeclaration(node: Node): node is Node {
    return false;//return node.kind === SyntaxKind.ClassDeclaration;
}

export function isArrowFunction(node: Node): node is ArrowFunction {
    return false;//return node.kind === SyntaxKind.ArrowFunction;
}

/** @internal */
export function isJSDocTypeAlias(node: Node): node is JSDocTypedefTag/* | JSDocCallbackTag | JSDocEnumTag*/ {
    return node.kind === SyntaxKind.JSDocTypedefTag || node.kind === SyntaxKind.JSDocCallbackTag || node.kind === SyntaxKind.JSDocEnumTag;
}

export function isVoidExpression(node: Node): node is Node { //VoidExpression {
    return false;//return node.kind === SyntaxKind.VoidExpression;
}

export function isLabeledStatement(node: Node): node is LabeledStatement {
    return node.kind === SyntaxKind.LabeledStatement;
}

export function isNoSubstitutionTemplateLiteral(node: Node){//}: node is NoSubstitutionTemplateLiteral {
    return false;// return node.kind === SyntaxKind.NoSubstitutionTemplateLiteral;
}

export function isPropertySignature(node: Node): node is PropertySignature {
    return node.kind === SyntaxKind.PropertySignature;
}

export function isNumericLiteral(node: Node): node is IntLiteral | FloatLiteral {
    return node.kind === SyntaxKind.IntKeyword || node.kind === SyntaxKind.FloatKeyword;
}

export function isModuleBlock(node: Node) {//: node is ModuleBlock {
    return false;//return node.kind === SyntaxKind.ModuleBlock;
}

export function isMethodDeclaration(node: Node) {//: node is MethodDeclaration {
    return false;//return node.kind === SyntaxKind.MethodDeclaration;
}

export function isJSDocLink(node: Node): node is JSDocLink {
    return node.kind === SyntaxKind.JSDocLink;
}

export function isJSDocLinkCode(node: Node): node is JSDocLinkCode {
    return node.kind === SyntaxKind.JSDocLinkCode;
}

export function isJSDocLinkPlain(node: Node): node is JSDocLinkPlain {
    return node.kind === SyntaxKind.JSDocLinkPlain;
}

export function isFunctionTypeNode(node: Node){//: node is FunctionTypeNode {
    return false;//return node.kind === SyntaxKind.FunctionType;
}

export function isJSDocOverloadTag(node: Node): node is JSDocOverloadTag {
    return node.kind === SyntaxKind.JSDocOverloadTag;
}

export function isJSDocTypeLiteral(node: Node): node is JSDocTypeLiteral {
    return node.kind === SyntaxKind.JSDocTypeLiteral;
}

export function isJSDocText(node: Node) : node is JSDocText {
    return node.kind === SyntaxKind.JSDocText;
}

export function isCaseClause(node: Node): node is CaseClause {
    return node.kind === SyntaxKind.CaseClause;
}

export function isJSDocImportTag(node: Node) {//}: node is JSDocImportTag {
    return false;//return node.kind === SyntaxKind.JSDocImportTag;
}

export function isCaseBlock(node: Node): node is CaseBlock {
    return node.kind === SyntaxKind.CaseBlock;
}

/** @internal */
export function isSyntaxList(n: Node): n is SyntaxList {
    return n.kind === SyntaxKind.SyntaxList;
}

/** @internal */
export function isCaseKeyword(node: Node): node is CaseKeyword {
    return node.kind === SyntaxKind.CaseKeyword;
}

export function isSpreadElement(node: Node): node is SpreadElement {
    return node.kind === SyntaxKind.SpreadElement;
}