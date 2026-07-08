export const toCssUnit = (value: number | string, unit: string = "px") =>
	typeof value === "number" ? `${value}${unit}` : value;
