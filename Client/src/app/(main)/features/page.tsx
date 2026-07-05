import type { Metadata } from "next";
import Link from "next/link";

import { ROUTES } from "@shared/config";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "Features | Tasked",
	description: "Explore the project, task, team, dashboard, and workspace features built into Tasked."
};

const FEATURE_GROUPS = [
	{
		title: "Project Workspaces",
		description: "Group active work by project, client, owner, and delivery state.",
		items: ["Pinned projects", "Private project settings", "Assigned users"]
	},
	{
		title: "Task Management",
		description: "Track priorities, due dates, assignees, and completion without leaving the dashboard.",
		items: ["Priority labels", "Today tasks", "Overdue tracking"]
	},
	{
		title: "Team Visibility",
		description: "Keep contributors visible beside the projects and tasks they are responsible for.",
		items: ["User lists", "Assignee views", "Team totals"]
	},
	{
		title: "Dashboard Controls",
		description: "Arrange widgets around the signals your team checks most often.",
		items: ["Resizable layout", "Widget controls", "Progress metrics"]
	}
] as const;

const DASHBOARD_SIGNALS = [
	{ label: "Total tasks", value: "32", detail: "+12 last 7 days" },
	{ label: "Completed", value: "18", detail: "Delivery moving" },
	{ label: "Overdue", value: "04", detail: "Needs review" }
] as const;

const PRODUCT_FLOW = [
	"Create a project and define the delivery scope.",
	"Add tasks, assign owners, and set priority.",
	"Use dashboard widgets to monitor what needs attention.",
	"Open project views for settings, assignments, and deeper task lists."
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

			<div className="relative mx-auto flex max-w-[82rem] flex-col gap-y-[5rem]">
				<section
					className="grid items-center gap-[2.5rem] lg:grid-cols-[minmax(0,0.94fr)_minmax(24rem,0.82fr)]"
					aria-labelledby="features-title"
				>
					<div>
						<p className="mb-[1rem] max-w-fit rounded-[0.5rem] border-[0.031rem] border-solid border-(--white-pallete-15) bg-(--geek-blue-primary-opacity-150) px-[0.75rem] py-[0.375rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Tasked features
						</p>
						<h1
							className="max-w-[43rem] font-(family-name:--font-barlow) text-[3rem] font-bold leading-[104%] tracking-[0.01em] text-(--white-pallete-100) md:text-[4.75rem]"
							id="features-title"
						>
							Everything a team needs to keep work moving.
						</h1>
						<p className="mt-[1.25rem] max-w-[36rem] font-(family-name:--font-barlow) text-[1rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80) md:text-[1.125rem]">
							Tasked combines project organization, task execution, team visibility, and dashboard metrics
							into a focused workspace built for daily delivery.
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
								href={ROUTES.Overview}
							>
								View overview
							</Link>
						</div>
					</div>

					<aside
						className="rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.34)] p-[1rem] backdrop-blur-[3.625rem]"
						aria-labelledby="feature-preview-title"
					>
						<header className="border-b-[0.031rem] border-solid border-(--white-pallete-10) pb-[0.875rem]">
							<h2
								className="font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100)"
								id="feature-preview-title"
							>
								Live workspace signals
							</h2>
							<p className="mt-[0.25rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--neutrals-3) uppercase">
								Dashboard summary
							</p>
						</header>
						<dl className="grid gap-[0.75rem] py-[1rem]">
							{DASHBOARD_SIGNALS.map(({ label, value, detail }) => (
								<div
									className="flex items-center justify-between gap-[1rem] rounded-[0.875rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-100) p-[0.875rem]"
									key={label}
								>
									<div>
										<dt className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--neutrals-3) uppercase">
											{label}
										</dt>
										<dd className="mt-[0.25rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[150%] tracking-[0.01em] text-(--white-pallete-80)">
											{detail}
										</dd>
									</div>
									<p className="font-(family-name:--font-barlow) text-[1.5rem] font-bold leading-[125%] tracking-[0.01em] text-(--white-pallete-100)">
										{value}
									</p>
								</div>
							))}
						</dl>
					</aside>
				</section>

				<section aria-labelledby="feature-groups-title">
					<div className="mb-[1.5rem] flex flex-col justify-between gap-[1rem] md:flex-row md:items-end">
						<div>
							<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
								Core toolkit
							</p>
							<h2
								className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
								id="feature-groups-title"
							>
								Features organized around real delivery workflows.
							</h2>
						</div>
						<p className="max-w-[30rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
							Each feature set is designed to keep the dashboard useful without hiding important work
							inside disconnected screens.
						</p>
					</div>
					<ul className="grid gap-[1rem] md:grid-cols-2">
						{FEATURE_GROUPS.map(({ title, description, items }) => (
							<li
								className="rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.28)] p-[1rem] backdrop-blur-[3.625rem]"
								key={title}
							>
								<h3 className="font-(family-name:--font-barlow) text-[1.125rem] font-bold leading-[125%] tracking-[0.01em] text-(--white-pallete-100)">
									{title}
								</h3>
								<p className="mt-[0.625rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
									{description}
								</p>
								<ul className="mt-[1rem] grid gap-[0.5rem]" aria-label={`${title} capabilities`}>
									{items.map((item) => (
										<li
											className="rounded-[0.75rem] bg-(--geek-blue-primary-opacity-100) px-[0.875rem] py-[0.625rem] font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase"
											key={item}
										>
											{item}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</section>

				<section
					className="grid gap-[1rem] lg:grid-cols-[0.72fr_minmax(0,1fr)]"
					aria-labelledby="feature-flow-title"
				>
					<div className="rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-200) p-[1rem]">
						<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Product flow
						</p>
						<h2
							className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
							id="feature-flow-title"
						>
							From setup to daily tracking.
						</h2>
					</div>
					<ol className="grid gap-[0.75rem] md:grid-cols-2">
						{PRODUCT_FLOW.map((step, index) => (
							<li
								className="rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.24)] p-[1rem]"
								key={step}
							>
								<span className="flex size-[2rem] items-center justify-center rounded-[0.625rem] bg-(--geek-blue-primary-opacity-200) font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[120%] tracking-[0.01em] text-(--geek-blue-3)">
									{index + 1}
								</span>
								<p className="mt-[1rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
									{step}
								</p>
							</li>
						))}
					</ol>
				</section>
			</div>
		</div>
	);
};

export default FeaturesPage;
