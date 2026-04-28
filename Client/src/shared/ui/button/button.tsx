import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, FC, ReactElement } from "react";

export type ButtonVariants = "primary" | "secondary";

type ButtonProps = Omit<ComponentPropsWithoutRef<"button">, "className"> & {
	children: ReactElement | string;
	variant?: ButtonVariants;
	classes?: string;
};

export const Button: FC<ButtonProps> = ({ variant = "primary", children, classes, ...props }) => {
	return (
		<button
			className={clsx(
				"cursor-pointer rounded-[0.75rem] py-[0.75rem] px-[1.5rem] font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[1rem] tracking-[0.01em] text-(--white-pallete-100) capitalize transition-[background-color,border-color,box-shadow,transform,color] duration-200 ease-out focus-visible:outline-none focus-visible:shadow-[0_0_0_0.125rem_var(--daybreak-blue-200)] active:translate-y-[0.031rem] disabled:cursor-not-allowed disabled:opacity-60 disabled:active:translate-y-0",
				{
					"shadow-[0_0_1.5rem_0_var(--geek-blue-primary-opacity-200)] bg-(--geek-blue-7) hover:bg-(--geek-blue-6) active:bg-(--geek-blue-8) focus-visible:bg-(--geek-blue-6)":
						variant === "primary"
				},
				{
					"border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150) hover:border-(--white-pallete-20) hover:bg-(--geek-blue-primary-opacity-200) active:bg-(--geek-blue-primary-opacity-300) focus-visible:border-(--geek-blue-4) focus-visible:bg-(--geek-blue-primary-opacity-200)":
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
