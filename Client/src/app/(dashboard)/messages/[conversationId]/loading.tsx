import { clsx } from "clsx";

import { Skeleton } from "@shared/ui";

type MessageGroupSkeletonProps = {
	align: "left" | "right";
	widths: Array<string>;
};

const MessageGroupSkeleton = ({ align, widths }: Readonly<MessageGroupSkeletonProps>) => {
	const isRightAligned = align === "right";

	return (
		<li className="relative">
			<article className={clsx("flex flex-col gap-y-[8px]", isRightAligned ? "items-end" : "items-start")}>
				<header className={clsx("flex items-center gap-x-[12px]", isRightAligned && "flex-row-reverse")}>
					<Skeleton width={24} height={24} radius="999px" />
					<Skeleton width="5.5rem" height="0.875rem" radius="1rem" />
					<Skeleton width="3rem" height="0.875rem" radius="1rem" />
				</header>
				<ol className={clsx("flex flex-col gap-y-[8px]", isRightAligned ? "items-end" : "items-start")}>
					{widths.map((width, index) => (
						<li key={`${align}-${width}-${index}`}>
							<Skeleton width={width} height="2.5rem" radius="1.5rem" />
						</li>
					))}
				</ol>
			</article>
		</li>
	);
};

const ConversationLoading = () => {
	return (
		<section className="relative flex flex-col h-full basis-[69%] border-[0.50px] border-solid border-(--white-pallete-10) rounded-[20px] bg-(--geek-blue-primary-opacity-100) backdrop-blur-[32px] overflow-hidden">
			<header className="relative flex px-[20px] py-[12px] items-center justify-between border-b-[0.50px] border-solid border-(--geek-blue-primary-opacity-50) backdrop-blur-[50px] bg-(--geek-blue-primary-opacity-100)">
				<div className="flex items-center gap-x-[12px]">
					<Skeleton width={32} height={32} radius="999px" />
					<Skeleton width="7.5rem" height="1.25rem" radius="1rem" />
				</div>
				<Skeleton width="7.25rem" height="2rem" radius="0.625rem" />
			</header>
			<ol className="relative z-10 flex flex-col gap-y-[12px] h-full px-[24px] py-[24px] bg-[rgba(1,0,9,0.25)]">
				<MessageGroupSkeleton align="right" widths={["5.75rem", "22rem"]} />
				<MessageGroupSkeleton align="left" widths={["28.25rem", "14.5rem"]} />
				<MessageGroupSkeleton align="right" widths={["25rem"]} />
				<MessageGroupSkeleton align="left" widths={["18rem", "30rem"]} />
				<MessageGroupSkeleton align="right" widths={["12rem"]} />
			</ol>
			<footer className="relative flex px-[20px] py-[20px] border-t-[0.50px] border-solid border-(--white-pallete-10) backdrop-blur-[50px] bg-(--geek-blue-primary-opacity-50)">
				<div className="flex flex-col relative w-full">
					<Skeleton width="100%" height="5.563rem" radius="0.625rem" />
					<div className="flex gap-x-[10px] absolute bottom-[12px] left-[12px]">
						<Skeleton width={16} height={16} radius="0.25rem" />
						<Skeleton width={16} height={16} radius="0.25rem" />
					</div>
					<Skeleton className="absolute bottom-[12px] right-[12px]" width="5.5rem" height="2rem" radius="0.625rem" />
				</div>
			</footer>
		</section>
	);
};

export default ConversationLoading;
