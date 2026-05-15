"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

type CreateProjectProps = ComponentProps<typeof motion.svg> & {
	isActive?: boolean;
};

export const CreateProject = ({ isActive = false, ...props }: Readonly<CreateProjectProps>) => {
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
					fill: isActive ? "white" : "currentColor"
				}}
				transition={{ duration: 0.35, ease: "easeInOut" }}
				d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
				fill="currentColor"
			/>
		</motion.svg>
	);
};
