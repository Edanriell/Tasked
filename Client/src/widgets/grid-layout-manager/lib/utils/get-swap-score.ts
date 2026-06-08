import { getIntersectionArea } from "@widgets/grid-layout-manager/lib/utils/get-intersection-area";
import { DashboardWidget } from "@widgets/grid-layout-manager/model/types";

export const getSwapScore = (candidate: DashboardWidget, target: DashboardWidget) => {
	const intersectionArea = getIntersectionArea(candidate, target);

	if (!intersectionArea) {
		return 0;
	}

	const smallestArea = Math.min(candidate.w * candidate.h, target.w * target.h);

	return intersectionArea / smallestArea;
};
