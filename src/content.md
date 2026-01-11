# Intro 
## 101 Vibe Engineering with MiniMax M2.1

# Who ?

## Naufaldi Rafif Satriya
- Senior Software Engineer at an FMCG Company
- Dev Ambassador at [Minimax](https://minimax.ai/)

- [@naufaldi](https://github.com/naufaldi)
- [@f2aldi](https://x.com/f2aldi)

## Built with AI
### MiniMax M2.1
- [Go Pixo](https://github.com/naufaldi/go-pixo)

### Other Models
- [Book API](https://github.com/naufaldi/bookapi)
- [Excalidraw Clone](https://github.com/naufaldi/excalidraw-clone)

# 8 Months Working with Agentic AI
- Using Cursor 
- OpenCode, Claude Code CLI
- Shipping Product with Agentic AI into Production
- Team Fully AI, Codex, Claude, Trae, Copilot, Claude Code CLI


# Disclaimer

I am not an AI Engineer. I am a Software Engineer who is interested in AI.
I am not an expert in AI. I am an Engineer who leverages AI to build things.
What I share today may be outdated since AI evolves very fast.

# Goal of Workshop
- Setup Tools
- Learning Prompting
- Learning about Workflow with AI

# End of Workshop
- Confidence to use AI to build things

# Tools 
IDE and Terminal

# IDE 
- [Cursor](https://cursor.com/)
- [Windsurf](https://windsurf.dev/)
- [Zed](https://zed.dev/)

# Terminal 
- [OpenCode](https://opencode.ai)
- [Claude Code CLI](https://code.claude.com/docs/en/cli-reference)
- [AMP CLI](https://ampcode.com/free)

# Why This Workshop?
1. Spreading Open Source Tools and Models
2. Sharing Knowledge and Experience
3. Helping Others to Learn and Grow
4. Building a Community of Practice



## Why OpenCode?
- Free Tools and Free Models
- Currently GLM 4.7, Big Pickle and Grok Code Fast 1 free
- Adopts Claude Code Config
- Supports LSP

## Why MiniMax M2.1?
- Fast and Smart Models
- Dev Ambassador
- Able to rival Sonnet 4.5 in terms of quality
- More Speed
- Open Weight
- Supports Open Source Models and Alternative Models

# MiniMax M2.1 Overview
- Multi-language programming
- Web Development
- 10B Parameters active

# MiniMax M2.1 Comparison
- Does not compete with Opus 4.5 or GPT 5.2 Height
- Competes with Sonnet 4.5, Gemini Flash 3, GLM 4.7

# MiniMax M2.1 Benefits
- Affordable: $10 or $2 for first month
- Integrates with OpenCode, Claude Code CLI, Cursor, Windsurf, Zed
- 100 Prompts / 5 Hours
- MCP support for Search and Image

# MiniMax M2.1 Considerations
## Cons
- Hard to work on complex tasks

## Use Cases
- Small Tasks
- Medium Tasks
- Long-running Tasks


# Setup Tools
## We'll cover:
- OpenCode with MiniMax M2.1

---

# Learn to Prompting
## Prompt Framework
1. Task
2. Context
3. References
4. Evaluate, 
5. Iterate

# Task
1. Writing ask or command to do something
2. Be specific and clear
3. Specify Format

# Examples: Task
"Search in codebase for code improvement opportunities"
"I want you to create a plan in markdown format for adding a login page"
"Why did you edit this file? Why not use XX or other approaches? Provide Pros and Cons in markdown format with 3 options"

# Context
1. Provide Background Information
2. Provide Related Information

# Examples: Context
"Here is the code you should improve: @page.tsx @component.tsx @page.css @component.css"
"Here are the reference documents: @prd.docs @user.docs @tech.docs @design.docs"
"Search the internet about code improvement best practices and provide the result in markdown format"
"Use Context7 to get the newest version of the package and add it to the plan in markdown"

# References
1. Reference Example of output
2. Reference of this material

# Examples: References
"Based on this screenshot and Figma data, create a design for the login page"
"I want you to create a function with separate code between A and B, use the pattern from @tanstack/react-query @client-side @function-pattern"
"Search about best practices for creating functions and use that as reference for the pattern"

# Evaluate
1. Does the output meet the task?
2. Does it align with our goal?

# Examples: Evaluate
"That's not what I mean. I told you to make it more readable and maintainable, use @code-pattern.md as reference"
"Are u stupid?Don't change the code yet. Just create the plan first"
"Astagfirullah! Make the design look like the screenshot and Figma. The button should have max-width 100, divide the padding..."

# Iterate
1. Hard to one-shot prompt. You need to iterate and improve the prompt
2. Add additional context, references, expectations, and other details


# Let's Get into Practice

## Start from Zero
1. Setup Project
2. Add docs for reference
3. Write prompts using TCERI framework
4. Iterate and Improve

## Add New Feature
1. Explain the existing feature to me
2. Let's brainstorm about the new feature
3. Create a plan with the AI

# Next Steps
- Set up OpenCode with MiniMax M2.1
- Try the Prompt Framework 


---

# Workflow with AI

## We are Manager and Senior
1. Acting as Manager and Senior Engineer
2. Provide Scope of Work
3. Provide Reference of material
4. List of Todo and Task

## What if we are not Manager and Senior Engineer?
1. Brainstorming with AI
2. Ask AI to create scope of work
3. Ask AI to provide Reference of material
4. Ask AI to create Todo and Task

## AI is Someone Smart but Don't Know What to Do
1. Provide Expectation and Goal
2. Define Out of Scope

## How to Make It Easy?
1. As an Engineer getting a task from PM, Senior, or Client, what do you need?
2. As an Engineer getting a task from a Designer, what do you need?

## If We Need It, Why Would AI Not Need It?
1. PRD, User Story, Edge Case, Goal, Background
2. Code Reference, Package version, Best Practice Code
3. Figma Design, Screenshot
4. Credentials, API, Database, etc.
5. Constraints, Limitations, Dependencies

## This is Where
- Skill: Knowledge, Capabilities, Expertise
- MCP: Context and Reference
- Command: Repeatable Workflow
- Rules: Instruction and Constraint

---

# Skill
## Open Format for
1. Knowledge
2. Capabilities
3. Domain Expertise

## What can we add?
1. Business Context
2. Frontend Skill
3. Design Skill

## References
1. https://claude-plugins.dev/skills
2. https://github.com/obra/superpowers

---

# MCP
## Model Context Protocol
1. Context
2. Reference

## What can we add?
1. GitHub / GitLab for MR, PR, Task
2. Context7 for Search Dependencies
3. Figma MCP for Figma Data

## MCP References
1. https://mcpservers.org/

## Reminder
1. Add MCP and Tools to enrich your context
2. Available globally or per project

---

# Commands
## Repeatable Workflow
1. Creating format plan
2. Create MR
3. Repeatable Prompt

---

# Rules
## Constraints, Limitation, Expectation
1. Code Style
2. Setup Command
3. Testing Instruction
4. Project Overview

## Rules Reference
1. https://agents.md/

# Key Takeaways
1. Use the TCERI Framework: Task, Context, Evaluate, Reference, Iterate
2. AI needs clear expectations, scope, and references - just like you do
3. Skills, MCP, Commands, and Rules enhance AI capabilities
4. Practice makes perfect - start small, iterate, improve

# Next Steps
- Set up OpenCode with MCP, Skills, Commands, and Rules

# Combine Everything!

---

# QnA

## Questions?
