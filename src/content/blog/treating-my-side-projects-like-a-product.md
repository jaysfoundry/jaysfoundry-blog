---
title: "Treating My Side Projects Like a Product"
description: "Side projects don't die because you run out of ideas. They die because you sit down on a Tuesday night, stare at the screen, and can't remember where you left o"
pubDate: "2026-03-17"
tags: ["process", "agentic", "ai orchestration", "product"]
---

Side projects don't die because you run out of ideas. They die because you sit down on a Tuesday night, stare at the screen, and can't remember where you left off.


I'm a product manager by day. I spend my working hours maintaining backlogs, defining next steps, reducing friction for teams. A few weeks ago I realized I've never applied any of that to my own projects. So I did.


## The problem is friction, not motivation


I've had side projects before. They all followed the same pattern: burst of energy, a few good sessions, then a growing gap between sessions that eventually becomes permanent. The killer was never losing interest. It was losing _context_. I'd come back after a week, spend 30 minutes trying to figure out what I was doing, get frustrated, and close the laptop.


That's an activation energy problem. And it's solvable.


## The Shop


I call my side project space "the Shop." It sits alongside Home and Work as a distinct zone with its own laptop, its own accounts, its own tools. When I open the MacBook, I'm in build mode. There's no ambiguity about what this machine is for.


The Shop runs on Notion, Claude, and a few simple habits. But the structure matters less than the principle behind it: treat your side project space like a product you're managing.


**Always know the next step.** Every project has a Next Step field. Not "work on the blog" but "write the draft intro paragraph" or "test the API response format." When I sit down, I don't decide what to do. I just read the next step and go.


**Maintain state across sessions.** I keep a Current State page that works like a handoff doc to myself. End of every session, I update it with what I did and what's next. Start of every session, I read it. Takes two minutes, saves twenty.


**Review regularly.** Every Wednesday I do a 15-minute review: move project cards, check the backlog, capture anything I missed. Sprint planning for one person.


![My current Notion dashboard view](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d1ad59e-5e88-8184-bbee-000375f490d0/5626dbb0-dfaf-497c-a088-5e820514e60a/Screenshot_2026-03-20_at_9.44.33_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DQKOSN%2F20260320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260320T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCPXtEudu28C52CX4ZlQLBTQFOm1%2BDZ8UkwR0UQEQZv1wIgb9NwUebmtcJG9yrdHM%2BcFIRtNQp2Xa2Y6JH%2FQW1EGDIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJdzjDXIUURgS3uwICrcA8jQd6Gtyk38wSloueDL5A5XwYGb%2BaAsBWi0g8%2Bo63WR0BdHrwDXprvdYX9tnGQN8B427SM82MNIFSOUs%2FfPMfPILkxYKDKkHZz6OjvJ0vXKhTCvzydQJP0PrakxdvrdaEPgsZav0vTzuQ1xiXYqufxLu8muCD4VUPgx%2Bnxix2YCCe12FMqnpoTiG5FUNByuuLj3I7Y%2F%2F352faUxJKKjvY%2B3sAYgrM7zaUj7VIsQP6ZlzNmp577dvtHg8%2BXozWO36s4eFc5F9Lt4G6BKUI3XDGKDhOxi4SYZybrbLsQeYKickCEqj9zhhJNct%2FCc8Ws2DV%2FiUTT5oVmw9eKVJ0SX9iEGq4lJv0N2OAuiPImE7ECPbeDDy%2Bg1LUbAvr92sKIwFFez9El5A9aDT5DIu2DYduYuNM12umf9WDuwox4pgIctdJ8TymqFVRvoOqwJk3XJNvQSZe%2B00AUV4wR%2FAr%2B0XF504sZw1jlFx94dXzjtoV2HYNZoQqduvQQ%2F6RmHyHHP4AcePIclBnvQ%2BUu83jEQLMeG0BdL3qrHgVjPRRScRCmQwPmSHjms%2FIvGwPQiAiaIpWmaRCWVfbh9CWF1olQOYTr7bnypmDL6Sm2QIcFMr6sK7fzWV3Z7G5XRizt%2FMMOb9c0GOqUB%2BMpVb4v%2B%2FuqFXCplpx16RcRgXVQ4X4njOOS6ohwb78l5BGspCRw2j%2BlqqsFl3WVufpJ4ITJCEcBBNx8nVOTWEnMLkdc7Liuxk4U67W%2FCVWv5x7tQHNc97b0qR16%2BymhZ8tV75oOaHFedR5HfEpOWTImVrqiI0ozuQtqNEBgQe0%2FA%2BwGMEbnKhczbT1%2BVKn7%2BTeMytxliqhyJizxOV55LpMaeWgJ5&X-Amz-Signature=ef8348a2624c473527fce941af90bfe088b3f873d2869f70983614c45661f70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## The agentic layer


Here's where it gets interesting for me. The Shop isn't just a productivity system. It's where I'm learning to work with AI tools in a deliberate, structured way.


I use a three-mode model: Think, Build, and Automate. Claude Chat handles planning, writing, and decision-making. Claude Code handles actual code and file operations. Cowork (eventually) handles background tasks on a schedule. Each mode has its own tool, its own trust level, and clear boundaries.


```javascript
Think    → Claude Chat  → planning, writing, decisions
Build    → Claude Code  → code, files, shipping
Automate → Cowork       → background tasks, schedules
```


The idea is that these tools share context through layers rather than talking to each other directly. Notion acts as a shared whiteboard. Config files on disk set conventions that persist across sessions. In practice, that's a hierarchy of `CLAUDE.md` files that Claude Code reads automatically:


```javascript
~/.claude/CLAUDE.md              # who I am, how I work (private)
~/shop/CLAUDE.md                 # Shop-wide context, Notion IDs (private)
~/shop/projects/blog/CLAUDE.md   # stack, conventions, commands (committed)
```


The session handoff system is the first real test. I update a Current State page at the end of every session, read it at the start of the next one. That alone cut my startup friction in half. The question I'm chasing now is: what else can work like that? What other context can I encode once and stop carrying around manually?


I don't have clean answers yet. There are open questions I'm working through: when does automation earn enough trust to act without review? How do instruction files scale as projects multiply? What does multi-agent coordination actually look like when you're one person? I'm figuring it out by building, which is the whole point.


## What's here


Jay's Foundry is where I'm building things and writing about what I learn along the way. Right now that includes this blog, a few tools in progress, and the agentic workflow system itself. Some posts will be technical walkthroughs. Some will be short observations. All of them will be honest about what worked, what didn't, and what I'm still figuring out.

