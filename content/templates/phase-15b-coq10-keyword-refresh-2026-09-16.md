# Phase 15B — CoQ10 Keyword Refresh (2026-09-16)

**Date retrieved:** 2026-09-16  
**Market:** United States (intended Ahrefs Google US dataset)  
**Phase:** 15B research/planning only — no live CoQ10 pages, product YAML, affiliate mappings, or indexation  
**Git baseline:** `a90281d` (`main` after PR #4) → branch `research/coq10-phase-15b`

See also (historical, not current): [`phase-8a-keyword-sorting-report-2026-07-07.md`](./phase-8a-keyword-sorting-report-2026-07-07.md), [`phase-8a-keyword-sorted-output-2026-07-07.csv`](./phase-8a-keyword-sorted-output-2026-07-07.csv), [`phase-15a-coq10-category-blueprint-2026-07-07.md`](./phase-15a-coq10-category-blueprint-2026-07-07.md).  
Companion 15B files: [`coq10-product-longlist-research-2026-09-16.md`](./coq10-product-longlist-research-2026-09-16.md), [`phase-15b-coq10-shortlist-decision-2026-09-16.md`](./phase-15b-coq10-shortlist-decision-2026-09-16.md), [`phase-15b-coq10-cluster-url-keyword-map-2026-09-16.md`](./phase-15b-coq10-cluster-url-keyword-map-2026-09-16.md), [`phase-15b-coq10-source-gap-claim-risk-checklist-2026-09-16.md`](./phase-15b-coq10-source-gap-claim-risk-checklist-2026-09-16.md), [`phase-15b-coq10-blocker-resolution-2026-09-16.md`](./phase-15b-coq10-blocker-resolution-2026-09-16.md), [`phase-15b-coq10-phase-15c-readiness-2026-09-16.md`](./phase-15b-coq10-phase-15c-readiness-2026-09-16.md), [`phase-15b-coq10-final-sourcing-2026-09-17.md`](./phase-15b-coq10-final-sourcing-2026-09-17.md).

**Current keyword lock:** Ahrefs US Volume and KD for seven exact keywords were retrieved in the **main September 16, 2026 SuppCheckr audit** and are recorded below as current data dated `2026-09-16`. They **supersede** the July 7 historical figures for those exact keywords.

A later 15B agent pass on 2026-09-16 lacked Ahrefs MCP, API credentials, and a logged-in Keywords Explorer session, and therefore documented that no current Ahrefs evidence was available. That later-pass statement was incorrect for the seven keywords below. The later agent did not have Ahrefs access; the main audit had already retrieved the values.

TP, CPC, CPS, parent topic, global volume, and SERP features were **not** in the supplied retrieval and remain blank. They are **not** inferred. Unsupported keywords stay blank and are marked unavailable.

A complete ten-keyword export is still desirable when Ahrefs is next available. It is **no longer** an absolute blocker to drafting evidence-complete product records.

---

## A. Data-source status (required honesty)

Ahrefs Keywords Explorer figures below for seven exact keywords come from the **main 2026-09-16 SuppCheckr audit**, not from the later agent pass that lacked Ahrefs access.

| Connector | Result |
|-----------|--------|
| Main 2026-09-16 audit (Ahrefs US KE) | **Retrieved** Volume + KD for the seven keywords in §E |
| Later 2026-09-16 agent pass | Ahrefs MCP not registered; no API credentials; Keywords Explorer not logged in — this pass could not re-pull metrics and incorrectly stated that none were available |
| 2026-09-17 sourcing pass | Did not re-query Ahrefs; recorded the already-retrieved 2026-09-16 Volume/KD values |

**Do not treat any number as a fresh Ahrefs pull unless the Status column says `Ahrefs US 2026-09-16`.** Blank TP/CPC/CPS/parent-topic cells mean **not retrieved**, not zero.

Public KeywordSpy / Amazon-search-frequency numbers seen during the later 2026-09-16 pass are **not Ahrefs data**, are not comparable to Phase 8A, and must not be mixed into planning tables.

---

## B. Historical Phase 8A / 15A figures (preserved, dated 2026-07-07)

Source: Ahrefs suggestion export classified in Phase 8A (`google_us_best-suppliment_search-suggestions_2026-07-07_14-34-56.csv`). Only **two** CoQ10 rows existed in that export.

| Keyword | US volume | Traffic potential | KD | Clicks/search | Intent (Phase 8A) | Parent topic (export) | Retrieval date |
|---------|-----------|-------------------|----|---------------|-------------------|----------------------|----------------|
| best coq10 supplement | 6,100 | 13,000 | **3** | 0.80 | Commercial / category | best coq10 supplement | 2026-07-07 |
| best ubiquinol supplement | 300 | 600 | **0** | 0.60 | Commercial / category | best ubiquinol supplement | 2026-07-07 |

Phase 15A then treated `best coq10 supplement` (KD 3, vol 6,100, TP 13,000) as the head commercial term for `/supplements/coq10`.

---

## C. Why July KD 3 must not be used — and what replaced it

**Do not use the Phase 15A / July 7 assumption that `best coq10 supplement` is approximately KD 3.**

The 2026-09-16 Ahrefs US retrieval for that exact keyword is **US volume 6,400 / KD 46**. Treat it as a **competitive secondary** hub variation, not an easy ranking target.

Additional reasons the July export was already a weak planning input:

1. **Wrong export type.** July KD 3 came from a broad “best supplement” *search-suggestions* file, not a dedicated CoQ10 Keywords Explorer overview.
2. **Coverage gap.** Phase 8A recorded only two CoQ10 rows. Planning from those two suggestion rows understated both opportunity and competition.
3. **Current hub opportunity.** Target **`best coq10`** as the primary hub term (US vol 2,800 / KD 0). Keep `best coq10 supplement` as the competitive secondary.

**No longer required before limited 15C YAML drafts:** a complete ten-keyword export. Remaining blanks stay marked unavailable. Capture the rest when Ahrefs is next available.

---

## D. Intent and URL grouping (no duplicate-intent pages)

Same-intent terms share one URL. Do not spin extra pages for recopying “best CoQ10” language.

| Intended URL | Primary keyword | Secondary keywords (same intent) | Search intent | Notes |
|--------------|-----------------|----------------------------------|---------------|-------|
| `/supplements/coq10` | best coq10 | best coq10 supplement; coq10 supplement | Commercial investigation / category | Head hub. Primary opportunity is `best coq10` (KD 0). `best coq10 supplement` is a competitive secondary (KD 46). “Best” = label/source comparison, not medical winner. |
| `/ingredients/coq10` | coq10 | coenzyme q10; ubiquinone; what is coq10 | Informational | Ingredient reference. Not a second “best CoQ10” page. |
| `/supplements/coq10/compare` | coq10 supplement comparison | coq10 reviews (category-level); compare coq10 supplements | Commercial comparison | Table of locked SKUs only. |
| `/guides/ubiquinol-vs-ubiquinone` | ubiquinol vs ubiquinone | ubiquinol vs coq10; coq10 vs ubiquinol | Comparison / form education | One form-comparison URL for all three phrasings. |
| `/guides/how-to-choose-a-coq10-supplement` | how to choose a coq10 supplement | coq10 softgels; coq10 capsules; coq10 100 mg; coq10 200 mg (supporting) | Commercial education | Dose/format as sections, not separate landing pages in wave 1. |
| Four product-review URLs | branded + SKU terms | qunol coq10; thorne coq10; doctors best coq10; now coq10 (map only if SKU is shortlisted) | Commercial / branded | Wave 1: three locked SKUs only. `qunol coq10` and `thorne coq10` are future demand signals unless those exact SKUs later pass every evidence gate. |

**Do not create dedicated first-wave pages for:** heart-disease treatment; statin replacement or medication advice; blood pressure or cholesterol treatment; fertility treatment; migraine treatment; Parkinson’s treatment; anti-aging cures; guaranteed energy outcomes; “best for seniors,” heart patients, or other medically targeted groups. Those queries may appear only as safety-context FAQ with NCCIH/FDA sourcing — never as primary targeting. Do **not** create a standalone `coq10 dosage` page in wave one despite KD 0.

---

## E. Seed list — current records

Status key: `Ahrefs US 2026-09-16` · `unavailable` · `historical Ahrefs 2026-07-07` (superseded when a 2026-09-16 row exists).

Only Volume and KD were supplied for the retrieved rows. Global vol, CPS, TP, parent topic, and SERP features stay blank unless directly retrieved.

| Keyword | US vol | Global vol | KD | CPS | TP | Intent | Parent topic | SERP features | Status / retrieval date |
|---------|--------|------------|----|-----|----|--------|--------------|---------------|-------------------------|
| best coq10 | 2,800 | — | 0 | — | — | Commercial | — | — | **Ahrefs US 2026-09-16** |
| coq10 dosage | 2,700 | — | 0 | — | — | Informational (how-to; no medical dosing page) | — | — | **Ahrefs US 2026-09-16** |
| ubiquinol vs coq10 | 1,600 | — | 3 | — | — | Comparison | — | — | **Ahrefs US 2026-09-16** |
| ubiquinol vs ubiquinone | 1,300 | — | 5 | — | — | Comparison | — | — | **Ahrefs US 2026-09-16** |
| qunol coq10 | 8,700 | — | 5 | — | — | Branded (future review demand) | — | — | **Ahrefs US 2026-09-16** |
| thorne coq10 | 1,400 | — | 3 | — | — | Branded (future review demand) | — | — | **Ahrefs US 2026-09-16** |
| best coq10 supplement | 6,400 | — | 46 | — | — | Commercial | — | — | **Ahrefs US 2026-09-16** (supersedes July vol 6,100 / KD 3 / TP 13,000) |
| coq10 supplement | — | — | — | — | — | Commercial | — | — | **unavailable** |
| coq10 vs ubiquinol | — | — | — | — | — | Comparison | maps to form guide | — | **unavailable** |
| best ubiquinol supplement | — | — | — | — | — | Commercial | — | — | **unavailable** as current KE (July historical only: vol 300 / KD 0 / TP 600) |
| coq10 100 mg | — | — | — | — | — | Commercial / dose | — | — | **unavailable** |
| coq10 200 mg | — | — | — | — | — | Commercial / dose | — | — | **unavailable** |
| coq10 softgels | — | — | — | — | — | Commercial / format | — | — | **unavailable** |
| coq10 capsules | — | — | — | — | — | Commercial / format | — | — | **unavailable** |
| how to choose coq10 | — | — | — | — | — | Commercial education | — | — | **unavailable** |

### Branded / product-specific terms

| Term pattern | Maps to | Notes |
|--------------|---------|-------|
| qunol coq10 / qunol mega / qunol ultra | Future branded review only if an exact SKU later passes every evidence gate | 2026-09-16 KE: vol 8,700 / KD 5. Wave-1 SKU **not** Qunol (facts panel does not name ubiquinone; high attributed-claim load). |
| thorne coq10 | Future branded review | 2026-09-16 KE: vol 1,400 / KD 3. Official SP624 is buyable; not selected over NOW 200 mg for wave 1. |
| jarrow q-absorb | Wave-1 product URL | Locked 60ct ubiquinone SKU 2026-09-17 |
| life extension ubiquinol | Wave-1 product URL | Locked item 01929 |
| now coq10 | Wave-1 200 mg veg-cap URL; 100 mg 50ct is an alternate | Official US PDP loaded 2026-09-17 |
| doctors best coq10 | Not wave 1 | Official 100 mg / 200 mg PDPs sold out 2026-09-17 |
| kirkland coq10 / nutricost coq10 / member's mark coq10 | Not wave 1 | Current facts/price or form still not locked |
| nature made coq10 | Deferred | Brand PDPs marked discontinued |

---

## F. Planning implications

- Target **`best coq10`** as the primary hub opportunity.
- Treat **`best coq10 supplement`** as a competitive secondary variation (**KD 46**), not an easy KD 3 term.
- Keep **one** form-comparison guide for `ubiquinol vs ubiquinone` and `ubiquinol vs coq10`.
- Keep `coq10 dosage` on the how-to guide. **No standalone dosage page** in wave 1 (YMYL).
- Wave 1 product reviews: **three** locked SKUs. Fourth review deferred.
- `qunol coq10` and `thorne coq10` are future product-review demand signals, not a requirement to force those brands into the first three SKUs.
- Do not create disease-treatment URLs.

---

## G. Optional later Ahrefs export

When Ahrefs is next available, export Volume, Global volume, KD, Clicks, Traffic potential, Parent topic, Intent, and SERP features for the still-unavailable rows in §E plus branded terms for the three locked SKUs. Attach as `phase-15c-coq10-keyword-lock-YYYY-MM-DD.md` if useful.

This remaining export is **desirable**, not an absolute blocker to drafting the three evidence-complete product records.
