import type { ReactElement } from "react";
import { Children, isValidElement, Suspense } from "react";

import { ProjectsNavigationActions } from "./projects-navigation-actions";
import { ProjectsNavigationLinks } from "./projects-navigation-links";
import { ProjectsNavigationSkeleton } from "./projects-navigation-skeleton";

type ProjectsNavigationComponents = {
	Actions: typeof ProjectsNavigationActions;
};

type ProjectsNavigationProps = {
	children?: ReactElement | ReactElement[];
};

type ProjectsNavigation = ((props: Readonly<ProjectsNavigationProps>) => ReactElement) & ProjectsNavigationComponents;

const validateProjectsNavigationChildren = (children: ReactElement | ReactElement[]) => {
	Children.forEach(children, (child) => {
		if (!(isValidElement(child) && child.type === ProjectsNavigationActions)) {
			throw new Error(`
				Component <ProjectsNavigation> can only accept children of type <ProjectsNavigation.Actions>.
				Received child of type ${child.type}.
				Please ensure that all children of <Sidebar> are of the correct type. 
			`);
		}
	});
};

export const ProjectsNavigation = (({ children }: Readonly<ProjectsNavigationProps>) => {
	if (children) {
		validateProjectsNavigationChildren(children);
	}

	return (
		<nav
			id="dashboard-projects-nav"
			aria-labelledby="dashboard-projects-nav-title"
			className="relative mx-[0.75rem] py-[1rem]"
		>
			<div className="flex items-center justify-between mb-[0.5rem]">
				<h3
					id="dashboard-projects-nav-title"
					className="font-(family-name:--font-barlow) font-bold text-[0.625rem] leading-[140%] tracking-[0.01em] uppercase text-(--neutrals-2)"
				>
					Projects
				</h3>
				{children}
			</div>
			<Suspense fallback={<ProjectsNavigationSkeleton />}>
				<ProjectsNavigationLinks />
			</Suspense>
		</nav>
	);
}) as ProjectsNavigation;

ProjectsNavigation.Actions = ProjectsNavigationActions;
