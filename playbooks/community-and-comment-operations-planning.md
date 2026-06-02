# Playbook: Community And Comment Operations Planning

Status: seed draft

Scope: community-comment-operations-neutral. This playbook helps an agent turn public comments, product reviews, creator comments, community replies, message-request summaries, social mentions, UGC signals, moderation notes, and inbox snippets into reviewable community operations artifacts. It is not tied to one social network, marketplace, creator account, business profile, review site, community platform, moderation tool, country, niche, or brand voice.

## Purpose

Help an agent produce useful community and comment operations work products: source intake ledger, intent and risk classification, response draft queue, moderation review queue, escalation map, lead or customer issue routing notes, FAQ and content follow-up ideas, feedback-to-backlog packet, reviewer question list, and close-loop handoff.

This playbook supports reading, organizing, drafting, routing, and review. It does not reply to comments, send DMs, hide, delete, approve, report, block, ban, pin, heart, like, follow, publish, contact leads, promise outcomes, decide platform or legal compliance, approve refunds or compensation, mutate accounts, or write community, support, CRM, marketplace, ad, review, or creator systems.

## Inputs

- Public comments, product reviews, creator comments, community posts, social replies, mention snippets, message-request summaries, inbox excerpts, live chat summaries, or moderation queue notes.
- Source context such as platform, post, product, listing, video, campaign, community, business profile, date range, language, author type, sentiment, and visibility.
- User objective such as learning from comments, drafting reply options, finding FAQ gaps, identifying support issues, routing leads, reviewing moderation needs, or preparing a community handoff.
- Brand, creator, support, review-response, moderation, escalation, sponsorship, affiliate, legal, safety, or platform-policy constraints supplied by the user.
- Known privacy, data retention, sensitive-data, customer, lead, minor, health, payment, identity, location, or private-message boundaries.

## Procedure

1. Define the intake boundary.
   - Name the source, platform, account or profile type, post or product scope, date range, languages, visibility, and excluded material.
   - Separate public comments and reviews from private messages, message requests, support tickets, lead data, and customer records.
   - Keep raw private text, handles, contact details, and sensitive data out of broad artifacts unless explicitly approved.

2. Build the comment and community intake ledger.
   - Normalize each signal into source type, source pointer, visible context, stated issue or reaction, requested outcome, sentiment, urgency, and evidence note.
   - Mark whether the item is public comment, review, support-like issue, lead-like inquiry, complaint, praise, objection, abuse, spam, safety concern, regulated claim, policy concern, or unclear.

3. Classify intent, risk, and routing.
   - Group items by intent: answer needed, clarification needed, support routing, sales or lead question, product feedback, content idea, moderation review, escalation, no-action, or noise.
   - Flag items that may involve minors, harassment, threats, self-harm, medical, legal, financial, political, product-safety, private data, payment, identity, or account issues.
   - Treat platform moderation labels, AI comment summaries, sentiment labels, hidden-word hits, and ranking signals as review aids, not final decisions.

4. Prepare response and moderation review queues.
   - Draft response options with facts, empathy, policy references, uncertainty, and approval needs separated.
   - Produce moderation review questions for hide, delete, approve, report, block, ban, pin, keyword, or filter decisions without taking those actions.
   - Keep private-message replies, public replies, customer support replies, lead outreach, and brand statements in separate queues.

5. Convert recurring signals into useful work.
   - Turn repeated questions, objections, complaints, praise, misunderstandings, or UGC themes into FAQ candidates, content follow-ups, product or listing issues, support macro candidates, campaign learning, or backlog items.
   - Preserve source evidence and uncertainty instead of treating comment volume as automatic priority.

6. Prepare escalation and close-loop handoff.
   - Produce an escalation map for support, sales, legal, safety, compliance, product, creator, community manager, or operations owner review.
   - Include unsent reply drafts, moderation questions, source evidence, risk flags, open questions, and suggested next review action.
   - Separate the handoff from live account actions, publication, customer contact, lead contact, moderation, or system writes.

7. Review outcomes after approved actions.
   - When the user provides approved outcomes, compare response quality, unresolved issues, recurring themes, policy friction, support load, lead quality, and content follow-up value.
   - Feed learning into `feedback-to-backlog-operations.md`, `content-operations.md`, `customer-support-quality-review.md`, or campaign review as scoped evidence.

## Outputs

- Comment, review, and community source intake ledger.
- Intent, sentiment, urgency, and risk classification table.
- Response draft queue.
- Moderation review queue.
- Support, sales, legal, safety, product, creator, or community escalation map.
- Lead and customer issue routing notes.
- FAQ, content, listing, product, campaign, or support follow-up candidates.
- Feedback-to-backlog packet.
- Reviewer question list.
- Close-loop community operations handoff.

## Quality Signals

- The output separates public comments, reviews, private messages, support issues, lead inquiries, and moderation signals.
- Each proposed reply, escalation, or backlog item points back to source evidence.
- Sensitive, regulated, abusive, safety, and private-data surfaces are flagged before drafting outward communication.
- Moderation actions are framed as review questions, not automated account actions.
- Repeated comments become concrete FAQ, content, product, support, or campaign learning without overclaiming representativeness.

## Human Checkpoints

- Public reply, private reply, DM, customer message, lead outreach, brand statement, apology, promise, legal notice, or external send.
- Hide, delete, approve, report, block, ban, restrict, mute, pin, heart, like, follow, keyword-filter, moderation setting, or account action.
- Refund, replacement, compensation, discount, warranty, order change, subscription change, support escalation, ticket mutation, CRM write, or customer-system write.
- Platform-policy, advertising, endorsement, legal, medical, financial, safety, political, employment, harassment, child-safety, or regulated-claim conclusion.
- Retention or redistribution of private messages, handles, contact details, customer, lead, payment, identity, location, health, minor, safety, account, or unpublished-content data.

## Composable With

- `feedback-to-backlog-operations.md` when comment themes should become backlog items, close-loop records, or escalation packets.
- `content-operations.md` when comments should feed topic pools, FAQ content, clarification posts, or content packaging.
- `customer-support-quality-review.md` when response drafts, support replies, or review replies need QA without sending or judging staff.
- `commerce-operations.md` and `marketplace-listing-and-catalog-readiness-planning.md` when comments or reviews expose product, listing, shipping, return, or offer issues.
- `campaign-and-ad-operations-planning.md` when ad comments, boosted-post replies, campaign objections, or landing-page questions should inform campaign review.
- `creator-monetization-operations.md` and `creator-rights-and-disclosure-clearance-planning.md` when comments involve sponsorships, affiliates, paid promotion, UGC, endorsements, or disclosure.
- `draft-and-evidence-packet.md` for high-constraint outward drafts.
- `../laws/surface-browser-runtime.md` when reading logged-in social, review, marketplace, creator, support, or community dashboards.
- `../laws/surface-mcp-tools-auth.md` for comment APIs, moderation tools, inbox tools, CRM tools, customer data, lead data, or external sends.
- `../laws/surface-evidence-eval.md` for source strength, sentiment or AI-summary uncertainty, platform-policy claims, and replay cases.

## Evidence

Source signal: broad X and domain scout review found recurring creator, ecommerce, social-commerce, and community-management needs around reading comments, customer complaints, reviews, DMs, UGC, comment moderation, and turning exact audience language into content, product, or growth work. Official-source review of YouTube comment settings and reporting, TikTok comment management and comment insights, Instagram hidden comments and message requests, Google Business Profile review replies, and FTC advertising, endorsement, and customer-review guidance confirmed that comment operations cross reply, moderation, account, private-message, review, disclosure, and regulated-claim boundaries.

Validation state: seed draft. Needs replay against creator comment queues, YouTube channel comments, TikTok Shop or social-commerce comments, Google Business Profile reviews, marketplace product reviews, community group moderation queues, message-request triage, UGC campaign feedback, and ad comment review before promotion.

Known failures:

- Treating a comment operations packet as permission to reply, DM, hide, delete, approve, report, block, ban, pin, like, follow, or mutate account settings.
- Letting AI comment summaries, sentiment labels, keyword filters, or moderation queues become final decisions without human review.
- Copying private messages, handles, contact details, or sensitive customer and lead data into broad artifacts.
- Turning comment volume into product, content, campaign, or policy priority without segment, source, risk, and evidence review.
- Producing brand, legal, safety, medical, financial, harassment, child-safety, endorsement, or regulated-claim conclusions from comments alone.
