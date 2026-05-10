import { clsx } from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { Logotype, MainNavigation } from "@shared/ui";

type HeaderProps = Omit<ComponentPropsWithoutRef<"header">, "className"> & {
	classes?: string;
};

export const Header = ({ classes, children, ...props }: Readonly<HeaderProps>) => {
	return (
		<header className={clsx("flex items-center px-[2.5rem] relative z-[100] my-[2rem]", classes)} {...props}>
			<div className="flex items-center gap-x-[3rem]">
				<Link href="/">
					<Logotype />
				</Link>
				<MainNavigation />
			</div>
			{children}
		</header>
	);
};
