# Phase 15B — CoQ10 Keyword Refresh (2026-09-16)

**Date retrieved:** 2026-09-16  
**Market:** United States (intended Ahrefs Google US dataset)  
**Phase:** 15B research/planning only — no live CoQ10 pages, product YAML, affiliate mappings, or indexation  
**Git baseline:** `a90281d` (`main` after PR #4) → branch `research/coq10-phase-15b`

See also (historical, not current): [`phase-8a-keyword-sorting-report-2026-07-07.md`](./phase-8a-keyword-sorting-report-2026-07-07.md), [`phase-8a-keyword-sorted-output-2026-07-07.csv`](./phase-8a-keyword-sorted-output-2026-07-07.csv), [`phase-15a-coq10-category-blueprint-2026-07-07.md`](./phase-15a-coq10-category-blueprint-2026-07-07.md).  
Companion 15B files: [`coq10-product-longlist-research-2026-09-16.md`](./coq10-product-longlist-research-2026-09-16.md), [`phase-15b-coq10-shortlist-decision-2026-09-16.md`](./phase-15b-coq10-shortlist-decision-2026-09-16.md), [`phase-15b-coq10-cluster-url-keyword-map-2026-09-16.md`](./phase-15b-coq10-cluster-url-keyword-map-2026-09-16.md), [`phase-15b-coq10-source-gap-claim-risk-checklist-2026-09-16.md`](./phase-15b-coq10-source-gap-claim-risk-checklist-2026-09-16.md), [`phase-15b-coq10-phase-15c-readiness-2026-09-16.md`](./phase-15b-coq10-phase-15c-readiness-2026-09-16.md).

---

## A. Data-source status (required honesty)

Ahrefs Keywords Explorer / API / MCP **was not available in this session**:

| Connector | Result 2026-09-16 |
|-----------|-------------------|
| Ahrefs MCP namespace | Not registered |
| Ahrefs API env credentials | None present |
| Ahrefs Keywords Explorer (logged-in app) | Not reachable (public site showed Sign in) |
| Ahrefs Free Keyword Generator | Loaded; query params did not auto-run; form submit blocked after browser MCP disconnect |
| Ahrefs Keyword Difficulty Checker (docs) | Tool documentation read; live KD for this seed list not returned |

**Do not treat any number in this file as a fresh Ahrefs Keywords Explorer pull unless the Status column says `Ahrefs US 2026-09-16`.** None of the rows below have that status.

Public KeywordSpy / Amazon-search-frequency numbers seen during this pass (for example KeywordSpy ~450,000/mo for `coq10`, Amazon weekly ~106,905 for `coq10` in July 2026) are **not Ahrefs data**, are not comparable to Phase 8A, and must not be mixed into planning tables.

---

## B. Historical Phase 8A / 15A figures (preserved, dated 2026-07-07)

Source: Ahrefs suggestion export classified in Phase 8A (`google_us_best-suppliment_search-suggestions_2026-07-07_14-34-56.csv`). Only **two** CoQ10 rows existed in that export.

| Keyword | US volume | Traffic potential | KD | Clicks/search | Intent (Phase 8A) | Parent topic (export) | Retrieval date |
|---------|-----------|-------------------|----|---------------|-------------------|----------------------|----------------|
| best coq10 supplement | 6,100 | 13,000 | **3** | 0.80 | Commercial / category | best coq10 supplement | 2026-07-07 |
| best ubiquinol supplement | 300 | 600 | **0** | 0.60 | Commercial / category | best ubiquinol supplement | 2026-07-07 |

Phase 15A then treated `best coq10 supplement` (KD 3, vol 6,100, TP 13,000) as the head commercial term for `/supplements/coq10`.

---

## C. Why KD 3 must not be used as current planning input

**Treat the Phase 15A assumption that `best coq10 supplement` is approximately KD 3 as outdated for 15C planning.**

Reasons (independent of a missing 2026-09-16 KE pull):

1. **Wrong export type.** KD 3 came from a broad “best supplement” *search-suggestions* file, not a dedicated CoQ10 Keywords Explorer overview with current SERP-referring-domain counts.
2. **Internally implausible for this SERP class.** Ahrefs KD is driven by referring domains on the current top 10. “Best {supplement}” SERPs in this niche are typically occupied by large publishers (reviews, health media, retailers). A 6,100-volume US commercial head term at KD 3 would imply first-page referring-domain counts that are unusually low for that class. Until a live US KE overview contradicts that, **do not plan as if this is an easy KD 0–10 win**.
3. **Coverage gap.** Phase 8A did not record US volume, global volume, KD, CPS, TP, parent topic, or SERP features for `coq10 supplement`, `best coq10`, `ubiquinol vs ubiquinone`, dose/format terms, or branded review terms. Planning from two suggestion rows understates both opportunity and competition.
4. **This refresh could not replace those metrics.** Live Ahrefs US metrics were not retrieved on 2026-09-16. Missing current KD is **not** permission to keep using KD 3.

**Required before Phase 15C YAML / title lock:** a United States Keywords Explorer (or equivalent Ahrefs API) overview for the seed list in §E, with Volume, Global volume, KD, Clicks, Traffic potential, Parent topic, Intent, and SERP features, dated on the pull.

---

## D. Intent and URL grouping (no duplicate-intent pages)

Same-intent terms share one URL. Do not spin extra pages for recopying “best CoQ10” language.

| Intended URL | Primary keyword | Secondary keywords (same intent) | Search intent | Notes |
|--------------|-----------------|----------------------------------|---------------|-------|
| `/supplements/coq10` | best coq10 supplement | best coq10; coq10 supplement; best coq10 supplement | Commercial investigation / category | Head hub. “Best” = label/source comparison, not medical winner. |
| `/ingredients/coq10` | coq10 | coenzyme q10; ubiquinone; what is coq10 | Informational | Ingredient reference. Not a second “best CoQ10” page. |
| `/supplements/coq10/compare` | coq10 supplement comparison | coq10 reviews (category-level); compare coq10 supplements | Commercial comparison | Table of locked SKUs only. |
| `/guides/ubiquinol-vs-ubiquinone` | ubiquinol vs ubiquinone | ubiquinol vs coq10; coq10 vs ubiquinol | Comparison / form education | One form-comparison URL for all three phrasings. |
| `/guides/how-to-choose-a-coq10-supplement` | how to choose a coq10 supplement | coq10 softgels; coq10 capsules; coq10 100 mg; coq10 200 mg (supporting) | Commercial education | Dose/format as sections, not separate landing pages in wave 1. |
| Four product-review URLs | branded + SKU terms | qunol coq10 review; doctors best coq10; kirkland coq10; nutricost coq10; now coq10 (map only if SKU is shortlisted) | Commercial / branded | One URL per locked SKU. |

**Do not create dedicated first-wave pages for:** heart-disease treatment; statin replacement or medication advice; blood pressure or cholesterol treatment; fertility treatment; migraine treatment; Parkinson’s treatment; anti-aging cures; guaranteed energy outcomes; “best for seniors,” heart patients, or other medically targeted groups. Those queries may appear only as safety-context FAQ with NIH/NCCIH/FDA sourcing — never as primary targeting.

---

## E. Seed list — current-session records

Status key: `historical Ahrefs 2026-07-07` · `not retrieved 2026-09-16`.

| Keyword | US vol | Global vol | KD | CPS | TP | Intent | Parent topic | SERP features | Status / retrieval date |
|---------|--------|------------|----|-----|----|--------|--------------|---------------|-------------------------|
| best coq10 | — | — | — | — | — | Commercial | unknown | not retrieved | **not retrieved 2026-09-16** |
| coq10 supplement | — | — | — | — | — | Commercial | unknown | not retrieved | **not retrieved 2026-09-16** |
| best coq10 supplement | 6,100 | — | 3 (outdated for planning) | 0.80 | 13,000 | Commercial | best coq10 supplement | not in 8A export | **historical Ahrefs 2026-07-07** |
| ubiquinol vs coq10 | — | — | — | — | — | Comparison | maps to ubiquinol vs ubiquinone | not retrieved | **not retrieved 2026-09-16** |
| ubiquinol vs ubiquinone | — | — | — | — | — | Comparison | unknown | not retrieved | **not retrieved 2026-09-16** |
| coq10 vs ubiquinol | — | — | — | — | — | Comparison | maps to ubiquinol vs ubiquinone | not retrieved | **not retrieved 2026-09-16** |
| best ubiquinol supplement | 300 | — | 0 (historical only) | 0.60 | 600 | Commercial | best ubiquinol supplement | not in 8A export | **historical Ahrefs 2026-07-07** |
| coq10 100 mg | — | — | — | — | — | Commercial / dose | hub + how-to | not retrieved | **not retrieved 2026-09-16** |
| coq10 200 mg | — | — | — | — | — | Commercial / dose | hub + how-to | not retrieved | **not retrieved 2026-09-16** |
| coq10 softgels | — | — | — | — | — | Commercial / format | how-to | not retrieved | **not retrieved 2026-09-16** |
| coq10 capsules | — | — | — | — | — | Commercial / format | how-to | not retrieved | **not retrieved 2026-09-16** |

### Branded / product-specific terms observed in research (no live Ahrefs metrics)

Recorded as future mapping notes only. Do not publish or request indexing.

| Term pattern | Maps to | Notes |
|--------------|---------|-------|
| qunol coq10 / qunol mega ubiquinol / qunol ultra | Product URL only if SKU shortlisted | High claim-risk brand; not a first-wave recommended SKU |
| doctors best coq10 / doctors best ubiquinol / doctors best high absorption coq10 | DB shortlist SKUs | Two Doctor's Best SKUs recommended 2026-09-16 |
| kirkland coq10 / kirkland coq10 300 mg | Kirkland 300 mg if YAML-locked | USP Verified product listing confirmed 2026-09-16 |
| nutricost coq10 | Nutricost 200 mg if YAML-locked | Value SKU; official PDP still missing |
| now coq10 / now ubiquinol | NOW SKUs currently longlist/alternate | US site Cloudflare-blocked 2026-09-16 |
| jarrow qh-absorb / jarrow q-absorb | Longlist only | Absorption marketing |
| life extension ubiquinol | Alternate ubiquinol | Official facts 2026-09-16 |
| sports research coq10 | Alternate vegan ubiquinone | Facts table not on brand HTML 2026-09-16 |
| nature made coq10 | Deferred | Brand PDPs marked discontinued 2026-09-16 despite USP directory rows |
| member's mark coq10 200 mg | Longlist / testing note | USP Verified directory row 2026-09-16; Sam's Club channel |

---

## F. Planning implications without a live KE pull

- Keep the **URL inventory** in the cluster map (hub, ingredient, compare, four reviews, two guides). That structure does not depend on KD 3 being true.
- Do **not** forecast easy rankings or thin content for `best coq10 supplement`.
- `best ubiquinol supplement` (historical KD 0 / vol 300) stays a **supporting** term on the form guide + hub — not a second hub.
- Dose and format terms stay on the how-to guide in wave 1 (avoids thin overlapping pages).
- A live KE pull may merge or split supporting terms; it should not create disease-treatment URLs.

---

## G. Manual Ahrefs checklist (required next)

In Ahrefs → Keywords Explorer → United States → Google:

1. Paste the §E seed list plus branded terms for the approved four SKUs.
2. Export Overview + SERP overview (Volume, Global volume, KD, Clicks, Traffic potential, Parent topic, Intent, SERP features).
3. Replace the blank 2026-09-16 cells in this file or add a dated `phase-15c-coq10-keyword-lock-YYYY-MM-DD.md`.
4. Re-evaluate whether `/guides/how-to-choose-a-coq10-supplement` should also carry `coq10 100 mg` / `coq10 200 mg` as primary vs remaining supporting.

Until that export exists, Phase 15C title/meta lock is **blocked**.
