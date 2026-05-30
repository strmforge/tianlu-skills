# Trigger Routing

Use this table to decide which law files to read.

| Trigger | Primary | Companions | Fast Path |
| --- | --- | --- | --- |
| Agent delegation, handoff, parallel work, thread or worktree coordination | `../laws/surface-agent-orchestration.md` | `../laws/surface-evidence-eval.md` | Read-only discussion with no durable action |
| Role-based agent team, specialist agents, reviewer/implementer split | `../laws/surface-agent-orchestration.md` | `../index/conflict-map.md` | Role label used only as prose structure |
| New method, benchmark, claim, post, repo, or workflow idea | `../laws/surface-evidence-eval.md` | `../dao/scope-and-promotion.md` | One-off answer clearly marked unverified |
| Claim that a prompt, skill, memory, workflow, or route improved agent behavior | `../laws/surface-evidence-eval.md` | `../eval/test-prompts.md` | Anecdote kept as a note with no promotion |
| Installing or activating tools, skills, plugins, MCP servers, packages, extensions, persistent prompts, or config | `../laws/surface-install-supply-chain.md` | `../laws/surface-evidence-eval.md` | Read-only source review |
| Running package installs, setup scripts, bootstrappers, generated helpers, or dependency resolution | `../laws/surface-install-supply-chain.md` | `../index/conflict-map.md` | Static source review without execution |
