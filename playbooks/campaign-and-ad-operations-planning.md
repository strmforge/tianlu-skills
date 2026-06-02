# Playbook: Campaign And Ad Operations Planning

Status: seed draft

Scope: campaign-ad-operations-neutral. This playbook helps an agent turn campaign, promotion, ad, creative, audience, budget, landing-page, measurement, and performance signals into reviewable campaign operations artifacts. It is not tied to one marketplace, ad network, social platform, seller account, creator account, agency, pixel, attribution model, country, product category, or campaign objective.

## Purpose

Help an agent produce useful campaign and ad operations work products: campaign objective brief, promotion and offer map, audience and placement plan, creative test matrix, landing-page and listing readiness note, budget and pacing worksheet, measurement checklist, launch-readiness handoff, performance review, and next-test backlog.

This playbook supports planning, drafting, comparison, review, and handoff. It does not launch campaigns, spend budget, change bids, change prices, publish ads, upload creatives, install pixels, change attribution settings, edit seller or ad accounts, decide legal or platform compliance, promise ROAS, or write ad, seller, analytics, payment, or system-of-record systems.

## Inputs

- Campaign goal, promotion goal, target outcome, time window, and success metric.
- Product, offer, SKU, listing, landing page, service, content asset, lead magnet, event, or creator offer.
- Audience, buyer segment, customer problem, funnel stage, location, language, channel, placement, and exclusion notes.
- Creative assets, hooks, copy, thumbnails, video, product images, UGC notes, sponsorship notes, affiliate notes, claim evidence, and brand constraints.
- Budget range, pacing preference, margin constraints, inventory constraints, fulfillment constraints, coupon or discount mechanics, and stop-loss limits.
- Measurement inputs such as conversion events, analytics notes, UTM plan, pixel or tag status, sales data, lead quality notes, support load, refund rate, and past campaign results.
- Platform or policy material supplied by the user, such as ad account notes, campaign objective options, creative rules, landing-page rules, ad review notes, disclosure rules, or regulated-claim rules.

## Procedure

1. Define the campaign boundary.
   - Name the campaign owner, product or offer, objective, time window, target audience, channels, budget range, systems in scope, decision owner, and non-goals.
   - Separate planning artifacts from live campaign launch, budget spend, account edits, price changes, publication, pixel installation, customer messages, and system writes.

2. Build the objective and offer brief.
   - Translate the goal into a reviewable objective such as awareness, traffic, conversion, lead generation, retention, inventory clearance, launch education, or creator monetization support.
   - Connect the offer, audience problem, proof, margin, inventory, fulfillment, and support constraints.
   - Mark revenue, ROAS, CPA, conversion lift, and lead-quality expectations as assumptions unless backed by source evidence.

3. Map audience, placement, and channel assumptions.
   - Produce an audience and placement plan with targeting notes, exclusions, funnel stage, geo or language constraints, channel fit, and known uncertainty.
   - Keep platform-specific targeting, placement, optimization, and account structure details as scoped adapter or overlay material.
   - Do not infer sensitive attributes, eligibility, protected traits, or private customer segments from weak signals.

4. Prepare creative and message tests.
   - Create a creative test matrix that separates hook, claim, proof, format, thumbnail or cover, CTA, product angle, audience segment, and expected learning.
   - Group variants by hypothesis instead of generating many disconnected assets.
   - Mark claim, endorsement, testimonial, sponsorship, affiliate, health, financial, legal, safety, comparative, superlative, or regulated statements as review items.

5. Check listing, landing page, and conversion path readiness.
   - Produce a readiness note for listing or landing-page consistency, offer terms, product facts, price, stock, shipping, return policy, disclosure, form fields, payment path, support path, and privacy surfaces.
   - Treat tracking tags, pixels, events, catalog feeds, product feeds, UTMs, and analytics connections as system surfaces that need scoped approval before mutation.

6. Draft budget, pacing, and stop conditions.
   - Build a budget and pacing worksheet with planned spend, daily or total budget assumptions, bid or optimization notes, margin constraints, inventory constraints, stop-loss thresholds, and review cadence.
   - Do not recommend spend escalation as a final decision. Present options, risks, and approval points.

7. Prepare the launch-readiness handoff.
   - Package campaign objective, offer map, audience notes, creative matrix, landing-page readiness, measurement checklist, budget worksheet, approval sheet, stop conditions, issue log, and evidence-capture checklist.
   - Keep launch steps as a handoff, not as permission to click, publish, spend, upload, or edit settings.

8. Review performance and create the next-test backlog.
   - Compare planned and actual spend, impressions, reach, clicks, CTR, conversion events, conversion rate, CPA, ROAS assumptions, sales, lead quality, refund rate, support volume, inventory impact, and audience feedback.
   - Separate descriptive findings from causal claims.
   - Convert learning into next creative tests, audience tests, offer tests, listing improvements, content follow-ups, or operations backlog items.

## Outputs

- Campaign objective brief.
- Offer and promotion map.
- Audience, placement, and channel assumption plan.
- Creative and message test matrix.
- Listing or landing-page readiness note.
- Measurement and tracking checklist.
- Budget, pacing, and stop-condition worksheet.
- Launch-readiness handoff packet.
- Performance review and next-test backlog.
- Campaign operations handoff packet.

## Quality Signals

- The campaign plan connects objective, audience, offer, creative, budget, measurement, and operations constraints.
- Each creative or audience variant has a learning hypothesis rather than being a random alternative.
- Budget and pacing notes expose assumptions, margin constraints, inventory limits, and stop conditions.
- Measurement notes separate platform metrics, analytics events, sales evidence, lead quality, and customer or support feedback.
- The output gives an operator concrete campaign artifacts without pretending to be the ad account owner or media buyer.

## Human Checkpoints

- Campaign launch, ad publication, creative upload, post scheduling, paid promotion, boosted post, message send, comment reply, or account action.
- Budget spend, bid change, budget change, campaign pause, campaign resume, spend escalation, price change, coupon creation, promotion activation, discount approval, margin decision, or inventory commitment.
- Pixel, tag, event, catalog, product feed, conversion API, attribution, audience, placement, exclusion, tracking, analytics, CRM, seller, or ad-account writes.
- Legal, advertising, disclosure, endorsement, testimonial, sponsorship, affiliate, platform-policy, product-safety, health, financial, employment, political, or regulated-claim conclusion.
- Customer, lead, payment, identity, location, health, child, private-message, account, credential, pixel, analytics, margin, pricing, or unpublished-campaign data retention.

## Composable With

- `commerce-operations.md` when campaign work depends on product, offer, margin, inventory, listing, or customer-response signals.
- `marketplace-listing-and-catalog-readiness-planning.md` when campaign readiness depends on listing, catalog, media, claims, product data, or publication blockers.
- `content-operations.md` when campaign assets include scripts, posts, short videos, newsletters, or platform variants.
- `creator-monetization-operations.md` when campaigns involve sponsorships, affiliates, memberships, productized offers, or creator revenue.
- `creator-rights-and-disclosure-clearance-planning.md` when assets, endorsements, music, UGC, sponsorship, affiliate, or disclosure questions affect campaign publication.
- `asset-repurposing-pipeline.md` when a source asset should become multiple campaign variants.
- `offer-narrative-positioning.md` when the offer, message, objection, or claim-risk frame is not ready.
- `data-analysis-decision-support.md` when performance data needs descriptive analysis without causal or business decisions.
- `feedback-to-backlog-operations.md` when comments, objections, support signals, or lead-quality notes should become backlog items.
- `operations-execution-handoff.md` when approved campaign artifacts need an execution packet before external action.
- `../laws/surface-browser-runtime.md` when working in logged-in ad, seller, creator, analytics, CRM, or marketplace dashboards.
- `../laws/surface-mcp-tools-auth.md` for ad APIs, seller APIs, analytics APIs, audience tools, CRM writes, payments, account actions, or external sends.
- `../laws/surface-evidence-eval.md` for performance claims, source evidence, attribution uncertainty, and replay cases.

## Evidence

Source signal: broad domain review found recurring campaign operations needs around campaign objectives, audience and placement choices, creative testing, budget pacing, landing-page readiness, conversion measurement, performance review, and disclosure or claim review for ecommerce operators, creator accounts, and small-business media managers. Official-source review of Google Ads campaign settings and setup guidance, Meta ad objective, auction, audience, placement, budget, and creative guidance, TikTok Ads Manager campaign setup guidance, and FTC advertising and marketing guidance confirmed that campaign work crosses objective, budget, audience, creative, tracking, disclosure, platform-review, account-write, and spend boundaries.

Validation state: seed draft. Needs replay against marketplace promotion planning, short-video ad creative tests, creator boosted-post planning, small-business lead campaigns, inventory-clearance campaigns, coupon campaigns, landing-page conversion campaigns, and post-campaign performance reviews before promotion.

Known failures:

- Treating a campaign plan as permission to launch, publish, spend, change bids, change budget, upload creative, edit tracking, change prices, or mutate accounts.
- Optimizing a platform metric while hiding margin, inventory, fulfillment, lead quality, support load, refund rate, or customer-trust costs.
- Claiming causation, ROAS, CPA, conversion lift, compliance, or platform safety from weak or platform-only data.
- Copying platform-specific campaign tricks into neutral methods without naming their scope.
- Retaining sensitive audience, customer, lead, account, analytics, pricing, margin, or unpublished-campaign data without scoped approval.
