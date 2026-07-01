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

The latest validated source range for this note is controller-audited cycles `qclaw-tianlu-20260702-013123`, `qclaw-tianlu-20260702-020125`, `qclaw-tianlu-20260702-023119`, and `qclaw-tianlu-20260702-040136`. Controller-audited but synthesis-excluded cycles `qclaw-tianlu-20260702-030138` and `qclaw-tianlu-20260702-033149` are excluded because the worker reply was incomplete or relied on invalid carry-forward evidence.

Additional validated source range: controller-audited successful cycles `qclaw-tianlu-20260702-043145`, `qclaw-tianlu-20260702-050147`, `qclaw-tianlu-20260702-053132`, and `qclaw-tianlu-20260702-063125`. Controller-audited but synthesis-excluded cycle `qclaw-tianlu-20260702-060139` is excluded because the worker reply omitted four selected directories and only supplied a partial verification pass.

No source package was installed. No repository code, browser extension, wallet, payment, worker marketplace, telemetry backend, collector, local daemon, MCP server, model provider, SaaS template, codegen flow, external actor, scraper, PDF retrieval flow, browser challenge bypass, institutional access path, security scan, exploit action, graph backend, or observability stack was run.

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

## Promotion Criteria

Keep this in `incubator/` until there are small fixtures for at least three side-effect classes and at least one negative case where a mechanism is rejected or requeued because the activation ledger exposes an unsafe or unproven surface.

Consider promotion to a playbook only if it produces repeatable adoption packets without increasing ceremony for simple read-only source reviews.

## Non-Claims

- This note does not authorize installing, running, connecting, logging in, paying, trading, deploying, scraping, contacting workers, or starting services.
- This note does not authorize paper downloading, publisher-direct access, Sci-Hub fallback, browser challenge handling, OSINT collection, psychoprofiling, security scanning, exploitation, target interaction, or report generation.
- This note does not prove any referenced package's runtime behavior, privacy behavior, security posture, authorization enforcement, payment behavior, browser behavior, telemetry correctness, retrieval legality, downloaded-file safety, or model quality.
- This note does not promote a law or stable playbook.
