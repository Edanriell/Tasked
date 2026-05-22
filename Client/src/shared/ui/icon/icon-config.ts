export const ICON = {
	Account: "Account",
	Google: "Google",
	Improvements: "Improvements",
	Add: "Add"
} as const;

export type IconType = (typeof ICON)[keyof typeof ICON];
