import Link from "next/link";

import { FeaturedClients, GradientText } from "@shared/ui";

const RegistrationPage = () => {
	return (
		<section
			className="relative rounded-[1.5rem] p-[1.5rem] backdrop-blur-[2.5rem] bg-[rgba(1, 0, 9, 0.6)]"
			aria-labelledby="form-heading"
		>
			<div className="w-full h-full grid grid-cols-[420px_340px] gap-[3rem] grid-rows-auto">
				<div className="relative">
					<h1 className="font-(family-name:--font-barlow) font-bold text-[3rem] tracking-[0.01em] text-(--white-pallete-100)">
						<span>Join Over 2568+</span>
						<GradientText
							className="font-(family-name:--font-barlow)! font-bold! text-[3rem]! tracking-[0.01em]! cursor-text"
							colors={["#3254ff", "#cda2ff"]}
							animationSpeed={4}
						>
							Expert Designers
						</GradientText>
					</h1>
					<p className="font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[133%] tracking-[0.01em] text-(--white-pallete-100)">
						We take pride in offering unparalleled customer support to ensure your experience with our
						platforms
					</p>
					<FeaturedClients />
				</div>
				<div className="relative">
					<h2 id="form-heading">Register your account</h2>
					<form action="">
						<div>
							<label htmlFor="">Full Name</label>
							<input type="text" placeholder="Please write data" />
						</div>
						<div>
							<label htmlFor="">Email</label>
							<input type="email" placeholder="Please write data" />
						</div>
						<div>
							<label htmlFor="">Password</label>
							<input type="password" placeholder="Please write data" />
						</div>
						<button type="submit">Register Account</button>
					</form>
					<p>
						Already Have An Account — <Link href="/login">Sign In Here</Link>
					</p>
					<button type="button">SignUp With Google Account</button>
				</div>
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
