# Tiandao Naming Decision

Status: decided

`tiandao/` means source principles for the Tianlu method system: method lifecycle, scope and promotion, conflict resolution, and governing principles. It does not claim to be the full philosophical source layer outside this repository.

This repository previously used `dao/` for the source-principles layer. The owner decision is to use `tiandao/` instead.

## Decision

Use `tiandao/` intentionally as the source-principles directory for this method system.

The reasons are:

- It aligns this repository with the owner's broader subsystem convention: every subsystem has a `tiandao/` layer.
- It avoids overloading `dao`, which can be broader than Tiandao in some mythological readings and may imply a scope larger than this repository intends.
- It keeps the public repository clear that this layer is source principles for Tianlu methods, not a claim to define every possible method or philosophy.

## Guardrails

- Keep README and docs clear that this is the source layer for the method system.
- Do not import private mythology, project-specific language, or non-neutral doctrine into this repository.
- Keep broad philosophical text in docs only when it explains repository structure and remains neutral.
- Treat `tiandao/` as the source layer for the method system, while `laws/` remains the method collection and `index/` remains the routing and relationship layer.
