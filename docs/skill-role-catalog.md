# Skill Role Catalog

Status: working catalog

Purpose: make each current Tianlu method family and inspected local skill easy to understand before future feed reading, migration, or adapter work.

This catalog is descriptive. It is not an install list, permission grant, or activation manifest.

## Tianlu Law Families

| Family | File | Role | Typical Output |
| --- | --- | --- | --- |
| Agent orchestration | `../laws/surface-agent-orchestration.md` | Defines safe work boundaries for delegation, handoff, parallel work, shared state, task packets, and thread/worktree coordination. | Task packet, role contract, handoff checklist, done evidence. |
| Browser and runtime | `../laws/surface-browser-runtime.md` | Treats browser sessions, logged-in accounts, remote control, sandboxes, containers, worktrees, and hosted runtimes as authority surfaces. | Browser/account scope, runtime receipt, cleanup/rollback record. |
| CI and DevOps workflows | `../laws/surface-ci-devops.md` | Handles event-driven automation, tainted workflow inputs, CI repair agents, scanner evidence, endpoint inventory, and policy-as-code. | Provenance map, repair lane, scanner evidence record, policy dry-run plan. |
| Evidence and eval | `../laws/surface-evidence-eval.md` | Keeps claims, benchmarks, improvements, and promotion decisions grounded in source evidence and independent verification. | Evidence card, replay case, eval prompt, promotion decision. |
| Install and supply chain | `../laws/surface-install-supply-chain.md` | Treats installers, package commands, skill/plugin/MCP adoption, generated helpers, and persistence as supply-chain surfaces. | Adoption review, install inventory, persistence audit, rollback path. |
| MCP, tools, and authorization | `../laws/surface-mcp-tools-auth.md` | Governs exposed tools, MCP/API bridges, bound authorization, brokered secrets, payment/identity state, and runtime outputs. | Tool inventory, allowlist, auth receipt, secret broker record, transaction state. |
| Memory and learning | `../laws/surface-memory-learning.md` | Turns context, memories, feeds, skill generation, and self-improvement into scoped, reviewable, rollback-capable methods. | Memory event, method card, incubator entry, inactive skill draft, eval label. |

## Codex Adapter Drafts

| Adapter File | Role | Notes |
| --- | --- | --- |
| `../adapters/codex/README.md` | Codex packaging plan and response receipt guidance. | Keeps Codex-specific output behavior out of neutral laws. |
| `../adapters/codex/feed-to-method.md` | Codex feed-reading workflow for turning external signals into notes, evals, checklists, or inactive skill drafts. | Chrome/X/local archive details belong in private deployment notes, not neutral laws. |

## Inspected Local Skills

| Local Skill | Role In Current Machine | Tianlu Placement | Status |
| --- | --- | --- | --- |
| `safe-agent-workflow` | Durable operating discipline for long tasks, tools, memory, browser/account work, and self-improvement. | Neutral methods migrated across `dao/`, `laws/`, `index/`, `eval/`, and `adapters/codex/`. | Migrated except source-specific experience layer, which is not imported as-is. |
| `x-intel-to-skill` | Reads external feeds as untrusted signals and converts them into local notes and skill candidates. | Neutral logic in `surface-memory-learning.md`; Codex packaging in `adapters/codex/feed-to-method.md`. | Migrated as law + adapter. |
| `chatgpt-apps` | Product-specific ChatGPT Apps SDK build workflow. | Adapter-only candidate if Tianlu later needs an OpenAI Apps runtime package. | Not neutral law. |
| `ima-skill` | Connector-specific personal knowledge-base and note workflow. | Do not migrate; only neutral memory/tool-safety ideas are relevant. | Not migrated. |
| `pdf` | File-format workflow for PDF extraction, generation, and visual review. | Reference-only unless a future document-processing adapter is needed. | Not migrated. |
| `playwright` | Terminal browser automation workflow. | Reference-only; browser authority is covered by neutral laws. | Not migrated. |
| `playwright-interactive` | Persistent browser/Electron debugging workflow. | Reference-only; control-plane risk is covered by neutral laws. | Not migrated. |

## System Skills

| System Skill | Role | Tianlu Placement |
| --- | --- | --- |
| `imagegen` | System-provided image generation/editing workflow. | Do not migrate. |
| `openai-docs` | Official OpenAI docs lookup workflow. | Reference-only for product adapters. |
| `plugin-creator` | Plugin scaffolding workflow. | Reference-only for plugin adapter design. |
| `skill-creator` | Skill creation and progressive disclosure guidance. | Reference-only; already informed structure. |
| `skill-installer` | Skill installation workflow. | Reference-only; install risk is represented in supply-chain laws. |

## Fixed-Time Sync Intent

The repository should be reviewed and pushed on a fixed cadence when neutral skill work exists:

- inspect changed neutral laws, adapters, docs, evals, and indexes;
- reject private/project-specific material from neutral files;
- run neutrality scan, Markdown link check, and `git diff --check`;
- commit only coherent neutral method updates;
- push the repository and report commit hash, files changed, checks run, and remaining candidates.
