# Phase 15B — Final CoQ10 sourcing pass (2026-09-17)

**Authoritative 15C verdict:** **READY FOR LIMITED 15C**  
**Branch / PR:** `research/coq10-phase-15b` / [#5](https://github.com/noasriGit/SuppCheckr/pull/5)  
**Price-check date:** 2026-09-17  
**Keyword metrics date:** 2026-09-16 (Ahrefs US Keywords Explorer, recorded from the main SuppCheckr audit)

This pass does **not** create product YAML, CoQ10 guides, affiliate mappings, sitemap URLs, or indexable pages. Category and ingredient shells remain `status: draft`, `noindex: true`.

Supersedes the four-role / NOT READY decision recorded on 2026-09-16 in [`phase-15b-coq10-blocker-resolution-2026-09-16.md`](./phase-15b-coq10-blocker-resolution-2026-09-16.md). The readiness file of the same date now points here.

---

## Launch rule (revised)

Wave 1 is **not** a forced four-product cluster.

| Rule | Requirement |
|------|-------------|
| Minimum | **Three** evidence-complete products |
| Preferred later expansion | Four or more products |
| Comparison purpose | Every selected SKU must have a **distinct** comparison purpose |
| Empty roles | Do **not** fill a leftover “testing” or “budget” slot with an incomplete SKU |

An exact SKU is evidence-complete only if all of the following are locked:

- Verified active CoQ10 form
- Current official Supplement Facts
- Exact dosage, count, and serving information
- Current availability
- Current exact-variant price
- Stable source URLs
- Conservative claim language path
- Image-sourcing status
- Enough information to calculate price per serving and per 100 mg

Three strong, fully documented products are preferable to four products with incomplete facts.

---

## 1. Keyword evidence (Ahrefs US, 2026-09-16)

These United States Keywords Explorer Volume and KD figures were retrieved during the **main September 16, 2026 SuppCheckr audit**. They may be recorded as current data dated `2026-09-16`.

A **later** 15B agent pass on the same date lacked Ahrefs MCP, API credentials, and a logged-in Keywords Explorer session, and therefore wrote that no current Ahrefs evidence was available. That statement was incorrect for the keywords below. The later pass did not retrieve these values; the main audit already had.

**Recorded fields only:** US volume and KD. Traffic potential, CPC, CPS, parent topic, global volume, and SERP features were **not** in the supplied retrieval and are left blank. Missing metrics are **not** inferred.

These figures **supersede** the July 7, 2026 Phase 8A historical figures for the corresponding exact keywords (`best coq10 supplement` is no longer planned as KD 3).

| Keyword | US volume | KD | TP | CPC | CPS | Parent topic | Status |
|---------|----------:|--:|----|-----|-----|--------------|--------|
| best coq10 | 2,800 | 0 | — | — | — | — | Ahrefs US 2026-09-16 |
| coq10 dosage | 2,700 | 0 | — | — | — | — | Ahrefs US 2026-09-16 |
| ubiquinol vs coq10 | 1,600 | 3 | — | — | — | — | Ahrefs US 2026-09-16 |
| ubiquinol vs ubiquinone | 1,300 | 5 | — | — | — | — | Ahrefs US 2026-09-16 |
| qunol coq10 | 8,700 | 5 | — | — | — | — | Ahrefs US 2026-09-16 |
| thorne coq10 | 1,400 | 3 | — | — | — | — | Ahrefs US 2026-09-16 |
| best coq10 supplement | 6,400 | 46 | — | — | — | — | Ahrefs US 2026-09-16 |
| coq10 supplement / coq10 supplements | — | — | — | — | — | — | **unavailable** — not in the supplied retrieval |
| best ubiquinol supplement | — | — | — | — | — | — | **unavailable** as current KE (July 7 historical only: vol 300 / KD 0 / TP 600) |
| coq10 vs ubiquinol | — | — | — | — | — | — | **unavailable** — not in the supplied retrieval |
| how to choose coq10 | — | — | — | — | — | — | **unavailable** — not in the supplied retrieval |
| coq10 100 mg / coq10 200 mg / coq10 softgels / coq10 capsules | — | — | — | — | — | — | **unavailable** — not in the supplied retrieval |

### Planning interpretation

- Target **`best coq10`** as the primary hub opportunity (US vol 2,800, KD 0).
- Treat **`best coq10 supplement`** as a **competitive secondary** variation (US vol 6,400, **KD 46**), not an easy KD 3 term.
- Keep **one** form-comparison guide covering both `ubiquinol vs ubiquinone` and `ubiquinol vs coq10`.
- Do **not** create a standalone dosage page in wave one despite low KD on `coq10 dosage`, because of medical / YMYL risk. Dosage intent stays on the how-to guide without individualized medical dosing.
- Record **`qunol coq10`** and **`thorne coq10`** as possible **future product-review demand signals**, not as a requirement to force those brands into wave 1 if a different SKU has stronger label evidence.

This evidence is sufficient for **preliminary cluster planning**. A complete ten-keyword export remains desirable and should be captured when Ahrefs is next available. It is **no longer** an absolute blocker to drafting evidence-complete product records in a later 15C task.

Historical July 7 figures retained for audit trail only: `best coq10 supplement` vol 6,100 / KD 3 / TP 13,000; `best ubiquinol supplement` vol 300 / KD 0 / TP 600.

---

## 2. NIH ODS citation disposition (source repair)

| Item | Finding |
|------|---------|
| Dead URL | `https://ods.od.nih.gov/factsheets/CoenzymeQ10-HealthProfessional/` |
| 2026-09-16 live fetch | **HTTP 404.** ODS `list-all` pointed “Coenzyme Q10” to **NCCIH**, not a standalone ODS Health Professional sheet. Disposition: **retired/removed** as a live primary citation. |
| 2026-09-17 re-check | Automated request returned **HTTP 403** (not a restored fact sheet). The 404 finding from 2026-09-16 is preserved. Do not treat this URL as a live source. |
| Live general background / safety | NCCIH CoQ10 overview — https://www.nccih.nih.gov/health/coenzyme-q10 (page last updated January 2019; live 2026-09-17) |
| Regulatory framing | FDA dietary supplements — https://www.fda.gov/food/dietary-supplements (live 2026-09-17) |
| Not used this pass | NCI cancer PDQ — not required; copy is not cancer-context |
| Draft YAML | `nih-coq10-hp` **removed** from the live ingredient source list on 2026-09-17. Shells remain `draft` / `noindex: true`. |

Do not expand CoQ10 copy into disease-treatment content. NCCIH bottom-line research bullets are **not** shopping claims.

---

## 3. Approved limited launch set (three SKUs)

Fourth product review is **deferred**. No empty testing/budget role is filled.

| # | Purpose | Exact SKU | Proposed slug |
|---|---------|-----------|---------------|
| 1 | Verified ubiquinol | Life Extension Super Ubiquinol CoQ10, 100 mg, 60 softgels (item **01929**, UPC **737870192961**) | `life-extension-super-ubiquinol-coq10-100-mg-60-softgels` |
| 2 | Verified mainstream ubiquinone | Jarrow Formulas Q-absorb, 100 mg, **60** softgels | `jarrow-q-absorb-coq10-100-mg-60-softgels` |
| 3 | Differentiated higher-dose dry capsule | NOW Foods CoQ10 200 mg, 60 veg capsules (SKU **3176**, UPC **733739031761**) | `now-foods-coq10-200-mg-60-veg-capsules` |

**Provisional product URLs (do not create YAML this phase):**

1. `/supplements/coq10/products/life-extension-super-ubiquinol-coq10-100-mg-60-softgels`
2. `/supplements/coq10/products/jarrow-q-absorb-coq10-100-mg-60-softgels`
3. `/supplements/coq10/products/now-foods-coq10-200-mg-60-veg-capsules`

Non-product URL plan (still not created this phase): `/supplements/coq10` (primary `best coq10`); `/ingredients/coq10`; `/supplements/coq10/compare`; `/guides/ubiquinol-vs-ubiquinone`; `/guides/how-to-choose-a-coq10-supplement`.

Image path for all three: **label-first placeholder** (`/images/products/placeholder.svg`). Do not reuse manufacturer pack shots.

---

## 4. Approved SKU evidence (2026-09-17)

### A. Life Extension Super Ubiquinol CoQ10, 100 mg, 60 softgels

| Field | Locked value |
|-------|----------------|
| Brand | Life Extension |
| Exact name | Super Ubiquinol CoQ10, 100 mg, 60 softgels |
| Item / UPC | **01929** / **737870192961** |
| Form | Ubiquinol (as Kaneka Ubiquinol™) 100 mg |
| Serving | 1 softgel |
| Servings / count | 60 / 60 softgels |
| Other ingredients | extra virgin olive oil, gelatin, glycerin, beeswax, purified water, sunflower lecithin, ascorbyl palmitate, annatto color |
| Other actives | None on facts |
| Directions | 1 softgel with food once or twice daily — disclose range; **normalize price at 1/day** |
| Official URL | https://www.lifeextension.com/vitamins-supplements/item01929/super-ubiquinol-coq10 |
| Official facts | Same URL (Supplement Facts on PDP, 2026-09-17) |
| Availability | **In stock** — one-time purchase option and Add to Cart / Subscribe controls present; “Sold Out” absent |
| Seller | Life Extension official |
| Purchase type | **One-time** $37.50 (do **not** use AutoShip $31.00 as the list price) |
| Price date | 2026-09-17 |
| Price / serving | $37.50 ÷ 60 = **$0.63** |
| Price / 100 mg | **$0.63** |
| Testing | **unknown** — no product-specific USP/NSF/Informed listing captured. Do not imply independent verification. |
| Image | Placeholder path only |
| Claim risk | Brand bioavailability vs ubiquinone, heart/fatigue copy — `brand_claim` only |
| Decision | **APPROVED** — ubiquinol slot |

### B. Jarrow Formulas Q-absorb, 100 mg, 60 softgels

| Field | Locked value |
|-------|----------------|
| Brand | Jarrow Formulas |
| Exact name | Q-absorb — 100 mg / 60 softgels |
| Form | **Coenzyme Q10 (Ubiquinone) 100 mg** — named on official Supplement Facts |
| Serving | 1 softgel |
| Servings / count | 60 / **60ct** (do not mix with 120ct) |
| Carrier / capsule | Medium chain glycerides (modified coconut and palm oil); bovine gelatin softgel; soy lecithin |
| Other actives | Mixed tocopherols (antioxidant) |
| Allergen | **Contains: Soy** |
| Kaneka | Kaneka Q10® noted on official page |
| Directions | 1 softgel 1–3 times daily — disclose range; **normalize price at 1/day** |
| Official URL | https://jarrow.com/products/q-absorb-100-mg-softgels |
| Official facts | Same URL |
| Availability | **In stock** — 60CT selected; Add to cart $34.99 |
| Seller | Jarrow Formulas official |
| Purchase type | **One-time** $34.99 (120ct one-time is $49.99 — different variant; 120ct also showed Subscribe & save) |
| Price date | 2026-09-17 |
| Price / serving | $34.99 ÷ 60 = **$0.58** |
| Price / 100 mg | **$0.58** |
| Testing | **unknown** |
| Image | Placeholder path only |
| Claim risk | “High absorption” / proliposome copy is `brand_claim` only. Do not treat ubiquinone as medically inferior or superior to ubiquinol. |
| Decision | **APPROVED** — mainstream ubiquinone (form on official facts; current buyable 60ct) |

### C. NOW Foods CoQ10 200 mg, 60 veg capsules

| Field | Locked value |
|-------|----------------|
| Brand | NOW Foods |
| Exact name | CoQ10 200 mg Veg Capsules |
| SKU / UPC | **3176** / **733739031761** |
| Form | **Coenzyme Q10 (CoQ10) (Ubiquinone) 200 mg** — named on official Supplement Facts |
| Serving | 1 veg capsule |
| Servings / count | 60 / 60 veg capsules |
| Format | Dry vegetarian capsule (no carrier oil) |
| Other ingredients | Rice flour, hypromellose (cellulose capsule), ascorbyl palmitate, magnesium stearate (vegetable source), silicon dioxide |
| Allergen | Not manufactured with wheat, gluten, soy, milk, egg, fish, shellfish, tree nut or sesame; facility allergen caveat |
| Official URL | https://www.nowfoods.com/products/supplements/coq10-200-mg-veg-capsules |
| Official facts | Same URL |
| Availability | **In stock** — Add to Cart present; not sold out |
| Seller | NOW Foods official |
| Purchase type | **One-time** $37.99 |
| Price date | 2026-09-17 |
| Price / serving | $37.99 ÷ 60 = **$0.63** |
| Price / 100 mg | $37.99 ÷ 120 = **$0.32** |
| Testing | **claimed** (brand GMP / “pharmaceutical grade” / all-trans fermented CoQ10 language — not a SKU-matched USP/NSF **product** listing) |
| Image | Placeholder path only |
| Claim risk | Cardiovascular health* structure/function copy — `brand_claim` only |
| Distinct purpose | Higher-dose **dry veg capsule** vs the two oil softgels |
| Decision | **APPROVED** — differentiated third product |

---

## 5. Every product investigated this pass

Amazon, search snippets, and AI summaries were **not** used as evidence. Prices below are official brand or named authorized sources with retrieval date 2026-09-17 unless noted.

### Mainstream ubiquinone order

| Candidate | Form | Facts | Availability / price | Decision |
|-----------|------|-------|----------------------|----------|
| **Qunol Ultra CoQ10, 100 mg, 90 softgels** (SKU 898440001004) | Official FAQ: Ultra = **ubiquinone** (black/gold). Official Ubiquinone collection includes this SKU. **Facts panel lists “Coenzyme Q10, 100 mg” without the word ubiquinone.** FAQ also says to check the product label. | Official PDP: Vitamin E 68 mg (dl-alpha tocopheryl acetate) + Coenzyme Q10 100 mg; MCT (palm), polysorbate 80, gelatin, glycerin, sorbitol, water, annatto in sunflower oil. Serving 1 softgel / 90 servings. URL: https://www.qunol.com/products/qunol-ultra-coq10 | In stock. **One-time $25.99** (90ct). Subscribe $23.39 is not the list price. 120ct SKU 898440001165 one-time **$29.97** (different count). FAQ form sources: https://faqs.qunol.com/en-US/what-is-the-difference-between-ubiquinol-and-ubiquinone-2261829 | **Not selected for wave 1.** Form is identified in manufacturer FAQ/collection, **not** on the captured facts panel. Very high attributed-claim load (3× absorption, cardiologist, statin). Keyword `qunol coq10` is a **future branded-review demand signal**. Do not repeat 3× / cardiologist / statin / superiority language as SuppCheckr conclusions. |
| Qunol Ultra 100 mg, 120 ct | Same formula/facts family | Same official PDP, different count | One-time $29.97 | Same form-on-facts gap; not a second SKU |
| **NOW Foods CoQ10 100 mg, 50 softgels** (SKU 3208, UPC 733739032089) | Facts: Coenzyme Q10 (CoQ10) 100 mg. Official page: **all-trans** CoQ10 produced by fermentation (ubiquinone chemistry; word “ubiquinone” **not** on the facts row). | Serving 1 softgel / 50 servings. EVOO, bovine gelatin, mixed tocopherols, sunflower lecithin, silicon dioxide. Soy-free claim. https://www.nowfoods.com/products/supplements/coq10-100-mg-softgels | In stock. Official one-time **$21.99**. 90-ct **in stores only**. 150-ct $55.99 is a different size. Vitacost NOW CoQ10 rows were **Temporarily unavailable** (not used as the buyable offer). | **Not selected.** Weaker form wording than Jarrow’s on-facts “Ubiquinone”; 50-count is a small bottle. Keep as alternate if Jarrow 60ct later goes OOS. |
| **Doctor's Best High Absorption CoQ10 + BioPerine 100 mg, 120 softgels** (DRB-00183) | **Ubiquinone 100 mg** + BioPerine 5 mg — official facts | https://www.doctorsbest.com/products/doctor-s-best-high-absorption-coq10-100-mg-120-softgels-10930 | Brand **Sold out**. List $20.99 is not a buyable offer. | **Reject for launch** — availability gate |
| **Jarrow Q-absorb 100 mg, 60 softgels** | Ubiquinone on official facts | See §4B | In stock $34.99 one-time | **APPROVED** |

### Third-product / differentiation candidates

| Candidate | Form | Facts / cert | Availability / price | Decision |
|-----------|------|--------------|----------------------|----------|
| **NOW Foods CoQ10 200 mg, 60 veg caps** (3176) | Ubiquinone on official facts | See §4C | In stock $37.99 | **APPROVED** |
| Doctor's Best HA 200 mg, 60 veggie softgels (DRB-00412) | Ubiquinone 200 mg + BioPerine 5 mg — official facts | https://www.doctorsbest.com/products/doctor-s-best-high-absorption-coq10-60-veggie-softgel-69208 | Brand **Sold out**. List $21.99 | **Reject** — availability |
| Kirkland Signature CoQ10 300 mg, 100 softgels | 2019 DSLD Ubidecarenone only for current-label purposes | USP directory name match: https://www.quality-supplements.org/kirkland-signature-coq10-300-mg-softgels (links a 100-softgel Costco URL). Costco.com PDP did not yield current Supplement Facts or a locked warehouse one-time price this pass. Same-day/delivery cards seen in search are not used as the SKU price. | Current exact-variant warehouse price **not locked** | **Reject** — directory + old DSLD ≠ current facts + dated exact-variant price |
| Member's Mark CoQ10 200 mg | USP directory lists “Member's Mark CoQ10 200mg Softgels” **without count** | https://www.quality-supplements.org/members-mark-coq10-200mg-softgels . Sam's Club search still shows **200 mg / 180 ct** around $15.98 (2026-09-16/17 research). No official Sam's Supplement Facts panel captured. Older DSLD 75-ct is a **different count**. | Count/facts not locked to the USP row | **Reject** — USP count unspecified vs current 180-ct offer |
| Nutricost CoQ10 200 mg, 60 capsules | Form still **not** named ubiquinone/ubiquinol on official HTML | nutricost.com capsule PDP is a mixed 100/200/400 mg module without a locked facts panel for UPC 810014671659. 200 mg **softgel** 120-ct is a different product (sold out in prior pass). | Official facts for the exact 60-cap SKU still missing | **Reject** — form unidentified |
| Thorne CoQ10, 100 mg, 60 gelcaps (SKU **SP624**, formerly Q-Best 100) | Official details text: “Thorne CoQ10 contains coenzyme Q10 in the form of **ubiquinone**.” Facts table lists Coenzyme Q10 100 mg (word not on the table row). Separate Thorne Ubiquinol SKU exists. | https://www.thorne.com/products/dp/q-best-100 . Serving 1 gelcap / 60. Other ingredients include flax seed, gelatin, glycerin, lycopene/turmeric color, linoleic acid, **soy monoglycerides**. | In stock. **One-time $53**. Add to cart present. Directions 1–2×/day. | **Not selected.** Complete enough as a practitioner/formulation alternate, but NOW 200 mg has form **on the facts row** and a clearer dose/format contrast. Keyword `thorne coq10` remains a future branded-review signal. Claim-risk: absorption superiority and heart/BP marketing — `brand_claim` only. Testing: brand “third-party tested” language = **claimed**, not NSF-for-this-SKU. |
| Sports Research CoQ10 100 mg, 120 Plantgel | Official HTML still **no Supplement Facts table** | https://www.sportsresearch.com/products/coq10 . One-time $27.95 | Facts gap | **Reject** |
| Qunol Mega Ubiquinol 100 mg, 100 servings | Ubiquinol (Kaneka) on official ingredients | https://www.qunol.com/products/qunol-mega-ubiquinol . One-time $32.99 | Overlaps the already-approved LE ubiquinol slot; very high claim-risk | **Not selected** — duplicate form role |
| Nature Made CoQ10 200 mg softgels | Coenzyme Q10 200 mg; USP Verified **product** claimed | https://www.naturemade.com/products/nature-made-coq10-200-mg-softgels | Brand page **Discontinued** (still rendered $44.54/shipment / low in stock) | **Defer** — discontinued |
| Life Extension CoQ10 (Ubiquinone) with d-Limonene (related module on LE PDP) | Named ubiquinone on related-product tile | Not the approved ubiquinol SKU | Not researched as a launch SKU this pass | Out of scope for the locked three |

Doctor's Best Ubiquinol 100 mg 60 sg remains **rejected** from the 2026-09-16 evening lock (sold out / unavailable). Not re-selected.

---

## 6. Why this three-SKU mix (and not Qunol as SKU 2)

Selection followed **evidence quality**, not brand representation.

- Life Extension 01929 is the only fully documented **ubiquinol** that is currently buyable with named Kaneka ubiquinol on the facts panel.
- Jarrow Q-absorb 60ct is the strongest currently buyable **100 mg ubiquinone** with the form word **on official Supplement Facts**, current one-time price, and Add to cart. Doctor's Best 100 mg has equal form wording but is sold out. Qunol Ultra is buyable and keyword-relevant, but the captured facts panel does not print “ubiquinone,” and the PDP is dominated by attributed medical/superiority marketing that wave-1 copy would have to constantly fence.
- NOW 200 mg / 60 veg caps supplies a **distinct** comparison purpose (higher dose, dry capsule, soy-free, named ubiquinone on facts) without inventing a budget or USP role.

Qunol and Thorne stay on the keyword map as **future** branded-review demand (`qunol coq10` vol 8,700 / KD 5; `thorne coq10` vol 1,400 / KD 3). They are not wave-1 SKUs.

---

## 7. Remaining image limitations

- No licensed manufacturer photography.
- Reuse path remains the site-wide **placeholder** artwork used for published Creatine / Magnesium / Vitamin C / Electrolytes.
- Pack shots, label crops, and UPC photography are a later creative phase — not a 15C YAML invent-facts issue.

---

## 8. Explicit 15C authorization (limited)

**READY FOR LIMITED 15C.**

Authorized later (not in this task): draft product YAML for the **three** SKUs above only; keep CoQ10 shells `draft` / `noindex: true` until a separate publication phase.

Not authorized by this file:

- A fourth review
- Affiliate / ASIN mapping
- Sitemap inclusion or GSC indexing requests
- Disease, statin, fertility, migraine, or dosage-protocol pages
- Treating `best coq10 supplement` as an easy KD 3 term

PR #5 may be merged later as **research documentation**. Merging it does **not** by itself publish CoQ10 or create product YAML.
