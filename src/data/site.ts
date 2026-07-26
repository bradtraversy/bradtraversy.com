export interface NavItem {
	label: string;
	href: string;
	external: boolean;
}

export interface SocialLink {
	name: string;
	label: string;
	url: string;
	icon: "github" | "x" | "youtube" | "instagram";
}

export interface SiteConfig {
	name: string;
	description: string;
	navigation: NavItem[];
	socialLinks: SocialLink[];
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
} satisfies SiteConfig;
