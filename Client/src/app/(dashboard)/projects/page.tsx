import { Fragment } from "react";

import { ViewHeader } from "@widgets/view-header";

import { CREATE_PROJECT_TRIGGER_VARIANT, CreateProject } from "@features/create-project";
import { Search } from "@features/search";

import { ICON } from "@shared/ui";

const ProjectsPage = () => {
	return (
		<Fragment>
			<ViewHeader title="Projects" icon={ICON.Projects}>
				<ViewHeader.Tools>
					<Search />
					<CreateProject triggerVariant={CREATE_PROJECT_TRIGGER_VARIANT.Button} />
				</ViewHeader.Tools>
			</ViewHeader>
			<main>
				<h1 className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
					Projects Page
				</h1>
			</main>
		</Fragment>
	);
};

export default ProjectsPage;
