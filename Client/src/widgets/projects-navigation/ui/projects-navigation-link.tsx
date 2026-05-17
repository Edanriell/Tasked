"use client";

import { clsx } from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

import { ROUTES } from "@shared/config";
import { ProjectImage } from "@shared/ui";

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
	return (
		<Link
			href={ROUTES.Project(id)}
			className={clsx(
				"flex items-center gap-x-[0.5rem] font-(family-name:--font-barlow) font-medium text-[0.875rem] leading-[129%] tracking-[0.01em] rounded-[0.75rem] p-[0.375rem]",
				isActive && "text-(--white-pallete-100)",
				!isActive && "text-(--neutrals-3)"
			)}
		>
			<ProjectImage name={name} imageUrl={image} />
			<span>{children}</span>
		</Link>
	);
};
