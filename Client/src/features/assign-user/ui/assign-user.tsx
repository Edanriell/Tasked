import { Button, ICON, Icon } from "@shared/ui";

export const AssignUser = () => {
	return (
		<Button classes="w-[1.5rem]! h-[1.5rem]! p-[0.25rem]! rounded-full! ml-[-0.625rem] z-10 text-[white]">
			<span className="sr-only">Assign User</span>
			<Icon type={ICON.Add} size={16} />
		</Button>
	);
};
