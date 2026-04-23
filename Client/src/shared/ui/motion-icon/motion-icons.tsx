"use client";

import { motion } from "motion/react";
import type { ComponentProps, FC } from "react";

export const MOTION_ICON = {
	Chevron: "Chevron"
} as const;

type MotionIconName = (typeof MOTION_ICON)[keyof typeof MOTION_ICON];

type MotionIconProps = ComponentProps<typeof motion.svg> & {
	name: MotionIconName;
	size?: number;
};

export const MotionIcon: FC<MotionIconProps> = ({ name, size, ...props }) => {
	switch (name) {
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
						stroke="currentColor"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</motion.svg>
			);
	}
};
