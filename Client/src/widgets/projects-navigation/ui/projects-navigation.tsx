import type {FC} from "react";
import {Suspense} from "react";

import {ProjectNavigationLinks} from "./project-navigation-links";

export const ProjectsNavigation: FC = () => {
	return (
		<nav id="dashboard-projects-nav" aria-labelledby="dashboard-projects-nav-title">
			<div>
				<h3 id="dashboard-projects-nav-title">Projects</h3>
				<button type="button" aria-label="Create new project">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						focusable="false"
					>
						<path
							d="M8.00065 1.33301C4.32732 1.33301 1.33398 4.32634 1.33398 7.99967C1.33398 11.673 4.32732 14.6663 8.00065 14.6663C11.674 14.6663 14.6673 11.673 14.6673 7.99967C14.6673 4.32634 11.674 1.33301 8.00065 1.33301ZM10.6673 8.49967H8.50065V10.6663C8.50065 10.9397 8.27398 11.1663 8.00065 11.1663C7.72732 11.1663 7.50065 10.9397 7.50065 10.6663V8.49967H5.33398C5.06065 8.49967 4.83398 8.27301 4.83398 7.99967C4.83398 7.72634 5.06065 7.49967 5.33398 7.49967H7.50065V5.33301C7.50065 5.05967 7.72732 4.83301 8.00065 4.83301C8.27398 4.83301 8.50065 5.05967 8.50065 5.33301V7.49967H10.6673C10.9407 7.49967 11.1673 7.72634 11.1673 7.99967C11.1673 8.27301 10.9407 8.49967 10.6673 8.49967Z"
							fill="#657997"
						/>
					</svg>
					<span className="sr-only">Create New Project</span>
				</button>
			</div>
			<Suspense fallback={<p>Loading Projects...</p>}>
				<ProjectNavigationLinks />
			</Suspense>
		</nav>
	);
};
