export const pxToColumns = (pixels: number, columnWidth: number, columnGap = 0) => {
	return Math.round(pixels / (columnWidth + columnGap));
};
