import Link from "next/link";
import type { ReactNode } from "react";

import type { IconType } from "@shared/ui";
import { Icon } from "@shared/ui";

type MainNavigationLinkProps = {
	href: string;
	icon: IconType;
	children: ReactNode;
};

export const MainNavigationLink = ({ href, icon, children }: Readonly<MainNavigationLinkProps>) => {
	return (
		<Link href={href}>
			<Icon type={icon} />
			{children}
		</Link>
	);
};
