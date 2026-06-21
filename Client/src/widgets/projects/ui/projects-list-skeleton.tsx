import { ProjectRowSkeleton } from "@entities/project";

import { PROJECTS_SKELETON_COUNT } from "../config";

export const ProjectsListSkeleton = () => {
	return (
		<div className="flex flex-col gap-y-[0.5rem]">
			{Array.from({ length: PROJECTS_SKELETON_COUNT }, (_, index) => (
				<ProjectRowSkeleton key={index} />
			))}
		</div>
	);
};
