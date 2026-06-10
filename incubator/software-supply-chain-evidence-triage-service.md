# Software Supply Chain Evidence Triage Service

Status: incubating.

## Signal

A solo operator with a computer can create useful work by turning software supply-chain signals into a reviewable evidence and action-priority packet. The recurring inputs include SBOM material, VEX statements, dependency manifests, Dependabot or dependency-review findings, GitHub security advisories, CISA Known Exploited Vulnerabilities (KEV), NIST SSDF guidance, OpenSSF Scorecard signals, and SLSA provenance or build-level notes.

This is a service and evidence-organization candidate, not an authority to install packages, patch dependencies, publish releases, approve production use, certify compliance, or claim that a system is secure.

## Source

- CISA SBOM topic page and SBOM minimum-elements guidance.
- CISA Known Exploited Vulnerabilities catalog feed.
- GitHub documentation for supply-chain security, Dependabot alerts, dependency review, and repository security advisories.
- NIST SP 800-218 Secure Software Development Framework.
- OpenSSF Scorecard project documentation.
- SLSA specification documentation.

## Proposed Trigger

Use this candidate when a user, maintainer, small team, client, or solo operator needs a computer-deliverable packet for SBOM/VEX/dependency/security-advisory triage, open-source dependency risk review, vulnerability evidence organization, dependency-upgrade prioritization, or supply-chain posture review, especially when the useful work is source mapping and review preparation rather than code mutation.

## Proposed Mechanism

1. Define the review scope.
   - Name repositories, packages, products, versions, environments, deployment surfaces, dependency manifests, SBOM files, advisory sources, and date window.
   - Mark anything missing, stale, unverifiable, private, or out of scope.
2. Inventory sources and signals.
   - Capture SBOM components, VEX status, package names and versions, advisory ids, CVEs, GHSA ids, KEV matches, exploit-known status, affected-version ranges, fixed versions, direct or transitive dependency status, and source timestamps.
   - Keep official or primary source links separate from scanner output and community commentary.
   - For public advisory-feed replays, record the exact endpoint or feed, read timestamp, advisory id, CVE/GHSA/OSV ids, ecosystem, package name, severity, CVSS/CWE data, published/updated/withdrawn timestamps, affected version ranges, fixed or missing fixed-version data, registry latest version, package release timestamps, KEV match or non-match, and maintainer advisory links when available.
   - For public repository lockfile replays, do not clone or install by default. Record the public file URL, branch, lockfile version, package manager, direct vs transitive status, dev/prod flag, reverse dependency path, package version, resolved registry URL, integrity presence, and line anchors for both the dependency spec and package entry.
   - Treat mismatches between GitHub Advisory Database, OSV, package registry metadata, NVD, CISA KEV, maintainer advisories, or scanner output as source conflicts that require owner or security-reviewer interpretation.
3. Build an evidence table.
   - For each item, record source, affected component, version evidence, exploit or KEV signal, fix or mitigation source, VEX status if available, reachability or applicability note if provided, confidence, and missing confirmations.
   - Label evidence as official source, maintainer source, platform advisory, scanner output, inferred mapping, or unverified signal.
   - Do not infer that a repository, product, deployment, or customer is affected unless the packet has manifest, lockfile, SBOM, dependency-path, environment, and version evidence for that specific scope.
4. Produce a triage queue.
   - Group items as urgent review, needs maintainer confirmation, likely not affected, fix available, needs upgrade plan, needs VEX clarification, needs owner decision, or monitor.
   - Include owner-role candidates such as maintainer, security reviewer, release owner, compliance owner, procurement owner, or customer-facing owner.
5. Build a safe handoff packet.
   - Provide no-install/no-patch/no-release/no-compliance-conclusion boundaries.
   - Include approval questions for dependency upgrades, lockfile changes, production deploys, customer notices, exception acceptance, VEX publication, or compliance claims.
6. Convert repeated high-risk gaps into Tianlu candidates only after replay.
   - Use evals for hard negatives such as advisory presence is not exploitability proof, clean SBOM is not security proof, VEX not-affected is not universal production clearance, and scanner pass is not install or release authority.

## Initial Scope

This candidate is about source-backed evidence organization, review preparation, and operational handoff. It can support a solo service offer such as a dependency-risk evidence packet, SBOM/VEX review packet, advisory-to-action queue, or open-source project supply-chain posture brief.

It must not be used to make legal, compliance, security-certification, procurement, production-readiness, or vulnerability-remediation conclusions. It must not authorize installs, dependency upgrades, lockfile writes, pull requests, releases, customer notices, vulnerability disclosures, exploit testing, account actions, secret access, or production changes.

## Known Failure Modes

- Treating an SBOM as proof that all dependencies are safe or complete.
- Treating a VEX `not affected` statement as universal production clearance without version, environment, reachability, and owner review.
- Treating a Dependabot alert, dependency-review result, scanner score, OpenSSF Scorecard result, SLSA level, or advisory as permission to patch, install, release, deploy, or notify customers.
- Confusing official source facts with scanner output, inferred mappings, repo stars, or community commentary.
- Dropping source timestamps, affected-version ranges, transitive dependency status, or fixed-version evidence.
- Treating a KEV non-match as proof that exploitation is absent, or treating a registry latest version as proof that a project is fixed.
- Resolving source conflicts by choosing the most convenient advisory field instead of recording the conflict and asking for owner review.
- Treating a public lockfile hit as proof of exploitability, production exposure, owner priority, remediation authority, PR authority, or release readiness without dependency path, environment, reachability, branch, and owner review.
- Retaining private repository, customer, vendor, or system inventory data beyond the scoped review.
- Claiming compliance, procurement acceptance, vulnerability remediation, or production readiness from an evidence packet.

## Verification Needed

- Replay on a small public repository with public dependency alerts or advisory data.
- Replay completed once on a public `package-lock.json` where `shell-quote@1.8.3` appeared as a transitive dev dependency through `concurrently`; the replay confirmed that a lockfile hit can support a review packet but cannot prove runtime reachability, exploitability, production exposure, or remediation authority.
- Replay on an SBOM sample where component identity, version, and advisory matching are ambiguous.
- Replay on a VEX sample where status and justification require owner review.
- Negative tests for SBOM-is-security-proof, VEX-is-clearance, scanner-pass-is-release-authority, and advisory-is-patch-permission.
- Review against `surface-install-supply-chain`, `surface-ci-devops`, `surface-mcp-tools-auth`, `surface-evidence-eval`, `regulated-document-evidence-map`, and `operations-execution-handoff`.

## Placement Candidates

- Keep as incubator while the output shape and negative tests are still being proven.
- If stable, promote to a productive playbook for software supply-chain evidence triage.
- Narrow evals may be added if repeated failures appear around SBOM/VEX/advisory/scanner outputs becoming install, patch, release, compliance, or production authority.
