import { useDashboardLayoutStore } from "./store";

export const useActiveLayout = () => useDashboardLayoutStore((state) => state.draftLayout ?? state.layout);

export const useEditMode = () => useDashboardLayoutStore((state) => state.editMode);
