import { clsx } from "clsx";
import type { ReactElement } from "react";
import { Children, isValidElement, Suspense } from "react";

import { ProjectsActions, ProjectsActionsProps } from "./projects-actions";
import { ProjectsCount } from "./projects-count";
import { ProjectsCountSkeleton } from "./projects-count-skeleton";
import { ProjectsHeaderActions, ProjectsHeaderActionsProps } from "./projects-header-actions";
import { ProjectsList } from "./projects-list";
import { ProjectsListSkeleton } from "./projects-list-skeleton";

type ProjectsComponents = {
	HeaderActions: typeof ProjectsHeaderActions;
	Actions: typeof ProjectsActions;
};

type ProjectsProps = {
	children?: ReactElement | ReactElement[];
};

type Projects = ((props: Readonly<ProjectsProps>) => ReactElement) & ProjectsComponents;

const validateProjectsChildren = (children: ReactElement | ReactElement[]) => {
	Children.forEach(children, (child) => {
		if (!((isValidElement(child) && child.type === Projects.HeaderActions) || child.type === Projects.Actions)) {
			throw new Error(`
				Component <Projects> can only accept children of type <Projects.HeaderActions> and <Projects.Actions>.
				Received child of type ${child.type}.
				Please ensure that all children of <Projects> are of the correct type. 
			`);
		}
	});
};

export const Projects = (({ children }: Readonly<ProjectsProps>) => {
	let ProjectsHeaderActions: ReactElement<ProjectsHeaderActionsProps> | null = null;
	let ProjectsActions: ((projectId: string) => ReactElement) | null = null;

	if (children) {
		validateProjectsChildren(children);
	}

	Children.forEach(children, (child) => {
		if (child?.type === Projects.HeaderActions) {
			ProjectsHeaderActions = child as ReactElement<ProjectsHeaderActionsProps>;
		} else if (child?.type === Projects.Actions) {
			ProjectsActions = (child as ReactElement<ProjectsActionsProps>).props.children;
		}
	});

	return (
		<section
			className={clsx(
				"border-[0.031rem] border-solid border-(--white-pallete-10) rounded-[1.25rem] bg-(--geek-blue-primary-opacity-100) px-[1rem] h-full overflow-y-auto",
				ProjectsHeaderActions ? "pb-[1rem] pt-[0.75rem]" : "py-[1rem]"
			)}
		>
			<header
				className={clsx(
					"flex items-center border-b-[0.031rem] border-solid border-(--white-pallete-10) mb-[0.75rem]",
					ProjectsHeaderActions ? "justify-between pb-[0.75rem]" : "justify-start pb-[1.25rem]"
				)}
			>
				<div className="flex items-center gap-x-[0.5rem]">
					<h2 className="font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em] text-(--white-pallete-100)">
						Projects
					</h2>
					<Suspense fallback={<ProjectsCountSkeleton />}>
						<ProjectsCount />
					</Suspense>
				</div>
				{ProjectsHeaderActions}
			</header>
			<Suspense fallback={<ProjectsListSkeleton />}>
				<ProjectsList renderActions={ProjectsActions ?? undefined} />
			</Suspense>
		</section>
	);
}) as Projects;

Projects.HeaderActions = ProjectsHeaderActions;
Projects.Actions = ProjectsActions;
