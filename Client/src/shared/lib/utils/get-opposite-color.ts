import type { Color } from "colorthief";
import tinycolor from "tinycolor2";

export const getOppositeColor = (color: Color) => {
	const { r, g, b } = color.rgb();

	const base = tinycolor({ r, g, b });
	const hsl = base.toHsl();
	const isNeutral = hsl.s < 0.2;

	let h: number;
	const s = Math.min(Math.max(hsl.s + 0.2, 0.55), 0.8);
	let l: number;

	if (isNeutral) {
		h = 220 + ((r * 3 + g * 5 + b * 7) % 60);
	} else {
		h = hsl.h;

		if (h < 180 || h > 300) {
			h = 220 + (h % 60);
		}
	}

	if (hsl.l < 0.4) {
		l = 0.62;
	} else if (hsl.l > 0.7) {
		l = 0.38;
	} else {
		l = 0.5;
	}

	return tinycolor({ h, s, l }).toHexString();
};
