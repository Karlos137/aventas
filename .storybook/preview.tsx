// React
import React from "react"
import type { Preview } from "@storybook/react"

// Styles
import "tailwindcss/tailwind.css"
import "../app/globals.css"

// Next Font
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
  decorators: [
    Story => (
      <div className={inter.className}>
        <Story />
      </div>
    ),
  ],
}

export default preview
