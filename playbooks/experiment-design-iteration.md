# Playbook: Experiment Design And Iteration

Status: seed draft

Scope: domain-neutral. This playbook helps an agent turn an idea into a small, reviewable experiment and learning loop. It is not tied to one analytics tool, marketplace, ad platform, product surface, or creative workflow.

## Purpose

Help an agent produce an experiment plan, variable matrix, success and stop criteria, execution checklist, result review, and next-iteration backlog.

## Inputs

- Idea, hypothesis, or proposed change.
- Current baseline, if available.
- Target audience, user segment, product, content item, workflow, or process.
- Constraints such as budget, sample size, time window, operational capacity, and risk.
- Metrics and acceptable measurement limits.
- What actions are reversible and what actions require approval.

## Procedure

1. State the hypothesis.
   - Convert the idea into a testable claim: changing X for audience Y should affect metric Z because of reason R.
   - Record assumptions and what would disprove the claim.

2. Choose the smallest useful test.
   - Prefer a reversible, bounded experiment before broad rollout.
   - Define control, variant, audience, duration, and exclusion criteria when applicable.

3. Build the variable matrix.
   - Identify the independent variable, dependent metric, guardrail metrics, and known confounders.
   - Limit variables so the result can teach something.

4. Define success, failure, and stop criteria.
   - Set the minimum useful evidence before starting.
   - Include stop conditions for harm, cost, user trust, compliance, quality, or operational load.

5. Produce the execution packet.
   - List setup steps, owner, required approvals, data to collect, and rollback path.
   - Separate draft preparation from live actions such as publishing, spending, price changes, account changes, or customer messages.

6. Review the result.
   - Compare outcome against baseline, hypothesis, and guardrail metrics.
   - Mark the result as confirmed, contradicted, inconclusive, or invalid due to measurement problems.

7. Create the next-iteration backlog.
   - Decide whether to repeat, narrow, expand, abandon, or convert the learning into another playbook input.
   - Preserve source data and limitations.

## Outputs

- Experiment plan.
- Variable and metric matrix.
- Approval and execution checklist.
- Stop and rollback criteria.
- Result review.
- Next-iteration backlog.

## Quality Signals

- The experiment can teach one clear lesson.
- Success and stop criteria are defined before execution.
- The plan separates draft work from live actions.
- Guardrail metrics protect trust, cost, safety, compliance, and quality.
- The review records inconclusive and failed tests instead of forcing a positive story.

## Human Checkpoints

- Budget spend, pricing, discounts, or payment-related changes.
- Publication, customer contact, account mutation, or workflow automation.
- Legal, medical, financial, safety, hiring, or regulated-domain tests.
- Experiments involving private, sensitive, or production data.

## Composable With

- `research-to-brief-synthesis.md` when a brief produces a testable hypothesis.
- `commerce-operations.md` for offer, listing, pricing, or campaign experiments.
- `content-operations.md` for topic, packaging, cadence, and distribution experiments.
- `longform-fiction-development.md` for reader-response, outline, pacing, or revision experiments.
- `../laws/surface-evidence-eval.md` for evaluation, independent verification, and replay cases.
- `../laws/surface-browser-runtime.md` for logged-in dashboards and publication surfaces.
- `../laws/surface-mcp-tools-auth.md` for tools, APIs, payments, identity, or account changes.

## Evidence

Source signal: cross-domain method review identified experiment design as a reusable bridge between research, productive output, and future method improvement.

Validation state: seed draft. Needs replay on real content, commerce, product, writing, and operations experiments before promotion.

Known failures:

- Changing many variables at once and learning nothing.
- Selecting metrics after seeing the result.
- Treating short-term engagement as success while damaging trust, margin, safety, or quality.
- Letting the agent launch or expand an experiment without the required human approval.
