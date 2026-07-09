"use client";

import { clsx } from "clsx";
import type { HTMLMotionProps, Variants } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type ValidationErrorMessageProps = HTMLMotionProps<"small"> & {
	message?: string | null;
	validationId?: string;
	className?: string;
};

type ValidationErrorMessageContentProps = Omit<ValidationErrorMessageProps, "message"> & {
	message: string;
};

const VALIDATION_ERROR_MESSAGE_ANIMATION_VARIANTS: Variants = {
	initial: {
		opacity: 0,
		x: 12
	},
	visible: {
		opacity: 1,
		x: 0
	},
	shake: {
		opacity: 1,
		x: [0, -8, 8, -6, 6, 0],
		transition: {
			type: "tween",
			ease: "easeInOut"
		}
	},
	exit: {
		opacity: 0,
		x: 12
	}
};

const ValidationErrorMessageContent = ({
	message,
	validationId,
	className,
	...props
}: Readonly<ValidationErrorMessageContentProps>) => {
	const lastValidationIdRef = useRef<string | null>(null);
	const [shouldShake, setShouldShake] = useState(false);

	useEffect(() => {
		if (!validationId) return;

		if (lastValidationIdRef.current) {
			setShouldShake(true);
			lastValidationIdRef.current = validationId;

			const timeout = setTimeout(() => {
				setShouldShake(false);
			}, 250);

			return () => clearTimeout(timeout);
		}

		lastValidationIdRef.current = validationId;
	}, [validationId]);

	useEffect(() => {
		return () => {
			lastValidationIdRef.current = null;
		};
	}, []);

	return (
		<motion.small
			variants={VALIDATION_ERROR_MESSAGE_ANIMATION_VARIANTS}
			initial="initial"
			animate={shouldShake ? "shake" : "visible"}
			exit="exit"
			className={clsx(
				"block relative z-20 font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[1rem] tracking-[0.01em] text-(--accent-color-dengerous-1)",
				className
			)}
			{...props}
		>
			{message}
		</motion.small>
	);
};

export const ValidationErrorMessage = ({ message, ...props }: Readonly<ValidationErrorMessageProps>) => {
	return (
		<AnimatePresence>{message && <ValidationErrorMessageContent message={message} {...props} />}</AnimatePresence>
	);
};
