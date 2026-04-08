---
title: "I've Built This Before"
description: "I noticed something last week that I should have noticed sooner. The orchestration system I'm building in the Shop has the same shape as work I did almost two y"
pubDate: "2026-04-02"
tags: ["ai orchestration", "orchestration", "product", "process"]
---

I noticed something last week that I should have noticed sooner. The orchestration system I'm building in the Shop has the same shape as work I did almost two years ago.


The old work was a Contentful build for a repair network. Around 800 stores, thousands of devices, multiple repair types per device. The business needed pages for the long tail of SEO searches like "iPhone 14 cracked screen repair east orlando", and there was no world where someone was going to hand-author every combination.


So we built it as composition. Store, Device Category, Device, and Repair Type were each their own content model. They referenced each other through keys. A page wasn't really a page, it was an intersection: pull this Store, pull this Device, pull this Repair Type, render the result. There were still authoring hooks where humans could drop in differentiated copy for a specific page that needed it, but the scaffolding came from the data. Add a new device to the catalog and pages for it appeared everywhere it was relevant. The system did the multiplication.


The Shop is doing the same thing in a different medium. `CLAUDE.md` files carry standing conventions. Skills carry repeatable workflows. Notion holds the state. When I start a session, Code reads the current state, picks up the relevant skills, and behaves consistently across runs because the inputs are structured.


The output is different. Pages then, repeatable workflow patterns and consistent AI behavior now. The architectural move is identical. Model the domain. Reference things instead of duplicating them. Let structure do the work that would otherwise be manual.


The two projects had been living in different parts of my head. One was a CMS build from a few years back. The other was a side project I started a few weeks ago. It took thinking about them in the same week for the resemblance to land, and once it did, it was hard to unsee. Same instinct, different medium.


I don't have a tidy lesson to draw from this. Mostly just: the move you keep making is probably the move you actually know how to make. Worth paying attention to which one yours is.

