# Local Service Missed-Call Intake Review

Status: incubating.

## Signal

External feeds increasingly frame missed calls, slow callbacks, after-hours gaps, AI receptionists, and missed-call text-back as cash-flow leaks for local services, home services, contractors, restaurants, clinics, and appointment-based businesses.

The useful method is not to promise an AI receptionist or automated SMS system. The useful first product is an evidence packet that shows where the intake path leaks, which source proves it, what remains unknown, and what an owner can approve next.

## Proposed Trigger

Use this candidate when a user asks about:

- missed calls, unanswered calls, after-hours calls, call-back delays, or phone intake leaks;
- AI receptionist, AI voice agent, call answering, call routing, call tracking, or missed-call text-back for local businesses;
- local-service appointment intake, booking follow-up, form-to-call follow-up, or lead response speed;
- turning public business profile, website, phone, form, tracking, or owner-supplied call logs into a revenue-leak or owner-handoff packet.

## Proposed Mechanism

1. Separate opportunity claims from execution authority.
   - L0: social posts, founder posts, screenshots, agency pricing claims, "lost revenue" claims, and AI receptionist anecdotes.
   - L1: official platform docs, vendor feature docs, marketplace listings, pricing pages, integration docs, and public service pages.
   - L2: owner-supplied call logs, verified Business Profile performance, call-tracking reports, CRM/ticket outcomes, signed case studies, or billing evidence inside a scoped engagement.
2. Build a public intake source map before requesting account access.
   - Record public website phone numbers, contact forms, hours, booking links, service-area notes, Google Business Profile contact surfaces, social/contact links, privacy/terms, review/contact cues, and source timestamps.
   - Mark source gaps explicitly: no public hours, no after-hours path, no booking link, no text option, no service-area clarity, no emergency or non-emergency routing, no privacy/consent language, or stale contact information.
   - Separate national phone numbers, local/location phone numbers, placeholder or example phone numbers, location-finder forms, booking forms, callback forms, consent checkboxes, and visible submit labels. Do not submit a form, trigger a call, or test a phone number during a public-only sample.
   - In single-store or small-business samples, separate service-area lists from physical locations, and treat public business hours, same-business-day language, service-window copy, blank `tel:` links, and chat/help widgets as observed source surfaces only. They are not proof of staffing, response SLA, missed calls, after-hours coverage, or broken intake.
   - When extracting public forms, keep visible field labels/options, submit labels, opt-in text, privacy/terms links, and hidden implementation field names in separate rows. Visible SMS opt-in, STOP/HELP text, or privacy links are consent surfaces, not SMS compliance proof.
3. If the owner supplies private data, keep it as a review packet, not system authority.
   - Compare Business Profile call-button clicks, call-tracking unanswered-call reports, phone-system call logs, voicemail records, form submissions, booking requests, CRM stages, callback times, close/no-show outcomes, and staffing schedules.
   - Separate click-to-call, real inbound calls, answered calls, missed/unanswered calls, voicemail, abandoned calls, text conversations, bookings, qualified leads, revenue, and customer outcomes.
4. Treat automation as a later approval step.
   - A draft call flow, missed-call text-back, AI receptionist prompt, appointment script, callback SLA, or routing matrix is planning evidence only.
   - Do not send SMS, make calls, register A2P/10DLC campaigns, change phone routing, edit Google Business Profile chat/contact options, connect CallRail/Twilio/OpenPhone/CRM/help-desk accounts, import contacts, or write system records without explicit scoped approval.
5. Add compliance and consent gates before any message-send surface.
   - Record jurisdiction, sender type, consent source, opt-out handling, quiet hours, sensitive verticals, call recording rules, A2P/10DLC registration, phone-number ownership, and platform policy requirements.
   - If these are missing, the correct output is a gap table and owner question list, not an automation.
6. Package a human-owned handoff.
   - Output public source map, owner-supplied evidence ledger, missed-call and callback-SLA table, after-hours gap table, channel/consent/compliance checklist, P0/P1/P2 action queue, unsent scripts, approval worksheet, and no-call/no-text/no-system-write receipt.

## Initial Scope

This candidate is for intake evidence review, source mapping, owner decision support, and no-write handoff. It does not authorize phone calls, SMS, WhatsApp, email, chat, callback, customer outreach, form submission, Google Business Profile edits, call-tracking configuration, A2P/10DLC registration, AI receptionist deployment, CRM/help-desk writes, contact import, appointment booking, quote commitment, legal/compliance conclusion, revenue proof, or sensitive customer-data retention.

## Known Failure Modes

- Treating social claims about `$5k/day`, `$3k-$15k/month leaks`, or agency pricing as proof of customer payment or owner ROI.
- Treating Google Business Profile call-button clicks as completed calls, qualified leads, or missed calls.
- Forgetting that Google Business Profile chat and call history have changed or may be unavailable, while performance metrics are still not call recordings.
- Treating a CallRail, Twilio, OpenPhone, Avoca, ServiceTitan, or other vendor feature as permission to configure accounts, send messages, or contact customers.
- Sending missed-call text-back messages without verified consent, sender registration, opt-out handling, quiet-hour handling, and owner approval.
- Mixing customer phone numbers, call recordings, messages, voicemails, health/legal/financial details, or location data into a generic tool or durable note.
- Letting an AI receptionist answer, book, quote, triage, diagnose, promise arrival windows, or commit prices without domain-owner review and explicit deployment authority.
- Treating a service-area list as multiple locations, drive-time coverage, or staffing capacity.
- Treating public hours, same-business-day copy, service-window copy, text opt-in wording, or a visible chat widget as evidence of actual callback SLA, SMS compliance, live support, missed-call volume, or revenue leakage.

## Verification Needed

- Replay across several public-only local business samples where only website/profile/contact surfaces are reviewed, including single-store or small-business sites with forms, visible hours, service-area copy, and opt-in language.
- Include at least one location-specific page in a public-only sample when the business has location pages, so the packet can distinguish brand-level intake from local intake without contacting the business.
- Replay on a synthetic owner-supplied call-log sample with no real phone numbers, then compare the missed-call ledger, callback-SLA table, and owner action queue.
- Compare Google Business Profile performance metrics, call-tracking unanswered-call reports, phone-system logs, and CRM outcomes when a real owner authorizes access.
- Check current official/vendor docs for Google Business Profile contact features, CallRail unanswered/automated-response behavior, Twilio/A2P requirements, and relevant SMS/call consent rules before any send or configuration action.
- Add eval coverage only if repeated failures show agents are treating intake evidence packets as call, SMS, booking, or CRM authority.

## Placement Candidates

- Keep in incubator while evidence coverage and compliance boundaries are still being shaped.
- If stable, merge into `playbooks/field-service-and-mobile-service-operations-planning.md`, `playbooks/local-store-operations.md`, `playbooks/customer-support-quality-review.md`, or `playbooks/operations-execution-handoff.md` as an intake-leak evidence subsection.
- Use `laws/surface-mcp-tools-auth.md` for account connections, SMS/call APIs, CRM writes, and platform actions.
- Use `laws/surface-browser-runtime.md` for logged-in profile/account reads.
- Use `laws/surface-evidence-eval.md` for revenue, lead, compliance, and outcome claims.
