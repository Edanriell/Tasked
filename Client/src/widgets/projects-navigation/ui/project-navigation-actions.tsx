import type { FC, ReactElement } from "react";
import { Fragment } from "react";

type ProjectNavigationActionsProps = {
	children: ReactElement | ReactElement[];
};

export const ProjectNavigationActions: FC<ProjectNavigationActionsProps> = ({ children }) => {
	return <Fragment>{children}</Fragment>;
};
