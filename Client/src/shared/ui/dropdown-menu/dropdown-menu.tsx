"use client";

import { clsx } from "clsx";
import { AnimatePresence, motion, type Variants } from "motion/react";
import type { ComponentPropsWithoutRef, KeyboardEvent } from "react";
import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { ICON, Icon } from "../icon";

// TODO
// MAKE SHADCN LIKE with CompositionPattern
// https://ui.shadcn.com/docs/components/base/dropdown-menu
// Temporary solution

export type DropdownMenuOption = {
	label: string;
	value: string;
	disabled?: boolean;
};

type DropdownMenuPosition = {
	left: number;
	top: number;
	width: number;
};

type DropdownMenuProps = Omit<
	ComponentPropsWithoutRef<"button">,
	"children" | "defaultValue" | "onChange" | "value"
> & {
	label: string;
	name: string;
	options: DropdownMenuOption[];
	placeholder?: string;
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
	className?: string;
	contentClassName?: string;
	triggerClassName?: string;
};

const DROPDOWN_MENU_CONTENT_ANIMATION_VARIANTS: Variants = {
	initial: {
		opacity: 0,
		scale: 0.98,
		y: -4
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0
	},
	exit: {
		opacity: 0,
		scale: 0.98,
		y: -4
	}
};

const getNextEnabledIndex = (options: DropdownMenuOption[], startIndex: number, direction: 1 | -1) => {
	if (!options.length) return -1;

	for (let step = 0; step < options.length; step += 1) {
		const optionIndex = (startIndex + step * direction + options.length) % options.length;

		if (!options[optionIndex]?.disabled) {
			return optionIndex;
		}
	}

	return -1;
};

export const DropdownMenu = ({
	label,
	name,
	options,
	placeholder = "Select option",
	value,
	defaultValue,
	onValueChange,
	className,
	contentClassName,
	triggerClassName,
	disabled,
	id,
	...props
}: Readonly<DropdownMenuProps>) => {
	const generatedId = useId();
	const triggerId = id ?? generatedId;
	const contentId = `${triggerId}-content`;
	const isControlled = value !== undefined;

	const [open, setOpen] = useState(false);
	const [uncontrolledValue, setUncontrolledValue] = useState(
		defaultValue ?? options.find((option) => !option.disabled)?.value ?? ""
	);
	const [activeIndex, setActiveIndex] = useState(-1);
	const [position, setPosition] = useState<DropdownMenuPosition | null>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const selectedValue = isControlled ? value : uncontrolledValue;
	const selectedOption = useMemo(
		() => options.find((option) => option.value === selectedValue),
		[options, selectedValue]
	);

	const updatePosition = useCallback(() => {
		const triggerElement = triggerRef.current;

		if (!triggerElement) return;

		const triggerRect = triggerElement.getBoundingClientRect();

		setPosition({
			left: triggerRect.left,
			top: triggerRect.bottom + 4,
			width: triggerRect.width
		});
	}, []);

	const selectOption = useCallback(
		(option: DropdownMenuOption) => {
			if (option.disabled) return;

			if (!isControlled) {
				setUncontrolledValue(option.value);
			}

			onValueChange?.(option.value);
			setOpen(false);
			triggerRef.current?.focus();
		},
		[isControlled, onValueChange]
	);

	const openMenu = useCallback(() => {
		if (disabled) return;

		const selectedIndex = options.findIndex((option) => option.value === selectedValue);
		setActiveIndex(getNextEnabledIndex(options, selectedIndex >= 0 ? selectedIndex : 0, 1));
		updatePosition();
		setOpen(true);
	}, [disabled, options, selectedValue, updatePosition]);

	const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
		if (disabled) return;

		if (event.key === "Escape") {
			setOpen(false);
			return;
		}

		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();

			if (open && activeIndex >= 0 && options[activeIndex]) {
				selectOption(options[activeIndex]);
				return;
			}

			openMenu();
			return;
		}

		if (event.key === "ArrowDown") {
			event.preventDefault();

			if (!open) {
				openMenu();
				return;
			}

			setActiveIndex((currentIndex) => getNextEnabledIndex(options, currentIndex + 1, 1));
			return;
		}

		if (event.key === "ArrowUp") {
			event.preventDefault();

			if (!open) {
				openMenu();
				return;
			}

			setActiveIndex((currentIndex) => getNextEnabledIndex(options, currentIndex - 1, -1));
			return;
		}

		if (event.key === "Home") {
			event.preventDefault();
			setActiveIndex(getNextEnabledIndex(options, 0, 1));
			return;
		}

		if (event.key === "End") {
			event.preventDefault();
			setActiveIndex(getNextEnabledIndex(options, options.length - 1, -1));
		}
	};

	useLayoutEffect(() => {
		if (!open) return;

		updatePosition();
		window.addEventListener("resize", updatePosition);
		window.addEventListener("scroll", updatePosition, true);

		return () => {
			window.removeEventListener("resize", updatePosition);
			window.removeEventListener("scroll", updatePosition, true);
		};
	}, [open, updatePosition]);

	useEffect(() => {
		if (!open) return;

		const handlePointerDown = (event: PointerEvent) => {
			const target = event.target;

			if (!(target instanceof Node)) return;

			if (triggerRef.current?.contains(target) || contentRef.current?.contains(target)) return;

			setOpen(false);
		};

		document.addEventListener("pointerdown", handlePointerDown);

		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
		};
	}, [open]);

	const content =
		position && typeof document !== "undefined"
			? createPortal(
					<AnimatePresence>
						{open && (
							<motion.div
								ref={contentRef}
								variants={DROPDOWN_MENU_CONTENT_ANIMATION_VARIANTS}
								initial="initial"
								animate="visible"
								exit="exit"
								transition={{ duration: 0.16, ease: "easeOut" }}
								className={clsx(
									"fixed z-[100] max-h-[14rem] overflow-y-auto rounded-[0.625rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-200) p-[0.25rem] shadow-[0_1rem_2rem_rgba(0,0,0,0.28)] backdrop-blur-[2rem]",
									contentClassName
								)}
								style={{
									left: position.left,
									top: position.top,
									width: position.width
								}}
								id={contentId}
								role="listbox"
							>
								{options.map((option, optionIndex) => {
									const selected = option.value === selectedValue;
									const active = optionIndex === activeIndex;

									return (
										<button
											key={option.value}
											id={`${contentId}-${option.value}`}
											className={clsx(
												"flex w-full cursor-pointer items-center justify-between rounded-[0.5rem] px-[0.5rem] pt-[0.438rem] pb-[0.563rem] text-left font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[133%] tracking-[0.01em] text-(--white-pallete-100) transition-[background-color,color] duration-150 ease-out focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40",
												active && "bg-(--geek-blue-primary-opacity-300)",
												selected && "text-(--daybreak-blue-200)",
												!selected && !active && "hover:bg-(--geek-blue-primary-opacity-150)"
											)}
											type="button"
											role="option"
											aria-selected={selected}
											disabled={option.disabled}
											onMouseEnter={() => setActiveIndex(optionIndex)}
											onClick={() => selectOption(option)}
										>
											<span className="truncate">{option.label}</span>
											{selected && (
												<span className="h-[0.375rem] w-[0.375rem] rounded-full bg-(--daybreak-blue-200)" />
											)}
										</button>
									);
								})}
							</motion.div>
						)}
					</AnimatePresence>,
					document.body
				)
			: null;

	return (
		<div className={clsx("flex flex-col gap-y-[0.25rem]", className)}>
			<label
				className="font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[133%] tracking-[0.01em] text-(--neutrals-3)"
				htmlFor={triggerId}
			>
				{label}
			</label>
			<input readOnly type="hidden" name={name} value={selectedValue ?? ""} />
			<button
				ref={triggerRef}
				className={clsx(
					"flex w-full cursor-pointer items-center justify-between gap-x-[0.5rem] border-[0.031rem] border-solid border-(--white-pallete-10) rounded-[0.625rem] bg-(--geek-blue-primary-opacity-100) px-[0.5rem] pt-[0.438rem] pb-[0.563rem] text-left font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[133%] tracking-[0.01em] text-(--white-pallete-100) transition-[border-color,background-color,box-shadow,color] duration-200 ease-out hover:border-(--white-pallete-20) hover:bg-(--geek-blue-primary-opacity-200) focus-visible:outline-none focus-visible:border-(--geek-blue-4) focus-visible:bg-(--geek-blue-primary-opacity-200) focus-visible:shadow-[0_0_0_0.125rem_var(--daybreak-blue-200)] disabled:cursor-not-allowed disabled:opacity-60",
					triggerClassName
				)}
				type="button"
				id={triggerId}
				aria-controls={contentId}
				aria-expanded={open}
				aria-haspopup="listbox"
				aria-activedescendant={
					open && activeIndex >= 0 ? `${contentId}-${options[activeIndex]?.value}` : undefined
				}
				disabled={disabled}
				onClick={() => (open ? setOpen(false) : openMenu())}
				onKeyDown={handleKeyDown}
				{...props}
			>
				<span className={clsx("truncate", !selectedOption && "text-(--neutrals-3)")}>
					{selectedOption?.label ?? placeholder}
				</span>
				<motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.16, ease: "easeOut" }}>
					<Icon type={ICON.Chevron} size={16} className="text-[#95ACCB]" />
				</motion.span>
			</button>
			{content}
		</div>
	);
};
