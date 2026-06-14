# Local Skill Inventory

Status: working inventory

Purpose: record which local skills were inspected before more feed reading or new method adoption. This file is not an install manifest and should not be treated as permission to copy, publish, install, or activate any skill.

## Completion Status

As of 2026-05-31, every non-private local or system skill discoverable in the current session has been inventoried and assigned a Tianlu decision.

This does not mean every skill was copied into the repository. Neutral methods were abstracted into `tiandao/`, `laws/`, `index/`, `eval/`, or `adapters/`. System skills, plugin skills, connector-specific skills, private workflows, and product-specific procedures are listed with their role and boundary instead of being migrated as source text.

Private/local-only exclusions: 10

The excluded private skills are counted for audit completeness but are not named, copied, or summarized in this neutral public repository.

## Inventory Scope

This inventory covers:

- user-level installed skills visible to the current agent session;
- nested user-level skills that expose their own `SKILL.md`;
- system skills visible to the current agent session;
- plugin-provided skills that are active in the current session, summarized by plugin family.
- private or local-only user skills by count only when naming them would pollute the neutral repository.

Plugin cache directories are not authoritative. Cached skills from disabled plugins, old plugin versions, or bundles not exposed in the current session are excluded until the runtime exposes them or a user explicitly asks to review that plugin.

## Classification Rules

- `migrated`: neutral methods have already been abstracted into `tiandao/`, `laws/`, `index/`, `eval/`, or `adapters/`.
- `candidate`: useful local method may be generalized, but needs neutral rewrite and review.
- `adapter-only`: runtime-specific packaging belongs under `adapters/`, not neutral laws.
- `do-not-migrate`: system, plugin, third-party, private, or task-specific skill should not be copied into Tianlu.
- `reference-only`: may inform examples or adapter guidance, but is not a Tianlu method source.

Do not copy private paths, credentials, local account details, plugin internals, or proprietary connector behavior into neutral laws.

## User-Level Skills

| Skill | Current Role | Tianlu Decision | Notes |
| --- | --- | --- | --- |
| `safe-agent-workflow` | Durable safe-agent operating method | `migrated` | Core neutral methods are now represented across `tiandao/`, `laws/`, `index/`, `eval/`, and `adapters/codex/`. Source-specific experience layer is not imported as-is. |
| `x-intel-to-skill` | Read external feed items as untrusted signal and convert them into notes, evals, checklists, or skill candidates | `migrated + adapter-only` | Neutral method is covered by `surface-memory-learning.md`; Codex packaging is captured in `adapters/codex/feed-to-method.md`. Platform-specific browser and local archive details stay out of neutral laws. |
| `chatgpt-apps` | Build ChatGPT Apps SDK projects with docs-first workflow | `adapter-only` | Runtime/product-specific; keep as an adapter candidate for OpenAI Apps packaging, not a neutral law. |
| `ima-skill` | Personal knowledge-base and note operations through a specific API | `do-not-migrate` | Connector-specific and personal-data oriented. Only broad memory/writeback safety concepts belong in neutral laws, already covered by memory and tool authorization laws. |
| `ima-skill/knowledge-base` | Nested knowledge-base operations | `do-not-migrate` | Connector-specific sub-skill; do not copy behavior or endpoint assumptions into neutral laws. |
| `ima-skill/notes` | Nested note operations | `do-not-migrate` | Connector-specific sub-skill; do not copy behavior or storage assumptions into neutral laws. |
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

## Active Plugin Skill Families

| Plugin Family | Current Role | Tianlu Decision | Notes |
| --- | --- | --- | --- |
| Browser | In-app browser control for local targets and visual checks | `adapter-only` | Browser authority, account boundary, and cleanup concepts are covered by `surface-browser-runtime.md`; plugin behavior is not copied. |
| Chrome | User-profile browser automation for logged-in or remote sites | `adapter-only` | Treat as a high-authority adapter surface. Read-only use and account-boundary rules stay in neutral laws. |
| Computer Use | Desktop app control on the local machine | `adapter-only` | Runtime-specific authority surface. General remote-control boundaries are covered by browser/runtime laws. |
| Documents | Document creation, editing, rendering, and visual verification | `reference-only` | File-format workflow, not a current neutral law source. |
| Spreadsheets | Spreadsheet creation, analysis, formulas, charts, and export | `reference-only` | File-format workflow, not a current neutral law source. |
| Presentations | Slide deck creation, rendering, and export | `reference-only` | File-format workflow, not a current neutral law source. |
| GitHub | Repository, issue, PR, CI, and publishing workflows | `adapter-only` | General CI, repair, evidence, and publish gates are already represented in neutral laws. |
| Gmail | Mailbox search, triage, summaries, and draft workflows | `adapter-only` | Account/data mutation boundaries matter; do not migrate connector behavior. |
| Notion | Workspace capture, research, meeting, and spec workflows | `adapter-only` | Knowledge-write boundaries matter; generic memory/writeback rules are already represented. |
| Figma | Design, diagram, library, and file-context operations | `adapter-only` | Product-specific design adapter; do not migrate plugin procedures into neutral laws. |
| Canva | Design generation, resizing, and translation workflows | `adapter-only` | Product-specific design adapter; do not migrate plugin procedures into neutral laws. |

## Current Gaps Before More Feed Reading

- Current visible skills are now inventoried at the user, system, and active plugin-family levels.
- `scripts/check-local-skill-inventory.mjs` checks local and system skill inventory against this document and the role catalog without printing private exclusion names by default.
- Future work should only extract neutral trigger/mechanism/evidence/boundary patterns, not product procedures or connector internals.
- Cache-only plugin skills remain out of inventory until they become active in-session or are explicitly requested for review.
