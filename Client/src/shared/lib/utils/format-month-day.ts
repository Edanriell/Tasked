export const formatMonthDay = (
	isoDate: Date,
	{ locale = navigator.language, timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone } = {}
) => {
	return new Date(isoDate).toLocaleDateString(locale, {
		month: "short",
		day: "numeric",
		timeZone
	});
};
