# Magnesium Product Research & Selection Checklist

Use this checklist **before** creating real magnesium product YAML. Every candidate must pass all applicable items to advance to the 5-product launch shortlist.

**Phase:** 4D (product YAML drafts) — use during 4B longlist screening and 4D shortlist verification.  
**Status key:** `[ ]` not verified · `[x]` verified · `[—]` not applicable

**Scope:** Magnesium V1 cluster — five products across distinct form buckets. Powders, capsules, and tablets only. No gummies, sprays, topical oils, or condition-specific lines in V1.

See also: [`magnesium-claim-language-guide.md`](./magnesium-claim-language-guide.md), [`product-research-checklist.md`](./product-research-checklist.md) (Creatine reference), [`magnesium-phase-4b-notes.md`](./magnesium-phase-4b-notes.md).

---

## V1 bucket slots (map each shortlist product to one slot)

| Slot | Bucket | Notes |
|------|--------|-------|
| 1 | **Glycinate / bisglycinate** | Single primary form; elemental mg required |
| 2 | **Citrate** | Capsule/tablet preferred over flavored drink mixes |
| 3 | **Malate or transparent mixed-form** | Single-form malate preferred; mixed only if elemental mg and forms are clear |
| 4 | **Conditional L-threonate OR fallback** | **Not guaranteed.** See threonate gate below |
| 5 | **Budget oxide / common option** | Strong GI/value caveats required in editorial copy |

### Slot 4 — L-threonate conditional gate

Magnesium L-threonate is **conditional only**. It may occupy slot 4 **only if all** of the following pass:

- [ ] Product is **single-ingredient** magnesium L-threonate (no nootropic stacks)
- [ ] **Elemental magnesium per serving** clearly stated on Supplement Facts
- [ ] Form identified as magnesium L-threonate / Magtein on label
- [ ] Official label source exists (brand page or NIH DSLD)
- [ ] Brand marketing can be reviewed **without repeating** brain/memory/cognitive claims as product benefits in SuppCheckr copy
- [ ] Claim-risk review passes (no disease-treatment or "clinically proven" cognitive outcomes in primary positioning)

**If any item fails:** use fallback bucket — second clean **glycinate, citrate, malate, or transparent mixed-form** product from a different brand than slots 1–3. Document fallback reason in disqualification log.

---

## Candidate metadata

| Field | Verified | Notes / source URL |
|-------|----------|-------------------|
| Product name | [ ] | Exact name on label + retailer |
| Brand | [ ] | Brand legal/marketing name |
| Internal slug (proposed) | [ ] | e.g. `{brand}-magnesium-glycinate-200mg` |
| V1 bucket slot (1–5) | [ ] | See table above |
| Magnesium form(s) | [ ] | glycinate / citrate / malate / oxide / threonate / mixed |
| Product format | [ ] | capsule / tablet / powder |
| SKU specificity | [ ] | Exact size, count, strength, UPC if available — lock one SKU |

---

## Label & form verification

| # | Check | Pass | Source |
|---|-------|------|--------|
| 1 | Magnesium **form clearly identified** on Supplement Facts (not just "magnesium") | [ ] | Label URL: |
| 2 | **Elemental magnesium (mg) per serving** clearly stated | [ ] | |
| 3 | Label does **not** disclose only compound/chelate weight without elemental mg | [ ] | Reject if fail |
| 4 | **Serving size** clearly stated | [ ] | |
| 5 | **Servings per container** clearly stated | [ ] | |
| 6 | Other ingredients / fillers / sweeteners captured | [ ] | |
| 7 | Allergen / dietary statements captured (gluten, vegan, etc.) | [ ] | |
| 8 | Mixed-form: each form named **and** total elemental mg clear (or per-form mg disclosed) | [ ] | N/A for single-form |
| 9 | Proprietary blend **without** per-ingredient amounts — excluded | [ ] | Disqualifier if hidden |

### Form-specific caveat review (editorial notes for YAML — not claims)

| Form | Caveat to document if product passes | Reviewed |
|------|--------------------------------------|----------|
| Glycinate / bisglycinate | Compound vs elemental naming; chelate/trademark names; sleep/calm marketing on brand page | [ ] |
| Citrate | GI/loose stool context at higher intakes; constipation-adjacent brand copy | [ ] |
| Malate | Energy/fatigue marketing; malate compound vs elemental mg | [ ] |
| Oxide | High elemental mg per unit vs GI tolerance; avoid absorption absolutes | [ ] |
| L-threonate (conditional) | Cognitive/brain marketing; high price per mg elemental; Magtein trademark | [ ] |
| Mixed-form | Per-form breakdown or clear total elemental mg; "full spectrum" marketing | [ ] |

---

## Sources & pricing

| # | Check | Pass | Source |
|---|-------|------|--------|
| 10 | **Retailer source** exists (live US listing URL) | [ ] | |
| 11 | **Label source** exists (official Supplement Facts page or image) | [ ] | |
| 12 | **Manual price** checkable (amount + currency + date) | [ ] | Price: $ · Date: |
| 13 | **Price per serving** calculable | [ ] | Formula: price ÷ servings per container |
| 14 | **Price per 100 mg elemental magnesium** calculable | [ ] | Formula: price ÷ (elemental mg per serving × servings) × 100 |

**Price normalization rule:** Always use **elemental magnesium mg**, never compound weight (e.g. bisglycinate mg, citrate mg).

---

## Testing & certifications

| # | Check | Pass | Evidence |
|---|-------|------|----------|
| 15 | Third-party testing status assigned | [ ] | `verified` / `claimed` / `unknown` / `not_claimed` |
| 16 | If `verified`: certificate or program listing URL saved | [ ] | NSF / USP / Informed Sport / other: |
| 17 | "Tested" marketing **without** verifiable evidence → downgrade to `claimed` or `unknown` | [ ] | Do not use Amazon reviews as evidence |

**Testing rules:**

- `verified` — only with official program database entry, published COA matched to SKU, or certification body listing
- `claimed` — brand states testing but no verifiable public evidence
- `unknown` — no testing mention
- `not_claimed` — brand explicitly does not claim testing

Ingredient branding (e.g. Albion TRAACS, Magtein) is **not** third-party testing.

---

## Brand transparency & label clarity

| # | Check | Pass | Notes |
|---|-------|------|-------|
| 18 | Official brand product page discloses Supplement Facts or label image | [ ] | |
| 19 | A reader can identify **form + elemental mg** from label within ~30 seconds | [ ] | Label clarity gate |
| 20 | SKU on retailer matches locked checklist SKU (size, count, strength) | [ ] | |
| 21 | Retail availability confirmed (in-stock or routinely available in US) | [ ] | |

---

## Claim-risk review

| # | Check | Pass | Notes |
|---|-------|------|-------|
| 22 | Primary listing/brand page avoids disease-treatment claims | [ ] | |
| 23 | No "Best Overall," "Best for Everyone," or condition-winner framing | [ ] | |
| 24 | Sleep, anxiety, constipation, blood pressure, migraine claims **not** mirrored in SuppCheckr copy | [ ] | See claim language guide |
| 25 | No "FDA-approved supplement," "clinically proven" (unqualified), or "doctor recommended" unless primary-sourced | [ ] | |
| 26 | No "safe for everyone" or "no side effects" | [ ] | |
| 27 | Evidence for checklist is **not** drawn from Amazon reviews, blogs, or influencer content | [ ] | |

---

## Compliance & launch fit

| # | Check | Pass | Notes |
|---|-------|------|-------|
| 28 | Appropriate for assigned **V1 bucket slot** | [ ] | One product per slot |
| 29 | Price spread across cluster (budget → premium) is reasonable | [ ] | Oxide should anchor low $/100 mg elemental |
| 30 | Not redundant with another shortlist SKU (same brand/form/dose without distinct bucket reason) | [ ] | |
| 31 | `affiliate.enabled: false` planned for YAML | [ ] | Amazon Associates not approved |

---

## Automatic disqualifiers

Disqualify immediately if any apply (log in disqualification section):

| Disqualifier | Example |
|--------------|---------|
| Only compound weight, no elemental magnesium mg | "2,000 mg magnesium bisglycinate" with no elemental line |
| Proprietary blend hiding form or dose | "Magnesium complex proprietary blend 500 mg" |
| Vague multi-form "complex" without breakdown | "7 forms of magnesium" with no per-form mg |
| Primary disease-treatment marketing | "Treats insomnia," "lowers blood pressure," "prevents migraines" |
| Misleading sleep/anxiety/constipation/BP claims in brand positioning we cannot review neutrally | Condition-specific landing copy |
| Amazon reviews cited as verification | Star ratings, Q&A as "evidence" |
| Unsupported "third-party tested" treated as verified | Logo only, no certificate/listing |
| Gummies, sprays, topical, pediatric/prenatal-only SKUs | Out of V1 scope |
| Threonate stack with multiple actives | Fails conditional single-ingredient gate |
| Wrong form for bucket | Citrate product in glycinate slot |

---

## Approval gates

| Gate | Status | Approver | Date |
|------|--------|----------|------|
| Checklist complete (all applicable items) | [ ] | | |
| Added to longlist (~15–20 candidates) | [ ] | | |
| Threonate conditional gate evaluated (slot 4) | [ ] | Pass / Fallback documented | |
| Added to 5-product shortlist | [ ] | **User approval required** | |
| Ready for Phase 4D YAML draft | [ ] | | |

---

## Pre-publication checklist (run before setting `status: published`)

| # | Task | Done |
|---|------|------|
| P1 | **Re-check all manual prices and `lastPriceCheckedAt` before setting published** | [ ] |
| P2 | Confirm retailer URLs still resolve | [ ] |
| P3 | Re-verify elemental mg and form on current label | [ ] |
| P4 | Verify testing status (claimed vs verified) against latest certificate/COA if available | [ ] |
| P5 | Replace placeholder product images or confirm intentional pending treatment | [ ] |
| P6 | Confirm comparison UI shows category-appropriate price label (per 100 mg elemental) | [ ] |
| P7 | Publish in order: ingredient → guides → products → brands → category → comparison | [ ] |
| P8 | Set `noindex: false` only after QA sign-off per entity | [ ] |
| P9 | Confirm comparison publishes only after ≥5 products are published | [ ] |

---

## Disqualification log

| Product | Bucket attempted | Reason | Date |
|---------|------------------|--------|------|
| | | | |

## Fallback log (slot 4 threonate)

| Original threonate candidate | Why failed conditional gate | Fallback product selected | Date |
|------------------------------|----------------------------|---------------------------|------|
| | | | |
