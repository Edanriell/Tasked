import { ReactElement } from "react";

type ViewHeaderActionsProps = {
	children: ReactElement | ReactElement[];
};

export const ViewHeaderActions = ({ children }: Readonly<ViewHeaderActionsProps>) => {
	return <div className="px-[1rem]">{children}</div>;
};
