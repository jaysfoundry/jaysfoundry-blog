/**
 * Notion-to-blog publish script.
 *
 * Queries the Notion Learning Log database for:
 *   - Blog posts:  Type = "Blog Post" AND Status = "Published"  → src/content/blog/
 *   - Pages:       Type = "Page"      AND Status = "Published"  → src/content/pages/
 *
 * Converts each matching Notion page to an Astro-compatible markdown file.
 * Skips files whose content hasn't changed (by hash).
 *
 * Required env vars:
 *   NOTION_API_TOKEN    — Notion integration token
 *   NOTION_DATABASE_ID  — ID of the Notion database to query
 */

import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { createHash } from 'crypto';
import { writeFileSync, readFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, '../src/content/blog');
const PAGES_DIR = join(__dirname, '../src/content/pages');

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
      const plain = t
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/[*_`]/g, '');
      if (plain.length > 20) return plain.slice(0, 160).trim();
    }
  }
  return title.slice(0, 160);
}

/**
 * Convert markdown images with alt text to <figure> with <figcaption>.
 * ![caption](url) → <figure><img src="url" alt="caption"><figcaption>caption</figcaption></figure>
 * Images with empty alt text are left as-is.
 */
function convertImageCaptions(markdown) {
  return markdown.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, (match, alt, url) => {
    if (!alt.trim()) return match;
    return `<figure><img src="${url}" alt="${alt}"><figcaption>${alt}</figcaption></figure>`;
  });
}

/** Build the YAML frontmatter block for an Astro content collection entry. */
function buildFrontmatter({ title, description, pubDate, tags }) {
  const esc = (s) => s.replace(/"/g, '\\"');
  const lines = [
    '---',
    `title: "${esc(title)}"`,
    `description: "${esc(description)}"`,
    `pubDate: "${pubDate}"`,
  ];
  if (tags && tags.length > 0) {
    const tagList = tags.map((t) => `"${esc(t)}"`).join(', ');
    lines.push(`tags: [${tagList}]`);
  }
  lines.push('---', '');
  return lines.join('\n');
}

// ── Sync logic ───────────────────────────────────────────────────────────────

/**
 * Query Notion for entries matching a Type filter, convert to markdown,
 * and write to the target directory. Returns sync stats.
 */
async function syncEntries({ notion, n2m, databaseId, typeFilter, targetDir, label, includeTags }) {
  mkdirSync(targetDir, { recursive: true });

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        { property: 'Type', select: { equals: typeFilter } },
        { property: 'Status', status: { equals: 'Published' } },
      ],
    },
    page_size: 100,
  });

  console.log(`Found ${response.results.length} published ${label}(s).`);

  let written = 0;
  let skipped = 0;
  const syncedSlugs = new Set();

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

    // ── Tags (blog posts only) ──────────────────────────────────────────
    const tags = includeTags && props.Tags?.type === 'multi_select'
      ? props.Tags.multi_select.map((t) => t.name)
      : [];

    // ── Body markdown ──────────────────────────────────────────────────────
    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const mdResult = n2m.toMarkdownString(mdBlocks);
    const rawBody = mdResult.parent ?? '';
    const body = convertImageCaptions(rawBody);

    // ── Description ────────────────────────────────────────────────────────
    const description = extractDescription(body, title);

    // ── Assemble file content ──────────────────────────────────────────────
    const slug = slugify(title);
    syncedSlugs.add(slug);
    const filename = `${slug}.md`;
    const filepath = join(targetDir, filename);
    const fileContent = buildFrontmatter({
      title,
      description,
      pubDate,
      tags: includeTags ? tags : undefined,
    }) + body;

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

  // ── Cleanup: remove .md files no longer in the published set ─────────────
  if (existsSync(targetDir)) {
    const existingFiles = readdirSync(targetDir).filter((f) => f.endsWith('.md'));
    let removed = 0;
    for (const file of existingFiles) {
      const slug = file.replace(/\.md$/, '');
      if (!syncedSlugs.has(slug)) {
        rmSync(join(targetDir, file));
        console.log(`  Removed:   ${file}`);
        removed++;
      }
    }
    return { written, skipped, removed };
  }

  return { written, skipped, removed: 0 };
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

  // Sync blog posts
  console.log('── Blog posts ──');
  const blogStats = await syncEntries({
    notion,
    n2m,
    databaseId: NOTION_DATABASE_ID,
    typeFilter: 'Blog Post',
    targetDir: BLOG_DIR,
    label: 'blog post',
    includeTags: true,
  });

  // Sync pages
  console.log('\n── Pages ──');
  const pageStats = await syncEntries({
    notion,
    n2m,
    databaseId: NOTION_DATABASE_ID,
    typeFilter: 'Page',
    targetDir: PAGES_DIR,
    label: 'page',
    includeTags: false,
  });

  console.log('\nDone.');
  console.log(`  Blog posts: ${blogStats.written} written, ${blogStats.skipped} unchanged, ${blogStats.removed} removed.`);
  console.log(`  Pages:      ${pageStats.written} written, ${pageStats.skipped} unchanged, ${pageStats.removed} removed.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
