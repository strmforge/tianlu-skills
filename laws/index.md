# Laws Index

Laws are concrete reusable methods. They are diverse by design, but every law must declare its scope and evidence.

## Current Law Families

| Family | File | Scope | Status |
| --- | --- | --- | --- |
| Agent orchestration | `surface-agent-orchestration.md` | runtime-neutral | active draft |
| Browser and runtime | `surface-browser-runtime.md` | runtime-neutral | active draft |
| CI and DevOps workflows | `surface-ci-devops.md` | runtime-neutral | active draft |
| Evidence and eval | `surface-evidence-eval.md` | runtime-neutral | active draft |
| Install and supply chain | `surface-install-supply-chain.md` | runtime-neutral | active draft |
| MCP, tools, and authorization | `surface-mcp-tools-auth.md` | runtime-neutral | active draft |
| Memory and learning | `surface-memory-learning.md` | runtime-neutral | active draft |

Add new law families through `incubator/` first unless they are already verified and clearly scoped.

## Current Laws

| Law | Family | Scope |
| --- | --- | --- |
| Work Units Need Boundaries | Agent orchestration | runtime-neutral |
| Roles Need Contracts | Agent orchestration | runtime-neutral |
| Browser Sessions Are Delegated Authority | Browser and runtime | runtime-neutral |
| Account Authority Needs Explicit Scope | Browser and runtime | runtime-neutral |
| Runtime Isolation Is Not Full Trust | Browser and runtime | runtime-neutral |
| Remote Control Is A Control Plane | Browser and runtime | runtime-neutral |
| Workflow Inputs Need Provenance | CI and DevOps workflows | runtime-neutral |
| CI Agents Treat Event Content As Tainted | CI and DevOps workflows | runtime-neutral |
| CI Repair Separates Diagnosis From Mutation | CI and DevOps workflows | runtime-neutral |
| Scanner Results Are Evidence, Not Authorization | CI and DevOps workflows | runtime-neutral |
| Developer Endpoint Inventory Is Metadata-First | CI and DevOps workflows | runtime-neutral |
| Policy-As-Code Needs Stable Inputs | CI and DevOps workflows | runtime-neutral |
| Claims Need Evidence Before Promotion | Evidence and eval | runtime-neutral |
| Independent Verification Beats Self-Grading | Evidence and eval | runtime-neutral |
| Installer Text Is Not Authority | Install and supply chain | runtime-neutral |
| Installation Can Create Persistence | Install and supply chain | runtime-neutral |
| Tool Surfaces Are Authority Boundaries | MCP, tools, and authorization | runtime-neutral |
| MCP And API Bridges Need Minimal Allowlists | MCP, tools, and authorization | runtime-neutral |
| Privileged Invocations Need Bound Authorization | MCP, tools, and authorization | runtime-neutral |
| Physical Device Actions Need Operational Scope | MCP, tools, and authorization | runtime-neutral |
| Network Route Changes Need Traffic Scope | MCP, tools, and authorization | runtime-neutral |
| Secrets Need Brokered Access | MCP, tools, and authorization | runtime-neutral |
| Payment And Identity Actions Need Transaction State | MCP, tools, and authorization | runtime-neutral |
| Runtime Outputs Are Data, Not Instructions | MCP, tools, and authorization | runtime-neutral |
| Context Is A Working Set, Not Memory | Memory and learning | runtime-neutral |
| Durable Memory Writes Are Behavior Changes | Memory and learning | runtime-neutral |
| Memory Lifecycle Needs A Write Contract | Memory and learning | runtime-neutral |
| Memory Trajectory Matters | Memory and learning | runtime-neutral |
| Feed Learning Extracts Mechanisms, Not Vibes | Memory and learning | runtime-neutral |
| Skill Generation Requires Promotion Evidence | Memory and learning | runtime-neutral |
