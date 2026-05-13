export type Route = (typeof ROUTES)[keyof typeof ROUTES];

export type StaticRoute = Exclude<(typeof ROUTES)[keyof typeof ROUTES], (id: string) => string>;

export const ROUTES = {
	Home: "/",
	Registration: "/registration",
	Login: "/login",
	Overview: "/overview",
	Features: "/features",
	Pricing: "/pricing",
	About: "/about",
	Tasks: "/tasks",
	Projects: "/projects",
	Messages: "/messages",
	Settings: "/settings",

	Project: (id: string) => `/projects/${id}`
} as const;
