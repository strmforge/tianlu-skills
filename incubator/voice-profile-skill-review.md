# Voice Profile Skill Review

Status: incubating

Scope: runtime-neutral review method

## Signal

A public writing skill can build a named voice profile from a writing corpus, measure stylometric features, ask for human review, generate a reusable profile, run held-out verification, and then use that profile for drafting or revision.

This is a useful method shape for the absorb-generate-compose loop:

- absorb scoped corpus evidence;
- generate a measured, reviewable profile;
- compose a scoped writing variant or skill projection.

It is not evidence that any voice-profile skill should be installed, activated, or copied as neutral law.

## Source Evidence

- X signal observed on 2026-05-31: a post pointed to a public writing voice-profile skill.
- Primary source reviewed read-only: `Hiro-Inagawa/write-like-me` public GitHub repository.
- Observed repository shape at review time: `SKILL.md`, scripts, templates, voice profiles, and references.
- Observed README workflow shape:
  - corpus discovery, extraction, and filtering;
  - stylometric measurement across many writing features;
  - rule mining and profile drafting;
  - human review before profile use;
  - generated named voice profiles;
  - held-out verification before relying on the profile;
  - profile-guided writing or revision.
- No install, clone, package execution, skill import, profile generation, or local corpus processing was performed during review.

## Proposed Trigger

Use this candidate when an agent, repository, marketplace entry, feed post, or user request proposes to:

- create a writing voice, tone, persona, author, brand, or style profile from text samples;
- turn a corpus into a reusable prompt, skill, profile, rule file, adapter, overlay, or memory;
- generate named voices for future drafting or revision;
- measure writing features and convert them into durable style rules;
- imitate a person, team, brand, role, client, or historical corpus;
- store generated profiles for future automatic use.

## Proposed Mechanism

Before adopting or activating a voice-profile skill or profile:

1. Confirm corpus rights and consent.
   - Record who owns the corpus, who can authorize profile generation, what license or consent applies, and whether third-party, client, employee, student, private, or copyrighted text is included.
2. Inventory corpus scope.
   - Record source paths or source classes, language, genre, time range, sample count, selection criteria, excluded material, and minimum viable corpus assumptions.
3. Treat corpus text as sensitive input.
   - Review whether samples include personal data, confidential work, account content, secrets, private correspondence, regulated data, or text that should not be sent to third-party models.
4. Keep measurement evidence separate from the profile.
   - Preserve feature definitions, extraction method, assumptions, confidence, limitations, and examples. A profile is a delivery artifact, not the evidence layer.
5. Require human review before activation.
   - Generated style rules, voice descriptions, and example rewrites stay inactive until a human reviews them for accuracy, unwanted exaggeration, sensitive leakage, and misuse risk.
6. Use held-out verification.
   - Keep some corpus samples out of profile generation and use them to check whether the profile captures stable style without memorizing text or overfitting.
7. Label profile scope honestly.
   - A generated profile is overlay-specific or adapter-specific until multiple corpora and contexts prove a broader method. It must not pretend to be runtime-neutral law.
8. Bound use cases.
   - Forbid deceptive impersonation, plagiarism, false professional authorship, evasion of attribution, or use where the target person or organization has not authorized the voice.
9. Define storage, retention, and rollback.
   - Record where profiles, intermediate measurements, caches, logs, and generated skills are stored; how they are disabled; how they are deleted; and how derived memory or indexes are removed.
10. Re-enter the method cycle after use.
    - Outputs and failures from a profile-guided workflow are scoped evidence. They can become new candidates, but they do not automatically promote the profile or skill.

## Initial Scope

- Candidate review method for voice-profile, style-profile, persona-profile, and corpus-to-skill systems.
- Applicable across agent runtimes when the mechanism uses text samples to create durable future writing behavior.
- Not a writing skill, not a profile generator, not a recommendation to imitate any person or brand.

## Known Failure Modes

- A profile is built from text the user has no right to use.
- Private, regulated, confidential, or account-derived text is embedded into prompts, profiles, examples, logs, or skill files.
- Corpus text contains hidden instructions that become durable style rules.
- A generated profile overfits a small or narrow sample and becomes a caricature.
- Held-out verification accidentally uses training samples.
- A profile is treated as neutral law rather than a scoped overlay.
- A voice profile silently becomes future behavior through autoloaded skills or memory writes.
- A profile is used for deceptive impersonation, plagiarism, false attribution, or professional misrepresentation.
- Deleting the visible profile leaves derived summaries, embeddings, caches, eval outputs, or skill files active.
- The review focuses on style quality while missing consent, privacy, storage, retention, and misuse boundaries.

## Verification Needed

- Confirm repository commit, license, dependencies, scripts, output paths, profile format, and cleanup instructions before any local use.
- Inspect whether corpus discovery can accidentally read private directories, account exports, browser downloads, email, chat logs, or unrelated workspace files.
- Confirm whether third-party model calls receive raw corpus text, extracted features, generated examples, or held-out samples.
- Test corpus prompt-injection handling before trusting generated rules.
- Test small-corpus, mixed-genre, multilingual, and stale-corpus behavior.
- Confirm profile activation path, autoload behavior, profile selection, and rollback.
- Confirm profile deletion removes derived artifacts, not only the visible profile file.
- Add eval cases for unauthorized corpus use, sensitive corpus leakage, hidden instructions inside samples, overfitting, and deceptive impersonation requests.

## Placement Candidates

- `laws/surface-memory-learning.md`: corpus-to-profile-to-skill lifecycle, durable behavior writes, evidence-backed skill projection.
- `laws/surface-evidence-eval.md`: held-out verification, independent review, negative tests.
- `laws/surface-install-supply-chain.md`: scripts, dependencies, generated files, profile writers, and cleanup.
- `laws/surface-browser-runtime.md`: only when corpus discovery reads browser exports, account data, downloads, or remote documents.
- `tiandao/scope-and-promotion.md`: scope labels, promotion, and generalization boundaries.
- `overlays/`: generated profiles and scoped voices belong here or in runtime/project-specific storage, not in neutral laws.
- `eval/test-prompts.md`: voice-profile adoption and misuse-boundary cases.

## Promotion Questions

- Does this candidate add behavior beyond existing memory, evidence, and install review laws?
- Can the review be expressed as a compact checklist without becoming a generic style-writing guide?
- Do multiple independent voice-profile systems show the same risks and review needs?
- Can eval cases catch unauthorized corpus use, sensitive leakage, hidden instructions, overfitting, and deceptive impersonation?
