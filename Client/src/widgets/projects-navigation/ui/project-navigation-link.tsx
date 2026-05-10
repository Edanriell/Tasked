"use client";

import { getColor } from "colorthief";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ROUTES } from "@shared/config";

import { getOppositeColor } from "../lib";

type ProjectNavigationLinkProps = {
	id: string;
	name: string;
	image: string;
};

export const ProjectNavigationLink = ({ id, image, name }: Readonly<ProjectNavigationLinkProps>) => {
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
	}, [image]);

	return (
		<Link href={ROUTES.Project(id)}>
			<div style={{ backgroundColor }} className="rounded-md w-[24px] h-[24px]">
				<Image ref={projectImageRef} src={image} alt={`Project ${name}`} width={24} height={24} />
			</div>
			<span>{name}</span>
		</Link>
	);
};
