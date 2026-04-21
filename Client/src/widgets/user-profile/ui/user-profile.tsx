"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { FC, FocusEvent } from "react";
import { useRef, useState } from "react";

import {
	USER_PROFILE_CHEVRON_VARIANTS,
	USER_PROFILE_CONTAINER_VARIANTS,
	USER_PROFILE_ITEMS,
	USER_PROFILE_NAVIGATION_ITEM_VARIANTS,
	USER_PROFILE_NAVIGATION_VARIANTS,
	USER_PROFILE_VARIANTS
} from "@widgets/user-profile/config";

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
			<motion.nav layout aria-label="User navigation" className="py-[0.75rem] px-[1rem]">
				<div className="flex items-center gap-x-[0.5rem]">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_38027_24332)">
							<path
								d="M9.77909 2.05469C5.51872 2.05469 2.05273 5.52072 2.05273 9.78105C2.05273 12.3717 3.33441 14.6684 5.29687 16.0709V14.3639C5.29687 12.9241 6.46401 11.757 7.90373 11.757H11.6545C13.0942 11.757 14.2613 12.9242 14.2613 14.3639V16.0709C16.2239 14.6684 17.5055 12.3717 17.5055 9.78105C17.5054 5.52072 14.0395 2.05469 9.77909 2.05469ZM9.77909 10.1535C8.30415 10.1535 7.10408 8.95355 7.10408 7.47852C7.10408 6.00358 8.30407 4.80359 9.77909 4.80359C11.2541 4.80359 12.4541 6.00358 12.4541 7.47852C12.4541 8.95355 11.254 10.1535 9.77909 10.1535Z"
								fill="currentColor"
							/>
							<path
								d="M9.78025 0C4.37872 0 0 4.37872 0 9.78025C0 15.1818 4.37872 19.5605 9.78025 19.5605C15.1818 19.5605 19.5605 15.1818 19.5605 9.78025C19.5605 4.37872 15.1817 0 9.78025 0ZM9.78025 18.5001C4.97215 18.5001 1.06043 14.5883 1.06043 9.78025C1.06043 4.97215 4.97215 1.06043 9.78025 1.06043C14.5883 1.06043 18.5001 4.97215 18.5001 9.78025C18.5001 14.5883 14.5883 18.5001 9.78025 18.5001Z"
								fill="currentColor"
							/>
						</g>
						<defs>
							<clipPath id="clip0_38027_24332">
								<rect width="19.5605" height="19.5605" fill="currentColor" />
							</clipPath>
						</defs>
					</svg>
					<span className="font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em] text-(--white-pallete-100)">
						Account
					</span>
					<motion.svg
						animate={{
							rotate: isUserProfileOpened ? USER_PROFILE_VARIANTS.Opened : USER_PROFILE_VARIANTS.Closed
						}}
						transition={{ type: "spring", stiffness: 300, damping: 25 }}
						variants={USER_PROFILE_CHEVRON_VARIANTS}
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</motion.svg>
				</div>
				<motion.ul
					className="flex flex-col overflow-hidden"
					animate={isUserProfileOpened ? USER_PROFILE_VARIANTS.Opened : USER_PROFILE_VARIANTS.Closed}
					variants={USER_PROFILE_NAVIGATION_VARIANTS}
					initial={false}
					transition={{ type: "spring", stiffness: 400, damping: 30 }}
				>
					{USER_PROFILE_ITEMS.map(({ href, label }) => (
						<motion.li
							key={href}
							whileHover={USER_PROFILE_VARIANTS.Hovered}
							transition={{ type: "spring", stiffness: 500, damping: 30 }}
							variants={USER_PROFILE_NAVIGATION_ITEM_VARIANTS}
							className="rounded-[0.5rem]"
						>
							<Link
								href={href}
								className="flex items-center gap-x-[0.5rem] whitespace-nowrap py-[0.4rem] pl-[0.4rem] pr-[0.8rem] font-(family-name:--font-barlow) text-[0.75rem] leading-[133%] tracking-[0.02em] text-(--white-pallete-100)"
							>
								<span className="flex items-center justify-center w-[1.25rem] h-[1.25rem] rounded-[0.25rem] bg-(--white-pallete-10) text-(--white-pallete-80)">
									{label === "Dashboard" && (
										<svg
											width="12"
											height="12"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V19.9C2.5 21.4 3.14 22 4.73 22H8.77C10.36 22 11 21.4 11 19.9Z"
												fill="currentColor"
											/>
											<path
												d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z"
												fill="currentColor"
											/>
											<path
												d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z"
												fill="currentColor"
											/>
										</svg>
									)}
									{label === "Settings" && (
										<svg
											width="12"
											height="12"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z"
												fill="currentColor"
											/>
										</svg>
									)}
								</span>
								{label}
							</Link>
						</motion.li>
					))}
				</motion.ul>
			</motion.nav>
		</motion.div>
	);
};
