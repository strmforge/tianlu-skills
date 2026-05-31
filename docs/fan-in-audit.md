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

## Open Items

- `scripts/route-lint.mjs` now checks law headings, `laws/index.md`, `index/scope-map.md`, `index/surface-registry.md`, law count drift, and unusually long law files.
- Re-run this audit when the law count changes by more than three, or when one law file becomes much longer than its peers.
- Do not claim eval-gated promotion is hard until `eval/` has independent oracle coverage. The current answer runner is deterministic seed coverage, not semantic proof.
