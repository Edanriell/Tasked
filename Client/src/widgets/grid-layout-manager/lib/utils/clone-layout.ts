import type { DashboardWidget } from "@widgets/grid-layout-manager/model/types";

export const cloneLayout = (layout: DashboardWidget[]) => layout.map((widget) => ({ ...widget }));
