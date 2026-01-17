# MiniMax M2.1 Workshop - 101 Vibe Engineering

A reveal.js presentation built with **bun** for the MiniMax M2.1 workshop. This workshop teaches developers how to effectively use AI tools and agentic AI workflows to build software with confidence.

## ❤️ Collaboration

[![MiniMax](src/images/minimax.webp](https://platform.minimax.io/subscribe/coding-plan)

MiniMax-M2.1 is an open-source SOTA model that excels at coding, navigating digital environments, and handling long, multi-step tasks.
With Open Source Claude Cowork, M2.1 takes a concrete step toward our long-term vision of general-purpose productivity, making advanced AI capabilities accessible to everyone. 



## 📖 About the Workshop

This workshop is designed to help developers gain confidence in using AI to build things. Whether you're new to agentic AI or looking to improve your AI-assisted coding workflow, this workshop covers practical techniques and tools that you can apply immediately.

**Workshop Goal**: Help participants gain confidence to use AI to build things.

**Target Audience**: Developers interested in agentic AI and AI-assisted coding who want to learn effective prompting techniques and AI workflow best practices.

**What You'll Learn**:
- How to set up and configure AI development tools
- Effective prompting frameworks and techniques
- Best practices for working with AI in your development workflow

## 📚 Workshop Topics

The workshop covers three main areas:

### 1. Setup Tools
Learn how to set up **OpenCode** with **MiniMax M2.1** integration, including configuration and best practices for getting started with AI-assisted development.

### 2. Learning Prompting
Master the **TCERI Framework** (Task, Context, Evaluate, Reference, Iterate) - a structured approach to writing effective prompts that get better results from AI models.

### 3. Workflow with AI
Discover how to enhance your AI capabilities using:
- **Skills**: Knowledge, capabilities, and domain expertise
- **MCP** (Model Context Protocol): Context and reference management
- **Commands**: Repeatable workflows
- **Rules**: Instructions and constraints

## 👤 About the Presenter

**Naufaldi Rafif Satriya**

- Senior Software Engineer at an FMCG Company
- Dev Ambassador at [MiniMax](https://minimax.ai/)
- 8+ months of experience working with agentic AI, shipping products to production

**Connect**:
- GitHub: [@naufaldi](https://github.com/naufaldi)
- Twitter/X: [@f2aldi](https://x.com/f2aldi)

**Projects Built with AI**:
- [Go Pixo](https://github.com/naufaldi/go-pixo) - Built with MiniMax M2.1
- [Book API](https://github.com/naufaldi/bookapi)
- [Excalidraw Clone](https://github.com/naufaldi/excalidraw-clone)

## 🎯 Presentation Features

This workshop presentation includes:

- ✨ **Black Theme** - Clean, modern dark theme
- 📝 **Markdown Support** - Write slides in Markdown
- 💻 **Syntax Highlighting** - Beautiful code examples with highlight.js
- 🎨 **Fragment Animations** - Elements appear one at a time
- 📊 **Vertical Slides** - Nested slide navigation
- 🔄 **Auto-Animate** - Smooth transitions between slides
- 🔥 **Hot Reload** - Instant preview during development

## 🚀 Quick Start

To view or run this workshop presentation locally:

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
│   ├── index.html          # Main reveal.js presentation
│   └── content.md          # Presentation content source
├── server.js               # Development server (Bun)
├── index.ts                # Entry point
├── package.json            # Project configuration
├── tsconfig.json           # TypeScript configuration
├── bun.lockb               # Bun lockfile
├── AGENTS.md               # AI coding agent guidelines
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

### Presentation
- **Framework**: reveal.js 5.2.1
- **Package Manager**: bun 1.1.33
- **Theme**: Black (built-in)
- **Plugins**: Markdown, Highlight (built-in)
- **Language**: HTML5, CSS3, JavaScript, TypeScript

### Workshop Tools & Models
- **AI Model**: MiniMax M2.1 - Fast and smart coding model with multi-language programming support
- **IDE/Tool**: OpenCode - Free AI coding assistant with MiniMax M2.1 integration
- **Framework**: TCERI (Task, Context, Evaluate, Reference, Iterate) - Prompting framework
- **Protocol**: MCP (Model Context Protocol) - For context and reference management

## 📚 Resources

### Workshop Related
- [MiniMax](https://minimax.ai/) - AI model provider
- [OpenCode](https://opencode.ai) - Free AI coding assistant
- [MCP Servers](https://mcpservers.org/) - Model Context Protocol resources
- [Claude Skills](https://claude-plugins.dev/skills) - Skills documentation
- [Superpowers](https://github.com/obra/superpowers) - Open-source skills repository
- [AGENTS.md](https://agents.md/) - Rules and guidelines reference

### Presentation Framework
- [reveal.js Official Website](https://revealjs.com)
- [reveal.js GitHub Repository](https://github.com/hakimel/reveal.js)
- [reveal.js Documentation](https://revealjs.com/api)
- [reveal.js Demo](https://revealjs.com/demo)
- [Bun Documentation](https://bun.sh/docs)

## 📄 License

MIT License - feel free to use this presentation for your own workshops or learning!

---

**MiniMax M2.1 Workshop Presentation** - Made with ❤️ using reveal.js + bun
