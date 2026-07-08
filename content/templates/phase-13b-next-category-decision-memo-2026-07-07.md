# Phase 13B — Next Category Decision Memo

**Date:** 2026-07-07  
**Phase:** 13B planning memo (decision only — **do not start build in Phase 13A**)  
**Inputs:** Phase 8A keyword research (`phase-8a-keyword-sorted-output-2026-07-07.csv`), live cluster model (Creatine, Magnesium, Vitamin C), affiliate framework maturity

---

## Decision context

SuppCheckr now has three published, indexable supplement clusters with 14 Amazon affiliate CTAs (Klean Magnesium held back). The next category should extend comparison authority without overloading claim-risk or product-research complexity.

**Candidates evaluated:** Electrolytes, CoQ10, Vitamin D, Vitamin B12, Omega-3, Collagen

---

## Candidate comparison matrix

| Category | Keyword opportunity (Phase 8A) | Commercial upside | Claim-risk complexity | Product-review complexity | Affiliate potential | Content cluster fit |
|----------|-------------------------------|---------------------|----------------------|---------------------------|--------------------|--------------------|
| **Electrolytes** | `lmnt vs liquid iv` — vol 2,600, TP 1,100, KD 0 | **High** — branded comparison intent, repeat purchase | **Low** — label/sodium/potassium/electrolyte dose framing | **Moderate** — powders, sticks, RTD; sweetener/additive variance | **Good** — LMNT, Liquid IV, Drip Drop, Nuun SKUs on Amazon | **Excellent** — natural "vs" comparison; placeholder `/supplements/electrolytes` exists |
| **CoQ10** | `best coq10 supplement` vol 6,100 TP 13,000 KD 3; `best ubiquinol` vol 300 TP 600 KD 0 | **High** — premium softgel category | **Low–moderate** — avoid heart/statins/medical outcome framing | **Moderate** — ubiquinol vs ubiquinone, oil carrier, dose mg | **Excellent** — many Amazon SKUs (Qunol, Doctor's Best, Jarrow) | **High** — clean form/dose/testing compare model |
| **Vitamin D** | `best vitamin d supplement` vol 24,000 TP 1,700 KD 5; D+K2, MK7 sub-intents | **Very high** raw volume | **Higher** — deficiency, kids, pregnancy, K2 synergy, UL nuance | **Moderate–high** — D2/D3, IU disclosure, combo products | **Excellent** | **High** — placeholder exists; overlaps medical safety copy |
| **Vitamin B12** | `best b12 supplement` vol 7,700 TP 1,900 KD 10; methylfolate/P5P adjacency | **High** | **Moderate** — deficiency/medical framing risk if not careful | **Moderate** — methyl vs cyano, sublingual vs capsule, combo B-complex bleed | **Excellent** | **Good** — fits rubric; must avoid "deficiency treatment" positioning |
| **Omega-3** | Fish oil cluster vol modest in export; `omega-7` etc. Tier 2 | **Good** — recurring purchase | **Low** on claims; **high** on label math (EPA/DHA mg, triglyceride form) | **High** — oxidation/freshness, third-party IFOS, serving math | **Good** | **Good** — placeholder `/supplements/omega-3`; testing/label complexity slows Phase 1 |
| **Collagen** | `supplement collagen` vol 250 but TP **118,000** parent topic | **High** long-tail upside | **Moderate–high** — beauty/joint/skin claims, type I/III labeling | **Moderate** — peptides vs gelatin, dose grams, flavor additives | **Good** | **Moderate** — comparison possible but claim-risk needs tight editorial guardrails |

---

## Per-candidate notes

### Electrolytes (recommended for affiliate/comparison upside)

**Strengths:**
- Phase 8A Tier-1 branded comparison: **LMNT vs Liquid IV** (KD 0, high commercial intent)
- Natural first guide: `/guides/lmnt-vs-liquid-iv` before full five-product comparison
- Low disease-claim risk if framed as sodium/potassium/magnesium dose and additive transparency
- Strong Amazon SKU availability across powder/stick/RTD formats
- Placeholder category already in repo

**First build sequence:**
1. Source rules + scoring profile (sodium/potassium/electrolyte disclosure, sweeteners, price per serving)
2. Product longlist (LMNT, Liquid IV, Drip Drop, Nuun, maybe Ultima or Redmond Re-Lyte)
3. Guide: LMNT vs Liquid IV
4. Category hub + comparison table

**Risks:** Hydration/illness recovery marketing on competitor sites — avoid medical rehydration claims.

---

### CoQ10 (recommended for clean supplement authority)

**Strengths:**
- Strong commercial head terms with low KD (`best coq10 supplement` KD 3)
- Clear comparison axis: ubiquinol vs ubiquinone, mg dose, oil carrier, softgel additives
- Lower medical nuance than Vitamin D
- Excellent Amazon affiliate density

**First build sequence:**
1. Ingredient hub (ubiquinone vs ubiquinol education)
2. Guide: ubiquinol vs ubiquinone
3. Five-product comparison across major softgel brands
4. Dosage label-reading guide (mg CoQ10 per softgel, not "supports heart health")

**Risks:** Statins/heart-failure adjacency in search results — keep copy label-focused.

---

### Vitamin D

**Strengths:** Highest raw search volume in export; placeholder exists; D3/K2 combo guides have Tier-2 support.

**Weaknesses:** Kids queries flagged caution in Phase 8A; IU vs mcg labeling; medical/deficiency framing; higher editorial burden than CoQ10 or Electrolytes.

**Defer unless:** Goal is maximum traffic over speed-to-publish.

---

### Vitamin B12

**Strengths:** Solid volume; clear form comparison (methylcobalamin vs cyanocobalamin).

**Weaknesses:** Search intent skews deficiency/medical; methylfolate/P5P subtopics add scope creep.

**Best as:** Tier-2 after CoQ10 or Electrolytes unless explicitly targeting B-vitamin cluster.

---

### Omega-3

**Strengths:** Placeholder exists; strong consumer demand; EPA/DHA mg comparison fits rubric.

**Weaknesses:** Highest product-research complexity (freshness, oxidation, IFOS verification, triglyceride vs ethyl ester). Slower to first publication.

---

### Collagen

**Strengths:** Massive parent-topic traffic potential (TP 118k on head collateral keyword).

**Weaknesses:** Beauty/joint/skin claim risk; type/source labeling inconsistency; less clean than mineral/vitamin clusters.

**Best as:** Later authority play after core performance/wellness minerals and vitamins.

---

## Recommendations

### If the goal is affiliate/comparison upside → **Electrolytes next**

LMNT vs Liquid IV is the strongest immediate branded comparison opportunity in Phase 8A with KD 0 and direct Amazon monetization path. A single high-intent guide can ship before a full five-product cluster.

### If the goal is clean supplement authority → **CoQ10 next**

Ubiquinol vs ubiquinone is a textbook SuppCheckr form comparison with lower medical nuance than Vitamin D and lower label math burden than Omega-3.

---

## Recommended Phase 14 path

| Phase | Focus | Deliverable |
|-------|-------|-------------|
| **14A** | Electrolytes research | Source rules, scoring profile, product longlist, LMNT vs Liquid IV guide draft |
| **14B** | Electrolytes draft cluster | 5 product reviews, comparison table, ingredient hub |
| **14C** | Electrolytes publication + Amazon mapping | Publish cluster, enable affiliate CTAs, GSC submission |
| **15A** | CoQ10 planning | Keyword refresh, source rules, ubiquinol vs ubiquinone guide blueprint |

**Parallel track (unchanged):** Legal pages remain draft/noindex until attorney sign-off (Phase 11 human review). Do not block category work on legal publication, but do not remove draft banners.

---

## Explicit non-actions (Phase 13B)

- Do **not** start Electrolytes, CoQ10, Vitamin D, B12, Omega-3, or Collagen YAML publication in Phase 13A
- Do **not** add new Amazon ASIN mappings until product research phase completes
- Do **not** enable ads or switch `SITE_MODE` to production

---

*Decision memo only. Implementation begins in Phase 14A upon approval.*
