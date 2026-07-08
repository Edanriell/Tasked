import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, CSSProperties } from "react";

type SkeletonVariant = "default" | "text" | "avatar" | "button" | "card";
type SkeletonTheme = "dark" | "light";

type SkeletonProps = Omit<ComponentPropsWithoutRef<"div">, "className" | "children"> & {
	width?: number | string;
	height?: number | string;
	radius?: number | string;
	variant?: SkeletonVariant;
	theme?: SkeletonTheme;
	animated?: boolean;
	classes?: string;
	className?: string;
};

const getSizeValue = (value?: number | string) => {
	if (typeof value === "number") return `${value}px`;

	return value;
};

export const Skeleton = ({
	width,
	height,
	radius,
	variant = "default",
	theme = "dark",
	animated = true,
	classes,
	className,
	style,
	...props
}: Readonly<SkeletonProps>) => {
	const skeletonStyle = {
		...style,
		width: getSizeValue(width) ?? style?.width,
		height: getSizeValue(height) ?? style?.height,
		borderRadius: getSizeValue(radius) ?? style?.borderRadius
	} as CSSProperties;

	return (
		<div
			className={clsx(
				"relative block shrink-0 overflow-hidden border-[0.031rem] border-solid bg-clip-padding",
				"transition-[background-color,border-color,box-shadow,opacity] duration-300 ease-out",
				{
					"w-full": !width,
					"h-[1rem] rounded-[0.375rem]": variant === "text" && !height,
					"w-[2.5rem] h-[2.5rem] rounded-full": variant === "avatar",
					"h-[2.5rem] rounded-[0.75rem]": variant === "button" && !height,
					"min-h-[8rem] rounded-[1rem]": variant === "card",
					"rounded-[0.625rem]": variant === "default" && !radius,
					"border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150) shadow-[inset_0_0.063rem_0_var(--white-pallete-10),0_0_1.5rem_var(--geek-blue-primary-opacity-50)]":
						theme === "dark",
					"border-(--geek-blue-primary-opacity-100) bg-(--neutrals-6) shadow-[inset_0_0.063rem_0_var(--white-pallete-90),0_0_1.5rem_var(--geek-blue-primary-opacity-50)]":
						theme === "light",
					"bg-(--geek-blue-primary-opacity-100)": variant === "card" && theme === "dark",
					"bg-(--neutrals-7)": variant === "card" && theme === "light",
					"before:pointer-events-none before:absolute before:inset-0 before:animate-[skeleton-shimmer_1.8s_cubic-bezier(0.4,0,0.2,1)_infinite] before:bg-linear-to-r before:from-transparent before:via-(--white-pallete-15) before:to-transparent":
						animated && theme === "dark",
					"before:pointer-events-none before:absolute before:inset-0 before:animate-[skeleton-shimmer_1.8s_cubic-bezier(0.4,0,0.2,1)_infinite] before:bg-linear-to-r before:from-transparent before:via-(--white-pallete-90) before:to-transparent":
						animated && theme === "light"
				},
				className
			)}
			style={skeletonStyle}
			{...props}
		/>
	);
};
