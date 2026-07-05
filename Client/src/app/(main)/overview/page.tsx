import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@shared/config";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "Overview | Tasked",
	description: "See how Tasked brings projects, tasks, teams, notes, and progress signals into one focused workspace."
};

const HIGHLIGHTS = [
	{
		label: "Projects",
		value: "12",
		description: "Active workspaces grouped by client, owner, and delivery state."
	},
	{
		label: "Tasks",
		value: "32",
		description: "Current priorities with due dates, assignees, and completion status."
	},
	{
		label: "Team",
		value: "18",
		description: "Assigned users visible beside the work they are responsible for."
	}
] as const;

const WORKFLOW_STEPS = [
	"Create projects and keep related tasks, contributors, and notes together.",
	"Use the dashboard to scan totals, overdue items, today tasks, and completed work.",
	"Open project views when a team needs deeper task lists, settings, or assignments."
] as const;

const DASHBOARD_TASKS = [
	{ title: "Prepare launch tasks", badge: "High", color: "bg-(--volcano-1000)" },
	{ title: "Review project notes", badge: "Medium", color: "bg-(--sunrise-yellow-101)" },
	{ title: "Assign design updates", badge: "Low", color: "bg-(--cyan-1000)" }
] as const;

const CAPABILITIES = [
	{
		title: "Plan",
		description: "Create projects, define tasks, and keep delivery context in one place."
	},
	{
		title: "Assign",
		description: "Connect work to the people responsible for moving it forward."
	},
	{
		title: "Track",
		description: "Review totals, overdue work, completed tasks, and today priorities."
	},
	{
		title: "Adjust",
		description: "Open focused project views when priorities, users, or settings change."
	}
] as const;

const OverviewPage = () => {
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
			<section className="relative mx-auto max-w-[82rem]" aria-labelledby="overview-title">
				<div className="relative flex flex-col gap-y-[5rem]">
					<div className="grid items-center gap-[2.5rem] lg:grid-cols-[minmax(0,0.94fr)_minmax(24rem,0.82fr)]">
						<div>
							<p className="mb-[1rem] max-w-fit rounded-[0.5rem] border-[0.031rem] border-solid border-(--white-pallete-15) bg-(--geek-blue-primary-opacity-150) px-[0.75rem] py-[0.375rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
								Workspace overview
							</p>
							<h1
								className="max-w-[43rem] font-(family-name:--font-barlow) text-[3rem] font-bold leading-[104%] tracking-[0.01em] text-(--white-pallete-100) md:text-[4.75rem]"
								id="overview-title"
							>
								One clear place for projects, tasks, people, and progress.
							</h1>
							<p className="mt-[1.25rem] max-w-[36rem] font-(family-name:--font-barlow) text-[1rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80) md:text-[1.125rem]">
								Tasked gives teams a focused command center for planning work, tracking delivery, and
								keeping private notes close to the dashboard they use every day.
							</p>
							<div className="mt-[2rem] flex flex-wrap gap-[0.75rem]" aria-label="Overview actions">
								<Link
									className="rounded-[0.75rem] bg-(--geek-blue-7) px-[1.5rem] py-[0.75rem] font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100) capitalize shadow-geek-blue transition-colors hover:bg-(--geek-blue-6) focus-visible:bg-(--geek-blue-6) focus-visible:outline-none focus-visible:shadow-focus-blue"
									href={ROUTES.Registration}
								>
									Start planning
								</Link>
								<Link
									className="rounded-[0.75rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150) px-[1.5rem] py-[0.75rem] font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100) capitalize transition-colors hover:border-(--white-pallete-20) hover:bg-(--geek-blue-primary-opacity-200) focus-visible:border-(--geek-blue-4) focus-visible:outline-none focus-visible:shadow-focus-blue"
									href={ROUTES.Features}
								>
									View features
								</Link>
							</div>
						</div>
						<aside
							className="rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.34)] p-[1rem] backdrop-blur-[3.625rem]"
							aria-labelledby="dashboard-preview-title"
						>
							<header className="flex items-center justify-between border-b-[0.031rem] border-solid border-(--white-pallete-10) pb-[0.875rem]">
								<div>
									<h2
										className="font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100)"
										id="dashboard-preview-title"
									>
										Dashboard preview
									</h2>
									<p className="mt-[0.25rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--neutrals-3) uppercase">
										Today workload
									</p>
								</div>
								<div className="flex -space-x-[0.5rem]" aria-label="Assigned teammates">
									<Image
										className="rounded-full border-[0.125rem] border-solid border-(--geek-blue-11) object-cover"
										src="/images/users/elena_petrova.jpg"
										alt="Elena Petrova"
										width={36}
										height={36}
									/>
									<Image
										className="rounded-full border-[0.125rem] border-solid border-(--geek-blue-11) object-cover"
										src="/images/users/john_block.jpg"
										alt="John Block"
										width={36}
										height={36}
									/>
									<Image
										className="rounded-full border-[0.125rem] border-solid border-(--geek-blue-11) object-cover"
										src="/images/users/sophie_laurent.jpg"
										alt="Sophie Laurent"
										width={36}
										height={36}
									/>
								</div>
							</header>
							<dl className="grid gap-[0.75rem] border-b-[0.031rem] border-solid border-(--white-pallete-10) py-[1rem] sm:grid-cols-3">
								{HIGHLIGHTS.map(({ label, value }) => (
									<div
										className="rounded-[0.75rem] bg-(--geek-blue-primary-opacity-100) p-[0.75rem]"
										key={label}
									>
										<dt className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--neutrals-3) uppercase">
											{label}
										</dt>
										<dd className="mt-[0.375rem] font-(family-name:--font-barlow) text-[1.5rem] font-bold leading-[125%] tracking-[0.01em] text-(--white-pallete-100)">
											{value}
										</dd>
									</div>
								))}
							</dl>
							<ul className="mt-[1rem] space-y-[0.625rem]" aria-label="Dashboard task preview">
								{DASHBOARD_TASKS.map(({ title, badge, color }) => (
									<li
										className="flex items-center justify-between gap-[1rem] rounded-[0.75rem] bg-(--geek-blue-primary-opacity-100) px-[0.875rem] py-[0.75rem]"
										key={title}
									>
										<span className="font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-90)">
											{title}
										</span>
										<span
											className={`${color} rounded-[0.375rem] px-[0.594rem] py-[0.188rem] text-center font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--white-pallete-100) uppercase`}
										>
											{badge}
										</span>
									</li>
								))}
							</ul>
							<div className="mt-[1rem] rounded-[0.875rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150) p-[0.875rem]">
								<p className="font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
									Private notepad
								</p>
								<p className="mt-[0.375rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[150%] tracking-[0.01em] text-(--white-pallete-80)">
									Capture quick delivery notes without leaving the dashboard.
								</p>
							</div>
						</aside>
					</div>
					<section
						className="rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.28)] p-[1rem] backdrop-blur-[3.625rem] md:p-[1.5rem]"
						aria-labelledby="overview-highlights-title"
					>
						<div className="mb-[1.5rem] flex flex-col justify-between gap-[1rem] md:flex-row md:items-end">
							<div>
								<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
									What stays visible
								</p>
								<h2
									className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
									id="overview-highlights-title"
								>
									The dashboard mirrors the way work is managed.
								</h2>
							</div>
							<p className="max-w-[30rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
								Each area in Tasked has a clear role: projects organize delivery, tasks carry the
								details, users show ownership, and metrics keep team leads oriented.
							</p>
						</div>
						<ul className="grid gap-[1rem] md:grid-cols-3">
							{HIGHLIGHTS.map(({ label, value, description }) => (
								<li
									className="rounded-[1rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-100) p-[1rem]"
									key={label}
								>
									<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--neutrals-3) uppercase">
										{label}
									</p>
									<p className="mt-[0.625rem] font-(family-name:--font-barlow) text-[2.25rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)">
										{value}
									</p>
									<p className="mt-[0.75rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
										{description}
									</p>
								</li>
							))}
						</ul>
					</section>
					<section
						className="grid gap-[1rem] lg:grid-cols-[0.72fr_minmax(0,1fr)]"
						aria-labelledby="overview-workflow-title"
					>
						<div className="rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-200) p-[1rem]">
							<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
								Workflow
							</p>
							<h2
								className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
								id="overview-workflow-title"
							>
								From project setup to daily execution.
							</h2>
						</div>
						<ol className="grid gap-[0.75rem] md:grid-cols-3">
							{WORKFLOW_STEPS.map((step, index) => (
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
					<section aria-labelledby="overview-capabilities-title">
						<div className="mb-[1.25rem]">
							<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
								Operating model
							</p>
							<h2
								className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
								id="overview-capabilities-title"
							>
								A simple loop for everyday delivery.
							</h2>
						</div>
						<ul className="grid gap-[1rem] md:grid-cols-2 lg:grid-cols-4">
							{CAPABILITIES.map(({ title, description }) => (
								<li
									className="rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.24)] p-[1rem]"
									key={title}
								>
									<h3 className="font-(family-name:--font-barlow) text-[1rem] font-bold leading-[120%] tracking-[0.01em] text-(--white-pallete-100)">
										{title}
									</h3>
									<p className="mt-[0.625rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
										{description}
									</p>
								</li>
							))}
						</ul>
					</section>
				</div>
			</section>
		</div>
	);
};

export default OverviewPage;
