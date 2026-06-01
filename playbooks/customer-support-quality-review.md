# Playbook: Customer Support Quality Review

Status: seed draft

Scope: customer-support-quality-neutral. This playbook helps an agent review support conversations, ticket samples, response drafts, service consistency, escalation timing, and improvement needs. It does not send customer replies, decide refunds, approve compensation, change support policies, or mutate ticket systems.

## Purpose

Help an agent produce a support QA scorecard, sampled conversation set, service-quality findings, error-pattern table, root-cause map, coaching or knowledge-base revision packet, escalation review list, and recheck plan.

## Inputs

- Support conversations, tickets, chat transcripts, email threads, call summaries, social replies, review replies, or response drafts.
- Support policy, escalation rule, macro, template, FAQ, knowledge-base article, product note, or service-level expectation if provided.
- Review objective such as accuracy, completeness, empathy, tone, policy consistency, risk wording, escalation timing, or process adherence.
- Sample boundary such as channel, date range, agent group, issue type, severity, product line, or region.
- Known privacy, retention, and data-handling constraints.

## Procedure

1. Define the review boundary.
   - State sample source, sample size, channel, time window, issue class, and excluded records.
   - Mark private, sensitive, stale, missing, or out-of-scope material.

2. Build the QA scorecard.
   - Use criteria such as factual accuracy, completeness, empathy, tone, policy consistency, escalation timing, risk wording, and resolution clarity.
   - Keep scoring as a review aid, not an employment or compensation decision.

3. Review conversations.
   - Score or label each sampled item with source pointers and evidence notes.
   - Separate what the support agent said, what the customer asked, and what the reviewer inferred.

4. Identify error patterns and root causes.
   - Group misses by knowledge gap, policy ambiguity, template problem, product issue, process gap, system limitation, training need, or escalation gap.
   - Avoid blaming individuals from weak samples.

5. Package improvement work.
   - Produce coaching notes, knowledge-base revision candidates, macro/template revision candidates, escalation-rule questions, and backlog task packets.
   - Route customer, product, policy, and training follow-up to the right playbook or human owner.

6. Plan recheck.
   - Define next sample, trend signal, recurrence metric, and recheck date.
   - Treat one QA pass as scoped evidence, not a universal service rule.

## Outputs

- Support QA scorecard.
- Sampled conversation set.
- Conversation review ledger.
- Service-quality findings.
- Error-pattern and root-cause table.
- Coaching or training note draft.
- Knowledge-base or macro revision packet.
- Escalation review list.
- Recheck plan and trend notes.
- Backlog task packets.

## Quality Signals

- Each finding points to a conversation, policy, template, or source note.
- The review separates service-quality evidence from assumptions about intent or performance.
- Root causes distinguish training, knowledge, policy, process, product, and system issues.
- The output produces reviewable improvement work without mutating customer or employee records.

## Human Checkpoints

- Customer reply, refund, replacement, compensation, apology, SLA promise, escalation decision, or external send.
- Employee performance judgment, disciplinary action, compensation decision, or staffing change.
- Support policy change, knowledge-base publication, macro activation, automation rule, or ticket-system write.
- Legal, medical, financial, safety, identity, privacy, or regulated claims.

## Composable With

- `feedback-to-backlog-operations.md` when QA findings should become backlog items, escalation packets, or close-loop notes.
- `commerce-operations.md` when support quality relates to product pages, shipping, refunds, replacements, or commerce customer-response drafts.
- `content-operations.md` when recurring support confusion should become FAQ, clarification content, or educational content.
- `draft-and-evidence-packet.md` when high-constraint customer, employee, legal, safety, medical, or financial communication needs a reviewable draft.
- `../laws/surface-browser-runtime.md` for logged-in support dashboards or customer accounts.
- `../laws/surface-mcp-tools-auth.md` for ticketing tools, CRM APIs, customer data, employee data, or external sends.
- `../laws/surface-evidence-eval.md` for scorecard evidence, sample limitations, and trend claims.

## Evidence

Source signal: customer-support quality assurance methods, service review workflows, and cross-domain workflow review showed a recurring need to evaluate support conversation quality without turning the agent into a customer-service actor or employee-performance judge.

Validation state: seed draft. Needs replay on real support QA, macro review, ticket sample review, customer-response audit, and recheck tasks before promotion.

Known failures:

- Treating a small sample as a universal performance conclusion.
- Using QA notes to blame individual agents without enough evidence or authority.
- Sending customer replies, compensation, or escalations from a review packet.
- Turning scorecards into employment, legal, or policy decisions without human review.
