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
        'custom-brown': {
          300: 'hsl(25 22% 66%)',
          400: 'hsl(25 22% 60%)', // #BCA696
          600: 'hsl(28 11% 42%)', // #776A5F
        },
        'custom-blue': {
          800: 'hsl(217 58% 17%)', // #122544
        },
        'custom-gray': {
          800: 'hsl(213 100% 10%)', // #303A42
        },
      },
      dropShadow: {
        'custom-blue': '0 4px 6px rgba(0, 147, 255, 0.20)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
export default config
