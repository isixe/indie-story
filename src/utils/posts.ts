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
  content?: string;
}

// 示例文章数据
const basePosts: Post[] = [
  // 独立开发者故事
  {
    slug: 'first-year-indie-dev',
    title: '从0到1：我的独立开发第一年',
    blogName: '小明的独立博客',
    category: 'story',
    tags: ['独立开发', '经验分享', '收入公开'],
    publishDate: new Date('2024-06-10'),
    description: '分享我辞去工作全职独立开发的第一年经历',
    content: `
去年这个时候，我辞去了大厂的工作，开始了独立开发的旅程。这一年有收获也有挫折，想在这里记录一下我的心得。

## 为什么要独立开发

在大厂工作了五年，虽然收入不错，但总觉得缺少了一些什么。每天重复着相似的工作，看着自己的产品决策被层层审批修改，渐渐失去了创造的激情。

## 第一个产品

我的第一个产品是一个简单的番茄钟应用。花了两个月时间开发，上线后第一个月只有不到100次下载。但我没有放弃，根据用户反馈不断迭代，现在已经有超过5万用户了。

## 收入情况

第一年总收入约15万，主要来自应用内购买和广告。虽然比上班少了很多，但能够做自己喜欢的事情，这种满足感是金钱无法衡量的。

## 给后来者的建议

1. 不要裸辞，先利用业余时间验证想法
2. 专注一个产品，不要同时做太多
3. 重视用户反馈，快速迭代
4. 保持耐心，成功需要时间

独立开发不是一条容易的路，但只要你热爱，就值得坚持。
    `
  },
  {
    slug: 'solo-dev-to-10k-mrr',
    title: '一个人，一款产品，月入过万刀',
    blogName: '独立开发者周报',
    category: 'story',
    tags: ['独立开发', 'SaaS', '收入公开'],
    publishDate: new Date('2024-06-08'),
    description: '我的SaaS产品从0到10000美元月收入的历程',
    content: `
2022年3月，我发布了自己的第一款SaaS产品。两年后，它每月能为我带来超过10000美元的收入。

## 产品定位

这是一款面向电商卖家的库存管理工具。选择这个方向是因为我之前在电商行业工作，深知这个痛点。

## 冷启动

产品上线前三个月，我通过以下方式获取了第一批用户：
- 在相关论坛和社群分享有价值的内容
- 给潜在客户发送个性化邮件
- 提供免费试用收集反馈

## 增长策略

我没有花一分钱在广告上，增长主要来自：
- SEO优化，写行业相关的博客文章
- 用户口碑传播
- 产品本身的病毒传播机制

## 技术栈

- 前端：Next.js + Tailwind CSS
- 后端：Node.js + PostgreSQL
- 部署：Vercel + Railway

一个人也能做出有价值的产品，关键是选对方向，持续迭代。
    `
  },
  {
    slug: 'indie-dev-failure-lessons',
    title: '我失败的三个独立项目教会我的事',
    blogName: '开发者故事集',
    category: 'story',
    tags: ['独立开发', '失败案例', '经验分享'],
    publishDate: new Date('2024-06-05'),
    description: '分享我失败的三个项目，以及从中得到的教训',
    content: `
在成功的项目背后，往往有更多失败的尝试。今天我想分享我失败的三个项目，以及它们教会我的东西。

## 项目一：社交类App

这是一个面向程序员的社交平台，想法很好，但失败了。

**失败原因**：
- 社交产品需要大量用户才能形成网络效应
- 冷启动太难，没有有效的获客渠道
- 竞品太多，差异化不够明显

**教训**：不要碰社交类产品，除非你有大量资源。

## 项目二：AI写作工具

ChatGPT爆火时，我快速做了一个AI写作工具。

**失败原因**：
- 技术门槛太低，同类产品太多
- 没有独特的价值主张
- 用户留存率极低

**教训**：追热点要慎重，没有护城河的产品很难生存。

## 项目三：垂直领域工具

这是一个针对特定行业的工具，花了半年开发。

**失败原因**：
- 没有深入了解目标用户的真实需求
- 市场太小，天花板太低
- 销售周期太长

**教训**：做B端产品要深入行业，小市场很难做大。

失败不可怕，可怕的是不总结教训。希望我的经验对你有帮助。
    `
  },
  {
    slug: 'side-project-to-full-time',
    title: '副业变主业：我是如何过渡的',
    blogName: '自由开发者',
    category: 'story',
    tags: ['独立开发', '副业', '转型'],
    publishDate: new Date('2024-06-03'),
    description: '从兼职做副业到全职独立开发，我的过渡经验',
    content: `
很多人问我，什么时候可以辞职全职做独立开发？今天分享一下我的经历和思考。

## 我的情况

我在2021年开始做副业，当时还在全职工作。每天晚上和周末开发自己的产品。2023年中，副业收入超过主业，我才决定辞职。

## 过渡期的准备

### 财务准备
- 存够至少12个月的生活费
- 副业收入稳定超过主业3个月以上
- 有明确的收入增长预期

### 心理准备
- 接受收入不稳定的事实
- 做好长期奋斗的准备
- 找到独立工作的节奏

### 技能准备
- 不仅是编程，还要学产品、运营、设计
- 建立个人品牌和网络
- 找到可以交流的圈子

## 辞职后的变化

好的方面：
- 时间自由，可以按自己的节奏工作
- 做自己喜欢的事，更有动力
- 收入上限更高

挑战：
- 孤独感，需要主动社交
- 自律要求高，容易懈怠
- 没有固定收入，会有焦虑

## 建议

不要冲动辞职，做好充分准备。副业收入只是条件之一，更重要的是你是否准备好了独立面对一切。
    `
  },
  {
    slug: 'building-in-public-journey',
    title: '公开构建：在Twitter上分享我的开发历程',
    blogName: '透明创业者',
    category: 'story',
    tags: ['独立开发', '公开构建', '社交媒体'],
    publishDate: new Date('2024-06-01'),
    description: '通过公开构建获得第一批用户和反馈',
    content: `
Building in Public（公开构建）是独立开发者社区很流行的一种做法。我想分享一下我的经历和收获。

## 什么是公开构建

简单来说，就是在社交媒体上公开分享你开发产品的过程，包括：
- 产品想法和决策
- 开发进度和里程碑
- 收入数据（可选）
- 成功和失败的经验

## 我的做法

从去年开始，我在Twitter上每天分享我的开发进展：
- 早上分享今天的计划
- 晚上分享完成的工作
- 每周写一篇总结
- 每月公开收入数据

## 带来的好处

1. ** accountability（问责）**：公开承诺让我更有动力执行
2. **早期反馈**：在产品完成前就获得用户反馈
3. **建立受众**：积累了一批关注者和潜在用户
4. **营销渠道**：产品发布时已经有了一批种子用户

## 如何开始

- 选择一个平台（Twitter、小红书、即刻等）
- 设定固定的分享频率
- 分享真实、有价值的内容
- 与社区互动，不要只是自说自话

公开构建不是适合所有人，但如果你想建立个人品牌，这是一个很好的方式。
    `
  },
  {
    slug: 'micro-saas-success',
    title: '微型SaaS：小而美的商业模式',
    blogName: 'SaaS创业者',
    category: 'story',
    tags: ['独立开发', 'SaaS', '商业模式'],
    publishDate: new Date('2024-05-28'),
    description: '为什么微型SaaS是独立开发者的理想选择',
    content: `
微型SaaS（Micro SaaS）是指由个人或小团队运营的小型软件服务。我认为这是独立开发者最理想的商业模式。

## 什么是微型SaaS

特点：
- 解决特定的小问题
- 用户群体明确且小众
- 功能精简但实用
- 自动化程度高，维护成本低

## 我的微型SaaS

我目前运营着三个微型SaaS：
1. **邮件模板库** - 每月$800
2. **API监控工具** - 每月$1200
3. **SEO分析插件** - 每月$600

加起来每月2600美元，足够支撑我的生活。

## 优势

1. **低风险**：投入小，失败成本低
2. **可持续**：一次开发，长期收益
3. **可积累**：可以不断叠加新产品
4. **自由度高**：不需要融资，没有外部压力

## 如何找到点子

- 解决自己遇到的问题
- 在论坛和社群找痛点
- 改进现有产品的某个功能
- 为特定行业做垂直工具

微型SaaS不是暴富的捷径，但它是可持续的、适合独立开发者的商业模式。
    `
  },
  // 实用指南
  {
    slug: 'app-store-optimization-guide',
    title: 'App Store上架完全指南',
    blogName: '移动开发指南',
    category: 'guide',
    tags: ['App Store', '上架', 'ASO'],
    publishDate: new Date('2024-06-12'),
    description: '从开发者账号到审核通过，完整的上架流程',
    content: `
App Store上架是移动开发者必经的一步。本文将详细介绍上架的完整流程和注意事项。

## 准备工作

### 1. 开发者账号
- 个人账号：$99/年
- 公司账号：$99/年，需要DUNS编号
- 企业账号：$299/年，内部使用

### 2. 应用资料
- 应用名称（30字符以内）
- 副标题（30字符以内）
- 关键词（100字符以内）
- 应用描述（4000字符以内）
- 截图（5张，特定尺寸）
- 预览视频（可选）

## 上架流程

### 1. 创建App ID
在Apple Developer Portal创建唯一的App ID。

### 2. 配置证书和描述文件
创建发布证书和App Store描述文件。

### 3. 打包上传
使用Xcode Archive功能打包，通过Transporter或Xcode上传。

### 4. 填写应用信息
在App Store Connect填写所有必要信息。

### 5. 提交审核
提交审核，通常需要1-3个工作日。

## 审核避坑指南

常见被拒原因：
- 崩溃或明显bug
- 隐私政策缺失
- 包含测试内容
- 误导性描述
- 热更新代码

## ASO优化

- 关键词研究：使用App Annie、Sensor Tower等工具
- 标题优化：包含核心关键词
- 截图设计：突出核心功能
- 评分管理：及时回复用户评论

上架只是开始，持续优化才是关键。
    `
  },
  {
    slug: 'seo-for-indie-developers',
    title: '独立开发者的SEO实战指南',
    blogName: '增长黑客笔记',
    category: 'guide',
    tags: ['SEO', '营销', '增长'],
    publishDate: new Date('2024-06-09'),
    description: '零预算提升网站搜索排名的实用技巧',
    content: `
SEO是独立开发者获取免费流量的重要渠道。本文分享我实践验证有效的SEO技巧。

## SEO基础

### 关键词研究
使用免费工具：
- Google Keyword Planner
- Ubersuggest
- Answer The Public

寻找：
- 搜索量适中（100-1000/月）
- 竞争度低
- 与产品相关的长尾词

## 技术SEO

### 1. 网站速度
- 使用PageSpeed Insights检测
- 优化图片大小
- 启用CDN
- 减少JavaScript

### 2. 移动端适配
- 响应式设计
- 移动端速度优化
- 触摸友好的交互

### 3. 结构化数据
添加JSON-LD标记：
- 产品信息
- 评价评分
- 常见问题

## 内容SEO

### 1. 创建优质内容
- 解决用户问题的博客文章
- 详细的产品文档
- 案例研究和成功故事

### 2. 内容优化
- 标题包含关键词
- 合理使用H标签
- 内部链接建设
- 图片添加alt标签

## 外链建设

- 产品目录提交
- 行业论坛分享
- 客座博客
- 资源页合作

## 效果追踪

使用Google Search Console和Google Analytics监控：
- 搜索排名变化
- 点击率和展示量
- 用户行为数据

SEO是长期游戏，坚持3-6个月才能看到明显效果。
    `
  },
  {
    slug: 'register-company-guide',
    title: '独立开发者如何注册公司',
    blogName: '创业法律指南',
    category: 'guide',
    tags: ['公司注册', '法律', '创业'],
    publishDate: new Date('2024-06-06'),
    description: '国内独立开发者注册公司的流程和注意事项',
    content: `
当你的独立开发收入开始稳定，注册公司就变得必要了。本文介绍国内注册公司的流程。

## 为什么要注册公司

1. **合法收款**：App Store、Google Play、支付平台需要
2. **税务合规**：避免个人所得税风险
3. **品牌建设**：提升专业形象
4. **权益保护**：保护知识产权

## 公司类型选择

### 个体工商户
- 优点：注册简单，税负低
- 缺点：无限责任，不能融资
- 适合：收入较低，个人运营

### 有限责任公司
- 优点：有限责任，可扩展
- 缺点：注册复杂，税负较高
- 适合：有合伙人，计划做大

## 注册流程

### 1. 核名
准备3-5个公司名称，在工商局网站核名。

### 2. 提交材料
- 公司章程
- 股东身份证明
- 注册地址证明
- 经营范围

### 3. 领取执照
审核通过后领取营业执照。

### 4. 刻章
公章、财务章、法人章等。

### 5. 银行开户
开设对公账户。

### 6. 税务登记
在税务局登记，申请发票。

## 费用预算

- 注册费用：500-2000元（可自办）
- 地址挂靠：2000-5000元/年（如需要）
- 代理记账：200-500元/月
- 银行开户：0-500元

## 注意事项

- 经营范围要写全，包括软件开发、技术服务等
- 注册地址要真实有效
- 按时报税，零申报也要报
- 保留好所有财务凭证

建议找专业的代理记账公司处理财务和税务，专注在产品上。
    `
  },
  {
    slug: 'payment-integration-guide',
    title: '独立开发者收款方案对比',
    blogName: '支付技术指南',
    category: 'guide',
    tags: ['支付', '收款', '财务'],
    publishDate: new Date('2024-06-04'),
    description: '各种收款方式的优缺点和适用场景',
    content: `
收款是独立开发者的核心问题之一。本文对比各种收款方案，帮助你选择最适合自己的。

## 国内收款方案

### 支付宝/微信支付
**优点**：
- 用户基数大
- 接入相对简单
- 手续费较低（0.6%左右）

**缺点**：
- 需要企业资质
- 个人开发者较难申请

**适合**：有注册公司的开发者

### 第三方支付平台
如：Ping++、Beecloud、Payjs

**优点**：
- 接入简单
- 支持个人开发者
- 聚合多种支付方式

**缺点**：
- 手续费较高（1-2%）
- 有资金风险

**适合**：快速上线，不想处理复杂接入

## 海外收款方案

### Stripe
**优点**：
- 开发者体验最好
- 支持订阅模式
- 全球覆盖

**缺点**：
- 中国大陆无法直接注册
- 需要海外公司或身份

**适合**：有海外公司或身份的开发者

### PayPal
**优点**：
- 全球通用
- 个人可以使用
- 提现相对方便

**缺点**：
- 手续费高（4.4%+固定费用）
- 有封号风险

**适合**：小额收款，个人开发者

### Paddle
**优点**：
- 专为SaaS设计
- 处理税务合规
- 支持全球支付

**缺点**：
- 手续费高（5%+0.5美元）
- 审核较严格

**适合**：SaaS产品，不想处理税务

## 应用商店收款

### App Store
- 手续费：30%（年收入100万以下15%）
- 结算周期：45天
- 需要注册公司收款

### Google Play
- 手续费：30%（首年15%）
- 结算周期：15天
- 需要验证身份

## 我的建议

1. **国内产品**：支付宝/微信 + 公司资质
2. **海外SaaS**：Stripe（如有条件）或Paddle
3. **个人开发者**：PayPal + 第三方支付
4. **移动应用**：应用商店内购为主

选择收款方案时要考虑手续费、合规性、用户体验等多个因素。
    `
  },
  {
    slug: 'marketing-for-indie-hackers',
    title: '独立开发者的零预算营销指南',
    blogName: '增长营销笔记',
    category: 'guide',
    tags: ['营销', '增长', '推广'],
    publishDate: new Date('2024-05-30'),
    description: '不花钱也能获得用户的营销方法',
    content: `
很多独立开发者擅长做产品，但不擅长营销。本文分享零预算也能获得用户的营销方法。

## 内容营销

### 博客写作
- 写解决用户问题的文章
- 分享开发过程和经验
- 做行业分析和趋势预测

发布平台：
- 个人博客（SEO长期价值）
- 知乎、简书（国内流量）
- Medium、Dev.to（海外流量）

### 视频内容
- 产品演示视频
- 教程和指南
- 开发vlog

平台选择：
- B站（国内开发者）
- YouTube（海外用户）
- 抖音/小红书（大众用户）

## 社区营销

### 垂直社区
- V2EX、掘金（开发者）
- 即刻（产品经理）
- Reddit、Indie Hackers（海外）

**技巧**：
- 先提供价值，再推广产品
- 参与讨论，建立个人品牌
- 分享真实经验，不要硬广

### 问答平台
- 知乎：回答相关问题
- Quora：英文问答
- Stack Overflow：技术问题

## 产品驱动增长

### 免费增值模式
- 基础功能免费
- 高级功能付费
- 降低用户尝试门槛

### 病毒传播
- 邀请奖励机制
- 社交分享功能
- 用户生成内容

### SEO优化
- 解决用户搜索的问题
- 创建工具型页面
- 获取自然搜索流量

## 合作推广

- 与互补产品合作
- 互相推荐
- 联合做活动

## 我的营销优先级

1. 内容营销（博客、社交媒体）
2. 社区参与（垂直社区）
3. 产品优化（口碑传播）
4. SEO（长期流量）

营销不是一次性工作，需要持续投入。关键是找到你的目标用户在哪里，然后在那里提供价值。
    `
  },
  {
    slug: 'tech-stack-for-solo-dev',
    title: '独立开发者的技术栈选择',
    blogName: '技术选型指南',
    category: 'guide',
    tags: ['技术栈', '选型', '开发'],
    publishDate: new Date('2024-05-25'),
    description: '适合一个人开发的技术栈推荐',
    content: `
选择合适的技术栈可以让独立开发事半功倍。本文推荐适合独立开发者的技术栈。

## Web应用

### 前端
**推荐：Next.js + Tailwind CSS**

优点：
- 全栈框架，前后端一体
- 优秀的开发体验
- 部署简单（Vercel）
- SEO友好

替代方案：
- Nuxt.js（Vue生态）
- SvelteKit（新兴框架）
- Astro（内容型网站）

### 后端
**推荐：Node.js + PostgreSQL**

优点：
- JavaScript全栈，开发效率高
- 丰富的npm生态
- PostgreSQL功能强大且免费

替代方案：
- Python + Django/Flask
- Go + Gin
- Supabase（BaaS）

## 移动应用

### 跨平台
**推荐：React Native / Flutter**

React Native优点：
- 使用React语法
- 接近原生性能
- 社区成熟

Flutter优点：
- 性能更好
- UI一致性高
- Google支持

### 原生开发
- iOS：Swift
- Android：Kotlin

适合对性能要求高的应用。

## 桌面应用

**推荐：Electron / Tauri**

Electron：
- 成熟稳定
- 大文件体积

Tauri：
- 轻量级（Rust核心）
- 更小体积
- 新兴框架

## 部署和运维

### 推荐方案
- 前端：Vercel / Cloudflare Pages
- 后端：Railway / Render / Fly.io
- 数据库：Supabase / Railway / 自建
- 存储：Cloudflare R2 / AWS S3

### 域名和CDN
- 域名：Namecheap / Cloudflare
- CDN：Cloudflare（免费版够用）

## 开发工具

- 代码编辑器：VS Code
- 版本控制：Git + GitHub
- 设计：Figma
- 项目管理：Notion / Linear

## 我的技术栈

目前我主要使用：
- Next.js + TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- Vercel部署

选择技术栈的原则：
1. 自己熟悉的技术
2. 社区活跃，生态丰富
3. 部署简单，维护成本低
4. 扩展性好，能应对增长

技术只是工具，重要的是快速验证想法，把产品做出来。
    `
  }
];

// 合并基础文章和生成的文章
export const posts: Post[] = [...basePosts, ...generateMorePosts()];

// 获取所有文章
export function getAllPosts(): Post[] {
  return posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

// 根据分类获取文章
export function getPostsByCategory(category: 'story' | 'guide'): Post[] {
  return posts
    .filter(post => post.category === category)
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

// 根据slug获取文章
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

// 分页获取文章
export function getPostsByPage(page: number, pageSize: number = 20): { posts: Post[]; totalPages: number; currentPage: number } {
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  
  return {
    posts: allPosts.slice(start, end),
    totalPages,
    currentPage: page
  };
}

// 按分类分页获取文章
export function getPostsByCategoryAndPage(
  category: 'story' | 'guide', 
  page: number, 
  pageSize: number = 20
): { posts: Post[]; totalPages: number; currentPage: number } {
  const categoryPosts = getPostsByCategory(category);
  const totalPages = Math.ceil(categoryPosts.length / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  
  return {
    posts: categoryPosts.slice(start, end),
    totalPages,
    currentPage: page
  };
}

// 获取最后更新时间
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
    minute: '2-digit'
  });
}

// 格式化日期
export function formatDate(date: Date, locale: string = 'zh-CN'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

// 格式化时间（带时分）
export function formatDateTime(date: Date, locale: string = 'zh-CN'): string {
  return date.toLocaleString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// 获取更多示例文章（用于测试分页）
export function generateMorePosts(): Post[] {
  const morePosts: Post[] = [];
  const storyTitles = [
    '我的第一个付费用户',
    '从副业到主业的180天',
    '独立开发者的孤独与自由',
    '如何找到你的第一个产品想法',
    '我在Product Hunt发布产品的经历',
    '远程工作一年后，我决定独立开发',
    '我的产品被大厂抄袭了',
    '从程序员到独立开发者的转型之路',
    '独立开发：一场与时间的赛跑',
    '我的第一个月收入过万的月份',
    '独立开发者的日常：代码、咖啡和焦虑',
    '如何在没有预算的情况下推广产品',
    '我放弃高薪工作，选择独立开发',
    '独立开发者的工具箱分享',
    '我的产品被知名博主推荐了',
  ];
  
  const guideTitles = [
    '如何写出好的产品介绍页',
    '独立开发者的法律必修课',
    'Google Play上架避坑指南',
    '如何为你的产品定价',
    '独立开发者的邮件营销指南',
    '如何使用社交媒体推广产品',
    '独立开发者的财务管理入门',
    '如何写一份好的隐私政策',
    '用户反馈收集与处理方法',
    '独立开发者的效率工具推荐',
    '如何设计一个好的产品Logo',
    '独立开发者的客户服务指南',
    '如何分析竞品并找到差异化',
    '独立开发者的内容营销策略',
    '如何建立用户社区',
  ];
  
  let id = 100;
  
  storyTitles.forEach((title, index) => {
    morePosts.push({
      slug: `story-${id}`,
      title,
      blogName: `独立开发者博客 ${index + 1}`,
      category: 'story',
      tags: ['独立开发', '经验分享'],
      publishDate: new Date(2024, 4, 20 - index),
      description: title,
      content: `# ${title}\n\n这是一篇关于${title}的文章。\n\n## 正文\n\n文章内容正在撰写中...`
    });
    id++;
  });
  
  guideTitles.forEach((title, index) => {
    morePosts.push({
      slug: `guide-${id}`,
      title,
      blogName: `实用指南 ${index + 1}`,
      category: 'guide',
      tags: ['指南', '教程'],
      publishDate: new Date(2024, 4, 15 - index),
      description: title,
      content: `# ${title}\n\n这是一篇关于${title}的指南。\n\n## 正文\n\n文章内容正在撰写中...`
    });
    id++;
  });
  
  return morePosts;
}
