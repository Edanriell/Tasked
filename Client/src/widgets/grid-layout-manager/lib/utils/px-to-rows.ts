export const pxToRows = (pixels: number, rowHeight: number, rowGap = 0) => {
	return Math.round(pixels / (rowHeight + rowGap));
};
