"use client";

import type { ReactElement } from "react";
import { Children, isValidElement, useCallback, useEffect, useMemo, useState } from "react";

import { GRID_CELL_COUNT } from "../config/manager";
import { GridContainerContext } from "../lib/hooks/use-grid-container";
import { useGridMeasurements } from "../lib/hooks/use-grid-measurements";
import { hasCollision } from "../lib/utils/has-collision";
import { useActiveLayout, useEditMode } from "../model/selectors";
import { useDashboardLayoutStore } from "../model/store";
import type { DashboardWidget as DashboardWidgetType, DashboardWidgetDefinition } from "../model/types";

import { GridLayoutManagerComponent } from "./grid-layout-manager-component";
import { GridLayoutManagerComponentGhostLayer } from "./grid-layout-manager-component-ghost-layer";

type GridLayoutManagerComponents = {
	Component: typeof GridLayoutManagerItem;
};

type GridLayoutManagerItemProps = {
	type: string;
	label: string;
	x: number;
	y: number;
	w: number;
	h: number;
	minW?: number;
	minH?: number;
	maxW?: number;
	maxH?: number;
	defaultVisible?: boolean;
	children: ReactElement;
};

type GridLayoutManagerProps = {
	children?: ReactElement | ReactElement[];
};

type GridLayoutManager = ((props: Readonly<GridLayoutManagerProps>) => ReactElement) & GridLayoutManagerComponents;

const GridLayoutManagerItem = (_props: Readonly<GridLayoutManagerItemProps>) => null;

export const GridLayoutManager = (({ children }: Readonly<GridLayoutManagerProps>) => {
	const widgets = useActiveLayout();

	const editMode = useEditMode();
	const registerWidgets = useDashboardLayoutStore((state) => state.registerWidgets);
	const removeWidget = useDashboardLayoutStore((state) => state.removeWidget);

	const [container, setContainer] = useState<HTMLDivElement | null>(null);

	const [ghost, setGhost] = useState<{
		widget: DashboardWidgetType | null;
		invalid: boolean;
	}>({
		widget: null,
		invalid: false
	});

	const sizes = useGridMeasurements(container);

	const declaredWidgets = useMemo(() => {
		return Children.toArray(children).filter((child): child is ReactElement<GridLayoutManagerItemProps> =>
			isValidElement<GridLayoutManagerItemProps>(child)
		);

		// && child.type === GridLayoutManagerItem
	}, [children]);

	const widgetDefinitions = useMemo<DashboardWidgetDefinition[]>(() => {
		return declaredWidgets.map(({ props }) => ({
			type: props.type,
			label: props.label,
			x: props.x,
			y: props.y,
			w: props.w,
			h: props.h,
			minW: props.minW ?? Math.min(props.w, 4),
			minH: props.minH ?? Math.min(props.h, 4),
			maxW: props.maxW,
			maxH: props.maxH,
			defaultVisible: props.defaultVisible
		}));
	}, [declaredWidgets]);

	const widgetContentByType = useMemo(() => {
		return new Map(declaredWidgets.map((widget) => [widget.props.type, widget.props.children]));
	}, [declaredWidgets]);

	useEffect(() => {
		registerWidgets(widgetDefinitions);
	}, [registerWidgets, widgetDefinitions]);

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

	// console.log("declaredWidgets", declaredWidgets);
	// console.log("children", children);

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
				{widgets.map((widget) => {
					const content = widgetContentByType.get(widget.type);

					if (!content) {
						return null;
					}

					return (
						<GridLayoutManagerComponent
							key={widget.id}
							widget={widget}
							onPreviewChange={updateGhost}
							onRemove={removeWidget}
						>
							{content}
						</GridLayoutManagerComponent>
					);
				})}
				<GridLayoutManagerComponentGhostLayer widget={ghost.widget} invalid={ghost.invalid} />
			</main>
		</GridContainerContext.Provider>
	);
}) as GridLayoutManager;

GridLayoutManager.Component = GridLayoutManagerItem;
