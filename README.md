# NatuFresh — commercial cleaning website

Production-ready, responsive marketing site (Vite, React, TypeScript, Tailwind CSS) for **NatuFresh** — a commercial cleaning company (B2B / facilities; no residential positioning).

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Go-live checklist

1. **Images** — add to `public/images/`:
   - `natufresh-logo.png`
   - `commercial-hallway.jpg`, `long-hallway.jpg`, `office-cubicle.jpg`
   - `business-card.jpg` (about page; not stretched, `object-contain` in about)

2. **Web3Forms** — in `src/pages/Contact.tsx`, replace `REPLACE_WITH_WEB3FORMS_ACCESS_KEY` with your key from [web3forms.com](https://www.web3forms.com).

3. **Deploy** — build (`npm run build`) and host the `dist` folder (Netlify, Vercel, or any static host). Configure SPA rewrites so client-side routes work (`/services`, `/about`, `/contact`).

## License

You own the site content. Modify as needed for NatuFresh LLC.
