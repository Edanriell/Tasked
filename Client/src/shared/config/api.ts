// TODO
// Just an example

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const api = {
	users: `${API_BASE}/users`,
	settings: `${API_BASE}/settings`,

	user: (id: string) => `${API_BASE}/users/${id}`
} as const;
