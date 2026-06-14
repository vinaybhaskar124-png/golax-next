# Golax India — Next.js

Next.js migration of the Golax India corporate website (SEO-first static site).

## Stack

- Next.js 16 (App Router + SSG)
- Tailwind CSS v3 + shadcn/ui
- Static data files (locations, blog, services)
- Forms → WhatsApp + Email (no database)

## Folder structure

```
golax-next/          ← This project (NEW)
Golax_india/         ← Original Vite project (unchanged)
```

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Generates 508 static pages
npm start        # Production server
```

## SEO

- `/sitemap.xml` — auto-generated from all routes
- `/robots.txt` — auto-generated
- Per-page metadata via Next.js Metadata API
- JSON-LD schema on location & service pages

## What was removed (by design)

- AI chat widget
- Supabase integration

## Deploy

Push to GitHub → connect to Vercel → set domain `golaxindiapvtltd.in`
