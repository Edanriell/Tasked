export const ICON = {
	User: "User",
	Dashboard: "Dashboard",
	Settings: "Settings",
	Google: "Google",
	CreateProject: "CreateProject",
	Improvements: "Improvements"
} as const;

export type IconType = (typeof ICON)[keyof typeof ICON];
