"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { Icon, ICON, MOTION_ICON, MotionIcon } from "@shared/ui";

import { TRANSITION_LAYOUT, USER_PROFILE_CHEVRON_VARIANTS, USER_PROFILE_CONTAINER_VARIANTS } from "../config";

import { UserProfileNavigation } from "./user-profile-navigation";

type UserProfileState = "opened" | "closed";

export const UserProfile = () => {
	const [userProfileState, setUserProfileState] = useState<UserProfileState>("closed");
	const userProfileRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handlePointerOutside = (event: MouseEvent) => {
			if (userProfileRef.current && !userProfileRef.current.contains(event.target as Node)) {
				setUserProfileState("closed");
			}
		};

		document.addEventListener("pointerdown", handlePointerOutside);

		return () => {
			document.removeEventListener("pointerdown", handlePointerOutside);
		};
	}, []);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setUserProfileState("closed");
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	const isUserProfileOpened = userProfileState === "opened";

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
			ref={userProfileRef}
			className="absolute top-0 right-0 min-w-[10rem] overflow-hidden rounded-[0.75rem] border-[0.031rem] border-solid text-(--white-pallete-100) backdrop-blur-[3.625rem]"
			initial="initial"
			animate={isUserProfileOpened ? "opened" : "closed"}
			whileHover="hovered"
			variants={USER_PROFILE_CONTAINER_VARIANTS}
			transition={{ layout: TRANSITION_LAYOUT }}
		>
			<motion.nav aria-label="User profile navigation" className="relative z-50">
				<button
					type="button"
					onClick={handleUserProfileToggle}
					className="flex h-[2.5rem] w-full cursor-pointer items-center gap-x-[0.625rem] rounded-[0.75rem] py-[0.375rem] pr-[0.75rem] pl-[0.5rem] text-left transition-[color,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:shadow-focus-blue"
					aria-expanded={isUserProfileOpened}
					aria-controls="user-profile-navigation"
				>
					<span className="flex h-[1.75rem] w-[1.75rem] shrink-0 items-center justify-center overflow-hidden rounded-full bg-(--geek-blue-primary-opacity-300) text-(--white-pallete-100)">
						<Icon type={ICON.User} size={18} />
					</span>
					<span className="relative z-50 min-w-0 flex-1 truncate font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[1rem] tracking-[0.01em] text-(--white-pallete-100)">
						Account
					</span>
					<MotionIcon
						type={MOTION_ICON.Chevron}
						className="h-[1rem] w-[1rem] shrink-0 text-(--neutrals-3)"
						animate={isUserProfileOpened ? "opened" : "closed"}
						variants={USER_PROFILE_CHEVRON_VARIANTS}
					/>
				</button>
				<UserProfileNavigation isUserProfileOpened={isUserProfileOpened} />
			</motion.nav>
		</motion.div>
	);
};
