import { Skeleton } from "@shared/ui";

export const PrivateNotepadSkeleton = () => {
	return (
		<div className="flex flex-1">
			<Skeleton className="flex-1 rounded-[0.625rem] mt-[0.75rem] ml-[0.75rem] mr-[0.75rem] mb-[0.5rem]" />
		</div>
	);
};
