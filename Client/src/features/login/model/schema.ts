import { z } from "zod";

export const LoginSchema = z.object({
	email: z.email({ error: "Please enter a valid email address" }),
	password: z
		.string()
		.min(8, { error: "Password must be at least 8 characters" })
		.regex(/[A-Z]/, { error: "Must contain at least one uppercase letter" })
		.regex(/[0-9]/, { error: "Must contain at least one number" })
});

export type LoginFormData = z.infer<typeof LoginSchema>;

export type LoginState = {
	fieldErrors?: {
		email?: string[];
		password?: string[];
	};
	error?: string;
};
