import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, CSSProperties, FC } from "react";

type SkeletonVariant = "default" | "text" | "avatar" | "button" | "card";

type SkeletonProps = Omit<ComponentPropsWithoutRef<"div">, "className" | "children"> & {
	width?: number | string;
	height?: number | string;
	radius?: number | string;
	variant?: SkeletonVariant;
	animated?: boolean;
	classes?: string;
	className?: string;
};

const getSizeValue = (value?: number | string) => {
	if (typeof value === "number") return `${value}px`;

	return value;
};

export const Skeleton: FC<SkeletonProps> = ({
	width,
	height,
	radius,
	variant = "default",
	animated = true,
	classes,
	className,
	style,
	...props
}) => {
	const skeletonStyle = {
		...style,
		width: getSizeValue(width) ?? style?.width,
		height: getSizeValue(height) ?? style?.height,
		borderRadius: getSizeValue(radius) ?? style?.borderRadius
	} as CSSProperties;

	return (
		<div
			aria-hidden="true"
			className={clsx(
				"block shrink-0 overflow-hidden border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150) shadow-[inset_0_0.063rem_0_var(--white-pallete-10)]",
				{
					"w-full": !width,
					"h-[1rem] rounded-[0.375rem]": variant === "text" && !height,
					"w-[2.5rem] h-[2.5rem] rounded-full": variant === "avatar",
					"h-[2.5rem] rounded-[0.75rem]": variant === "button" && !height,
					"min-h-[8rem] rounded-[1rem] bg-(--geek-blue-primary-opacity-100)": variant === "card",
					"rounded-[0.625rem]": variant === "default" && !radius,
					"animate-pulse": animated
				},
				classes,
				className
			)}
			role="presentation"
			style={skeletonStyle}
			{...props}
		/>
	);
};
