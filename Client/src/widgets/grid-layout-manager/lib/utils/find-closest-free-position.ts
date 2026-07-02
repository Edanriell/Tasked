import type { GridLayoutBounds } from "../../config/manager";
import { DashboardWidget, WidgetPosition } from "../../model/types";

import { canOccupyArea } from "../utils/can-occupy-area";
import { createOccupancyMatrix } from "../utils/create-occupancy-matrix";

export const findClosestFreePosition = (
	placedWidgets: DashboardWidget[],
	widget: DashboardWidget,
	preferredPosition: WidgetPosition,
	bounds: GridLayoutBounds
) => {
	const matrix = createOccupancyMatrix(placedWidgets, bounds);
	let bestPosition: WidgetPosition | null = null;
	let bestScore = Number.POSITIVE_INFINITY;
	const rowPenalty = bounds.columns * 2;

	for (let row = 0; row <= bounds.rows - widget.h; row++) {
		for (let col = 0; col <= bounds.columns - widget.w; col++) {
			if (!canOccupyArea(matrix, col, row, widget.w, widget.h, bounds)) {
				continue;
			}

			const score = Math.abs(row - preferredPosition.y) * rowPenalty + Math.abs(col - preferredPosition.x);

			if (score < bestScore) {
				bestScore = score;
				bestPosition = {
					x: col,
					y: row
				};
			}
		}
	}

	return bestPosition;
};
