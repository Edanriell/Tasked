import { gridToColumnStyle } from "../lib/utils/grid-to-column-style";
import { gridToRowStyle } from "../lib/utils/grid-to-row-style";
import type { DashboardWidget } from "../model/types";

type GhostLayerProps = {
	widget: DashboardWidget | null;
	invalid: boolean;
};

export const GridLayoutManagerComponentGhostLayer = ({ widget, invalid }: Readonly<GhostLayerProps>) => {
	if (!widget) {
		return null;
	}

	return (
		<div
			className={[
				"pointer-events-none",
				"absolute",
				"inset-0",
				"z-[70]",
				"grid",
				"grid-cols-[repeat(24,minmax(0,1fr))]",
				"grid-rows-[repeat(24,minmax(0,1fr))]",
				"gap-2"
			].join(" ")}
		>
			<div
				className={[
					"rounded-xl",
					"border-2",
					"shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_0_2rem_rgba(24,144,255,0.3)]",
					invalid ? "border-red-500 bg-red-500/15" : "border-sky-400 bg-sky-400/15"
				].join(" ")}
				style={{
					gridColumn: gridToColumnStyle(widget.x, widget.w),
					gridRow: gridToRowStyle(widget.y, widget.h)
				}}
			/>
		</div>
	);
};
