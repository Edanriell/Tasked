import type { GridLayoutBounds } from "../../config/manager";
import { DashboardWidget, OccupancyMatrix } from "../../model/types";

export const createOccupancyMatrix = (
	widgets: DashboardWidget[],
	{ columns, rows }: GridLayoutBounds,
	ignoreId?: string
): OccupancyMatrix => {
	const matrix = Array.from(
		{
			length: rows
		},
		() =>
			Array.from(
				{
					length: columns
				},
				() => false
			)
	);

	for (const widget of widgets) {
		if (widget.id === ignoreId) {
			continue;
		}

		for (let row = widget.y; row < widget.y + widget.h; row++) {
			for (let col = widget.x; col < widget.x + widget.w; col++) {
				if (matrix[row]?.[col] === undefined) {
					continue;
				}

				matrix[row][col] = true;
			}
		}
	}

	return matrix;
};
