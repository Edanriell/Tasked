import { clsx } from "clsx";
import type { CSSProperties } from "react";

type DividerProps = {
	width?: number;
	height?: number;
	classes?: string;
};

export const Divider = ({ width = 229, height = 5, classes }: Readonly<DividerProps>) => {
	return (
		<div
			className={clsx(
				"rounded-[2.5rem] w-(--divider-width) h-(--divider-height) bg-[linear-gradient(90deg,_#40f_0%,_rgba(68,0,255,0)_100%)]",
				classes
			)}
			style={
				{
					"--divider-width": `${width}px`,
					"--divider-height": `${height}px`
				} as CSSProperties
			}
		/>
	);
};
