# Observability Containment Control Plane Review

Status: incubating

Scope: runtime-neutral review method

## Signal

Several controller-audited public-source batches show a repeated shape: an agent or LLM workflow is governed through a control plane that watches activity, records state, applies gates, and exposes a dashboard, API, or policy surface.

This candidate keeps that shape in incubation. It is not an endorsement of any telemetry platform, network monitor, eval product, container wrapper, policy engine, dashboard, cloud service, or runtime.

## Source Evidence

Controller-audited short-worker receipts from 2026-06-26 include source-review evidence for:

- hardware and fleet telemetry packages that combine adapter configuration, health endpoints, risk metrics, local/cloud mode selection, credential-source ordering, metrics export, and dashboard or polling loops;
- Kubernetes and network-observability packages that combine capture windows, snapshots, query filters, dissection state, packet metadata, MCP surfaces, destructive-operation flags, and RCA or security-report outputs;
- LLM engineering platforms that combine traces, scores, datasets, prompt versions, evaluator flows, playground iteration, API/SDK surfaces, workers, dashboards, cloud deployment, and self-host deployment;
- coding-agent containment packages that combine container images, bind mounts, environment forwarding, policy files, MCP call observation, filesystem/network telemetry, control-plane isolation, and local control UIs.
- AI-agent observability platforms that combine OpenTelemetry-native tracing, spans, metrics, events, eval SDK or CLI surfaces, SQL editors, dashboard builders, annotation and dataset queues, realtime trace viewers, gRPC exporters, self-host stacks, schema controls, and PII-redaction sidecars.
- domain creative-control MCP packages that combine host-application remote scripts, MCP servers, local bridges, tool catalogs, device or asset indexes, sample sources, prompt-to-plan composers, execution routers, undo boundaries, and non-undoable side-effect classes.
- data-observability operating packages that combine asset state, alerts, lineage, monitor coverage, incident workflows, metadata ingestion, connector auth, telemetry settings, and agent instrumentation.
- MCP/API federation gateways that combine upstream catalogs, auth modes, protocol translation, admin UI flags, OpenTelemetry export, Redis-backed state, plugin execution, and deployment hardening into a single control plane.

The receipts are evidence packets, not neutral law. Worker claims were accepted only after controller path verification, source spot-check, and source-review caveats. No package was installed, no server or dashboard was started, no cluster, account, cloud, API, browser, credential, container, model call, packet capture, or external service was used.

Related Tianlu candidates:

- `public-agent-skill-mechanism-intake-review.md`
- `agent-platform-lifecycle-review.md`
- `stateful-skill-gate-review.md`
- `mcp-api-bridge-adoption-review.md`
- `local-agent-provider-gateway.md`

## Proposed Trigger

Use this candidate when a repository, product, or workflow proposes to govern an agent, LLM application, cluster, local runtime, or coding environment through:

- tracing, metrics, scores, sessions, spans, observations, or prompt versions;
- eval runs, judge outputs, datasets, benchmarks, labels, or feedback queues;
- dashboards, local control UIs, health endpoints, stats endpoints, or alert loops;
- packet, network, API, or tool-call capture;
- containerized agent execution, filesystem or network telemetry, bind mounts, or environment forwarding;
- policy engines, allow/deny rules, destructive flags, isolation scripts, or control-plane protections;
- MCP observers, MCP tool policies, or API/SDK bridge instrumentation.
- host-application control surfaces where session mutations, asset downloads, local corpus scans, memory writes, installer actions, or filesystem writes are presented through one MCP or bridge interface.
- data, metadata, lineage, alert, monitor, or incident-response control planes that can query live workspaces, create or tune monitors, export configuration, ingest metadata, or instrument applications.
- federation gateways or upstream server catalogs that can route tools through auth, cache, trace, plugin, admin UI, or deployment state before reaching the real backend.

## Proposed Mechanism

Review the control plane as separate loop, state, gate, and activation surfaces:

1. Inventory observed state.
   - Traces, scores, datasets, prompts, health data, metrics, captures, snapshots, packet metadata, mounts, environment variables, policy files, config, and event logs.
2. Identify the loop surface.
   - Polling, capture, ingestion, worker processing, dashboard refresh, stats reporting, playground iteration, RCA, report generation, or controlled agent execution.
3. Identify the gate.
   - Eval thresholds, prompt-version boundaries, destructive-operation flags, policy compilation, allow/deny rules, mount prompts, credential-source rules, mode selection, isolation requirements, and stop conditions.
4. Separate observability from correctness.
   - Seeing traces, metrics, captures, dashboards, scores, or policy logs does not prove quality, completeness, safety, compliance, or fitness.
5. Separate containment from security proof.
   - Containers, policy engines, network filters, bind mounts, and control-plane isolation are architecture evidence until replayed under a scoped activation envelope with negative tests.
6. Separate read surfaces from action surfaces.
   - Querying metadata, inspecting traces, or reviewing configs is different from packet capture, cluster access, policy enforcement, credential forwarding, cloud calls, dashboard actions, report publication, or running an agent inside a container.
7. Require scoped replay before promotion.
   - Safe examples should test state capture, gate behavior, false positives, false negatives, rollback, retention, redaction, and failure modes before this becomes a playbook or law.
8. Separate operational observability from operational mutation.
   - Asset health, lineage, alert, monitor, incident, and metadata state can be useful review surfaces.
   - Creating monitors, tuning alerts, importing YAML, querying live workspaces, instrumenting agents, or changing connector auth are activation surfaces.
9. Separate gateway observability from gateway trust.
   - Tracing, catalog metadata, cache/federation state, admin UI flags, plugin lists, and deployment hardening are control-plane state.
   - They do not prove upstream tool authorization, tenant isolation, catalog safety, or production readiness.

## Initial Scope

- Source-level review of observability and containment control-plane packages.
- Incubator synthesis only.
- Not an install guide.
- Not a runtime adapter.
- Not a claim that telemetry is complete, evals are valid, policies are safe, containers isolate correctly, or dashboards can be trusted.

## Known Failure Modes

- Observability laundering: traces, dashboards, metrics, scores, or captures are treated as proof that the system is correct.
- Eval laundering: judge scores, datasets, labels, or benchmarks are treated as independent validation without replay and negative cases.
- Containment laundering: containers, policy engines, network filters, or bind mounts are treated as security proof without exercising enforcement and escape cases.
- Control-plane creep: a local UI, dashboard, MCP observer, or stats endpoint becomes permission to start services, forward credentials, open accounts, or mutate config.
- Capture authority creep: packet, network, API, or tool-call capture is treated as harmless read-only work even when it touches clusters, secrets, private traffic, or production data.
- Credential forwarding creep: environment forwarding, config files, or cloud/local mode selection moves credentials into a control plane before owner review.
- Report laundering: RCA, security, eval, or health reports are treated as facts without preserving source scope, limitations, and non-claims.
- Flag theater: destructive-operation labels or policy warnings are present but not tested against actual unauthorized actions.
- Realtime theater: live trace, dashboard, or control UI claims are treated as prevention or correctness proof instead of a display surface that can lag, filter, redact poorly, or miss events.
- Undo-boundary laundering: host-application undo support is treated as rollback for all side effects even when asset downloads, memory writes, scans, installer actions, or filesystem writes persist outside the host document.
- Operational-observability laundering: data-quality, lineage, incident, or monitor surfaces are treated as harmless observation even when they can create monitors, import configuration, query live workspaces, or instrument running code.
- Gateway-observability laundering: protocol tracing, admin UI, plugin catalogs, or cache/federation metrics are treated as proof that upstream authority, tenant boundaries, and production deployment are safe.

## Verification Needed

- Replay on safe local examples for one telemetry package, one LLM observability/eval package, and one containment-policy package.
- Confirm which state is captured, where it is stored, when it is read, how long it is retained, and how it is redacted.
- Confirm which gates are enforced versus only described in docs.
- Test false positives and false negatives for policy, eval, and alert gates.
- Test rollback or stop behavior when telemetry, capture, policy compilation, or dashboard startup fails.
- Test whether replay can distinguish metadata-only trace review from ingestion, export, SQL query, dataset creation, redaction, realtime streaming, and report-generation actions.
- Test whether host-application control planes preserve undo boundaries and block or clearly label non-undoable side effects.
- Test whether data-observability packages distinguish read-only health review from monitor mutation, incident remediation, metadata ingestion, connector auth, and application instrumentation.
- Test whether gateway control planes distinguish catalog review, protocol translation, tracing, caching, admin UI, plugin execution, upstream invocation, tenant isolation, and disable/rollback behavior.
- Add negative eval cases where observability is mistaken for correctness, a container wrapper is mistaken for security proof, and a destructive flag is mistaken for real authorization control.

## Placement Candidates

- `incubator/`: current placement.
- `playbooks/`: only if a stable review workflow emerges after safe replay.
- `laws/surface-evidence-eval.md`: trace, score, benchmark, eval, and report promotion boundaries.
- `laws/surface-mcp-tools-auth.md`: MCP observers, tool policies, runtime outputs, and tool authority.
- `laws/surface-install-supply-chain.md`: container images, package installs, local services, and config mutation.
- `laws/surface-ci-devops.md`: cluster, network, dashboard, and operational telemetry boundaries.

## Promotion Questions

- Which control-plane surfaces are genuinely neutral method: state inventory, gate review, retention review, redaction review, or negative testing?
- What minimum replay evidence distinguishes useful telemetry from observability theater?
- What minimum replay evidence distinguishes containment architecture from security proof?
- Should this remain a supporting incubator note or become a productive control-plane review playbook?
