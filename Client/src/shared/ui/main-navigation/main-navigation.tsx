"use client";

import type { Variants } from "motion";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";

import { ROUTES } from "@shared/config";

export const MAIN_NAVIGATION_ITEMS = [
	{ label: "Overview", href: ROUTES.Overview },
	{ label: "Features", href: ROUTES.Features },
	{ label: "Pricing", href: ROUTES.Pricing },
	{ label: "About", href: ROUTES.About }
] as const;

const NAVIGATION_ITEM_HEIGHT = 16 as const;
const NAVIGATION_LETTER_DELAY = 0.015 as const;

const NAVIGATION_SPRING_TRANSITION = {
	type: "spring",
	stiffness: 420,
	damping: 30,
	mass: 0.6
} as const;

const NAVIGATION_WRAPPER_VARIANTS: Variants = {
	idle: {
		scale: 1
	},
	hover: {
		scale: 1
	},
	press: {
		scale: 0.8
	}
};

const getNavigationLetterDirection = (index: number) => (index % 2 === 0 ? 1 : -1);

const NAVIGATION_INITIAL_LETTER_VARIANTS: Variants = {
	idle: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: index * NAVIGATION_LETTER_DELAY }
	}),
	hover: (index: number) => ({
		opacity: 0,
		y: getNavigationLetterDirection(index) * NAVIGATION_ITEM_HEIGHT,
		transition: { delay: index * NAVIGATION_LETTER_DELAY }
	})
};

const NAVIGATION_SECONDARY_LETTER_VARIANTS: Variants = {
	idle: (index: number) => ({
		opacity: 0,
		y: getNavigationLetterDirection(index) * -NAVIGATION_ITEM_HEIGHT,
		transition: { delay: index * NAVIGATION_LETTER_DELAY }
	}),
	hover: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: index * NAVIGATION_LETTER_DELAY }
	})
};

type MainNavigationItemProps = {
	href: (typeof MAIN_NAVIGATION_ITEMS)[number]["href"];
	label: (typeof MAIN_NAVIGATION_ITEMS)[number]["label"];
};

const MainNavigationItem = ({ href, label }: Readonly<MainNavigationItemProps>) => {
	return (
		<MotionConfig transition={NAVIGATION_SPRING_TRANSITION}>
			<motion.li
				tabIndex={-1}
				initial="idle"
				variants={NAVIGATION_WRAPPER_VARIANTS}
				whileHover="hover"
				whileTap="press"
			>
				<Link
					aria-label={label}
					className="focus-ring block overflow-hidden"
					style={{ height: NAVIGATION_ITEM_HEIGHT }}
					href={href}
				>
					<span aria-hidden="true" className="flex overflow-hidden whitespace-pre">
						{Array.from(label).map((character, index) => (
							<span
								key={`${character}-${index}`}
								className="relative inline-block overflow-hidden"
								style={{
									height: NAVIGATION_ITEM_HEIGHT,
									lineHeight: `${NAVIGATION_ITEM_HEIGHT}px`
								}}
							>
								<motion.span
									className="block"
									custom={index}
									variants={NAVIGATION_INITIAL_LETTER_VARIANTS}
								>
									{character}
								</motion.span>
								<motion.span
									className="absolute inset-x-0 top-0 block"
									custom={index}
									variants={NAVIGATION_SECONDARY_LETTER_VARIANTS}
								>
									{character}
								</motion.span>
							</span>
						))}
					</span>
				</Link>
			</motion.li>
		</MotionConfig>
	);
};

export const MainNavigation = () => {
	return (
		<nav className="max-md:hidden" aria-label="Primary navigation">
			<ul className="flex items-center gap-x-[3.236rem] font-(family-name:--font-barlow) text-(--white-pallete-100) font-bold text-[0.875rem] leading-[1rem] tracking-[0.01em]">
				{MAIN_NAVIGATION_ITEMS.map(({ href, label }) => (
					<MainNavigationItem key={href} href={href} label={label} />
				))}
			</ul>
		</nav>
	);
};
