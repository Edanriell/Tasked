import Link from "next/link";
import type { FC } from "react";

export const UserProfile: FC = () => {
	return (
		<div className="hidden" aria-label="User profile">
			<nav aria-label="User navigation">
				<div>
					<img src="" alt="" />
					<span></span>
				</div>
				<ul>
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link href="/Settings">Settings</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
