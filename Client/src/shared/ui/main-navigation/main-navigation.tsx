import Link from "next/link";
import type { FC } from "react";

import { ROUTES } from "@shared/config";

export const MAIN_NAVIGATION_ITEMS = [
	{ label: "Overview", href: ROUTES.Overview },
	{ label: "Features", href: ROUTES.Features },
	{ label: "Pricing", href: ROUTES.Pricing },
	{ label: "About", href: ROUTES.About }
] as const;

export const MainNavigation: FC = () => {
	return (
		<nav aria-label="Main navigation">
			<ul className="flex items-center gap-x-[3.236rem] font-(family-name:--font-barlow) text-(--white-pallete-100) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em]">
				{MAIN_NAVIGATION_ITEMS.map(({ href, label }) => (
					<li key={href}>
						<Link href={href}>{label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
