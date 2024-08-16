import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'fr' as const;
export const locales = ['en', 'fr'] as const;

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/projects': {
    en: '/projects',
    fr: '/projets'
  }
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;