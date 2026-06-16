type DeleteProjectProps = {
	id?: string;
};

export const DeleteProject = ({ id }: Readonly<DeleteProjectProps>) => {
	return <button>Delete {id}</button>;
};
