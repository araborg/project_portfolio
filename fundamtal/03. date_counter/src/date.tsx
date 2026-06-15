// 2027-06-21
function date(nums: number): string {
	const currDate = new Date("2027-06-21");
	currDate.setDate(currDate.getDate() + nums);

	const newDate =
		nums === 0
			? "Today is "
			: `${nums} ${nums > 1 ? "days" : "day"} from today`;

	return `${newDate} ${currDate.toDateString()}`;
}

export default date;
