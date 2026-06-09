import type { Filter, SearchGroup } from "../model/types";

export const FILTERS: Array<Filter> = ["all", "users", "projects", "tasks"] as const;

export const GROUPS: Array<SearchGroup> = ["users", "projects", "tasks"] as const;
