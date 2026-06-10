# Developer Extension Marketplace Readiness Review

Status: incubating.

## Signal

Solo developers and small teams can ship browser extensions, IDE extensions, and developer plugins through marketplaces such as Chrome Web Store and the VS Code Extension Marketplace. These surfaces connect product scope, manifests, permissions, privacy disclosures, listing assets, publisher identity, developer accounts, package files, review status, distribution choices, publishing APIs, and rollback or unpublish paths.

The useful one-person-one-computer method is not to publish an extension or promise marketplace revenue. The useful first product is an extension marketplace readiness packet that shows what the extension claims to do, what permissions and data surfaces it uses, what listing evidence exists, what official review or privacy fields remain, and which owner must approve account, package, privacy, security, publication, and marketplace actions.

## Proposed Trigger

Use this candidate when a user asks about:

- Chrome Web Store extension submission, Chrome extension listing, privacy fields, program policies, permissions, review status, distribution, or Web Store API publication;
- VS Code extension Marketplace publication, `vsce`, publisher setup, VSIX packaging, extension manifest, activation events, README, changelog, icon, category, or unpublish flows;
- turning extension manifests, listing copy, screenshots, privacy notes, permission justifications, release notes, or marketplace docs into a readiness packet;
- evaluating whether browser extension, IDE extension, or developer plugin listing support can become a one-person-one-computer service offer.

## Proposed Mechanism

1. Separate marketplace readiness from publication authority.
   - L0: X posts, indie-developer revenue claims, extension risk stories, launch posts, screenshots, forum replies, and course claims.
   - L1: official Chrome Web Store docs, Chrome program policies, Chrome permissions docs, VS Code publishing docs, VS Code manifest docs, activation-event docs, bundling docs, and marketplace help pages.
   - L2: owner-supplied manifests, source trees, package outputs, dashboard readbacks, draft listing copy, privacy-policy drafts, review messages, publisher notes, and account-owner approvals inside a scoped engagement.
2. Build a source map before any package, account, or store action.
   - Record extension name, product purpose, target marketplace, developer or publisher identity, manifest path, version, runtime target, permissions, host permissions, activation events, contributed commands or UI surfaces, external network or API calls, telemetry, user-data categories, listing copy, screenshots, icons, README, changelog, license, category, keywords, distribution visibility, review status, publish or unpublish surface, and source timestamp.
   - Keep product facts, manifest facts, permission facts, user-data facts, listing facts, package facts, account facts, policy facts, review facts, and publication facts in separate rows.
3. Produce a readiness queue, not a publication workflow.
   - Classify rows as source-supported, needs developer review, needs product-owner review, needs security review, needs privacy/legal review where relevant, needs publisher-owner review, missing evidence, or not in scope.
   - Draft listing copy, permission justifications, privacy-field notes, README or changelog edits, screenshot notes, icon notes, review-response drafts, and release-checklist rows as review artifacts only.
4. Keep permissions and data handling explicit.
   - Chrome Web Store policy sources require narrow permission use and accurate privacy disclosure when user data is handled.
   - VS Code sources expose manifest, activation, contribution, packaging, publisher, Marketplace, and automation surfaces that can affect user workspaces or publisher accounts.
   - Treat source code, package files, publisher identity, developer accounts, OAuth/API credentials, PATs, managed identities, user data, workspace data, telemetry, screenshots, support emails, review messages, and unpublished product material as sensitive where applicable.
5. Keep execution as owner-approved follow-up.
   - Do not register developer accounts, pay registration fees, install extensions, package extensions, run build scripts, run `vsce`, upload packages, use Web Store APIs, create publishers, create service connections, enter OAuth credentials, create or use PATs, publish, submit for review, update listings, change distribution, unpublish, contact reviewers, contact users, or change source repositories without explicit scoped approval.
6. Package a human-owned handoff.
   - Output official-source map, manifest and permission inventory, privacy and user-data table, listing asset checklist, package and publisher surface map, review and distribution question list, no-install/no-account/no-upload/no-publish/no-compliance-conclusion receipt, and owner review plan.

## Initial Scope

This candidate is for developer extension marketplace readiness review, source mapping, permission and privacy inventory, listing preparation, and no-write owner handoff. It does not authorize extension installation, package execution, account registration, publisher creation, credential entry, API use, package upload, marketplace submission, listing publication, listing update, distribution change, unpublish action, payment, review contact, user contact, legal/privacy/security/compliance conclusion, revenue claim, marketplace acceptance claim, sensitive-data retention, or production use.

## Known Failure Modes

- Treating X revenue posts, launch screenshots, install counts, ratings, or marketplace presence as proof that an extension can earn money.
- Treating a manifest, package file, successful build, listing draft, or local QA as proof that a package is safe, privacy-compliant, review-ready, or publication-ready.
- Requesting broad permissions or host access because future features might need them.
- Copying generic privacy-policy text without mapping actual user-data collection, sharing, retention, and disclosure.
- Publishing through a dashboard, `vsce`, Web Store API, CI, PAT, managed identity, or service connection because the readiness packet looks complete.
- Installing or running a third-party extension, package, build script, sample repo, or marketplace tool during a readiness review.
- Retaining user data, workspace data, review messages, screenshots, support emails, publisher account details, PATs, OAuth/API credentials, or unpublished product material in generic notes.
- Turning official marketplace docs into legal, privacy, security, commercial, tax, payment, or platform-acceptance advice.

## Verification Needed

- Replay on a synthetic Chrome extension manifest and listing packet without packaging, upload, account access, or API use.
- Replay on a synthetic VS Code `package.json`, README, changelog, icon, and VSIX readiness packet without running `vsce`, packaging, publishing, or account access.
- Replay on public extension listings and official docs to test whether install counts, ratings, reviews, permission notes, listing copy, and privacy disclosures are kept separate from revenue, safety, privacy, and acceptance claims.
- Check current Chrome Web Store developer account, listing, privacy, distribution, review, API, program-policy, and permissions docs before any account-connected engagement.
- Check current VS Code publishing, publisher, authentication, manifest, activation-event, bundling, package, publish, and unpublish docs before any account-connected engagement.
- Add eval coverage only if repeated failures show agents treating extension readiness packets as install, package execution, publisher/account setup, credential use, upload, publish, unpublish, privacy/legal/security conclusion, marketplace acceptance, or revenue-proof authority.

## Placement Candidates

- Keep in incubator while replay evidence and paid-demand evidence are thin.
- If stable, merge into `playbooks/marketplace-listing-and-catalog-readiness-planning.md`, `playbooks/solo-business-lifecycle-planning.md`, `playbooks/commerce-operations.md`, or a later developer-marketplace readiness playbook.
- Use `laws/surface-install-supply-chain.md` for package execution, build scripts, extension install, and marketplace tooling.
- Use `laws/surface-browser-runtime.md` for browser extensions, logged-in dashboards, downloads, uploads, clipboard, and account sessions.
- Use `laws/surface-mcp-tools-auth.md` for OAuth, API credentials, PATs, publisher accounts, CI publication, and privileged tool calls.
- Use `laws/surface-evidence-eval.md` for revenue, install-count, privacy, security, review, acceptance, and marketplace-performance claims.
