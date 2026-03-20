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


![Dieter Rams' ten principles of good design](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d1ad59e-5e88-8184-bbee-000375f490d0/7d8fa845-a56f-4412-a29a-fd31b71cfca6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNC7WXR2%2F20260320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260320T042002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCi0ItLtke%2BXQ1i5lxgOKBnGdiGgl6LAV3P2B%2FQTgrUsAIhANY91toKoANt6LyGEJXSDTKNmfeiANdGgoipyZ9Wysi9Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwD9GVJlYVlNOircu8q3AO5rcBwUUkaxgDxAtdmRZt%2FuJfotCpJOt4qZhEkDr3g0vaXfX4%2FGsAJROmssBKq69Xclj9VEDirSRvAxvleQXeMc7C0Co2tgaZd0lcP4ys5vxfgFHYvzdvAGoav9PhxJRo9PO%2FybjqL51N3QfsHuzDYHfNAWD%2B%2BIaEW9T1tcseL247oY6XzrPorJ0B5B7FuCG4yKV0hXGNQu08DDRZW6yiLe0nyjbtEooiTbaCzE5vsmLnW4pPt3eL3YmOEyIKxCH99GMnemIu4sueD5sunK4bHf16D1ng02BhTsbRb4t8ngcqLphotYEIF4dH8wxRF0mf1aTl4eAgtNukhkLcNA4cJDDIS5OGMj5Llvwo6I%2B5HZCk%2BuEYy76li9sa9X%2BQQ0qqlZnf1a528AAU2CDKvxBlkXBeVSvYX21rUWr%2F1Jl%2FBmsdq164lEBAkrDYqSx298Pa3WW8xAqVnV3dN1vEtJ3pVcbCrfIbsJeJ%2BorB3%2BMQDvk%2BuVrdH%2B2jQW%2FAOT5%2Fbg3aC2lYLVONz1YgLxmWfVncDlyiRa62hSqab%2BjGL7%2FbbkmbmMt%2F6apLteaPeWbPjYtO4KiWkhoNeB%2FcSVD8xxjCTbCRHRh6nuiHx73MmlMUjRZgD5zXgp2ocEVN%2FVTC0t%2FLNBjqkAc4CCZbp6awx%2FhFUGU%2FydkOSTCARpwXrjpkDhTQXtIJMDL%2B22Mtcjskz5qUEpiL6oHt%2B0YWQ2xf7XmAZRleiWa5bjLl3zjr6wVqdOa7%2F%2Bolnl7TuMCpv7bOow90GVnhO5cf%2FYf4KaHvVVIYaxr7WfTfEpoR%2BU0kZ7j6sPrslLjgQO6zEFy5aqqVdjxzYjeNTVAF99XCPgKHFh%2BRFNl9A7Ys4dwLY&X-Amz-Signature=fb81c8d48e98f6b875e2d6f7a2d6a594d4cb702f67fc55d750d6351cd488d186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

