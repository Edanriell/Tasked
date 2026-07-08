import clsx from "clsx";

import { Skeleton } from "../skeleton";

type AvatarStackSkeleton = {
	max?: number;
};

export const AvatarStackSkeleton = ({ max = 6 }: Readonly<AvatarStackSkeleton>) => {
	return (
		<div className="flex flex-row items-center mt-[1.5rem]">
			{Array.from({ length: max }, (_, index) => (
				<Skeleton
					key={index}
					className={clsx(
						"relative block w-[2.5rem]! h-[2.5rem]! bg-(--blue-pot)! rounded-[2.5rem]! shrink-0",
						index !== 0 && "-ml-[1.25rem]"
					)}
					style={{ zIndex: index }}
				/>
			))}
		</div>
	);
};
