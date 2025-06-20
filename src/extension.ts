// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

const config = vscode.workspace.getConfiguration("bigcomments");
const defaultSymbol = config.get<string>("defaultSymbol", "=");

const getCommentSymbol = (languageId = "") => {
  switch (languageId) {
    // Languages with single-line comments
    case "javascript":
    case "typescript":
    case "java":
    case "c":
    case "cpp":
    case "csharp":
    case "go":
    case "rust":
    case "scala":
    case "kotlin":
      return ["//"];

    case "python":
    case "r":
    case "perl":
    case "makefile":
    case "shellscript":
    case "ruby":
    case "dockerfile":
      return ["#"];

    case "sql":
    case "plsql":
      return ["--"];

    // Languages with block comments
    case "html":
    case "xml":
      return ["<!--", "-->"];

    case "css":
    case "scss":
    case "less":
      return ["/*", "*/"];

    case "lua":
      return ["--[[", "]]"];

    default:
      return ["//"]; // fallback to single-line
  }
};

const generateCommentText = (
  text = "",
  commentSymbol = ["//"], // either 1 or 2
  boxSymbol = defaultSymbol,
  boxWidth = 0,
  size = "normal",
  colourDecorator = ""
) => {
  var lines = text.split("\n");
  // Get the leading whitespace on first line to preserve indent level
  const leadingWhitespace = lines[0].slice(
    0,
    lines[0].length - lines[0].trimStart().length
  );

  if (commentSymbol.length === 2) {
    // If a multiline comment, remove all instances of the comment symbol and strip lines
    lines = lines.map((line) =>
      line
        .replaceAll(commentSymbol[0], "")
        .replaceAll(commentSymbol[1], "")
        .trim()
    );
  } else {
    // otherwise only remove comment symbols at the start
    lines = lines.map((line) =>
      line.trim().startsWith(commentSymbol[0])
        ? line.trim().slice(commentSymbol[0].length).trim()
        : line.trim()
    );
  }

  if (!lines) {
    return;
  }

  if (size === "big") {
    lines = ["", ...lines.map((line) => `    ${line}    `), ""];
  }

  const maxLineLength = lines.reduce(
    (acc, cur) => (acc < cur.length ? cur.length : acc),
    -1
  );

  if (boxWidth <= 0) {
    // Set boxWidth to largest line length, and add 4 for padding
    boxWidth = maxLineLength + 4;
  }

  // only add the comment symbol to the start if it is a single comment symbol
  const border =
    (commentSymbol.length !== 2 ? commentSymbol : "") +
    colourDecorator +
    " " +
    boxSymbol.repeat(boxWidth);

  // construct the comment box, adding in the multiline comments if required
  var box = [
    (commentSymbol.length === 2 ? commentSymbol[0] : "") + border,
    ...lines.map(
      (line) =>
        `${
          commentSymbol.length !== 2
            ? commentSymbol
            : " ".repeat(commentSymbol[0].length)
        }${colourDecorator} ${boxSymbol} ${line.padEnd(
          maxLineLength
        )} ${boxSymbol}`
    ),
    (commentSymbol.length === 2 ? " ".repeat(commentSymbol[0].length) : "") +
      border +
      (commentSymbol.length === 2 ? commentSymbol[1] : ""),
  ];
  // preserve the previous indent level
  box = box.map((line) => leadingWhitespace + line);

  return box.join("\n");
};

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "bigcomments" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "bigcomments.defaultcommentboxinline",
      () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
          return;
        }

        const selected = editor.selection;
        const text = editor.document.lineAt(selected.active).text;
        const commentSymbol = getCommentSymbol(editor.document.languageId);

        const box = generateCommentText(text, commentSymbol)!;

        editor.edit((editBuilder) => {
          editBuilder.replace(
            editor.document.lineAt(selected.active).range,
            box
          );
        });

        vscode.window.showInformationMessage(
          "Created new comment around " + text
        );
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("bigcomments.defaultcommentbox", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const selected = editor.selection;
      const text = editor.document.getText(selected);
      const commentSymbol = getCommentSymbol(editor.document.languageId);

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
          placeHolder:
            "Enter your desired Box Symbol and (optional) colour decorator (e.g. '=*'): ",
        });

        var colourDecorator;

        if (userResponse && userResponse?.length > 1) {
          colourDecorator = userResponse.slice(1);
        } else {
          colourDecorator = "";
        }

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
          return;
        }

        const selected = editor.selection;
        const text = editor.document.getText(selected);
        const commentSymbol = getCommentSymbol(editor.document.languageId);

        const box = generateCommentText(
          text,
          commentSymbol,
          userResponse?.charAt(0),
          0,
          "normal",
          colourDecorator
        )!;

        editor.edit((editBuilder) => {
          editBuilder.replace(selected, box);
        });

        vscode.window.showInformationMessage(
          "Created new comment around " + text
        );
      }
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "bigcomments.bigcustomcommentbox",
      async () => {
        const userResponse = await vscode.window.showInputBox({
          placeHolder:
            "Enter your desired Box Symbol and (optional) colour decorator (e.g. '=*'): ",
        });
        var colourDecorator;

        if (userResponse && userResponse?.length > 1) {
          colourDecorator = userResponse.slice(1);
        } else {
          colourDecorator = "";
        }

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
          return;
        }

        const selected = editor.selection;
        const text = editor.document.getText(selected);
        const commentSymbol = getCommentSymbol(editor.document.languageId);

        const box = generateCommentText(
          text,
          commentSymbol,
          userResponse?.charAt(0),
          0,
          "big",
          colourDecorator
        )!;

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
