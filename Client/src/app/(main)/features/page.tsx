import type { Metadata } from "next";
import Link from "next/link";

import { ROUTES } from "@shared/config";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "Features | Tasked",
	description: "Explore the project, task, team, dashboard, and workspace features built into Tasked."
};

const LANES = [
	{
		title: "Project control",
		description: "Keep project state, settings, privacy, and ownership visible without opening multiple tools.",
		features: ["Pinned projects", "Private settings", "Assigned users"]
	},
	{
		title: "Task execution",
		description: "Turn project scope into prioritized work that can be scanned and acted on quickly.",
		features: ["Priority labels", "Today view", "Overdue view"]
	},
	{
		title: "Dashboard awareness",
		description: "Use flexible widgets to keep the signals your team checks most often close at hand.",
		features: ["Resizable widgets", "Progress totals", "Private notepad"]
	}
] as const;

const MATRIX = [
	["Dashboard", "Totals, today tasks, overdue tasks, completed work"],
	["Projects", "Project lists, settings, assigned users, task groups"],
	["People", "User rows, ownership, assignment visibility"],
	["Notes", "Private context stored beside the dashboard"]
] as const;

const FeaturesPage = () => {
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
				<section
					className="grid gap-[3rem] lg:grid-cols-[minmax(0,1fr)_18rem]"
					aria-labelledby="features-title"
				>
					<div>
						<p className="mb-[1rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Tasked features
						</p>
						<h1
							className="max-w-[56rem] font-(family-name:--font-barlow) text-[3.25rem] font-bold leading-[104%] tracking-[0.01em] text-(--white-pallete-100) md:text-[5rem]"
							id="features-title"
						>
							Features shaped around how delivery teams actually work.
						</h1>
						<p className="mt-[1.25rem] max-w-[40rem] font-(family-name:--font-barlow) text-[1rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80) md:text-[1.125rem]">
							Tasked keeps the important pieces of work management connected: projects, tasks, people,
							notes, and dashboard signals.
						</p>
						<div className="mt-[2rem] flex flex-wrap gap-[0.75rem]" aria-label="Feature actions">
							<Link
								className="rounded-[0.75rem] bg-(--geek-blue-7) px-[1.5rem] py-[0.75rem] font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100) capitalize shadow-geek-blue transition-colors hover:bg-(--geek-blue-6) focus-visible:bg-(--geek-blue-6) focus-visible:outline-none focus-visible:shadow-focus-blue"
								href={ROUTES.Registration}
							>
								Start planning
							</Link>
							<Link
								className="rounded-[0.75rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150) px-[1.5rem] py-[0.75rem] font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100) capitalize transition-colors hover:border-(--white-pallete-20) hover:bg-(--geek-blue-primary-opacity-200) focus-visible:border-(--geek-blue-4) focus-visible:outline-none focus-visible:shadow-focus-blue"
								href={ROUTES.Pricing}
							>
								View pricing
							</Link>
						</div>
					</div>
					<aside
						className="border-l-[0.031rem] border-solid border-(--white-pallete-10) pl-[1rem]"
						aria-label="Feature summary"
					>
						<p className="font-(family-name:--font-barlow) text-[4rem] font-bold leading-[90%] tracking-[0.01em] text-(--white-pallete-100)">
							4
						</p>
						<p className="mt-[0.75rem] font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Core work areas
						</p>
						<p className="mt-[1rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
							Each area feeds the same dashboard instead of becoming another isolated screen.
						</p>
					</aside>
				</section>
				<section className="mt-[5rem]" aria-labelledby="feature-lanes-title">
					<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
						Feature lanes
					</p>
					<h2
						className="mt-[0.5rem] max-w-[42rem] font-(family-name:--font-barlow) text-[2.25rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
						id="feature-lanes-title"
					>
						Three lanes, one delivery surface.
					</h2>
					<ul className="mt-[1.5rem] border-y-[0.031rem] border-solid border-(--white-pallete-10)">
						{LANES.map(({ title, description, features }, index) => (
							<li
								className="grid gap-[1rem] border-b-[0.031rem] border-solid border-(--white-pallete-10) py-[1.5rem] last:border-b-0 lg:grid-cols-[5rem_18rem_minmax(0,1fr)]"
								key={title}
							>
								<span className="font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--geek-blue-3)">
									0{index + 1}
								</span>
								<h3 className="font-(family-name:--font-barlow) text-[1.25rem] font-bold leading-[120%] tracking-[0.01em] text-(--white-pallete-100)">
									{title}
								</h3>
								<div>
									<p className="max-w-[38rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
										{description}
									</p>
									<ul
										className="mt-[1rem] flex flex-wrap gap-[0.5rem]"
										aria-label={`${title} features`}
									>
										{features.map((feature) => (
											<li
												className="rounded-[0.5rem] bg-(--geek-blue-primary-opacity-150) px-[0.75rem] py-[0.375rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase"
												key={feature}
											>
												{feature}
											</li>
										))}
									</ul>
								</div>
							</li>
						))}
					</ul>
				</section>
				<section
					className="mt-[5rem] grid gap-[1.5rem] lg:grid-cols-[20rem_minmax(0,1fr)]"
					aria-labelledby="feature-map-title"
				>
					<div>
						<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Workspace map
						</p>
						<h2
							className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2.25rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
							id="feature-map-title"
						>
							What each area carries.
						</h2>
					</div>
					<dl className="grid gap-[0.031rem] overflow-hidden rounded-[1rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--white-pallete-10)">
						{MATRIX.map(([label, detail]) => (
							<div
								className="grid gap-[0.5rem] bg-[rgba(1,0,9,0.32)] p-[1rem] md:grid-cols-[10rem_minmax(0,1fr)]"
								key={label}
							>
								<dt className="font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[140%] tracking-[0.01em] text-(--white-pallete-100) uppercase">
									{label}
								</dt>
								<dd className="font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
									{detail}
								</dd>
							</div>
						))}
					</dl>
				</section>
			</div>
		</div>
	);
};

export default FeaturesPage;
