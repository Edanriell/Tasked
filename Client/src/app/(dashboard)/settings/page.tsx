import { Fragment } from "react";

import { ViewHeader } from "@widgets/view-header";

import { CreateTask } from "@features/create-task";
import { Search } from "@features/search";

import { ICON } from "@shared/ui";

const SettingsPage = () => {
	return (
		<Fragment>
			<ViewHeader title="Settings" icon={ICON.Settings}>
				<ViewHeader.Tools>
					<Search />
					<CreateTask />
				</ViewHeader.Tools>
			</ViewHeader>
			<main>
				<h1 className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
					Settings Page
				</h1>
			</main>
		</Fragment>
	);
};

export default SettingsPage;
