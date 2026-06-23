import { clsx } from "clsx";
import type { ReactNode } from "react";

export const PRIORITY_BADGE_VARIANTS = {
	RichBlueGreen: "--cyan-1000",
	Heliconia: "--volcano-1000",
	NewYorkGold: "--sunrise-yellow-101",
	SunsetBlue: "--neutrals-2"
};

export type PriorityBadgeVariant = keyof typeof PRIORITY_BADGE_VARIANTS;

type BadgeProps = {
	children: ReactNode;
	variant?: PriorityBadgeVariant;
	classes?: string;
};

export const Badge = ({ children, variant, classes }: Readonly<BadgeProps>) => {
	return (
		<span
			style={{
				backgroundColor: variant ? `var(${variant})` : undefined
			}}
			className={clsx(
				"rounded-[0.375rem] font-(family-name:--font-barlow) font-bold text-[0.625rem] leading-[140%] tracking-[0.01em] uppercase",
				variant
					? `text-(--white-pallete-100) w-[3.375rem] py-[0.188rem] text-center`
					: "bg-(--geek-blue-primary-opacity-200) w-[2.875rem] px-[0.594rem] py-[0.188rem] text-(--geek-blue-4)",
				classes
			)}
		>
			{children}
		</span>
	);
};
