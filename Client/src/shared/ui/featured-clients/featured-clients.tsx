import clsx from "clsx";
import Image from "next/image";
import type { FC } from "react";

type FeaturedClient = {
	image: string;
	fullName: string;
};

type FeaturedClientsProps = {
	clients: Array<FeaturedClient>;
	label?: string;
	classes?: string;
};

export const FeaturedClients: FC<FeaturedClientsProps> = ({ clients, label, classes }) => {
	return (
		<p className={clsx("flex flex-row gap-x-[0.875rem]", classes)}>
			<span className="flex flex-row items-center shrink-0" aria-hidden="true">
				{clients.map(({ image, fullName }, index) => (
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
			{label && (
				<span className="font-(family-name:--font-barlow) font-semibold text-[0.875rem] leading-[129%] tracking-[0.01em] text-[#f8f8f8]">
					{label}
				</span>
			)}
		</p>
	);
};
