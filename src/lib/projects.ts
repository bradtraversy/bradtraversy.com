import { getCollection, type CollectionEntry } from "astro:content";

export type ProjectEntry = CollectionEntry<"projects">;
export type ProjectIconName = ProjectEntry["data"]["icon"];

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
