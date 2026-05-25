"use client";

import { useState } from "react";

import { MOTION_ICON, MotionIcon } from "@shared/ui";

type ProjectSettingsProps = {
	projectId: string;
};

// TODO
// Send request to backend to pin project
// Optimistic update
// Use useOptimistic hook

export const ProjectSettings = ({ projectId }: Readonly<ProjectSettingsProps>) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleButtonHover = () => {
		setIsHovered((previousState) => !previousState);
	};

	return (
		<button
			onPointerEnter={handleButtonHover}
			onPointerLeave={handleButtonHover}
			type="button"
			aria-label="Open project settings"
			className="cursor-pointer text-(--neutrals-3)"
		>
			<MotionIcon className="w-[0.875rem] h-[0.875rem]" isActive={isHovered} type={MOTION_ICON.Cog} />
			<span className="sr-only">Project settings</span>
		</button>
	);
};
