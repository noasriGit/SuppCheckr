export type SiteMode = "development" | "staging" | "prelaunch" | "production";

export const siteConfig = {
  name: "SuppCheckr",
  tagline: "Check the supplement before you buy.",
  description:
    "SuppCheckr compares supplements by label transparency, dosage clarity, testing, ingredients, and value.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://suppcheckr.com",
  contactEmail: process.env.CONTACT_EMAIL ?? "help@suppcheckr.com",
  siteMode: (process.env.SITE_MODE ?? "prelaunch") as SiteMode,
} as const;

export const mainNav = [
  { label: "Supplements", href: "/supplements" },
  { label: "Compare", href: "/compare" },
  { label: "Ingredients", href: "/ingredients" },
  { label: "Brands", href: "/brands" },
  { label: "Methodology", href: "/methodology" },
] as const;

export const footerNav = {
  explore: [
    { label: "Supplements", href: "/supplements" },
    { label: "Compare", href: "/compare" },
    { label: "Ingredients", href: "/ingredients" },
    { label: "Brands", href: "/brands" },
    { label: "Guides", href: "/guides/how-to-choose-a-creatine-supplement" },
  ],
  trust: [
    { label: "About", href: "/about" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Methodology", href: "/methodology" },
    { label: "Medical Disclaimer", href: "/medical-disclaimer" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Advertising Policy", href: "/advertising-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Corrections Policy", href: "/corrections-policy" },
    { label: "Source Standards", href: "/source-standards" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export function isPrelaunchOrDev(): boolean {
  return siteConfig.siteMode !== "production";
}

export function shouldBlockAllCrawlers(): boolean {
  return siteConfig.siteMode === "development" || siteConfig.siteMode === "staging";
}

export function shouldShowLegalReviewBanners(): boolean {
  return siteConfig.siteMode !== "production";
}

export function shouldShowDemoBanners(): boolean {
  return siteConfig.siteMode !== "production";
}
