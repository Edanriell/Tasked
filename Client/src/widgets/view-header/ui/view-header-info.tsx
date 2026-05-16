import { ReactElement } from "react";

type ViewHeaderInfoProps = {
	children: ReactElement | ReactElement[];
};

export const ViewHeaderInfo = ({ children }: Readonly<ViewHeaderInfoProps>) => {
	return <div className="border-r-[0.031rem] border-solid border-(--white-pallete-10) px-[1rem]">{children}</div>;
};
