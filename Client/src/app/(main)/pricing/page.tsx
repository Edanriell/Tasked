import type { Metadata } from "next";
import Link from "next/link";

import { ROUTES } from "@shared/config";

// export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "Pricing | Tasked",
	description: "Choose a Tasked plan for project tracking, task management, team visibility, and dashboard workflows."
};

const PLANS = [
	{ name: "Starter", price: "$0", period: "forever", fit: "Solo operators and small internal experiments" },
	{ name: "Team", price: "$12", period: "user / month", fit: "Teams coordinating active project delivery" },
	{ name: "Scale", price: "$29", period: "user / month", fit: "Larger teams that need stronger controls" }
] as const;

const ROWS = [
	["Active projects", "3", "Unlimited", "Unlimited"],
	["Dashboard widgets", "Core", "Resizable", "Resizable plus reporting"],
	["Team assignments", "Basic", "Included", "Advanced"],
	["Project settings", "Standard", "Private projects", "Private workspaces"],
	["Support", "Community", "Priority", "Priority plus onboarding"]
] as const;

const INCLUDED = ["Private notepad", "Task priority labels", "Today task view", "Overdue task view"] as const;

// TODO Make cards more visaully rich
// Redesign !
// Active projects
//
// 3
//
// Unlimited
//
// Unlimited
//
// Dashboard widgets
//
// Core
//
// Resizable
//
// Resizable plus reporting
//
// Team assignments
//
// Basic
//
// Included
//
// Advanced
//
// Project settings
//
// Standard
//
// Private projects
//
// Private workspaces
//
// Support
//
// Community
//
// Priority
//
// Priority plus onboarding

// Create pretty animations using motion !

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
			<div className="relative mx-auto max-w-[82rem]">
				<section className="grid gap-[2rem] lg:grid-cols-[minmax(0,1fr)_18rem]" aria-labelledby="pricing-title">
					<div>
						<p className="mb-[1rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Tasked pricing
						</p>
						<h1
							className="max-w-[54rem] font-(family-name:--font-barlow) text-[3.25rem] font-bold leading-[104%] tracking-[0.01em] text-(--white-pallete-100) md:text-[5rem]"
							id="pricing-title"
						>
							Pricing that scales with team coordination.
						</h1>
						<p className="mt-[1.25rem] max-w-[38rem] font-(family-name:--font-barlow) text-[1rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80) md:text-[1.125rem]">
							Start with the basics, then add stronger assignment visibility, dashboard control, and
							project governance as your delivery process grows.
						</p>
					</div>
					<aside className="border-l-[0.031rem] border-solid border-(--white-pallete-10) pl-[1rem]">
						<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Billing
						</p>
						<p className="mt-[0.625rem] font-(family-name:--font-barlow) text-[1.5rem] font-bold leading-[125%] tracking-[0.01em] text-(--white-pallete-100)">
							Monthly
						</p>
						<p className="mt-[0.625rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
							Plans are shown as simple monthly workspace pricing for the static marketing page.
						</p>
					</aside>
				</section>
				<section className="mt-[5rem]" aria-labelledby="plans-title">
					<h2 className="sr-only" id="plans-title">
						Plan comparison
					</h2>
					<div className="grid gap-[1rem] lg:grid-cols-3">
						{PLANS.map(({ name, price, period, fit }) => (
							<article
								className={
									name === "Team"
										? "relative flex min-h-[21rem] flex-col rounded-[1.25rem] border-[0.031rem] border-solid border-(--geek-blue-4) bg-(--geek-blue-primary-opacity-200) p-[1.25rem] shadow-geek-blue backdrop-blur-[3.625rem]"
										: "flex min-h-[21rem] flex-col rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.34)] p-[1.25rem] backdrop-blur-[3.625rem]"
								}
								key={name}
							>
								<header className="flex items-start justify-between gap-[1rem]">
									<div>
										<h3 className="font-(family-name:--font-barlow) text-[1.25rem] font-bold leading-[120%] tracking-[0.01em] text-(--white-pallete-100)">
											{name}
										</h3>
										<p className="mt-[0.625rem] font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[140%] tracking-[0.01em] text-(--neutrals-3) uppercase">
											{period}
										</p>
									</div>
									{name === "Team" && (
										<span className="rounded-[0.5rem] bg-(--geek-blue-7) px-[0.625rem] py-[0.25rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--white-pallete-100) uppercase">
											Popular
										</span>
									)}
								</header>
								<p className="mt-[1.5rem] font-(family-name:--font-barlow) text-[3.5rem] font-bold leading-[96%] tracking-[0.01em] text-(--white-pallete-100)">
									{price}
								</p>
								<p className="mt-[1.25rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
									{fit}
								</p>
								<Link
									className={
										name === "Team"
											? "mt-auto block rounded-[0.75rem] bg-(--geek-blue-7) px-[1.5rem] py-[0.75rem] text-center font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100) capitalize shadow-geek-blue transition-colors hover:bg-(--geek-blue-6) focus-visible:bg-(--geek-blue-6) focus-visible:outline-none focus-visible:shadow-focus-blue"
											: "mt-auto block rounded-[0.75rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150) px-[1.5rem] py-[0.75rem] text-center font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100) capitalize transition-colors hover:border-(--white-pallete-20) hover:bg-(--geek-blue-primary-opacity-200) focus-visible:border-(--geek-blue-4) focus-visible:outline-none focus-visible:shadow-focus-blue"
									}
									href={ROUTES.Registration}
								>
									Choose {name}
								</Link>
							</article>
						))}
					</div>
				</section>
				<section
					className="mt-[5rem] grid gap-[1.5rem] lg:grid-cols-[16rem_minmax(0,1fr)]"
					aria-labelledby="comparison-title"
				>
					<div>
						<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Compare
						</p>
						<h2
							className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2.25rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
							id="comparison-title"
						>
							What changes by plan.
						</h2>
					</div>
					<div className="grid gap-[0.031rem] overflow-hidden rounded-[1rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--white-pallete-10)">
						{ROWS.map(([feature, starter, team, scale]) => (
							<div
								className="grid gap-[0.031rem] bg-(--white-pallete-10) md:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]"
								key={feature}
							>
								<p className="bg-[rgba(1,0,9,0.34)] p-[0.875rem] font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[140%] tracking-[0.01em] text-(--white-pallete-100) uppercase">
									{feature}
								</p>
								{[starter, team, scale].map((value, index) => (
									<p
										className="bg-[rgba(1,0,9,0.24)] p-[0.875rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[150%] tracking-[0.01em] text-(--white-pallete-80)"
										key={`${feature}-${index}`}
									>
										{value}
									</p>
								))}
							</div>
						))}
					</div>
				</section>
				<section className="mt-[5rem]" aria-labelledby="included-title">
					<h2
						className="font-(family-name:--font-barlow) text-[2.25rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
						id="included-title"
					>
						Every plan includes the daily workflow.
					</h2>
					<ul className="mt-[1rem] flex flex-wrap gap-[0.5rem]">
						{INCLUDED.map((feature) => (
							<li
								className="rounded-[0.5rem] bg-(--geek-blue-primary-opacity-150) px-[0.75rem] py-[0.375rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase"
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
