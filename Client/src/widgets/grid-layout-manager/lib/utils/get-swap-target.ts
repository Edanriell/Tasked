import { SWAP_OVERLAP_THRESHOLD } from "@widgets/grid-layout-manager/config/manager";
import { getSwapScore } from "@widgets/grid-layout-manager/lib/utils/get-swap-score";
import type { DashboardWidget } from "@widgets/grid-layout-manager/model/types";

export const getSwapTarget = (layout: DashboardWidget[], candidate: DashboardWidget) => {
	return layout
		.filter((widget) => widget.id !== candidate.id)
		.map((widget) => ({
			widget,
			score: getSwapScore(candidate, widget)
		}))
		.filter(({ score }) => score >= SWAP_OVERLAP_THRESHOLD)
		.sort((a, b) => b.score - a.score)[0]?.widget;
};
