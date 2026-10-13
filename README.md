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
style.css             one stylesheet, system fonts only
.nojekyll             serve the files as they are; no Jekyll build
```

## What is deliberately not in here

No game source. No builds, APKs or App Bundles. No signing keys, certificates or passwords. No
service-account credentials or API tokens. No internal engineering reports or governance records.
No personal identity documents.

And nothing that runs: no framework, no npm, no build step, no JavaScript, no analytics, no tracking
pixels, no cookies, no external fonts and no third-party assets. Every page loads exactly three files
from this repository (the page, `style.css` and the studio mark) and nothing from anywhere else.

## Privacy inquiries

Publicly, so the answer is visible to everyone with the same question:
[open a privacy inquiry](https://github.com/quangducnguyen1205/quangducnguyen1205.github.io/issues/new?labels=privacy&template=privacy-inquiry.yml).

Please do not put personal information in a public issue. None is needed to answer a policy question.

## Changing a policy

A policy here describes a released build. Update the page **before** releasing a build whose
behaviour differs from it, and move the effective date with it.
