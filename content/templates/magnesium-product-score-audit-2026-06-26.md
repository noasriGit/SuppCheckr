# Magnesium Product Score Audit — Phase 4D-3

**Date:** 2026-06-29  
**Phase:** 4D-3 — Magnesium scoring profile and draft product score re-audit  
**Status:** Draft scores only — not publication-ready until Phase 4F QA

---

## Scoring profile created

| File | ID |
|------|-----|
| `content/scoring/profiles/magnesium.yaml` | `magnesium` |
| `content/scoring/rubrics/magnesium.yaml` | `magnesium` |

Category shell updated: `content/categories/magnesium.yaml` → `scoringProfileId: magnesium`

---

## Weight summary (magnesium profile)

| Criterion | Weight |
|-----------|--------|
| Dose transparency (elemental magnesium) | 18 |
| Ingredient transparency (form clarity) | 16 |
| Label clarity | 14 |
| Evidence alignment (claim conservatism) | 12 |
| Third-party testing | 12 |
| Price/value (per 100 mg elemental) | 12 |
| Formula quality | 8 |
| Additives | 4 |
| Brand transparency | 4 |
| **Total** | **100** |

Price/value is computed from label-stated elemental magnesium per serving — not compound weight or bioavailability assumptions.

---

## Per-product score summary

| Product | Profile | Overall | Prior (default profile) | Δ |
|---------|---------|---------|-------------------------|---|
| Klean Athlete Klean Magnesium | magnesium | **81** | 83 | −2 |
| Nutricost Magnesium Citrate 120 | magnesium | **79** | 80 | −1 |
| NOW Magnesium Malate 1000 mg (SKU 1300) | magnesium | **78** | 78 | 0 |
| Pure Encapsulations Citrate/Malate 180 | magnesium | **71** | 74 | −3 |
| Nature Made Magnesium Oxide 250 mg | magnesium | **77** | 77 | 0 |

Draft cluster order by overall score (not a publication ranking): Klean (81) → Nutricost (79) → NOW (78) → Nature Made (77) → Pure Encapsulations (71).

No product received a "Best Overall" or medical-use-case ranking label.

---

## Major score drivers by product

### 1. Klean Athlete Klean Magnesium — 81

**Strengths:** Clear glycinate form; 120 mg elemental magnesium per capsule on brand Supplement Facts; NSF Certified for Sport listing verified for locked SKU; simple capsule formula; official brand label source.

**Limitations:** Higher price per 100 mg elemental ($0.24) than budget citrate/oxide; lower elemental mg per capsule than some alternatives; brand athlete/wellness positioning requires claim conservatism.

**Criteria highlights:** thirdPartyTesting 95, formulaQuality 92, labelClarity 90 — priceValue 30 (premium cost per elemental mg).

### 2. Nutricost Magnesium Citrate 120 — 79

**Strengths:** Clear citrate form; 420 mg elemental magnesium stated; strong price per 100 mg elemental ($0.11); brand-hosted label.

**Limitations:** Four-capsule serving; third-party testing claimed but not verified with certificate URL; GI tolerance caveat for citrate at higher intakes.

**Criteria highlights:** priceValue 85, ingredientTransparency 88 — thirdPartyTesting 50, doseTransparency 82 (multi-capsule serving).

### 3. NOW Magnesium Malate 1000 mg — 78

**Strengths:** Malate form slot; locked SKU 1300; label shows both 1000 mg malate compound weight and 113 mg elemental magnesium; one-tablet serving; mid-range value ($0.13/100 mg elemental).

**Limitations:** No verifiable third-party testing; brand energy/Krebs-cycle marketing; lower elemental mg per tablet; standard tablet excipients.

**Criteria highlights:** labelClarity 92 (compound + elemental disclosure) — thirdPartyTesting 40, evidenceAlignment 75 (marketing risk).

### 4. Pure Encapsulations Citrate/Malate 180 — 71

**Strengths:** Transparent mixed-form label naming citrate and malate; 120 mg elemental magnesium per capsule; one-capsule serving; minimal additives.

**Limitations:** Supplement Facts sourced from Vitacost retailer listing — official brand product page not confirmed; no per-form elemental mg split; unknown testing; higher price ($0.16/100 mg elemental); retailer cardiometabolic/neurocognitive marketing on listing.

**Criteria highlights:** labelClarity 78, brandTransparency 65, ingredientTransparency 78 (mixed-form without per-salt split) — lowest cluster score.

### 5. Nature Made Magnesium Oxide 250 mg — 77

**Strengths:** Clear oxide form; 250 mg elemental magnesium per tablet; lowest price per 100 mg elemental ($0.018); one-tablet serving; mainstream budget example.

**Limitations:** No verified USP or third-party testing; Target-sourced label; multiple tablet excipients and color additives; oxide GI caveats; retailer heart/bone/nerve wellness copy.

**Criteria highlights:** priceValue 92, doseTransparency 90 — additives 52, thirdPartyTesting 40, evidenceAlignment 72 (oxide caveats, not form dismissal).

---

## Product-specific score caveats

- **Klean:** Re-verify NSF listing id 1281622 matches current SKU before publish; confirm price still current.
- **Nutricost:** Testing status remains "claimed" — do not upgrade thirdPartyTesting without captured certificate or program listing.
- **NOW:** 1000 mg in product name refers to malate compound weight, not elemental mg — label clarity score reflects good disclosure but editorial must keep distinction visible.
- **Pure Encapsulations:** Official brand-hosted Supplement Facts URL is the top pre-publication blocker for labelClarity and brandTransparency scores.
- **Nature Made:** Oxide scores reflect label clarity and elemental-mg value — not absorption superiority; USP/testing status unverified.

---

## Items to re-check before publication (Phase 4F)

| Item | Product(s) | Action |
|------|------------|--------|
| NSF certification validity | Klean Athlete | Confirm listing still active for KA202599-90 |
| Third-party testing verification | Nutricost | Capture COA or program listing or keep score conservative |
| Official brand label source | Pure Encapsulations | Locate brand-hosted product page; upgrade label source |
| USP / testing status | Nature Made | Check USP Verified database; update thirdPartyTesting if verified |
| Price refresh | All five | Re-run manual price check; update `lastPriceCheckedAt` |
| Magnesium profile QA | All five | Confirm `overallScore` matches `computeWeightedScore` with magnesium weights |
| Comparison YAML | Cluster | Not created in 4D-3 — deferred to later phase |

---

## Reminder

Scores remain **draft** until Phase 4F QA. Magnesium content stays `status: draft` / `noindex: true`. No comparison YAML, no threonate product YAML, no publication or indexing changes in this phase.

**Recommended next phase:** Phase 4D-4 or 4E — Magnesium comparison YAML draft (when ready), then Phase 4F editorial QA before any publish decision.

**Suggested commit message:** `Phase 4D-3: add magnesium scoring profile and score audit`

---

## Phase 4F QA completion (2026-06-29)

Phase 4F editorial QA completed. See [`magnesium-phase-4f-qa-report-2026-06-26.md`](./magnesium-phase-4f-qa-report-2026-06-26.md) for full audit.

**Summary:**

- All draft/noindex boundaries confirmed; no score changes.
- Pure Encapsulations Vitacost price updated to $36.50 ($0.17/100 mg elemental).
- NSF listing for Klean Magnesium re-verified (id 1281622); price not re-checked (bot protection).
- Nutricost, NOW, Nature Made prices confirmed unchanged.
- **Recommendation:** Ready for Phase 4G publication prep with documented blockers (official PE label URL, brand-page draft filtering, publish-time Klean price/NSF re-check).
