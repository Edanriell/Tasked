import Image from "next/image";

import { groupMessagesBySender } from "@entities/message";
import { ICON, Icon } from "@shared/ui";

type Attachment = {
	id: string;
	url: string;
};

type Participant = {
	id: string;
	fullName: string;
	imageUrl: string;
};

type Message = {
	id: string;
	senderId: string;
	text: string;
	createdAt: string;
	attachments?: Array<Attachment>;
};

type ConversationDetails = {
	id: string;
	participants: Array<Participant>;
	messages: Array<Message>;
};

const getConversationDetails = (conversationId: string): Promise<ConversationDetails> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id: "123",
				participants: [
					{
						id: "1",
						fullName: "Wade Warren",
						imageUrl: "/images/users/wade_warren.jpg"
					},
					{
						id: "2",
						fullName: "Di Smolski",
						imageUrl: "/images/users/di_smolskii.png"
					}
				],
				messages: [
					{
						id: "m1",
						senderId: "1",
						text: "Hi Di 👋",
						createdAt: "2025-02-18T10:15:00Z",
						attachments: []
					},
					{
						id: "m2",
						senderId: "1",
						text: "How's the work on the direction selection screen going?",
						createdAt: "2025-02-18T10:16:00Z",
						attachments: []
					},
					{
						id: "m3",
						senderId: "2",
						text: "Hi Wade! I have already created several mockups...",
						createdAt: "2025-02-18T10:17:00Z",
						attachments: []
					}
				]
			});
		}, 6000);
	});
};

const ConversationPage = async ({ params }: { params: Promise<{ conversationId: string }> }) => {
	const { conversationId } = await params;

	const conversation = await getConversationDetails(conversationId);
	const messageGroups = groupMessagesBySender(conversation.messages);

	return (
		<section className="relative flex flex-col h-full basis-[69%] border-[0.50px] border-solid border-(--white-pallete-10) rounded-[20px] bg-(--geek-blue-primary-opacity-100) backdrop-blur-[32px] overflow-hidden">
			<header className="relative flex px-[20px] py-[12px] items-center justify-between border-b-[0.50px] border-solid border-(--geek-blue-primary-opacity-50) backdrop-blur-[50px] bg-(--geek-blue-primary-opacity-100)">
				<div className="flex items-center gap-x-[12px]">
					<Image
						src={conversation.participants[0].imageUrl}
						alt=""
						width={32}
						height={32}
						className="w-[32px] h-[32px] rounded-full object-cover"
					/>
					<h4 className="font-(family-name:--font-barlow) font-bold text-[16px] leading-[125%] tracking-[0.01em] text-(--white-pallete-100)">
						{conversation.participants[0].fullName}
					</h4>
				</div>
				<button
					type="button"
					className="flex flex-row-reverse items-center cursor-pointer font-(family-name:--font-barlow) font-bold text-[14px] leading-[114%] tracking-[0.01em] text-(--white-pallete-100) px-[16px] py-[7px] gap-x-[4px] border-[0.50px] border-solid border-(--white-pallete-10) rounded-[10px] bg-(--geek-blue-primary-opacity-150)"
				>
					<span>Attach task</span>
					<Icon type={ICON.TaskSquare} size={14} />
				</button>
			</header>
			<ol className="relative z-10 flex h-full px-[24px] py-[24px] bg-[rgba(1,0,9,0.25)]">
				{messageGroups.map((group) => {
					const participant = conversation.participants.find((user) => user.id === group.senderId);
					return (
						<li key={group.senderId}>
							<article>
								<header>
									<Image
										src={participant?.imageUrl ?? ""}
										alt={participant?.fullName ?? ""}
										width={40}
										height={40}
									/>
									<strong>{participant?.fullName}</strong>
								</header>
								<ol>
									{group.messages.map((message) => (
										<li key={message.id}>
											<p>{message.text}</p>
											<time dateTime={message.createdAt}>{message.createdAt}</time>
										</li>
									))}
								</ol>
							</article>
						</li>
					);
				})}
			</ol>
			<footer className="relative flex px-[20px] py-[20px] border-t-[0.50px] border-solid border-(--white-pallete-10) backdrop-blur-[50px] bg-(--geek-blue-primary-opacity-50)">
				<form className="flex flex-col relative w-full">
					<label className="sr-only" htmlFor="message">
						Write a message
					</label>
					<div className="flex flex-col relative w-full">
						<textarea
							className="font-(family-name:--font-barlow) font-medium text-[12px] leading-[133%] tracking-[0.01em] text-(--white-pallete-100) resize-none w-full max-h-[120px] min-h-[89px] border-[0.50px] border-solid border-(--white-pallete-10) focus:border-(--geek-blue-4) focus:outline-none bg-(--geek-blue-primary-opacity-150) rounded-[10px] px-[12px] py-[12px] placeholder:text-(--neutrals-3)"
							placeholder="Write a messege..."
							id="message"
							name="message"
						/>
						<button type="submit" className="cursor-pointer absolute top-0 left-0 bg-green-600">
							<span>Send</span>
						</button>
						<button className="bg-red-600 absolute bottom-0 left-0" type="button">
							Attach file
						</button>
						<button className="bg-red-800 absolute bottom-0 left-[30px]" type="button">
							Add emoji
						</button>
					</div>
				</form>
			</footer>
		</section>
	);
};

export default ConversationPage;
