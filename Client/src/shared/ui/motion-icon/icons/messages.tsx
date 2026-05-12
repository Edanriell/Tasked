"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

import { useMorphPath } from "../use-morph-path";

type MessagesProps = ComponentProps<typeof motion.svg> & {
	isHovered?: boolean;
};

export const Messages = ({ isHovered = false, ...props }: MessagesProps) => {
	const OUTLINE_PATH_1 = `M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z`;
	const OUTLINE_PATH_2 = `M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79004C6.53004 6 6.28004 6.01001 6.04004 6.04001C6.27004 3.35001 7.86004 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z`;
	const FILLED_PATH_1 = `M13.19 6H6.79C6.53 6 6.28 6.01 6.04 6.04C3.35 6.27 2 7.86 2 10.79V14.79C2 18.79 3.6 19.58 6.79 19.58H7.19C7.41 19.58 7.7 19.73 7.83 19.9L9.03 21.5C9.56 22.21 10.42 22.21 10.95 21.5L12.15 19.9C12.3 19.7 12.54 19.58 12.79 19.58H13.19C16.12 19.58 17.71 18.24 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.6 16.38 6 13.19 6ZM6.5 14C5.94 14 5.5 13.55 5.5 13C5.5 12.45 5.95 12 6.5 12C7.05 12 7.5 12.45 7.5 13C7.5 13.55 7.05 14 6.5 14ZM9.99 14C9.43 14 8.99 13.55 8.99 13C8.99 12.45 9.44 12 9.99 12C10.54 12 10.99 12.45 10.99 13C10.99 13.55 10.55 14 9.99 14ZM13.49 14C12.93 14 12.49 13.55 12.49 13C12.49 12.45 12.94 12 13.49 12C14.04 12 14.49 12.45 14.49 13C14.49 13.55 14.04 14 13.49 14Z`;
	const FILLED_PATH_2 = `M21.98 6.79V10.79C21.98 12.79 21.36 14.15 20.12 14.9C19.82 15.08 19.47 14.84 19.47 14.49L19.48 10.79C19.48 6.79 17.19 4.5 13.19 4.5L7.1 4.51C6.75 4.51 6.51 4.16 6.69 3.86C7.44 2.62 8.8 2 10.79 2H17.19C20.38 2 21.98 3.6 21.98 6.79Z`;

	const { path: path_1 } = useMorphPath({ from: OUTLINE_PATH_1, to: FILLED_PATH_1, isActive: isHovered });
	const { path: path_2 } = useMorphPath({ from: OUTLINE_PATH_2, to: FILLED_PATH_2, isActive: isHovered });

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
				d={path_1}
				stroke="currentColor"
				fill="white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<motion.path
				initial={false}
				animate={{
					fillOpacity: isHovered ? 1 : 0,
					strokeOpacity: isHovered ? 0 : 1
				}}
				transition={{ duration: 0.35, ease: "easeInOut" }}
				d={path_2}
				stroke="currentColor"
				fill="white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<motion.path
				initial={false}
				animate={{
					opacity: isHovered ? 0 : 1
				}}
				transition={{ duration: 0.25 }}
				d="M13.4955 13.25H13.5045"
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
				d="M9.9955 13.25H10.0045"
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
				d="M6.4955 13.25H6.5045"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</motion.svg>
	);
};
