# my-apps

Static personal dashboard (plain HTML/CSS/JS, no build step) that links out to Dennis's other webapps. Deploy root is `public/`; everything outside it (this file, README, workflow) is not deployed.

Source of truth for the app list is the `APPS` array in `public/js/apps.js` — adding a future app is a one-object edit there, nothing else needs to change.

No backend, no Firebase — GitHub Pages only, deployed via `.github/workflows/deploy-pages.yml` on push to `main`. Follows the same deploy-ask-first convention as Dennis's other projects: don't push to `main` (which triggers a live deploy) without his explicit go-ahead.
