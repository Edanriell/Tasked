import { useLayoutEffect, useState } from "react";

import type { GridLayoutManagerSettings } from "../../config/manager";

import { parsePixelValue } from "../utils/parse-pixel-value";

type UseGridMeasurementsOptions = Pick<
	GridLayoutManagerSettings,
	"columns" | "rows" | "rowWidth" | "rowHeight" | "columnGap" | "rowGap" | "minHeight"
>;

const normalizeTrackSize = (value: number | undefined) => {
	return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : undefined;
};

const getAvailableHeight = (container: HTMLDivElement, containerTop: number) => {
	let bottom = window.innerHeight;
	let ancestor = container.parentElement;

	while (ancestor && ancestor !== document.body) {
		const rect = ancestor.getBoundingClientRect();
		const styles = getComputedStyle(ancestor);
		const marginBottom = parsePixelValue(styles.marginBottom);
		const borderBottom = parsePixelValue(styles.borderBottomWidth);
		const paddingBottom = parsePixelValue(styles.paddingBottom);
		const contentBottom = Math.min(rect.bottom, window.innerHeight - marginBottom) - borderBottom - paddingBottom;

		if (rect.top <= containerTop && contentBottom > containerTop) {
			bottom = Math.min(bottom, contentBottom);
		}

		ancestor = ancestor.parentElement;
	}

	return Math.max(bottom - containerTop, 0);
};

export const useGridMeasurements = (
	container: HTMLDivElement | null,
	{
		columns,
		rows,
		rowWidth: configuredRowWidth,
		rowHeight: configuredRowHeight,
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
		gridWidth: 0,
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
				const rowWidth = normalizeTrackSize(configuredRowWidth);
				const rowHeight = normalizeTrackSize(configuredRowHeight);
				const availableHeight = getAvailableHeight(container, rect.top);
				const gridWidth = rowWidth ? rowWidth * columns + columnGap * (columns - 1) : rect.width;
				const gridHeight = rowHeight
					? Math.max(rowHeight * rows + rowGap * (rows - 1), minHeight)
					: Math.max(availableHeight, minHeight);

				if (gridWidth === 0 || gridHeight === 0) {
					return;
				}

				const nextSizes = {
					columnWidth: rowWidth ?? (gridWidth - columnGap * (columns - 1)) / columns,
					rowHeight: rowHeight ?? (gridHeight - rowGap * (rows - 1)) / rows,
					columnGap,
					rowGap,
					gridWidth,
					gridHeight
				};

				setSizes((current) => {
					if (
						current.columnWidth === nextSizes.columnWidth &&
						current.rowHeight === nextSizes.rowHeight &&
						current.columnGap === nextSizes.columnGap &&
						current.rowGap === nextSizes.rowGap &&
						current.gridWidth === nextSizes.gridWidth &&
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
		const parent = container.parentElement;

		if (parent) {
			observer.observe(parent);
		}

		measure();
		window.addEventListener("resize", measure);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", measure);
			observer.disconnect();
		};
	}, [
		columns,
		configuredColumnGap,
		configuredMinHeight,
		configuredRowGap,
		configuredRowHeight,
		configuredRowWidth,
		container,
		rows
	]);

	return sizes;
};
