import { v4 as uuidv4 } from "uuid";

import { ROUTES } from "@shared/config";
import type { MotionIconType } from "@shared/ui";
import { MOTION_ICON } from "@shared/ui";

type MainNavigationItem = {
	id: string;
	href: string;
	icon: MotionIconType;
	label: string;
	match: (pathname: string) => boolean;
};

export const MAIN_NAVIGATION_ITEMS: Array<MainNavigationItem> = [
	{
		id: uuidv4(),
		href: ROUTES.Home,
		icon: MOTION_ICON.Home,
		label: "Home",
		match: (pathname: string) => pathname === ROUTES.Home
	},
	{
		id: uuidv4(),
		href: ROUTES.Tasks,
		icon: MOTION_ICON.Tasks,
		label: "My Tasks",
		match: (pathname: string) => pathname.startsWith(ROUTES.Tasks)
	},
	{
		id: uuidv4(),
		href: ROUTES.Projects,
		icon: MOTION_ICON.Projects,
		label: "Projects",
		match: (pathname: string) => pathname.startsWith(ROUTES.Projects)
	},
	{
		id: uuidv4(),
		href: ROUTES.Messages,
		icon: MOTION_ICON.Messages,
		label: "Messages",
		match: (pathname: string) => pathname.startsWith(ROUTES.Messages)
	},
	{
		id: uuidv4(),
		href: ROUTES.Settings,
		icon: MOTION_ICON.Settings,
		label: "Settings",
		match: (pathname: string) => pathname.startsWith(ROUTES.Settings)
	}
];
