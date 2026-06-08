import { useCallback, useState } from "react";

import { useGridContainer } from "./use-grid-container";

import { useDashboardLayoutStore } from "../../model/store";

import { pxToColumns } from "@widgets/grid-layout-manager/lib/utils/px-to-columns";
import { pxToRows } from "@widgets/grid-layout-manager/lib/utils/px-to-rows";
import { resolveResize } from "@widgets/grid-layout-manager/lib/utils/resolve-resize";
import type { DashboardWidget, ResizeDirection } from "../../model/types";

interface Params {
	widget: DashboardWidget;

	onPreviewChange: (widget: DashboardWidget | null) => void;
}

export function useWidgetResize({ widget, onPreviewChange }: Params) {
	const { columnWidth, rowHeight, columnGap, rowGap } = useGridContainer();

	const updateDraftWidget = useDashboardLayoutStore((state) => state.updateDraftWidget);

	const [resizing, setResizing] = useState(false);

	// RESIZE START
	const onResizeStart = useCallback(
		(event: React.PointerEvent, direction: ResizeDirection) => {
			if (!columnWidth || !rowHeight) return;
			event.preventDefault();
			event.stopPropagation();

			setResizing(true);
			onPreviewChange(widget);

			const startX = event.clientX;
			const startY = event.clientY;

			const move = (moveEvent: PointerEvent) => {
				const deltaCols = pxToColumns(moveEvent.clientX - startX, columnWidth, columnGap);

				const deltaRows = pxToRows(moveEvent.clientY - startY, rowHeight, rowGap);

				const next = resolveResize({
					widget,
					direction,
					deltaCols,
					deltaRows
				});

				onPreviewChange(next);
				updateDraftWidget(widget.id, next);
			};

			const up = () => {
				setResizing(false);
				onPreviewChange(null);

				window.removeEventListener("pointermove", move);

				window.removeEventListener("pointerup", up);
			};

			window.addEventListener("pointermove", move);

			window.addEventListener("pointerup", up);
		},
		[columnGap, columnWidth, onPreviewChange, rowGap, rowHeight, widget, updateDraftWidget]
	);

	return {
		resizing,
		onResizeStart
	};
}
