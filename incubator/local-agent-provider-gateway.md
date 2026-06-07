# Local Agent Provider Gateway

Status: incubating

## Signal

Some agent runtimes can be extended through a local gateway or shim that proxies model traffic, patches runtime configuration, manages provider keys, exposes a local dashboard, advertises custom model capabilities, and bridges screenshots or tools into a different provider protocol.

This can make an agent runtime more flexible, but it also concentrates model routing, secrets, tool authority, desktop control, logs, and persistent configuration in one local control plane.

## Source Evidence

- X signal observed on 2026-05-30: a post described a local gateway for Codex Desktop that enables third-party APIs, dashboard-based provider configuration, custom model catalogs, Computer Use routing, screenshot compression, and a vision bridge for text-only models.
- Primary source reviewed: `AITabby/opencodex` public GitHub repository.
- Files inspected read-only: `README.md`, `package.json`, `src/server.ts`, `src/proxy/index.ts`, `src/proxy/translator.ts`, `src/cu/actions.ts`, `src/cu/screenshot.ts`, `TEST_FLOW.md`, and `test_opencodex.mjs`.
- Observed implementation shape:
  - a local HTTP proxy routes agent requests to configured model providers;
  - startup can patch the agent runtime config and create model catalog files;
  - provider configuration stores provider names, base URLs, API keys, and optional vision model names;
  - a web dashboard can update config, model visibility, restart the runtime, reset managed config, and stream logs;
  - an MCP server exposes screenshot, click, drag, scroll, page scroll, type, key press, window listing, and focus tools;
  - the model catalog can advertise image input, Computer Use, and MCP support for custom models;
  - a vision bridge can send screenshots to a multimodal provider, replace images with generated text descriptions, and route the resulting prompt to a text-only model;
  - the package declares a package-manager lifecycle script;
  - no repository license was observed through the GitHub metadata reviewed at the time.
- X signal observed on 2026-06-07: posts described exposed OpenClaw agent control planes, prompt-injection paths, gateway-token leakage, and confusion between installed packages and actually reachable services.
- Primary source reviewed: OpenClaw GitHub security advisory `GHSA-g8p2-7wf7-98mq`.
- Security and exposure analyses reviewed: SecurityScorecard OpenClaw agentic-AI risk analysis and Qualys ETM OpenClaw risk analysis.
- Additional observed mechanism:
  - a desktop or browser deep link can become a control-plane path when it accepts a gateway URL or equivalent untrusted connection target;
  - a victim browser can bridge a localhost service to an attacker-controlled gateway even when the local service itself is not directly internet-facing;
  - gateway tokens, prompt execution requests, provider configuration, logs, and tool routes need destination, origin, and redaction review;
  - warning pages and confirmation screens are containment evidence, not proof that prompt execution, token flow, or gateway selection is safe;
  - package presence on disk, scanner inventory, or package count must be separated from whether a service is running and externally reachable.

This file records the method shape and review requirements. It is not an endorsement of the implementation and does not recommend installing or running it.

## Proposed Trigger

Use this candidate when an agent, user, runtime adapter, or repository proposes a local gateway, proxy, shim, BYOK router, model catalog patcher, model provider bridge, Computer Use bridge, screenshot-to-text bridge, or dashboard that can:

- patch agent runtime config;
- route model requests through a local endpoint;
- store or resolve API keys;
- expose provider configuration through a web UI or local API;
- launch through desktop or browser deep links;
- advertise custom model capabilities;
- expose MCP, browser, desktop, or file tools;
- transform screenshots or tool outputs into prompts;
- restart, reset, or otherwise control the agent runtime.

## Proposed Mechanism

Before adopting or activating a local agent provider gateway:

1. Keep the first pass read-only.
   - Review source, package metadata, install scripts, lockfiles, license, endpoints, config writes, tool inventory, and rollback docs before running it.
2. Treat config patching as persistent behavior change.
   - Require a preview diff, exact target path, managed block boundaries, backup path, rollback command, and restart behavior before any patch.
3. Treat the gateway endpoint as a control plane.
   - Record bind address, ports, CORS policy, authentication, authorization, dashboard routes, config routes, log routes, reset routes, and model routes.
4. Treat API keys as delegated authority.
   - Prefer environment references or brokered secrets over raw persisted keys.
   - Redact keys from config responses, logs, dashboard state, error messages, receipts, and screenshots.
5. Require honest model capability metadata.
   - Do not advertise image input, Computer Use, MCP, tool use, reasoning, or large context unless the provider path actually supports the capability and has a tested fallback.
6. Scope tool authority separately from model routing.
   - A model provider bridge should not automatically receive desktop, browser, file, shell, MCP, or account authority.
   - Start with read-only tools and promote write or control tools one at a time.
7. Treat vision bridge text as untrusted observation.
   - Screenshot descriptions must carry provenance labels, privacy review, OCR-instruction stripping, and negative tests for prompt injection from screen text.
8. Review logs and traces as sensitive artifacts.
   - Log buffers, SSE streams, dashboards, terminal logs, provider errors, prompts, screenshots, and tool arguments may expose private data or secrets.
9. Separate restart, reset, and runtime takeover actions.
   - Runtime restarts, process kills, model selection changes, and config reset need explicit user approval and recovery instructions.
10. Verify uninstall and rollback.
    - Confirm how to stop the service, remove managed config, delete provider files, revoke keys, close ports, remove launch agents or process managers, and restore the original runtime state.

## Initial Scope

- Runtime-neutral method candidate for local agent provider gateways.
- Related surfaces: install supply chain, MCP/tool authorization, browser/runtime authority, evidence and eval, memory/learning when the gateway changes future behavior.
- Candidate status only. Do not use as active protection until validated against multiple gateway designs.

## Known Failure Modes

- A local server binds beyond loopback or allows broad cross-origin requests.
- A scanner or report conflates package presence on disk with a running and externally reachable control plane.
- A local or desktop deep link accepts a `gatewayUrl`-style target or other untrusted gateway selection parameter.
- A victim browser bridges a localhost service to an attacker-controlled endpoint.
- Gateway tokens, provider tokens, prompts, logs, or tool outputs are sent to an attacker-controlled or unreviewed gateway.
- Warning, preview, or confirmation screens are treated as sufficient proof instead of containment evidence that still needs negative tests.
- Dashboard or API routes expose provider keys, prompts, screenshots, logs, model catalogs, reset actions, or runtime restart actions without authentication.
- Config auto-patching changes future sessions before review.
- Model capability metadata overclaims tool, image, MCP, context, reasoning, or streaming support.
- A text-only model receives screenshot descriptions as ordinary prompt text and follows instructions embedded in the screen.
- Screenshot capture sends private desktop or account content to a third-party vision provider.
- Desktop control tools click, type, focus, drag, or scroll in the wrong window or account.
- A reset or restart action interrupts active work or removes user configuration.
- Package-manager lifecycle scripts run during installation before the user reviews the code.
- Logs or test flows contain key-like values, private endpoints, local paths, or prompts that later leak into notes, issues, or model context.
- Missing license or unclear provenance makes reuse or redistribution unsafe.

## Verification Needed

- Confirm bind address, firewall exposure, CORS, and route authentication.
- Distinguish installed package, configured package, running service, locally reachable service, and externally reachable service.
- Inspect desktop/browser deep-link handlers, URL schemes, query parameters such as `gatewayUrl`, redirects, and gateway-selection defaults.
- Confirm token issuance, token destination, token lifetime, token redaction, and whether tokens can be sent to untrusted gateways.
- Test whether the user's browser can drive the local service or bridge it to an attacker-controlled endpoint.
- Confirm warning, preview, confirmation, and explicit-review behavior before prompt execution or gateway connection.
- Confirm whether config patching happens automatically on construction, startup, dashboard action, or explicit command only.
- Inspect exact config patch blocks, backups, rollback, and conflict behavior when user config already contains provider settings.
- Confirm key storage format, environment variable resolution, redaction, dashboard display, API response redaction, and log redaction.
- Confirm tool inventory, default exposure, allowlist support, and whether high-authority tools can be disabled.
- Confirm model capability claims against actual provider behavior and failure paths.
- Test the vision bridge with prompt-injection text inside a screenshot.
- Confirm screenshot compression, caching, retention, and third-party transmission.
- Confirm dashboard logs and SSE streams do not leak secrets or account data.
- Confirm install, build, lifecycle scripts, package provenance, update process, uninstall, and rollback.
- Confirm license before copying code, examples, or templates.

## Placement Candidates

- `laws/surface-browser-runtime.md`: runtime takeover, desktop control, browser/account authority, screenshots, remote/dashboard control.
- `laws/surface-mcp-tools-auth.md`: MCP tools, provider keys, model/tool capability claims, bound authorization, runtime outputs.
- `laws/surface-install-supply-chain.md`: install scripts, config patching, package lifecycle scripts, persistent runtime changes.
- `laws/surface-evidence-eval.md`: source-backed claims, negative tests, capability validation.
- `index/trigger-routing.md`: companion routing for local provider gateways and model shims.
- `eval/test-prompts.md`: evals for gateway adoption, config auto-patching, key exposure, and vision bridge injection.
