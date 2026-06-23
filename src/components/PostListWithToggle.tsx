import { useState, useEffect } from 'react';
import { LayoutGrid, List, Waypoints } from 'lucide-react';
import { t, type Lang } from '../i18n';
import type { Post } from '../utils/posts';

interface PostListWithToggleProps {
  posts: Post[];
  title?: string;
  showPageInfo?: boolean;
  currentPage?: number;
  totalPages?: number;
  lang?: Lang;
}

type ViewMode = 'two' | 'one' | 'timeline';

function PostItem({ post, locale, lang, timeOnLeft }: { post: Post; locale: string; lang: Lang; timeOnLeft?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const formatDateTime = (date: Date) => {
    return date.toLocaleString(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <article className="group" style={{padding: '0.75rem 0'}}>
      <a
        href={`/${lang}/post/${post.slug}`}
        className="block"
        style={{
          padding: 'var(--space-xs) var(--space-sm)',
          margin: '0 calc(var(--space-sm) * -1)',
          borderRadius: '4px',
          backgroundColor: hovered ? 'var(--color-surface-subtle)' : 'transparent',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex flex-col gap-1">
          <div className={`flex items-baseline ${timeOnLeft ? 'flex-row-reverse' : ''} justify-between gap-4`}>
            <div className="flex-1 min-w-0">
              <p className={`font-sans text-[10px] sm:text-xs text-[var(--color-text-light)] uppercase tracking-wide mb-1 truncate ${timeOnLeft ? 'text-right' : ''}`}>
                {post.blogName}
              </p>
              <h3
                className={`font-serif text-sm sm:text-base transition-colors duration-200 leading-snug ${timeOnLeft ? 'text-right' : ''}`}
                style={{color: hovered ? 'var(--color-hover)' : 'var(--color-text)'}}
              >
                {post.title}
              </h3>
            </div>
            <time className="font-sans text-[10px] sm:text-xs text-[var(--color-text-light)] whitespace-nowrap flex-shrink-0">
              {formatDateTime(post.publishDate)}
            </time>
          </div>
        </div>
      </a>
    </article>
  );
}

interface YearMonthGroup {
  year: number;
  month: number;
  posts: Post[];
}

function groupPostsByYearMonth(posts: Post[]): YearMonthGroup[] {
  const groups: YearMonthGroup[] = [];
  for (const post of posts) {
    const year = post.publishDate.getFullYear();
    const month = post.publishDate.getMonth() + 1;
    const lastGroup = groups[groups.length - 1];
    if (lastGroup && lastGroup.year === year && lastGroup.month === month) {
      lastGroup.posts.push(post);
    } else {
      groups.push({ year, month, posts: [post] });
    }
  }
  return groups;
}

export default function PostListWithToggle({
  posts,
  title = 'Latest Updates',
  showPageInfo = false,
  currentPage = 1,
  totalPages = 1,
  lang = 'zh'
}: PostListWithToggleProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('two');
  const [mounted, setMounted] = useState(false);
  const locale = lang === 'zh' ? 'zh-CN' : 'en-US';

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('postListLayout');
    if (saved !== null && ['two', 'one', 'timeline'].includes(saved)) {
      setViewMode(saved as ViewMode);
    }
  }, []);

  const toggleView = (mode: ViewMode) => {
    setViewMode(mode);
    localStorage.setItem('postListLayout', mode);
  };

  const toggleBtnClass = (mode: ViewMode) =>
    `p-1.5 transition-colors ${
      viewMode === mode
        ? 'bg-[var(--color-text)] text-[var(--color-bg)]'
        : 'text-[var(--color-text-muted)] hover:text-[var(--color-hover)]'
    }`;

  if (!mounted) {
    return (
      <section className="w-full">
        <div className="flex items-center justify-between" style={{marginBottom: 'var(--space-md)'}}>
          <h2 className="font-sans text-xs tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
            {title}
          </h2>
          <div className="flex items-center gap-3">
            {showPageInfo && (
              <span className="font-sans text-xs text-[var(--color-text-light)]">
                {t(lang, 'page', { current: currentPage, total: totalPages })}
              </span>
            )}
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} locale={locale} lang={lang} />
          ))}
        </div>
      </section>
    );
  }

  const renderTimeline = () => {
    const groups = groupPostsByYearMonth(posts);
    let postIndex = 0;

    const monthLabel = (year: number, month: number) => {
      if (locale === 'zh-CN') {
        return `${year} 年 ${month} 月`;
      }
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[month - 1]} ${year}`;
    };

    return (
      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] -translate-x-1/2" />

        {groups.map((group) => (
          <div key={`${group.year}-${group.month}`}>
            <div className="relative z-10 flex justify-center mb-6 mt-10 first:mt-0">
              <span
                className="px-4 py-1.5 text-xs font-sans tracking-wide rounded-full border"
                style={{
                  backgroundColor: 'var(--color-bg)',
                  color: 'var(--color-text-muted)',
                  borderColor: 'var(--color-border)',
                }}
              >
                {monthLabel(group.year, group.month)}
              </span>
            </div>

            {group.posts.map((post) => {
              const isLeft = postIndex % 2 === 0;
              postIndex++;
              return (
                <div key={post.slug} className="relative mb-6 lg:mb-8 last:mb-0">
                    <div className="hidden lg:grid lg:grid-cols-[1fr_2rem_1fr] lg:items-start">
                      {isLeft ? (
                        <>
                          <div className="pr-8">
                            <PostItem post={post} locale={locale} lang={lang} timeOnLeft={false} />
                          </div>
                          <div className="flex justify-center relative z-10 pt-[1.4rem]">
                            <div
                              className="w-3 h-3 rounded-full border-2"
                              style={{
                                borderColor: 'var(--color-accent)',
                                backgroundColor: 'var(--color-bg)',
                              }}
                            />
                          </div>
                          <div />
                        </>
                      ) : (
                        <>
                          <div />
                          <div className="flex justify-center relative z-10 pt-[1.4rem]">
                            <div
                              className="w-3 h-3 rounded-full border-2"
                              style={{
                                borderColor: 'var(--color-accent)',
                                backgroundColor: 'var(--color-bg)',
                              }}
                            />
                          </div>
                          <div className="pl-8">
                            <PostItem post={post} locale={locale} lang={lang} timeOnLeft={true} />
                          </div>
                        </>
                      )}
                    </div>

                  <div className="lg:hidden flex items-stretch gap-3 pl-3">
                    <div className="relative flex flex-col items-center pt-[1.4rem]">
                      <div className="absolute top-0 bottom-0 w-px bg-[var(--color-border)] left-1/2 -translate-x-1/2" />
                      <div
                        className="w-2.5 h-2.5 rounded-full border-2 relative z-10"
                        style={{
                          borderColor: 'var(--color-accent)',
                          backgroundColor: 'var(--color-bg)',
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <PostItem post={post} locale={locale} lang={lang} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between" style={{marginBottom: 'var(--space-md)'}}>
        <h2 className="font-sans text-xs tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
          {title}
        </h2>
        <div className="flex items-center gap-3">
          {showPageInfo && (
            <span className="font-sans text-xs text-[var(--color-text-light)]">
              {t(lang, 'page', { current: currentPage, total: totalPages })}
            </span>
          )}
          <div className="hidden sm:flex items-center gap-1 rounded" style={{backgroundColor: 'var(--color-surface-subtle)'}}>
            <button
              onClick={() => toggleView('two')}
              className={toggleBtnClass('two')}
              title={t(lang, 'gridView')}
            >
              <LayoutGrid size={14} />
            </button>
            <button
              onClick={() => toggleView('one')}
              className={toggleBtnClass('one')}
              title={t(lang, 'listView')}
            >
              <List size={14} />
            </button>
            <button
              onClick={() => toggleView('timeline')}
              className={toggleBtnClass('timeline')}
              title={t(lang, 'timelineView')}
            >
              <Waypoints size={14} />
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'two' ? (
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} locale={locale} lang={lang} />
          ))}
        </div>
      ) : viewMode === 'one' ? (
        <div className="w-full">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} locale={locale} lang={lang} />
          ))}
        </div>
      ) : (
        renderTimeline()
      )}
    </section>
  );
}
