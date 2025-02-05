import { ShellExecution, TaskScope, workspace } from 'vscode';
import { TestRunner } from './TestRunnerTask';

export class RunFolderTask extends TestRunner {
    constructor(folder: string) {
        const configuration = workspace.getConfiguration('extesterRunner');
        const outputFolder = configuration.get<string>('outFolder') || 'out';
        const outputPath = folder.replace(/src\//, `${outputFolder}/`) + '/**/*.test.js';
        const shellExecution = new ShellExecution(`npx extest setup-and-run ${outputPath}`);
        super(TaskScope.Workspace, 'Run Test Folder', shellExecution);
    }
}
