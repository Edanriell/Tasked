export type ApiErrorPayload =
	| string
	| {
			message?: string;
			title?: string;
			detail?: string;
			code?: string;
			[key: string]: unknown;
	  }
	| null;

export type ApiErrorResolution = {
	message: string;
	shouldLog: boolean;
};

export const resolveErrorMessage = (status: number, payload: ApiErrorPayload): string => {
	if (typeof payload === "string" && payload.trim()) {
		return payload;
	}

	if (payload && typeof payload === "object") {
		if (typeof payload.message === "string" && payload.message.trim()) {
			return payload.message;
		}

		if (typeof payload.detail === "string" && payload.detail.trim()) {
			return payload.detail;
		}

		if (typeof payload.title === "string" && payload.title.trim()) {
			return payload.title;
		}
	}

	return `Request failed with status ${status}`;
};

export const resolveApiError = (error: ApiError): ApiErrorResolution => {
	switch (error.status) {
		case 400:
		case 409:
		case 422:
			return {
				message: error.message,
				shouldLog: false
			};
		case 401:
			return {
				message: "You must sign in.",
				shouldLog: false
			};
		case 403:
			return {
				message: "You do not have access.",
				shouldLog: false
			};
		case 404:
			return {
				message: "Resource not found.",
				shouldLog: false
			};
		default:
			if (error.status >= 500) {
				return {
					message: "Something went wrong. Please try again later.",
					shouldLog: true
				};
			}

			return {
				message: error.message,
				shouldLog: false
			};
	}
};

export class ApiError<TPayload = ApiErrorPayload> extends Error {
	public readonly status: number;

	public readonly payload: TPayload;

	constructor(status: number, payload: TPayload) {
		super(resolveErrorMessage(status, payload as ApiErrorPayload));

		this.name = "ApiError";
		this.status = status;
		this.payload = payload;

		Object.setPrototypeOf(this, new.target.prototype);
	}
}
