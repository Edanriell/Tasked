import type { GridLayoutBounds } from "../../config/manager";
import { DashboardWidget } from "../../model/types";

import { canOccupyArea } from "../utils/can-occupy-area";
import { createOccupancyMatrix } from "../utils/create-occupancy-matrix";

export function findFreePosition(layout: DashboardWidget[], w: number, h: number, bounds: GridLayoutBounds) {
	const matrix = createOccupancyMatrix(layout, bounds);

	for (let row = 0; row < bounds.rows; row++) {
		for (let col = 0; col < bounds.columns; col++) {
			if (canOccupyArea(matrix, col, row, w, h, bounds)) {
				return {
					x: col,
					y: row
				};
			}
		}
	}

	return null;
}
