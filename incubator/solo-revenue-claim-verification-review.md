# Solo Revenue Claim Verification Review

Status: incubating.

## Signal

External feeds often surface claims such as one-person SaaS, solo founder, no employees, a laptop, MRR, ARR, revenue, profit, or open startup screenshots. These signals are useful for scouting one-person-one-computer earning paths, but they are not income proof by themselves.

Recent scoped input: a logged-in X read surfaced a "1 person SaaS with $1.75M ARR" style claim. The referenced status later returned unavailable in Chrome, exact X search returned no results, and web search did not confirm the exact revenue claim. The signal remains pattern-only.

Counter-signal: public founder-owned or interview-backed cases such as Pieter Levels and Bannerbear show that solo or small-team internet businesses can be documented with stronger source trails. The method should therefore reject unsupported screenshots while still extracting useful buyer, channel, product, and delivery mechanisms from verified cases.

## Proposed Trigger

Use this candidate when a user asks whether a solo founder, one-person company, one-person-one-computer business, indie SaaS, open startup, or creator/business revenue claim is real, useful, or actionable.

Use it especially when the claim comes from X, LinkedIn, YouTube, podcasts, newsletters, founder screenshots, course pages, directories, or community posts and includes revenue, ARR, MRR, profit, employee count, "no employees", "AI employees", "one laptop", "one-person business", or "solo founder" language.

## Proposed Mechanism

1. Classify the source level before interpreting the number.
   - L0: social post, screenshot, quote tweet, course page, directory snippet, community comment, or unattributed image.
   - L1: founder-owned blog, open-startup page, transcript, podcast, public interview, repo, product page, or payment/pricing surface.
   - L2: official filing, platform/vendor dashboard readback supplied by the owner for review, trusted dataset, signed acquisition note, or audited source.
2. Verify availability and identity.
   - If the original post is deleted, unavailable, private, search-suppressed, or not reproducible, label the claim unverified.
   - Confirm product identity, founder identity, company identity, and whether the headcount claim refers to current team, historic stage, contractors, agencies, or outsourced support.
3. Separate metrics.
   - Do not collapse revenue, ARR, MRR, GMV, profit, net income, cash received, bookings, pipeline, users, downloads, subscribers, followers, views, repo stars, or valuation.
   - Record currency, period, date, source timestamp, and whether the figure is self-reported, interviewer-stated, vendor-stated, or independently confirmed.
4. Reconstruct the business path.
   - Buyer or user.
   - Paid pain or job.
   - Product, service, content, data, workflow, or evidence packet.
   - Acquisition channel.
   - Delivery workflow.
   - Support load.
   - Compliance, platform, payment, and trust boundaries.
   - First paid-proof candidate for a solo operator.
5. Assign a decision label.
   - Verified case: source trail supports identity, metric type, date, and plausible business path.
   - Plausible pattern: source trail supports product and mechanism but not the exact number.
   - Pattern-only: useful market or workflow clue, but revenue/headcount claim is not verified.
   - Reject: unavailable source, misleading metric, course bait, unverifiable screenshot, impossible claim, or unsafe account/action promise.
6. Map to existing Tianlu methods.
   - Use `playbooks/solo-business-lifecycle-planning.md` for buyer, demand, deliverable, MVP, pricing, channel, and review.
   - Use `incubator/open-domain-industry-horizon-scout.md` for cross-industry feed rotation and source-map preparation.
   - Use `playbooks/research-to-brief-synthesis.md` for evidence tables and opportunity briefs.
   - Use `laws/surface-evidence-eval.md` before treating revenue, traction, benchmark, or tool-performance claims as proof.
   - Use `laws/surface-browser-runtime.md` and `laws/surface-mcp-tools-auth.md` when logged-in feeds, account surfaces, customer data, payments, publication, outreach, or system writes are involved.

## Initial Scope

This candidate is for verification and opportunity framing only. It does not decide that a business model will work, that a user should build a product, that revenue is reachable, that a claim is fraudulent, or that account, payment, outreach, publication, installation, scraping, or system-write actions are authorized.

It should produce a claim ledger, source-status table, reconstructed business path, verification gap list, solo-operator fit note, risk boundary, and next evidence step.

## Known Failure Modes

- Treating a viral revenue screenshot as proof.
- Treating a deleted or unavailable post as a verified case because it was visible in an earlier run.
- Treating ARR/MRR/revenue as profit or cash flow.
- Treating one-person status as "no contractors, no agencies, no support burden, no compliance burden".
- Treating a venture-backed solo founder trend as the same thing as a cash-flow solo operator.
- Treating AI capability, repo stars, followers, or launch virality as buyer willingness to pay.
- Turning a verified case into an income promise or a build recommendation without buyer evidence and operator constraints.
- Using logged-in feed access as permission to like, follow, bookmark, reply, post, DM, export, download, scrape, or inspect session internals.

## Verification Needed

- Replay against several positive cases with founder-owned or interview-backed revenue trails.
- Replay against several negative cases where the original social post is deleted, private, or only shows a screenshot.
- Replay against non-software one-person-one-computer service packets such as chargeback evidence, Merchant Center feed diagnostics, accessibility audits, safety-record organization, and domain or SaaS-spend reviews.
- Add eval coverage only if this failure pattern repeats and existing evidence-eval or solo-business playbook coverage is insufficient.

## Placement Candidates

- Keep in incubator while source patterns are still being shaped.
- If stable, merge the mechanism into `solo-business-lifecycle-planning.md` as a revenue-claim verification subsection.
- If repeated failures involve hype screenshots or source deletion, add a narrow eval case under evidence/eval rather than a new broad law.
