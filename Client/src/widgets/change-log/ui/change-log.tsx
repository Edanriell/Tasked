import { FC } from "react";

export const ChangeLog: FC = () => {
	return (
		<section aria-labelledby="dashboard-improvements-title">
			<h3 id="dashboard-improvements-title" className="sr-only">
				Improvements
			</h3>
			<strong>Let&#39;s start!</strong>
			<p>Creating or adding new tasks couldn&#39;t be easier</p>
			<button type="button" aria-label="Open improvements">
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
				>
					<path
						d="M11.5262 2.7597L11.4795 5.28637C11.4729 5.63304 11.6929 6.09304 11.9729 6.2997L13.6262 7.55304C14.6862 8.35304 14.5129 9.33304 13.2462 9.73304L11.0929 10.4064C10.7329 10.5197 10.3529 10.913 10.2595 11.2797L9.7462 13.2397C9.33953 14.7864 8.3262 14.9397 7.4862 13.5797L6.31286 11.6797C6.09953 11.333 5.59286 11.073 5.19286 11.093L2.9662 11.2064C1.37286 11.2864 0.919529 10.3664 1.95953 9.15304L3.27953 7.6197C3.5262 7.33304 3.63953 6.7997 3.5262 6.4397L2.8462 4.2797C2.45286 3.01304 3.15953 2.31304 4.41953 2.72637L6.3862 3.37304C6.71953 3.4797 7.21953 3.40637 7.49953 3.1997L9.55286 1.7197C10.6662 0.92637 11.5529 1.39304 11.5262 2.7597Z"
						fill="white"
					/>
					<path
						d="M14.2935 13.6464L12.2735 11.6264C12.0802 11.4331 11.7602 11.4331 11.5669 11.6264C11.3735 11.8198 11.3735 12.1398 11.5669 12.3331L13.5869 14.3531C13.6869 14.4531 13.8135 14.4998 13.9402 14.4998C14.0669 14.4998 14.1935 14.4531 14.2935 14.3531C14.4869 14.1598 14.4869 13.8398 14.2935 13.6464Z"
						fill="white"
					/>
				</svg>
				<span>Improvements</span>
			</button>
		</section>
	);
}