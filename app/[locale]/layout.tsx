// Global styles
import '../globals.css'

// Next Google Tag Manager
import GoogleTagManager from '@magicul/next-google-tag-manager'

// Next.js
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

// React
import { ReactNode, Suspense } from 'react'

// Next Intl
import { unstable_setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { locales } from '@/localesConfig'
import Navbar from '@/components/Navbar'
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
      <Script id='facebook-pixel-script' strategy='afterInteractive'>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1077545477437375');
          fbq('track', 'PageView');
          `}
      </Script>
      <body className={`${inter.className} app h-full`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Suspense>
            <GoogleTagManager id={GTM_ID} />
          </Suspense>
          <div className='flex min-h-full w-full flex-col'>
            <Navbar />
            <main>{children}</main>
            <Footer className='mt-auto' />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
