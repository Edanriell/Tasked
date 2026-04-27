"use client";

import { clsx } from "clsx";
import type { FC, ReactElement } from "react";
import { useFormStatus } from "react-dom";

type SubmitButtonVariants = "primary" | "secondary";

type SubmitButtonProps = {
	children: ReactElement | string;
	variant?: SubmitButtonVariants;
	classes?: string;
};

export const SubmitButton: FC<SubmitButtonProps> = ({ variant = "primary", children, classes }) => {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			aria-disabled={pending}
			className={clsx(
				"cursor-pointer rounded-[0.75rem] py-[0.75rem] px-[1.5rem] font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em] text-(--white-pallete-100) capitalize",
				{
					"shadow-[0_0_1.5rem_0_var(--geek-blue-primary-opacity-200)] bg-(--geek-blue-7)":
						variant === "primary"
				},
				{
					"border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150)":
						variant === "secondary"
				},
				classes
			)}
		>
			{children}
		</button>
	);
};
