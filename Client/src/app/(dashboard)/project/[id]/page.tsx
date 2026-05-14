type ProjectPageProps = {
	params: Promise<{ id: string }>;
};

const ProjectPage = async ({ params }: Readonly<ProjectPageProps>) => {
	const { id: projectId } = await params;

	return (
		<h1 className="font-(family-name:--font-barlow) font-bold leading-[1.125rem] tracking-[0.01em] text-(--white-pallete-100)">
			Project Page {projectId}
		</h1>
	);
};

export default ProjectPage;
