import { envClient } from "../config/env";

import type { ApiRequestOptions } from "./base-api-client";
import { BaseApiClient } from "./base-api-client";

const buildApiBaseUrl = (): string => {
	const apiUrl = new URL(envClient.NEXT_PUBLIC_API_BASE_URL);
	const normalizedVersion = envClient.NEXT_PUBLIC_API_VERSION.replace(/^\/+/, "");

	apiUrl.pathname = [apiUrl.pathname.replace(/\/$/, ""), normalizedVersion].filter(Boolean).join("/");

	return apiUrl.toString();
};

export class BrowserApiClient extends BaseApiClient {
	protected override async request<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
		return super.request<T>(path, {
			...options,
			credentials: options.credentials ?? "include"
		});
	}
}

export const browserApiClient = new BrowserApiClient(buildApiBaseUrl());
