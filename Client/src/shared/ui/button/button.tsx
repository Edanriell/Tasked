import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, FC, ReactElement } from "react";

type ButtonVariants = "primary" | "secondary";

type ButtonProps = Omit<ComponentPropsWithoutRef<"button">, "className"> & {
	children: ReactElement | string;
	variant?: ButtonVariants;
	classes?: string;
};

export const Button: FC<ButtonProps> = ({ variant = "primary", children, classes, ...props }) => {
	return (
		<button
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
			{...props}
		>
			{children}
		</button>
	);
};
