import type { FC } from "react";

import { Registration } from "@features/register";

import { Divider, FeaturedClients, GradientBorder, GradientText } from "@shared/ui";

const RegistrationPage: FC = () => {
	return (
		<section className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[1.5rem] p-[1.5rem] backdrop-blur-[2.5rem] bg-[rgba(1,0,9,0.6)]">
			<h1 className="sr-only">Create new account</h1>
			<div className="grid grid-cols-[26.25rem_21.25rem] gap-[3rem]">
				<div className="relative">
					<p className="font-(family-name:--font-barlow) font-bold leading-[normal] text-[3rem] tracking-[0.01em] text-(--white-pallete-100)">
						<span>Join Over 2568+</span>
						<GradientText
							className="font-(family-name:--font-barlow)! font-bold! text-[3rem]! tracking-[0.01em]! cursor-text"
							colors={["#3254ff", "#cda2ff"]}
							animationSpeed={4}
						>
							Expert Designers
						</GradientText>
					</p>
					<p className="font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[1rem] tracking-[0.01em] text-(--white-pallete-100) mt-[0.875rem]">
						We take pride in offering unparalleled customer support to ensure your experience with our
						platforms
					</p>
					<FeaturedClients classes="mt-[1.5rem] mr-[5.188rem]" />
					<Divider classes="absolute bottom-0 left-0" />
				</div>
				<Registration />
			</div>
			<GradientBorder />
		</section>
	);
};

export default RegistrationPage;
