"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { FC } from "react";
import { useEffect, useRef, useState } from "react";

import { Icon, ICON, MOTION_ICON, MotionIcon } from "@shared/ui";

import {
	TRANSITION_HIGHLIGHT,
	TRANSITION_LAYOUT,
	USER_PROFILE_CHEVRON_VARIANTS,
	USER_PROFILE_CONTAINER_VARIANTS,
	USER_PROFILE_ITEMS,
	USER_PROFILE_NAVIGATION_VARIANTS,
	USER_PROFILE_VARIANTS
} from "../config";

type UserProfileState = "opened" | "closed";

export const UserProfile: FC = () => {
	const [userProfileState, setUserProfileState] = useState<UserProfileState>("closed");
	const [activeNavigationItemIndex, setActiveNavigationItemIndex] = useState<number | null>(null);
	const userProfileRef = useRef<HTMLDivElement>(null);

	const isUserProfileOpened = userProfileState === "opened";

	const handleUserProfileToggle = () => {
		setUserProfileState((prev) => {
			if (prev === "closed") {
				setActiveNavigationItemIndex(null);
				return "opened";
			}

			return "closed";
		});
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (userProfileRef.current && !userProfileRef.current.contains(event.target as Node)) {
				setUserProfileState("closed");
				setActiveNavigationItemIndex(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<motion.div
			layout
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
			<motion.nav layout aria-label="User profile navigation" className="relative z-50">
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
				>
					{USER_PROFILE_ITEMS.map(({ href, label }, index) => (
						<li
							key={href}
							onMouseEnter={() => setActiveNavigationItemIndex(index)}
							className="relative z-10 rounded-[0.5rem]"
						>
							{activeNavigationItemIndex === index && (
								<motion.div
									layoutId="nav-highlight"
									className="absolute z-10 inset-0 bg-(--white-pallete-10) rounded-[0.5rem]"
									transition={TRANSITION_HIGHLIGHT}
								/>
							)}
							<Link
								href={href}
								className="relative z-20 flex items-center gap-x-[0.5rem] py-[0.4rem] pl-[0.4rem] pr-[0.8rem] whitespace-nowrap font-(family-name:--font-barlow) text-[0.75rem] font-medium leading-[1rem] tracking-[0.02em] text-(--white-pallete-100) outline-none focus-visible:ring-1 focus-visible:ring-(--white-pallete-40) rounded-[0.5rem]"
							>
								<span className="flex items-center justify-center w-[1.25rem] h-[1.25rem] rounded-[0.25rem] bg-(--white-pallete-5) ring-1 ring-inset ring-(--white-pallete-10) text-(--white-pallete-80) shadow-sm">
									{label === "Dashboard" && <Icon type={ICON.Dashboard} />}
									{label === "Settings" && <Icon type={ICON.Settings} />}
								</span>
								<span>{label}</span>
							</Link>
						</li>
					))}
				</motion.ul>
			</motion.nav>
		</motion.div>
	);
};
