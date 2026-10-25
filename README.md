# Sunny Kumar — Portfolio

Personal portfolio site, built with [Next.js](https://nextjs.org) (App Router) and [MUI](https://mui.com).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in a [Web3Forms](https://web3forms.com) access key to turn on the
contact form. Without a key the contact section shows direct links only (email, LinkedIn, GitHub, resume), so there is
never a form that can't send. The key is read at build time, so redeploy after adding it.

```bash
cp .env.local.example .env.local
```

Set the same variable in the Vercel project's Environment Variables before deploying.

## Features

- Single-page home in recruiter reading order (hero, selected work, experience, skills, about, contact), plus
  standalone `/projects`, `/about`, `/skills` and `/contact` routes
- Selected work written as case studies (problem, what I built, outcome), since company code and screens are private
- Static pages rendered as Server Components; client JS only for the header, search palette, contact form, copy button,
  local clock and scroll reveals (one `IntersectionObserver`, no animation library)
- **⌘K / Ctrl+K command palette** to jump to any section or page, copy the email, download the resume or open a profile
- Page transitions with React's `<ViewTransition>` (instant navigation in browsers without support)
- SEO: per-page metadata, a generated Open Graph/Twitter card (`app/opengraph-image.tsx`), schema.org Person JSON-LD,
  sitemap, robots and web manifest
- Accessibility: skip link, one `h1` per page with no skipped heading levels, focus-trapped mobile menu, visible focus,
  `prefers-reduced-motion` respected everywhere
- Security headers (`nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) set in `next.config.ts`

## Design

Warm charcoal surfaces, warm off-white text and a single emerald accent (the emerald of the SK app icon), defined in
`src/theme/index.ts` and mirrored as CSS variables in `app/globals.css`. Type is Geist and Geist Mono, with Instrument
Serif italic for a word or two in headings, all self-hosted through `next/font`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build locally
- `npm run lint` — run ESLint

> `tsconfig.json` excludes `.next/dev`: the dev server's generated validator there has unused imports that trip
> `noUnusedLocals`, so without the exclude `npm run build` fails while `npm run dev` is running.

## Project structure

- `app/` — routes (App Router): `/`, `/about`, `/projects`, `/skills`, `/contact`, plus `not-found.tsx`,
  `opengraph-image.tsx` / `twitter-image.tsx`, `sitemap.ts`, `robots.ts` and `manifest.ts`
- `src/data/profile.ts` — all portfolio content (intro, case studies, experience, skills, education). Every claim matches
  the resume in `public/`; edit both together
- `src/Containers/` — the section/page content, shared between the home page and the standalone routes
- `src/Components/Layout/` — Header (nav + mobile menu), CommandPalette, Footer, BackToTop, RevealObserver
- `src/Components/Common/` — Section, SectionHeading, Reveal, BulletList, Logo, SocialLinks, SocialIcon, LinkButton, LocalTime
- `src/theme/` — the MUI theme and color tokens
- `src/config/` — `site.ts` (site URL, resume, contact email, form key) and `navigation.ts` (section links and routes)
- `src/lib/` — fonts and the schema.org Person JSON-LD
- `assets/fonts/` — static TTFs (with their SIL Open Font Licenses) used only to render the Open Graph image
