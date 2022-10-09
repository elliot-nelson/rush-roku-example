import type { BscFile, CompilerPlugin, Program, ProgramBuilder, TranspileObj, AstEditor, BeforeFileTranspileEvent } from 'brighterscript';
export declare class ExamplePlugin implements CompilerPlugin {
    name: string;
    _builder: ProgramBuilder;
    beforeProgramCreate(builder: ProgramBuilder): void;
    afterProgramCreate(program: Program): void;
    afterFileParse(file: BscFile): void;
    beforePublish(): void;
    beforeProgramTranspile(program: Program, entries: TranspileObj[], editor: AstEditor): void;
    beforeFileTranspile(event: BeforeFileTranspileEvent): void;
    afterProgramTranspile(program: Program, entries: TranspileObj[], editor: AstEditor): void;
    afterProgramValidate(): void;
}
declare const _default: () => ExamplePlugin;
export default _default;
//# sourceMappingURL=plugin.d.ts.map