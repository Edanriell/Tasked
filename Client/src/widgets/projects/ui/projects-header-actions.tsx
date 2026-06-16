import type { ReactNode } from "react";
import { Fragment } from "react";

export type ProjectsHeaderActionsProps = {
	children?: ReactNode;
};

export const ProjectsHeaderActions = ({ children }: Readonly<ProjectsHeaderActionsProps>) => {
	return <Fragment>{children}</Fragment>;
};
