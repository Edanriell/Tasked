import Link from "next/link";
import type { FC } from "react";

import { USER_PROFILE_ITEMS } from "@widgets/user-profile/config";

export const UserProfile: FC = () => {
	return (
		<div
			className="text-(--white-pallete-100) border-(--white-pallete-20) border-solid border-[0.063rem] rounded-[2.188rem] bg-transparent py-[0.75rem] px-[1rem] cursor-pointer"
			aria-label="User profile"
		>
			<nav aria-label="User navigation">
				<div className="flex items-center gap-x-[0.5rem]">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_38027_24332)">
							<path
								d="M9.77909 2.05469C5.51872 2.05469 2.05273 5.52072 2.05273 9.78105C2.05273 12.3717 3.33441 14.6684 5.29687 16.0709V14.3639C5.29687 12.9241 6.46401 11.757 7.90373 11.757H11.6545C13.0942 11.757 14.2613 12.9242 14.2613 14.3639V16.0709C16.2239 14.6684 17.5055 12.3717 17.5055 9.78105C17.5054 5.52072 14.0395 2.05469 9.77909 2.05469ZM9.77909 10.1535C8.30415 10.1535 7.10408 8.95355 7.10408 7.47852C7.10408 6.00358 8.30407 4.80359 9.77909 4.80359C11.2541 4.80359 12.4541 6.00358 12.4541 7.47852C12.4541 8.95355 11.254 10.1535 9.77909 10.1535Z"
								fill="currentColor"
							/>
							<path
								d="M9.78025 0C4.37872 0 0 4.37872 0 9.78025C0 15.1818 4.37872 19.5605 9.78025 19.5605C15.1818 19.5605 19.5605 15.1818 19.5605 9.78025C19.5605 4.37872 15.1817 0 9.78025 0ZM9.78025 18.5001C4.97215 18.5001 1.06043 14.5883 1.06043 9.78025C1.06043 4.97215 4.97215 1.06043 9.78025 1.06043C14.5883 1.06043 18.5001 4.97215 18.5001 9.78025C18.5001 14.5883 14.5883 18.5001 9.78025 18.5001Z"
								fill="currentColor"
							/>
						</g>
						<defs>
							<clipPath id="clip0_38027_24332">
								<rect width="19.5605" height="19.5605" fill="currentColor" />
							</clipPath>
						</defs>
					</svg>
					<span className="font-(family-name:--font-barlow) font-bold text-[0.875rem] leading-[114%] tracking-[0.01em] text-(--white-pallete-100)">
						Account
					</span>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<ul className="hidden">
					{USER_PROFILE_ITEMS.map(({ href, label }) => (
						<li key={href}>
							<Link href={href}>{label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
