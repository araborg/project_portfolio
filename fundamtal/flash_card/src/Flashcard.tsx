import data from "./data";
import FlashcardItem from "./FlashcardItem";

function Flashcard() {
	return data.map(({ id, question, answer }) => (
		<ul key={id}>
			<FlashcardItem
				id={id}
				question={question}
				answer={answer}
				//
			/>
		</ul>
	));
}

export default Flashcard;
