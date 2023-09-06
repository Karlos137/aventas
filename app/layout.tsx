// Global styles
import './globals.css'

// Next Google Tag Manager
import GoogleTagManager from '@magicul/next-google-tag-manager'

// Next.js
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aventas',
  description: 'Advokátní kancelář Aventas.',
}

const GTM_ID = 'GTM-KK7RD957'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='cs'>
      <body className={`${inter.className} app h-full`}>
        <GoogleTagManager id={GTM_ID} />
        {children}
      </body>
    </html>
  )
}
