import { Skeleton } from "@shared/ui";

export const PrivateNotepadSkeleton = () => {
	return (
		<div className="flex flex-1">
			<Skeleton className="flex-1 rounded-[10px] mt-[12px] ml-[12px] mr-[12px] mb-[8px]" />
		</div>
	);
};
