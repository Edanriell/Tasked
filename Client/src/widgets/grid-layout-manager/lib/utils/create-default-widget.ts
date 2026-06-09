import { DashboardWidgetDefinition } from "../../model/types";

import { createWidget } from "../utils/create-widget";

export const createDefaultWidget = (definition: DashboardWidgetDefinition) =>
	createWidget(definition, {
		id: definition.type
	});
