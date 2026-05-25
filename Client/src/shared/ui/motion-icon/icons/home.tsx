"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

import { useMorphPath } from "../use-morph-path";

type HomeProps = ComponentProps<typeof motion.svg> & {
	isActive?: boolean;
};

export const Home = ({ isActive = false, ...props }: Readonly<HomeProps>) => {
	const OUTLINE_PATH = `M10.07 2.81985L3.14002 8.36985C2.36002 8.98985 1.86002 10.2998 2.03002 11.2798L3.36002 19.2398C3.60002 20.6598 4.96002 21.8098 6.40002 21.8098H17.6C19.03 21.8098 20.4 20.6498 20.64 19.2398L21.97 11.2798C22.13 10.2998 21.63 8.98985 20.86 8.36985L13.93 2.82985C12.86 1.96985 11.13 1.96985 10.07 2.81985Z`;
	const FILLED_PATH = `M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z`;

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
			shapeRendering="geometricPrecision"
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
				d="M12 18V15"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</motion.svg>
	);
};
