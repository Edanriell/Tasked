"use client";

import { clsx } from "clsx";
import { AnimatePresence, motion } from "motion/react";

type ValidationErrorMessageProps = {
	message?: string | null;
	classes?: string;
};

export const ValidationErrorMessage = ({ message, classes }: Readonly<ValidationErrorMessageProps>) => {
	return (
		<AnimatePresence>
			{message && (
				<motion.span
					initial={{ opacity: 0, x: 12 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 12 }}
					className={clsx(
						"block relative z-20 font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[1rem] tracking-[0.01em] text-(--accent-color-dengerous-1)",
						classes
					)}
				>
					{message}
				</motion.span>
			)}
		</AnimatePresence>
	);
};
