# reveal.js Presentation

A beautiful HTML presentation built with **reveal.js 5.2.1** and **bun**.

## 🎯 Features

- ✨ **Black Theme** - Clean, modern dark theme
- 📝 **Markdown Support** - Write slides in Markdown
- 💻 **Syntax Highlighting** - Beautiful code examples with highlight.js
- 🎨 **Fragment Animations** - Elements appear one at a time
- 📊 **Vertical Slides** - Nested slide navigation
- 🔄 **Auto-Animate** - Smooth transitions between slides
- 🔥 **Hot Reload** - Instant preview during development

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Start development server with hot reload
bun run dev

# Or use the start alias
bun run start
bun run serve
```

This will start a development server that watches for file changes and automatically reloads the presentation in your browser.

### View Presentation

Open your browser and navigate to:
- `http://localhost:3000` (when using a development server)
- Or simply open `src/index.html` directly in your browser

## 📁 Project Structure

```
workshop-minimax/
├── src/
│   ├── index.html          # Main presentation file
│   ├── css/
│   │   └── custom.css      # Custom styles (optional)
│   └── js/
│       └── main.js         # Custom initialization (optional)
├── node_modules/           # Dependencies (auto-generated)
├── package.json            # Project configuration
├── bun.lockb               # Bun lockfile
└── README.md               # This file
```

## 🎨 Customization

### Changing the Theme

reveal.js comes with several built-in themes. To change the theme, edit `src/index.html` and replace the theme stylesheet:

```html
<!-- Available themes -->
<link rel="stylesheet" href="node_modules/reveal.js/dist/theme/black.css">
<link rel="stylesheet" href="node_modules/reveal.js/dist/theme/white.css">
<link rel="stylesheet" href="node_modules/reveal.js/dist/theme/league.css">
<link rel="stylesheet" href="node_modules/reveal.js/dist/theme/beige.css">
<link rel="stylesheet" href="node_modules/reveal.js/dist/theme/night.css">
<link rel="stylesheet" href="node_modules/reveal.js/dist/theme/sky.css">
<link rel="stylesheet" href="node_modules/reveal.js/dist/theme/serif.css">
<link rel="stylesheet" href="node_modules/reveal.js/dist/theme/solarized.css">
```

### Adding Slides

Add new slides in `src/index.html` within the `<div class="slides">` container:

```html
<section>
  <h2>Your Slide Title</h2>
  <p>Your content here</p>
</section>
```

### Markdown Slides

Create slides using Markdown:

```html
<section data-markdown>
  <script type="text/template">
    ## Slide Title

    Your Markdown content here

    - Bullet point 1
    - Bullet point 2
  </script>
</section>
```

### Code Examples

Add syntax-highlighted code:

```html
<pre><code data-trim data-noescape class="javascript">
function example() {
  console.log("Hello, World!");
}
</code></pre>
```

### Transition Effects

Change the transition style in the initialization config:

```javascript
Reveal.initialize({
  transition: 'slide', // none, fade, slide, convex, concave, zoom
});
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `→` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `Esc` | Overview mode |
| `F` | Fullscreen |
| `S` | Speaker view |
| `?` | Show help |

## 📦 Available Plugins

This project includes the following plugins:

- **Markdown** - Write slides in Markdown syntax
- **Highlight** - Syntax highlighting for code blocks

Additional plugins available in reveal.js:

- `plugin/notes` - Speaker notes
- `plugin/search` - Search functionality
- `plugin/zoom` - Zoom in/out
- `plugin/math` - LaTeX math typesetting

## 🛠️ Technology Stack

- **Framework**: reveal.js 5.2.1
- **Package Manager**: bun 1.1.33
- **Theme**: Black (built-in)
- **Plugins**: Markdown, Highlight (built-in)
- **Language**: HTML5, CSS3, JavaScript

## 📚 Resources

- [reveal.js Official Website](https://revealjs.com)
- [reveal.js GitHub Repository](https://github.com/hakimel/reveal.js)
- [reveal.js Documentation](https://revealjs.com/api)
- [reveal.js Demo](https://revealjs.com/demo)
- [Bun Documentation](https://bun.sh/docs)

## 📄 License

MIT License - feel free to use this template for your own presentations!

---

**Made with ❤️ using reveal.js + bun**
