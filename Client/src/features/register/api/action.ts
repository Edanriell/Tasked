"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import type { RegisterState } from "../model";
import { RegisterSchema } from "../model";

export const registrationAction = async (_prevState: RegisterState, formData: FormData): Promise<RegisterState> => {
	const validationResult = RegisterSchema.safeParse(formData);

	if (!validationResult.success) {
		return {
			errors: z.flattenError(validationResult.error).fieldErrors
		};
	}

	// TODO
	// Sending data
	// TanStack Query ?

	redirect("/");
};
