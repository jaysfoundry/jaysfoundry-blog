# Jay's Foundry

**Build things. Show the work. Stay curious.**

Personal blog at [jaysfoundry.com](https://jaysfoundry.com) — writing about building with AI tools, product management meets hands-on development, and learning in public.

## Tech Stack

- **Framework:** Astro 6 with MDX support
- **Language:** Strict TypeScript
- **Styling:** Custom CSS (Dieter Rams / Braun-inspired design system)
- **Fonts:** DM Sans + DM Mono (Google Fonts)
- **Hosting:** Vercel (auto-deploys from `main`)
- **CMS:** Notion (Learning Log database) via publish pipeline

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run sync` | Pull published content from Notion locally |

## Content Pipeline

Content is authored in Notion and synced to the repo via `scripts/publish.mjs`:

- **Blog posts:** Notion entries with `Type = "Blog Post"` and `Status = "Published"` sync to `src/content/blog/`
- **Pages:** Notion entries with `Type = "Page"` and `Status = "Published"` sync to `src/content/pages/`

The sync script converts Notion blocks to Astro-compatible markdown with frontmatter, skips unchanged files via SHA-256 hash, and cleans up orphaned files.

**Local preview:** `npm run sync` loads credentials from `.env` and pulls content for local dev. See `.env.example` for required variables.

**Production:** The GitHub Actions workflow (`Publish Notion Posts`) runs on manual trigger, syncs content, commits changes, and pushes to `main`. Vercel auto-deploys.

## Project Structure

```
src/
  content/blog/       # Blog posts (synced from Notion)
  content/pages/      # Static pages (synced from Notion)
  pages/              # Astro page routes
  layouts/            # Page layouts (BlogPost)
  components/         # Astro components (Header, Footer, Braun motifs)
  styles/global.css   # Design system (colors, typography, base styles)
  consts.ts           # Site title, description
  content.config.ts   # Content collection schemas
scripts/
  publish.mjs         # Notion → markdown sync script
public/
  brand/              # Favicon, brand icons (Braun/Rams-inspired SVG + PNG)
docs/
  design-spec.md      # Full visual design specification
```

## License

MIT
