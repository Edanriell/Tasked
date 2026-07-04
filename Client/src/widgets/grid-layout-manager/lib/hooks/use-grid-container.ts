import { createContext, useContext } from "react";

export type GridMeasurements = {
	columns: number;
	rows: number;
	columnWidth: number;
	rowHeight: number;
	columnGap: number;
	rowGap: number;
	gridWidth: number;
	gridHeight: number;
	swapOverlapThreshold: number;
};

export const GridContainerContext = createContext<GridMeasurements>({
	columns: 0,
	rows: 0,
	columnWidth: 0,
	rowHeight: 0,
	columnGap: 0,
	rowGap: 0,
	gridWidth: 0,
	gridHeight: 0,
	swapOverlapThreshold: 0
});

export const useGridContainer = () => useContext(GridContainerContext);
