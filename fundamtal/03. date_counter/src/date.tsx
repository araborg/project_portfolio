// 2027-06-21
function date(nums: number): string {
	const currDate = new Date("2027-06-21");
	const fetchDate = currDate.setDate(currDate.getDate() + nums);

	const newDate = fetchDate === 0 ? "Today is " : "is Mon Jun 21 2027";

	console.log(fetchDate);

	return newDate.toString();
}

export default date;
