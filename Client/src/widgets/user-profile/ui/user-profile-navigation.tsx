"use client";

import { motion } from "motion/react";

import { TRANSITION_HIGHLIGHT } from "@shared/config";
import { useNavigationLinkHighlight } from "@shared/ui";

import { USER_PROFILE_ITEMS, USER_PROFILE_NAVIGATION_VARIANTS, USER_PROFILE_VARIANTS } from "../config";

import { UserProfileNavigationLink } from "./user-profile-navigation-link";

type UserProfileNavigationProps = {
	isUserProfileOpened: boolean;
};

export const UserProfileNavigation = ({ isUserProfileOpened }: Readonly<UserProfileNavigationProps>) => {
	const { activeLinkId, handleLinkSelection, handleLinkUnselection } = useNavigationLinkHighlight(USER_PROFILE_ITEMS);

	return (
		<motion.ul
			className="relative z-50 flex flex-col gap-y-[0.125rem] px-[1rem] overflow-hidden"
			animate={isUserProfileOpened ? USER_PROFILE_VARIANTS.Opened : USER_PROFILE_VARIANTS.Closed}
			variants={USER_PROFILE_NAVIGATION_VARIANTS}
			initial={false}
			onPointerLeave={handleLinkUnselection}
			onBlurCapture={handleLinkUnselection}
		>
			{USER_PROFILE_ITEMS.map(({ id, href, icon, label }) => {
				const isActive = activeLinkId === id;

				return (
					<li
						key={id}
						onPointerEnter={() => handleLinkSelection(id)}
						onFocusCapture={() => handleLinkSelection(id)}
						className="relative z-10 rounded-[0.5rem]"
					>
						{isActive && (
							<motion.div
								layoutId="nav-highlight"
								className="absolute z-10 inset-0 bg-(--white-pallete-10) rounded-[0.5rem]"
								transition={TRANSITION_HIGHLIGHT}
							/>
						)}
						<UserProfileNavigationLink href={href} icon={icon} isActive={isActive}>
							{label}
						</UserProfileNavigationLink>
					</li>
				);
			})}
		</motion.ul>
	);
};
