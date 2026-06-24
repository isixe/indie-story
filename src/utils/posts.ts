import matter from 'gray-matter';
import { marked } from 'marked';
import { createHighlighter, type Highlighter } from 'shiki';

export interface Post {
  slug: string;
  title: string;
  blogName: string;
  category: 'story' | 'guide';
  tags: string[];
  publishDate: Date;
  updateDate?: Date;
  description?: string;
  sourceUrl?: string;
  author?: string;
  origin?: string;
  content?: string;
  lang?: string;
}

const mdModules = import.meta.glob<{ default: string }>('/src/content/**/*.md', {
  eager: true,
  query: '?raw',
});

const posts: Post[] = Object.entries(mdModules).map(([filepath, mod]) => {
  const parsed = matter(mod.default);
  const data = parsed.data as Record<string, unknown>;

  const langMatch = filepath.match(/\/src\/content\/(zh|en)\//);
  const lang = langMatch ? langMatch[1] : 'zh';

  return {
    slug: data.slug as string,
    title: data.title as string,
    blogName: data.blogName as string,
    category: data.category as 'story' | 'guide',
    tags: (data.tags as string[]) || [],
    publishDate: new Date(data.publishDate as string),
    updateDate: data.updateDate ? new Date(data.updateDate as string) : undefined,
    description: data.description as string | undefined,
    sourceUrl: data.sourceUrl as string | undefined,
    author: data.author as string | undefined,
    origin: data.origin as string | undefined,
    content: parsed.content,
    lang,
  };
});

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fa5-]/g, '')
    .replace(/[\s]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const renderer = new marked.Renderer();
renderer.heading = function ({ text, depth }: { text: string; depth: number }) {
  const slug = slugify(text);
  return `<h${depth} id="${slug}">${text}</h${depth}>`;
};

marked.use({ renderer });

let _highlighter: Highlighter | null = null;
let _highlighterPromise: Promise<Highlighter> | null = null;

async function getShikiHighlighter(): Promise<Highlighter> {
  if (_highlighter) return _highlighter;
  if (!_highlighterPromise) {
    _highlighterPromise = createHighlighter({
      themes: ['one-dark-pro'],
      langs: [
        'javascript', 'typescript', 'jsx', 'tsx',
        'python', 'bash', 'sh', 'shell', 'zsh',
        'json', 'yaml', 'toml',
        'html', 'css', 'scss',
        'md', 'markdown',
        'sql',
        'rust', 'go', 'java', 'c', 'cpp',
        'ruby', 'php',
        'diff',
        'dockerfile', 'git-commit',
        'plaintext', 'text',
      ],
    });
  }
  _highlighter = await _highlighterPromise;
  return _highlighter;
}

const ENTITY_MAP: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#x60;': '`',
};
const ENTITY_RE = /&(?:amp|lt|gt|quot|#39|#x60);/g;

function decodeHtmlEntities(text: string): string {
  return text.replace(ENTITY_RE, (m) => ENTITY_MAP[m] ?? m);
}

export async function renderMarkdown(content: string): Promise<string> {
  const html = marked.parse(content, { async: false }) as string;

  const hl = await getShikiHighlighter();

  return html.replace(
    /<pre><code(?: class="language-([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g,
    (_match, lang: string | undefined, code: string) => {
      const decoded = decodeHtmlEntities(code);
      const language = lang || 'plaintext';
      try {
        return hl.codeToHtml(decoded, { lang: language, theme: 'one-dark-pro' });
      } catch {
        return hl.codeToHtml(decoded, { lang: 'plaintext', theme: 'one-dark-pro' });
      }
    },
  );
}

export interface Heading {
  level: number;
  text: string;
  slug: string;
}

export function extractHeadings(markdown: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim().replace(/[`*_~]/g, '');
    const slug = slugify(text);
    headings.push({ level, text, slug });
  }
  return headings;
}

export function getPostsByLang(lang: string): Post[] {
  return posts
    .filter((p) => p.lang === lang)
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

export function getPostsByCategory(category: 'story' | 'guide', lang?: string): Post[] {
  return posts
    .filter((post) => post.category === category && (!lang || post.lang === lang))
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

export function getPostBySlug(slug: string, lang?: string): Post | undefined {
  return posts.find((post) => post.slug === slug && (!lang || post.lang === lang));
}

export function getAdjacentPosts(
  slug: string,
  lang: string,
  category: 'story' | 'guide'
): { prev: Post | null; next: Post | null } {
  const categoryPosts = getPostsByCategory(category, lang);
  const currentIndex = categoryPosts.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) return { prev: null, next: null };

  // categoryPosts is sorted descending by publishDate (newest first)
  // prev = older (index+1), next = newer (index-1)
  return {
    prev: currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : null,
    next: currentIndex > 0 ? categoryPosts[currentIndex - 1] : null,
  };
}

export function getPostsByPage(
  page: number,
  pageSize: number = 20
): { posts: Post[]; totalPages: number; currentPage: number } {
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / pageSize);
  const start = (page - 1) * pageSize;
  return {
    posts: allPosts.slice(start, start + pageSize),
    totalPages,
    currentPage: page,
  };
}

export function getPostsByCategoryAndPage(
  category: 'story' | 'guide',
  page: number,
  pageSize: number = 20,
  lang?: string
): { posts: Post[]; totalPages: number; currentPage: number } {
  const categoryPosts = getPostsByCategory(category, lang);
  const totalPages = Math.ceil(categoryPosts.length / pageSize);
  const start = (page - 1) * pageSize;

  return {
    posts: categoryPosts.slice(start, start + pageSize),
    totalPages,
    currentPage: page,
  };
}

export function getLastUpdateTime(locale: string = 'zh-CN'): string {
  const allPosts = getAllPosts();
  if (allPosts.length === 0) return '';

  const latestPost = allPosts[0];
  const date = latestPost.updateDate || latestPost.publishDate;
  return date.toLocaleString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatDate(date: Date, locale: string = 'zh-CN'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function formatDateTime(date: Date, locale: string = 'zh-CN'): string {
  return date.toLocaleString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}
