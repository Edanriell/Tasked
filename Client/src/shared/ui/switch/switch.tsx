"use client";

import { motion } from "motion/react";
import { useId, useState } from "react";

type SwitchProps = {
	label: string;
	name: string;
	value: string;
};

export const Switch = ({ label, name, value }: Readonly<SwitchProps>) => {
	const switchId = useId();

	const [checked, setChecked] = useState<boolean>(false);

	const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<label className="relative flex cursor-pointer items-center gap-x-[16px]" htmlFor={switchId}>
			<input
				checked={checked}
				className="peer sr-only"
				id={switchId}
				type="checkbox"
				name={name}
				value={value}
				onChange={handleSwitchChange}
			/>
			<motion.span
				aria-hidden="true"
				animate={{ backgroundColor: checked ? "var(--geek-blue-5)" : "var(--neutrals-1)" }}
				className="block p-[2px] w-[48px] h-[24px] rounded-[20px] transition-shadow peer-focus-visible:shadow-focus-blue"
			>
				<motion.span
					animate={{ x: checked ? 24 : 0, background: checked ? "#151515" : "var(--white-pallete-100)" }}
					transition={{ type: "spring", stiffness: 500, damping: 35 }}
					className="block rounded-full w-[20px] h-[20px] shadow-[0_2px_1px_0_rgba(0,0,0,0.06),0_2px_6px_0_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.04)]"
				></motion.span>
			</motion.span>
			<span className="font-(family-name:--font-barlow) font-semibold text-[14px] leading-[129%] tracking-[0.01em] text-(--white-pallete-100)">
				{label}
			</span>
		</label>
	);
};
