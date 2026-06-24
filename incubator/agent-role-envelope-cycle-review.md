# Agent Role Envelope And Loop Review

Status: incubating

Scope: runtime-neutral review method

## Signal

The working thesis is that a recurring agent role should be shaped as a role envelope: role name, bundled skills, and workflow contract. The envelope is then refined by Tianlu's cycle: absorb scoped input -> generate neutral method -> compose scoped variant -> re-enter as scoped input.

This combines two signals that now appear together:

- SkillWeaver-style bundle routing: complex tasks should be decomposed, skills should be retrieved per subtask, and the final plan should be composed from multiple skills.
- Loop Engineering: recurring work should run as a bounded loop with a state file, a gate, a verifier, worktrees where needed, and a liveness contract.

This file records the combined method shape and review requirements. It is not an endorsement of any specific runtime implementation and does not recommend activation.

## Source Evidence

- User-shared article on SkillWeaver / compositional skill routing for LLM agents.
- User-shared article on Loop Engineering.
- `C:\Users\56214\Documents\Codex\tianlu-skills\README.md`
- `C:\Users\56214\Documents\Codex\tianlu-skills\tiandao\method-lifecycle.md`
- `C:\Users\56214\Documents\Codex\tianlu-skills\docs\skill-role-catalog.md`
- `C:\Users\56214\Documents\Codex\tianlu-skills\eval\expected-behavior.md`
- `C:\Users\56214\Documents\Codex\tianlu-skills\eval\test-prompts.md`
- Related candidate notes:
  - `agent-role-skill-bundle-routing-review.md`
  - `loop-engineering-workflow-review.md`

## Proposed Trigger

Use this candidate when a recurring role needs both skill composition and a bounded execution loop, for example:

- research triage;
- public skill triage;
- CI failure triage;
- dependency bump and fix loops;
- report generation loops with review gates.

## Proposed Mechanism

Before treating a role as a single prompt file:

1. Define the role name and task family.
   - Use the name as the routing anchor, not as theater.
2. Decompose the role into bundle parts.
   - Entry skill, core skill, helper skills, boundary laws, and eval cases.
3. Attach a workflow contract.
   - State file, gate, verifier, resume path, stop condition, and review cadence.
4. Route by bundle, not by file.
   - Use available skill names as decomposition hints and choose the smallest compatible set.
5. Keep contracts explicit.
   - Each part needs trigger, scope, output, failure mode, and boundary.
6. Keep the loop bounded.
   - The loop must stop when the gate fails, the budget is spent, the acceptance rate is too low, or the work is handed back to a human.
7. Feed the result back into Tianlu's cycle.
   - After use, treat the output as scoped input again and re-absorb it for the next round.

## Initial Scope

- Role design for repeated workflows that need stable identity and repeatable execution.
- Skill bundles that need a workflow contract, not just a prompt file.
- Execution loops that need a role envelope to avoid becoming generic automation.
- Not a recommendation to auto-generate or auto-activate bundles or loops.

## Known Failure Modes

- Role theater: a persona name is added, but the actual bundle is missing.
- Bundle without loop: the role has skills, but no state, gate, verifier, or stop condition.
- Loop without bundle: the workflow runs, but the role is too thin to guide the work.
- Over-bundling: too many helper skills create context bloat and brittle routing.
- Permission creep: a small loop slowly becomes a broad control plane.
- False completion: the loop announces done before the task is actually done.
- Stale state: the next run continues from an old or wrong receipt.
- Self-graded evals: the loop accepts its own output without an independent check.

## Verification Needed

- Pick one high-frequency role family as the pilot.
- Compare single-prompt baseline vs role envelope vs looped execution.
- Measure trigger precision, bundle completeness, context cost, reject rate, completion quality, and permission creep.
- Test negative cases where the wrong helper skill or wrong loop step is selected.
- Confirm what should live in `playbooks/`, `laws/`, `eval/`, `adapters/`, or `incubator/`.
- Confirm whether the role envelope should become a playbook after the pilot stabilizes.

## Placement Candidates

- `playbooks/`: stable role-building workflow once the method is repeatable.
- `laws/surface-agent-orchestration.md`: delegation, composition, handoff, shared state, liveness, and role contracts.
- `laws/surface-memory-learning.md`: durable behavior changes and future-window role packaging.
- `laws/surface-evidence-eval.md`: trigger, routing, gate, and loop-claim validation.
- `adapters/codex/`: Codex-specific bundle packaging and response receipts.
- `eval/`: bundle-routing cases, loop-gate cases, and negative cases.
- `incubator/`: keep the combined envelope/loop method while it is still being shaped.

## Promotion Questions

- Does this add anything beyond the existing role-bundle and loop candidates?
- Is the combined envelope stable enough to become a playbook, or should it remain incubating?
- Can evals distinguish a useful envelope from role theater or busy-loop behavior?
- Does the same envelope pattern repeat across enough role families to justify promotion?
