import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useGridContainer } from "./use-grid-container";

import { useDashboardLayoutStore } from "../../model/store";
import { type DashboardWidget } from "../../model/types";

import { clamp } from "../utils/clamp";
import { clampWidgetPosition } from "../utils/clamp-widget-position";
import { pxToColumns } from "../utils/px-to-columns";
import { pxToRows } from "../utils/px-to-rows";

type UseWidgetDragParameters = {
	widget: DashboardWidget;
	onPreviewChange: (widget: DashboardWidget | null) => void;
};

export function useWidgetDrag({ widget, onPreviewChange }: UseWidgetDragParameters) {
	const { columns, rows, columnWidth, rowHeight, columnGap, rowGap } = useGridContainer();

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
					...clampWidgetPosition(
						{
							x: widget.x + deltaCols,
							y: widget.y + deltaRows,
							w: widget.w,
							h: widget.h
						},
						{ columns, rows }
					)
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
				const committedPosition = committed?.widget ?? {
					...widget,
					...originPosition
				};
				const columnUnit = columnWidth + columnGap;
				const rowUnit = rowHeight + rowGap;
				const rawOffset = {
					x: deltaX - (committedPosition.x - originPosition.x) * columnUnit,
					y: deltaY - (committedPosition.y - originPosition.y) * rowUnit
				};

				previewRef.current = preview;
				onPreviewChange(preview);
				setDragOffset({
					x: clamp(
						rawOffset.x,
						-committedPosition.x * columnUnit,
						(columns - committedPosition.w - committedPosition.x) * columnUnit
					),
					y: clamp(
						rawOffset.y,
						-committedPosition.y * rowUnit,
						(rows - committedPosition.h - committedPosition.y) * rowUnit
					)
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
		[columnGap, columnWidth, columns, moveDraftWidget, onPreviewChange, rowGap, rowHeight, rows, widget]
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
