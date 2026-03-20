# jaysfoundry-blog

## What This Is
The Jay's Foundry blog — a personal site for writing about building with AI tools, product management meets hands-on development, and showing the work. Live at jaysfoundry.com.

- **Brand:** Jay's Foundry / "Build things. Show the work. Stay curious."
- **Stack:** Astro 6, MDX, strict TypeScript, deployed on Vercel
- **Design:** Dieter Rams / Braun-inspired aesthetic — spec in `docs/design-spec.md`
- All global `~/.claude/CLAUDE.md` and `~/shop/CLAUDE.md` preferences apply to this project

## Commands
- `npm run dev` — dev server at localhost:4321
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview production build locally
- `npm run sync` — pull published content from Notion locally (requires `.env`)
- `npx astro check` — TypeScript type checking

## Architecture

**Content layer:** Two content collections defined in `src/content.config.ts`:
- `blog` — posts in `src/content/blog/` (title, description, pubDate, updatedDate?, heroImage?, tags)
- `pages` — static pages in `src/content/pages/` (title, description, pubDate)

**Routing:** File-based routing in `src/pages/`.
- Homepage post list: `src/pages/index.astro` (fetches blog collection)
- Blog posts: `src/pages/blog/[...slug].astro` (getStaticPaths + reading time + prev/next)
- Dynamic pages: `src/pages/[page].astro` (fetches pages collection)
- `/blog` redirects to `/` via `astro.config.mjs`

**Layouts:** `src/layouts/BlogPost.astro` wraps individual posts (accepts readingTime, prevPost, nextPost, pages props).

**Components:** `src/components/` includes:
- `BaseHead.astro` — SEO/meta tags, font loading, favicon
- `Header.astro` — two variants (home/post), dynamic nav from pages prop
- `Footer.astro` — HatchedDivider + split layout
- `FormattedDate.astro` — renders dates as "03.19" format
- Braun motif components: `AccentBar.astro`, `GrillDots.astro`, `HatchedDivider.astro`, `IndicatorDot.astro`

**Site constants:** `src/consts.ts` holds `SITE_TITLE` and `SITE_DESCRIPTION`.

**Config:** `astro.config.mjs` — integrations: MDX, Sitemap. Site URL: `https://jaysfoundry.com`.

**Styles:** Global CSS in `src/styles/global.css` — design tokens, typography (DM Sans/Mono), base styles.

**Brand assets:** `public/brand/favicon/` (favicon at all sizes) and `public/brand/icons/` (10 Braun/Rams-inspired SVG + PNG icons). Primary mark is the JF monogram (`icon-h-monogram-jf`).

## Project Structure
```
src/
  content/blog/      # Blog posts (synced from Notion)
  content/pages/     # Static pages (synced from Notion)
  pages/             # Astro page routes
  layouts/           # Page layouts
  components/        # Astro components + Braun motifs
  styles/            # Global CSS (design system)
  consts.ts          # Site title, description
  content.config.ts  # Collection schemas (Zod validation)
scripts/
  publish.mjs        # Notion → markdown sync script
public/
  brand/             # Favicon and brand icon library
docs/
  design-spec.md     # Full visual design specification
.github/
  workflows/
    publish.yml      # Manual trigger publish pipeline
```

## Publish Pipeline
Content is authored in Notion (Learning Log database). The pipeline syncs Notion to the repo — Code does not author content.

**What syncs:**
- `Type = "Blog Post"` + `Status = "Published"` → `src/content/blog/`
- `Type = "Page"` + `Status = "Published"` → `src/content/pages/`

**How it works:**
1. `scripts/publish.mjs` queries Notion API for published entries
2. Converts Notion blocks to Astro-compatible markdown with frontmatter
3. Writes to content directories, cleans up orphaned files
4. Skips unchanged files via SHA-256 hash
5. GitHub Action commits changes and pushes to `main`
6. Vercel auto-deploys

**To trigger:** `gh workflow run "Publish Notion Posts"` from CLI, or GitHub Actions UI.

**Local preview:** `npm run sync` pulls content locally using `.env` credentials. These local content files are not committed — the GitHub Action handles production syncing.

**Secrets** (GitHub repo secrets): `NOTION_API_TOKEN`, `NOTION_DATABASE_ID`

**Do not manually edit pipeline-managed files in `src/content/blog/` or `src/content/pages/`** — they'll be overwritten on next publish run.

## Git Push Conflicts
The publish workflow runs on `main` and can push commits between your local work. When pushing, you may need to rebase. Local-only Notion content files (from `npm run sync`) will conflict during rebase — move them to `/tmp/`, rebase, then restore. This is a known friction point.

## Conventions
- This is a **public repo** — recruiter test applies to all committed files
- Astro TypeScript strict mode — respect existing tsconfig
- Content authoring happens in Notion, not in Code. Code handles site features, theme, pages, components, and images
- Header nav is dynamic — driven by the pages content collection, not hardcoded
- See global CLAUDE.md for commit style and general conventions

## Environment Variables
Secrets are in `.env` for local dev. See `.env.example` for required keys. Never commit secrets.

## Future Work
- Preview deploys (PR-based branch workflow with Vercel preview URLs)
- Project showcase pages
- Image support in blog posts
- Per-post OG images
