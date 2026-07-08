"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { ApiError, resolveApiError, serverApiClient } from "@shared/api";
import { ROUTES } from "@shared/config";

import type { LoginFormData } from "../model";
import { LoginSchema, LoginState } from "../model";

export const loginAction = async (_prevState: LoginState, formData: FormData): Promise<LoginState> => {
	const loginFormData = Object.fromEntries(formData.entries());
	const validationResult = LoginSchema.safeParse(loginFormData);

	if (!validationResult.success) {
		return {
			fieldErrors: {
				...z.flattenError(validationResult.error).fieldErrors
			}
		};
	}

	const payload: LoginFormData = validationResult.data;

	try {
		await serverApiClient.post<void>(ROUTES.Login, payload);
	} catch (error) {
		if (error instanceof ApiError) {
			const resolved = resolveApiError(error);

			if (resolved.shouldLog) {
				console.error(error);
			}

			return {
				error: resolved.message
			};
		}

		return {
			error: "Network error. Please check your connection and try again."
		};
	}

	redirect(ROUTES.Home);
};
