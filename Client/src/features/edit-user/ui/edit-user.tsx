type EditUserProps = {
	id?: string;
};

export const EditUser = ({ id }: Readonly<EditUserProps>) => {
	return <button>Edit {id}</button>;
};
