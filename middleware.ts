import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { pathnames, localePrefix } from './localesConfig'

// Default locale middleware
const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['cs', 'en'],
  // Used when no locale matches
  defaultLocale: 'cs',
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames,
})

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Redirect /en/admin and /cs/admin to /admin
  if (pathname.startsWith('/en/admin') || pathname.startsWith('/cs/admin')) {
    const newUrl = new URL(req.url)
    newUrl.pathname = pathname.replace(/^\/(en|cs)/, '')
    return NextResponse.redirect(newUrl)
  }

  // Remove locale prefix for API routes
  if (pathname.startsWith('/en/api') || pathname.startsWith('/cs/api')) {
    const newUrl = new URL(req.url)
    newUrl.pathname = pathname.replace(/^\/(en|cs)(\/api)/, '$2')
    return NextResponse.redirect(newUrl)
  }

  // Use the default intl middleware for other paths
  return intlMiddleware(req)
}

export const config = {
  matcher: '/((?!static|.*\\..*|_next).*)',
}
