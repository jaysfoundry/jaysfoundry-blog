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


![Dieter Rams' ten principles of good design](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d1ad59e-5e88-8184-bbee-000375f490d0/7d8fa845-a56f-4412-a29a-fd31b71cfca6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYH7CZWF%2F20260320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260320T041740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDZyAAnOE2tPuI6ljlua66qukeam4yNWz6%2B%2Bh0z6EjNdAIhAI6VFqW9T91Ehf8i1Xz0Kwcs1XPiKX64umwBqAezbgrvKv8DCCoQABoMNjM3NDIzMTgzODA1IgwSG8qP2ITtr3hCRY0q3AOIVFN64lHhby5J6Iiz%2BLR9vpCOWc%2FaWDpVcGcjmuQeOBRrHvQaQ6Wv5BLFYD8MIqVUhZVvPI88GVwGmRud%2Bdoi9ScIgktCmuSrgNIRf29XlLMlF3%2BfPAxOQLMEb%2BWv81HEF54WVpHIQQkNA8gMPVkJmjhbys3MV%2FqZPD6%2BMDMl3m4giPvsbd9NRrtQS80B%2Bc%2FstNGAaGhkLjRfQjRPaOBXdb8%2B%2F6IkdQqUr36EgudVMFJjRhz7w3yifMOw6jnH2A4clGIIMviONSfq9pI%2Fh8KI402N7GfVFPf1MMhz3fs0s9UUMWKKGFlnRH6EzeISdFmBfp0WMIvgR8%2B%2FCIJ7GSOGCCWc4xPDDxJ35ADoX%2FH2L4TCcBgFjKLe9sS5JI8M%2Fbx9r7J7LPORfHAb4HqkzCJfUo7v6JeyCtqeIrdGnBFsjfWvDL6Vs8AOWtlxPfmyei9lvKPqwRgr9UK2xUSFT3WdxLtpRRiELIJizlyoZSZH2pPxe5YCJOZlucunHWoMMg0wvClwY715dO2PNpWfs%2BVj9jTwAPmPsQr%2B5XKpP%2B0w0XVe%2F4ikcbgc2yzmG%2Bndh%2BfB1niQ3gnAzN1XrBHSjKnpk5BUUogwNrZeo3o4ZC51BjlvkFMKzb4xJJCHqTC4t%2FLNBjqkASXFo3y11hRE2r%2FaVbMETZX10cA32XjqmLPpY1BSF540mLrLlprBeQeXo0F28og%2FVRQ82NMjZdXl8L6RCLILL1GIc4ExohebnyV6OiMSE2f%2FSf0aHk2LjeqE9YK5Ov%2FO%2FZ9i5X%2FzccIEQnGSU%2FFPwbBG%2FbDszRKHXRHd00w6GjE4qJLFST7EhQdJ57QQssPOAfNktVMrHuQfe9yC7cV2nHzQSmB%2F&X-Amz-Signature=bf7f3bd0e23e18ddb7ad36100b8e359cf958e922a3fd4ac9a3fefaee38f9a91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

