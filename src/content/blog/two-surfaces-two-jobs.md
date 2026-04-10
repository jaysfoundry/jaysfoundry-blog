---
title: "Two Surfaces, Two Jobs"
description: "I added Obsidian to the Shop last week. Not because Notion wasn't working. It's the backbone of everything I've built so far. Five databases, six skills reading"
pubDate: "2026-04-07"
tags: ["process", "organization"]
---

I added Obsidian to the Shop last week. Not because Notion wasn't working. It's the backbone of everything I've built so far. Five databases, six skills reading and writing structured state, [three AI tools coordinating through it](https://jaysfoundry.com/blog/treating-my-side-projects-like-a-product/). Notion is the operating system.


But Notion is terrible for thinking.


Structured fields and typed properties are exactly what you want when tools need to coordinate. Status enums prevent skills from writing garbage. Multi-select tags enable queries. Dates enable timelines. The constraint is the point. But when I'm working through a half-formed idea, connecting concepts, seeing what links to what, following a thread, I don't want constraints. I want freeform notes with wikilinks and a graph that shows me what's connected.


That's two different jobs. Orchestration needs enforcement: typed fields, valid values, queryable databases, API access. Knowledge building needs connections: bidirectional links, graph visualization, atomic notes that grow. Asking one tool to do both is asking for a bad compromise.


So the vault handles thinking. Notion handles operating. And a one-way promotion pattern connects them.


Here's how it works. I capture concepts and experiments in the vault using the `/vault` skill. Notes link to each other with `[[wikilinks]]`. The graph grows. When something is ready to act on, like a blog post idea or a pattern worth publishing, I promote it to Notion via `/shop-log`. The skill reads the vault note and its linked notes for full context, rewrites it with Jay's Voice, and creates a Learning Log entry. A `promoted: "YYYY-MM-DD"` frontmatter field marks the vault note as captured.


The key decision: content is never maintained in both places. The vault note stays as raw thinking. The Notion entry is the rewritten, publishable version. They're not the same document in two systems. They're two different artifacts serving two different purposes. No sync, no drift, no "which version is current?"


Chat picks up from there. It reads the Notion entry via MCP for blog drafting. No clipboard, no pasting. The shared state layer routes information to wherever it needs to go.


The question I'm still sitting with: does this hold as the vault grows? Right now there are seven concept notes and a handful of daily captures. The promotion workflow is clean when you're dealing with a small set. At 50 or 100 notes, the assessment of "what's ready" gets harder. I'm betting the graph structure (tag clusters, link density) will surface what's ready naturally. But that's a theory, not a result yet.

