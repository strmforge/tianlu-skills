# Tianlu Skills

Tianlu Skills is a neutral, layered method system for agent workflows.

It records reusable agent methods, their scope, their relationships, and the evidence required to promote, adapt, or retire them. It is not tied to one model, one agent runtime, one project, or one working style.

中文文档见：[docs/zh-CN/README.md](docs/zh-CN/README.md)

## Core Idea

```text
dao   = source
laws  = collection
index = order
```

Tianlu is not just a package of skills. It is a way to keep methods discoverable, scoped, validated, and portable.

It treats method work as a generation system:

```text
signals -> reusable methods -> composed variants
```

External information is absorbed as candidate material, generalized into portable methods, then recombined into scoped variants for concrete runtimes, projects, or tasks. Those variants can later become new signals, so method generation is a loop rather than a one-time conversion.

## Repository Layout

```text
tianlu-skills/
├── dao/        # Source principles: method lifecycle, scope, promotion, conflicts
├── laws/       # Method collection: concrete reusable methods with declared scope
├── index/      # Order: routing, dependencies, scope maps, conflict maps
├── adapters/   # Runtime-specific packaging, such as Codex, Claude Code, Hermes
├── overlays/   # Project, machine, organization, or personal method lineages
├── incubator/  # Entrance for new methods
├── eval/       # Test prompts and expected behavior
└── docs/       # English and Chinese documentation
```

## Principles

- Neutrality does not mean minimalism. It means every method is placed in its honest scope.
- General methods are not the endpoint. They are reusable building blocks for safer, scoped variants.
- Scoped variants can be recombined into further candidates when their source, evidence, and boundaries remain visible.
- Useful but narrow methods belong in adapters or overlays instead of being forced into generic law.
- The incubator is an entrance for new methods, not a dumping ground.
- Adapters and overlays are part of the method system, not pollutants outside it.
- Promotion requires evidence, evals, and conflict review.

## Current Status

This repository is in early initialization.

The first target adapter is Codex, but the repository itself is runtime-neutral. Do not install or auto-activate anything from this repository until the relevant adapter and eval files say it is ready.

## Start Here

- [English overview](docs/en/README.md)
- [中文概览](docs/zh-CN/README.md)
- [Dao principles](dao/principles.md)
- [Laws index](laws/index.md)
- [Surface registry](index/surface-registry.md)
- [Test prompts](eval/test-prompts.md)
- [Local skill inventory](docs/local-skill-inventory.md)
- [Skill role catalog](docs/skill-role-catalog.md)
