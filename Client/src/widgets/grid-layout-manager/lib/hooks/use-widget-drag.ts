import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useGridContainer } from "./use-grid-container";

import { clampWidgetPosition } from "@widgets/grid-layout-manager/lib/utils/clamp-widget-position";
import { pxToColumns } from "@widgets/grid-layout-manager/lib/utils/px-to-columns";
import { pxToRows } from "@widgets/grid-layout-manager/lib/utils/px-to-rows";
import { useDashboardLayoutStore } from "../../model/store";
import type { DashboardWidget } from "../../model/types";

interface Params {
	widget: DashboardWidget;

	onPreviewChange: (widget: DashboardWidget | null) => void;
}

export function useWidgetDrag({ widget, onPreviewChange }: Params) {
	const { columnWidth, rowHeight, columnGap, rowGap } = useGridContainer();

	const moveDraftWidget = useDashboardLayoutStore((state) => state.moveDraftWidget);

	const previewRef = useRef(widget);

	const [isDragging, setDragging] = useState(false);
	const [dragOffset, setDragOffset] = useState({
		x: 0,
		y: 0
	});

	useEffect(() => {
		if (!isDragging) {
			previewRef.current = widget;
		}
	}, [isDragging, widget]);

	const onPointerDown = useCallback(
		(event: React.PointerEvent) => {
			if (!columnWidth || !rowHeight) return;

			event.preventDefault();

			setDragging(true);
			onPreviewChange(widget);

			const startX = event.clientX;
			const startY = event.clientY;
			const originPosition = {
				x: widget.x,
				y: widget.y
			};
			const sourceLayout =
				useDashboardLayoutStore.getState().draftLayout ?? useDashboardLayoutStore.getState().layout;

			const move = (moveEvent: PointerEvent) => {
				const deltaX = moveEvent.clientX - startX;
				const deltaY = moveEvent.clientY - startY;
				const deltaCols = pxToColumns(deltaX, columnWidth, columnGap);

				const deltaRows = pxToRows(deltaY, rowHeight, rowGap);

				const next = {
					...widget,
					...clampWidgetPosition({
						x: widget.x + deltaCols,
						y: widget.y + deltaRows,
						w: widget.w,
						h: widget.h
					})
				};

				const committed = moveDraftWidget(
					widget.id,
					{
						x: next.x,
						y: next.y
					},
					originPosition,
					sourceLayout
				);

				const preview = committed?.widget ?? next;
				const committedPosition = committed?.widget ?? originPosition;

				previewRef.current = preview;
				onPreviewChange(preview);
				setDragOffset({
					x: deltaX - (committedPosition.x - originPosition.x) * (columnWidth + columnGap),
					y: deltaY - (committedPosition.y - originPosition.y) * (rowHeight + rowGap)
				});
			};

			const up = () => {
				setDragging(false);
				setDragOffset({
					x: 0,
					y: 0
				});

				onPreviewChange(null);

				window.removeEventListener("pointermove", move);
				window.removeEventListener("pointerup", up);
			};

			window.addEventListener("pointermove", move);
			window.addEventListener("pointerup", up);
		},
		[columnGap, columnWidth, moveDraftWidget, onPreviewChange, rowGap, rowHeight, widget]
	);

	return useMemo(
		() => ({
			isDragging,
			dragOffset,

			onPointerDown
		}),
		[dragOffset, isDragging, onPointerDown]
	);
}
