# Local Skill Inventory

Status: working inventory

Purpose: record which local skills were inspected before more feed reading or new method adoption. This file is not an install manifest and should not be treated as permission to copy, publish, install, or activate any skill.

## Classification Rules

- `migrated`: neutral methods have already been abstracted into `dao/`, `laws/`, `index/`, `eval/`, or `adapters/`.
- `candidate`: useful local method may be generalized, but needs neutral rewrite and review.
- `adapter-only`: runtime-specific packaging belongs under `adapters/`, not neutral laws.
- `do-not-migrate`: system, plugin, third-party, private, or task-specific skill should not be copied into Tianlu.
- `reference-only`: may inform examples or adapter guidance, but is not a Tianlu method source.

Do not copy private paths, credentials, local account details, plugin internals, or proprietary connector behavior into neutral laws.

## User-Level Skills

| Skill | Current Role | Tianlu Decision | Notes |
| --- | --- | --- | --- |
| `safe-agent-workflow` | Durable safe-agent operating method | `migrated` | Core neutral methods are now represented across `dao/`, `laws/`, `index/`, `eval/`, and `adapters/codex/`. Source-specific experience layer is not imported as-is. |
| `x-intel-to-skill` | Read external feed items as untrusted signal and convert them into notes, evals, checklists, or skill candidates | `migrated + adapter-only` | Neutral method is covered by `surface-memory-learning.md`; Codex packaging is captured in `adapters/codex/feed-to-method.md`. Platform-specific browser and local archive details stay out of neutral laws. |
| `chatgpt-apps` | Build ChatGPT Apps SDK projects with docs-first workflow | `adapter-only` | Runtime/product-specific; keep as an adapter candidate for OpenAI Apps packaging, not a neutral law. |
| `ima-skill` | Personal knowledge-base and note operations through a specific API | `do-not-migrate` | Connector-specific and personal-data oriented. Only broad memory/writeback safety concepts belong in neutral laws, already covered by memory and tool authorization laws. |
| `pdf` | PDF read/create/review workflow | `reference-only` | File-format workflow, not currently a Tianlu safety method. Could inform a future document-processing adapter if needed. |
| `playwright` | Terminal browser automation workflow | `reference-only` | Browser automation specifics belong in runtime adapters; broad browser authority already covered by `surface-browser-runtime.md`. |
| `playwright-interactive` | Persistent browser/Electron debugging through an interactive runtime | `reference-only` | High-context tooling guidance; do not migrate wholesale. Relevant control-plane risks are covered by browser/runtime and tool authorization laws. |

## System Skills

| Skill | Current Role | Tianlu Decision | Notes |
| --- | --- | --- | --- |
| `imagegen` | Image generation/editing workflow | `do-not-migrate` | System-provided domain skill. |
| `openai-docs` | OpenAI docs lookup and official-source workflow | `reference-only` | Confirms docs-first practice for product adapters, but product docs should not be embedded in neutral laws. |
| `plugin-creator` | Plugin scaffolding workflow | `reference-only` | Useful for plugin adapter design, not a direct neutral law source. |
| `skill-creator` | Skill creation guidance and progressive disclosure | `reference-only` | Already informed Tianlu structure. Keep official guidance as external reference; do not copy system skill content wholesale. |
| `skill-installer` | Skill installation workflow | `reference-only` | Installation risk patterns are represented in `surface-install-supply-chain.md`; installer implementation remains out of scope. |

## Current Gaps Before More Feed Reading

- Keep product/runtime-specific skills out of neutral laws unless a reusable trigger/mechanism/evidence/boundary can be stated without product assumptions.
- Do not migrate personal knowledge-base connector behavior into Tianlu; only neutral memory safety rules belong here.
