/**
 * Notion-to-blog publish script.
 *
 * Queries the Notion Learning Log database for entries where:
 *   Type = "Blog Post" AND Status = "Published"
 *
 * Converts each matching page to an Astro-compatible markdown file and writes
 * it to src/content/blog/. Skips files whose content hasn't changed (by hash).
 *
 * Required env vars:
 *   NOTION_API_TOKEN    — Notion integration token
 *   NOTION_DATABASE_ID  — ID of the Notion database to query
 */

import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { createHash } from 'crypto';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, '../src/content/blog');

// ── Helpers ──────────────────────────────────────────────────────────────────

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Pull plain text out of a Notion rich-text array. */
function richTextToPlain(richText) {
  return (richText ?? []).map((t) => t.plain_text).join('');
}

/**
 * Extract a short description from the markdown body.
 * Uses the first prose paragraph, stripped of inline formatting.
 * Falls back to the post title (truncated).
 */
function extractDescription(markdown, title) {
  for (const line of markdown.split('\n')) {
    const t = line.trim();
    if (
      t.length > 20 &&
      !t.startsWith('#') &&
      !t.startsWith('!') &&
      !t.startsWith('-') &&
      !t.startsWith('>') &&
      !t.startsWith('|') &&
      !t.startsWith('```')
    ) {
      // Strip common inline markdown and URLs
      const plain = t
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/[*_`]/g, '');
      if (plain.length > 20) return plain.slice(0, 160).trim();
    }
  }
  return title.slice(0, 160);
}

/** Build the YAML frontmatter block for an Astro content collection entry. */
function buildFrontmatter({ title, description, pubDate, tags }) {
  const esc = (s) => s.replace(/"/g, '\\"');
  const tagList = tags.map((t) => `"${esc(t)}"`).join(', ');
  return [
    '---',
    `title: "${esc(title)}"`,
    `description: "${esc(description)}"`,
    `pubDate: "${pubDate}"`,
    `tags: [${tagList}]`,
    '---',
    '',
  ].join('\n');
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const { NOTION_API_TOKEN, NOTION_DATABASE_ID } = process.env;
  if (!NOTION_API_TOKEN || !NOTION_DATABASE_ID) {
    console.error(
      'Error: NOTION_API_TOKEN and NOTION_DATABASE_ID must be set.',
    );
    process.exit(1);
  }

  const notion = new Client({ auth: NOTION_API_TOKEN });
  const n2m = new NotionToMarkdown({ notionClient: notion });

  mkdirSync(BLOG_DIR, { recursive: true });

  // Query the database — filter to Blog Posts that are Published.
  // NOTE: If you have more than 100 published posts, add cursor-based
  // pagination using response.next_cursor / response.has_more.
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      and: [
        { property: 'Type', select: { equals: 'Blog Post' } },
        { property: 'Status', status: { equals: 'Published' } },
      ],
    },
    page_size: 100,
  });

  console.log(`Found ${response.results.length} published blog post(s).`);

  let written = 0;
  let skipped = 0;

  for (const page of response.results) {
    const props = page.properties;

    // ── Title ──────────────────────────────────────────────────────────────
    const titleProp = props.Title ?? props.Name;
    if (!titleProp || titleProp.type !== 'title' || !titleProp.title?.length) {
      console.warn(`  Skipping ${page.id}: no title property found.`);
      continue;
    }
    const title = richTextToPlain(titleProp.title);
    if (!title.trim()) {
      console.warn(`  Skipping ${page.id}: title is empty.`);
      continue;
    }

    // ── pubDate ────────────────────────────────────────────────────────────
    const pubDate =
      props.Date?.type === 'date' && props.Date.date?.start
        ? props.Date.date.start
        : page.created_time.slice(0, 10);

    // ── Tags ───────────────────────────────────────────────────────────────
    const tags =
      props.Tags?.type === 'multi_select'
        ? props.Tags.multi_select.map((t) => t.name)
        : [];

    // ── Body markdown ──────────────────────────────────────────────────────
    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const mdResult = n2m.toMarkdownString(mdBlocks);
    const body = mdResult.parent ?? '';

    // ── Description ────────────────────────────────────────────────────────
    const description = extractDescription(body, title);

    // ── Assemble file content ──────────────────────────────────────────────
    const slug = slugify(title);
    const filename = `${slug}.md`;
    const filepath = join(BLOG_DIR, filename);
    const fileContent = buildFrontmatter({ title, description, pubDate, tags }) + body;

    // ── Skip if unchanged (avoid spurious commits) ─────────────────────────
    const newHash = createHash('sha256').update(fileContent).digest('hex');
    if (existsSync(filepath)) {
      const existingHash = createHash('sha256')
        .update(readFileSync(filepath, 'utf-8'))
        .digest('hex');
      if (existingHash === newHash) {
        console.log(`  Unchanged: ${filename}`);
        skipped++;
        continue;
      }
    }

    writeFileSync(filepath, fileContent, 'utf-8');
    console.log(`  Written:   ${filename}`);
    written++;
  }

  console.log(`\nDone. ${written} written, ${skipped} unchanged.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
