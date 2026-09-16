import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout/SiteChrome";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig, shouldBlockAllCrawlers } from "@/config/site";
import { buildGlobalGraphJsonLd } from "@/lib/seo/jsonld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0b1120",
};

export const metadata: Metadata = {
  title: {
    default: "SuppCheckr | Check the Supplement Before You Buy",
    template: "%s | SuppCheckr",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: shouldBlockAllCrawlers()
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="W2YGdPxZICyemheD9CxeIA"
          async
        />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={buildGlobalGraphJsonLd()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary-muted focus:px-3 focus:py-2 focus:text-heading"
        >
          Skip to content
        </a>
        <Header />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
