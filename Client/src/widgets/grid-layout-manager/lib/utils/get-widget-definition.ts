import { widgetRegistry } from "../../model/widget-registry";

export const getWidgetDefinition = (type: string) => {
	const definition = widgetRegistry[type];

	if (!definition) {
		throw new Error(`Unknown widget type: ${type}`);
	}

	return definition;
};
