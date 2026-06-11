import data from "./data";

function Flashcard() {
	return data.map((item) => {
		console.log(item);
	});
}

export default Flashcard;
