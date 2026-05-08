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

const SidebarBackground: FC = () => {
	return (
		<svg
			className="absolute top-0 left-0 -z-10 w-full h-full"
			viewBox="0 0 228 908"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_f_38129_50083)">
				<circle cx="42" cy="27" r="80" fill="url(#paint0_radial_38129_50083)" />
			</g>
			<g filter="url(#filter1_f_38129_50083)">
				<circle cx="249" cy="659" r="249" fill="url(#paint1_radial_38129_50083)" />
			</g>
			<defs>
				<filter
					id="filter0_f_38129_50083"
					x="-138"
					y="-153"
					width="360"
					height="360"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_38129_50083" />
				</filter>
				<filter
					id="filter1_f_38129_50083"
					x="-373.5"
					y="36.5"
					width="1245"
					height="1245"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="186.75" result="effect1_foregroundBlur_38129_50083" />
				</filter>
				<radialGradient
					id="paint0_radial_38129_50083"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(42 27) rotate(90) scale(80)"
				>
					<stop stopColor="#1D39C4" />
					<stop offset="1" stopColor="#1D39C4" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_38129_50083"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(249 659) rotate(90) scale(249)"
				>
					<stop stopColor="#1A34B6" />
					<stop offset="1" stopColor="#1D39C4" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>
	);
};

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
		<aside className="relative my-[0.75rem] ml-[0.75rem]" aria-labelledby="dashboard-sidebar-title">
			<SidebarTrigger />
			<div className="relative border-[0.031rem] border-solid border-(--white-pallete-10) rounded-[1.5rem] bg-(--white-pallete-50) overflow-hidden h-full">
				<h2 id="dashboard-sidebar-title" className="sr-only">
					Dashboard sidebar
				</h2>
				<SidebarBackground />
				{children}
			</div>
		</aside>
	);
};

Sidebar.Header = SidebarHeader;
Sidebar.Content = SidebarContent;
Sidebar.Footer = SidebarFooter;
