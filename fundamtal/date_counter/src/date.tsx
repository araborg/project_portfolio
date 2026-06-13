export function date(days: number): string {
	const today = new Date();
	const futureDate = new Date(today);

	futureDate.setDate(futureDate.getDate() + days);

	console.log(futureDate);

	// futureDate.setDate(futureDate.getDate() + days);

	// console.log(futureDate)

	return futureDate.toDateString();
}

// console.log(date(10));
