import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const treeDataProvider = new EmptyTreeViewProvider();
    vscode.window.registerTreeDataProvider('extesterView', treeDataProvider);

    

	// commands
	// run all tests
	context.subscriptions.push(
		vscode.commands.registerCommand('extester-runner.runAll', async () => {
			vscode.window.showInformationMessage('extester-runner.runAll');
		})
	);

	// refresh tests
	context.subscriptions.push(
		vscode.commands.registerCommand('extester-runner.refreshTests', async () => {
			vscode.window.showInformationMessage('extester-runner.refreshTests');
		})
	);

	// collapse all
	context.subscriptions.push(
		vscode.commands.registerCommand('extester-runner.collapseAll', async () => {
			vscode.window.showInformationMessage('extester-runner.collapseAll');
		})
	);

	// search files
	context.subscriptions.push(
		vscode.commands.registerCommand('extester-runner.searchFiles', async () => {
			vscode.window.showInformationMessage('extester-runner.searchFiles');
		})
	);
	
}

// This method is called when your extension is deactivated
export function deactivate() {}










//// To be replaced!

// Define a basic TreeDataProvider -> To be replaced!`
class EmptyTreeViewProvider implements vscode.TreeDataProvider<TreeItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<TreeItem | undefined | null | void> =
        new vscode.EventEmitter<TreeItem | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<TreeItem | undefined | null | void> = this._onDidChangeTreeData.event;

    // Refresh the Tree View
    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    // Get tree item
    getTreeItem(element: TreeItem): vscode.TreeItem {
        return element;
    }

    // Get children of a tree item (empty for now)
    getChildren(element?: TreeItem): Thenable<TreeItem[]> {
		if (!element) {
				return Promise.resolve([
					new TreeItem("Item 1"),
					new TreeItem("Item 2"),
					new TreeItem("Item 3")
				]);
			}
			return Promise.resolve([]); // No children for now
    }
}

// Define a simple TreeItem class
class TreeItem extends vscode.TreeItem {
    constructor(label: string) {
        super(label);
    }
}
