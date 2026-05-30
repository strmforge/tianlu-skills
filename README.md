# Tianlu Skills

Tianlu Skills is a neutral, layered method system for agent workflows.

It is not tied to one agent runtime, one project, or one working style. It records methods, their scope, their relationships, and the evidence required to promote or retire them.

## Model

Tianlu is organized as:

```text
tianlu-skills/
├── dao/        # source principles: how methods are born, scoped, promoted, retired
├── laws/       # method collection: concrete reusable methods with declared scope
├── index/      # order: routing, dependencies, scope maps, conflicts
├── adapters/   # runtime-specific packaging, such as Codex or Claude Code
├── overlays/   # project, machine, organization, or personal lineages
├── incubator/  # entrance for new methods
└── eval/       # validation prompts and expected behavior
```

Short form:

```text
dao = source
laws = collection
index = order
```

The incubator is an entrance, not a dumping ground. Adapters and overlays are scoped parts of the method system, not pollutants outside it.

## Neutrality

Neutrality does not mean minimalism. It means methods are recorded without pretending that one platform, project, person, or workflow is universal.

A method may be:

- runtime-neutral;
- adapter-specific;
- overlay-specific;
- incubating;
- deprecated;
- unsafe.

The important rule is honest scope. Useful but narrow methods belong in their proper layer instead of being forced into generic guidance.

## Current Status

This repository is being initialized. The first target adapter is Codex, but the repository itself is runtime-neutral.

Do not install or auto-activate anything from this repository until the adapter and eval files say it is ready.
