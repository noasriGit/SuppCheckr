# SEO / Ahrefs audit remediation — 2026-07-07

Reference for the Ahrefs crawl of `suppcheckr.com` (export dated 2026-07-07). Use this when clearing remaining warnings or validating a post-deploy re-crawl.

## Fixed in this commit

### Canonical points to redirect (ERROR) + 3XX redirect in sitemap (ERROR)

**Cause:** Live site is `https://www.suppcheckr.com` (Vercel redirects apex → www), but `NEXT_PUBLIC_SITE_URL` / `siteConfig.url` defaulted to `https://suppcheckr.com`. Every www page canonicalized to apex, which 308’d back to www.

**Changes:**

- `config/site.ts` — default URL `https://www.suppcheckr.com`
- `.env.example` — same, with comment
- `app/robots.ts` — sitemap URL via `siteConfig.url`
- 16 content YAML files — internal `/methodology` citation links use www

**Deploy checklist:**

1. Set Vercel production `NEXT_PUBLIC_SITE_URL=https://www.suppcheckr.com` (env overrides code default).
2. Redeploy.
3. Verify view-source canonical and `sitemap.xml` use www URLs.
4. Resubmit sitemap in Google Search Console; re-crawl in Ahrefs.

---

## Deferred by design (Ahrefs warnings — fix when ready)

These are **not bugs**. Ahrefs flags them; behavior matches prelaunch policy in `lib/seo/indexing.ts` and `lib/seo/metadata.ts`.

### Noindex + nofollow pages (9 URLs)

`buildPageMetadata` sets `{ index: false, follow: false }` when `shouldNoindexStaticPath(path)` is true.

| Path | List | Why |
|------|------|-----|
| `/privacy-policy` | `DRAFT_LEGAL_PATHS` | Attorney review pending |
| `/terms-of-use` | `DRAFT_LEGAL_PATHS` | Attorney review pending |
| `/medical-disclaimer` | `DRAFT_LEGAL_PATHS` | Attorney review pending |
| `/affiliate-disclosure` | `DRAFT_LEGAL_PATHS` | Attorney review pending |
| `/advertising-policy` | `DRAFT_LEGAL_PATHS` | Attorney review pending |
| `/brands` | `NOINDEX_STATIC_PATHS` | Hub held back in prelaunch |
| `/ingredients` | `NOINDEX_STATIC_PATHS` | Hub held back in prelaunch |
| `/compare` | `NOINDEX_STATIC_PATHS` | Hub held back in prelaunch |
| `/search` | `NOINDEX_STATIC_PATHS` | Utility page |

**UX:** Pages remain fully usable. Only crawler directives change.

**Still indexable (unchanged):** Individual brand, ingredient, product, guide, and category compare URLs when published with `noindex: false`.

#### When ready — legal pages

1. Complete attorney review; remove `LegalReviewBanner` behavior if appropriate (`shouldShowLegalReviewBanners` / `SITE_MODE`).
2. Remove reviewed paths from `DRAFT_LEGAL_PATHS` in `lib/seo/indexing.ts`.
3. Redeploy; confirm `robots` meta is `index, follow` on those pages.

#### When ready — hub pages

1. Remove `/brands`, `/ingredients`, `/compare` from `NOINDEX_STATIC_PATHS` (keep `/search` noindex unless you want site search in Google).
2. Optionally remove explicit `noindex: true` on `app/brands/page.tsx` and `app/ingredients/page.tsx` if redundant.
3. Redeploy; re-crawl.

See also: `content/templates/phase-6b-public-hub-polish-report-2026-06-30.md` (hub indexing policy).

### 3XX redirect on apex / http URLs (WARNING)

`https://suppcheckr.com/*` and `http://*` redirect to `https://www.suppcheckr.com/*`. Expected when www is primary.

**No code change needed** after canonical fix. Ahrefs may still list apex URLs as redirects; that is normal.

**Optional:** Ensure http → https www is a single hop in Vercel/DNS (not http → apex → www).

---

## Related files

| File | Role |
|------|------|
| `lib/seo/indexing.ts` | `DRAFT_LEGAL_PATHS`, `NOINDEX_STATIC_PATHS`, sitemap static list |
| `lib/seo/metadata.ts` | Canonical + robots meta |
| `config/site.ts` | `siteConfig.url`, `SITE_MODE` |
| `app/sitemap.ts` | Sitemap URL generation |
| `app/robots.ts` | robots.txt + sitemap reference |

## Production launch (separate decision)

Switching `SITE_MODE` from `prelaunch` to `production` affects demo banners and global crawler blocking (`shouldBlockAllCrawlers`). It does **not** by itself index legal or hub pages — those lists above must be updated explicitly.
