# Dependency Map

Track cross-law dependencies here before splitting or moving law files.

| Source | Depends On | Relationship | Status |
| --- | --- | --- | --- |
| `surface-agent-orchestration.md` | `surface-evidence-eval.md` | done evidence and validation | seed |
| `surface-install-supply-chain.md` | `surface-evidence-eval.md` | source evidence before activation | seed |
| `surface-agent-orchestration.md` | `index/conflict-map.md` | role and shared-state conflicts need resolution | seed |
| `surface-evidence-eval.md` | `eval/test-prompts.md` | promotion claims need replay cases | seed |
| `surface-install-supply-chain.md` | `index/scope-map.md` | installer scope must be explicit before activation | seed |
| `surface-browser-runtime.md` | `surface-mcp-tools-auth.md` | browser helpers, DevTools ports, and remote control can become tool authority | seed |
| `surface-browser-runtime.md` | `surface-evidence-eval.md` | browser and runtime receipts need evidence handling | seed |
| `surface-browser-runtime.md` | `index/conflict-map.md` | account authority can conflict with low-risk fast paths and wrong-principal risk | seed |
| `surface-mcp-tools-auth.md` | `surface-install-supply-chain.md` | MCP/API wrappers and generated tools are install/config supply chains | seed |
| `surface-mcp-tools-auth.md` | `surface-evidence-eval.md` | privileged invocations and tool exposure need negative tests and receipts | seed |
| `surface-mcp-tools-auth.md` | `surface-ci-devops.md` | CI jobs and hosted runtimes often receive secrets, tokens, and production credentials | seed |
| `surface-ci-devops.md` | `surface-mcp-tools-auth.md` | CI agents, bots, and workflow connectors may expose privileged tools or delegated identity | seed |
| `surface-ci-devops.md` | `surface-evidence-eval.md` | workflow provenance, scanner findings, repair claims, and policy promotion need evidence and negative tests | seed |
| `surface-ci-devops.md` | `surface-install-supply-chain.md` | scanners, hooks, workflow helpers, endpoint inventory tools, and policy engines are adoption surfaces | seed |
| `surface-ci-devops.md` | `index/conflict-map.md` | repair loops and policy-as-code can conflict with fast paths or over-gate routine work | seed |
| `surface-memory-learning.md` | `surface-evidence-eval.md` | memory promotion, feed learning, and skill generation need source evidence and eval cases | seed |
| `surface-memory-learning.md` | `surface-mcp-tools-auth.md` | memory can steer tools, connectors, providers, permission lanes, and agent roles | seed |
| `surface-memory-learning.md` | `surface-install-supply-chain.md` | generated skills, memory services, and automatic writers are install/config adoption surfaces | seed |
| `surface-memory-learning.md` | `surface-agent-orchestration.md` | handoff and compaction depend on durable state, verified checkpoints, and scoped recall | seed |
