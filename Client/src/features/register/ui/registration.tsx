"use client";

import Link from "next/link";
import type { FC } from "react";
import { useActionState } from "react";

import { Button, Icon, ICON, Input, SubmitButton, ValidationErrorMessage } from "@shared/ui";

import { registrationAction } from "../api";
import type { RegistrationState } from "../model";

export const Registration: FC = () => {
	const [state, action] = useActionState<RegistrationState, FormData>(registrationAction, null);

	return (
		<section className="relative z-[100] border-[0.031rem] border-solid border-(--white-pallete-20) rounded-[1rem] px-[2rem] py-[3rem] backdrop-blur-[3.625rem] bg-[rgba(1,0,9,0.15)] overflow-hidden">
			<svg
				className="absolute top-0 right-0 z-10"
				width="277"
				height="301"
				viewBox="0 0 277 301"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_f_488_129570)">
					<circle cx="246.518" cy="54.0254" r="110" fill="url(#paint0_radial_488_129570)" />
				</g>
				<defs>
					<filter
						id="filter0_f_488_129570"
						x="0.000244141"
						y="-192.492"
						width="493.035"
						height="493.035"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="68.2587" result="effect1_foregroundBlur_488_129570" />
					</filter>
					<radialGradient
						id="paint0_radial_488_129570"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(246.518 54.0254) rotate(90) scale(110)"
					>
						<stop stopColor="#1D39C4" />
						<stop offset="1" stopColor="#1D39C4" stopOpacity="0" />
					</radialGradient>
				</defs>
			</svg>
			<h2 className="font-(family-name:--font-barlow) font-bold text-[1.375rem] leading-[127%] tracking-[0.01em] text-center text-(--white-pallete-100) capitalize mb-[2rem] relative z-20">
				Register your account
			</h2>
			<ValidationErrorMessage classes="mb-[1rem]" message={state?.message} />
			<form className="relative z-20 flex flex-col gap-y-[1rem]" action={action} noValidate>
				<div className="relative">
					<Input
						label="Full name"
						name="fullName"
						type="text"
						aria-describedby={state?.errors?.fullName ? "fullName-error" : undefined}
					/>
					<ValidationErrorMessage classes="mt-[0.5rem]" message={state?.errors?.fullName![0]} />
				</div>
				<div className="relative">
					<Input
						label="Email"
						name="email"
						type="email"
						aria-describedby={state?.errors?.email ? "email-error" : undefined}
					/>
					<ValidationErrorMessage classes="mt-[0.5rem]" message={state?.errors?.email![0]} />
				</div>
				<div className="relative">
					<Input
						label="Password"
						name="password"
						type="password"
						aria-describedby={state?.errors?.password ? "password-error" : undefined}
					/>
					<ValidationErrorMessage classes="mt-[0.5rem]" message={state?.errors?.password![0]} />
				</div>
				<SubmitButton classes="w-full mt-[1rem]">Register Account</SubmitButton>
			</form>
			<p className="relative z-20 font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[133%] tracking-[0.01em] text-center text-(--neutrals-3) my-[1rem]">
				Already Have An Account —{" "}
				<Link className="text-(--geek-blue-4)" href="/login">
					Sign In Here
				</Link>
			</p>
			<Button classes="relative z-20 w-full" variant="secondary" type="button">
				<span className="flex items-center justify-center gap-x-[0.25rem]">
					<Icon name={ICON.Google} />
					<span>SignUp With Google Account</span>
				</span>
			</Button>
			<svg
				className="absolute bottom-0 left-0 z-10"
				width="340"
				height="489"
				viewBox="0 0 340 489"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_f_488_129571)">
					<circle cx="104" cy="437.775" r="261" fill="url(#paint0_radial_488_129571)" />
				</g>
				<defs>
					<filter
						id="filter0_f_488_129571"
						x="-333.776"
						y="-0.000274658"
						width="875.551"
						height="875.551"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="88.3878" result="effect1_foregroundBlur_488_129571" />
					</filter>
					<radialGradient
						id="paint0_radial_488_129571"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(104 437.775) rotate(90) scale(261)"
					>
						<stop stopColor="#1A34B6" />
						<stop offset="1" stopColor="#1D39C4" stopOpacity="0" />
					</radialGradient>
				</defs>
			</svg>
		</section>
	);
};
