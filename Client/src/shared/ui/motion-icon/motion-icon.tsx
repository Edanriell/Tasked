"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

import { Home, Messages, Projects, Settings, Tasks } from "./icons";

import { MOTION_ICON, type MotionIconType } from "./motion-icon-config";

type MotionIconProps = ComponentProps<typeof motion.svg> & {
	type: MotionIconType;
	isHovered?: boolean;
	size?: number;
};

export const MotionIcon = ({ type, isHovered, size, ...props }: Readonly<MotionIconProps>) => {
	switch (type) {
		case MOTION_ICON.Chevron:
			return (
				<motion.svg
					width={size ?? 16}
					height={size ?? 16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<path
						d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
						stroke="white"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</motion.svg>
			);
		case MOTION_ICON.ChevronHorizontal:
			return (
				<motion.svg
					width={size ?? 7}
					height={size ?? 13}
					viewBox="0 0 7 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					{...props}
				>
					<path
						d="M5.48167 11.31L1.135 6.96333C0.621667 6.45 0.621667 5.61 1.135 5.09667L5.48167 0.75"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</motion.svg>
			);
		case MOTION_ICON.Home:
			return <Home isHovered={isHovered} {...props} />;
		case MOTION_ICON.Tasks:
			return <Tasks isHovered={isHovered} {...props} />;
		case MOTION_ICON.Projects:
			return <Projects isHovered={isHovered} {...props} />;
		case MOTION_ICON.Messages:
			return <Messages isHovered={isHovered} {...props} />;
		case MOTION_ICON.Settings:
			return <Settings isHovered={isHovered} {...props} />;
	}
};
