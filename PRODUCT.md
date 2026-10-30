# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dennis, mostly on his own. He opens it from his phone's home screen (installed as a PWA) or a desktop browser to jump into one of his own webapps. Other people may see it, but they are not the audience it is designed for.

## Product Purpose

A personal launcher for every webapp Dennis has built. Success is fast launching: find the app and open it within a second or two.

## Positioning

A private launcher for one person's own apps, rather than a public portfolio. It is organised around what he reaches for, not around presenting the work.

## Operating Context

- Opened from the phone home screen (iOS/Android PWA, standalone display) or a desktop browser tab.
- Each card opens the app in a new tab.
- New apps are added after a deploy via the `add-to-dashboard` skill.

## Capabilities and Constraints

- Static HTML/CSS/JS, no build step, GitHub Pages deployed from `public/` on push to `main`. Pushing redeploys, so ask Dennis before pushing.
- `public/js/apps.js` is the single source of truth: an `APPS` array of `{name, url, description, icon}`.
- Must keep working as an installed home-screen app (`manifest.json`, `icons/`, apple-touch meta).
- Undecided: whether the `apps.js` shape or the emoji icons change. Dennis did not mark either as binding.

## Brand Commitments

None binding. Current name is "My Apps".

## Evidence on Hand

14 real apps in `public/js/apps.js`. There are no usage stats, screenshots or per-app imagery; do not invent any.

## Product Principles

1. Launching speed beats presentation.
2. One person's tool: it can be personal and opinionated, with no marketing voice.
3. Adding an app stays a trivial edit.
4. Works first on a phone held in one hand.
