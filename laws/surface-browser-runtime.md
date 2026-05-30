# Browser And Runtime Laws

Scope: runtime-neutral

Status: active draft

## Law: Browser Sessions Are Delegated Authority

Trigger:

- An agent, extension, browser helper, computer-use tool, remote controller, browser automation server, or hosted agent receives access to a logged-in browser session.

Mechanism:

- Treat logged-in browser access as delegated account authority.
- Default to read-only until a specific write action is authorized.
- Define target sites and tabs, read/write authority, allowed actions, forbidden actions, and cleanup.
- Keep cookies, local storage, passwords, session stores, browser profiles, autofill, and account settings out of scope unless explicitly approved.
- Treat downloads, uploads, clipboard, file URLs, browser settings, extensions, DevTools ports, and remote debugging as separate authority surfaces.
- Record pages read, account actions taken or rejected, evidence captured, tab finalization, and rollback/logout path.

Failure Modes:

- Account mutation through a UI action that looked harmless.
- Cookies or session state exposed as evidence.
- Broad browser extension permissions exceed the task.
- A forwarded browser or DevTools port becomes remote account authority.

Boundary:

- This law does not forbid browser use. It requires scoped authority and evidence handling.

## Law: Runtime Isolation Is Not Full Trust

Trigger:

- An agent runs in a sandbox, container, VM, CI runner, cloud environment, worktree, scoped local environment, or hosted runtime.

Mechanism:

- Record runtime type, image or base, version, workspace mount, user, privilege mode, network access, package installs, generated artifacts, persisted files, process tree, open ports, background jobs, caches, volumes, credentials, browser profile state, and cleanup.
- Record secrets available, secret identifiers used, auth scopes, and whether secret values were exposed to prompts, logs, tools, or artifacts.
- Record rollback or restore method: snapshot, branch or worktree reset, container rebuild, cache invalidation, secret revocation, or manual cleanup.

Failure Modes:

- Treating a worktree, container, CI runner, or sandbox as a complete boundary for secrets, network, cache, browser, or account state.
- Reusing a runtime that carried hidden state from a previous run.
- Forgetting long-running processes, forwarded ports, or background jobs.

Boundary:

- A runtime can reduce blast radius, but it is not the whole trust object.

## Law: Remote Control Is A Control Plane

Trigger:

- Remote control is enabled through a mobile app, web dashboard, WebSocket bridge, tunnel, relay, remote terminal, bot command, remote approval channel, or shared agent control panel.

Mechanism:

- Record topology, exposed endpoint, authentication, authorization, workspace scope, desktop/session mode, state visibility, audit trail, and emergency controls.
- Require enough approval context to avoid blind taps: objective, pending action, target files or accounts, command or diff preview, risk level, and rollback path.
- Provide pause, revoke, kill session, close tunnel, token rotation, and cleanup paths.

Failure Modes:

- Remote channel exposes shell, filesystem, browser account authority, deployment, payment, secret access, or durable memory writes without scoped approval.
- Foreground desktop takeover causes wrong-window actions, clipboard exposure, or screenshot leakage.
- Remote approval UI hides the actual risk.

Boundary:

- Remote access does not equal background isolation. If the agent controls an active desktop, plan for local input conflict and takeover.
