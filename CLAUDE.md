# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Environment Variables

The contact form API requires these for email delivery (optional — form degrades gracefully without them):

```
SMTP_HOST=
SMTP_USER=
SMTP_PASS=
SMTP_PORT=
SMTP_SECURE=
CONTACT_EMAIL=
NEXT_PUBLIC_GTM_ID=   # Google Tag Manager
```

## Architecture

**Next.js App Router** with TypeScript and Tailwind CSS v4.

### Key Directories

- `src/app/` — Routes and API handlers (App Router)
- `src/components/` — UI split into `home/`, `layout/`, `seo/`, `ui/`
- `src/data/` — Static data arrays: `services.ts` (6 services), `regions.ts` (4 regions)
- `src/lib/` — `constants.ts` (site config, nav, stats, FAQ), `metadata.ts` (SEO helper)

### Routing

- Static routes: `/hakkimizda`, `/iletisim`, `/hizmetlerimiz`
- Dynamic service pages: `/hizmetler/[slug]` — slugs come from `src/data/services.ts`, pages use `generateStaticParams()` for SSG
- Dynamic region pages: `/[bolge]-veteriner` — handled by a single catch-all route, valid regions defined in `src/data/regions.ts`
- API: `POST /api/contact` — validates input, sends email via Nodemailer

### Styling

Tailwind CSS v4 configured via PostCSS (`postcss.config.mjs`). Custom theme tokens are defined directly in `src/app/globals.css` using the `@theme` directive (not in a separate config file):

- `primary`: #16a34a (green)
- `secondary`: #0d9488 (teal)
- `accent`: #f59e0b (amber)

### Data Flow

Pages are server components that read directly from `src/data/`. Only `ContactForm` is a client component (`"use client"`). There is no global state management — local `useState` only.

### SEO

- `src/lib/metadata.ts` generates per-page `Metadata` objects
- `src/components/seo/JsonLd.tsx` renders JSON-LD structured data (LocalBusiness, FAQ, Breadcrumbs)
- `src/app/robots.ts` and `src/app/sitemap.ts` are programmatic SEO files

### Path Alias

`@/*` maps to `src/*` (configured in `tsconfig.json`).
