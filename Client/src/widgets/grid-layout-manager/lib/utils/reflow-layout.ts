import { DashboardWidget, WidgetPosition } from "../../model/types";

import { canPlaceWidget } from "../utils/can-place-widget";
import { findClosestFreePosition } from "../utils/find-closest-free-position";
import { getSignificantOverlaps } from "../utils/get-significant-overlaps";

export const reflowLayout = (
	layout: DashboardWidget[],
	candidate: DashboardWidget,
	originPosition: WidgetPosition
): DashboardWidget[] | null => {
	const placedWidgets = [candidate];
	const displacedWidgetIds = new Set(getSignificantOverlaps(layout, candidate).map(({ widget }) => widget.id));
	const remainingWidgets = layout
		.filter((widget) => widget.id !== candidate.id)
		.sort((a, b) => a.y - b.y || a.x - b.x);

	for (const widget of remainingWidgets) {
		if (canPlaceWidget(placedWidgets, widget)) {
			placedWidgets.push(widget);
			continue;
		}

		const preferredPosition = displacedWidgetIds.has(widget.id) ? originPosition : widget;
		const position = findClosestFreePosition(placedWidgets, widget, {
			x: preferredPosition.x,
			y: preferredPosition.y
		});

		if (!position) {
			return null;
		}

		placedWidgets.push({
			...widget,
			...position
		});
	}

	return placedWidgets;
};
