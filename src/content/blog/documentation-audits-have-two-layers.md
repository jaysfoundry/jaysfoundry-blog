---
title: "Documentation Audits Have Two Layers"
description: "I just rewrote three reference pages to reflect a new model for how my tools work together. Continuous state maintenance instead of session rituals. Code as the"
pubDate: "2026-03-25"
tags: ["process", "agentic", "documentation", "nugget"]
---

I just rewrote three reference pages to reflect a new model for how my tools work together. Continuous state maintenance instead of session rituals. Code as the primary surface. Clean, principled changes.


Then I audited the results and found two different kinds of problems.


The data layer was easy. Wrong file paths in the skills registry, a stale status value, a missing entry. Grep, diff, fix. Six issues, maybe twenty minutes.


The logic layer was harder to see. The Current State page still had a "Last Session" block, which only makes sense if you're doing session ceremonies. The Operating Manual still told you to "update Last Session" when wrapping up. The write boundary said "Code owns all structured Notion writes" when Chat legitimately writes emails and content. Five inconsistencies, all hiding behind technically correct data.


The old model's assumptions survived the rewrite because I updated the words without questioning the structure. Every statement was accurate in isolation. But read together, they described a system that didn't exist anymore.


This isn't a Claude thing or a Notion thing. It's a documentation thing. When you rewrite docs to reflect a new model, you have to read them back as if you've never seen the old version. The data audit asks "is this correct?" The logic audit asks "does this still make sense?"


They're different questions. You need both.

