export const BREAKPOINTS = {
	xl: 1600,
	lg: 1280,
	md: 1024,
	sm: 768
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;
