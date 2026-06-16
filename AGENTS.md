# Indie Story

Static bilingual blog built with **Astro 5** + **React 19** + **Tailwind CSS 4** + **TypeScript (strict)**. Collects indie developer stories/guides in zh and en.

## Quick start

```bash
npm run dev       # astro dev (localhost:4321)
npm run build     # astro build → dist/
npm run preview   # astro preview
```

No lint/formatter config exists. No test runner.

## Architecture

### Dual route system (critical for any route work)

The site has TWO sets of pages serving the same content:

| Path                            | Language | Source                                              |
| ------------------------------- | -------- | --------------------------------------------------- |
| `/`                             | zh       | `src/pages/index.astro`                             |
| `/zh/...`                       | zh       | `src/pages/[lang]/...` (dynamic)                    |
| `/en/...`                       | en       | `src/pages/[lang]/...` (dynamic)                    |
| `/about`, `/stories`, `/guides` | zh       | root `about.astro`, `stories.astro`, `guides.astro` |

- Root routes (`/about`, `/stories`, `/guides`) are hardcoded to zh — they exist so `/about` works without `/zh/about`.
- All routes under `[lang]/` generate for both `zh` and `en` via `getStaticPaths()`.
- When adding/editing pages, check BOTH the root file AND the `[lang]/` version. They are NOT automatically in sync.

### Content

Markdown files in `src/content/{zh,en}/` with frontmatter:

```yaml
slug: 'story-100'
title: '...'
blogName: '...'
category: 'story' | 'guide'
tags: [...]
publishDate: 'YYYY-MM-DD'
description: '...'
```

- Parsed eagerly via `import.meta.glob` with `gray-matter` (frontmatter) + `marked` (rendering).
- `src/utils/posts.ts` exports query helpers: `getPostsByLang()`, `getPostsByCategory()`, `getPostBySlug()`, pagination functions.
- `renderMarkdown()` uses `marked` with a custom heading renderer that adds slug IDs for TOC linking.
- Language is inferred from file path (`/zh/` or `/en/` in path).

### i18n

Custom key-based system in `src/i18n/`:

```ts
import { t, getLangFromPath, type Lang } from '../i18n'
t(lang, 'nav.stories')           // simple key
t(lang, 'page', { current: 1 })  // with {param} interpolation
```

- Interface: `getLangFromPath(pathname)` returns `'en'` if path starts with `/en`, else `'zh'`.
- `getAlternateLangPath(pathname)` computes the opposite language's URL.
- All translation keys are defined in `zh.ts` (source of truth for shape) and `en.ts` (mirror).

### React components (client:load)

Two components use React (hydrated client-side):
- **`PostListWithToggle.tsx`** — post list with grid/list layout toggle (persisted in localStorage).
- **`LanguageToggle.tsx`** — language switcher link.

Both use `client:load` directive. SSR renders a default state before JS hydrates.

### Styling

- **Tailwind CSS 4** via `@tailwindcss/vite` plugin. No `tailwind.config.*` — uses CSS-first config.
- **Custom CSS tokens** in `src/styles/global.css` via CSS custom properties (`--color-bg`, `--color-text`, `--space-*`, `--content-max-width`, etc.).
- Design: warm paper aesthetic (`#faf9f6` background), serif/sans-serif font pairing.
- Chinese font: LXGW WenKai from npm package `@chinese-fonts/lxgwwenkai`.
- Google Fonts: Playfair Display (headings), Noto Serif SC (Chinese serif), Inter (sans).

### Feature: Ink ripple effect

Layout.astro has a global `<script is:inline>` that creates ink-wash click ripples. Styled with `ink-ripple` CSS class. Respects `prefers-reduced-motion`.

### Feature: Article TOC

Post detail pages (`[lang]/post/[slug].astro`) extract h2/h3 headings from markdown and render a sticky sidebar TOC with scroll-spy active state (vanilla JS with requestAnimationFrame throttling). CSS responsive: hidden below 1024px.

### Pagination

Page size = 20. Page 1 is always the index page. Pages 2+ use `page/{n}` route. `Pagination.astro` handles prev/next links with disabled states.

## Common operations

- **Add a new page**: Create both `src/pages/[lang]/<name>.astro` (with `getStaticPaths()` for zh/en) AND `src/pages/<name>.astro` (with hardcoded `lang='zh'`).
- **Add a translation key**: Add to both `src/i18n/zh.ts` and `src/i18n/en.ts` at matching paths.
- **Add a content file**: Place `.md` in `src/content/{zh,en}/` with frontmatter. No build step needed — glob picks it up automatically.
- **Regenerate placeholders**: `node scripts/generate-placeholders.cjs`

## Build/deploy

- Static output (`output: 'static'` in astro.config.mjs). All HTML generated at build time.
- Site URL in RSS: `https://indie-story.dev`
