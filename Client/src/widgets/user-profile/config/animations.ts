import type { Transition, Variants } from "motion/react";

export const USER_PROFILE_VARIANTS = {
	Opened: "opened",
	Closed: "closed",
	Hovered: "hovered",
	Rest: "rest"
} as const;

export const TRANSITION_LAYOUT: Transition = { type: "spring", stiffness: 400, damping: 30 };
export const TRANSITION_CHEVRON: Transition = { type: "spring", stiffness: 300, damping: 25 };
export const TRANSITION_HOVER: Transition = { duration: 0.15, ease: "easeOut" };

export const USER_PROFILE_CONTAINER_VARIANTS: Variants = {
	closed: {
		borderColor: "var(--white-pallete-20)",
		backgroundImage: "var(--background-image-brand-dark)",
		transition: { ...TRANSITION_LAYOUT }
	},
	opened: {
		borderColor: "var(--white-pallete-15)",
		backgroundImage: "var(--background-image-brand-violet-reversed)",
		transition: { ...TRANSITION_LAYOUT }
	},
	hovered: {
		borderColor: "var(--white-pallete-40)",
		backgroundImage: "var(--background-image-brand-violet-reversed)",
		transition: { ...TRANSITION_HOVER }
	}
};

export const USER_PROFILE_CHEVRON_VARIANTS: Variants = {
	closed: { rotate: 0, transition: TRANSITION_CHEVRON },
	opened: { rotate: 180, transition: TRANSITION_CHEVRON }
};

export const USER_PROFILE_NAVIGATION_VARIANTS: Variants = {
	closed: {
		height: 0,
		opacity: 0,
		marginTop: 0,
		filter: "blur(8px)",
		transition: TRANSITION_LAYOUT
	},
	opened: {
		height: "auto",
		opacity: 1,
		filter: "blur(0px)",
		transition: TRANSITION_LAYOUT,
		marginBottom: "0.8rem"
	}
};
