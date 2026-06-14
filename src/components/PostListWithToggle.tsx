import { useState, useEffect } from 'react';
import { LayoutGrid, List } from 'lucide-react';
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

function PostItem({ post, locale }: { post: Post; locale: string }) {
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
        href={`/post/${post.slug}`}
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
          <div className="flex items-baseline justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="font-sans text-[10px] sm:text-xs text-[var(--color-text-light)] uppercase tracking-wide mb-1 truncate">
                {post.blogName}
              </p>
              <h3
                className="font-serif text-sm sm:text-base transition-colors duration-200 leading-snug"
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

export default function PostListWithToggle({
  posts,
  title = 'Latest Updates',
  showPageInfo = false,
  currentPage = 1,
  totalPages = 1,
  lang = 'zh'
}: PostListWithToggleProps) {
  const [isTwoColumn, setIsTwoColumn] = useState(true);
  const [mounted, setMounted] = useState(false);
  const locale = lang === 'zh' ? 'zh-CN' : 'en-US';

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('postListLayout');
    if (saved !== null) {
      setIsTwoColumn(saved === 'two');
    }
  }, []);

  const toggleLayout = () => {
    const newValue = !isTwoColumn;
    setIsTwoColumn(newValue);
    localStorage.setItem('postListLayout', newValue ? 'two' : 'one');
  };

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
          <div>
            {posts.filter((_, i) => i % 2 === 0).map((post) => (
              <PostItem key={post.slug} post={post} locale={locale} />
            ))}
          </div>
          <div>
            {posts.filter((_, i) => i % 2 === 1).map((post) => (
              <PostItem key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          <div className="flex items-center gap-1 rounded" style={{backgroundColor: 'var(--color-surface-subtle)'}}>
            <button
              onClick={() => setIsTwoColumn(true)}
              className={`p-1.5 transition-colors ${
                isTwoColumn
                  ? 'bg-[var(--color-text)] text-[var(--color-bg)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-hover)]'
              }`}
              title={t(lang, 'gridView')}
            >
              <LayoutGrid size={14} />
            </button>
            <button
              onClick={() => setIsTwoColumn(false)}
              className={`p-1.5 transition-colors ${
                !isTwoColumn
                  ? 'bg-[var(--color-text)] text-[var(--color-bg)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-hover)]'
              }`}
              title={t(lang, 'listView')}
            >
              <List size={14} />
            </button>
          </div>
        </div>
      </div>

      {isTwoColumn ? (
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          <div>
            {posts.filter((_, i) => i % 2 === 0).map((post) => (
              <PostItem key={post.slug} post={post} locale={locale} />
            ))}
          </div>
          <div>
            {posts.filter((_, i) => i % 2 === 1).map((post) => (
              <PostItem key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      )}
    </section>
  );
}