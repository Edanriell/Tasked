import { DashboardWidget } from "../../model/types";

import { getSwapScore } from "../utils/get-swap-score";

export const getSignificantOverlaps = (
	layout: DashboardWidget[],
	candidate: DashboardWidget,
	swapOverlapThreshold: number
) => {
	return layout
		.filter((widget) => widget.id !== candidate.id)
		.map((widget) => ({
			widget,
			score: getSwapScore(candidate, widget)
		}))
		.filter(({ score }) => score >= swapOverlapThreshold)
		.sort((a, b) => b.score - a.score);
};
