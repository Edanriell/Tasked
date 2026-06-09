import { useEffect } from "react";

import { useDashboardLayoutStore } from "../../model/store";

export const useLayoutShortcuts = () => {
	const editMode = useDashboardLayoutStore((state) => state.editMode);

	const cancelEditSession = useDashboardLayoutStore((state) => state.cancelEditSession);

	useEffect(() => {
		if (!editMode) {
			return;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				cancelEditSession();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [editMode, cancelEditSession]);
};
