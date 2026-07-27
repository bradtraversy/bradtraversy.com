---
title: PortDoc
status: Live
access: Free
type: Desktop utility
role: Creator and developer
tagline: A local control panel for development servers, ports, and processes.
summary: A local control panel that shows running dev servers, port conflicts, project ownership, useful URLs, and stale processes.
stack:
  - Rust
  - Axum
  - React
  - TypeScript
liveUrl: https://portdoc.dev/
devlogUrl: https://bradtraversy.dev/projects/portdoc
repoUrl: https://github.com/bradtraversy/portdoc
featured: false
order: 5
icon: network
hero:
  src: ../../assets/projects/portdoc-website.webp
  alt: PortDoc website with the Every local server, one clear view headline and dashboard preview
gallery:
  - src: ../../assets/projects/portdoc-dashboard-overview.png
    alt: PortDoc dashboard showing 25 running services across four projects with port lookup and grouped project rows
    title: Project dashboard
    caption: Services grouped by project, port, framework, and exposure
  - src: ../../assets/projects/portdoc-dashboard-services.png
    alt: PortDoc dashboard showing 26 running services with project ownership, local URLs, exposure labels, and runtime status
    title: Service status
    caption: Project ownership, useful URLs, process details, and runtime status
capabilities:
  - title: Find the port owner
    description: Look up a port and see the process, project, command, age, and exposure in one place.
    icon: search
  - title: Group by project
    description: See local apps, APIs, databases, and background services under the repository that owns them.
    icon: bookmark
  - title: Check exposure
    description: Distinguish local-only, LAN-visible, Docker-bound, and unknown services before opening them.
    icon: unlock
  - title: Stop safely
    description: Stop stale services with confirmation, process checks, and verification that the port was released.
    icon: check
caseStudy:
  title:
    base: Port
    accent: Doc.
  description: A local control panel for seeing what is running, which project owns each port, and what can be stopped safely.
  productLabel: Local development control panel
  story:
    eyebrow: Why I built it
    heading: A calm answer to
    accent: what is running.
  product:
    eyebrow: Inside PortDoc
    heading: Every local server.
    accent: One clear view.
    description: PortDoc turns raw socket and process data into a dashboard organized around projects, services, ports, URLs, and exposure.
  build:
    eyebrow: How it is built
    heading: One binary.
    accent: One local dashboard.
    description: A Rust binary uses Axum to serve an embedded React and TypeScript interface from the same local process.
    stackLabel: Core stack
    stack:
      - Rust
      - Axum
      - React
      - TypeScript
      - Vite
      - Tailwind CSS
      - cargo-dist
    workflowLabel: Runtime flow
    workflow:
      - label: "01"
        command: Platform probes
        description: Linux, macOS, and Windows adapters collect socket and process metadata.
      - label: "02"
        command: Snapshot contract
        description: One JSON shape feeds both the browser interface and portdoc --json.
      - label: "03"
        command: Embedded interface
        description: The Vite application is bundled into the Rust binary for release builds.
      - label: "04"
        command: Safe stop
        description: Graceful stops use confirmation and verify that the selected port was released.
  cta:
    eyebrow: Use the product
    heading: Know what owns the port.
    accent: Then act safely.
    description: Install PortDoc on Linux, macOS, or Windows and open the local dashboard from one command.
---

I usually have several local apps running at once: Astro, Next.js, Vite, Node
APIs, workers, local databases, Docker containers, and the occasional process
that should have stopped yesterday.

The usual answer is a mix of `lsof`, `ss`, `ps`, memory, and guessing. PortDoc
replaces that daily routine with a dashboard organized around projects, apps,
ports, and useful URLs.
