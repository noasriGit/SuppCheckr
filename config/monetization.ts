/**
 * Monetization controls — Phase 7A Amazon Associates activation.
 *
 * AFFILIATE: Framework enabled after Amazon Associates approval. Per-product
 * `affiliate.enabled` in YAML controls which products render tagged Amazon links.
 * Set `AMAZON_ASSOCIATE_TAG` in deployment env (never commit a real tag).
 * Links fail closed when the tag is missing or invalid.
 *
 * ADS: Keep `enabled: false` and `loadScripts: false` until ad programs are
 * approved. Placeholders may remain visible via `showPlaceholders`.
 *
 * See: content/templates/phase-7a-amazon-associates-activation-report-2026-06-30.md
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
    enabled: true,
    disableGlobally: false,
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

/** Global affiliate framework is on (per-product flags still required for live links). */
export function isAffiliateFrameworkActive(): boolean {
  const { affiliate } = monetizationConfig;
  return affiliate.enabled && !affiliate.disableGlobally;
}
