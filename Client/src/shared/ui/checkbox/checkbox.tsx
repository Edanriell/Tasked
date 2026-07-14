"use client";

import { motion } from "motion/react";
import { ComponentPropsWithoutRef, useId, useState } from "react";

type CheckboxProps = ComponentPropsWithoutRef<"input"> & {
	label: string;
	name: string;
	value: string;
};

export const Checkbox = ({ label, name, value, ...props }: Readonly<CheckboxProps>) => {
	const checkboxId = useId();

	const [checked, setChecked] = useState<boolean>(false);

	const handleCheckboxCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<label htmlFor={checkboxId} className="inline-flex items-center cursor-pointer gap-2">
			<input
				id={checkboxId}
				type="checkbox"
				className="sr-only"
				checked={checked}
				onChange={handleCheckboxCheck}
				{...props}
			/>
			<motion.div
				animate={{
					backgroundColor: checked ? "var(--geek-blue-6)" : "rgba(1,0,9,.1)"
				}}
				className="flex h-4 w-4 items-center justify-center rounded border border-(--geek-blue-6)"
			>
				<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<motion.path
						d="M0.75 3.58L3.58 6.41L9.25 0.75"
						fill="none"
						stroke="white"
						strokeWidth={1.5}
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={false}
						animate={{
							pathLength: checked ? 1 : 0,
							opacity: checked ? 1 : 0
						}}
						transition={{ duration: 0.2 }}
					/>
				</svg>
			</motion.div>
			<span className="sr-only">{label}</span>
		</label>
	);
};
