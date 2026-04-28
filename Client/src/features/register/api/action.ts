"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { ApiError, resolveApiError, serverApiClient } from "@shared/api";
import { ROUTES } from "@shared/config";

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

	try {
		await serverApiClient.post<void>(ROUTES.Registration, validationResult.data);
	} catch (error) {
		if (error instanceof ApiError) {
			const resolved = resolveApiError(error);

			if (resolved.shouldLog) {
				console.error(error);
			}

			return {
				message: resolved.message
			};
		}

		return {
			message: "Network error. Please check your connection and try again."
		};
	}

	redirect(ROUTES.Dashboard);
};
