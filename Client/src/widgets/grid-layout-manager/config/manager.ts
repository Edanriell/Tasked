import type { CSSProperties } from "react";

export type GridLayoutBounds = {
	columns: number;
	rows: number;
};

export type GridLayoutManagerSettings = {
	columns: number;
	rows: number;
	rowWidth?: number;
	rowHeight?: number;
	columnGap: CSSProperties["columnGap"];
	rowGap: CSSProperties["rowGap"];
	minHeight: CSSProperties["minHeight"];
	swapOverlapThreshold: number;
};

export const DEFAULT_GRID_LAYOUT_MANAGER_SETTINGS = {
	columns: 24,
	rows: 24,
	rowWidth: undefined,
	rowHeight: undefined,
	columnGap: "0.5rem",
	rowGap: "0.5rem",
	minHeight: 0,
	swapOverlapThreshold: 0.4
} satisfies GridLayoutManagerSettings;
