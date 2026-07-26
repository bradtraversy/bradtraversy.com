import { getCollection, type CollectionEntry } from "astro:content";

export type WritingEntry = CollectionEntry<"writing">;
export type WritingArticleData = NonNullable<WritingEntry["data"]["article"]>;
export type InternalWritingEntry = WritingEntry & {
	data: WritingEntry["data"] & {
		externalUrl?: undefined;
		article: WritingArticleData;
	};
};

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

function validateWritingEntry(entry: WritingEntry): void {
	const hasBody = Boolean(entry.body?.trim());
	const article = entry.data.article;

	if (entry.data.externalUrl) {
		if (hasBody) {
			throw new Error(`External writing entry "${entry.id}" must not have a body.`);
		}

		if (article) {
			throw new Error(`External writing entry "${entry.id}" must not have article metadata.`);
		}

		return;
	}

	if (!hasBody) {
		throw new Error(`Internal writing entry "${entry.id}" requires a body.`);
	}

	if (!article) {
		throw new Error(`Internal writing entry "${entry.id}" requires article metadata.`);
	}

	if (
		article.titleAccent &&
		!entry.data.title.toLowerCase().endsWith(article.titleAccent.toLowerCase())
	) {
		throw new Error(
			`Writing entry "${entry.id}" title must end with accent "${article.titleAccent}".`,
		);
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

export function isInternalWritingEntry(
	entry: WritingEntry,
): entry is InternalWritingEntry {
	return (
		!entry.data.externalUrl &&
		Boolean(entry.data.article) &&
		Boolean(entry.body?.trim())
	);
}

export function getInternalWritingEntries(
	entries: WritingEntry[],
): InternalWritingEntry[] {
	return entries.filter(isInternalWritingEntry);
}

export function getNextWritingEntry(
	entries: WritingEntry[],
	entry: WritingEntry,
): WritingEntry | undefined {
	const currentIndex = entries.findIndex((candidate) => candidate.id === entry.id);

	return currentIndex >= 0 ? entries[currentIndex + 1] : undefined;
}

export async function getWritingCatalog(): Promise<WritingCatalog> {
	const entries = await getCollection("writing");
	const sortedEntries = [...entries].sort(
		(a, b) =>
			b.data.publishDate.getTime() - a.data.publishDate.getTime() ||
			a.data.title.localeCompare(b.data.title),
	);

	for (const entry of sortedEntries) {
		validateWritingEntry(entry);
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
