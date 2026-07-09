"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { Icon, ICON, MOTION_ICON, MotionIcon } from "@shared/ui";

import {
	TRANSITION_LAYOUT,
	USER_PROFILE_CHEVRON_VARIANTS,
	USER_PROFILE_CONTAINER_VARIANTS,
	USER_PROFILE_VARIANTS
} from "../config";

import { UserProfileNavigation } from "./user-profile-navigation";

type UserProfileState = "opened" | "closed";

export const UserProfile = () => {
	const [userProfileState, setUserProfileState] = useState<UserProfileState>("closed");
	const userProfileRef = useRef<HTMLDivElement>(null);

	const isUserProfileOpened = userProfileState === "opened";

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (userProfileRef.current && !userProfileRef.current.contains(event.target as Node)) {
				setUserProfileState("closed");
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
				return "opened";
			}

			return "closed";
		});
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
					<Icon type={ICON.Account} />
					<span className="relative z-50 font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[1rem] tracking-[0.01em] text-(--white-pallete-100)">
						Account
					</span>
					<MotionIcon
						type={MOTION_ICON.Chevron}
						animate={isUserProfileOpened ? USER_PROFILE_VARIANTS.Opened : USER_PROFILE_VARIANTS.Closed}
						variants={USER_PROFILE_CHEVRON_VARIANTS}
					/>
				</div>
				<UserProfileNavigation isUserProfileOpened={isUserProfileOpened} />
			</motion.nav>
		</motion.div>
	);
};
