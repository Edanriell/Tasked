import type { FC } from "react";

import Dribble from "@public/images/projects/dribble.svg";
import Paypal from "@public/images/projects/paypal.svg";
import Sleekpay from "@public/images/projects/sleekpay.svg";
import Youtube from "@public/images/projects/youtube.svg";

import { ProjectNavigationLink } from "./project-navigation-link";

type Project = {
	id: string;
	name: string;
	image: string;
};

const getProjects = (): Promise<Array<Project>> => {
	return new Promise((resolve) => {
		return setTimeout(() => {
			return resolve([
				{ id: String(1), name: "Sleekpay App", image: Sleekpay },
				{ id: String(2), name: "PayPal App", image: Paypal },
				{ id: String(3), name: "Dribble Posts", image: Dribble },
				{ id: String(4), name: "Youtube", image: Youtube }
			]);
		}, 6000);
	});
};

export const ProjectNavigationLinks: FC = async () => {
	const projects = await getProjects();

	return (
		<ul>
			{projects.map(({ id, name, image }) => (
				<li key={id}>
					<ProjectNavigationLink image={image} id={id} name={name} />
				</li>
			))}
		</ul>
	);
};
