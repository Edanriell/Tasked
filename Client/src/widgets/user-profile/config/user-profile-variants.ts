export const USER_PROFILE_CONTAINER_VARIANTS = {
	opened: {
		borderColor: "var(--white-pallete-15)",
		backgroundImage: "var(--background-image-brand-violet-reversed)"
	},
	closed: {
		borderColor: "var(--white-pallete-20)",
		backgroundImage: "var(--background-image-brand-dark)"
	},
	hovered: {
		borderColor: "var(--white-pallete-40)",
		backgroundImage: "var(--background-image-brand-violet-reversed)"
	}
} as const;

export const USER_PROFILE_CHEVRON_VARIANTS = {
	opened: {
		rotate: 180
	},
	closed: {
		rotate: 0
	}
} as const;

export const USER_PROFILE_NAVIGATION_VARIANTS = {
	opened: {
		height: "auto",
		opacity: 1,
		marginTop: "0.8rem",
		filter: "blur(0px)"
	},
	closed: {
		height: 0,
		opacity: 0,
		marginTop: 0,
		filter: "blur(8px)"
	}
} as const;

export const USER_PROFILE_NAVIGATION_ITEM_VARIANTS = {
	hovered: {
		backgroundColor: "rgba(255, 255, 255, 0.1)",
		x: 2
	}
} as const;
