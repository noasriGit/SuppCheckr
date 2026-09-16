# Ubiquinol vs Ubiquinone — Source Notes

> **Later cluster map:** proposed first-wave URLs including this guide are in [`phase-15b-coq10-cluster-url-keyword-map-2026-09-16.md`](./phase-15b-coq10-cluster-url-keyword-map-2026-09-16.md). These July notes remain the historical source notes.

**Date:** 2026-07-07 (compiled 2026-07-15)  
**Phase:** 15B planning only — **not guide YAML**  
**Status:** Source notes for future `/guides/ubiquinol-vs-ubiquinone`  
**Dependency:** Do not publish guide until CoQ10 product facts are locked in product YAML (Phase 15C+)

See also: [`ubiquinol-vs-ubiquinone-guide-blueprint-2026-07-07.md`](./ubiquinol-vs-ubiquinone-guide-blueprint-2026-07-07.md), [`coq10-product-longlist-research-2026-07-07.md`](./coq10-product-longlist-research-2026-07-07.md), [`coq10-claim-language-guide.md`](./coq10-claim-language-guide.md), [`coq10-source-inventory-2026-07-07.md`](./coq10-source-inventory-2026-07-07.md).

---

## A. Scope and constraints

| Constraint | Status |
|------------|--------|
| Source comparison notes only — no guide YAML | **Confirmed** |
| No disease-treatment, statin, or medication advice | **Confirmed** |
| No Amazon reviews/Q&A/ratings/images/live prices | **Confirmed** |
| Product examples from Phase 15B shortlist only (when locked) | **Planned** |
| Human supplements only | **Confirmed** |

---

## B. Authoritative / source summary

| Citation ID | Source | Use in form comparison |
|-------------|--------|------------------------|
| `nih-coq10-hp` | [NIH ODS CoQ10 — Health Professional](https://ods.od.nih.gov/factsheets/CoenzymeQ10-HealthProfessional/) | General CoQ10 context; conservative description of supplemental forms; safety/interaction overview |
| `nih-coq10-consumer` | [NIH ODS CoQ10 — Consumer](https://ods.od.nih.gov/factsheets/CoenzymeQ10-Consumer/) | Optional consumer-facing parallel |
| `nccih-coq10-overview` | [NCCIH CoQ10](https://www.nccih.nih.gov/health/coenzyme-q10) | Limited-evidence framing for condition-specific uses |
| `fda-dietary-supplements-overview` | [FDA Dietary Supplements](https://www.fda.gov/food/dietary-supplements) | Supplements not FDA-approved to treat disease |

**NIH/NCCIH conservative framing (paraphrase for editorial — cite in YAML):**

- CoQ10 exists in the body and in foods; supplements commonly provide **ubiquinone** or **ubiquinol** forms.
- Research has examined CoQ10 in various contexts; evidence is **limited and not uniform** across uses.
- SuppCheckr compares **label facts** — not which form is medically better for any individual.

**Not acceptable as primary form-evidence:**

- Brand blogs claiming ubiquinol is always superior
- Influencer absorption comparisons without primary sourcing
- Statin-depletion marketing as medical guidance

---

## C. Conservative form comparison

### Chemical / form distinction (high level)

| Term | Label-typical naming | Editorial summary |
|------|---------------------|-------------------|
| **Ubiquinone** | “Coenzyme Q10,” “CoQ10 (ubiquinone),” “Ubidecarenone” | Oxidized form; common in mainstream softgels and dry capsules |
| **Ubiquinol** | “Ubiquinol,” “Kaneka Ubiquinol,” “reduced form of CoQ10” | Reduced form; often marketed for absorption/bioavailability |

**Neutral SuppCheckr framing:** Both forms appear on retail Supplement Facts panels. Products differ in **form naming, mg per serving, softgel/capsule format, carrier oils, price per 100 mg, and testing documentation** — not in guaranteed health outcomes.

### Label clarity

| Check | Ubiquinone products | Ubiquinol products |
|-------|--------------------|--------------------|
| Form explicitly named? | Usually yes on researched shortlist (DB, NOW) | Usually yes (Kaneka ubiquinol common) |
| mg per serving clear? | Yes on shortlist SKUs | Yes on shortlist SKUs |
| Oil-based delivery disclosed? | Common (olive, soybean, sunflower, MCT) | Common (olive + MCT on DB Ubiquinol) |
| Serving count practical? | Typically 1 softgel/capsule | Typically 1 softgel |

### Dose comparison (shortlist examples — draft, re-lock at YAML)

| Product (Phase 15B shortlist) | Form | CoQ10 mg/serving | Servings | Total mg/container |
|------------------------------|------|------------------|----------|-------------------|
| Doctor's Best High Absorption 100 mg | Ubiquinone | 100 mg | 120 | 12,000 mg |
| Doctor's Best Ubiquinol Kaneka 100 mg | Ubiquinol | 100 mg | 60 | 6,000 mg |

**Comparison note:** Equal **mg per serving** on these two examples — price per 100 mg differs (see below). Do not infer medical equivalence.

### Price per 100 mg (dated 2026-07-15)

| Product | Form | Manual price | $/serving | $/100 mg CoQ10 |
|---------|------|--------------|-----------|----------------|
| Doctor's Best High Absorption 100 mg (120 sg) | Ubiquinone | $22.99 (brand) | $0.19 | **$0.19** |
| Doctor's Best Ubiquinol Kaneka 100 mg (60 sg) | Ubiquinol | $33.99 (brand) | $0.57 | **$0.57** |

**Editorial note:** Ubiquinol shortlist example costs more per 100 mg at MSRP researched — reflects retail pricing and form positioning, **not** a medical recommendation to choose either form.

### Absorption / bioavailability claim caution

| Claim type | Source handling |
|------------|-----------------|
| “3× better absorption” (Qunol) | Defer product; if ever cited, `brand_claim` only |
| “8× greater absorption” (Life Extension) | `brand_claim` only — longlist alternate |
| “Enhanced absorption with BioPerine” (Doctor's Best) | Label-disclosed 5 mg BioPerine — formula fact, not outcome guarantee |
| “Ubiquinol is the active form” (multiple brands) | High-level biochemistry context with NIH citation — no superiority conclusion |

**SuppCheckr rule:** Do **not** state ubiquinol is always better or ubiquinone is always worse.

### Added ingredients (shortlist examples)

| Product | Notable additions |
|---------|-------------------|
| DB Ubiquinone 100 mg | BioPerine 5 mg; soy lecithin |
| DB Ubiquinol 100 mg | Rosemary extract; beeswax; no BioPerine |

### Allergen / oil base (shortlist examples)

| Product | Oil/base | Allergen notes |
|---------|----------|----------------|
| DB Ubiquinone 100 mg | Extra virgin olive oil | **Contains soy** |
| DB Ubiquinol 100 mg | EVOO + MCT | Gluten free; soy free per label |

---

## D. Shortlisted product examples (Phase 15B — pending YAML lock)

Use these as **planned** guide examples after Phase 15C product YAML locks official label citations:

| Role | Product | Why usable in guide |
|------|---------|---------------------|
| Ubiquinol example | Doctor's Best Ubiquinol with Kaneka 100 mg, 60 softgels | Clear Kaneka ubiquinol line; official brand Supplement Facts |
| Ubiquinone example | Doctor's Best High Absorption CoQ10 + BioPerine 100 mg, 120 softgels | Clear ubiquinone line; USP Verified ingredient; same brand reduces SKU confusion |

**Alternates if shortlist changes:**

- NOW Ubiquinol 100 mg + NOW CoQ10 100 mg softgels (mainstream; higher ubiquinol price)
- Life Extension Super Ubiquinol 100 mg + Jarrow Q-absorb 100 mg (higher claim-risk on absorption marketing)

---

## E. Claims to avoid (guide copy)

| Category | Examples |
|----------|----------|
| Heart disease | “better for heart health,” “supports cardiac treatment” |
| Statin advice | “take with statins,” “replaces statin-depleted CoQ10” |
| Form superiority | “ubiquinol always better,” “ubiquinone poorly absorbed — avoid” |
| Medical suitability | “best for people on statins,” “best for seniors with heart conditions” |
| Outcome guarantees | “guaranteed energy,” “anti-aging,” fertility/migraine/Parkinson's treatment |
| Ranking | Best Overall, Best for Everyone, “winner” framing |

---

## F. Source gaps

1. NIH ODS discusses forms at overview level — **not** product-specific absorption outcomes; guide must stay general.
2. Phase 15B shortlist uses **two Doctor's Best SKUs** for clean label pairing — user may request brand-diverse examples (NOW, Life Extension) at Phase 15C.
3. **Life Extension plain 200 mg ubiquinol** without shilajit not confirmed — limits high-dose ubiquinol examples in wave 1.
4. Qunol products deferred for claim-risk — not used as guide examples despite search volume.
5. All prices manual dated **2026-07-15** — re-check before guide publication.

---

## G. Draft future guide outline

**Proposed URL:** `/guides/ubiquinol-vs-ubiquinone`  
**Proposed slug:** `ubiquinol-vs-ubiquinone`

### Suggested section flow (YAML draft in Phase 15D+)

1. **Introduction** — form comparison intent; not medical advice
2. **What labels call ubiquinone vs ubiquinol** — NIH-cited overview
3. **Comparison table** — locked shortlist examples (mg, format, oil, allergens, price/100 mg, testing)
4. **Price per 100 mg context** — dated manual prices; check retailer before buying
5. **Absorption marketing vs label facts** — conservative `brand_claim` handling
6. **Who should talk to a healthcare professional** — medications, pregnancy, surgery, heart conditions
7. **FAQ** — see blueprint FAQ list
8. **Related products** — links to locked product reviews (after publication)
9. **Standard safety block** — from `coq10-claim-language-guide.md`

### FAQ seeds (conservative answers)

| Question | Answer direction |
|----------|------------------|
| What is the difference between ubiquinol and ubiquinone? | Form names + NIH context — not medical advice |
| Is ubiquinol always better? | **No** — compare label dose, format, price, testing |
| Why is ubiquinol often more expensive? | Price-per-100-mg table — no health value judgment |
| How should I compare CoQ10 doses? | mg per serving + servings per container |
| Does CoQ10 interact with medications? | NIH/NCCIH caution — pharmacist/clinician referral |
| Are CoQ10 supplements medical treatment? | **No** — dietary supplements |

---

## H. Publication dependency

| Gate | Requirement |
|------|-------------|
| Product YAML | Doctor's Best Ubiquinol + Doctor's Best Ubiquinone 100 mg locked with official label citations |
| Shortlist approval | User confirms Phase 15B five-product shortlist (or swaps alternates) |
| Price refresh | Manual prices re-dated at or before guide publication |
| Cluster status | CoQ10 category remains **draft/noindex** until full publication phase — guide publishes with cluster, not before product facts locked |

**Do not publish this guide until CoQ10 product facts are locked.**

---

*Phase 15B source notes only. No guide YAML created.*
