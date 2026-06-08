import { canOccupyArea } from "@widgets/grid-layout-manager/lib/utils/can-occupy-area";
import { createOccupancyMatrix } from "@widgets/grid-layout-manager/lib/utils/create-occupancy-matrix";
import { DashboardWidget } from "@widgets/grid-layout-manager/model/types";

export const canPlaceWidget = (layout: DashboardWidget[], widget: DashboardWidget) => {
	const matrix = createOccupancyMatrix(layout, widget.id);

	return canOccupyArea(matrix, widget.x, widget.y, widget.w, widget.h);
};
