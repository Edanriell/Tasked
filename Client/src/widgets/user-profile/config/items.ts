import { ROUTES } from "@shared/config";
import type { MotionIconType } from "@shared/ui";
import { MOTION_ICON } from "@shared/ui";

type UserProfileItem = {
	id: string;
	icon: MotionIconType;
	label: string;
	href: string;
};

export const USER_PROFILE_ITEMS: Array<UserProfileItem> = [
	{
		id: "dashboard",
		icon: MOTION_ICON.Dashboard,
		label: "Dashboard",
		href: ROUTES.Home
	},
	{
		id: "settings",
		icon: MOTION_ICON.Settings,
		label: "Settings",
		href: ROUTES.Settings
	}
] as const;
