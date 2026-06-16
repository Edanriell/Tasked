import type { ReactElement } from "react";

import { ProjectImage } from "@shared/ui";

import { ProjectRowActions } from "./project-row-actions";

type ProjectRowVariant = "compact" | "extended";

type ProjectRowComponents = {
	Actions: typeof ProjectRowActions;
};

type ProjectRowProps = {
	name: string;
	image: string;
	totalTasks: number;
	variant?: ProjectRowVariant;
	children?: ReactElement | ReactElement[];
};

type ProjectRow = ((props: Readonly<ProjectRowProps>) => ReactElement) & ProjectRowComponents;

export const ProjectRow = (({ name, image, totalTasks, variant = "extended", children }: Readonly<ProjectRowProps>) => {
	return (
		<article className="flex border-[0.031rem] border-solid border-(--white-pallete-10) rounded-[1rem] p-[0.375rem] bg-(--geek-blue-primary-opacity-100)">
			<ProjectImage
				iconClasses="w-[2rem]! h-[2rem]!"
				imageSize={48}
				imageClasses="p-[0.5rem]! rounded-[0.75rem]!"
				name={name}
				imageUrl={image}
			/>
			<div className="flex flex-col gap-y-[0.25rem] items-start justify-center ml-[0.5rem]">
				<h3 className="font-(family-name:--font-barlow) font-bold text-[1rem] leading-[125%] tracking-[0.01em] text-(--white-pallete-100)">
					{name}
				</h3>
				{totalTasks > 0 && (
					<p className="font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[133%] tracking-[0.01em] text-(--neutrals-3)">
						{totalTasks} Tasks
					</p>
				)}
			</div>
			{children}
		</article>
	);
}) as ProjectRow;

ProjectRow.Actions = ProjectRowActions;
