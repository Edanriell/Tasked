"use client";

import type { ReactElement } from "react";
import { useCallback, useState } from "react";

import { useActiveLayout, useEditMode } from "../model/selectors";
import { useDashboardLayoutStore } from "../model/store";
import type { DashboardWidget as DashboardWidgetType } from "../model/types";
import { GridLayoutManagerComponent } from "./grid-layout-manager-component";
import { GridLayoutManagerComponentGhostLayer } from "./grid-layout-manager-component-ghost-layer";

import { GRID_CELL_COUNT } from "@widgets/grid-layout-manager/config/manager";
import { hasCollision } from "@widgets/grid-layout-manager/lib/utils/has-collision";
import { GridContainerContext } from "../lib/hooks/use-grid-container";
import { useGridMeasurements } from "../lib/hooks/use-grid-measurements";
import { GridLayoutManagerControls } from "./grid-layout-manager-controls";

type GridLayoutManagerComponents = {
	Controls: typeof GridLayoutManagerControls;
};

type GridLayoutManagerProps = object;

type GridLayoutManager = ((props: Readonly<GridLayoutManagerProps>) => ReactElement) & GridLayoutManagerComponents;

const GridLayoutManagerRoot = () => {
	const widgets = useActiveLayout();

	const editMode = useEditMode();

	const [container, setContainer] = useState<HTMLDivElement | null>(null);

	const [ghost, setGhost] = useState<{
		widget: DashboardWidgetType | null;
		invalid: boolean;
	}>({
		widget: null,
		invalid: false
	});

	const sizes = useGridMeasurements(container);

	const setContainerRef = useCallback((node: HTMLDivElement | null) => {
		setContainer(node);
	}, []);

	const updateGhost = useCallback((widget: DashboardWidgetType | null) => {
		const state = useDashboardLayoutStore.getState();
		const activeLayout = state.draftLayout ?? state.layout;

		setGhost({
			widget,
			invalid: widget ? hasCollision(activeLayout, widget) : false
		});
	}, []);

	return (
		<GridContainerContext.Provider value={sizes}>
			<main
				ref={setContainerRef}
				className={[
					"relative",
					"isolate",
					"grid",
					"overflow-hidden",
					"min-h-[32rem]",
					"flex-1",
					"w-full",
					"grid-cols-[repeat(24,minmax(0,1fr))]",
					"grid-rows-[repeat(24,minmax(0,1fr))]",
					"gap-2"
				].join(" ")}
			>
				{editMode && (
					<div
						aria-hidden="true"
						className={[
							"pointer-events-none",
							"absolute",
							"inset-0",
							"z-0",
							"grid",
							"grid-cols-[repeat(24,minmax(0,1fr))]",
							"grid-rows-[repeat(24,minmax(0,1fr))]",
							"gap-2"
						].join(" ")}
					>
						{Array.from({ length: GRID_CELL_COUNT }).map((_, index) => (
							<div key={index} className="rounded-[2px] border border-sky-300/25 bg-sky-300/5" />
						))}
					</div>
				)}
				{widgets.map((widget) => (
					<GridLayoutManagerComponent key={widget.id} widget={widget} onPreviewChange={updateGhost} />
				))}
				<GridLayoutManagerComponentGhostLayer widget={ghost.widget} invalid={ghost.invalid} />
			</main>
		</GridContainerContext.Provider>
	);
};

export const GridLayoutManager: GridLayoutManager = Object.assign(GridLayoutManagerRoot, {
	Controls: GridLayoutManagerControls
});
