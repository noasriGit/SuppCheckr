# Vitamin C Product Research & Selection Checklist

Use this checklist **before** creating real vitamin C product YAML. Every candidate must pass all applicable items to advance to a future launch shortlist.

**Phase:** 8D+ (product YAML drafts) — checklist created in Phase 8C for source research prep.  
**Status key:** `[ ]` not verified · `[x]` verified · `[—]` not applicable

**Scope:** Human vitamin C dietary supplements only. Powders, capsules, tablets, liquids, liposomal softgels, and gummies may be considered in later phases. No animal/pet products. No immune-disease or demographic landing pages.

See also: [`vitamin-c-claim-language-guide.md`](./vitamin-c-claim-language-guide.md), [`magnesium-product-research-checklist.md`](./magnesium-product-research-checklist.md), [`vitamin-c-source-inventory-2026-07-07.md`](./vitamin-c-source-inventory-2026-07-07.md).

---

## V1 bucket slots (planning — map each shortlist product to one slot)

| Slot | Bucket | Notes |
|------|--------|-------|
| 1 | **Basic ascorbic acid** capsule/tablet | High-volume baseline; clear label compare |
| 2 | **Buffered vitamin C** (sodium/calcium ascorbate) | Mineral contribution; stomach-tolerance marketing |
| 3 | **Liposomal vitamin C** | Label complexity; absorption marketing risk |
| 4 | **Powder vitamin C** | Value/dose flexibility; additive scrutiny |
| 5 | **Third-party tested / premium** | NSF, USP, or verifiable COA |
| 6 | **Budget common option** | Price-per-mg anchor |

*Final slot count and bucket mix subject to user approval before shortlist lock.*

---

## Candidate metadata

| Field | Verified | Notes / source URL |
|-------|----------|-------------------|
| Product name | [ ] | Exact name on label + retailer |
| Brand | [ ] | Brand legal/marketing name |
| Internal slug (proposed) | [ ] | e.g. `{brand}-vitamin-c-1000mg-ascorbic-acid` |
| V1 bucket slot (1–6) | [ ] | See table above |
| Form | [ ] | ascorbic acid / sodium ascorbate / calcium ascorbate / buffered blend / liposomal / powder / liquid / gummy / capsule/tablet |
| Product format | [ ] | capsule / tablet / powder / liquid / softgel / gummy |
| SKU specificity | [ ] | Exact size, count, strength, UPC if available — lock one SKU |

---

## Label & form verification

| # | Check | Pass | Source |
|---|-------|------|--------|
| 1 | Vitamin C **form clearly identified** on Supplement Facts (not just "vitamin C complex") | [ ] | Label URL: |
| 2 | **Vitamin C amount (mg) per serving** clearly stated | [ ] | |
| 3 | Label does **not** hide vitamin C mg inside proprietary blend without per-ingredient amounts | [ ] | Reject if fail |
| 4 | **Serving size** clearly stated | [ ] | |
| 5 | **Servings per container** clearly stated | [ ] | |
| 6 | Additives / fillers / sweeteners captured | [ ] | |
| 7 | **Sugar content** captured if gummy, chewable, liquid, or flavored powder | [ ] | N/A if not applicable |
| 8 | **Sodium contribution** documented if sodium ascorbate or label discloses sodium | [ ] | N/A if not applicable |
| 9 | **Calcium contribution** documented if calcium ascorbate or label discloses calcium | [ ] | N/A if not applicable |
| 10 | Allergen / dietary statements captured (gluten, vegan, etc.) | [ ] | |
| 11 | Liposomal: vitamin C mg distinguishable from liposomal blend weight | [ ] | N/A if not liposomal |
| 12 | Proprietary blend **without** per-ingredient amounts — excluded | [ ] | Disqualifier if hidden |

### Form-specific caveat review (editorial notes for YAML — not claims)

| Form | Caveat to document if product passes | Reviewed |
|------|--------------------------------------|----------|
| Ascorbic acid | GI tolerance; tablet size; acid marketing | [ ] |
| Sodium ascorbate | Sodium mg per serving; "buffered" marketing | [ ] |
| Calcium ascorbate | Calcium mg per serving | [ ] |
| Buffered blend | Total vitamin C mg; mineral contributions | [ ] |
| Liposomal | Proprietary blend clarity; absorption marketing | [ ] |
| Powder / liquid | Sweeteners, scoop practicality, stability notes | [ ] |
| Gummy | Sugar, gelatin/pectin, dye load | [ ] |

---

## Sources & pricing

| # | Check | Pass | Source |
|---|-------|------|--------|
| 13 | **Official product URL** exists | [ ] | |
| 14 | **Official label URL** exists (brand Supplement Facts) | [ ] | |
| 15 | **Retailer label URL** (only if official unavailable — document caveat) | [ ] | |
| 16 | **Retailer source** exists (live US listing URL for price) | [ ] | |
| 17 | **Manual price** checkable (amount + currency + date) | [ ] | Price: $ · Date: |
| 18 | **Price per serving** calculable | [ ] | Formula: price ÷ servings per container |
| 19 | **Price per 500 mg vitamin C** calculable | [ ] | Formula: price ÷ (vitamin C mg per serving × servings) × 500 |
| 20 | **Price per 1,000 mg vitamin C** calculable (if useful for cluster) | [ ] | Formula: price ÷ (vitamin C mg per serving × servings) × 1,000 |

**Price normalization rule:** Always use **vitamin C mg per serving** from Supplement Facts, not total capsule weight, fruit powder weight, or proprietary blend weight.

---

## Testing & certifications

| # | Check | Pass | Evidence |
|---|-------|------|----------|
| 21 | Third-party testing status assigned | [ ] | `verified` / `claimed` / `unknown` / `not_claimed` |
| 22 | If `verified`: certificate or program listing URL saved | [ ] | NSF / USP / Informed Sport / other: |
| 23 | Testing source URL | [ ] | |
| 24 | "Tested" marketing **without** verifiable evidence → downgrade to `claimed` or `unknown` | [ ] | Do not use Amazon reviews as evidence |

**Testing rules:**

- `verified` — only with official program database entry, published COA matched to SKU, or certification body listing
- `claimed` — brand states testing but no verifiable public evidence
- `unknown` — no testing mention
- `not_claimed` — brand explicitly does not claim testing

---

## Brand transparency & serving practicality

| # | Check | Pass | Notes |
|---|-------|------|-------|
| 25 | Official brand product page discloses Supplement Facts or label image | [ ] | |
| 26 | A reader can identify **form + vitamin C mg** from label within ~30 seconds | [ ] | Label clarity gate |
| 27 | Serving practicality documented (capsules per dose, scoop size, liquid volume, gummies per serving) | [ ] | |
| 28 | SKU on retailer matches locked checklist SKU (size, count, strength) | [ ] | |
| 29 | Retail availability confirmed (in-stock or routinely available in US) | [ ] | |

---

## Claim-risk review

| # | Check | Pass | Notes |
|---|-------|------|-------|
| 30 | Primary listing/brand page avoids disease-treatment claims | [ ] | |
| 31 | No "Best Overall," "Best for Everyone," or condition-winner framing | [ ] | |
| 32 | Cold, flu, COVID, cancer, immunity-booster claims **not** mirrored in SuppCheckr copy | [ ] | See claim language guide |
| 33 | No "FDA-approved supplement," "clinically proven" (unqualified), or "doctor recommended" unless primary-sourced | [ ] | |
| 34 | No "safe for everyone" or "no side effects" | [ ] | |
| 35 | No kids/pregnancy/women-specific medical positioning in SuppCheckr copy | [ ] | |
| 36 | Evidence for checklist is **not** drawn from Amazon reviews, blogs, or influencer content | [ ] | |
| 37 | Claim-risk notes captured | [ ] | |

---

## Amazon & affiliate (later phase only)

| Field | Verified | Notes |
|-------|----------|-------|
| Amazon exact-match status | [ ] | `pending` / `verified` / `rejected` / `deferred` |
| ASIN (if later verified) | [ ] | Lock only after UPC/packaging match |
| Affiliate activation status | [ ] | `disabled` until explicit enable per product |
| Rejection reasons | [ ] | e.g. UPC mismatch, packaging ambiguity (Klean Magnesium precedent) |

**Phase 8C rule:** Do not add Amazon affiliate links or ASIN mappings yet.

---

## Automatic disqualifiers

Disqualify immediately if any apply (log in disqualification section):

| Disqualifier | Example |
|--------------|---------|
| Vitamin C mg hidden in proprietary blend | "Immune blend 500 mg" with no vitamin C line |
| Only fruit powder weight, no vitamin C mg | "1,000 mg acerola powder" with no ascorbate mg |
| Primary disease-treatment marketing | "Prevents colds," "treats COVID," "fights cancer" |
| Animal/pet product | Dog or horse vitamin C |
| Amazon reviews cited as verification | Star ratings, Q&A as "evidence" |
| Unsupported "third-party tested" treated as verified | Logo only, no certificate/listing |
| Pediatric/prenatal-only SKUs as V1 anchor | Out of wave-1 scope |
| Multi-active immune stack without clear vitamin C dose | Zinc + elderberry + blend hiding vitamin C mg |

---

## Approval gates

| Gate | Status | Approver | Date |
|------|--------|----------|------|
| Checklist complete (all applicable items) | [ ] | | |
| Added to longlist | [ ] | | |
| Added to launch shortlist | [ ] | **User approval required** | |
| Ready for product YAML draft | [ ] | | |

---

## Pre-publication checklist (run before setting `status: published`)

| # | Task | Done |
|---|------|------|
| P1 | **Re-check all manual prices and `lastPriceCheckedAt` before setting published** | [ ] |
| P2 | Confirm retailer URLs still resolve | [ ] |
| P3 | Re-verify vitamin C mg and form on current label | [ ] |
| P4 | Verify testing status (claimed vs verified) against latest certificate/COA if available | [ ] |
| P5 | Replace placeholder product images or confirm intentional pending treatment | [ ] |
| P6 | Confirm comparison UI shows category-appropriate price label (per 500 mg vitamin C) | [ ] |
| P7 | Publish in order: ingredient → guides → products → brands → category → comparison | [ ] |
| P8 | Set `noindex: false` only after QA sign-off per entity | [ ] |
| P9 | Confirm comparison publishes only after ≥5 products are published | [ ] |

---

## Disqualification log

| Product | Bucket attempted | Reason | Date |
|---------|------------------|--------|------|
| | | | |
