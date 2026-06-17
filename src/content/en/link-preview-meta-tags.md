---
slug: 'link-preview-meta-tags'
title: 'Link Preview Meta Tags'
blogName: 'Get out of my <head>'
author: 'shadowfaxrodeo'
origin: 'https://getoutofmyhead.dev/link-preview-meta-tags/'
category: 'guide'
tags: ['meta tags', 'link preview', 'Open Graph', 'SEO', 'social media', 'web development']
publishDate: '2022-08-14'
description: 'A comprehensive comparison of every link preview meta tag system — Open Graph, Twitter Cards, oEmbed, Schema.org — tested across all major social media and messaging apps to find the most effective combination.'
---

Social media is bad for your mental health, your privacy, your democracy — and for the performance of your website.

Peek at the source code of most websites, look between the `<head>` tags, and you're likely to see a bunch of meta tags like this:

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

The purpose of these tags is to tell messaging and social media apps how to display **link previews**.

Link previews let people know about a link before they click on it. They display a URL's `title`, `description`, and sometimes an `image`.

Here's an example of a link preview being displayed in iMessage:

![iMessage link preview example](/content/link-preview-meta-tags/link-preview-example.png)

## How to create link previews

There are four popular systems for creating link previews:

- [Facebook's Open Graph](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [oEmbed](https://oembed.com/)
- [Schema.org](https://schema.org/docs/documents.html)

These systems also have more than one way of being implemented. (See the table below)

All these systems involve placing code snippets between the `<head>` tags of your page.

Adding these code snippets helps bots run by Facebook, Twitter, and other apps, build link previews of your site.

But, this code also weighs down your website for all your **human** visitors — and many websites implement three or four of these methods.

You could just not have any of these tags — that's fine.

But assuming you want link previews of your website to be displayed — **what is the most effective combination of these tags?**

That's something the world needed to know — so I built [link preview tester](https://getoutofmyhead.dev/link-preview-tester). It's probably the most boring tool anyone has ever made — and I really hope someone finds it helpful!

## Which meta tags work on which apps?

The following table shows the results of using the link preview tester on some of the most popular social media and messaging apps.

It shows which `<meta>` tags display link previews on which apps.

![metadata previews on which apps](/content/link-preview-meta-tags/app-metadata-previews.png)

Notes:
1. Only works with a `meta description` tag
2. Doesn't show thumbnail, photo, or video
3. Requires a non-spec `description` or `image` key
4. Only uses the `<title>` tag

## Open Graph tags are the clear winner

I was hoping to discover that one of the open source methods — `schema.org` or `oEmbed` worked well on enough of these apps that I could recommend them.

But it seems the clear winner is Facebook's Open Graph tags.

The same example as above, but with only the essential tags:

```html
<title>Meta Tags — Preview, Edit and Generate</title>
<meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">

<meta property="og:type" content="website">
<meta property="og:url" content="https://metatags.io/">
<meta property="og:title" content="Meta Tags — Preview, Edit and Generate">
<meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
```

### What if I don't want Facebook or Twitter proprietary meta tags polluting my lovely website?

Facebook and Twitter are basically evil — so it's understandable if you don't want to use their tags.

You could do what this website does, and just use a `meta description` tag, and learn to live with there being no images in your website's link previews...

```html
<title>Get out of my &lt;head&gt;</title>
<meta name="description" content="An incredible website for testing meta tags">
```

...or, you could use a combination of `meta description`, `Schema.org microdata` and `oEmbed JSON` — the combo which will work on the most number of apps, without using proprietary tags.

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
