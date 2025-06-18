# 🧱 bigcomments

`bigcomments` is a Visual Studio Code extension that helps you format **large, padded comment blocks** around selected text. It's great for making headers, section dividers, or attention-grabbing notes in your code.  
I made this to solve my frustration with not being able to easily create clear and consistent "header comments."

---

## ✨ Features

- ✅ Wrap selected text in a **boxed comment block**
- 🧠 **Auto-detects comment style** (`//`, `#`)
- 💬 **Custom symbols** for borders (e.g. `=`, `#`, `@`)
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

Output:

```js
// =======================
// = Initialize database =
// = Run migrations      =
// =======================
```

### Custom box symbol (`@`)

```js
// @@@@@@@@@@@@@@@@@@@@@@@
// @ Initialize database @
// @ Run migrations      @
// @@@@@@@@@@@@@@@@@@@@@@@
```

### Big Box mode (adds blank lines and padding)

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

| Command ID                         | Description                          |
| ---------------------------------- | ------------------------------------ |
| `Bigcomments: Default Comment Box` | Box around selected text using `=`   |
| `Bigcomments: Custom Comment Box`  | Ask for a symbol (like `#` or `@`)   |
| `Bigcomments: Big Custom Box`      | Extra padding, more visual space     |
| `Bigcomments: Inline Comment Box`  | Box around the **current line only** |

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

None (yet). All features are accessed via commands.
Planned: presets, width control, multi-language comment support.

---

## 🐞 Known Issues

- Only supports `//` and `#` comment styles
- No toggle/unbox support (yet)
- Doesn't auto-detect box symbol in existing blocks

---

## 📦 Release Notes

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

- Multi-language support (C-style, XML, Markdown)
- Presets and themes for comment styles
- Toggle/unbox existing comment blocks
- Header comments with emojis or banners

---

**Enjoy readable, beautiful comments again!**
