# Codex Chrome/X Troubleshooting Adapter

Status: draft

Scope: Codex-specific recovery guidance for Chrome-backed X or external-feed reading.

The neutral laws live in `../../laws/surface-browser-runtime.md`, `../../laws/surface-memory-learning.md`, and `../../laws/surface-evidence-eval.md`. This adapter only describes Codex Chrome behavior and receipts.

## Trigger

Use this adapter when a task requires Chrome-backed feed reading, logged-in page access, or X/Twitter browsing, and the Chrome browser client fails with a communication error such as:

- native pipe is closed;
- cannot communicate with the extension;
- browser tabs cannot be listed;
- finalize fails because the browser client is unavailable.

## Workflow

1. Treat the failure as no browser access.
2. Retry one lightweight browser call after a short wait.
3. If the retry fails, run read-only diagnostics for:
   - Chrome running state;
   - installed browser state;
   - Codex Chrome Extension installed and enabled state;
   - native host manifest state.
4. If Chrome is not running, ask before launching it.
5. If the extension or native host manifest is missing or invalid, tell the user to verify or reinstall the Chrome plugin from the Codex plugin UI.
6. If Chrome is running, the extension is enabled, and the native host manifest is correct, ask before opening a Chrome window for the selected profile and retrying.
7. Do not continue with authenticated feed reading until the Chrome client call succeeds.
8. Before ending Chrome work, attempt tab finalization; if finalization fails, record that as part of the receipt.

## Forbidden By Default

- Do not inspect cookies, local storage, browser profiles, passwords, session stores, or extension internals.
- Do not use another browser automation route to pretend Chrome-backed X reading succeeded.
- Do not write feed-reading records as if sources were read when the browser channel failed.
- Do not open a Chrome window, launch Chrome, repair the native host, or change extension settings without the required user permission.

## Allowed Progress While Blocked

When Chrome remains unavailable, continue only work that does not require the browser channel, such as:

- repository checks;
- eval or oracle hardening;
- local skill inventory review;
- neutral documentation or wiki updates;
- adapter or SOP drafts that describe the failure and recovery boundary.

## Receipt

Report:

- the failed browser call and error class;
- whether the retry failed or succeeded;
- which diagnostics passed or failed;
- whether tab finalization succeeded;
- what work was skipped because Chrome was unavailable;
- what non-Chrome work, if any, was completed instead.
