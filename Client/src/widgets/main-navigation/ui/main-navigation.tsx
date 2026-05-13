"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MAIN_NAVIGATION_ITEMS, TRANSITION_HIGHLIGHT } from "../config";

import { MainNavigationLink } from "./main-navigation-link";

export const MainNavigation = () => {
	const pathname = usePathname();

	const [hoveredLinkId, setHoveredLinkId] = useState<string | null>(null);

	const routeActiveLinkId = MAIN_NAVIGATION_ITEMS.find((item) => item.match(pathname))?.id ?? null;

	const activeLinkId = hoveredLinkId ?? routeActiveLinkId;

	const handleLinkSelection = (linkId: string) => {
		setHoveredLinkId(linkId);
	};

	const handleLinkUnselection = () => {
		setHoveredLinkId(null);
	};

	return (
		<nav
			className="relative mx-[0.75rem] py-[1rem]"
			id="dashboard-main-nav"
			aria-labelledby="dashboard-main-nav-title"
		>
			<h3
				className="font-(family-name:--font-barlow) font-bold text-[0.625rem] leading-[140%] tracking-[0.01em] uppercase text-(--neutrals-2) mb-[0.5rem]"
				id="dashboard-main-nav-title"
			>
				Main
			</h3>
			<ul
				className="flex flex-col gap-y-[0.25rem]"
				onPointerLeave={handleLinkUnselection}
				onBlurCapture={handleLinkUnselection}
			>
				{MAIN_NAVIGATION_ITEMS.map(({ id, href, icon, label }) => {
					const isActive = activeLinkId === id;

					return (
						<li
							className="relative"
							key={id}
							onPointerEnter={() => handleLinkSelection(id)}
							onFocusCapture={() => handleLinkSelection(id)}
						>
							{isActive && (
								<motion.div
									layoutId="nav-highlight"
									className="absolute -z-10 inset-0 rounded-[0.75rem] outline-[0.031rem] outline-solid outline-(--white-pallete-50) bg-(--geek-blue-primary-opacity-400) text-(--white-pallete-100)"
									transition={TRANSITION_HIGHLIGHT}
								/>
							)}
							<MainNavigationLink href={href} icon={icon} isActive={isActive}>
								{label}
							</MainNavigationLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
