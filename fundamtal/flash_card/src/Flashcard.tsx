import data from "./data";
import { FlashcardItem } from "./FlashcardItem";

export function Flashcard() {
	return data.map(({ id, question, answer }) => (
		<FlashcardItem key={id} id={id} question={question} answer={answer} />
	));
}

// export default Flashcard;
