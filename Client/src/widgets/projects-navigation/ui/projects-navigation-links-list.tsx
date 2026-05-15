"use client";

import { ROUTES } from "@shared/config";
import { NavigationLinkHighlight, useNavigationLinkHighlight } from "@shared/ui";

import { ProjectsNavigationLink } from "./projects-navigation-link";

type Project = {
	id: string;
	name: string;
	image: string;
};

type ProjectsNavigationLinksListProps = {
	projects: Array<Project>;
};

export const ProjectsNavigationLinksList = ({ projects }: ProjectsNavigationLinksListProps) => {
	const { activeLinkId, handleLinkSelection, handleLinkUnselection } = useNavigationLinkHighlight(
		projects.map((project) => ({
			id: project.id,
			match: (pathname: string) => pathname === ROUTES.Project(project.id)
		}))
	);

	return (
		<ul
			className="relative flex flex-col gap-y-[0.25rem]"
			onPointerLeave={handleLinkUnselection}
			onBlurCapture={handleLinkUnselection}
		>
			{projects.map(({ id, name, image }) => {
				{
					const isActive = activeLinkId === id;

					return (
						<li
							className="relative"
							key={id}
							onPointerEnter={() => handleLinkSelection(id)}
							onFocusCapture={() => handleLinkSelection(id)}
						>
							{isActive && <NavigationLinkHighlight layoutId="projects-navigation-link-highlight" />}
							<ProjectsNavigationLink id={id} name={name} image={image} isActive={isActive}>
								{name}
							</ProjectsNavigationLink>
						</li>
					);
				}
			})}
		</ul>
	);
};
