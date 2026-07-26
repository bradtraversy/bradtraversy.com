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
const CAPABILITY_ICON = z.enum(["search", "check", "bookmark", "unlock"]);

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
	schema: ({ image }) => {
		const mediaAsset = z.object({
			src: image(),
			alt: REQUIRED_TEXT,
			title: REQUIRED_TEXT.optional(),
			caption: REQUIRED_TEXT.optional(),
		});

		const projectSection = z.object({
			eyebrow: REQUIRED_TEXT,
			heading: REQUIRED_TEXT,
			accent: REQUIRED_TEXT,
		});

		const projectSchema = z.object({
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
						icon: CAPABILITY_ICON,
					}),
				)
				.default([]),
			caseStudy: z
				.object({
					title: z.object({
						base: REQUIRED_TEXT,
						accent: REQUIRED_TEXT,
					}),
					description: REQUIRED_TEXT,
					productLabel: REQUIRED_TEXT,
					story: projectSection,
					product: projectSection.extend({
						description: REQUIRED_TEXT,
					}),
					build: projectSection.extend({
						description: REQUIRED_TEXT,
						stackLabel: REQUIRED_TEXT,
						stack: z.array(REQUIRED_TEXT).min(1),
						workflowLabel: REQUIRED_TEXT,
						workflow: z
							.array(
								z.object({
									label: REQUIRED_TEXT,
									command: REQUIRED_TEXT,
									description: REQUIRED_TEXT,
								}),
							)
							.min(1),
					}),
					cta: projectSection.extend({
						description: REQUIRED_TEXT,
					}),
				})
				.optional(),
		});

		return projectSchema.superRefine((project, context) => {
			if (!project.caseStudy) {
				return;
			}

			if (project.capabilities.length === 0) {
				context.addIssue({
					code: "custom",
					message: "A case study requires at least one capability.",
					path: ["capabilities"],
				});
			}

			if (project.gallery.length === 0) {
				context.addIssue({
					code: "custom",
					message: "A case study requires at least one gallery image.",
					path: ["gallery"],
				});
			}
		});
	},
});

const writing = defineCollection({
	loader: glob({ base: "./src/content/writing", pattern: "**/*.md" }),
	schema: ({ image }) =>
		z.object({
			title: REQUIRED_TEXT,
			description: REQUIRED_TEXT,
			publishDate: z.coerce.date(),
			topic: REQUIRED_TEXT,
			cover: z.object({
				src: image(),
				alt: REQUIRED_TEXT,
				caption: REQUIRED_TEXT.optional(),
			}),
			externalUrl: EXTERNAL_URL.optional(),
			featured: z.boolean(),
		}),
});

export const collections = { projects, writing };
