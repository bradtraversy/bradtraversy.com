# bradtraversy.com - Project Overview

> A static personal portfolio and publication that curates Brad's education work,
> software projects, credibility, and polished writing.

## Problem

Brad's work is spread across education platforms, product sites, writing, and a
technical devlog. bradtraversy.com provides one curated professional front door
that explains who Brad is, presents his strongest work, establishes credibility,
and gives each visitor a clear next step. bradtraversy.dev remains the detailed
workshop and build-in-public devlog. Technical articles tied to the specific
tools, setup, and build process stay there, while bradtraversy.com carries
polished commercial writing for its professional audience.

## Users

- **Companies, clients, sponsors, collaborators, and marketplace reviewers** need
  a fast, credible view of Brad's experience, strongest work, and contact path.
- **Developers and Traversy Media followers** need one place to find Brad's best
  education platforms, products, projects, and polished commercial writing.
- **People seeking technical depth** need a clear path from the curated overview
  to the detailed build notes on bradtraversy.dev.

Every visitor is anonymous. The MVP has no accounts, roles, or access tiers.

## Features

### MVP

1. **Visual foundation and site shell** - establishes the shared responsive design
   system, metadata foundation, navigation, footer, and reusable UI primitives.
2. **Portfolio homepage (headline experience)** - presents Brad's identity,
   credibility, education work, selected projects, writing, background, social
   profiles, contact path, and devlog link.
3. **Project collection and index** - validates repository-backed project content
   and presents featured work separately from the broader catalog.
4. **Project detail pages** - turns selected projects into structured case studies
   with story, role, stack, capabilities, media, product links, and build notes.
5. **Writing collection and index** - presents a curated commercial launch set
   as a clean responsive list with internal routes.
6. **Article pages** - renders internal MDX essays with metadata, cover media,
   long-form typography, structured content, and next-entry navigation.
7. **Commercial writing curation and content verification** - keeps only
   commercially relevant launch articles on this site, migrates the approved
   existing article without new long-form writing, curates the approved
   nine-project portfolio with clear `.dev` and public-source paths, refreshes
   PortDoc and DevSheets media, then verifies current homepage and project facts,
   media, alt text, and links.
8. **Discovery and quality** - adds canonical and social metadata, sitemap, RSS,
   robots rules, 404 handling, accessibility checks, responsive verification, and
   performance cleanup.
9. **Deployment readiness** - prepares the static Vercel setup, verifies the
   production build and launch routes, documents domain setup, and defines the
   final pre-deploy smoke test.

### Post-MVP

10. **Content expansion** - adds more verified project case studies and polished
    essays without changing the core site structure.
11. **Optional contact workflow** - evaluates a protected contact form only if
    direct email and social channels prove insufficient.

## Data model

All MVP data is public and repository-backed. Astro loads and validates it at
build time. There is no runtime database, user data, form storage, or private
content.

### SiteConfig

- `name` (string) - public site and owner name
- `description` (string) - default site description
- `siteUrl` (string URL) - canonical production origin
- `navigation` (NavItem[]) - ordered primary navigation links
- `platforms` (EducationPlatform[]) - YouTube, Traversy Media, Start.dev, and
  their public descriptions and links
- `credibilityFacts` (CredibilityFact[]) - verified public proof points shown on
  the homepage
- `socialLinks` (SocialLink[]) - platform name, label or handle, URL, and icon key
- `contactEmail` (string) - approved public inquiry address
- `defaultSeo` (SeoMeta) - fallback title, description, and social image

`SiteConfig` supplies shared layouts and homepage sections. It is a single
repository-owned configuration object rather than a content collection.

### ProjectEntry

- `slug` (string) - unique key and `/projects/[slug]` route segment
- `title` (string) - public project name
- `status` (Live or Beta) - current public lifecycle label
- `access` (Free or Paid) - public product access label
- `sourceModel` (Open source, optional) - shown only for a project with a
  verified open-source license
- `type` (string) - project or product category
- `role` (string) - Brad's role in the work
- `summary` (string) - short listing and metadata description
- `stack` (string[]) - public technology list
- `liveUrl` (string URL) - primary product or project destination
- `devlogUrl` (string URL) - matching bradtraversy.dev project or tool entry
- `repoUrl` (string URL, optional) - currently public source repository
- `repoLabel` (string, optional) - clarifies companion repositories such as
  NameScout CLI
- `featured` (boolean) - whether the project receives featured treatment
- `order` (number) - intentional display order within its group
- `hero` (MediaAsset) - primary project image
- `gallery` (MediaAsset[]) - optional supporting screenshots
- `capabilities` (Capability[]) - named product or project strengths
- `body` (Markdown or MDX) - case-study narrative and structured sections

Project index cards and project detail routes consume the same collection entry.
Projects without a completed expanded case study use a concise internal overview
page built from the same verified collection metadata.

The `/projects` order is DevSheets, ApiMocker, Vidpipe, WebUtils, PortDoc,
AI Blueprint, Linesmith, SkillPass, and NameScout. The homepage presents the
first four recent projects as DevSheets, ApiMocker, PortDoc, and WebUtils, then
links to the internal project catalog. Every selected project has an internal
detail route. DevSheets, PortDoc, and SkillPass use expanded case studies, while
the other six use concise metadata-driven overviews. Every selected project
links to its matching `.dev` entry, and the project surfaces link to the complete
`.dev` projects and tools catalogs. Source links appear only for repositories
verified as public. Public repository availability does not imply Open source.
Vidpipe is Paid, every other selected project is Free, and Open source is
displayed only when the project itself has a verified license.

### WritingEntry

- `slug` (string) - unique key and `/writing/[slug]` route segment for internal
  entries
- `title` (string) - article title
- `description` (string) - listing summary and metadata description
- `publishDate` (Date) - publication date and default sort value
- `topic` (string) - public article category
- `cover` (MediaAsset) - article thumbnail and optional hero image
- `externalUrl` (string URL, optional) - destination only for writing genuinely
  hosted outside either site
- `body` (MDX, optional) - long-form content for an internal article

The MVP commercial launch set contains the existing `client-rendered-apps-and-seo`
entry and the migrated `lessons-from-the-youtube-years` entry. Both have `body`,
no `externalUrl`, and an internal article route. Technical work-specific articles
remain on bradtraversy.dev and do not appear in this catalog. The schema keeps
`externalUrl` only for future writing genuinely hosted outside either site.

### MediaAsset

- `src` (Astro ImageMetadata or validated local path) - repository-owned image
- `alt` (string) - descriptive alternative text
- `fit` (cover or contain, optional) - controls whether a project image fills or
  remains fully visible inside its presentation frame
- `caption` (string, optional) - visible context for project or article media

`ProjectEntry`, `WritingEntry`, and homepage portrait content reference
`MediaAsset` values so image optimization and accessibility rules stay consistent.

### Supporting value objects

- `NavItem` - `label` (string), `href` (string), `external` (boolean)
- `EducationPlatform` - `name` (string), `label` (string), `description` (string),
  `url` (string URL), `order` (number)
- `CredibilityFact` - `value` (string), `description` (string), `url` (string URL,
  optional)
- `SocialLink` - `name` (string), `label` (string), `url` (string URL), `icon`
  (string)
- `SeoMeta` - `title` (string), `description` (string), `socialImage` (MediaAsset)
- `Capability` - `title` (string), `description` (string)

The `ProjectEntry` and `WritingEntry` schema shapes should be locked when Feature
3 and Feature 5 are specified because later routes and launch content depend on
them.

## Tech stack

- **Astro 7.1.3** - static rendering, components, layouts, routes, and asset
  optimization
- **TypeScript in strict mode** - typed props, configuration, and content schemas
- **pnpm** - dependency management and project commands
- **Astro content collections** - build-time validation and loading for projects
  and writing
- **MDX** - internal long-form article and project narrative content
- **Plain CSS** - global design tokens, shared rules, and component-scoped styles
- **Minimal browser JavaScript** - mobile navigation and only behavior that cannot
  be delivered with HTML and CSS
- **Vercel** - planned static hosting for the production domain

No UI framework, styling library, API, authentication, database, CMS, or unit test
runner is part of the MVP. UI work requires browser evidence and `pnpm build`.
Focused unit tests can be introduced later only if meaningful pure logic appears.

## Monetization

There is no direct monetization in the MVP. The site supports revenue indirectly
by directing qualified visitors to Traversy Media, Start.dev, Brad's products,
sponsorship opportunities, and professional inquiry channels. It includes no ads,
membership, checkout, affiliate layer, or paid content.

## UI/UX

The approved `studio-*` prototypes define the direction: black and warm brown
surfaces, bone text, gold accents, Manrope typography, fine rules, generous
spacing, large editorial headlines, and a portrait-led homepage. The experience
must remain distinctive but professional, with none of the terminal, code-editor,
skill-cloud, or dashboard decoration common to developer portfolios.

| Route | Purpose |
|---|---|
| `/` | Identity, credibility, education platforms, selected projects, featured writing, about, social links, contact, and devlog path |
| `/projects` | Featured and additional project catalog |
| `/projects/[slug]` | Internal detail page for every selected project |
| `/writing` | Clean list of curated commercial launch writing |
| `/writing/[slug]` | Internal MDX article |
| `/rss.xml` | Writing feed generated from the public collection |
| `404` | Useful not-found experience with routes back into the site |

Writing rows use a left thumbnail with metadata, title, summary, and link on the
right. Below 760px, each row stacks the image above the content. Navigation must
work with a keyboard, interactive elements need visible focus states, images need
descriptive alt text, and optional motion must respect reduced-motion preferences.

Writing on bradtraversy.com supports professional credibility and commercial
positioning. Technical posts about Brad's evolving tools, agent infrastructure,
homelab, and project-specific build process stay on bradtraversy.dev.

## Deployment

- **Target**: Vercel static deployment
- **Domain**: `bradtraversy.com`, with one canonical hostname and the other
  redirected
- **Install command**: `pnpm install`
- **Build command**: `pnpm build`
- **Start command**: none for production
- **Output directory**: `dist/`
- **Environment variables**: none for the MVP
- **Database and storage**: none
- **Workers and cron jobs**: none
- **Health endpoint**: none; use static route smoke tests
- **Smoke paths**: `/`, `/projects`, all nine `/projects/[slug]` routes,
  `/writing`, one internal article page, and the 404 route

Astro's production `site` URL must be configured before launch so canonical URLs,
the sitemap, RSS links, and social metadata use the correct origin. All public
facts, external links, responsive layouts, and production build output must be
verified before deployment.

## Open questions

- Which hostname is canonical: `bradtraversy.com` or `www.bradtraversy.com`?
- Which public email address should power the professional contact path?
