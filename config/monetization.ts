/**
 * Monetization controls — Phase 5B prelaunch defaults.
 *
 * AFFILIATE: Keep `enabled: false` and `disableGlobally: true` until Amazon
 * Associates approval and an intentional activation phase. Set
 * `AMAZON_ASSOCIATE_TAG` in deployment env only after approval (never commit).
 *
 * ADS: Keep `enabled: false` and `loadScripts: false` until ad programs are
 * approved. Placeholders may remain visible via `showPlaceholders`.
 *
 * See: content/templates/monetization-readiness-checklist-2026-06-30.md
 * See: .env.example
 */
export const monetizationConfig = {
  ads: {
    enabled: false,
    loadScripts: false,
    showPlaceholders: true,
    slots: {
      sidebarDesktop: { id: "sidebar-desktop", label: "Advertisement" },
      inContent: { id: "in-content", label: "Advertisement" },
      mobileBanner: { id: "mobile-banner", label: "Advertisement" },
    },
    excludeRoutes: [
      "/privacy-policy",
      "/terms-of-use",
      "/medical-disclaimer",
      "/affiliate-disclosure",
      "/advertising-policy",
      "/contact",
      "/corrections-policy",
      "/source-standards",
    ],
  },
  affiliate: {
    enabled: false,
    disableGlobally: true,
    disableRoutes: [] as string[],
    amazonAssociateTag: process.env.AMAZON_ASSOCIATE_TAG ?? "",
    defaultRel: "sponsored nofollow",
    ctaLabel: "Check current price on Amazon",
  },
} as const;

export function isAdRouteExcluded(pathname: string): boolean {
  return monetizationConfig.ads.excludeRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

/** Visible labeled placeholder boxes (Phase 1 / prelaunch). No network requests. */
export function shouldShowAdPlaceholder(pathname: string): boolean {
  if (!monetizationConfig.ads.showPlaceholders) return false;
  return !isAdRouteExcluded(pathname);
}

/** Live AdSense/third-party scripts — requires both flags; never true in Phase 1 default. */
export function shouldLoadLiveAds(pathname: string): boolean {
  const { ads } = monetizationConfig;
  if (!ads.enabled || !ads.loadScripts) return false;
  return !isAdRouteExcluded(pathname);
}

export function isAffiliateEnabledForPath(pathname: string): boolean {
  const { affiliate } = monetizationConfig;
  if (affiliate.disableGlobally || !affiliate.enabled) return false;
  return !affiliate.disableRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}
