"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

import { useMorphPath } from "../use-morph-path";

type SettingsProps = ComponentProps<typeof motion.svg> & {
	isHovered?: boolean;
};

export const Settings = ({ isHovered = false, ...props }: Readonly<SettingsProps>) => {
	const OUTLINE_PATH = `M3 9.10998V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.10998C21 6.99998 21 6.99999 19 5.64999L13.5 2.46999C12.68 1.98999 11.33 1.98999 10.5 2.46999L5 5.64999C3 6.99999 3 6.99998 3 9.10998Z`;
	const FILLED_PATH = `M18.94 5.42L13.77 2.43C12.78 1.86 11.23 1.86 10.24 2.43L5.01996 5.44C2.94996 6.84 2.82996 7.05 2.82996 9.28V14.71C2.82996 16.94 2.94996 17.16 5.05996 18.58L10.23 21.57C10.73 21.86 11.37 22 12 22C12.63 22 13.27 21.86 13.76 21.57L18.98 18.56C21.05 17.16 21.17 16.95 21.17 14.72V9.28C21.17 7.05 21.05 6.84 18.94 5.42ZM12 15.25C10.21 15.25 8.74996 13.79 8.74996 12C8.74996 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z`;

	const { path } = useMorphPath({ from: OUTLINE_PATH, to: FILLED_PATH, isActive: isHovered });

	return (
		<motion.svg
			initial={false}
			animate={{
				scale: isHovered ? 1.2 : 1
			}}
			transition={{
				type: "spring",
				stiffness: 650,
				damping: 28,
				mass: 0.8
			}}
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
			{...props}
		>
			<motion.path
				initial={false}
				animate={{
					fillOpacity: isHovered ? 1 : 0,
					strokeOpacity: isHovered ? 0 : 1
				}}
				transition={{ duration: 0.35, ease: "easeInOut" }}
				d={path}
				fill="white"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<motion.path
				initial={false}
				animate={{
					opacity: isHovered ? 0 : 1
				}}
				transition={{ duration: 0.25 }}
				d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</motion.svg>
	);
};
