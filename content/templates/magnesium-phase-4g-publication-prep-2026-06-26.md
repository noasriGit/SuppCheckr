# Magnesium Phase 4G — Publication Prep (No Publication)

**Date:** 2026-06-29  
**Phase:** 4G — Magnesium publication prep only (no publish executed)  
**Git baseline:** Phase 4F committed at `25c3cc4` on `main`

---

## A. Scope and constraints

Phase 4G re-checked source facts, refreshed prices where accessible, confirmed draft/noindex boundaries, ran a final claim-risk pass, and prepared a staged publication plan. **No publication was executed.**

**Honored constraints:**

| Constraint | Status |
|------------|--------|
| Magnesium remains `status: draft` / `noindex: true` | **Pass** |
| No affiliate enablement | **Pass** |
| No Amazon Associate tags | **Pass** |
| Live ad scripts disabled | **Pass** |
| Legal pages draft/noindex | **Pass** |
| `SITE_MODE` prelaunch | **Pass** |
| No threonate product YAML | **Pass** |
| No extra products beyond approved five | **Pass** |
| No Creatine content edits | **Pass** |
| Product images remain placeholders | **Pass** |

---

## B. Current draft cluster inventory

| Entity type | Count | Paths / IDs |
|-------------|-------|-------------|
| Ingredient hub | 1 | `content/ingredients/magnesium.yaml` |
| Guides | 6 | `what-is-magnesium`, `types-of-magnesium`, `how-to-choose-a-magnesium-supplement`, `magnesium-dosage-guide`, `magnesium-side-effects-and-safety`, `magnesium-glycinate-vs-citrate` |
| Products | 5 | `content/products/magnesium/*.yaml` |
| Category | 1 | `content/categories/magnesium.yaml` |
| Comparison | 1 | `content/comparisons/magnesium-supplements-compared.yaml` |
| Scoring profile/rubric | 2 | `content/scoring/profiles/magnesium.yaml`, `content/scoring/rubrics/magnesium.yaml` |
| Draft brands (Magnesium-only) | 2 | `content/brands/pure-encapsulations.yaml`, `content/brands/nature-made.yaml` |

**Total Magnesium YAML entities:** 16 content files (+ scoring profile/rubric).

All entities: `status: draft`, `noindex: true`, `isPlaceholder: false` (products/category/comparison).

---

## C. Source/testing status by product (Phase 4G re-check)

| Product | Label source | Key facts confirmed | Testing status | Phase 4G action |
|---------|--------------|---------------------|----------------|-----------------|
| **Klean Athlete Klean Magnesium** | Brand product page (prior); NSF listing | NSF listing **1281622** active: Klean Magnesium, 90 caps, 1-capsule serving, unflavored capsule (accessed 2026-06-29). Glycinate, 120 mg elemental per brand Supplement Facts (prior capture). | **verified** (NSF Certified for Sport) | NSF re-verified; testing unchanged |
| **Nutricost Magnesium Citrate 120** | Nutricost.com | 120-capsule SKU confirmed; 420 mg elemental / 4 caps / 30 servings on product page (accessed 2026-06-29). | **claimed** | No public COA URL found; kept claimed |
| **NOW Magnesium Malate 1000 mg (SKU 1300)** | NOWFoods.com | SKU 1300, UPC 733739013002, 180 tablets, 113 mg elemental from 1000 mg malate, 1-tablet serving (accessed 2026-06-29). | **unknown** | No verifiable third-party cert captured |
| **Pure Encapsulations Citrate/Malate 180** | Vitacost listing (retailer) | 120 mg elemental citrate/malate, 1 cap, 180 servings, UPC 766298004365 (Vitacost accessed 2026-06-29). **No official US brand-hosted product page URL found** on pureencapsulations.com. | **unknown** | Label source gap remains documented blocker/limitation |
| **Nature Made Magnesium Oxide 250 mg 100 tabs** | Target listing | 250 mg elemental oxide, 1 tablet, 100 servings, UPC 031604012694 (Target $4.49, accessed 2026-06-29). USP Verified product search (magnesium oxide + Nature Made) returned **no oxide listing** (accessed 2026-06-29). | **unknown** | USP not verified for this SKU |

**Threonate:** No product YAML. Educational mentions only in guides/templates.

---

## D. Price refresh table (Phase 4G)

| Product | Source | Price | Checked | Servings | Elemental mg/serv | $/serving | $/100 mg elemental | Updated? |
|---------|--------|-------|---------|----------|-------------------|-----------|-------------------|----------|
| Klean Athlete Klean Magnesium | KleanAthlete.com | **$26.50** (prior) | 2026-06-29 | 90 | 120 mg | $0.29 | $0.24 | **No** — brand page returned 403; preserved with caveat |
| Nutricost Citrate 120 | Nutricost.com | **$13.97** | 2026-06-29 | 30 | 420 mg | $0.47 | $0.11 | No — unchanged |
| NOW Malate SKU 1300 | NOWFoods.com | **$25.99** | 2026-06-29 | 180 | 113 mg | $0.14 | $0.13 | No — unchanged |
| Pure Encapsulations Citrate/Malate | Vitacost | **$36.50** | 2026-06-29 | 180 | 120 mg | $0.20 | $0.17 | No — unchanged from Phase 4F |
| Nature Made Oxide 100 tabs | Target | **$4.49** | 2026-06-29 | 100 | 250 mg | $0.04 | $0.018 | No — unchanged |

No Amazon or affiliate pricing used.

---

## E. Remaining blockers and resolution status

| Priority | Blocker | Resolution |
|----------|---------|------------|
| **High** | Pure Encapsulations official brand-hosted Supplement Facts URL | **Unresolved — accepted documented limitation.** Vitacost listing re-confirmed 2026-06-29; pureencapsulations.com product page not found. Retailer-sourced label caveat must remain prominent at publish. |
| **High** | Klean Athlete price re-check | **Partially resolved.** NSF re-verified 2026-06-29; price **not re-checked** (403 on brand page). Re-check immediately before publish or accept stale $26.50 with dated caveat. |
| **Medium** | Nutricost public COA/certificate | **Unresolved — accepted limitation.** Brand states third-party tested; no public COA URL for this SKU. Testing remains **claimed**. |
| **Medium** | Nature Made USP/testing verification | **Resolved as unknown.** USP Verified database search (2026-06-29) lists Nature Made magnesium citrate/glycinate products but **not** Magnesium Oxide 250 mg Tablets. Testing remains **unknown**. |
| **Low** | Product placeholder images | **Accepted limitation** — post-publish asset phase |
| **Low** | Legal pages attorney-review draft/noindex | **Accepted limitation** — separate legal phase |
| **Low** | Nature Made brand site lists 100-count product as discontinued ($6.19) while Target still sells at $4.49 | **Documented.** Primary price source remains Target listing used in product YAML; re-verify at publish. |

---

## F. Publication readiness verdict

### **Ready for an explicit publication phase — with documented limitations**

The Magnesium draft cluster is **content-complete, boundary-safe, and claim-conservative**. Scoring, comparison, and draft exposure controls (Phase 4F-2) are in place. Publication should **not** proceed in this phase.

**Publish only when:**

1. User explicitly approves Magnesium publication in a separate phase.
2. Publish-time re-checks are done for Klean price/NSF and current retailer prices.
3. Stakeholder accepts Pure Encapsulations retailer-sourced label caveat (or official label is obtained first).
4. Placeholder images and legal draft status remain acceptable (per project constraints).

---

## G. Recommended staged publication order

1. `/ingredients/magnesium` — ingredient hub
2. Six Magnesium guide pages (ingredient-linked)
3. Five Magnesium product pages (`/supplements/magnesium/products/*`)
4. Draft brand pages if needed: `/brands/pure-encapsulations`, `/brands/nature-made`
5. `/supplements/magnesium` — category hub
6. `/supplements/magnesium/compare` — comparison page

**Optional:** Set `featuredProductIds` on category after products are published (currently empty — intentional).

---

## H. Exact fields that would change in a later publication phase

Per entity YAML (ingredient, guides, products, brands, category, comparison):

```yaml
status: published          # from draft
noindex: false             # from true
isPlaceholder: false       # unchanged
editorial:
  lastUpdated: <publish-date>
  lastReviewed: <publish-date>
  reviewedBy: suppcheckr-editorial
  updateLog:
    - date: <publish-date>
      changeType: published
      summary: Phase 4H (or later) magnesium cluster publication
```

**Category-specific (optional at publish):**

```yaml
featuredProductIds:
  - magnesium-klean-athlete-klean-magnesium
  # ... as editorially chosen; currently []
```

**Fields that do NOT change in magnesium publication:**

- `affiliate.enabled` — remains `false` per product
- Product image placeholders
- `SITE_MODE` — remains prelaunch unless separately approved
- Legal page `noindex` / draft status
- Monetization config (`ads.loadScripts`, `affiliate.disableGlobally`)

---

## I. Explicit do-not-change list for publication

| Setting | Required value |
|---------|----------------|
| `SITE_MODE` | `prelaunch` (unless separately approved) |
| `monetizationConfig.affiliate.enabled` | `false` |
| `monetizationConfig.affiliate.disableGlobally` | `true` |
| `monetizationConfig.ads.loadScripts` | `false` |
| Amazon Associate tag | absent / empty |
| Legal pages | `draft` / `noindex: true` |
| Product images | placeholders unless separately replaced |
| Creatine cluster | no edits |
| Threonate product | do not create |

---

## J. Publication script / manual checklist

### Automated script (prepared, not executed)

`scripts/publish-magnesium-cluster.ts` — mirrors `scripts/publish-creatine-cluster.ts` pattern with safeguards:

- **Refuses to run** unless `CONFIRM_MAGNESIUM_PUBLISH=yes` is set.
- Targets Magnesium cluster YAML files only.
- Does **not** modify `config/site.ts`, `config/monetization.ts`, legal pages, or Creatine content.
- Does **not** enable affiliate, ads, or Amazon tags.

**Do not run without explicit user approval.**

### Manual checklist (alternative)

- [ ] Re-verify Klean NSF listing 1281622 and brand price
- [ ] Re-check all five retailer prices (non-Amazon)
- [ ] Confirm Pure Encapsulations label caveat still acceptable
- [ ] Run `npm run check && npm run build`
- [ ] Run publication script OR manually set `status` / `noindex` on cluster files
- [ ] Verify sitemap/search include Magnesium only after publish
- [ ] Verify published brand pages show Magnesium products only when indexable
- [ ] Confirm `SITE_MODE`, affiliate, ads, legal noindex unchanged
- [ ] Spot-check comparison and product pages for draft banners removed

---

## K. Claim-risk final review (Phase 4G)

Cluster-wide search for risky terms in live Magnesium YAML (`treats`, `cures`, `prevents`, `Best Overall`, `clinically proven`, `doctor recommended`, condition-ranking language): **no violations found.**

Matches are explicit negations (e.g., "does not rank for sleep/anxiety") or template/checklist documentation — not live product claims.

**Claim-risk YAML edits in Phase 4G:** None required.

---

## L. Publication boundary confirmation (Phase 4G)

| Check | Result |
|-------|--------|
| All 16 Magnesium content entities `status: draft` | **Pass** |
| All Magnesium entities `noindex: true` | **Pass** |
| Magnesium in sitemap/search (`getIndexable*`) | **0 indexable** |
| Draft Magnesium products on published brand pages (Klean, Nutricost, NOW) | **None** (`getBrandPageProducts` filters indexable only) |
| Draft Magnesium routes build for direct preview | **Pass** (draft pages render with banners) |
| No threonate product YAML | **Pass** (5 files in `content/products/magnesium/`) |
| Legal pages draft/noindex | **Pass** |
| Affiliate disabled globally and per product | **Pass** |
| Ads `loadScripts: false` | **Pass** |
| Amazon tags absent | **Pass** |
| Creatine unchanged | **Pass** |

---

## M. Phase 4G file changes

| File | Change |
|------|--------|
| `content/templates/magnesium-phase-4g-publication-prep-2026-06-26.md` | This report |
| `scripts/publish-magnesium-cluster.ts` | Safe publication script skeleton (not executed) |
| Product YAML ×5 | Phase 4G updateLog; source/price re-check notes where applicable |
| `content/comparisons/magnesium-supplements-compared.yaml` | Phase 4G caveats, NSF access date, price note |

**Creatine content:** Not edited.

---

## N. Recommended next phase

**Phase 4H (or explicit user-requested publish phase):** Execute Magnesium publication only after explicit approval, publish-time price/NSF re-checks, and acceptance of documented limitations.

**Suggested commit message:** `Phase 4G: prepare magnesium publication checklist`
