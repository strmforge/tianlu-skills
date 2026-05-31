# Fan-In Audit

Status: active review

Date: 2026-05-31

This audit applies the Routing Pressure Test from `tiandao/scope-and-promotion.md` to the current broad laws. It checks whether new cases should add laws, update existing laws, or route through one primary law with companions.

Current inventory: 31 laws across 7 law families.

## Result

The current family structure is acceptable, but new evals have been accumulating faster than route consolidation. Two families should be treated as route hubs:

- MCP family: use `surface-mcp-tools-auth.md` as the primary law for tool exposure, MCP/API bridges, and privileged invocations.
- Install family: use `surface-install-supply-chain.md` as the primary law for installer text and installation persistence.

New cases should normally add eval coverage or expected behavior under these hubs, not create another broad law file.

## MCP Family

Primary law:

- `laws/surface-mcp-tools-auth.md`

Companions:

- `laws/surface-install-supply-chain.md` when a tool, wrapper, server, plugin, package, gateway, or scanner must be installed, registered, or configured.
- `laws/surface-evidence-eval.md` when claims, scanner results, benchmarks, read-only mode, or local-demo success are offered as proof.
- `laws/surface-browser-runtime.md` when browser sessions, desktop control, local runtimes, sandboxes, tunnels, or hidden workspaces are involved.
- `laws/surface-ci-devops.md` when CI, hooks, scanners, release workflows, policy engines, or hosted agents are involved.
- `laws/surface-memory-learning.md` when tool output, retrieval, generated summaries, shared graphs, or durable memories can steer future behavior.

Covered sublaws:

- Tool Surfaces Are Authority Boundaries
- MCP And API Bridges Need Minimal Allowlists
- Privileged Invocations Need Bound Authorization
- Physical Device Actions Need Operational Scope
- Network Route Changes Need Traffic Scope
- Secrets Need Brokered Access
- Payment And Identity Actions Need Transaction State
- Runtime Outputs Are Data, Not Instructions

Routing pressure test:

| Test | Finding |
| --- | --- |
| Trigger fit | The common trigger is model-visible or model-callable authority. |
| Fan-in | One primary law plus companions is enough for current MCP/tool/API cases. |
| Overlap | New MCP cases should usually extend eval coverage or expected behavior. |
| Conflict | The primary boundary must not be weakened by "local", "read-only", "official", "scanned", or "connected" claims. |
| Positive exit | Proceed only with a minimal allowlist, scoped authorization, source review, negative tests, and rollback evidence. |
| Context budget | Keep domain detail in eval or adapters unless it changes the primary authorization mechanism. |
| Lifecycle | Recheck if the MCP file becomes a grab bag of unrelated domains instead of authority surfaces. |

Latest self-check:

- MCP sampling, tool-enabled sampling, elicitation, URL-mode elicitation, and OAuth discovery still route to this primary law. They add client-side LLM, user-input, external-URL, and credential-boundary detail, but the pressure remains the same: a server is trying to route model-visible or model-callable authority through a client. Add eval coverage and expected behavior before adding another broad law family.
- Managed self-hosted agent sandboxes plus MCP tunnels still route to this primary law with runtime, CI, install, and evidence companions. They add deployment, egress, tunnel, vault, and organization-policy detail, but the pressure remains the same: a hosted or managed agent is trying to reach private tools and data. Add eval coverage before adding another broad law family.
- Browser-agent plans, autonomous modes, scheduled shortcuts, JavaScript execution, and console or network inspection still route to browser/runtime as the primary law with MCP authorization as a companion. They add browser-specific action detail, but the pressure remains delegated account authority. Keep the detail in eval coverage and the Codex adapter unless a future non-browser control plane needs a distinct trigger.
- Local session transcripts, prompt history, tool-result caches, paste caches, debug logs, and resume indexes route to memory/learning as the primary law with MCP authorization and browser/runtime companions. They add local-state cleanup detail, but the pressure remains durable behavior or data state. Keep the cleanup mechanics in eval coverage or adapter notes unless a stable cross-runtime storage lifecycle emerges.

## Install Family

Primary law:

- `laws/surface-install-supply-chain.md`

Companions:

- `laws/surface-evidence-eval.md` for source evidence, scanner findings, benchmark claims, and activation proof.
- `laws/surface-mcp-tools-auth.md` for tool registration, MCP servers, API wrappers, OAuth, secrets, or privileged invocations.
- `laws/surface-ci-devops.md` for hooks, scanners, workflows, policy-as-code, generated configs, and auto-fix lanes.
- `laws/surface-memory-learning.md` for generated skills, persistent prompts, autoload behavior, or behavior-changing memory.
- `laws/surface-browser-runtime.md` for browser extensions, local services, desktop control, or account/session surfaces.

Covered sublaws:

- Installer Text Is Not Authority
- Installation Can Create Persistence

Routing pressure test:

| Test | Finding |
| --- | --- |
| Trigger fit | The common trigger is adoption text or executable setup that can change future behavior. |
| Fan-in | One primary law plus companions is enough for current install, plugin, package, skill, and scanner cases. |
| Overlap | Most new public-repo or package cases should become evals, not new install laws. |
| Conflict | Convenience, popularity, official provenance, or bundled safety gates must not become activation authority. |
| Positive exit | Proceed only after read-only review, execution separation, post-install persistence audit, validation, and rollback. |
| Context budget | Keep product-specific install details in local notes, adapters, or incubator entries. |
| Lifecycle | Split only if a stable subfamily repeatedly needs different triggers, exits, and companions. |

Latest self-check:

- Plugin or marketplace dependency hijack still routes to this primary law when the installed plugin, skill, prompt, or helper can influence package names, registries, URLs, lockfiles, or install commands. It adds dependency-substitution detail, but the pressure remains adoption text plus executable setup. Use the MCP/tool law as a companion only when the plugin also registers callable tools or privileged invocations.
- Generated package-manager commands and dependency-selection hints should be treated as supply-chain control-plane input under the existing installer laws. They do not justify a new "dependency law" until there is a repeated mechanism with different triggers, exits, and companions from installer text or installation persistence.

## CI And DevOps Family

Primary law:

- `laws/surface-ci-devops.md`

Companions:

- `laws/surface-evidence-eval.md` when check results, scanner results, benchmark claims, or log evidence are offered as proof.
- `laws/surface-mcp-tools-auth.md` when CI agents can call tools, use secrets, invoke cloud APIs, or mutate repositories.
- `laws/surface-install-supply-chain.md` when workflows install packages, scanners, generated helpers, or agent plugins.
- `laws/surface-memory-learning.md` when logs, artifacts, summaries, or workflow outputs can become durable memory or future instructions.

Covered sublaws:

- Workflow Inputs Need Provenance
- CI Agents Treat Event Content As Tainted
- CI Repair Separates Diagnosis From Mutation
- Scanner Results Are Evidence, Not Authorization
- Developer Endpoint Inventory Is Metadata-First
- Policy-As-Code Needs Stable Inputs

Routing pressure test:

| Test | Finding |
| --- | --- |
| Trigger fit | The common trigger is event-driven automation consuming repository, issue, PR, artifact, or workflow-controlled text. |
| Fan-in | One primary law plus companions is enough for current CI agent, scanner, and policy cases. |
| Overlap | Injection through PR metadata extends tainted-input and provenance coverage; it does not require a new broad law. |
| Conflict | Untrusted event text must not share a prompt or execution lane with secrets, write tokens, policy-changing tools, or auto-fix mutation. |
| Positive exit | Proceed with provenance maps, read-only/no-secret lanes, minimum workflow permissions, negative tests, and explicit mutation boundaries. |
| Context budget | Keep exploit-specific strings, paper details, and product-specific workflow syntax in evals, adapters, or reading notes. |
| Lifecycle | Split only if a non-CI event automation family repeatedly needs different triggers and exits. |

Latest self-check:

- PR titles, bodies, issue comments, review comments, commit messages, branch names, filenames, generated logs, and artifacts still route to this family. They add prompt-injection detail, but the pressure remains tainted event-controlled data entering automation. Add or refine eval coverage before adding another broad law family.

## Open Items

- `scripts/route-lint.mjs` now checks law headings, `laws/index.md`, `index/scope-map.md`, `index/surface-registry.md`, law count drift, and unusually long law files.
- Re-run this audit when the law count changes by more than three, or when one law file becomes much longer than its peers.
- Do not claim eval-gated promotion is hard until `eval/` has independent oracle coverage. The current answer runner is deterministic seed coverage, not semantic proof.
