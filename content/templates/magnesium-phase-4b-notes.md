# Magnesium Phase 4B — Source Collection & Technical Notes

**Phase:** 4B planning notes (created in 4A for handoff)  
**Status:** Decisions documented; implementation deferred until Phase 4B/4E  
**Do not publish Magnesium content based on this file alone.**

---

## Decisions (approved direction)

### Price normalization

| Field | Creatine | Magnesium (decided) |
|-------|----------|---------------------|
| `pricing.pricePerActiveDose` | Price per **5 g creatine equivalent** | Price per **100 mg elemental magnesium** |
| Basis | Grams creatine monohydrate per serving | **Elemental magnesium mg** per serving — never compound weight |
| Formula | `price ÷ (g creatine per serving × servings)` | `price ÷ (elemental mg per serving × servings) × 100` |

**Rule:** If a label lists only compound weight (e.g. "2,000 mg magnesium bisglycinate") without elemental magnesium, the product **fails** the shortlist gate — do not infer elemental mg from marketing copy.

### Comparison table labels

Before Magnesium publish, comparison UI must use **category-aware wording**, not Creatine-hardcoded strings.

| Current (Creatine-hardcoded) | Target (Magnesium) |
|------------------------------|-------------------|
| Sort: "Price per 5 g creatine" | "Price per 100 mg elemental magnesium" |
| Column: "Price / 5 g" | "Price / 100 mg elemental" |
| Product block: "Price per 5 g creatine equivalent" | "Price per 100 mg elemental magnesium" |

**Phase 4A:** No code changes. Document only.

### Scoring profile

- Magnesium will likely need `content/scoring/profiles/magnesium.yaml` and `content/scoring/rubrics/magnesium.yaml` before publish.
- Proposed emphasis (from category plan): higher weights on `doseTransparency`, `ingredientTransparency`, `labelClarity`, `evidenceAlignment`; price value anchored to per-100-mg-elemental.
- **Phase 4A:** No scoring files created. No changes to `computeScore.ts`.

### Threonate slot

- **Conditional only** — not a guaranteed V1 product slot.
- Include in comparison **only if** single-ingredient, label-clear, sourceable, and reviewable without cognitive/brain/memory benefit claims.
- **Fallback:** second clean glycinate, citrate, malate, or transparent mixed-form product.
- See [`magnesium-product-research-checklist.md`](./magnesium-product-research-checklist.md) slot 4 gate.

### V1 content scope

- **Include:** 6 guides, 1 ingredient hub, category hub, 5-product comparison, up to 5 product reviews.
- **Exclude:** Disease-use SEO pages (magnesium-for-sleep, magnesium-for-anxiety, magnesium-for-migraines, etc.).
- **Defer product reviews:** chloride, taurate, gummies, topical, pediatric/prenatal-only SKUs.

---

## UI files to inspect / generalize (Phase 4B or 4E — no edits in 4A)

| File | Issue | Notes |
|------|-------|-------|
| [`components/comparison/ComparisonTable.tsx`](../../components/comparison/ComparisonTable.tsx) | Lines ~88, ~125: "Price per 5 g creatine", "Price / 5 g" | Needs category-aware label from category slug or scoring profile |
| [`components/product/ProductBlocks.tsx`](../../components/product/ProductBlocks.tsx) | Lines ~113–118: "Price per 5 g creatine equivalent" | Same — derive label from category or `pricePerActiveDose` metadata |
| [`components/category/CategoryBlocks.tsx`](../../components/category/CategoryBlocks.tsx) | Line ~56: "Price / 5 g" on category featured table | Generalize when magnesium category goes live |

**Open question (4B):** Pass active-dose label via category YAML field (e.g. `priceNormalizationLabel`) vs hardcoded map by `categoryId`? Recommend category YAML or scoring profile note to avoid scattered strings.

---

## Source collection checklist (Phase 4B deliverable)

Collect and pin URLs with access dates before guide drafting (4C).

### General evidence / safety background

| ID (proposed) | sourceType | URL (verify live in 4B) |
|---------------|------------|---------------------------|
| `nih-magnesium-hp` | NIH | https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/ |
| `nih-magnesium-consumer` | NIH | https://ods.od.nih.gov/factsheets/Magnesium-Consumer/ |
| `fda-dietary-supplements-overview` | FDA | FDA dietary supplements overview (same as Creatine cluster) |
| `ftc-endorsement-guides` | FTC | FTC endorsement guides (same as Creatine cluster) |

### Per-product sources (during 4D shortlist — not yet)

| Pattern | sourceType | Purpose |
|---------|------------|---------|
| `label-{product-slug}` | brand_label | Supplement Facts |
| `retailer-{product-slug}` | retailer_listing | Dated manual price |
| `testing-{product-slug}` | third_party_testing / certification_body | Only if verified |

See appended examples in [`citation-id-conventions.md`](./citation-id-conventions.md).

---

## Open questions for Phase 4B

1. **Ingredient slug:** Replace `placeholder-magnesium-glycinate` with general `magnesium` hub — confirm slug in 4C.
2. **Primary retailer policy:** Same as Creatine (brand site + one major retailer; avoid Amazon if non-affiliate plain link policy prefers iHerb/Vitacost/brand direct)?
3. **Mixed-form slot:** If no acceptable malate-only SKU, which transparent mixed-form products survive checklist gates?
4. **Threonate candidates:** Pre-screen 2–3 SKUs against conditional gate before longlist investment.
5. **UI generalization timing:** Implement category-aware price labels in 4E (before QA) or earlier in 4B spike?
6. **Scoring profile weights:** Finalize numbers when first 5 products are scored in 4D.
7. **Placeholder images:** Confirm "Product image pending" treatment matches Creatine for all magnesium products at publish.

---

## Validation gates (unchanged from Creatine — verify in 4B)

From [`lib/validation/publishedContent.ts`](../../lib/validation/publishedContent.ts):

- Product: ≥1 `brand_label`, ≥1 `retailer_listing`, score consistency, `affiliate.enabled: false`
- Category: ≥3 real source URLs
- Ingredient: ≥2 sources, ≥1 NIH/PubMed/consensus
- Comparison: ≥5 published products, type `category_ranking`
- Health/safety claims: authoritative source required (`sourceTypeRules.ts`)

---

## Explicit non-actions (Phase 4A / 4B planning)

- [ ] No product YAML created
- [ ] No guide/ingredient drafts (4C)
- [ ] No `status: published` or `noindex: false` on Magnesium entities
- [ ] No edits to Creatine cluster files
- [ ] No `SITE_MODE`, monetization, affiliate, or ads config changes
- [ ] No Amazon Associate tags
- [ ] No legal page indexability changes

---

## Phase 4B exit criteria (target)

- [ ] NIH magnesium HP + consumer URLs verified with access dates
- [ ] `magnesium-product-research-checklist.md` tested against one sample product (dry run)
- [ ] UI generalization approach decided (category field vs map)
- [ ] Longlist research process documented (mirror `creatine-shortlist-research-2026-06-26.md`)
- [ ] Threonate pre-screen completed with pass/fail/fallback documented
- [ ] User approval to proceed to 4C guide drafts
