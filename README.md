# My Apps

A personal dashboard linking out to all the webapps I've built, deployed as a static site.

Live at: https://therealmenace10040.github.io/my-apps/

## How it works

Plain HTML/CSS/JS, no build step. `public/js/apps.js` holds a single `APPS` array — one object per app — that gets rendered into the card grid on page load.

## Adding a new app

Edit the `APPS` array in `public/js/apps.js` and add one object:

```js
{
  name: "App Name",
  url: "https://example.com",
  description: "One-line description.",
  icon: "🎨",
}
```

## Local dev

Serve the `public/` folder, e.g.:

```
python -m http.server 8123 --directory public
```

Then open http://localhost:8123. Opening `public/index.html` directly via `file://` also works.

## Deployment

GitHub Pages via GitHub Actions (`.github/workflows/deploy-pages.yml`), triggered on every push to `main`. Repo Settings → Pages → Source must be set to "GitHub Actions" (one-time setup).
