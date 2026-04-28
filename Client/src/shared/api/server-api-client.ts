import "server-only";

import { cookies } from "next/headers";

import { envServer } from "../config/env";

import type { ApiRequestOptions } from "./base-api-client";
import { BaseApiClient } from "./base-api-client";

const buildApiBaseUrl = (): string => {
	const apiUrl = new URL(envServer.NEXT_PUBLIC_API_BASE_URL);
	const normalizedVersion = envServer.NEXT_PUBLIC_API_VERSION.replace(/^\/+/, "");

	apiUrl.pathname = [apiUrl.pathname.replace(/\/$/, ""), normalizedVersion].filter(Boolean).join("/");

	return apiUrl.toString();
};

export class ServerApiClient extends BaseApiClient {
	protected override async request<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
		const cookieStore = await cookies();

		const cookieHeader = cookieStore
			.getAll()
			.map(({ name, value }) => `${name}=${value}`)
			.join("; ");

		const headers = new Headers(options.headers);

		if (cookieHeader) {
			headers.set("cookie", cookieHeader);
		}

		return super.request<T>(path, {
			...options,
			headers
		});
	}
}

export const serverApiClient = new ServerApiClient(buildApiBaseUrl());
