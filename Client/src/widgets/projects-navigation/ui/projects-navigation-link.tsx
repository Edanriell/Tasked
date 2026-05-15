"use client";

import { clsx } from "clsx";
import { getColor } from "colorthief";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { ROUTES } from "@shared/config";

import { getOppositeColor } from "../lib";

type ProjectNavigationLinkProps = {
	id: string;
	name: string;
	isActive: boolean;
	image: string;
	children: ReactNode;
};

export const ProjectsNavigationLink = ({
	id,
	name,
	image,
	isActive,
	children
}: Readonly<ProjectNavigationLinkProps>) => {
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
		<Link
			href={ROUTES.Project(id)}
			className={clsx(
				"flex items-center gap-x-[0.5rem] font-(family-name:--font-barlow) font-medium text-[0.875rem] leading-[129%] tracking-[0.01em] rounded-[0.75rem] p-[0.375rem]",
				isActive && "text-(--white-pallete-100)",
				!isActive && "text-(--neutrals-3)"
			)}
		>
			<div style={{ backgroundColor }} className="w-[1.5rem] h-[1.5rem] rounded-[0.5rem] p-[0.25rem]">
				<Image ref={projectImageRef} src={image} alt={`Project ${name}`} width={24} height={24} />
			</div>
			<span>{children}</span>
		</Link>
	);
};
