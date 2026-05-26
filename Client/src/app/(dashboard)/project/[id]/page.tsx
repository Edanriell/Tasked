import { Fragment, Suspense } from "react";

import { AssignedUsers, AssignedUsersSkeleton } from "@widgets/assigned-users";
import { ViewHeader } from "@widgets/view-header";

import { AssignUser } from "@features/assign-user";
import { MakeProjectPrivate } from "@features/make-project-private";
import { PinProject } from "@features/pin-project";
import { ProjectSettings } from "@features/project-settings";
import { Search } from "@features/search";

import Dribble from "@public/images/projects/dribble.svg";
import Paypal from "@public/images/projects/paypal.svg";
import Sleekpay from "@public/images/projects/sleekpay.svg";
import Youtube from "@public/images/projects/youtube.svg";

type ProjectPageProps = {
	params: Promise<{ id: string }>;
};

type Project = {
	id: string;
	name: string;
	imageUrl: string;
};

const getProject = (id: string): Promise<Project> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const mockProjects: Record<string, Project> = {
				"1": {
					id: "1",
					name: "Sleekpay App",
					imageUrl: Sleekpay
				},
				"2": {
					id: "2",
					name: "PayPal App",
					imageUrl: Paypal
				},
				"3": {
					id: "3",
					name: "Dribble Posts",
					imageUrl: Dribble
				},
				"4": {
					id: "4",
					name: "Youtube",
					imageUrl: Youtube
				}
			};

			const project = mockProjects[id];

			if (project) {
				resolve(project);
			} else {
				reject(new Error(`Project with id "${id}" not found`));
			}
		}, 6000);
	});
};

const ProjectPage = async ({ params }: Readonly<ProjectPageProps>) => {
	// Todo
	// Handle Not Found Project case

	const { id: projectId } = await params;

	const { id, name, imageUrl } = await getProject(projectId);

	return (
		<Fragment>
			<ViewHeader title={name} imageUrl={imageUrl}>
				<ViewHeader.Info>
					<Suspense fallback={<AssignedUsersSkeleton />}>
						<AssignedUsers projectId={id} />
					</Suspense>
					<AssignUser />
				</ViewHeader.Info>
				<ViewHeader.Actions>
					<PinProject projectId={id} />
					<MakeProjectPrivate projectId={id} />
					<ProjectSettings projectId={id} />
				</ViewHeader.Actions>
				<ViewHeader.Tools>
					<Search />
					<p className="text-red-600">Create New Task</p>
				</ViewHeader.Tools>
			</ViewHeader>
			<main>
				<h1 className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
					Project Page {projectId}
				</h1>
			</main>
		</Fragment>
	);
};

export default ProjectPage;
