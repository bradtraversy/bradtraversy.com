import { getCollection, type CollectionEntry } from "astro:content";

export type ProjectEntry = CollectionEntry<"projects">;
export type ProjectIconName = ProjectEntry["data"]["icon"];
export type CaseStudyProjectEntry = ProjectEntry & {
	data: ProjectEntry["data"] & {
		caseStudy: NonNullable<ProjectEntry["data"]["caseStudy"]>;
	};
};

export interface ProjectCatalog {
	projects: ProjectEntry[];
	featured: ProjectEntry[];
	additional: ProjectEntry[];
}

const CURATED_PROJECT_SLUGS = [
	"devsheets",
	"apimocker",
	"vidpipe",
	"webutils",
	"portdoc",
	"ai-blueprint",
	"linesmith",
	"skillpass",
	"namescout",
] as const;

const HOMEPAGE_PROJECT_SLUGS = [
	"devsheets",
	"apimocker",
	"portdoc",
	"webutils",
	"vidpipe",
	"ai-blueprint",
	"linesmith",
	"skillpass",
	"namescout",
] as const;

export async function getProjectCatalog(): Promise<ProjectCatalog> {
	const collection = await getCollection("projects");
	const projectsBySlug = new Map(
		collection.map((project) => [project.id, project]),
	);
	const projects = CURATED_PROJECT_SLUGS.map((slug, index) => {
		const project = projectsBySlug.get(slug);

		if (!project) {
			throw new Error(`Missing curated project: ${slug}`);
		}

		const expectedOrder = index + 1;

		if (project.data.order !== expectedOrder) {
			throw new Error(
				`Curated project "${slug}" must use order ${expectedOrder}.`,
			);
		}

		return project;
	});
	const featured = projects.filter((project) => project.data.featured);
	const additional = projects.filter((project) => !project.data.featured);

	return {
		projects,
		featured,
		additional,
	};
}

export async function getHomepageProjects(): Promise<ProjectEntry[]> {
	const { projects } = await getProjectCatalog();
	const projectsBySlug = new Map(
		projects.map((project) => [project.id, project]),
	);

	return HOMEPAGE_PROJECT_SLUGS.map((slug) => {
		const project = projectsBySlug.get(slug);

		if (!project) {
			throw new Error(`Missing homepage project: ${slug}`);
		}

		return project;
	});
}

export function hasCaseStudy(
	project: ProjectEntry,
): project is CaseStudyProjectEntry {
	return project.data.caseStudy !== undefined;
}

export function getProjectPrimaryHref(project: ProjectEntry): string {
	return `/projects/${project.id}`;
}

export async function getProjectDetailProjects(): Promise<ProjectEntry[]> {
	const { projects } = await getProjectCatalog();

	for (const project of projects.filter(hasCaseStudy)) {
		if (!project.body?.trim()) {
			throw new Error(
				`Project case study "${project.id}" requires a non-empty Markdown body.`,
			);
		}

		if (project.data.capabilities.length === 0) {
			throw new Error(
				`Project case study "${project.id}" requires at least one capability.`,
			);
		}

		if (project.data.gallery.length === 0) {
			throw new Error(
				`Project case study "${project.id}" requires at least one gallery image.`,
			);
		}
	}

	return projects;
}
