# Container-Isolated Agent Runtime Review

Status: incubating

Scope: runtime-neutral review method

## Signal

Controller-audited public repositories increasingly present agent runtimes as container-gated loops rather than plain prompt files. `nanoclaw` is the clearest current example in this batch: the README describes a small codebase, one process, per-agent Linux containers, and explicit filesystem isolation; `nanoclaw.sh` bootstraps Node, pnpm, Docker, and OneCLI before handing off to the interactive setup flow; `migrate-v2.sh` performs an interactive migration from v1, seeds state, and stops short of judgment-heavy switchover steps.

This candidate stays in incubation. It does not endorse the runtime, container engine, host access model, migration behavior, or security claims.

## Source Evidence

Controller-audited local QClaw short-worker receipts from 2026-06-26 include source-review evidence for `nanoclaw` and its root files `README.md`, `CLAUDE.md`, `.mcp.json`, `nanoclaw.sh`, and `migrate-v2.sh`.

The receipts are evidence packets, not neutral law. A worker summary is accepted only after controller path verification, source spot-check, and conflict correction.

## Proposed Trigger

Use this candidate when a repository claims:

- container-isolated agents;
- per-session or per-agent container boundaries;
- filesystem-mounted state or container-backed memory;
- bootstrap or migration scripts that gate setup and handoff;
- single-process or small-codebase agent runtimes.

## Proposed Mechanism

1. Treat the container as the gate.
   - Host actions stay outside the runtime boundary until a specific mount or handoff is reviewed.
2. Treat the filesystem as the state surface.
   - Mounted files, group folders, session data, and migration state are what the runtime reads and writes.
3. Treat the agent process as the loop.
   - The small-codebase / one-process story is a useful shape claim, but still needs replay.
4. Separate bootstrap from judgment.
   - Setup scripts can install prerequisites and hand off to a human or model for decisions; that handoff is not proof of correctness.
5. Separate migration logic from future parity.
   - An idempotent migration script is useful evidence, but it does not prove the migrated system behaves correctly.
6. Keep external surfaces inactive.
   - Install, container start, credential registration, host shell access, network exposure, and service switchover remain activation surfaces.
7. Add eval before promotion.
   - Replay the runtime on a minimal safe example and compare against a single-process baseline for boundary handling and recovery behavior.
8. Preserve boundary wording.
   - If source files only show marketing about container security, downgrade the claim instead of laundering it into neutral law.

## Initial Scope

- Source-review of container-isolated agent runtimes and bootstrap/migration flows.
- Incubator synthesis only.
- Not a runtime adapter.
- Not an install guide.
- Not a claim that containerization implies safety, correctness, or production readiness.

## Known Failure Modes

- Container-marketing framing: "securely in containers" is treated as proof without mount or isolation replay.
- Bootstrap laundering: install scripts are mistaken for runtime authority.
- Migration laundering: migration scripts are mistaken for post-migration parity or safety.
- Host-boundary creep: container boundary language is treated as permission to execute host actions or retain shared state.

## Verification Needed

- Replay on one containerized agent runtime and inspect setup and migration boundaries.
- Check whether filesystem isolation is explicit in code or only described in prose.
- Check whether the setup script actually hands off to judgment-bearing steps rather than pretending to complete them automatically.
- Check whether the migration script is idempotent and whether it preserves or mutates only the intended state surfaces.
- Decide whether this remains a supporting incubator note or becomes a productive review playbook for container-gated runtimes.

## Placement Candidates

- `incubator/`: current placement.
- `playbooks/`: if a stable container-gated runtime review workflow emerges.
- `laws/surface-agent-orchestration.md`: container gate, filesystem state, and loop boundaries.
- `laws/surface-install-supply-chain.md`: bootstrap, migration, and runtime activation surfaces.
- `laws/surface-evidence-eval.md`: source-review, replay, and boundary-claim promotion.

