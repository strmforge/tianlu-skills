# MCP API Bridge Adoption Review

Status: incubating

Scope: runtime-neutral review method

## Signal

Recent candidate rounds repeatedly found that MCP and API bridge products can look safer than they are because their source is official, first-party, hosted, read-only-labeled, OAuth-backed, packaged in a registry, or compressed into a small number of tools.

The recurring risk is not one vendor or one runtime. It is the mistaken move from provenance, convenience, or interface compression to authority.

## Source Evidence

- Round 373: Codex issue evidence showed approval and permission control-plane drift between visible UI state, transcript entries, retries, compaction, and effective runtime permissions.
- Round 374: context-compression and observability tooling showed that a compressed view, dashboard, proxy, or local-only claim can reduce context cost while adding hooks, config, memory, log, or provider-routing surfaces.
- Round 375: registry-package review showed that a package artifact can differ from reviewed source and that registry metadata, README text, popularity, or source cleanliness is not install proof.
- Round 378: `modelcontextprotocol/servers-archived` and the npm package `@modelcontextprotocol/server-puppeteer` showed that a first-party reference server can remain retrievable while the repository is archived and the package is deprecated or no longer supported.
- Round 379: Cloudflare Code Mode and MCP server documentation showed that a first-party server can expose a broad cloud API through a small `search`/`execute` interface, typed SDK code generation, sandboxed execution, OAuth, API tokens, portal policy, and settings such as `allow_code_mode`.
- Round 387: Mitiga's Claude Code MCP token-theft research and Anthropic's MCP documentation showed that agent runtime MCP configuration can be a tool-routing and credential control plane. A package lifecycle hook or setup helper that rewrites MCP endpoints, server definitions, OAuth metadata, or startup behavior can persist or reseed attacker-selected routing even after package removal or token rotation.
- Round 388: TrustFall reporting and related coding-agent documentation/advisories showed a distinct project-entry risk: a repository can carry project-scoped agent configuration such as MCP definitions, hooks, startup settings, or CI/headless settings. A broad folder/workspace trust prompt or headless trust default can be mistaken for approval to execute those project-defined agent surfaces.

No installation, package download, MCP connection, OAuth flow, API-token entry, server start, or tool registration was performed during these reviews.

This file records the review method shape. It is not an endorsement of any bridge, server, package, portal, or Code Mode implementation.

## Proposed Trigger

Use this candidate when an agent, user, repository, marketplace, vendor doc, or feed item proposes to connect, install, enable, trust, or recommend:

- a first-party, official, hosted, remote, local, private, tunneled, or gateway MCP server;
- an API-to-MCP bridge, schema generator, SDK-backed bridge, OpenAPI bridge, GraphQL bridge, or wrapped cloud API;
- a Code Mode, programmatic tool-calling, `search`/`execute`, CLI-converted, dynamic-tool-search, or compressed-tool interface;
- a server portal, MCP gateway, server-id URL, unified auth layer, managed OAuth path, API-token path, or toolset selection UI;
- an archived, deprecated, unmaintained, registry-published, or reference MCP server;
- a broad all-tools mode, read-only URL, per-tool allowlist, generated schema, or tool catalog;
- a bridge that can touch infrastructure, repositories, DNS, storage, security controls, identity, billing, customer data, production data, account state, or browser/desktop automation.

## Proposed Mechanism

Before connecting, installing, registering, or enabling an MCP/API bridge:

1. Keep discovery read-only.
   - Review docs, repository metadata, registry metadata, source tree, release notes, security policy, examples, and deprecation or archival status before any execution or OAuth flow.
2. Separate provenance from authority.
   - Official, first-party, hosted, marketplace-listed, popular, signed, or registry-available sources are provenance signals, not install approval, maintenance proof, or task authorization.
3. Inventory the actual backend authority.
   - Record API surface, operation inventory, read and write method classes, account or tenant, production versus sandbox environment, data classes, rate limits, idempotency, audit logs, and rollback.
4. Treat compressed interfaces as broad until proven narrow.
   - A small tool count, fixed token footprint, dynamic search, typed SDK, generated JavaScript, CLI wrapper, or `search`/`execute` pair can hide a broad backend API.
5. Review code-generation and execution separately.
   - Bind generated-code prompt and context, tool arguments, SDK package provenance, sandbox egress, persistence, filesystem, environment variables, network access, external fetch rules, logs, and generated-code review path.
6. Bind authorization per operation.
   - Record actor, account, OAuth app, token source, scopes, TTL, revocation, selected toolsets, resource ids, argument hash where practical, approval id, and intended side effect.
7. Use deny-by-default allowlists.
   - Start with narrow read-only or dry-run operations. Promote write, delete, deploy, DNS, security, billing, identity, customer-data, production, browser, or desktop operations one at a time with approval and replay tests.
8. Validate gateway and portal boundaries.
   - Test server-level and per-tool authorization, tenant binding, server-id secrecy assumptions, direct endpoint access, stored upstream credentials, audit visibility, and whether unauthorized users can list or call tools.
9. Check registry and artifact state.
   - Bind package identity, publisher, exact version, integrity, tarball or artifact URL, included and excluded files, lifecycle scripts, generated artifacts, source-to-artifact match, maintenance status, and no-secret install lane.
10. Preserve receipts and rollback.
    - Record source URLs, versions, scopes, selected tools, denied tools, review decisions, commands not run, credentials not entered, cleanup, disable path, and residual risks.

## Initial Scope

- Candidate review method for MCP/API bridge adoption, not a new broad law.
- Applies to first-party and third-party bridges, hosted and local servers, compressed and expanded tool catalogs, registry packages, server portals, and API wrappers.
- Related laws: `laws/surface-mcp-tools-auth.md`, `laws/surface-install-supply-chain.md`, `laws/surface-ci-devops.md`, `laws/surface-browser-runtime.md`, and `laws/surface-evidence-eval.md`.
- Related incubator files:
  - `terminal-output-compression-review.md` when the compression is primarily command output or log summarization.
  - `local-agent-provider-gateway.md` when the bridge also patches model routing, provider keys, desktop control, or local runtime configuration.
  - `install-time-package-firewall.md` when package-manager execution is the immediate risk.
  - `public-skill-collection-quality-gate.md` when the source is a skill/plugin/rule collection rather than a single API bridge.

## Known Failure Modes

- An official or first-party bridge is treated as permission to connect production accounts.
- A two-tool or compressed interface is treated as minimal authority while it can reach thousands of backend operations.
- Read-only labels or read-only URLs are assumed to cover generated code, SDK calls, hidden writes, browser automation, or account side effects.
- OAuth success, API-token presence, portal login, or gateway authentication is treated as per-tool or per-resource authorization.
- A server-id URL, hidden UI entry, or unguessable identifier is treated as an authorization boundary.
- Archived or deprecated reference servers remain installable and are mistaken for maintained software.
- Registry metadata, tarball availability, integrity hashes, README examples, or package popularity are treated as artifact safety proof.
- Runtime MCP config files are treated as ordinary local settings instead of control-plane state that can persist server identity, endpoint routing, OAuth behavior, selected tools, hooks, and startup/autoload behavior.
- Package removal, token rotation, connected status, valid provider logs, or a familiar server name is treated as proof that malicious MCP config entries or reseeding hooks were removed.
- Broad folder, workspace, or project trust is treated as permission for project-scoped MCP configs, hooks, startup commands, package-manager commands, generated tools, or shell commands to execute.
- CI or headless agent modes inherit project trust defaults and load executable project agent settings without interactive review, no-secret lane, command allowlist, sandbox/egress review, or negative tests.
- Generated JavaScript makes a privileged API call that was not visible as a named tool.
- Sandbox claims omit egress, logging, persistence, external fetch, token, or generated-code review boundaries.
- Broad operation catalogs are loaded for convenience, increasing wrong-tool selection, context cost, and latent authority.
- Audit logs are treated as prevention rather than post-hoc evidence.
- The review stops at connection setup and misses operation-by-operation promotion, rollback, and negative tests.

## Verification Needed

- Confirm which operations are reachable through the bridge, including generated-code, SDK, CLI, GraphQL, REST, hidden, experimental, and admin paths.
- Confirm maintenance status, release cadence, deprecation state, security policy, issue response path, and package artifact provenance.
- Confirm whether read-only mode is enforced by server code, token scopes, URL routing, client policy, or only tool descriptions.
- Confirm OAuth scopes, token TTL, revocation, storage, refresh behavior, tenant binding, and selected resource boundaries.
- Confirm runtime MCP config paths, scope hierarchy, server definitions, endpoint URLs, commands, environment variables, OAuth metadata, selected tools, hooks, autoload or startup behavior, package lifecycle scripts, reseeding paths, and old/new config diffs.
- Confirm project-scoped config paths and precedence, folder/workspace trust prompt text, interactive versus headless behavior, local server commands, package-manager commands, hooks, generated tool metadata, startup/autoload behavior, no-secret lane, command allowlist, sandbox and egress boundary, and negative tests before opening or running untrusted projects.
- Confirm generated-code sandbox properties: network egress, external fetch, environment variables, filesystem, persistence, logs, package imports, timeout, and cancellation.
- Confirm deny-by-default allowlist behavior and negative tests for unauthorized tools, other tenants, direct server-id URLs, and stale credentials.
- Confirm rollback and disable paths for client config, runtime MCP config, server registration, OAuth grants, API tokens, package installs, generated files, hooks, logs, and caches.
- Confirm that receipts preserve enough evidence to replay the adoption decision without exposing credentials, private account data, source code, or production data.

## Placement Candidates

- `index/trigger-routing.md`: add as a companion for MCP/API bridge, compressed-tool interface, official hosted MCP, server portal, and Code Mode adoption.
- `eval/test-prompts.md`: existing cases already cover first-party hosted MCP, all-tools/context cost, public unauthenticated MCP, MCP gateway server-id authorization, production API MCP bridge, archived reference MCP server, and Code Mode API compression.
- `laws/surface-mcp-tools-auth.md`: only consider promotion if multiple implementations show the same mechanism and the review method stabilizes beyond the current incubator checklist.
