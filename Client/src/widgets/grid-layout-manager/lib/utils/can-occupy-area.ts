import type { GridLayoutBounds } from "../../config/manager";
import { OccupancyMatrix } from "../../model/types";

export const canOccupyArea = (
	matrix: OccupancyMatrix,
	x: number,
	y: number,
	w: number,
	h: number,
	{ columns, rows }: GridLayoutBounds
) => {
	for (let row = y; row < y + h; row++) {
		for (let col = x; col < x + w; col++) {
			if (row < 0 || col < 0) {
				return false;
			}

			if (row >= rows) {
				return false;
			}

			if (col >= columns) {
				return false;
			}

			if (matrix[row][col]) {
				return false;
			}
		}
	}

	return true;
};
