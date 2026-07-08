export const getActionError = (errors: Record<string, string[] | undefined> | undefined, key: string) =>
	errors?.[key]?.[0];
