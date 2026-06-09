import type { DashboardWidget } from "../model/types";

// Todo
// We will use TanStack Query mutations and queries here.

export type LayoutApi = {
	saveLayout(layout: DashboardWidget[]): Promise<void>;
	loadLayout(): Promise<DashboardWidget[]>;
};

export const layoutApi: LayoutApi = {
	async saveLayout(layout) {
		await fetch("/api/dashboard/layout", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(layout)
		});
	},
	async loadLayout() {
		const response = await fetch("/api/dashboard/layout");
		return response.json();
	}
};
