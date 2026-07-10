export const MOTION_ICON = {
	Chevron: "Chevron",
	ChevronHorizontal: "ChevronHorizontal",
	Home: "Home",
	Tasks: "Tasks",
	Projects: "Users",
	Messages: "Messages",
	Settings: "Settings",
	Dashboard: "Dashboard",
	Star: "Star",
	Lock: "Lock",
	Cog: "Cog",
	Search: "Search",
	Attach: "Attach"
} as const;

export type MotionIconType = (typeof MOTION_ICON)[keyof typeof MOTION_ICON];
