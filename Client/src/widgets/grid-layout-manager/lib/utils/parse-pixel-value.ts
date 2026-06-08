export const parsePixelValue = (value: string) => {
	const parsed = Number.parseFloat(value);

	return Number.isFinite(parsed) ? parsed : 0;
};
