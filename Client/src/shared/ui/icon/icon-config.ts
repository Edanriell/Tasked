export const ICON = {
	Google: "Google",
	CreateProject: "CreateProject",
	Improvements: "Improvements"
} as const;

export type IconType = (typeof ICON)[keyof typeof ICON];
