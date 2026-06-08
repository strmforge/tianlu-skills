# AI Company Benchmark Readiness Review

Status: incubating

Scope: runtime-neutral review method

## Signal

AI one-person company, AI CEO, AI employee, autonomous business, and agent-company products increasingly present a company-like operating layer: founder goals, specialist agents, task cards, KPI loops, support drafts, campaign plans, finance notes, code work, and launch workflows.

Recent source signals included public posts about Tycoon-style one-person company operating systems, OneManCompany-style agent company repositories, solo-founder agent workflows, and agent failures. Public posts are only L0 signal. The stronger sources are benchmarks, simulations, repositories, product docs, and papers that expose how agent work is tested or claimed.

This candidate is not a claim that AI companies are ready to operate autonomously. It is a review method for separating evidence about work capability from business execution authority.

## Source Evidence

- TheAgentCompany public repository and arXiv paper describe an extensible benchmark for agents acting like digital workers in a simulated software company. The environment includes internal sites and data, professional task roles, web browsing, coding, program execution, and coworker communication. The paper reports partial autonomous completion and states that harder long-horizon tasks remain beyond current systems. Sources: `https://github.com/TheAgentCompany/TheAgentCompany`, `https://arxiv.org/abs/2412.14161`.
- Microsoft Magentic Marketplace is a simulated two-sided agentic market where customer agents and business or service agents interact through a marketplace protocol. Microsoft Research reports market-scale failure modes such as scale degradation, first-proposal or speed bias, manipulation exposure, and dependence on search quality. Sources: `https://www.microsoft.com/en-us/research/publication/magentic-marketplace-an-open-source-environment-for-studying-agentic-markets/`, `https://github.com/microsoft/multi-agent-marketplace`, `https://microsoft.github.io/multi-agent-marketplace/concepts/overview.html`.
- OpenAI GDPval measures model performance on economically valuable, real-world knowledge-work deliverables across occupations. Its limitations note that the first version is one-shot and does not capture building context, iterative revision, ambiguity navigation, or workplace integration. Sources: `https://openai.com/index/gdpval/`, `https://cdn.openai.com/pdf/d5eb7428-c4e9-4a33-bd86-86dd4bcf12ce/GDPval.pdf`.
- Microsoft AgentRx studies failed agent execution trajectories by identifying the critical failure step, evidence for the violation, failure category, and repair direction. Its public materials are useful for failure-receipt design, not for claiming production safety or business readiness. Sources: `https://www.microsoft.com/en-us/research/blog/systematic-debugging-for-ai-agents-introducing-the-agentrx-framework/`, `https://github.com/microsoft/AgentRx`, `https://arxiv.org/abs/2602.02475`, `https://huggingface.co/datasets/microsoft/AgentRx`.
- Tycoon, HeyBoss, and OneManCompany-style sources use AI CEO, AI employees, one-person company OS, agent market, launch workflow, KPI loop, and all-AI team language. These are useful product-category samples, not authority claims. Sources: `https://tycoon.us/`, `https://github.com/1mancompany/OneManCompany`, `https://heyboss.ai/about`, `https://heyboss.ai/blog/heyboss-ai-seed-funding-openai-startup-fund`.
- YC-Bench studies long-horizon startup-like operation in simulated business settings. It is useful for evidence fields such as seed, task horizon, cash-flow model, customer or adversarial-client behavior, staffing, memory or scratchpad use, and bankruptcy or failure modes. It is not proof that a model or agent-company runtime can run a real company. Sources: `https://arxiv.org/abs/2604.01212`, `https://collinear-ai.github.io/yc-bench/`, `https://github.com/collinear-ai/yc-bench`.
- Anthropic Project Vend and Vending-Bench provide cautionary long-horizon business-operation evidence: AI CEO or manager labels, procedure changes, and better tools can improve some behaviors while still leaving pricing, refund, customer, memory, schedule, and legal or manipulation risks unresolved. Sources: `https://www.anthropic.com/research/project-vend-1?c=braziljs`, `https://red.anthropic.com/2025/project-vend-2/`, `https://arxiv.org/abs/2502.15840`.
- OneManCompany issue and release evidence should be read as runtime failure receipts and maintenance signals. Duplicate-product reports, lost entity ids, idempotency gaps, weak progress logging, provider-configuration errors, or onboarding fixes show surfaces to review; they do not prove execution readiness. Sources: `https://github.com/1mancompany/OneManCompany/issues/395`, `https://github.com/1mancompany/OneManCompany/issues`, `https://github.com/1mancompany/OneManCompany/releases`.
- No install, clone, benchmark run, account connection, payment setup, ad launch, customer send, production deploy, workspace import, or agent activation was performed during review.

## Failure Receipt Queue

Round456 added a small primary-source queue for future replay fixtures. These are receipts to sample and redact before any promotion decision, not new authority:

- `project-vend-phase-1-identity-payment-memory`: Anthropic Project Vend phase one reports a small-shop experiment where payment handling, discounting, identity behavior, and memory limits remained material risk surfaces. Source: `https://www.anthropic.com/research/project-vend-1`.
- `project-vend-phase-2-tools-do-not-remove-business-risk`: Anthropic Project Vend phase two adds procedures, reminders, CRM, payment links, and role framing, but still leaves pricing, manipulation, role calibration, customer, and operational fragility to review. Source: `https://red.anthropic.com/2025/project-vend-2/`.
- `vending-bench-long-horizon-meltdown-loop`: Andon Labs Vending-Bench exposes long-horizon business-operation failures such as meltdown loops, inventory or arrival-state confusion, persistent execution after attempted stop, and cost or escalation anomalies. Sources: `https://andonlabs.com/evals/vending-bench`, `https://arxiv.org/abs/2502.15840`.
- `yc-bench-startup-simulation-scratchpad-cashflow`: YC-Bench gives a one-year simulated startup setting with scratchpad memory, adversarial or demanding clients, staffing or parallelization choices, and bankruptcy or cash-flow outcomes. Sources: `https://github.com/collinear-ai/yc-bench`, `https://arxiv.org/abs/2604.01212`.
- `magentic-marketplace-agentic-market-bias-manipulation`: Microsoft Magentic Marketplace gives marketplace evidence for customer and business agents, search and proposal dynamics, manipulation resistance, first-proposal or speed bias, position bias, and transaction-like coordination risks. Sources: `https://www.microsoft.com/en-us/research/publication/magentic-marketplace-an-open-source-environment-for-studying-agentic-markets/`, `https://github.com/microsoft/multi-agent-marketplace`.
- `agentrx-failed-trajectory-taxonomy`: Microsoft AgentRx is useful as a failure-receipt schema source for critical failure step, evidence, violated constraint, category, repair direction, and inconclusive cases. It is not business-readiness evidence by itself. Sources: `https://www.microsoft.com/en-us/research/blog/systematic-debugging-for-ai-agents-introducing-the-agentrx-framework/`, `https://github.com/microsoft/AgentRx`.
- `onemancompany-395-duplicate-product-idempotency`: OneManCompany issue 395 reports downstream agent re-running `create_product_tool` and creating duplicate products with separate ids. Treat this as a runtime state, stable entity id, ownership routing, duplicate-write, and idempotency failure receipt. Source: `https://github.com/1mancompany/OneManCompany/issues/395`.

Receipt schema for future fixtures:

- Bind source url, source type, date checked, benchmark or issue id, version or commit where available, seed or run id where available, task horizon, role labels, allowed tools, memory channel, staffing or delegation policy, customer or adversarial input, stable entity id, idempotency key or duplicate-write evidence, liveness or progress logging evidence, provider or account configuration, critical failure step, unresolved missing evidence, no-extrapolation boundary, and owner handoff.
- Preserve the hard boundary: a benchmark score, simulated profit, issue fix, stable entity id patch, idempotency patch, progress log, provider configuration fix, manual QA, or approval worksheet does not authorize customer sends, product creation, refunds, ad spend, payment setup, invoice issuance, credential binding, production deploys, CRM, support, seller, ecommerce, finance, accounting, system-of-record writes, sensitive-data retention, or business-readiness claims.

## Proposed Trigger

Use this candidate when a source, product, repo, benchmark, paper, or user request claims or implies that:

- an AI CEO or AI employees can run a one-person company;
- a benchmark proves digital workers can replace business functions;
- an agent-company repo, demo, operating system, or marketplace can be adopted as a business runtime;
- a simulated company, occupational benchmark, or agentic marketplace result should justify autonomous customer, payment, finance, support, marketing, production, legal, tax, or system-of-record actions;
- an agent workforce should be promoted because it has roles such as CEO, CFO, CMO, developer, designer, support, legal, or operations.

## Proposed Mechanism

Before treating an AI company or digital-employee claim as reusable method evidence:

1. Classify the source.
   - Separate X posts, product pages, open-source repos, paper benchmarks, official docs, case studies, failure receipts, and local replay results.
2. Bind the evaluation scope.
   - Record task distribution, benchmark version, environment, allowed tools, external systems, data sources, role definitions, human involvement, scoring method, grader type, failure modes, and reproducibility.
3. Separate role labels from work contracts.
   - Treat labels like AI CEO, AI CFO, AI employee, specialist agent, and autonomous business agent as role names until they have inputs, outputs, tools, permissions, validation, owner, handoff, and rollback.
4. Separate task capability from company readiness.
   - A benchmark score, simulated task completion, demo, launch page, task board, KPI loop, or repo does not prove customer-send, payment, spend, finance, legal, tax, compliance, production, credential, account-write, or retention readiness.
5. Look for negative evidence.
   - Prefer failure receipts, issue threads, evaluation errors, long-horizon misses, process violations, simulator artifacts, scaling failures, manipulation or bias findings, and human-review requirements.
6. Capture failure receipts before replay or promotion.
   - For AgentRx-style trajectories, record the critical failure step, evidence, violated constraint, category, repair hint, and boundary.
   - Allow an `inconclusive` or unresolved category when the trace is not sufficient. Do not let an LLM judge, taxonomy label, or dataset schema replace environment evidence or human review.
   - If raw traces are gated, sensitive, unavailable, or only partly reviewed, record only the accessible schema and source pointer until scoped review allows redacted replay fixtures.
   - For AI-company runtimes, also record stable entity ids, idempotency keys, ownership routing, duplicate-write detection, state persistence, liveness or progress logs, provider or account configuration, and rollback path.
7. Compose existing Tianlu methods before adding new structure.
   - Use solo-business lifecycle planning for business framing, operations execution handoff for last-mile action packets, agent orchestration laws for role contracts, MCP/tools authority laws for write surfaces, and evidence/eval laws for benchmark claims.
8. Keep adoption read-only until gates pass.
   - Do not install repos, connect accounts, import workspaces, create persistent agents, run company runtimes, add credentials, or activate generated roles without scoped approval and review.

## Initial Scope

- Incubating review method for AI one-person company, AI CEO, AI workforce, agent-company benchmark, and autonomous-business claims.
- Useful for candidate routing, evidence triage, replay design, and no-update decisions.
- Not a neutral law, not an active playbook, not an endorsement of any product, benchmark, repo, or agent-company architecture.

## Known Failure Modes

- Product-category language is treated as proof that a company can run itself.
- A benchmark score is treated as job replacement, business execution, or production readiness evidence.
- A simulated marketplace result is treated as proof of real customer trust, regulatory compliance, fair dealing, or payment safety.
- Role theater creates AI CEOs, CFOs, CMOs, legal agents, and operators without distinct tool boundaries, validation, or owner contracts.
- A repo or demo is installed because it is aligned with the one-person company direction.
- A task board, KPI plan, founder approval worksheet, or launch packet becomes authority to publish, spend, invoice, refund, send customer messages, change prices, deploy, or write systems of record.
- Benchmark limitations, failed tasks, grader type, simulator artifacts, and human oversight needs are omitted from the candidate packet.
- A failure taxonomy, LLM judge report, or failed-trajectory dataset is treated as a universal capability, safety, or readiness conclusion rather than scoped diagnostic evidence.
- Long-horizon business simulation results, Project Vend-style case studies, or startup leaderboards are treated as authority to operate real customer, payment, finance, support, seller, ecommerce, or production systems.
- Agent-company runtimes lose stable entity ids, rerun create tools, duplicate products or records, hide liveness failures, or conflate provider configuration with business readiness.

## Verification Needed

- Replay at least three contrasting cases:
  - a product-page AI CEO or AI employee claim;
  - a benchmark or paper claim about digital-worker task completion;
  - a failure receipt, issue, or simulation result showing long-horizon, scaling, manipulation, or process failure.
- Turn at least one AgentRx-style failed trajectory into a redacted receipt with critical failure step, evidence, violated constraint, category or inconclusive label, repair hint, and no-extrapolation boundary before considering any further eval fixture.
- Turn at least one YC-Bench, Project Vend, Vending-Bench, or OneManCompany issue into a redacted failure receipt that includes seed or run id where available, horizon, role labels, memory channel, staffing or delegation policy, adversarial or customer input, stable entity id, idempotency evidence, and no-extrapolation boundary.
- Confirm whether the review adds behavior beyond existing `ai-one-person-company-os-is-not-business-execution-customer-send-payment-or-account-write-authority` and `agent-benchmark-score-is-not-task-competence-or-process-compliance` eval cases.
- Test whether the review prevents over-promotion while still preserving useful source signals for solo-business planning.
- Decide later whether this should stay incubating, become a narrow eval, or be folded into existing evidence and agent orchestration surfaces.

## Placement Candidates

- `laws/surface-evidence-eval.md`: benchmark scope, task distribution, scoring, reproducibility, limitations, and promotion boundaries.
- `laws/surface-agent-orchestration.md`: role contracts, work-unit boundaries, handoff, shared state, and merge ownership.
- `laws/surface-mcp-tools-auth.md`: customer-send, payment, spend, credential, account-write, production, and system-of-record authority.
- `playbooks/solo-business-lifecycle-planning.md`: business-stage framing, demand evidence, manual MVP, first customers, pricing, marketing readiness, and review.
- `playbooks/operations-execution-handoff.md`: execution queue, approval points, rollback, and action receipts.
- Existing eval cases:
  - `ai-one-person-company-os-is-not-business-execution-customer-send-payment-or-account-write-authority`
  - `agent-benchmark-score-is-not-task-competence-or-process-compliance`
  - `handoff-is-not-privileged-tool-or-context-forwarding-authority`

## Promotion Questions

- Does this candidate add a distinct review surface beyond existing AI one-person company and benchmark evals?
- Can it be expressed as a compact expected-behavior paragraph or narrow replay case instead of a new playbook?
- Which source types reliably change future behavior: benchmark papers, product docs, GitHub issues, failure receipts, or local replays?
- Can this review preserve useful AI-company operating patterns without laundering execution authority into broad law?
