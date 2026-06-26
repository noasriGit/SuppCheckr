# Product Research & Selection Checklist

Use this checklist **before** creating real product YAML. Every candidate must pass all items to advance to the 5-product launch shortlist.

**Status key:** `[ ]` not verified · `[x]` verified · `[—]` not applicable

---

## Candidate metadata

| Field | Verified | Notes / source URL |
|-------|----------|-------------------|
| Product name | [ ] | Exact name on label + retailer |
| Brand | [ ] | Brand legal/marketing name |
| Internal slug (proposed) | [ ] | e.g. `{brand}-creatine-monohydrate-powder` |
| Product-type bucket | [ ] | budget powder / mid powder / tested powder / capsule / bulk / simple label |

---

## Label & form verification (monohydrate only)

| # | Check | Pass | Source |
|---|-------|------|--------|
| 1 | Creatine form is **monohydrate** on Supplement Facts | [ ] | Label URL: |
| 2 | Creatine **grams per serving** clearly stated | [ ] | |
| 3 | **Serving size** clearly stated | [ ] | |
| 4 | **Servings per container** clearly stated | [ ] | |
| 5 | Other ingredients / allergens captured | [ ] | |
| 6 | HCL, blend, or ambiguous form **excluded** | [ ] | N/A for monohydrate cluster |

---

## Sources & pricing

| # | Check | Pass | Source |
|---|-------|------|--------|
| 7 | **Retailer source** exists (live listing URL) | [ ] | |
| 8 | **Label source** exists (image or official Supplement Facts page) | [ ] | |
| 9 | **Manual price** checkable (amount + currency) | [ ] | Price: $ · Date: |
| 10 | **Price per serving** calculable | [ ] | Formula: price ÷ servings |
| 11 | **Price per 5g creatine** calculable | [ ] | Formula: price ÷ (g creatine × servings) |

---

## Testing & certifications

| # | Check | Pass | Evidence |
|---|-------|------|----------|
| 12 | Third-party testing status assigned | [ ] | `verified` / `claimed` / `unknown` / `not_claimed` |
| 13 | Certifications sourced (if present) | [ ] | NSF / Informed Sport / USP / other: |

---

## Compliance & launch fit

| # | Check | Pass | Notes |
|---|-------|------|-------|
| 14 | Listing does **not** rely on aggressive or questionable claims | [ ] | |
| 15 | Appropriate for first **5-product monohydrate** cluster | [ ] | Bucket coverage / price spread |
| 16 | No proprietary blend hiding creatine dose | [ ] | |
| 17 | No disease-treatment or “best overall” marketing on primary listing | [ ] | |

---

## Approval gates

| Gate | Status | Approver | Date |
|------|--------|----------|------|
| Checklist complete (all applicable items) | [ ] | | |
| Added to longlist | [ ] | | |
| Added to 5-product shortlist | [ ] | **User approval required** | |
| Ready for Phase 2D YAML draft | [ ] | | |

---

## Pre-publication checklist (run before setting `status: published`)

| # | Task | Done |
|---|------|------|
| P1 | **Re-check all manual prices and `lastPriceCheckedAt` before setting published** | [ ] |
| P2 | Confirm retailer URLs still resolve | [ ] |
| P3 | Verify testing status (claimed vs verified) against latest certificate/COA if available | [ ] |
| P4 | Replace placeholder product images or confirm intentional pending treatment | [ ] |
| P5 | Publish in order: ingredient → guides → products → brands → category → comparison | [ ] |
| P6 | Set `noindex: false` only after QA sign-off per entity | [ ] |
| P7 | Confirm comparison publishes only after ≥5 products are published | [ ] |

---

## Disqualification log (optional)

| Product | Reason | Date |
|---------|--------|------|
| | | |
