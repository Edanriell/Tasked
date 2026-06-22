import { formatMonthDay } from "@shared/lib/utils";
import { ICON, Icon, ProjectImage } from "@shared/ui";

type TaskRowProps = {
	imageUrl: string;
	description: string;
	projectName: string;
	dueDate: string;
	id: string;
	priority: string;
};

export const TaskRow = ({ imageUrl, projectName, description, dueDate, id, priority }: Readonly<TaskRowProps>) => {
	return (
		<article className="flex items-center justify-between border-[0.50px] border-solid border-(--white-pallete-10) rounded-[16px] px-[12px] py-[8px] bg-(--geek-blue-primary-opacity-200) backdrop-blur-[32px]">
			<div className="flex items-center gap-x-[12px]">
				<ProjectImage imageUrl={imageUrl} imageSize={24} iconSize={16} name={projectName} />
				<h3 className="font-(family-name:--font-barlow) font-semibold text-[14px] leading-[129%] tracking-[0.01em] text-(--geek-blue-1)">
					{description}
				</h3>
			</div>
			<div className="flex items-center">
				<div className="flex items-center gap-x-[4px] text-(--neutrals-2)">
					<time className="shrink-0 font-(family-name:--font-barlow) font-bold text-[10px] leading-[140%] tracking-[0.01em] uppercase">
						{formatMonthDay(dueDate as unknown as Date, { locale: "en-US", timeZone: "Europe/Riga" })}
					</time>
					<Icon className="shrink-0" type={ICON.Clock} size={10} />
				</div>
				{/*<Badge>{id}</Badge>*/}
				{/*<Badge>{priority}</Badge>*/}
			</div>
		</article>
	);
};
