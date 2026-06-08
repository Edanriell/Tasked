import { DashboardWidget } from "@widgets/grid-layout-manager/model/types";

export const isColliding = (a: DashboardWidget, b: DashboardWidget) => {
	return !(a.x + a.w <= b.x || a.x >= b.x + b.w || a.y + a.h <= b.y || a.y >= b.y + b.h);
};
