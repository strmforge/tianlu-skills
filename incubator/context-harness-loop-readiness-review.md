# Context Harness Loop Readiness Review

Status: incubating

Scope: runtime-neutral review method

## Signal

A user-shared article argues that prompt engineering is no longer enough for reliable AI coding work, and presents a ladder from prompt engineering to context engineering, harness engineering, and loop engineering.

The useful mechanism is not the article's popularity claim, percentage claim, or quoted authority. The reusable method is the readiness ladder: before a coding agent enters a recurring or unattended loop, it needs a current context packet, an execution harness contract, and a bounded loop contract.

This candidate is not an endorsement of unattended coding, automatic pull requests, repository mutation, or tool activation.

## Source

- User-shared Toutiao article dated 2026-06-23 about prompt, context, harness, and loop engineering.
- `incubator/loop-engineering-workflow-review.md`
- `incubator/agent-role-envelope-cycle-review.md`
- `laws/surface-agent-orchestration.md`
- `laws/surface-memory-learning.md`
- `laws/surface-evidence-eval.md`
- `laws/surface-ci-devops.md`

The article's survey percentage and attributed quote are secondary-source signals until primary-source verification is performed.

## Proposed Trigger

Use this candidate when a user, article, repo, tool, runtime, or team proposes that an agent should move from one-off prompting into broader coding work by adding:

- project context documents;
- schema, API, ADR, IAM, dependency, or deprecated-module knowledge;
- worktrees, tests, lint, build, logs, or execution harnesses;
- maker-checker agents or reviewer subagents;
- scheduled, overnight, recurring, autonomous, or issue-scanning coding loops;
- automatic pull requests, commits, pushes, merges, or review handoffs.

## Proposed Mechanism

Before moving a task into a loop, classify which layer is actually missing.

1. Prompt layer.
   - If the task is one-off and low-risk, a clear prompt or playbook may be enough.
   - Do not build a loop merely because the task can be described.
2. Context layer.
   - Build a context packet with source inventory, freshness, owner, feature scope, system boundary, dependency constraints, deprecated modules, schema, API contracts, ADRs, IAM or permission model, current branch, and known hazards.
   - Mark stale, inferred, generated, missing, and unverified context separately.
3. Harness layer.
   - Define the execution harness contract: allowed tools, forbidden tools, worktree or sandbox path, test/lint/build gates, log capture, secret and credential boundary, network boundary, artifact paths, rollback, cleanup, and reviewer.
   - Treat the harness as a control surface, not as proof of safety.
4. Loop layer.
   - Define automation trigger, state file, cursor, checkpoint cadence, maker-checker or verifier split, acceptance gate, stop conditions, liveness receipt, review queue, retry limit, cost budget, and escalation path.
   - Treat stopped, paused, waiting, timed-out, or failed-check loops as incomplete state, not completion.
5. Authority boundary.
   - Context quality, a test suite, worktree isolation, maker-checker framing, or a popular article does not authorize install, account access, connector setup, durable memory, tool registration, commit, push, pull request, merge, deployment, production mutation, or external send.
   - Those actions require scoped approval, current platform evidence, and receipts.
6. Tianlu re-entry.
   - After practice, the loop's receipts, failures, false triggers, context gaps, and accepted outputs re-enter as scoped evidence before any promotion.

## Initial Scope

- Coding-agent workflow readiness.
- Context packets and execution harnesses that precede loops.
- Scheduled or repeated development workflows that might become automations.
- Not a general claim that every software task should become a loop.
- Not a permission model for unattended repository mutation.

## Known Failure Modes

- Context theater: a long context document exists, but freshness, source, and authority are not known.
- Harness theater: tests or worktrees exist, but tool, secret, network, and rollback boundaries are missing.
- Loop theater: a scheduled run or goal mode exists, but no state file, gate, verifier, or stop condition exists.
- Context flooding: the agent loads everything and crowds out the actual task.
- Stale architecture: deprecated modules, schema changes, or permission model changes are treated as current.
- False completion: a paused or waiting loop is reported as done.
- Maker-checker self-deception: reviewer agents share the same missing context or permission drift.
- Permission creep: the loop slowly gains connectors, account tools, push rights, or production write access.
- Review collapse: human review disappears because the harness looks professional.

## Verification Needed

- Replay on one codebase-understanding task, one CI triage task, and one dependency-update task.
- Compare one-shot prompt, context-only packet, harnessed manual run, and bounded loop.
- Measure context freshness errors, test-gate catches, rejected outputs, accepted-change cost, false completion rate, and permission creep.
- Add negative cases for stale context, harness-as-permission, loop without state, and PR/push without current platform approval.
- Decide whether the method becomes a playbook, an agent-orchestration law note, an adapter note, or stays incubating.

## Placement Candidates

- `playbooks/operations-execution-handoff.md`: handoff and next-action queue.
- `laws/surface-agent-orchestration.md`: liveness, role, worker, worktree, and loop boundaries.
- `laws/surface-memory-learning.md`: context packet provenance and stale-context handling.
- `laws/surface-evidence-eval.md`: context, harness, and loop claims as evidence rather than proof.
- `laws/surface-ci-devops.md`: tests, PRs, commits, pushes, merges, and CI gates.
- `adapters/codex/`: runtime-specific context and loop receipts.
- `incubator/`: current placement while the readiness ladder is still being shaped.
