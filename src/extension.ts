// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

//todo this needs to parse to see if it starts with a comment or not
const generateCommentText = (
  text = "",
  commentSymbol = "//",
  boxSymbol = "=",
  boxWidth = 0
) => {
  var lines = text.split("\n");
  lines = lines.map((line) =>
    line.startsWith(commentSymbol)
      ? line.slice(commentSymbol.length).trimStart()
      : line.trimStart()
  );

  if (!lines) {
    return;
  }
  const maxLineLength = lines.reduce(
    (acc, cur) => (acc < cur.length ? cur.length : acc),
    -1
  );

  if (boxWidth <= 0) {
    // Set boxWidth to largest line length, and add 4 for padding
    boxWidth = maxLineLength + 4;
  }

  const border = commentSymbol + " " + boxSymbol.repeat(boxWidth);

  const box = [
    border,
    ...lines.map(
      (line) =>
        `${commentSymbol} ${boxSymbol} ${line.padEnd(
          maxLineLength
        )} ${boxSymbol}`
    ),
    border,
  ].join("\n");

  return box;
};

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "bigcomments" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("bigcomments.defaultcommentbox", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const selected = editor.selection;
      const text = editor.document.getText(selected);
      const commentSymbol =
        editor.document.languageId === "python" ? "#" : "//";

      const box = generateCommentText(text, commentSymbol)!;

      editor.edit((editBuilder) => {
        editBuilder.replace(selected, box);
      });

      vscode.window.showInformationMessage(
        "Created new comment around " + text
      );
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "bigcomments.customcommentbox",
      async () => {
        const userResponse = await vscode.window.showInputBox({
          placeHolder: "Enter your desired Box Symbol (e.g. '='): ",
        });

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
          return;
        }

        const selected = editor.selection;
        const text = editor.document.getText(selected);
        const commentSymbol =
          editor.document.languageId === "python" ? "#" : "//";

        const box = generateCommentText(text, commentSymbol, userResponse)!;

        editor.edit((editBuilder) => {
          editBuilder.replace(selected, box);
        });

        vscode.window.showInformationMessage(
          "Created new comment around " + text
        );
      }
    )
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
