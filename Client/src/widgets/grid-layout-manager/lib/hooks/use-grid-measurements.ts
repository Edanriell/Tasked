import { parsePixelValue } from "@widgets/grid-layout-manager/lib/utils/parse-pixel-value";
import { useLayoutEffect, useState } from "react";
import { GRID_COLUMNS, GRID_ROWS } from "../../model/types";

export function useGridMeasurements(container: HTMLDivElement | null) {
	const [sizes, setSizes] = useState({
		columnWidth: 0,
		rowHeight: 0,
		columnGap: 0,
		rowGap: 0
	});

	useLayoutEffect(() => {
		if (!container) return;

		let raf = 0;

		const observer = new ResizeObserver((entries) => {
			cancelAnimationFrame(raf);

			raf = requestAnimationFrame(() => {
				const rect = entries[0].contentRect;
				const styles = getComputedStyle(container);
				const columnGap = parsePixelValue(styles.columnGap);
				const rowGap = parsePixelValue(styles.rowGap);

				if (rect.width === 0 || rect.height === 0) {
					return;
				}

				const nextSizes = {
					columnWidth: (rect.width - columnGap * (GRID_COLUMNS - 1)) / GRID_COLUMNS,
					rowHeight: (rect.height - rowGap * (GRID_ROWS - 1)) / GRID_ROWS,
					columnGap,
					rowGap
				};

				setSizes((current) => {
					if (
						current.columnWidth === nextSizes.columnWidth &&
						current.rowHeight === nextSizes.rowHeight &&
						current.columnGap === nextSizes.columnGap &&
						current.rowGap === nextSizes.rowGap
					) {
						return current;
					}

					return nextSizes;
				});
			});
		});

		observer.observe(container);

		return () => {
			cancelAnimationFrame(raf);
			observer.disconnect();
		};
	}, [container]);

	return sizes;
}
