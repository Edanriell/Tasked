import type { Metadata } from "next";
import Link from "next/link";

import { ROUTES } from "@shared/config";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "About | Tasked",
	description: "Learn why Tasked exists and how it helps teams keep projects, tasks, people, and progress aligned."
};

const PRINCIPLES = [
	{
		title: "Clarity first",
		description: "Every screen should make the next important task, project, or decision easier to see."
	},
	{
		title: "Built for daily use",
		description: "Tasked keeps repeated workflows fast, readable, and close to the dashboard."
	},
	{
		title: "Ownership matters",
		description: "Projects and tasks stay connected to the people responsible for moving them forward."
	}
] as const;

const FOCUS_AREAS = [
	"Project visibility",
	"Task ownership",
	"Team coordination",
	"Dashboard control",
	"Private notes",
	"Delivery signals"
] as const;

const TIMELINE = [
	{
		label: "Plan",
		description: "Create projects with enough context for the team to understand what matters."
	},
	{
		label: "Coordinate",
		description: "Assign work, track priorities, and keep contributors visible."
	},
	{
		label: "Deliver",
		description: "Use metrics and focused views to keep daily work moving."
	}
] as const;

const AboutPage = () => {
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
					aria-labelledby="about-title"
				>
					<div>
						<p className="mb-[1rem] max-w-fit rounded-[0.5rem] border-[0.031rem] border-solid border-(--white-pallete-15) bg-(--geek-blue-primary-opacity-150) px-[0.75rem] py-[0.375rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							About Tasked
						</p>
						<h1
							className="max-w-[43rem] font-(family-name:--font-barlow) text-[3rem] font-bold leading-[104%] tracking-[0.01em] text-(--white-pallete-100) md:text-[4.75rem]"
							id="about-title"
						>
							A workspace built around visible, accountable work.
						</h1>
						<p className="mt-[1.25rem] max-w-[38rem] font-(family-name:--font-barlow) text-[1rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80) md:text-[1.125rem]">
							Tasked exists to reduce the distance between project planning and daily execution. It keeps
							projects, tasks, people, notes, and progress signals in one practical dashboard.
						</p>
						<div className="mt-[2rem] flex flex-wrap gap-[0.75rem]" aria-label="About actions">
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
						aria-labelledby="about-summary-title"
					>
						<h2
							className="font-(family-name:--font-barlow) text-[0.875rem] font-bold leading-[114%] tracking-[0.01em] text-(--white-pallete-100)"
							id="about-summary-title"
						>
							What Tasked focuses on
						</h2>
						<p className="mt-[0.625rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
							A compact operating layer for teams that want less scattered tracking and more visible
							momentum.
						</p>
						<ul className="mt-[1rem] grid gap-[0.5rem] sm:grid-cols-2">
							{FOCUS_AREAS.map((area) => (
								<li
									className="rounded-[0.75rem] bg-(--geek-blue-primary-opacity-100) px-[0.875rem] py-[0.625rem] font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase"
									key={area}
								>
									{area}
								</li>
							))}
						</ul>
					</aside>
				</section>

				<section aria-labelledby="principles-title">
					<div className="mb-[1.5rem] flex flex-col justify-between gap-[1rem] md:flex-row md:items-end">
						<div>
							<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
								Product principles
							</p>
							<h2
								className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
								id="principles-title"
							>
								Designed for teams that need practical visibility.
							</h2>
						</div>
						<p className="max-w-[30rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
							The product avoids heavy process for its own sake. The goal is to make project state,
							ownership, and next actions easy to scan.
						</p>
					</div>
					<ul className="grid gap-[1rem] md:grid-cols-3">
						{PRINCIPLES.map(({ title, description }) => (
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
							</li>
						))}
					</ul>
				</section>

				<section
					className="grid gap-[1rem] lg:grid-cols-[0.72fr_minmax(0,1fr)]"
					aria-labelledby="workflow-title"
				>
					<div className="rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-200) p-[1rem]">
						<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							How it works
						</p>
						<h2
							className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
							id="workflow-title"
						>
							A simple delivery rhythm.
						</h2>
					</div>
					<ol className="grid gap-[0.75rem] md:grid-cols-3">
						{TIMELINE.map(({ label, description }, index) => (
							<li
								className="rounded-[1.25rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.24)] p-[1rem]"
								key={label}
							>
								<span className="flex size-[2rem] items-center justify-center rounded-[0.625rem] bg-(--geek-blue-primary-opacity-200) font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[120%] tracking-[0.01em] text-(--geek-blue-3)">
									{index + 1}
								</span>
								<h3 className="mt-[1rem] font-(family-name:--font-barlow) text-[1rem] font-bold leading-[120%] tracking-[0.01em] text-(--white-pallete-100)">
									{label}
								</h3>
								<p className="mt-[0.625rem] font-(family-name:--font-barlow) text-[0.875rem] font-medium leading-[160%] tracking-[0.01em] text-(--white-pallete-80)">
									{description}
								</p>
							</li>
						))}
					</ol>
				</section>
			</div>
		</div>
	);
};

export default AboutPage;
