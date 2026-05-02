import type { FC, ReactNode } from "react";
import { Fragment } from "react";

type SidebarContentProps = {
	children: ReactNode;
};

export const SidebarContent: FC<SidebarContentProps> = ({ children }) => {
	return <Fragment>{children}</Fragment>;
};
