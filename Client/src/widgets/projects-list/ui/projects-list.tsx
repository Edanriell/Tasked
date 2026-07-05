import { Children, isValidElement, ReactElement } from "react";

import Dribble from "@public/images/projects/dribble.svg";
import Paypal from "@public/images/projects/paypal.svg";
import Sleekpay from "@public/images/projects/sleekpay.svg";
import Youtube from "@public/images/projects/youtube.svg";

import { ProjectRow } from "@entities/project";

import { ProjectsListActions, ProjectsListActionsProps } from "./projects-list-actions";

type Project = {
	id: string;
	name: string;
	image: string;
	totalTasks: number;
};

type ProjectsComponents = {
	Actions: typeof ProjectsListActions;
};

type ProjectsListProps = {
	children?: ReactElement | ReactElement[];
};

type ProjectsList = ((props: Readonly<ProjectsListProps>) => ReactElement) & ProjectsComponents;

const getProjects = (): Promise<Array<Project>> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: String(1), name: "Sleekpay App", image: Sleekpay, totalTasks: 7 },
				{ id: String(2), name: "PayPal App", image: Paypal, totalTasks: 10 },
				{ id: String(3), name: "Dribble Posts", image: Dribble, totalTasks: 5 },
				{ id: String(4), name: "Youtube", image: Youtube, totalTasks: 15 }
			]);
		}, 6000);
	});
};

const validateProjectsListChildren = (children: ReactElement | ReactElement[]) => {
	Children.forEach(children, (child) => {
		if (!(isValidElement(child) && child.type === ProjectsList.Actions)) {
			throw new Error(`
				Component <ProjectsList> can only accept children of type <ProjectsList.Actions>.
				Received child of type ${child.type}.
				Please ensure that all children of <ProjectsList> are of the correct type. 
			`);
		}
	});
};

export const ProjectsList = (async ({ children }: Readonly<ProjectsListProps>) => {
	let ProjectsActions: ((projectId: string) => ReactElement) | null = null;

	const projects = await getProjects();

	if (children) {
		validateProjectsListChildren(children);
	}

	Children.forEach(children, (child) => {
		if (child?.type === ProjectsList.Actions) {
			ProjectsActions = (child as ReactElement<ProjectsListActionsProps>).props.children;
		}
	});

	return (
		<ul className="flex flex-col gap-y-[0.5rem]">
			{projects.map(({ id, name, image, totalTasks }) => (
				<li key={id}>
					<ProjectRow name={name} image={image} totalTasks={totalTasks} variant="compact">
						<ProjectRow.Actions>{ProjectsActions?.(id)}</ProjectRow.Actions>
					</ProjectRow>
				</li>
			))}
		</ul>
	);
}) as unknown as ProjectsList;

ProjectsList.Actions = ProjectsListActions;
