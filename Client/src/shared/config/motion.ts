import type { MotionConfigProps } from "motion/react";

export const ANIMATIONS_BASE: MotionConfigProps = {
	reducedMotion: "user",
	transition: { type: "spring", duration: 0.25 }
};
