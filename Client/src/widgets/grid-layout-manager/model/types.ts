import { ComponentType } from "react";

export const GRID_COLUMNS = 24;
export const GRID_ROWS = 24;

export type WidgetType = string;

export type OccupancyMatrix = boolean[][];

export type ResizeDirection = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

export interface DashboardWidget {
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
}

export type WidgetPosition = Pick<DashboardWidget, "x" | "y">;

export type MoveDraftWidgetResult = {
	widget: DashboardWidget;
};

export interface ResponsiveLayouts {
	xl: DashboardWidget[];
	lg: DashboardWidget[];
	md: DashboardWidget[];
	sm: DashboardWidget[];
}

export interface GridCellSize {
	columnWidth: number;
	rowHeight: number;
}

export interface GridPosition {
	x: number;
	y: number;
}

export interface GridSize {
	w: number;
	h: number;
}

export interface GridRect extends GridPosition, GridSize {}

export interface ResizeParams {
	widget: DashboardWidget;
	direction: ResizeDirection;
	deltaCols: number;
	deltaRows: number;
}

export type CollisionCandidate = DashboardWidget;

export interface DashboardWidgetDefinition<TProps = Record<string, unknown>> {
	type: string;
	component: ComponentType<TProps>;
	defaultProps?: TProps;
	minW?: number;
	minH?: number;
	maxW?: number;
	maxH?: number;
}

export type WidgetRegistry = Record<string, DashboardWidgetDefinition>;
