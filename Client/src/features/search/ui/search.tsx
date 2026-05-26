"use client";

import { AnimatePresence, motion } from "motion/react";
import { useDeferredValue, useEffect, useId, useState, useTransition } from "react";

import { MOTION_ICON, MotionIcon } from "@shared/ui";

type SearchResult = {
	id: number;
	title: string;
};

const searchAction = async (query: string): Promise<Array<SearchResult>> => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return [
		{ id: 1, title: `${query} Result 1` },
		{ id: 2, title: `${query} Result 2` },
		{ id: 3, title: `${query} Result 3` }
	];
};

export const Search = () => {
	const inputId = useId();

	const [query, setQuery] = useState("");
	const deferredQuery = useDeferredValue(query);

	const [results, setResults] = useState<Array<SearchResult>>([]);
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		const trimmed = deferredQuery.trim();

		if (!trimmed) return;

		let cancelled = false;

		const search = async () => {
			const data = await searchAction(trimmed);

			if (cancelled) return;

			startTransition(() => {
				setResults(data);
			});
		};

		search();

		return () => {
			cancelled = true;
		};
	}, [deferredQuery]);

	const expanded = results.length > 0 || isPending;

	const [isHovered, setIsHovered] = useState(false);

	const handleButtonHover = () => {
		setIsHovered((previousState) => !previousState);
	};

	return (
		<div style={{ width: expanded ? "327px" : "227px" }} className="relative w-[227px] h-[40px]">
			<motion.div
				layout
				transition={{
					type: "spring",
					stiffness: 320,
					damping: 30
				}}
				style={{ transformOrigin: "top left" }}
				className="absolute w-full h-full top-0 left-0 border border-[0.50px] border-solid border-(--white-pallete-10) rounded-[12px] bg-(--geek-blue-primary-opacity-150)"
				animate={{
					width: expanded ? "327px" : "227px",
					height: expanded ? "240px" : "40px"
				}}
			>
				<form role="search" onSubmit={(e) => e.preventDefault()} className="relative">
					<div className="relative" onPointerEnter={handleButtonHover} onPointerLeave={handleButtonHover}>
						<MotionIcon
							isActive={isHovered}
							className="w-[16px]! h-[16px]! absolute top-[12px] left-[16px] text-(--neutrals-3)"
							type={MOTION_ICON.Search}
						/>
						<label htmlFor={inputId} className="sr-only">
							Search
						</label>
						<input
							className="w-full rounded-[12px] pl-[40px] pt-[10px] pr-[16px] pb-[12px] font-(family-name:--font-barlow) font-normal text-[14px] leading-[129%] tracking-[0.01em] text-(--white-pallete-100) placeholder:text-(--neutrals-3)"
							id={inputId}
							type="search"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Search"
						/>
					</div>
				</form>
				<AnimatePresence initial={false}>
					{expanded && (
						<motion.div
							layout
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="border-t"
						>
							{results.length > 0 && (
								<ul className="p-2">
									{results.map((result) => (
										<motion.li
											layout
											key={result.id}
											whileHover={{ scale: 1.01 }}
											className="
											cursor-pointer
											rounded-xl
											p-3
											hover:bg-neutral-100
										"
										>
											{result.title}
										</motion.li>
									))}
								</ul>
							)}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};
