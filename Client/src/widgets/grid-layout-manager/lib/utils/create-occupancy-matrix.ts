import { DashboardWidget, GRID_COLUMNS, GRID_ROWS, OccupancyMatrix } from "@widgets/grid-layout-manager/model/types";

export const createOccupancyMatrix = (widgets: DashboardWidget[], ignoreId?: string): OccupancyMatrix => {
	const matrix = Array.from(
		{
			length: GRID_ROWS
		},
		() =>
			Array.from(
				{
					length: GRID_COLUMNS
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
				matrix[row][col] = true;
			}
		}
	}

	return matrix;
};
