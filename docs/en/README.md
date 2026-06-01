# Tianlu Skills Overview

Tianlu Skills is a neutral method system for agent workflows and productive work.

It is designed for methods that may need to work across multiple agent runtimes, domains, and projects, such as Codex, Claude Code, CI agents, local agent harnesses, commerce assistants, writing assistants, media operators, or future runtimes.

Tianlu treats methods as a generation cycle:

```text
absorb scoped input -> generate neutral methods -> compose scoped variants -> absorb again
```

The simplest reading is: absorb receives scoped or biased methods, generate creates a neutral reusable version, and compose recombines neutral methods into new scoped variants. Those variants return to the absorb side after practice. The system can therefore keep forming new combinations without pretending that any one scoped combination is universal.

Signals include documents, incidents, user corrections, external feeds, repositories, eval results, and field experience. Most signals are scoped already: they come from one event, runtime, project, tool, or task. A signal does not become a method directly. It first becomes a candidate, then a neutral reusable method when its trigger, mechanism, evidence, failure modes, and boundaries are clear. Neutrality means plasticity, not emptiness: a neutral method can be reused because it has not been fixed to one concrete context. Neutral methods can then be recombined into adapter-specific, project-specific, or task-specific variants. A scoped variant is intentionally biased toward its context; after use, it may later become new scoped input, so the system can keep absorbing, generating, and composing without losing provenance.

Returning from a neutral method to a scoped variant is not a regression. It is the practical half of the cycle: neutral methods stay portable, while scoped variants make those methods fit real environments. The variant can re-enter the system only when source, scope, evidence, and boundaries remain inspectable.

This means scoped methods appear twice in the loop. At entry, a scoped method is source-shaped material to absorb. After generation, a scoped method is a composed variant for a concrete context. The first carries evidence from practice; the second turns reusable plasticity back into practice. The distinction is scope, not rank.

The cycle is combinatorial rather than linear. It can absorb many scoped sources, generate reusable neutral middle forms, then recombine those middle forms into many new scoped variants. A new scoped variant can be valuable without being universal, as long as its source, scope, evidence, and boundaries remain visible.

The cycle is circular. Scoped variants enter as input, neutral generation extracts reusable plasticity, and composition spends that plasticity into a new concrete variant. Creation here means recombination for a specific runtime, project, organization, machine, or task, so the result is scoped by design. The risk is not scoped bias itself; the risk is hiding that scope or claiming universal status before neutral generation and evidence review.

In practical terms, absorb and compose are scoped phases, while generate is the neutral phase. The system remains portable by never letting a composed variant skip back into broad law just because it was assembled from neutral parts.

For the phase invariants, see [Method Cycle](method-cycle.md).

## The Three-Part Model

```text
tiandao = source
laws    = foundation collection
playbooks = productive collection
index   = order
```

### Tiandao

`tiandao/` contains source principles: how methods enter the system, how they are scoped, how they mature, how they conflict, and how they are promoted or retired.

The directory name is intentional. It keeps the source-principles layer aligned with the repository owner's subsystem convention while avoiding broader source-layer names that would imply a larger scope. See [Tiandao naming decision](../tiandao-naming-decision.md).

### Laws

`laws/` contains foundation methods that govern evidence, authority, safety, persistence, tools, and promotion. These methods keep productive work auditable, but they are not the whole collection.

### Playbooks

`playbooks/` contains output-oriented method cards. This is where methods for creating useful work belong: commerce operations, long-form fiction development, content operations, research briefs, support workflows, and other productive domains. A playbook may reference laws, but it should not turn every productive step into a gate.

### Index

`index/` contains order: routing, dependency maps, scope maps, and conflict maps. A collection without order is just a pile.

## Other Layers

- `adapters/`: runtime-specific packaging and install guidance.
- `overlays/`: scoped method lineages for projects, organizations, machines, or people.
- `incubator/`: entry point for new methods.
- `eval/`: validation prompts and expected behavior.

## What Belongs Here

Good candidates:

- Methods that can be stated with trigger, mechanism, evidence, failure mode, and boundary.
- Productive playbooks that help an agent create useful artifacts while declaring inputs, outputs, quality signals, and human checkpoints.
- Agent workflow practices that can be scoped honestly.
- Cross-runtime laws that can later be packaged into adapters.
- Narrow methods that are useful enough to keep in an overlay.

Poor candidates:

- One-off opinions with no evidence.
- Runtime-specific instructions placed outside adapters.
- Private project terminology in runtime-neutral files.
- Install instructions that bypass review.
- Gate-heavy rules that suppress productive work when a playbook would be enough.

## Method Generation Direction

- Absorb: collect biased, scoped information as candidates, with source and scope.
- Generate: extract a neutral, reusable method from repeated or well-evidenced candidates by removing or containing local bias.
- Compose: recombine neutral methods into scoped variants for concrete contexts without hiding their source, evidence, or boundaries.
- Re-enter: let useful scoped variants become new scoped candidates only when their provenance, scope, evidence, and boundaries remain inspectable.

This keeps diversity and portability aligned: a general method is not a final answer, but a stable building block for many safe variants. A variant created for one concrete event is useful precisely because it is shaped by that event, but it is not broad law until its local bias has been named, removed, or contained. The cycle is not a ladder with promotion as the only goal; it is a circle where scoped practice can produce neutral methods, neutral methods can be recombined into scoped practice, and practice can return as the next source.

## Current Seed Laws

- Agent orchestration: work boundaries, delegation, roles, shared state.
- Browser and runtime: delegated browser authority, runtime receipts, remote control.
- CI and DevOps workflows: input provenance, tainted event content, repair lanes, scanner evidence, endpoint inventory, policy-as-code.
- Evidence and eval: source evidence, replay, independent verification.
- Install and supply chain: untrusted installer text, persistence, dependency egress.
- MCP, tools, and authorization: authority boundaries, minimal allowlists, bound authorization, runtime output handling.
- Memory and learning: context working sets, durable memory writes, lifecycle, trajectory, feed learning, skill generation.

## Current Seed Playbooks

- Commerce operations: opportunity reports, product page briefs, title variants, promotion plans, customer-response drafts.
- Long-form fiction development: premise, characters, world rules, conflict ladder, chapter outline, continuity, revision.
- Content operations: topic pool, angle brief, script, platform variants, packaging, calendar, performance review.
- Research to brief synthesis: evidence tables, hypothesis maps, risk lists, decision options, next-action plans.
- Experiment design and iteration: variable matrices, success and stop criteria, result reviews, next-iteration backlogs.
- Asset repurposing pipeline: multi-format asset packages, source-to-variant maps, consistency checks, review packets.
- Feedback to backlog operations: feedback ledgers, problem clusters, priority queues, task packets, decision logs, close-loop drafts.
- Offer and narrative positioning: positioning briefs, value proposition ladders, message houses, objection sheets, claim-risk flags.
- Draft and evidence packet: reviewable drafts, claim-evidence tables, review queues, approval packets, non-conclusion notices.
- Regulated document evidence map: document inventories, requirement-evidence maps, gap and conflict tables, review queues, non-conclusion notices.
- Project workstream status synthesis: task/status inventories, workstream maps, done-evidence checklists, stale or unknown lists, handoff drafts.
- Sales pipeline operations planning: pipeline snapshots, opportunity ledgers, qualification matrices, deal risk maps, next-step draft plans.
- Contract fulfillment tracking: obligation ledgers, deliverable trackers, evidence receipt logs, gap tables, escalation queues.
- Finance operations review: financial operations snapshots, income and expense ledgers, budget variance tables, cash-flow notes, anomaly queues.
- Creator monetization operations: monetization maps, audience-offer fit tables, sponsor or affiliate ledgers, disclosure checklists, pitch packets.
- Customer support quality review: support QA scorecards, conversation review ledgers, error-pattern tables, improvement packets, recheck plans.
- Data analysis decision support: data dictionaries, quality reports, metric definition tables, descriptive findings, experiment readouts, anomaly queues.

## Current Inventory

- [Local skill inventory](../local-skill-inventory.md)
- [Skill role catalog](../skill-role-catalog.md)
