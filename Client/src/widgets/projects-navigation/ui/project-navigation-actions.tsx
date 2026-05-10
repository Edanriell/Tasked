import type { ReactElement } from "react";
import { Fragment } from "react";

type ProjectNavigationActionsProps = {
	children: ReactElement | ReactElement[];
};

export const ProjectNavigationActions = ({ children }: Readonly<ProjectNavigationActionsProps>) => {
	return <Fragment>{children}</Fragment>;
};
