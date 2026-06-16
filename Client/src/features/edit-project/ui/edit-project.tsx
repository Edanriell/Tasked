type EditProjectProps = {
	id?: string;
};

export const EditProject = ({ id }: Readonly<EditProjectProps>) => {
	return <button>Edit {id}</button>;
};
