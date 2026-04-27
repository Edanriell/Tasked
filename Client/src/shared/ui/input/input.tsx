import type { ComponentPropsWithoutRef, FC } from "react";
import { useId } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & {
	label: string;
	name: string;
	placeholder?: string;
};

export const Input: FC<InputProps> = ({ label, name, placeholder = "Please write data", ...props }) => {
	const inputId = useId();

	return (
		<div className="flex flex-col gap-y-[0.5rem]">
			<label
				className="font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[133%] tracking-[0.01em] text-(--neutrals-3) capitalize"
				htmlFor={inputId}
			>
				{label}
			</label>
			<input
				className="border-[0.031rem] border-solid border-(--white-pallete-10) rounded-[0.625rem] px-[1rem] py-[0.75rem] bg-(--geek-blue-primary-opacity-150) font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[133%] tracking-[0.01em] text-(--white-pallete-100) placeholder:text-(--neutrals-3)"
				id={inputId}
				name={name}
				placeholder={placeholder}
				{...props}
			/>
		</div>
	);
};
