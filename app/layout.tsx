import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"


import { siteConfig } from "config/site";
import { cn } from "@/lib/utils";
import AppProviders from "@/contexts/Providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})


interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "watercast",
    "barcelona",
    "water resilience",
    "sutainability",
    "sustainable solutions",
  ],
  authors: [
    {
      name: "watercast",
      url: "https://www.watercast.io",
    },
  ],
  creator: "watercast",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: "@watercast",
  },
  icons: {
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNoZWxsIj48cGF0aCBkPSJNMTQgMTFhMiAyIDAgMSAxLTQgMCA0IDQgMCAwIDEgOCAwIDYgNiAwIDAgMS0xMiAwIDggOCAwIDAgMSAxNiAwIDEwIDEwIDAgMSAxLTIwIDAgMTEuOTMgMTEuOTMgMCAwIDEgMi40Mi03LjIyIDIgMiAwIDEgMSAzLjE2IDIuNDQiLz48L3N2Zz4=",
    shortcut: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNoZWxsIj48cGF0aCBkPSJNMTQgMTFhMiAyIDAgMSAxLTQgMCA0IDQgMCAwIDEgOCAwIDYgNiAwIDAgMS0xMiAwIDggOCAwIDAgMSAxNiAwIDEwIDEwIDAgMSAxLTIwIDAgMTEuOTMgMTEuOTMgMCAwIDEgMi40Mi03LjIyIDIgMiAwIDEgMSAzLjE2IDIuNDQiLz48L3N2Zz4=",
    apple: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNoZWxsIj48cGF0aCBkPSJNMTQgMTFhMiAyIDAgMSAxLTQgMCA0IDQgMCAwIDEgOCAwIDYgNiAwIDAgMS0xMiAwIDggOCAwIDAgMSAxNiAwIDEwIDEwIDAgMSAxLTIwIDAgMTEuOTMgMTEuOTMgMCAwIDEgMi40Mi03LjIyIDIgMiAwIDEgMSAzLjE2IDIuNDQiLz48L3N2Zz4=",
  },
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
          <AppProviders>
            {children}
          </AppProviders>
      </body>
    </html>
  )
}