// TODO
// This should be in API layer
export type User = {
	id: string;
	fullName: string;
	imageUrl: string;
};

export type TaskSummary = {
	total: number;
	completed: number;
};

export type Project = {
	name: string;
	imageUrl: string;
	taskSummary: TaskSummary;
	assignedUsers: Array<User>;
};
