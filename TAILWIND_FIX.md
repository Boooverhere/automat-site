# Quick Fix for Tailwind Error

If you're getting the Tailwind PostCSS error, follow these steps:

## Option 1: Delete node_modules and reinstall (Recommended)

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Option 2: Use exact Tailwind v3.4.1

Make sure your package.json has exactly:
```json
"tailwindcss": "^3.4.1"
```

Then:
```bash
npm install
npm run dev
```

## Option 3: Use Tailwind v4 (Latest)

If you want to use the newest Tailwind v4, update these files:

**package.json:**
```json
"devDependencies": {
  "@tailwindcss/postcss": "^4.0.0",
  "tailwindcss": "^4.0.0"
}
```

**postcss.config.js:**
```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

**Remove tailwind.config.js** (v4 doesn't use it)

**globals.css:**
```css
@import "tailwindcss";
```

Then run:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

**Easiest Solution:** Just use Option 1 - delete node_modules and reinstall!
