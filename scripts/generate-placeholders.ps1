# Generate placeholder .md files for zh (30) and en (30)

$zhStories = @(
    @{slug='story-100'; title='我的第一个付费用户'; blog='独立开发者博客 1'; tags=@('独立开发','经验分享'); desc='我的第一个付费用户' },
    @{slug='story-101'; title='从副业到主业的180天'; blog='独立开发者博客 2'; tags=@('独立开发','经验分享'); desc='从副业到主业的180天' },
    @{slug='story-102'; title='独立开发者的孤独与自由'; blog='独立开发者博客 3'; tags=@('独立开发','经验分享'); desc='独立开发者的孤独与自由' },
    @{slug='story-103'; title='如何找到你的第一个产品想法'; blog='独立开发者博客 4'; tags=@('独立开发','经验分享'); desc='如何找到你的第一个产品想法' },
    @{slug='story-104'; title='我在Product Hunt发布产品的经历'; blog='独立开发者博客 5'; tags=@('独立开发','经验分享'); desc='我在Product Hunt发布产品的经历' },
    @{slug='story-105'; title='远程工作一年后，我决定独立开发'; blog='独立开发者博客 6'; tags=@('独立开发','经验分享'); desc='远程工作一年后，我决定独立开发' },
    @{slug='story-106'; title='我的产品被大厂抄袭了'; blog='独立开发者博客 7'; tags=@('独立开发','经验分享'); desc='我的产品被大厂抄袭了' },
    @{slug='story-107'; title='从程序员到独立开发者的转型之路'; blog='独立开发者博客 8'; tags=@('独立开发','经验分享'); desc='从程序员到独立开发者的转型之路' },
    @{slug='story-108'; title='独立开发：一场与时间的赛跑'; blog='独立开发者博客 9'; tags=@('独立开发','经验分享'); desc='独立开发：一场与时间的赛跑' },
    @{slug='story-109'; title='我的第一个月收入过万的月份'; blog='独立开发者博客 10'; tags=@('独立开发','经验分享'); desc='我的第一个月收入过万的月份' },
    @{slug='story-110'; title='独立开发者的日常：代码、咖啡和焦虑'; blog='独立开发者博客 11'; tags=@('独立开发','经验分享'); desc='独立开发者的日常：代码、咖啡和焦虑' },
    @{slug='story-111'; title='如何在没有预算的情况下推广产品'; blog='独立开发者博客 12'; tags=@('独立开发','经验分享'); desc='如何在没有预算的情况下推广产品' },
    @{slug='story-112'; title='我放弃高薪工作，选择独立开发'; blog='独立开发者博客 13'; tags=@('独立开发','经验分享'); desc='我放弃高薪工作，选择独立开发' },
    @{slug='story-113'; title='独立开发者的工具箱分享'; blog='独立开发者博客 14'; tags=@('独立开发','经验分享'); desc='独立开发者的工具箱分享' },
    @{slug='story-114'; title='我的产品被知名博主推荐了'; blog='独立开发者博客 15'; tags=@('独立开发','经验分享'); desc='我的产品被知名博主推荐了' }
)

$zhGuides = @(
    @{slug='guide-115'; title='如何写出好的产品介绍页'; blog='实用指南 1'; tags=@('指南','教程'); desc='如何写出好的产品介绍页' },
    @{slug='guide-116'; title='独立开发者的法律必修课'; blog='实用指南 2'; tags=@('指南','教程'); desc='独立开发者的法律必修课' },
    @{slug='guide-117'; title='Google Play上架避坑指南'; blog='实用指南 3'; tags=@('指南','教程'); desc='Google Play上架避坑指南' },
    @{slug='guide-118'; title='如何为你的产品定价'; blog='实用指南 4'; tags=@('指南','教程'); desc='如何为你的产品定价' },
    @{slug='guide-119'; title='独立开发者的邮件营销指南'; blog='实用指南 5'; tags=@('指南','教程'); desc='独立开发者的邮件营销指南' },
    @{slug='guide-120'; title='如何使用社交媒体推广产品'; blog='实用指南 6'; tags=@('指南','教程'); desc='如何使用社交媒体推广产品' },
    @{slug='guide-121'; title='独立开发者的财务管理入门'; blog='实用指南 7'; tags=@('指南','教程'); desc='独立开发者的财务管理入门' },
    @{slug='guide-122'; title='如何写一份好的隐私政策'; blog='实用指南 8'; tags=@('指南','教程'); desc='如何写一份好的隐私政策' },
    @{slug='guide-123'; title='用户反馈收集与处理方法'; blog='实用指南 9'; tags=@('指南','教程'); desc='用户反馈收集与处理方法' },
    @{slug='guide-124'; title='独立开发者的效率工具推荐'; blog='实用指南 10'; tags=@('指南','教程'); desc='独立开发者的效率工具推荐' },
    @{slug='guide-125'; title='如何设计一个好的产品Logo'; blog='实用指南 11'; tags=@('指南','教程'); desc='如何设计一个好的产品Logo' },
    @{slug='guide-126'; title='独立开发者的客户服务指南'; blog='实用指南 12'; tags=@('指南','教程'); desc='独立开发者的客户服务指南' },
    @{slug='guide-127'; title='如何分析竞品并找到差异化'; blog='实用指南 13'; tags=@('指南','教程'); desc='如何分析竞品并找到差异化' },
    @{slug='guide-128'; title='独立开发者的内容营销策略'; blog='实用指南 14'; tags=@('指南','教程'); desc='独立开发者的内容营销策略' },
    @{slug='guide-129'; title='如何建立用户社区'; blog='实用指南 15'; tags=@('指南','教程'); desc='如何建立用户社区' }
)

$enStories = @(
    @{slug='story-100'; title='My First Paying User'; blog='Indie Dev Blog 1'; tags=@('indie dev','experience'); desc='My First Paying User' },
    @{slug='story-101'; title='180 Days from Side Project to Main Income'; blog='Indie Dev Blog 2'; tags=@('indie dev','experience'); desc='180 Days from Side Project to Main Income' },
    @{slug='story-102'; title='The Loneliness and Freedom of Indie Development'; blog='Indie Dev Blog 3'; tags=@('indie dev','experience'); desc='The Loneliness and Freedom of Indie Development' },
    @{slug='story-103'; title='How to Find Your First Product Idea'; blog='Indie Dev Blog 4'; tags=@('indie dev','experience'); desc='How to Find Your First Product Idea' },
    @{slug='story-104'; title='My Experience Launching on Product Hunt'; blog='Indie Dev Blog 5'; tags=@('indie dev','experience'); desc='My Experience Launching on Product Hunt' },
    @{slug='story-105'; title='After a Year of Remote Work, I Went Indie'; blog='Indie Dev Blog 6'; tags=@('indie dev','experience'); desc='After a Year of Remote Work, I Went Indie' },
    @{slug='story-106'; title='My Product Got Cloned by a Big Company'; blog='Indie Dev Blog 7'; tags=@('indie dev','experience'); desc='My Product Got Cloned by a Big Company' },
    @{slug='story-107'; title='From Programmer to Indie Developer'; blog='Indie Dev Blog 8'; tags=@('indie dev','experience'); desc='From Programmer to Indie Developer' },
    @{slug='story-108'; title='Indie Development: A Race Against Time'; blog='Indie Dev Blog 9'; tags=@('indie dev','experience'); desc='Indie Development: A Race Against Time' },
    @{slug='story-109'; title='My First Month Breaking $10k'; blog='Indie Dev Blog 10'; tags=@('indie dev','experience'); desc='My First Month Breaking $10k' },
    @{slug='story-110'; title='An Indie Dev\'s Daily: Code, Coffee, and Anxiety'; blog='Indie Dev Blog 11'; tags=@('indie dev','experience'); desc='An Indie Dev\'s Daily: Code, Coffee, and Anxiety' },
    @{slug='story-111'; title='How to Promote Your Product with Zero Budget'; blog='Indie Dev Blog 12'; tags=@('indie dev','experience'); desc='How to Promote Your Product with Zero Budget' },
    @{slug='story-112'; title='I Left My High-Paying Job for Indie Dev'; blog='Indie Dev Blog 13'; tags=@('indie dev','experience'); desc='I Left My High-Paying Job for Indie Dev' },
    @{slug='story-113'; title='An Indie Dev\'s Toolbox'; blog='Indie Dev Blog 14'; tags=@('indie dev','experience'); desc='An Indie Dev\'s Toolbox' },
    @{slug='story-114'; title='My Product Got Featured by a Famous Blogger'; blog='Indie Dev Blog 15'; tags=@('indie dev','experience'); desc='My Product Got Featured by a Famous Blogger' }
)

$enGuides = @(
    @{slug='guide-115'; title='How to Write a Great Product Landing Page'; blog='Practical Guide 1'; tags=@('guide','tutorial'); desc='How to Write a Great Product Landing Page' },
    @{slug='guide-116'; title='Legal Essentials for Indie Developers'; blog='Practical Guide 2'; tags=@('guide','tutorial'); desc='Legal Essentials for Indie Developers' },
    @{slug='guide-117'; title='Google Play Launch Survival Guide'; blog='Practical Guide 3'; tags=@('guide','tutorial'); desc='Google Play Launch Survival Guide' },
    @{slug='guide-118'; title='How to Price Your Product'; blog='Practical Guide 4'; tags=@('guide','tutorial'); desc='How to Price Your Product' },
    @{slug='guide-119'; title='Email Marketing Guide for Indie Devs'; blog='Practical Guide 5'; tags=@('guide','tutorial'); desc='Email Marketing Guide for Indie Devs' },
    @{slug='guide-120'; title='How to Promote Your Product on Social Media'; blog='Practical Guide 6'; tags=@('guide','tutorial'); desc='How to Promote Your Product on Social Media' },
    @{slug='guide-121'; title='Financial Management 101 for Indie Developers'; blog='Practical Guide 7'; tags=@('guide','tutorial'); desc='Financial Management 101 for Indie Developers' },
    @{slug='guide-122'; title='How to Write a Good Privacy Policy'; blog='Practical Guide 8'; tags=@('guide','tutorial'); desc='How to Write a Good Privacy Policy' },
    @{slug='guide-123'; title='User Feedback Collection and Processing'; blog='Practical Guide 9'; tags=@('guide','tutorial'); desc='User Feedback Collection and Processing' },
    @{slug='guide-124'; title='Productivity Tools for Indie Developers'; blog='Practical Guide 10'; tags=@('guide','tutorial'); desc='Productivity Tools for Indie Developers' },
    @{slug='guide-125'; title='How to Design a Great Product Logo'; blog='Practical Guide 11'; tags=@('guide','tutorial'); desc='How to Design a Great Product Logo' },
    @{slug='guide-126'; title='Customer Service Guide for Indie Developers'; blog='Practical Guide 12'; tags=@('guide','tutorial'); desc='Customer Service Guide for Indie Developers' },
    @{slug='guide-127'; title='How to Analyze Competitors and Find Differentiation'; blog='Practical Guide 13'; tags=@('guide','tutorial'); desc='How to Analyze Competitors and Find Differentiation' },
    @{slug='guide-128'; title='Content Marketing Strategy for Indie Developers'; blog='Practical Guide 14'; tags=@('guide','tutorial'); desc='Content Marketing Strategy for Indie Developers' },
    @{slug='guide-129'; title='How to Build a User Community'; blog='Practical Guide 15'; tags=@('guide','tutorial'); desc='How to Build a User Community' }
)

function Write-MdFile {
    param($path, $slug, $title, $blog, $category, $tags, $publishDate, $desc, $content)
    
    $tagsStr = "@(" + ($tags | ForEach-Object { "'$_'" }) -join ', ' + ")"
    
    @"
---
slug: '$slug'
title: '$title'
blogName: '$blog'
category: '$category'
tags: $tagsStr
publishDate: '$publishDate'
description: '$desc'
---

$content
"@ | Out-File -FilePath $path -Encoding utf8
}

$baseDir = "D:\WorkForm\Git-Workflow\indie-story\src\content"

# Generate zh placeholder stories
$i = 0
$zhStories | ForEach-Object {
    $i++
    $date = Get-Date "2024-05-20"
    $date = $date.AddDays(-($i-1))
    $dateStr = $date.ToString("yyyy-MM-dd")
    Write-MdFile -path "$baseDir\zh\$($_.slug).md" -slug $_.slug -title $_.title -blog $_.blog -category 'story' -tags $_.tags -publishDate $dateStr -desc $_.desc -content "# $($_.title)`n`n这是一篇关于$($_.title)的文章。`n`n## 正文`n`n文章内容正在撰写中..."
}

# Generate zh placeholder guides
$j = 0
$zhGuides | ForEach-Object {
    $j++
    $date = Get-Date "2024-05-15"
    $date = $date.AddDays(-($j-1))
    $dateStr = $date.ToString("yyyy-MM-dd")
    Write-MdFile -path "$baseDir\zh\$($_.slug).md" -slug $_.slug -title $_.title -blog $_.blog -category 'guide' -tags $_.tags -publishDate $dateStr -desc $_.desc -content "# $($_.title)`n`n这是一篇关于$($_.title)的指南。`n`n## 正文`n`n文章内容正在撰写中..."
}

# Generate en placeholder stories
$k = 0
$enStories | ForEach-Object {
    $k++
    $date = Get-Date "2024-05-20"
    $date = $date.AddDays(-($k-1))
    $dateStr = $date.ToString("yyyy-MM-dd")
    Write-MdFile -path "$baseDir\en\$($_.slug).md" -slug $_.slug -title $_.title -blog $_.blog -category 'story' -tags $_.tags -publishDate $dateStr -desc $_.desc -content "# $($_.title)`n`nThis is an article about $($_.title).`n`n## Content`n`nArticle content is being written..."
}

# Generate en placeholder guides
$l = 0
$enGuides | ForEach-Object {
    $l++
    $date = Get-Date "2024-05-15"
    $date = $date.AddDays(-($l-1))
    $dateStr = $date.ToString("yyyy-MM-dd")
    Write-MdFile -path "$baseDir\en\$($_.slug).md" -slug $_.slug -title $_.title -blog $_.blog -category 'guide' -tags $_.tags -publishDate $dateStr -desc $_.desc -content "# $($_.title)`n`nThis is a guide about $($_.title).`n`n## Content`n`nArticle content is being written..."
}

Write-Host "Generated all 60 placeholder files!"
