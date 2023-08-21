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
          400: 'hsl(25 22% 60%)', // #BCA696
        },
        'custom-blue': {
          800: 'hsl(217 58% 17%)', // #122544
        },
        'custom-gray': {
          800: 'hsl(213 100% 10%)', // #303A42
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
export default config
