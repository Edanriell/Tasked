import { v4 as uuidv4 } from "uuid";

import type { DashboardWidget } from "../../model/types";

import { getWidgetDefinition } from "./get-widget-definition";

// We should be able to create any Component, And maybe there is simpler way ?
export const createWidget = (type: string, config: Partial<DashboardWidget>): DashboardWidget => {
	const definition = getWidgetDefinition(type);

	return {
		id: uuidv4(),
		type,
		x: 0,
		y: 0,
		w: definition.minW ?? 4,
		h: definition.minH ?? 4,
		minW: definition.minW ?? 2,
		minH: definition.minH ?? 2,
		maxW: definition.maxW,
		maxH: definition.maxH,
		...config
	};
};
