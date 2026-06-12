import { useState } from "react";

interface FlashcardItemProps {
	id: number;
	question: string;
	answer: string;
}

function FlashcardItem({ id, question, answer }: FlashcardItemProps) {
	const [selectId, setSelectId] = useState(null);

	// function handleClick(item: number) {
	// 	console.log(item);
	// }

	return (
		<div className="card" onClick={() => setSelectId(id)}>
			<p>{question}</p>

			<p>{selectId === id ? answer : question}</p>
		</div>
	);
}

export default FlashcardItem;
