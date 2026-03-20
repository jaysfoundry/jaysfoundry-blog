---
title: "[TEST] Design system rendering test"
description: "This is a test post to validate how the Dieter Rams blog theme renders every content type. Delete this post once the theme is confirmed working."
pubDate: "2026-03-19"
tags: ["blog", "astro"]
---

This is a test post to validate how the Dieter Rams blog theme renders every content type. Delete this post once the theme is confirmed working.


---


## Heading level two


This is body text under an H2. It should render at 14px, weight 400, with a warm near-black color and generous 1.7 line-height. The H2 itself should have the accent dash to its left — a small 16px horizontal line in Braun red-orange.


### Heading level three


H3 is used less often but needs to be visually distinct from body text without competing with H2. It should be slightly smaller or differentiated by weight alone.


## Inline formatting


This paragraph contains **bold text** and _italic text_ and _**bold italic text**_ to test emphasis rendering. Here's some `inline code` which should have a subtle background treatment — maybe a slightly darker cream or a faint taupe border.


Here's a [link to an external site](https://jaysfoundry.com/) which should render in the accent color with a subtle underline. And here's a second [link to test consistency](https://github.com/jaysfoundry).


## Blockquotes


Single-line blockquote:

> The human is the router. That's not a limitation — it's the design.

Multi-line blockquote:

> Less, but better. That's the whole philosophy in three words.
> 
> Every element should serve a purpose. If it doesn't have a function, it doesn't belong. This applies to code, to products, and to blog design.

## Code blocks


JavaScript with syntax highlighting:


```javascript
// Fetch session briefing from Notion
async function getSessionBriefing() {
  const projects = await notion.databases.query({
    database_id: PROJECTS_DB_ID,
    filter: {
      property: 'Status',
      status: { equals: 'In progress' }
    }
  });

  return projects.results.map(p => ({
    name: p.properties.Name.title[0]?.plain_text,
    nextStep: p.properties['Next Step']?.rich_text[0]?.plain_text,
    status: p.properties.Status.status?.name
  }));
}
```


Shell commands:


```bash
# Start a new Claude Code session
cd ~/shop/projects/jaysfoundry-blog
claude "Read CLAUDE.md and apply the design spec in docs/design-spec.md"
```


CSS variables:


```css
:root {
  --color-cream: #F0ECE3;
  --color-ink: #2C2A25;
  --color-accent: #C44B2F;
  --color-taupe: #8B7E6A;
}
```


Inline code in a sentence: Run `npm run dev` to start the local server, then open `localhost:4321` in your browser.


## Lists


Unordered list:

- Claude Chat handles planning and design thinking
- Claude Code handles execution and building
- Notion is the state layer connecting everything
- Jay is the router between all three

Ordered list:

1. Read the Current State page in Notion
2. Identify what's queued for this session
3. Do the work in the appropriate tool
4. Update Current State and Learning Log at wrap-up

Nested list:

- Agentic building blocks
    - Prompts — one-shot instructions
    - Projects — persistent context containers
    - Skills — reusable execution patterns
    - [CLAUDE.md](http://claude.md/) — orientation and conventions
    - MCP Connectors — tool integrations
    - Subagents — future autonomous workflows

## Images


Inline image to test rendering:


![Dieter Rams' ten principles of good design](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d1ad59e-5e88-8184-bbee-000375f490d0/7d8fa845-a56f-4412-a29a-fd31b71cfca6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANP5V7D%2F20260320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260320T135211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD9aE%2B8Veg8SkpbdnePArzFrbiNgahU9vjQTq%2FJaHgGMQIgfF%2BQRz5asAPPb4AETsGUxPNCSepj4%2BdRBYeNDykuzkkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEtFLfRQkHoFF0463ircAyFiwpcCJLFqN3X56GV%2FnF5D%2FxRzluFwP8Av9T9yiyKHk66OCbgiv%2Fi%2Bxv7O8g9Y2uAarP%2Bmcd5fVLSQUbqxLEeh2covuG2ebOJbU5DyYnKCGvgIZRAZY1oZFx3SP%2B77jAKizkiMtPKDUPZ8NORVtC2nlwSg7qoxNF02Bui9fsMMePnPE9ybUIy3cxHvZUWDBghVVUw2d3aksPLaQVAnP9gVALL4qumJE1n%2BRTIx66a2Rsf8r%2B52fF9OU60nEQKssqDUmgI0YapHcKNzPv1QS%2FpK2Jvy3lefcI15rHDNgpwqKeBQI4iOngd1MuYzfOlAWP5%2FW9KEf8SlHENnFcWuHPxjvlDz83J2401U8MMhYBIuq51Wsdvqp01Rxl%2B6gEdQyFFyg4xeiFJp3G0E8e5Spizc%2BTrX3JtK0wnEzHoVV2jZYGHg%2FRghylj0%2FHgGFIMQZFjdm%2Fy3YOj4o1YpgvM%2BMvBdtCtrO2YbF0Og6hcpXFjocY8m%2BvNnfMdchI6o5%2BQEuoWhISPAuCVPwNoFC8e8K9FYQiiTGnmlaAkBuLgSFKmRXpwOdJNCTqusLDa72rvF9uC3J2WuKmWXkye5KkG0DcoB69Pm1h%2Btz3JLOKLQ2tyd7x9ovaQ1HXCkLPJ7MMOb9c0GOqUB5NT9jaAiHLXoaNoRdDrZ7QhOGRWxKntF8RnfvqmxjFhxwZ6gKni1yrTKwwEo4AhdcedyJZ7OeXMfiJS6b4Zemkab%2BerzruOwfSb4xs7nMC3Z7LQjJw%2FGYj%2BuJ9tM44N6FEWgnbiXKhN%2F2TJwS33lacbj8NAzpiYxJb5z%2BDdWKL6Y0NliA3rddC6KvYnvmbszqXRXUlF8kEsPHE473swVuUcHCTv%2F&X-Amz-Signature=2627f3d5ed91b9735caee15b5ead0b5576a85b809ddc870594c089e8740b0633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Images should be full-width within the content column, with subtle border-radius matching the Rams aesthetic.


## Horizontal rules


Content above the rule.


---


Content below the rule. The horizontal rule should render as the hatched-line motif (three fading parallel lines), not a standard single line.


## Tables


If Astro supports markdown tables:


| Tool        | Mode     | Purpose                     |
| ----------- | -------- | --------------------------- |
| Claude Chat | Think    | Planning, design, decisions |
| Claude Code | Build    | Execution, code, files      |
| Cowork      | Automate | Scheduled tasks, workflows  |
| Notion      | State    | Context, handoff, logging   |


## Mixed content flow


This section tests how different elements flow together naturally in a real post.


The first thing I learned about agentic workflows is that **context is everything**. Without it, every session starts cold. That's why the `CLAUDE.md` file matters so much — it's the orientation layer that tells Claude _who you are_ and _how you work_ before you even type a prompt.


Here's the key insight:

> [CLAUDE.md](http://claude.md/) is orientation and conventions only — not designs, not sensitive data.

The three-layer model makes this concrete:

1. **Global** (`~/.claude/CLAUDE.md`) — universal preferences, private
2. **Shop-level** (`~/shop/CLAUDE.md`) — Shop-specific conventions, private
3. **Project-level** (committed to repo) — project context, public-safe

In code, the cascade looks like this:


```bash
# Claude Code reads all three layers automatically
~/.claude/CLAUDE.md        # "I prefer conventional commits"
~/shop/CLAUDE.md           # "Notion DB IDs live here"
~/shop/projects/blog/CLAUDE.md  # "This is an Astro project"
```


The recruiter test applies to that last layer: before committing anything, ask yourself — _would a recruiter be comfortable reading this?_


---


_This is a test post. Delete after confirming theme rendering._

