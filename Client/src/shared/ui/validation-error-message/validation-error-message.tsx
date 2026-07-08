"use client";

import { clsx } from "clsx";
import type { HTMLMotionProps } from "motion/react";
import { AnimatePresence, motion } from "motion/react";

type ValidationErrorMessageProps = HTMLMotionProps<"small"> & {
	message?: string | null;
	className?: string;
};

export const ValidationErrorMessage = ({ message, className, ...props }: Readonly<ValidationErrorMessageProps>) => {
	return (
		<AnimatePresence>
			{message && (
				<motion.small
					initial={{ opacity: 0, x: 12 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 12 }}
					className={clsx(
						"block relative z-20 font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[1rem] tracking-[0.01em] text-(--accent-color-dengerous-1)",
						className
					)}
					{...props}
				>
					{message}
				</motion.small>
			)}
		</AnimatePresence>
	);
};
