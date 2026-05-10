"use client";

import { motion } from "motion/react";
import { ReactElement } from "react";
import { useFormStatus } from "react-dom";

import type { ButtonVariants } from "@shared/ui";
import { Button, Spinner } from "@shared/ui";
import { clsx } from "clsx";

type SubmitButtonProps = {
	children: ReactElement | string;
	variant?: ButtonVariants;
	classes?: string;
	spinnerClasses?: string;
	childrenDisplayedWhenPending?: boolean;
};

export const SubmitButton = ({
	variant = "primary",
	children,
	classes,
	spinnerClasses,
	childrenDisplayedWhenPending = true
}: Readonly<SubmitButtonProps>) => {
	const { pending } = useFormStatus();

	const displayChildren = !pending || childrenDisplayedWhenPending;

	const spinnerColors =
		variant === "secondary"
			? {
					backgroundColor: "var(--white-pallete-10)",
					trackColor: "var(--white-pallete-20)",
					activeColor: "var(--white-pallete-90)"
				}
			: {
					backgroundColor: "var(--white-pallete-10)",
					trackColor: "var(--white-pallete-20)",
					activeColor: "var(--white-pallete-100)"
				};

	return (
		<Button disabled={pending} aria-disabled={pending} variant={variant} classes={classes} type="submit">
			<motion.span className="relative">
				{displayChildren && children}
				{pending && (
					<Spinner
						className={clsx("inline-block! ml-[4px]", { "ml-[unset]!": !displayChildren }, spinnerClasses)}
						size={24}
						{...spinnerColors}
					/>
				)}
			</motion.span>
		</Button>
	);
};
