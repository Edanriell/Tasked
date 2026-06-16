import type { ReactElement } from "react";

import Dribble from "@public/images/projects/dribble.svg";
import Paypal from "@public/images/projects/paypal.svg";
import Sleekpay from "@public/images/projects/sleekpay.svg";
import Youtube from "@public/images/projects/youtube.svg";

import { ProjectRow } from "@entities/project";

type Project = {
	id: string;
	name: string;
	image: string;
	totalTasks: number;
};

type ProjectsListProps = {
	renderActions?: (projectId: string) => ReactElement;
};

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

export const ProjectsList = async ({ renderActions }: Readonly<ProjectsListProps>) => {
	const projects = await getProjects();

	return (
		<ul className="flex flex-col gap-y-[0.5rem]">
			{projects.map(({ id, name, image, totalTasks }) => (
				<li key={id}>
					<ProjectRow name={name} image={image} totalTasks={totalTasks} variant="compact">
						<ProjectRow.Actions>{renderActions?.(id)}</ProjectRow.Actions>
					</ProjectRow>
				</li>
			))}
		</ul>
	);
};
