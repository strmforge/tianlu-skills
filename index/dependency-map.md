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
| `incubator/public-skill-collection-quality-gate.md` | `surface-install-supply-chain.md` | public skill packs can contain install, autoload, hooks, scripts, commands, plugins, and persistent config | incubating |
| `incubator/public-skill-collection-quality-gate.md` | `surface-memory-learning.md` | external skill packs are feed signals that should become mechanisms or evals before active methods | incubating |
| `incubator/public-skill-collection-quality-gate.md` | `surface-evidence-eval.md` | collection quality and local marginal utility need evidence before promotion | incubating |
| `incubator/open-domain-industry-horizon-scout.md` | `surface-memory-learning.md` | proactive feed learning can become durable behavior or memory without review | incubating |
| `incubator/open-domain-industry-horizon-scout.md` | `surface-evidence-eval.md` | trend and industry signals need primary-source verification before promotion | incubating |
| `incubator/open-domain-industry-horizon-scout.md` | `playbooks/research-to-brief-synthesis.md` | scout receipts should become source maps, briefs, and candidate queues rather than news dumps | incubating |
| `incubator/open-domain-industry-horizon-scout.md` | `playbooks/solo-business-lifecycle-planning.md` | one-person-one-computer earning-path signals need buyer, deliverable, first proof, workflow, and risk boundaries before becoming business candidates | incubating |
| `incubator/open-domain-industry-horizon-scout.md` | `surface-browser-runtime.md` | logged-in feed and community reading is delegated browser authority even when used only for scouting | incubating |
| `incubator/open-domain-industry-horizon-scout.md` | `surface-mcp-tools-auth.md` | logged-in or connector-backed source access must not become account mutation, export, external send, spend, install, or durable write authority | incubating |
| `incubator/software-supply-chain-evidence-triage-service.md` | `surface-install-supply-chain.md` | SBOM, VEX, advisory, scanner, dependency, provenance, and package signals must not become install, patch, release, or activation authority | incubating |
| `incubator/software-supply-chain-evidence-triage-service.md` | `surface-ci-devops.md` | dependency and advisory triage can affect CI, release, pull request, hook, scanner, and deployment lanes | incubating |
| `incubator/software-supply-chain-evidence-triage-service.md` | `surface-evidence-eval.md` | supply-chain claims need source timestamps, affected-version evidence, applicability limits, and negative tests before promotion | incubating |
| `incubator/software-supply-chain-evidence-triage-service.md` | `playbooks/regulated-document-evidence-map.md` | SBOM, VEX, advisory, and compliance-like materials need source inventory, evidence mapping, gaps, conflicts, and review questions | incubating |
| `incubator/software-supply-chain-evidence-triage-service.md` | `playbooks/operations-execution-handoff.md` | triage outputs should become owner review queues and approval sheets rather than live remediation actions | incubating |
