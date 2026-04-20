import type { ComponentPropsWithoutRef, FC } from "react";

import { Logotype, MainNavigation } from "@shared/ui";

type HeaderProps = ComponentPropsWithoutRef<"header">;

export const Header: FC<Readonly<HeaderProps>> = ({ children, ...props }) => {
	return (
		<header {...props}>
			<Logotype />
			<MainNavigation />
			{children}
		</header>
	);
};
