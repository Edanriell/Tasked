import { GRID_COLUMNS, GRID_ROWS } from "@widgets/grid-layout-manager/model/types";
import { clamp } from "./clamp";

export const clampWidgetPosition = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => {
	return {
		x: clamp(x, 0, GRID_COLUMNS - w),
		y: clamp(y, 0, GRID_ROWS - h)
	};
};
