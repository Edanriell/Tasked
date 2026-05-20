import { Skeleton } from "@shared/ui";

type AssignedUsersSkeletonProps = {
	maxCount?: number;
};

export const AssignedUsersSkeleton = ({ maxCount = 6 }: Readonly<AssignedUsersSkeletonProps>) => {
	return (
		<div className="relative flex items-center">
			{Array.from({ length: maxCount }).map((_, index) => (
				<div
					key={index}
					style={{ zIndex: index + 1 }}
					className="relative border border-[0.031rem] border-solid border-(--white-pallete-10) ml-[-0.625rem] rounded-full"
				>
					<Skeleton className="w-[1.5rem]! h-[1.5rem]! rounded-full! bg-[#111A41]!" />
				</div>
			))}
		</div>
	);
};
