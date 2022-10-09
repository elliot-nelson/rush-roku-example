"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamplePlugin = void 0;
class ExamplePlugin {
    constructor() {
        this.name = 'examplePlugin';
        /*
        shouldSearchInFileForTests(file: BscFile) {
            if (!this.config.includeFilters || this.config.includeFilters.length === 0) {
                return true;
            } else {
                for (let filter of this.config.includeFilters) {
                    if (!minimatch(file.pathAbsolute, filter)) {
                        return false;
                    }
                }
            }
            // console.log('including ', file.pkgPath);
            return true;
        }
        */
    }
    //public config: RooibosConfig;
    beforeProgramCreate(builder) {
        this._builder = builder;
        console.log('beforeProgramCreate', builder);
        //this.config = this.getConfig((builder.options as any).rooibos || {});
        /*
        this.fileFactory = new FileFactory(this.config);
        if (!this.session) {
            this.session = new RooibosSession(builder, this.fileFactory);
            this.codeCoverageProcessor = new CodeCoverageProcessor(builder);
        }
        */
    }
    /*
    private getConfig(options: any) {
        let config: RooibosConfig = options;
        if (config.printTestTimes === undefined) {
            config.printTestTimes = true;
        }
        if (config.catchCrashes === undefined) {
            config.catchCrashes = true;
        }
        if (config.sendHomeOnFinish === undefined) {
            config.sendHomeOnFinish = true;
        }
        if (config.failFast === undefined) {
            config.failFast = true;
        }
        if (config.showOnlyFailures === undefined) {
            config.showOnlyFailures = true;
        }
        if (config.isRecordingCodeCoverage === undefined) {
            config.isRecordingCodeCoverage = true;
        }
        //ignore roku modules by default
        if (config.includeFilters === undefined) {
            config.includeFilters = []
        }

        return config;
    }
    */
    afterProgramCreate(program) {
        console.log('afterProgramCreate', program);
        //this.fileFactory.addFrameworkFiles(program);
    }
    afterFileParse(file) {
        console.log('afp', file.pkgPath);
        return;
        /*
        if (file.pathAbsolute.includes('/rooibos/bsc-plugin/dist/framework')) {
            // eslint-disable-next-line @typescript-eslint/dot-notation
            file['diagnostics'] = [];
            return;
        }
        if (this.fileFactory.isIgnoredFile(file) || !this.shouldSearchInFileForTests(file)) {
            return;
        }

        // console.log('processing ', file.pkgPath);
        if (isBrsFile(file)) {
            if (this.session.processFile(file)) {
                //
            } else {
                this.codeCoverageProcessor.addCodeCoverage(file);
            }
        }
        */
    }
    beforePublish() { }
    beforeProgramTranspile(program, entries, editor) {
        console.log('bpt', program);
        //this.session.addTestRunnerMetadata(editor);
        //this.session.addLaunchHook(editor);
    }
    beforeFileTranspile(event) {
        console.log('bft', event);
        /*
        let testSuite = this.session.sessionInfo.testSuitesToRun.find((ts) => ts.file.pkgPath === event.file.pkgPath);
        if (testSuite) {
            let noEarlyExit = testSuite.annotation.noEarlyExit;
            if (noEarlyExit) {
                console.warn(`WARNING: testSuite "${testSuite.name}" is marked as noEarlyExit`);
            }

            testSuite.addDataFunctions(event.editor as any);
            for (let group of [...testSuite.testGroups.values()].filter((tg) => tg.isIncluded)) {
                for (let testCase of [...group.testCases.values()].filter((tc) => tc.isIncluded)) {
                    group.modifyAssertions(testCase, noEarlyExit, event.editor as any);
                }
            }
            if (testSuite.isNodeTest) {
                this.session.createNodeFile(event.program, testSuite);
            }
        }

        this.session.createNodeFiles(this._builder.program);
        */
    }
    afterProgramTranspile(program, entries, editor) {
        //this.session.removeRooibosMain();
    }
    afterProgramValidate() {
        // console.log('bpv');
        /*
        this.session.updateSessionStats();
        for (let testSuite of [...this.session.sessionInfo.testSuites.values()]) {
            testSuite.validate();
        }
        for (let file of this.fileFactory.addedFrameworkFiles) {
            // eslint-disable-next-line @typescript-eslint/dot-notation
            file['diagnostics'] = [];
        }
        */
    }
}
exports.ExamplePlugin = ExamplePlugin;
exports.default = () => {
    return new ExamplePlugin();
};
//# sourceMappingURL=plugin.js.map