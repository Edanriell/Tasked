import Image from "next/image";
import { FC } from "react";

export const UserInfo: FC = () => {
	return (
		<div>
			<figure>
				<Image
					src="/images/users/di_smolskii.png"
					className="bg-[#b6c3ec]"
					alt="Di Smolskii avatar"
					width={40}
					height={40}
				/>
				<figcaption>
					<strong>Di Smolskii</strong>
					<small>Product Designer</small>
				</figcaption>
			</figure>
		</div>
	);
};
