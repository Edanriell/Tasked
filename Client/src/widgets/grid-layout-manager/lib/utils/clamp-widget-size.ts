import { GRID_COLUMNS, GRID_ROWS } from "../../config/manager";

import { clamp } from "./clamp";

export const clampWidgetSize = ({
	w,
	h,
	minW,
	minH,
	maxW = GRID_COLUMNS,
	maxH = GRID_ROWS
}: {
	w: number;
	h: number;
	minW: number;
	minH: number;
	maxW?: number;
	maxH?: number;
}) => {
	return {
		w: clamp(w, minW, maxW),
		h: clamp(h, minH, maxH)
	};
};
