import type { FC } from "react";
import { Suspense } from "react";

import { Icon, ICON } from "@shared/ui";

import { ProjectNavigationLinks } from "./project-navigation-links";

export const ProjectsNavigation: FC = () => {
	return (
		<nav id="dashboard-projects-nav" aria-labelledby="dashboard-projects-nav-title">
			<div>
				<h3 id="dashboard-projects-nav-title">Projects</h3>
				<button type="button" aria-label="Create new project">
					<Icon type={ICON.CreateProject} />
					<span className="sr-only">Create New Project</span>
				</button>
			</div>
			<Suspense fallback={<p>Loading Projects...</p>}>
				<ProjectNavigationLinks />
			</Suspense>
		</nav>
	);
};
