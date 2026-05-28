import { Fragment } from "react";

import { ViewHeader } from "@widgets/view-header";

import { CreateTask } from "@features/create-task";
import { Search } from "@features/search";

import { ICON } from "@shared/ui";

const TasksPage = () => {
	return (
		<Fragment>
			<ViewHeader title="My Tasks" icon={ICON.TaskSquare}>
				<ViewHeader.Tools>
					<Search />
					<CreateTask />
				</ViewHeader.Tools>
			</ViewHeader>
			<main>
				<h1 className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
					Tasks Page
				</h1>
			</main>
		</Fragment>
	);
};

export default TasksPage;
