"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import type { RegistrationState } from "../model";
import { RegistrationSchema } from "../model";

export const registrationAction = async (
	_prevState: RegistrationState,
	formData: FormData
): Promise<RegistrationState> => {
	const validationResult = RegistrationSchema.safeParse(Object.fromEntries(formData.entries()));

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
