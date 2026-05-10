import { ICON, Icon } from "@shared/ui";

export const CreateProject = () => {
	return (
		<button type="button" aria-label="Create new project" className="bg-red-500 w-4 h-4 cursor-pointer">
			<Icon type={ICON.CreateProject} />
			<span className="sr-only">Create New Project</span>
		</button>
	);
};
