import type { SVGProps } from "react";

export const ICON = {
	User: "User",
	Dashboard: "Dashboard",
	Settings: "Settings",
	Google: "Google",
	Home: "Home",
	Tasks: "Tasks",
	Projects: "Projects",
	CreateProject: "CreateProject",
	Messages: "Messages",
	MainSettings: "MainSettings",
	Improvements: "Improvements"
} as const;

export type IconType = (typeof ICON)[keyof typeof ICON];

type IconProps = SVGProps<SVGSVGElement> & {
	type: IconType;
	size?: number;
};

export const Icon = ({ type, size, ...props }: Readonly<IconProps>) => {
	switch (type) {
		case ICON.User:
			return (
				<svg
					width={size ?? 20}
					height={size ?? 20}
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<g clipPath="url(#user-icon-clip)">
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
						<clipPath id="user-icon-clip">
							<rect width="19.5605" height="19.5605" fill="currentColor" />
						</clipPath>
					</defs>
				</svg>
			);
		case ICON.Dashboard:
			return (
				<svg
					width={size ?? 12}
					height={size ?? 12}
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<path
						d="M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V19.9C2.5 21.4 3.14 22 4.73 22H8.77C10.36 22 11 21.4 11 19.9Z"
						fill="currentColor"
					/>
					<path
						d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z"
						fill="currentColor"
					/>
					<path
						d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z"
						fill="currentColor"
					/>
				</svg>
			);
		case ICON.Settings:
			return (
				<svg
					width={size ?? 12}
					height={size ?? 12}
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<path
						d="M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z"
						fill="currentColor"
					/>
				</svg>
			);
		case ICON.Google:
			return (
				<svg
					width={size ?? 14}
					height={size ?? 14}
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<path
						d="M13.0267 6.04667C12.9933 5.70667 12.7067 5.45333 12.3667 5.45333H7.33333C6.96667 5.45333 6.66667 5.75333 6.66667 6.11999V7.26001C6.66667 7.62668 6.96667 7.92668 7.33333 7.92668H10.34C10.2667 8.54001 9.86667 9.46667 8.98 10.0867C8.41333 10.48 7.66 10.7533 6.66667 10.7533C6.62 10.7533 6.58 10.7533 6.53333 10.7467C4.83334 10.6933 3.39334 9.55334 2.87334 7.98667C2.73334 7.56667 2.65334 7.12667 2.65334 6.66667C2.65334 6.20667 2.73334 5.75999 2.86667 5.34666C2.90667 5.22666 2.95333 5.10667 3.00667 4.98667C3.62 3.60667 4.96 2.63334 6.53333 2.58667C6.57333 2.58 6.62 2.58 6.66667 2.58C7.62 2.58 8.33333 2.89332 8.83333 3.23999C9.09333 3.41999 9.44 3.37999 9.66667 3.15999L10.5933 2.25334C10.8867 1.96667 10.86 1.47999 10.5267 1.23999C9.46667 0.45999 8.17333 0 6.66667 0C6.62 0 6.58 6.51057e-06 6.53333 0.00667318C3.98 0.0533398 1.78667 1.53334 0.713333 3.67334C0.26 4.58001 0 5.59333 0 6.66667C0 7.74 0.26 8.75333 0.713333 9.65999H0.720001C1.79333 11.8 3.98667 13.28 6.53333 13.3267C6.58 13.3333 6.62 13.3333 6.66667 13.3333C8.46667 13.3333 9.98 12.74 11.08 11.72C12.34 10.5533 13.0667 8.84667 13.0667 6.81333C13.0667 6.52667 13.0533 6.28 13.0267 6.04667Z"
						fill="currentColor"
					/>
				</svg>
			);
		case ICON.Home:
			return (
				<svg
					width={size ?? 16}
					height={size ?? 16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					{...props}
				>
					<path
						d="M8 12V10"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M6.71343 1.8812L2.09343 5.5812C1.57343 5.99454 1.2401 6.86787 1.35343 7.5212L2.2401 12.8279C2.4001 13.7745 3.30676 14.5412 4.26676 14.5412H11.7334C12.6868 14.5412 13.6001 13.7679 13.7601 12.8279L14.6468 7.5212C14.7534 6.86787 14.4201 5.99454 13.9068 5.5812L9.28676 1.88787C8.57343 1.31453 7.4201 1.31453 6.71343 1.8812Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case ICON.Tasks:
			return (
				<svg
					width={size ?? 16}
					height={size ?? 16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					{...props}
				>
					<path
						d="M8.24609 5.91992H11.7461"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M4.25391 5.91992L4.75391 6.41992L6.25391 4.91992"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M8.24609 10.5869H11.7461"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M4.25391 10.5869L4.75391 11.0869L6.25391 9.58691"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M6.00065 14.6663H10.0007C13.334 14.6663 14.6673 13.333 14.6673 9.99967V5.99967C14.6673 2.66634 13.334 1.33301 10.0007 1.33301H6.00065C2.66732 1.33301 1.33398 2.66634 1.33398 5.99967V9.99967C1.33398 13.333 2.66732 14.6663 6.00065 14.6663Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case ICON.Projects:
			return (
				<svg
					width={size ?? 16}
					height={size ?? 16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					{...props}
				>
					<path
						d="M14.4408 6.96033L13.7874 9.747C13.2274 12.1537 12.1208 13.127 10.0408 12.927C9.70744 12.9003 9.34744 12.8403 8.96077 12.747L7.84077 12.4803C5.06077 11.8203 4.20077 10.447 4.8541 7.66033L5.50744 4.867C5.64077 4.30033 5.80077 3.807 6.00077 3.40033C6.78077 1.787 8.10744 1.35366 10.3341 1.88033L11.4474 2.14033C14.2408 2.79366 15.0941 4.17366 14.4408 6.96033Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M10.0402 12.9271C9.62689 13.2071 9.10689 13.4404 8.47356 13.6471L7.42023 13.9937C4.77356 14.8471 3.38023 14.1337 2.52023 11.4871L1.66689 8.85372C0.813561 6.20706 1.52023 4.80706 4.16689 3.95372L5.22023 3.60706C5.49356 3.52039 5.75356 3.44706 6.00023 3.40039C5.80023 3.80706 5.64023 4.30039 5.50689 4.86706L4.85356 7.66039C4.20023 10.4471 5.06023 11.8204 7.84023 12.4804L8.96023 12.7471C9.34689 12.8404 9.70689 12.9004 10.0402 12.9271Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M8.42578 5.68652L11.6591 6.50652"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.77344 8.2666L9.70677 8.75994"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case ICON.Messages:
			return (
				<svg
					width={size ?? 16}
					height={size ?? 16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					{...props}
				>
					<path
						d="M14.6673 6.66634V8.66634C14.6673 11.333 13.334 12.6663 10.6673 12.6663H10.334C10.1273 12.6663 9.92732 12.7663 9.80065 12.933L8.80065 14.2663C8.36065 14.853 7.64065 14.853 7.20065 14.2663L6.20065 12.933C6.09398 12.7863 5.84732 12.6663 5.66732 12.6663H5.33398C2.66732 12.6663 1.33398 11.9997 1.33398 8.66634V5.33301C1.33398 2.66634 2.66732 1.33301 5.33398 1.33301H9.33398"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M13.0007 4.66634C13.9211 4.66634 14.6673 3.92015 14.6673 2.99967C14.6673 2.0792 13.9211 1.33301 13.0007 1.33301C12.0802 1.33301 11.334 2.0792 11.334 2.99967C11.334 3.92015 12.0802 4.66634 13.0007 4.66634Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M10.6637 7.33333H10.6696"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.99764 7.33333H8.00363"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M5.32967 7.33333H5.33566"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case ICON.MainSettings:
			return (
				<svg
					width={size ?? 16}
					height={size ?? 16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					{...props}
				>
					<path
						d="M2 6.07292V9.91958C2 11.3329 2 11.3329 3.33333 12.2329L7 14.3529C7.55333 14.6729 8.45333 14.6729 9 14.3529L12.6667 12.2329C14 11.3329 14 11.3329 14 9.92625V6.07292C14 4.66625 14 4.66625 12.6667 3.76625L9 1.64625C8.45333 1.32625 7.55333 1.32625 7 1.64625L3.33333 3.76625C2 4.66625 2 4.66625 2 6.07292Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case ICON.CreateProject:
			return (
				<svg
					width={size ?? 16}
					height={size ?? 16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					{...props}
				>
					<path
						d="M8.00065 1.33301C4.32732 1.33301 1.33398 4.32634 1.33398 7.99967C1.33398 11.673 4.32732 14.6663 8.00065 14.6663C11.674 14.6663 14.6673 11.673 14.6673 7.99967C14.6673 4.32634 11.674 1.33301 8.00065 1.33301ZM10.6673 8.49967H8.50065V10.6663C8.50065 10.9397 8.27398 11.1663 8.00065 11.1663C7.72732 11.1663 7.50065 10.9397 7.50065 10.6663V8.49967H5.33398C5.06065 8.49967 4.83398 8.27301 4.83398 7.99967C4.83398 7.72634 5.06065 7.49967 5.33398 7.49967H7.50065V5.33301C7.50065 5.05967 7.72732 4.83301 8.00065 4.83301C8.27398 4.83301 8.50065 5.05967 8.50065 5.33301V7.49967H10.6673C10.9407 7.49967 11.1673 7.72634 11.1673 7.99967C11.1673 8.27301 10.9407 8.49967 10.6673 8.49967Z"
						fill="currentColor"
					/>
				</svg>
			);
		case ICON.Improvements:
			return (
				<svg
					width={size ?? 16}
					height={size ?? 16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					{...props}
				>
					<path
						d="M11.5262 2.7597L11.4795 5.28637C11.4729 5.63304 11.6929 6.09304 11.9729 6.2997L13.6262 7.55304C14.6862 8.35304 14.5129 9.33304 13.2462 9.73304L11.0929 10.4064C10.7329 10.5197 10.3529 10.913 10.2595 11.2797L9.7462 13.2397C9.33953 14.7864 8.3262 14.9397 7.4862 13.5797L6.31286 11.6797C6.09953 11.333 5.59286 11.073 5.19286 11.093L2.9662 11.2064C1.37286 11.2864 0.919529 10.3664 1.95953 9.15304L3.27953 7.6197C3.5262 7.33304 3.63953 6.7997 3.5262 6.4397L2.8462 4.2797C2.45286 3.01304 3.15953 2.31304 4.41953 2.72637L6.3862 3.37304C6.71953 3.4797 7.21953 3.40637 7.49953 3.1997L9.55286 1.7197C10.6662 0.92637 11.5529 1.39304 11.5262 2.7597Z"
						fill="currentColor"
					/>
					<path
						d="M14.2935 13.6464L12.2735 11.6264C12.0802 11.4331 11.7602 11.4331 11.5669 11.6264C11.3735 11.8198 11.3735 12.1398 11.5669 12.3331L13.5869 14.3531C13.6869 14.4531 13.8135 14.4998 13.9402 14.4998C14.0669 14.4998 14.1935 14.4531 14.2935 14.3531C14.4869 14.1598 14.4869 13.8398 14.2935 13.6464Z"
						fill="currentColor"
					/>
				</svg>
			);
	}
};
