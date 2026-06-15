import rss from '@astrojs/rss';
import { getAllPosts } from '../utils/posts';
import { t } from '../i18n';

export function GET() {
  const posts = getAllPosts();
  const site = 'https://indie-story.dev';

  return rss({
    title: t('zh', 'siteTitle'),
    description: t('zh', 'siteDescription'),
    site,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.publishDate,
      description: post.description || '',
      link: `/zh/post/${post.slug}/`,
    })),
    customData: '<language>zh-CN</language>',
  });
}