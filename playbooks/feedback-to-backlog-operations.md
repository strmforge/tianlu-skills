# Playbook: Feedback To Backlog Operations

Status: seed draft

Scope: domain-neutral. This playbook helps an agent turn feedback from users, customers, readers, operators, support, sales, or stakeholders into a reviewable backlog. It is not tied to one ticketing system, roadmap tool, CRM, team structure, or product-development method.

## Purpose

Help an agent convert noisy feedback into useful operating artifacts: normalized feedback records, problem clusters, priority queues, task packets, decision logs, close-loop drafts, and review summaries.

This playbook also covers support and review close-loop work when feedback comes from customer tickets, after-sales conversations, public reviews, product reviews, community comments, or social comments. It can draft responses and escalation packets, but it does not send messages, mutate tickets, change orders, or decide refunds, compensation, or commitments.

## Inputs

- Feedback items from tickets, comments, interviews, reviews, sales notes, support conversations, community posts, field reports, or internal retrospectives.
- Support and review sources such as after-sales conversations, product reviews, public complaints, social comments, community replies, CRM notes, or escalation reports.
- Source context such as user segment, role, time, product area, channel, urgency, and business impact.
- Current goals, capacity, roadmap, editorial plan, support policy, or operating constraints.
- Known privacy, regulatory, account, or customer-communication boundaries.
- Existing backlog, decision log, and owner map if available.

## Procedure

1. Define the intake boundary.
   - Name the feedback source, time window, target workflow, and what should not be imported.
   - Keep private data and raw conversation text out of broad artifacts unless explicitly approved.

2. Normalize feedback.
   - Convert each item into a compact record: source type, context, observed issue, requested outcome, affected group, and evidence pointer.
   - Classify intent and severity when relevant: question, defect, logistics issue, refund request, replacement request, complaint, misunderstanding, abuse/noise, compliance risk, or safety risk.
   - Preserve enough context to make the feedback actionable.

3. Clean and cluster signals.
   - Remove duplicates, merge near-duplicates, and separate symptoms, requests, suggestions, and noise.
   - Build problem clusters before choosing solutions.

4. Translate clusters into problem statements.
   - For each cluster, state who is affected, what problem appears, why it matters, how often it appears, and what is still unknown.
   - Avoid turning one loud request into a universal product direction.

5. Map problems to work types.
   - Classify work as bug, improvement, content update, support article, research item, experiment, operational change, or reject/no-action.
   - Attach dependencies and affected surfaces.
   - For support or review loops, separate response draft, internal escalation, policy review, product fix, content clarification, and customer-success follow-up.

6. Prioritize the queue.
   - Score or rank by impact, urgency, confidence, effort, risk, reversibility, and strategic fit.
   - Keep the scoring explanation visible, especially when a high-volume item is not selected.

7. Package backlog items.
   - Produce task packets with owner candidate, scope, acceptance criteria, evidence, dependency, risk, review checkpoint, and close-loop note.
   - Separate task drafts from actual tool writes, customer replies, commitments, or schedule changes.

8. Close the loop.
   - Record accepted, deferred, rejected, and needs-research decisions.
   - Draft internal or external follow-up notes when appropriate, but do not send them without approval.
   - Use close-loop states such as accepted, deferred, rejected, escalated, needs-policy-review, or needs-domain-review.
   - Keep customer-facing drafts separate from live replies, promises, refunds, replacements, compensation, discounts, SLA changes, and order or account actions.

## Outputs

- Normalized feedback ledger.
- Support or review intake ledger.
- Intent and severity classification.
- Problem clusters and theme map.
- Prioritized backlog queue.
- Task packets with acceptance criteria.
- Decision log.
- Close-loop response drafts.
- Escalation queue and approval packet.
- Review summary and next-cycle input.

## Quality Signals

- Feedback retains enough source context to remain actionable.
- Clusters distinguish problems from proposed solutions.
- Prioritization is tied to goals, impact, confidence, effort, risk, and capacity.
- Rejected or deferred items include a reason, not just silence.
- Task packets are clear enough for a human owner to accept, revise, or reject.
- Response drafts distinguish facts, policy references, empathy, uncertainty, and required approvals.
- Private or sensitive source material is summarized safely instead of copied broadly.

## Human Checkpoints

- Resource allocation, roadmap priority, owner assignment, or schedule commitment.
- Customer promise, refund, compensation, SLA change, public reply, or external send.
- Replacement, discount, exception handling, order change, ticket mutation, CRM write, or live status update.
- Legal, medical, financial, safety, employee, or regulated-domain feedback.
- Private customer data, employee data, patient data, or confidential business context.
- Live writes to ticketing systems, roadmap tools, CRM systems, or messaging channels.

## Composable With

- `research-to-brief-synthesis.md` when feedback should become a brief or evidence table.
- `experiment-design-iteration.md` when a backlog item should become a test.
- `commerce-operations.md` for customer, review, offer, and support feedback.
- `content-operations.md` for comments, audience feedback, and publishing loops.
- `draft-and-evidence-packet.md` when a response draft touches high-constraint claims or regulated communication.
- `longform-fiction-development.md` for reader, editor, and continuity feedback.
- `../laws/surface-evidence-eval.md` for claim evidence and prioritization review.
- `../laws/surface-browser-runtime.md` when feedback is read from logged-in dashboards.
- `../laws/surface-mcp-tools-auth.md` when tools, APIs, private data, or account actions are involved.

## Evidence

Source signal: cross-domain review, product-management feedback workflows, and feed sampling showed repeated need for a neutral method that preserves context while converting feedback into actionable backlog items.

Validation state: seed draft. Needs replay on real commerce, content, writing, support, and product feedback loops before promotion.

Known failures:

- Stripping away the business or user context that made feedback actionable.
- Treating volume as priority without considering impact, segment, urgency, risk, and strategy.
- Turning feedback directly into a solution without first stating the problem.
- Letting an agent write to a live backlog, notify customers, or commit dates without approval.
