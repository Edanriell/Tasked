import type { GridLayoutBounds } from "../../config/manager";

import { clamp } from "./clamp";

export const clampWidgetPosition = (
	{ x, y, w, h }: { x: number; y: number; w: number; h: number },
	{ columns, rows }: GridLayoutBounds
) => {
	return {
		x: clamp(x, 0, columns - w),
		y: clamp(y, 0, rows - h)
	};
};
