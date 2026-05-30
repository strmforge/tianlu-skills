# Tianlu Skills Overview

Tianlu Skills is a neutral method system for agent workflows.

It is designed for methods that may need to work across multiple agent runtimes, such as Codex, Claude Code, Hermes-style agents, CI agents, local agent harnesses, or future runtimes.

Tianlu treats methods as a generation system:

```text
absorb signals -> generalize reusable methods -> compose scoped variants
```

Signals include documents, incidents, user corrections, external feeds, repositories, eval results, and field experience. A signal does not become a method directly. It first becomes a candidate, then a general method when its trigger, mechanism, evidence, failure modes, and boundaries are clear. General methods can then be recombined into adapter-specific, project-specific, or task-specific variants.

## The Three-Part Model

```text
dao   = source
laws  = collection
index = order
```

### Dao

`dao/` contains source principles: how methods enter the system, how they are scoped, how they mature, how they conflict, and how they are promoted or retired.

### Laws

`laws/` contains concrete reusable methods. Diversity belongs here. A method can be broad, narrow, adapter-specific, project-specific, incubating, deprecated, or unsafe, as long as its scope is honest.

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
- Agent workflow practices that can be scoped honestly.
- Cross-runtime laws that can later be packaged into adapters.
- Narrow methods that are useful enough to keep in an overlay.

Poor candidates:

- One-off opinions with no evidence.
- Runtime-specific instructions placed outside adapters.
- Private project terminology in runtime-neutral files.
- Install instructions that bypass review.

## Method Generation Direction

- Absorb: collect high-signal information as candidates, with source and scope.
- Generalize: extract a neutral, reusable method from repeated or well-evidenced candidates.
- Compose: combine general methods into scoped variants without hiding their source, evidence, or boundaries.

This keeps diversity and portability aligned: a general method is not a final answer, but a stable building block for many safe variants.

## Current Seed Laws

- Agent orchestration: work boundaries, delegation, roles, shared state.
- Browser and runtime: delegated browser authority, runtime receipts, remote control.
- CI and DevOps workflows: input provenance, tainted event content, repair lanes, scanner evidence, endpoint inventory, policy-as-code.
- Evidence and eval: source evidence, replay, independent verification.
- Install and supply chain: untrusted installer text, persistence, dependency egress.
- MCP, tools, and authorization: authority boundaries, minimal allowlists, bound authorization, runtime output handling.
- Memory and learning: context working sets, durable memory writes, lifecycle, trajectory, feed learning, skill generation.

## Current Inventory

- [Local skill inventory](../local-skill-inventory.md)
- [Skill role catalog](../skill-role-catalog.md)
