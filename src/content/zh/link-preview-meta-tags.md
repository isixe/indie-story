---
slug: 'link-preview-meta-tags'
title: '链接预览元标签'
blogName: 'Get out of my <head>'
author: 'shadowfaxrodeo'
origin: 'https://getoutofmyhead.dev/link-preview-meta-tags/'
category: 'guide'
tags: ['元标签', '链接预览', 'Open Graph', 'SEO', '社交媒体', 'Web 开发']
publishDate: '2022-08-14'
description: '全面对比各类链接预览元标签系统 — Open Graph、Twitter Cards、oEmbed、Schema.org — 并在所有主流社交媒体和即时通讯应用中进行测试，找出最高效的组合。'
---

社交媒体对你的心理健康、隐私、民主——以及网站的性能，都没有好处。

浏览大多数网站的源代码，看看 `<head>` 标签之间，你很可能会看到一堆像这样的元标签：

```html
<title>Meta Tags — Preview, Edit and Generate</title>
<meta name="title" content="Meta Tags — Preview, Edit and Generate">
<meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">

<meta property="og:type" content="website">
<meta property="og:url" content="https://metatags.io/">
<meta property="og:title" content="Meta Tags — Preview, Edit and Generate">
<meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://metatags.io/">
<meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate">
<meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
<meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
```

这些标签的目的是告诉即时通讯和社交媒体应用如何显示**链接预览**。

链接预览让人们在不点击链接之前就能了解其内容。它们显示 URL 的 `title`、`description`，有时还有 `image`。

以下是在 iMessage 中显示链接预览的示例：

![iMessage 链接预览示例](/content/link-preview-meta-tags/link-preview-example.png)

## 如何创建链接预览

有四种流行的链接预览系统：

- [Facebook 的 Open Graph](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [oEmbed](https://oembed.com/)
- [Schema.org](https://schema.org/docs/documents.html)

这些系统也有多种实现方式。（见下表）

所有这些系统都涉及在你的页面 `<head>` 标签之间放置代码片段。

添加这些代码片段有助于 Facebook、Twitter 和其他应用运行的机器人构建你网站的链接预览。

但是，这些代码也会拖慢你网站所有**人类**访问者的加载速度——而且许多网站会同时实现三四种方法。

你也可以完全不使用这些标签——这完全没问题。

但假设你希望网站的链接预览能够正常显示——**那么这些标签的最高效组合是什么？**

这正是世界需要知道的——所以我构建了[链接预览测试工具](https://getoutofmyhead.dev/link-preview-tester)。它可能是有人构建过的最无聊的工具——但我真的希望它能帮到一些人！

## 哪些元标签在哪些应用上有效？

下表展示了在一些最流行的社交媒体和即时通讯应用上使用链接预览测试工具的结果。

它显示了哪些 `<meta>` 标签能在哪些应用上显示链接预览。

![各应用的元数据预览情况](/content/link-preview-meta-tags/app-metadata-previews.png)

说明：
1. 仅适用于 `meta description` 标签
2. 不显示缩略图、照片或视频
3. 需要非标准的 `description` 或 `image` 键
4. 仅使用 `<title>` 标签

## Open Graph 标签明显胜出

我原本希望能发现某个开源方案——`schema.org` 或 `oEmbed`——能在足够多的应用上良好运行，从而让我推荐它们。

但结果看来，Facebook 的 Open Graph 标签明显胜出。

同样是上面的例子，但只保留必要的标签：

```html
<title>Meta Tags — Preview, Edit and Generate</title>
<meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">

<meta property="og:type" content="website">
<meta property="og:url" content="https://metatags.io/">
<meta property="og:title" content="Meta Tags — Preview, Edit and Generate">
<meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
```

### 如果我不想让 Facebook 或 Twitter 的专有元标签污染我心爱的网站怎么办？

Facebook 和 Twitter 本质上就是邪恶的——所以如果你不想使用它们的标签，这是可以理解的。

你可以像这个网站一样，只使用一个 `meta description` 标签，并学会接受网站链接预览中没有图片的事实……

```html
<title>Get out of my &lt;head&gt;</title>
<meta name="description" content="An incredible website for testing meta tags">
```

……或者，你可以组合使用 `meta description`、`Schema.org microdata` 和 `oEmbed JSON`——这个组合能在最多的应用上生效，且无需使用专有标签。

```html
<head lang="en" itemscope itemtype="https://schema.org/WebPage">
    <title>Link Preview Test | Title Tag</title>

    <meta name="description" content="Test Description | Meta Description — This description came from the meta description tag"/>

    <meta itemprop="name" content="Test Title | Schema.org Microdata Title"/>
    <meta itemprop="description" content="Test Description | Schema.org Microdata — This description came from Microdata using Schema.org Schema"/>
    <meta itemprop="image" content="/previews/microdata.png"/>

    <link rel="alternate" type="application/json+oembed" href="https://getoutofmyhead.dev/oembed_link.json" title="Test Title | oEmbed JSON Title Attribute"/>
</head>
```
