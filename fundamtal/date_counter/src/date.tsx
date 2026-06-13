export function date(days: number): string {
	const today = new Date();
	const futureDate = new Date(today);

	futureDate.setDate(futureDate.getDate() + days);

	console.log(futureDate);

	// futureDate.setDate(futureDate.getDate() + days);

	// console.log(futureDate)
	return days === 0
		? "Today is"
		: `${days} days from today is ${futureDate.toDateString()} `;

	// return futureDate.toDateString();
}

// console.log(date(10));
