// Global styles
import "./globals.css"

// Next.js
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aventas",
  description: "Advokátní kancelář.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={`${inter.className} app h-full`}>{children}</body>
    </html>
  )
}
