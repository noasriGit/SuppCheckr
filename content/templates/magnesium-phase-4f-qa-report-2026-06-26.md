# Magnesium Phase 4F — Editorial QA / Pre-Publication Audit

**Date:** 2026-06-29  
**Phase:** 4F — Magnesium draft cluster QA (no publication)  
**Auditor:** SuppCheckr editorial (automated + manual source re-check)

---

## A. Scope and constraints

Audited the full draft Magnesium cluster:

- Ingredient hub (`content/ingredients/magnesium.yaml`)
- Six guides (`content/guides/*magnesium*`, `what-is-magnesium.yaml`)
- Category shell (`content/categories/magnesium.yaml`)
- Five product drafts (`content/products/magnesium/*.yaml`)
- Comparison draft (`content/comparisons/magnesium-supplements-compared.yaml`)
- Scoring profile/rubric (`content/scoring/profiles/magnesium.yaml`, `content/scoring/rubrics/magnesium.yaml`)
- Brand drafts (`pure-encapsulations.yaml`, `nature-made.yaml`) and published brand boundary check (`klean-athlete`, `nutricost`, `now-foods`)

**Constraints honored:** No publication, no `noindex: false`, no affiliate enablement, no Amazon tags, no ad script enablement, no legal indexing, no threonate product YAML, no extra products, no Creatine edits, `SITE_MODE` remains prelaunch.

**Git baseline:** Phase 4E committed at `b2d4f06` on `main`; working tree clean before 4F edits.

---

## B. Publication boundary checks

| Check | Result |
|-------|--------|
| All Magnesium ingredient/guide/product/category/comparison `status: draft` | **Pass** — verified across 14 YAML entities |
| All Magnesium entities `noindex: true` | **Pass** |
| Magnesium excluded from sitemap (`getIndexable*`) | **Pass** — requires `status: published` + `noindex: false` |
| Magnesium excluded from search index (`lib/seo/searchIndex.ts`) | **Pass** |
| No product `affiliate.enabled: true` | **Pass** — all five products `enabled: false` |
| No Amazon Associate tags in content or config usage | **Pass** — `amazonAssociateTag` empty; affiliate globally disabled |
| Live ad scripts disabled | **Pass** — `ads.enabled: false`, `ads.loadScripts: false` |
| Legal pages draft/noindex | **Pass** — paths in `DRAFT_LEGAL_PATHS`; metadata noindex via `shouldNoindexStaticPath` |
| `SITE_MODE` prelaunch | **Pass** — default `prelaunch` in `config/site.ts` |
| No threonate product YAML | **Pass** — exactly five product files in `content/products/magnesium/` |
| No extra product beyond approved five | **Pass** |
| `featuredProductIds` empty on category | **Pass** — no featured exposure on category shell |

**Boundary notes (resolved in Phase 4F-2):**

1. ~~**Homepage/supplements index:** Magnesium category card lacked draft badge for `status: draft`~~ — **Fixed** in Phase 4F-2 (`CategoryCard` shows badge for `draft` and `review_ready`).
2. ~~**Published brand pages:** Draft Magnesium products listed via `isActiveContent`~~ — **Fixed** in Phase 4F-2 (`getBrandPageProducts` uses `isIndexable` on published brands).

---

## C. Product source/testing audit table

| Product | Testing status | Phase 4F re-check | Action |
|---------|----------------|-------------------|--------|
| Klean Athlete Klean Magnesium (90 caps) | **verified** | NSF Certified for Sport listing id **1281622** still active — 90 caps, 1-capsule serving, unflavored capsule (accessed 2026-06-29) | Kept **verified**; NSF access date updated; re-verify before publish |
| Nutricost Magnesium Citrate 120 | **claimed** | Brand page states third-party tested; no public COA/certificate URL for this SKU; 120-cap variant confirmed (420 mg elemental / 4 caps / 30 servings) | Kept **claimed** |
| NOW Magnesium Malate 1000 mg 180 tabs (SKU 1300) | **unknown** | NOWFoods.com confirms SKU 1300, UPC 733739013002, 113 mg elemental from 1000 mg malate, 180 servings; no verifiable third-party cert captured | Kept **unknown** |
| Pure Encapsulations Citrate/Malate 180 | **unknown** | Vitacost listing confirms Supplement Facts (120 mg elemental citrate/malate, 180 servings); no official brand-hosted product page URL found; no testing cert | Kept **unknown**; label source remains retailer with caveat |
| Nature Made Magnesium Oxide 250 mg 100 tabs | **unknown** | Target listing confirms 250 mg elemental oxide; no USP Verified or other cert database match found | Kept **unknown** |

**Threonate:** No threonate product YAML. Educational mentions only in guides/templates.

---

## D. Price refresh table

| Product | Source | Prior price | Checked 2026-06-29 | Servings | Elemental mg/serv | $/serving | $/100 mg elemental | Updated? |
|---------|--------|-------------|-------------------|----------|-------------------|-----------|-------------------|----------|
| Klean Athlete Klean Magnesium | KleanAthlete.com | $26.50 | **Not re-checked** — brand page bot/privacy wall blocked automated fetch | 90 | 120 mg | $0.29 | $0.24 | No — preserved with QA caveat |
| Nutricost Citrate 120 | Nutricost.com | $13.97 | **$13.97** unchanged | 30 | 420 mg | $0.47 | $0.11 | Date only |
| NOW Malate SKU 1300 | NOWFoods.com | $25.99 | **$25.99** unchanged | 180 | 113 mg | $0.14 | $0.13 | Date only |
| Pure Encapsulations Citrate/Malate | Vitacost | $34.80 | **$36.50** | 180 | 120 mg | $0.20 | $0.17 | **Yes** |
| Nature Made Oxide 100 tabs | Target | $4.49 | **$4.49** unchanged | 100 | 250 mg | $0.04 | $0.018 | Date only |

No Amazon or affiliate pricing used.

---

## E. Elemental magnesium calculation table

| Product | Form (label) | Compound vs elemental | Serving | Elemental mg | Calculation verified |
|---------|--------------|----------------------|---------|------------|---------------------|
| Klean Athlete | Magnesium glycinate | Elemental only on label | 1 cap | 120 mg | **Pass** |
| Nutricost | Magnesium citrate | Elemental only on label | 4 caps | 420 mg | **Pass** |
| NOW SKU 1300 | Magnesium malate | **Both** — 1000 mg malate → 113 mg elemental | 1 tab | 113 mg | **Pass** — distinction documented |
| Pure Encapsulations | Citrate/malate mixed | Total elemental only; **no per-form split** | 1 cap | 120 mg | **Pass** — mixed-form caveat present |
| Nature Made | Magnesium oxide | Elemental only on label | 1 tab | 250 mg | **Pass** — no superiority framing |

All SKU/size locks match Phase 4D-1 longlist identifiers.

---

## F. Claim-risk audit findings

**Cluster-wide search** for risky terms (`treats`, `cures`, `prevents`, `Best Overall`, `clinically proven`, `doctor recommended`, condition-ranking language) in live Magnesium YAML: **no violations found**.

Guides use conservative framing:

- Explicit negations where forms are commonly marketed for conditions (e.g., glycinate not described as sleep aid; citrate not as constipation remedy; threonate not ranked for cognition).
- NIH/FDA context cited appropriately.
- Product copy avoids energy/fatigue/pain/cardiovascular/cognitive outcome claims from brand/retailer marketing.

**Claim-risk edits in 4F:** None required beyond price/caveat updates.

---

## G. Scoring audit findings

| Check | Result |
|-------|--------|
| Profile weights sum to 100 | **Pass** — 18+16+14+12+12+12+8+4+4 = 100 |
| Rubric criteria match profile keys | **Pass** — all nine criteria aligned |
| `overallScore` matches weighted computation | **Pass** — Klean 81, Nutricost 79, NOW 78, Nature Made 77, Pure 71 |
| Klean not over-scored on certification alone | **Pass** — priceValue 30 pulls overall down appropriately |
| Nutricost not over-scored on claimed testing | **Pass** — thirdPartyTesting 50 |
| NOW not over-scored with unknown testing | **Pass** — thirdPartyTesting 40, evidenceAlignment 75 |
| Pure Encapsulations penalized for label/source gap | **Pass** — lowest overall 71; labelClarity 78, brandTransparency 65 |
| Nature Made not over-scored on price alone | **Pass** — additives 52, thirdPartyTesting 40, formulaQuality 68 offset priceValue 92 |
| No medical suitability ranking in score notes | **Pass** |

**Score changes in 4F:** None. Pure Encapsulations price increase ($0.16 → $0.17 per 100 mg elemental) is marginal and does not warrant criteria score adjustment.

---

## H. Comparison audit findings

| Check | Result |
|-------|--------|
| Exactly five approved product IDs | **Pass** |
| No threonate product | **Pass** |
| `status: draft`, `noindex: true` | **Pass** |
| Uses magnesium scoring profile (via products) | **Pass** |
| No "best overall" / "best for everyone" | **Pass** |
| No sleep/anxiety/constipation/BP/cognition ranking | **Pass** — explicit negation in methodology/ordering notes |
| Product-specific caveats preserved | **Pass** — updated Pure Encapsulations price caveat |
| Prices dated and caveated | **Pass** — `priceCheckedAt: 2026-06-29` |
| Methodology states non-medical comparison | **Pass** |
| Category-aware price label (`pricePerActiveDose` → price per 100 mg elemental) | **Pass** — category labels configured |

---

## I. Category/internal-link audit findings

| Check | Result |
|-------|--------|
| Category draft/noindex | **Pass** |
| Guide IDs and `ingredientSlug` references valid | **Pass** — six guides linked |
| `featuredProductIds: []` | **Pass** |
| Copy does not imply Magnesium is published | **Pass** — explicit draft language |
| Internal links draft-safe | **Pass** — links to draft hubs with on-page draft banners |
| No disease-use SEO pages | **Pass** |

---

## J. Brand exposure audit findings

| Brand | Status | Magnesium in `categories` array | Draft Magnesium product on brand page |
|-------|--------|--------------------------------|---------------------------------------|
| Pure Encapsulations | draft/noindex | magnesium | N/A (draft brand) |
| Nature Made | draft/noindex | magnesium | N/A (draft brand) |
| Klean Athlete | published | creatine only | **No** — Phase 4F-2 filters to indexable products only |
| Nutricost | published | creatine only | **No** — Phase 4F-2 filters to indexable products only |
| NOW Foods | published | creatine only | **No** — Phase 4F-2 filters to indexable products only |

Published brand category arrays do **not** include magnesium (correct). Draft Magnesium product cards on published brand pages were a pre-publication blocker — **resolved in Phase 4F-2**.

---

## K. Changes made

1. **`pure-encapsulations-magnesium-citrate-malate-180.yaml`** — Vitacost price $34.80 → **$36.50**; recalculated $/serving ($0.20) and $/100 mg elemental ($0.17); updated claims and source access dates.
2. **`nutricost-magnesium-citrate-120.yaml`** — `lastPriceCheckedAt` → 2026-06-29; Phase 4F updateLog.
3. **`now-foods-magnesium-malate-1000mg-180-tablets.yaml`** — `lastPriceCheckedAt` → 2026-06-29; Phase 4F updateLog.
4. **`nature-made-magnesium-oxide-250mg-100-tablets.yaml`** — `lastPriceCheckedAt` → 2026-06-29; Phase 4F updateLog.
5. **`klean-athlete-klean-magnesium.yaml`** — NSF cert access date → 2026-06-29; Phase 4F updateLog (price not re-checked).
6. **`magnesium-supplements-compared.yaml`** — Pure Encapsulations price caveat; composite price-checked note; `priceCheckedAt` → 2026-06-29.
7. **`magnesium-phase-4f-qa-report-2026-06-26.md`** — this report.
8. **`magnesium-product-score-audit-2026-06-26.md`** — Phase 4F completion note appended.
9. **Phase 4F-2 (code):** `getBrandPageProducts`, brand page filtering, `CategoryCard` draft badge — see Phase 4F-2 section below.

**Creatine content:** Not edited.

---

## L. Remaining blockers before publication

| Priority | Blocker | Owner phase |
|----------|---------|-------------|
| **High** | Pure Encapsulations official brand-hosted Supplement Facts URL not confirmed | 4G |
| **High** | Re-verify Klean Athlete price ($26.50) and confirm NSF listing still matches SKU at publish time | 4G |
| **Medium** | Nutricost — capture public COA/certificate or keep testing at claimed | 4G |
| **Medium** | Nature Made — USP Verified / testing status check in official database | 4G |
| **Low** | Product placeholder images remain | Post-publish asset phase |
| **Low** | Legal pages remain attorney-review draft/noindex | Separate legal phase |

---

## M. Recommendation

**Ready for Phase 4G publication prep** — with the blockers above explicitly tracked. Content, scoring, claim language, and draft boundaries are sound. Phase 4F-2 resolved published-surface draft exposure (brand pages and category draft badge). Publication should not proceed until official Pure Encapsulations label source is closed and Klean price/NSF re-verified at publish time.

**Suggested commit message:** `Phase 4F: audit magnesium draft cluster`

**Recommended next phase:** Phase 4G — Magnesium publication prep (resolve remaining content blockers, optional `review_ready` transition planning — still no publish unless explicitly requested).

---

## Phase 4F-2 — Draft exposure fix (2026-06-29)

### Issues addressed

1. **Published brand page draft exposure:** Klean Athlete, Nutricost, and NOW Foods brand pages listed draft Magnesium products because `isActiveContent` includes `status: draft`.
2. **Homepage category draft badge:** Magnesium category card (`status: draft`) did not show a draft badge; only `review_ready` triggered the badge.

### Fixes applied

| File | Change |
|------|--------|
| `lib/content/loader.ts` | Added `getBrandPageProducts(brand)` — published/indexable brands return `isIndexable(p)` products only; draft brands retain `isActiveContent` preview products for direct QA URLs |
| `app/brands/[brandSlug]/page.tsx` | Switched product list to `getBrandPageProducts`; draft brand banner uses `!isIndexable(brand)` |
| `components/category/CategoryBlocks.tsx` | `CategoryCard` draft badge now shows for `status: draft` **or** `review_ready` |

### Verification

- Published brand pages (Klean Athlete, Nutricost, NOW Foods): **only Creatine products** appear — no draft Magnesium cards.
- Draft Magnesium product routes (`/supplements/magnesium/products/*`) still build and render with draft/noindex banners for direct preview.
- Magnesium category, guides, ingredient, comparison, and products remain `status: draft` / `noindex: true`.
- Magnesium category card on homepage/supplements index now displays **Draft — not indexed** badge.
- Creatine brand/product display unchanged on published brand pages.
- Sitemap/search indexable Magnesium count remains **0**.
