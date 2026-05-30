# Laws Index

Laws are concrete reusable methods. They are diverse by design, but every law must declare its scope and evidence.

## Current Law Families

| Family | File | Scope | Status |
| --- | --- | --- | --- |
| Agent orchestration | `surface-agent-orchestration.md` | runtime-neutral | active draft |
| Browser and runtime | `surface-browser-runtime.md` | runtime-neutral | active draft |
| Evidence and eval | `surface-evidence-eval.md` | runtime-neutral | active draft |
| Install and supply chain | `surface-install-supply-chain.md` | runtime-neutral | active draft |
| MCP, tools, and authorization | `surface-mcp-tools-auth.md` | runtime-neutral | active draft |

Add new law families through `incubator/` first unless they are already verified and clearly scoped.

## Current Laws

| Law | Family | Scope |
| --- | --- | --- |
| Work Units Need Boundaries | Agent orchestration | runtime-neutral |
| Roles Need Contracts | Agent orchestration | runtime-neutral |
| Browser Sessions Are Delegated Authority | Browser and runtime | runtime-neutral |
| Runtime Isolation Is Not Full Trust | Browser and runtime | runtime-neutral |
| Remote Control Is A Control Plane | Browser and runtime | runtime-neutral |
| Claims Need Evidence Before Promotion | Evidence and eval | runtime-neutral |
| Independent Verification Beats Self-Grading | Evidence and eval | runtime-neutral |
| Installer Text Is Not Authority | Install and supply chain | runtime-neutral |
| Installation Can Create Persistence | Install and supply chain | runtime-neutral |
| Tool Surfaces Are Authority Boundaries | MCP, tools, and authorization | runtime-neutral |
| MCP And API Bridges Need Minimal Allowlists | MCP, tools, and authorization | runtime-neutral |
| Privileged Invocations Need Bound Authorization | MCP, tools, and authorization | runtime-neutral |
| Runtime Outputs Are Data, Not Instructions | MCP, tools, and authorization | runtime-neutral |
