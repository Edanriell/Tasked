import type { StaticImageData } from "next/image";
import Image from "next/image";

import UserImage from "@public/images/users/di_smolskii.png";

// Todo
// Here fetch will be implemented, right now we have here mock data
type UserInfoResponse = {
	fullName: string;
	role: string;
	image: string | StaticImageData;
};

// Todo
// We should pass user id here to be able to fetch user data
const getUserInfo = async (): Promise<UserInfoResponse> => {
	return new Promise((resolve) => {
		return setTimeout(() => {
			return resolve({
				fullName: "Di Smolskii",
				role: "Product Designer",
				image: UserImage
			});
		}, 6000);
	});
};

export const UserInfo = async () => {
	const { fullName, role, image } = await getUserInfo();

	return (
		<figure className="flex items-center gap-x-[0.5rem] pt-[1rem] pb-[1.063rem] mx-[0.75rem]">
			<div className="relative w-[2.5rem] h-[2.5rem] bg-[#b6c3ec] rounded-[6.25rem] overflow-hidden">
				<Image
					src={image}
					className="absolute top-[-0.45rem] right-[0.1rem] object-cover"
					alt={`User ${fullName} profile picture`}
					width={50}
					height={50}
				/>
			</div>
			<figcaption className="flex flex-col gap-y-[0.25rem]">
				<strong className="font-(family-name:--font-barlow) font-bold text-[0.875rem] tracking-[0.01em] text-(--white-pallete-100) [text-shadow:0_0_1rem_var(--white-pallete-100)]">
					{fullName}
				</strong>
				<small className="font-(family-name:--font-barlow) font-medium text-[0.625rem] tracking-[0.01em] uppercase text-(--neutrals-3)">
					{role}
				</small>
			</figcaption>
		</figure>
	);
};
