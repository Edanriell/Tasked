import type { Metadata } from "next";
import Link from "next/link";

import { ROUTES } from "@shared/config";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "About | Tasked",
	description: "Learn why Tasked exists and how it helps teams keep projects, tasks, people, and progress aligned."
};

const BELIEFS = [
	"Work should be easy to scan before it is easy to edit.",
	"Ownership belongs beside the task, not in a separate report.",
	"Dashboards should help teams decide what to do next."
] as const;

const RHYTHM = [
	{ label: "Plan", description: "Capture the project, scope, and working context." },
	{ label: "Assign", description: "Make ownership visible at the same level as the work." },
	{ label: "Review", description: "Read dashboard signals before priorities drift." },
	{ label: "Move", description: "Act from focused project and task views." }
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
			<div className="relative mx-auto max-w-[82rem]">
				<section className="grid gap-[3rem] lg:grid-cols-[minmax(0,1fr)_24rem]" aria-labelledby="about-title">
					<div>
						<p className="mb-[1rem] font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							About Tasked
						</p>
						<h1
							className="max-w-[58rem] font-(family-name:--font-barlow) text-[3.25rem] font-bold leading-[104%] tracking-[0.01em] text-(--white-pallete-100) md:text-[5rem]"
							id="about-title"
						>
							We believe project work should feel visible before it feels managed.
						</h1>
					</div>
					<div className="self-end border-t-[0.031rem] border-solid border-(--white-pallete-10) pt-[1rem]">
						<p className="font-(family-name:--font-barlow) text-[1rem] font-medium leading-[170%] tracking-[0.01em] text-(--white-pallete-80)">
							Tasked is built for teams that want less scattered tracking and more practical momentum:
							projects, tasks, people, notes, and signals in one calm operating view.
						</p>
						<div className="mt-[1.5rem] flex flex-wrap gap-[0.75rem]" aria-label="About actions">
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
				</section>
				<section
					className="mt-[5rem] grid gap-[2rem] lg:grid-cols-[18rem_minmax(0,1fr)]"
					aria-labelledby="beliefs-title"
				>
					<div>
						<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
							What guides us
						</p>
						<h2
							className="mt-[0.5rem] font-(family-name:--font-barlow) text-[2.25rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
							id="beliefs-title"
						>
							Three product beliefs.
						</h2>
					</div>
					<ol className="grid gap-[0.75rem]">
						{BELIEFS.map((belief, index) => (
							<li
								className="grid gap-[1rem] rounded-[1rem] border-[0.031rem] border-solid border-(--white-pallete-10) bg-[rgba(1,0,9,0.32)] p-[1.25rem] md:grid-cols-[4rem_minmax(0,1fr)]"
								key={belief}
							>
								<span className="font-(family-name:--font-barlow) text-[1rem] font-bold leading-[120%] tracking-[0.01em] text-(--geek-blue-3)">
									0{index + 1}
								</span>
								<p className="font-(family-name:--font-barlow) text-[1.25rem] font-bold leading-[140%] tracking-[0.01em] text-(--white-pallete-100)">
									{belief}
								</p>
							</li>
						))}
					</ol>
				</section>
				<section className="mt-[5rem]" aria-labelledby="rhythm-title">
					<p className="font-(family-name:--font-barlow) text-[0.625rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3) uppercase">
						Delivery rhythm
					</p>
					<h2
						className="mt-[0.5rem] max-w-[42rem] font-(family-name:--font-barlow) text-[2.25rem] font-bold leading-[112%] tracking-[0.01em] text-(--white-pallete-100)"
						id="rhythm-title"
					>
						The product is organized around the way teams move work.
					</h2>
					<ol className="mt-[1.5rem] grid gap-[1rem] md:grid-cols-4">
						{RHYTHM.map(({ label, description }, index) => (
							<li
								className="border-l-[0.031rem] border-solid border-(--white-pallete-10) pl-[1rem]"
								key={label}
							>
								<span className="font-(family-name:--font-barlow) text-[0.75rem] font-bold leading-[140%] tracking-[0.01em] text-(--geek-blue-3)">
									0{index + 1}
								</span>
								<h3 className="mt-[0.75rem] font-(family-name:--font-barlow) text-[1.125rem] font-bold leading-[125%] tracking-[0.01em] text-(--white-pallete-100)">
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
