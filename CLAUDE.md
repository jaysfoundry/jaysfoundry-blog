# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

- **Project:** Jay's Foundry blog (domain TBD — jaysfoundry.com or .dev)
- **Stack:** Astro 6, MDX, strict TypeScript, deployed on Vercel
- **Purpose:** Personal blog for building in public — AI experiments, collectibles and games, PM career content
- **Brand:** Jay's Foundry / "Build things. Learn in public. Stay curious."
- All global `~/.claude/CLAUDE.md` preferences apply to this project

## Commands

- `npm run dev` — dev server at localhost:4321
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview production build locally
- `npx astro check` — TypeScript type checking (no separate lint/test scripts configured)

## Architecture

**Content layer:** Blog posts live in `src/content/blog/` as `.md`/`.mdx` files. The collection schema is defined in `src/content.config.ts` — frontmatter requires `title`, `description`, `pubDate`, and optionally `updatedDate` and `heroImage` (validated with Zod).

**Routing:** File-based routing in `src/pages/`. Dynamic blog post pages use `src/pages/blog/[...slug].astro` with `getStaticPaths()` + `getCollection('blog')`.

**Layouts:** `src/layouts/BlogPost.astro` wraps individual posts. Components in `src/components/` include `BaseHead.astro` (SEO/meta tags), `Header.astro`, `Footer.astro`, `FormattedDate.astro`, and `HeaderLink.astro`.

**Site constants:** `src/consts.ts` holds `SITE_TITLE` and `SITE_DESCRIPTION` — update these for branding.

**Config:** `astro.config.mjs` — integrations: MDX, Sitemap. The `site` URL is currently placeholder (`https://example.com`) and needs updating for production.

**Styles:** Global CSS in `src/styles/global.css`.

**Static assets:** `public/` for files served as-is; `src/assets/` for images processed by Astro's image pipeline (sharp).
