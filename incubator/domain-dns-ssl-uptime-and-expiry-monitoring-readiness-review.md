# Domain DNS SSL Uptime And Expiry Monitoring Readiness Review

Status: incubating.

## Signal

External feeds and small-operator anecdotes surface a recurring solo-operator workflow around domains expiring unexpectedly, renewal confusion, SSL certificate expiration, DNS or proxy misconfiguration, weak uptime alerting, and the practical embarrassment of only learning that a site is down when a customer, friend, or teammate says so. The useful mechanism is not "fix the website," "guarantee uptime," "restore a domain," "reissue the certificate," "make Cloudflare settings correct," or "send provider notices." It is a preparation workflow: turn registrar lifecycle rules, renewal notices, DNS and proxy posture, certificate and chain readbacks, monitoring notes, incident logs, and owner-supplied site evidence into a domain lifecycle ledger, DNS and proxy posture table, certificate and expiry queue, monitoring and false-positive queue, status and incident queue, reviewer questions, and a no-renew/no-change/no-contact handoff.

In the current scan, X was noisy but still useful for friction language. The strongest usable signal came from three pain shapes: renewal confusion after the owner already believed the domain had been renewed, SSL expiration causing immediate site or login breakage, and weak monitoring practices where the first alert is an outside message rather than a monitoring system. `dns misconfigured site down` was weaker as a direct X query, but the broader lane still maps cleanly to public-facing website operations. Unlike several recent document-heavy lanes, GitHub and open-source search were not empty here. `louislam/uptime-kuma` is a large, current self-hosted monitoring project, which suggests a secondary service path around monitoring-tool selection and configuration handoff. That is ecosystem signal, not demand proof.

## Source

- ICANN Expired Registration Recovery Policy: registrars must send at least two pre-expiration notices, one roughly a month before expiration and one roughly a week before; if not renewed or deleted, at least one additional post-expiration notice must be sent within five days after expiration; registrars may delete after expiration; the DNS resolution path can be interrupted while still renewable; registrars must allow renewal during the renewable period and restore the prior DNS resolution path immediately or as soon as commercially reasonable after renewal; gTLD registrations deleted after expiration have a 30-day Redemption Grace Period.
- Let's Encrypt FAQ: default certificates are valid for 90 days; renewal should be automated; the FAQ recommends renewing 90-day certificates every 60 days.
- Let's Encrypt Integration Guide: operators should check ACME Renewal Information at least twice a day; as a backstop, certificates should be renewed automatically when one third of lifetime remains, which for current 90-day certificates means renewing 30 days before expiration; retry logic and durable storage matter.
- Cloudflare proxied-DNS-records guidance: only A, AAAA, and CNAME records can be proxied; proxied records return Cloudflare anycast IPs instead of the origin IP; records used for domain verification or non-web purposes should generally remain DNS-only; mixing proxied and DNS-only A or AAAA records on the same name can change behavior; DNS-only records expose the origin IP and do not benefit from Cloudflare HTTP/HTTPS protection or analytics.
- Mozilla Server Side TLS wiki: the old public Mozilla wiki guidance moved; public TLS configuration guidance now points to `docs.tlsref.org`, which makes stale-source handling part of the workflow.
- UptimeRobot Help Center and locations guidance: the product explicitly exposes SSL monitoring, domain monitoring, DNS monitoring, and status pages; false positives can come from hosting or firewall blocks, security software, cache effects, or HEAD-request behavior; monitoring IP allow-listing can matter; downtime verification uses additional checks from different servers in the same region.
- Uptime Kuma GitHub metadata: current self-hosted monitoring tooling exists with a strong open-source footprint, which supports a config-handoff or tool-selection service shape without proving demand or granting install authority.
- Community, X, and ecosystem samples are useful only as low-authority friction evidence. They do not prove domain ownership, renewal safety, DNS correctness, certificate correctness, TLS security, uptime, availability, or profitable repeatability.

## Proposed Trigger

Use this candidate when a small business owner, solo founder, ecommerce seller, local-service shop, clinic office, law-office admin, nonprofit, publisher, agency, MSP assistant, web-maintenance freelancer, DevOps consultant, fractional CTO, uptime-monitoring consultant, or solo domain and website operations auditor needs a domain or expiry monitoring readiness packet, DNS and proxy review packet, SSL or certificate expiry readback packet, incident and status-page packet, or uptime-monitoring handoff before any live configuration change.

Use it especially when the task is preparation, classification, and evidence organization before domain renewal, registrar login, DNS changes, proxy changes, certificate issuance or renewal, monitoring configuration, provider contact, customer notice, or deployment action. Do not use it as domain authority, renewal authority, DNS authority, certificate authority, uptime authority, legal authority, security authority, or system-write authority.

## Proposed Mechanism

0. Classify evidence strength before framing the opportunity.
   - L0: X complaints, operator threads, "my site is down," renewal confusion posts, certificate-expired screenshots, or generic uptime advice. Use only as friction language and search language.
   - L1: unofficial blog posts, MSP service pages, community threads, or monitoring-tool marketing copy. Treat as workflow-shape evidence, not domain or certificate authority.
   - L2-lite: official ICANN, registrar, Cloudflare, Let's Encrypt, monitoring-vendor, and public TLS guidance. Treat as terminology, process, and boundary authority, not site-restoration authority.
   - L2-strong: owner-supplied renewal notices, registrar readbacks, DNS exports, Cloudflare proxy notes, certificate-chain or expiry readbacks, incident logs, alert-routing notes, status-page notes, and scoped engagement evidence.
1. Split the workflow into lanes before doing anything else.
   - Lane A: domain lifecycle and renewal lane covering registration date, expiration date, auto-renewal posture, renewal notices, redemption, and restore windows.
   - Lane B: DNS and proxy posture lane covering nameservers, DNSSEC, A, AAAA, CNAME, MX, TXT, SPF, DKIM, DMARC, CAA, SRV, HTTPS records, TTL, and proxy status.
   - Lane C: certificate and TLS lane covering issuer, SANs, chain, expiration date, ACME renewal posture, redirect and HSTS risk, and stale-source handling for TLS guidance.
   - Lane D: uptime, monitoring, status-page, incident, and alert lane covering monitoring types, SSL and domain expiry alerts, DNS monitoring, false positives, cache effects, allow-listing, incident history, and status-page communication prep.
   - Name domain, hostname or subdomain scope, provider scope, source snapshot, allowed artifact, and excluded actions for each lane.
2. Inventory official sources and readback surfaces.
   - Capture official policy pages, registrar notices, DNS exports, proxy notes, certificate readbacks, monitoring help pages, incident notes, and status-page cues, along with stale or broken source risks.
   - Record URL or file name, source date, lane type, field or artifact type, whose information is required, whether the source is official, owner-supplied, dashboard readback, public-facing, login-gated, or L0 or L1 signal.
3. Classify the packet and its risks.
   - Separate domain lifecycle facts, registrar facts, fee and restore facts, DNS facts, proxy facts, certificate facts, TLS facts, monitoring facts, incident facts, stale source, false-positive risk, allow-listing risk, cache risk, and notification-route risk.
   - Use statuses such as `source-supported candidate`, `needs renewal readback`, `needs DNS export`, `needs cert readback`, `needs monitoring review`, `needs owner review`, `needs MSP review`, `needs security review`, `stale`, `broken`, `login-gated`, `conflict`, and `ready for owner handoff`.
4. Build the operations ledgers.
   - For each domain or hostname, record registrar, expiration state, notice timing, redemption window, DNS posture, nameserver and DNSSEC state, proxy state, certificate issuer and expiry, monitoring coverage, alert route, false-positive risk, missing evidence, conflicting source, stale source, reviewer role, and forbidden next action.
   - Keep registrar credentials, billing details, payment methods, account IDs, origin IPs, hidden hostnames, internal incident notes, customer contacts, and security-sensitive infrastructure details as sensitive. Prefer pointers, redacted summaries, or field labels unless scoped retention is explicitly approved.
5. Prepare the reviewer queue.
   - Turn gaps into questions for the owner, IT reviewer, MSP reviewer, developer, security reviewer, domain owner, or system owner.
   - Do not contact registrars, DNS providers, hosting providers, CDN providers, monitoring vendors, customers, or internal teams without scoped approval.
6. Review action boundaries.
   - Mark domain renewal, transfer, cancellation, auto-renewal changes, nameserver changes, DNSSEC changes, DNS record changes, TTL changes, proxy changes, certificate issuance or renewal, ACME client changes, hosting or CDN changes, monitoring or status-page changes, and provider or customer notices as owner-approved follow-up only.
   - Treat registrar dashboards, DNS consoles, CDN consoles, certificate workflows, status pages, and monitoring consoles as account or action boundaries, not read-write permission.
7. Package the owner handoff.
   - Provide domain lifecycle ledger, DNS and proxy posture table, certificate and expiry queue, monitoring and false-positive queue, alert-routing and incident queue, reviewer queue, open questions, and no-domain-renewal/no-registrar-change/no-DNS-change/no-certificate-change/no-TLS-change/no-monitor-change/no-status-page-change/no-provider-contact/no-availability-proof/no-security-proof/no-system-write receipt.
   - Route executable actions to operations handoff only after explicit scoped approval.

## Initial Scope

This candidate is for source mapping, public-facing or owner-supplied readback interpretation, evidence organization, conservative draft support, lane classification, review handoff, and owner decision support. It must not renew, transfer, cancel, or change domains; change registrar settings; change nameservers, DNSSEC, DNS records, TTL, or proxy settings; issue or renew certificates; change monitoring or status-page settings; send notices; contact providers or customers; decide domain ownership; decide renewal safety; decide DNS correctness; decide certificate correctness; decide uptime or availability; or retain sensitive registrar, infrastructure, payment, or incident data without scoped approval.

It should produce a domain lifecycle ledger, DNS and proxy posture table, certificate and expiry queue, monitoring and false-positive queue, incident and alert queue, reviewer queue, open questions, risk boundary, and no-action receipt.

## Known Failure Modes

- Treating domain lifecycle, DNS posture, certificate management, and uptime monitoring as one uniform workflow instead of separate lanes.
- Treating a renewal notice, expiration date, DNS export, proxy flag, certificate screenshot, or alert as proof that the site is healthy or safe.
- Treating public TLS guidance, stale wiki pages, or old notes as current configuration authority without checking the latest official pointer.
- Treating monitoring false positives as evidence that the site is definitely up.
- Treating provider dashboards or monitoring tools as permission to change settings.
- Treating GitHub stars or monitoring-tool popularity as paid-demand proof.
- Logging into registrar, DNS, CDN, hosting, certificate, or monitoring consoles to mutate state without scoped approval.
- Retaining excessive registrar, origin-IP, customer, payment, or incident data.

## Verification Needed

- Replay on one domain-lifecycle packet with renewal notices and expiration date to test lifecycle-ledger extraction.
- Replay on one Cloudflare-style DNS and proxy packet to test proxied-versus-DNS-only boundary extraction.
- Replay on one certificate-expiry packet to test issuer, chain, expiry, and renewal-posture extraction.
- Replay on one monitoring false-positive packet to test allow-listing, cache, HEAD-request, and alert-route extraction.
- Compare with `regulated-document-evidence-map.md`, `project-workstream-status-synthesis.md`, `contract-fulfillment-tracking.md`, `operations-execution-handoff.md`, and `surface-ci-devops.md` to keep readiness support separate from live infrastructure mutation, deployment, provider contact, or system-of-record authority.
- Add eval coverage only if repeated failures show agents turning these packets into registrar changes, DNS changes, cert changes, monitoring changes, provider contact, or uptime guarantees.

## Placement Candidates

- Keep as incubator while source scope and sample replays are still being proven.
- If stable, promote to a productive playbook for domain, DNS, SSL, uptime, and expiry-monitoring readiness packets.
- If overlap proves modest, merge narrower sections into `regulated-document-evidence-map.md`, `project-workstream-status-synthesis.md`, or `operations-execution-handoff.md` instead of creating a broad infrastructure-specific playbook.
