import { Button, Icon, ICON } from "@shared/ui";

export const ChangeLog = () => {
	return (
		<section
			className="relative mt-[auto] ml-[0.75rem] mr-[0.75rem] mb-[0.75rem] pt-[1.5rem] pl-[1rem] pb-[1rem] pr-[1rem] shadow-[0_4rem_4rem_-2rem_rgba(102,37,0,0.25)] bg-[rgba(3,8,82,0.1)] rounded-[1.75rem] radial-gradient-border"
			aria-labelledby="dashboard-improvements-title"
		>
			<h3 id="dashboard-improvements-title" className="sr-only">
				Improvements
			</h3>
			<strong className="block font-(family-name:--font-barlow) font-bold text-[1rem] leading-[125%] tracking-[0.01em] text-(--white-pallete-100) mb-[0.5rem] text-center z-10">
				Let&#39;s start!
			</strong>
			<p className="font-(family-name:--font-barlow) font-medium text-[0.75rem] leading-[133%] tracking-[0.01em] text-(--neutrals-2) text-center mb-[1.5rem] z-10">
				Creating or adding new tasks couldn&#39;t be easier
			</p>
			<Button
				className="flex items-center gap-x-[0.25rem] font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em] text-(--white-pallete-100) z-10 py-[1rem]"
				aria-label="Open improvements"
			>
				<Icon type={ICON.Improvements} size={16} />
				<span>Improvements</span>
			</Button>
		</section>
	);
};
