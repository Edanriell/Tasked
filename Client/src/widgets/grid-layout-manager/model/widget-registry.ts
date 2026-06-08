import { WidgetRegistry } from "@widgets/grid-layout-manager/model/types";
import { NotesWidget, ProjectsWidget, TasksWidget, UsersWidget } from "../ui/test-components";

export const widgetRegistry: WidgetRegistry = {
	notes: {
		type: "notes",
		component: NotesWidget,
		minW: 4,
		minH: 4
	},
	projects: {
		type: "projects",
		component: ProjectsWidget,
		minW: 4,
		minH: 4
	},
	users: {
		type: "users",
		component: UsersWidget,
		minW: 4,
		minH: 4
	},
	tasks: {
		type: "tasks",
		component: TasksWidget,
		minW: 8,
		minH: 6
	}
};
