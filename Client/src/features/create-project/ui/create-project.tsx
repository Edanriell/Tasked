import { ICON, Icon } from "@shared/ui";

export const CreateProject = () => {
	return (
		<button
			type="button"
			aria-label="Create new project"
			className="w-[16px] h-[16px] cursor-pointer text-(--neutrals-2)"
		>
			<Icon type={ICON.CreateProject} />
			<span className="sr-only">Create New Project</span>
		</button>
	);
};
