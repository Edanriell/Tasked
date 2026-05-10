import { mainNavigationItems } from "../config";

import { MainNavigationLink } from "./main-navigation-link";

export const MainNavigation = () => {
	return (
		<nav id="dashboard-main-nav" aria-labelledby="dashboard-main-nav-title">
			<h3 id="dashboard-main-nav-title">Main</h3>
			<ul>
				{mainNavigationItems.map(({ href, icon, content }, index) => (
					<li key={index}>
						<MainNavigationLink href={href} icon={icon}>
							{content()}
						</MainNavigationLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
