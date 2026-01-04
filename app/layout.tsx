import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Shawntos Bhusal",
  description:
    "Software Engineer expertise in SRE, DevOps, Full-Stack Development, ",
  generator: "",
  keywords: ["Shawntos Bhusal", "Portfolio", "Software Engineer", "DevOps", "SRE", "Full-Stack Development"],
  authors: [{ name: "Shawntos Bhusal" }],
  openGraph: {
    title: "Shawntos Bhusal",
    description: "Software Engineer expertise in SRE, DevOps, Full-Stack Development, ",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
