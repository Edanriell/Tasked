import { useCallback, useState } from "react";

import { useDashboardLayoutStore } from "../../model/store";
import type { DashboardWidget, ResizeDirection } from "../../model/types";

import { pxToColumns } from "../utils/px-to-columns";
import { pxToRows } from "../utils/px-to-rows";
import { resolveResize } from "../utils/resolve-resize";

import { useGridContainer } from "./use-grid-container";

type UseWidgetResizeParameters = {
	widget: DashboardWidget;
	onPreviewChange: (widget: DashboardWidget | null) => void;
};

export function useWidgetResize({ widget, onPreviewChange }: UseWidgetResizeParameters) {
	const { columnWidth, rowHeight, columnGap, rowGap } = useGridContainer();

	const updateDraftWidget = useDashboardLayoutStore((state) => state.updateDraftWidget);

	const [resizing, setResizing] = useState(false);

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
