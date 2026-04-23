"use client";

import {motion} from "motion/react";
import Link from "next/link";
import type {FC, FocusEvent} from "react";
import {useRef, useState} from "react";

import {
	USER_PROFILE_CHEVRON_VARIANTS,
	USER_PROFILE_CONTAINER_VARIANTS,
	USER_PROFILE_ITEMS,
	USER_PROFILE_NAVIGATION_VARIANTS,
	USER_PROFILE_VARIANTS
} from "@widgets/user-profile/config";

import {ICON, Icon, MOTION_ICON, MotionIcon} from "@shared/ui";

type UserProfileState = "opened" | "closed";

export const UserProfile: FC = () => {
	const [userProfileState, setUserProfileState] = useState<UserProfileState>("closed");
	const userProfileContainerRef = useRef<HTMLDivElement>(null);

	const isUserProfileOpened = userProfileState === "opened";

	const handleUserProfileToggle = () => {
		setUserProfileState((prev) => (prev === "opened" ? "closed" : "opened"));
	};

	const handleUserProfileClose = (event: FocusEvent<HTMLDivElement>) => {
		if (!event.currentTarget.contains(event.relatedTarget)) {
			setUserProfileState((prev) => (prev === "opened" ? "closed" : prev));
		}
	};

	return (
		<motion.div
			ref={userProfileContainerRef}
			layout
			tabIndex={0}
			onBlur={handleUserProfileClose}
			onClick={handleUserProfileToggle}
			className="absolute top-0 right-0 text-(--white-pallete-100) border-solid border-[0.063rem] rounded-[1.5rem] cursor-pointer overflow-hidden backdrop-blur-[1.25rem]"
			animate={isUserProfileOpened ? USER_PROFILE_VARIANTS.Opened : USER_PROFILE_VARIANTS.Closed}
			whileHover={USER_PROFILE_VARIANTS.Hovered}
			variants={USER_PROFILE_CONTAINER_VARIANTS}
			aria-label="User profile"
			aria-expanded={isUserProfileOpened}
			transition={{ layout: { type: "spring", stiffness: 400, damping: 30 } }}
		>
			<motion.nav layout aria-label="User profile navigation" className="py-[0.75rem] px-[1rem]">
				<div className="flex items-center gap-x-[0.5rem]">
					<Icon name={ICON.User} />
					<span className="font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em] text-(--white-pallete-100)">
						Account
					</span>
					<MotionIcon
						name={MOTION_ICON.Chevron}
						animate={{
							rotate: isUserProfileOpened ? USER_PROFILE_VARIANTS.Opened : USER_PROFILE_VARIANTS.Closed
						}}
						transition={{ type: "spring", stiffness: 300, damping: 25 }}
						variants={USER_PROFILE_CHEVRON_VARIANTS}
					/>
				</div>
				<motion.ul
					className="flex flex-col overflow-hidden gap-y-[0.125rem] mt-[0.25rem]"
					animate={isUserProfileOpened ? USER_PROFILE_VARIANTS.Opened : USER_PROFILE_VARIANTS.Closed}
					variants={USER_PROFILE_NAVIGATION_VARIANTS}
					initial={false}
					transition={{ type: "spring", stiffness: 400, damping: 30 }}
				>
					{USER_PROFILE_ITEMS.map(({ href, label }) => (
						<motion.li
							key={href}
							whileHover="hovered"
							whileTap={{ scale: 0.98 }}
							className="rounded-[0.5rem]"
						>
							<Link
								href={href}
								className="relative flex items-center gap-x-[0.5rem] whitespace-nowrap py-[0.4rem] pl-[0.4rem] pr-[0.8rem] font-(family-name:--font-barlow) text-[0.75rem] font-medium leading-[133%] tracking-[0.02em] text-(--white-pallete-100) outline-none focus-visible:ring-1 focus-visible:ring-(--white-pallete-40) rounded-[0.5rem] overflow-hidden"
							>
								<motion.div
									className="absolute inset-0 bg-(--white-pallete-10) rounded-[0.5rem]"
									initial={{ opacity: 0 }}
									variants={{ hovered: { opacity: 1 } }}
									transition={{ duration: 0.15, ease: "easeOut" }}
								/>
								<span className="relative z-10 flex items-center justify-center w-[1.25rem] h-[1.25rem] rounded-[0.25rem] bg-(--white-pallete-5) ring-1 ring-inset ring-(--white-pallete-10) text-(--white-pallete-80) shadow-sm">
									{label === "Dashboard" && <Icon name={ICON.Dashboard} />}
									{label === "Settings" && <Icon name={ICON.Settings} />}
								</span>
								<span className="relative z-10">{label}</span>
							</Link>
						</motion.li>
					))}
				</motion.ul>
			</motion.nav>
		</motion.div>
	);
};
