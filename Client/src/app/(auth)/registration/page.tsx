import type { FC } from "react";

import { Registration } from "@features/register";

import { Divider, FeaturedClients, GradientText } from "@shared/ui";

const FEATURED_CLIENTS = [
	{ image: "/images/users/jensen_ackles.jpg", fullName: "Jensen Ackles" },
	{ image: "/images/users/jared_padalecki.jpg", fullName: "Jared Padalecki" },
	{ image: "/images/users/robert_palka.jpg", fullName: "Robert Palka" },
	{ image: "/images/users/bartozs_zmarzlik.jpg", fullName: "Bartozs Zmarzlik" },
	{ image: "/images/users/rupert_grind.jpg", fullName: "Rupert Grind" },
	{ image: "/images/users/john_block.jpg", fullName: "John Block" }
];

const RegistrationPage: FC = () => {
	return (
		<section className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[1.5rem] p-[1.5rem] backdrop-blur-[2.5rem] bg-[rgba(1, 0, 9, 0.6)]">
			<h1 className="sr-only">Create new account</h1>
			<div className="grid grid-cols-[420px_340px] gap-[3rem]">
				<div className="relative">
					<p className="font-(family-name:--font-barlow) font-bold text-[3rem] tracking-[0.01em] text-(--white-pallete-100)">
						<span>Join Over 2568+</span>
						<GradientText
							className="font-(family-name:--font-barlow)! font-bold! text-[3rem]! tracking-[0.01em]! cursor-text"
							colors={["#3254ff", "#cda2ff"]}
							animationSpeed={4}
						>
							Expert Designers
						</GradientText>
					</p>
					<p className="font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[133%] tracking-[0.01em] text-(--white-pallete-100) mt-[0.875rem]">
						We take pride in offering unparalleled customer support to ensure your experience with our
						platforms
					</p>
					<FeaturedClients
						clients={FEATURED_CLIENTS}
						label="Over 2568+ Designers & Creators Love Our Platform"
						classes="mt-[1.5rem] mr-[5.188rem]"
					/>
					<Divider classes="absolute bottom-0 left-0" />
				</div>
				<Registration />
			</div>
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
						<rect
							x="1.5"
							y="1.5"
							width="calc(100% - 3px)"
							height="calc(100% - 3px)"
							rx="22.5"
							fill="black"
						/>
					</mask>
				</defs>
				<rect width="100%" height="100%" rx="24" fill="url(#reg-grad)" mask="url(#reg-mask)" />
			</svg>
		</section>
	);
};

export default RegistrationPage;
