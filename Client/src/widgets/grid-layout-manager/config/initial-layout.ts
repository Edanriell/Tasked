import type { DashboardWidget } from "../model/types";

export const initialLayout: DashboardWidget[] = [
	{
		id: "notes",
		type: "notes",
		x: 0,
		y: 0,
		w: 12,
		h: 11,
		minW: 4,
		minH: 4
	},
	{
		id: "projects",
		type: "projects",
		x: 12,
		y: 0,
		w: 6,
		h: 11,
		minW: 4,
		minH: 4
	},
	{
		id: "users",
		type: "users",
		x: 18,
		y: 0,
		w: 6,
		h: 11,
		minW: 4,
		minH: 4
	},
	{
		id: "tasks",
		type: "tasks",
		x: 0,
		y: 13,
		w: 24,
		h: 11,
		minW: 8,
		minH: 6
	}
];
