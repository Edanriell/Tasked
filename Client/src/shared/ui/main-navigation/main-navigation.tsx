"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FC } from "react";

import { ROUTES } from "@shared/config";

export const MAIN_NAVIGATION_ITEMS = [
	{ label: "Overview", href: ROUTES.Overview },
	{ label: "Features", href: ROUTES.Features },
	{ label: "Pricing", href: ROUTES.Pricing },
	{ label: "About", href: ROUTES.About }
] as const;

const NAVIGATION_ITEM_HEIGHT = 16 as const;

const NAVIGATION_ITEM_VARIANTS = {
	Hovered: "hovered",
	Tapped: "tapped"
} as const;

const NAVIGATION_WRAPPER_VARIANTS = {
	tapped: { scale: 0.9 }
};

const NAVIGATION_LABEL_VARIANTS = {
	hovered: { y: -NAVIGATION_ITEM_HEIGHT }
};

export const MainNavigation: FC = () => {
	return (
		<nav aria-label="Main navigation">
			<ul className="flex items-center gap-x-[3.236rem] font-(family-name:--font-barlow) text-(--white-pallete-100) font-bold text-[0.875rem] leading-[1rem] tracking-[0.01em]">
				{MAIN_NAVIGATION_ITEMS.map(({ href, label }) => (
					<motion.li
						key={href}
						whileTap={NAVIGATION_ITEM_VARIANTS.Tapped}
						whileHover={NAVIGATION_ITEM_VARIANTS.Hovered}
						initial={false}
						variants={NAVIGATION_WRAPPER_VARIANTS}
					>
						<Link
							className="flex flex-col overflow-hidden"
							style={{ height: NAVIGATION_ITEM_HEIGHT }}
							href={href}
						>
							<motion.span variants={NAVIGATION_LABEL_VARIANTS}>{label}</motion.span>
							<motion.span variants={NAVIGATION_LABEL_VARIANTS}>{label}</motion.span>
						</Link>
					</motion.li>
				))}
			</ul>
		</nav>
	);
};
