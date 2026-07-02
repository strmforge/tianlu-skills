# Context Harness Loop Readiness Review

Status: incubating

Scope: runtime-neutral review method

## Signal

A user-shared article argues that prompt engineering is no longer enough for reliable AI coding work, and presents a ladder from prompt engineering to context engineering, harness engineering, and loop engineering.

The useful mechanism is not the article's popularity claim, percentage claim, or quoted authority. The reusable method is the readiness ladder: before a coding agent enters a recurring or unattended loop, it needs a current context packet, an execution harness contract, and a bounded loop contract.

This candidate is not an endorsement of unattended coding, automatic pull requests, repository mutation, or tool activation.

## Source

- User-shared Toutiao article dated 2026-06-23 about prompt, context, harness, and loop engineering.
- Controller-audited public runtime samples showing typed harness composition, explicit session-versus-run semantics, durable `plans/` and `blueprints/` artifacts, and skill-definition-to-runtime compilation with security policy, audit logs, and deployment targets.
- Controller-audited public context packages showing lean git-backed context indexes with `hash`, `intent`, optional decision notes, worktree tracking, and on-demand reconstruction rather than full narrative memory copies.
- Controller-audited short-worker samples showing repo-packing context bundles, source-context browser selection, print-contract scratchpads, generated tool indexes, slash-command dispatch metadata, and package-audit matrices as source-reviewed context or harness-shape surfaces only.
- Controller-audited short-worker samples showing account-data extraction recipes, progressive-disclosure vault indexes, coding-assistant retrieval surfaces, issue-tracker daemon contracts, and YAML workflow manifests as source-reviewed context or harness-shape surfaces only.
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
- repo-packing tools, print-contract scratchpads, source-context browser selection, generated tool indexes, command metadata, or package-audit matrices that are being used to justify broader context or harness claims;
- account-data extraction schemas, progressive-disclosure indexes, coding-assistant retrieval indexes, issue-tracker workspaces, or YAML workflow manifests being used to justify broader context, harness, or loop claims;
- skill-definition compilers, sandboxes, plan or blueprint directories, or portable runtimes that look like they could justify unattended loops;
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
   - If a repo or runtime already exposes explicit agent-definition, session, sandbox, plan, blueprint, compile, or deployment surfaces, treat those as harness evidence rather than as proof that loop authority already exists.
   - If a repo only exposes a lean context index plus worktree state and reconstruction scripts, treat it as context-layer evidence that can feed a harness; do not silently upgrade it into harness or loop authority.
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
- Context-index overreach: hash-plus-intent storage is treated as if it already provides acceptance gates, verifier splits, or safe unattended execution.
- Loop theater: a scheduled run or goal mode exists, but no state file, gate, verifier, or stop condition exists.
- Context flooding: the agent loads everything and crowds out the actual task.
- Stale architecture: deprecated modules, schema changes, or permission model changes are treated as current.
- False completion: a paused or waiting loop is reported as done.
- Maker-checker self-deception: reviewer agents share the same missing context or permission drift.
- Permission creep: the loop slowly gains connectors, account tools, push rights, or production write access.
- Review collapse: human review disappears because the harness looks professional.

## Controller-Audited Context And Ingestion Variants

Recent public-source review adds two context-layer patterns:

- Multimodal ingestion context: document pipelines can expose parser choices, optional dependency groups, OCR or document-structure backends, external program requirements, and retrieval backbones. These surfaces help absorb heterogeneous PDFs, images, office documents, tables, equations, and markdown into a shared context layer, but parser quality, OCR correctness, dependency installability, retrieval quality, and model behavior remain unverified until replay.
- RAG infrastructure context: full-stack RAG engines can expose document understanding, chunking, retrieval, agent templates, memory, MCP, code-executor, Docker, SDK, cloud, and API-key setup surfaces. Treat these as context and lifecycle planes, not as permission to launch services, connect accounts, download containers, or touch customer data.
- Codebase-packaging context: repo packers, token-aware bundles, Docker/build/MCP metadata, and package manifests can help create bounded context packets. They do not prove the packed context is complete, private, license-safe, current, or suitable for a loop.
- Source-context selection: browser or extension packages can expose source picking, context clipping, plugin hooks, and package metadata. These are context-selection signals only; speed, extension behavior, browser safety, and account/session boundaries remain unverified.
- Scratchpad context gates: persistent REPL or scratchpad packages can make printed output the only conversation-facing artifact while raw data stays local. Treat that as a proposed context gate, not as privacy, retention, or execution-safety proof.
- Tool-index context: generated per-machine indexes and routing matrices can describe available tools and subskills. A missing generated index is a stop-and-review signal, not permission to bootstrap tools or register runtime surfaces.
- Account-data and vault-retrieval context: extraction fields, deduplication rules, dashboard/export paths, vault indexes, and staged retrieval can make context boundaries explicit. They do not prove account access, parsing accuracy, privacy safety, artifact correctness, retrieval quality, or vault-write safety.
- Tracker and workflow harness context: issue workspaces, workflow policy files, task-state machines, YAML manifests, review gates, and finalization contracts can define a harness. They do not authorize tracker/API calls, daemon launch, branch or worktree mutation, command execution, or acceptance claims before scoped replay.
- Visual-reproduction context: DOM inventories, computed-CSS token packets, asset lists, section specs, viewport screenshots, and diff artifacts can feed a harness for visual reproduction. They do not prove the page was fully understood, the build is correct, or the visual output is acceptable.
- Review-policy harness context: validation matrices, review policies, fresh-context reviewer skills, and generated command guidance can define what a reviewer or maintainer must check. They do not prove the checks ran, the reviewer was independent, or the generated guidance matches live CLI behavior.
- Constitution harness context: a project constitution, single-source docs, role registries, global/local capability map, and recommended consistency lint can define a future harness. Until the harness exists and is replayed, it is not loop authority.

Neutral mechanism: before an ingestion layer feeds a loop, record input formats, parser/backend choices, optional heavy dependencies, external programs, retrieval store, model/API boundary, replay artifacts, and downgrade path. Context availability is not harness readiness; harness readiness is not loop authority.

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
