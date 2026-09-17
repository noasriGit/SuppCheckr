# Phase 15B — Blocker-resolution report (2026-09-16, evening pass)

> **Superseded for launch-readiness by** [`phase-15b-coq10-final-sourcing-2026-09-17.md`](./phase-15b-coq10-final-sourcing-2026-09-17.md) (**READY FOR LIMITED 15C**, three SKUs). This evening file remains the 2026-09-16 **NOT READY** evidence lock.

**Retrieval date:** 2026-09-16  
**Branch / PR:** `research/coq10-phase-15b` / [#5](https://github.com/noasriGit/SuppCheckr/pull/5)  
**Verdict (this evening pass only):** **NOT READY FOR 15C** — superseded 2026-09-17.

No product YAML, live CoQ10 pages, affiliate mappings, or sitemap inclusion in this pass. Category and ingredient shells remain `draft` / `noindex: true`.

---

## 1. Keyword evidence

**Authenticated Ahrefs US Keywords Explorer data for seven exact keywords was retrieved in the main 2026-09-16 audit** (Volume + KD only). A later agent pass the same evening lacked Ahrefs access and incorrectly left this table blank. See [`phase-15b-coq10-keyword-refresh-2026-09-16.md`](./phase-15b-coq10-keyword-refresh-2026-09-16.md) and [`phase-15b-coq10-final-sourcing-2026-09-17.md`](./phase-15b-coq10-final-sourcing-2026-09-17.md). The evening table below is the **historical later-pass gap record**, not the current keyword lock.

Google Search Console was **not** used as a substitute for market-wide volume. GSC can only describe existing SuppCheckr URLs.

**Do not present 2026-07-07 Phase 8A figures as current.** They remain historical only (`best coq10 supplement` US vol 6,100 / KD 3 / TP 13,000; `best ubiquinol supplement` vol 300 / KD 0 / TP 600). KD 3 is **not** a current planning input.

| Keyword | US vol | KD | TP | CPC | Parent topic | SERP intent | Retrieval |
|---------|--------|----|----|-----|--------------|-------------|-----------|
| best coq10 supplement | — | — | — | — | — | Commercial (hub) | **not retrieved** — manual KE gate |
| best coq10 | — | — | — | — | — | Commercial (hub) | **not retrieved** |
| coq10 supplements | — | — | — | — | — | Commercial (hub) | **not retrieved** |
| best ubiquinol supplement | — | — | — | — | — | Commercial (form guide + hub, supporting) | **not retrieved** |
| ubiquinol vs ubiquinone | — | — | — | — | — | Comparison (form guide) | **not retrieved** |
| ubiquinol vs coq10 | — | — | — | — | — | Comparison (form guide) | **not retrieved** |
| coq10 dosage | — | — | — | — | — | Informational (how-to; no medical dosing) | **not retrieved** |
| how to choose coq10 | — | — | — | — | — | Commercial education (how-to) | **not retrieved** |
| qunol coq10 | — | — | — | — | — | Branded (no Qunol SKU in launch set) | **not retrieved** |
| thorne coq10 | — | — | — | — | — | Branded (Thorne not launch-locked) | **not retrieved** |

**URL ownership still holds** (intent, not metrics):

- `/supplements/coq10` owns “best CoQ10” and “best CoQ10 supplement.”
- `/guides/ubiquinol-vs-ubiquinone` owns form-comparison intent (`ubiquinol vs ubiquinone`, `ubiquinol vs coq10`, `coq10 vs ubiquinol`).
- `/guides/how-to-choose-a-coq10-supplement` owns dosage/format/selection questions without individualized medical advice.
- No wave-1 disease, statin, fertility, migraine, blood-pressure, or heart-treatment pages.

**Remaining manual gate:** paste the table above into Ahrefs Keywords Explorer → United States → Google and export Volume, KD, TP, CPC, Parent topic, Intent, SERP features.

---

## 2. Candidate-by-candidate evidence (2026-09-16)

Gates: exact SKU/count · verified form · Supplement Facts · obtainable or documented availability · current price on that variant · conservative claims · stable URL · distinct role · image path.

Image path for all SKUs: **do not reuse manufacturer photos.** Existing SuppCheckr legal/editorial path is **label-first placeholder artwork** (`/images/products/placeholder.svg`), same as published Creatine/Magnesium/Vitamin C/Electrolytes. That is the reuse plan; licensed pack shots remain a later creative phase, not a YAML invent-facts issue.

### Ubiquinol slot

| Candidate | Form | Facts | Count / SKU | Availability | Price (2026-09-16) | Testing | Decision |
|-----------|------|-------|-------------|--------------|--------------------|---------|----------|
| Doctor's Best Ubiquinol Kaneka 100 mg, 60 sg | Ubiquinol (Kaneka) — official facts | Official PDP | DRB-00205; 60 sg | **Sold out** on brand; Vitacost search **Temporarily unavailable** | Brand list $36.99; not a buyable offer | unknown | **Reject for launch** — not currently obtainable |
| **Life Extension Super Ubiquinol CoQ10 100 mg, 60 sg** | **Ubiquinol (Kaneka Ubiquinol™) 100 mg** | Official PDP facts | Item **01929**; UPC **737870192961**; 60 sg; serving 1 softgel | **In stock** — one-time purchase + Add to cart (browser 2026-09-16) | **$37.50** official one-time (not AutoShip $31.00) | unknown | **APPROVED** for ubiquinol slot |
| Sports Research CoQ10 100 mg, 120 Plantgel | **Not verified as ubiquinol.** Brand HTML has **no Supplement Facts table**. Marketing is generic CoQ10 + coconut MCT + BioPerine (typical ubiquinone formula). | Missing official facts | 120 Plantgel | $27.95 listed | n/a until facts | claimed “third-party tested” | **Reject for ubiquinol slot**; not YAML-ready |

**Ubiquinol recommendation:** Life Extension Super Ubiquinol CoQ10, 100 mg, 60 softgels (01929).

| Field | Locked value |
|-------|----------------|
| Other actives | None on facts |
| Other ingredients | Extra virgin olive oil, gelatin, glycerin, beeswax, purified water, sunflower lecithin, ascorbyl palmitate, annatto color |
| Price / serving | $37.50 ÷ 60 = **$0.63** |
| Price / 100 mg | **$0.63** |
| Official URL | https://www.lifeextension.com/vitamins-supplements/item01929/super-ubiquinol-coq10 |
| Warnings | Brand bioavailability / heart / fatigue copy — `brand_claim` only. Directions 1–2 softgels/day — disclose range; normalize price at 1/day. |
| Image | Placeholder path only |

### Mainstream ubiquinone slot

| Candidate | Form | Facts | Availability | Price | Testing | Decision |
|-----------|------|-------|--------------|-------|---------|----------|
| Doctor's Best High Absorption CoQ10 + BioPerine 100 mg, 120 sg | **Ubiquinone 100 mg** + BioPerine 5 mg — official facts | Official PDP + matching Vitacost panel | Brand **Sold out**. Vitacost PDP showed $20.99 / exp 02/28/2029 but search also marked DB SKUs **Temporarily unavailable**. Buyable offer **not confirmed**. | Brand/Vitacost list **$20.99** ($0.17/serving; $0.17/100 mg) **if** in stock | Brand: “USP Verified, Naturally Fermented CoQ10” = **ingredient claim**. **Not** in 2026-09-16 USP CoQ10 product directory. Never call this SKU USP Verified **product**. | **Not approved** — availability gate failed |

Contains soy; gelatin; EVOO. URL: https://www.doctorsbest.com/products/doctor-s-best-high-absorption-coq10-100-mg-120-softgels-10930 (DRB-00183).

### Budget slot

| Candidate | Form | Facts | Availability | Price | Decision |
|-----------|------|-------|--------------|-------|----------|
| Nutricost CoQ10 200 mg, 60 veg caps UPC 810014671659 | **Unverified.** NIH DSLD 272658 (entered **2022-08-23**) lists **Coenzyme Q-10 (CoQ10) 200 mg** — not ubiquinone or ubiquinol. Vitacost panel same. Official nutricost.com PDP for **this capsule SKU** not captured (brand site shows a **different** 200 mg **softgel** 120-ct, sold out). | DSLD/Vitacost: 1 cap, 60 servings, rice flour + hypromellose (Vitacost also lists stearate/silica — conflict) | Vitacost $15.95 | $0.27/serv; $0.13/100 mg **if** used | **Reject** — form not verified |
| Doctor's Best High Absorption 200 mg, 60 veggie sg (DRB-00412) | **Ubiquinone 200 mg** + BioPerine 5 mg — official facts | Official PDP | Brand **Sold out** | List $21.99 ($0.37/serv; $0.18/100 mg) | **Not approved** — availability gate |

### Testing / certification slot

| Candidate | USP | Current facts | Current price / availability | Decision |
|-----------|-----|---------------|------------------------------|----------|
| Kirkland Signature CoQ10 300 mg, 100 sg | **Yes — name match** on quality-supplements.org CoQ10 search 2026-09-16 | **Archived** NIH DSLD 207421 entered **2019-10-23**: Coenzyme Q10 300 mg; other ingredients include **Coenzyme Q10 (Ubidecarenone)** = ubiquinone; soybean oil; gelatin (bovine); soy lecithin; silica; **Contains soy**; UPC 096619928118; item 648220 on label PDF OCR. Costco.com fetch **500**. | **Not locked** | **Not approved** — directory row + 2019 DSLD ≠ current price/availability |
| Member's Mark CoQ10 200 mg | Directory lists “Member's Mark CoQ10 200mg Softgels” (count unspecified) | Sam's Club search 2026-09-16: **200 mg, 180 ct, $15.98**. Older DSLD 12259 is **75 ct (2012)** — **different count**. No official Sam's PDP Supplement Facts captured. | Price seen on search card only | **Not approved** — SKU/count/facts not locked to one variant |

---

## 3. Final launch mix

| Role | Recommendation | Status |
|------|----------------|--------|
| Ubiquinol | Life Extension Super Ubiquinol CoQ10 100 mg, 60 softgels (01929) | **Approved** (this pass) |
| Mainstream ubiquinone | Doctor's Best HA 100 mg / 120 sg | **Open** — facts OK, stock not locked |
| Budget | Nutricost 200 mg 60 caps **or** DB 200 mg veggie | **Open** — form fail / stock fail |
| Independently verified | Kirkland 300 mg or Member's Mark 200 mg | **Open** — USP name only, current label/price not locked |

**Approved count: 1 of 4.** Do not fill empty slots by lowering the evidence standard.

---

## 4. NIH ODS URL disposition

| Item | Finding (2026-09-16) |
|------|----------------------|
| Broken URL | `https://ods.od.nih.gov/factsheets/CoenzymeQ10-HealthProfessional/` |
| Live fetch | **HTTP 404** |
| Disposition | **Retired / removed as a standalone ODS Health Professional fact sheet.** ODS `list-all` now points “Coenzyme Q10” to **NCCIH**, not an ODS CoQ10 HP page. This is not a silent rename in ingredient YAML. |
| Keep | NCCIH overview — live: https://www.nccih.nih.gov/health/coenzyme-q10 (Last Updated: January 2019). Use for conservative safety (warfarin/insulin; evidence **does not** support statin myalgia, BP, Parkinson’s treatment claims). |
| Also keep | FDA dietary supplements: https://www.fda.gov/food/dietary-supplements |
| Optional later (not shopping claims) | NCI PDQ CoQ10 (patient), updated **2024-05-28**: https://www.cancer.gov/about-cancer/treatment/cam/patient/coenzyme-q10-pdq — cancer-context only; do not build treatment pages |
| Do not use | Brand sites for medical/safety guidance; ODS primary-mitochondrial-disorder CoQ10 **dosing** as consumer advice |

Draft ingredient YAML still cited the 404 URL (`nih-coq10-hp`) after this evening pass. **Replaced 2026-09-17** with live NCCIH + FDA in `content/ingredients/coq10.yaml` while shells remain draft/noindex. Dead URL and 404 finding stay in this file and the source inventory.

---

## 5. Remaining blockers (15C gates)

1. Authenticated Ahrefs US KE export for the ten keywords (and branded terms for any approved SKUs).
2. Buyable, non-Amazon offer for a mainstream ubiquinone SKU with official facts (DB 100 mg / 120 if restocked).
3. Budget SKU with **named form** + current offer (not Nutricost until the label says ubiquinone or ubiquinol).
4. Independently verified SKU with **current** Supplement Facts + dated warehouse/club price + USP name match (Kirkland or exact Member's Mark count).
5. User approval of the one-SKU (or later four-SKU) mix.
6. Swap `nih-coq10-hp` to NCCIH/FDA before any indexable CoQ10 page.

---

## 6. Explicit verdict

**NOT READY FOR 15C.**  
**PR #5:** update in place as research; **do not merge as a publish/15C authorization.** Phase 15C product YAML is **not** authorized.
