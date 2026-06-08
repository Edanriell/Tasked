import { clampWidgetSize } from "@widgets/grid-layout-manager/lib/utils/clamp-widget-size";
import { DashboardWidget, GRID_COLUMNS, GRID_ROWS, ResizeParams } from "@widgets/grid-layout-manager/model/types";

export const resolveResize = ({ widget, direction, deltaCols, deltaRows }: ResizeParams): DashboardWidget => {
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

	// Clamp size to min/max constraints
	const { w, h } = clampWidgetSize({
		w: next.w,
		h: next.h,
		minW: widget.minW,
		minH: widget.minH,
		maxW: widget.maxW ?? GRID_COLUMNS,
		maxH: widget.maxH ?? GRID_ROWS
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
	if (next.x + next.w > GRID_COLUMNS) {
		next.w = GRID_COLUMNS - next.x;
	}

	if (next.y + next.h > GRID_ROWS) {
		next.h = GRID_ROWS - next.y;
	}

	// FINAL SAFETY: prevent invalid sizes
	next.w = Math.max(widget.minW, next.w);
	next.h = Math.max(widget.minH, next.h);
	next.x = Math.min(Math.max(next.x, 0), GRID_COLUMNS - next.w);
	next.y = Math.min(Math.max(next.y, 0), GRID_ROWS - next.h);

	return next;
};
