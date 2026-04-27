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
				"cursor-pointer rounded-[12px] py-[12px] px-[24px] font-(family-name:--font-barlow) font-bold text-[14px] leading-[114%] tracking-[0.01em] text-(--white-pallete-100) capitalize",
				{
					"shadow-[0_0_24px_0_var(--geek-blue-primary-opacity-200)] bg-(--geek-blue-7)": variant === "primary"
				},
				{
					"border-[0.50px] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150)":
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
