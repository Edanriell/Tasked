import { cacheLife } from "next/cache";

import { AvatarStack } from "@shared/ui";

type User = {
	imageUrl: string;
	fullName: string;
};

const getFeaturedClients = async (): Promise<Array<User>> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ imageUrl: "/images/users/jensen_ackles.jpg", fullName: "Jensen Ackles" },
				{ imageUrl: "/images/users/jared_padalecki.jpg", fullName: "Jared Padalecki" },
				{ imageUrl: "/images/users/robert_palka.jpg", fullName: "Robert Palka" },
				{ imageUrl: "/images/users/bartozs_zmarzlik.jpg", fullName: "Bartozs Zmarzlik" },
				{ imageUrl: "/images/users/rupert_grind.jpg", fullName: "Rupert Grind" },
				{ imageUrl: "/images/users/john_block.jpg", fullName: "John Block" }
			]);
		}, 6000);
	});
};

export const FeaturedClients = async () => {
	"use cache";

	cacheLife("days");

	const featuredClients = await getFeaturedClients();

	return (
		<AvatarStack
			users={featuredClients}
			max={6}
			description="Over 2568+ Designers & Creators Love Our Platform"
			className="mt-[1.5rem] mr-[5.188rem]"
		/>
	);
};
