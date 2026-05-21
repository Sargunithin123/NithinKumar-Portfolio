# GitHub deployment steps (static) for CRA portfolio

This project builds to `build/`.

## Option A (recommended): GitHub Pages
### 1) Resume PDF must be served from site root
Your Resume button uses:
- `/NithinKumarSargu_Resume21.pdf`

So ensure:
- `public/NithinKumarSargu_Resume21.pdf` exists (already copied in this repo).

### 2) Create / verify `gh-pages` branch
You can deploy using:
- GitHub UI (set Pages source) OR
- GitHub Actions workflow.

If using GitHub Actions (manual):
- Build command: `npm run build`
- Publish directory: `build`

### 3) Ensure correct routing
This is a single-page app; if you use GitHub Pages and rely on direct refresh paths, configure SPA fallback if needed.

## Option B: GitHub Pages via manual upload
1) Run `npm run build`
2) Upload contents of `build/` to a `gh-pages` branch (or the Pages root as configured).

## Smoke test after deploy
Open deployed URL and verify:
- main page loads
- clicking “Download PDF” downloads `NithinKumarSargu_Resume21.pdf`

