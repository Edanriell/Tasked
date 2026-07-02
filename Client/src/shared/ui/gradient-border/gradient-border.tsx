import { useId } from "react";

type GradientBorderProps = {
	thickness?: number;
	radius?: number;
	animationDuration?: number;
};

export const GradientBorder = ({
	thickness = 2,
	radius = 24,
	animationDuration = 8
}: Readonly<GradientBorderProps>) => {
	const gradientBorderId = `gradient-border-${useId().replaceAll(":", "")}`;

	return (
		<svg
			className="pointer-events-none absolute inset-0 h-full w-full"
			shapeRendering="geometricPrecision"
			aria-hidden="true"
			preserveAspectRatio="none"
		>
			<defs>
				<linearGradient id={gradientBorderId} gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
					<stop offset="9%" stopColor="#6872FF" />
					<stop offset="28%" stopColor="#A268FF" />
					<stop offset="47%" stopColor="#DC68FF" />
					<stop offset="75%" stopColor="#190DC0" />
					<stop offset="100%" stopColor="#6CB3FF" />
					<animateTransform
						attributeName="gradientTransform"
						type="rotate"
						from="0 0.5 0.5"
						to="360 0.5 0.5"
						dur={`${animationDuration}s`}
						repeatCount="indefinite"
					/>
				</linearGradient>
			</defs>
			<rect
				x={thickness / 2}
				y={thickness / 2}
				width={`calc(100% - ${thickness}px)`}
				height={`calc(100% - ${thickness}px)`}
				rx={Math.max(radius - thickness / 2, 0)}
				fill="none"
				stroke={`url(#${gradientBorderId})`}
				strokeWidth={thickness}
			/>
		</svg>
	);
};
