"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

import { useMorphPath } from "../use-morph-path";

type DashboardProps = ComponentProps<typeof motion.svg> & {
	isActive?: boolean;
};

export const Dashboard = ({ isActive = false, ...props }: Readonly<DashboardProps>) => {
	const OUTLINE_PATH_1 = `M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z`;
	const OUTLINE_PATH_2 = `M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z`;
	const OUTLINE_PATH_3 = `M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z`;
	const FILLED_PATH_1 = `M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V19.9C2.5 21.4 3.14 22 4.73 22H8.77C10.36 22 11 21.4 11 19.9Z`;
	const FILLED_PATH_2 = `M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z`;
	const FILLED_PATH_3 = `M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z`;

	const { path: path_1 } = useMorphPath({ from: OUTLINE_PATH_1, to: FILLED_PATH_1, isActive: isActive });
	const { path: path_2 } = useMorphPath({ from: OUTLINE_PATH_2, to: FILLED_PATH_2, isActive: isActive });
	const { path: path_3 } = useMorphPath({ from: OUTLINE_PATH_3, to: FILLED_PATH_3, isActive: isActive });

	return (
		<motion.svg
			initial={false}
			animate={{
				scale: isActive ? 1.2 : 1
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
					fillOpacity: isActive ? 1 : 0,
					strokeOpacity: isActive ? 0 : 1
				}}
				transition={{ duration: 0.35, ease: "easeInOut" }}
				fill="white"
				stroke="currentColor"
				d={path_1}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<motion.path
				initial={false}
				animate={{
					fillOpacity: isActive ? 1 : 0,
					strokeOpacity: isActive ? 0 : 1
				}}
				transition={{ duration: 0.35, ease: "easeInOut" }}
				fill="white"
				stroke="currentColor"
				d={path_2}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<motion.path
				initial={false}
				animate={{
					fillOpacity: isActive ? 1 : 0,
					strokeOpacity: isActive ? 0 : 1
				}}
				transition={{ duration: 0.35, ease: "easeInOut" }}
				fill="white"
				stroke="currentColor"
				d={path_3}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</motion.svg>
	);
};
