import { DashboardWidgetDefinition } from "../../model/types";

import { createDefaultWidget } from "../utils/create-default-widget";

export const createDefaultLayout = (widgets: DashboardWidgetDefinition[], hiddenWidgetTypes: string[]) => {
	const hidden = new Set(hiddenWidgetTypes);

	return widgets
		.filter((widget) => widget.defaultVisible !== false && !hidden.has(widget.type))
		.map(createDefaultWidget);
};
