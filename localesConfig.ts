import { Pathnames } from 'next-intl/routing'

export const defaultLocale = 'cs'

export const locales = [defaultLocale, 'en'] as const

export const pathnames = {
  '/': '/',
  '/clanky': {
    cs: '/clanky',
    en: '/articles',
  },
} satisfies Pathnames<typeof locales>

export const localePrefix = 'as-needed'

export type AppPathnames = keyof typeof pathnames
