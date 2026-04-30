import Link from "next/link";
import type { FC } from "react";

import { ROUTES } from "@shared/config";
import { Icon, ICON } from "@shared/ui";

export const MainNavigation: FC = () => {
	return (
		<nav id="dashboard-main-nav" aria-labelledby="dashboard-main-nav-title">
			<h3 id="dashboard-main-nav-title">Main</h3>
			<ul>
				<li>
					<Link href={ROUTES.Home}>
						<Icon type={ICON.Home} />
						<span>Home</span>
					</Link>
				</li>
				<li>
					<Link href={ROUTES.Tasks}>
						<Icon type={ICON.Tasks} />
						<span>My Tasks</span>
					</Link>
				</li>
				<li>
					<Link href={ROUTES.Projects}>
						<Icon type={ICON.Projects} />
						<span>Projects</span>
					</Link>
				</li>
				<li>
					<Link href={ROUTES.Messages}>
						<Icon type={ICON.Messages} />
						<span>Messages</span>
					</Link>
				</li>
				<li>
					<Link href={ROUTES.Settings}>
						<Icon type={ICON.MainSettings} />
						<span>Settings</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
