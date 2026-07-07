# Vitamin C Publication Prep Checklist

**Date:** 2026-07-07  
**Phase:** 8G prep document — **do not execute until explicit publication approval**  
**Companion report:** [`phase-8g-vitamin-c-source-gap-qa-report-2026-07-07.md`](./phase-8g-vitamin-c-source-gap-qa-report-2026-07-07.md)

This checklist describes the later Vitamin C **publication phase**. It is not the publication phase itself.

---

## A. Preconditions before publication

- [ ] **Source gaps closed or explicitly caveated**
  - [x] Nutricost Buffered mineral ascorbate split confirmed (Phase 8G)
  - [x] LivOn official Supplement Facts confirmed (Phase 8G)
  - [x] Nature Made USP database negative search documented; testing `claimed` (Phase 8G)
  - [ ] Nature Made retailer-sourced label caveat accepted (brand PDP discontinued)
  - [ ] Remaining testing gaps (claimed/unknown COAs) accepted or resolved
- [ ] **Final claim-risk review complete** — re-run risky-term lint; no disease-treatment, absorption superiority, or demographic-winner language
- [ ] **All product facts/prices/scores approved** — manual price re-check dated; scores match rubric
- [ ] **All draft pages validated** — `npm run check` and `npm run build` pass
- [ ] **Internal links checked** — category ↔ guides ↔ comparison ↔ products ↔ ingredient
- [ ] **No Amazon mapping until separate affiliate phase** — `affiliate.enabled: false` on all Vitamin C products at publication

---

## B. Files that would change in a future publication phase

| Path | Entity |
|------|--------|
| `content/categories/vitamin-c.yaml` | Category hub |
| `content/ingredients/vitamin-c.yaml` | Ingredient reference |
| `content/products/vitamin-c/now-foods-vitamin-c-1000-veg-capsules.yaml` | Product review |
| `content/products/vitamin-c/nutricost-buffered-vitamin-c-120.yaml` | Product review |
| `content/products/vitamin-c/livon-lypo-spheric-vitamin-c.yaml` | Product review |
| `content/products/vitamin-c/nutricost-vitamin-c-powder.yaml` | Product review |
| `content/products/vitamin-c/nature-made-vitamin-c-1000-mg-tablets.yaml` | Product review |
| `content/guides/what-is-vitamin-c.yaml` | Guide |
| `content/guides/how-to-choose-a-vitamin-c-supplement.yaml` | Guide |
| `content/guides/vitamin-c-dosage-guide.yaml` | Guide |
| `content/guides/vitamin-c-side-effects-and-safety.yaml` | Guide |
| `content/guides/liposomal-vitamin-c-vs-regular-vitamin-c.yaml` | Guide |
| `content/guides/buffered-vitamin-c-vs-ascorbic-acid.yaml` | Guide |
| `content/comparisons/vitamin-c-supplements-compared.yaml` | Comparison table |
| `content/brands/livon-laboratories.yaml` | Brand hub (draft → published) |

**Optional at publication (not required for cluster go-live):**

- Product placeholder images → branded or label-sourced images (separate creative phase)
- `featuredProductIds` on category shell (editorial decision)

---

## C. Publication changes to perform later

For each file in section B:

1. Set `status: draft` → `published`
2. Set `noindex: true` → `noindex: false`
3. Add `updateLog` entry documenting publication date and phase ID
4. **SEO titles/descriptions** — final read for accuracy (especially Nature Made: no independent USP verification in name)
5. **Sitemap/indexability** — confirm Vitamin C URLs appear in `/sitemap.xml` after publish
6. **Hub visibility** — confirm:
   - `/supplements` lists Vitamin C category
   - `/ingredients` lists Vitamin C ingredient
   - `/guides` lists six Vitamin C guides
   - `/compare` lists Vitamin C comparison
   - `/brands/livon-laboratories` indexable
   - Published brand pages (NOW, Nutricost, Nature Made) show Vitamin C products
7. **Search index** — confirm Vitamin C entities appear in site search data
8. **`robots` metadata** — confirm published pages serve `index, follow`

---

## D. Things not to do during publication

- [ ] **Do not add Amazon affiliate links** in the publication phase unless explicitly approved in a separate affiliate phase
- [ ] **Do not enable ads** (`config/monetization.ts` — keep `ads.enabled: false`)
- [ ] **Do not switch `SITE_MODE` to production** unless separately approved
- [ ] **Do not make legal pages indexable** unless separately approved (`DRAFT_LEGAL_PATHS` unchanged)
- [ ] **Do not change** existing Creatine/Magnesium product facts, prices, scores, testing statuses, or affiliate mappings
- [ ] **Do not publish** Klean Athlete Klean Magnesium affiliate mapping (UPC mismatch — held back)

---

## E. Post-publication checks

- [ ] `npm run check` — typecheck, lint, tests, content validation, risky-term lint
- [ ] `npm run build` — production build succeeds
- [ ] **Local page checks** (preview or staging):
  - `/supplements/vitamin-c`
  - `/ingredients/vitamin-c`
  - `/supplements/vitamin-c/compare`
  - `/guides/what-is-vitamin-c` (and five other guides)
  - Five product review URLs under `/supplements/vitamin-c/…`
  - `/brands/livon-laboratories`
- [ ] **Sitemap check** — all Vitamin C URLs present with correct `lastmod`
- [ ] **GSC indexing requests** for key URLs:
  - Category hub
  - Comparison page
  - Top guides (`what-is-vitamin-c`, `how-to-choose-a-vitamin-c-supplement`)
  - Representative product reviews (optional subset)
- [ ] **Affiliate CTA check** — Vitamin C products show no Amazon CTAs (`affiliate.enabled: false`)
- [ ] **Cross-cluster regression** — Creatine and Magnesium pages unchanged

---

## F. Separate later affiliate phase

Execute only after explicit approval and **after** publication QA:

1. **Exact Amazon ASIN mapping** per locked SKU (UPC/SKU match required)
2. **UPC/SKU matching QA** — no mismatches (Klean Magnesium precedent)
3. **No Amazon images, reviews, Q&A, or star ratings** as evidence sources
4. **No live Amazon prices** — keep dated manual prices with `lastPriceCheckedAt`
5. **Affiliate CTA activation** — set `affiliate.enabled: true` per verified SKU only after exact-match QA
6. **Disclosure** — Amazon Associates disclosure remains active site-wide; per-product affiliate blocks follow Phase 7 framework
7. **Re-validation** — `npm run check` and `npm run build` after affiliate mapping

---

## Publication score snapshot (Phase 8G, pre-publish)

| Product | Overall | Testing | $/500 mg vit C |
|---------|--------:|---------|---------------:|
| Nutricost Powder 1 lb | 87 | claimed | $0.015 |
| NOW C-1000 Veg 100 ct | 79 | unknown | $0.075 |
| Nature Made 1000 mg 100 ct | 77 | claimed (USP badge; not in USP DB) | $0.076 |
| Nutricost Buffered 120 ct | 77 | claimed | $0.125 |
| LivOn Lypo-Spheric 30 ct | 72 | unknown | $0.72 |

**Price checked:** 2026-07-07 (re-check before publication).

---

## Recommended publication commit message (future)

```
Phase 8H: publish Vitamin C supplement cluster
```

---

*Checklist only. No publication actions taken in Phase 8G.*
