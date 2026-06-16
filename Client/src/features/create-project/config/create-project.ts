export const CREATE_PROJECT_TRIGGER_VARIANT = {
	Icon: "Icon",
	Button: "Button"
} as const;

export type CreateProjectTriggerVariant = keyof typeof CREATE_PROJECT_TRIGGER_VARIANT;
