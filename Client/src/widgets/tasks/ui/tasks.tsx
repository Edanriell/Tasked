import { Suspense } from "react";

import { TasksCount } from "./tasks-count";
import { TasksCountSkeleton } from "./tasks-count-skeleton";
import { TasksList } from "./tasks-list";
import { TasksListSkeleton } from "./tasks-list-skeleton";

export const Tasks = () => {
	return (
		<section className="border-[0.031rem] border-solid border-(--white-pallete-10) rounded-[1.25rem] bg-(--geek-blue-primary-opacity-100) px-[1rem] h-full overflow-y-auto">
			<header className="flex items-center border-b-[0.031rem] border-solid border-(--white-pallete-10) mb-[0.75rem]">
				<div className="flex items-center gap-x-[0.5rem]">
					<h2 className="font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em] text-(--white-pallete-100)">
						My Tasks
					</h2>
					<Suspense fallback={<TasksCountSkeleton />}>
						<TasksCount />
					</Suspense>
				</div>
				<button type="button">All Projects</button>
			</header>
			<Suspense fallback={<TasksListSkeleton />}>
				<TasksList />
			</Suspense>
		</section>
	);
};
