"use client";

import { motion } from "motion/react";

import { ICON, Icon } from "@shared/ui";

export const CreateProject = () => {
	return (
		<motion.button
			whileHover={{ scale: 1.2, color: "#fff" }}
			whileTap={{ scale: 0.95 }}
			transition={{
				type: "spring",
				stiffness: 650,
				damping: 28,
				mass: 0.8
			}}
			type="button"
			aria-label="Create new project"
			className="cursor-pointer text-(--neutrals-2)"
		>
			<Icon className="w-[1rem] h-[1rem]" type={ICON.AddCircle} />
			<span className="sr-only">Create New Project</span>
		</motion.button>
	);
};
