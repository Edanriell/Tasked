import { mainNavigationItems } from "../config";

import { MainNavigationLink } from "./main-navigation-link";

export const MainNavigation = () => {
	return (
		<nav
			className="relative mx-[12px] py-[16px]"
			id="dashboard-main-nav"
			aria-labelledby="dashboard-main-nav-title"
		>
			<h3
				className="font-(family-name:--font-barlow) font-bold text-[10px] leading-[140%] tracking-[0.01em] uppercase text-(--neutrals-2) mb-[8px]"
				id="dashboard-main-nav-title"
			>
				Main
			</h3>
			<ul className="flex flex-col gap-y-[4px]">
				{mainNavigationItems.map(({ href, icon, content }, index) => (
					<li className="relative" key={index}>
						<MainNavigationLink href={href} icon={icon}>
							{content()}
						</MainNavigationLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
