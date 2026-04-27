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

## Push to GitHub (new repo)

From this folder, after [GitHub CLI](https://cli.github.com/) is installed and you are logged in:

```bash
gh auth login
gh repo create natufresh-website --public --source=. --remote=origin --push
```

This creates a new public repo named `natufresh-website` under your account, sets `origin`, and pushes the `main` branch. To use a different name, change `natufresh-website` in the command.

**Git only:** create an empty repo on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/natufresh-website.git
git push -u origin main
```

## License

You own the site content. Modify as needed for NatuFresh LLC.
