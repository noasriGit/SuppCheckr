# CoQ10 Product Research & Selection Checklist

Use this checklist **before** creating real CoQ10 product YAML. Every candidate must pass all applicable items to advance to a future launch shortlist.

**Phase:** 15B+ (product YAML drafts) — checklist created in Phase 15A for source research prep.  
**Status key:** `[ ]` not verified · `[x]` verified · `[—]` not applicable

**Scope:** Human CoQ10 dietary supplements only. Softgels, capsules, tablets, liquids, and gummies may be considered in later phases. No animal/pet products. No heart-disease, statin, or medication-advice landing pages.

See also: [`coq10-claim-language-guide.md`](./coq10-claim-language-guide.md), [`coq10-source-inventory-2026-07-07.md`](./coq10-source-inventory-2026-07-07.md), [`vitamin-c-product-research-checklist.md`](./vitamin-c-product-research-checklist.md).

---

## V1 bucket slots (planning — map each shortlist product to one slot)

| Slot | Bucket | Notes |
|------|--------|-------|
| 1 | **Ubiquinol softgel (premium form)** | e.g., Qunol Mega Ubiquinol, Doctor's Best Ubiquinol — verify locked SKU |
| 2 | **Ubiquinone softgel (mainstream)** | e.g., Doctor's Best Ubiquinone, NOW CoQ10 — verify oil base |
| 3 | **100 mg dose anchor** | Common retail dose — form may vary |
| 4 | **200 mg dose anchor** | Higher dose — serving count and price/100 mg context |
| 5 | **Budget/value ubiquinone** | Price-per-100-mg anchor |
| 6 | **Combo / defer** (PQQ, omega-3, high claim-risk) | Defer unless strong label case — document complexity |

*Final slot count and bucket mix subject to user approval before shortlist lock.*

---

## Candidate metadata

| Field | Verified | Notes / source URL |
|-------|----------|-------------------|
| Product name | [ ] | Exact name on label + retailer |
| Brand | [ ] | Brand legal/marketing name |
| Internal slug (proposed) | [ ] | e.g. `{brand}-coq10-{form}-{dose}mg-{count}` |
| V1 bucket slot (1–6) | [ ] | See table above |
| CoQ10 form | [ ] | ubiquinone / ubiquinol / unclear |
| Product type | [ ] | softgel / capsule / tablet / gummy / liquid |
| Flavor reviewed | [ ] | Lock one SKU if flavors differ in formula |
| SKU specificity | [ ] | Exact size, count, UPC if available — lock one SKU |

---

## Label verification

| # | Check | Pass | Source |
|---|-------|------|--------|
| 1 | **CoQ10 form** clearly stated (ubiquinone or ubiquinol) | [ ] | Label URL: |
| 2 | **CoQ10 mg per serving** clearly stated | [ ] | |
| 3 | Label does **not** hide CoQ10 in proprietary blend without mg | [ ] | Reject if fail |
| 4 | **Serving size** clearly stated | [ ] | |
| 5 | **Servings per container** clearly stated | [ ] | |
| 6 | **Softgels/capsules per serving** captured | [ ] | |
| 7 | **Total CoQ10 mg per container** computed (serving mg × servings) | [ ] | |
| 8 | **Carrier oil/base** captured if softgel (olive, soybean, sunflower, MCT, etc.) | [ ] | N/A if not softgel |
| 9 | **Capsule/softgel material** (gelatin vs veggie) captured | [ ] | |
| 10 | **Added actives** captured (vitamin E, BioPerine, PQQ, omega-3, etc.) | [ ] | N/A if none |
| 11 | **Sweeteners/colors/flavors** captured if gummy or flavored liquid | [ ] | N/A if none |
| 12 | **Allergen statements** captured (soy, gelatin, fish, tree nuts, etc.) | [ ] | |
| 13 | **Other ingredients** list captured | [ ] | |

### Form-specific caveat review (editorial notes for YAML — not claims)

| Form | Caveat to document if product passes | Reviewed |
|------|--------------------------------------|----------|
| Ubiquinol | Premium pricing; absorption marketing — mirror as `brand_claim` only | [ ] |
| Ubiquinone | Oil-based softgel vs dry capsule — label clarity | [ ] |
| High dose (200 mg) | Serving count; price per 100 mg | [ ] |
| Combo (PQQ, etc.) | Formula complexity; defer if wave 1 full | [ ] |
| Soybean oil softgel | Soy allergen context if stated | [ ] |
| Gelatin softgel | Non-vegan; allergen context | [ ] |

---

## Sources & pricing

| # | Check | Pass | Source |
|---|-------|------|--------|
| 14 | **Official product URL** exists | [ ] | |
| 15 | **Official Supplement Facts label** URL or image captured | [ ] | |
| 16 | Retailer label URL (if official unavailable) — gap documented | [ ] | |
| 17 | **Price source URL** (non-Amazon preferred) | [ ] | |
| 18 | **Price checked date** recorded | [ ] | |
| 19 | **Manual observed price** recorded | [ ] | |
| 20 | **Price per serving** computed | [ ] | |
| 21 | **Price per 100 mg CoQ10** computed | [ ] | |

---

## Testing verification

| # | Check | Pass | Source |
|---|-------|------|--------|
| 22 | Testing status assigned: `verified` / `claimed` / `unknown` / `not_claimed` | [ ] | |
| 23 | If verified: NSF / USP / Informed / COA URL matched to **this SKU** | [ ] | |
| 24 | If claimed only: marketing quote captured; no upgrade to verified | [ ] | |

---

## Amazon / affiliate (deferred — do not complete in Phase 15A)

| Field | Status | Notes |
|-------|--------|-------|
| Amazon exact-match status | **Deferred** | Phase 15G+ mapping only |
| ASIN | **Deferred** | UPC/packaging verification required |
| Affiliate enabled | **Must remain false** until mapping phase | |

---

## Claim-risk review

| # | Check | Pass | Notes |
|---|-------|------|-------|
| 25 | No heart-disease treatment/prevention marketing relied upon for ranking | [ ] | |
| 26 | No statin replacement or statin side-effect treatment framing | [ ] | |
| 27 | No fertility/migraine/Parkinson's treatment framing | [ ] | |
| 28 | No guaranteed energy or anti-aging cure marketing in SuppCheckr copy | [ ] | |
| 29 | Brand heart-health claims mirrored as `brand_claim` only if cited | [ ] | |
| 30 | Healthcare-professional caveat planned for product page | [ ] | |

---

## Inclusion / rejection

| Field | Value |
|-------|-------|
| **Inclusion reason** | |
| **Rejection reason** (if rejected) | |
| **Source gaps** | |
| **Defer reason** (if deferred) | e.g., combo formula, unclear form, no official label |

### Automatic disqualifiers

- Pet/animal product
- CoQ10 form unclear after official label review
- No official or authoritative Supplement Facts available
- Proprietary blend without CoQ10 mg per serving
- Primary marketing is disease-treatment or statin-advice framing
- Duplicate bucket without differentiation (same form, dose, and brand line)
- Gummy/liquid only products with extreme claim-risk and weak label transparency (case-by-case)

---

## Pre-YAML sign-off (Phase 15C+)

| Sign-off | Initials | Date |
|----------|----------|------|
| Label facts locked to one SKU | | |
| Sources captured in citation IDs | | |
| Claim-risk notes reviewed | | |
| Bucket slot assigned | | |
| User approval for shortlist | | |

---

*Checklist version: Phase 15A. Do not create product YAML until Phase 15B longlist is approved.*
