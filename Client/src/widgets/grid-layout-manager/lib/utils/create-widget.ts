import { v4 as uuidv4 } from "uuid";

import type { DashboardWidget, DashboardWidgetDefinition } from "../../model/types";

export const createWidget = (
	definition: DashboardWidgetDefinition,
	config: Partial<DashboardWidget> = {}
): DashboardWidget => {
	return {
		id: uuidv4(),
		type: definition.type,
		x: definition.x,
		y: definition.y,
		w: definition.w,
		h: definition.h,
		minW: definition.minW,
		minH: definition.minH,
		maxW: definition.maxW,
		maxH: definition.maxH,
		...config
	};
};
