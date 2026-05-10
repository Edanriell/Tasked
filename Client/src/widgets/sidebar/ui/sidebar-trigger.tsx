"use client";

import { MOTION_ICON, MotionIcon } from "@shared/ui";

export const SidebarTrigger = () => {
	return (
		<button
			type="button"
			aria-label="Collapse sidebar"
			aria-expanded="true"
			aria-controls="dashboard-main-nav dashboard-projects-nav"
			className="border-[0.031rem] border-solid border-(--white-pallete-15) rounded-[6.25rem] w-[1.5rem] h-[1.5rem] p-[0.25rem] bg-(--geek-blue-7) text-(--white-pallete-100) cursor-pointer absolute right-[-0.75rem] top-[1.5rem] z-10"
		>
			<span className="sr-only">Toggle sidebar</span>
			<span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<MotionIcon type={MOTION_ICON.ChevronHorizontal} />
			</span>
		</button>
	);
};
