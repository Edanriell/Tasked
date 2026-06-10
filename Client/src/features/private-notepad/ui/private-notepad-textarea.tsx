type GetUserNoteResponse = {
	note: string;
};

const getUserNote = async (id: string): Promise<GetUserNoteResponse> => {
	const userId = id;

	return new Promise((resolve) => {
		return setTimeout(() => {
			resolve({
				note: "Some dummy text."
			});
		}, 6000);
	});
};

export const PrivateNotepadTextarea = async () => {
	const { note } = await getUserNote("1");

	return (
		<form className="flex flex-1">
			<label htmlFor="private-note" className="sr-only">
				Private Note
			</label>
			<textarea
				defaultValue={note}
				className="rounded-[10px] resize-none mt-[12px] ml-[12px] mr-[12px] mb-[8px] p-[4px] w-full font-(family-name:--font-barlow) font-medium text-[12px] leading-[133%] tracking-[0.01em] text-white placeholder:text-(--neutrals-3)"
				id="private-note"
				name="private-note"
				placeholder="Write down anything here..."
			/>
		</form>
	);
};
