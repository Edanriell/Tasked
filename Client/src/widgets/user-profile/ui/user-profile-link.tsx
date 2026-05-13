"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { Icon, type IconType } from "@shared/ui";

type UserProfileLinkProps = {
	href: string;
	icon: IconType;
	children: ReactNode;
};

export const UserProfileLink = ({ href, icon, children }: UserProfileLinkProps) => {
	return (
		<Link
			href={href}
			className="relative z-20 flex items-center gap-x-[0.5rem] py-[0.4rem] pl-[0.4rem] pr-[0.8rem] whitespace-nowrap font-(family-name:--font-barlow) text-[0.75rem] font-medium leading-[1rem] tracking-[0.02em] text-(--white-pallete-100) outline-none focus-visible:ring-1 focus-visible:ring-(--white-pallete-40) rounded-[0.5rem]"
		>
			<span className="flex items-center justify-center w-[1.25rem] h-[1.25rem] rounded-[0.25rem] bg-(--white-pallete-5) ring-1 ring-inset ring-(--white-pallete-10) text-(--white-pallete-80) shadow-sm">
				<Icon type={icon} />
			</span>
			<span>{children}</span>
		</Link>
	);
};
