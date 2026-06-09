"use client";

import { GridLayoutManager, NotesWidget, ProjectsWidget, TasksWidget, UsersWidget } from "@widgets/grid-layout-manager";
import { ViewHeader } from "@widgets/view-header";

import { CreateTask } from "@features/create-task";
import { Search } from "@features/search";

import { ICON } from "@shared/ui";

const HomePage = () => {
	return (
		<div className="flex h-full min-h-[calc(100dvh-4rem)] flex-col">
			<ViewHeader title="Dashboard" icon={ICON.Home}>
				<ViewHeader.Tools>
					<Search />
					<CreateTask />
					<GridLayoutManager.Controls />
				</ViewHeader.Tools>
			</ViewHeader>
			<GridLayoutManager>
				<GridLayoutManager.Component type="notes" label="Notes" x={0} y={0} w={12} h={11} minW={4} minH={4}>
					<NotesWidget />
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
					<ProjectsWidget />
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
