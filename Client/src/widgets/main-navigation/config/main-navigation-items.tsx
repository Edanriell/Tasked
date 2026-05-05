import type { ReactNode } from "react";

import { ROUTES } from "@shared/config";
import type { IconType } from "@shared/ui";
import { ICON } from "@shared/ui";

type MainNavigationItem = {
	href: string;
	icon: IconType;
	content: () => ReactNode;
};

export const mainNavigationItems: Array<MainNavigationItem> = [
	{
		href: ROUTES.Home,
		icon: ICON.Home,
		content: () => <span>Home</span>
	},
	{
		href: ROUTES.Tasks,
		icon: ICON.Tasks,
		content: () => <span>Home</span>
	},
	{
		href: ROUTES.Projects,
		icon: ICON.Projects,
		content: () => <span>Projects</span>
	},
	{
		href: ROUTES.Messages,
		icon: ICON.Messages,
		content: () => <span>Messages</span>
	},
	{
		href: ROUTES.Settings,
		icon: ICON.MainSettings,
		content: () => <span>Settings</span>
	}
];
