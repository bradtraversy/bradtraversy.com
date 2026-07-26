import type { SocialIconName } from "./site";

export interface ConnectionLink {
	name: string;
	handle: string;
	label: string;
	url: string;
	icon: SocialIconName;
}

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
