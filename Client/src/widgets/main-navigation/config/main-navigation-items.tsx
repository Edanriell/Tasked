import type { ReactNode } from "react";

import { ROUTES } from "@shared/config";
import type { MotionIconType } from "@shared/ui";
import { MOTION_ICON } from "@shared/ui";

type MainNavigationItem = {
	href: string;
	icon: MotionIconType;
	content: () => ReactNode;
};

export const mainNavigationItems: Array<MainNavigationItem> = [
	{
		href: ROUTES.Home,
		icon: MOTION_ICON.Home,
		content: () => <span>Home</span>
	},
	{
		href: ROUTES.Tasks,
		icon: MOTION_ICON.Tasks,
		content: () => <span>My Tasks</span>
	},
	{
		href: ROUTES.Projects,
		icon: MOTION_ICON.Projects,
		content: () => <span>Projects</span>
	},
	{
		href: ROUTES.Messages,
		icon: MOTION_ICON.Messages,
		content: () => <span>Messages</span>
	},
	{
		href: ROUTES.Settings,
		icon: MOTION_ICON.Settings,
		content: () => <span>Settings</span>
	}
];
