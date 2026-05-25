"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

import { useMorphPath } from "../use-morph-path";

type ProjectsProps = ComponentProps<typeof motion.svg> & {
	isActive?: boolean;
};

export const Projects = ({ isActive = false, ...props }: ProjectsProps) => {
	const OUTLINE_PATH_1 = `M21.6599 10.44L20.6799 14.62C19.8399 18.23 18.1799 19.69 15.0599 19.39C14.5599 19.35 14.0199 19.26 13.4399 19.12L11.7599 18.72C7.58994 17.73 6.29994 15.67 7.27994 11.49L8.25994 7.30001C8.45994 6.45001 8.69994 5.71001 8.99994 5.10001C10.1699 2.68001 12.1599 2.03001 15.4999 2.82001L17.1699 3.21001C21.3599 4.19001 22.6399 6.26001 21.6599 10.44Z`;
	const OUTLINE_PATH_2 = `M15.0601 19.3901C14.4401 19.8101 13.6601 20.1601 12.7101 20.4701L11.1301 20.9901C7.1601 22.2701 5.0701 21.2001 3.7801 17.2301L2.5001 13.2801C1.2201 9.3101 2.2801 7.2101 6.2501 5.9301L7.8301 5.4101C8.2401 5.2801 8.6301 5.1701 9.0001 5.1001C8.7001 5.7101 8.4601 6.4501 8.2601 7.3001L7.2801 11.4901C6.3001 15.6701 7.5901 17.7301 11.7601 18.7201L13.4401 19.1201C14.0201 19.2601 14.5601 19.3501 15.0601 19.3901Z`;
	const FILLED_PATH_1 = `M17.1699 3.21001L15.4999 2.82001C12.1599 2.03001 10.1699 2.68001 8.99994 5.10001C8.69994 5.71001 8.45994 6.45001 8.25994 7.30001L7.27994 11.49C6.29994 15.67 7.58994 17.73 11.7599 18.72L13.4399 19.12C14.0199 19.26 14.5599 19.35 15.0599 19.39C18.1799 19.69 19.8399 18.23 20.6799 14.62L21.6599 10.44C22.6399 6.26001 21.3599 4.19001 17.1699 3.21001ZM15.2899 13.33C15.1999 13.67 14.8999 13.89 14.5599 13.89C14.4999 13.89 14.4399 13.88 14.3699 13.87L11.4599 13.13C11.0599 13.03 10.8199 12.62 10.9199 12.22C11.0199 11.82 11.4299 11.58 11.8299 11.68L14.7399 12.42C15.1499 12.52 15.3899 12.93 15.2899 13.33ZM18.2199 9.95001C18.1299 10.29 17.8299 10.51 17.4899 10.51C17.4299 10.51 17.3699 10.5 17.2999 10.49L12.4499 9.26001C12.0499 9.16001 11.8099 8.75001 11.9099 8.35001C12.0099 7.95001 12.4199 7.71001 12.8199 7.81001L17.6699 9.04001C18.0799 9.13001 18.3199 9.54001 18.2199 9.95001Z`;
	const FILLED_PATH_2 = `M12.6778 19.957C12.9525 20.0209 12.9777 20.3807 12.7101 20.4699L11.1301 20.9899C7.1601 22.2699 5.0701 21.1999 3.7801 17.2299L2.5001 13.2799C1.2201 9.30992 2.2801 7.20992 6.2501 5.92992L6.77409 5.75639C7.17696 5.62297 7.56902 6.02703 7.45463 6.43571C7.39793 6.63828 7.34338 6.84968 7.2901 7.06992L6.3101 11.2599C5.2101 15.9699 6.8201 18.5699 11.5301 19.6899L12.6778 19.957Z`;

	const { path: path_1 } = useMorphPath({ from: OUTLINE_PATH_1, to: FILLED_PATH_1, isActive: isActive });
	const { path: path_2 } = useMorphPath({ from: OUTLINE_PATH_2, to: FILLED_PATH_2, isActive: isActive });

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
				d={path_1}
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="white"
			/>
			<motion.path
				initial={false}
				animate={{
					fillOpacity: isActive ? 1 : 0,
					strokeOpacity: isActive ? 0 : 1
				}}
				transition={{ duration: 0.35, ease: "easeInOut" }}
				d={path_2}
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="white"
			/>
			<motion.path
				initial={false}
				animate={{
					opacity: isActive ? 0 : 1
				}}
				transition={{ duration: 0.25 }}
				d="M12.6399 8.53003L17.4899 9.76003"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<motion.path
				initial={false}
				animate={{
					opacity: isActive ? 0 : 1
				}}
				transition={{ duration: 0.25 }}
				d="M11.6599 12.3999L14.5599 13.1399"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</motion.svg>
	);
};
