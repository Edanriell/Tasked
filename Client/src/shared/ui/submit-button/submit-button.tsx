"use client";

import { motion } from "motion/react";
import type { FC, ReactElement } from "react";
import { useFormStatus } from "react-dom";

import type { ButtonVariants } from "@shared/ui";
import { Button, Spinner } from "@shared/ui";

type SubmitButtonProps = {
	children: ReactElement | string;
	variant?: ButtonVariants;
	classes?: string;
};

export const SubmitButton: FC<SubmitButtonProps> = ({ variant = "primary", children, classes }) => {
	const { pending } = useFormStatus();

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
			<motion.span className="relative flex justify-center items-center gap-x-[0.6rem]">
				{children}
				{pending && <Spinner size={14} {...spinnerColors} />}
			</motion.span>
		</Button>
	);
};
