import type { ResizeDirection } from "../model/types";

type GridLayoutManagerResizeGrip = {
	direction: ResizeDirection;
	onPointerDown: (event: React.PointerEvent, direction: ResizeDirection) => void;
};

const directionClass = {
	n: "top-0 left-0 h-2 w-full cursor-n-resize",
	s: "bottom-0 left-0 h-2 w-full cursor-s-resize",
	e: "right-0 top-0 h-full w-2 cursor-e-resize",
	w: "left-0 top-0 h-full w-2 cursor-w-resize",
	ne: "top-0 right-0 h-4 w-4 cursor-ne-resize",
	nw: "top-0 left-0 h-4 w-4 cursor-nw-resize",
	se: "bottom-0 right-0 h-4 w-4 cursor-se-resize",
	sw: "bottom-0 left-0 h-4 w-4 cursor-sw-resize"
} as const;

export const GridLayoutManagerResizeGrip = ({ direction, onPointerDown }: Readonly<GridLayoutManagerResizeGrip>) => {
	return (
		<div
			className={`absolute z-50 ${directionClass[direction]}`}
			onPointerDown={(event) => {
				event.stopPropagation();
				event.nativeEvent.stopImmediatePropagation();
				onPointerDown(event, direction);
			}}
		/>
	);
};
