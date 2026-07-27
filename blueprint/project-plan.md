# Project Plan

> The product direction for bradtraversy.com. Use this with `build-plan.md` to
> generate `blueprint/context/project-overview.md` through `$overview`.

## 1. Problem - What problem are we solving?

Brad's education platforms, writing, products, and software projects are spread
across several sites. bradtraversy.com needs to be the curated professional front
door that quickly explains who Brad is, shows his strongest work and credibility,
and gives clients, companies, collaborators, and followers a clear next step.
bradtraversy.dev remains the detailed workshop and build-in-public devlog.
Technical articles tied to the specific tools, setup, and build process stay
there. bradtraversy.com carries polished commercial writing that demonstrates
judgment, experience, and outcomes relevant to its professional audience.

## 2. Users - Who is this for?

- Companies, clients, sponsors, collaborators, and marketplace reviewers
  evaluating Brad and his work
- Developers and Traversy Media followers looking for Brad's best content,
  products, projects, and polished commercial writing in one place
- People who want a high-level introduction before following deeper technical
  work on bradtraversy.dev

## 3. Features - What does the MVP need?

- A responsive shared site shell with clear navigation, footer, and mobile menu
- A homepage covering Brad's identity, credibility, education platforms,
  selected projects, writing, background, social links, and contact path
- A projects index that presents the exact curated set: DevSheets, ApiMocker,
  Vidpipe, WebUtils, PortDoc, AI Blueprint, Linesmith, SkillPass, and NameScout,
  with PortDoc and Vidpipe swapped on the homepage
- Project cards that show each stack, link to the matching bradtraversy.dev
  project or tool entry, separate lifecycle from Free or Paid access, expose
  source only when the repository is public, and use Open source only for a
  project with a verified license
- A clear path from the curated `.com` selection to the complete projects and
  tools catalogs on bradtraversy.dev
- Data-driven project detail pages with the story, role, stack, capabilities,
  screenshots, live product link, public source when available, and related
  bradtraversy.dev build notes. DevSheets, PortDoc, and SkillPass receive detail
  pages at launch.
- A writing index with a clean vertical list, left-side thumbnails, article
  metadata, summaries, and internal routes for a curated commercial launch set
- Data-driven article pages for the existing `Client-rendered apps and SEO`
  article and the migrated `Lessons from the YouTube years` article
- A content verification pass covering existing homepage and project facts,
  approved media, descriptive alt text, and working links
- Accurate metadata, canonical URLs, social sharing images, sitemap, RSS feed,
  robots rules, and a useful 404 page
- Accessible, responsive, fast static pages with optimized local media

## 4. Data - What are we storing?

- Project entries stored in the repository with title, slug, lifecycle status,
  Free or Paid access, optional verified Open source status, type, role, summary,
  stack, live and `.dev` links, optional public repository metadata, media,
  capabilities, narrative sections, and display order
- Writing entries stored as Markdown or MDX with title, slug, description,
  publish date, topic, cover image, body, and an optional external URL reserved
  for writing genuinely hosted outside Brad's two sites
- Shared site data for education platforms, credibility facts, social profiles,
  navigation, contact details, and SEO defaults
- Local portraits, project screenshots, article images, and descriptive alt text

There are no users, accounts, database records, form submissions, or private data
in the MVP. Public facts and links should be verified against current source
material before launch. The MVP reuses existing public copy and article bodies;
it does not require new long-form writing.

## 5. Tech - What stack are we using?

- Astro 7.1.3 with strict TypeScript and pnpm
- Static output with Astro components, layouts, and file-based routes
- Astro content collections with schemas for projects and writing
- MDX for internal long-form articles
- Plain CSS with custom properties and component-scoped styles
- Minimal client-side JavaScript, limited primarily to the mobile navigation
- Astro's asset pipeline for responsive, optimized local images

No UI framework, styling library, API, authentication, database, CMS, or unit test
runner is planned for the MVP. UI work is verified with browser evidence and
`pnpm build`; focused unit tests can be added later if meaningful logic appears.

## 6. Monetize - How will this make money?

The site monetizes indirectly by sending qualified visitors to Traversy Media,
Start.dev, Brad's products, sponsorship opportunities, and professional inquiry
channels. The MVP has no ads, membership, checkout, affiliate layer, or paid
content.

## 7. UI/UX - How should this look and feel?

Use the approved `studio-*` prototypes as the visual direction: restrained black
and warm brown surfaces, bone text, gold accents, Manrope typography, fine rules,
generous spacing, large editorial headlines, and a portrait-led homepage. Keep it
distinctive but professional, without terminal graphics, code-editor treatments,
skill clouds, or generic developer-portfolio decoration.

The layout should remain calm and easy to scan. Project work gets strong imagery
and concise facts. Writing uses a single clean column with thumbnails on the left
and article information on the right, stacking image above content below 760px.
Navigation and motion must remain keyboard accessible and respect reduced-motion
preferences.

Writing on bradtraversy.com should support professional credibility and commercial
positioning. Technical posts about Brad's evolving tools, agent infrastructure,
homelab, and project-specific build process stay on bradtraversy.dev.

## 8. Deployment - Where and how will this ship?

- Target host: Vercel as a static Astro site
- Production domain: `bradtraversy.com`, with one canonical host and the other
  host redirected
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `dist/`
- Runtime start command: none
- Environment variables: none for the MVP
- Database, storage, workers, and cron jobs: none
- Smoke-test paths: `/`, `/projects`, `/projects/devsheets`,
  `/projects/portdoc`, `/projects/skillpass`, `/writing`, one article page, and
  the 404 route

Deployment preparation should set Astro's production site URL, verify canonical
and social metadata, check all external links, and confirm responsive browser
behavior before any production deploy.
