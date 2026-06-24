# Code Intelligence Graph Runtime Review

Status: incubating

Scope: runtime-neutral review method

## Signal

Controller-audited public repositories repeatedly converge on a graph-backed code intelligence surface instead of plain file-by-file search. The repeated shape is: bundle an index or graph into the runtime, auto-wire it into supported agents, update incrementally on file change, and answer questions with source paths, call paths, blast radius, or review deltas.

This candidate keeps that mechanism in incubation. It does not endorse any installer, agent hook, or live runtime.

## Source Evidence

- Controller-audited local QClaw short-worker receipts from the public repository reading loop on 2026-06-25.
- Reviewed source files were local lightweight artifacts such as README, AGENTS, SKILL, metadata, index, and directory shape from the `codebase-memory-mcp`, `codegraph`, and `code-review-graph` batches.
- Related Tianlu candidates:
  - `public-agent-skill-mechanism-intake-review.md`
  - `role-skill-operating-package-review.md`
  - `terminal-output-compression-review.md`

The receipts are evidence packets, not neutral law. A worker summary is accepted only after controller spot-check, path verification, and conflict correction.

## Proposed Trigger

Use this candidate when a repository or package presents code intelligence as a graph, index, or prebuilt knowledge surface with auto-detect wiring or incremental updates.

Typical input:

- graph-backed code intelligence runtimes;
- code review graph tools;
- codebase knowledge graph packages;
- auto-detect wiring or install steps for supported agents;
- incremental file-watch update loops;
- token reduction or blast-radius claims.

## Proposed Mechanism

Before writing the mechanism into Tianlu:

1. Separate graph build from query path.
   - The build or index step is not the same as the question-answer step.
2. Bundle runtime carefully.
   - A bundled runtime can reduce setup cost, but it still needs scope and boundary review.
3. Auto-detect support explicitly.
   - Agent wiring or install detection is a routing hint, not activation permission.
4. Keep blast-radius and minimal-query surfaces distinct.
   - The useful object is the smallest answerable slice, not a full repository dump.
5. Treat incremental reparse and file-watch loops as liveness features.
   - They improve freshness, but they do not authorize unattended mutation or persistent remote control.
6. Keep evidence anchors separate from the graph.
   - Source anchors, dated reports, and sampled claims remain separate from the graph itself.
7. Add eval before promotion.
   - Compare graph-backed answers against file-by-file baseline paths, token cost, update latency, and conflict handling.

## Initial Scope

- Code intelligence runtimes, code review graph tools, and codebase knowledge graph packages.
- Source-review synthesis only.
- Not a claim of universal superiority.
- Not an install guide.
- Not activation approval.

## Known Failure Modes

- Graph theater: a diagram or index exists, but the runtime cannot answer useful questions.
- Install creep: a useful package shape is treated as permission to wire or activate it.
- Auto-sync creep: file watching becomes a hidden control plane.
- Evidence laundering: benchmark or token claims are repeated without independent replay.
- Scope laundering: a scoped code-intelligence package is promoted to neutral law too early.

## Verification Needed

- Compare graph-backed runtime vs file-by-file baseline on representative questions.
- Sample update latency and incremental reparse behavior.
- Sample auto-detect wiring and reversible install behavior.
- Compare answer quality, blast radius, and token cost on a small held-out set.
- Decide whether this stays incubating or becomes a productive playbook.

## Placement Candidates

- `incubator/`: current placement.
- `playbooks/`: if a stable code-intelligence review workflow emerges.
- `laws/surface-evidence-eval.md`: token-reduction, blast-radius, and update-latency claims.
- `laws/surface-install-supply-chain.md`: install, hook, agent wiring, and reversible cleanup boundaries.
- `laws/surface-agent-orchestration.md`: auto-detect routing, state, and loop boundaries.

## Promotion Questions

- Does the graph surface really reduce context cost without hiding important edges?
- Which claims are reproducible by a controller spot-check, and which are just marketing?
- Is the value in graph query, in auto-wiring, or in the bundled runtime itself?
- Which parts must remain scoped adapter material instead of neutral Tianlu method?
