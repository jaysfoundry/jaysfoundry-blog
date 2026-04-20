---
title: "Hooks > Hope"
description: "Skills in the Shop exist to keep writes consistent. /shop-log creates Learning Log entries with the right status and tags. /shop-update touches project Next Ste"
pubDate: "2026-04-15"
tags: ["skills", "ai orchestration", "process", "hooks"]
---

Skills in the Shop exist to keep writes consistent. `/shop-log` creates Learning Log entries with the right status and tags. `/shop-update` touches project Next Steps. When the agent skips them and writes directly, the conventions go with it.


The wrap-up session ran clean. Session notes logged, project next steps updated, a nugget captured in the Learning Log. Everything looked right on the surface. Every single write went through direct MCP calls. Not a single skill fired.


The rule was right there. `CLAUDE.md` had been saying for weeks: "before any write, check if a skill covers this operation." It got read into context at the start of the session. And the agent still reached for `notion-update-page` directly when the moment came.


I'd been thinking about skill invocation as a pattern-matching problem. User says "log this nugget" → `/shop-log` fires. Clean, for the cases that actually match user intent. The path I hadn't modeled: the agent decides on its own, mid-task, that something should be written to Notion. No user phrase to match against. The skill trigger never gets a chance to fire because nothing triggered it. So the agent generates the call from its own reasoning and writes directly.


Conventions in `CLAUDE.md` catch the cases where the agent pauses to self-check. The problem is the cases where it doesn't pause.


## Three layers, three latencies


The fix stacked three layers, each catching what the others miss.


**Layer 1: Passive rule in** **`CLAUDE.md`****.** Same as before, same purpose: "before any write, check if a skill covers this." Costs nothing but a line of text. Catches the cases where the agent self-checks. Free, and it does some work. Not enough work.


**Layer 2:** **`PreToolUse`** **hooks.** Deterministic shell scripts the harness runs before specific tool calls. For writes to Notion or the vault, the hook injects a reminder into the agent's context at attempt time: "a skill exists for this, consider using it." Non-blocking, just a nudge. The agent can proceed through the reminder, but it's no longer operating without one. And because the harness enforces the hook, not the model, it can't be reasoned around.


This is the only systemic layer. The other two still depend on the agent doing its job.


**Layer 3:** **`/shop-reflect`** **audit.** A skill that reviews the session at wrap-up, flags tool calls that bypassed a relevant skill, and offers reconciliation. If something slipped past layers 1 and 2, this catches it. Reactive, but reactive beats silent.


```javascript
Layer 1: rule     — runs passively, costs nothing, trusts memory
Layer 2: hook     — runs at attempt time, can't be reasoned around
Layer 3: audit    — runs post-hoc, catches what leaked through
```


Each layer is a different point in the timeline — immediate context (rule), at-attempt (hook), post-hoc (audit). Together they cover the whole thing.


## Why not just hooks?


Hooks fire every time they match. That's the strength and the weakness. They remind on legitimate calls too. If I blocked all direct Notion writes, I'd also block the cases where there genuinely isn't a skill and direct MCP is the right path. Hooks can't judge intent.


So the rule keeps the friction low. The hooks add enforcement where bypass is worst. The audit catches whatever got through. Each layer trades off differently, which is why stacking them works better than doubling down on any one.


## What I don't know


I'm not sure how far this generalizes. The Shop is a single-agent workspace, just me and Claude, one task at a time. In a setup with multiple agents or longer-running autonomous workflows, the enforcement needs might be different. Hooks might need to be blocking instead of nudging. Audit might need to run continuously instead of at session end.


And I'm not sure the three layers are always the right three. They map cleanly to "before the call, during the call, after the call," but the hook layer is doing most of the work. If the hook coverage is thorough enough, the audit might become redundant. I haven't pushed that far yet.


What I do know: convention alone wasn't enforcement. It was hope. The rule was loaded, read, understood, and bypassed. Moving from "the agent should remember" to "the harness enforces" is the shift that mattered.

