export const CREATE_USER_TRIGGER_VARIANT = {
	Icon: "Icon",
	Button: "Button"
} as const;

export type CreateUserTriggerVariant = keyof typeof CREATE_USER_TRIGGER_VARIANT;
