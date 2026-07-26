import type { ImageMetadata } from "astro";

import aiBlueprintImage from "../assets/home/ai-blueprint.webp";
import apiMockerImage from "../assets/home/apimocker.png";
import devSheetsImage from "../assets/home/devsheets.png";
import portDocImage from "../assets/home/portdoc.png";
import skillPassImage from "../assets/home/skillpass.png";
import vidpipeImage from "../assets/home/vidpipe.png";
import type { SocialIconName } from "./site";

export interface HomepageProject {
	title: string;
	type: string;
	summary: string;
	url: string;
	image: ImageMetadata;
	alt: string;
}

export interface HomepageArticle {
	title: string;
	topic: string;
	dateLabel: string;
	summary?: string;
	url: string;
	featured: boolean;
}

export interface ConnectionLink {
	name: string;
	handle: string;
	label: string;
	url: string;
	icon: SocialIconName;
}

export const HOMEPAGE_PROJECTS: HomepageProject[] = [
	{
		title: "DevSheets",
		type: "Developer resource",
		summary: "Validated developer cheat sheets with search, progress, and favorites.",
		url: "https://devsheets.io/",
		image: devSheetsImage,
		alt: "DevSheets homepage with search, sheet cards, and a dashboard preview",
	},
	{
		title: "ApiMocker",
		type: "Developer tool",
		summary: "A practical fake REST API platform for learning, testing, and prototyping.",
		url: "https://apimocker.com/",
		image: apiMockerImage,
		alt: "ApiMocker homepage with endpoint examples and dataset information",
	},
	{
		title: "PortDoc",
		type: "Desktop utility",
		summary: "A local control panel for dev servers, ports, conflicts, and stale processes.",
		url: "https://portdoc.dev/",
		image: portDocImage,
		alt: "PortDoc dashboard showing active local projects, services, and ports",
	},
	{
		title: "SkillPass",
		type: "AI skills directory",
		summary: "A directory of validated AI agent skills with public skill passports.",
		url: "https://skillpass.dev/",
		image: skillPassImage,
		alt: "SkillPass homepage with validated AI agent skills and search",
	},
	{
		title: "AI Blueprint",
		type: "Open-source workflow",
		summary: "A structured workflow for building software with coding agents and real quality gates.",
		url: "https://ai-blueprint.dev/",
		image: aiBlueprintImage,
		alt: "AI Blueprint website showing its structured software development workflow",
	},
	{
		title: "Vidpipe",
		type: "Content product",
		summary: "A tool for turning long-form videos into useful, publish-ready content.",
		url: "https://vidpipe.ai/",
		image: vidpipeImage,
		alt: "Vidpipe homepage with a YouTube input and generated content preview",
	},
];

export const HOMEPAGE_ARTICLES: HomepageArticle[] = [
	{
		title: "Client-rendered apps and SEO",
		topic: "React and architecture",
		dateLabel: "June 29, 2026",
		summary:
			"Where a client-rendered React app stops being good enough, where static HTML starts to matter, and what building Vidpipe taught me about the line between them.",
		url: "https://bradtraversy.dev/articles/client-rendered-apps-and-seo",
		featured: true,
	},
	{
		title: "ApiMocker gets docs, domains, and a rocket again",
		topic: "ApiMocker",
		dateLabel: "July 22, 2026",
		url: "https://bradtraversy.dev/devlog/2026-07-22-apimocker-docs-and-domains",
		featured: false,
	},
	{
		title: "Rebuilding the DevSheets admin",
		topic: "DevSheets",
		dateLabel: "July 22, 2026",
		url: "https://bradtraversy.dev/devlog/2026-07-22-devsheets-admin-rebuild",
		featured: false,
	},
];

export const CONNECTION_LINKS: ConnectionLink[] = [
	{
		name: "YouTube",
		handle: "@TraversyMedia",
		label: "Traversy Media on YouTube",
		url: "https://www.youtube.com/@TraversyMedia",
		icon: "youtube",
	},
	{
		name: "GitHub",
		handle: "@bradtraversy",
		label: "Brad Traversy on GitHub",
		url: "https://github.com/bradtraversy",
		icon: "github",
	},
	{
		name: "X",
		handle: "@traversymedia",
		label: "Traversy Media on X",
		url: "https://x.com/traversymedia",
		icon: "x",
	},
	{
		name: "LinkedIn",
		handle: "/in/bradtraversy",
		label: "Brad Traversy on LinkedIn",
		url: "https://www.linkedin.com/in/bradtraversy",
		icon: "linkedin",
	},
	{
		name: "Instagram",
		handle: "@traversymedia",
		label: "Traversy Media on Instagram",
		url: "https://www.instagram.com/traversymedia/",
		icon: "instagram",
	},
	{
		name: "Facebook",
		handle: "Traversy Media",
		label: "Traversy Media on Facebook",
		url: "https://www.facebook.com/traversymedia/",
		icon: "facebook",
	},
	{
		name: "Patreon",
		handle: "Traversy Media",
		label: "Traversy Media on Patreon",
		url: "https://www.patreon.com/traversymedia",
		icon: "patreon",
	},
];
