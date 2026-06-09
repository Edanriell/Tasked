import { DashboardWidget } from "../../model/types";

import { getIntersectionArea } from "../utils/get-intersection-area";

export const getSwapScore = (candidate: DashboardWidget, target: DashboardWidget) => {
	const intersectionArea = getIntersectionArea(candidate, target);

	if (!intersectionArea) {
		return 0;
	}

	const smallestArea = Math.min(candidate.w * candidate.h, target.w * target.h);

	return intersectionArea / smallestArea;
};
