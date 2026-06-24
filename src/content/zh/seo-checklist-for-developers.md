---
slug: 'seo-checklist-for-developers'
title: '2025 年开发者必备 SEO 检查清单'
blogName: 'DEV Community'
author: 'Sohail SJ | TheZenLabs'
origin: 'https://dev.to/thesohailjafri/the-must-have-seo-checklist-for-developers-192i/'
category: 'guide'
tags: ['SEO', 'Next.js', 'Web Development', 'Checklist', 'Performance']
publishDate: '2024-12-29'
description: '一份全面的开发者 SEO 检查清单，涵盖元数据、URL 结构、内容优化、Core Web Vitals、图片优化、Schema 标记、Open Graph 等——专为 Next.js 应用量身定制。'
---

最近我一直在做一些 SEO 相关的项目，我想分享一些我在 Next.js 开发过程中学到的最佳实践和策略。

---

## 2025 年 Next.js SEO 检查清单

- [2025 年 Next.js SEO 检查清单](#2025-年-nextjs-seo-检查清单)
  - [1. 优化元数据](#1-优化元数据)
  - [2. URL 结构与路由](#2-url-结构与路由)
  - [3. 内容优化](#3-内容优化)
  - [4. 页面速度与 Core Web Vitals](#4-页面速度与-core-web-vitals)
  - [5. 图片优化](#5-图片优化)
  - [6. 移动端友好性](#6-移动端友好性)
  - [7. Sitemap、Robots.txt 与 Favicon](#7-sitemaprobotstxt-与-favicon)
    - [Sitemap](#sitemap)
    - [Robots.txt](#robotstxt)
    - [Favicon](#favicon)
  - [8. 内部链接](#8-内部链接)
  - [9. 服务端渲染 (SSR) 与静态站点生成 (SSG)](#9-服务端渲染-ssr-与静态站点生成-ssg)
  - [10. Schema 标记](#10-schema-标记)
  - [11. Canonical 标签与避免重复内容](#11-canonical-标签与避免重复内容)
  - [12. Open Graph 与 Twitter 卡片](#12-open-graph-与-twitter-卡片)
  - [13. 错误处理](#13-错误处理)
  - [14. 语义化 HTML](#14-语义化-html)
  - [15. 性能优化](#15-性能优化)
  - [16. 分析与监控](#16-分析与监控)
  - [17. 2025 年通用 SEO 最佳实践](#17-2025-年通用-seo-最佳实践)

---

### 1. 优化元数据

- 使用 `next/head` 组件来添加元数据，如标题、描述和 canonical 标签（[Next.js Head 文档](https://nextjs.org/docs/api-reference/next/head)）。
- 优化元数据对 SEO 至关重要，它可以提高点击率，为搜索引擎提供页面上下文信息，并帮助相关内容在搜索结果中获得更高排名。

**Pages Router 示例：**

```tsx
import Head from 'next/head'

export default function Page() {
  return (
    <Head>
      <title>页面标题</title>
      <meta name="description" content="页面描述" />
      <link rel="canonical" href="https://example.com/page" />
    </Head>
  )
}
```

**App Router 示例：**

```tsx
export const metadata = {
  title: '页面标题',
  description: '页面描述',
}
```

---

### 2. URL 结构与路由

- 使用简洁、描述性强且层次分明的 URL（例如 `/blog/seo-checklist`，而不是 `/blog?id=123`）。
- 简洁的 URL 更易于阅读和记忆，能改善用户体验，同时帮助搜索引擎更有效地理解网站结构，提高可发现性。
- 使用 Next.js 的动态路由获得更好的 URL 控制（[动态路由指南](https://nextjs.org/docs/routing/dynamic-routes)）。
- 避免 URL 嵌套过深，保持用户友好性。

```
# 良好 URL 结构
| root
|--- app
|------ blog
|--------- seo-checklist

# 糟糕 URL 结构
| root
|--- app
|------ blog
|--------- 2022
|------------ 01
|--------------- 01
|------------------ seo-checklist
```

---

### 3. 内容优化

- 研究关键词并将其自然地融入内容中（[Google 关键词规划工具](https://ads.google.com/home/tools/keyword-planner/)）。
- 避免关键词堆砌，专注于提供价值。关键词密度保持在总内容的 **1-3%** 范围内。
- 定期更新内容以保持新鲜度和相关性。

---

### 4. 页面速度与 Core Web Vitals

- 使用 Lighthouse 或 PageSpeed Insights 等工具监控并改善 LCP、FID 和 CLS 等指标（[Google PageSpeed Insights](https://pagespeed.web.dev/)）。

![Google PageSpeed Insights](/content/seo-checklist-for-developers/pagespeed-insights.png)
- 优化字体，使用预加载，避免大的布局偏移。阅读更多关于[优化字体和图片](https://nextjs.org/learn/dashboard-app/optimizing-fonts-images)的内容。
- 使用 [WebPageTest](https://www.webpagetest.org/) 等工具分析性能并识别瓶颈。

---

### 5. 图片优化

- 使用 Next.js 的 `Image` 组件实现自动图片优化（[Image 组件文档](https://nextjs.org/docs/api-reference/next/image)）。
- 提供响应式图片，配合适当的 `sizes` 和 `srcSet` 属性。
- 添加描述性的 `alt` 文本，以提升可访问性和图片 SEO（[W3C 无障碍指南](https://www.w3.org/WAI/tutorials/images/alt/)）。

---

### 6. 移动端友好性

- 采用响应式设计原则（[响应式网页设计](https://blog.froont.com/9-basic-principles-of-responsive-web-design/)）。
- 使用 Google 的移动端友好测试工具测试页面（[移动端友好测试](https://search.google.com/test/mobile-friendly)）。
- 确保内容在移动设备上易于访问和阅读，因为平均超过 70% 的流量来自移动设备。

---

### 7. Sitemap、Robots.txt 与 Favicon

#### Sitemap

- Sitemap 列出了你网站上的所有 URL，帮助搜索引擎更高效地发现和索引你的内容。
- 创建 XML Sitemap 并提交给 Google 等搜索引擎（[Google Search Console Sitemap 提交](https://support.google.com/webmasters/answer/183668?hl=en)）。

**通过 `next-sitemap` NPM 包生成 Sitemap 的视频：**

[![Sitemap 生成](/content/seo-checklist-for-developers/sitemap-generation.jpg)](https://youtu.be/-C_dLFcYGu4)

**为 CMS/数据库数据生成动态 Sitemap 的视频：**

[![CMS 数据动态 Sitemap](/content/seo-checklist-for-developers/dynamic-sitemap.jpg)](https://youtu.be/8tn8w-UR5N8)

#### Robots.txt

- `robots.txt` 文件告诉搜索引擎爬虫可以或不可以请求你网站上的哪些页面或文件。拥有结构良好的 `robots.txt` 文件对引导搜索引擎爬虫非常重要。
- 配置 `robots.txt` 文件以引导搜索引擎爬虫（[Robots.txt 指南](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt)）。

#### Favicon

- 添加 Favicon 以提升用户体验和品牌形象。使用 [Favicon IO](https://favicon.io/) 或 [Real Favicon Generator](https://realfavicongenerator.net/) 等工具生成不同尺寸和格式的 favicon 以及 `manifest.json` 文件。

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
```

---

### 8. 内部链接

- 为内部链接使用有意义的锚文本。
- 定期审计网站，避免死链（[死链检查工具](https://www.deadlinkchecker.com/)）。
- 实现面包屑导航以改善导航和 SEO（[面包屑 Schema 指南](https://schema.org/BreadcrumbList)）。

> **专业建议**：在项目中使用 linkMap 管理内部链接。这是一个简单的键值对对象，用于在一个地方管理所有内部链接，更新时会自动反映到整个项目中。

```js
// linkMap.js
export const linkMap = {
  home: '/',
  about: '/about',
  services: '/services',
  contact: '/contact',
}
```

---

### 9. 服务端渲染 (SSR) 与静态站点生成 (SSG)

- 根据内容需求选择合适的渲染方式（`getServerSideProps`、`getStaticProps` 或 `ISR`）（[Next.js 数据获取](https://nextjs.org/docs/basic-features/data-fetching)）。
- 对于频繁变化的动态内容使用 SSR。
- 对于静态或半静态内容的页面，使用 SSG 或 ISR 以获得更好的性能和 SEO。

**App Router SSR 与 SSG 的视频：**

[![App Router SSR 与 SSG](/content/seo-checklist-for-developers/app-router-ssr-ssg.jpg)](https://youtu.be/vlJjjMnRxTA)

**Page Router SSR 与 SSG 的视频：**

[![Page Router SSR 与 SSG](/content/seo-checklist-for-developers/page-router-ssr-ssg.jpg)](https://youtu.be/KNjayAp6yn4)

---

### 10. Schema 标记

- 使用 JSON-LD 格式添加结构化数据以获得丰富结果（[Google 结构化数据测试工具](https://search.google.com/test/rich-results)）。
- 根据内容类型包含相应的 Schema，如 `Breadcrumb`、`Article`、`Product` 或 `FAQ`（[Schema.org 文档](https://schema.org/)）。
- 使用 `next-seo` 或 `schema-dts` 等 NPM 包简化 Schema 实现。

---

### 11. Canonical 标签与避免重复内容

- Canonical 标签是一种元标签，告诉搜索引擎哪个 URL 版本应被视为主要版本。这有助于防止重复内容问题。
- 例如，你的首页可以通过多个 URL 访问，如 `https://example.com`、`https://example.com/index.html`、`https://example.com/home` 等。使用 canonical 标签告诉搜索引擎 `https://example.com` 是首选 URL。
- 根据当前路由在 `<head>` 部分动态设置 canonical URL。

```html
<link rel="canonical" href="https://example.com/page" />
```

---

### 12. Open Graph 与 Twitter 卡片

添加 Open Graph 标签（`og:title`、`og:description`、`og:image`）以优化社交分享（[Open Graph 协议](https://ogp.me/)）。

**Pages Router 示例：**

```tsx
import Head from 'next/head'

export default function Page() {
  return (
    <Head>
      <meta property="og:title" content="页面标题" />
      <meta property="og:description" content="页面描述" />
      <meta property="og:image" content="https://example.com/image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://example.com/page" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
```

**App Router 示例：**

```tsx
export const metadata = {
  openGraph: {
    title: '页面标题',
    description: '页面描述',
    images: [
      {
        url: 'https://example.com/image.jpg',
        width: 800,
        height: 600,
        alt: '图片描述',
      },
    ],
    type: 'website',
    url: 'https://example.com/page',
  },
  twitter: {
    card: 'summary_large_image',
    title: '页面标题',
    description: '页面描述',
    images: ['https://example.com/image.jpg'],
  },
}
```

- 添加 Twitter 卡片元数据以优化 Twitter 上的链接预览效果（[Twitter 卡片文档](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary)）。

---

### 13. 错误处理

- 使用 `pages/404.js` 和 `pages/500.js` 创建自定义 404 和 500 页面（[Next.js 错误页面文档](https://nextjs.org/docs/advanced-features/custom-error-page)）。
- 确保这些页面提供有用的信息并引导用户回到可正常浏览的页面。

```js
// pages/404.js
export default function Custom404() {
  return <h1>404 - 页面未找到</h1>
}
```

```js
// pages/500.js
export default function Custom500() {
  return <h1>500 - 服务器端错误</h1>
}
```

---

### 14. 语义化 HTML

- 使用语义化 HTML 元素如 `<header>`、`<nav>`、`<main>`、`<section>`、`<article>`、`<aside>` 和 `<footer>`，以提升可访问性和 SEO。
- 语义化 HTML 帮助搜索引擎理解你的内容结构，并改善残障用户的可访问性。

```html
<!-- 反面示例 -->
<div class="header">
  <div class="nav">
    <ul>
      <li><a href="/">首页</a></li>
      <li><a href="/about">关于</a></li>
    </ul>
  </div>
</div>

<!-- 正面示例 -->
<header>
  <nav>
    <ul>
      <li><a href="/">首页</a></li>
      <li><a href="/about">关于</a></li>
    </ul>
  </nav>
</header>
```

---

### 15. 性能优化

- 使用 CDN 提供静态文件（[Vercel Edge 网络](https://vercel.com/features/infrastructure)）。
- 通过代码分割和 Tree Shaking 最小化和打包 JavaScript（[Webpack 优化指南](https://webpack.js.org/guides/optimization/)）。
- 对图片和组件实现懒加载。
- 启用 `next.config.js` 中的 `compression` 和 `reactStrictMode` 等设置（[Next.js 配置](https://nextjs.org/docs/api-reference/next.config.js/introduction)）。
- 这些设置有助于加快页面加载速度并改善用户体验。

**示例配置：**

```js
// next.config.js
module.exports = {
  reactStrictMode: true,
  compress: true,
  images: {
    domains: ['example.com'],
  },
}
```

---

### 16. 分析与监控

- 集成 Google Analytics 或其他跟踪工具（[Next.js 分析集成](https://nextjs.org/docs/advanced-features/analytics)）。
- 使用 Google Search Console 监控索引状态、搜索表现和错误（[Search Console 指南](https://search.google.com/search-console/about)）。
- 这些工具有助于监控用户行为并识别 SEO 改进的潜在领域，如高跳出率或表现不佳的页面。

**轻量级替代方案：**
- [UMAMI](https://umami.is/) — 一个简单易用、可自托管的分析工具。
- [Google Web Master Tools](https://www.google.com/webmasters/tools/home) — Google Search Console 是 Google 提供的免费服务，可帮助你监控和维护网站在 Google 搜索结果中的表现。

我个人更喜欢在我的个人项目中使用 Umami + Google Web Master Tools，例如 [Chakra Framer](https://chakraframer.com/)。

---

### 17. 2025 年通用 SEO 最佳实践

- **关注搜索意图**：理解并满足用户的需求和查询。让你的内容与受众搜索的问题和需求保持一致。
- **语音搜索优化**：通过在页面中加入结构化 FAQ 和直接答案，优化长尾和对话式查询。
- **SEO 的 A/B 测试**：定期对元描述、标题或内容变体进行 [A/B 测试](https://posthog.com/tutorials/nextjs-ab-tests)，以确定哪些内容最能引起用户共鸣并带来流量。

希望这些技巧能帮助你构建下一个十亿美元的应用。编码愉快！
