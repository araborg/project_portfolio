export function date(days: number): number {
	const today = new Date();
	const futureDate = new Date(today);

	console.log(futureDate);

	// futureDate.setDate(futureDate.getDate() + days);

	// console.log(futureDate)

	return days;
}

// console.log(date(10));
