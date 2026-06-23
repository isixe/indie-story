import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { t, type Lang } from '../i18n';

interface SearchItem {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  lang: string;
  blogName: string;
  tags: string[];
  publishDate: string;
}

interface SearchModalProps {
  lang: Lang;
}

export default function SearchModal({ lang }: SearchModalProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [index, setIndex] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const data = (window as unknown as Record<string, unknown>).__SEARCH_INDEX__;
      if (Array.isArray(data)) {
        setIndex(data as SearchItem[]);
      }
    } catch {
      // index not available
    }
  }, []);

  useEffect(() => {
    const btn = document.getElementById('search-trigger');
    if (!btn) return;
    const handler = () => setOpen(true);
    btn.addEventListener('click', handler);
    return () => btn.removeEventListener('click', handler);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = index.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.blogName.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
    setResults(filtered.slice(0, 20));
    setSelectedIndex(-1);
  }, [query, index]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      setQuery('');
      setResults([]);
      setSelectedIndex(-1);
    }
  }, [open]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        const post = results[selectedIndex];
        if (post) {
          window.location.href = `/${post.lang}/post/${post.slug}`;
        }
      }
    },
    [results, selectedIndex],
  );

  useEffect(() => {
    if (selectedIndex >= 0 && listRef.current) {
      const item = listRef.current.children[selectedIndex] as HTMLElement | undefined;
      item?.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  const categoryLabel = (item: SearchItem) => {
    if (item.category === 'story') return lang === 'zh' ? '故事' : 'Story';
    return lang === 'zh' ? '指南' : 'Guide';
  };

  const langLabel = (l: string) => (l === 'zh' ? '中文' : 'English');

  return (
    <>
      {open && (
        <div
          className="search-overlay"
          onClick={() => setOpen(false)}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label={t(lang, 'search')}
        >
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-input-wrapper">
              <Search size={18} className="search-input-icon" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t(lang, 'searchPlaceholder')}
                className="search-input"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                onClick={() => setOpen(false)}
                className="search-close-btn"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {results.length > 0 && (
              <div className="search-results" ref={listRef}>
                {results.map((item, i) => (
                  <a
                    key={`${item.lang}-${item.slug}`}
                    href={`/${item.lang}/post/${item.slug}`}
                    className={`search-result-item ${i === selectedIndex ? 'selected' : ''}`}
                    onMouseEnter={() => setSelectedIndex(i)}
                  >
                    <div className="search-result-title">
                      {highlightMatch(item.title, query)}
                    </div>
                    <div className="search-result-meta">
                      <span className="search-result-source">{item.blogName}</span>
                      <span className="search-result-dot">·</span>
                      <span>{categoryLabel(item)}</span>
                      <span className="search-result-dot">·</span>
                      <span>{langLabel(item.lang)}</span>
                    </div>
                    {item.description && (
                      <div className="search-result-desc">
                        {highlightMatch(item.description, query)}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            )}

            {query.trim() && results.length === 0 && (
              <div className="search-empty">{t(lang, 'searchNoResults')}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="search-highlight">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}
