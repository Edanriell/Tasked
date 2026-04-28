export type ApiErrorPayload =
	| string
	| {
			message?: string;
			[key: string]: unknown;
	  }
	| null;

const resolveErrorMessage = (status: number, payload: ApiErrorPayload): string => {
	if (typeof payload === "string" && payload.trim()) {
		return payload;
	}

	if (payload && typeof payload === "object" && typeof payload.message === "string" && payload.message.trim()) {
		return payload.message;
	}

	return `Request failed with status ${status}`;
};

export class ApiError<TPayload = ApiErrorPayload> extends Error {
	public readonly status: number;

	public readonly payload: TPayload;

	constructor(status: number, payload: TPayload) {
		super(resolveErrorMessage(status, payload as ApiErrorPayload));

		this.name = "ApiError";
		this.status = status;
		this.payload = payload;

		Object.setPrototypeOf(this, ApiError.prototype);
	}
}
