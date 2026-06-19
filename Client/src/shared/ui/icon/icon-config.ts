export const ICON = {
	Account: "Account",
	Google: "Google",
	Improvements: "Improvements",
	Add: "Add",
	AddCircle: "AddCircle",
	Home: "Home",
	TaskSquare: "TaskSquare",
	Projects: "Users",
	Message: "Message",
	Settings: "Settings",
	LockedLock: "LockedLock",
	TextBold: "TextBold",
	TextItalic: "TextItalic",
	TextUnderline: "TextUnderline",
	LinkSquare: "LinkSquare",
	TextAlignLeft: "TextAlignLeft",
	TextAlignCenter: "TextAlignCenter",
	TextAlignRight: "TextAlignRight",
	TextAlignJustifyCenter: "TextAlignJustifyCenter",
	More: "More",
	Chevron: "Chevron"
} as const;

export type IconType = (typeof ICON)[keyof typeof ICON];
