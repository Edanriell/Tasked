import type { DashboardWidget } from "../model/types";

// JustAnExmaple

export interface LayoutApi {
	saveLayout(layout: DashboardWidget[]): Promise<void>;
	loadLayout(): Promise<DashboardWidget[]>;
}

export const dashboardApi: LayoutApi = {
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
