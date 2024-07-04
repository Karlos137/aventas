// React
import React from 'react'
import type { Preview } from '@storybook/react'

// Styles
import 'tailwindcss/tailwind.css'
import '../app/globals.css'

// Next Font
import { Inter } from 'next/font/google'

// Next Intl
import { NextIntlClientProvider } from 'next-intl'
import { defaultLocale } from '../localesConfig'

// Messages
import messages from '../messages/cs.json'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#122544' },
      ],
    },
  },
  decorators: [
    Story => (
      <NextIntlClientProvider locale={defaultLocale} messages={messages}>
        <div className={inter.className}>
          <Story />
        </div>
      </NextIntlClientProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default preview
