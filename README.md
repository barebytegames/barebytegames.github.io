# Barebyte — landing, policies and support pages

Plain HTML and CSS. Barebyte's public landing page (the link in its YouTube and TikTok profiles), and
the policy pages its games link to, at addresses that do not move.

**Live site:** <https://barebytegames.github.io/>, Barebyte's public landing URL (the `barebytegames`
organization, since 2026-10-13).

| Page | URL |
|---|---|
| Barebyte landing (the studio, its games and store links, channels, policies) | <https://barebytegames.github.io/> |
| WAKE — Privacy Policy | <https://barebytegames.github.io/privacy/wake/> |
| POLAR — Privacy Policy | <https://barebytegames.github.io/privacy/polar/> |
| Barebyte Content OS — homepage | <https://barebytegames.github.io/content-os/> |
| Barebyte Content OS — Privacy Policy | <https://barebytegames.github.io/content-os/privacy/> |
| Barebyte Content OS — TikTok authorization redirect page (static, no scripts) | <https://barebytegames.github.io/content-os/tiktok/callback/> |

**The previous site stays live and unchanged** at <https://quangducnguyen1205.github.io/>
(repository `quangducnguyen1205/quangducnguyen1205.github.io`), as compatibility infrastructure. These
addresses are registered with providers and stores, so they must keep working until each registration is
moved:
- the Google OAuth app's homepage and privacy policy (`/content-os/`, `/content-os/privacy/`);
- the TikTok redirect URI (`/content-os/tiktok/callback/`);
- the privacy-policy links already given to Google Play.

Privacy inquiries are still taken in that repository's issue tracker; the pages link there.

## What is in here

```
index.html            the Barebyte landing page; add a game as one more card under "Games"
brand/                barebyte-avatar.svg, the studio mark. A deployed copy of the canonical master in the
                      private workspace (assets/brand/, SHA-256 b0462b2a…f47a9a); change it there, then copy it here
privacy/wake/         WAKE's privacy policy (English governing, Vietnamese translation below it)
privacy/polar/        POLAR's privacy policy
content-os/           Barebyte Content OS: its homepage and privacy/ (linked from its Google OAuth consent screen)
home.css              the homepage's own stylesheet (only index.html links it)
home.js               homepage-only pointer tilt (decorative, ~1 KB, no network or storage); policy pages run no scripts
style.css             policy, Content OS and Growth pages; keep homepage rules out of it
.nojekyll             serve the files as they are; no Jekyll build
```

## Homepage art and release claims

The public homepage features all eight Barebyte Android games: POLAR, WAKE, RIPPLE, THREAD, EXACTLY ZERO, NEXT, HOLD and NEVER ERRS. Game DL-126 (2026-11-02) records all eight as public Production; this is Game-owned publication evidence, not proof of installations. Recheck actual release/territory status before future edits. Avoid universal country-availability claims; Vietnam is excluded from Barebyte's Google Play Production targeting. The official HOLD press kit is /press/hold/; the original media copied from its private Game source must retain identical Git blob SHAs.

`media/` holds **copied original game screenshots / feature art**, not generated fake gameplay. The source Git blob IDs are preserved byte-for-byte when copied into this repository. Game source of truth:
- `polar/prestore/google-play/phone-screenshots/03-stage5-corridor.png`, `04-stage6-gate.png`, and `feature-graphic-1024x500.png`
- `wake/prestore/screenshots/01-run.png`
- `ripple/prestore/google-play/phone-screenshots/03-ripple-mid-cascade.png` and `feature-graphic-1024x500.png`
- `thread/prestore/google-play/phone-screenshots/04-a-cut-and-its-cost.png` and `feature-graphic-1024x500.png`
- `exactly-zero/prestore/google-play/phone-screenshots/01-the-long-way-won.png` and `feature-graphic-1024x500.png`
- `next/prestore/google-play/phone-screenshots/03-plan-one-move-ahead.png`
- `hold/prestore/google-play/phone-screenshots/01-title.png` through `05-two-warnings.png`, plus original feature graphic and icon (for `/press/hold/`)
- `never-errs/prestore/google-play/phone-screenshots/03-both-rows.png`

This is the owner's HQ-directed creative redesign (2026-11-01). Growth owns ongoing marketing/SEO feedback and minor landing improvements; HQ keeps cross-studio brand direction. Changes to third-party OAuth callback or policy files are **not** part of homepage redesign authority. Protected `/privacy/`, `/content-os/`, `/growth/`, and brand paths must remain stable.

## What is deliberately not in here

No game source. No builds, APKs or App Bundles. No signing keys, certificates or passwords. No
service-account credentials or API tokens. No internal engineering reports or governance records.
No personal identity documents.

And almost nothing that runs: no framework, no npm, no build step, no JavaScript beyond the homepage's decorative home.js (owner-approved 2026-11-01), no analytics, no tracking
pixels, no cookies, no external fonts and no third-party assets. The homepage additionally loads
locally hosted, verified first-party screenshots and Play feature artwork from the five actual
Production game repositories; it does not hotlink private GitHub assets or remote image CDNs.

## Privacy inquiries

Publicly, so the answer is visible to everyone with the same question:
[open a privacy inquiry](https://github.com/quangducnguyen1205/quangducnguyen1205.github.io/issues/new?labels=privacy&template=privacy-inquiry.yml).

Please do not put personal information in a public issue. None is needed to answer a policy question.

## Changing a policy

A policy here describes a released build. Update the page **before** releasing a build whose
behaviour differs from it, and move the effective date with it.
