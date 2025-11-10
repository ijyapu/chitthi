# Animated Letter Website

This is a small responsive React site that shows an animated envelope which opens to reveal a letter. It's designed to be hosted on GitHub (via GitHub Pages using the provided GitHub Actions workflow).

Features:
- CSS 3D animated envelope flap
- Letter content reveals with a simple staggered animation
- Responsive layout for mobile and desktop
- Easy to customize message

## Run locally

1. Install dependencies
   ```
   npm install
   ```

2. Start dev server
   ```
   npm run dev
   ```

3. Open the browser at the URL shown in the console (usually http://localhost:5173).

## Customize the letter

Edit `src/App.jsx` and change the `myLetter` array. Each array entry becomes a line in the letter.

## Deploy to GitHub Pages (automatic)

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` which will build the site and deploy the `dist` to the `gh-pages` branch using the default `GITHUB_TOKEN`. To use it:

1. Push this repository to GitHub.
2. The workflow runs on pushes to `main`. It will build and publish to `gh-pages`.
3. In your repository settings > Pages, choose the `gh-pages` branch and `/ (root)` as the source if required. Often the workflow sets this up automatically.

If you prefer manual deployment, build locally and push the `dist` contents to GitHub Pages as you wish.

## Files of interest

- `src/components/Letter.jsx` — the envelope + letter UI and animation trigger
- `src/styles.css` — animations and responsive styles
- `.github/workflows/deploy.yml` — build & deploy workflow for GitHub Pages

Enjoy! Personalize the message and styles to make the letter your own.