export interface NavItem {
	label: string;
	href: string;
	external: boolean;
}

export type SocialIconName =
	| "github"
	| "x"
	| "youtube"
	| "linkedin"
	| "instagram"
	| "facebook"
	| "patreon";

export interface SocialLink {
	name: string;
	label: string;
	url: string;
	icon: SocialIconName;
}

export interface EducationPlatform {
	name: string;
	label: string;
	description: string;
	url: string;
	order: number;
	icon: "youtube" | "graduation" | "code";
}

export interface CredibilityFact {
	value: string;
	description: string;
	url?: string;
}

export interface SiteConfig {
	name: string;
	description: string;
	navigation: NavItem[];
	socialLinks: SocialLink[];
	platforms: EducationPlatform[];
	credibilityFacts: CredibilityFact[];
}

export const SITE_CONFIG = {
	name: "Brad Traversy",
	description:
		"A personal portfolio and publication featuring Brad Traversy's education work, software projects, and writing.",
	navigation: [
		{ label: "Content", href: "/#content", external: false },
		{ label: "Projects", href: "/projects", external: false },
		{ label: "Writing", href: "/writing", external: false },
		{ label: "About", href: "/#about", external: false },
		{ label: "Connect", href: "/#socials", external: false },
		{
			label: "Devlog",
			href: "https://bradtraversy.dev",
			external: true,
		},
	],
	socialLinks: [
		{
			name: "GitHub",
			label: "Brad Traversy on GitHub",
			url: "https://github.com/bradtraversy",
			icon: "github",
		},
		{
			name: "X",
			label: "Traversy Media on X",
			url: "https://x.com/traversymedia",
			icon: "x",
		},
		{
			name: "YouTube",
			label: "Traversy Media on YouTube",
			url: "https://www.youtube.com/@TraversyMedia",
			icon: "youtube",
		},
		{
			name: "Instagram",
			label: "Traversy Media on Instagram",
			url: "https://www.instagram.com/traversymedia/",
			icon: "instagram",
		},
	],
	platforms: [
		{
			name: "YouTube",
			label: "Watch",
			description:
				"Free tutorials, project builds, developer commentary, and practical walkthroughs for more than two million subscribers.",
			url: "https://www.youtube.com/@TraversyMedia",
			order: 1,
			icon: "youtube",
		},
		{
			name: "Traversy Media",
			label: "Courses",
			description:
				"The long-running education brand and home for complete, self-paced web development courses.",
			url: "https://www.traversymedia.com/",
			order: 2,
			icon: "graduation",
		},
		{
			name: "Start.dev",
			label: "Interactive",
			description:
				"A modern learning platform built around focused lessons, real coding challenges, and structured progress.",
			url: "https://start.dev/",
			order: 3,
			icon: "code",
		},
	],
	credibilityFacts: [
		{
			value: "2M+ YouTube subscribers",
			description: "Practical education for working developers",
		},
		{
			value: "Coding since 2007",
			description: "Teaching, creating, and building products",
		},
		{
			value: "Building in public",
			description: "Daily work and devlogs",
			url: "https://bradtraversy.dev",
		},
	],
} satisfies SiteConfig;
