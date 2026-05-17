import { Fragment } from "react";

const HomePage = () => {
	return (
		<Fragment>
			<main className="grid grid-cols-24 grid-rows-24 gap-[8px] h-full w-full">
				<section className="bg-slate-500 col-start-1 col-end-13 row-start-1 row-end-12">
					<p className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
						Private Notepad (Notes feature)
					</p>
				</section>
				<section className="bg-orange-400 col-start-13 col-end-19 row-start-1 row-end-12">
					<p className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
						Projects widget
					</p>
				</section>
				<section className="bg-green-700 col-start-19 col-end-25 row-start-1 row-end-12">
					<p className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
						Users widget
					</p>
				</section>
				<section className="bg-sky-400 col-start-1 col-end-7 row-start-12 row-end-14">
					<p className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
						Total tasks widget
					</p>
				</section>
				<section className="bg-indigo-500 col-start-7 col-end-13 row-start-12 row-end-14">
					<p className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
						Assignee Tasks widget
					</p>
				</section>
				<section className="bg-purple-600 col-start-13 col-end-19 row-start-12 row-end-14">
					<p className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
						Completed Tasks widget
					</p>
				</section>
				<section className="bg-fuchsia-400 col-start-19 col-end-25 row-start-12 row-end-14">
					<p className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
						Overdue Tasks widget
					</p>
				</section>
				<section className="bg-rose-700 col-start-1 col-end-25 row-start-14 row-end-25">
					<p className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
						Tasks widget
					</p>
				</section>
			</main>
		</Fragment>
	);
};

export default HomePage;
