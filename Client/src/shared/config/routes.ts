export type Route = (typeof ROUTES)[keyof typeof ROUTES];

export const ROUTES = {
	Home: "/",
	Registration: "/registration",
	Login: "/login",
	Overview: "/overview",
	Features: "/features",
	Pricing: "/pricing",
	About: "/about",
	Dashboard: "/",
	Tasks: "/tasks",
	Project: (id: string) => `/projects/${id}`,
	Projects: "/projects",
	Messages: "/messages",
	Settings: "/settings"
} as const;
