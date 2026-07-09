import {Icon, ICON} from "@shared/ui";

const MessagesPage = () => {
	return (
		<section className="basis-[69%] border-[0.50px] border-solid border-(--white-pallete-10) rounded-[20px] bg-(--geek-blue-primary-opacity-100) backdrop-blur-[32px] px-[20px] py-[20px]">
			<div className="flex h-full min-h-[420px] flex-col">
				<header className="flex shrink-0 items-center justify-between border-b-[0.50px] border-solid border-(--white-pallete-10) pb-[18px]">
					<div className="flex min-w-0 items-center gap-x-[12px]">
						<span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] border-[0.50px] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150) text-(--geek-blue-3)">
							<Icon type={ICON.Message} size={20} />
						</span>
						<div className="min-w-0">
							<h2 className="truncate font-(family-name:--font-barlow) text-[16px] font-bold leading-[125%] tracking-[0.01em] text-(--white-pallete-100)">
								Select a conversation
							</h2>
							<p className="mt-[4px] truncate font-(family-name:--font-barlow) text-[12px] font-medium leading-[133%] tracking-[0.01em] text-(--neutrals-3)">
								Choose a thread from the list to view messages.
							</p>
						</div>
					</div>
					<span className="ml-[12px] shrink-0 rounded-[8px] border-[0.50px] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-100) px-[8px] py-[6px] font-(family-name:--font-barlow) text-[12px] font-medium leading-[133%] tracking-[0.01em] text-(--neutrals-3)">
						No chat selected
					</span>
				</header>
				<div className="flex flex-1 flex-col items-center justify-center px-[24px] py-[40px] text-center">
					<div className="relative mb-[22px] flex h-[88px] w-[88px] items-center justify-center rounded-full border-[0.50px] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150) text-(--white-pallete-100) shadow-geek-blue">
						<Icon type={ICON.Message} size={34} />
						<span className="absolute right-[16px] top-[18px] h-[8px] w-[8px] rounded-full bg-(--geek-blue-4)" />
					</div>
					<h3 className="font-(family-name:--font-barlow) text-[20px] font-bold leading-[120%] tracking-[0.01em] text-(--white-pallete-100)">
						Your inbox is ready
					</h3>
					<p className="mt-[8px] max-w-[360px] font-(family-name:--font-barlow) text-[12px] font-medium leading-[150%] tracking-[0.01em] text-(--neutrals-3)">
						Pick an existing conversation to continue where the team left off.
					</p>
					<div className="mt-[28px] grid w-full max-w-[420px] gap-y-[8px]" aria-hidden="true">
						<div className="ml-auto h-[36px] w-[62%] rounded-[12px] rounded-br-[4px] border-[0.50px] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-200)" />
						<div className="mr-auto h-[36px] w-[72%] rounded-[12px] rounded-bl-[4px] border-[0.50px] border-solid border-(--white-pallete-10) bg-(--white-pallete-50)" />
						<div className="ml-auto h-[36px] w-[48%] rounded-[12px] rounded-br-[4px] border-[0.50px] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-200)" />
					</div>
				</div>
				<footer className="flex shrink-0 items-center gap-x-[10px] border-t-[0.50px] border-solid border-(--white-pallete-10) pt-[18px]">
					<div className="h-[40px] min-w-0 flex-1 truncate rounded-[12px] border-[0.50px] border-solid border-(--white-pallete-10) bg-(--geek-blue-primary-opacity-150) px-[12px] py-[11px] font-(family-name:--font-barlow) text-[12px] font-medium leading-[133%] tracking-[0.01em] text-(--neutrals-3)">
						Message composer unlocks after selecting a conversation
					</div>
					<button
						className="flex h-[40px] shrink-0 cursor-not-allowed items-center justify-center rounded-[12px] bg-(--geek-blue-7) px-[16px] font-(family-name:--font-barlow) text-[12px] font-bold leading-[133%] tracking-[0.01em] text-(--white-pallete-100) opacity-60 shadow-geek-blue"
						type="button"
						disabled
					>
						Send
					</button>
				</footer>
			</div>
		</section>
	);
};

export default MessagesPage;
