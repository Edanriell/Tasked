import type { ComponentPropsWithoutRef } from "react";
import { useId } from "react";

type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
	label: string;
	name: string;
	placeholder?: string;
};

export const Textarea = ({ label, name, placeholder = "Please write data", ...props }: Readonly<TextareaProps>) => {
	const textareaId = useId();

	return (
		<div className="flex flex-col gap-y-[4px]">
			<label
				className="font-(family-name:--font-barlow) font-medium text-[12px] leading-[133%] tracking-[0.01em] text-(--neutrals-3)"
				htmlFor={textareaId}
			>
				{label}
			</label>
			<textarea
				className="border-[0.50px] border-solid border-(--white-pallete-10) rounded-[8px] px-[8px] py-[6px] bg-(--geek-blue-primary-opacity-100) font-(family-name:--font-barlow) font-medium text-[12px] leading-[133%] tracking-[0.01em] text-(--white-pallete-100) placeholder:text-(--neutrals-3) caret-(--geek-blue-4) transition-[border-color,background-color,box-shadow,color] duration-200 ease-out hover:border-(--white-pallete-20) hover:bg-(--geek-blue-primary-opacity-200) selection:bg-(--daybreak-blue-400) selection:text-(--white-pallete-100) focus-visible:outline-none focus-visible:border-(--geek-blue-4) focus-visible:bg-(--geek-blue-primary-opacity-200) focus-visible:shadow-[0_0_0_0.125rem_var(--daybreak-blue-200)]"
				name={name}
				id={textareaId}
				placeholder={placeholder}
				{...props}
			/>
		</div>
	);
};
