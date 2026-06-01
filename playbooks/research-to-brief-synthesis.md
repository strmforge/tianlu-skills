# Playbook: Research To Brief Synthesis

Status: seed draft

Scope: domain-neutral. This playbook helps an agent turn scattered source material into an actionable brief. It is not tied to one industry, platform, account, research tool, or publication format.

## Purpose

Help an agent convert multiple weak and strong signals into a useful work product: a research brief, opportunity map, evidence table, risk list, decision options, and next-action plan.

## Inputs

- Research question or decision to support.
- Source material such as notes, interviews, customer comments, documents, web pages, metrics, tickets, logs, or prior drafts.
- Target reader, domain owner, or decision maker.
- Constraints such as time, budget, audience, regulatory limits, or data access.
- Known assumptions, desired output format, and forbidden uses.
- Success metric: decision clarity, stakeholder alignment, next action, or reduced uncertainty.

## Procedure

1. Define the brief objective.
   - State the decision, audience, time horizon, and non-goals.
   - Separate exploration from any action that would publish, spend, contact users, change accounts, or make regulated claims.

2. Inventory source signals.
   - Group sources by type, origin, recency, and reliability.
   - Mark weak signals, promotional sources, duplicated claims, and source gaps.

3. Extract claims and observations.
   - Split raw material into observations, inferred claims, open questions, and unsupported opinions.
   - Keep the source pointer for each important claim.

4. Build a hypothesis map.
   - Convert repeated or high-value signals into candidate hypotheses.
   - Add counterevidence, uncertainty, and what would change the conclusion.

5. Produce the brief.
   - Summarize context, key findings, evidence strength, risks, options, recommendation candidates, and next actions.
   - Use a clear status for each recommendation: supported, plausible, unverified, or rejected.

6. Prepare the handoff.
   - Include what the human or domain owner needs to decide.
   - Name follow-up research, experiments, or approvals before execution.

## Outputs

- Research brief.
- Source and evidence table.
- Hypothesis or opportunity map.
- Risk and uncertainty list.
- Decision options with tradeoffs.
- Next-action plan.

## Quality Signals

- Every important recommendation links to a source, observation, or explicit assumption.
- The brief distinguishes facts, interpretations, opinions, and open questions.
- Weak signals are useful as leads but not treated as authority.
- The output is short enough to support a decision and detailed enough to audit.
- The next action is concrete and reversible unless a human approves otherwise.

## Human Checkpoints

- Strategic decision, budget allocation, hiring, pricing, or account action.
- Legal, medical, financial, safety, political, or other regulated claims.
- Use of private customer data, patient data, employee data, or confidential documents.
- Publication, external send, customer contact, or durable policy change.

## Composable With

- `experiment-design-iteration.md` when the brief should become a test plan.
- `content-operations.md` when the brief should become content.
- `commerce-operations.md` when the brief supports product, offer, or campaign work.
- `../laws/surface-evidence-eval.md` for evidence strength, verification, and claims.
- `../laws/surface-browser-runtime.md` when research uses logged-in browser sessions.
- `../laws/surface-mcp-tools-auth.md` when tools, APIs, private data, or account actions are involved.

## Evidence

Source signal: cross-domain method review and early feed sampling showed repeated need for a middle layer between raw signals and concrete output playbooks.

Validation state: seed draft. Needs replay on real commerce, content, writing, research, and regulated-domain brief tasks before promotion.

Known failures:

- Turning a source dump into a summary without a decision, evidence table, or next action.
- Treating promotional, social, or single-source claims as confirmed.
- Hiding uncertainty to make the brief look more decisive.
- Letting the agent execute a recommendation that was only meant for human review.
