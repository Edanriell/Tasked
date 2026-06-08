import { isColliding } from "@widgets/grid-layout-manager/lib/utils/is-colliding";
import type { DashboardWidget } from "@widgets/grid-layout-manager/model/types";

export const hasCollision = (widgets: DashboardWidget[], candidate: DashboardWidget) => {
	for (const widget of widgets) {
		if (widget.id === candidate.id) {
			continue;
		}

		if (isColliding(widget, candidate)) {
			return true;
		}
	}

	return false;
};
