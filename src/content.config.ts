import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const REQUIRED_TEXT = z.string().trim().min(1);
const EXTERNAL_URL = z.url({ protocol: /^https?$/ });
const PROJECT_ICON = z.enum([
	"reference",
	"api",
	"shield",
	"network",
	"workflow",
	"video",
]);

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
	schema: ({ image }) => {
		const mediaAsset = z.object({
			src: image(),
			alt: REQUIRED_TEXT,
			caption: REQUIRED_TEXT.optional(),
		});

		return z.object({
			title: REQUIRED_TEXT,
			status: REQUIRED_TEXT,
			type: REQUIRED_TEXT,
			role: REQUIRED_TEXT,
			tagline: REQUIRED_TEXT,
			summary: REQUIRED_TEXT,
			stack: z.array(REQUIRED_TEXT).min(1),
			liveUrl: EXTERNAL_URL,
			devlogUrl: EXTERNAL_URL.optional(),
			featured: z.boolean(),
			order: z.number().int().positive(),
			icon: PROJECT_ICON,
			hero: mediaAsset,
			gallery: z.array(mediaAsset).default([]),
			capabilities: z
				.array(
					z.object({
						title: REQUIRED_TEXT,
						description: REQUIRED_TEXT,
					}),
				)
				.default([]),
		});
	},
});

export const collections = { projects };
