import type { ComponentPropsWithoutRef, FC } from "react";

import { Logotype, MainNavigation } from "@shared/ui";
import { clsx } from "clsx";

type HeaderProps = Omit<ComponentPropsWithoutRef<"header">, "className"> & {
	classes?: string;
};

export const Header: FC<Readonly<HeaderProps>> = ({ classes, children, ...props }) => {
	return (
		<header className={clsx("flex items-center px-[2.5rem] my-[2rem]", classes)} {...props}>
			<div className="flex items-center gap-x-[3rem]">
				<Logotype />
				<MainNavigation />
			</div>
			{children}
		</header>
	);
};
