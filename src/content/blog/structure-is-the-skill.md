---
title: "Structure Is the Skill"
description: "With Channels working, the Listing Advisor needed to actually know something about listings. I'd already mapped out what good listing advice looks like from exp"
pubDate: "2026-03-22"
tags: ["Claude Code", "agentic", "skills"]
---

With [Channels working](https://jaysfoundry.com/blog/first-look-at-claude-code-channels/), the Listing Advisor needed to actually know something about listings. I'd already mapped out what good listing advice looks like from experience: evaluate the item (grade, condition, edition), research pricing against recent comps, write a description that covers what buyers actually care about, and give guidance on photos and shipping. Four discrete steps.


When I handed that plan to Claude Code, its implementation readout put all of that into one big `CLAUDE.md`. Every piece of knowledge, every behavior, every listing category in one file, loaded into every conversation.


I read through the plan and thought: these are separate tasks. I'd already built discrete skills for other things — the [scaffold skill](https://jaysfoundry.com/blog/one-prompt-one-project/) that generates new projects, the voice skill that shapes how I write. Those work because they're focused. They load when they're relevant and stay out of the way when they're not.


So I restructured the plan. Four skills under `.claude/skills/` instead of one monolith:


```javascript
.claude/skills/
  evaluate-item.md
  write-description.md
  price-research.md
  ship-and-photo.md
```


The `CLAUDE.md` stays lean: what the Listing Advisor is, how it should behave, what a complete recommendation includes, what to ask when information is missing. The skills carry the domain knowledge. A pricing question loads `price-research`. A "help me list this" loads `write-description`. Less noise in every conversation.


The part I didn't expect: no orchestration skill needed. The `CLAUDE.md` defines what a complete listing recommendation covers, and Claude naturally pulls in the relevant skills when a message comes in through Discord. I thought I'd need routing logic. I didn't. Claude figured out which expertise to engage based on what the user was asking about.


I later found out this maps pretty closely to [how Anthropic recommends structuring skills](https://code.claude.com/docs/en/skills) — `CLAUDE.md` for always-on context, skills for focused expertise that loads on demand. Nice to know the instinct was right.


(Side note: if you're committing skills to a repo, `.claude/` in `.gitignore` with a trailing slash fully excludes the directory. Git won't process negation rules inside it. Use `.claude/*` with `!.claude/skills/` instead.)


This is the pattern I'm converging on across the Shop: `CLAUDE.md` for standing context and behavior, skills for focused expertise that loads on demand.


But building this out also surfaced some friction I hadn't noticed before. Planning happened in Chat, building happened in Code, and the handoff between them was me copy-pasting prompts and relaying updates manually. That worked fine when the blog was the only project. With the Listing Advisor it started to feel like overhead. Chat doesn't know what Code just built. Code doesn't have access to Notion where all the project state lives. I'm still the router for everything, and I'm starting to see a path where I don't have to be.


Nothing is broken. The [orchestration model](https://jaysfoundry.com/blog/i-am-the-orchestration-layer-for-now/) still works. But there's a version of this that's more seamless, and I want to chase it.

