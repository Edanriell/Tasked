import { ReactElement } from "react";

type ViewHeaderToolsProps = {
	children: ReactElement | ReactElement[];
};

export const ViewHeaderTools = ({ children }: Readonly<ViewHeaderToolsProps>) => {
	return <div>{children}</div>;
};
