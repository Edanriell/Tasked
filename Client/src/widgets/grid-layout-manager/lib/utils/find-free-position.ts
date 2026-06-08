import { canOccupyArea } from "@widgets/grid-layout-manager/lib/utils/can-occupy-area";
import { createOccupancyMatrix } from "@widgets/grid-layout-manager/lib/utils/create-occupancy-matrix";
import { DashboardWidget, GRID_COLUMNS, GRID_ROWS } from "@widgets/grid-layout-manager/model/types";

export function findFreePosition(layout: DashboardWidget[], w: number, h: number) {
	const matrix = createOccupancyMatrix(layout);

	for (let row = 0; row < GRID_ROWS; row++) {
		for (let col = 0; col < GRID_COLUMNS; col++) {
			if (canOccupyArea(matrix, col, row, w, h)) {
				return {
					x: col,
					y: row
				};
			}
		}
	}

	return null;
}
