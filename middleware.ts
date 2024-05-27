import createMiddleware from 'next-intl/middleware'

import { locales, pathnames, localePrefix } from './localesConfig'

// Default locale middleware
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['cs', 'en'],
  // Used when no locale matches
  defaultLocale: 'cs',
  localePrefix,
  localeDetection: false,
  pathnames,
})

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)',
  ],
}
