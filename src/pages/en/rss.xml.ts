import rss from '@astrojs/rss';
import { getAllPosts } from '../../utils/posts';
import { t } from '../../i18n';

export function GET() {
  const posts = getAllPosts();
  const site = 'https://indie-story.dev';

  return rss({
    title: t('en', 'siteTitle'),
    description: t('en', 'siteDescription'),
    site,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.publishDate,
      description: post.description || '',
      link: `/en/post/${post.slug}/`,
    })),
    customData: '<language>en</language>',
  });
}