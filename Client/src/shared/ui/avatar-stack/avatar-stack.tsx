import clsx from "clsx";
import Image from "next/image";

type User = {
	imageUrl: string;
	fullName: string;
};

export const AvatarStackVariants = {
	Compact: "compact",
	Extended: "extended"
} as const;

export type AvatarStackVariant = (typeof AvatarStackVariants)[keyof typeof AvatarStackVariants];

type AvatarStackProps = {
	users: Array<User>;
	description?: string;
	max?: number;
	className?: string;
	variant?: AvatarStackVariant;
};

export const AvatarStack = ({
	users,
	description,
	max,
	className,
	variant = AvatarStackVariants.Compact
}: Readonly<AvatarStackProps>) => {
	const visibleUsers = max ? users.slice(0, max) : users;
	const remainingUsers = max ? Math.max(users.length - max, 0) : 0;

	switch (variant) {
		case AvatarStackVariants.Compact:
			return (
				<p className={clsx("flex flex-row gap-x-[0.875rem]", className)}>
					<span className="flex flex-row items-center shrink-0" aria-hidden="true">
						{visibleUsers.map(({ imageUrl, fullName }, index) => (
							<span
								key={index + "-" + fullName}
								className={clsx(
									"relative block w-[2.5rem] h-[2.5rem] rounded-[2.5rem] overflow-hidden shadow-[0.063rem_0.063rem_0.375rem_0_rgba(0,0,0,0.12)] shrink-0",
									index !== 0 && "-ml-[1.25rem]"
								)}
								style={{ zIndex: index }}
							>
								<Image className="object-cover" src={imageUrl} alt={fullName} width={40} height={40} />
							</span>
						))}
						{remainingUsers > 0 && (
							<span className="font-(family-name:--font-barlow) font-semibold leading-[1.125rem] tracking-[0.01em] text-(--desert-storm)">
								+{remainingUsers}
							</span>
						)}
					</span>
					{description && (
						<span className="font-(family-name:--font-barlow) font-semibold text-[0.875rem] leading-[1.125rem] tracking-[0.01em] text-(--desert-storm)">
							{description}
						</span>
					)}
				</p>
			);
		case AvatarStackVariants.Extended:
			return (
				<p className={clsx("flex flex-row gap-x-[0.875rem]", className)}>
					<span className="flex flex-row items-center shrink-0" aria-hidden="true">
						{visibleUsers.map(({ imageUrl, fullName }, index) => (
							<span
								key={index + "-" + fullName}
								className={clsx(
									"relative block w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden border border-solid border-(--black-pearl) shrink-0",
									index !== 0 && "-ml-[0.25rem]"
								)}
								style={{ zIndex: index }}
							>
								<Image className="object-cover" src={imageUrl} alt={fullName} width={24} height={24} />
							</span>
						))}
						{remainingUsers > 0 && (
							<span className="font-(family-name:--font-barlow) font-semibold leading-[1.125rem] tracking-[0.01em] text-(--desert-storm)">
								+{remainingUsers}
							</span>
						)}
					</span>
					{description && (
						<span className="font-(family-name:--font-barlow) font-semibold text-[0.875rem] leading-[1.125rem] tracking-[0.01em] text-(--desert-storm)">
							{description}
						</span>
					)}
				</p>
			);
	}
};
