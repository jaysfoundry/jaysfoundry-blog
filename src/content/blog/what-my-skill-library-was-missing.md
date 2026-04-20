---
title: "What My Skill Library Was Missing"
description: "The Shop's skill library felt different after I shipped two batches of skills in one week. Looking at the ten skills together, I realized why: the family had fi"
pubDate: "2026-04-17"
tags: ["agentic", "skills", "ai orchestration", "organization"]
---

The Shop's skill library felt different after I shipped two batches of skills in one week. Looking at the ten skills together, I realized why: the family had finally covered the full lifecycle.


I'd been organizing skills by what they do. This skill writes to Learning Log. That one audits the Projects database. A different one reformats titles. Domain organization tells you what exists. It doesn't tell you what's missing.


A lifecycle lens does. A skill family covers a complete surface when its members map to five roles.


## The five roles


**Orient.** Read current state, produce a summary. When I sit down, `/shop-status` tells me where things stand. Without this, every session starts cold.


**Capture / Update.** Write new state or update existing state. `/shop-log` creates Learning Log entries. `/shop-update` moves project status and Next Step fields. `/vault` captures concepts into Obsidian. Without this, state rots.


**Audit.** Check state for problems. `/shop-health` runs data-layer checks: missing fields, stale projects, orphaned records. `/shop-logic-audit` runs logic-layer checks: docs that contradict each other, stale claims, obsolete assumptions. Without this, drift accumulates silently.


**Remediate.** Apply corrections to audit findings. `/shop-clean-stale` walks through stale projects and asks me to archive, refresh, or skip each one. `/shop-clean-fields` fills missing required fields. `/shop-reformat` normalizes entries that violate naming conventions. Without this, audit findings pile up without resolution.


**Reflect.** Review the session itself and propose improvements to the toolchain. `/shop-reflect` flags skill bypasses, suggests new skills where repeated patterns emerge, identifies hooks and docs that need updating. Without this, the toolchain doesn't improve.


## Pairing effects


Some roles pair naturally.


Audit and Remediate share thresholds. `/shop-health` flags a project as stale after 14 days without updates. `/shop-clean-stale` uses the same 14-day threshold to offer cleanup. The pairing is tight because the audit feeds the remediation directly.


Capture and Reflect close a loop. `/shop-reflect` creates Agent Notes that capture what it observed. The capture layer is what makes reflection durable. Reflection without capture is thinking out loud.


Two audits live under Audit rather than being one skill: data-layer and logic-layer are different jobs. Typed fields make data audit tractable (was this field filled? does the value match the schema?). Logic audit is a different discipline: cross-document coherence, obsolete examples, stale claims. Trying to merge them gives you a skill that does both badly.


## What this isn't


The lifecycle tells you what roles to cover. It doesn't tell you how to keep the skills used. Enforcement is a separate axis, and it's orthogonal. You can have a complete lifecycle and no enforcement, and the skills drift out of use. You can have enforcement without a complete lifecycle, and you reliably use a set that's missing roles. Neither alone is enough.


You also don't need every skill family to be complete. Not every surface warrants all five roles. The Shop warrants them because it's a multi-tool workspace with state that accumulates and drifts. A smaller surface might need only capture and orient, and adding audit/remediate/reflect would be overbuilding.


## What I'm still figuring out


I don't know how this generalizes. Five roles worked for the Shop because the Shop has a specific shape: state layer, multiple writer tools, accumulating drift. A different shape might need different roles, or fewer. I suspect the orient/capture/audit/remediate/reflect structure holds anywhere state persists across sessions and multiple agents touch it, but I haven't tested that.


I also don't know how to evaluate "complete" for a family that's still growing. Right now the Shop feels complete because the five roles are covered and the skills compose cleanly. That might change as new domains (security, onboarding, deployment) emerge and need their own families.


What I do know: the moment the fifth role shipped, the library stopped feeling like a pile of skills and started feeling like a system. That's the signal worth paying attention to.

