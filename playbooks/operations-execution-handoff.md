# Playbook: Operations Execution Handoff

Status: seed draft

Scope: operations-neutral. This playbook helps an agent turn upstream plans, drafts, packets, and review notes into a ready-to-execute handoff package. It is not tied to one marketplace, publishing platform, project tracker, writing site, account, or team structure.

## Purpose

Help an agent bridge the last mile between planning and human execution.

Use this playbook when upstream playbooks have produced useful work, but the user now needs an execution queue, prerequisites, role handoff, approval points, fallback notes, and post-action evidence capture. The agent should make the work easier to perform, not merely describe a process.

## Inputs

- Upstream artifacts such as product-page drafts, title variants, campaign plans, content packages, chapter drafts, status packets, support drafts, or analysis packets.
- Objective, time window, priority, and non-goals.
- Target surfaces or channels described at an abstract level, such as seller dashboard, publishing account, project tracker, customer support system, document repository, or manual offline work.
- Role map or owner classes, such as operator, reviewer, finance owner, editor, support lead, or domain owner.
- Prerequisites, dependencies, known blockers, and unresolved questions.
- Risk labels for account writes, publication, sends, pricing, spend, legal or regulated claims, customer impact, private data, durable writes, or irreversible changes.
- Evidence that should be captured after execution, such as screenshots, exported metrics, links, ticket ids, receipts, version hashes, timestamps, or reviewer notes.

## Procedure

1. Confirm the handoff boundary.
   - Name what is ready for execution, what remains a draft, and what is out of scope.
   - Separate internal preparation from external account, customer, publication, money, or system-of-record actions.

2. Normalize the upstream artifacts.
   - Assign each artifact an id, type, source playbook, version, status, owner role, and target surface.
   - Mark missing inputs as gaps rather than silently inventing them.

3. Build the execution queue.
   - Convert artifacts into ordered action items with prerequisites, target surface, role, time window, expected result, and completion evidence.
   - Keep the next action concrete enough that an operator can start without rereading the whole plan.
   - Prefer productive prefilled fields, draft copy, checklists, and packet links over vague instructions.

4. Map dependencies and blockers.
   - Identify prerequisite actions, parallelizable actions, blocked actions, and actions that must wait for approval.
   - If there is a cycle or conflict, create a blocker entry with the smallest useful repair suggestion.

5. Add approval and escalation points.
   - Require approval for publication, sends, account writes, price changes, budget spend, refunds, compensation, contract or payment action, regulated claims, customer commitments, external notices, durable memory writes, and system-of-record mutations.
   - Keep low-risk, reversible preparation moving by marking it as draft-ready instead of asking the user to approve every minor step.

6. Prepare fallback and rollback notes.
   - For each high-impact action, include a fallback path, stop condition, and evidence to collect if execution fails.
   - Do not claim rollback is possible when the action is irreversible or externally visible.

7. Produce the handoff package.
   - Include the action queue, owner map, dependency map, approval sheet, blocker log, evidence-capture checklist, and post-execution review note.
   - Distinguish facts already done from recommended next actions.

8. Close the loop after execution.
   - When the user provides execution results, convert receipts, metrics, reviewer comments, customer responses, reader feedback, or failure notes into a review packet.
   - Feed useful evidence back into the upstream playbook, feedback backlog, data analysis, or experiment loop.

## Outputs

- Execution handoff packet.
- Prioritized action queue.
- Prerequisite and dependency map.
- Owner or role map.
- Approval sheet.
- Blocker and uncertainty log.
- Fallback or rollback notes.
- Evidence-capture checklist.
- Post-execution review packet.

## Quality Signals

- The handoff package contains usable work items, not only process prose.
- Each action has a target surface, owner role, prerequisite state, expected result, and completion evidence.
- Low-risk preparation is prefilled enough to be useful.
- High-impact actions are easy to identify and approve or reject.
- Blockers include a repair suggestion or the next evidence needed.
- The package separates completed facts, draft artifacts, recommendations, approvals needed, and post-execution evidence.
- The output helps a human operator do the next step faster without hiding risk or scope.

## Human Checkpoints

- Publication, posting, sending, replying, scheduling, or account mutation.
- Price changes, discounts, budget spend, purchases, payments, refunds, compensation, invoices, payroll, transfers, write-offs, or commercial commitments.
- Legal, medical, financial, compliance, safety, hiring, employee, customer, regulated, or public-facing conclusions.
- Contract, milestone, acceptance, breach, default, waiver, or external notice decisions.
- Durable memory writes, system-of-record writes, workflow activation, automation enablement, or tool permission changes.
- Final taste, brand voice, creative direction, editorial judgment, and business priority.

## Composable With

- `commerce-operations.md` when product, listing, promotion, review, or support plans need an execution queue.
- `content-operations.md` when content packages need publishing, observation, and metric-capture handoff.
- `longform-fiction-development.md` when chapter drafts, continuity changes, or reader-feedback loops need release handoff.
- `project-workstream-status-synthesis.md` when project status should become a reviewable task packet without live dispatch.
- `feedback-to-backlog-operations.md` when post-execution responses or feedback should become backlog items.
- `data-analysis-decision-support.md` when execution results should be interpreted as metrics or experiment evidence.
- `../laws/surface-browser-runtime.md` when execution touches logged-in browser sessions or dashboards.
- `../laws/surface-mcp-tools-auth.md` when execution touches account actions, APIs, payments, credentials, tools, or private data.
- `../laws/surface-evidence-eval.md` when post-execution evidence, claims, or promotion decisions are involved.
- `../laws/surface-agent-orchestration.md` when execution is delegated across agents, threads, worktrees, or owners.

## Evidence

Source signal: cross-domain scout comparison on commerce, content, and fiction workflows; sidecar review found a last-mile handoff gap across existing planning playbooks; independent scout notes confirmed the need for usable handoff artifacts rather than process-only checklists.

Validation state: seed draft. Needs replay against real commerce operations, content publishing, fiction serialization, and project handoff cases before promotion.

Known failures:

- Turning the playbook into an approval wall instead of a useful execution package.
- Treating a handoff packet as permission to publish, send, spend, change prices, mutate accounts, write systems of record, or act on customers.
- Producing vague to-do lists that force the operator to reconstruct upstream context.
- Hiding target-surface scope, missing evidence, or irreversible action risk.
