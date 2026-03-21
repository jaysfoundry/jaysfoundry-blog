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


<figure><img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/7d1ad59e-5e88-8184-bbee-000375f490d0/5626dbb0-dfaf-497c-a088-5e820514e60a/Screenshot_2026-03-20_at_9.44.33_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJTF7JK%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T143128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B%2FEqjdf%2B3q6nBT0DKpN%2FSRIhQsDe3NwXnvnqMC5WAmAiEA8vQOzS0gj2MWflxuZ7mkBjYVIXeeSULvK5GCjWxgHEQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDE8vMPBFskhqzxhb0SrcA96OTlINejvA6iTCQ7HCanD6B61n5FF79hh0p%2FYy%2Bk9lAhRGmitdxuJJc3PBnGrQvYhZVdvWL3m5i3EZskPfGkUqTp7hfVVYMmz4rc7dZdzh0fSOn0H2iWpzICGKncVX%2FBhJakZQAuGlWgzRGLrEneEqZW1yQx8SkToRHZ%2BB1d753q%2F3dv25E56b9zUDRwVuq6ULMXIg%2BqY%2B7VL58OQqbc8lPWkB6D%2BFrE0R3h6X%2F46QoGMD87mYyLvMlAgf15E6MITeAUzzKuUpUJ%2Bo6pfm10joGe5L3on8JDKZow3HFXARthFDn9gcQe47kuzavrkOqiDv8yIi9yO3HXkr2pwkuXPoA5S6aNaiIFQYBr47WmGmOMu4p7rIKiV4ywRo49XOyjOe8EPP944x%2F2nVRjOJ51zuoMBkEGdXqgMnYoIfVbwbnv2d5fWkFY%2BZh8EdXE65QGVt3EVRO72OAe2wRsaHSWjCyLiPcSu4vDBraz2uKkRbs44vNt%2BWBQ6FpZKXZhgNWjqttdLiOzHXPpWKNkKokQ4%2BSiAfzS8ggMQzhJSVGXWkTfTpdZDexwWEpD8RyfFmo5SNFAI%2FNRFb11J%2FD0nlBtUFtgvq4Nj%2BhX1EX%2BfBblCB%2BmcACd38i22k4ePPMM20%2Bc0GOqUBqNMSB5bnOxr6GLuG1EaZAAlXQlc28nr43dQYR1dNh288cXBO3yQIV89PyWblVlK4t%2Fbjwtd7qxBbNasZtKrJ%2F%2BUJ0WBLolNqCPvN2QGze%2FrY%2FxCRUtW9%2FevDiTmsZxYD3kFkeAyGOZ4yWV1pMkN9%2FJ4DFFjN8OtH%2F16O%2FlmN5QkYsWap8exEUiO3l6WDUkk%2Bg0xsG1PF4UQLiM0djkYUDPK%2B7lp%2F&X-Amz-Signature=8e444dbd27e7fb9df7fdcc5ee12e9d0f27795d4d748ac103745ae6c1ac91ef58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" alt="My current Notion dashboard view"><figcaption>My current Notion dashboard view</figcaption></figure>


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

