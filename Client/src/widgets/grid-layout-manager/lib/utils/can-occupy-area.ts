import { GRID_COLUMNS, GRID_ROWS, OccupancyMatrix } from "@widgets/grid-layout-manager/model/types";

export const canOccupyArea = (matrix: OccupancyMatrix, x: number, y: number, w: number, h: number) => {
	for (let row = y; row < y + h; row++) {
		for (let col = x; col < x + w; col++) {
			if (row < 0 || col < 0) {
				return false;
			}

			if (row >= GRID_ROWS) {
				return false;
			}

			if (col >= GRID_COLUMNS) {
				return false;
			}

			if (matrix[row][col]) {
				return false;
			}
		}
	}

	return true;
};
