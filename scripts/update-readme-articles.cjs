/**
 * update-readme-articles.cjs
 *
 * Scans src/content/{en,zh}/ for markdown files, parses frontmatter,
 * and regenerates the Articles section in README.md (en) and README-ZH.md (zh).
 *
 * Usage: node scripts/update-readme-articles.cjs
 *        or: npm run articles
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://indiestory.itea.dev';
const ROOT = path.join(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src', 'content');
const README_EN = path.join(ROOT, 'README.md');
const README_ZH = path.join(ROOT, 'README-ZH.md');

// ── Frontmatter parser (no dependencies) ──────────────────────────
function parseFrontmatter(content) {
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx < 0) continue;
    let key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    // Strip surrounding quotes
    if ((val.startsWith("'") && val.endsWith("'")) ||
        (val.startsWith('"') && val.endsWith('"'))) {
      val = val.slice(1, -1);
    }
    fm[key] = val;
  }
  return fm;
}

// ── Read and categorize articles from a language directory ────────
function getArticles(lang) {
  const dir = path.join(CONTENT_DIR, lang);
  const stories = [];
  const guides = [];

  if (!fs.existsSync(dir)) return { stories, guides };

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const fm = parseFrontmatter(raw);
    if (!fm || !fm.slug || !fm.title) continue;
    const article = {
      slug: fm.slug,
      title: fm.title,
      publishDate: fm.publishDate || '',
    };
    if (fm.category === 'guide') {
      guides.push(article);
    } else {
      stories.push(article);
    }
  }

  // Newest first
  const byDate = (a, b) => b.publishDate.localeCompare(a.publishDate);
  stories.sort(byDate);
  guides.sort(byDate);

  return { stories, guides };
}

// ── Build list markdown for a category ────────────────────────────
function buildCategoryList(articles, lang) {
  if (articles.length === 0) {
    return lang === 'zh' ? '  _暂无内容_' : '  _No articles yet._';
  }
  const prefix = lang === 'zh' ? 'zh' : 'en';
  return articles
    .map(a => `- [${a.title}](${SITE_URL}/${prefix}/post/${a.slug})`)
    .join('\n');
}

// ── Compose the full article section ──────────────────────────────
function buildSection(stories, guides, lang) {
  const parts = [];
  parts.push(lang === 'zh' ? '### 故事' : '### Stories');
  parts.push('');
  parts.push(buildCategoryList(stories, lang));
  parts.push('');
  parts.push(lang === 'zh' ? '### 指南' : '### Guides');
  parts.push('');
  parts.push(buildCategoryList(guides, lang));
  parts.push(''); // trailing blank line before next section or EOF
  return parts.join('\n');
}

// ── Patch a README file ───────────────────────────────────────────
function patchReadme(filePath, sectionHeader, stories, guides, lang) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const newSection = sectionHeader + '\n\n' + buildSection(stories, guides, lang);

  // Escape regex-special chars in the section header
  const escaped = sectionHeader.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // For README-ZH: stop before the trailing --- if present
  // For README.md: replace to end of file
  if (lang === 'zh') {
    content = content.replace(
      new RegExp(escaped + '[\\s\\S]*?(?=\\n---|\\n*$)', ''),
      newSection
    );
  } else {
    content = content.replace(
      new RegExp(escaped + '[\\s\\S]*$', ''),
      newSection
    );
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  const total = stories.length + guides.length;
  console.log(`  ✓ ${path.basename(filePath)} (${total} articles)`);
}

// ── Main ──────────────────────────────────────────────────────────
function main() {
  console.log('Updating README articles from content/\n');

  const en = getArticles('en');
  const zh = getArticles('zh');

  patchReadme(README_EN, '## Articles', en.stories, en.guides, 'en');
  patchReadme(README_ZH, '## 📚 文章列表', zh.stories, zh.guides, 'zh');

  console.log('\nDone.');
}

main();
