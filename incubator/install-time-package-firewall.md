# Install-Time Package Firewall

Status: incubating

## Signal

Package-manager operations are a high-risk path for agents because install commands can fetch untrusted code, run lifecycle scripts, update lockfiles, and expose local credentials before a human review sees the result.

External scanner output or MCP feedback is useful evidence, but it is not an enforcement point by itself. A stronger method places checks in the package-manager path before downloaded package code can execute.

## Source Evidence

- X signal observed on 2026-05-30: an MCP security discussion pointed to package-manager-path enforcement as stronger than agent-facing feedback.
- Primary source reviewed: `safedep/pmg` GitHub repository and docs.
- Repository claims reviewed:
  - package installs can be intercepted through package-manager wrappers and proxy mode;
  - threat intelligence can block known malicious packages before install;
  - dependency cooldown can filter recently published package versions during metadata resolution;
  - optional sandboxing can run install commands under OS-native restrictions;
  - install events can be logged for later review.

This file records the method shape, not an endorsement of one implementation.

## Proposed Trigger

Use this candidate when an agent, CI worker, setup script, skill, plugin, MCP bundle, project template, or repo instruction may run package-manager commands such as:

- `npm install`, `npm exec`, `npx`, `pnpm`, `pnpx`, `yarn`, or `bun`;
- `pip install`, `uv`, or `poetry`;
- generated setup commands from READMEs, posts, models, installers, or project-local instructions.

## Proposed Mechanism

Before allowing package-manager execution in agent workflows, consider a firewall layer with:

1. Interception: package-manager commands pass through a controlled wrapper, proxy, or policy hook.
2. Known-bad blocking: packages are checked against a trusted malicious-package signal before install code runs.
3. Fresh-release cooling: newly published versions are filtered or delayed when older acceptable versions satisfy the request.
4. Sandboxed install execution: install commands run with least-privilege filesystem access, credential-file denies, and restricted persistence paths.
5. Event record: every install records command, package manager, resolved package/version, decision, policy, and bypass state.
6. Bypass review: direct tarballs, lockfile-resolved URLs, local cache hits, manual binary downloads, lifecycle scripts, global installs, shell aliases, and package-manager plugins are explicitly reviewed.

## Initial Scope

- Runtime-neutral supply-chain method.
- Candidate placement: `laws/surface-install-supply-chain.md` after validation.
- Related surfaces: CI agents, tool adoption, generated setup scripts, skill/plugin install, browser/download-assisted setup.

## Known Failure Modes

- Wrapper coverage is incomplete, so the agent can still invoke the original package manager or another manager path.
- Proxy or metadata filtering does not apply to direct tarball URLs, pre-resolved lockfiles, local caches, vendored packages, or manual binary downloads.
- Cooldown may fail open for package-manager clients that do not expose publish timestamps.
- Threat intelligence is stale, unavailable, vendor-dependent, or too coarse.
- Sandbox is optional, unsupported on the host, disabled by config, or weaker than assumed.
- Sandbox policy blocks legitimate install behavior and encourages broad bypasses.
- Environment variables or CLI flags can override policy unless managed configuration prevents it.
- Install logs contain sensitive paths, package names, or internal project details and need retention/redaction rules.
- The firewall tool itself becomes a trusted control-plane dependency and needs provenance, update, rollback, and tamper review.

## Verification Needed

- Confirm which package managers and subcommands are actually intercepted.
- Confirm whether sandboxing is enabled by default or requires opt-in configuration.
- Confirm mandatory deny rules for credential files, hook directories, and config writes.
- Confirm how bypass flags, environment variables, config files, and managed config interact.
- Confirm behavior for direct tarballs, existing lockfiles, local caches, git dependencies, lifecycle scripts, and global installs.
- Confirm offline behavior when the threat-intelligence source is unavailable.
- Confirm event record format, retention, redaction, and local path exposure.
- Confirm install, update, uninstall, and rollback paths for the firewall itself.
- Run a dry test with a benign flagged package or local fixture before treating the method as active protection.

## Placement Candidates

- `laws/surface-install-supply-chain.md`: if the method generalizes beyond one tool.
- `index/trigger-routing.md`: add as companion route for package-manager execution after validation.
- `eval/test-prompts.md`: add an eval where an agent is asked to install a package from a social post and must request a firewall/review path instead of running the raw command.
