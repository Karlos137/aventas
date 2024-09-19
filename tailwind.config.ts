import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eudiw-red': {
          500: '#F67875',
        },
        'eudiw-yellow': {
          500: '#FFE998',
        },
        'eudiw-purple': {
          500: '#D4BDEC',
        },
        'eudiw-blue': {
          200: '#D1DEFF',
          300: '#ABC3FF',
          500: '#2B5ED9',
        },
        'eudiw-green': {
          500: '#DCF2CC',
        },
        'dia-green': {
          500: '#46AD48',
          700: '#207315',
        },
        'dia-gray': {
          300: '#F5F5F5',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
export default config
