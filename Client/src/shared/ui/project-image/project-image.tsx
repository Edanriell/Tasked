"use client";

import { clsx } from "clsx";
import { getColor } from "colorthief";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { getOppositeColor } from "../../lib/utils";

type ProjectImageProps = {
	name: string;
	imageUrl: string;
	imageSize?: number;
	iconSize?: number;
	imageClasses?: string;
	iconClasses?: string;
};

export const ProjectImage = ({
	name,
	imageUrl,
	imageSize = 24,
	iconSize = 16,
	imageClasses,
	iconClasses
}: ProjectImageProps) => {
	const [backgroundColor, setBackgroundColor] = useState<string>("transparent");

	const projectImageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		const projectImage = projectImageRef.current;

		if (!projectImage) return;

		let cancelled = false;

		const setOppositeColor = async () => {
			if (!projectImage.complete || projectImage.naturalWidth === 0) return;

			try {
				const dominantColor = await getColor(projectImage);

				if (cancelled || !dominantColor) return;

				setBackgroundColor(getOppositeColor(dominantColor));
			} catch {
				if (!cancelled) {
					setBackgroundColor("transparent");
				}
			}
		};

		if (projectImage.complete) {
			setOppositeColor();
		} else {
			projectImage.addEventListener("load", setOppositeColor);
		}

		return () => {
			cancelled = true;
			projectImage.removeEventListener("load", setOppositeColor);
		};
	}, [imageUrl]);

	return (
		<div
			style={{ backgroundColor, width: imageSize, height: imageSize }}
			className={clsx("rounded-[0.5rem] p-[0.25rem]", imageClasses && imageClasses)}
		>
			<Image
				ref={projectImageRef}
				src={imageUrl}
				alt={`Project ${name}`}
				width={iconSize}
				height={iconSize}
				className={clsx(iconClasses && iconClasses)}
			/>
		</div>
	);
};
