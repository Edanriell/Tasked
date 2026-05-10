import { Icon, ICON } from "@shared/ui";

export const ChangeLog = () => {
	return (
		<section aria-labelledby="dashboard-improvements-title">
			<h3 id="dashboard-improvements-title" className="sr-only">
				Improvements
			</h3>
			<strong>Let&#39;s start!</strong>
			<p>Creating or adding new tasks couldn&#39;t be easier</p>
			<button type="button" aria-label="Open improvements">
				<Icon type={ICON.Improvements} />
				<span>Improvements</span>
			</button>
		</section>
	);
};
