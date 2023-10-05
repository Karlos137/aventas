// Global styles
import '../globals.css'

// Next Google Tag Manager
import GoogleTagManager from '@magicul/next-google-tag-manager'

// Next.js
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'

// React
import { ReactNode } from 'react'

// Next intl
import { NextIntlClientProvider } from 'next-intl'

type Props = {
  children: ReactNode
  params: { locale: string }
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aventas',
  description: 'Advokátní kancelář Aventas.',
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export async function generateStaticParams() {
  return ['en', 'cz'].map(locale => ({ locale }))
}

const GTM_ID = 'GTM-KK7RD957'

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale)

  return (
    <html lang='cs'>
      <body className={`${inter.className} app h-full`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <GoogleTagManager id={GTM_ID} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
