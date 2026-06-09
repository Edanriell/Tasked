import { GRID_COLUMNS, GRID_ROWS } from "../../config/manager";
import { DashboardWidget } from "../../model/types";

import { canOccupyArea } from "../utils/can-occupy-area";
import { createOccupancyMatrix } from "../utils/create-occupancy-matrix";

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
