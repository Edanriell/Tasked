"use client";

import { motion } from "motion/react";

import { TRANSITION_HIGHLIGHT } from "../../config";

type NavigationHighlightProps = {
	layoutId: string;
};

export const NavigationLinkHighlight = ({ layoutId }: NavigationHighlightProps) => {
	return (
		<motion.div
			layoutId={layoutId}
			className="absolute -z-10 inset-0 rounded-[0.75rem] outline-[0.031rem] outline-solid outline-(--white-pallete-50) bg-(--geek-blue-primary-opacity-400)"
			transition={TRANSITION_HIGHLIGHT}
		/>
	);
};
