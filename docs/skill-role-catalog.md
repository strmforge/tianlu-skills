# Skill Role Catalog

Status: working catalog

Purpose: make each current Tianlu method family and inspected local skill easy to understand before future feed reading, migration, or adapter work.

This catalog is descriptive. It is not an install list, permission grant, or activation manifest.

Private/local-only exclusions: 1

Private local skills are counted for inventory integrity but are not named or migrated in this neutral repository.

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

## Tianlu Productive Playbooks

| Playbook | File | Role | Typical Output |
| --- | --- | --- | --- |
| Commerce operations planning | `../playbooks/commerce-operations.md` | Helps commerce agents turn product, audience, pricing, inventory, and channel signals into useful operating artifacts without binding to one marketplace. | Opportunity report, product page brief, title variants, promotion plan, customer-response drafts. |
| Long-form fiction development | `../playbooks/longform-fiction-development.md` | Helps writing agents develop story intent into characters, world rules, conflict structure, outlines, continuity, and revision notes. | Premise, character sheets, world rules, conflict ladder, chapter outline, revision checklist. |
| Content operations planning | `../playbooks/content-operations.md` | Helps media agents operate topic, script, packaging, distribution, and feedback loops without binding to one platform. | Topic pool, angle brief, script, platform variants, packaging brief, publishing calendar draft, performance review. |
| Research to brief synthesis | `../playbooks/research-to-brief-synthesis.md` | Helps agents turn scattered source material into an actionable brief without treating weak signals as authority. | Research brief, evidence table, hypothesis map, risk list, decision options, next-action plan. |
| Experiment design and iteration | `../playbooks/experiment-design-iteration.md` | Helps agents turn ideas into bounded experiments with predeclared metrics, stop criteria, and learning loops. | Experiment plan, variable matrix, approval checklist, result review, next-iteration backlog. |
| Asset repurposing pipeline | `../playbooks/asset-repurposing-pipeline.md` | Helps agents transform one source asset into multiple scoped variants while preserving the core promise and review path. | Multi-format asset package, source-to-variant map, consistency checklist, review packet. |
| Feedback to backlog operations | `../playbooks/feedback-to-backlog-operations.md` | Helps agents convert noisy feedback into reviewable backlog items while preserving source context and close-loop decisions. | Feedback ledger, problem clusters, priority queue, task packets, decision log, close-loop drafts. |
| Offer and narrative positioning | `../playbooks/offer-narrative-positioning.md` | Helps agents turn audience evidence and constraints into a value proposition and narrative package without treating positioning as proof. | Positioning brief, value proposition ladder, message house, objection sheet, claim-risk flags. |
| Draft and evidence packet | `../playbooks/draft-and-evidence-packet.md` | Helps agents produce reviewable drafts and evidence packets for high-constraint communication without generating expert conclusions. | Draft, claim-evidence table, review queue, approval packet, non-conclusion notice. |
| Regulated document evidence map | `../playbooks/regulated-document-evidence-map.md` | Helps agents organize regulated or sensitive documents into traceable evidence maps before creating briefs, drafts, or review packets. | Document inventory, requirement-evidence map, gap and conflict table, review queue, non-conclusion notice. |
| Project workstream status synthesis | `../playbooks/project-workstream-status-synthesis.md` | Helps agents synthesize mixed project signals into a reviewable status snapshot without becoming a live task tracker. | Task/status inventory, workstream map, done-evidence checklist, stale or unknown list, handoff draft. |
| Sales pipeline operations planning | `../playbooks/sales-pipeline-operations-planning.md` | Helps agents review leads, accounts, opportunities, stage health, objections, and forecast confidence without mutating CRM or making deal commitments. | Pipeline snapshot, opportunity ledger, qualification matrix, deal risk map, next-step draft plan. |
| Contract fulfillment tracking | `../playbooks/contract-fulfillment-tracking.md` | Helps agents track obligations, deliverables, milestones, evidence receipts, gaps, and escalation points without producing legal conclusions. | Obligation ledger, deliverable tracker, evidence receipt log, gap table, escalation queue. |
| Finance operations review | `../playbooks/finance-operations-review.md` | Helps agents review operating finance evidence, budgets, cash movement, and anomalies without producing tax, accounting, audit, credit, investment, or payment decisions. | Financial operations snapshot, income/expense ledger, budget variance table, cash-flow notes, anomaly queue. |
| Creator monetization operations | `../playbooks/creator-monetization-operations.md` | Helps agents plan creator monetization options, commercial assets, disclosure checks, and experiments without publishing or making commercial commitments. | Monetization map, audience-offer fit table, sponsor/affiliate ledger, disclosure checklist, pitch packet. |
| Customer support quality review | `../playbooks/customer-support-quality-review.md` | Helps agents review support conversation quality, scorecard evidence, error patterns, and improvement needs without acting on customers or employees. | Support QA scorecard, conversation review ledger, error-pattern table, improvement packet, recheck plan. |

## Codex Adapter Drafts

| Adapter File | Role | Notes |
| --- | --- | --- |
| `../adapters/codex/README.md` | Codex packaging plan and response receipt guidance. | Keeps Codex-specific output behavior out of neutral laws. |
| `../adapters/codex/feed-to-method.md` | Codex feed-reading workflow for turning external signals into notes, evals, checklists, or inactive skill drafts. | Chrome/X/local archive details belong in private deployment notes, not neutral laws. |
| `../adapters/codex/chrome-x-troubleshooting.md` | Codex Chrome failure recovery workflow for X or feed reading. | Keeps native-pipe recovery, permission prompts, and no-fake-reading behavior in the Codex adapter. |

## Inspected Local Skills

This table lists non-private local skills only. Private/local-only skills are excluded by count above.

| Local Skill | Role In Current Machine | Tianlu Placement | Status |
| --- | --- | --- | --- |
| `safe-agent-workflow` | Durable operating discipline for long tasks, tools, memory, browser/account work, and self-improvement. | Neutral methods migrated across `tiandao/`, `laws/`, `index/`, `eval/`, and `adapters/codex/`. | Migrated except source-specific experience layer, which is not imported as-is. |
| `x-intel-to-skill` | Reads external feeds as untrusted signals and converts them into local notes and skill candidates. | Neutral logic in `surface-memory-learning.md`; Codex packaging in `adapters/codex/feed-to-method.md`. | Migrated as law + adapter. |
| `chatgpt-apps` | Product-specific ChatGPT Apps SDK build workflow. | Adapter-only candidate if Tianlu later needs an OpenAI Apps runtime package. | Not neutral law. |
| `ima-skill` | Connector-specific personal knowledge-base and note workflow. | Do not migrate; only neutral memory/tool-safety ideas are relevant. | Not migrated. |
| `ima-skill/knowledge-base` | Nested knowledge-base operations. | Do not migrate; connector assumptions stay out of neutral laws. | Not migrated. |
| `ima-skill/notes` | Nested note operations. | Do not migrate; storage and endpoint assumptions stay out of neutral laws. | Not migrated. |
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

## Active Plugin Skill Families

| Plugin Family | Role In Current Session | Tianlu Placement | Status |
| --- | --- | --- | --- |
| Browser | Local in-app browser navigation, inspection, screenshots, and visual verification. | Adapter-only; neutral authority rules live in browser/runtime laws. | Inventoried. |
| Chrome | Logged-in browser/profile-dependent navigation and page interaction. | Adapter-only; account and browser authority rules live in browser/runtime laws. | Inventoried. |
| Computer Use | Local desktop application control. | Adapter-only; general remote-control and runtime boundaries live in browser/runtime laws. | Inventoried. |
| Documents | Word/document artifact creation, editing, rendering, and QA. | Reference-only unless a future document adapter is created. | Inventoried. |
| Spreadsheets | Spreadsheet artifact creation, analysis, formulas, charts, and export. | Reference-only unless a future spreadsheet adapter is created. | Inventoried. |
| Presentations | Slide deck generation, rendering, and export. | Reference-only unless a future presentation adapter is created. | Inventoried. |
| GitHub | Repository, issue, PR, CI, and publish workflows. | Adapter-only; general CI, evidence, and publishing boundaries are already laws. | Inventoried. |
| Gmail | Mailbox search, triage, summarization, and draft workflows. | Adapter-only; account/data mutation boundaries stay neutral. | Inventoried. |
| Notion | Workspace capture, research, meeting, and spec workflows. | Adapter-only; generic memory/writeback rules are already laws. | Inventoried. |
| Figma | Design file, diagram, library, and code-connect workflows. | Adapter-only; product-specific procedures stay out of neutral laws. | Inventoried. |
| Canva | Design creation, resizing, and translation workflows. | Adapter-only; product-specific procedures stay out of neutral laws. | Inventoried. |

## Active Plugin Skills

Only skills exposed in the current session are listed here. Cached plugin skills from inactive plugins or older plugin versions are excluded until they become active or are explicitly reviewed.

| Skill | Role | Tianlu Placement |
| --- | --- | --- |
| `browser:control-in-app-browser` | Control the in-app browser for local targets, screenshots, and verification. | Adapter-only; authority boundaries live in browser/runtime laws. |
| `chrome:control-chrome` | Control the user's browser profile for authenticated or remote web tasks. | Adapter-only; high-authority account boundaries live in browser/runtime laws. |
| `computer-use:computer-use` | Control desktop applications on the local machine. | Adapter-only; remote-control boundaries live in browser/runtime laws. |
| `documents:documents` | Create, edit, render, and verify document artifacts. | Reference-only unless a document adapter is created. |
| `spreadsheets:Spreadsheets` | Create, modify, analyze, visualize, and export spreadsheet artifacts. | Reference-only unless a spreadsheet adapter is created. |
| `presentations:Presentations` | Create, render, verify, and export slide decks. | Reference-only unless a presentation adapter is created. |
| `canva:canva-branded-presentation` | Create Canva presentations from briefs or outlines. | Adapter-only; product procedure stays out of neutral laws. |
| `canva:canva-resize-for-all-social-media` | Resize Canva designs across social formats. | Adapter-only; product procedure stays out of neutral laws. |
| `canva:canva-translate-design` | Translate Canva designs while preserving layout. | Adapter-only; product procedure stays out of neutral laws. |
| `figma:figma-code-connect` | Create or maintain Figma Code Connect mappings. | Adapter-only; design-tool procedure stays out of neutral laws. |
| `figma:figma-create-new-file` | Create a new Figma, FigJam, or Slides file. | Adapter-only; write-action prerequisites stay adapter-specific. |
| `figma:figma-generate-design` | Translate application views or layouts into Figma designs. | Adapter-only; product procedure stays out of neutral laws. |
| `figma:figma-generate-diagram` | Generate diagrams in FigJam from structured prompts. | Adapter-only; diagram routing stays adapter-specific. |
| `figma:figma-generate-library` | Build or update Figma design-system libraries. | Adapter-only; design-system procedure stays adapter-specific. |
| `figma:figma-use` | Perform Figma file-context read/write actions. | Adapter-only; file-authority boundaries stay adapter-specific. |
| `figma:figma-use-figjam` | Use Figma tooling in a FigJam context. | Adapter-only; product procedure stays out of neutral laws. |
| `figma:figma-use-slides` | Use Figma tooling in a Slides context. | Adapter-only; product procedure stays out of neutral laws. |
| `github:github` | Orient repository, issue, and pull request work. | Adapter-only; general evidence and authorization rules are already laws. |
| `github:gh-address-comments` | Address actionable pull request review feedback. | Adapter-only; general review and evidence rules are already laws. |
| `github:gh-fix-ci` | Diagnose and fix failing pull request checks. | Adapter-only; CI repair laws cover the neutral method. |
| `github:yeet` | Publish local changes through commit, push, and draft pull request flow. | Adapter-only; publish authority stays gated by neutral laws. |
| `gmail:gmail` | Search, summarize, triage, and draft mailbox work. | Adapter-only; account/data mutation boundaries stay neutral. |
| `gmail:gmail-inbox-triage` | Rank inbox items into actionable buckets. | Adapter-only; mailbox-specific procedure stays out of neutral laws. |
| `notion:notion-knowledge-capture` | Capture conversations and decisions into structured pages. | Adapter-only; durable writeback boundaries are already laws. |
| `notion:notion-meeting-intelligence` | Prepare meeting materials from workspace context. | Adapter-only; product procedure stays out of neutral laws. |
| `notion:notion-research-documentation` | Research across workspace content and synthesize documentation. | Adapter-only; retrieval/writeback boundaries are already laws. |
| `notion:notion-spec-to-implementation` | Turn specs into implementation plans and tasks. | Adapter-only; planning and handoff concepts are already laws. |

## Fixed-Time Sync Intent

The repository should be reviewed and pushed on a fixed cadence when neutral skill work exists:

- inspect changed neutral laws, adapters, docs, evals, and indexes;
- reject private/project-specific material from neutral files;
- run neutrality scan, Markdown link check, and `git diff --check`;
- commit only coherent neutral method updates;
- push the repository and report commit hash, files changed, checks run, and remaining candidates.
