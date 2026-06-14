import { zh } from './zh';
import { en } from './en';

export type Lang = 'zh' | 'en';
export type TranslationKeys = typeof zh;

const dictionaries: Record<Lang, TranslationKeys> = { zh, en };

export function t(lang: Lang, path: string, params?: Record<string, string | number>): string {
  const keys = path.split('.');
  let value: unknown = dictionaries[lang];
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  if (typeof value !== 'string') return path;
  if (!params) return value;
  return value.replace(/\{(\w+)\}/g, (_, key) => String(params[key] ?? `{${key}}`));
}

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/en')) return 'en';
  return 'zh';
}

export function getAlternateLangPath(pathname: string): string {
  // Strip any existing /zh or /en prefix first, then add the opposite
  const clean = pathname.replace(/^\/(zh|en)/, '') || '/';
  if (pathname.startsWith('/en')) {
    return clean;
  }
  return `/en${clean}`;
}