# Change Log

### 0.1.3

- 🧷 **Indent preservation**: boxed comments now align to the indent level of the first line in the selection
- 🔧 Internal improvements to spacing and alignment logic
- 🐛 Bug fixes with multicharacter comments

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
