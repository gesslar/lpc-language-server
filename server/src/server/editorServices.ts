import { arrayFrom, combinePaths, containsPath, createCachedDirectoryStructureHost, createGetCanonicalFileName, createMultiMap, Debug, Diagnostic, DirectoryStructureHost, DocumentRegistry, FileSystemEntries, FileWatcher, FileWatcherEventKind, find, getDirectoryPath, getNormalizedAbsolutePath, isNodeModulesDirectory, isRootedDiskPath, LanguageServiceMode, missingFileModifiedTime, MultiMap, noop, normalizePath, Path, PollingInterval, ProgramUpdateLevel, returnFalse, ScriptKind, startsWith, TextChange, toPath, tracing, tryAddToSet, WatchFactory, WatchType } from "./_namespaces/lpc";
import { asNormalizedPath, ConfiguredProject, findLpcConfig, HostCancellationToken, isDynamicFileName, isProjectDeferredClose, Logger, LogLevel, NormalizedPath, normalizedPathToPath, Project, ScriptInfo, ServerHost, Session, ThrottledOperations, toNormalizedPath } from "./_namespaces/lpc.server";
import * as protocol from "./protocol.js";

export const maxProgramSizeForNonTsFiles = 20 * 1024 * 1024;
/** @internal */
export const maxFileSize = 4 * 1024 * 1024;

export const ProjectsUpdatedInBackgroundEvent = "projectsUpdatedInBackground";
export const ProjectLoadingStartEvent = "projectLoadingStart";
export const ProjectLoadingFinishEvent = "projectLoadingFinish";
export const LargeFileReferencedEvent = "largeFileReferenced";
export const ConfigFileDiagEvent = "configFileDiag";
export const ProjectLanguageServiceStateEvent = "projectLanguageServiceState";
export const ProjectInfoTelemetryEvent = "projectInfo";
export const OpenFileInfoTelemetryEvent = "openFileInfo";
export const CreateFileWatcherEvent: protocol.CreateFileWatcherEventName = "createFileWatcher";
export const CreateDirectoryWatcherEvent: protocol.CreateDirectoryWatcherEventName = "createDirectoryWatcher";
export const CloseFileWatcherEvent: protocol.CloseFileWatcherEventName = "closeFileWatcher";

const noopConfigFileWatcher: FileWatcher = { close: noop };

export class ProjectService {
    /** @internal */
    readonly documentRegistry: DocumentRegistry;

    /**
     * Container of all known scripts
     *
     * @internal
     */
    readonly filenameToScriptInfo = new Map<Path, ScriptInfo>();

    /**
     * All the open script info that needs recalculation of the default project,
     * this also caches config file info before config file change was detected to use it in case projects are not updated yet
     */
    private pendingOpenFileProjectUpdates?: Map<Path, ConfigFileName>;

    readonly currentDirectory: NormalizedPath;
    readonly toCanonicalFileName: (f: string) => string;

    private pendingProjectUpdates = new Map<string, Project>();
    /** @internal */ readonly throttledOperations: ThrottledOperations;
    
    public readonly host: ServerHost;
    public readonly logger: Logger;
    public readonly cancellationToken: HostCancellationToken;
    public readonly useInferredProjectPerProjectRoot: boolean;
    private readonly globalCacheLocationDirectoryPath: Path | undefined;    

    public readonly serverMode: LanguageServiceMode;
    public readonly throttleWaitMilliseconds?: number;
    private readonly hostConfiguration: any;//todo HostConfiguration;
    private readonly suppressDiagnosticEvents?: boolean;

    /** @internal */
    readonly session: Session<unknown> | undefined;
    /**
     * projects specified by a lpc-config.json file
     */
    readonly configuredProjects: Map<string, ConfiguredProject> = new Map<string, ConfiguredProject>();
    /**
     * This is a map of config file paths existence that doesnt need query to disk
     * - The entry can be present because there is inferred project that needs to watch addition of config file to directory
     *   In this case the exists could be true/false based on config file is present or not
     * - Or it is present if we have configured project open with config file at that location
     *   In this case the exists property is always true
     *
     * @internal
     */
    readonly configFileExistenceInfoCache = new Map<NormalizedPath, ConfigFileExistenceInfo>();

    /**
     * Map to the real path of the infos
     *
     * @internal
     */
    readonly realpathToScriptInfos: MultiMap<Path, ScriptInfo> | undefined;
    
    /** @internal */
    readonly eventHandler?: ProjectServiceEventHandler;

    /**
     * Open files: with value being project root path, and key being Path of the file that is open
     */
    readonly openFiles: Map<Path, NormalizedPath | undefined> = new Map<Path, NormalizedPath | undefined>();

    /** Config files looked up and cached config files for open script info */
    private readonly configFileForOpenFiles = new Map<Path, ConfigFileName>();
    
    /**
     * Contains all the deleted script info's version information so that
     * it does not reset when creating script info again
     * (and could have potentially collided with version where contents mismatch)
     */
    private readonly filenameToScriptInfoVersion = new Map<Path, number>();

    /**
     * Map of open files that are opened without complete path but have projectRoot as current directory
     */
    private readonly openFilesWithNonRootedDiskPath = new Map<string, ScriptInfo>();
    
    /** @internal */
    readonly watchFactory: WatchFactory<WatchType, Project | NormalizedPath>;
    
    constructor(opts: ProjectServiceOptions) {
        this.host = opts.host;
        this.logger = opts.logger;
        this.cancellationToken = opts.cancellationToken;
        // this.useSingleInferredProject = opts.useSingleInferredProject;
        this.useInferredProjectPerProjectRoot = opts.useInferredProjectPerProjectRoot;
        // this.typingsInstaller = opts.typingsInstaller || nullTypingsInstaller;
        this.throttleWaitMilliseconds = opts.throttleWaitMilliseconds;
        this.eventHandler = opts.eventHandler;
        // this.suppressDiagnosticEvents = opts.suppressDiagnosticEvents;
        // this.globalPlugins = opts.globalPlugins || emptyArray;
        // this.pluginProbeLocations = opts.pluginProbeLocations || emptyArray;
        // this.allowLocalPluginLoads = !!opts.allowLocalPluginLoads;
        // this.typesMapLocation = (opts.typesMapLocation === undefined) ? combinePaths(getDirectoryPath(this.getExecutingFilePath()), "typesMap.json") : opts.typesMapLocation;
        this.session = opts.session;
        // this.jsDocParsingMode = opts.jsDocParsingMode;

        if (opts.serverMode !== undefined) {
            this.serverMode = opts.serverMode;
        }
        else {
            this.serverMode = LanguageServiceMode.Semantic;
        }

        if (this.host.realpath) {
            this.realpathToScriptInfos = createMultiMap();
        }
        
        this.currentDirectory = toNormalizedPath(opts.projectRootFolder || this.host.getCurrentDirectory());
        this.toCanonicalFileName = createGetCanonicalFileName(this.host.useCaseSensitiveFileNames);
    }
    
    /** @internal */
    getExecutingFilePath() {
        return this.getNormalizedAbsolutePath(this.host.getExecutingFilePath());
    }

    /** @internal */
    getNormalizedAbsolutePath(fileName: string) {
        return getNormalizedAbsolutePath(fileName, this.host.getCurrentDirectory());
    }

    /** @internal */
    sendLargeFileReferencedEvent(file: string, fileSize: number) {
        if (!this.eventHandler) {
            return;
        }

        const event: LargeFileReferencedEvent = {
            eventName: LargeFileReferencedEvent,
            data: { file, fileSize, maxFileSize },
        };
        this.eventHandler(event);
    }

    private getOrCreateScriptInfoNotOpenedByClientForNormalizedPath(
        fileName: NormalizedPath,
        currentDirectory: string,
        scriptKind: ScriptKind | undefined,
        hasMixedContent: boolean | undefined,
        hostToQueryFileExistsOn: DirectoryStructureHost | undefined,
        deferredDeleteOk: boolean,
    ) {
        if (isRootedDiskPath(fileName) || isDynamicFileName(fileName)) {
            return this.getOrCreateScriptInfoWorker(
                fileName,
                currentDirectory,
                /*openedByClient*/ false,
                /*fileContent*/ undefined,
                scriptKind,
                !!hasMixedContent,
                hostToQueryFileExistsOn,
                deferredDeleteOk,
            );
        }

        // This is non rooted path with different current directory than project service current directory
        // Only paths recognized are open relative file paths
        const info = this.openFilesWithNonRootedDiskPath.get(this.toCanonicalFileName(fileName));
        if (info) {
            return info;
        }

        // This means triple slash references wont be resolved in dynamic and unsaved files
        // which is intentional since we dont know what it means to be relative to non disk files
        return undefined;
    }

    private getOrCreateScriptInfoWorker(
        fileName: NormalizedPath,
        currentDirectory: string,
        openedByClient: boolean,
        fileContent: string | undefined,
        scriptKind: ScriptKind | undefined,
        hasMixedContent: boolean,
        hostToQueryFileExistsOn: { fileExists(path: string): boolean; } | undefined,
        deferredDeleteOk: boolean,
    ) {
        Debug.assert(fileContent === undefined || openedByClient, "ScriptInfo needs to be opened by client to be able to set its user defined content");
        const path = normalizedPathToPath(fileName, currentDirectory, this.toCanonicalFileName);
        let info = this.filenameToScriptInfo.get(path);
        if (!info) {
            const isDynamic = isDynamicFileName(fileName);
            Debug.assert(isRootedDiskPath(fileName) || isDynamic || openedByClient, "", () => `${JSON.stringify({ fileName, currentDirectory, hostCurrentDirectory: this.currentDirectory, openKeys: arrayFrom(this.openFilesWithNonRootedDiskPath.keys()) })}\nScript info with non-dynamic relative file name can only be open script info or in context of host currentDirectory`);
            Debug.assert(!isRootedDiskPath(fileName) || this.currentDirectory === currentDirectory || !this.openFilesWithNonRootedDiskPath.has(this.toCanonicalFileName(fileName)), "", () => `${JSON.stringify({ fileName, currentDirectory, hostCurrentDirectory: this.currentDirectory, openKeys: arrayFrom(this.openFilesWithNonRootedDiskPath.keys()) })}\nOpen script files with non rooted disk path opened with current directory context cannot have same canonical names`);
            Debug.assert(!isDynamic || this.currentDirectory === currentDirectory || this.useInferredProjectPerProjectRoot, "", () => `${JSON.stringify({ fileName, currentDirectory, hostCurrentDirectory: this.currentDirectory, openKeys: arrayFrom(this.openFilesWithNonRootedDiskPath.keys()) })}\nDynamic files must always be opened with service's current directory or service should support inferred project per projectRootPath.`);
            // If the file is not opened by client and the file doesnot exist on the disk, return
            if (!openedByClient && !isDynamic && !(hostToQueryFileExistsOn || this.host).fileExists(fileName)) {
                return;
            }
            info = new ScriptInfo(this.host, fileName, scriptKind!, hasMixedContent, path, this.filenameToScriptInfoVersion.get(path));
            this.filenameToScriptInfo.set(info.path, info);
            this.filenameToScriptInfoVersion.delete(info.path);
            if (!openedByClient) {
                this.watchClosedScriptInfo(info);
            }
            else if (!isRootedDiskPath(fileName) && (!isDynamic || this.currentDirectory !== currentDirectory)) {
                // File that is opened by user but isn't rooted disk path
                this.openFilesWithNonRootedDiskPath.set(this.toCanonicalFileName(fileName), info);
            }
        }
        else if (info.deferredDelete) {
            Debug.assert(!info.isDynamic);
            // If the file is not opened by client and the file doesnot exist on the disk, return
            if (!openedByClient && !(hostToQueryFileExistsOn || this.host).fileExists(fileName)) {
                return deferredDeleteOk ? info : undefined;
            }
            info.deferredDelete = undefined;
        }
        if (openedByClient) {
            // Opening closed script info
            // either it was created just now, or was part of projects but was closed
            this.stopWatchingScriptInfo(info);
            info.open(fileContent);
            if (hasMixedContent) {
                info.registerFileUpdate();
            }
        }
        return info;
    }
    
    private stopWatchingScriptInfo(info: ScriptInfo) {
        if (info.fileWatcher) {
            info.fileWatcher.close();
            info.fileWatcher = undefined;
        }
    }

    private watchClosedScriptInfo(info: ScriptInfo) {
        Debug.assert(!info.fileWatcher);
        // do not watch files with mixed content - server doesn't know how to interpret it
        // do not watch files in the global cache location
        if (
            !info.isDynamicOrHasMixedContent() &&
            (!this.globalCacheLocationDirectoryPath ||
                !startsWith(info.path, this.globalCacheLocationDirectoryPath))
        ) {
            const indexOfNodeModules = info.fileName.indexOf("/node_modules/");
            if (!this.host.getModifiedTime || indexOfNodeModules === -1) {
                info.fileWatcher = this.watchFactory.watchFile(
                    info.fileName,
                    (_fileName, eventKind) => this.onSourceFileChanged(info, eventKind),
                    PollingInterval.Medium,
                    this.hostConfiguration.watchOptions,
                    WatchType.ClosedScriptInfo,
                );
            }
            else {
                Debug.fail("not supported");
                // info.mTime = this.getModifiedTime(info);
                // info.fileWatcher = this.watchClosedScriptInfoInNodeModules(info.fileName.substring(0, indexOfNodeModules));
            }
        }
    }

    private delayUpdateProjectGraph(project: Project) {
        if (isProjectDeferredClose(project)) return;
        project.markAsDirty();
        //if (isBackgroundProject(project)) return;
        const projectName = project.getProjectName();
        this.pendingProjectUpdates.set(projectName, project);
        this.throttledOperations.schedule(projectName, /*delay*/ 250, () => {
            if (this.pendingProjectUpdates.delete(projectName)) {
                updateProjectIfDirty(project);
            }
        });
    }
   
    getScriptInfoForPath(fileName: Path) {
        const info = this.filenameToScriptInfo.get(fileName);
        return !info || !info.deferredDelete ? info : undefined;
    }

    toPath(fileName: string) {
        return toPath(fileName, this.currentDirectory, this.toCanonicalFileName);
    }
    
    /** @internal */
    getOrCreateScriptInfoNotOpenedByClient(
        uncheckedFileName: string,
        currentDirectory: string,
        hostToQueryFileExistsOn: DirectoryStructureHost,
        deferredDeleteOk: boolean,
    ) {
        return this.getOrCreateScriptInfoNotOpenedByClientForNormalizedPath(
            toNormalizedPath(uncheckedFileName),
            currentDirectory,
            /*scriptKind*/ undefined,
            /*hasMixedContent*/ undefined,
            hostToQueryFileExistsOn,
            deferredDeleteOk,
        );
    }
    
    /** @internal */
    delayEnsureProjectForOpenFiles() {
        if (!this.openFiles.size) return;
        Debug.fail("implement me");
        // this.pendingEnsureProjectForOpenFiles = true;
        // this.throttledOperations.schedule(ensureProjectForOpenFileSchedule, /*delay*/ 2500, () => {
        //     if (this.pendingProjectUpdates.size !== 0) {
        //         this.delayEnsureProjectForOpenFiles();
        //     }
        //     else {
        //         if (this.pendingEnsureProjectForOpenFiles) {
        //             this.ensureProjectForOpenFiles();

        //             // Send the event to notify that there were background project updates
        //             // send current list of open files
        //             this.sendProjectsUpdatedInBackgroundEvent();
        //         }
        //     }
        // });
    }

    private delayUpdateProjectGraphs(projects: readonly Project[], clearSourceMapperCache: boolean) {
        if (projects.length) {
            for (const project of projects) {
                // Even if program doesnt change, clear the source mapper cache
                if (clearSourceMapperCache) project.clearSourceMapperCache();
                this.delayUpdateProjectGraph(project);
            }
            this.delayEnsureProjectForOpenFiles();
        }
    }

    private deleteScriptInfo(info: ScriptInfo) {
        Debug.assert(!info.isScriptOpen());
        this.filenameToScriptInfo.delete(info.path);
        this.filenameToScriptInfoVersion.set(info.path, info.textStorage.version);
        this.stopWatchingScriptInfo(info);
        const realpath = info.getRealpathIfDifferent();
        if (realpath) {
            this.realpathToScriptInfos!.remove(realpath, info); // TODO: GH#18217
        }
        info.closeSourceMapFileWatcher();
    }

    private handleDeletedFile(info: ScriptInfo, deferredDelete: boolean) {
        Debug.assert(!info.isScriptOpen());
        this.delayUpdateProjectGraphs(info.containingProjects, /*clearSourceMapperCache*/ false);
        this.handleSourceMapProjects(info);
        info.detachAllProjects();
        if (deferredDelete) {
            info.delayReloadNonMixedContentFile();
            info.deferredDelete = true;
        }
        else {
            this.deleteScriptInfo(info);
        }
    }

    private getModifiedTime(info: ScriptInfo) {
        return (this.host.getModifiedTime!(info.fileName) || missingFileModifiedTime).getTime();
    }

    private onSourceFileChanged(info: ScriptInfo, eventKind: FileWatcherEventKind) {
        Debug.assert(!info.isScriptOpen());
        if (eventKind === FileWatcherEventKind.Deleted) {
            this.handleDeletedFile(info, /*deferredDelete*/ true);
        }
        else {
            if (info.deferredDelete) info.deferredDelete = undefined;
            // file has been changed which might affect the set of referenced files in projects that include
            // this file and set of inferred projects
            info.delayReloadNonMixedContentFile();
            this.delayUpdateProjectGraphs(info.containingProjects, /*clearSourceMapperCache*/ false);
            this.handleSourceMapProjects(info);
        }
    }

    private handleSourceMapProjects(info: ScriptInfo) {
        console.warn("todo - implement me - handleSourceMapProjects");
    }
    
    findAndOpenLpcConfig(projectRootPath: string): NormalizedPath | undefined {
        const configPath = findLpcConfig(projectRootPath, this.host.getAccessibleFileSystemEntries);
        return configPath;
    }

    private cleanupConfiguredProjects(
        toRetainConfiguredProjects?: Set<ConfiguredProject>,
        externalProjectsRetainingConfiguredProjects?: Set<string>,
        openFilesWithRetainedConfiguredProject?: Set<Path>,
    ) {
        // Remove all orphan projects
        console.debug("todo - implement me - cleanupConfiguredProjects");
        // this.getOrphanConfiguredProjects(
        //     toRetainConfiguredProjects,
        //     openFilesWithRetainedConfiguredProject,
        //     externalProjectsRetainingConfiguredProjects,
        // ).forEach(project => this.removeProject(project));
    }

    private cleanupProjectsAndScriptInfos(
        toRetainConfiguredProjects: Set<ConfiguredProject> | undefined,
        openFilesWithRetainedConfiguredProject: Set<Path> | undefined,
        externalProjectsRetainingConfiguredProjects: Set<string> | undefined,
    ) {
        // This was postponed from closeOpenFile to after opening next file,
        // so that we can reuse the project if we need to right away
        // Remove all the non marked projects
        this.cleanupConfiguredProjects(
            toRetainConfiguredProjects,
            externalProjectsRetainingConfiguredProjects,
            openFilesWithRetainedConfiguredProject,
        );

        // Remove orphan inferred projects now that we have reused projects
        // We need to create a duplicate because we cant guarantee order after removal
        // for (const inferredProject of this.inferredProjects.slice()) {
        //     if (inferredProject.isOrphan()) {
        //         this.removeProject(inferredProject);
        //     }
        // }

        // // Delete the orphan files here because there might be orphan script infos (which are not part of project)
        // // when some file/s were closed which resulted in project removal.
        // // It was then postponed to cleanup these script infos so that they can be reused if
        // // the file from that old project is reopened because of opening file from here.
        // this.removeOrphanScriptInfos();
    }

    private printProjects() {
        if (!this.logger.hasLevel(LogLevel.normal)) {
            return;
        }

        this.logger.startGroup();

        //this.externalProjects.forEach(printProjectWithoutFileNames);
        this.configuredProjects.forEach(printProjectWithoutFileNames);
        //this.inferredProjects.forEach(printProjectWithoutFileNames);

        this.logger.info("Open files: ");
        this.openFiles.forEach((projectRootPath, path) => {
            const info = this.getScriptInfoForPath(path)!;
            this.logger.info(`\tFileName: ${info.fileName} ProjectRootPath: ${projectRootPath}`);
            this.logger.info(`\t\tProjects: ${info.containingProjects.map(p => p.getProjectName())}`);
        });

        this.logger.endGroup();
    }


    openClientFileWithNormalizedPath(fileName: NormalizedPath, fileContent?: string, scriptKind?: ScriptKind, hasMixedContent?: boolean, projectRootPath?: NormalizedPath): OpenConfiguredProjectResult {
        const info = this.getOrCreateOpenScriptInfo(fileName, fileContent, scriptKind, hasMixedContent, projectRootPath);
        const { retainProjects, ...result } = this.assignProjectToOpenedScriptInfo(info);
        this.cleanupProjectsAndScriptInfos(
            retainProjects,
            new Set([info.path]),
            /*externalProjectsRetainingConfiguredProjects*/ undefined,
        );
        //this.telemetryOnOpenFile(info);
        this.printProjects();
        return result;
    }
    
    /**
     * Finds the default configured project for given info
     * For any tsconfig found, it looks into that project, if not then all its references,
     * The search happens for all tsconfigs till projectRootPath
     */
    private tryFindDefaultConfiguredProjectForOpenScriptInfo(
        info: ScriptInfo,
        kind: ConfiguredProjectLoadKind,
        /** Used with ConfiguredProjectLoadKind.Find  to get deferredClosed projects as well */
        allowDeferredClosed?: boolean,
        /** Used with ConfiguredProjectLoadKind.Reload to check if this project was already reloaded */
        reloadedProjects?: Set<ConfiguredProject>,
    ): DefaultConfiguredProjectResult | undefined {
        const configFileName = this.getConfigFileNameForFile(info, kind === ConfiguredProjectLoadKind.Find);
        // If no config file name, no result
        if (!configFileName) return;

        const result = this.findCreateOrReloadConfiguredProject(
            configFileName,
            kind,
            fileOpenReason(info),
            allowDeferredClosed,
            info.fileName,
            reloadedProjects,
        );
        // If the project for the configFileName does not exist, no result
        if (!result) return;

        const seenProjects = new Set<ConfiguredProject>();
        const sentConfigDiag = new Set<ConfiguredProject>(result.sentConfigFileDiag ? [result.project] : undefined);
        let defaultProject: ConfiguredProject | undefined;
        let possiblyDefault: ConfiguredProject | undefined;
        // See if this is the project or is it one of the references or find ancestor projects
        tryFindDefaultConfiguredProject(result.project);
        return {
            defaultProject: defaultProject ?? possiblyDefault,
            sentConfigDiag,
            seenProjects,
        };

        function tryFindDefaultConfiguredProject(project: ConfiguredProject): ConfiguredProject | undefined {
            return isDefaultProject(project) ?
                defaultProject :
                tryFindDefaultConfiguredProjectFromReferences(project);
        }

        function isDefaultProject(project: ConfiguredProject): ConfiguredProject | undefined {
            // Skip already looked up projects
            if (!tryAddToSet(seenProjects, project)) return;
            // If script info belongs to this project, use this as default config project
            const projectWithInfo = project.containsScriptInfo(info);
            if (projectWithInfo && !project.isSourceOfProjectReferenceRedirect(info.path)) return defaultProject = project;
            // If this project uses the script info, if default project is not found, use this project as possible default
            possiblyDefault ??= projectWithInfo ? project : undefined;
        }

        function tryFindDefaultConfiguredProjectFromReferences(project: ConfiguredProject) {
            // If this configured project doesnt contain script info but
            // if this is solution with project references, try those project references
            return undefined;
            // return forEachResolvedProjectReferenceProject(
            //     project,
            //     info.path,
            //     (child, sentConfigFileDiag) => {
            //         if (sentConfigFileDiag) sentConfigDiag.add(child);
            //         return isDefaultProject(child);
            //     },
            //     kind,
            //     `Creating project referenced in solution ${project.projectName} to find possible configured project for ${info.fileName} to open`,
            //     allowDeferredClosed,
            //     info.fileName,
            //     reloadedProjects,
            // );
        }
    }

    /** @internal */
    private clearSemanticCache(project: Project) {
        project.originalConfiguredProjects = undefined;
        project.resolutionCache.clear();
        project.getLanguageService(/*ensureSynchronized*/ false).cleanupSemanticCache();
        project.cleanupProgram();
        project.markAsDirty();
    }

    

    /** @internal */
    reloadConfiguredProjectClearingSemanticCache(
        project: ConfiguredProject,
        reason: string,
        reloadedProjects: Set<ConfiguredProject>,
    ) {
        if (!tryAddToSet(reloadedProjects, project)) return false;
        this.clearSemanticCache(project);
        this.reloadConfiguredProject(project, reloadReason(reason));
        return true;
    }

    
    /**
     * Read the config file of the project again by clearing the cache and update the project graph
     *
     * @internal
     */
    reloadConfiguredProject(project: ConfiguredProject, reason: string) {
        project.isInitialLoadPending = returnFalse;
        project.pendingUpdateReason = undefined;
        project.pendingUpdateLevel = ProgramUpdateLevel.Update;

        // At this point, there is no reason to not have configFile in the host
        const host = project.getCachedDirectoryStructureHost();

        // Clear the cache since we are reloading the project from disk
        host.clearCache();

        // Load project from the disk
        this.loadConfiguredProject(project, reason);
        updateWithTriggerFile(project, project.triggerFileForConfigFileDiag ?? project.getConfigFilePath(), /*isReload*/ true);
    }
    
    /**
     * Read the config file of the project, and update the project root file names.
     *
     * @internal
     */
    private loadConfiguredProject(project: ConfiguredProject, reason: string) {
        tracing?.push(tracing.Phase.Session, "loadConfiguredProject", { configFilePath: project.canonicalConfigFilePath });
        console.debug("TODO - load lpc config project here");
        // this.sendProjectLoadingStartEvent(project, reason);

        // // Read updated contents from disk
        // const configFilename = asNormalizedPath(normalizePath(project.getConfigFilePath()));
        // const configFileExistenceInfo = this.ensureParsedConfigUptoDate(
        //     configFilename,
        //     project.canonicalConfigFilePath,
        //     this.configFileExistenceInfoCache.get(project.canonicalConfigFilePath)!,
        //     project,
        // );
        // const parsedCommandLine = configFileExistenceInfo.config!.parsedCommandLine!;
        // Debug.assert(!!parsedCommandLine.fileNames);
        // const compilerOptions = parsedCommandLine.options;

        // // Update the project
        // if (!project.projectOptions) {
        //     project.projectOptions = {
        //         configHasExtendsProperty: parsedCommandLine.raw.extends !== undefined,
        //         configHasFilesProperty: parsedCommandLine.raw.files !== undefined,
        //         configHasIncludeProperty: parsedCommandLine.raw.include !== undefined,
        //         configHasExcludeProperty: parsedCommandLine.raw.exclude !== undefined,
        //     };
        // }
        // project.canConfigFileJsonReportNoInputFiles = canJsonReportNoInputFiles(parsedCommandLine.raw);
        // project.setProjectErrors(parsedCommandLine.options.configFile!.parseDiagnostics);
        // project.updateReferences(parsedCommandLine.projectReferences);
        // const lastFileExceededProgramSize = this.getFilenameForExceededTotalSizeLimitForNonTsFiles(project.canonicalConfigFilePath, compilerOptions, parsedCommandLine.fileNames, fileNamePropertyReader);
        // if (lastFileExceededProgramSize) {
        //     project.disableLanguageService(lastFileExceededProgramSize);
        //     this.configFileExistenceInfoCache.forEach((_configFileExistenceInfo, canonicalConfigFilePath) => this.stopWatchingWildCards(canonicalConfigFilePath, project));
        // }
        // else {
        //     project.setCompilerOptions(compilerOptions);
        //     project.setWatchOptions(parsedCommandLine.watchOptions);
        //     project.enableLanguageService();
        //     this.watchWildcards(configFilename, configFileExistenceInfo, project);
        // }
        // project.enablePluginsWithOptions(compilerOptions);
        // const filesToAdd = parsedCommandLine.fileNames.concat(project.getExternalFiles(ProgramUpdateLevel.Full));
        // this.updateRootAndOptionsOfNonInferredProject(project, filesToAdd, fileNamePropertyReader, compilerOptions, parsedCommandLine.typeAcquisition!, parsedCommandLine.compileOnSave, parsedCommandLine.watchOptions);
        tracing?.pop();
    }

    /**
     * Depending on kind
     * - Find the configuedProject and return it - if allowDeferredClosed is set it will find the deferredClosed project as well
     * - Create - if the project doesnt exist, it creates one as well. If not delayLoad, the project is updated (with triggerFile if passed)
     * - Reload - if the project doesnt exist, it creates one. If not delayLoad, the project is reloaded clearing semantic cache
     *  @internal
     */
    findCreateOrReloadConfiguredProject(
        configFileName: NormalizedPath,
        kind: ConfiguredProjectLoadKind,
        /** Used with ConfiguredProjectLoadKind.Create or ConfiguredProjectLoadKind.Reload for new projects or reload updates */
        reason?: string,
        /** Used with ConfiguredProjectLoadKind.Find to get deferredClosed projects as well */
        allowDeferredClosed?: boolean,
        /** Used with ConfiguredProjectLoadKind.Create to send configFileDiag */
        triggerFile?: NormalizedPath,
        /** Used with ConfiguredProjectLoadKind.Reload to check if this project was already reloaded */
        reloadedProjects?: Set<ConfiguredProject>,
        /** Used with ConfiguredProjectLoadKind.Create to specify only create project without updating */
        delayLoad?: boolean,
        /** Used with ConfiguredProjectLoadKind.Reload to specify delay reload, and also a set of configured projects already marked for delay load */
        delayReloadedConfiguredProjects?: Set<ConfiguredProject>,
    ): FindCreateOrLoadConfiguredProjectResult | undefined {
        let project = this.findConfiguredProjectByProjectName(configFileName, allowDeferredClosed);
        let sentConfigFileDiag = false;
        switch (kind) {
            case ConfiguredProjectLoadKind.Find:
                if (!project) return;
                break;
            case ConfiguredProjectLoadKind.Create:
                project ??= this.createConfiguredProject(configFileName, reason!);
                // Ensure project is updated
                sentConfigFileDiag = !delayLoad && updateConfiguredProject(project, triggerFile);
                break;
            case ConfiguredProjectLoadKind.Reload:
                project ??= this.createConfiguredProject(configFileName, reloadReason(reason!));
                // Reload immediately if not delayed
                sentConfigFileDiag = !delayReloadedConfiguredProjects &&
                    this.reloadConfiguredProjectClearingSemanticCache(project, reason!, reloadedProjects!);
                if (
                    delayReloadedConfiguredProjects &&
                    !delayReloadedConfiguredProjects.has(project) &&
                    !reloadedProjects!.has(project)
                ) {
                    // Add to delayed reload
                    project.pendingUpdateLevel = ProgramUpdateLevel.Full;
                    project.pendingUpdateReason = reloadReason(reason!);
                    delayReloadedConfiguredProjects.add(project);
                }
                break;
            default:
                Debug.assertNever(kind);
        }
        return { project, sentConfigFileDiag };
    }


    /**
     * Finds the default configured project, if found, it creates the solution projects (does not load them right away)
     * with Find: finds the projects even if the project is deferredClosed
     */
    private tryFindDefaultConfiguredProjectAndLoadAncestorsForOpenScriptInfo(
        info: ScriptInfo,
        kind: ConfiguredProjectLoadKind.Find | ConfiguredProjectLoadKind.Create,
    ): DefaultConfiguredProjectResult | undefined;
    private tryFindDefaultConfiguredProjectAndLoadAncestorsForOpenScriptInfo(
        info: ScriptInfo,
        kind: ConfiguredProjectLoadKind.Reload,
        reloadedProjects: Set<ConfiguredProject>,
        delayReloadedConfiguredProjects: Set<ConfiguredProject>,
    ): DefaultConfiguredProjectResult | undefined;
    private tryFindDefaultConfiguredProjectAndLoadAncestorsForOpenScriptInfo(
        info: ScriptInfo,
        kind: ConfiguredProjectLoadKind,
        reloadedProjects?: Set<ConfiguredProject>,
        delayReloadedConfiguredProjects?: Set<ConfiguredProject>,
    ): DefaultConfiguredProjectResult | undefined {
        const allowDeferredClosed = kind === ConfiguredProjectLoadKind.Find;
        // Find default project
        const result = this.tryFindDefaultConfiguredProjectForOpenScriptInfo(
            info,
            kind,
            allowDeferredClosed,
            reloadedProjects,
        );
        if (!result) return;
        const { defaultProject, seenProjects } = result;
        if (defaultProject) {
            // Create ancestor tree for findAllRefs (dont load them right away)
            // forEachAncestorProject(
            //     info,
            //     defaultProject,
            //     ancestor => {
            //         seenProjects.add(ancestor);
            //     },
            //     kind,
            //     `Creating project possibly referencing default composite project ${defaultProject.getProjectName()} of open file ${info.fileName}`,
            //     allowDeferredClosed,
            //     reloadedProjects,
            //     delayReloadedConfiguredProjects,
            // );
        }
        return result;
    }


    private assignProjectToOpenedScriptInfo(info: ScriptInfo): AssignProjectResult {
        let configFileName: NormalizedPath | undefined;
        let configFileErrors: readonly Diagnostic[] | undefined;
        const project = undefined;// this.findExternalProjectContainingOpenScriptInfo(info);
        let retainProjects: Set<ConfiguredProject> | undefined;
        let sentConfigDiag: Set<ConfiguredProject> | undefined;
        if (!project && this.serverMode === LanguageServiceMode.Semantic) { // Checking semantic mode is an optimization
            const result = this.tryFindDefaultConfiguredProjectAndLoadAncestorsForOpenScriptInfo(
                info,
                ConfiguredProjectLoadKind.Create,
            );
            if (result) {
                retainProjects = result.seenProjects;
                sentConfigDiag = result.sentConfigDiag;
                if (result.defaultProject) {
                    configFileName = result.defaultProject.getConfigFilePath();
                    configFileErrors = result.defaultProject.getAllProjectErrors();
                }
            }
        }

        // Project we have at this point is going to be updated since its either found through
        // - external project search, which updates the project before checking if info is present in it
        // - configured project - either created or updated to ensure we know correct status of info

        // At this point we need to ensure that containing projects of the info are uptodate
        // This will ensure that later question of info.isOrphan() will return correct answer
        // and we correctly create inferred project for the info
        info.containingProjects.forEach(updateProjectIfDirty);

        // At this point if file is part of any any configured or external project, then it would be present in the containing projects
        // So if it still doesnt have any containing projects, it needs to be part of inferred project
        if (info.isOrphan()) {
            // Even though this info did not belong to any of the configured projects, send the config file diag
            retainProjects?.forEach(project => {
                if (!sentConfigDiag!.has(project)) this.sendConfigFileDiagEvent(project, info.fileName, /*force*/ true);
            });
            Debug.assert(this.openFiles.has(info.path));
            Debug.fail("implement me");
            //this.assignOrphanScriptInfoToInferredProject(info, this.openFiles.get(info.path));
        }
        Debug.assert(!info.isOrphan());
        return { configFileName, configFileErrors, retainProjects };
    }

    private getOrCreateOpenScriptInfo(
        fileName: NormalizedPath,
        fileContent: string | undefined,
        scriptKind: ScriptKind | undefined,
        hasMixedContent: boolean | undefined,
        projectRootPath: NormalizedPath | undefined,
    ) {
        const info = this.getOrCreateScriptInfoWorker(
            fileName,
            projectRootPath ? this.getNormalizedAbsolutePath(projectRootPath) : this.currentDirectory,
            /*openedByClient*/ true,
            fileContent,
            scriptKind,
            !!hasMixedContent,
            /*hostToQueryFileExistsOn*/ undefined,
            /*deferredDeleteOk*/ true,
        )!;
        this.openFiles.set(info.path, projectRootPath);
        return info;
    }

    /** @internal */
    sendConfigFileDiagEvent(project: ConfiguredProject, triggerFile: NormalizedPath | undefined, force: boolean) {
        if (!this.eventHandler || this.suppressDiagnosticEvents) return false;
        const diagnostics = project.getLanguageService().getCompilerOptionsDiagnostics();
        diagnostics.push(...project.getAllProjectErrors());

        if (!force && diagnostics.length === (project.configDiagDiagnosticsReported ?? 0)) return false;
        project.configDiagDiagnosticsReported = diagnostics.length;
        this.eventHandler(
            {
                eventName: ConfigFileDiagEvent,
                data: { configFileName: project.getConfigFilePath(), diagnostics, triggerFile: triggerFile ?? project.getConfigFilePath() },
            } satisfies ConfigFileDiagEvent,
        );
        return true;
    }

    /** @internal */
    findConfiguredProjectByProjectName(configFileName: NormalizedPath, allowDeferredClosed?: boolean): ConfiguredProject | undefined {
        // make sure that casing of config file name is consistent
        const canonicalConfigFilePath = this.toCanonicalFileName(configFileName) as NormalizedPath;
        const result = this.getConfiguredProjectByCanonicalConfigFilePath(canonicalConfigFilePath);
        return allowDeferredClosed ? result : !result?.deferredClose ? result : undefined;
    }

    private getConfiguredProjectByCanonicalConfigFilePath(canonicalConfigFilePath: string): ConfiguredProject | undefined {
        return this.configuredProjects.get(canonicalConfigFilePath);
    }

    findProject(projectName: string): Project | undefined {
        if (projectName === undefined) {
            return undefined;
        }        
        // if (isInferredProjectName(projectName)) {
        //     return findProjectByName(projectName, this.inferredProjects);
        // }
        //return this.findExternalProjectByProjectName(projectName) || 
        return this.findConfiguredProjectByProjectName(toNormalizedPath(projectName));
    }

    /**
     * This gets the script info for the normalized path. If the path is not rooted disk path then the open script info with project root context is preferred
     */
    getScriptInfoForNormalizedPath(fileName: NormalizedPath) {
        return !isRootedDiskPath(fileName) && this.openFilesWithNonRootedDiskPath.get(this.toCanonicalFileName(fileName)) ||
            this.getScriptInfoForPath(normalizedPathToPath(fileName, this.currentDirectory, this.toCanonicalFileName));
    }

    private configFileExists(configFileName: NormalizedPath, canonicalConfigFilePath: NormalizedPath, info: OpenScriptInfoOrClosedOrConfigFileInfo) {
        const configFileExistenceInfo = this.configFileExistenceInfoCache.get(canonicalConfigFilePath);

        let openFilesImpactedByConfigFile: Set<Path> | undefined;
        if (this.openFiles.has(info.path) && !isAncestorConfigFileInfo(info)) {
            // By default the info would get impacted by presence of config file since its in the detection path
            // Only adding the info as a root to inferred project will need the existence to be watched by file watcher
            if (configFileExistenceInfo) (configFileExistenceInfo.openFilesImpactedByConfigFile ??= new Set()).add(info.path);
            else (openFilesImpactedByConfigFile = new Set()).add(info.path);
        }

        if (configFileExistenceInfo) return configFileExistenceInfo.exists;

        // Theoretically we should be adding watch for the directory here itself.
        // In practice there will be very few scenarios where the config file gets added
        // somewhere inside the another config file directory.
        // And technically we could handle that case in configFile's directory watcher in some cases
        // But given that its a rare scenario it seems like too much overhead. (we werent watching those directories earlier either)

        // So what we are now watching is: configFile if the configured project corresponding to it is open
        // Or the whole chain of config files for the roots of the inferred projects

        // Cache the host value of file exists and add the info to map of open files impacted by this config file
        const exists = this.host.fileExists(configFileName);
        this.configFileExistenceInfoCache.set(canonicalConfigFilePath, { exists, openFilesImpactedByConfigFile });
        return exists;
    }

    /**
     * This function tries to search for a tsconfig.json for the given file.
     * This is different from the method the compiler uses because
     * the compiler can assume it will always start searching in the
     * current directory (the directory in which tsc was invoked).
     * The server must start searching from the directory containing
     * the newly opened file.
     * If script info is passed in, it is asserted to be open script info
     * otherwise just file name
     * when findFromCacheOnly is true only looked up in cache instead of hitting disk to figure things out
     * @internal
     */
    getConfigFileNameForFile(info: OpenScriptInfoOrClosedOrConfigFileInfo, findFromCacheOnly: boolean) {
        // If we are using already cached values, look for values from pending update as well
        const fromCache = this.getConfigFileNameForFileFromCache(info, findFromCacheOnly);
        if (fromCache !== undefined) return fromCache || undefined;
        if (findFromCacheOnly) return undefined;
        const configFileName = this.forEachConfigFileLocation(info, (canonicalConfigFilePath, configFileName) => this.configFileExists(configFileName, canonicalConfigFilePath, info));
        this.logger.info(`getConfigFileNameForFile:: File: ${info.fileName} ProjectRootPath: ${this.openFiles.get(info.path)}:: Result: ${configFileName}`);
        this.setConfigFileNameForFileInCache(info, configFileName);
        return configFileName;
    }

    getScriptInfo(uncheckedFileName: string) {
        return this.getScriptInfoForNormalizedPath(toNormalizedPath(uncheckedFileName));
    }

    /**
     * This function tries to search for a tsconfig.json for the given file.
     * This is different from the method the compiler uses because
     * the compiler can assume it will always start searching in the
     * current directory (the directory in which tsc was invoked).
     * The server must start searching from the directory containing
     * the newly opened file.
     */
    private forEachConfigFileLocation(info: OpenScriptInfoOrClosedOrConfigFileInfo, action: (canonicalConfigFilePath: NormalizedPath, configFileName: NormalizedPath) => boolean | void) {
        if (this.serverMode !== LanguageServiceMode.Semantic) {
            return undefined;
        }

        Debug.assert(!isOpenScriptInfo(info) || this.openFiles.has(info.path));
        const projectRootPath = this.openFiles.get(info.path);
        const scriptInfo = Debug.checkDefined(this.getScriptInfo(info.path));
        if (scriptInfo.isDynamic) return undefined;

        let searchPath = asNormalizedPath(getDirectoryPath(info.fileName));
        const isSearchPathInProjectRoot = () => containsPath(projectRootPath!, searchPath, this.currentDirectory, !this.host.useCaseSensitiveFileNames);

        // If projectRootPath doesn't contain info.path, then do normal search for config file
        const anySearchPathOk = !projectRootPath || !isSearchPathInProjectRoot();
        // For ancestor of config file always ignore its own directory since its going to result in itself
        let searchInDirectory = !isAncestorConfigFileInfo(info);
        do {
            if (searchInDirectory) {
                const canonicalSearchPath = normalizedPathToPath(searchPath, this.currentDirectory, this.toCanonicalFileName);
                const tsconfigFileName = asNormalizedPath(combinePaths(searchPath, "tsconfig.json"));
                let result = action(combinePaths(canonicalSearchPath, "tsconfig.json") as NormalizedPath, tsconfigFileName);
                if (result) return tsconfigFileName;

                const jsconfigFileName = asNormalizedPath(combinePaths(searchPath, "jsconfig.json"));
                result = action(combinePaths(canonicalSearchPath, "jsconfig.json") as NormalizedPath, jsconfigFileName);
                if (result) return jsconfigFileName;

                // If we started within node_modules, don't look outside node_modules.
                // Otherwise, we might pick up a very large project and pull in the world,
                // causing an editor delay.
                if (isNodeModulesDirectory(canonicalSearchPath)) {
                    break;
                }
            }

            const parentPath = asNormalizedPath(getDirectoryPath(searchPath));
            if (parentPath === searchPath) break;
            searchPath = parentPath;
            searchInDirectory = true;
        }
        while (anySearchPathOk || isSearchPathInProjectRoot());

        return undefined;
    }

    /** Caches the configFilename for script info or ancestor of open script info */
    private setConfigFileNameForFileInCache(
        info: OpenScriptInfoOrClosedOrConfigFileInfo,
        configFileName: NormalizedPath | undefined,
    ) {
        if (!this.openFiles.has(info.path)) return; // Dont cache for closed script infos
        if (isAncestorConfigFileInfo(info)) return; // Dont cache for ancestors
        this.configFileForOpenFiles.set(info.path, configFileName || false);
    }

    /** Get cached configFileName for scriptInfo or ancestor of open script info */
    private getConfigFileNameForFileFromCache(
        info: OpenScriptInfoOrClosedOrConfigFileInfo,
        lookInPendingFilesForValue: boolean,
    ): ConfigFileName | undefined {
        if (lookInPendingFilesForValue) {
            const result = getConfigFileNameFromCache(info, this.pendingOpenFileProjectUpdates);
            if (result !== undefined) return result;
        }
        return getConfigFileNameFromCache(info, this.configFileForOpenFiles);
    }

    /** @internal */
    createConfiguredProject(configFileName: NormalizedPath, reason: string) {
        tracing?.instant(tracing.Phase.Session, "createConfiguredProject", { configFilePath: configFileName });
        this.logger.info(`Creating configuration project ${configFileName}`);
        const canonicalConfigFilePath = (this.toCanonicalFileName(configFileName)) as NormalizedPath;
        let configFileExistenceInfo = this.configFileExistenceInfoCache.get(canonicalConfigFilePath);
        // We could be in this scenario if project is the configured project tracked by external project
        // Since that route doesnt check if the config file is present or not
        if (!configFileExistenceInfo) {
            this.configFileExistenceInfoCache.set(canonicalConfigFilePath, configFileExistenceInfo = { exists: true });
        }
        else {
            configFileExistenceInfo.exists = true;
        }
        if (!configFileExistenceInfo.config) {
            configFileExistenceInfo.config = {
                cachedDirectoryStructureHost: createCachedDirectoryStructureHost(this.host, this.host.getCurrentDirectory(), this.host.useCaseSensitiveFileNames)!,
                projects: new Map(),
                updateLevel: ProgramUpdateLevel.Full,
            };
        }

        const project = new ConfiguredProject(
            configFileName,
            canonicalConfigFilePath,
            this,
            this.documentRegistry,
            configFileExistenceInfo.config.cachedDirectoryStructureHost,
            reason,
        );
        Debug.assert(!this.configuredProjects.has(canonicalConfigFilePath));
        this.configuredProjects.set(canonicalConfigFilePath, project);
        this.createConfigFileWatcherForParsedConfig(configFileName, canonicalConfigFilePath, project);
        return project;
    }

    private createConfigFileWatcherForParsedConfig(configFileName: NormalizedPath, canonicalConfigFilePath: NormalizedPath, forProject: ConfiguredProject) {
        console.debug("todo - implement me - createConfigFileWatcherForParsedConfig");
        // const configFileExistenceInfo = this.configFileExistenceInfoCache.get(canonicalConfigFilePath)!;
        // // When watching config file for parsed config, remove the noopFileWatcher that can be created for open files impacted by config file and watch for real
        // if (!configFileExistenceInfo.watcher || configFileExistenceInfo.watcher === noopConfigFileWatcher) {
        //     configFileExistenceInfo.watcher = this.watchFactory.watchFile(
        //         configFileName,
        //         (_fileName, eventKind) => this.onConfigFileChanged(configFileName, canonicalConfigFilePath, eventKind),
        //         PollingInterval.High,
        //         this.getWatchOptionsFromProjectWatchOptions(configFileExistenceInfo?.config?.parsedCommandLine?.watchOptions, getDirectoryPath(configFileName)),
        //         WatchType.ConfigFile,
        //         forProject,
        //     );
        // }
        // // Watching config file for project, update the map
        // const projects = configFileExistenceInfo.config!.projects;
        // projects.set(forProject.canonicalConfigFilePath, projects.get(forProject.canonicalConfigFilePath) || false);
    }

    /** @internal */
    applyChangesInOpenFiles(openFiles: Iterable<OpenFileArguments> | undefined, changedFiles?: Iterable<ChangeFileArguments>, closedFiles?: string[]): void {
        let openScriptInfos: ScriptInfo[] | undefined;
        let assignOrphanScriptInfosToInferredProject = false;
        if (openFiles) {
            for (const file of openFiles) {
                // Create script infos so we have the new content for all the open files before we do any updates to projects
                const info = this.getOrCreateOpenScriptInfo(
                    toNormalizedPath(file.fileName),
                    file.content,
                    ScriptKind.LPC,
                    file.hasMixedContent,
                    file.projectRootPath ? toNormalizedPath(file.projectRootPath) : undefined,
                );
                (openScriptInfos || (openScriptInfos = [])).push(info);
            }
        }
    }
}


export type ProjectServiceEventHandler = (event: ProjectServiceEvent) => void;

export interface LargeFileReferencedEvent {
    eventName: typeof LargeFileReferencedEvent;
    data: { file: string; fileSize: number; maxFileSize: number; };
}

export type ProjectServiceEvent =
    | LargeFileReferencedEvent
    // | ProjectsUpdatedInBackgroundEvent
    // | ProjectLoadingStartEvent
    // | ProjectLoadingFinishEvent
    | ConfigFileDiagEvent
    // | ProjectLanguageServiceStateEvent
    // | ProjectInfoTelemetryEvent
    // | OpenFileInfoTelemetryEvent
    // | CreateFileWatcherEvent
    // | CreateDirectoryWatcherEvent
    // | CloseFileWatcherEvent;
    ;


export interface ProjectServiceOptions {
    host: ServerHost;
    logger: Logger;
    cancellationToken: HostCancellationToken;
    useSingleInferredProject: boolean;
    useInferredProjectPerProjectRoot: boolean;    
    eventHandler?: ProjectServiceEventHandler;
    canUseWatchEvents?: boolean;
    suppressDiagnosticEvents?: boolean;
    throttleWaitMilliseconds?: number;
    globalPlugins?: readonly string[];
    pluginProbeLocations?: readonly string[];
    allowLocalPluginLoads?: boolean;
    typesMapLocation?: string;
    serverMode?: LanguageServiceMode;
    session: Session<unknown> | undefined;
    projectRootFolder?: string;    
    /** @internal */ incrementalVerifier?: (service: ProjectService) => void;    
}

/**
 * returns true if project updated with new program
 * @internal
 */
export function updateProjectIfDirty(project: Project) {
    project.invalidateResolutionsOfFailedLookupLocations();
    return project.dirty && !project.updateGraph();
}

export interface OpenConfiguredProjectResult {
    configFileName?: NormalizedPath;
    configFileErrors?: readonly Diagnostic[];
}

interface AssignProjectResult extends OpenConfiguredProjectResult {
    retainProjects: Set<ConfiguredProject> | undefined;
}


/** @internal */
export enum ConfiguredProjectLoadKind {
    Find,
    Create,
    Reload,
}

/** @internal */
export interface DefaultConfiguredProjectResult {
    defaultProject: ConfiguredProject | undefined;
    sentConfigDiag: Set<ConfiguredProject>;
    seenProjects: Set<ConfiguredProject>;
}


/** @internal */
export interface ConfigFileExistenceInfo {
    /**
     * Cached value of existence of config file
     * It is true if there is configured project open for this file.
     * It can be either true or false if this is the config file that is being watched by inferred project
     *   to decide when to update the structure so that it knows about updating the project for its files
     *   (config file may include the inferred project files after the change and hence may be wont need to be in inferred project)
     */
    exists: boolean;
    /**
     * Tracks how many open files are impacted by this config file that are root of inferred project
     */
    inferredProjectRoots?: number;
    /**
     * openFilesImpactedByConfigFiles is a map of open files that would be impacted by this config file
     *   because these are the paths being looked up for their default configured project location
     */
    openFilesImpactedByConfigFile?: Set<Path>;
    /**
     * The file watcher watching the config file because there is open script info that is root of
     * inferred project and will be impacted by change in the status of the config file
     * or
     * Configured project for this config file is open
     * or
     * Configured project references this config file
     */
    watcher?: FileWatcher;
    /**
     * Cached parsed command line and other related information like watched directories etc
     */
    config?: any;
}

function findProjectByName<T extends Project>(projectName: string, projects: T[]): T | undefined {
    for (const proj of projects) {
        if (proj.getProjectName() === projectName) {
            return proj;
        }
    }
}

export interface OpenFileArguments {
    fileName: string;
    content?: string;
    scriptKind?: ScriptKind;
    hasMixedContent?: boolean;
    projectRootPath?: string;
}

/** @internal */
export interface ChangeFileArguments {
    fileName: string;
    changes: Iterable<TextChange>;
}


/** @internal */
export interface OriginalFileInfo {
    fileName: NormalizedPath;
    path: Path;
}
/** @internal */
export interface AncestorConfigFileInfo {
    /** config file name */
    fileName: NormalizedPath;
    /** path of open file so we can look at correct root */
    path: Path;
    configFileInfo: true;
}
/** @internal */
export type OpenScriptInfoOrClosedFileInfo = ScriptInfo | OriginalFileInfo;
/** @internal */
export type OpenScriptInfoOrClosedOrConfigFileInfo = OpenScriptInfoOrClosedFileInfo | AncestorConfigFileInfo;

/**
 * string if file name,
 * false if no config file name
 * @internal
 */
export type ConfigFileName = NormalizedPath | false;

function isAncestorConfigFileInfo(infoOrFileNameOrConfig: OpenScriptInfoOrClosedOrConfigFileInfo): infoOrFileNameOrConfig is AncestorConfigFileInfo {
    return !!(infoOrFileNameOrConfig as AncestorConfigFileInfo).configFileInfo;
}

/** Gets cached value of config file name based on open script info or ancestor script info */
function getConfigFileNameFromCache(info: OpenScriptInfoOrClosedOrConfigFileInfo, cache: Map<Path, ConfigFileName> | undefined): ConfigFileName | undefined {
    if (!cache || isAncestorConfigFileInfo(info)) return undefined;
    return cache.get(info.path);
}

function isOpenScriptInfo(infoOrFileNameOrConfig: OpenScriptInfoOrClosedOrConfigFileInfo): infoOrFileNameOrConfig is ScriptInfo {
    return !!(infoOrFileNameOrConfig as ScriptInfo).containingProjects;
}

export interface ConfigFileDiagEvent {
    eventName: typeof ConfigFileDiagEvent;
    data: { triggerFile: string; configFileName: string; diagnostics: readonly Diagnostic[]; };
}

function fileOpenReason(info: ScriptInfo) {
    return `Creating possible configured project for ${info.fileName} to open`;
}

function printProjectWithoutFileNames(project: Project) {
    project.print(/*writeProjectFileNames*/ false, /*writeFileExplaination*/ false, /*writeFileVersionAndText*/ false);
}

/** @internal */
export interface FindCreateOrLoadConfiguredProjectResult {
    project: ConfiguredProject;
    sentConfigFileDiag: boolean;
}


/** Updates the program for triggerFile and returns true if sent configFileDiagEvent */
function updateWithTriggerFile(project: ConfiguredProject, triggerFile: NormalizedPath, isReload: boolean): boolean {
    if (!isReload) {
        project.invalidateResolutionsOfFailedLookupLocations();
        if (!project.dirty) return false;
    }
    project.triggerFileForConfigFileDiag = triggerFile;
    const updateLevel = project.pendingUpdateLevel;
    project.updateGraph();
    // On full update the event is sent by recursive updateWithTrigger through reloadConfiguredProject
    if (!project.triggerFileForConfigFileDiag && !isReload) return updateLevel === ProgramUpdateLevel.Full;
    const sent = project.projectService.sendConfigFileDiagEvent(project, triggerFile, isReload);
    project.triggerFileForConfigFileDiag = undefined;
    return sent;
}


/** Updates with triggerFile if persent otherwise updateProjectIfDirty, returns true if sent configFileDiagEvent */
function updateConfiguredProject(project: ConfiguredProject, triggerFile: NormalizedPath | undefined) {
    if (triggerFile) {
        if (updateWithTriggerFile(project, triggerFile, /*isReload*/ false)) return true;
    }
    else {
        updateProjectIfDirty(project);
    }
    return false;
}

function reloadReason(reason: string) {
    return `User requested reload projects: ${reason}`;
}
