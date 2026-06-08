import { DashboardWidget, GRID_COLUMNS, GRID_ROWS, WidgetPosition } from "@widgets/grid-layout-manager/model/types";
import { createOccupancyMatrix } from "@widgets/grid-layout-manager/lib/utils/create-occupancy-matrix";
import { canOccupyArea } from "@widgets/grid-layout-manager/lib/utils/can-occupy-area";

export const findClosestFreePosition = (
	placedWidgets: DashboardWidget[],
	widget: DashboardWidget,
	preferredPosition: WidgetPosition
) => {
	const matrix = createOccupancyMatrix(placedWidgets);
	let bestPosition: WidgetPosition | null = null;
	let bestScore = Number.POSITIVE_INFINITY;
	const rowPenalty = GRID_COLUMNS * 2;

	for (let row = 0; row <= GRID_ROWS - widget.h; row++) {
		for (let col = 0; col <= GRID_COLUMNS - widget.w; col++) {
			if (!canOccupyArea(matrix, col, row, widget.w, widget.h)) {
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
