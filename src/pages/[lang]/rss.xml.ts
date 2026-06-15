import rss from '@astrojs/rss';
import { getAllPosts } from '../../utils/posts';
import { t, type Lang } from '../../i18n';

export function getStaticPaths() {
  return [
    { params: { lang: 'zh' } },
    { params: { lang: 'en' } },
  ];
}

export function GET({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const posts = getAllPosts();
  const siteUrl = 'https://indie-story.dev';
  const langPrefix = lang === 'en' ? '/en' : '';

  return rss({
    title: t(lang, 'siteTitle'),
    description: t(lang, 'siteDescription'),
    site: `${siteUrl}${langPrefix}`,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.publishDate,
      description: post.description || '',
      link: `${langPrefix}/post/${post.slug}/`,
    })),
    customData: `<language>${lang === 'en' ? 'en' : 'zh-CN'}</language>`,
  });
}