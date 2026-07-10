"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { ROUTES } from "@shared/config";

export const MAIN_NAVIGATION_ITEMS = [
	{ label: "Overview", href: ROUTES.Overview },
	{ label: "Features", href: ROUTES.Features },
	{ label: "Pricing", href: ROUTES.Pricing },
	{ label: "About", href: ROUTES.About }
] as const;

const NAVIGATION_ITEM_HEIGHT = 16 as const;

const NAVIGATION_WRAPPER_VARIANTS = {
	tapped: { scale: 0.9 }
};

const NAVIGATION_FIRST_LABEL_VARIANTS = {
	hovered: { y: -NAVIGATION_ITEM_HEIGHT, opacity: 0, scale: 0.96 }
};

const NAVIGATION_SECOND_LABEL_VARIANTS = {
	hovered: { y: -NAVIGATION_ITEM_HEIGHT, opacity: 1, scale: 1 }
};

// TODO
// Fix aria labels

export const MainNavigation = () => {
	return (
		<nav className="max-md:hidden" aria-label="Main navigation">
			<ul className="flex items-center gap-x-[3.236rem] font-(family-name:--font-barlow) text-(--white-pallete-100) font-bold text-[0.875rem] leading-[1rem] tracking-[0.01em]">
				{MAIN_NAVIGATION_ITEMS.map(({ href, label }, index) => (
					<motion.li
						key={index}
						whileTap="tapped"
						whileHover="hovered"
						initial={false}
						variants={NAVIGATION_WRAPPER_VARIANTS}
					>
						<Link className="flex flex-col" style={{ height: NAVIGATION_ITEM_HEIGHT }} href={href}>
							<motion.span variants={NAVIGATION_FIRST_LABEL_VARIANTS}>{label}</motion.span>
							<motion.span
								initial={{ opacity: 0, scale: 0.96 }}
								variants={NAVIGATION_SECOND_LABEL_VARIANTS}
							>
								{label}
							</motion.span>
						</Link>
					</motion.li>
				))}
			</ul>
		</nav>
	);
};
