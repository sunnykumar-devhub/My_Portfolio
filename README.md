# Sunny Kumar — Portfolio

Personal portfolio site, built with [Next.js](https://nextjs.org) (App Router) and [MUI](https://mui.com).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in a [Web3Forms](https://web3forms.com) access key so the contact
form can send email. Without it, the form falls back to opening the visitor's email client instead.

```bash
cp .env.local.example .env.local
```

Set the same variable in the Vercel project's Environment Variables before deploying.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build locally
- `npm run lint` — run ESLint

## Project structure

- `app/` — routes (App Router): `/`, `/about`, `/projects`, `/skills`, `/contact`, plus `not-found.tsx`
- `src/data/profile.ts` — all portfolio content (experience, projects, skills, education); edit this to update the site
- `src/Containers/` — the actual section/page content, shared between routes where relevant
- `src/Components/` — layout pieces (Header, Footer, ScrollProgress, BackToTop) and common building blocks (Section, SectionHeading, Surface, Reveal, SocialLinks, TechChip, TechMarquee, Logo)
- `src/theme/` — the MUI theme
- `src/config/` — site-wide config (`site.ts`: site URL, resume URL, contact email, form key; `navigation.ts`: nav links)
- `src/lib/structuredData.ts` — schema.org Person JSON-LD rendered in the root layout
- `app/sitemap.ts`, `app/robots.ts` — generated `sitemap.xml` and `robots.txt`
