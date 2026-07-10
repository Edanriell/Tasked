import { clsx } from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

import { MotionIcon, type MotionIconType } from "@shared/ui";

type MainNavigationLinkProps = {
	href: string;
	icon: MotionIconType;
	isActive: boolean;
	children: ReactNode;
};

export const MainNavigationLink = ({ href, icon, isActive, children }: Readonly<MainNavigationLinkProps>) => {
	return (
		<Link
			className={clsx(
				"flex items-center gap-x-[0.5rem] font-(family-name:--font-barlow) font-medium text-[0.875rem] leading-[129%] tracking-[0.01em] rounded-[0.75rem] p-[0.375rem]",
				isActive ? "text-(--white-pallete-100)" : "text-(--neutrals-3)"
			)}
			href={href}
		>
			<span className="w-[1.5rem] h-[1.5rem] flex items-center justify-center">
				<MotionIcon isActive={isActive} className="w-[1rem] h-[1rem]" type={icon} />
			</span>
			<span>{children}</span>
		</Link>
	);
};
