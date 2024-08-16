import { append, Debug, EmitFlags, EmitNode, getParseTreeNode, getSourceFileOfNode, Identifier, InternalEmitFlags, isParseTreeNode, Node, NodeArray, SourceFile, SyntaxKind, SynthesizedComment, TypeNode, TypeParameterDeclaration } from "../_namespaces/lpc";

/**
 * Sets flags that control emit behavior of a node.
 */
export function setEmitFlags<T extends Node>(node: T, emitFlags: EmitFlags) {
    getOrCreateEmitNode(node).flags = emitFlags;
    return node;
}


/**
 * Associates a node with the current transformation, initializing
 * various transient transformation properties.
 * @internal
 */
export function getOrCreateEmitNode(node: Node): EmitNode {
    if (!node.emitNode) {
        if (isParseTreeNode(node)) {
            // To avoid holding onto transformation artifacts, we keep track of any
            // parse tree node we are annotating. This allows us to clean them up after
            // all transformations have completed.
            if (node.kind === SyntaxKind.SourceFile) {
                return node.emitNode = { annotatedNodes: [node] } as EmitNode;
            }

            const sourceFile = getSourceFileOfNode(getParseTreeNode(getSourceFileOfNode(node))) ?? Debug.fail("Could not determine parsed source file.");
            getOrCreateEmitNode(sourceFile).annotatedNodes!.push(node);
        }

        node.emitNode = {} as EmitNode;
    }
    else {
        Debug.assert(!(node.emitNode.internalFlags & InternalEmitFlags.Immutable), "Invalid attempt to mutate an immutable node.");
    }
    return node.emitNode;
}


/**
 * Gets a custom text range to use when emitting comments.
 *
 * @internal
 */
export function getStartsOnNewLine(node: Node) {
    return node.emitNode?.startsOnNewLine;
}

/** @internal */
export function setIdentifierTypeArguments<T extends Identifier>(node: T, typeArguments: NodeArray<TypeNode | TypeParameterDeclaration> | undefined) {
    getOrCreateEmitNode(node).identifierTypeArguments = typeArguments;
    return node;
}

/** @internal */
export function getIdentifierTypeArguments(node: Identifier): NodeArray<TypeNode | TypeParameterDeclaration> | undefined {
    return node.emitNode?.identifierTypeArguments;
}

export function setSyntheticLeadingComments<T extends Node>(node: T, comments: SynthesizedComment[] | undefined) {
    getOrCreateEmitNode(node).leadingComments = comments;
    return node;
}

export function getSyntheticLeadingComments(node: Node): SynthesizedComment[] | undefined {
    return node.emitNode?.leadingComments;
}

export function addSyntheticLeadingComment<T extends Node>(node: T, kind: SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia, text: string, hasTrailingNewLine?: boolean) {
    return setSyntheticLeadingComments(node, append<SynthesizedComment>(getSyntheticLeadingComments(node), { kind, pos: -1, end: -1, hasTrailingNewLine, text }));
}


/**
 * Clears any `EmitNode` entries from parse-tree nodes.
 * @param sourceFile A source file.
 */
export function disposeEmitNodes(sourceFile: SourceFile | undefined) {
    // During transformation we may need to annotate a parse tree node with transient
    // transformation properties. As parse tree nodes live longer than transformation
    // nodes, we need to make sure we reclaim any memory allocated for custom ranges
    // from these nodes to ensure we do not hold onto entire subtrees just for position
    // information. We also need to reset these nodes to a pre-transformation state
    // for incremental parsing scenarios so that we do not impact later emit.
    const annotatedNodes = getSourceFileOfNode(getParseTreeNode(sourceFile))?.emitNode?.annotatedNodes;
    if (annotatedNodes) {
        for (const node of annotatedNodes) {
            node.emitNode = undefined;
        }
    }
}
