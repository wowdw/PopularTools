import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // 转换为大写
    let toUpperCase = vscode.commands.registerCommand('dev-helper.toUpperCase', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            editor.edit(editBuilder => {
                editBuilder.replace(selection, text.toUpperCase());
            });
        }
    });

    // 转换为驼峰命名
    let toCamelCase = vscode.commands.registerCommand('dev-helper.toCamelCase', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            const camelCase = text
                .toLowerCase()
                .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
            editor.edit(editBuilder => {
                editBuilder.replace(selection, camelCase);
            });
        }
    });

    // 格式化 JSON
    let formatJSON = vscode.commands.registerCommand('dev-helper.formatJSON', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            try {
                const obj = JSON.parse(text);
                const formatted = JSON.stringify(obj, null, 2);
                editor.edit(editBuilder => {
                    editBuilder.replace(selection, formatted);
                });
            } catch (e) {
                vscode.window.showErrorMessage('无效的 JSON 格式');
            }
        }
    });

    context.subscriptions.push(toUpperCase, toCamelCase, formatJSON);
}

export function deactivate() {}