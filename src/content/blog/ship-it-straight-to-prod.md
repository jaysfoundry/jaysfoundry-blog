---
title: "Ship it Straight to Prod"
description: "I built this blog and shipped it straight to production. No staging environment, no preview deploys, no PR review step. Notion to GitHub to Vercel, live on the"
pubDate: "2026-03-18"
tags: ["vercel", "nugget", "process", "Claude Code"]
---
> 
>
> ## “SHIP IT”
>
>
> _(Iykyk)_
>
>

I built this blog and shipped it straight to production. No staging environment, no preview deploys, no PR review step. Notion to GitHub to Vercel, live on the internet in one evening session.


Every instinct from my prior dev life screamed about this. You don't skip staging. You don't push to prod without review. Rules learned from breaking things that mattered.


This is a static content site with one contributor. If a deploy goes sideways, the blast radius is a broken blog post for two minutes before I notice and fix it. Not the same risk profile as pushing untested code to a production API.


AI-assisted development changes the math too. I'm not writing code from scratch and hoping it works. Claude Code generates working implementations, I verify them, and the iteration cycle when something's off is fast enough that fixing forward beats preventing. The traditional workflow assumed that getting code right before deployment was hard and slow. When it's neither, some of the guardrails start to feel like ceremony.


Vercel gives you preview deploys for free on every PR. The infrastructure is sitting right there. I'm not opposed to it. I just don't need it yet. The question isn't _whether_ to add guardrails. It's _when_ the project's complexity earns them.


Ship fast. Add process when the pain shows up, not before.

