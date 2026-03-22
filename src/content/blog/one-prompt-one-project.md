---
title: "One Prompt, One Project"
description: "The first skill I built for the Shop was a project scaffolding recipe. It handles the boring stuff: prompts for a name and description, creates the folder struc"
pubDate: "2026-03-18"
tags: ["Claude Code", "skills", "nugget"]
---

The first skill I built for the Shop was a project scaffolding recipe. It handles the boring stuff: prompts for a name and description, creates the folder structure, sets up `CLAUDE.md`, initializes git, creates the GitHub repo. All the repetitive steps that used to eat the first twenty minutes of any new idea.


Here's the gist of it:


```markdown
## Trigger
When Jay says "scaffold a new project", "create a new project",
"set up a new project", or similar intent.

## Inputs
- name — kebab-case project name
- description — one-line description
- language — "TypeScript" or "JavaScript"
- visibility — "private" or "public"

## Steps
1. Create project directory
2. Create .gitignore
3. Create package.json
4. Create tsconfig.json (TypeScript only)
5. Create src/index
6. Create CLAUDE.md
7. Create .env
8. Create .env.example
9. Create README.md
10. Git init and first commits
11. Create GitHub repo and push
```


I needed to test it. I play Magic: The Gathering, so the first idea that came to mind was a silly one:


`Lets start a new project that makes a haiku out of magic the gathering card text.`


Claude Code ran the scaffold skill, built the project, and pushed it to GitHub. Working code, committed, from a twelve-word prompt. No follow-up questions from me, no corrections mid-stream.


The [repo is here](https://github.com/jaysfoundry/mtg-haiku) if you're curious.


That's the whole value of encoding setup into a skill. Claude Code didn't need me to explain project structure or conventions. The scaffold handled all of that, so the entire prompt got to just be the idea. Twelve words of intent, everything else already encoded.


I don't know how far that scales. This was a simple project with no real requirements. But it's a satisfying proof that the skill works the way I wanted it to.

