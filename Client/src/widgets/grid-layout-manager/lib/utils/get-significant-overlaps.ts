import { SWAP_OVERLAP_THRESHOLD } from "../../config/manager";
import { DashboardWidget } from "../../model/types";

import { getSwapScore } from "../utils/get-swap-score";

export const getSignificantOverlaps = (layout: DashboardWidget[], candidate: DashboardWidget) => {
	return layout
		.filter((widget) => widget.id !== candidate.id)
		.map((widget) => ({
			widget,
			score: getSwapScore(candidate, widget)
		}))
		.filter(({ score }) => score >= SWAP_OVERLAP_THRESHOLD)
		.sort((a, b) => b.score - a.score);
};
