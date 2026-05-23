"use client";

import { useState } from "react";

import { MOTION_ICON, MotionIcon } from "@shared/ui";

export const CreateProject = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleButtonHover = () => {
		setIsHovered((previousState) => !previousState);
	};

	return (
		<button
			onPointerEnter={handleButtonHover}
			onPointerLeave={handleButtonHover}
			type="button"
			aria-label="Create new project"
			className="cursor-pointer text-(--neutrals-2)"
		>
			<MotionIcon className="w-[1rem] h-[1rem]" isActive={isHovered} type={MOTION_ICON.AddCircle} />
			<span className="sr-only">Create New Project</span>
		</button>
	);
};
