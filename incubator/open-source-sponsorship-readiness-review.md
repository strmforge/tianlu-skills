# Open Source Sponsorship Readiness Review

Status: incubating.

## Signal

Open-source maintainers can expose funding surfaces through GitHub Sponsors, repository `FUNDING.yml`, sponsor buttons, external funding platforms, fiscal hosts, and Open Collective-style collectives. These surfaces connect repository presentation, sponsor messaging, payment rails, tax information, fiscal-host selection, invoices, receipts, expenses, payouts, and community trust.

The useful solo-operator method is not to set up payments or promise maintainer income. The useful first product is a sponsorship readiness evidence packet that shows what funding surfaces exist, what setup steps remain, what public claims need evidence, and which owner must approve money, tax, legal, repository, and sponsor-contact actions.

## Proposed Trigger

Use this candidate when a user asks about:

- GitHub Sponsors, repository sponsor buttons, `.github/FUNDING.yml`, sponsor profiles, sponsorship tiers, sponsor goals, or maintainer funding;
- Open Collective, fiscal hosts, project donations, invoices, receipts, expenses, reimbursements, or payouts for open-source communities;
- turning repository, README, funding, sponsor-tier, maintainer, fiscal-host, or donation-page notes into a readiness packet;
- evaluating whether open-source sponsorship support can become a one-person-one-computer service offer.

## Proposed Mechanism

1. Separate sponsorship evidence from money authority.
   - L0: social posts, maintainer-income stories, screenshots, revenue claims, consultant offers, and underpaid-maintainer commentary.
   - L1: official GitHub Sponsors docs, repository `FUNDING.yml` docs, GitHub Sponsors terms, Open Collective docs, fiscal-host docs, and platform help pages.
   - L2: owner-supplied repository readbacks, sponsor dashboard exports, profile drafts, tier drafts, fiscal-host correspondence, payout records, invoice/receipt records, and tax/accounting notes inside a scoped engagement.
2. Build a source map before any setup or write.
   - Record project, repository, maintainer, organization, funding file location, default branch, sponsor button state, external funding platforms, custom URLs, GitHub Sponsors profile status, eligibility region, two-factor requirement, tiers, goals, fiscal host choice, Stripe Connect or fiscal-host payout path, tax-information status, Open Collective collective/host status, invoice/receipt/expense/payout surfaces, and source timestamp.
   - Keep repository facts, maintainer facts, platform facts, payment facts, tax facts, fiscal-host facts, sponsor claims, and community messaging in separate rows.
3. Produce a readiness queue, not a funding setup.
   - Classify rows as source-supported, needs maintainer review, needs repository-owner review, needs finance/tax review, needs fiscal-host review, needs legal review where relevant, missing evidence, or not in scope.
   - Draft sponsor profile copy, README funding notes, tier ideas, benefit caveats, sponsor-fit notes, and question lists as review artifacts only.
4. Keep execution as owner-approved follow-up.
   - Do not edit `FUNDING.yml`, commit files, request GitHub Sponsors approval, change sponsor tiers, enable goals, connect Stripe, submit bank or tax information, choose or change fiscal host, open an Open Collective, issue invoices, reimburse expenses, request or move payouts, contact sponsors, send pitches, or promise benefits without explicit scoped approval.
5. Keep money, tax, and privacy boundaries explicit.
   - Treat bank, tax, payout, sponsor, subscriber, donor, invoice, receipt, expense, payment, identity, credential, repository, and private communication data as sensitive.
   - Do not retain sensitive financial, tax, sponsor, or account data in durable notes unless the owner approves the data-handling boundary.
6. Package a human-owned handoff.
   - Output official-source map, repository and funding-surface inventory, sponsor-profile readiness table, tier and benefit draft queue, fiscal-host/payment/tax question list, invoice/receipt/expense/payout boundary map, no-repo-write/no-payment-setup/no-sponsor-contact/no-tax-or-legal-conclusion receipt, and owner review plan.

## Initial Scope

This candidate is for open-source sponsorship readiness review, source mapping, draft preparation, and no-write owner handoff. It does not authorize repository commits, `FUNDING.yml` edits, GitHub Sponsors applications, sponsor profile publication, tier changes, goal changes, payment setup, Stripe Connect setup, bank or tax submission, fiscal-host selection or change, Open Collective creation, invoice or receipt issuance, expense reimbursement, payout movement, sponsor contact, pricing or benefit commitment, legal/tax/accounting conclusion, revenue promise, sponsorship acceptance, sensitive-data retention, or production use.

## Known Failure Modes

- Treating underpaid-maintainer commentary or sponsorship screenshots as proof that a project can earn money.
- Treating a visible sponsor button, `FUNDING.yml`, Open Collective page, or sponsor profile as proof of sponsor demand, revenue, payment success, payout success, tax readiness, or legal sufficiency.
- Editing `FUNDING.yml` or repository README because the correct funding URLs are known.
- Requesting GitHub Sponsors approval, changing tiers, or enabling goals because the profile draft looks complete.
- Connecting Stripe, submitting bank or tax information, selecting a fiscal host, creating a collective, issuing invoices, reimbursing expenses, or requesting payouts without scoped approval.
- Contacting sponsors, sending pitches, promising benefits, or accepting sponsorships from a readiness packet.
- Retaining sponsor lists, donor names, bank, tax, payout, invoice, receipt, identity, account, credential, or private-message data in generic notes.
- Turning fiscal-host or platform docs into tax, nonprofit, accounting, payment, or legal advice.

## Verification Needed

- Replay on more public repositories that have visible sponsor buttons and `FUNDING.yml`, without editing files or contacting maintainers.
- Replay on more public Open Collective pages and official docs to map collective, host, invoice, receipt, expense, and payout surfaces without account access.
- Replay on a synthetic maintainer packet with fake tiers, sponsor profile copy, and funding URLs to test the readiness table and no-write receipt.
- Check current GitHub Sponsors eligibility, supported regions, terms, payout, tax, fiscal-host, and repository funding docs before any account-connected engagement.
- Add eval coverage only if repeated failures show agents treating sponsorship readiness packets as repository-write, payment-setup, sponsor-contact, tax/legal conclusion, or revenue-proof authority.

## Replay Evidence

- 2026-06-10 Round611 public replay used the public `ratatui/ratatui` repository, its public `.github/FUNDING.yml`, the public GitHub Sponsors page for `ratatui`, and the public Open Collective page for `ratatui`. No repository edit, API write, login-only dashboard read, sponsorship action, sponsor contact, Open Collective login, contribution, invoice, expense, reimbursement, payout, payment, or money movement was performed.
- The replay confirmed a no-login source-map path: public repository metadata, default branch, public funding-file path, raw funding keys, sponsor-page controls and copy, public sponsor counters, Open Collective collective page, fiscal-host label, public budget surfaces, and official docs can be shaped into a readiness table and owner handoff.
- The replay also confirmed the boundary: public `FUNDING.yml`, sponsor-page counters, Open Collective budget figures, fiscal-host labels, members-role JSON, and official docs are readiness evidence only. They do not prove sponsor demand, recurring revenue, payment success, payout success, tax readiness, legal sufficiency, accounting finality, or production readiness, and they do not authorize repository writes, sponsor contact, account setup, fiscal-host changes, invoices, reimbursements, payouts, payments, or sensitive-data retention.

## Placement Candidates

- Keep in incubator while demand evidence and replay coverage are still thin.
- If stable, merge into `playbooks/creator-monetization-operations.md`, `playbooks/open-source-repo-maintenance` if one exists later, or `playbooks/operations-execution-handoff.md` as an open-source funding-readiness subsection.
- Use `laws/surface-evidence-eval.md` for income, performance, tax/legal/accounting, and claim support.
- Use `laws/surface-ci-devops.md` and `laws/surface-mcp-tools-auth.md` for repository writes, GitHub APIs, credentials, webhooks, and account actions.
- Use `laws/surface-browser-runtime.md` for logged-in GitHub, Sponsors, Stripe, Open Collective, or fiscal-host portal reads.
