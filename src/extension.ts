// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const treeDataProvider = new EmptyTreeViewProvider();
    vscode.window.registerTreeDataProvider('extesterView', treeDataProvider);

    // Optional: Add a command to refresh the TreeView
    context.subscriptions.push(
        vscode.commands.registerCommand('emptyTreeView.refresh', () => {
            treeDataProvider.refresh();
        })
    );

	  // run all tests
	  context.subscriptions.push(
		vscode.commands.registerCommand('extester-runner.runAll', async () => {
		  vscode.window.showInformationMessage('Running all tests...');
		})
	  );

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "extester-runner" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extester-runner.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		await runAllTests();
		vscode.window.showInformationMessage('Hello World from extester-runner and Jordan Haj!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}


function runAllTests() {
	vscode.window.showInformationMessage('runAllTests()');
}

// Define a basic TreeDataProvider
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
