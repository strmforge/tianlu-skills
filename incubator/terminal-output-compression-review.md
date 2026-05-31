# Terminal Output Compression Review

Status: incubating

Scope: runtime-neutral review method

## Signal

AI coding agents can waste large amounts of context on noisy terminal output: verbose tests, broad searches, large diffs, long logs, stack traces, directory listings, build output, and container or service logs.

A local compression layer can execute a noisy command, keep the raw output locally, and return a compact summary with an evidence pointer. This can reduce context cost, but it also changes what the agent sees and may introduce hooks, config patches, command routing rules, retained logs, or summary errors.

## Source Evidence

- X signal observed on 2026-05-31: one thread described a local output-compression layer for AI coding CLIs, and another Chinese thread described coding agents connected to Humio/APM needing local skills or MCP-layer log-output compression to avoid token-expensive log loops.
- Primary source reviewed read-only: `stephenywilson/xit` public GitHub repository.
- Observed repository shape at review time: Go CLI source, npm packaging directory, runtime-specific docs, `AGENTS.md`, `CLAUDE.md`, privacy docs, release notes, and local adapter docs.
- Observed README workflow shape:
  - wrap noisy commands with a local command such as `auto`;
  - write full raw output to a local run log;
  - return a short summary to the agent;
  - report exit code, reduction estimate, saved-token estimate, raw-log path, and key facts.
- Observed local-state and adapter shape:
  - raw command output can be stored under a local runs directory;
  - compression history can be stored in a local JSONL file;
  - runtime-specific instruction files can ask agents to wrap high-noise commands and avoid pasting raw output;
  - some runtime adapters can use observe hooks to record command classification or hit rate;
  - the reviewed Codex adapter described project-scope hook observation, no reroute or deny mode, no global hook, and no modification of user-level runtime config.
- npm package pages for the related packages were not verified during this review because they returned a security verification page.
- No install, clone, package execution, command wrapping, hook registration, runtime config edit, log scan, or local file inspection was performed during review.

This file records the method shape and review requirements. It is not an endorsement of any implementation and does not recommend installing or running a compression layer.

## Proposed Trigger

Use this candidate when an agent, repository, skill, hook, MCP server, wrapper, shell helper, or user request proposes to:

- compress, summarize, filter, truncate, classify, or rewrite terminal output before the agent sees it;
- wrap high-noise commands such as verbose tests, broad search, large diffs, build logs, container logs, APM logs, traces, or stack traces;
- keep raw output locally while sending only a summary to the model;
- install runtime rules that require noisy commands to be wrapped;
- register shell hooks, pre-tool hooks, observe hooks, reroute hooks, deny hooks, status lines, or command classifiers;
- estimate saved tokens, compression ratios, hit rate, or context savings from command output.

## Proposed Mechanism

Before adopting or relying on terminal-output compression:

1. Keep the first pass read-only.
   - Review source, package metadata, install path, scripts, hook docs, runtime config targets, log paths, retention, and rollback before execution.
2. Treat the compressed summary as a view, not the evidence.
   - Preserve the raw output path, command, exit code, timestamp, compression method, truncation markers, and failure markers.
3. Classify command risk before wrapping.
   - Separate read-only noisy commands from commands that mutate dependencies, files, services, infrastructure, accounts, or production state.
4. Review raw-log storage.
   - Record path, project scope, retention, cleanup, access controls, redaction, ignore rules, and whether raw logs may include secrets, credentials, account data, private source, or regulated data.
5. Review summary fidelity.
   - Check whether the summary keeps failures, exit status, first failing test, stack root cause, changed files, warnings, and enough context to reproduce.
6. Review failure behavior.
   - Decide whether filter errors fail open, fail closed, pass through raw output, or drop output. Record how the agent can detect summary failure.
7. Review hook and routing modes separately.
   - Observe-only hooks, status displays, reroute hooks, deny hooks, command rewriting, and global shell aliases have different authority and must be promoted separately.
8. Keep installation out of active paths until reviewed.
   - Generated instruction files, hook configs, shell aliases, project config, user config, and global package installs all need preview diffs and rollback.
9. Measure both recall and precision.
   - Track high-noise commands missed by the wrapper and low-noise commands incorrectly wrapped.
10. Do not let savings authorize mutation.
    - Context savings, token savings, local-only claims, and raw-log retention do not authorize installs, config changes, account actions, commits, dependency changes, or deleting evidence.

## Initial Scope

- Candidate review method for terminal-output compression layers and runtime-output summarizers.
- Applies to local wrappers, hooks, MCP-layer log compressors, APM/log adapters, and shell-output filters.
- Not a recommendation to install a wrapper, enable hooks, or compress every command.
- Broader observability tools with dashboards, MCP servers, provider proxies, session-log parsing, and cost analytics should also route through the existing AI coding observability eval and relevant control-plane laws.

## Known Failure Modes

- The compressed summary drops the only clue needed to debug the failure.
- A successful-looking summary hides a nonzero exit code, failed assertion, warning, flaky test, or traceback.
- A raw log contains secrets, tokens, private file paths, account data, source code, or production logs and is later pasted into chat or committed.
- A hook changes from observe mode to reroute or deny mode without separate approval.
- A global alias or instruction file wraps mutating commands and obscures side effects.
- Compression hides prompt-injection-like text from logs without preserving a safe review path.
- Token-savings estimates are treated as exact tokenizer evidence.
- The agent deletes or ignores raw logs because a summary looks sufficient.
- A local-only claim is mistaken for permission to scan broad logs, APM traces, session files, or production output.
- A command wrapper becomes a generic habit even when structured JSON, narrow grep, or direct short output would be safer.

## Verification Needed

- Confirm repository commit, license, package provenance, release artifacts, and install scripts.
- Confirm exact raw-log path, history path, hook-event path, retention behavior, cleanup command, and gitignore guidance.
- Confirm whether any raw logs, summaries, metrics, or events leave the machine.
- Confirm runtime config targets, hook scope, hook matcher, hook command, timeout, stdout behavior, and rollback.
- Confirm whether hooks are observe-only, reroute, deny, command-rewriting, or status-only.
- Confirm command-classification rules for noisy versus short commands and mutating versus read-only commands.
- Test summary fidelity on passing tests, failing tests, long stack traces, broad searches, large diffs, and logs with secrets or prompt-like text.
- Test filter-error behavior and whether raw output is preserved.
- Test false negatives and false positives for wrapper routing.
- Confirm that compressed summaries never become permission to mutate, delete, install, commit, push, or change accounts.

## Placement Candidates

- `laws/surface-mcp-tools-auth.md`: runtime output is data, not instructions; tool wrappers and hooks are authority boundaries.
- `laws/surface-install-supply-chain.md`: package install, generated instruction files, hooks, aliases, config patches, rollback.
- `laws/surface-memory-learning.md`: context budget, summaries, raw evidence pointers, durable behavior change.
- `laws/surface-ci-devops.md`: logs and test output as tainted diagnostic evidence.
- `laws/surface-evidence-eval.md`: summary fidelity, raw evidence, replay and failure evidence.
- `index/conflict-map.md`: context retention versus context flooding; scanner/output evidence versus authority.
- `eval/test-prompts.md`: terminal-output compression adoption cases.

## Promotion Questions

- Do multiple independent implementations show the same compression, evidence, and hook surfaces?
- Can the review be compact enough to help without encouraging every command to be wrapped?
- Can eval cases catch hidden failures, secret-bearing logs, hook mode escalation, and summary-as-authority mistakes?
- Does this candidate belong as its own law, or as a narrower companion under runtime output and memory/context-budget laws?
