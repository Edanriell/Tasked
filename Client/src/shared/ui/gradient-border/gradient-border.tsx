import type { FC } from "react";

export const GradientBorder: FC = () => {
	return (
		<svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
			<defs>
				<linearGradient id="reg-grad" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
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
						dur="8s"
						repeatCount="indefinite"
					/>
				</linearGradient>
				<mask id="reg-mask">
					<rect width="100%" height="100%" rx="24" fill="white" />
					<rect x="1.5" y="1.5" width="calc(100% - 3px)" height="calc(100% - 3px)" rx="22.5" fill="black" />
				</mask>
			</defs>
			<rect width="100%" height="100%" rx="24" fill="url(#reg-grad)" mask="url(#reg-mask)" />
		</svg>
	);
};
