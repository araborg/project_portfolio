import data from "./data.tsx";
import FlashcardItem from "./FlashcardItem.tsx";

function Flashcard() {
	return data.map(({id, question, answer}) => 
		<ul key={id}>
			<FlashcardItem
			id={id}
			question={question}
			answer={answer}
			/>
		</ul>
}

export default Flashcard;
