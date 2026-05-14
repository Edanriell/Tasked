import { Skeleton } from "@shared/ui";

export const ProjectsNavigationSkeleton = () => {
	return (
		<div className="relative flex flex-col gap-y-[4px]">
			<Skeleton width="100%" height="36px" radius="12px" />
			<Skeleton width="100%" height="36px" radius="12px" />
			<Skeleton width="100%" height="36px" radius="12px" />
			<Skeleton width="100%" height="36px" radius="12px" />
		</div>
	);
};
