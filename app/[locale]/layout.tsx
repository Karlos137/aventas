// Global styles
import '../globals.css'

// Next Google Tag Manager
import GoogleTagManager from '@magicul/next-google-tag-manager'

// Next.js
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// React
import { ReactNode, Suspense } from 'react'

// Next Intl
import { unstable_setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { locales } from '@/localesConfig'
import Footer from '@/components/Footer'

type Props = {
  children: ReactNode
  params: { locale: string }
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AVENTAS',
  description: 'Advokátní kancelář AVENTAS.',
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

const GTM_ID = 'GTM-KK7RD957'

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={`${inter.className} app h-full`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Suspense>
            <GoogleTagManager id={GTM_ID} />
          </Suspense>
          <div className='flex h-full w-full flex-col'>
            <main>{children}</main>
            <Footer className='mt-auto' />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
