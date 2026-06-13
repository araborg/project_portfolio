export function date(days: number): string {
	const today = new Date("2027-06-21");

	const futureDate = new Date(today);

	futureDate.setDate(futureDate.getDate() + days);
	console.log(futureDate);

	// console.log(futureDate);

	// futureDate.setDate(futureDate.getDate() + days);

	// console.log(futureDate)
	days === 0 ? "Today is" : `${days} days from today is}`;
	// days === 0 ? "Today is" : `${days} days from today is}`;

	// futureDate.toDateString();

	return `{days} futureDate.toDateString()`;
}

// console.log(date(10));
