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

	const endpoint = process.env.REGISTRATION_API_URL;

	if (!endpoint) {
		return {
			message: "Registration service is temporarily unavailable."
		};
	}

	try {
		const response = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(validationResult.data),
			cache: "no-store"
		});

		if (!response.ok) {
			let message = "Something went wrong while creating your account. Please try again.";
			const contentType = response.headers.get("content-type") || "";

			if (contentType.includes("application/json")) {
				const payload = (await response.json()) as { message?: string };
				message = payload.message || message;
			}

			return { message };
		}

		// Redirect should happen only after confirmed success response.
		redirect("/");

		return {
			success: true,
			message: "Account created successfully."
		};
	} catch {
		return {
			message: "Network error. Please check your connection and try again."
		};
	}
};
