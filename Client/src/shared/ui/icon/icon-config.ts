export const ICON = {
	User: "User",
	Google: "Google",
	Improvements: "Improvements",
	Plus: "Plus"
} as const;

export type IconType = (typeof ICON)[keyof typeof ICON];
