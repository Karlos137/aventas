import { Pathnames } from 'next-intl/navigation'

export const locales = ['cs', 'en'] as const

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>

export const localePrefix = 'as-needed'

export type AppPathnames = keyof typeof pathnames
