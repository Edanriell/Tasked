type ProjectsCount = {
	count: number;
};

const getProjectsCount = (): Promise<ProjectsCount> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ count: 4 });
		}, 4000);
	});
};

export const ProjectsCount = async () => {
	const { count } = await getProjectsCount();

	return (
		<span className="font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em] text-(--neutrals-3)">
			{count}
		</span>
	);
};
