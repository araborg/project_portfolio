function date(nums: number): string {
	const currDate = new Date("2027-06-21");

	// d impt part here is .setDate() & .getDate().
	// don't store d result in variable
	currDate.setDate(currDate.getDate() + nums);

	const newDate =
		nums === 0
			? "Today is "
			: nums < 1
				? `${nums} ${nums === -1 ? "day" : "days"} ago was`
				: `${nums} ${nums > 1 ? "days" : "day"} from today is`;

	return `${newDate} ${currDate.toDateString()}`;
}

export default date;
