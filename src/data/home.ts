import type { SocialIconName } from "./site";

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
