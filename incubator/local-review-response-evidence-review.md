# Local Review Response Evidence Review

Status: incubating.

## Signal

External feeds increasingly frame Google reviews, public testimonials, local SEO, reputation management, and AI review replies as easy services for small businesses. The useful method is not to automate replies or manipulate reviews. The useful first product is an evidence packet that separates public review surfaces, official policy boundaries, draft responses, owner evidence, and no-action receipts.

## Proposed Trigger

Use this candidate when a user asks about:

- Google reviews, Maps reviews, Business Profile reviews, Yelp, Facebook recommendations, Trustpilot, marketplace reviews, or website testimonials;
- review replies, review-response drafts, negative review handling, reputation management, local SEO reviews, review request links, or review QR codes;
- AI review responder, AI reputation management, review digest, review summary, testimonial cleanup, or public review evidence packets for local businesses.

## Proposed Mechanism

1. Separate source levels.
   - L0: social posts, founder posts, agency claims, MRR screenshots, local SEO hype, and reputation-management revenue stories.
   - L1: official platform docs, FTC or regulator guidance, public business profiles, public review pages, public website testimonials, policy pages, and tool documentation.
   - L2: owner-supplied Business Profile screenshots or exports, review-management exports, customer-service records, CRM or job outcomes, support policies, approved tone guides, and legal/compliance review notes inside a scoped engagement.
2. Build a review source map before any account access.
   - Record public website review/testimonial pages, visible third-party review links, Google Maps/Business Profile surfaces if public, review request surfaces, footer/profile links, privacy/terms, source timestamps, and source gaps.
   - Keep public reviews, private messages, support tickets, CRM records, customer contact data, and owner exports in separate lanes.
   - Avoid copying customer names, handles, full review text, contact details, or sensitive allegations into broad artifacts unless the user has explicitly approved that scope.
3. Bind platform and regulator boundaries before drafting.
   - Google Business Profile review replies require verified business authority; replies are public after platform review and can notify the reviewer. Source: `https://support.google.com/business/answer/3474050`.
   - Google review requests, reviews, and ratings must reflect genuine experience; incentives for posting, changing, or removing reviews and selective positive-review solicitation are restricted. Sources: `https://support.google.com/business/answer/3474122`, `https://support.google.com/contributionpolicy/answer/7400114`.
   - FTC review/testimonial guidance creates high-risk surfaces for fake or false reviews, testimonial dissemination, sentiment-conditioned incentives, review suppression, intimidation, false accusations, and reputation-management intermediaries. Source: `https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers`.
4. Package reviewable work only.
   - Produce public source inventory, official policy table, source-gap table, review-surface ledger, issue/risk classification, unsent reply draft queue, owner evidence request list, reviewer question list, and no-post/no-flag/no-incentive/no-contact/no-account-write receipt.
   - Draft replies should separate facts, empathy, private-resolution invitation, owner-provided context, policy risk, and missing evidence. Mark every draft as unsent until the owner approves the exact platform, account, and text.
5. Treat review growth and remediation as owner-owned.
   - Review request campaigns, QR codes, incentive policies, customer outreach, refund or compensation offers, legal threats, review reporting, reply publication, review imports, review display changes, platform/API connections, and reputation-tool configuration all require explicit scoped approval.

## Initial Scope

This candidate is for public review-source mapping, official-policy evidence packets, response-draft queues, source-gap tables, owner questions, and no-action handoffs. It does not authorize public replies, edits, deletes, reports, review requests, incentives, customer or reviewer contact, refunds, compensation, legal threats, review suppression, testimonial rewriting, platform login, API connection, review-management tool setup, CRM writes, or legal/compliance/platform-policy conclusions.

## Known Failure Modes

- Treating X or agency revenue claims as proof that review-response work is paid, profitable, safe, or scalable.
- Treating public testimonials on a website as verified Google reviews or as proof of review count, rating, freshness, or reply backlog.
- Treating an AI-generated review summary or sentiment label as evidence that a review is fake, defamatory, policy-violating, or resolved.
- Drafting polished replies that admit fault, promise refunds, disclose private facts, attack reviewers, or imply legal conclusions without owner and qualified review.
- Posting, editing, deleting, reporting, requesting, incentivizing, importing, sorting, hiding, or suppressing reviews from a planning packet.
- Copying customer names, handles, full review text, contact details, medical/legal/financial details, minor data, or sensitive allegations into broad reusable artifacts.

## Verification Needed

- Replay on a public-only local business review surface with visible review snippets, while redacting or avoiding personal names and full review text in broad notes.
- Replay on a synthetic owner-supplied review backlog sample with no real customer identifiers.
- Compare Google Business Profile, Yelp, Facebook, marketplace, Trustpilot, and website testimonial source lanes because each has different authority and policy surfaces.
- Add eval coverage only if repeated failures show agents treating review evidence packets as reply, report, incentive, suppression, customer-contact, or compliance authority.

## Placement Candidates

- Keep in incubator while platform-specific boundaries and replay coverage are still thin.
- If stable, merge a subsection into `playbooks/community-and-comment-operations-planning.md`.
- Use `playbooks/local-store-operations.md` when reviews feed store or local-service operations.
- Use `playbooks/customer-support-quality-review.md` when review replies are assessed as support-quality artifacts.
- Use `playbooks/draft-and-evidence-packet.md` for high-risk response drafting.
- Use `laws/surface-browser-runtime.md` for logged-in review dashboards or profile reads.
- Use `laws/surface-mcp-tools-auth.md` for review APIs, CRM/ticketing tools, platform actions, or customer data.
- Use `laws/surface-evidence-eval.md` for policy, sentiment, fake-review, revenue, ranking, and improvement claims.
