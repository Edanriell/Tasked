import { ApiError } from "./api-error";

export type RequestParamPrimitive = string | number | boolean | Date;

export type RequestParamValue =
	| RequestParamPrimitive
	| Array<RequestParamPrimitive | null | undefined>
	| null
	| undefined;

export type RequestParams = Record<string, RequestParamValue>;

export type ApiRequestOptions = Omit<RequestInit, "body" | "method"> & {
	readonly method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
	readonly body?: unknown;
	readonly params?: RequestParams;
	readonly signal?: AbortSignal;
};

export class BaseApiClient {
	constructor(protected readonly baseUrl: string) {}

	public get<T>(path: string, options?: ApiRequestOptions): Promise<T> {
		return this.request<T>(path, {
			...options,
			method: "GET"
		});
	}

	public post<T>(path: string, body?: unknown, options?: ApiRequestOptions): Promise<T> {
		return this.request<T>(path, {
			...options,
			method: "POST",
			body
		});
	}

	public put<T>(path: string, body?: unknown, options?: ApiRequestOptions): Promise<T> {
		return this.request<T>(path, {
			...options,
			method: "PUT",
			body
		});
	}

	public patch<T>(path: string, body?: unknown, options?: ApiRequestOptions): Promise<T> {
		return this.request<T>(path, {
			...options,
			method: "PATCH",
			body
		});
	}

	public delete<T>(path: string, options?: ApiRequestOptions): Promise<T> {
		return this.request<T>(path, {
			...options,
			method: "DELETE"
		});
	}

	protected async request<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
		const { body, headers, params, ...fetchOptions } = options;

		const url = this.buildUrl(path, params);
		const requestHeaders = new Headers(headers);
		const requestBody = this.prepareBody(body);

		if (requestBody && !requestHeaders.has("Content-Type") && !(requestBody instanceof FormData)) {
			requestHeaders.set("Content-Type", "application/json");
		}

		const response = await fetch(url, {
			...fetchOptions,
			method: options.method ?? "GET",
			body: requestBody,
			headers: requestHeaders
		});

		if (response.status === 204 || response.status === 205) {
			return undefined as T;
		}

		const responseData = await this.parseResponse(response);

		if (!response.ok) {
			throw new ApiError(response.status, responseData);
		}

		return responseData as T;
	}

	protected async parseResponse(response: Response): Promise<unknown> {
		const contentType = response.headers.get("content-type") ?? "";
		const isJson = contentType.includes("application/json") || contentType.includes("application/problem+json");

		if (isJson) {
			return response.json().catch(() => null);
		}

		return response.text().catch(() => null);
	}

	protected prepareBody(body: unknown): BodyInit | undefined {
		if (body === undefined || body === null) {
			return undefined;
		}

		if (
			body instanceof FormData ||
			body instanceof URLSearchParams ||
			body instanceof Blob ||
			body instanceof ArrayBuffer ||
			ArrayBuffer.isView(body)
		) {
			return body as BodyInit;
		}

		if (typeof body === "string") {
			return body;
		}

		return JSON.stringify(body);
	}

	protected buildUrl(path: string, params?: RequestParams): string {
		const normalizedBase = this.baseUrl.endsWith("/") ? this.baseUrl : `${this.baseUrl}/`;
		const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

		const url = new URL(normalizedPath, normalizedBase);

		if (params) {
			Object.entries(params).forEach(([key, value]) => {
				if (value === undefined || value === null) {
					return;
				}

				if (Array.isArray(value)) {
					value.forEach((item) => {
						if (item === undefined || item === null) {
							return;
						}

						url.searchParams.append(key, item instanceof Date ? item.toISOString() : String(item));
					});

					return;
				}

				url.searchParams.set(key, value instanceof Date ? value.toISOString() : String(value));
			});
		}

		return url.toString();
	}
}
