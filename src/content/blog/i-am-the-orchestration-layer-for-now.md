---
title: "I Am the Orchestration Layer (For Now)"
description: "There's a version of working with AI tools where everything talks to everything. Agents coordinate through some automated pipeline, context flows between tools"
pubDate: "2026-03-19"
tags: ["agentic", "ai orchestration", "process", "Claude Code"]
---

There's a version of working with AI tools where everything talks to everything. Agents coordinate through some automated pipeline, context flows between tools seamlessly, and you just set the direction and watch it go.


That's not what I'm doing. Right now the orchestration layer for my entire side project workflow is... me. I switch between Claude Chat and Claude Code by switching tabs. There's no automated handoff, no shared memory between them, no pipeline connecting the two. I'm the router.


And it's working better than I expected.


## Two tools, two jobs


The split happened naturally. Claude Chat is where I think. Planning, architecture decisions, trade-offs, writing. The context is conversational and cumulative. I'm not generating code, I'm making decisions about what to build and why.


Claude Code is where I build. It has my codebase in context, can run tests, read errors, and iterate without me copy-pasting anything. When I know what I want, Code gets it done.


The practical rhythm: spend a few minutes in Chat scoping the work, switch to Code for implementation, come back to Chat when I hit a design question or want to think through what just happened. Two tools doing what they're each good at. The split keeps me honest about when I'm thinking versus when I'm building, which turn out to be pretty different modes.


## The handoff shrinks over time


Every time I use Claude Code, I improve the `CLAUDE.md` file that tells it how the project works. Every time I use Chat, I refine the project instructions that give it context about what I'm doing and how I work. Each improvement means I carry less in my head between tools.


Early on, switching from Chat to Code meant re-explaining the entire project. Now it's one sentence of intent. _"Add a date field to the blog post frontmatter."_ Code already knows the project structure, the conventions, where the files live. I encoded all of that into a hierarchy of `CLAUDE.md` files that Code reads automatically (I touched on this in [Treating My Side Projects Like a Product](https://jaysfoundry.com/blog/treating-my-side-projects-like-a-product/), but here's how it actually plays out):


```javascript
~/.claude/CLAUDE.md              # who I am, how I work (private)
~/shop/CLAUDE.md                 # Shop-wide context, Notion IDs (private)
~/shop/projects/blog/CLAUDE.md   # stack, conventions, commands (committed)
```


Each layer adds context. The private files carry sensitive stuff like database IDs. The project file gets committed and pushed. Claude Code reads all three in cascade, so I don't have to keep saying it.


The same thing happened with voice. I had writing instructions embedded in my Blog & Content project so Claude could draft posts that sounded like me. Then I wanted that same voice in another conversation. Copy-paste the instructions? That's the signal. I extracted them into an Uploaded Skill that works across every project. The project kept what's unique to it. The skill carries what's portable.


The distinction that emerged:

> `CLAUDE.md` = standing conventions. Always loaded, always true. _How to work._
> `SKILL.md` = repeatable workflows. Triggered by intent. _What to do._

I notice I'm repeating myself, and I turn the repetition into an instruction that persists. The context I used to carry in my head moves into a file.


## Bottom-up, not top-down


I keep seeing people approach AI tooling top-down. Design the perfect multi-agent architecture first, then try to build within it. Or read about autonomous workflows and feel like you need that before you can be productive.


I'm going the other direction. Build things. Notice where I'm doing the same work twice. Encode that into instructions. Repeat. The automation grows out of actual friction, not out of a diagram of how it should theoretically work.


Right now, that instruction layer is a `CLAUDE.md` file, a few project instruction sets, and one Uploaded Skill. Not sophisticated. But every piece of it exists because I hit a real problem and wrote something down to fix it. Nothing is speculative. You can see the pace in the decisions log:


```javascript
March 17 — Adopted Think/Build/Automate model
March 18 — CLAUDE.md three-layer hierarchy with public repo posture
March 18 — Jay's Voice decoupled into standalone uploaded skill
```


Three decisions in two days, each one triggered by real friction.


## What I don't know yet


I'm a few weeks into this. There are real open questions I haven't answered.


When does a tool earn enough trust to act without me reviewing every step? I have opinions about this (tiered trust, start supervised, promote gradually) but I haven't actually tested the boundary yet.


How do instruction files scale as I add more projects? Right now I have a few. What happens at ten? Do they conflict? Do I need some kind of inheritance model, or does flat-and-simple hold up longer than I think?


What does it actually look like when Chat and Code share context through something other than me? Notion acts as a shared state layer already. Config files on disk set conventions. I haven't pushed that far enough to know where the seams are.


I've been learning this stuff by doing, which has gotten me surprisingly far. But I'm starting to hit questions where building alone isn't enough. Things like agentic architecture patterns, MCP integration, how tool design actually works under the hood. So I'm starting the [Anthropic Academy](https://anthropic.skilljar.com/) coursework, working toward the [Claude Certified Architect](https://anthropic.skilljar.com/claude-certified-architect-foundations-access-request) track. Not because I need a credential, but because the curriculum maps directly to the gaps I'm feeling. I'll write about what I learn as I go.


The instruction layer gets a little better every session. The manual work shrinks a little. At some point the gap between "me as the router" and "automated orchestration" might get small enough that the jump is obvious. Or I might find that the human-in-the-loop version is good enough for longer than I expected.


Either way, I'll write about it when I find out.

