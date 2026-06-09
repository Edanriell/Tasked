import type { DashboardWidget } from "../../model/types";

import { isColliding } from "../utils/is-colliding";

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
