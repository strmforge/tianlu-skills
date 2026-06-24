# Agent Role Skill Bundle Routing Review

Status: incubating

Scope: runtime-neutral review method

## Signal

The working thesis is that defining an agent role should not rely on a single prompt file alone. A useful role is more like a skill bundle: one entry skill, one core skill, helper skills, boundary laws, and eval coverage that work together.

User-shared signals point in the same direction:

- SkillWeaver-style compositional routing says complex tasks should be decomposed, skills should be retrieved per subtask, and the final plan should be composed from multiple skills.
- The meta-skill / skill-engineering articles argue that reusable skill packages, route design, evals, and packaging matter more than long prompt text.
- Tianlu already treats method work as a cycle: absorb scoped input -> generate neutral method -> compose scoped variant -> re-enter as scoped input.

This file records the method shape and review requirements. It is not an endorsement of any specific runtime implementation and does not recommend activation.

Related umbrella: `agent-role-envelope-cycle-review.md`.

## Source Evidence

- User-shared article on SkillWeaver / compositional skill routing for LLM agents.
- User-shared article on reusable meta-skills and skill engineering.
- `C:\Users\56214\Documents\Codex\tianlu-skills\README.md`
- `C:\Users\56214\Documents\Codex\tianlu-skills\tiandao\method-lifecycle.md`
- `C:\Users\56214\Documents\Codex\tianlu-skills\playbooks\README.md`
- `C:\Users\56214\Documents\Codex\tianlu-skills\docs\skill-role-catalog.md`
- `C:\Users\56214\Documents\Codex\tianlu-skills\index\trigger-routing.md`

## Proposed Trigger

Use this candidate when a request, repo, prompt, or runtime design implies that an agent role should be built from multiple cooperating parts instead of one prompt file, for example:

- role definition for a specialist agent;
- role routing across a task family;
- a primary skill plus helper skills;
- boundary laws or evals attached to the role;
- a role pack that should stay portable across runtimes.

## Proposed Mechanism

Before treating a role as a single prompt file:

1. Start from the task family, not the prompt text.
   - Define the concrete work the role must do and the work it must not do.
2. Decompose the role into bundle parts.
   - Entry skill, core skill, helper skills, boundary laws, and eval cases.
3. Route by bundle, not by file.
   - Use the role name or task family to select a skill set, then compose the execution path.
4. Use skill names as decomposition hints.
   - Feed available skill labels back into the routing step so the role granularity stays realistic.
5. Keep contracts explicit.
   - Each part needs trigger, scope, output, failure mode, and boundary.
6. Keep the bundle minimal.
   - Add helper skills only when they materially reduce ambiguity, risk, or wasted context.
7. Validate the bundle before treating it as durable.
   - Compare single-prompt baseline, bundle routing, and over-bundled variants.
8. Return the scoped result to the cycle.
   - After use, treat the result as fresh scoped input instead of universal role law.

## Pilot Role Family

Public-skill recommendation triage is the cleanest pilot because it already needs multiple cooperating parts.

- Entry skill: `public-skill-recommendation-triage.md`
- Core skill: `research-to-brief-synthesis.md`
- Helper skills: `public-skill-collection-quality-gate.md`, `draft-and-evidence-packet.md`, `operations-execution-handoff.md`
- Boundary laws: `../laws/surface-install-supply-chain.md`, `../laws/surface-memory-learning.md`, `../laws/surface-evidence-eval.md`, `../laws/surface-mcp-tools-auth.md`, `../laws/surface-browser-runtime.md`

Pilot bundle shape:

1. Ingest a public recommendation as signal.
2. Inventory each item and mark source status.
3. Sample the item for trigger clarity, workflow shape, and persistence surface.
4. Compare local overlap and marginal utility.
5. Extract only neutral mechanisms or eval ideas.
6. Route high-risk items to review without activating them.
7. Produce a no-install receipt and a human decision packet.

This pilot is useful because it exercises both routing and safety: the agent has to choose the right helper skill set without collapsing the task into a single prompt file or into a generic install queue.

## Initial Scope

- Role definition for agent systems that use skills as building blocks.
- Role routing for cases where one prompt file is too thin to express the real behavior.
- Bundle design for a primary skill plus supporting skills and boundary checks.
- Not a recommendation to auto-generate or auto-activate bundles.

## Known Failure Modes

- Role theater: a persona name is added, but the actual bundle is missing.
- Over-bundling: too many helper skills create context bloat and brittle routing.
- Under-bundling: one prompt file is asked to do the work of a whole role system.
- Route collisions between similar roles or task families.
- Evals only cover happy-path triggers and miss boundary violations.
- Bundle drift: helper skills change, but the role contract is not refreshed.
- A composed role is treated as neutral law just because it worked well once.

## Verification Needed

- Replay the pilot on public skill packs, prompt packs, plugin bundles, and command bundles.
- Compare single-file prompt routing vs bundle routing.
- Measure trigger precision, bundle completeness, context cost, and boundary violations.
- Test negative cases where the wrong helper skill is selected.
- Confirm what should live in `playbooks/`, `laws/`, `eval/`, `adapters/`, or `incubator/`.
- Confirm whether the role bundle should be exposed in route tables or remain a local candidate first.

## Placement Candidates

- `playbooks/`: stable role-building workflow once the method is repeatable.
- `laws/surface-agent-orchestration.md`: delegation, composition, handoff, and shared-state boundaries.
- `laws/surface-memory-learning.md`: durable behavior changes and future-window role packaging.
- `eval/`: trigger, routing, and bundle-compatibility cases.
- `adapters/codex/`: Codex-specific bundle packaging and response receipts.
- `index/trigger-routing.md`: route consolidation after the method is stable.

## Promotion Questions

- Does this add anything beyond existing agent orchestration, public-skill triage, and method-cycle guidance?
- Is the bundle concept stable enough to become a playbook, or is it still just a candidate pattern?
- Can evals distinguish a useful bundle from role theater or over-bundling?
- Does the same routing pattern repeat across multiple role families?
