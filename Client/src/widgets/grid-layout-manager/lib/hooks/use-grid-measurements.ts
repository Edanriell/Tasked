import { useLayoutEffect, useState } from "react";

import { GRID_COLUMNS, GRID_ROWS } from "../../config/manager";

import { parsePixelValue } from "../utils/parse-pixel-value";

export const useGridMeasurements = (container: HTMLDivElement | null) => {
	const [sizes, setSizes] = useState({
		columnWidth: 0,
		rowHeight: 0,
		columnGap: 0,
		rowGap: 0,
		gridHeight: 0
	});

	useLayoutEffect(() => {
		if (!container) return;

		const measure = () => {
			cancelAnimationFrame(raf);

			raf = requestAnimationFrame(() => {
				const rect = container.getBoundingClientRect();
				const styles = getComputedStyle(container);
				const columnGap = parsePixelValue(styles.columnGap);
				const rowGap = parsePixelValue(styles.rowGap);
				const minHeight = parsePixelValue(styles.minHeight);
				const gridHeight = Math.max(window.innerHeight - rect.top, minHeight);

				if (rect.width === 0 || gridHeight === 0) {
					return;
				}

				const nextSizes = {
					columnWidth: (rect.width - columnGap * (GRID_COLUMNS - 1)) / GRID_COLUMNS,
					rowHeight: (gridHeight - rowGap * (GRID_ROWS - 1)) / GRID_ROWS,
					columnGap,
					rowGap,
					gridHeight
				};

				setSizes((current) => {
					if (
						current.columnWidth === nextSizes.columnWidth &&
						current.rowHeight === nextSizes.rowHeight &&
						current.columnGap === nextSizes.columnGap &&
						current.rowGap === nextSizes.rowGap &&
						current.gridHeight === nextSizes.gridHeight
					) {
						return current;
					}

					return nextSizes;
				});
			});
		};

		let raf = 0;

		const observer = new ResizeObserver(measure);
		observer.observe(container);

		measure();
		window.addEventListener("resize", measure);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", measure);
			observer.disconnect();
		};
	}, [container]);

	return sizes;
};
