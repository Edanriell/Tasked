import { useLayoutEffect, useState } from "react";

import type { GridLayoutManagerSettings } from "../../config/manager";

import { parsePixelValue } from "../utils/parse-pixel-value";

type UseGridMeasurementsOptions = Pick<
	GridLayoutManagerSettings,
	"columns" | "rows" | "columnGap" | "rowGap" | "minHeight"
>;

export const useGridMeasurements = (
	container: HTMLDivElement | null,
	{
		columns,
		rows,
		columnGap: configuredColumnGap,
		rowGap: configuredRowGap,
		minHeight: configuredMinHeight
	}: UseGridMeasurementsOptions
) => {
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
					columnWidth: (rect.width - columnGap * (columns - 1)) / columns,
					rowHeight: (gridHeight - rowGap * (rows - 1)) / rows,
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
	}, [columns, configuredColumnGap, configuredMinHeight, configuredRowGap, container, rows]);

	return sizes;
};
