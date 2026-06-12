import data from "./data.tsx";

function Flashcard() {
	return data.map((item) => console.log(item));
}

export default Flashcard;
