import type { ReactElement } from "react";
import { Children, isValidElement, Suspense } from "react";

import { ProjectNavigationActions } from "./project-navigation-actions";
import { ProjectNavigationLinks } from "./project-navigation-links";

type ProjectsNavigationComponents = {
	Actions: typeof ProjectNavigationActions;
};

type ProjectsNavigationProps = {
	children?: ReactElement | ReactElement[];
};

type ProjectsNavigation = ((props: Readonly<ProjectsNavigationProps>) => ReactElement) & ProjectsNavigationComponents;

const validateProjectsNavigationChildren = (children: ReactElement | ReactElement[]) => {
	Children.forEach(children, (child) => {
		if (!(isValidElement(child) && child.type === ProjectNavigationActions)) {
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
		<nav id="dashboard-projects-nav" aria-labelledby="dashboard-projects-nav-title">
			<div>
				<h3 id="dashboard-projects-nav-title">Projects</h3>
				{children}
			</div>
			<Suspense fallback={<p>Loading Projects...</p>}>
				<ProjectNavigationLinks />
			</Suspense>
		</nav>
	);
}) as ProjectsNavigation;

ProjectsNavigation.Actions = ProjectNavigationActions;
