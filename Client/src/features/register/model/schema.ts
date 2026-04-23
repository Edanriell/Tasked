import { z } from "zod";

export const RegistrationSchema = z.object({
	fullName: z
		.string()
		.min(2, { error: "Full name must be at least 2 characters" })
		.max(100, { error: "Full name is too long" }),
	email: z.email({ error: "Please enter a valid email address" }),
	password: z
		.string()
		.min(8, { error: "Password must be at least 8 characters" })
		.regex(/[A-Z]/, { error: "Must contain at least one uppercase letter" })
		.regex(/[0-9]/, { error: "Must contain at least one number" })
});

export type RegistrationFormData = z.infer<typeof RegistrationSchema>;

export type RegistrationState = {
	errors?: {
		fullName?: string[];
		email?: string[];
		password?: string[];
	};
	message?: string;
	success?: boolean;
} | null;
