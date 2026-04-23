import Image from "next/image";
import type { FC } from "react";

const FEATURED_CLIENTS = [
	{
		image: "/images/users/jensen_ackles.jpg",
		fullName: "Jensen Ackles"
	},
	{
		image: "/images/users/jared_padalecki.jpg",
		fullName: "Jared Padalecki"
	},
	{
		image: "/images/users/robert_palka.jpg",
		fullName: "Robert Palka"
	},
	{
		image: "/images/users/bartozs_zmarzlik.jpg",
		fullName: "Bartozs Zmarzlik"
	},
	{
		image: "/images/users/rupert_grind.jpg",
		fullName: "Rupert Grind"
	},
	{
		image: "/images/users/john_block.jpg",
		fullName: "John Block"
	}
];

export const FeaturedClients: FC = () => {
	return (
		<p className="flex flex-row gap-x-[0.875rem]">
			<span className="flex flex-row items-center shrink-0" aria-hidden="true">
				{FEATURED_CLIENTS.map(({ image, fullName }, index) => (
					<Image
						className="rounded-[2.5rem] shadow-[0.063rem_0.063rem_0.375rem_0_rgba(0,0,0,0.12)] shrink-0"
						style={{ zIndex: index, marginLeft: index === 0 ? 0 : -20, objectFit: "cover" }}
						key={index + "-" + fullName}
						src={image}
						alt={fullName}
						width={40}
						height={40}
					/>
				))}
			</span>
			<span className="font-(family-name:--font-barlow) font-semibold text-[0.875rem] leading-[129%] tracking-[0.01em] text-[#f8f8f8]">
				Over 2568+ Designers &amp; Creators Love Our Platform
			</span>
		</p>
	);
};
