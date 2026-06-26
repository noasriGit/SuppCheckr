# Product Selection Workflow (Creatine Monohydrate — Launch Cluster)

**Goal:** Select **5** monohydrate products for the first review cluster. Do not finalize products without user approval.

## Phase 0 — Constraints

- Monohydrate only (powders and/or capsules).
- No HCL, gummies, or mixed-form blends in product reviews.
- No “Best Overall” labels in comparison or product copy.
- Amazon Associates **not approved** — plain retailer links only; `affiliate.enabled: false`.

## Phase 1 — Longlist (~15–20 candidates)

1. Search major US retailers and category bestseller lists for creatine monohydrate.
2. Record candidate name, brand, retailer URL, and approximate price tier.
3. Exclude immediately if:
   - Form is not monohydrate
   - Creatine dose not disclosed
   - Proprietary blend
   - Aggressive disease or guarantee marketing

## Phase 2 — Checklist filter

1. Open [`product-research-checklist.md`](./product-research-checklist.md) for each longlist candidate.
2. Complete all verification items with source URLs.
3. Disqualify any candidate failing must-have gates.
4. Target ~8–10 survivors for shortlist consideration.

## Phase 3 — Bucket mapping (5 slots)

Map survivors to one slot each where possible:

| Slot | Bucket |
|------|--------|
| 1 | Budget unflavored powder |
| 2 | Mid-tier unflavored powder |
| 3 | Third-party tested / certified powder |
| 4 | Capsule monohydrate |
| 5 | Simple single-ingredient label **or** bulk value option |

Ensure price spread (budget → premium) and at least one `thirdPartyTesting: verified` or `claimed` with evidence if available.

## Phase 4 — User approval gate

1. Present shortlist table: name, brand, form, g/serving, price, per-5g, testing status, bucket.
2. **Stop.** Do not create product YAML until user approves exactly 5 products.
3. Document approval date in checklist.

## Phase 5 — Handoff to Phase 2D

1. Create brand YAML (if needed) and product YAML in `status: draft`, `noindex: true`.
2. Apply citation and claim ID conventions.
3. Score using [`content/scoring/rubrics/creatine.yaml`](../scoring/rubrics/creatine.yaml).
4. Run `npm run validate:content` and `npm run lint:content`.

## Post-launch expansion

After workflow proven, expand to 8–10 products using the same checklist and validation gates.
