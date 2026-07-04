import { create } from "zustand";
import { persist } from "zustand/middleware";

import { DEFAULT_GRID_LAYOUT_MANAGER_SETTINGS, type GridLayoutManagerSettings } from "../config/manager";
import { canPlaceWidget } from "../lib/utils/can-place-widget";
import { cloneLayout } from "../lib/utils/clone-layout";
import { createDefaultLayout } from "../lib/utils/create-default-layout";
import { createDefaultWidget } from "../lib/utils/create-default-widget";
import { findFreePosition } from "../lib/utils/find-free-position";
import { reflowLayout } from "../lib/utils/reflow-layout";
import { sameWidgetDefinitions } from "../lib/utils/same-widget-definitions";

import { type DashboardWidget, type DashboardWidgetDefinition, MoveDraftWidgetResult, WidgetPosition } from "./types";

type DashboardLayoutStore = {
	gridSettings: GridLayoutManagerSettings;
	layout: DashboardWidget[];
	draftLayout: DashboardWidget[] | null;
	availableWidgets: DashboardWidgetDefinition[];
	hiddenWidgetTypes: string[];
	editMode: boolean;
	setGridSettings: (settings: GridLayoutManagerSettings) => void;
	registerWidgets: (widgets: DashboardWidgetDefinition[]) => void;
	setLayout: (layout: DashboardWidget[]) => void;
	startEditSession: () => void;
	saveEditSession: () => void;
	cancelEditSession: () => void;
	resetLayout: () => void;
	updateDraftWidget: (id: string, changes: Partial<DashboardWidget>) => void;
	moveDraftWidget: (
		id: string,
		position: WidgetPosition,
		originPosition: WidgetPosition,
		sourceLayout: DashboardWidget[]
	) => MoveDraftWidgetResult | null;
	getWidget: (id: string) => DashboardWidget | undefined;
	addWidget: (type: string) => void;
	removeWidget: (id: string) => void;
};

const clampValue = (value: number, min: number, max: number) => {
	return Math.min(Math.max(value, min), Math.max(min, max));
};

const fitWidgetToGrid = (widget: DashboardWidget, { columns, rows }: GridLayoutManagerSettings): DashboardWidget => {
	const minW = Math.min(widget.minW, columns);
	const minH = Math.min(widget.minH, rows);
	const maxW = Math.max(minW, Math.min(widget.maxW ?? columns, columns));
	const maxH = Math.max(minH, Math.min(widget.maxH ?? rows, rows));
	const w = clampValue(widget.w, minW, maxW);
	const h = clampValue(widget.h, minH, maxH);

	return {
		...widget,
		w,
		h,
		x: clampValue(widget.x, 0, columns - w),
		y: clampValue(widget.y, 0, rows - h)
	};
};

const fitLayoutToGrid = (layout: DashboardWidget[], settings: GridLayoutManagerSettings) => {
	let changed = false;
	const nextLayout = layout.map((widget) => {
		const nextWidget = fitWidgetToGrid(widget, settings);

		if (
			nextWidget.x !== widget.x ||
			nextWidget.y !== widget.y ||
			nextWidget.w !== widget.w ||
			nextWidget.h !== widget.h
		) {
			changed = true;
		}

		return nextWidget;
	});

	return changed ? nextLayout : layout;
};

export const useDashboardLayoutStore = create<DashboardLayoutStore>()(
	persist(
		(set, get) => ({
			gridSettings: DEFAULT_GRID_LAYOUT_MANAGER_SETTINGS,
			layout: [],
			draftLayout: null,
			availableWidgets: [],
			hiddenWidgetTypes: [],
			editMode: false,
			setGridSettings: (settings) => {
				const current = get().gridSettings;

				if (
					current.columns === settings.columns &&
					current.rows === settings.rows &&
					current.rowWidth === settings.rowWidth &&
					current.rowHeight === settings.rowHeight &&
					current.columnGap === settings.columnGap &&
					current.rowGap === settings.rowGap &&
					current.minHeight === settings.minHeight &&
					current.swapOverlapThreshold === settings.swapOverlapThreshold
				) {
					return;
				}

				const draftLayout = get().draftLayout;

				set({
					gridSettings: settings,
					layout: fitLayoutToGrid(get().layout, settings),
					draftLayout: draftLayout ? fitLayoutToGrid(draftLayout, settings) : null
				});
			},
			registerWidgets: (widgets) => {
				const allowedTypes = new Set(widgets.map((widget) => widget.type));
				const { availableWidgets, hiddenWidgetTypes, layout, draftLayout } = get();
				const visibleDefaultTypes = new Set(
					widgets
						.filter((widget) => widget.defaultVisible !== false && !hiddenWidgetTypes.includes(widget.type))
						.map((widget) => widget.type)
				);

				const normalizeLayout = (source: DashboardWidget[]) => {
					const next = source.filter(
						(widget) => allowedTypes.has(widget.type) && !hiddenWidgetTypes.includes(widget.type)
					);
					const existingTypes = new Set(next.map((widget) => widget.type));

					for (const definition of widgets) {
						if (!visibleDefaultTypes.has(definition.type) || existingTypes.has(definition.type)) {
							continue;
						}

						next.push(fitWidgetToGrid(createDefaultWidget(definition), get().gridSettings));
						existingTypes.add(definition.type);
					}

					return next;
				};

				const nextLayout = fitLayoutToGrid(normalizeLayout(layout), get().gridSettings);
				const nextDraftLayout = draftLayout
					? fitLayoutToGrid(normalizeLayout(draftLayout), get().gridSettings)
					: null;

				if (
					sameWidgetDefinitions(availableWidgets, widgets) &&
					nextLayout === layout &&
					nextDraftLayout === draftLayout
				) {
					return;
				}

				set({
					availableWidgets: widgets,
					layout: nextLayout,
					draftLayout: nextDraftLayout
				});
			},
			setLayout: (layout) => set({ layout: fitLayoutToGrid(layout, get().gridSettings) }),
			startEditSession: () => {
				const { editMode, layout } = get();

				if (editMode) return;

				set({
					editMode: true,
					draftLayout: cloneLayout(layout)
				});
			},
			saveEditSession: () => {
				const draft = get().draftLayout;

				if (!draft) return;

				set({
					layout: draft,
					draftLayout: null,
					editMode: false
				});
			},
			cancelEditSession: () => {
				set({
					draftLayout: null,
					editMode: false
				});
			},
			resetLayout: () => {
				const nextLayout = fitLayoutToGrid(
					createDefaultLayout(get().availableWidgets, get().hiddenWidgetTypes),
					get().gridSettings
				);

				if (get().editMode) {
					set({
						draftLayout: nextLayout
					});

					return;
				}

				set({
					layout: nextLayout
				});
			},
			updateDraftWidget: (id, changes) => {
				const draft = get().draftLayout;

				if (!draft) return;

				let changed = false;

				const nextDraft = draft.map((widget) => {
					if (widget.id !== id) return widget;

					const nextWidget = {
						...widget,
						...changes
					};

					if (!canPlaceWidget(draft, nextWidget, get().gridSettings)) {
						return widget;
					}

					for (const key of Object.keys(changes) as Array<keyof DashboardWidget>) {
						if (widget[key] !== nextWidget[key]) {
							changed = true;
							break;
						}
					}

					return changed ? nextWidget : widget;
				});

				if (!changed) return;

				set({
					draftLayout: nextDraft
				});
			},
			moveDraftWidget: (id, position, originPosition, sourceLayout) => {
				const draft = sourceLayout;

				if (!draft) return null;

				const draggedWidget = draft.find((widget) => widget.id === id);

				if (!draggedWidget) return null;

				const candidate = {
					...draggedWidget,
					...position
				};

				if (draggedWidget.x === candidate.x && draggedWidget.y === candidate.y) {
					return {
						widget: draggedWidget
					};
				}

				if (canPlaceWidget(draft, candidate, get().gridSettings)) {
					set({
						draftLayout: draft.map((widget) => {
							if (widget.id === draggedWidget.id) {
								return candidate;
							}

							return widget;
						})
					});

					return {
						widget: candidate
					};
				}

				const nextLayout = reflowLayout(
					draft,
					candidate,
					originPosition,
					get().gridSettings,
					get().gridSettings.swapOverlapThreshold
				);

				if (!nextLayout) return null;

				const nextDraggedWidget = nextLayout.find((widget) => widget.id === id) ?? candidate;

				set({
					draftLayout: nextLayout
				});

				return {
					widget: nextDraggedWidget
				};
			},
			addWidget: (type) => {
				const activeLayout = get().draftLayout ?? get().layout;
				const definition = get().availableWidgets.find((widget) => widget.type === type);

				if (!definition || activeLayout.some((widget) => widget.type === type)) return;

				const widget = fitWidgetToGrid(createDefaultWidget(definition), get().gridSettings);

				const position = findFreePosition(activeLayout, widget.w, widget.h, get().gridSettings);

				if (!position) return;

				const next = [
					...activeLayout,
					{
						...widget,
						...position
					}
				];

				if (get().draftLayout) {
					set({
						draftLayout: next,
						hiddenWidgetTypes: get().hiddenWidgetTypes.filter((hiddenType) => hiddenType !== type)
					});
				} else {
					set({
						layout: next,
						hiddenWidgetTypes: get().hiddenWidgetTypes.filter((hiddenType) => hiddenType !== type)
					});
				}
			},
			removeWidget: (id) => {
				const activeLayout = get().draftLayout ?? get().layout;
				const widget = activeLayout.find((item) => item.id === id);

				if (!widget) return;

				const nextLayout = activeLayout.filter((item) => item.id !== id);
				const hiddenWidgetTypes = Array.from(new Set([...get().hiddenWidgetTypes, widget.type]));

				if (get().draftLayout) {
					set({
						draftLayout: nextLayout,
						hiddenWidgetTypes
					});

					return;
				}

				set({
					layout: nextLayout,
					hiddenWidgetTypes
				});
			},
			getWidget: (id) => {
				const active = get().draftLayout ?? get().layout;

				return active.find((w) => w.id === id);
			}
		}),
		{
			name: "dashboard-layout",
			partialize: (state) => ({
				layout: state.layout,
				hiddenWidgetTypes: state.hiddenWidgetTypes
			})
		}
	)
);
