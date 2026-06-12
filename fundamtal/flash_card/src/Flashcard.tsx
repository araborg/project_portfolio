import { useState } from "react";

import data from "./data";
import FlashcardItem from "./FlashcardItem";

function Flashcard() {
	const [selectId, setSelectId] = useState<number | null>(null);

	function handleClick(id: number | null) {
		console.log(id);

		setSelectId(id !== selectId ? id : null);

		console.log(selectId);
	}

	return data.map(({ id, question, answer }) => (
		<ul key={id}>
			<FlashcardItem
				id={id}
				question={question}
				answer={answer}
				selectId={selectId}
				handleClick={handleClick}
			/>
		</ul>
	));
}

export default Flashcard;
