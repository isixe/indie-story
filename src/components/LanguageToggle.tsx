import { t, type Lang } from '../i18n';

interface LanguageToggleProps {
  lang: Lang;
  currentPath: string;
}

export default function LanguageToggle({ lang, currentPath }: LanguageToggleProps) {
  const targetLang: Lang = lang === 'zh' ? 'en' : 'zh';
  const targetPath = lang === 'zh'
    ? `/en${currentPath === '/' ? '' : currentPath}`
    : currentPath.replace(/^\/en/, '') || '/';

  return (
    <a
      href={targetPath}
      class="font-sans text-xs tracking-wide text-[var(--color-text-muted)] hover:text-[var(--color-hover)] transition-colors duration-200"
    >
      {t(targetLang, 'languageSwitch')}
    </a>
  );
}