export function date(days: number): string {
	const today = new Date();
	// const today = new Date("2027-06-21");

	const futureDate = new Date(today);
	futureDate.setDate(futureDate.getDate() + days);

	const returnDay = days === 0 ? "Today is" : `${days} days from today is`;

	return `${returnDay} ${futureDate.toDateString()}`;
}
