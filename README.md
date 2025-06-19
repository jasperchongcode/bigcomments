# 🧱 bigcomments

`bigcomments` is a Visual Studio Code extension that helps you format **large, padded comment blocks** around selected text. It's great for making headers, section dividers, or attention-grabbing notes in your code.
I made this to solve my frustration with not being able to easily create clear and consistent "header comments."

---

## ✨ Features

- ✅ Wrap selected text in a **boxed comment block**
- 🧠 **Auto-detects comment style** based on file type (e.g. `//`, `#`, `--`, `/* */`, `<!-- -->`)
- 🧩 **Supports both single-line and block comments** (HTML, CSS, Lua, etc.)
- 💬 **Custom symbols + decorators** (e.g. `=*`, `#*`, `-$`) for use with comment colouring extensions
- 📏 **Auto-resizes box** to fit the widest line
- ♻️ **Strips existing comment symbols** before re-boxing
- 🧱 **"Big Box" mode**: adds extra spacing and padding
- 📍 **Inline mode**: turn a single line into a full-width comment
- ⚡ Fast, keyboard-first UX

---

## 🌐 Language Support

`bigcomments` now supports comment formatting for a wide range of languages:

| Language       | Comment Style  |
| -------------- | -------------- |
| JavaScript     | `//`           |
| TypeScript     | `//`           |
| Java           | `//`           |
| C / C++ / C#   | `//`           |
| Go / Rust      | `//`           |
| Scala / Kotlin | `//`           |
| Python / R     | `#`            |
| Perl / Ruby    | `#`            |
| Shell / Make   | `#`            |
| Dockerfile     | `#`            |
| SQL / PLSQL    | `--`           |
| HTML / XML     | `<!-- ... -->` |
| CSS / SCSS     | `/* ... */`    |
| Lua            | `--[[ ... ]]`  |

If your language isn’t listed, it will fall back to `//`.

---

## 🔍 Examples

### Single-line comment (default mode)

```js
// =======================
// = Initialize database =
// = Run migrations      =
// =======================
```

### Block comment mode (e.g. CSS)

```css
/* ===================== 
   = Initialize styles = 
   = Add media queries = 
   ===================== */
```

### Block comment mode (e.g. HTML)

```html
<!-- ====================== 
     = Initialize content = 
     = Add footer         = 
     ====================== -->
```

💡 **Note:** For block-style comment formats (like `/* */`, `<!-- -->`, `--[[ ]]`), only the **first** and **last** lines use the delimiters. Inner lines are plain, padded text.

### Custom input `=*` (decorator)

```js
//* =======================
//* = Initialize database =
//* = Run migrations      =
//* =======================
```

### Custom input `@$` (symbol + styled comment prefix)

```js
//$ @@@@@@@@@@@@@@@@@@@@@@@
//$ @ Initialize database @
//$ @ Run migrations      @
//$ @@@@@@@@@@@@@@@@@@@@@@@
```

### Big Box mode

```js
// =============================
// =                           =
// =    Initialize database    =
// =    Run migrations         =
// =                           =
// =============================
```

---

## ⚙️ Usage

1. **Select** the text you want to wrap
2. Open the **Command Palette**: `Cmd+Shift+P` / `Ctrl+Shift+P`
3. Run one of the following commands:

### 🧾 Available Commands

| Command Title                      | Description                                                               |
| ---------------------------------- | ------------------------------------------------------------------------- |
| `BigComments: Default Comment Box` | Wraps selected text in a box using `=` characters                         |
| `BigComments: Custom Comment Box`  | Prompts for a custom box symbol and optional decorator (e.g., `=*`, `-$`) |
| `BigComments: Big Custom Box`      | Adds vertical padding to create a larger, more spaced-out comment box     |
| `BigComments: Inline Comment Box`  | Boxes the current line under the cursor                                   |

---

## 💡 Custom Symbol Input Format

When prompted:

```
Enter your desired Box Symbol and (optional) colour decorator (e.g. '=*'):
```

- The **first character** is used as the **box symbol** (e.g. `=`)
- Any following characters are used as **decorator(s)** added to the comment symbol (e.g. `//*`, `//$`, `##!`)

Example:

| Input | Box Symbol | Comment Prefix |
| ----- | ---------- | -------------- |
| `=*`  | `=`        | `//*`          |
| `#$`  | `#`        | `//$`          |
| `@`   | `@`        | `//@`          |

---

## 🎹 Keybinding (Optional)

You can add a custom keybinding for any `bigcomments` command by editing your VS Code keybindings:

1. Open **Command Palette** → `Preferences: Open Keyboard Shortcuts (JSON)`
2. Add a new entry like this:

```json
{
  "key": "cmd+shift+b",
  "command": "bigcomments.defaultcommentboxinline",
  "when": "editorTextFocus"
}
```

This example binds `Cmd+Shift+B` to run the **Inline Comment Box** command whenever the editor is focused.

You can replace `"cmd+shift+b"` with your own preferred key combination, and change the command to any of the following:

| Command                               | Description                         |
| ------------------------------------- | ----------------------------------- |
| `bigcomments.defaultcommentbox`       | Wraps selection in default box      |
| `bigcomments.customcommentbox`        | Prompts for custom symbol           |
| `bigcomments.bigcustomcommentbox`     | Creates padded “big” box            |
| `bigcomments.defaultcommentboxinline` | Boxes the current line under cursor |

---

## 📌 Extension Settings

`bigcomments` supports customizable settings in your VS Code `settings.json`:

| Setting                     | Type     | Default | Description                                                                            |
| --------------------------- | -------- | ------- | -------------------------------------------------------------------------------------- |
| `bigcomments.defaultSymbol` | `string` | `"="`   | The default box symbol used when wrapping text. Used when no custom input is provided. |

To configure it:

1. Open **Command Palette** → `Preferences: Open Settings (JSON)`
2. Add your preferred symbol:

```json
"bigcomments.defaultSymbol": "#"
```

This will use `#` as the default box symbol when wrapping comments, unless you override it manually via a custom input.

---

## 🛠 Requirements

- VS Code **1.85.0 or later**
- No external dependencies

---

## 🐞 Known Issues

- Only one comment style is supported per language
- No unbox/toggle feature yet

---

## 📦 Release Notes

### 0.1.1

- 🌐 **Multi-language comment support**: now supports single-line and block comment formats for 20+ languages
- 🧱 Block comment boxes use `/* */`, `<!-- -->`, etc. correctly (only on top and bottom lines)
- 🧠 Improved comment detection and formatting consistency
- 🔧 Small internal refactors for maintainability

### 0.0.3

- 🔡 Improved custom box prompt: now accepts `symbol + decorator` input (`=*`)
- ✨ Decorators are applied to the comment symbol (`//*`, `//#`, etc.)
- 🔄 Small refactor for inline mode, edge cases

### 0.0.2

- ➕ Added **inline mode**
- ➕ Added **big box mode** with padded layout
- 🧠 Smarter re-parsing of existing comments
- ✍️ Improved default box sizing logic

### 0.0.1

- Initial release
- Default + custom comment boxes
- Auto language detection (`//` vs `#`)

---

## 🧪 Future Ideas

- Toggle/unbox existing comment blocks
- ASCII banners or emoji box styles
- Global and per-language settings
