import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AgriX Network",
  description:
    "AgriX Network International connects farmers, researchers, and consumers to promote regenerative agriculture practices worldwide.",
  keywords: "regenerative agriculture, sustainable farming, soil health, biodiversity, agroforestry, AgriX Network",
  authors: [{ name: "AgriX Network International" }],
  openGraph: {
    title: "AgriX Network",
    description:
      "Connecting farmers, researchers, and consumers to promote regenerative agriculture practices worldwide.",
    url: "https://agrixnetwork.com",
    siteName: "AgriX Network International",
    images: [
      {
        url: "/images/agrix-logo.png",
        width: 800,
        height: 600,
        alt: "AgriX Network International Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
