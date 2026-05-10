import type { ReactNode } from "react";
import { Fragment } from "react";

type SidebarFooterProps = {
	children: ReactNode;
};

export const SidebarFooter = ({ children }: Readonly<SidebarFooterProps>) => {
	return <Fragment>{children}</Fragment>;
};
