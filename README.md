# Solitude Safari — Vercel Deployment

## Quick Start

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and create a new project
2. Upload this folder or connect your GitHub repo
3. Vercel will auto-detect Vite — no extra config needed
4. Click **Deploy**

## Build Settings (auto-detected by Vercel)
- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## Project Structure
```
src/
  assets/images/   ← All wildlife photos
  components/      ← UI + page components
  pages/           ← Home, 404
  hooks/           ← use-toast, use-mobile
  lib/             ← utils
  App.tsx
  main.tsx
  index.css        ← Cinematic dark theme
vercel.json        ← SPA routing (rewrites all paths → index.html)
```
