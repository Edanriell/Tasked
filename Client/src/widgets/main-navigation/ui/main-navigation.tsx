import Link from "next/link";
import { FC } from "react";
import { ROUTES } from "@shared/config";

export const MainNavigation: FC = () => {
	return (
		<nav id="dashboard-main-nav" aria-labelledby="dashboard-main-nav-title">
			<h3 id="dashboard-main-nav-title">Main</h3>
			<ul>
				<li>
					<Link href={ROUTES.Home}>
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
								d="M8 12V10"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6.71343 1.8812L2.09343 5.5812C1.57343 5.99454 1.2401 6.86787 1.35343 7.5212L2.2401 12.8279C2.4001 13.7745 3.30676 14.5412 4.26676 14.5412H11.7334C12.6868 14.5412 13.6001 13.7679 13.7601 12.8279L14.6468 7.5212C14.7534 6.86787 14.4201 5.99454 13.9068 5.5812L9.28676 1.88787C8.57343 1.31453 7.4201 1.31453 6.71343 1.8812Z"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>Home</span>
					</Link>
				</li>
				<li>
					<Link href={ROUTES.Tasks}>
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
								d="M8.24609 5.91992H11.7461"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4.25391 5.91992L4.75391 6.41992L6.25391 4.91992"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.24609 10.5869H11.7461"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4.25391 10.5869L4.75391 11.0869L6.25391 9.58691"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6.00065 14.6663H10.0007C13.334 14.6663 14.6673 13.333 14.6673 9.99967V5.99967C14.6673 2.66634 13.334 1.33301 10.0007 1.33301H6.00065C2.66732 1.33301 1.33398 2.66634 1.33398 5.99967V9.99967C1.33398 13.333 2.66732 14.6663 6.00065 14.6663Z"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>My Tasks</span>
					</Link>
				</li>
				<li>
					<Link href={ROUTES.Projects}>
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
								d="M14.4408 6.96033L13.7874 9.747C13.2274 12.1537 12.1208 13.127 10.0408 12.927C9.70744 12.9003 9.34744 12.8403 8.96077 12.747L7.84077 12.4803C5.06077 11.8203 4.20077 10.447 4.8541 7.66033L5.50744 4.867C5.64077 4.30033 5.80077 3.807 6.00077 3.40033C6.78077 1.787 8.10744 1.35366 10.3341 1.88033L11.4474 2.14033C14.2408 2.79366 15.0941 4.17366 14.4408 6.96033Z"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M10.0402 12.9271C9.62689 13.2071 9.10689 13.4404 8.47356 13.6471L7.42023 13.9937C4.77356 14.8471 3.38023 14.1337 2.52023 11.4871L1.66689 8.85372C0.813561 6.20706 1.52023 4.80706 4.16689 3.95372L5.22023 3.60706C5.49356 3.52039 5.75356 3.44706 6.00023 3.40039C5.80023 3.80706 5.64023 4.30039 5.50689 4.86706L4.85356 7.66039C4.20023 10.4471 5.06023 11.8204 7.84023 12.4804L8.96023 12.7471C9.34689 12.8404 9.70689 12.9004 10.0402 12.9271Z"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.42578 5.68652L11.6591 6.50652"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M7.77344 8.2666L9.70677 8.75994"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>Projects</span>
					</Link>
				</li>
				<li>
					<Link href={ROUTES.Messages}>
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
								d="M14.6673 6.66634V8.66634C14.6673 11.333 13.334 12.6663 10.6673 12.6663H10.334C10.1273 12.6663 9.92732 12.7663 9.80065 12.933L8.80065 14.2663C8.36065 14.853 7.64065 14.853 7.20065 14.2663L6.20065 12.933C6.09398 12.7863 5.84732 12.6663 5.66732 12.6663H5.33398C2.66732 12.6663 1.33398 11.9997 1.33398 8.66634V5.33301C1.33398 2.66634 2.66732 1.33301 5.33398 1.33301H9.33398"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeMiterlimit="10"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M13.0007 4.66634C13.9211 4.66634 14.6673 3.92015 14.6673 2.99967C14.6673 2.0792 13.9211 1.33301 13.0007 1.33301C12.0802 1.33301 11.334 2.0792 11.334 2.99967C11.334 3.92015 12.0802 4.66634 13.0007 4.66634Z"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M10.6637 7.33333H10.6696"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M7.99764 7.33333H8.00363"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5.32967 7.33333H5.33566"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>Messages</span>
					</Link>
				</li>
				<li>
					<Link href={ROUTES.Settings}>
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
								d="M2 6.07292V9.91958C2 11.3329 2 11.3329 3.33333 12.2329L7 14.3529C7.55333 14.6729 8.45333 14.6729 9 14.3529L12.6667 12.2329C14 11.3329 14 11.3329 14 9.92625V6.07292C14 4.66625 14 4.66625 12.6667 3.76625L9 1.64625C8.45333 1.32625 7.55333 1.32625 7 1.64625L3.33333 3.76625C2 4.66625 2 4.66625 2 6.07292Z"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
								stroke="#95ACCB"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>Settings</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
