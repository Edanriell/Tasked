import { ROUTES } from "@shared/config";
import type { MotionIconType } from "@shared/ui";
import { MOTION_ICON } from "@shared/ui";

type UserProfileItem = {
	id: string;
	icon: MotionIconType;
	label: string;
	href: string;
};

// TODO !
// Fix UUID for PPR
export const USER_PROFILE_ITEMS: Array<UserProfileItem> = [
	{
		// id: uuidv4(),
		id: "dashboard",
		icon: MOTION_ICON.Dashboard,
		label: "Dashboard",
		href: ROUTES.Home
	},
	{
		// id: uuidv4(),
		id: "settings",
		icon: MOTION_ICON.Settings,
		label: "Settings",
		href: ROUTES.Settings
	}
] as const;
