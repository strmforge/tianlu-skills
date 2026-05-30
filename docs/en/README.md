# Tianlu Skills Overview

Tianlu Skills is a neutral method system for agent workflows.

It is designed for methods that may need to work across multiple agent runtimes, such as Codex, Claude Code, Hermes-style agents, CI agents, local agent harnesses, or future runtimes.

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

## Current Seed Laws

- Agent orchestration: work boundaries, delegation, roles, shared state.
- Evidence and eval: source evidence, replay, independent verification.
- Install and supply chain: untrusted installer text, persistence, dependency egress.
