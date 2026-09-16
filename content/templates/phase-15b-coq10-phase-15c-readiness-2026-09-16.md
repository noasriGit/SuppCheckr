# Phase 15B — Phase 15C readiness recommendation (2026-09-16)

**Recommendation: not ready for Phase 15C product YAML drafting.**

This is a research-only close-out. July 15B materials remain historical. Current files:

| Deliverable | File |
|-------------|------|
| Keyword refresh | [`phase-15b-coq10-keyword-refresh-2026-09-16.md`](./phase-15b-coq10-keyword-refresh-2026-09-16.md) |
| 20-SKU longlist | [`coq10-product-longlist-research-2026-09-16.md`](./coq10-product-longlist-research-2026-09-16.md) |
| Four-product shortlist | [`phase-15b-coq10-shortlist-decision-2026-09-16.md`](./phase-15b-coq10-shortlist-decision-2026-09-16.md) |
| Cluster URL map | [`phase-15b-coq10-cluster-url-keyword-map-2026-09-16.md`](./phase-15b-coq10-cluster-url-keyword-map-2026-09-16.md) |
| Source-gap / claim-risk | [`phase-15b-coq10-source-gap-claim-risk-checklist-2026-09-16.md`](./phase-15b-coq10-source-gap-claim-risk-checklist-2026-09-16.md) |
| This decision | this file |

---

## Why not ready

1. **No live Ahrefs US Keywords Explorer pull.** Phase 15A’s `best coq10 supplement` **KD 3** must not be used as current difficulty. Titles/metas in the cluster map are directional only.
2. **Two of four finalists fail the YAML label gate today.** Nutricost form is unspecified on captured facts; Kirkland facts and warehouse price were not locked on 2026-09-16.
3. **Doctor's Best PDPs showed sold out.** Facts are good enough to *draft* only after a buyable lot is confirmed.
4. **NIH ODS CoQ10 HP URL 404.** Ingredient shell still cites it. Publishing that page would ship a broken primary citation.
5. **User approval** of the four-SKU mix (two Doctor's Best brands) is still required. July had five SKUs.

---

## What 15C may start after these gates

| Gate | Done when |
|------|-----------|
| Ahrefs US KE export for the seed list | Dated spreadsheet attached; KD 3 replaced |
| Shortlist confirmation | User accepts the four SKUs or names swaps (LE / Sports Research / DB 200 mg / Member's Mark) |
| Label lock | Official or bottle facts for all four: form, mg, serving, count, oil, shell, allergens, other ingredients |
| Price lock | Non-Amazon dated prices; Kirkland warehouse or Costco.com |
| Citation lock | Replace ODS 404; keep NCCIH + FDA |
| Still draft/noindex | No sitemap, no GSC indexing, no ASINs |

Partial YAML for the two Doctor's Best SKUs **only** would still be premature until gates 1, 3, and 5 are done — otherwise 15C would freeze titles against stale KD and possibly OOS SKUs.

---

## Explicitly out of scope until a later approved phase

- Live `/supplements/coq10` or product/guide routes
- Affiliate mappings / Amazon ASINs
- Indexing requests for CoQ10 URLs
- Scoring the shortlist in product YAML

---

## Indexation confirmation (this branch)

`content/categories/coq10.yaml` and `content/ingredients/coq10.yaml` stay `status: draft`, `noindex: true`, with no `featuredProductIds` or related guides. No `content/products/coq10/` directory is created.
