export type WidgetType = string;

export type OccupancyMatrix = boolean[][];

export type ResizeDirection = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

export type DashboardWidget = {
	id: string;
	type: WidgetType;
	x: number;
	y: number;
	w: number;
	h: number;
	minW: number;
	minH: number;
	maxW?: number;
	maxH?: number;
	props?: Record<string, unknown>;
};

export type DashboardWidgetDefinition = {
	type: WidgetType;
	label: string;
	x: number;
	y: number;
	w: number;
	h: number;
	minW: number;
	minH: number;
	maxW?: number;
	maxH?: number;
	defaultVisible?: boolean;
};

export type WidgetPosition = Pick<DashboardWidget, "x" | "y">;

export type MoveDraftWidgetResult = {
	widget: DashboardWidget;
};

export interface ResizeParams {
	widget: DashboardWidget;
	direction: ResizeDirection;
	deltaCols: number;
	deltaRows: number;
}
