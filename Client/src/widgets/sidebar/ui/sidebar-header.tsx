import type { FC, ReactNode } from "react";
import { Fragment } from "react";

type SidebarHeaderProps = {
	children: ReactNode;
};

export const SidebarHeader: FC<SidebarHeaderProps> = ({ children }) => {
	return <Fragment>{children}</Fragment>;
};
