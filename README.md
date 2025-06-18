# 🧱 bigcomments

`bigcomments` is a Visual Studio Code extension that helps you format **large, padded comment blocks** around selected text. Ideal for making headers, dividers, or attention-grabbing notes in your code. This was made to fix an issue I had with not being able to easily make clearly readable "header comments".

---

## ✨ Features

- Wraps selected text in a **boxed comment** using symbols like `=`, `-`, or `*`
- Detects the language’s comment style (`//` or `#`)
- Supports **custom box symbols** via input
- Auto-adjusts width to match the longest line
- Removes existing comment prefixes in selection (smart re-boxing)

### Example (JavaScript)

Selected text:

```js
Initialize database
Run migrations
```

Becomes:

```js
// ===============================
// = Initialize database         =
// = Run migrations              =
// ===============================
```

> Supports `//` and `#` comments. More coming soon.

---

## 🧪 Usage

1. **Select** the text you want to wrap
2. Press `Cmd+Shift+P` / `Ctrl+Shift+P`
3. Run:

   - `Bigcomments: Default Comment Box` — uses `=` as the box symbol
   - `Bigcomments: Custom Comment Box` — lets you pick a symbol

Optional: Assign the command to a keybind for quick use

---

## ⚙️ Extension Settings

Currently, there are no user-configurable settings — just commands.
Settings support is planned in future versions.

---

## 🛠 Requirements

- Visual Studio Code version **1.85.0 or later**
- No external dependencies

---

## 🐞 Known Issues

- Only supports `//` and `#` comment styles (JavaScript, Python, etc.)
- Does not yet auto-unbox or support multi-language configs

---

## 📦 Release Notes

### 0.0.1

- Initial release
- Default + custom comment boxes
- Language-aware comment detection
