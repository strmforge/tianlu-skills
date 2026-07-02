# Activation Surface Ledger Review

Status: incubating

Scope: runtime-neutral review method

## Signal

Controller-audited public-source batches show a repeated adoption risk: the reusable mechanism is often inseparable from an activation surface. A repository may look like a skill pack, agent framework, observability plane, trading bot, browser bridge, human-task API, or design tool wrapper, but the first useful review artifact is not the mechanism summary. It is a ledger of what would have to be activated before the claim becomes runtime truth.

This candidate keeps that ledger shape in incubation. It is not an endorsement of any repository, tool, exchange, browser extension, wallet, human-worker marketplace, telemetry backend, collector, local daemon, model provider, CLI, MCP server, codegen system, or SaaS template.

## Source Evidence

Recent controller-audited receipts included source-review evidence for these activation-sensitive surfaces:

- real-money strategy bots that require private keys, order-placement clients, market APIs, thresholds, and optional model judgement before they can do anything economically meaningful;
- logged-in-browser bridges that expose extension permissions, local daemon or WebSocket flows, cookie access, browser-session automation, site adapters, and desktop-app adapters;
- human-delegation skills that expose worker search, task creation, chat or file exchange, escrow, platform fees, cryptocurrency payouts, and explicit user-confirmation requirements;
- AI engineering and observability control planes that expose SDK instrumentation, traces, evals, rule engines, guardrails, prompt stores, collectors, GPU telemetry, Fleet or OpAMP management, dashboards, TLS, and backend deployment flows;
- multi-agent and design-tool wrappers that expose task-DAG execution, CLI mutation, MCP tool calls, batch design DSLs, codegen, and host-specific installation paths.
- individual-research and OSINT skill packs that expose social scraping, third-party actor runners, person dossiers, psychoprofile templates, API tokens, platform auth walls, and scored profile claims;
- paper discovery or download skills that expose DOI or title resolution, publisher-direct retrieval, institutional access, browser challenge handling, Sci-Hub or mirror fallback, PDF validation, and machine-readable agent envelopes;
- dual-use security-agent platforms that expose recon, vulnerability scanning, exploit tooling, browser or search APIs, Docker sandboxes, target scope, report generation, API tokens, graph memory, and observability stacks.
- remote-device control skill packs that expose cloud-phone connection, app launch, tap/swipe/text input, browser navigation, app or APK install, remote shell, clipboard, file transfer, app-skill installation, and untrusted screen or page content;
- vulnerability-intelligence coding-agent plugins that expose CLI installation and auth, external VDB/API calls, GitHub or dependency-alert context, pre-commit or manifest hooks, post-install scans, SBOM generation, exploit lookup, cached PoC handling, fix or remediation edits, and bulk-triage agents;
- long-running planning and review plugins that expose host-specific hook registration, session-store reads, plan injection, Stop-hook completion gates, project-file mutation, benchmark claims, and cross-agent adapter behavior.
- browser-automation MCP packages that expose package installation, browser launch, navigation, profile or user-data-dir selection, local/session storage reads or writes, storage-state save or restore, CDP or remote Playwright endpoints, extension mode, server binding, tracing, video, PDF, coordinate interactions, and secrets-redaction boundaries;
- portable build or deployment skills that expose local SDK/JDK bootstrap, command-line tool downloads, license acceptance, package-manager builds, mobile sync, Gradle wrapper assembly, APK output folders, iOS project generation, archive/upload packaging, and generated artifact claims;
- installable CLI catalog packages that expose discovery skills, focused skill selection, package-manager or Go installs, binary setup deferral, MCP setup, local database mirrors, live API calls, provider credentials, website catalog browsing, update/uninstall flows, and generated catalog metadata;
- database, integration-platform, and vertical API skill packages that expose ORM CLIs, schema migrations, code generation, platform accounts, bundled MCP servers, integration migration, product/order/payment APIs, and external service operations.
- command-dispatch, tool-router, and security-workflow packages that expose slash-command routing, operator-argument pass-through, lifecycle sentinels, generated tool indexes, bootstrap scripts, global-rule injection, MCP or browser connections, security/reverse-analysis workflows, reports, and field-journal writeback;
- media/content and package-audit skills that expose WebSearch, browser profiles, account uploads, speech or video generation, live package/API lookups, PDF/report generation, and marketplace install flows;
- codebase-packaging, local-history, and scratchpad packages that expose repository packing, Docker/build/MCP surfaces, ripgrep-backed private history reads, persistent REPL sessions, temp-file execution, and print-only context contracts.
- recursive orchestration frameworks, local-first coworker packages, enterprise data-operation routers, academic research bundles, and continuous capture/pipes systems that expose model/API executors, Docker/database/object-storage stacks, email or meeting-note ingestion, vault writes, enterprise credentials, read-versus-write routing, screen/audio/keyboard/app capture, local SQLite or REST/MCP access, raw SQL/frame endpoints, and activity-triggered agents.
- canonical skill projection, remote-session persistence, security-workflow, GUI-grounding, commerce/API, and crawler-sync packages that expose symlink or host-file projection, project manifests, lockfiles, MCP config projection, service or task registration, hidden/background processes, exploit-capable workflows, credentials, browser or GUI control, model-serving or training surfaces, live documentation/API calls, scheduled crawlers, and API push/update/delete loops.
- skill lifecycle, evaluation, registry, and optimization packages that expose unified AI gateways, API-key-backed model/image/speech calls, package installs, Docker or local provider trials, agent CLI execution, LLM rubric graders, skill install/sync/delete paths, registry writes, PostgreSQL or Docker-backed delivery, session-mining scripts, and train/eval/sleep skill-optimization loops.
- skill security, catalog, discovery, manifest, and orchestration packages that expose scanner execution, optional LLM or threat-intelligence analysis, catalog writes, safety ratings, runtime skill search, full skill-content injection, API-key-backed hosted endpoints, SMS ordering or polling, wallet or micropayment paths, event brokers, agent delegation, and broad dependency stacks.
- account-email subscription audit packages, parallel orchestration state machines, issue-tracker daemons, progressive-disclosure vault retrieval packages, self-hosted coding-assistant retrieval runtimes, YAML workflow engines, and public prompt archives that expose account search/read/export, generated dashboards or spreadsheets, worktree creation, file locks, quality gates, tracker API/auth flows, per-issue workspaces, vault indexing, local model/index APIs, workflow command execution, and raw prompt-archive content.

The latest validated source range for this note is controller-audited cycles `qclaw-tianlu-20260702-013123`, `qclaw-tianlu-20260702-020125`, `qclaw-tianlu-20260702-023119`, and `qclaw-tianlu-20260702-040136`. Controller-audited but synthesis-excluded cycles `qclaw-tianlu-20260702-030138` and `qclaw-tianlu-20260702-033149` are excluded because the worker reply was incomplete or relied on invalid carry-forward evidence.

Additional validated source range: controller-audited successful cycles `qclaw-tianlu-20260702-043145`, `qclaw-tianlu-20260702-050147`, `qclaw-tianlu-20260702-053132`, and `qclaw-tianlu-20260702-063125`. Controller-audited but synthesis-excluded cycle `qclaw-tianlu-20260702-060139` is excluded because the worker reply omitted four selected directories and only supplied a partial verification pass.

Additional validated source range: controller-audited successful cycles `qclaw-tianlu-20260702-070123`, `qclaw-tianlu-20260702-073127`, `qclaw-tianlu-20260702-080133`, and `qclaw-tianlu-20260702-083140`.

Additional validated source range: controller-audited successful cycles `qclaw-tianlu-20260702-090157`, `qclaw-tianlu-20260702-093142`, `qclaw-tianlu-20260702-110303`, and `qclaw-tianlu-20260702-113302`. Worker transport failure `qclaw-tianlu-20260702-103325` is excluded because it produced no reviewable mechanism.

Additional validated source range: controller-audited successful cycles `qclaw-tianlu-20260702-120307`, `qclaw-tianlu-20260702-123357`, `qclaw-tianlu-20260702-130302`, and `qclaw-tianlu-20260702-133308`.

Additional validated source range: controller-audited successful short-worker receipt windows from 2026-07-02 local 15:00, 15:09, 15:20, and 15:30.

Additional validated source range: controller-audited successful short-worker receipt windows from 2026-07-02 local 15:42, 15:52, 16:03, and 16:15.

Additional validated source range: controller-audited successful short-worker receipt windows from 2026-07-02 local 16:25, 16:43, 16:52, and 17:04.

Additional validated source range: controller-audited successful short-worker receipt windows from 2026-07-02 local 17:27, 17:37, 17:47, and 17:57.

Additional validated source range: controller-audited successful short-worker receipt windows from 2026-07-02 local 18:15, 18:26, 18:35, and 18:45.

Additional validated source range: controller-audited successful short-worker receipt windows from 2026-07-02 local 19:35, 19:46, 19:55, and 20:05.

No source package was installed. No repository code, browser extension, wallet, payment, worker marketplace, telemetry backend, collector, local daemon, MCP server, model provider, SaaS template, codegen flow, external actor, scraper, PDF retrieval flow, browser challenge bypass, institutional access path, security scan, exploit action, remote device, cloud phone, app install, browser navigation, browser profile access, storage mutation, CDP connection, CLI auth, package-manager install, mobile SDK or JDK download, APK or iOS build, API call, GitHub query, SBOM generation, PoC cache, remediation edit, hook registration, plan injection, graph backend, database migration, integration-platform operation, print/order/payment action, prompt/eval/red-team scan, provider base-URL routing, telemetry or mesh sync, local dashboard access, webhook delivery, service install, worker dispatch, registry verification, package attestation, model training, crawler run, codebase package build, Docker run, tool-index generation, bootstrap, global-rule injection, local-history search, persistent REPL launch, media generation, content upload, live package lookup, report/PDF generation, observability stack, enterprise system query/script execution, credential read, health check, screen/audio/keyboard capture, desktop capture app launch, vault write, email or calendar read, meeting-note ingestion, local REST/MCP query, raw SQL/frame access, activity-triggered agent pipe, symlink/adopt/sync operation, service/task registration, background session launch, exploit execution, GUI control, model download/inference/training, scheduled task setup, scheduler/crawler run, API push/update/delete loop, skill registry write, skill install/sync/delete, runtime skill trial, Docker/local provider trial, LLM rubric grading, session-mining scan, skill train/eval/sleep run, generated skill adoption, runtime skill search, full skill-context injection, hosted skill-discovery query, SMS order or poll, phone-number rental, x402 or wallet payment, event broker launch, or agent-mesh delegation was run.

Related Tianlu candidates:

- `public-agent-skill-mechanism-intake-review.md`
- `mcp-api-bridge-adoption-review.md`
- `observability-containment-control-plane-review.md`
- `stateful-skill-gate-review.md`
- `software-supply-chain-evidence-triage-service.md`

## Proposed Trigger

Use this candidate when a repository, skill, MCP bridge, agent platform, or tool wrapper combines an attractive method with any activation-sensitive surface, including:

- private keys, wallets, payments, escrow, order placement, refunds, payouts, or market APIs;
- OAuth, API keys, bearer tokens, cookie access, browser sessions, extension permissions, or logged-in automation;
- human workers, customer contact, field work, delivery, photography, chat, files, or real-world tasks;
- telemetry collectors, packet capture, traces, metrics, eval stores, prompt vaults, dashboards, OpAMP or fleet management, or backend deployment;
- local daemons, WebSockets, desktop adapters, host-app bridges, CLI mutation, MCP tools, codegen, or filesystem writes;
- multi-agent execution, task graphs, model-provider routing, model calls, training loops, or data ingestion.
- public-person research, OSINT dossiers, psychoprofiles, social scraping, third-party actor execution, crawler scripts, or account-authenticated platform access;
- paper search, DOI or title resolution, PDF retrieval, publisher-direct access, institutional subscription access, Sci-Hub or mirror fallback, browser challenge handling, or downloaded-file validation;
- dual-use security workflows, reconnaissance, vulnerability scanning, exploitation tooling, target interaction, generated exploit guidance, security report generation, or authorized-scope claims.
- remote-device or mobile-app workflows, cloud-phone connection, screen inspection, touch/text input, app launch, app or APK installation, remote shell, clipboard, file transfer, or untrusted UI/page content;
- security-intelligence plugin workflows, dependency-alert context, pre-commit or manifest hooks, post-install scanners, SBOM or PoC caches, remediation edits, external vulnerability APIs, or triage agents;
- plan/session hooks, session-store reads, stop gates, plan-file injection, project-file mutation, or benchmark claims that may influence whether an agent continues or stops.
- browser automation, profile/session storage, CDP endpoints, extension mode, remote browser endpoints, page navigation, coordinate clicks, PDFs, video, traces, or secrets-redaction claims;
- portable mobile or desktop build flows, local SDK/JDK bootstrap, license acceptance, Gradle or package-manager builds, mobile sync, generated binary outputs, upload packaging, or deployment targets;
- CLI catalog discovery, focused skill installation, package-manager or Go binary setup, MCP server registration, local database mirrors, update/uninstall flows, or live API-backed catalog entries;
- ORM/database migration, integration-platform code generation, platform account operation, print-on-demand order/payment flows, or other vertical API execution surfaces.
- LLM proxy base-URL routing, provider-key use, subscription bridging, telemetry or mesh metadata, cloud dashboards, budget downgrades, response caches, local dashboards, service installs, and alert or webhook paths;
- prompt-refinement activation, hidden rewrite injection, hook flags, model-family strategy selection, eval execution, or host-specific state mutation;
- worker-governance dispatch, registry enrollment, controls verification, blast scoring, package attestation, MCP server launch, or external registry verification.
- slash-command dispatch, security or reverse-engineering workflow routing, generated tool indexes, bootstrap/install helpers, global rule injection, field-journal writeback, or report generation;
- WebSearch, browser-profile use, logged-in upload, media generation, speech generation, live package/API lookup, PDF creation, local-history search, persistent REPL setup, codebase packing, Docker/build/MCP launch, or marketplace/API-key flows.
- enterprise application credentials, health checks, read-only query versus write-script routing, commit gates, screen/audio/keyboard/app capture, local timeline databases, REST or MCP access to captured data, raw SQL or frame endpoints, activity-triggered agent pipes, vault writes, email/calendar/meeting-note ingestion, or local knowledge-graph persistence.
- canonical skill projection, host config projection, service/task persistence, hidden/background worker setup, autonomous security workflow, GUI grounding/navigation, commerce-admin API use, scheduled crawler execution, or skill-store API sync/update/delete paths.
- AI gateway aggregation, model/image/speech generation, balance or model-list reads, skill registry writes, per-project sync, runtime agent trials, Docker or local provider execution, API-key-selected graders, skill HR recruitment or termination state, session-mining scripts, bounded skill edits, held-out gates, sleep-cycle proposal staging, or generated skill adoption.
- security scanner execution, skill catalog mutation, runtime skill-discovery queries, full skill-content injection, multi-transport skill manifests, SMS ordering or polling, phone-number rental, x402 wallet payment, event-broker setup, or agent-to-agent delegation.
- previewable browser automation, action caching, self-healing LLM fallbacks, hosted market-rule runtimes, linked-channel delivery, account-private backtests, public share-card minting, cross-session project-state hooks, MCP tool registration, local audio/transcription subprocesses, multimodal Docker products, and real-crypto payment confirmations.
- account-email search/read/export, subscription dashboard or spreadsheet generation, worktree/lock/gate execution, tracker issue access or mutation, daemon launch, vault indexing, coding-assistant indexing/API use, YAML workflow execution, or public prompt-archive content copying, summarization, policy extraction, authenticity claims, support-link use, or provider/version adoption.

## Proposed Mechanism

Build an activation surface ledger before importing, adapting, running, or promoting the mechanism.

1. State the mechanism without activation.
   - Example shape: source-reviewed package, protocol, CLI, skill, bridge, control plane, or workflow.
2. List activation surfaces separately.
   - Credentials, accounts, browser/session state, local process, filesystem mutation, network/API mutation, payment, human tasking, telemetry ingestion, model calls, training, deployment, or publication.
3. Assign each surface a side-effect class.
   - Read-only local evidence, local process, local write, account read, account write, browser/session action, credential handling, real-money action, human-world action, external service mutation, deployment, or public release.
4. Record the proof layer.
   - Source path exists, source text reviewed, config shape inspected, safe fixture tested, runtime launched, account connected, external behavior verified, or production behavior proven.
5. Record non-claims.
   - A README, manifest, skill file, config, or package layout does not prove runtime safety, permission enforcement, provider behavior, payment correctness, privacy behavior, telemetry correctness, or external service behavior.
6. Choose the next safe gate.
   - More source reading, schema extraction, local fixture, dry-run harness, explicit user approval, account owner handoff, or stop.

## Ledger Packet

Use a compact packet before adoption:

```text
mechanism:
source_evidence:
activation_surfaces:
side_effect_classes:
proof_layer:
nonClaims:
red_lines:
next_safe_gate:
rollback_or_requeue:
```

## Known Failure Modes

- Summary-first adoption: a useful mechanism is accepted before its activation surfaces are listed.
- Carry-forward evidence: a prior batch or session memory is reused as if it were current-batch source evidence.
- Permission laundering: a README says user confirmation is required, but the actual runtime path is never verified.
- Read-to-run drift: source-review confidence is silently upgraded into runtime, browser, payment, or account authority.
- Tool-surface collapse: CLI, MCP, browser, local daemon, and desktop adapter operations are treated as one generic tool call.
- Economic-action blur: private keys, order placement, escrow, payouts, fees, and refunds are described as configuration rather than red-lane activation.
- Telemetry proof inflation: traces, dashboards, eval scores, prompt vaults, and collectors are mistaken for correctness, privacy, or compliance proof.
- Default-fallback amnesia: an apparently optional retrieval path is default-on in source text, so the ledger must record the default behavior before any agent can call it.
- Authorization-text laundering: a README says authorized use only, but no runtime gate, target ownership proof, or operator approval has been verified.
- Dual-use collapse: security research, OSINT, browser challenge handling, and PDF retrieval are summarized as ordinary data access instead of being split into separate side-effect classes.
- Remote-device laundering: cloud-phone or sandbox language is treated as harmless without separately recording app login, browser navigation, app install, shell, clipboard, file transfer, and untrusted screen-content surfaces.
- Hook-action laundering: a security or planning hook is described as advisory while the actual host path may block, mutate files, call an API, read session state, or alter stop behavior.
- Benchmark-scope laundering: a benchmark about file-pattern fidelity, trigger quality, or package shape is repeated as proof of long-run autonomy, security correctness, or remediation safety.
- Browser-session laundering: an MCP browser package is summarized as read-only automation while profile state, storage mutation, CDP/remote endpoints, extension mode, and page actions remain unreviewed.
- Build-output laundering: a skill's portable build scripts or generated binary outputs are treated as proven artifacts before SDK/JDK bootstrap, license handling, package-manager commands, sync, assembly, and upload surfaces are replayed.
- Catalog-install laundering: a registry count, discovery skill, or focused-skill recommendation is treated as permission to install a binary, register an MCP server, call a live API, or create a local mirror.
- Vertical-API laundering: database, integration, or commerce workflow shape is treated as authority to migrate schemas, generate integrations, call platform APIs, create orders, pay wallets, or mutate external records.
- Locality laundering: a package says prompts stay local, while telemetry, mesh, cloud-dashboard, webhook, or provider-account metadata remains enabled, required, or unreviewed.
- Governance-protocol laundering: a route decision, registry record, blast score, or attestation manifest is treated as permission to dispatch a worker or as proof that the worker is trustworthy.
- Generated-index laundering: a README says a tool index should be generated before use, and that missing file is mistaken for permission to run bootstrap scripts or register tools.
- Print-contract laundering: a scratchpad promises only printed output enters context, so local data reads, temp-file execution, session persistence, or private-history access are treated as harmless.
- Report-output laundering: a package claims to emit CSV, SARIF, PDF, or audit matrices, and the artifact shape is treated as proof of scan, package-advice, or migration correctness.
- Capture-locality laundering: a package says data is local or permissioned, and that wording is treated as proof that screen/audio capture, raw SQL/frame access, REST/MCP queries, or agent pipes are private and safe.
- Read-write routing laundering: a source-level decision matrix separates read-only queries from write-capable scripts, and the matrix is treated as permission to connect credentials, run health checks, or execute the write path.
- Projection laundering: a canonical skill store, manifest, lockfile, or host-pointer layout is treated as proof that projected behavior is equivalent across runtimes.
- Persistence laundering: a setup plan names tmux, service managers, task schedulers, or hidden processes, and that plan is treated as proof of safe durable operation.
- Sync-loop laundering: an interval constant, scheduler, crawler, or API-sync toggle is treated as permission to crawl, update, delete, or publish records.
- Skill-evolution laundering: a bounded edit budget, validation gate, or offline sleep proposal is treated as proof that generated skill changes are correct, adopted, safe, or production-ready.
- Runtime-discovery laundering: a ranked skill search result or full `SKILL.md` payload is treated as permission to inject, install, or obey a skill before source role, safety rating, and activation surfaces are reviewed.
- Multi-transport laundering: a manifest lists MCP, REST, payment, or hosted endpoints, and the shared contract is treated as proof that every transport is available, safe, priced correctly, or authorized to call.
- Event-mesh laundering: an orchestrator or event broker diagram is treated as proof of reliable delegation, tenant isolation, or task completion before the broker, dependencies, agents, and side effects are replayed.
- Preview-action laundering: an observe-before-act or self-healing cache is treated as proof that browser actions are safe, correct, repeatable, or account-neutral.
- Durable-state laundering: handovers, snapshots, recaps, ticket logs, MCP tool counts, or session-start hooks are treated as future-memory authority before injection timing, stale-state handling, and host behavior are replayed.
- Hosted-rule laundering: a typed alert, backtest, delivery channel, or account-readiness check is treated as proof that a hosted runtime, market-data source, notification path, or public-share surface works.
- Practice-rubric laundering: a named exercise, writing rubric, design-rule corpus, or structure-first method is treated as output-quality proof without baseline comparison or negative cases.
- Account-extraction laundering: a subscription tracker's dashboard/export contract is treated as privacy, accuracy, or connector proof before account access, extraction, deduplication, and artifact generation are separately replayed.
- Prompt-archive laundering: a public archive of prompts or model/tool descriptions is treated as reusable law or policy evidence instead of being quarantined as observational source shape only.

## Promotion Criteria

Keep this in `incubator/` until there are small fixtures for at least three side-effect classes and at least one negative case where a mechanism is rejected or requeued because the activation ledger exposes an unsafe or unproven surface.

Consider promotion to a playbook only if it produces repeatable adoption packets without increasing ceremony for simple read-only source reviews.

## Non-Claims

- This note does not authorize installing, running, connecting, logging in, paying, trading, deploying, scraping, contacting workers, or starting services.
- This note does not authorize paper downloading, publisher-direct access, Sci-Hub fallback, browser challenge handling, OSINT collection, psychoprofiling, security scanning, exploitation, target interaction, report generation, remote-device control, browser-profile access, storage mutation, app installation, SDK or JDK download, package-manager install, binary build, MCP registration, API authentication, database migration, GitHub querying, SBOM generation, PoC retrieval, remediation editing, hook activation, order/payment action, plan injection, tool-index generation, bootstrap, global-rule injection, local-history search, persistent REPL launch, codebase packaging, Docker execution, WebSearch, media generation, logged-in upload, live package lookup, PDF generation, enterprise data query/script execution, screen/audio/keyboard capture, local capture database query, raw SQL/frame access, activity-triggered pipe execution, vault write, email/calendar access, meeting-note ingestion, host skill projection, service/task registration, hidden/background launch, GUI control, model download/inference/training, scheduled crawler execution, API push/update/delete, unified AI gateway calls, skill registry writes, skill install/sync/delete, Docker/local skill trials, LLM rubric grading, session mining, skill train/eval/sleep loops, generated skill adoption, runtime skill search, full skill-context injection, SMS ordering, phone-number rental, x402 or wallet payment, hosted endpoint calls, public share-card minting, market-rule hosting, linked-channel delivery, cross-session hook setup, project-continuity state mutation, browser observe/act execution, audio/transcription subprocess launch, event-broker setup, or agent-mesh delegation.
- This note does not authorize account-email search/read/export, generated subscription dashboards, spreadsheet export, tracker issue access or mutation, daemon launch, worktree creation, lock/gate execution, vault indexing, coding-assistant indexing/API use, YAML workflow execution, or prompt-archive content reproduction.
- This note does not prove any referenced package's runtime behavior, privacy behavior, security posture, authorization enforcement, payment behavior, browser behavior, build behavior, installability, catalog freshness, CLI correctness, MCP behavior, database behavior, integration-platform behavior, telemetry correctness, retrieval legality, downloaded-file safety, cloud-device isolation, hook semantics, benchmark validity beyond its documented scope, remediation quality, package-audit quality, codebase-packing quality, local-history safety, scratchpad isolation, upload behavior, report quality, model quality, local-only guarantee, pipe-permission enforcement, query/script routing correctness, credential safety, capture quality, OCR or transcription quality, knowledge-graph quality, host parity, service persistence, GUI navigation quality, crawler freshness, API-sync safety, delete/update correctness, security scanner accuracy, skill-discovery relevance, full-skill injection safety, SMS delivery, phone-number availability, pricing, x402 settlement, event-mesh reliability, or agent delegation quality.
- This note does not promote a law or stable playbook.
