import { motion } from "motion/react";
import type { ReactNode } from "react";

import { useWidgetDrag } from "../lib/hooks/use-widget-drag";
import { useWidgetResize } from "../lib/hooks/use-widget-resize";
import { gridToColumnStyle } from "../lib/utils/grid-to-column-style";
import { gridToRowStyle } from "../lib/utils/grid-to-row-style";
import { useEditMode } from "../model/selectors";
import type { DashboardWidget as DashboardWidgetType } from "../model/types";

import { GridLayoutManagerResizeGrip } from "./grid-layout-manager-resize-grip";

type GridLayoutManagerComponentProps = {
	widget: DashboardWidgetType;
	children: ReactNode;
	onPreviewChange: (widget: DashboardWidgetType | null) => void;
	onRemove: (id: string) => void;
};

// Todo
// Refactor clsx

export const GridLayoutManagerComponent = ({
	widget,
	children,
	onPreviewChange,
	onRemove
}: Readonly<GridLayoutManagerComponentProps>) => {
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
				"min-h-0",
				"min-w-0",
				"rounded-[1.25rem]",
				"z-20",
				editMode ? "cursor-grab touch-none" : "",
				drag.isDragging ? "z-50 cursor-grabbing opacity-70" : "",
				resize.resizing ? "z-50" : ""
			].join(" ")}
			style={{
				gridColumn: gridToColumnStyle(widget.x, widget.w),
				gridRow: gridToRowStyle(widget.y, widget.h)
			}}
		>
			{children}

			{editMode && (
				<>
					<button
						type="button"
						aria-label="Remove widget"
						className="absolute top-2 right-2 z-[65] flex h-7 w-7 items-center justify-center rounded-md border border-(--white-pallete-20) bg-black/55 font-(family-name:--font-barlow) text-[1rem] leading-none text-(--white-pallete-100) transition-colors hover:bg-black/75"
						onPointerDown={(event) => {
							event.stopPropagation();
						}}
						onClick={(event) => {
							event.stopPropagation();
							onRemove(widget.id);
						}}
					>
						x
					</button>
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
};
