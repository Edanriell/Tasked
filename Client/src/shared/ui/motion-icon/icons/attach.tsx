"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

import { useMorphPath } from "../use-morph-path";

type AttachProps = ComponentProps<typeof motion.svg> & {
	isActive?: boolean;
};

export const Attach = ({ isActive = false, ...props }: Readonly<AttachProps>) => {
	const OUTLINE_PATH = `M12.1998 17.38C11.4998 17.38 10.7898 17.11 10.2598 16.58C9.73977 16.06 9.44977 15.37 9.44977 14.64C9.44977 13.91 9.73977 13.21 10.2598 12.7L11.6697 11.29C11.9597 11 12.4397 11 12.7297 11.29C13.0197 11.58 13.0197 12.06 12.7297 12.35L11.3198 13.76C11.0798 14 10.9498 14.31 10.9498 14.64C10.9498 14.97 11.0798 15.29 11.3198 15.52C11.8098 16.01 12.5998 16.01 13.0898 15.52L15.3098 13.3C16.5798 12.03 16.5798 9.97 15.3098 8.7C14.0398 7.43 11.9798 7.43 10.7098 8.7L8.28973 11.12C7.77973 11.63 7.49976 12.3 7.49976 13.01C7.49976 13.72 7.77973 14.4 8.28973 14.9C8.57973 15.19 8.57973 15.67 8.28973 15.96C7.99973 16.25 7.51974 16.25 7.22974 15.96C6.43974 15.17 6.00977 14.12 6.00977 13C6.00977 11.88 6.43974 10.83 7.22974 10.04L9.64978 7.61998C11.4998 5.76998 14.5198 5.76998 16.3698 7.61998C18.2198 9.46998 18.2198 12.49 16.3698 14.34L14.1498 16.56C13.6098 17.11 12.9098 17.38 12.1998 17.38Z`;
	const FILLED_PATH = `M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.37 14.35L14.15 16.57C13.61 17.11 12.91 17.37 12.21 17.37C11.51 17.37 10.8 17.1 10.27 16.57C9.75 16.05 9.46 15.36 9.46 14.63C9.46 13.9 9.75 13.2 10.27 12.69L11.68 11.28C11.97 10.99 12.45 10.99 12.74 11.28C13.03 11.57 13.03 12.05 12.74 12.34L11.33 13.75C11.09 13.99 10.96 14.3 10.96 14.63C10.96 14.96 11.09 15.28 11.33 15.51C11.82 16 12.61 16 13.1 15.51L15.32 13.29C16.59 12.02 16.59 9.96 15.32 8.69C14.05 7.42 11.99 7.42 10.72 8.69L8.3 11.11C7.79 11.62 7.51 12.29 7.51 13C7.51 13.71 7.79 14.39 8.3 14.89C8.59 15.18 8.59 15.66 8.3 15.95C8.01 16.24 7.53 16.24 7.24 15.95C6.44 15.18 6 14.13 6 13.01C6 11.89 6.43 10.84 7.22 10.05L9.64 7.63C11.49 5.78 14.51 5.78 16.36 7.63C18.22 9.48 18.22 12.5 16.37 14.35Z`;

	const { path } = useMorphPath({ from: OUTLINE_PATH, to: FILLED_PATH, isActive: isActive });

	return (
		<>
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
				shapeRendering="geometricPrecision"
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
					d={path}
					fill="white"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<motion.path
					initial={false}
					animate={{
						opacity: isActive ? 0 : 1
					}}
					transition={{ duration: 0.25 }}
					d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
					fill="currentColor"
				/>
			</motion.svg>
		</>
	);
};
