# Electrolytes Live GSC Submission Checklist — Phase 14G

**Date:** 2026-07-07 (executed 2026-07-15)  
**Phase:** 14G — Electrolytes hub copy refresh, live QA, GSC submission prep  
**Companion report:** [`phase-14g-electrolytes-hub-refresh-live-qa-report-2026-07-07.md`](./phase-14g-electrolytes-hub-refresh-live-qa-report-2026-07-07.md)  
**Prior checklist:** [`phase-14f-electrolytes-gsc-submission-checklist-2026-07-07.md`](./phase-14f-electrolytes-gsc-submission-checklist-2026-07-07.md)

Execute after Phase 14G deploy and sitemap refresh. Canonical primary host is `https://www.suppcheckr.com` (apex `https://suppcheckr.com` redirects to www per Vercel config). GSC inspection may use either host; confirm canonical tags point to www.

---

## A. Exact URLs to inspect

| # | URL | Entity |
|---|-----|--------|
| 1 | https://suppcheckr.com/supplements/electrolytes | Category hub |
| 2 | https://suppcheckr.com/supplements/electrolytes/compare | Comparison table |
| 3 | https://suppcheckr.com/ingredients/electrolytes | Ingredient reference |
| 4 | https://suppcheckr.com/guides/lmnt-vs-liquid-iv | Guide (branded entry) |
| 5 | https://suppcheckr.com/guides/how-to-choose-an-electrolyte-powder | Buyers guide |
| 6 | https://suppcheckr.com/guides/what-are-electrolytes | Guide |
| 7 | https://suppcheckr.com/guides/sugar-free-vs-sugar-electrolytes | Guide |
| 8 | https://suppcheckr.com/guides/electrolyte-powder-vs-tablets | Guide |
| 9 | https://suppcheckr.com/supplements/electrolytes/products/lmnt-citrus-salt-30 | LMNT Citrus Salt 30ct |
| 10 | https://suppcheckr.com/supplements/electrolytes/products/liquid-iv-hydration-multiplier-lemon-lime-16 | Liquid I.V. Hydration Multiplier Lemon Lime 16ct |
| 11 | https://suppcheckr.com/supplements/electrolytes/products/nuun-sport-lemon-lime-10-tablets | Nuun Sport Lemon Lime 10 tablets |
| 12 | https://suppcheckr.com/supplements/electrolytes/products/ultima-replenisher-lemonade-20-sticks | Ultima Replenisher Lemonade 20 sticks |
| 13 | https://suppcheckr.com/supplements/electrolytes/products/thorne-catalyte-lemon-lime-30-servings | Thorne Catalyte Lemon Lime 30 servings |

**Optional brand profile pages** (published/indexable in Phase 14F):

| URL | Brand |
|-----|-------|
| https://suppcheckr.com/brands/lmnt | LMNT |
| https://suppcheckr.com/brands/liquid-iv | Liquid I.V. |
| https://suppcheckr.com/brands/nuun | Nuun |
| https://suppcheckr.com/brands/ultima-replenisher | Ultima Replenisher |
| https://suppcheckr.com/brands/thorne | Thorne |

---

## B. Sitemap URL

- [ ] Confirm sitemap live: **https://suppcheckr.com/sitemap.xml** (canonical: `https://www.suppcheckr.com/sitemap.xml`)
- [ ] Submit or re-submit sitemap in Google Search Console if Electrolytes URLs are missing from coverage
- [ ] Confirm all 13 core Electrolytes URLs above appear in sitemap output

---

## C. Manual checks (per URL)

For each URL after deploy:

- [ ] **URL inspection** — GSC URL Inspection tool; confirm Google can fetch
- [ ] **Request indexing** — submit priority URLs (see recommended order below)
- [ ] **Live test** — page renders without error; dark theme; placeholder images acceptable
- [ ] **Canonical** — canonical tag uses `https://www.suppcheckr.com/...` primary host
- [ ] **noindex absent** — `<meta name="robots">` does not block indexing (`noindex` absent or `index`)
- [ ] **Title/meta** — title and description present and category-appropriate
- [ ] **Mobile usability** — readable on mobile viewport; no horizontal scroll on comparison table
- [ ] **Internal links** — category ↔ compare ↔ ingredient ↔ guides ↔ products cross-link as expected
- [ ] **No affiliate/Amazon CTA** — no Amazon purchase buttons, ASIN links, or live Amazon prices on Electrolytes pages
- [ ] **Medical-claim spot check** — no dehydration treatment, hangover cure, cramp prevention, or universal-winner framing in hero/intro copy
- [ ] **Thorne label caveat check** — Thorne Catalyte product page shows retailer-label caveat and NSF verification block

### Hub pages refreshed in Phase 14G (spot check)

- [ ] **Homepage** — mentions Creatine, Magnesium, Vitamin C, and Electrolytes; Electrolytes browse CTA and product cards render
- [ ] **`/supplements`** — four published categories in grid; intro copy includes Electrolytes
- [ ] **`/guides`** — Electrolytes guide section lists five guides
- [ ] **Search** — Electrolytes pages appear in `/search` index

---

## D. Recommended submission order

1. `https://suppcheckr.com/supplements/electrolytes` — category hub
2. `https://suppcheckr.com/supplements/electrolytes/compare` — comparison table
3. `https://suppcheckr.com/guides/lmnt-vs-liquid-iv` — branded entry guide
4. `https://suppcheckr.com/guides/how-to-choose-an-electrolyte-powder` — buyers guide
5. `https://suppcheckr.com/ingredients/electrolytes` — ingredient reference
6. Product pages (all five) — LMNT, Liquid I.V., Nuun, Ultima, Thorne
7. Remaining guides — what-are-electrolytes, sugar-free-vs-sugar-electrolytes, electrolyte-powder-vs-tablets

---

## E. GSC coverage follow-up

- [ ] Confirm no draft/noindex Electrolytes placeholder URLs appear as indexable in GSC coverage report
- [ ] Confirm legal pages (`/privacy-policy`, `/terms-of-use`, etc.) remain excluded / noindex
- [ ] Monitor indexing status for category hub and `lmnt-vs-liquid-iv` guide within 7–14 days
- [ ] Re-check Thorne product page after indexing — retailer-label caveat visible

---

## F. Not in scope for this checklist

- Amazon ASIN mapping or affiliate CTA enablement for Electrolytes
- Legal page publication or attorney sign-off
- `SITE_MODE` switch to production
- Display ad activation
- Product image replacement (placeholders remain)

---

*Phase 14G GSC checklist — execute manually post-deploy.*
