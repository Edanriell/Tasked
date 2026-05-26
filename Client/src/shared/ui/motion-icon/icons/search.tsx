"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

import { useMorphPath } from "../use-morph-path";

type SearchProps = ComponentProps<typeof motion.svg> & {
	isActive?: boolean;
};

export const Search = ({ isActive = false, ...props }: Readonly<SearchProps>) => {
	const OUTLINE_PATH = `M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z`;
	const FILLED_PATH = `M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z`;

	const { path } = useMorphPath({ from: OUTLINE_PATH, to: FILLED_PATH, isActive: isActive });

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
			shapeRendering="geometricPrecision"
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
				d={path}
				fill="white"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<motion.path
				initial={false}
				animate={{
					opacity: isActive ? 0 : 1
				}}
				transition={{ duration: 0.25 }}
				d="M22 22L20 20"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</motion.svg>
	);
};
