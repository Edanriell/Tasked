"use client";

import { NavigationLinkHighlight, useNavigationLinkHighlight } from "@shared/ui";

import { MAIN_NAVIGATION_ITEMS } from "../config";

import { MainNavigationLink } from "./main-navigation-link";

export const MainNavigation = () => {
	const { activeLinkId, handleLinkSelection, handleLinkUnselection } =
		useNavigationLinkHighlight(MAIN_NAVIGATION_ITEMS);

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
							{isActive && <NavigationLinkHighlight layoutId="main-navigation-link-highlight" />}
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
