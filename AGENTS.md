# AGENTS.md - Guidelines for AI Coding Agents

## Project Overview

A reveal.js presentation built with **bun** for the MiniMax M2.1 workshop. Contains HTML presentation files, a development server, and TypeScript configuration.

## Commands

All commands use **bun** as the JavaScript runtime and package manager.

### Development

```bash
# Start development server with hot reload
bun run dev

# Or use aliases
bun run start
bun run serve
```

The dev server runs on `http://localhost:3000` and serves `src/index.html` by default.

### Installation

```bash
# Install all dependencies
bun install

# Add new dependency
bun add <package>

# Add dev dependency
bun add -d <package>
```

### Type Checking

```bash
# Type-check TypeScript files
bun tsc --noEmit
```

### Project Structure

```
workshop-minimax/
├── src/
│   ├── index.html          # Main reveal.js presentation
│   └── content.md          # Presentation content source
├── server.js               # Development server (Bun)
├── index.ts                # Entry point
├── package.json            # Project configuration
├── tsconfig.json           # TypeScript configuration
└── bun.lockb               # Bun lockfile
```

## Code Style Guidelines

### General Principles

- Keep code simple and readable
- Use modern JavaScript/TypeScript features (ESNext)
- Prefer explicit over implicit
- Write self-documenting code with clear naming

### Language and Configuration

- **Language**: TypeScript with strict mode enabled
- **Module System**: ES Modules (ESNext)
- **JSX**: react-jsx enabled
- **Target**: ESNext

### Imports

- Use ES module syntax (`import { x } from 'y'`)
- Use TypeScript extension imports (`from './file.ts'`)
- Group imports: external first, then internal

```typescript
// Good
import { serve } from "bun";
import { file } from "bun";

// Bad
const bun = require("bun");
```

### Naming Conventions

| Construct | Convention | Example |
|-----------|------------|---------|
| Variables | camelCase | `filePath`, `serverPort` |
| Constants | SCREAMING_SNAKE_CASE | `DEFAULT_PORT` |
| Functions | camelCase | `fetchContent()`, `startServer()` |
| Classes | PascalCase | `PresentationBuilder` |
| Interfaces | PascalCase | `ServerConfig` |
| Files | kebab-case | `server.js`, `content.md` |

### TypeScript

- Enable strict mode settings
- Use explicit types for function parameters and return values
- Avoid `any` type - use `unknown` or specific types
- Use interfaces for object shapes, types for unions/primitives

```typescript
// Good
interface ServerConfig {
  port: number;
  host: string;
}

function startServer(config: ServerConfig): void {
  // ...
}
```

### Error Handling

- Use try/catch for async operations
- Provide meaningful error messages
- Return proper HTTP status codes in server responses

```typescript
try {
  const file = Bun.file(fullPath);
  if (await file.exists()) {
    return new Response(file);
  }
} catch (e) {
  console.error(`Failed to load file: ${fullPath}`, e);
}
return new Response("Not Found", { status: 404 });
```

### HTML and Presentation Files

- Use semantic HTML elements
- Include proper meta tags for accessibility
- Keep custom CSS minimal and inline in `<style>` tags
- Use reveal.js conventions for slides

### CSS

- Use reveal.js built-in themes (black, white, night, etc.)
- Keep custom styles minimal
- Use fragment animations for bullet points

### Formatting

- 2-space indentation for HTML/JSX
- No trailing commas
- Use semicolons in JavaScript
- No comments unless necessary

### Testing

This project currently has no test framework configured. When adding tests:

- Use **bun test** as the test runner
- Place tests alongside source files with `.test.ts` suffix
- Run single test: `bun test <file-path>`

### Before Submitting Changes

1. Run type checking: `bun tsc --noEmit`
2. Test development server: `bun run dev`
3. Verify presentation renders correctly at `http://localhost:3000/src/index.html`

### Additional Notes

- This is a presentation project - focus on clean HTML/slide structure
- reveal.js handles most presentation logic
- Custom JavaScript should be minimal
- Hot reload is automatic in dev mode
