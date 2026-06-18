type DeleteUserProps = {
	id?: string;
};

export const DeleteUser = ({ id }: Readonly<DeleteUserProps>) => {
	return <button>Delete {id}</button>;
};
