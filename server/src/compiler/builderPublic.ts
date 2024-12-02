import { CancellationToken, CompilerOptions, Diagnostic, DiagnosticWithLocation, EmitResult, Program, SourceFile, WriteFileCallback } from "./_namespaces/lpc.js";

/**
 * Builder to manage the program state changes
 */
export interface BuilderProgram {
    /** @internal */
    getState(): any;
    /** @internal */
    //state: ReusableBuilderProgramState;
    /** @internal */
    hasChangedEmitSignature?(): boolean;
    /**
     * Returns current program
     */
    getProgram(): Program;
    /**
     * Returns current program that could be undefined if the program was released
     *
     * @internal
     */
    getProgramOrUndefined(): Program | undefined;
    /**
     * Releases reference to the program, making all the other operations that need program to fail.
     *
     * @internal
     */
    releaseProgram(): void;
    /**
     * Get compiler options of the program
     */
    getCompilerOptions(): CompilerOptions;
    /**
     * Get the source file in the program with file name
     */
    getSourceFile(fileName: string): SourceFile | undefined;
    /**
     * Get a list of files in the program
     */
    getSourceFiles(): readonly SourceFile[];
    /**
     * Get the diagnostics for compiler options
     */
    getOptionsDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
    /**
     * Get the diagnostics that dont belong to any file
     */
    getGlobalDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
    /**
     * Get the diagnostics from config file parsing
     */
    getConfigFileParsingDiagnostics(): readonly Diagnostic[];
    /**
     * Get the syntax diagnostics, for all source files if source file is not supplied
     */
    getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
    /**
     * Get the declaration diagnostics, for all source files if source file is not supplied
     */
    getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
    /**
     * Get all the dependencies of the file
     */
    getAllDependencies(sourceFile: SourceFile): readonly string[];
    /**
     * Get the diagnostics from config file parsing
     */
    getConfigFileParsingDiagnostics(): readonly Diagnostic[];
    /**
     * Gets the semantic diagnostics from the program corresponding to this state of file (if provided) or whole program
     * The semantic diagnostics are cached and managed here
     * Note that it is assumed that when asked about semantic diagnostics through this API,
     * the file has been taken out of affected files so it is safe to use cache or get from program and cache the diagnostics
     * In case of SemanticDiagnosticsBuilderProgram if the source file is not provided,
     * it will iterate through all the affected files, to ensure that cache stays valid and yet provide a way to get all semantic diagnostics
     */
    getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
    /**
     * Emits the JavaScript and declaration files.
     * When targetSource file is specified, emits the files corresponding to that source file,
     * otherwise for the whole program.
     * In case of EmitAndSemanticDiagnosticsBuilderProgram, when targetSourceFile is specified,
     * it is assumed that that file is handled from affected file list. If targetSourceFile is not specified,
     * it will only emit all the affected files instead of whole program
     *
     * The first of writeFile if provided, writeFile of BuilderProgramHost if provided, writeFile of compiler host
     * in that order would be used to write the files
     */
    emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean/*, customTransformers?: CustomTransformers*/): EmitResult;
    /** @internal */
    emitBuildInfo(writeFile?: WriteFileCallback, cancellationToken?: CancellationToken): EmitResult;
    /**
     * Get the current directory of the program
     */
    getCurrentDirectory(): string;
    /** @internal */
    close(): void;
}