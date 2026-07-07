# Phase 8A — Keyword Sorting & Next-Category Selection

**Date:** 2026-07-07  
**Project:** SuppCheckr.com (prelaunch)  
**Phase type:** Analysis / planning only — no live content changes

---

## A. Scope and constraints

This report classifies Ahrefs keyword exports to support the next human supplement category decision. It follows all Phase 8A guardrails:

- Human supplements and vitamins only — animal/pet/veterinary keywords rejected
- No product pages, category pages, guide pages, or live config changes in this phase
- `SITE_MODE` remains prelaunch; ads disabled; legal pages remain draft/noindex
- Existing product facts, scores, affiliate mappings unchanged
- Magnesium citrate vs glycinate / glycinate vs citrate map to the **existing** guide at `/guides/magnesium-glycinate-vs-citrate` (no duplicate pages)
- `lmnt vs liquid iv` flagged for a future Electrolytes cluster

---

## B. Input files analyzed

| File | Location | Rows | Notes |
|------|----------|------|-------|
| `google_us_best-suppliment_search-suggestions_2026-07-07_14-34-56.csv` | User Downloads | 192 keywords | Broad “best supplement” suggestion export (UTF-16 TSV) |
| `google_us_ag1-review-amazing-grass-r_overview_2026-07-07_13-54-05.csv` | User Downloads | 3 keywords | Targeted comparison terms (magnesium forms, LMNT vs Liquid IV) |

**Columns used:** Keyword, Difficulty (KD), Volume, CPC, Parent Keyword, Traffic potential, Intents, Category

**Normalization:** lowercase, trim, dedupe exact matches (195 unique keywords after merge)

**Companion output:** `content/templates/phase-8a-keyword-sorted-output-2026-07-07.csv`

---

## C. Classification rules

| Rule | Label | Action |
|------|-------|--------|
| Animal/pet/veterinary terms | Reject — non-human supplement intent | Exclude from all target lists |
| Store near me, coupons, local retailer names | Reject — local/store/coupon intent | Exclude |
| Peptides, MOTS-c, IGF-1, NMN, gray-area hormones | Reject — high-risk medical/gray-area intent | Exclude |
| Cure/treat/reverse, condition protocols, H. pylori, etc. | Reject — disease-treatment intent | Exclude |
| Containers, jobs, Medicare, affiliate programs | Reject — not a supplement content fit | Exclude |
| Kids, pregnancy, testosterone, liver/kidney framing, etc. | Caution — requires conservative framing | Keep with YMYL notes only |
| Maps to published Creatine/Magnesium guide | Existing-page optimization | Optimize existing URL |
| Strong category head terms | New category candidate | Future hub/cluster |
| Branded product queries | Product review candidate | Future product page (none prioritized in this export) |

---

## D. Summary counts

| Metric | Count |
|--------|------:|
| **Total keywords processed** | 195 |
| **Kept (non-reject)** | 69 |
| Existing-page optimizations | 2 |
| New guide candidates | 1 |
| New category candidates | 55 |
| Product review candidates | 0 |
| Caution | 6 |
| **Rejected** | 126 |
| **Rejected — non-human/animal intent** | **5** |

### Reject breakdown

| Reject reason | Count |
|---------------|------:|
| Disease-treatment intent | 37 |
| Not a supplement content fit | 30 |
| High-risk medical/gray-area intent | 26 |
| Local/store/coupon intent | 23 |
| Non-human supplement intent | 5 |
| Non-US geo intent (UK/Australia) | 5 |

---

## E. Top 25 immediate keyword opportunities

Ranked by editorial priority score (KD, volume, traffic potential, commercial intent, SuppCheckr fit, claim risk). Tier 1 only unless noted.

| Rank | Keyword | KD | Vol | TP | Status | Suggested URL |
|-----:|---------|---:|----:|---:|--------|---------------|
| 1 | magnesium glycinate vs citrate | 6 | 33,000 | 28,000 | Existing-page optimization | `/guides/magnesium-glycinate-vs-citrate` |
| 2 | magnesium citrate vs glycinate | 5 | 16,000 | 28,000 | Existing-page optimization | `/guides/magnesium-glycinate-vs-citrate` |
| 3 | best vitamin c supplement | 5 | 8,100 | 49,000 | New category candidate | `/supplements/vitamin-c` |
| 4 | best vitamin d supplement | 5 | 24,000 | 1,700 | New category candidate | `/supplements/vitamin-d` |
| 5 | best b12 supplement | 10 | 7,700 | 1,900 | New category candidate | `/supplements/vitamin-b12` |
| 6 | best coq10 supplement | 3 | 6,100 | 13,000 | New category candidate | `/supplements/coq10` |
| 7 | lmnt vs liquid iv | 0 | 2,600 | 1,100 | New guide candidate | `/guides/lmnt-vs-liquid-iv` |
| 8 | best vitamin b12 supplement | 0 | 1,900 | 1,000 | New category candidate | `/supplements/vitamin-b12` |
| 9 | liposomal vitamin c supplement | 2 | 700 | 5,500 | New category candidate | `/supplements/vitamin-c` |
| 10 | best vitamin c supplement for women | 3 | 350 | 28,000 | New category candidate | `/supplements/vitamin-c` |
| 11 | best ubiquinol supplement | 0 | 300 | 600 | New category candidate | `/supplements/coq10` |
| 12 | best l arginine supplement | 3 | 300 | 59,000 | New category candidate | `/supplements/citrulline` |
| 13 | supplement collagen | 9 | 250 | 118,000 | New category candidate | `/supplements/collagen` |
| 14 | best l glutamine supplement | 3 | 250 | 18,000 | New category candidate | `/supplements/l-glutamine` |
| 15 | best vitamin c supplement for absorption | 4 | 150 | 53,000 | New category candidate | `/supplements/vitamin-c` |
| 16 | best natural vitamin c supplement | 1 | 150 | 10 | New category candidate | `/supplements/vitamin-c` |
| 17 | best l reuteri supplement | 3 | 150 | 60 | New category candidate | `/supplements/probiotics` |
| 18 | best l methylfolate supplement | 0 | 100 | 13,000 | New category candidate | `/supplements/vitamin-b12` |
| 19 | best vitamin d2 supplement | 2 | 80 | 8,200 | New category candidate | `/supplements/vitamin-d` |
| 20 | best supplement for fiber | 10 | 70 | 32,000 | New category candidate | `/supplements/fiber` |
| 21 | best omega 7 supplement | 0 | 60 | 1,000 | New category candidate | `/supplements/omega-3` |
| 22 | p 5 p supplement | 0 | 50 | 1,300 | New category candidate | `/supplements/vitamin-b12` |
| 23 | best brand vitamin c supplement | 9 | 50 | — | New category candidate | `/supplements/vitamin-c` |
| 24 | vitamin c best supplement | 9 | 40 | 53,000 | New category candidate | `/supplements/vitamin-c` |
| 25 | best supplement collagen | 6 | 10 | 26,000 | New category candidate | `/supplements/collagen` |

---

## F. Existing-page optimization targets

These keywords should **not** receive new URLs. Optimize the published guides instead.

| Keyword | KD | Vol | TP | Existing URL | Action |
|---------|---:|----:|---:|--------------|--------|
| magnesium glycinate vs citrate | 6 | 33,000 | 28,000 | `/guides/magnesium-glycinate-vs-citrate` | Strengthen H1/meta, comparison table, FAQ for both phrasings |
| magnesium citrate vs glycinate | 5 | 16,000 | 28,000 | `/guides/magnesium-glycinate-vs-citrate` | Same page — add synonym coverage in intro and FAQ |

**Additional existing mappings (not in export but align with live cluster):**

| Keyword pattern | Existing URL |
|-----------------|--------------|
| creatine hcl vs monohydrate / monohydrate vs hcl | `/guides/creatine-monohydrate-vs-hcl` |
| how to choose creatine | `/guides/how-to-choose-a-creatine-supplement` |
| creatine dosage | `/guides/creatine-dosage-guide` |
| magnesium dosage | `/guides/magnesium-dosage-guide` |
| magnesium side effects | `/guides/magnesium-side-effects-and-safety` |
| types of magnesium | `/guides/types-of-magnesium` |

**Note:** `mag 7 supplement` (KD 2, vol 200, TP 5,900) is a **branded laxative product** (Mag O7), not a magnesium-form education query — do **not** route to `/guides/types-of-magnesium`.

---

## G. New category candidate ranking

Editorial ranking combining keyword data, SuppCheckr comparison model fit, claim risk, and Amazon monetization.

| Rank | Category | Keywords kept | Vol sum | TP sum | KD range | Commercial intent | Claim/legal risk | Amazon fit | Comparison clarity | Recommended next action |
|-----:|----------|:------------:|--------:|-------:|----------|-------------------|------------------|------------|-------------------|---------------------------|
| 1 | **Vitamin C** | 9 | 9,990 | 189,810 | 1–9 | High | Low | Excellent | High (form, dose, fillers) | Build category hub + form comparison guides |
| 2 | **CoQ10 / Ubiquinol** | 2 | 6,400 | 13,600 | 0–3 | High | Low–moderate | Excellent | High (ubiquinol vs ubiquinone) | Build hub; compare labeled forms and softgel oils |
| 3 | **Electrolytes** | 1 | 2,600 | 1,100 | 0 | High (branded) | Low | Good | High (LMNT vs Liquid IV) | Publish `/guides/lmnt-vs-liquid-iv`, then expand hub |
| 4 | **Vitamin D** | 6 | 25,450 | 21,300 | 2–10 | High | Low (avoid kids lead) | Excellent | High (D2/D3, K2 combos) | Activate placeholder `/supplements/vitamin-d` |
| 5 | **Vitamin B12** | 5 | 10,850 | 17,300 | 0–10 | High | Low | Excellent | High (methyl vs cyano, folate) | New hub; methylfolate/P5P as sub-guides |
| 6 | **Collagen** | 2 | 260 | 144,000 | 6–9 | High | Low–moderate | Good | Moderate (type/source labeling) | Hub after core vitamins; huge parent-topic TP |
| 7 | **Citrulline / Arginine** | 2 | 600 | 59,600 | 0–3 | High | Low | Good | High | Performance-adjacent; clear label compare |
| 8 | **Fish Oil / Omega-3** | 5 | 520 | 2,150 | 0–6 | Moderate | Low | Good | High (omega-3/7/9 education) | Extend existing `omega-3` placeholder |
| 9 | **Iron** | 1 | 1,300 | 11,000 | 6 | High | Moderate (GI claims) | Good | High (form, elemental iron) | Tier-2 after vitamins |
| 10 | **Probiotics** | 2 | 750 | 510 | 3 | Moderate | Moderate | Moderate | Moderate (strain transparency) | Later; strain-level complexity |
| 11 | **L-Theanine / L-Tyrosine** | 2 | 2,100 | 1,400 | 2–5 | Moderate | Moderate (mood framing) | Good | High | Avoid anxiety-treatment framing |
| 12 | **Zinc** | 1 | 350 | 300 | 10 | High | **Caution** (testosterone) | Good | High | Only with conservative copy |
| 13 | **Fiber** | 1 | 70 | 32,000 | 10 | High | Low | Good | High | Strong TP; single keyword in export |
| 14 | **Quercetin** | 1 | 1,400 | 1,000 | 1 | High | Low | Good | Moderate | Tier-2 specialty antioxidant |
| 15 | **Digestive Enzymes** | 1 | 1,700 | 1,900 | 6 | Moderate | **Caution** (gut disease adjacency) | Moderate | Moderate | Defer or safety-only framing |

**Deprioritize despite volume/TP:** liver health, kidney health, inflammation, joint pain, stress/anxiety stacks, weight loss stacks, supplement stacks, gray-area longevity (NMN, MOTS-c, IGF-1).

---

## H. Human-only rejection list (non-human supplement intent)

| Keyword | KD | Vol | Reason |
|---------|---:|----:|--------|
| vitamin e supplement for horses | 1 | 600 | Equine use |
| best joint supplement for horses | 4 | 450 | Equine use |
| best urinary supplement for dogs | 0 | 150 | Canine use |
| best vitamin e supplement for horses | 0 | 150 | Equine use |
| vitamin k dosage for dogs rat poison | 4 | 50 | Veterinary/medical emergency context |

**Combined animal-keyword volume rejected:** 1,400/mo (attractive KD/volume but permanently out of scope).

---

## I. Other rejection groups (samples)

### Local / store / coupon intent (23 keywords)

- supplement store near me (vol 29,000)
- supplement superstore, supplement warehouse, supplement world
- supplement hunt discount code, supplement warehouse coupon code
- supplement xpress el paso tx, supplement superstore springfield missouri

### High-risk medical / gray-area intent (26 keywords)

- mots c dosage (vol 5,400)
- best igf 1 supplement, nmnh supplement, best nmn supplement 1000mg
- supplement gaba, supplement glutathione, supplement dhea
- im8 supplement, mitoq supplement, neuroq supplement, maggie q supplements

### Disease-treatment intent (37 keywords)

- best supplement for liver health / fatty liver / kidney health
- supplement for inflammation, best supplement for bloating, best supplement for stress
- best supplements for h pylori, 9 best supplements for hashimoto's
- supplement after gallbladder removal, best supplements for type 1 diabetes
- best zinc supplement for acne (condition-framed)

### Not a supplement content fit (30 keywords)

- supplement containers, bottles, jars, organizer, dispenser, storage
- supplement affiliate programs, supplement ads, supplement jobs, supplement hs code
- supplement quiz, supplement examples, supplement g (Medicare Part G)

### Non-US geo intent (5 keywords)

- best vitamin c supplement uk, best zinc supplement uk, best vitamin b supplement australia, etc.

---

## J. Recommended next category

### Primary recommendation: **Vitamin C**

**Why Vitamin C over alternatives:**

1. **Strongest cluster in this export** — 9 kept keywords, ~190k aggregate traffic potential, KD mostly 1–9
2. **Perfect SuppCheckr fit** — label transparency (ascorbic acid vs whole-food vs liposomal), dose clarity, filler/additive comparison, third-party testing, value-per-mg
3. **Low YMYL risk** when framed as label education (avoid immunity/disease treatment claims)
4. **Excellent Amazon monetization** — many comparable SKUs, affiliate CTAs already proven on Creatine/Magnesium
5. **Clear content ladder** — hub → form guides (liposomal vs standard) → product comparisons

**Runner-up: Electrolytes** — `lmnt vs liquid iv` is the single best **comparison-page** opportunity (KD 0, branded, high intent). Best pursued as the **first guide within an Electrolytes cluster**, especially since `content/categories/electrolytes.yaml` already exists as a placeholder.

**Not recommended next:** Vitamin D head term has highest raw volume (24k) but lower immediate TP on the head keyword and overlaps with an existing placeholder; still a strong **#2 or #3** build after Vitamin C hub scaffolding.

---

## K. Recommended next 10 pages / optimizations

Planning targets only — **do not build in Phase 8A**.

| Priority | Type | Target | Rationale |
|:--------:|------|--------|-----------|
| 1 | **Optimization** | `/guides/magnesium-glycinate-vs-citrate` | 49k combined vol; already published; highest ROI |
| 2 | **Category hub** | `/supplements/vitamin-c` | Top new-category cluster; multiple Tier-1 keywords |
| 3 | **Comparison guide** | `/guides/lmnt-vs-liquid-iv` | KD 0; explicit pre-identified signal; Electrolytes entry point |
| 4 | **Category hub** | `/supplements/coq10` | KD 0–3; ubiquinol comparison angle |
| 5 | **Guide** | `/guides/liposomal-vitamin-c-vs-ascorbic-acid` (proposed) | Supports liposomal + absorption keywords |
| 6 | **Category hub** | `/supplements/vitamin-d` | Activate placeholder; D2/D3/K2 subtopics |
| 7 | **Category hub** | `/supplements/vitamin-b12` | Methylfolate/P5P long-tail support |
| 8 | **Category hub** | `/supplements/collagen` | Massive parent-topic TP (118k+) |
| 9 | **Optimization** | `/guides/creatine-monohydrate-vs-hcl` | Not in export but core existing cluster |
| 10 | **Category hub** | `/supplements/omega-3` | Placeholder exists; moderate keyword support |

---

## L. Risks and notes

1. **Export skew:** The “best supplement” suggestion list over-indexes local retail, disease-framing, and gray-area longevity terms — 64.6% rejected. Future exports should include category-specific seeds (e.g., “best vitamin c”, “coq10 vs ubiquinol”).
2. **Traffic potential vs volume:** Collagen and several Vitamin C terms show **much higher TP than direct volume** — prioritize parent-topic opportunity, not head volume alone.
3. **Caution keywords in export:** 6 terms flagged (kids vitamin D/C, digestive enzymes, zinc/testosterone, omega-3 kids, supplement energy). Build adult-general education first.
4. **Placeholder categories exist** for vitamin-d, electrolytes, omega-3, collagen, fiber, probiotics — Phase 8B should **activate** placeholders rather than invent new slugs.
5. **No creatine/magnesium dosage terms** appeared in this export — existing guides still matter; continue internal linking from hubs.
6. **Animal keywords:** Only 5 in this export, but rejection is mandatory regardless of KD/volume.

---

## M. Recommended next phase

**Phase 8B — Category selection sign-off & content blueprint**

1. Confirm Vitamin C as next published cluster (or Electrolytes-first if prioritizing `lmnt vs liquid iv`)
2. Draft category hub outline: scoring rubric, product shortlist criteria, claim-language guardrails
3. Plan magnesium guide SEO optimization pass (no new URL)
4. Copy keyword CSV into repo at `content/keyword-research/` for version control
5. Do **not** enable ads, change `SITE_MODE`, or index legal pages

**Suggested commit message:**

```
Phase 8A: sort keyword research opportunities
```

---

*Generated from Ahrefs exports dated 2026-07-07. Full per-keyword classification: `phase-8a-keyword-sorted-output-2026-07-07.csv`.*
