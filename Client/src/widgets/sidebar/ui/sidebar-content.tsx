import type { ReactNode } from "react";
import { Fragment } from "react";

type SidebarContentProps = {
	children: ReactNode;
};

export const SidebarContent = ({ children }: Readonly<SidebarContentProps>) => {
	return <Fragment>{children}</Fragment>;
};
