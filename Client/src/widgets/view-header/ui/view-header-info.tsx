import { ReactElement } from "react";

type ViewHeaderInfoProps = {
	children: ReactElement | ReactElement[];
};

export const ViewHeaderInfo = ({ children }: Readonly<ViewHeaderInfoProps>) => {
	return <div>{children}</div>;
};
