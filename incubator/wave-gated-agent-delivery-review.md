# Wave-Gated Agent Delivery Review

Status: incubating

Scope: runtime-neutral review method

## Signal

Controller-audited public-source batches show a recurring delivery shape: an agent workflow presents work as named phases, specialized roles, produced artifacts, and a human approval gate before the next phase begins. This shape is useful for Tianlu because it makes loop, state, and gate boundaries visible.

This candidate keeps the method in incubation. It is not an endorsement of any source repository, installer, hook system, coding runtime, hosted service, agent quality, or generated artifact.

## Source Evidence

Controller-audited local QClaw short-worker receipts from 2026-06-26 include source-review evidence for:

- a wave-style coding-agent framework that names delivery phases, commands, specialist agents, artifacts, routing entry points, and human review before continuing;
- skill packages that bundle a role identity, core instruction files, marketplace metadata, and multiple sub-skills for a bounded output domain;
- curated skill collections that use source manifests and multi-host packaging language;
- persona-distillation packages that pair research, distillation, validation language, examples, and generated profile artifacts;
- communication-infrastructure packages that expose multi-channel identity, conversation, webhook, usage, compliance, and monorepo surfaces.

The receipts are evidence packets, not neutral law. A worker summary is accepted only after controller path verification, source spot-check, and conflict correction.

Related Tianlu candidates:

- `agent-platform-lifecycle-review.md`
- `role-skill-operating-package-review.md`
- `stateful-skill-gate-review.md`
- `loop-engineering-workflow-review.md`
- `context-harness-loop-readiness-review.md`

## Proposed Trigger

Use this candidate when a skill, agent framework, workflow, or internal proposal claims to guide work through:

- named phases, waves, stages, lanes, or gates;
- specialist agents or roles assigned to each phase;
- required artifacts per phase;
- human review, approval, reject, or iterate decisions before continuing;
- phase routing based on project type, task type, or current state;
- hook, command, validator, or runtime enforcement claims around the phase boundary.

## Proposed Mechanism

Review the workflow as a typed phase pipeline:

1. Identify the phase map.
   - Record each named phase, entry point, allowed skip path, and terminal pair.
2. Identify the role map.
   - Record which role or agent acts in each phase and whether the role has a bounded output contract.
3. Identify the artifact map.
   - Record the concrete artifact, file, schema, checklist, or decision record produced by each phase.
4. Identify the approval gate.
   - Record who reviews, what can be approved or rejected, and what happens on iteration.
5. Identify enforcement separately from description.
   - A README can describe a gate; a hook, command, validator, or audit log is a separate evidence layer.
6. Separate source evidence from runtime proof.
   - Source files can show that the pipeline exists. They do not prove the installer, hooks, agents, routing, artifact quality, or human-review loop works.
7. Split activation surfaces.
   - Installing hooks, registering commands, invoking agents, running validators, mutating files, opening PRs, connecting accounts, or deploying systems each needs its own activation review.
8. Add negative cases before promotion.
   - Include cases where phase names are marketing, artifacts are vague, approval is implied but not visible, and automated enforcement is claimed but not replayed.

## Initial Scope

- Source-level review of phase-gated agent delivery workflows.
- Incubator synthesis only.
- Not a runtime adapter.
- Not an install, hook, command, CI, coding-agent, or deployment guide.
- Not proof that any generated artifact, approval gate, or agent output is correct.

## Known Failure Modes

- Phase-name theater: named phases exist, but no distinct artifact or decision boundary is visible.
- Role theater: specialist agent names exist, but their scope and output contract are not bounded.
- Approval theater: human review is mentioned, but approve/reject/iterate behavior is not defined.
- Enforcement laundering: hooks, commands, validators, or audit logs are treated as working without replay.
- Artifact laundering: a generated requirements doc, design, test, or code diff is treated as quality proof because it came from the right phase.
- Skip-path drift: a workflow permits skips, but the skip rule bypasses evidence or approval.
- Runtime activation creep: source-reviewed phase design becomes permission to install hooks, invoke agents, mutate files, open PRs, or connect services.
- Private-context leakage: source-specific roles, internal repo boundaries, local paths, account details, or provider details are copied into neutral method text.

## Verification Needed

- Replay on at least three safe examples: one feature-planning task, one bugfix task, and one refactor or documentation task.
- Compare against a single-shot prompt baseline for boundary handling, artifact usefulness, and user-visible completion.
- Check whether each phase has a concrete artifact and whether later phases actually consume prior artifacts.
- Check whether approval gates have explicit approve, reject, and iterate outcomes.
- Add negative eval cases for marketing-only phase names, approval without a decision record, and hook or validator claims without command evidence.
- Decide whether this remains an incubator note, merges into `agent-platform-lifecycle-review.md`, or becomes a productive playbook for phase-gated work.

## Placement Candidates

- `incubator/`: current placement.
- `playbooks/`: if a stable phase-gated delivery review workflow emerges.
- `laws/surface-agent-orchestration.md`: phase, role, artifact, approval, and activation boundaries.
- `laws/surface-evidence-eval.md`: artifact quality, gate replay, and baseline comparison.
- `laws/surface-install-supply-chain.md`: hooks, commands, package installs, and runtime activation.

## Promotion Questions

- What minimum artifact evidence distinguishes a real phase gate from staged prose?
- Which phase boundaries are useful across domains, and which belong only in adapters?
- How should human approval gates be represented without adding process theater?
- When does phase-gated delivery add enough value over role-skill operating package review?
