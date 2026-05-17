export const ICON = {
	User: "User",
	Google: "Google",
	Improvements: "Improvements"
} as const;

export type IconType = (typeof ICON)[keyof typeof ICON];
