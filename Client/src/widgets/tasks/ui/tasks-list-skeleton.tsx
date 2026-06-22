import { ProjectRowSkeleton } from "@entities/project";

import { TASKS_SKELETON_COUNT } from "../config";

export const TasksListSkeleton = () => {
	return (
		<div className="flex flex-col gap-y-[0.5rem] py-[0.75rem]">
			{Array.from({ length: TASKS_SKELETON_COUNT }, (_, index) => (
				<ProjectRowSkeleton key={index} />
			))}
		</div>
	);
};
