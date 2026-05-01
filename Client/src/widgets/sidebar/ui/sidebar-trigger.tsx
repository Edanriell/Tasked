"use client";

import type { FC } from "react";

import { MOTION_ICON, MotionIcon } from "@shared/ui";

export const SidebarTrigger: FC = () => {
	return (
		<button
			type="button"
			aria-label="Collapse sidebar"
			aria-expanded="true"
			aria-controls="dashboard-main-nav dashboard-projects-nav"
		>
			<span className="sr-only">Toggle sidebar</span>
			<MotionIcon type={MOTION_ICON.ChevronHorizontal} />
		</button>
	);
};
