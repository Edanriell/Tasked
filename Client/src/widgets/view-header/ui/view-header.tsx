import { Children, isValidElement, ReactElement } from "react";

import { Icon, IconType, ProjectImage } from "@shared/ui";

import { ViewHeaderActions } from "./view-header-actions";
import { ViewHeaderInfo } from "./view-header-info";
import { ViewHeaderTools } from "./view-header-tools";

type ViewHeaderComponents = {
	Info: typeof ViewHeaderInfo;
	Actions: typeof ViewHeaderActions;
	Tools: typeof ViewHeaderTools;
};

type ViewHeaderProps = {
	title: string;
	icon?: IconType;
	imageUrl?: string;
	children?: ReactElement | ReactElement[];
};

type ViewHeader = ((props: Readonly<ViewHeaderProps>) => ReactElement) & ViewHeaderComponents;

const validateViewHeaderChildren = (children: ReactElement | ReactElement[]) => {
	Children.forEach(children, (child) => {
		if (
			!(
				(isValidElement(child) && child.type === ViewHeader.Info) ||
				child.type === ViewHeader.Actions ||
				child.type === ViewHeader.Tools
			)
		) {
			throw new Error(`
				Component <ViewHeader> can only accept children of type <ViewHeader.Info>, <ViewHeader.Actions> and <ViewHeader.Tools>.
				Received child of type ${child.type}.
				Please ensure that all children of <ViewHeader> are of the correct type. 
			`);
		}
	});
};

export const ViewHeader = (({ title, imageUrl, icon, children }: Readonly<ViewHeaderProps>) => {
	let ViewHeaderInfo = null;
	let ViewHeaderActions = null;
	let ViewHeaderTools = null;

	if (children) {
		validateViewHeaderChildren(children);
	}

	Children.forEach(children, (child) => {
		if (child?.type === ViewHeader.Info) {
			ViewHeaderInfo = child;
		} else if (child?.type === ViewHeader.Actions) {
			ViewHeaderActions = child;
		} else if (child?.type === ViewHeader.Tools) {
			ViewHeaderTools = child;
		}
	});

	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center">
				<div className="flex items-center">
					{icon && !imageUrl && (
						<div>
							<Icon type={icon} />
						</div>
					)}
					{imageUrl && (
						<ProjectImage
							name={title}
							imageUrl={imageUrl}
							imageSize={32}
							iconSize={20}
							imageClasses="p-[6px]"
						/>
					)}
					<h1 className="font-(family-name:--font-barlow)">{title}</h1>
				</div>
				{ViewHeaderInfo}
				{ViewHeaderActions}
			</div>
			{ViewHeaderTools}
		</div>
	);
}) as ViewHeader;

ViewHeader.Info = ViewHeaderInfo;
ViewHeader.Actions = ViewHeaderActions;
ViewHeader.Tools = ViewHeaderTools;
