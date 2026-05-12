"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";

import { MotionIcon, type MotionIconType } from "@shared/ui";

type MainNavigationLinkProps = {
	href: string;
	icon: MotionIconType;
	children: ReactNode;
};

export const MainNavigationLink = ({ href, icon, children }: Readonly<MainNavigationLinkProps>) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			className="flex items-center gap-x-[8px] font-(family-name:--font-barlow) font-medium text-[14px] leading-[129%] tracking-[0.01em] text-(--neutrals-3) rounded-[16px] p-[6px] hover:outline-[0.50px] hover:outline-solid hover:outline-(--white-pallete-50) hover:bg-(--geek-blue-primary-opacity-400) hover:text-(--white-pallete-100)"
			href={href}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<span className="w-[24px] h-[24px] flex items-center justify-center">
				<MotionIcon isHovered={isHovered} className="w-[16px] h-[16px]" type={icon} />
			</span>
			{children}
		</Link>
	);
};
