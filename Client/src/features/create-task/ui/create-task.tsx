import { Button, ICON, Icon } from "@shared/ui";

type CreateTaskProps = {
	projectId?: string;
};

export const CreateTask = ({ projectId }: Readonly<CreateTaskProps>) => {
	return (
		<Button className="flex items-center gap-x-[4px] rounded-[12px]">
			<Icon type={ICON.AddCircle} size={16} />
			<span className="font-(family-name:--font-barlow) font-bold!s text-(--white-pallete-100)">New Task</span>
		</Button>
	);
};
