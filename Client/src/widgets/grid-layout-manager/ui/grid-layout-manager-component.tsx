import { motion } from "motion/react";

import { RenderGridLayoutManagerComponent } from "./render-grid-layout-manager-component";

import { useEditMode } from "../model/selectors";

import type { DashboardWidget as DashboardWidgetType } from "../model/types";

import { GridLayoutManagerResizeGrip } from "./grid-layout-manager-resize-grip";

import { useWidgetDrag } from "../lib/hooks/use-widget-drag";

import { gridToColumnStyle } from "@widgets/grid-layout-manager/lib/utils/grid-to-column-style";
import { gridToRowStyle } from "@widgets/grid-layout-manager/lib/utils/grid-to-row-style";
import { useWidgetResize } from "../lib/hooks/use-widget-resize";

interface Props {
	widget: DashboardWidgetType;

	onPreviewChange: (widget: DashboardWidgetType | null) => void;
}

export function GridLayoutManagerComponent({ widget, onPreviewChange }: Props) {
	const editMode = useEditMode();

	const drag = useWidgetDrag({
		widget,
		onPreviewChange
	});

	const resize = useWidgetResize({
		widget,
		onPreviewChange
	});

	return (
		<motion.section
			layout={!drag.isDragging && !resize.resizing}
			animate={{
				scale: drag.isDragging || resize.resizing ? 1.015 : 1,
				x: drag.dragOffset.x,
				y: drag.dragOffset.y
			}}
			transition={{
				type: "spring",
				stiffness: 420,
				damping: 36,
				mass: 0.7
			}}
			onPointerDown={editMode ? drag.onPointerDown : undefined}
			className={[
				"relative",
				"overflow-hidden",
				"rounded-xl",
				"bg-slate-900",
				"border",
				"border-(--white-pallete-10)",
				"shadow-[0_0.75rem_2rem_0_rgba(0,0,0,0.2)]",
				"z-20",
				editMode ? "cursor-grab touch-none" : "",
				drag.isDragging ? "z-50 cursor-grabbing border-(--daybreak-blue-400) opacity-70" : "",
				resize.resizing ? "z-50 border-(--daybreak-blue-400)" : ""
			].join(" ")}
			style={{
				gridColumn: gridToColumnStyle(widget.x, widget.w),

				gridRow: gridToRowStyle(widget.y, widget.h)
			}}
		>
			<RenderGridLayoutManagerComponent type={widget.type} props={widget.props} />

			{editMode && (
				<>
					<GridLayoutManagerResizeGrip direction="n" onPointerDown={resize.onResizeStart} />
					<GridLayoutManagerResizeGrip direction="s" onPointerDown={resize.onResizeStart} />
					<GridLayoutManagerResizeGrip direction="e" onPointerDown={resize.onResizeStart} />
					<GridLayoutManagerResizeGrip direction="w" onPointerDown={resize.onResizeStart} />
					<GridLayoutManagerResizeGrip direction="ne" onPointerDown={resize.onResizeStart} />
					<GridLayoutManagerResizeGrip direction="nw" onPointerDown={resize.onResizeStart} />
					<GridLayoutManagerResizeGrip direction="se" onPointerDown={resize.onResizeStart} />
					<GridLayoutManagerResizeGrip direction="sw" onPointerDown={resize.onResizeStart} />
				</>
			)}
		</motion.section>
	);
}
