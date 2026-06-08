import { create } from "zustand";
import { persist } from "zustand/middleware";

import { initialLayout } from "@widgets/grid-layout-manager/config/initial-layout";
import { canPlaceWidget } from "@widgets/grid-layout-manager/lib/utils/can-place-widget";
import { cloneLayout } from "@widgets/grid-layout-manager/lib/utils/clone-layout";
import { createWidget } from "@widgets/grid-layout-manager/lib/utils/create-widget";
import { findFreePosition } from "@widgets/grid-layout-manager/lib/utils/find-free-position";
import { reflowLayout } from "@widgets/grid-layout-manager/lib/utils/reflow-layout";
import { type DashboardWidget, MoveDraftWidgetResult, WidgetPosition } from "./types";

interface DashboardLayoutStore {
	layout: DashboardWidget[];
	draftLayout: DashboardWidget[] | null;
	editMode: boolean;
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
}

export const useDashboardLayoutStore = create<DashboardLayoutStore>()(
	persist(
		(set, get) => ({
			layout: initialLayout,
			draftLayout: null,
			editMode: false,
			// BASE LAYOUT
			setLayout: (layout) => set({ layout }),
			// EDIT SESSION
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
				const nextLayout = cloneLayout(initialLayout);

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
			// UPDATE WIDGET IN DRAFT
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

			// ADD WIDGET
			addWidget: (type) => {
				const activeLayout = get().draftLayout ?? get().layout;

				const widget = createWidget(type, {});

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
						draftLayout: next
					});
				} else {
					set({
						layout: next
					});
				}
			},

			// GET WIDGET
			getWidget: (id) => {
				const active = get().draftLayout ?? get().layout;

				return active.find((w) => w.id === id);
			}
		}),
		{
			name: "dashboard-layout",
			partialize: (state) => ({
				layout: state.layout
			})
		}
	)
);
