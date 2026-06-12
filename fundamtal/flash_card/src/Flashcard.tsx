import { useState } from "react";

import data from "./data";
import FlashcardItem from "./FlashcardItem";

function Flashcard() {
	const [selectId, setSelectId] = useState<number | null>(null);

	return data.map(({ id, question, answer }) => (
		<ul key={id}>
			<FlashcardItem
				id={id}
				question={question}
				answer={answer}
				selectId={selectId}
				setSelectId={setSelectId}
			/>
		</ul>
	));
}

export default Flashcard;
