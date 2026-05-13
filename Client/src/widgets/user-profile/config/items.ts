import {v4 as uuidv4} from "uuid";

import {ROUTES} from "@shared/config";
import type {IconType} from "@shared/ui";
import {ICON} from "@shared/ui";

type UserProfileItem = {
	id: string;
	icon: IconType;
	label: string;
	href: string;
};

export const USER_PROFILE_ITEMS: Array<UserProfileItem> = [
	{
		id: uuidv4(),
		icon: ICON.Dashboard,
		label: "Dashboard",
		href: ROUTES.Home
	},
	{
		id: uuidv4(),
		icon: ICON.Settings,
		label: "Settings",
		href: ROUTES.Settings
	}
] as const;
