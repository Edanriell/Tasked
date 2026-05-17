import type { Metadata } from "next";

type BuildStaticMetadataParameters = {
	title: string;
	description: string;
	openGraph?: Partial<NonNullable<Metadata["openGraph"]>>;
	imagePath?: string;
};

export function buildStaticMetadata({
	title,
	description,
	openGraph,
	imagePath
}: BuildStaticMetadataParameters): Metadata {
	// const metadataBase = new URL(envServer.WEBSITE_URL);
	// const imageUrl = imagePath ? new URL(imagePath, metadataBase).toString() : undefined;

	return {
		// metadataBase,
		title,
		description,
		openGraph: {
			...openGraph,
			title: openGraph?.title ?? title,
			description: openGraph?.description ?? description
			// images: openGraph?.images ?? (imageUrl ? [{ url: imageUrl, alt: title }] : undefined)
		},
		twitter: {
			card: "summary_large_image",
			title,
			description
			// images: imageUrl ? [imageUrl] : undefined
		}
	};
}
