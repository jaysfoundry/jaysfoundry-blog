---
title: "Less Me in the Middle"
description: "In I Am the Orchestration Layer, I laid out how my workflow actually works: Chat thinks, Code builds, I route between them. It was working. I also left three op"
pubDate: "2026-03-23"
tags: ["ai orchestration", "Claude Code", "orchestration", "skills", "process"]
---

In [I Am the Orchestration Layer](https://jaysfoundry.com/blog/i-am-the-orchestration-layer-for-now/), I laid out how my workflow actually works: Chat thinks, Code builds, I route between them. It was working. I also left three open questions. When does a tool earn trust to act without review? How do instruction files scale? What does shared context between tools actually look like?


Building something real is what solidified the answers. Or at least, the start of them.


## Where it stuck


The [Listing Advisor build](https://jaysfoundry.com/blog/first-look-at-claude-code-channels/) is what made the friction concrete. I planned in Chat, built in Code, and every transition was me: copy-pasting the plan into a prompt, relaying what Code built back to Chat, manually updating Notion with session notes and project status because Code couldn't reach it. [Structure Is the Skill](https://jaysfoundry.com/blog/structure-is-the-skill/) ends with me saying I could see a more seamless version of this. That wasn't hypothetical. I'd just spent a full session being the clipboard between two tools that couldn't see the same state.


Nothing broke. That's important. The model was functional. But I was doing work the tools could be doing if they shared more context. Once you notice that, it's hard to un-notice.


## What I did about it


I spun up a Shop Orchestration project and started closing gaps. Three phases so far.


**Code got Notion access.** One command:


```bash
claude mcp add --transport http --scope user notion https://mcp.notion.com/mcp
```


User-scope means every Code project inherits it. Now Code can read the current state of any project, update statuses, log session notes, check what's queued. The thing I was doing manually between tabs just became a thing Code can do on its own.


**Code became the primary surface.** This was the bigger shift. Instead of maintaining parallel instructions in Chat and Code, I made Code the home for all structured Notion writes. State management, logging, project updates. Chat keeps what it's good at: planning, research, drafting content. But it's not trying to be a second instruction surface anymore.


The practical piece is three skills that handle the most common Notion write patterns:


```javascript
~/shop/.claude/skills/
  shop-status/    → reads current state, orients on demand
  shop-log/       → creates Learning Log entries with correct conventions
  shop-update/    → updates projects, state, any Notion page
```


These live in a public repo and get discovered through symlinks from the project tree. The skills describe the process. Notion IDs and anything sensitive come from the private `~/shop/CLAUDE.md` at runtime, so the skills themselves stay safe to share. The repo includes templates with placeholder values for the private files, so if you want to try this pattern, you can clone it and fill in your own IDs. That was deliberate: [github.com/jaysfoundry/shop-skills](http://github.com/jaysfoundry/shop-skills).


**Documentation caught up to reality.** The Agentic Orchestration page, the Operating Manual, the Current State page all got rewritten to reflect Code-primary. I also ran a consistency audit across every instruction file, skill, and registry entry. Found eleven data issues. Things like skill paths pointing to a discovery location that doesn't actually work (`~/.claude/skills/` isn't scanned by Code, only `.claude/skills/` within the project tree). The kind of thing you only find by actually using the system and watching it not do what you expected.


## Revisiting the open questions


**Shared context:** Partially answered. Both Chat and Code now read and write the same Notion state. A Notion Data Conventions page keeps their writes consistent. The handoff isn't zero-context anymore. It's not seamless either. They still don't share conversation history or runtime state. But the gap is smaller.


**Instruction scaling:** The skills architecture is handling it so far. `CLAUDE.md` carries standing conventions. Skills carry repeatable workflows. They compose: change a convention in `CLAUDE.md` and all skills follow it. I went from one monolithic instruction file to a three-layer `CLAUDE.md` hierarchy plus a growing set of focused skills, and it's cleaner, not messier. The [skills-over-monolith pattern](https://jaysfoundry.com/blog/structure-is-the-skill/) is proving out across projects.


**Trust:** Still Level 2 everywhere. Write with review. I haven't tested the boundary where a tool earns enough trust to act without me checking its work. That's a real open question, and I'm not rushing it.


## What's different now


I still switch between Chat and Code by switching tabs. I still decide what to work on and when. But there's less of me required in each handoff. Code orients itself by reading Notion. Skills handle the repetitive writes. I'm not relaying state between tools anymore.


Two phases left on the orchestration project: a shop health check that audits Notion hygiene, and a remote access model so I can engage from my phone. Neither is urgent. The current setup is already lighter than what I was doing a week ago.


I'm not going to oversell this. It's a week of work on a side project. But the pattern feels right: build under the current model, notice where the friction is, encode the fix, keep going. The orchestration layer is still me. There's just less of me in the middle now.

