# Farcelis Site

Standalone Next.js codebase for the future Farcelis AI Consulting website.

This project was created to replace the current Squarespace implementation with
a product-grade, deployment-ready site that can be pushed to GitHub and hosted
on Vercel or another modern platform after approval.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run build
```

## Key folders

- `content/`
  Extracted Squarespace copy and source-of-truth content notes.
- `public/`
  Preserved logos, icons, certifications, team photos, and image assets.
- `src/app/`
  Route-level pages, layout, metadata routes, manifest, sitemap, and robots.
- `src/components/`
  Reusable UI sections for the SaaS-style Farcelis site.
- `src/lib/`
  Structured site data and metadata helpers.
- `docs/`
  Deployment notes, domain migration notes, and Squarespace transition notes.

## Required pages

- `/`
- `/control-layer`
- `/services`
- `/team`
- `/results`
- `/contact`

## SEO approach

The site is structured to dominate:

- `Farcelis`
- `Farcelis AI Consulting`
- `Farcelis Control Layer`

And support high-intent secondary themes:

- `AI consulting`
- `operational systems`
- `workflow automation`
- `business process optimization`

## Important content guardrails

- Do not claim a partner or client uses the Farcelis Control Layer unless
  explicitly confirmed.
- Use the approved relationship language:
  `Organizations that have worked with Farcelis AI Consulting LLC.`
- Keep sanitized UI cards generic. Do not expose real client or internal data.

## Deployment notes

See:

- `docs/deployment-notes.md`
- `docs/domain-migration-notes.md`
- `docs/squarespace-transition-notes.md`

