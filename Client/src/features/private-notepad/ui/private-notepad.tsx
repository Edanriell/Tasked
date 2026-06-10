import { Suspense } from "react";

import { ICON, Icon } from "@shared/ui";

import { PrivateNotepadFormattingToolbar } from "./private-notepad-formatting-toolbar";
import { PrivateNotepadSkeleton } from "./private-notepad-skeleton";
import { PrivateNotepadTextarea } from "./private-notepad-textarea";

export const PrivateNotepad = () => {
	return (
		<section
			className="flex flex-col w-full h-full border-[0.50px] border-solid border-(--white-pallete-10) rounded-[20px] bg-(--geek-blue-primary-opacity-100)"
			aria-labelledby="private-notepad-title"
		>
			<header className="flex items-center justify-between mx-[16px] py-[20px] border-b-[0.50px] border-solid border-(--white-pallete-10)">
				<h2
					className="font-(family-name:--font-barlow) font-bold text-[14px] leading-[114%] tracking-[0.01em] text-(--white-pallete-100)"
					id="private-notepad-title"
				>
					Private Notepad
				</h2>
				<Icon width={15} height={15} className="text-(--neutrals-2)" type={ICON.LockedLock} />
			</header>
			<div className="m-[12px] border-[0.50px] border-solid border-(--white-pallete-10) rounded-[16px] bg-(--geek-blue-primary-opacity-100) flex flex-col flex-1">
				<Suspense fallback={<PrivateNotepadSkeleton />}>
					<PrivateNotepadTextarea />
				</Suspense>
				<PrivateNotepadFormattingToolbar />
			</div>
		</section>
	);
};
