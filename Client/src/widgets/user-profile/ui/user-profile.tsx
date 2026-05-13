"use client";

import {motion} from "motion/react";
import {useEffect, useRef, useState} from "react";

import {Icon, ICON, MOTION_ICON, MotionIcon} from "@shared/ui";

import {
	TRANSITION_HIGHLIGHT,
	TRANSITION_LAYOUT,
	USER_PROFILE_CHEVRON_VARIANTS,
	USER_PROFILE_CONTAINER_VARIANTS,
	USER_PROFILE_ITEMS,
	USER_PROFILE_NAVIGATION_VARIANTS,
	USER_PROFILE_VARIANTS
} from "../config";

import {UserProfileLink} from "./user-profile-link";

type UserProfileState = "opened" | "closed";

export const UserProfile = () => {
	const [userProfileState, setUserProfileState] = useState<UserProfileState>("closed");
	const [hoveredLinkId, setHoveredLinkId] = useState<string | null>(null);

	const userProfileRef = useRef<HTMLDivElement>(null);

	const isUserProfileOpened = userProfileState === "opened";

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (userProfileRef.current && !userProfileRef.current.contains(event.target as Node)) {
				setUserProfileState("closed");
				setHoveredLinkId(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleUserProfileToggle = () => {
		setUserProfileState((prev) => {
			if (prev === "closed") {
				setHoveredLinkId(null);
				return "opened";
			}

			return "closed";
		});
	};

	const handleLinkSelection = (linkId: string) => {
		setHoveredLinkId(linkId);
	};

	const handleLinkUnselection = () => {
		setHoveredLinkId(null);
	};

	return (
		<motion.div
			tabIndex={0}
			ref={userProfileRef}
			className="absolute top-0 right-0 text-(--white-pallete-100) border-solid border-[0.063rem] rounded-[1.5rem] backdrop-blur-[1.25rem]"
			initial={USER_PROFILE_VARIANTS.Closed}
			animate={isUserProfileOpened ? USER_PROFILE_VARIANTS.Opened : USER_PROFILE_VARIANTS.Closed}
			whileHover={USER_PROFILE_VARIANTS.Hovered}
			variants={USER_PROFILE_CONTAINER_VARIANTS}
			aria-label="User profile"
			aria-expanded={isUserProfileOpened}
			transition={{ layout: TRANSITION_LAYOUT }}
		>
			<motion.nav aria-label="User profile navigation" className="relative z-50">
				<div
					onClick={handleUserProfileToggle}
					className="flex items-center gap-x-[0.5rem] py-[0.75rem] px-[1rem] cursor-pointer"
				>
					<Icon type={ICON.User} />
					<span className="relative z-50 font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[1rem] tracking-[0.01em] text-(--white-pallete-100)">
						Account
					</span>
					<MotionIcon
						type={MOTION_ICON.Chevron}
						animate={isUserProfileOpened ? USER_PROFILE_VARIANTS.Opened : USER_PROFILE_VARIANTS.Closed}
						variants={USER_PROFILE_CHEVRON_VARIANTS}
					/>
				</div>
				<motion.ul
					className="relative z-50 flex flex-col gap-y-[0.125rem] px-[1rem] overflow-hidden"
					animate={isUserProfileOpened ? USER_PROFILE_VARIANTS.Opened : USER_PROFILE_VARIANTS.Closed}
					variants={USER_PROFILE_NAVIGATION_VARIANTS}
					initial={false}
					onPointerLeave={handleLinkUnselection}
					onBlurCapture={handleLinkUnselection}
				>
					{USER_PROFILE_ITEMS.map(({ id, href, icon, label }) => {
						const isActive = hoveredLinkId === id;

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
								<UserProfileLink href={href} icon={icon}>
									{label}
								</UserProfileLink>
							</li>
						);
					})}
				</motion.ul>
			</motion.nav>
		</motion.div>
	);
};
