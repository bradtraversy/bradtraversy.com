---
title: DevSheets
status: Live
access: Free
type: Developer resource
role: Founder, designer, developer
tagline: Free, validated developer cheat sheets with fast search, progress, and favorites.
summary: A clean reference layer for the syntax, configuration, commands, and patterns developers look up every day. The catalog stays public, dense, and validated against current documentation.
stack:
  - Next.js
  - Prisma
  - Postgres
  - Vercel
liveUrl: https://devsheets.io/
devlogUrl: https://bradtraversy.dev/projects/devsheets
featured: true
order: 1
icon: reference
hero:
  src: ../../assets/projects/devsheets-home.png
  alt: DevSheets homepage showing command-palette search and learned-item tracking
  fit: contain
gallery:
  - src: ../../assets/projects/devsheets-dashboard.jpg
    alt: Signed-in DevSheets dashboard showing 23 known items across four sheets with progress percentages
    title: Learning dashboard
    caption: Known-item progress across four active sheets
  - src: ../../assets/projects/devsheets-item.jpg
    alt: DevSheets Running Containers item page showing its Known status and Docker command reference
    title: Known item
    caption: A focused Docker reference with its learned status saved
capabilities:
  - title: Item-level search
    description: Jump directly to a matching command or pattern, not just the sheet that contains it.
    icon: search
  - title: 83+ validated sheets
    description: The catalog is checked against current official documentation and versioned when useful.
    icon: check
  - title: Favorites and progress
    description: Save useful sheets and track the items you already know across the catalog.
    icon: bookmark
  - title: Public by default
    description: The complete reference experience works without an account, a subscription, or ads.
    icon: unlock
caseStudy:
  title:
    base: Dev
    accent: Sheets.
  description: A fast, free reference for the syntax, commands, and patterns developers look up every day.
  productLabel: Developer reference library
  story:
    eyebrow: Why I built it
    heading: The answer should take
    accent: seconds.
  product:
    eyebrow: Inside the product
    heading: Built to scan, search, and
    accent: move on.
    description: Each sheet keeps the useful material close together with concise explanations, copyable code, clear sections, and practical examples.
  build:
    eyebrow: How it is built
    heading: Content with a
    accent: validation loop.
    description: Sheet content lives in Postgres so it can be edited, validated, and synced without rebuilding the site. Stable item IDs keep favorites and known-item progress intact through content updates.
    stackLabel: Core stack
    stack:
      - Next.js 15
      - React 19
      - Prisma
      - Postgres
      - Tailwind 4
      - PrismJS
      - Vercel
    workflowLabel: Sheet workflow
    workflow:
      - label: "01"
        command: /create-sheet
        description: Research and draft from official documentation.
      - label: "02"
        command: /audit-sheet
        description: Check topic coverage and identify gaps.
      - label: "03"
        command: /validate-sheet
        description: Cross-check the sheet against its target version.
      - label: "04"
        command: /sync-prod
        description: Move validated content into production safely.
  cta:
    eyebrow: Use the product
    heading: Find the answer. Get back to
    accent: building.
    description: Browse the full DevSheets catalog, or follow the detailed technical decisions and build history on bradtraversy.dev.
---

I look up the same things constantly: Tailwind utility names, Prisma schema
syntax, Docker Compose keys, TypeScript utility types, and Git commands.

Most cheat sheet sites are stale, crowded with ads, or left untouched for
years. DevSheets is the version I wanted: dense, current, easy to scan, and open
without an account wall.
