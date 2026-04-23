import { ROUTES } from "@shared/config";

export const USER_PROFILE_ITEMS = [
	{
		label: "Dashboard",
		href: ROUTES.Dashboard
	},
	{
		label: "Settings",
		href: ROUTES.Settings
	}
] as const;
