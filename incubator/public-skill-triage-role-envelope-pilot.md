# Public Skill Triage Role Envelope Pilot

Status: incubating pilot

Scope: runtime-neutral role-envelope pilot

## Signal

Public skill recommendations are now frequent enough that one prompt file is too thin for the work. A useful agent role needs a role name, a bundled method set, a workflow contract, boundary laws, and eval coverage.

This pilot turns the existing public-skill triage playbook into a role envelope without installing, activating, or autoloading any third-party skill.

## Role Name

Public Skill Triage Operator

The role name is a routing anchor, not a persona. It should trigger when the user asks an agent to learn from, compare, review, adopt, install, or periodically monitor public skill packs, prompt packs, plugins, MCP bundles, command bundles, or agent workflow repositories.

## Skill Bundle

Entry skill:

- `playbooks/public-skill-recommendation-triage.md`

Core skill:

- `playbooks/public-skill-recommendation-triage.md`

Helper skills:

- `incubator/public-skill-collection-quality-gate.md`
- `playbooks/research-to-brief-synthesis.md`
- `playbooks/draft-and-evidence-packet.md`
- `playbooks/operations-execution-handoff.md`

Boundary laws:

- `laws/surface-install-supply-chain.md`
- `laws/surface-memory-learning.md`
- `laws/surface-evidence-eval.md`
- `laws/surface-mcp-tools-auth.md`
- `laws/surface-browser-runtime.md`
- `laws/surface-agent-orchestration.md`

Eval coverage:

- `eval/test-prompts.md#productive-playbook-routing`
- `eval/oracle-cases.jsonl`
- `eval/seed-answers.jsonl`

## Workflow Contract

The role should produce a public-skill triage packet, not active behavior.

Required packet fields:

- source inventory;
- reviewed source status for each item;
- package or repository shape;
- install, account, browser, MCP, hook, script, and persistence surface map;
- local overlap and marginal utility map;
- extractable neutral mechanisms or eval ideas;
- risk class and decision status;
- no-install and no-activation receipt;
- human decision packet and next review queue.

The role must not install, clone-and-run, activate, autoload, register tools, grant account access, enable browser extensions, write durable memory, open a recurring automation, spawn workers, or change runtime config merely because a public recommendation, popularity signal, official source, audit score, or role name exists.

## Loop Contract

This role can become a recurring loop only after scoped approval.

State file fields:

- role name and role-envelope version;
- source queue and snapshot cutoff;
- cursor before and cursor after;
- reviewed items;
- accepted, rejected, and deferred candidates;
- blockers and source gaps;
- active boundary laws used;
- validation commands or manual review performed;
- next queue;
- stop reason.

Gate:

- Every item must have source status, surface map, local-overlap decision, risk class, and no-install receipt.
- High-risk items must have a separate review path before activation.
- Any proposed durable memory, active skill, runtime config, connector, account, browser, payment, publish, or external-send change stops the loop for human approval.

Verifier:

- A second reviewer, scripted check, or independent sample review should inspect high-risk items, negative cases, and any proposed extraction before the role envelope is promoted.

Stop conditions:

- source queue exhausted;
- explicit work-block budget reached;
- red-lane risk appears;
- source access is blocked;
- acceptance rate or marginal utility falls below the review threshold;
- human approval is required for activation, install, account, connector, browser, memory, automation, or system-write work.

## Tianlu Cycle Mapping

Absorb:

- Public posts, articles, repositories, READMEs, marketplace listings, and user recommendations enter as scoped signals.

Generate:

- The role extracts neutral mechanisms: route triggers, bundle shape, review gates, eval ideas, failure modes, and no-install decision rules.

Compose:

- For a concrete runtime or project, the neutral mechanisms can be recombined into a scoped role envelope such as this pilot.

Re-enter:

- After real use, receipts, eval failures, false triggers, missed risks, and useful extractions re-enter the incubator as scoped input. The composed role is not neutral law until later evidence supports promotion.

## Negative Cases

- A single prompt file is treated as enough to define the role.
- The role name is treated as authority to install or activate recommended skills.
- The helper bundle grows until it loads all related skills every time.
- A weekly or overnight loop starts before a state file, gate, verifier, stop condition, and approval boundary exist.
- Public popularity, official source, star count, audit score, or "meta skill" framing is treated as proof of local safety.
- The role writes durable memory or active skills from public recommendations without evidence, scope, review, and rollback.

## Verification Needed

- Replay this role envelope on at least three public recommendation sets.
- Compare single-prompt baseline against the bundled role envelope.
- Measure trigger precision, bundle completeness, context cost, no-install compliance, and false activation pressure.
- Add negative cases for over-bundling, under-bundling, stale loop state, and role-name authority.
- Decide whether the pilot belongs in `playbooks/`, `adapters/`, `laws/surface-agent-orchestration.md`, or remains incubating.

## Placement Candidates

- `playbooks/`: if the role-envelope procedure becomes stable enough for productive use.
- `laws/surface-agent-orchestration.md`: role contracts, loop contracts, handoffs, and liveness boundaries.
- `laws/surface-memory-learning.md`: learning from public recommendations without direct durable behavior changes.
- `laws/surface-evidence-eval.md`: bundle-routing and no-install eval coverage.
- `adapters/codex/`: Codex-specific role packaging and receipts.
- `incubator/`: current placement while the pilot is still being shaped.
