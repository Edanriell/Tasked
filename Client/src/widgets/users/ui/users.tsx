import { clsx } from "clsx";
import type { ReactElement } from "react";
import { Children, isValidElement, Suspense } from "react";

import { UsersActions, UsersActionsProps } from "./users-actions";
import { UsersCount } from "./users-count";
import { UsersCountSkeleton } from "./users-count-skeleton";
import { UsersHeaderActions, UsersHeaderActionsProps } from "./users-header-actions";
import { UsersList } from "./users-list";
import { UsersListSkeleton } from "./users-list-skeleton";

type UsersComponents = {
	HeaderActions: typeof UsersHeaderActions;
	Actions: typeof UsersActions;
};

type UsersProps = {
	children?: ReactElement | ReactElement[];
};

type Users = ((props: Readonly<UsersProps>) => ReactElement) & UsersComponents;

const validateUsersChildren = (children: ReactElement | ReactElement[]) => {
	Children.forEach(children, (child) => {
		if (!((isValidElement(child) && child.type === Users.HeaderActions) || child.type === Users.Actions)) {
			throw new Error(`
				Component <Users> can only accept children of type <Users.HeaderActions> and <Users.Actions>.
				Received child of type ${child.type}.
				Please ensure that all children of <Users> are of the correct type. 
			`);
		}
	});
};

export const Users = (({ children }: Readonly<UsersProps>) => {
	let UsersHeaderActions: ReactElement<UsersHeaderActionsProps> | null = null;
	let UsersActions: ((projectId: string) => ReactElement) | null = null;

	if (children) {
		validateUsersChildren(children);
	}

	Children.forEach(children, (child) => {
		if (child?.type === Users.HeaderActions) {
			UsersHeaderActions = child as ReactElement<UsersHeaderActionsProps>;
		} else if (child?.type === Users.Actions) {
			UsersActions = (child as ReactElement<UsersActionsProps>).props.children;
		}
	});

	return (
		<section
			className={clsx(
				"border-[0.031rem] border-solid border-(--white-pallete-10) rounded-[1.25rem] bg-(--geek-blue-primary-opacity-100) px-[1rem] h-full overflow-y-auto",
				UsersHeaderActions ? "pb-[1rem] pt-[0.75rem]" : "py-[1rem]"
			)}
		>
			<header
				className={clsx(
					"flex items-center border-b-[0.031rem] border-solid border-(--white-pallete-10) mb-[0.75rem]",
					UsersHeaderActions ? "justify-between pb-[0.75rem]" : "justify-start pb-[1.25rem]"
				)}
			>
				<div className="flex items-center gap-x-[0.5rem]">
					<h2 className="font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em] text-(--white-pallete-100)">
						Users
					</h2>
					<Suspense fallback={<UsersCountSkeleton />}>
						<UsersCount />
					</Suspense>
				</div>
				{UsersHeaderActions}
			</header>
			<Suspense fallback={<UsersListSkeleton />}>
				<UsersList renderActions={UsersActions ?? undefined} />
			</Suspense>
		</section>
	);
}) as Users;

Users.HeaderActions = UsersHeaderActions;
Users.Actions = UsersActions;
