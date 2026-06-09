import { DashboardWidgetDefinition } from "../../model/types";

export const sameWidgetDefinitions = (a: DashboardWidgetDefinition[], b: DashboardWidgetDefinition[]) => {
	if (a.length !== b.length) return false;

	return a.every((widget, index) => {
		const current = b[index];

		return (
			current &&
			widget.type === current.type &&
			widget.label === current.label &&
			widget.x === current.x &&
			widget.y === current.y &&
			widget.w === current.w &&
			widget.h === current.h &&
			widget.minW === current.minW &&
			widget.minH === current.minH &&
			widget.maxW === current.maxW &&
			widget.maxH === current.maxH &&
			widget.defaultVisible === current.defaultVisible
		);
	});
};
