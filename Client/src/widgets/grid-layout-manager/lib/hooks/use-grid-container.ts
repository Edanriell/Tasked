import { createContext, useContext } from "react";

export type GridMeasurements = {
	columnWidth: number;
	rowHeight: number;
	columnGap: number;
	rowGap: number;
};

export const GridContainerContext = createContext<GridMeasurements>({
	columnWidth: 0,
	rowHeight: 0,
	columnGap: 0,
	rowGap: 0
});

export const useGridContainer = () => useContext(GridContainerContext);
