export const ICON = {
	Account: "Account",
	Google: "Google",
	Improvements: "Improvements",
	Add: "Add",
	AddCircle: "AddCircle",
	Home: "Home",
	TaskSquare: "TaskSquare",
	Projects: "Projects",
	Message: "Message",
	Settings: "Settings"
} as const;

export type IconType = (typeof ICON)[keyof typeof ICON];
