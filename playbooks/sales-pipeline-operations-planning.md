# Playbook: Sales Pipeline Operations Planning

Status: seed draft

Scope: sales pipeline review. This playbook helps an agent review leads, accounts, opportunities, stage health, forecast confidence, handoff needs, and stale pipeline items. It does not write CRM records, move stages, assign owners, send customer messages, or make deal commitments.

## Purpose

Help an agent produce a pipeline snapshot, qualification matrix, deal risk map, next-step draft plan, objection map, forecast confidence notes, handoff packet, and stale-opportunity cleanup list.

## Inputs

- Lead, account, opportunity, or deal notes.
- Stage history, source notes, objection notes, meeting notes, sales calls, account plan, or handoff notes.
- Commercial context such as product, offer, segment, urgency, next step, blocker, and timeline if known.
- Evidence for qualification, stage progress, or forecast confidence.
- Known CRM or sales-process vocabulary if provided by the user.

## Procedure

1. Define the pipeline boundary.
   - State which pipeline, time window, segment, or account set is in scope.
   - Mark anything stale, unknown, missing, or out of scope.

2. Inventory opportunities.
   - List leads, accounts, opportunities, stages, blockers, and next actions.
   - Keep source pointers for each item.

3. Classify pipeline state.
   - Use evidence-based states such as qualified, unqualified, blocked, stalled, stale, uncertain, or needs-review.
   - Treat forecast confidence as an assumption, not an income conclusion.

4. Map risks and objections.
   - Record buyer objections, stakeholder concerns, missing proof, pricing risk, timing risk, and handoff gaps.
   - Separate what was said from what is inferred.

5. Draft the review packet.
   - Produce the pipeline snapshot, opportunity ledger, qualification matrix, deal risk map, next-step plan, and stale-opportunity cleanup list.
   - Keep live CRM mutation and customer messaging out of scope.

6. Surface follow-up needs.
   - Group open questions by decision owner, required evidence, and urgency.
   - Mark where human judgment is needed before a customer-facing move.

## Outputs

- Pipeline snapshot / opportunity ledger.
- Lead or opportunity qualification matrix.
- Stage-health review.
- Deal risk and blocker map.
- Next-step draft plan.
- Objection and stakeholder map.
- Forecast confidence notes.
- Handoff packet.
- Stale-opportunity cleanup list.

## Quality Signals

- Each opportunity state has a source pointer or evidence note.
- Forecast confidence is clearly labeled as assumption-based.
- The output separates reviewable notes from live pipeline operations.
- Stale or blocked items are visible instead of hidden in averages.

## Human Checkpoints

- Owner assignment, stage movement, close date, forecast commitment, discount, quote, pricing, contract promise, or customer outreach.
- Any live CRM write, mail send, calendar booking, deal approval, or customer commitment.

## Composable With

- `commerce-operations.md` for product or offer signals that should inform pipeline review.
- `feedback-to-backlog-operations.md` for sales notes or CRM notes that should become backlog items.
- `content-operations.md` for lead-generation content, case studies, and sales support materials.
- `offer-narrative-positioning.md` for objection handling and message-house work before pipeline review.
- `../laws/surface-browser-runtime.md` for logged-in CRM or account sessions.
- `../laws/surface-mcp-tools-auth.md` for CRM APIs, customer data, or external sends.
- `../laws/surface-evidence-eval.md` for evidence strength and review boundaries.

## Evidence

Source signal: cross-domain workflow review, sales-operations methods, and public pipeline-management guidance showed a recurring need to review opportunity state without mutating CRM systems.

Validation state: seed draft. Needs replay on real pipeline review, account review, handoff, and stale-opportunity cleanup tasks before promotion.

Known failures:

- Treating forecast notes as guaranteed revenue.
- Conflating review packets with live CRM operations.
- Promising price, timing, or contract terms.
- Hiding blockers behind optimistic stage labels.
