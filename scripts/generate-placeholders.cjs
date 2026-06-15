const fs = require('fs');
const path = require('path');

const zhDir = path.join(__dirname, '..', 'src', 'content', 'zh');
const enDir = path.join(__dirname, '..', 'src', 'content', 'en');

function fm(slug, title, blog, category, tags, publishDate, description) {
  return `---
slug: '${slug}'
title: '${title}'
blogName: '${blog}'
category: '${category}'
tags: [${tags.map(t => `'${t}'`).join(', ')}]
publishDate: '${publishDate}'
description: '${description}'
---`;
}

const zhStories = [
  { slug: 'story-100', title: '我的第一个付费用户', blog: '独立开发者博客 1' },
  { slug: 'story-101', title: '从副业到主业的180天', blog: '独立开发者博客 2' },
  { slug: 'story-102', title: '独立开发者的孤独与自由', blog: '独立开发者博客 3' },
  { slug: 'story-103', title: '如何找到你的第一个产品想法', blog: '独立开发者博客 4' },
  { slug: 'story-104', title: '我在Product Hunt发布产品的经历', blog: '独立开发者博客 5' },
  { slug: 'story-105', title: '远程工作一年后，我决定独立开发', blog: '独立开发者博客 6' },
  { slug: 'story-106', title: '我的产品被大厂抄袭了', blog: '独立开发者博客 7' },
  { slug: 'story-107', title: '从程序员到独立开发者的转型之路', blog: '独立开发者博客 8' },
  { slug: 'story-108', title: '独立开发：一场与时间的赛跑', blog: '独立开发者博客 9' },
  { slug: 'story-109', title: '我的第一个月收入过万的月份', blog: '独立开发者博客 10' },
  { slug: 'story-110', title: '独立开发者的日常：代码、咖啡和焦虑', blog: '独立开发者博客 11' },
  { slug: 'story-111', title: '如何在没有预算的情况下推广产品', blog: '独立开发者博客 12' },
  { slug: 'story-112', title: '我放弃高薪工作，选择独立开发', blog: '独立开发者博客 13' },
  { slug: 'story-113', title: '独立开发者的工具箱分享', blog: '独立开发者博客 14' },
  { slug: 'story-114', title: '我的产品被知名博主推荐了', blog: '独立开发者博客 15' },
];

const zhGuides = [
  { slug: 'guide-115', title: '如何写出好的产品介绍页', blog: '实用指南 1' },
  { slug: 'guide-116', title: '独立开发者的法律必修课', blog: '实用指南 2' },
  { slug: 'guide-117', title: 'Google Play上架避坑指南', blog: '实用指南 3' },
  { slug: 'guide-118', title: '如何为你的产品定价', blog: '实用指南 4' },
  { slug: 'guide-119', title: '独立开发者的邮件营销指南', blog: '实用指南 5' },
  { slug: 'guide-120', title: '如何使用社交媒体推广产品', blog: '实用指南 6' },
  { slug: 'guide-121', title: '独立开发者的财务管理入门', blog: '实用指南 7' },
  { slug: 'guide-122', title: '如何写一份好的隐私政策', blog: '实用指南 8' },
  { slug: 'guide-123', title: '用户反馈收集与处理方法', blog: '实用指南 9' },
  { slug: 'guide-124', title: '独立开发者的效率工具推荐', blog: '实用指南 10' },
  { slug: 'guide-125', title: '如何设计一个好的产品Logo', blog: '实用指南 11' },
  { slug: 'guide-126', title: '独立开发者的客户服务指南', blog: '实用指南 12' },
  { slug: 'guide-127', title: '如何分析竞品并找到差异化', blog: '实用指南 13' },
  { slug: 'guide-128', title: '独立开发者的内容营销策略', blog: '实用指南 14' },
  { slug: 'guide-129', title: '如何建立用户社区', blog: '实用指南 15' },
];

const enStories = [
  { slug: 'story-100', title: 'My First Paying User', blog: 'Indie Dev Blog 1' },
  { slug: 'story-101', title: '180 Days from Side Project to Main Income', blog: 'Indie Dev Blog 2' },
  { slug: 'story-102', title: 'The Loneliness and Freedom of Indie Development', blog: 'Indie Dev Blog 3' },
  { slug: 'story-103', title: 'How to Find Your First Product Idea', blog: 'Indie Dev Blog 4' },
  { slug: 'story-104', title: 'My Experience Launching on Product Hunt', blog: 'Indie Dev Blog 5' },
  { slug: 'story-105', title: 'After a Year of Remote Work, I Went Indie', blog: 'Indie Dev Blog 6' },
  { slug: 'story-106', title: 'My Product Got Cloned by a Big Company', blog: 'Indie Dev Blog 7' },
  { slug: 'story-107', title: 'From Programmer to Indie Developer', blog: 'Indie Dev Blog 8' },
  { slug: 'story-108', title: 'Indie Development: A Race Against Time', blog: 'Indie Dev Blog 9' },
  { slug: 'story-109', title: 'My First Month Breaking $10k', blog: 'Indie Dev Blog 10' },
  { slug: 'story-110', title: "An Indie Dev's Daily: Code, Coffee, and Anxiety", blog: 'Indie Dev Blog 11' },
  { slug: 'story-111', title: 'How to Promote Your Product with Zero Budget', blog: 'Indie Dev Blog 12' },
  { slug: 'story-112', title: 'I Left My High-Paying Job for Indie Dev', blog: 'Indie Dev Blog 13' },
  { slug: 'story-113', title: "An Indie Dev's Toolbox", blog: 'Indie Dev Blog 14' },
  { slug: 'story-114', title: 'My Product Got Featured by a Famous Blogger', blog: 'Indie Dev Blog 15' },
];

const enGuides = [
  { slug: 'guide-115', title: 'How to Write a Great Product Landing Page', blog: 'Practical Guide 1' },
  { slug: 'guide-116', title: 'Legal Essentials for Indie Developers', blog: 'Practical Guide 2' },
  { slug: 'guide-117', title: 'Google Play Launch Survival Guide', blog: 'Practical Guide 3' },
  { slug: 'guide-118', title: 'How to Price Your Product', blog: 'Practical Guide 4' },
  { slug: 'guide-119', title: 'Email Marketing Guide for Indie Devs', blog: 'Practical Guide 5' },
  { slug: 'guide-120', title: 'How to Promote Your Product on Social Media', blog: 'Practical Guide 6' },
  { slug: 'guide-121', title: 'Financial Management 101 for Indie Developers', blog: 'Practical Guide 7' },
  { slug: 'guide-122', title: 'How to Write a Good Privacy Policy', blog: 'Practical Guide 8' },
  { slug: 'guide-123', title: 'User Feedback Collection and Processing', blog: 'Practical Guide 9' },
  { slug: 'guide-124', title: 'Productivity Tools for Indie Developers', blog: 'Practical Guide 10' },
  { slug: 'guide-125', title: 'How to Design a Great Product Logo', blog: 'Practical Guide 11' },
  { slug: 'guide-126', title: 'Customer Service Guide for Indie Developers', blog: 'Practical Guide 12' },
  { slug: 'guide-127', title: 'How to Analyze Competitors and Find Differentiation', blog: 'Practical Guide 13' },
  { slug: 'guide-128', title: 'Content Marketing Strategy for Indie Developers', blog: 'Practical Guide 14' },
  { slug: 'guide-129', title: 'How to Build a User Community', blog: 'Practical Guide 15' },
];

// Write zh stories
zhStories.forEach((a, i) => {
  const date = new Date(2024, 4, 20 - i);
  const dateStr = date.toISOString().split('T')[0];
  const content = `${fm(a.slug, a.title, a.blog, 'story', ['独立开发', '经验分享'], dateStr, a.title)}\n\n# ${a.title}\n\n这是一篇关于${a.title}的文章。\n\n## 正文\n\n文章内容正在撰写中...`;
  fs.writeFileSync(path.join(zhDir, `${a.slug}.md`), content, 'utf-8');
});

// Write zh guides
zhGuides.forEach((a, i) => {
  const date = new Date(2024, 4, 15 - i);
  const dateStr = date.toISOString().split('T')[0];
  const content = `${fm(a.slug, a.title, a.blog, 'guide', ['指南', '教程'], dateStr, a.title)}\n\n# ${a.title}\n\n这是一篇关于${a.title}的指南。\n\n## 正文\n\n文章内容正在撰写中...`;
  fs.writeFileSync(path.join(zhDir, `${a.slug}.md`), content, 'utf-8');
});

// Write en stories
enStories.forEach((a, i) => {
  const date = new Date(2024, 4, 20 - i);
  const dateStr = date.toISOString().split('T')[0];
  const content = `${fm(a.slug, a.title, a.blog, 'story', ['indie dev', 'experience'], dateStr, a.title)}\n\n# ${a.title}\n\nThis is an article about ${a.title}.\n\n## Content\n\nArticle content is being written...`;
  fs.writeFileSync(path.join(enDir, `${a.slug}.md`), content, 'utf-8');
});

// Write en guides
enGuides.forEach((a, i) => {
  const date = new Date(2024, 4, 15 - i);
  const dateStr = date.toISOString().split('T')[0];
  const content = `${fm(a.slug, a.title, a.blog, 'guide', ['guide', 'tutorial'], dateStr, a.title)}\n\n# ${a.title}\n\nThis is a guide about ${a.title}.\n\n## Content\n\nArticle content is being written...`;
  fs.writeFileSync(path.join(enDir, `${a.slug}.md`), content, 'utf-8');
});

console.log('Generated all 60 placeholder files!');
