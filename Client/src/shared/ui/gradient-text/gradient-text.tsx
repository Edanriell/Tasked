"use client";

import clsx from "clsx";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "motion/react";
import type { FC, ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

type GradientTextProps = {
	children: ReactNode;
	className?: string;
	colors?: string[];
	animationSpeed?: number;
	showBorder?: boolean;
	direction?: "horizontal" | "vertical" | "diagonal";
	pauseOnHover?: boolean;
	yoyo?: boolean;
};

export const GradientText: FC<GradientTextProps> = ({
	children,
	className = "",
	colors = ["#6872FF", "#A268FF", "#DC68FF", "#190DC0", "#6CB3FF"],
	animationSpeed = 3,
	showBorder = false,
	direction = "horizontal",
	pauseOnHover = false,
	yoyo = true
}) => {
	const [isPaused, setIsPaused] = useState<boolean>(false);
	const progress = useMotionValue<number>(0);
	const elapsedRef = useRef<number>(0);
	const lastTimeRef = useRef<number | null>(null);

	const animationDuration = animationSpeed * 1000;

	useAnimationFrame((time: number) => {
		if (isPaused) {
			lastTimeRef.current = null;
			return;
		}

		if (lastTimeRef.current === null) {
			lastTimeRef.current = time;
			return;
		}

		const deltaTime = time - lastTimeRef.current;
		lastTimeRef.current = time;
		elapsedRef.current += deltaTime;

		if (yoyo) {
			const fullCycle = animationDuration * 2;
			const cycleTime = elapsedRef.current % fullCycle;

			if (cycleTime < animationDuration) {
				progress.set((cycleTime / animationDuration) * 100);
			} else {
				progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100);
			}
		} else {
			progress.set((elapsedRef.current / animationDuration) * 100);
		}
	});

	useEffect(() => {
		elapsedRef.current = 0;
		progress.set(0);
	}, [animationSpeed, yoyo]);

	const backgroundPosition = useTransform(progress, (p) => {
		if (direction === "horizontal") {
			return `${p}% 50%`;
		} else if (direction === "vertical") {
			return `50% ${p}%`;
		} else {
			return `${p}% 50%`;
		}
	});

	const handleMouseEnter = useCallback(() => {
		if (pauseOnHover) setIsPaused(true);
	}, [pauseOnHover]);

	const handleMouseLeave = useCallback(() => {
		if (pauseOnHover) setIsPaused(false);
	}, [pauseOnHover]);

	const gradientAngle =
		direction === "horizontal" ? "to right" : direction === "vertical" ? "to bottom" : "to bottom right";

	const gradientColors = [...colors, colors[0]].join(", ");

	const gradientStyle = {
		backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
		backgroundSize: direction === "horizontal" ? "300% 100%" : direction === "vertical" ? "100% 300%" : "300% 300%",
		backgroundRepeat: "repeat"
	};

	return (
		<motion.span
			className={clsx(
				"relative flex max-w-fit flex-row items-center justify-center",
				"backdrop-blur transition-shadow duration-500 overflow-hidden",
				showBorder && "py-1 px-2",
				className
			)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{showBorder && (
				<motion.span
					className="absolute inset-0 z-0 pointer-events-none"
					style={{ ...gradientStyle, backgroundPosition }}
				>
					<div
						className="absolute bg-black z-[-1]"
						style={{
							width: "calc(100% - 2px)",
							height: "calc(100% - 2px)",
							left: "50%",
							top: "50%",
							transform: "translate(-50%, -50%)"
						}}
					/>
				</motion.span>
			)}
			<motion.span
				className={clsx("inline-block relative z-2 text-transparent bg-clip-text")}
				style={{ ...gradientStyle, backgroundPosition, WebkitBackgroundClip: "text" }}
			>
				{children}
			</motion.span>
		</motion.span>
	);
};
