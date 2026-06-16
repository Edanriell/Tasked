import { GridLayoutManager, GridLayoutManagerControls, TasksWidget, UsersWidget } from "@widgets/grid-layout-manager";
import { Projects } from "@widgets/projects";
import { ViewHeader } from "@widgets/view-header";

import { CREATE_PROJECT_TRIGGER_VARIANT, CreateProject } from "@features/create-project";
import { CreateTask } from "@features/create-task";
import { DeleteProject } from "@features/delete-project";
import { EditProject } from "@features/edit-project";
import { PrivateNotepad } from "@features/private-notepad";
import { Search } from "@features/search";

import { ICON } from "@shared/ui";
import { Fragment } from "react";

const HomePage = () => {
	return (
		<div className="flex h-full min-h-[calc(100dvh-4rem)] flex-col">
			<ViewHeader title="Dashboard" icon={ICON.Home}>
				<ViewHeader.Tools>
					<Search />
					<CreateTask />
					<GridLayoutManagerControls />
				</ViewHeader.Tools>
			</ViewHeader>
			<GridLayoutManager>
				<GridLayoutManager.Component
					type="private-notepad"
					label="Private notepad"
					x={0}
					y={0}
					w={12}
					h={11}
					minW={4}
					minH={4}
				>
					<PrivateNotepad />
				</GridLayoutManager.Component>
				<GridLayoutManager.Component
					type="projects"
					label="Projects"
					x={12}
					y={0}
					w={6}
					h={11}
					minW={4}
					minH={4}
				>
					<Projects>
						<Projects.HeaderActions>
							<CreateProject triggerVariant={CREATE_PROJECT_TRIGGER_VARIANT.Button} />
						</Projects.HeaderActions>
						<Projects.Actions>
							{(projectId: string) => (
								<Fragment>
									<EditProject id={projectId} />
									<DeleteProject id={projectId} />
								</Fragment>
							)}
						</Projects.Actions>
					</Projects>
				</GridLayoutManager.Component>
				<GridLayoutManager.Component type="users" label="Users" x={18} y={0} w={6} h={11} minW={4} minH={4}>
					<UsersWidget />
				</GridLayoutManager.Component>
				<GridLayoutManager.Component type="tasks" label="Tasks" x={0} y={13} w={24} h={11} minW={8} minH={6}>
					<TasksWidget />
				</GridLayoutManager.Component>
			</GridLayoutManager>
		</div>
	);
};

export default HomePage;
