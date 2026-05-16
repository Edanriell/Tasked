import { ReactElement } from "react";

type ViewHeaderToolsProps = {
	children: ReactElement | ReactElement[];
};

export const ViewHeaderTools = ({ children }: Readonly<ViewHeaderToolsProps>) => {
	return <div className="flex items-center gap-x-[0.5rem]">{children}</div>;
};
