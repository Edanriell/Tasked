import type { FC, ReactNode } from "react";
import { Fragment } from "react";

type SidebarFooterProps = {
	children: ReactNode;
};

export const SidebarFooter: FC<SidebarFooterProps> = ({ children }) => {
	return <Fragment>{children}</Fragment>;
};
