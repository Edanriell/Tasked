import { interpolate } from "flubber";
import { animate, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

type UseMorphPathParameters = {
	from: string;
	to: string;
	isActive: boolean;
};

export const useMorphPath = ({ from, to, isActive }: UseMorphPathParameters) => {
	const interpolatedPath = interpolate(from, to, {
		maxSegmentLength: 1
	});

	const animationProgress = useMotionValue<number>(0);
	const pathD = useTransform(animationProgress, interpolatedPath);

	useEffect(() => {
		const pathAnimation = animate(animationProgress, isActive ? 1 : 0, {
			duration: 0.42,
			ease: [0.23, 1, 0.32, 1]
		});

		return () => pathAnimation.stop();
	}, [isActive, animationProgress]);

	return { path: pathD };
};
