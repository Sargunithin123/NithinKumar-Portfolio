# Netlify deploy steps (React / CRA)

## 1) Ensure resume PDF is in `public/`
Your Resume component uses:
- `/NithinKumarSargu_Resume21.pdf`

So you must place the PDF at:
- `nithin-portfolio/public/NithinKumarSargu_Resume21.pdf`

(That guarantees it is served from the site root.)

## 2) Build
From `nithin-portfolio/`:
- `npm install`
- `npm run build`

## 3) Publish settings in Netlify
When creating/updating the site:
- **Build command:** `npm run build`
- **Publish directory:** `build`

(You can also use the included `netlify.toml`, which sets these automatically.)

## 4) Deploy
Option A: Connect your GitHub repo → Netlify → choose the framework preset (React) or keep default settings.
Option B: Drag/drop `build/` to Netlify (site must be configured for static hosting).

## 5) Smoke test after deploy
Open the deployed URL and verify:
- Page loads without broken assets
- “Download PDF” works (link should fetch `/<pdf-name>` successfully)

