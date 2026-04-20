import type { FC, ReactNode } from "react";

import { Logotype, MainNavigation } from "@shared/ui";

type HeaderProps = {
	children: ReactNode;
};

export const Header: FC<Readonly<HeaderProps>> = ({ children }) => {
	return (
		<header>
			<Logotype />
			<MainNavigation />
			{children}
		</header>
	);
};
