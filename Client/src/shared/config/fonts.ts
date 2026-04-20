import { Barlow } from "next/font/google";

const barlow = Barlow({
	variable: "--font-barlow",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"]
});

export const FONTS = {
	Barlow: barlow
} as const;
