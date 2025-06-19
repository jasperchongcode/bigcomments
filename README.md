# 🧱 bigcomments

`bigcomments` is a Visual Studio Code extension that helps you format **large, padded comment blocks** around selected text. It's great for making headers, section dividers, or attention-grabbing notes in your code.  
I made this to solve my frustration with not being able to easily create clear and consistent "header comments."

---

## ✨ Features

- ✅ Wrap selected text in a **boxed comment block**
- 🧠 **Auto-detects comment style** (`//`, `#`)
- 💬 **Custom symbols + decorators** (e.g. `=*`, `#*`, `-$`) for use with comment colouring extensions
- 📏 **Auto-resizes box** to fit the widest line
- ♻️ **Strips existing comment symbols** before re-boxing
- 🧱 **"Big Box" mode**: adds extra spacing and padding
- 📍 **Inline mode**: turn a single line into a full-width comment
- ⚡ Fast, keyboard-first UX

---

## 🔍 Examples

### Multi-line comment (default mode)

Input:

```js
Initialize database
Run migrations
```

Output (default):

```js
// =======================
// = Initialize database =
// = Run migrations      =
// =======================
```

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
// ==============================
// =                           =
// =   Initialize database     =
// =   Run migrations          =
// =                           =
// ==============================
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

You can add custom keybindings in your own VS Code keybindings:

```json
{
  "key": "cmd+alt+b",
  "command": "bigcomments.defaultcommentbox",
  "when": "editorTextFocus"
}
```

---

## 🛠 Requirements

- VS Code **1.85.0 or later**
- No external dependencies

---

## 📌 Extension Settings

Currently no settings. All behavior is controlled via commands.

Future ideas:

- Presets
- Per-language comment style overrides
- Persistent default box character

---

## 🐞 Known Issues

- Only supports `//` and `#` comment styles
- No unbox/toggle feature yet
- No global settings (e.g. default symbol or decorator)

---

## 📦 Release Notes

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

- Multi-language support (e.g., `/* */`, `<!-- -->`)
- Toggle/unbox existing comment blocks
- Comment style presets
- ASCII banners or emoji box styles

---

**Make your comments readable again.** 💬✨
