import type { Metadata } from "next";
import Link from "next/link";

import { ROUTES } from "@shared/config";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "Pricing | Tasked",
	description: "Choose a Tasked plan for project tracking, task management, team visibility, and dashboard workflows."
};

const PLANS = [
	{
		name: "Starter",
		price: "$0",
		period: "forever",
		description: "For individuals and small teams organizing their first shared workspace.",
		features: ["3 active projects", "Basic task tracking", "Private notepad", "Dashboard summary"],
		cta: "Start free",
		highlighted: false
	},
	{
		name: "Team",
		price: "$12",
		period: "per user / month",
		description: "For teams that need project ownership, assignments, and delivery metrics.",
		features: ["Unlimited projects", "Team assignments", "Resizable dashboard", "Priority and overdue views"],
		cta: "Choose team",
		highlighted: true
	},
	{
		name: "Scale",
		price: "$29",
		period: "per user / month",
		description: "For larger teams that need stronger control over projects and visibility.",
		features: ["Advanced project settings", "Team-wide reporting", "Private workspaces", "Priority support"],
		cta: "Choose scale",
		highlighted: false
	}
] as const;

const INCLUDED_FEATURES = [
	"Project dashboards",
	"Task priority labels",
	"Assigned user views",
	"Today and overdue widgets",
	"Private notes",
	"Dashboard layout controls"
] as const;

const PricingPage = () => {
	return (
		<div className="relative isolate overflow-x-clip px-[1rem] pb-[4rem] pt-[1rem] md:px-[2.5rem] md:pb-[6rem] md:pt-[2rem]">
			<div
				className="pointer-events-none absolute top-[-8rem] right-0 bottom-0 left-0 -z-20 bg-(--geek-blue-11) bg-brand-violet"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute top-[-8rem] right-0 bottom-0 left-0 -z-10 bg-vignette"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute top-[-8rem] right-0 bottom-0 left-0 -z-10 bg-[rgba(1,0,9,0.34)]"
				aria-hidden="true"
			/>

			<div className="relative mx-auto flex max-w-[82rem] flex-col gap-y-[5rem]">
				<section className="max-w-[52rem]" aria-labelledby="pricing-title">
					<p className="mb-[1rem] max-w-fit rounded-[0.5rem] border-[0.031rem] border-solid border-(--white-pallete-15) bg-(--geek-blue-primary-opacity-150) px-[0.75rem] py-[0.375rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
						Tasked pricing
					</p>
					<h1
						className="font-(family-name:--font-barlow) text-[3rem] font-bold leading-[104%] tracking-[0.01em] text-(--white-pallete-100) md:text-[4.75rem]"
						id="pricing-title"
					>
						Simple plans for focused project delivery.
					</h1>
					<p className="mt-[1.25rem] max-w-[38rem] font-(family-name:--font-barlow) text-[1rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80) md:text-[1.125rem]">
						Start with the workspace basics, then scale into stronger team visibility, project controls, and
						dashboard metrics as your delivery process grows.
					</p>
				</section>

				<section aria-labelledby="plans-title">
					<div className="mb-[1.5rem] flex flex-col justify-between gap-[1rem] md:flex-row md:items-end">
						<div>
							<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
								Plans
							</p>
							<h2
								className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
								id="plans-title"
							>
								Pick the workspace size that matches your team.
							</h2>
						</div>
						<p className="max-w-[30rem] rounded-[0.75rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-100) px-[0.875rem] py-[0.625rem] font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Monthly billing
						</p>
					</div>
					<ul className="grid gap-[1rem] lg:grid-cols-3">
						{PLANS.map(({ name, price, period, description, features, cta, highlighted }) => (
							<li
								className={
									highlighted
										? "rounded-[1.25rem] border-[0.031rem] border-solid border-(--geek-blue-4) bg-(--geek-blue-primary-opacity-200) p-[1rem] shadow-geek-blue"
										: "rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.28)] p-[1rem] backdrop-blur-[3.625rem]"
								}
								key={name}
							>
								<div className="flex items-start justify-between gap-[1rem]">
									<div>
										<h3 className="font-(family-name:--font-barlow) text-[1.25rem] font-bold leading-[120%] tracking-[0.01em] text-(--white-pallete-100)">
											{name}
										</h3>
										<p className="mt-[0.625rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
											{description}
										</p>
									</div>
									{highlighted && (
										<span className="rounded-[0.5rem] bg-(--geek-blue-7) px-[0.625rem] py-[0.25rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--white-pallete-100) uppercase">
											Popular
										</span>
									)}
								</div>
								<p className="mt-[1.5rem] font-(family-name:--font-barlow) text-[3rem] font-bold leading-[104%] tracking-[0.01em] text-(--white-pallete-100)">
									{price}
								</p>
								<p className="mt-[0.25rem] font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[140%] tracking-[0.01em] text-(--neutrals-3) uppercase">
									{period}
								</p>
								<ul className="mt-[1.5rem] grid gap-[0.5rem]" aria-label={`${name} plan features`}>
									{features.map((feature) => (
										<li
											className="rounded-[0.75rem] bg-(--geek-blue-primary-opacity-100) px-[0.875rem] py-[0.625rem] font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[140%] tracking-[0.01em] text-(--white-pallete-90)"
											key={feature}
										>
											{feature}
										</li>
									))}
								</ul>
								<Link
									className={
										highlighted
											? "mt-[1.5rem] block rounded-[0.75rem] bg-(--geek-blue-7) px-[1.5rem] py-[0.75rem] text-center font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100) capitalize shadow-geek-blue transition-colors hover:bg-(--geek-blue-6) focus-visible:bg-(--geek-blue-6) focus-visible:outline-none focus-visible:shadow-focus-blue"
											: "mt-[1.5rem] block rounded-[0.75rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150) px-[1.5rem] py-[0.75rem] text-center font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100) capitalize transition-colors hover:border-(--white-pallete-20) hover:bg-(--geek-blue-primary-opacity-200) focus-visible:border-(--geek-blue-4) focus-visible:outline-none focus-visible:shadow-focus-blue"
									}
									href={ROUTES.Registration}
								>
									{cta}
								</Link>
							</li>
						))}
					</ul>
				</section>

				<section
					className="grid gap-[1rem] lg:grid-cols-[0.72fr_minmax(0,1fr)]"
					aria-labelledby="included-title"
				>
					<div className="rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-200) p-[1rem]">
						<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Included
						</p>
						<h2
							className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
							id="included-title"
						>
							Every plan keeps the core workflow intact.
						</h2>
					</div>
					<ul className="grid gap-[0.75rem] md:grid-cols-2">
						{INCLUDED_FEATURES.map((feature) => (
							<li
								className="rounded-[1rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.24)] p-[1rem] font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[150%] tracking-[0.01em] text-(--white-pallete-90)"
								key={feature}
							>
								{feature}
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
};

export default PricingPage;
