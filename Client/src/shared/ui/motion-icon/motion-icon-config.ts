export const MOTION_ICON = {
	Chevron: "Chevron",
	ChevronHorizontal: "ChevronHorizontal",
	Home: "Home",
	Tasks: "Tasks",
	Projects: "Projects",
	Messages: "Messages",
	Settings: "Settings"
} as const;

export type MotionIconType = (typeof MOTION_ICON)[keyof typeof MOTION_ICON];
