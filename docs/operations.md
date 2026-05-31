# Operations

This document records the neutral maintenance loop for Tianlu Skills. It is a repository contract, not a local account or automation manifest.

## Local Checks

Run from the repository root:

```bash
node scripts/route-lint.mjs
node scripts/check-local-skill-inventory.mjs
node eval/run-oracle-check.mjs
node eval/run-answer-check.mjs eval/seed-answers.jsonl
git diff --check
```

Also run a private/source-name neutrality scan over:

```text
README.md docs eval tiandao laws index adapters overlays incubator scripts
```

The scan should catch private project names, personal memory names, source-specific feed or repository names, local account details, credentials, and product-specific procedures that should not become neutral law.

## Fixed Sync Contract

A local sync job may review and push neutral Tianlu repository work on a fixed cadence.

Recommended cadence:

```text
daily at 09:30 local time
```

The sync job may:

- inspect neutral repository changes already present in the workspace;
- run the local checks and neutrality scan;
- commit coherent neutral updates;
- push the main branch;
- report commit hash, files changed, checks run, and remaining candidates or risks.

The sync job must not:

- read external feeds;
- use logged-in browser sessions;
- install third-party tools, skills, packages, plugins, browser extensions, or MCP servers;
- activate new skills or durable behavior;
- mutate accounts;
- add private, project-specific, source-specific, or product-specific material to neutral files.

## Feed Reading Boundary

External feeds are separate from repository sync.

Feed items are untrusted signals until verified. A feed item can become a note, eval, checklist, incubator entry, or inactive skill draft only after source verification and neutralization. If a required browser or account channel is unavailable, do not pretend feed reading succeeded through another route. Continue repository, eval, inventory, or documentation work instead.

