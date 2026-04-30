import type { FC, ReactElement } from "react";
import { Children, isValidElement } from "react";

import { SidebarContent } from "./sidebar-content";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarHeader } from "./sidebar-header";
import { SidebarTrigger } from "./sidebar-trigger";

type SidebarComponents = {
	Header: typeof SidebarHeader;
	Content: typeof SidebarContent;
	Footer: typeof SidebarFooter;
};

type SidebarProps = {
	children: ReactElement | ReactElement[];
};

type Sidebar = FC<SidebarProps> & SidebarComponents;

const validateSidebarChildren = (children: ReactElement | ReactElement[]) => {
	Children.forEach(children, (child) => {
		if (
			!(
				isValidElement(child) &&
				(child.type === SidebarHeader || child.type === SidebarContent || child.type === SidebarFooter)
			)
		) {
			throw new Error(`
				Component <Sidebar> can only accept children of types <Sidebar.Header>, <Sidebar.Content>, and <Sidebar.Footer>.
				Received child of type ${child.type}.
				Please ensure that all children of <Sidebar> are of the correct type. 
			`);
		}
	});
};

export const Sidebar: Sidebar = ({ children }) => {
	validateSidebarChildren(children);

	return (
		<aside className="relative my-[0.75rem] ml-[0.75rem] bg-indigo-500" aria-labelledby="dashboard-sidebar-title">
			<h2 id="dashboard-sidebar-title" className="sr-only">
				Dashboard sidebar
			</h2>
			<SidebarTrigger />
			{children}
		</aside>
	);
};

Sidebar.Header = SidebarHeader;
Sidebar.Content = SidebarContent;
Sidebar.Footer = SidebarFooter;
