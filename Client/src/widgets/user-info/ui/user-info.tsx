import Image from "next/image";
import { FC } from "react";

export const UserInfo: FC = () => {
	return (
		<div>
			<figure>
				<Image src="/images/users/john_block.jpg" alt="Di Smolskii avatar" width={40} height={40} />
				<figcaption>
					<strong>Di Smolskii</strong>
					<small>Product Designer</small>
				</figcaption>
			</figure>
		</div>
	);
};
