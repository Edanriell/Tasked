import { Skeleton } from "@shared/ui";

export const ProjectsNavigationSkeleton = () => {
	return (
		<div className="relative flex flex-col gap-y-[0.25rem]">
			<Skeleton width="100%" height="2.25rem" radius="0.75rem" />
			<Skeleton width="100%" height="2.25rem" radius="0.75rem" />
			<Skeleton width="100%" height="2.25rem" radius="0.75rem" />
			<Skeleton width="100%" height="2.25rem" radius="0.75rem" />
		</div>
	);
};
