import { DashboardWidget } from "@widgets/grid-layout-manager/model/types";

export const getIntersectionArea = (a: DashboardWidget, b: DashboardWidget) => {
	const xOverlap = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
	const yOverlap = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));

	return xOverlap * yOverlap;
};
