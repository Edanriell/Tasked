import Dribble from "@public/images/projects/dribble.svg";
import Paypal from "@public/images/projects/paypal.svg";
import Sleekpay from "@public/images/projects/sleekpay.svg";
import Youtube from "@public/images/projects/youtube.svg";

import { ProjectsNavigationLinksList } from "./projects-navigation-links-list";

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

export const ProjectsNavigationLinks = async () => {
	const projects = await getProjects();

	return <ProjectsNavigationLinksList projects={projects} />;
};
