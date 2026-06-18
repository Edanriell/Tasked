import type { ReactNode } from "react";
import { Fragment } from "react";

export type UsersHeaderActionsProps = {
	children?: ReactNode;
};

export const UsersHeaderActions = ({ children }: Readonly<UsersHeaderActionsProps>) => {
	return <Fragment>{children}</Fragment>;
};
