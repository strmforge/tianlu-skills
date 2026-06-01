# Playbook: Commerce Operations Planning

Status: seed draft

Scope: commerce-neutral. This playbook is for product and campaign work across commerce settings. It is not tied to any marketplace, payment provider, ad platform, or seller account.

## Purpose

Help an agent turn product, audience, pricing, inventory, and channel signals into useful commerce work products: opportunity lists, product page briefs, title and keyword variants, campaign plans, customer-response drafts, and review notes.

## Inputs

- Product or category candidates.
- Audience or buyer segment.
- Product attributes, constraints, costs, margin targets, inventory limits, and fulfillment limits.
- Search, review, competitor, or customer-support signals.
- Channel constraints such as title length, claims policy, media format, promotion tools, or service-level expectations.
- Current objective: launch, improve conversion, clear inventory, raise average order value, reduce support load, or learn from performance.

## Procedure

1. Define the commercial objective.
   - Name the desired outcome, metric, time window, and non-goals.
   - Separate exploration from actions that affect live listings, spend, prices, or customers.

2. Build the product opportunity view.
   - Compare demand signal, competition, margin room, operational difficulty, and supply risk.
   - Output a ranked candidate list with uncertainty and missing data.

3. Convert product signal into a selling proposition.
   - Map buyer pain, product attribute, proof point, objection, and differentiator.
   - Avoid unsupported claims; mark claims needing proof.

4. Produce listing or offer artifacts.
   - Draft title and keyword variants.
   - Draft product page modules: problem, solution, proof, usage, fit, objections, and call to action.
   - Draft media briefs for images, video, or comparison tables when relevant.

5. Plan campaign and promotion logic.
   - Choose the campaign goal: acquisition, conversion lift, bundle, retention, or inventory clearance.
   - Estimate margin impact before recommending discount, coupon, bundle, or free-shipping mechanics.

6. Draft customer response paths.
   - Classify common intents: pre-sale question, shipping status, defect report, refund request, replacement request, or escalation.
   - Produce response drafts with required evidence, policy references, and escalation triggers.

7. Review performance and learn.
   - Compare expected and actual impressions, clicks, conversion, refund rate, support volume, margin, and stock impact.
   - Produce a next-iteration plan rather than treating one result as a universal rule.

## Outputs

- Product opportunity report.
- Selling proposition map.
- Title and keyword variant set.
- Product page or offer brief.
- Promotion plan with margin notes.
- Customer-response draft set.
- Performance review and next-iteration plan.

## Quality Signals

- The output links each recommendation to a buyer signal, product attribute, or performance signal.
- The plan separates reversible drafts from live account actions.
- The offer protects margin, inventory, and customer trust.
- Unsupported claims are marked as needing proof.
- The next action is clear enough for a human operator to approve, reject, or edit.

## Human Checkpoints

- Final product selection.
- Price changes, budget spend, campaign launch, listing publication, or account actions.
- Legal, medical, financial, health, safety, comparative, or superlative claims.
- Refund, replacement, compensation, or customer escalation decisions outside a preapproved policy.

## Composable With

- `content-operations.md` for social content and launch campaigns.
- `../laws/surface-browser-runtime.md` when working in logged-in seller dashboards.
- `../laws/surface-mcp-tools-auth.md` for payments, identity, tools, account actions, or customer data.
- `../laws/surface-evidence-eval.md` for claim evidence and performance review.

## Evidence

Source signal: industry X sampling on commerce, insurance claims, sales handoff, customer-support workflows, and user correction that Tianlu must help real agents produce work rather than only adding safety gates.

Validation state: seed draft. Needs concrete commerce project replays before promotion.

Known failures:

- Treating marketplace-specific tricks as neutral commerce law.
- Optimizing title or promotion metrics while harming margin, support load, or trust.
- Letting the agent publish listings, change prices, spend budget, or compensate customers without explicit scope.
