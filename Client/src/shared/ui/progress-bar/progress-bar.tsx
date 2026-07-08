import { clsx } from "clsx";

type ProgressBarProps = {
	total: number;
	completed: number;
	label?: string;
	className?: string;
};

export const ProgressBar = ({ total, completed, label = "Progress", className }: Readonly<ProgressBarProps>) => {
	const safeCompleted = Math.min(Math.max(completed, 0), total);
	const percentage = total > 0 ? Math.round((safeCompleted / total) * 100) : 0;

	return (
		<div className={clsx("relative w-[208px] h-[24px]", className)}>
			<span className="font-(family-name:--font-barlow) font-bold text-[10px] leading-[140%] tracking-[0.01em] uppercase text-(--white-pallete-100) absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				{percentage} of 100% done
			</span>
			<label htmlFor="percents" className="sr-only">
				{label}
			</label>
			<progress
				id="percents"
				className="w-full h-full rounded-[12px] border-[0.50px] border-solid border-(--white-pallete-10) overflow-hidden"
				value={safeCompleted}
				max={total || 1}
			>
				{percentage}%
			</progress>
		</div>
	);
};
