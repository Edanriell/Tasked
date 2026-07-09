import type { Metadata } from "next";

type BuildStaticMetadataParameters = {
	title: string;
	description: string;
	metadataBase?: URL;
	imagePath?: string;
	openGraph?: Metadata["openGraph"];
	twitter?: Metadata["twitter"];
	metadata?: Omit<Metadata, "title" | "description" | "openGraph" | "twitter">;
};

export const buildStaticMetadata = ({
	title,
	description,
	metadataBase,
	imagePath,
	openGraph,
	twitter,
	metadata
}: BuildStaticMetadataParameters): Metadata => {
	const imageUrl = imagePath && metadataBase ? new URL(imagePath, metadataBase) : imagePath;

	return {
		metadataBase,
		title,
		description,
		...metadata,
		openGraph: {
			title,
			description,
			type: "website",
			...openGraph,
			images:
				openGraph?.images ??
				(imageUrl
					? [
							{
								url: imageUrl,
								width: 1200,
								height: 630,
								alt: title
							}
						]
					: undefined)
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			...twitter,
			images: twitter?.images ?? (imageUrl ? [imageUrl] : undefined)
		}
	};
};
