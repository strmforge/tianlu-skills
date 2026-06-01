# Surface Registry

The registry lists method families and where to read them.

| Surface | Primary Law File | Scope | Notes |
| --- | --- | --- | --- |
| Agent orchestration | `../laws/surface-agent-orchestration.md` | runtime-neutral | Delegation, handoff, parallel work, shared state, task packets |
| Browser and runtime | `../laws/surface-browser-runtime.md` | runtime-neutral | Browser sessions, account authority, runtime receipts, remote control |
| CI and DevOps workflows | `../laws/surface-ci-devops.md` | runtime-neutral | Workflow input provenance, tainted CI content, repair lanes, scanner evidence, endpoint inventory, policy-as-code |
| Evidence and eval | `../laws/surface-evidence-eval.md` | runtime-neutral | Source evidence, independent verification, replay, validation, promotion |
| Install and supply chain | `../laws/surface-install-supply-chain.md` | runtime-neutral | Tool, skill, plugin, package, MCP adoption, installer persistence |
| MCP, tools, and authorization | `../laws/surface-mcp-tools-auth.md` | runtime-neutral | Tool exposure, MCP/API bridges, bound authorization, secret brokering, payment/identity state, runtime output injection |
| Memory and learning | `../laws/surface-memory-learning.md` | runtime-neutral | Context working sets, durable memory writes, memory lifecycle, trajectory, feed learning, skill generation |

For productive method cards, see [Playbook Registry](playbook-registry.md). Playbooks are routed by desired output first, then supported by laws when a method touches authority, evidence, privacy, install, account, money, publication, or durable-write surfaces.
