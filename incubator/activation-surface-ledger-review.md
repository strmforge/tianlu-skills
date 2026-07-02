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

The latest validated source range for this note is controller-audited cycles `qclaw-tianlu-20260702-013123`, `qclaw-tianlu-20260702-020125`, `qclaw-tianlu-20260702-023119`, and `qclaw-tianlu-20260702-040136`. Controller-audited but synthesis-excluded cycles `qclaw-tianlu-20260702-030138` and `qclaw-tianlu-20260702-033149` are excluded because the worker reply was incomplete or relied on invalid carry-forward evidence.

Additional validated source range: controller-audited successful cycles `qclaw-tianlu-20260702-043145`, `qclaw-tianlu-20260702-050147`, `qclaw-tianlu-20260702-053132`, and `qclaw-tianlu-20260702-063125`. Controller-audited but synthesis-excluded cycle `qclaw-tianlu-20260702-060139` is excluded because the worker reply omitted four selected directories and only supplied a partial verification pass.

Additional validated source range: controller-audited successful cycles `qclaw-tianlu-20260702-070123`, `qclaw-tianlu-20260702-073127`, `qclaw-tianlu-20260702-080133`, and `qclaw-tianlu-20260702-083140`.

Additional validated source range: controller-audited successful cycles `qclaw-tianlu-20260702-090157`, `qclaw-tianlu-20260702-093142`, `qclaw-tianlu-20260702-110303`, and `qclaw-tianlu-20260702-113302`. Worker transport failure `qclaw-tianlu-20260702-103325` is excluded because it produced no reviewable mechanism.

Additional validated source range: controller-audited successful cycles `qclaw-tianlu-20260702-120307`, `qclaw-tianlu-20260702-123357`, `qclaw-tianlu-20260702-130302`, and `qclaw-tianlu-20260702-133308`.

No source package was installed. No repository code, browser extension, wallet, payment, worker marketplace, telemetry backend, collector, local daemon, MCP server, model provider, SaaS template, codegen flow, external actor, scraper, PDF retrieval flow, browser challenge bypass, institutional access path, security scan, exploit action, remote device, cloud phone, app install, browser navigation, browser profile access, storage mutation, CDP connection, CLI auth, package-manager install, mobile SDK or JDK download, APK or iOS build, API call, GitHub query, SBOM generation, PoC cache, remediation edit, hook registration, plan injection, graph backend, database migration, integration-platform operation, print/order/payment action, prompt/eval/red-team scan, provider base-URL routing, telemetry or mesh sync, local dashboard access, webhook delivery, service install, worker dispatch, registry verification, package attestation, model training, crawler run, or observability stack was run.

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

## Promotion Criteria

Keep this in `incubator/` until there are small fixtures for at least three side-effect classes and at least one negative case where a mechanism is rejected or requeued because the activation ledger exposes an unsafe or unproven surface.

Consider promotion to a playbook only if it produces repeatable adoption packets without increasing ceremony for simple read-only source reviews.

## Non-Claims

- This note does not authorize installing, running, connecting, logging in, paying, trading, deploying, scraping, contacting workers, or starting services.
- This note does not authorize paper downloading, publisher-direct access, Sci-Hub fallback, browser challenge handling, OSINT collection, psychoprofiling, security scanning, exploitation, target interaction, report generation, remote-device control, browser-profile access, storage mutation, app installation, SDK or JDK download, package-manager install, binary build, MCP registration, API authentication, database migration, GitHub querying, SBOM generation, PoC retrieval, remediation editing, hook activation, order/payment action, or plan injection.
- This note does not prove any referenced package's runtime behavior, privacy behavior, security posture, authorization enforcement, payment behavior, browser behavior, build behavior, installability, catalog freshness, CLI correctness, MCP behavior, database behavior, integration-platform behavior, telemetry correctness, retrieval legality, downloaded-file safety, cloud-device isolation, hook semantics, benchmark validity beyond its documented scope, remediation quality, or model quality.
- This note does not promote a law or stable playbook.
