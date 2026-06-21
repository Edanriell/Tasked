type TasksCount = {
	count: number;
};

const getTasksCount = (): Promise<TasksCount> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ count: 5 });
		}, 4000);
	});
};

export const TasksCount = async () => {
	const { count } = await getTasksCount();

	return (
		<span className="font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em] text-(--neutrals-3)">
			{count}
		</span>
	);
};
