import matter from 'gray-matter';
import { marked } from 'marked';

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

export function renderMarkdown(content: string): string {
  return marked.parse(content, { async: false }) as string;
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
