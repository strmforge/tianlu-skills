# Playbook: Marketplace Listing And Catalog Readiness Planning

Status: seed draft

Scope: marketplace-listing-catalog-readiness-neutral. This playbook helps an agent turn marketplace listing, product catalog, category, title, attributes, variants, media, price, inventory, policy, claim, and launch-readiness signals into reviewable listing and catalog readiness artifacts. It is not tied to one marketplace, ecommerce platform, seller account, product category, ad system, fulfillment system, country, or catalog schema.

## Purpose

Help an agent produce useful listing-readiness work products: listing intake snapshots, category and attribute question lists, title and keyword variant sets, product-data field maps, variant and bundle maps, image and media briefs, claim and proof ledgers, price and inventory readiness notes, policy and restricted-product review queues, customer-question and support-load notes, publication-blocker lists, and listing handoff packets.

The playbook supports preparation and review. It does not publish listings, change catalog data, choose final categories, set prices, commit inventory, launch ads, approve claims, decide platform compliance, or write seller, marketplace, catalog, inventory, ad, review, help-desk, spreadsheet-of-record, or system-of-record systems.

## Inputs

- Product, SKU, variant, bundle, kit, service, digital product, or catalog item supplied by the user.
- Product facts, materials, dimensions, compatibility, condition, safety notes, warranty, usage limits, included/excluded items, images, video, files, manuals, certifications, or proof supplied by the user.
- Target marketplace, channel, catalog schema, category options, attribute requirements, title limits, media requirements, variation rules, offer fields, price rules, shipping promises, return policy, or restricted-product policy supplied by the user.
- Buyer questions, search terms, review themes, competitor observations, support tickets, return reasons, conversion notes, or campaign objectives supplied by the user.
- Current listing draft, product data feed, catalog export, item-specifics table, PDP brief, product page, spreadsheet, or internal SOP if available.
- Account, publication, pricing, inventory, fulfillment, policy, regulated-product, legal, privacy, and system-of-record boundaries supplied by the user.

## Procedure

1. Define the listing boundary.
   - Name the product, channel, intended audience, category candidates, listing status, launch goal, decision owner, systems in scope, and non-goals.
   - Separate review artifacts from live listing publication, catalog writes, price changes, inventory allocation, ad launch, customer messages, and account actions.

2. Build the listing intake snapshot.
   - Summarize product identity, SKU or variant facts, included contents, condition, compatibility, dimensions, materials, proof, media assets, policy sources, inventory constraints, fulfillment constraints, and known buyer questions.
   - Mark missing identifiers, stale attributes, unsupported product claims, incomplete media, ambiguous variants, unverified compatibility, policy gaps, and assumptions.

3. Map category, attributes, and product data.
   - Build a category and attribute matrix covering candidate categories, required fields, optional fields, item specifics, product identifiers, variant axes, bundle structure, condition, availability, shipping or pickup fields, and return-policy references.
   - Keep the map as a review artifact, not a final category, compliance, data-quality, or catalog decision.

4. Draft title, keyword, and description variants.
   - Produce title, subtitle, keyword, bullet, short-description, long-description, FAQ, and comparison-note variants when useful.
   - Tie each claim to supplied facts or mark it as needing evidence.
   - Avoid unsupported superlatives, regulated claims, brand claims, compatibility claims, origin claims, safety claims, medical claims, financial claims, environmental claims, or performance claims.

5. Prepare media and proof readiness.
   - Convert image, video, manual, certification, packaging, label, size chart, usage, comparison, and proof signals into a media readiness checklist and production brief.
   - Note missing angles, resolution, background, variant coverage, label visibility, safety warnings, source attribution, and proof gaps.
   - Do not download, upload, edit, publish, license, or certify media unless separately scoped.

6. Review offer, inventory, fulfillment, and support impact.
   - Prepare a price, promotion, stock, variant availability, fulfillment, delivery-promise, return-policy, warranty, customer-question, and support-load note.
   - Route live price, budget, ad, inventory, shipment, return, and customer decisions to the relevant owner or playbook.

7. Prepare policy and restricted-product review.
   - Build a policy review queue for claims, category restrictions, age-restricted items, regulated goods, safety documentation, hazardous materials, prohibited content, intellectual property, branded terms, seller identity requirements, and marketplace-specific publication blockers.
   - Keep this as a question and evidence queue, not a legal, compliance, platform, safety, or restricted-product conclusion.

8. Create the listing handoff and improvement loop.
   - Produce a listing readiness packet with blockers, approval owners, open questions, evidence needs, publication checklist, post-publication evidence to capture, and next-iteration signals.
   - Convert recurring listing, support, return, conversion, review, and catalog issues into improvement candidates without mutating live systems.

## Outputs

- Marketplace listing readiness brief.
- Listing intake and product-fact snapshot.
- Category and attribute matrix.
- Product-data field map.
- SKU, variant, bundle, kit, or compatibility map.
- Title, keyword, bullet, description, FAQ, and comparison variants.
- Claim and proof ledger.
- Media readiness checklist and media production brief.
- Price, promotion, inventory, fulfillment, delivery-promise, return-policy, warranty, and support-load notes.
- Policy, restricted-product, IP, brand-term, regulated-claim, and publication-blocker review queue.
- Missing-data and missing-evidence question list.
- Listing publication handoff packet.
- Post-publication evidence capture checklist.
- Listing improvement backlog.

## Quality Signals

- The output gives an operator concrete listing and catalog artifacts, not only broad commerce advice.
- Category, attribute, title, media, variant, proof, and policy questions are visible before publication.
- Product claims are tied to supplied evidence or marked as missing.
- Platform-specific requirements are named as scoped inputs or overlays, not smuggled into neutral law.
- The plan separates draft listing work from live publication, catalog writes, price changes, inventory commitments, ad launch, and customer sends.
- The listing handoff shows which issues block publication, which need human review, and which can wait for post-publication learning.
- Post-publication evidence can feed back into commerce, support, returns, fulfillment, feedback, data-analysis, and experiment playbooks.

## Human Checkpoints

- Final category, listing title, description, media, variant, bundle, condition, compatibility, brand, price, promotion, inventory, shipping, return, warranty, publication, ad, or marketplace action.
- Marketplace, seller, catalog, product-feed, PIM, ecommerce, inventory, warehouse, ad, review, help-desk, spreadsheet-of-record, document, or system-of-record writes.
- Legal, tax, accounting, platform compliance, advertising compliance, product-safety, restricted-product, hazardous-material, import/export, medical, financial, environmental, trademark, copyright, brand authorization, consumer-protection, or regulated-claim conclusions.
- Customer sends, review replies, buyer messages, supplier messages, manufacturer messages, support macros, or external publication.
- Sensitive seller, customer, supplier, product identifier, certification, pricing, margin, inventory, account, credential, brand, contract, private-order, or unpublished-product data retention.

## Composable With

- `commerce-operations.md` when listing readiness should connect to opportunity, conversion, offer, promotion, or product-page work.
- `offer-narrative-positioning.md` when product claims, buyer pain, proof, objections, and differentiation need a positioning package before listing variants.
- `asset-repurposing-pipeline.md` when product media or descriptions should become multiple marketplace, social, or campaign variants.
- `creator-rights-and-disclosure-clearance-planning.md` when source assets, music, images, clips, attribution, or disclosure issues affect listing media or product content.
- `customer-support-quality-review.md` when listing issues should reduce support confusion or improve macros.
- `feedback-to-backlog-operations.md` when review, return, support, buyer-question, or catalog-error signals should become backlog items.
- `after-sales-returns-and-rma-operations-planning.md` when listing issues connect to returns, warranty, refund, replacement, or dispute patterns.
- `order-fulfillment-and-shipping-operations-planning.md` when listing readiness depends on fulfillment, shipping promises, backorders, split shipments, or carrier constraints.
- `data-analysis-decision-support.md` when listing performance, conversion, return rate, support load, or catalog defects need descriptive analysis.
- `operations-execution-handoff.md` when the readiness packet should become an approval and execution queue.
- `../laws/surface-evidence-eval.md` for claim evidence, source timestamps, performance claims, and promotion decisions.
- `../laws/surface-browser-runtime.md` when working in logged-in seller dashboards or browser-based catalog editors.
- `../laws/surface-mcp-tools-auth.md` for APIs, product feeds, account actions, catalog writes, prices, inventory, ads, messages, or system-of-record writes.

## Evidence

Source signal: broad X and domain scout review found recurring marketplace listing pain around category selection, product titles, product detail pages, item specifics, product-data fields, variant handling, images, inventory, returns, customer support, policy blockers, and seller-account risk. Official-source review of marketplace listing guidance, product detail page guidance, product data specifications, seller item-specifics guidance, and ecommerce product detail documentation confirmed that listing work crosses category, attributes, titles, descriptions, media, variants, availability, shipping, policy, and catalog-write boundaries.

Validation state: seed draft. Needs replay against marketplace listing launches, product data feed cleanup, catalog migration, PDP refreshes, variant errors, policy-blocked listings, support-heavy listings, restricted-product review queues, and post-publication conversion or return reviews before promotion.

Known failures:

- Treating a listing readiness packet as permission to publish, edit catalog data, change prices, commit inventory, launch ads, or message customers.
- Treating category, policy, brand, safety, restricted-product, IP, or regulated-claim review as a legal, platform, compliance, or product-safety conclusion.
- Copying marketplace-specific tips into neutral methods without naming them as scoped adapter or overlay material.
- Optimizing title, keyword, image, or conversion metrics while hiding evidence gaps, policy blockers, support load, margin impact, or return risk.
- Retaining sensitive seller, customer, supplier, product identifier, pricing, margin, inventory, account, credential, contract, private-order, or unpublished-product data without scoped approval.
