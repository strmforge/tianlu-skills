# Agent Team Meta-Factory Review

Status: incubating

Scope: runtime-neutral review method

## Signal

Some skills or plugins act as meta-factories: they take a domain or project description and generate an agent team, specialized agent definitions, skills, orchestrators, runtime pointers, test workspaces, or persistent instruction-file updates.

This is more powerful than adopting a single skill. A meta-factory can create future behavior files and coordination structures that later sessions may trust automatically.

## Source Evidence

- X signal observed on 2026-05-31: a post pointed to a public meta-skill that designs domain-specific agent teams and generates the skills they use.
- Primary source reviewed read-only: `revfactory/harness` public GitHub repository.
- Observed repository shape at review time: plugin metadata, `skills/harness/SKILL.md`, references, docs, workspace examples, and public README files.
- Observed README workflow shape:
  - input a domain or project description;
  - choose among multiple team architecture patterns;
  - generate specialized agent definitions;
  - generate skills for those agents;
  - create an orchestrator or coordination flow;
  - validate with tests and compare skill-assisted output against a baseline.
- Observed skill/reference details:
  - audit existing agent and skill directories before generating more;
  - distinguish agent teams from subagents;
  - use patterns such as pipeline, fan-out/fan-in, expert pool, producer-reviewer, supervisor, and hierarchical delegation;
  - preserve intermediate workspace artifacts;
  - use with-skill versus without-skill comparisons, assertions, trigger evals, and iteration folders.
- No install, clone, package execution, marketplace install, plugin activation, agent generation, skill generation, or runtime file write was performed during review.

This file records the method shape and review requirements. It is not an endorsement of the implementation and does not recommend installing or running it.

## Proposed Trigger

Use this candidate when an agent, repository, plugin, marketplace entry, prompt, or user request proposes to automatically:

- generate an agent team from a domain description;
- create specialized agent definitions, role files, subagent profiles, or team members;
- create skills, prompts, references, commands, hooks, or orchestration files for those agents;
- write runtime pointers such as project instruction files, orchestrator triggers, or autoload metadata;
- choose team architecture patterns and communication protocols;
- create shared workspaces, task files, intermediate artifacts, or coordination state;
- validate generated agents or skills and claim improvement over a baseline.

## Proposed Mechanism

Before adopting, installing, or running an agent-team meta-factory:

1. Keep the first pass read-only.
   - Review repository shape, license, plugin manifests, install paths, generated output paths, scripts, examples, and rollback docs before execution.
2. Treat generated files as durable behavior changes.
   - Agent definitions, skills, orchestration files, hooks, commands, runtime pointers, and instruction-file edits can affect future sessions.
3. Inventory the current local state first.
   - List existing agents, skills, instruction files, hooks, commands, adapters, overlays, and runtime-specific configs before generating more.
4. Require a generation plan before writes.
   - Record target runtime, target directories, file names, overwrite policy, merge policy, naming rules, and backup path.
5. Separate role usefulness from role theater.
   - Create separate agents only when context, tools, permissions, outputs, validation, or reuse truly differ.
6. Require contracts for each generated role.
   - Each role needs allowed tools, forbidden actions, input schema, output schema, evidence requirements, communication protocol, error handling, and owner of merge or conflict resolution.
7. Review team communication and shared state.
   - Team messages, shared task lists, intermediate files, caches, and workspaces need owners, retention, freshness, conflict handling, and cleanup.
8. Keep generated skills scoped.
   - A generated skill is adapter-specific or overlay-specific until its trigger, mechanism, evidence, failure modes, and evals prove broader value.
9. Compare against simpler alternatives.
   - Use a checklist or one existing role when a generated team would only rename ordinary steps.
10. Validate before activation.
    - Use with-factory versus baseline, trigger evals, non-discriminating assertion checks, rollback tests, and review by a human before generated artifacts enter an autoload path.

## Initial Scope

- Candidate review method for meta-skills, team factories, harness builders, agent generators, and skill generators.
- Runtime-neutral mechanism, but most observed examples are runtime-specific and must stay scoped until more evidence exists.
- Not a recommendation to generate agents or skills automatically.

## Known Failure Modes

- A polished meta-skill is treated as a permission grant to write future behavior files.
- Generated roles duplicate existing agents or split a simple checklist into theatrical personas.
- Agent definitions include broad tool authority without output contracts or validation duties.
- Generated skills over-trigger, add context bloat, or repeat generic tool usage.
- Runtime pointers make generated artifacts load in future sessions before review.
- Team communication creates unreviewable state, stale task files, or conflicting intermediate artifacts.
- A generated team uses subagents or agent teams as if they were security boundaries.
- The factory overwrites user files, instruction files, hooks, commands, or runtime configs without a preview diff and rollback path.
- Baseline tests are too easy, self-graded, or non-discriminating.
- One runtime's team architecture assumptions are presented as neutral law for every agent system.

## Verification Needed

- Confirm exact generated paths, file formats, overwrite behavior, backup behavior, and rollback.
- Confirm whether generated artifacts autoload in later sessions.
- Confirm install method, plugin manifest, package lifecycle scripts, hooks, commands, and dependencies.
- Confirm whether the factory can run in dry-run or preview mode.
- Confirm role contracts include tool boundaries, input/output schemas, validation, and merge owner.
- Confirm shared state paths, retention, cleanup, and stale-state behavior.
- Confirm whether generated skills have trigger evals, negative trigger cases, and context-budget review.
- Confirm with-factory versus baseline comparisons use assertions that discriminate useful behavior.
- Confirm generated artifacts are reviewed before entering active runtime directories.

## Placement Candidates

- `laws/surface-agent-orchestration.md`: work-unit boundaries, role contracts, delegation, shared state, handoff, merge ownership.
- `laws/surface-memory-learning.md`: generated skills as durable behavior, evidence-backed skill projection, future-window behavior.
- `laws/surface-install-supply-chain.md`: plugin install, generated files, hooks, commands, runtime pointers, rollback.
- `laws/surface-evidence-eval.md`: baseline comparison, assertions, non-discriminating tests, trigger evals.
- `index/conflict-map.md`: role decomposition versus checklist, skill generation versus sprawl, public skill pack versus local marginal utility.
- `index/trigger-routing.md`: route meta-factories through this incubator candidate before activation.
- `tiandao/scope-and-promotion.md`: scope, promotion, and generalization boundaries.

## Promotion Questions

- Does this review add behavior beyond public skill collection review, instruction-file review, and agent orchestration laws?
- Do multiple independent meta-factories show the same generation surfaces and failure modes?
- Can the review be compact enough to prevent over-gating ordinary role decomposition?
- Can eval cases catch duplicate-role sprawl, unsafe autoload writes, missing rollback, weak baselines, and generated skill over-triggering?
