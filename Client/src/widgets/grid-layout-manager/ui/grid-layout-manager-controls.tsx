"use client";

import { Button } from "@shared/ui";
import { useLayoutShortcuts } from "@widgets/grid-layout-manager/lib/hooks/use-layout-shortcuts";
import { useDashboardLayoutStore } from "@widgets/grid-layout-manager/model/store";
import { Fragment } from "react";

export const GridLayoutManagerControls = () => {
	useLayoutShortcuts();

	const editMode = useDashboardLayoutStore((state) => state.editMode);
	const startEditSession = useDashboardLayoutStore((state) => state.startEditSession);
	const saveEditSession = useDashboardLayoutStore((state) => state.saveEditSession);
	const cancelEditSession = useDashboardLayoutStore((state) => state.cancelEditSession);
	const resetLayout = useDashboardLayoutStore((state) => state.resetLayout);

	return (
		<Fragment>
			{!editMode ? (
				<Button onClick={startEditSession}>Customize</Button>
			) : (
				<Fragment>
					<Button variant="secondary" onClick={resetLayout}>
						Reset
					</Button>
					<Button variant="secondary" onClick={cancelEditSession}>
						Cancel
					</Button>
					<Button variant="success" onClick={saveEditSession}>
						Save
					</Button>
				</Fragment>
			)}
		</Fragment>
	);
};
