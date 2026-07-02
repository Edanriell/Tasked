import type { GridLayoutBounds } from "../../config/manager";
import { DashboardWidget } from "../../model/types";

import { canOccupyArea } from "../utils/can-occupy-area";
import { createOccupancyMatrix } from "../utils/create-occupancy-matrix";

export const canPlaceWidget = (layout: DashboardWidget[], widget: DashboardWidget, bounds: GridLayoutBounds) => {
	const matrix = createOccupancyMatrix(layout, bounds, widget.id);

	return canOccupyArea(matrix, widget.x, widget.y, widget.w, widget.h, bounds);
};
