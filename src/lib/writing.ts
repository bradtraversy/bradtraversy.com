import { getCollection, type CollectionEntry } from "astro:content";

export type WritingEntry = CollectionEntry<"writing">;

export interface WritingTopic {
	label: string;
	id: string;
}

export interface WritingCatalog {
	entries: WritingEntry[];
	featured: WritingEntry;
	supporting: WritingEntry[];
	topics: WritingTopic[];
}

export interface WritingDestination {
	href: string;
	external: boolean;
}

const WRITING_DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
	month: "long",
	day: "numeric",
	year: "numeric",
	timeZone: "UTC",
});

function normalizeTopicId(topic: string): string {
	return topic
		.toLowerCase()
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

function validateWritingBody(entry: WritingEntry): void {
	const hasBody = Boolean(entry.body?.trim());

	if (entry.data.externalUrl && hasBody) {
		throw new Error(`External writing entry "${entry.id}" must not have a body.`);
	}

	if (!entry.data.externalUrl && !hasBody) {
		throw new Error(`Internal writing entry "${entry.id}" requires a body.`);
	}
}

function getWritingTopics(entries: WritingEntry[]): WritingTopic[] {
	const topics: WritingTopic[] = [];
	const labels = new Set<string>();
	const ids = new Map<string, string>();

	for (const entry of entries) {
		const label = entry.data.topic;

		if (labels.has(label)) {
			continue;
		}

		const id = normalizeTopicId(label);
		const existingLabel = ids.get(id);

		if (!id) {
			throw new Error(`Writing topic "${label}" requires a usable anchor ID.`);
		}

		if (existingLabel) {
			throw new Error(
				`Writing topics "${existingLabel}" and "${label}" share anchor ID "${id}".`,
			);
		}

		labels.add(label);
		ids.set(id, label);
		topics.push({ label, id });
	}

	return topics;
}

export async function getWritingCatalog(): Promise<WritingCatalog> {
	const entries = await getCollection("writing");
	const sortedEntries = [...entries].sort(
		(a, b) =>
			b.data.publishDate.getTime() - a.data.publishDate.getTime() ||
			a.data.title.localeCompare(b.data.title),
	);

	for (const entry of sortedEntries) {
		validateWritingBody(entry);
	}

	const featuredEntries = sortedEntries.filter((entry) => entry.data.featured);

	if (featuredEntries.length !== 1) {
		throw new Error(
			`Writing requires exactly one featured entry; found ${featuredEntries.length}.`,
		);
	}

	const featured = featuredEntries[0];

	return {
		entries: sortedEntries,
		featured,
		supporting: sortedEntries.filter((entry) => entry.id !== featured.id),
		topics: getWritingTopics(sortedEntries),
	};
}

export function getWritingDestination(
	entry: WritingEntry,
): WritingDestination {
	return entry.data.externalUrl
		? { href: entry.data.externalUrl, external: true }
		: { href: `/writing/${entry.id}`, external: false };
}

export function formatWritingDate(date: Date): string {
	return WRITING_DATE_FORMATTER.format(date);
}
