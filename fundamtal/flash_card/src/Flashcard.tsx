import { useState } from "react";

import data from "./data.tsx";
import FlashcardItem from "./FlashcardItem.tsx";

function Flashcard() {
	const [selectId, setSelectId] = useState<number | null>(null);

	function handleClick() {}

	return data.map(({ id, question, answer }) => (
		<ul key={id} className="cards">
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
