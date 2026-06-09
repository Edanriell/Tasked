import { create } from "zustand";
import { persist } from "zustand/middleware";

import { canPlaceWidget } from "../lib/utils/can-place-widget";
import { cloneLayout } from "../lib/utils/clone-layout";
import { createDefaultLayout } from "../lib/utils/create-default-layout";
import { createDefaultWidget } from "../lib/utils/create-default-widget";
import { findFreePosition } from "../lib/utils/find-free-position";
import { reflowLayout } from "../lib/utils/reflow-layout";
import { sameWidgetDefinitions } from "../lib/utils/same-widget-definitions";

import { type DashboardWidget, type DashboardWidgetDefinition, MoveDraftWidgetResult, WidgetPosition } from "./types";

type DashboardLayoutStore = {
	layout: DashboardWidget[];
	draftLayout: DashboardWidget[] | null;
	availableWidgets: DashboardWidgetDefinition[];
	hiddenWidgetTypes: string[];
	editMode: boolean;
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

export const useDashboardLayoutStore = create<DashboardLayoutStore>()(
	persist(
		(set, get) => ({
			layout: [],
			draftLayout: null,
			availableWidgets: [],
			hiddenWidgetTypes: [],
			editMode: false,
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

						next.push(createDefaultWidget(definition));
						existingTypes.add(definition.type);
					}

					return next;
				};

				const nextLayout = normalizeLayout(layout);
				const nextDraftLayout = draftLayout ? normalizeLayout(draftLayout) : null;

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
			setLayout: (layout) => set({ layout }),
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
				const nextLayout = createDefaultLayout(get().availableWidgets, get().hiddenWidgetTypes);

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

					if (!canPlaceWidget(draft, nextWidget)) {
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

				if (canPlaceWidget(draft, candidate)) {
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

				const nextLayout = reflowLayout(draft, candidate, originPosition);

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

				const widget = createDefaultWidget(definition);

				const position = findFreePosition(activeLayout, widget.w, widget.h);

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
