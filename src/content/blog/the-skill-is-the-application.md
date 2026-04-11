---
title: "The Skill Is the Application"
description: "The reading-miner doesn't have application code. Not in the traditional sense."
pubDate: "2026-04-11"
tags: ["agentic", "Claude Code", "skills", "app"]
---

The reading-miner doesn't have application code. Not in the traditional sense.


There's a `SKILL.md` file. 315 lines of English describing an 8-step pipeline: load context, discover sources, fetch items, score relevance against the topics I'm tracking, deduplicate against what's already in the queue, write matches to Notion. Claude Code reads the file and executes each step directly.


There's also a Node script for the parts where AI judgment would be wasteful: parsing feeds, filtering by date, pulling metadata out of structured fields. Deterministic work stays in code. Everything else lives in the skill.


I started building this expecting to write a full Node.js pipeline. The kind with API clients, a queue, a scoring function, tests. Then I kept writing the `SKILL.md` to spec out what the pipeline should do, and somewhere around step 4 it became clear: the spec was already detailed enough. Why translate it into syntax?


The tradeoff is surprisingly favorable for this kind of work. The skill file is the spec and the implementation. They can't drift apart because they're the same document. Want to change how relevance scoring works? Edit the English description. No compilation, no dependency management, no bugs from translating intent into JavaScript.


I've been writing about how [`SKILL.md`](https://jaysfoundry.com/blog/structure-is-the-skill/)[ files are on-demand expertise](https://jaysfoundry.com/blog/structure-is-the-skill/) — skills Claude loads when the task matches. This one takes it further. The skill isn't just instructions for how to assist. It's the entire application.


The repo structure tells the story:


```javascript
reading-miner/
├── CLAUDE.md              # Project context
├── .claude/skills/
│   └── mine-feed/
│       └── SKILL.md       # The pipeline (315 lines)
├── src/
│   └── index.js           # Deterministic parsing only
└── package.json
```


No build step. No test suite. The repo is essentially documentation that runs.


Cloud Scheduled Tasks makes this practical for unattended execution. Clone the repo, discover the skill, execute it. Account-level MCP connectors (Notion) ride along automatically. The scheduled task container doesn't need credentials baked in because the connections are already configured at the account level.


It worked on the first real test. Found actual matches, wrote them to the queue with short relevance summaries, flagged stale items. Not a prototype that kinda-works. A pipeline that produced useful output on day one.


I don't know how far this pattern extends. For workflows like this — load data, call APIs, evaluate, write results — the English-as-implementation approach works well. For tight-loop computation, real-time systems, or anything latency-sensitive, it wouldn't. The line between "skill is enough" and "you need real code" is somewhere in the middle, and I haven't found it yet.


What I do know: the next time I'm about to scaffold a Node project for a data pipeline, I'm going to ask whether a `SKILL.md` would do the job first.

