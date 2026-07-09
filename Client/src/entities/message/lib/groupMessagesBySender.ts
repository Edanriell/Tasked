type Message = {
	id: string;
	senderId: string;
	text: string;
	createdAt: string;
	attachments?: Array<{
		id: string;
		url: string;
	}>;
};

type MessageGroup = {
	senderId: string;
	messages: Message[];
};

export const groupMessagesBySender = (messages: Message[]): MessageGroup[] => {
	return messages.reduce<MessageGroup[]>((groups, message) => {
		const lastGroup = groups[groups.length - 1];

		if (lastGroup?.senderId === message.senderId) {
			lastGroup.messages.push(message);
		} else {
			groups.push({
				senderId: message.senderId,
				messages: [message]
			});
		}

		return groups;
	}, []);
};
