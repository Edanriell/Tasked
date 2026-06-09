import { DashboardWidget } from "../../model/types";

import { canOccupyArea } from "../utils/can-occupy-area";
import { createOccupancyMatrix } from "../utils/create-occupancy-matrix";

export const canPlaceWidget = (layout: DashboardWidget[], widget: DashboardWidget) => {
	const matrix = createOccupancyMatrix(layout, widget.id);

	return canOccupyArea(matrix, widget.x, widget.y, widget.w, widget.h);
};
