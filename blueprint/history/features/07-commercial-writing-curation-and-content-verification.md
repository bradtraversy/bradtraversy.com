# Feature: Commercial writing curation and content verification

**From build-plan:** feature 7
**Status:** complete

## Goal

Launch bradtraversy.com with a small, commercially relevant writing catalog and
verify content already displayed across the homepage and project catalog. Reuse
existing public article bodies and copy without creating new long-form content.

## In scope

- Keep the current internal `client-rendered-apps-and-seo` article as the
  canonical bradtraversy.com version because it demonstrates product, SEO, and
  architectural judgment with a commercial consequence.
- Add an internal `lessons-from-the-youtube-years` MDX entry from the existing
  bradtraversy.dev source because it demonstrates durable education experience
  and professional credibility.
- Remove the `why-astro-over-next`, `how-the-agent-fleet-works`, and
  `my-agent-stack-changed-again` external stubs from the bradtraversy.com writing
  catalog. Those technical and work-specific articles remain on bradtraversy.dev.
- Keep `my-homelab` and `welcome-to-bradtraversy-dev` on bradtraversy.dev and out
  of the bradtraversy.com catalog.
- Treat the two internal articles above as the complete MVP launch set. More
  commercial articles belong to Feature 10 and are not required for launch.
- Reuse the source article body, publish date, summary, tags, and available local
  media for the YouTube article. Limit prose edits to factual corrections and
  mechanical adaptation for the current content schema, links, formatting, and
  character rules.
- Keep homepage and writing-index launch article links on internal `/writing`
  routes. Do not use the commercial site as an index of dev-specific articles.
- Make the existing homepage writing section look intentional with a two-article
  catalog, using only minimal layout adjustment if the current supporting column
  leaves an obvious empty state.
- Treat the bradtraversy.com project catalog as an explicit nine-project
  selection. Keep `/projects` ordered as DevSheets, ApiMocker, Vidpipe,
  WebUtils, PortDoc, AI Blueprint, Linesmith, SkillPass, and NameScout. On the
  homepage, swap Vidpipe and PortDoc so the order is DevSheets, ApiMocker,
  PortDoc, WebUtils, Vidpipe, AI Blueprint, Linesmith, SkillPass, and NameScout.
- Show the technology stack and a link to the matching bradtraversy.dev project
  or tool entry for every selected project on both the homepage and `/projects`.
- Refine the `/projects` stack presentation with recognizable technology logos
  beside readable labels, using build-time SVG data rather than remote assets.
- Present the first four curated projects on the homepage under a Recent
  Projects heading, keep their project labels clearly visible, and link to the
  internal `/projects` catalog for the full selection.
- Show a source link only when the associated repository is currently public.
  Label the NameScout repository as the public NameScout CLI source rather than
  implying the private web application is open source.
- Keep lifecycle, access, and source availability as separate project labels.
  Vidpipe is Paid and every other selected project is Free. Show Open source
  only when the project itself has a verified open-source license.
- Add a clear route from the curated project sections to the complete projects
  and tools catalogs on bradtraversy.dev.
- Give every selected project an internal detail route. Projects without a full
  case study use their verified catalog metadata, current hero image, stack,
  status, access, product link, `.dev` link, and public source link when
  available.
- Use the current PortDoc website as the project hero image and show current
  PortDoc application screenshots inside a new PortDoc project detail page.
- Use the supplied current SkillPass homepage screenshot as its catalog and
  detail hero, and show the supplied public skill-passport screenshot inside a
  new SkillPass project detail page.
- Replace the current DevSheets project media with current dashboard and sheet
  views, including a signed-in view that visibly demonstrates learned-item
  progress.
- Replace the placeholder favicon with a small illustrated avatar derived from
  the existing hero portrait, keeping Brad's face and cap legible at browser-tab
  sizes.
- Verify existing homepage facts, platform descriptions, social destinations,
  project statuses, stacks, summaries, public links, selected media, and alt text
  against current public source material.
- Make only evidence-backed factual or accessibility corrections needed for
  launch accuracy.

## Out of scope

- Writing new articles, essays, case studies, or other long-form content.
- Substantive rewrites, tone changes, expansion, or AI polishing of either launch
  article.
- Migrating technical articles about the agent fleet, agent stack, homelab,
  Astro choice, local tools, or project-specific build process to this site.
- Deleting or rewriting the technical articles that remain on bradtraversy.dev.
- Removing the commercial article copies from bradtraversy.dev or adding their
  cross-domain redirects. That work belongs in a separate scoped change in the
  bradtraversy.dev repository after the internal routes are verified here.
- New project case studies, new photography, generated article art, or a visual
  redesign.
- New long-form project narratives. Detail pages without a full case study use
  existing structured project metadata rather than newly written narrative.
- Publishing a private repository or adding source links for repositories that
  are not publicly reachable.
- Canonical metadata, social metadata, sitemap, RSS, robots rules, 404 handling,
  accessibility auditing, and performance cleanup from Feature 8.
- Deployment and domain work from Feature 9.
- New commercial writing and project expansion from Feature 10.

## Build loop

Build one step at a time, never the whole feature at once.

1. Plan mode lays out the step before any code.
2. The AI implements just that step.
3. It shows the diff, not full files, for review.
4. Brad approves before the next step or any checkpoint commit.

Never accept a step that is too large to review. Split it before implementation
when needed.

## Build steps

- [x] **Step 1 - Migrate Lessons from the YouTube years** - Add an internal MDX
  entry from the existing source article with schema-compatible metadata and
  appropriate existing local media. *Done when:*
  `/writing/lessons-from-the-youtube-years` renders locally, appears in the
  writing catalog by its original date, the article body has no substantive
  rewrite, and `pnpm build` passes.
- [x] **Step 2 - Curate the commercial writing catalog** - Remove the three
  dev-specific external stubs from this repository and confirm the launch set is
  exactly the existing SEO article plus the migrated YouTube article. *Done
  when:* homepage and `/writing` entries resolve internally, no
  `bradtraversy.dev/articles` destination remains in this site source, the
  technical source articles remain untouched on bradtraversy.dev, and
  `pnpm build` passes.
- [x] **Step 3 - Fit the two-article launch presentation** - Browser-check the
  homepage writing section and `/writing` with exactly two entries. Make only the
  smallest existing-component layout adjustment needed if the supporting column
  has an obvious empty state. *Done when:* both sections look intentional at
  desktop and mobile widths, internal links work, focus states remain visible,
  and no redesign or placeholder article was added.
- [x] **Step 4 - Verify homepage content and media** - Check the current hero,
  About, contact, education platform descriptions, credibility facts, social
  links, portrait, writing imagery, and alt text against current public sources.
  Apply only factual or accessibility corrections. *Done when:* every visible
  homepage factual claim and external destination has a current source, images
  render with accurate alt text, and no new marketing copy or long-form content
  was introduced.
- [x] **Step 5 - Extend the project data and action contract** - Add optional
  public repository metadata, make the bradtraversy.dev detail link required for
  the selected catalog, show stack and consistent live, source, and `.dev`
  actions on the homepage and `/projects`, and add a clear route to the complete
  projects and tools catalogs on bradtraversy.dev. *Done when:* the current six
  entries render their stacks and applicable actions consistently on both
  surfaces, private repositories have no source link, the combined archive CTA
  reaches a `.dev` surface that exposes both projects and tools, and
  `pnpm build` passes.
- [x] **Step 6 - Build the exact nine-project catalog** - Add WebUtils,
  Linesmith, and NameScout from their existing `.dev` project or tool entries,
  using current public metadata and existing media, then make both approved
  display orders explicit. *Done when:* `/projects` shows DevSheets, ApiMocker,
  Vidpipe, WebUtils, PortDoc, AI Blueprint, Linesmith, SkillPass, and NameScout;
  the homepage swaps Vidpipe and PortDoc; every entry has a stack, live
  destination, and matching `.dev` destination; currently public source links
  appear for ApiMocker, PortDoc, AI Blueprint, Linesmith, and NameScout CLI; and
  `pnpm build` passes.
- [x] **Step 7 - Build the PortDoc project presentation** - Use a current
  screenshot of portdoc.dev as the catalog and detail-page hero, create a
  PortDoc detail page by adapting existing project copy, and place current
  application screenshots in its gallery. *Done when:* `/projects/portdoc`
  renders with the public website first and at least two accurate views of the
  installed tool in the gallery, stack, live, source, and `.dev` links work,
  alt text and captions match the visible UI, no new long-form narrative was
  invented, and `pnpm build` passes.
- [x] **Step 8 - Build the SkillPass project presentation** - Use the supplied
  current homepage screenshot as the catalog and detail-page hero, create a
  SkillPass detail page by adapting existing project copy, and place the
  supplied public skill-passport screenshot in its gallery. *Done when:*
  `/projects/skillpass` renders with the current public directory first and the
  passport view inside the page; stack, live, and `.dev` links work; alt text
  and captions match the visible UI; the screenshots are responsive and
  optimized without destructive enlargement; no new long-form narrative was
  invented; and `pnpm build` passes.
- [x] **Step 9 - Refresh the DevSheets project media** - Capture and install
  current DevSheets media for the public project page, including the signed-in
  dashboard and a sheet view with learned-item progress visible. Replace stale
  screenshots, captions, and alt text rather than changing the existing
  narrative. *Done when:* the DevSheets catalog hero and
  `/projects/devsheets` gallery show the current product, dashboard, and learned
  state accurately at desktop and mobile widths, no private account data is
  visible, and `pnpm build` passes.
- [x] **Step 10 - Add internal pages for every selected project** - Generate an
  internal `/projects/[slug]` route for all nine selected projects. Keep the
  existing expanded case studies for DevSheets, PortDoc, and SkillPass, and use
  a concise metadata-driven overview for the other six. Make every homepage and
  project-catalog image and View project action lead to the internal route.
  *Done when:* all nine routes build, every project card has an internal detail
  path, overview pages show the existing hero, summary, badges, stack, live,
  `.dev`, and public source links when available, and no new long-form project
  copy was invented.
- [x] **Step 11 - Add the portrait favicon** - Derive a square head-and-cap
  avatar from the existing hero portrait and install optimized 16, 32, 180, and
  512 pixel assets. *Done when:* browser metadata references the new raster
  assets, the face and cap remain recognizable at browser-tab sizes, the
  production build passes, and no unrelated brand system is introduced.
- [x] **Step 12 - Refine the project presentation** - Replace the plain
  `/projects` stack text and tags with a shared logo-and-label treatment across
  the featured and additional project sections. Present the first four curated
  projects on the homepage under Recent Projects, use clearly visible lifecycle,
  access, and applicable source-model labels, then link to `/projects` for the
  full catalog. Remove the Role cell from featured project cards so each
  logo-and-label stack uses the full metadata row. *Done when:* every technology
  remains readable, recognizable logos appear where available, the lists and
  project labels wrap cleanly at desktop and mobile widths, featured stacks use
  the full row, the homepage contains exactly four project cards and an internal
  full-catalog link, no remote image request is introduced, and `pnpm build`
  passes.
- [x] **Step 13 - Verify all selected project content and media** - Check the
  nine approved entries for lifecycle, Free or Paid access, license-backed
  Open source labels, role, stack, summary claims, live, source, and `.dev`
  URLs, screenshots, captions, and alt text against current public sources.
  Apply only evidence-backed corrections. *Done when:* all project cards and
  all nine detail pages use current facts and working destinations,
  Vidpipe is the only Paid project, public repository links resolve, Open source
  appears only for a project with a verified license, private repositories have
  no source link, all images render, and no expanded narrative was added.
- [x] **Step 14 - Verify the complete curation pass** - Run the production build
  and browser-check `/`, `/writing`, both internal article routes, `/projects`,
  and all nine project detail routes at desktop and mobile widths. *Done when:*
  the build passes, routes load without console or local request errors, images
  and focus states work, the project catalog contains exactly the approved nine
  entries, and the commercial writing catalog contains only the two approved
  internal articles.

## Files / areas

- `src/content/writing/` for the migrated YouTube article and removal of the three
  dev-specific external catalog stubs.
- `src/assets/writing/` for reused local article and cover media.
- `src/components/FeaturedWriting.astro` and `src/components/WritingList.astro`
  only if the two-entry catalog needs a minimal presentation adjustment.
- `src/data/site.ts`, `src/data/home.ts`, and existing homepage components only
  where factual, link, media, or alt-text corrections are required.
- `src/content/projects/` and `src/assets/projects/` for the exact nine-project
  catalog, the three source-derived additions, current PortDoc, SkillPass, and
  DevSheets media, and their detail pages.
- `src/lib/projects.ts`, `src/content.config.ts`, and the existing project
  components for explicit curation, stack display, public repository metadata,
  `.dev` detail links, and the complete archive CTA.
- `src/components/TechnologyIcon.astro` and
  `src/components/TechnologyStack.astro` for the shared `/projects` stack
  presentation.
- `src/components/SelectedProjects.astro` and
  `src/components/ProjectBadges.astro` for the four-project homepage selection,
  internal catalog link, and clearly visible project labels.
- `/home/brad/Code/Live/bradtraversy.dev/src/content/articles/` as a read-only
  source and classification reference.

## Data / contracts

- Keep the current `WritingEntry` schema unchanged.
- The `/projects` order is exactly: `devsheets`, `apimocker`, `vidpipe`,
  `webutils`, `portdoc`, `ai-blueprint`, `linesmith`, `skillpass`, and
  `namescout`.
- The homepage contains the first four projects in this exact order:
  `devsheets`, `apimocker`, `portdoc`, and `webutils`.
- Every curated project has a `devlogUrl` pointing to its matching `.dev`
  project or tool page.
- Every curated project has a lifecycle `status` of Live or Beta and an `access`
  value of Free or Paid. `sourceModel` is optional and uses Open source only
  after the project license is verified.
- Public repository metadata is optional and rendered only after the repository
  is verified as publicly reachable. NameScout uses the public
  `namescout-cli` repository with a label that distinguishes it from the web
  application.
- Every selected project has an internal detail route. DevSheets, PortDoc, and
  SkillPass keep expanded case studies, while the other six use concise
  metadata-driven overview pages.
- The MVP launch catalog contains exactly two internal entries:
  `client-rendered-apps-and-seo` and `lessons-from-the-youtube-years`.
- Each launch article has schema-valid `article` metadata and a body, with no
  `externalUrl`.
- Preserve the source publish date and stable slug for the migrated article.
- Use schema-required short descriptions, labels, captions, and alt text derived
  from existing source material and visible media. Do not invent unsupported
  claims.
- Keep `externalUrl` available only for future writing genuinely hosted outside
  either Brad site.
- Treat the bradtraversy.dev repository as read-only during this feature.

## Testing

- No unit test runner is configured, and this feature adds no new pure logic.
- Run `pnpm build` after the article migration, catalog curation, and each
  verification step.
- Run `pnpm build` after the `/projects` stack presentation update.
- Use the already approved local dev server for browser checks when available.
- Verify the homepage, writing index, both internal articles, the projects index,
  and all nine project detail routes at representative desktop and mobile
  widths.
- Check browser console errors, failed local requests, internal navigation,
  external destinations, image rendering, focus visibility, and overflow.
- Search the site source for stale `bradtraversy.dev/articles` destinations and
  prohibited dash or ellipsis characters before final review.

## Notes for the AI

- Commercial writing demonstrates durable expertise, judgment, outcomes, or
  credibility relevant to clients, companies, sponsors, collaborators, or
  marketplace reviewers.
- Work-specific technical posts about evolving tools, models, agents, homelab,
  infrastructure, or build details stay on bradtraversy.dev.
- The `.com` project catalog is curated, not a mirror of every `.dev` project or
  tool. Each selected card links back to its detailed `.dev` entry, while the
  combined archive CTA exposes the complete projects and tools catalogs.
- This is curation, migration, and verification work, not a writing assignment.
- Preserve the existing article voice and body text. Do not improve, expand,
  summarize, or modernize the prose.
- Mechanical edits are allowed only for frontmatter, schema-required metadata,
  asset paths, internal links, Markdown or MDX compatibility, factual accuracy,
  and prohibited character replacement.
- Reuse existing local media before requesting or creating any new image.
- Do not change the bradtraversy.dev repository during this feature.
- Stop after every build step for review, and ask before any commit.
