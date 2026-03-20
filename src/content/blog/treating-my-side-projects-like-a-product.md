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


My Current Notion Dashboard view


    ![Screenshot_2026-03-20_at_9.44.33_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d1ad59e-5e88-8184-bbee-000375f490d0/5626dbb0-dfaf-497c-a088-5e820514e60a/Screenshot_2026-03-20_at_9.44.33_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2AYFKD%2F20260320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260320T135210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCTpH6DP5BY6k9%2FyvV0A1EHgt7L3SxfrL0BPCagZjl7wAIhAO7kY5%2BRmp6oHUn1ORkrDglN5S7SOfHlNlHups7qnwN4Kv8DCDcQABoMNjM3NDIzMTgzODA1IgylXVJ1YLFrYbmztmcq3APSG2OTHl9zEeLltrb5WwJvS%2FykIucHgV25myS0o0y1FjQ23d2UJv%2BLVauCuwfjEtgX8WHwo14M9DkfUrBOKU%2FAPHPIMOQ%2F%2F9Tgtlr79ccPJXtjFpvyzFQAHvsrVj34o%2B78682ETWj6JtQsT%2F%2BZbGdNx%2BYH4xsSGbDODsguF%2F%2BjQ0QsC9O0jSCspJcQa1yAKHIysLYFTKVGKlgZg3G0tglBjC0W8QpcGGsmIO0vXImnWMmtfc5aKziB1Pf9vInUYtpEKhT8vlIdfWDcscx8WZCcKoBqbDxO8Jou%2FO8ZaTvEkkujB2UgQLtLakeQOgRJ0t5tREaXqlIUKTAc%2BbTg2nOoywamPM7T7%2FE1AqqqHvvrIM48YhOFEFOWvrU4Ckro4eULcNf4y4eT3hS4uBUygU5ElIhXps1t9iYWg7w5Q11VSmrolNB9vh4PajBzoKyUzD2pU8HKoot3LauC9ALahm19RyRurbGCbysxbQlNpOLQlxj5Y4Brf8pdBl6l5xdN%2FlQMGTMxgJvql4fE2KiPPeJWswH3DOAksyeojVJ%2B1WYSGxUBZmYkrlJJyYTiDmAd2VkAe%2BbBIltOSs61mpKJdSy4dWFYMRrf8bzKh14k0NCucIEt9QAh6N3ykZV1PjDFm%2FXNBjqkAXNnfRxNjeTMXbNntupenzKlZREq97VKbb%2B8nP8ew3e4%2FHeNL4DY0ESKCzj8qkeT7H%2FeoHDwcIpUt4II6NYi%2FyImz5gVePO71hUvRXtfm3VK1iw4X%2B8Xyw83I8VymTG8BbwuQVLd18T7onliueXlJL10Jt4Ptnnj4lOGkZh%2BiyUvFTeqUTuaa4vKHUpaES6%2FWW0DdcDFg4GwW%2FxGX3%2Bmxdl0QI4S&X-Amz-Signature=514def2741544c227bcef1b3e177ec64f88717a8b508c286874ae0142f4711e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    I don't have clean answers yet. There are open questions I'm working through: when does automation earn enough trust to act without review? How do instruction files scale as projects multiply? What does multi-agent coordination actually look like when you're one person? I'm figuring it out by building, which is the whole point.


## What's here


Jay's Foundry is where I'm building things and writing about what I learn along the way. Right now that includes this blog, a few tools in progress, and the agentic workflow system itself. Some posts will be technical walkthroughs. Some will be short observations. All of them will be honest about what worked, what didn't, and what I'm still figuring out.

