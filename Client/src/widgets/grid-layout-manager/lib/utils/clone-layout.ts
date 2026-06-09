import type { DashboardWidget } from "../../model/types";

export const cloneLayout = (layout: DashboardWidget[]) => layout.map((widget) => ({ ...widget }));
