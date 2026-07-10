"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

import { Cog, Dashboard, Home, Lock, Messages, Projects, Search, Settings, Star, Tasks } from "./icons";

import { Attach } from "@shared/ui/motion-icon/icons/attach";
import { MOTION_ICON, type MotionIconType } from "./motion-icon-config";

type MotionIconProps = ComponentProps<typeof motion.svg> & {
	type: MotionIconType;
	isActive?: boolean;
	size?: number;
};

export const MotionIcon = ({ type, isActive, size, ...props }: Readonly<MotionIconProps>) => {
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
			return <Home isActive={isActive} {...props} />;
		case MOTION_ICON.Tasks:
			return <Tasks isActive={isActive} {...props} />;
		case MOTION_ICON.Projects:
			return <Projects isActive={isActive} {...props} />;
		case MOTION_ICON.Messages:
			return <Messages isActive={isActive} {...props} />;
		case MOTION_ICON.Settings:
			return <Settings isActive={isActive} {...props} />;
		case MOTION_ICON.Dashboard:
			return <Dashboard isActive={isActive} {...props} />;
		case MOTION_ICON.Star:
			return <Star isActive={isActive} {...props} />;
		case MOTION_ICON.Lock:
			return <Lock isActive={isActive} {...props} />;
		case MOTION_ICON.Cog:
			return <Cog isActive={isActive} {...props} />;
		case MOTION_ICON.Search:
			return <Search isActive={isActive} {...props} />;
		case MOTION_ICON.Attach:
			return <Attach isActive={isActive} {...props} />;
	}
};
