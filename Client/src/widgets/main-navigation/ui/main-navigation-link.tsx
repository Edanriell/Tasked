import Link from "next/link";
import type { FC, ReactNode } from "react";

import type { IconType } from "@shared/ui";
import { Icon } from "@shared/ui";

type MainNavigationLinkProps = {
	href: string;
	icon: IconType;
	children: ReactNode;
};

export const MainNavigationLink: FC<MainNavigationLinkProps> = ({ href, icon, children }) => {
	return (
		<Link href={href}>
			<Icon type={icon} />
			{children}
		</Link>
	);
};
