# Jay's Foundry — Blog Design Spec

## Design direction

Dieter Rams / Braun industrial design, translated to web. The reference material is the Openkey Design "Less, but better" keycap set — warm cream surfaces, Braun red-orange indicator accents, speaker grill and tuning dial motifs. The aesthetic is functional, warm, and precisely restrained.

This spec covers the full visual redesign of jaysfoundry.com (Astro + Vercel). The blog currently has default styling. This redesign applies the Rams aesthetic to the homepage (post listing), individual post pages, and shared layout elements (header, nav, footer).

---

## Color palette

| Token | Hex | Usage |
|---|---|---|
| `--color-cream` | `#F0ECE3` | Page background — warm Braun plastic surface |
| `--color-ink` | `#2C2A25` | Primary text — warm near-black |
| `--color-body` | `#3D3929` | Body text — slightly lighter for long-form reading |
| `--color-taupe` | `#8B7E6A` | Secondary text, dates, metadata, inactive nav |
| `--color-taupe-light` | `#7A6F5C` | Descriptions, summaries |
| `--color-accent` | `#C44B2F` | Braun indicator red-orange — accent color |
| `--color-code-bg` | `#363430` | Code block background |
| `--color-code-header` | `#2C2A25` | Code block header bar |
| `--color-code-text` | `#D4CFC3` | Code block text |

### Accent color rules

`--color-accent` (`#C44B2F`) appears in these specific places and nowhere else:

- Header vertical bar (brand mark)
- Active nav item text + indicator dot
- Post title hover state
- "Latest" indicator dot on most recent post
- Tags on featured/recent posts (accent border + text)
- Inline text links (with subtle accent underline)
- H2 heading accent dash
- Blockquote left border (hatched motif, in accent)
- Code block keywords/commands
- Next/prev post link titles
- Footer links (GitHub, RSS)

### Border and divider colors

All dividers use `--color-taupe` at low opacity, never gray:

- Section dividers: `rgba(139, 126, 106, 0.2)` — single 1px line or hatched motif
- Post separators: `rgba(139, 126, 106, 0.15)`
- Tag borders: `rgba(139, 126, 106, 0.25)` (taupe tags) or `rgba(196, 75, 47, 0.3)` (accent tags)

### Dark mode

Not included in v1. The Braun/Rams aesthetic is rooted in warm cream surfaces and doesn't translate naturally to dark mode. Revisit later if needed.

---

## Typography

Dieter Rams / Braun products used Helvetica and Akzidenz-Grotesk — clean geometric sans-serifs. The web equivalent:

### Font selection

**Primary font:** A geometric sans-serif loaded from Google Fonts. Recommended options (pick one):

1. **DM Sans** — geometric, clean, excellent weight control. Closest free match to the Braun aesthetic.
2. **Manrope** — geometric with slightly more personality. Good optical sizing.
3. **Helvetica Neue** (system font stack fallback) — the authentic Rams choice, but inconsistent across platforms.

Suggested system font stack fallback:
```css
font-family: 'DM Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
```

**Monospace font (code blocks):** `'DM Mono'` or `'IBM Plex Mono'` — both pair well with geometric sans.

### Weight rules

Rams used light-to-medium weights. Typography hierarchy comes from **size differences**, not weight contrast.

| Element | Weight | Notes |
|---|---|---|
| Body text | 400 (regular) | All long-form content |
| Post titles | 400 (regular) | Size creates hierarchy, not boldness |
| H2 section headings | 500 (medium) | The ONLY element that gets 500 |
| Brand name | 400 (regular) | "Jay's Foundry" — not bold |
| Nav items | 400 (regular) | Never bold, even when active |
| Metadata (dates, tags) | 400 (regular) | Always regular weight |

**Never use 600 or 700.** If something needs emphasis, it gets the accent color or a size change — not more weight.

### Size scale

Three primary sizes plus metadata. Tight, precise, Braun-like.

| Element | Size | Letter-spacing | Line-height |
|---|---|---|---|
| Post page title (h1) | 24px | -0.3px | 1.3 |
| Brand name | 20px | 0.2px | — |
| Post list title | 16px | -0.1px | — |
| H2 section heading | 16px | 0 | — |
| Body text | 14px | 0 | 1.7 |
| Nav items | 13px | 0.3px | — |
| Descriptions/summaries | 13px | 0 | 1.5 |
| Tagline | 12px | 1.5px | — |
| Dates, read time | 11px | 0.5px | — |
| Tags | 10px | 0.8px | — |

### Capitalization

Standard sentence case everywhere. "Chat for thinking, Code for doing" — not "chat for thinking, code for doing" and not "Chat For Thinking, Code For Doing."

The brand name is always "Jay's Foundry" with standard capitalization.

---

## Braun motifs

These are the signature design elements that make the blog feel like a Braun product, not just a minimal blog. Each has a functional purpose.

### 1. Accent vertical bar (header brand mark)

A 3px wide × 36px tall rounded bar in `--color-accent`, positioned to the left of the brand name. References the orange accent strips on Braun radio cases.

```css
.brand-bar {
  width: 3px;
  height: 36px;
  background: var(--color-accent);
  border-radius: 1.5px;
}
```

On the post page, this shrinks to 3px × 28px (the header is more compact).

### 2. Speaker grill dot grid (header decoration)

A 4×3 grid of small circles in taupe, positioned in the top-right of the header. References the speaker grille pattern on Braun radios and the Openkey keycap speaker icons.

```css
.grill-dots {
  display: grid;
  grid-template-columns: repeat(4, 4px);
  gap: 3px;
  opacity: 0.35;
}
.grill-dots span {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #6B6152;
}
```

Only appears on the homepage header. The post page header is more compact and omits it.

### 3. Hatched line dividers (section breaks)

Three parallel horizontal lines with fading opacity, replacing standard single-line dividers. References the speaker grill line texture from the Openkey enter/shift keys.

```css
.hatched-divider {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
/* Three lines: 0.25, 0.18, 0.12 opacity */
```

Used for: header-to-content divider, content-to-footer divider.

Regular post-to-post separators use a single 1px line (not hatched) to avoid overusing the motif.

### 4. Indicator dots (state markers)

Small circular dots in `--color-accent`. 5px for nav active state, 6px for "latest post" marker. References the red power/status LED dots on Braun products and the Openkey keyboard's red indicator dots.

Active nav: dot appears to the left of the active nav text.
Latest post: dot appears below the date in the left column.
Post hover: dot fades in below the date (optional, adds life).

### 5. Scale markings (code block decoration)

Five small vertical lines of varying height arranged symmetrically, placed in the top-right corner of code block headers. References the tuning dial scale markings on the Openkey "9.5 · 0 · 19" keycap.

```
Heights: 3px, 5px, 7px, 5px, 3px
Width: 1px each, gap: 3px
Color: --color-taupe at 0.5-0.7 opacity
```

### 6. Grill-line blockquote border

Instead of a solid left border on blockquotes, use 5 short horizontal lines stacked vertically with varying opacity (0.7, 0.55, 0.4, 0.55, 0.7) in `--color-accent`. Width: 6px. References the speaker grill motif but in the accent color for emphasis.

### 7. H2 accent dash

A short horizontal line (16px wide, 2px tall) in `--color-accent` placed to the left of each H2 heading. Provides a consistent visual anchor for section breaks in long-form content.

---

## Layout

### Global

- Max content width: 640px, centered
- Page background: `--color-cream` (`#F0ECE3`)
- Page padding: 2.5rem horizontal on desktop, 1.5rem on mobile
- No card wrappers, no shadows, no border-radius on the page itself — the cream background IS the surface

### Homepage

**Header:**
- Accent bar + brand name + tagline on the left
- Speaker grill dot grid on the right
- Margin bottom: 2rem

**Nav:**
- Horizontal text links: Writing (active), About, Projects
- Active item: accent color text + indicator dot to the left
- Inactive items: taupe color
- Bottom border: single 1px taupe line (not hatched — save hatched for major sections)
- Below nav: 2rem space before post list

**Post list:**
- Each post is a row: date column (48px min-width, right-aligned) + content column
- Date format: `03.16` (month.day, period-separated, no year — assumes current year; add year when posts span years)
- Post title: 16px, weight 400, `--color-ink`. Hover: transitions to `--color-accent`
- Description: 13px, `--color-taupe-light`, 1.5 line-height
- Tags (optional): 10px, taupe border. First/featured tag can use accent border + accent text
- Latest post gets an indicator dot below its date
- Post-to-post separator: 1px solid line at `rgba(139, 126, 106, 0.15)`
- Vertical padding per post: 1.25rem top and bottom

**Footer:**
- Hatched line divider (3 lines)
- Left: "Jay — Orlando, FL" in 11px taupe
- Right: "GitHub · RSS" links in 11px accent color

### Post page

**Header (compact):**
- Smaller accent bar (3px × 28px) + brand name at 16px
- "← Writing" back link on the right in accent color
- Hatched line divider below

**Post meta:**
- Date + read time: `03.16 · 4 min read` in 11px taupe
- Title: 24px, weight 400, `--color-ink`
- Tags below title

**Body content:**
- Body text: 14px, weight 400, `--color-body`, line-height 1.7
- H2: 16px, weight 500, `--color-ink`, with accent dash to the left
- Links: `--color-accent` text, subtle 1px bottom border at `rgba(196, 75, 47, 0.3)`
- Blockquotes: grill-line left border in accent, italic text in taupe
- Code blocks: dark warm background (`--color-code-bg`), header bar with filename + scale marking motif, accent-colored keywords
- Inline code: could use a slightly darker cream background or a subtle taupe border — keep it subtle

**Post footer:**
- Hatched line divider
- Previous / Next navigation: label in 10px taupe, title in 13px accent color
- Left-aligned previous, right-aligned next

---

## Transitions and interactions

Minimal. Rams products don't animate — they respond.

- Post title hover: `color` transition to accent, `0.15s ease`
- Indicator dot on hover (optional): `opacity` transition, `0.2s ease`
- Link hover: underline opacity increases
- No page transitions, no scroll animations, no entrance effects

---

## Font loading strategy

Use Google Fonts with `display=swap` to avoid flash of invisible text:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Mono:wght@400&display=swap" rel="stylesheet">
```

Only load weights 400 and 500. Nothing else.

---

## CSS custom properties (starter)

```css
:root {
  /* Colors */
  --color-cream: #F0ECE3;
  --color-ink: #2C2A25;
  --color-body: #3D3929;
  --color-taupe: #8B7E6A;
  --color-taupe-light: #7A6F5C;
  --color-accent: #C44B2F;
  --color-code-bg: #363430;
  --color-code-header: #2C2A25;
  --color-code-text: #D4CFC3;

  /* Typography */
  --font-sans: 'DM Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  --font-mono: 'DM Mono', 'Menlo', 'Monaco', monospace;

  /* Spacing */
  --content-width: 640px;
  --page-padding: 2.5rem;
}

@media (max-width: 640px) {
  :root {
    --page-padding: 1.5rem;
  }
}
```

---

## Brand icon library

Ten Braun/Rams-inspired icons available as both SVG (scalable) and PNG (512×512). All share the same cream background (`#F0ECE3`), taupe (`#8B7E6A`), and accent (`#C44B2F`) palette. Use them as the site evolves — social cards, About page, project badges, OG images, etc.

| Icon | Name | Description | Best for |
|---|---|---|---|
| A | Accent bar | Vertical red-orange bar, centered | Simple brand mark, section dividers |
| B | Indicator dot | Single red-orange circle | Minimal favicon alternative, status indicators |
| C | Grill + indicator | 3×3 dot grid, top-right dot in accent | Social media avatar, brand recognition |
| D | Bar + dot | Vertical bar paired with taupe dot | Combined mark, loading states |
| E | Grill lines + dot | Three hatched lines + indicator dot | Alternate brand mark, simple contexts |
| F | Scale markings | Symmetrical vertical bars (tuning dial) | Section decoration, feature headers, audio/tuning contexts |
| G | Dial knob | Circular ring with position notch | Settings pages, control UIs, rotary/adjustment contexts |
| H | JF monogram | Geometric "JF" + Braun dial knob + hatched accent base | **Primary favicon**, GitHub avatar, main brand mark |
| I | Header composition | Accent bar over grill lines | OG images, wide-format social cards |
| J | Control panel | 2×2 dot grid, bottom-right accent | Dashboard branding, tool/utility contexts |

### File locations

All icons live in the repo at `public/brand/icons/`:

```
public/brand/
├── icons/
│   ├── icon-a-accent-bar.svg
│   ├── icon-a-accent-bar.png          (512×512)
│   ├── icon-b-indicator-dot.svg
│   ├── icon-b-indicator-dot.png
│   ├── icon-c-grill-indicator.svg
│   ├── icon-c-grill-indicator.png
│   ├── icon-d-bar-dot.svg
│   ├── icon-d-bar-dot.png
│   ├── icon-e-grill-lines-dot.svg
│   ├── icon-e-grill-lines-dot.png
│   ├── icon-f-scale-markings.svg
│   ├── icon-f-scale-markings.png
│   ├── icon-g-dial-knob.svg
│   ├── icon-g-dial-knob.png
│   ├── icon-h-monogram-jf.svg          ← Primary brand mark (JF + dial + hatched accent)
│   ├── icon-h-monogram-jf.png
│   ├── icon-i-header-comp.svg
│   ├── icon-i-header-comp.png
│   ├── icon-j-control-panel.svg
│   └── icon-j-control-panel.png
└── favicon/
    ├── favicon.svg                     ← Modern browsers (JF monogram, scalable)
    ├── favicon.ico                     ← Legacy browsers (JF monogram, 16+32+48)
    ├── favicon-16x16.svg
    ├── favicon-32x32.svg
    ├── apple-touch-icon.png            (180×180)
    ├── icon-192x192.png                (PWA manifest)
    ├── icon-512x512.png                (PWA manifest)
    ├── github-avatar.png               (800×800, square)
    └── github-avatar-circle.png        (800×800, pre-cropped circle)
```

### Favicon HTML

Add to the Astro layout `<head>`:

```html
<link rel="icon" href="/brand/favicon/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/brand/favicon/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="apple-touch-icon" href="/brand/favicon/apple-touch-icon.png">
<link rel="manifest" href="/manifest.json">
```

### PWA manifest (if needed later)

```json
{
  "name": "Jay's Foundry",
  "short_name": "Foundry",
  "icons": [
    { "src": "/brand/favicon/icon-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/brand/favicon/icon-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#F0ECE3",
  "background_color": "#F0ECE3"
}
```

---

## Implementation notes for Claude Code

1. This is an Astro site. The theme likely uses Astro layouts and components. Modify existing CSS/layout files rather than rebuilding from scratch.
2. The blog already has a working publish pipeline (Notion → GitHub Actions). Don't break it. This is purely visual.
3. Start with global styles (colors, typography, background), then layout (header, footer, content width), then component details (post list, post page, motifs).
4. The Braun motifs (grill dots, hatched lines, scale markings, accent bar) can be implemented as reusable Astro components or CSS utility classes.
5. Test that the warm cream background works well with code blocks (the dark code blocks should feel like Braun's dark control panels set into a cream chassis).
6. No dark mode in v1.
7. Copy brand assets from `public/brand/` into the Astro project's `public/` directory. Add favicon `<link>` tags to the base layout head.
8. Use the GitHub avatar PNG (800×800 square) to update the jaysfoundry GitHub profile picture.
