# Contributing

Tianlu Skills is early. Contributions should preserve neutrality, scope honesty, and evidence.

## Before Adding A Method

Ask:

- What trigger makes this method relevant?
- What mechanism does it prescribe?
- What evidence supports it?
- What failure modes are known?
- What boundary keeps it from overreaching?
- Is it runtime-neutral, adapter-specific, overlay-specific, incubating, deprecated, or unsafe?

## Placement

- Source principles go in `tiandao/`.
- Concrete methods go in `laws/`.
- Routing, dependencies, scope, and conflicts go in `index/`.
- Runtime-specific packaging goes in `adapters/`.
- Project or personal methods go in `overlays/`.
- New unproven methods start in `incubator/`.
- Validation cases go in `eval/`.

## Neutrality Review

Do not add private project names, collaborator aliases, machine-local paths, or runtime-specific claims to runtime-neutral files.
