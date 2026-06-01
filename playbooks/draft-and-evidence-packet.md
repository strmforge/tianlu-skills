# Playbook: Draft And Evidence Packet

Status: seed draft

Scope: high-constraint drafting. This playbook helps an agent produce reviewable drafts and evidence packets for regulated, sensitive, or high-stakes communication. It does not generate diagnosis, treatment decisions, legal opinions, investment advice, compliance determinations, credit decisions, or final approvals.

## Purpose

Help an agent produce a draft, claim-evidence table, open-question list, required-review queue, approval packet, and non-conclusion notice for high-constraint work.

## Inputs

- Drafting objective, audience, and intended use.
- Source material, evidence, policy text, prior brief, data extract, or approved reference material.
- Domain boundary: medical, financial, legal, compliance, safety, customer communication, employee communication, or other high-stakes context.
- Forbidden conclusions, forbidden actions, and required review roles.
- Required disclaimers, recordkeeping needs, evidence standard, and approval workflow if known.
- Tool, browser, account, data, and privacy boundaries.

## Procedure

1. Classify the task.
   - Decide whether the request is a drafting-support task or a request for a professional conclusion.
   - Stop or route to a human when the request asks for diagnosis, treatment, legal opinion, investment recommendation, compliance determination, credit decision, or final approval.

2. Define the allowed output.
   - State what the agent may draft and what it must not decide.
   - Add a non-conclusion notice when the domain requires it.

3. Layer the evidence.
   - Separate facts, source excerpts, inferred claims, assumptions, unknowns, conflicts, and stale or missing evidence.
   - Keep source pointers for each material claim.

4. Bind claims to evidence.
   - For each draft claim, record source, recency, evidence strength, gap, conflict, and review status.
   - Mark unsupported claims for removal or human review.

5. Draft conservatively.
   - Produce clear draft language that stays inside the allowed output.
   - Avoid directives, diagnoses, recommendations, approvals, guarantees, or legal conclusions unless they are explicitly supplied by an authorized source.

6. Build the review queue.
   - List open questions, conflicts, missing evidence, domain-owner decisions, and approval roles.
   - Separate text that appears ready for review from text that must not be sent.

7. Package for approval.
   - Provide a summary, draft, evidence table, risk flags, required reviewers, rollback or correction path, and remaining limitations.
   - Do not send, submit, publish, file, or mutate account state without explicit approval.

## Outputs

- Reviewable draft.
- Claim-evidence table.
- Open questions and required-review queue.
- Approval packet.
- Non-conclusion notice.
- Risk and limitation summary.
- Correction or rollback notes.

## Quality Signals

- The output is useful as a draft but does not pretend to be a final expert decision.
- Every material claim has a source pointer or is marked as unsupported.
- Conflicts, missing evidence, and stale sources are visible.
- The approval packet clearly separates draft text, evidence, review needs, and forbidden actions.
- High-impact actions remain blocked until a human or domain owner approves the exact action.

## Human Checkpoints

- Diagnosis, treatment, medication, triage, patient-specific medical interpretation, or clinical directive.
- Investment recommendation, valuation conclusion, trade, lending decision, financial suitability, or performance claim.
- Legal opinion, contractual interpretation, regulatory filing, compliance determination, or enforcement response.
- Customer compensation, refund exception, contractual promise, employment action, or public statement.
- Any account write, external send, publication, filing, payment, production change, or private-data export.

## Composable With

- `research-to-brief-synthesis.md` when the packet is grounded in a brief.
- `offer-narrative-positioning.md` when a public narrative needs claim-risk review.
- `feedback-to-backlog-operations.md` when sensitive feedback must become reviewable tasks.
- `../laws/surface-evidence-eval.md` for claim evidence, independent verification, and eval boundaries.
- `../laws/surface-browser-runtime.md` for logged-in account or browser-session boundaries.
- `../laws/surface-mcp-tools-auth.md` for tools, APIs, private data, privileged invocations, and external sends.

## Evidence

Source signal: cross-domain review, high-constraint workflow analysis, and regulatory-source sampling showed a need for a productive method that creates useful drafts while keeping conclusions and actions under human or domain-owner review.

Validation state: seed draft. Needs replay on real support, medical-documentation, financial-analysis, legal-review, and compliance-drafting tasks before promotion.

Known failures:

- Giving a professional conclusion while labeling it as a draft.
- Omitting the evidence table and making review impossible.
- Letting polished language hide uncertainty, conflict, or missing review.
- Sending, filing, publishing, or invoking tools from a draft packet without explicit scoped approval.
