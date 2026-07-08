# Electrolytes Product Research & Selection Checklist

Use this checklist **before** creating real electrolyte product YAML. Every candidate must pass all applicable items to advance to a future launch shortlist.

**Phase:** 14B+ (product YAML drafts) — checklist created in Phase 14A for source research prep.  
**Status key:** `[ ]` not verified · `[x]` verified · `[—]` not applicable

**Scope:** Human electrolyte dietary supplements and drink mixes only. Stick packs, tub powders, tablets, ready-to-drink beverages, and capsules may be considered in later phases. No animal/pet products. No illness-treatment or hangover landing pages.

See also: [`electrolytes-claim-language-guide.md`](./electrolytes-claim-language-guide.md), [`electrolytes-source-inventory-2026-07-07.md`](./electrolytes-source-inventory-2026-07-07.md), [`magnesium-product-research-checklist.md`](./magnesium-product-research-checklist.md).

---

## V1 bucket slots (planning — map each shortlist product to one slot)

| Slot | Bucket | Notes |
|------|--------|-------|
| 1 | **High-sodium, low/no sugar stick** | LMNT-style; sodium-forward label |
| 2 | **Sugar-containing hydration stick** | Liquid IV-style; sugar + sodium |
| 3 | **Sugar-free moderate sodium** | Nuun, Ultima, or similar |
| 4 | **Medical-adjacent / ORS-style** (optional, high claim-risk) | DripDrop — label compare only; strict claim guardrails |
| 5 | **Tub powder or tablet** | Scoop/tablet format diversity |
| 6 | **Budget / value anchor** | Price-per-serving comparison anchor |

*Final slot count and bucket mix subject to user approval before shortlist lock.*

---

## Candidate metadata

| Field | Verified | Notes / source URL |
|-------|----------|-------------------|
| Product name | [ ] | Exact name on label + retailer |
| Brand | [ ] | Brand legal/marketing name |
| Internal slug (proposed) | [ ] | e.g. `{brand}-electrolyte-{format}-{count}` |
| V1 bucket slot (1–6) | [ ] | See table above |
| Product type | [ ] | stick pack / tub powder / tablet / ready-to-drink / capsule |
| Flavor reviewed | [ ] | Lock one flavor SKU if flavors differ in formula |
| SKU specificity | [ ] | Exact size, count, UPC if available — lock one SKU |

---

## Label verification

| # | Check | Pass | Source |
|---|-------|------|--------|
| 1 | **Sodium (mg) per serving** clearly stated | [ ] | Label URL: |
| 2 | **Potassium (mg) per serving** stated or confirmed absent | [ ] | |
| 3 | **Magnesium (mg) per serving** stated or confirmed absent | [ ] | |
| 4 | **Calcium (mg) per serving** if disclosed | [ ] | N/A if not on label |
| 5 | **Chloride (mg) per serving** if disclosed | [ ] | N/A if not on label |
| 6 | Label does **not** hide electrolytes in proprietary blend without amounts | [ ] | Reject if fail |
| 7 | **Serving size** clearly stated | [ ] | |
| 8 | **Servings per container** clearly stated | [ ] | |
| 9 | **Sugar / total carbohydrates (g) per serving** captured | [ ] | |
| 10 | **Calories per serving** captured | [ ] | |
| 11 | **Sweeteners** listed (stevia, sucralose, allulose, cane sugar, dextrose, etc.) | [ ] | |
| 12 | **Additives / colors / flavors** captured | [ ] | |
| 13 | **Caffeine or other actives** captured if present | [ ] | N/A if none |
| 14 | Allergen / dietary statements captured | [ ] | |

### Format-specific caveat review (editorial notes for YAML — not claims)

| Format | Caveat to document if product passes | Reviewed |
|--------|--------------------------------------|----------|
| Stick pack | Single-serve sodium load; portability | [ ] |
| Tub powder | Scoop size; servings per tub | [ ] |
| Tablet | Tablets per serving; dissolve time | [ ] |
| Ready-to-drink | Sodium/sugar per bottle vs per serving | [ ] |
| Capsule | Distinguish from drink-mix use case | [ ] |
| High sodium | Blood pressure / kidney context in safety notes | [ ] |
| Sugar-containing | Carb/calorie disclosure; dextrose vs cane sugar | [ ] |

---

## Sources & pricing

| # | Check | Pass | Source |
|---|-------|------|--------|
| 15 | **Official product URL** exists | [ ] | |
| 16 | **Official Supplement Facts / Nutrition Facts label URL** exists | [ ] | |
| 17 | **Retailer label URL** (only if official unavailable — document caveat) | [ ] | |
| 18 | **Retailer source** exists (live US listing URL for price) | [ ] | |
| 19 | **Manual price** checkable (amount + currency + date) | [ ] | Price: $ · Date: |
| 20 | **Price per serving** calculable | [ ] | Formula: price ÷ servings per container |

**Price normalization rule:** Always use **servings per container** from label, not total package weight alone.

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
| 25 | Official brand product page discloses Nutrition/Supplement Facts or label image | [ ] | |
| 26 | A reader can identify **sodium mg + sugar g** from label within ~30 seconds | [ ] | Label clarity gate |
| 27 | Serving practicality documented (sticks per box, scoop size, RTD bottle volume, tablets per dose) | [ ] | |
| 28 | SKU on retailer matches locked checklist SKU (size, count, flavor) | [ ] | |
| 29 | Retail availability confirmed (in-stock or routinely available in US) | [ ] | |

---

## Claim-risk review

| # | Check | Pass | Notes |
|---|-------|------|-------|
| 30 | Primary listing/brand page avoids dehydration-treatment and illness-recovery claims | [ ] | |
| 31 | No hangover-cure, cramp-prevention, or performance-guarantee claims mirrored in SuppCheckr copy | [ ] | |
| 32 | No "Best Overall," "Best for Everyone," or condition-winner framing | [ ] | |
| 33 | No "FDA-approved supplement," "clinically proven" (unqualified), or "doctor recommended" unless primary-sourced | [ ] | |
| 34 | No "safe for everyone" or medical-necessity language | [ ] | |
| 35 | No kids/pregnancy/medical-condition suitability in SuppCheckr copy | [ ] | |
| 36 | Evidence for checklist is **not** drawn from Amazon reviews, blogs, or influencer content | [ ] | |
| 37 | **Claim-risk notes** captured | [ ] | |

---

## Amazon & affiliate (later phase only)

| Field | Verified | Notes |
|-------|----------|-------|
| Amazon exact-match status | [ ] | `pending` / `verified` / `rejected` / `deferred` |
| ASIN (if later verified) | [ ] | Lock only after UPC/packaging match |
| Affiliate activation status | [ ] | `disabled` until explicit enable per product |
| Rejection reasons | [ ] | e.g. UPC mismatch, packaging ambiguity (Klean Magnesium precedent) |

**Phase 14A rule:** Do not add Amazon affiliate links or ASIN mappings yet.

---

## Automatic disqualifiers

Disqualify immediately if any apply (log in disqualification section):

| Disqualifier | Example |
|--------------|---------|
| Electrolyte amounts hidden in proprietary blend | "Hydration blend 2,000 mg" with no sodium/potassium lines |
| No sodium disclosure on drink mix marketed as electrolyte | Flavor-only drops with trace minerals |
| Primary illness-treatment or ORS medical marketing | "Treats dehydration," "doctor recommended for diarrhea" |
| Hangover-cure primary positioning | "Cures hangovers" as headline claim |
| Animal/pet product | Dog or horse electrolyte |
| Amazon reviews cited as verification | Star ratings, Q&A as "evidence" |
| Unsupported "third-party tested" treated as verified | Logo only, no certificate/listing |
| Pediatric-only SKUs as V1 anchor | Out of wave-1 scope |
| Plain water enhancer without meaningful electrolytes | No comparable sodium/potassium disclosure |

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
| P3 | Re-verify sodium/potassium/sugar on current label | [ ] |
| P4 | Verify testing status (claimed vs verified) against latest certificate/COA if available | [ ] |
| P5 | Replace placeholder product images or confirm intentional pending treatment | [ ] |
| P6 | Confirm comparison UI shows category-appropriate price label (per serving) | [ ] |
| P7 | Publish in order: ingredient → guides → products → brands → category → comparison | [ ] |
| P8 | Set `noindex: false` only after QA sign-off per entity | [ ] |
| P9 | Confirm comparison publishes only after ≥5 products are published | [ ] |
| P10 | LMNT vs Liquid IV guide publishes only after both product facts are locked | [ ] |

---

## Disqualification log

| Product | Bucket attempted | Reason | Date |
|---------|------------------|--------|------|
| | | | |
