import Link from "next/link";
import type { FC } from "react";

export const MainNavigation: FC = () => {
	return (
		<nav aria-label="Main navigation">
			<ul>
				<li>
					<Link href="/overview">Overview</Link>
				</li>
				<li>
					<Link href="/features">Features</Link>
				</li>
				<li>
					<Link href="/pricing">Pricing</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};
