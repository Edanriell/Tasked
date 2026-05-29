import { clsx } from "clsx";
import type { ReactElement } from "react";

type ViewHeaderInfoProps = {
	children: ReactElement | ReactElement[];
	isActionsPresent?: boolean;
};

export const ViewHeaderInfo = ({ children, isActionsPresent }: Readonly<ViewHeaderInfoProps>) => {
	return (
		<div
			className={clsx(
				"relative flex items-center px-[1rem]",
				isActionsPresent && "border-r-[0.031rem] border-solid border-(--white-pallete-10)"
			)}
		>
			{children}
		</div>
	);
};
