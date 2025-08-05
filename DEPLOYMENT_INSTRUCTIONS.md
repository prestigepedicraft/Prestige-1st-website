# Deploying Your Prestige Pedicraft Website to GitHub Pages

## 1. Install Dependencies

If you haven't done so, run:

```
npm install
```

## 2. Install gh-pages (if not already):

```
npm install --save gh-pages
```

## 3. Build & Deploy

```
npm run deploy
```

This will:
- Build your Vite-powered React site to the `dist` folder,
- Deploy the static files to the `gh-pages` branch.

## 4. Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** > **Pages**.
3. Under **Branch**, select `gh-pages` and `/ (root)` folder.
4. Click **Save**.

## 5. Visit Your Live Site

Your site will be live at:  
https://prestigepedicraft.github.io/Prestige-1st-website/

---

## Notes

- Re-run `npm run deploy` after any future changes.
- If you see a blank page, check asset imports and that `homepage` is set correctly in `package.json`.
- For Vite, you may also want to set `base: '/Prestige-1st-website/'` in `vite.config.js` for asset paths (optional).