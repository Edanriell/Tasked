import clsx from "clsx";
import Image from "next/image";

type FeaturedClient = {
	image: string;
	fullName: string;
};

type FeaturedClientsProps = {
	label?: string;
	classes?: string;
};

const FEATURED_CLIENTS = [
	{ image: "/images/users/jensen_ackles.jpg", fullName: "Jensen Ackles" },
	{ image: "/images/users/jared_padalecki.jpg", fullName: "Jared Padalecki" },
	{ image: "/images/users/robert_palka.jpg", fullName: "Robert Palka" },
	{ image: "/images/users/bartozs_zmarzlik.jpg", fullName: "Bartozs Zmarzlik" },
	{ image: "/images/users/rupert_grind.jpg", fullName: "Rupert Grind" },
	{ image: "/images/users/john_block.jpg", fullName: "John Block" }
] as Array<FeaturedClient>;

export const FeaturedClients = ({ label, classes }: Readonly<FeaturedClientsProps>) => {
	return (
		<p className={clsx("flex flex-row gap-x-[0.875rem]", classes)}>
			<span className="flex flex-row items-center shrink-0" aria-hidden="true">
				{FEATURED_CLIENTS.map(({ image, fullName }, index) => (
					<span
						key={index + "-" + fullName}
						className={clsx(
							"relative block w-[2.5rem] h-[2.5rem] rounded-[2.5rem] overflow-hidden shadow-[0.063rem_0.063rem_0.375rem_0_rgba(0,0,0,0.12)] shrink-0",
							index !== 0 && "-ml-[1.25rem]"
						)}
						style={{ zIndex: index }}
					>
						<Image className="object-cover" src={image} alt={fullName} width={40} height={40} />
					</span>
				))}
			</span>
			<span className="font-(family-name:--font-barlow) font-semibold text-[0.875rem] leading-[1.125rem] tracking-[0.01em] text-[#f8f8f8]">
				Over 2568+ Designers & Creators Love Our Platform
			</span>
		</p>
	);
};
