import { getWidgetDefinition } from "../lib/utils/get-widget-definition";

interface Props {
	type: string;
	props?: Record<string, unknown>;
}

// Do we really need this ?

export const RenderGridLayoutManagerComponent = ({ type, props }: Props) => {
	const definition = getWidgetDefinition(type);

	const Component = definition.component;

	return <Component {...(props ?? {})} />;
};
