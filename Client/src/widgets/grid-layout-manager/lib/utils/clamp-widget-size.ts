import { clamp } from "./clamp";

export const clampWidgetSize = ({
	w,
	h,
	minW,
	minH,
	maxW,
	maxH
}: {
	w: number;
	h: number;
	minW: number;
	minH: number;
	maxW: number;
	maxH: number;
}) => {
	return {
		w: clamp(w, minW, maxW),
		h: clamp(h, minH, maxH)
	};
};
