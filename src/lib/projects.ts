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

type ProjectGroupName = "featured" | "additional";

function sortProjectGroup(
	projects: ProjectEntry[],
	groupName: ProjectGroupName,
): ProjectEntry[] {
	const seenOrders = new Set<number>();

	for (const project of projects) {
		if (seenOrders.has(project.data.order)) {
			throw new Error(
				`Duplicate ${groupName} project order: ${project.data.order}`,
			);
		}

		seenOrders.add(project.data.order);
	}

	return [...projects].sort((a, b) => a.data.order - b.data.order);
}

export async function getProjectCatalog(): Promise<ProjectCatalog> {
	const projects = await getCollection("projects");
	const featured = sortProjectGroup(
		projects.filter((project) => project.data.featured),
		"featured",
	);
	const additional = sortProjectGroup(
		projects.filter((project) => !project.data.featured),
		"additional",
	);

	return {
		projects: [...featured, ...additional],
		featured,
		additional,
	};
}

export function hasCaseStudy(
	project: ProjectEntry,
): project is CaseStudyProjectEntry {
	return project.data.caseStudy !== undefined;
}

export function getProjectPrimaryHref(project: ProjectEntry): string {
	return hasCaseStudy(project)
		? `/projects/${project.id}`
		: project.data.liveUrl;
}

export async function getCaseStudyProjects(): Promise<
	CaseStudyProjectEntry[]
> {
	const { projects } = await getProjectCatalog();
	const caseStudies = projects.filter(hasCaseStudy);

	for (const project of caseStudies) {
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

	return caseStudies;
}
