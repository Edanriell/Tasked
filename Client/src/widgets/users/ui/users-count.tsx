type UsersCount = {
	count: number;
};

const getUsersCount = (): Promise<UsersCount> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ count: 8 });
		}, 4000);
	});
};

export const UsersCount = async () => {
	const { count } = await getUsersCount();

	return (
		<span className="font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em] text-(--neutrals-3)">
			{count}
		</span>
	);
};
