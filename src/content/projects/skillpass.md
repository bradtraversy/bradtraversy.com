---
title: SkillPass
status: Live
access: Free
type: AI skills directory
role: Creator and developer
tagline: Validated, inspectable skills for AI coding agents.
summary: A public directory for reusable AI agent skills, built around validation, inspectable permissions, and public skill passports.
stack:
  - Astro
  - Hono
  - Drizzle
  - Neon
liveUrl: https://skillpass.dev/
devlogUrl: https://bradtraversy.dev/projects/skillpass
featured: false
order: 8
icon: shield
hero:
  src: ../../assets/projects/skillpass-home.png
  alt: SkillPass homepage with validated skills search, 134 published skills, filters, categories, and latest listings
gallery:
  - src: ../../assets/projects/skillpass-passport.png
    alt: SkillPass Zeroization Audit page with an installation command and public passport showing its warning verdict, medium risk, targets, source details, and requested permissions
    title: Public skill passport
    caption: Validation status, risk, targets, source details, and requested permissions
capabilities:
  - title: Browse validated skills
    description: Find skills by tool, category, risk, status, maintainer, or a focused search.
    icon: search
  - title: Inspect permissions
    description: See declared and inferred permissions before a skill reaches your machine.
    icon: unlock
  - title: Read the findings
    description: Review validation warnings, risk, and details that still require human judgment.
    icon: check
  - title: Trace every version
    description: Connect a published passport to its source, commit, content hash, and validation date.
    icon: bookmark
caseStudy:
  title:
    base: Skill
    accent: Pass.
  description: A public directory for finding and inspecting reusable AI agent skills before installation.
  productLabel: Validated AI skills directory
  story:
    eyebrow: Why I built it
    heading: Every skill starts
    accent: untrusted.
  product:
    eyebrow: Inside SkillPass
    heading: Inspect the skill.
    accent: Read the passport.
    description: Browse by tool, category, risk, status, and maintainer, then open a public passport before installing.
  build:
    eyebrow: How it is built
    heading: Public discovery.
    accent: Structured validation.
    description: Astro and React provide the public experience while the Hono API, validator, database, storage, and job queue handle submissions and passports.
    stackLabel: Core stack
    stack:
      - Astro
      - React
      - Hono
      - Drizzle
      - Neon
      - Cloudflare R2
      - BullMQ
      - Render
    workflowLabel: Validation flow
    workflow:
      - label: "01"
        command: Submit source
        description: A GitHub URL or uploaded package enters the authenticated submission flow.
      - label: "02"
        command: Validate package
        description: The validator checks structure, secrets, risky instructions, and undeclared permissions.
      - label: "03"
        command: Build passport
        description: Shared schemas capture findings, risk, permissions, source, and version details.
      - label: "04"
        command: Publish listing
        description: The validated version appears in the directory with warnings kept visible.
  cta:
    eyebrow: Browse the directory
    heading: Find the skill.
    accent: Inspect before installing.
    description: Search the public SkillPass directory and open the passport before adding a skill to an agent.
---

AI skills are becoming real software artifacts. They package instructions,
workflow rules, permissions, tool assumptions, scripts, and setup requirements
for agents such as Codex, Claude Code, and Cursor.

The useful part of a skill is also the risky part. SkillPass gives reusable
skills an inspection layer that shows what was checked, what was detected, and
what still needs human judgment before installation.
