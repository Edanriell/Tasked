import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@shared/config";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "Overview | Tasked",
	description: "See how Tasked brings projects, tasks, teams, notes, and progress signals into one focused workspace."
};

const SIGNALS = [
	{ label: "Active projects", value: "12" },
	{ label: "Open tasks", value: "32" },
	{ label: "Team members", value: "18" }
] as const;

const WORKFLOW = [
	{
		title: "Plan the work",
		description: "Create projects with tasks, owners, and the delivery context your team needs."
	},
	{
		title: "Read the dashboard",
		description: "Scan totals, overdue work, today tasks, completion, and assignments in one place."
	},
	{
		title: "Move with focus",
		description: "Open the right project view when priorities, people, or settings need attention."
	}
] as const;

const DASHBOARD_ROWS = [
	{ label: "Launch checklist", status: "High", color: "bg-(--volcano-1000)" },
	{ label: "Project notes review", status: "Medium", color: "bg-(--sunrise-yellow-101)" },
	{ label: "Assign design updates", status: "Low", color: "bg-(--cyan-1000)" }
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
			<div className="relative mx-auto max-w-[82rem]">
				<section
					className="grid gap-[3rem] lg:grid-cols-[minmax(0,1fr)_23rem]"
					aria-labelledby="overview-title"
				>
					<div>
						<p className="mb-[1rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Workspace overview
						</p>
						<h1
							className="max-w-[54rem] font-(family-name:--font-barlow) text-[3.25rem] font-bold leading-[104%] tracking-[0.01em] text-(--white-pallete-100) md:text-[5rem]"
							id="overview-title"
						>
							A dashboard that makes the shape of work obvious.
						</h1>
						<p className="mt-[1.25rem] max-w-[38rem] font-(family-name:--font-barlow) text-[1rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80) md:text-[1.125rem]">
							Tasked gives teams one operating view for project state, daily task pressure, ownership, and
							private working notes.
						</p>
						<dl className="mt-[2.5rem] grid border-y-[0.031rem] border-solid border-(--white-pallete-10) py-[1rem] md:grid-cols-3">
							{SIGNALS.map(({ label, value }) => (
								<div
									className="py-[0.75rem] md:border-r-[0.031rem] md:border-(--white-pallete-10) md:px-[1rem] md:first:pl-0 md:last:border-r-0"
									key={label}
								>
									<dt className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--neutrals-3) uppercase">
										{label}
									</dt>
									<dd className="mt-[0.375rem] font-(family-name:--font-barlow) text-[2rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)">
										{value}
									</dd>
								</div>
							))}
						</dl>
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
						className="self-start rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.34)] p-[1rem] backdrop-blur-[3.625rem]"
						aria-labelledby="overview-preview-title"
					>
						<header className="flex items-center justify-between border-b-[0.031rem] border-solid border-(--white-pallete-10) pb-[0.875rem]">
							<div>
								<h2
									className="font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100)"
									id="overview-preview-title"
								>
									Today workload
								</h2>
								<p className="mt-[0.25rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--neutrals-3) uppercase">
									Live view
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
						<ul
							className="mt-[1rem] divide-y divide-(--white-pallete-10)"
							aria-label="Task priority preview"
						>
							{DASHBOARD_ROWS.map(({ label, status, color }) => (
								<li className="flex items-center justify-between gap-[1rem] py-[0.875rem]" key={label}>
									<span className="font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-90)">
										{label}
									</span>
									<span
										className={`${color} rounded-[0.375rem] px-[0.594rem] py-[0.188rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--white-pallete-100) uppercase`}
									>
										{status}
									</span>
								</li>
							))}
						</ul>
					</aside>
				</section>
				<section
					className="mt-[5rem] grid gap-[1.5rem] lg:grid-cols-[20rem_minmax(0,1fr)]"
					aria-labelledby="overview-workflow-title"
				>
					<div>
						<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							Operating rhythm
						</p>
						<h2
							className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2.25rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
							id="overview-workflow-title"
						>
							Plan, read, move.
						</h2>
					</div>
					<ol className="grid gap-[0.031rem] border-y-[0.031rem] border-solid border-(--white-pallete-10)">
						{WORKFLOW.map(({ title, description }, index) => (
							<li
								className="grid gap-[1rem] border-b-[0.031rem] border-solid border-(--white-pallete-10) py-[1.25rem] last:border-b-0 md:grid-cols-[4rem_minmax(0,1fr)]"
								key={title}
							>
								<span className="font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--geek-blue-3)">
									0{index + 1}
								</span>
								<div>
									<h3 className="font-(family-name:--font-barlow) text-[1.125rem] font-bold leading-[125%] tracking-[0.01em] text-(--white-pallete-100)">
										{title}
									</h3>
									<p className="mt-[0.5rem] max-w-[38rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
										{description}
									</p>
								</div>
							</li>
						))}
					</ol>
				</section>
			</div>
		</div>
	);
};

export default OverviewPage;
