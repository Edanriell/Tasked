const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

export const getRelativeTime = (date: string | Date): string => {
	const now = Date.now();
	const timestamp = new Date(date).getTime();

	const diffSeconds = Math.floor((now - timestamp) / 1000);

	if (diffSeconds < MINUTE) {
		return "just now";
	}

	if (diffSeconds < HOUR) {
		const minutes = Math.floor(diffSeconds / MINUTE);
		return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
	}

	if (diffSeconds < DAY) {
		const hours = Math.floor(diffSeconds / HOUR);
		return `${hours} hour${hours > 1 ? "s" : ""} ago`;
	}

	if (diffSeconds < WEEK) {
		const days = Math.floor(diffSeconds / DAY);
		return `${days} day${days > 1 ? "s" : ""} ago`;
	}

	if (diffSeconds < MONTH) {
		const weeks = Math.floor(diffSeconds / WEEK);
		return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
	}

	if (diffSeconds < YEAR) {
		const months = Math.floor(diffSeconds / MONTH);
		return `${months} month${months > 1 ? "s" : ""} ago`;
	}

	const years = Math.floor(diffSeconds / YEAR);
	return `${years} year${years > 1 ? "s" : ""} ago`;
};
