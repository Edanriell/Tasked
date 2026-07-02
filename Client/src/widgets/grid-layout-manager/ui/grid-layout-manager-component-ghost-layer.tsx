import { useGridContainer } from "../lib/hooks/use-grid-container";
import { gridToColumnStyle } from "../lib/utils/grid-to-column-style";
import { gridToRowStyle } from "../lib/utils/grid-to-row-style";
import type { DashboardWidget } from "../model/types";

type GhostLayerProps = {
	widget: DashboardWidget | null;
	invalid: boolean;
};

// Todo
// Refactor clsx

export const GridLayoutManagerComponentGhostLayer = ({ widget, invalid }: Readonly<GhostLayerProps>) => {
	const { columns, rows, columnGap, rowGap } = useGridContainer();

	if (!widget) {
		return null;
	}

	return (
		<div
			className={["pointer-events-none", "absolute", "inset-0", "z-[70]", "grid"].join(" ")}
			style={{
				columnGap,
				rowGap,
				gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
				gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
			}}
		>
			<div
				className={[
					"rounded-[1.25rem]",
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
