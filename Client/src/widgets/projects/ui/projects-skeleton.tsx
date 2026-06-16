import { Skeleton } from "@shared/ui";

import { PROJECTS_SKELETON_COUNT } from "../config";

export const ProjectsSkeleton = () => {
	return (
		<div className="flex flex-col gap-y-[0.5rem]">
			{Array.from({ length: PROJECTS_SKELETON_COUNT }, (_, index) => (
				<Skeleton key={index} width="100%" height="3.75rem" radius="1rem" />
			))}
		</div>
	);
};
