import type { GridLayoutBounds } from "../../config/manager";
import { DashboardWidget, ResizeParams } from "../../model/types";

import { clampWidgetSize } from "../utils/clamp-widget-size";

export const resolveResize = (
	{ widget, direction, deltaCols, deltaRows }: ResizeParams,
	{ columns, rows }: GridLayoutBounds
): DashboardWidget => {
	const next = { ...widget };
	const right = widget.x + widget.w;
	const bottom = widget.y + widget.h;

	// EAST (right edge grows)
	if (direction.includes("e")) {
		next.w = widget.w + deltaCols;
	}

	// SOUTH (bottom edge grows)
	if (direction.includes("s")) {
		next.h = widget.h + deltaRows;
	}

	// WEST (left edge moves)
	if (direction.includes("w")) {
		next.x = widget.x + deltaCols;
		next.w = widget.w - deltaCols;
	}

	// NORTH (top edge moves)
	if (direction.includes("n")) {
		next.y = widget.y + deltaRows;
		next.h = widget.h - deltaRows;
	}

	const minW = Math.min(widget.minW, columns);
	const minH = Math.min(widget.minH, rows);
	const maxW = Math.max(minW, Math.min(widget.maxW ?? columns, columns));
	const maxH = Math.max(minH, Math.min(widget.maxH ?? rows, rows));

	// Clamp size to min/max constraints
	const { w, h } = clampWidgetSize({
		w: next.w,
		h: next.h,
		minW,
		minH,
		maxW,
		maxH
	});

	next.w = w;
	next.h = h;

	if (direction.includes("w")) {
		next.x = right - next.w;
	}

	if (direction.includes("n")) {
		next.y = bottom - next.h;
	}

	if (next.x < 0) {
		next.w += next.x;
		next.x = 0;
	}

	if (next.y < 0) {
		next.h += next.y;
		next.y = 0;
	}

	// HARD GRID BOUNDS SAFETY
	if (next.x + next.w > columns) {
		next.w = columns - next.x;
	}

	if (next.y + next.h > rows) {
		next.h = rows - next.y;
	}

	// FINAL SAFETY: prevent invalid sizes
	next.w = Math.max(minW, next.w);
	next.h = Math.max(minH, next.h);
	next.x = Math.min(Math.max(next.x, 0), columns - next.w);
	next.y = Math.min(Math.max(next.y, 0), rows - next.h);

	return next;
};
